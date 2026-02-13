'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UploadCsvCard from '@/components/app/dashboard/UploadCsvCard';
import DataPreviewTable from '@/components/app/dashboard/DataPreviewTable';
import { parseCsvToBatches, validateBatches, scoreBatches, generateAlerts } from '@/lib/risk';
import { seedBatches } from '@/lib/mock';
import type { BatchRecord, ValidationFlag, ScoredBatch, Alert } from '@/lib/types';
import Button from '@/components/ui/Button';
import { Trash2, Save, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'ecoweave_dashboard_data';
const ALERTS_STORAGE_KEY = 'ecoweave_dashboard_alerts';

export default function DataUploadClient() {
  const router = useRouter();
  const [batches, setBatches] = useState<BatchRecord[]>([]);
  const [flags, setFlags] = useState<ValidationFlag[]>([]);
  const [scoredBatches, setScoredBatches] = useState<ScoredBatch[]>([]);
  const [hasData, setHasData] = useState(false);

  // Load existing data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.batches && data.batches.length > 0) {
          processBatches(data.batches);
          setHasData(true);
        }
      } catch (e) {
        console.error('Failed to parse stored data:', e);
      }
    }
  }, []);

  const processBatches = (data: BatchRecord[]) => {
    setBatches(data);
    const validationFlags = validateBatches(data);
    setFlags(validationFlags);

    const scored = scoreBatches(data, validationFlags);
    setScoredBatches(scored);

    // Generate alerts and store
    const alerts = generateAlerts(data, validationFlags);
    localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(alerts));
  };

  const handleFileUpload = (csvText: string) => {
    const parsed = parseCsvToBatches(csvText);
    processBatches(parsed);
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ batches: parsed }));
    setHasData(true);
  };

  const handleLoadSample = () => {
    processBatches(seedBatches);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ batches: seedBatches }));
    setHasData(true);
  };

  const handleReset = () => {
    setBatches([]);
    setFlags([]);
    setScoredBatches([]);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ALERTS_STORAGE_KEY);
    setHasData(false);
  };

  const handleViewDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="h-full bg-background">
      {/* Header with actions */}
      <div className="bg-card border-b border-border px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Data Upload</h1>
            <p className="text-sm text-foreground/60 mt-1">Upload CSV data or load sample batches</p>
          </div>
          <div className="flex items-center gap-3">
            {hasData && (
              <>
                <Button variant="outline" onClick={handleReset}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Data
                </Button>
                <Button variant="primary" onClick={handleViewDashboard}>
                  View Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="p-6 space-y-6">
        <UploadCsvCard 
          onFileUpload={handleFileUpload}
          onLoadSample={handleLoadSample}
        />

        {/* Data Preview */}
        {batches.length > 0 && (
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Data Preview</h2>
                <p className="text-sm text-foreground/60 mt-1">
                  {batches.length} batch{batches.length !== 1 ? 'es' : ''} loaded • {flags.length} validation flag{flags.length !== 1 ? 's' : ''} detected
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Save className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">Auto-saved</span>
              </div>
            </div>
            
            <DataPreviewTable batches={scoredBatches} />
          </div>
        )}
      </div>
    </div>
  );
}
