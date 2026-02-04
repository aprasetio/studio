'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileStack, Download, Trash2, Plus, FileText, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';

export default function PDFMergePage() {
  const { t } = useLang();
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length < selectedFiles.length) {
      toast({ 
        title: "Beberapa file dilewati", 
        description: "Hanya file PDF yang diperbolehkan.",
        variant: "destructive"
      });
    }

    setFiles(prev => [...prev, ...pdfFiles]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      toast({ 
        title: "Butuh lebih banyak file", 
        description: "Pilih setidaknya 2 file PDF untuk digabungkan.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const fileBytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(fileBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `versokit_merged_${new Date().getTime()}.pdf`;
      link.click();
      
      toast({ title: "Berhasil!", description: "PDF telah digabungkan dan diunduh." });
    } catch (error) {
      console.error(error);
      toast({ title: "Gagal menggabungkan", description: "Terjadi kesalahan saat memproses PDF.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  const seoData = {
    title: "PDF Merger",
    description: "Combine multiple PDF documents into a single file quickly and securely in your browser.",
    steps: [
      "Select multiple PDF files from your device.",
      "Reorder the files in the list if needed by removing and re-adding.",
      "Click the 'Merge PDF' button to start the process.",
      "The merged document will be generated and downloaded instantly."
    ],
    article: "Combine PDF files securely. Unlike other sites, this **Privacy-First PDF Merger** processes files locally on your device. Perfect for merging contracts, reports, or assignments without risking data leaks. Since your files never leave your computer, you can merge sensitive documents with peace of mind.",
    faq: [
      { q: "Is there a file size limit?", a: "The limit is based on your browser's available memory. Usually, merging several large documents works fine." },
      { q: "Are my files uploaded to your server?", a: "No. The merging process happens entirely in your browser using JavaScript. We never see your files." },
      { q: "Can I merge password-protected PDFs?", a: "Currently, you must remove the password before merging for the tool to access the pages." }
    ]
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('pdf_merge')}</h1>
        <p className="text-muted-foreground font-medium">Gabungkan beberapa dokumen PDF menjadi satu secara instan dan privat</p>
      </div>

      <Card className="w-full max-w-4xl shadow-lg border-2">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
          <CardTitle className="text-lg font-black flex items-center gap-2 uppercase">
            <FileStack className="h-5 w-5 text-primary" />
            Daftar Dokumen
          </CardTitle>
          <Button onClick={() => fileInputRef.current?.click()} size="sm" variant="outline" className="font-bold">
            <Plus className="h-4 w-4 mr-1" /> Tambah File
          </Button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept=".pdf" 
            multiple 
            className="hidden" 
          />
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {files.length > 0 ? (
            <div className="space-y-3">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary opacity-60" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold truncate max-w-[200px] md:max-w-md">{file.name}</span>
                      <span className="text-[10px] font-medium text-muted-foreground uppercase">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFile(index)} className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              
              <div className="pt-6 border-t border-dashed">
                <Button 
                  onClick={mergePDFs} 
                  disabled={isProcessing || files.length < 2}
                  className="w-full h-14 bg-primary text-xl font-black uppercase tracking-[0.2em] shadow-xl"
                >
                  {isProcessing ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : <FileStack className="mr-2 h-6 w-6" />}
                  {isProcessing ? 'Memproses...' : 'Gabungkan PDF'}
                </Button>
                <p className="text-[10px] text-center mt-3 text-muted-foreground font-bold uppercase tracking-widest">
                  File diproses sepenuhnya di browser Anda. Tidak ada data yang diunggah ke server.
                </p>
              </div>
            </div>
          ) : (
            <div 
              className="flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-3xl opacity-50 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <FileStack className="h-12 w-12 mb-4" />
              <p className="font-black uppercase tracking-widest text-sm text-center px-4">Belum ada file dipilih.<br/>Klik untuk menambahkan file PDF.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <SmartAd />
      <SeoContent {...seoData} />
    </div>
  );
}
