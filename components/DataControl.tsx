
'use client';

import React, { useRef } from 'react';
import Papa from 'papaparse';
import { Button } from '@/components/ui/button';
import { Download, Upload, FileJson } from 'lucide-react';
import { useLang } from '@/components/Providers';
import { toast } from '@/hooks/use-toast';

interface DataControlProps {
  storageKey: string;
  type: 'object' | 'array';
}

export function DataControl({ storageKey, type }: DataControlProps) {
  const { t } = useLang();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const exportData = () => {
    const data = localStorage.getItem(storageKey);
    if (!data) {
      toast({ title: "No data found", variant: "destructive" });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const csv = Papa.unparse(type === 'array' ? jsonData : [jsonData]);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `versokit-${storageKey}-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      toast({ title: "Export failed", variant: "destructive" });
    }
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        try {
          let dataToSave;
          if (type === 'array') {
            dataToSave = results.data;
          } else {
            dataToSave = results.data[0];
          }
          
          localStorage.setItem(storageKey, JSON.stringify(dataToSave));
          toast({ title: "Import successful" });
          window.location.reload();
        } catch (e) {
          toast({ title: "Import failed: Invalid format", variant: "destructive" });
        }
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button variant="outline" size="sm" onClick={exportData} className="gap-2">
        <Download className="h-4 w-4" /> {t('export')}
      </Button>
      <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="gap-2">
        <Upload className="h-4 w-4" /> {t('import')}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={importData}
        accept=".csv"
        className="hidden"
      />
    </div>
  );
}
