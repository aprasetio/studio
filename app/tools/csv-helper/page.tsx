'use client';

import React, { useState, useRef } from 'react';
import Papa from 'papaparse';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileSpreadsheet, Trash2, Download, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import TrustBadges from '@/components/ui/TrustBadges';

export default function CSVHelperPage() {
  const { t } = useLang();
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
          toast({ title: "CSV Dimuat", description: `${results.data.length} baris ditemukan.` });
        }
      }
    });
  };

  const removeDuplicates = () => {
    const uniqueData = Array.from(new Set(data.map(row => JSON.stringify(row)))).map(row => JSON.parse(row));
    const removedCount = data.length - uniqueData.length;
    setData(uniqueData);
    toast({ title: t('remove_dupes'), description: `${removedCount} baris duplikat dihapus.` });
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
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('csv_helper')}</h1>
        <TrustBadges />
        <p className="text-muted-foreground font-medium">Bersihkan data CSV Anda secara lokal tanpa upload ke server</p>
      </div>

      <Card className="w-full shadow-lg border-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
            <FileSpreadsheet className="h-5 w-5 text-primary" />
            Control Center
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
              <Upload className="h-4 w-4 mr-2" /> Upload
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
        <CardContent className="space-y-6">
          {data.length > 0 && (
            <div className="flex flex-wrap gap-3">
              <Button onClick={removeDuplicates} variant="secondary" className="font-bold">
                <Trash2 className="h-4 w-4 mr-2" /> {t('remove_dupes')}
              </Button>
              <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700 font-bold">
                <Download className="h-4 w-4 mr-2" /> {t('download')}
              </Button>
            </div>
          )}

          {data.length > 0 ? (
            <div className="border rounded-xl overflow-hidden shadow-inner">
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
              {data.length > 10 && (
                <div className="p-3 text-center text-xs font-bold text-muted-foreground bg-muted/20 border-t">
                  Menampilkan 10 dari {data.length} baris
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-3xl opacity-50">
              <Upload className="h-10 w-10 mb-4" />
              <p className="font-black uppercase tracking-widest text-sm">Belum ada file CSV</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
