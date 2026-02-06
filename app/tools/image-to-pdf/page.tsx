'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image as ImageIcon, Trash2, Plus, Loader2, FileType } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/seo-content';

const UI_TEXT: Record<string, any> = {
  en: {
    gallery: "Image Gallery",
    add_image: "Add Image",
    processing: "Processing...",
    convert: "Convert to PDF",
    prompt: "Drag or Click to Add Images",
    supports: "Supports JPG & PNG",
    footer_msg: "Each image will become a separate page in the final PDF file.",
    skip_msg: "Some files skipped. Only JPG and PNG allowed.",
    success_msg: "Success! Images converted to PDF."
  },
  id: {
    gallery: "Galeri Gambar",
    add_image: "Tambah Gambar",
    processing: "Memproses...",
    convert: "Convert ke PDF",
    prompt: "Seret atau Klik untuk Tambah Gambar",
    supports: "Mendukung JPG & PNG",
    footer_msg: "Setiap gambar akan menjadi halaman terpisah dalam file PDF akhir.",
    skip_msg: "Beberapa file dilewati. Hanya JPG dan PNG yang diperbolehkan.",
    success_msg: "Berhasil! Gambar telah dikonversi ke PDF."
  },
  es: {
    gallery: "Galería de imágenes",
    add_image: "Añadir imagen",
    processing: "Procesando...",
    convert: "Convertir a PDF",
    prompt: "Arrastra o haz clic para añadir imágenes",
    supports: "Soporta JPG y PNG",
    footer_msg: "Cada imagen se convertirá en una página separada en el archivo PDF final.",
    skip_msg: "Algunos archivos omitidos. Solo se permite JPG y PNG.",
    success_msg: "¡Éxito! Imágenes convertidas a PDF."
  },
  pt: {
    gallery: "Galeria de imagens",
    add_image: "Adicionar imagem",
    processing: "Processando...",
    convert: "Converter para PDF",
    prompt: "Arraste ou clique para adicionar imagens",
    supports: "Suporta JPG e PNG",
    footer_msg: "Cada imagem se tornará uma página separada no arquivo PDF final.",
    skip_msg: "Alguns arquivos ignorados. Somente JPG e PNG permitidos.",
    success_msg: "Sucesso! Imagens convertidas para PDF."
  },
  de: {
    gallery: "Bildergalerie",
    add_image: "Bild hinzufügen",
    processing: "Wird bearbeitet...",
    convert: "In PDF konvertieren",
    prompt: "Bilder hierher ziehen oder klicken",
    supports: "Unterstützt JPG & PNG",
    footer_msg: "Jedes Bild wird zu einer separaten Seite in der endgültigen PDF-Datei.",
    skip_msg: "Einige Dateien übersprungen. Nur JPG und PNG erlaubt.",
    success_msg: "Erfolg! Bilder in PDF konvertiert."
  },
  fr: {
    gallery: "Galerie d'images",
    add_image: "Ajouter une image",
    processing: "Traitement...",
    convert: "Convertir en PDF",
    prompt: "Faire glisser ou cliquer pour ajouter des images",
    supports: "Supporte JPG & PNG",
    footer_msg: "Chaque image deviendra une page distincte dans le fichier PDF final.",
    skip_msg: "Certains fichiers ignorés. Seuls JPG et PNG sont autorisés.",
    success_msg: "Succès ! Images converties en PDF."
  },
  it: {
    gallery: "Galleria immagini",
    add_image: "Aggiungi immagine",
    processing: "Elaborazione...",
    convert: "Converti in PDF",
    prompt: "Trascina o fai clic per aggiungere immagini",
    supports: "Supporta JPG e PNG",
    footer_msg: "Ogni immagine diventerà una pagina separata nel file PDF finale.",
    skip_msg: "Alcuni file ignorati. Sono ammessi solo JPG e PNG.",
    success_msg: "Successo! Immagini convertite in PDF."
  }
};

export default function ImageToPDFPage() {
  const { t: globalT, lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validImages = selectedFiles.filter(file => 
      file.type === 'image/jpeg' || file.type === 'image/png'
    );
    
    if (validImages.length < selectedFiles.length) {
      toast({ 
        title: lang === 'id' ? "Beberapa file dilewati" : "Files Skipped", 
        description: t('skip_msg'),
        variant: "destructive"
      });
    }

    const newImages = validImages.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...newImages]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    const updated = [...images];
    URL.revokeObjectURL(updated[index].preview);
    updated.splice(index, 1);
    setImages(updated);
  };

  const convertToPDF = async () => {
    if (images.length === 0) {
      toast({ title: lang === 'id' ? "Pilih gambar" : "Select Images", description: lang === 'id' ? "Tambahkan setidaknya satu gambar." : "Add at least one image.", variant: "destructive" });
      return;
    }

    setIsProcessing(true);
    try {
      const pdfDoc = await PDFDocument.create();

      for (const imgData of images) {
        const imgBytes = await imgData.file.arrayBuffer();
        let pdfImg;
        
        if (imgData.file.type === 'image/jpeg') {
          pdfImg = await pdfDoc.embedJpg(imgBytes);
        } else {
          pdfImg = await pdfDoc.embedPng(imgBytes);
        }

        const { width, height } = pdfImg.scale(1);
        const page = pdfDoc.addPage([width, height]);
        page.drawImage(pdfImg, {
          x: 0,
          y: 0,
          width,
          height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `versokit_images_${new Date().getTime()}.pdf`;
      link.click();
      
      toast({ title: lang === 'id' ? "Berhasil!" : "Success!", description: t('success_msg') });
    } catch (error) {
      console.error(error);
      toast({ title: lang === 'id' ? "Gagal konversi" : "Conversion Failed", description: lang === 'id' ? "Terjadi kesalahan saat memproses gambar." : "Error processing images.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-5xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{globalT('image_to_pdf')}</h1>
        <p className="text-muted-foreground font-medium">{lang === 'id' ? 'Ubah koleksi foto Anda menjadi dokumen PDF dalam sekejap' : 'Instantly turn your photos into PDF documents'}</p>
      </div>

      <Card className="w-full shadow-lg border-2">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
          <CardTitle className="text-lg font-black flex items-center gap-2 uppercase">
            <ImageIcon className="h-5 w-5 text-primary" />
            {t('gallery')}
          </CardTitle>
          <Button onClick={() => fileInputRef.current?.click()} size="sm" variant="outline" className="font-bold">
            <Plus className="h-4 w-4 mr-1" /> {t('add_image')}
          </Button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/jpeg,image/png" 
            multiple 
            className="hidden" 
          />
        </CardHeader>
        <CardContent className="p-6">
          {images.length > 0 ? (
            <div className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden border-2 group bg-muted">
                    <img src={img.preview} alt={`preview-${index}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="destructive" size="icon" onClick={() => removeImage(index)} className="h-8 w-8 rounded-full">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white/80 px-1 rounded text-[8px] font-black uppercase">
                      {img.file.type.split('/')[1]}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-dashed">
                <Button 
                  onClick={convertToPDF} 
                  disabled={isProcessing}
                  className="w-full h-16 bg-primary text-xl font-black uppercase tracking-[0.2em] shadow-xl"
                >
                  {isProcessing ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : <FileType className="mr-2 h-6 w-6" />}
                  {isProcessing ? t('processing') : t('convert')}
                </Button>
                <p className="text-[10px] text-center mt-3 text-muted-foreground font-bold uppercase tracking-widest">
                  {t('footer_msg')}
                </p>
              </div>
            </div>
          ) : (
            <div 
              className="flex flex-col items-center justify-center py-24 border-4 border-dashed rounded-[2.5rem] opacity-30 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <ImageIcon className="h-16 w-16 mb-4" />
              <p className="font-black uppercase tracking-widest text-sm text-center px-4">{t('prompt')}<br/><span className="text-[10px] opacity-70">{t('supports')}</span></p>
            </div>
          )}
        </CardContent>
      </Card>

      <SeoContent toolId="image-to-pdf" />
    </div>
  );
}
