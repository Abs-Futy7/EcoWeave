import os
import logging
from typing import Optional

logger = logging.getLogger(__name__)

model = None
model_loaded = False
model_version = "none"

MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "models", "ecoweave_model.pkl")


def load_model():
    global model, model_loaded, model_version
    try:
        import joblib
        if os.path.exists(MODEL_PATH):
            model = joblib.load(MODEL_PATH)
            model_loaded = True
            model_version = "1.0.0"
            logger.info("ML model loaded from %s", MODEL_PATH)
        else:
            model_loaded = False
            logger.warning("Model file not found at %s, using rule-based fallback", MODEL_PATH)
    except Exception as e:
        model_loaded = False
        logger.error("Failed to load ML model: %s", str(e))


def _rule_based_score(batch: dict) -> dict:
    score = 10
    flags = []

    production = batch.get("production_volume_kg")
    chemical = batch.get("chemical_usage_kg")
    etp = batch.get("etp_runtime_min")
    electricity = batch.get("electricity_kwh")
    invoice = batch.get("chemical_invoice_bdt")
    shift = batch.get("shift_name", "")

    if production is None:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "missing_field", "message": "Missing production volume", "severity": "high"})
    if chemical is None:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "missing_field", "message": "Missing chemical usage data", "severity": "high"})
    if etp is None:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "missing_field", "message": "Missing ETP runtime data", "severity": "high"})
    if electricity is None:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "missing_field", "message": "Missing electricity consumption data", "severity": "medium"})

    if production is not None and production <= 0:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "invalid_value", "message": "Invalid production volume (must be > 0)", "severity": "high"})

    if etp is not None and production is not None and etp == 0 and production > 700:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "probable_bypass", "message": "High production volume with zero ETP runtime - probable bypass", "severity": "high"})

    if electricity is not None and production is not None and production > 0 and electricity < production * 0.12:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "power_anomaly", "message": "Electricity consumption unusually low for production volume", "severity": "high"})

    if chemical is not None and etp is not None and chemical > 60 and etp < 30:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "treatment_inconsistency", "message": "High chemical usage with insufficient treatment time", "severity": "high"})

    if invoice is not None and chemical is not None and chemical > 0:
        expected_cost_per_kg = 800
        expected_invoice = chemical * expected_cost_per_kg
        deviation = abs(invoice - expected_invoice) / expected_invoice if expected_invoice > 0 else 0
        if deviation > 0.4:
            flags.append({"batch_id": batch.get("batch_id", ""), "type": "invoice_mismatch", "message": f"Chemical invoice doesn't match usage (deviation: {deviation:.0%})", "severity": "medium"})

    has_low_etp = etp is not None and etp < 20
    has_high_production = production is not None and production > 600
    has_low_power = electricity is not None and production is not None and electricity < production * 0.15
    if has_low_etp and has_high_production and has_low_power:
        flags.append({"batch_id": batch.get("batch_id", ""), "type": "triangulation_mismatch", "message": "Multiple indicators suggest treatment bypass or data manipulation", "severity": "high"})

    if production is not None and production > 700:
        score += 20
    if chemical is not None and chemical > 60:
        score += 20
    if etp is not None and (etp == 0 or etp < 20):
        score += 25

    for flag in flags:
        ft = flag["type"]
        if ft in ("probable_bypass", "triangulation_mismatch"):
            score += 25
        elif ft in ("power_anomaly", "treatment_inconsistency"):
            score += 15
        elif ft == "invoice_mismatch":
            score += 10
        elif ft == "missing_field":
            score += 12 if flag["severity"] == "high" else 5

    if shift and "night" in shift.lower():
        score += 10

    score = min(100, score)
    bypass = score >= 75

    base_fine = 200000
    inspection_risk = score * 2500
    shutdown_risk = 150000 if any(f["type"] == "probable_bypass" for f in flags) else 0
    export_risk = 200000 if score >= 80 else 50000
    estimated_loss = round(base_fine + inspection_risk + shutdown_risk + export_risk)

    return {
        "risk_score": score,
        "bypass_prediction": bypass,
        "estimated_loss_bdt": estimated_loss,
        "flags": flags,
    }


def _ml_based_score(batch: dict) -> dict:
    import numpy as np

    shift_name = batch.get("shift_name", "")
    shift_encoded = 1 if shift_name and "night" in shift_name.lower() else 0

    features = np.array([[
        batch.get("production_volume_kg") or 0,
        batch.get("chemical_usage_kg") or 0,
        batch.get("etp_runtime_min") or 0,
        batch.get("electricity_kwh") or 0,
        batch.get("chemical_invoice_bdt") or 0,
        batch.get("etp_cost_bdt") or 0,
        shift_encoded,
    ]])

    try:
        prediction = model.predict(features)
        risk_score = float(prediction[0][0]) if hasattr(prediction[0], '__len__') else float(prediction[0])
        risk_score = max(0, min(100, risk_score))

        bypass_prob = 0.0
        if hasattr(model, 'predict_proba'):
            proba = model.predict_proba(features)
            bypass_prob = float(proba[0][1]) if len(proba[0]) > 1 else float(proba[0][0])
        else:
            bypass_prob = risk_score / 100.0

        bypass = bypass_prob >= 0.5

        fallback = _rule_based_score(batch)
        flags = fallback["flags"]

        base_fine = 200000
        inspection_risk = risk_score * 2500
        shutdown_risk = 150000 if bypass else 0
        export_risk = 200000 if risk_score >= 80 else 50000
        estimated_loss = round(base_fine + inspection_risk + shutdown_risk + export_risk)

        return {
            "risk_score": risk_score,
            "bypass_prediction": bypass,
            "estimated_loss_bdt": estimated_loss,
            "flags": flags,
        }
    except Exception as e:
        logger.error("ML prediction failed, falling back to rules: %s", str(e))
        return _rule_based_score(batch)


def predict_batch(batch_data: dict) -> dict:
    if model_loaded and model is not None:
        return _ml_based_score(batch_data)
    return _rule_based_score(batch_data)


def generate_recommendation(flags: list, risk_score: float) -> str:
    if any(f["type"] == "probable_bypass" for f in flags):
        return "Critical: Run ETP during this batch and verify operation log. Evidence suggests treatment bypass."
    if any(f["type"] == "triangulation_mismatch" for f in flags):
        return "Run full diagnostic check. Multiple data points indicate potential manipulation."
    if any(f["type"] == "power_anomaly" for f in flags):
        return "Check power meter reading and confirm ETP pump status."
    if any(f["type"] == "treatment_inconsistency" for f in flags):
        return "Split batch or reduce chemical load; re-check treatment runtime."
    if risk_score >= 85:
        return "High-risk batch: Increase monitoring and verify all treatment equipment is operational."
    return "Review batch data and verify compliance measures."
