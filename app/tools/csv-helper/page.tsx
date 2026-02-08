'use client';

import React, { useState, useRef } from 'react';
import Papa from 'papaparse';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileSpreadsheet, Trash2, Download, Upload, Scissors } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "CSV Cleaner",
    upload_csv: "Upload CSV",
    remove_duplicates: "Remove Duplicates",
    trim_whitespace: "Trim Spaces",
    download_clean: "Download Clean CSV",
    rows_processed: "Rows",
    empty: "No CSV file loaded yet",
    preview: "Preview (First 10 rows)"
  },
  id: {
    title: "Pembersih CSV",
    upload_csv: "Upload CSV",
    remove_duplicates: "Hapus Duplikat",
    trim_whitespace: "Rapikan Spasi",
    download_clean: "Unduh Hasil Bersih",
    rows_processed: "Baris",
    empty: "Belum ada file CSV yang dimuat",
    preview: "Pratinjau (10 baris pertama)"
  },
  de: {
    title: "CSV-Reiniger",
    upload_csv: "CSV hochladen",
    remove_duplicates: "Duplikate entfernen",
    trim_whitespace: "Leerzeichen kürzen",
    download_clean: "Bereinigte CSV herunterladen",
    rows_processed: "Zeilen",
    empty: "Noch keine CSV-Datei geladen",
    preview: "Vorschau (Erste 10 Zeilen)"
  },
  es: {
    title: "Limpiador CSV",
    upload_csv: "Subir CSV",
    remove_duplicates: "Eliminar duplicados",
    trim_whitespace: "Recortar espacios",
    download_clean: "Descargar CSV limpio",
    rows_processed: "Filas",
    empty: "Aún no se ha cargado ningún archivo CSV",
    preview: "Vista previa (Primeras 10 filas)"
  },
  pt: {
    title: "Limpeza CSV",
    upload_csv: "Carregar CSV",
    remove_duplicates: "Remover duplicatas",
    trim_whitespace: "Cortar espaços",
    download_clean: "Baixar CSV limpo",
    rows_processed: "Linhas",
    empty: "Nenhum arquivo CSV carregado",
    preview: "Pré-visualização (Primeiras 10 linhas)"
  },
  fr: {
    title: "Nettoyeur CSV",
    upload_csv: "Télécharger CSV",
    remove_duplicates: "Supprimer les doublons",
    trim_whitespace: "Ajuster les espaces",
    download_clean: "Télécharger CSV nettoyé",
    rows_processed: "Lignes",
    empty: "Aucun fichier CSV chargé",
    preview: "Aperçu (10 premières lignes)"
  },
  it: {
    title: "Pulitore CSV",
    upload_csv: "Carica CSV",
    remove_duplicates: "Rimuovi duplicati",
    trim_whitespace: "Rimuovi spazi",
    download_clean: "Scarica CSV pulito",
    rows_processed: "Righe",
    empty: "Nessun file CSV caricato",
    preview: "Anteprima (prime 10 righe)"
  }
};

export default function CSVHelperPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.data.length > 0) {
          setHeaders(Object.keys(results.data[0] as object));
          setData(results.data);
          toast({ title: lang === 'id' ? "CSV Dimuat" : "CSV Loaded", description: `${results.data.length} ${t('rows_processed')}` });
        }
      }
    });
  };

  const removeDuplicates = () => {
    const uniqueData = Array.from(new Set(data.map(row => JSON.stringify(row)))).map(row => JSON.parse(row));
    const removedCount = data.length - uniqueData.length;
    setData(uniqueData);
    toast({ title: t('remove_duplicates'), description: `${removedCount} ${t('rows_processed')} removed.` });
  };

  const trimSpaces = () => {
    const trimmedData = data.map(row => {
      const newRow = { ...row };
      Object.keys(newRow).forEach(key => {
        if (typeof newRow[key] === 'string') {
          newRow[key] = newRow[key].trim();
        }
      });
      return newRow;
    });
    setData(trimmedData);
    toast({ title: t('trim_whitespace') });
  };

  const downloadCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `cleaned_data_${new Date().getTime()}.csv`);
    link.click();
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-6xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
      </div>

      <Card className="w-full shadow-lg border-2">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
          <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
            <FileSpreadsheet className="h-5 w-5 text-primary" />
            CSV Tool
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
              <Upload className="h-4 w-4 mr-2" /> {t('upload_csv')}
            </Button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept=".csv" 
              className="hidden" 
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {data.length > 0 && (
            <div className="flex flex-wrap gap-3">
              <Button onClick={removeDuplicates} variant="secondary" className="font-bold">
                <Trash2 className="h-4 w-4 mr-2" /> {t('remove_duplicates')}
              </Button>
              <Button onClick={trimSpaces} variant="outline" className="font-bold">
                <Scissors className="h-4 w-4 mr-2" /> {t('trim_whitespace')}
              </Button>
              <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700 font-bold text-white ml-auto">
                <Download className="h-4 w-4 mr-2" /> {t('download_clean')}
              </Button>
            </div>
          )}

          {data.length > 0 ? (
            <div className="border rounded-xl overflow-hidden shadow-inner">
              <div className="p-3 bg-muted/50 text-[10px] font-black uppercase tracking-widest border-b">
                {t('preview')}
              </div>
              <div className="max-h-[400px] overflow-auto">
                <Table>
                  <TableHeader className="bg-muted">
                    <TableRow>
                      {headers.map((h, i) => (
                        <TableHead key={i} className="font-black uppercase text-[10px] tracking-widest">{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.slice(0, 10).map((row, i) => (
                      <TableRow key={i}>
                        {headers.map((h, j) => (
                          <TableCell key={j} className="text-xs font-medium truncate max-w-[200px]">{String(row[h])}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="p-3 text-center text-xs font-bold text-muted-foreground bg-muted/20 border-t">
                {t('rows_processed')}: {data.length}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-3xl opacity-50">
              <Upload className="h-10 w-10 mb-4" />
              <p className="font-black uppercase tracking-widest text-sm">{t('empty')}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
