'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { BatchRecord, ValidationFlag, Alert, ScoredBatch } from '@/lib/types';
import { validateBatches, scoreBatches, generateAlerts } from '@/lib/risk';
import ValidationPanel from './ValidationPanel';
import AlertsPanel from './AlertsPanel';
import AnalysisCard from './AnalysisCard';
import TrendChart from './TrendChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import Button from '@/components/ui/Button';
import { Upload, AlertTriangle, TrendingUp, Activity, Database, RotateCcw } from 'lucide-react';
import Topbar from '../Topbar';

const STORAGE_KEY = 'ecoweave_dashboard_data';
const ALERTS_STORAGE_KEY = 'ecoweave_dashboard_alerts';

export default function DashboardClient() {
  const router = useRouter();
  const [batches, setBatches] = useState<BatchRecord[]>([]);
  const [flags, setFlags] = useState<ValidationFlag[]>([]);
  const [scoredBatches, setScoredBatches] = useState<ScoredBatch[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const storedAlerts = localStorage.getItem(ALERTS_STORAGE_KEY);
    
    if (stored) {
      try {
        const data = JSON.parse(stored);
        processBatches(data.batches);
        
        if (storedAlerts) {
          try {
            const alertsData = JSON.parse(storedAlerts);
            setAlerts(alertsData);
          } catch (e) {
            console.error('Failed to parse stored alerts:', e);
          }
        }
      } catch (e) {
        console.error('Failed to parse stored data:', e);
      }
    }
    
    setIsLoaded(true);
  }, []);

  // Persist to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded && batches.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ batches }));
    }
  }, [batches, isLoaded]);

  useEffect(() => {
    if (isLoaded && alerts.length > 0) {
      localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(alerts));
    }
  }, [alerts, isLoaded]);

  const processBatches = (newBatches: BatchRecord[]) => {
    setBatches(newBatches);
    const newFlags = validateBatches(newBatches);
    setFlags(newFlags);
    const scored = scoreBatches(newBatches, newFlags);
    setScoredBatches(scored);
    
    // Generate new alerts, preserving status of existing alerts for same batch_id
    const newAlerts = generateAlerts(newBatches, newFlags);
    
    setAlerts(prevAlerts => {
      const statusMap = new Map(
        prevAlerts.map(a => [a.batch_id, a.status])
      );
      
      return newAlerts.map(alert => ({
        ...alert,
        status: statusMap.get(alert.batch_id) || alert.status,
      }));
    });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(ALERTS_STORAGE_KEY);
      setBatches([]);
      setFlags([]);
      setScoredBatches([]);
      setAlerts([]);
    }
  };

  const handleAlertStatusChange = (alertId: string, newStatus: Alert['status']) => {
    setAlerts(prev =>
      prev.map(alert =>
        alert.id === alertId ? { ...alert, status: newStatus } : alert
      )
    );
  };

  // Calculate statistics for charts
  const avgRiskScore = scoredBatches.length > 0
    ? Math.round(scoredBatches.reduce((sum, b) => sum + b.risk_score, 0) / scoredBatches.length)
    : 0;
  
  const highRiskBatches = scoredBatches.filter(b => b.risk_score >= 75).length;
  const totalAnomalies = flags.length;
  const dataCompleteness = scoredBatches.length > 0
    ? Math.round((scoredBatches.filter(b => 
        b.production_volume_kg !== null && 
        b.chemical_usage_kg !== null && 
        b.etp_runtime_min !== null
      ).length / scoredBatches.length) * 100)
    : 0;

  // Trend data (mock monthly data)
  const trendData = batches.length > 0 ? [
    { label: 'Jan', value: 78 },
    { label: 'Feb', value: 65 },
    { label: 'Mar', value: 72 },
    { label: 'Apr', value: 58 },
    { label: 'May', value: 45 },
    { label: 'Jun', value: 52 },
    { label: 'Jul', value: 68 },
    { label: 'Aug', value: avgRiskScore },
  ] : [];

  // Type distribution data
  const typeData = batches.length > 0 ? [
    { label: 'Probable Bypass', value: flags.filter(f => f.type === 'probable_bypass').length, color: '#dc2626' },
    { label: 'Missing Fields', value: flags.filter(f => f.type === 'missing_field').length, color: '#ea580c' },
    { label: 'Triangulation', value: flags.filter(f => f.type === 'triangulation_mismatch').length, color: '#f59e0b' },
    { label: 'Invoice Mismatch', value: flags.filter(f => f.type === 'invoice_mismatch').length, color: '#14b8a6' },
    { label: 'Power Anomaly', value: flags.filter(f => f.type === 'power_anomaly').length, color: '#10b981' },
  ].filter(d => d.value > 0) : [];

  // Radar data for compliance metrics
  const radarData = batches.length > 0 ? [
    { label: 'Data Quality', value: dataCompleteness },
    { label: 'Compliance', value: Math.max(0, 100 - avgRiskScore) },
    { label: 'Coverage', value: 85 },
    { label: 'Validation', value: Math.max(0, 100 - (totalAnomalies / batches.length) * 50) },
    { label: 'Monitoring', value: 92 },
  ] : [];

  return (
    <div className="min-h-full bg-background p-4">
      <Topbar/>
      <div className="min-h-full bg-[#F7F7F7] rounded-2xl p-4 mt-4">
      {/* Header with actions */}
      <div className="px-6 py-4 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-medium tracking-tight">Risk Analysis Dashboard</h1>
            <p className="text-md text-foreground/60 mt-1">
              Real-time compliance monitoring and risk detection for textile manufacturing.
            </p>
            
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" className="rounded-full bg-gradient-to-b from-[#004737] to-green-700 hover:from-green-500 hover:to-green-700 text-white" onClick={() => router.push('/data-upload')}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Data
            </Button>
            {batches.length > 0 && (
              <Button variant="outline" className='rounded-full' onClick={handleReset}>
                Reset Demo
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">

        {batches.length > 0 ? (
          <>
            {/* Analysis Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnalysisCard
                title="Average Risk Score"
                value={avgRiskScore}
                percentage={avgRiskScore}
                color={avgRiskScore >= 75 ? 'red' : avgRiskScore >= 50 ? 'orange' : 'green'}
              />
              <AnalysisCard
                title="High Risk Batches"
                value={highRiskBatches}
                percentage={(highRiskBatches / batches.length) * 100}
                color={highRiskBatches > 0 ? 'red' : 'green'}
              />
              <AnalysisCard
                title="Total Anomalies"
                value={totalAnomalies}
                percentage={Math.min(100, (totalAnomalies / batches.length) * 20)}
                color={totalAnomalies > 10 ? 'orange' : 'blue'}
              />
              <AnalysisCard
                title="Data Completeness"
                value={`${dataCompleteness}%`}
                percentage={dataCompleteness}
                color={dataCompleteness >= 80 ? 'green' : 'orange'}
              />
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <TrendChart
                data={trendData}
                title="Risk Score Trend"
                color={avgRiskScore >= 75 ? 'red' : avgRiskScore >= 50 ? 'orange' : 'blue'}
              />
              <BarChart
                data={typeData}
                title="Anomaly Distribution"
              />
            </div>

            {/* Charts Row 2 - Radar and Validation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="lg:col-span-1">
                <RadarChart
                  data={radarData}
                  title="Compliance Metrics"
                  color="#10b981"
                />
              </div>
              
              <div className="lg:col-span-2">
                <ValidationPanel
                  flags={flags}
                  totalBatches={batches.length}
                />
              </div>
            </div>

            {/* Alerts Section */}
            <AlertsPanel
              alerts={alerts}
              onStatusChange={handleAlertStatusChange}
            />
          </>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center shadow-sm/3">
            <Database className="w-16 h-16 mx-auto mb-4 text-foreground/30" />
            <h3 className="text-xl font-semibold mb-2">No Data Available</h3>
            <p className="text-foreground/60 mb-6">
              Upload your CSV file or load sample data to see visualizations, risk scores, and alerts.
            </p>
            <Button variant="primary" className="rounded-full bg-gradient-to-b from-[#004737] to-green-700 hover:from-green-500 hover:to-green-700 text-white" onClick={() => router.push('/data-upload')}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Data
            </Button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}