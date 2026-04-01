import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.csv_upload.route.csv_upload import router as csv_upload_router
from src.auth.route import router as auth_router
from src.batch.route import router as batch_router
from src.ml.route import router as ml_router
from src.alerts.route import router as alerts_router
from src.reports.route import router as reports_router
from src.settings.route import router as settings_router
from src.database import engine, Base
from src.ml.predictor import load_model


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    load_model()
    yield


app = FastAPI(
    title="EcoWeave API",
    version="1.0.0",
    lifespan=lifespan,
)


ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
# Add your Vercel production URL here once you know it, e.g.:
# "https://ecoweave.vercel.app"
# You can also set it via an env var: FRONTEND_URL=https://...
_frontend_url = os.getenv("FRONTEND_URL")
if _frontend_url:
    ALLOWED_ORIGINS.append(_frontend_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_origin_regex=r"https://.*\.vercel\.app",  # allow all Vercel preview URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(csv_upload_router)
app.include_router(batch_router)
app.include_router(ml_router)
app.include_router(alerts_router)
app.include_router(reports_router)
app.include_router(settings_router)

@app.get('/')
async def root():
    return {
        "message": "EcoWeave Backend is working",
        "version": "1.0.0"
    }
