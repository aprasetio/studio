'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileStack, Trash2, Plus, FileText, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { ArticleSection } from '@/components/ArticleSection';
import { SmartAd } from '@/components/smart-ad';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "PDF Merge",
    doc_list: "Document List",
    add_file: "Add File",
    drop_zone: "No files selected. Click to add PDF files.",
    merge_btn: "Merge PDF",
    processing: "Processing...",
    download_btn: "Download Merged",
    clear: "Clear All",
    privacy_notice: "Files are processed entirely in your browser. No data is uploaded to our servers."
  },
  id: {
    title: "Gabung PDF",
    doc_list: "Daftar Dokumen",
    add_file: "Tambah File",
    drop_zone: "Belum ada file dipilih. Klik untuk menambahkan file PDF.",
    merge_btn: "Gabungkan PDF",
    processing: "Memproses...",
    download_btn: "Unduh Hasil",
    clear: "Hapus Semua",
    privacy_notice: "File diproses sepenuhnya di browser Anda. Tidak ada data yang diunggah ke server."
  },
  de: {
    title: "PDF zusammenfügen",
    doc_list: "Dokumentenliste",
    add_file: "Datei hinzufügen",
    drop_zone: "Keine Dateien ausgewählt. Klicken Sie hier, um PDFs hinzuzufügen.",
    merge_btn: "PDF zusammenfügen",
    processing: "Verarbeitung...",
    download_btn: "Zusammengeführte Datei herunterladen",
    clear: "Alle löschen",
    privacy_notice: "Die Dateien werden vollständig in Ihrem Browser verarbeitet. Es werden keine Daten hochgeladen."
  },
  es: {
    title: "Combinar PDF",
    doc_list: "Lista de documentos",
    add_file: "Añadir archivo",
    drop_zone: "No hay archivos seleccionados. Haz clic para añadir archivos PDF.",
    merge_btn: "Combinar PDF",
    processing: "Procesando...",
    download_btn: "Descargar combinado",
    clear: "Borrar todo",
    privacy_notice: "Los archivos se procesan completamente en tu navegador. No se suben datos a nuestros servidores."
  },
  pt: {
    title: "Combinar PDF",
    doc_list: "Lista de documentos",
    add_file: "Adicionar arquivo",
    drop_zone: "Nenhum arquivo selecionado. Clique para adicionar arquivos PDF.",
    merge_btn: "Mesclar PDF",
    processing: "Processando...",
    download_btn: "Baixar mesclado",
    clear: "Limpar tudo",
    privacy_notice: "Os arquivos são processados inteiramente no seu navegador. Nenhum dado é carregado."
  },
  fr: {
    title: "Fusionner PDF",
    doc_list: "Liste des documents",
    add_file: "Ajouter un fichier",
    drop_zone: "Aucun fichier sélectionné. Cliquez pour ajouter des fichiers PDF.",
    merge_btn: "Fusionner les PDF",
    processing: "Traitement...",
    download_btn: "Télécharger le résultat",
    clear: "Tout effacer",
    privacy_notice: "Les fichiers sont traités entièrement dans votre navigateur. Aucune donnée n'est téléchargée."
  },
  it: {
    title: "Unisci PDF",
    doc_list: "Elenco documenti",
    add_file: "Aggiungi file",
    drop_zone: "Nessun file selezionato. Clicca per aggiungere file PDF.",
    merge_btn: "Unisci PDF",
    processing: "Elaborazione...",
    download_btn: "Scarica unito",
    clear: "Cancella tutto",
    privacy_notice: "I file vengono elaborati interamente nel tuo browser. Nessun dato viene caricato."
  }
};

export default function PDFMergePage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length < selectedFiles.length) {
      toast({ 
        title: lang === 'id' ? "Beberapa file dilewati" : "Files Skipped", 
        description: lang === 'id' ? "Hanya file PDF yang diperbolehkan." : "Only PDF files allowed.",
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
        title: lang === 'id' ? "Butuh lebih banyak file" : "Need more files", 
        description: lang === 'id' ? "Pilih setidaknya 2 file PDF untuk digabungkan." : "Select at least 2 PDF files.",
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
      
      toast({ title: lang === 'id' ? "Berhasil!" : "Success!" });
    } catch (error) {
      console.error(error);
      toast({ title: "Error", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
      </div>

      <Card className="w-full max-w-4xl shadow-lg border-2">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
          <CardTitle className="text-lg font-black flex items-center gap-2 uppercase">
            <FileStack className="h-5 w-5 text-primary" />
            {t('doc_list')}
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => setFiles([])} className="text-destructive font-bold">
              <Trash2 className="h-4 w-4 mr-1" /> {t('clear')}
            </Button>
            <Button onClick={() => fileInputRef.current?.click()} size="sm" variant="outline" className="font-bold">
              <Plus className="h-4 w-4 mr-1" /> {t('add_file')}
            </Button>
          </div>
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
                  {isProcessing ? t('processing') : t('merge_btn')}
                </Button>
                <p className="text-[10px] text-center mt-3 text-muted-foreground font-bold uppercase tracking-widest">
                  {t('privacy_notice')}
                </p>
              </div>
            </div>
          ) : (
            <div 
              className="flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-3xl opacity-50 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <FileStack className="h-12 w-12 mb-4" />
              <p className="font-black uppercase tracking-widest text-sm text-center px-4">{t('drop_zone')}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <ArticleSection toolId="pdf-merge" />
      <SmartAd />
      <SeoContent toolId="pdf-merge" />
    </div>
  );
}
