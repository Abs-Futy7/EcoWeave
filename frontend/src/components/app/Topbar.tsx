'use client';

import { Upload, RotateCcw } from 'lucide-react';
import Button from '@/components/ui/Button';

interface TopbarProps {
  onUploadClick?: () => void;
  onResetClick?: () => void;
}

export default function Topbar({ onUploadClick, onResetClick }: TopbarProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-bold">EcoWeave Dashboard</h1>
        <p className="text-xs text-foreground/60">
          Real-time compliance monitoring and risk detection
        </p>
      </div>

      <div className="flex items-center gap-3">
        {onUploadClick && (
          <Button
            variant="outline"
            onClick={onUploadClick}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload Data
          </Button>
        )}
        
        {onResetClick && (
          <Button
            variant="outline"
            onClick={onResetClick}
            className="flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Demo
          </Button>
        )}
      </div>
    </header>
  );
}
