'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image as ImageIcon, Trash2, Plus, Loader2, FileType } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/seo-content';

export default function ImageToPDFPage() {
  const { t } = useLang();
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
        title: "Beberapa file dilewati", 
        description: "Hanya file JPG dan PNG yang diperbolehkan.",
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
      toast({ title: "Pilih gambar", description: "Tambahkan setidaknya satu gambar.", variant: "destructive" });
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
      
      toast({ title: "Berhasil!", description: "Gambar telah dikonversi ke PDF." });
    } catch (error) {
      console.error(error);
      toast({ title: "Gagal konversi", description: "Terjadi kesalahan saat memproses gambar.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-5xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('image_to_pdf')}</h1>
        <p className="text-muted-foreground font-medium">Ubah koleksi foto Anda menjadi dokumen PDF dalam sekejap</p>
      </div>

      <Card className="w-full shadow-lg border-2">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
          <CardTitle className="text-lg font-black flex items-center gap-2 uppercase">
            <ImageIcon className="h-5 w-5 text-primary" />
            Galeri Gambar
          </CardTitle>
          <Button onClick={() => fileInputRef.current?.click()} size="sm" variant="outline" className="font-bold">
            <Plus className="h-4 w-4 mr-1" /> Tambah Gambar
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
                  {isProcessing ? 'Memproses...' : 'Convert ke PDF'}
                </Button>
                <p className="text-[10px] text-center mt-3 text-muted-foreground font-bold uppercase tracking-widest">
                  Setiap gambar akan menjadi halaman terpisah dalam file PDF akhir.
                </p>
              </div>
            </div>
          ) : (
            <div 
              className="flex flex-col items-center justify-center py-24 border-4 border-dashed rounded-[2.5rem] opacity-30 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <ImageIcon className="h-16 w-16 mb-4" />
              <p className="font-black uppercase tracking-widest text-sm text-center px-4">Seret atau Klik untuk Tambah Gambar<br/><span className="text-[10px] opacity-70">Mendukung JPG & PNG</span></p>
            </div>
          )}
        </CardContent>
      </Card>

      <SeoContent toolId="image-to-pdf" />
    </div>
  );
}
