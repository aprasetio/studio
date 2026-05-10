'use client';

import React, { useRef } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Download, Upload, ShieldCheck, FileJson, AlertCircle } from 'lucide-react';
import { useLang } from '@/components/Providers';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const MAX_JSON_FILE_SIZE = 5 * 1024 * 1024;
const validJsonBackup = z.record(z.unknown()).or(z.array(z.unknown()));

interface DataPersistenceProps {
  data: any;
  onRestore: (parsedData: any) => void;
  fileNamePrefix: string;
}

export function DataPersistence({ data, onRestore, fileNamePrefix }: DataPersistenceProps) {
  const { lang, t } = useLang();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBackup = () => {
    try {
      const dataStr = JSON.stringify(data, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const dateStr = format(new Date(), 'yyyy-MM-dd');
      
      link.setAttribute('href', url);
      link.setAttribute('download', `${fileNamePrefix}-${dateStr}.json`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      toast({ 
        title: "Backup Failed", 
        variant: "destructive" 
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_JSON_FILE_SIZE) {
      toast({ title: "File too large (max 5 MB)", variant: "destructive" });
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    if (!window.confirm(t('backup_confirm'))) {
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const raw = JSON.parse(event.target?.result as string);
        const result = validJsonBackup.safeParse(raw);
        if (!result.success) {
          toast({
            title: t('backup_error_invalid'),
            description: "File structure is not a valid JSON object or array.",
            variant: "destructive"
          });
          return;
        }
        onRestore(result.data);
        toast({ title: t('backup_success') });
      } catch {
        toast({
          title: t('backup_error_invalid'),
          description: "JSON parsing failed.",
          variant: "destructive"
        });
      }
    };
    reader.onerror = () => {
      toast({ title: t('backup_error_read'), variant: "destructive" });
    };
    reader.readAsText(file);

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full bg-card border-2 rounded-[2rem] p-6 md:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl text-primary">
            <FileJson className="h-5 w-5" />
          </div>
          <h3 className="font-black uppercase tracking-tight text-lg">{t('backup_data')}</h3>
        </div>
        <div className="flex items-center gap-2 text-green-600 text-[10px] font-bold uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <ShieldCheck className="h-3 w-3" />
          {lang === 'id' ? 'Aman & Lokal' : 'Secure & Local'}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button 
          onClick={handleBackup} 
          className="h-14 font-black uppercase tracking-widest text-xs bg-primary hover:bg-primary/90 shadow-lg"
        >
          <Download className="mr-2 h-4 w-4" /> {t('backup_data')}
        </Button>

        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          className="h-14 font-black uppercase tracking-widest text-xs border-2 hover:bg-muted"
        >
          <Upload className="mr-2 h-4 w-4 text-orange-600" /> {t('restore_data')}
        </Button>
      </div>

      <div className="flex items-start gap-2 pt-2 opacity-60">
        <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
        <p className="text-[10px] font-medium leading-relaxed uppercase tracking-wider">
          {t('privacy_local')}
        </p>
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept=".json" 
      />
    </div>
  );
}
