'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Upload, ShieldCheck, FileJson, AlertCircle } from 'lucide-react';
import { useLang } from '@/components/Providers';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Data Backup & Restore",
    backup: "Backup Data (JSON)",
    restore: "Restore Data",
    confirm: "⚠️ Warning: This will overwrite your current data. Continue?",
    success: "Data restored successfully!",
    error_invalid: "Invalid backup file!",
    error_read: "Error reading file!",
    privacy: "100% Private: Data is processed locally on your device."
  },
  id: {
    title: "Backup & Pulihkan Data",
    backup: "Simpan Data (JSON)",
    restore: "Pulihkan Data",
    confirm: "⚠️ Peringatan: Ini akan menimpa data Anda saat ini. Lanjutkan?",
    success: "Data berhasil dipulihkan!",
    error_invalid: "File backup tidak valid!",
    error_read: "Gagal membaca file!",
    privacy: "100% Privat: Data diproses secara lokal di perangkat Anda."
  },
  es: {
    title: "Respaldo y Restauración",
    backup: "Respaldar Datos (JSON)",
    restore: "Restaurar Datos",
    confirm: "⚠️ Advertencia: Esto sobrescribirá sus datos actuales. ¿Continuar?",
    success: "¡Datos restaurados con éxito!",
    error_invalid: "¡Archivo de respaldo no válido!",
    error_read: "¡Error al leer el archivo!",
    privacy: "100% Privado: Los datos se procesan localmente."
  },
  pt: {
    title: "Backup e Restauração",
    backup: "Backup de Dados (JSON)",
    restore: "Restaurar Dados",
    confirm: "⚠️ Aviso: Isso irá sobrescrever seus dados atuais. Continuar?",
    success: "Dados restaurados com sucesso!",
    error_invalid: "Arquivo de backup inválido!",
    error_read: "Erro ao ler o arquivo!",
    privacy: "100% Privado: Os dados são processados localmente."
  },
  de: {
    title: "Datensicherung",
    backup: "Daten sichern (JSON)",
    restore: "Daten wiederherstellen",
    confirm: "⚠️ Warnung: Dies wird Ihre aktuellen Daten überschreiben. Fortfahren?",
    success: "Daten erfolgreich wiederhergestellt!",
    error_invalid: "Ungültige Sicherungsdatei!",
    error_read: "Fehler beim Lesen der Datei!",
    privacy: "100 % Privat: Die Daten werden lokal verarbeitet."
  },
  fr: {
    title: "Sauvegarde & Restauration",
    backup: "Sauvegarder (JSON)",
    restore: "Restaurer les données",
    confirm: "⚠️ Attention : cela écrasera vos données actuelles. Continuer ?",
    success: "Données restaurées avec succès !",
    error_invalid: "Fichier de sauvegarde invalide !",
    error_read: "Erreur lors de la lecture du fichier !",
    privacy: "100% Privé : Les données sont traitées localement."
  },
  it: {
    title: "Backup e Ripristino",
    backup: "Backup Dati (JSON)",
    restore: "Ripristina Dati",
    confirm: "⚠️ Attenzione: questo sovrascriverà i tuoi dati attuali. Continuare?",
    success: "Dati ripristinati con successo!",
    error_invalid: "File di backup non valido!",
    error_read: "Errore durante la lettura del file!",
    privacy: "100% Privato: i dati vengono elaborati localmente."
  }
};

interface DataPersistenceProps {
  data: any;
  onRestore: (parsedData: any) => void;
  fileNamePrefix: string;
}

export function DataPersistence({ data, onRestore, fileNamePrefix }: DataPersistenceProps) {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
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

    if (!window.confirm(t('confirm'))) {
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        onRestore(json);
        toast({ title: t('success') });
        // Give time for toast before potentially reloading if needed by parent
      } catch (error) {
        toast({ 
          title: t('error_invalid'), 
          description: "JSON parsing failed.",
          variant: "destructive" 
        });
      }
    };
    reader.onerror = () => {
      toast({ title: t('error_read'), variant: "destructive" });
    };
    reader.readAsText(file);
    
    // Reset input so the same file can be picked again if needed
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full bg-card border-2 rounded-[2rem] p-6 md:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl text-primary">
            <FileJson className="h-5 w-5" />
          </div>
          <h3 className="font-black uppercase tracking-tight text-lg">{t('title')}</h3>
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
          <Download className="mr-2 h-4 w-4" /> {t('backup')}
        </Button>

        <Button 
          variant="outline" 
          onClick={() => fileInputRef.current?.click()} 
          className="h-14 font-black uppercase tracking-widest text-xs border-2 hover:bg-muted"
        >
          <Upload className="mr-2 h-4 w-4 text-orange-600" /> {t('restore')}
        </Button>
      </div>

      <div className="flex items-start gap-2 pt-2 opacity-60">
        <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
        <p className="text-[10px] font-medium leading-relaxed uppercase tracking-wider">
          {t('privacy')}
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
