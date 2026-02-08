'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Image as ImageIcon, Download, Upload, Maximize, ShieldCheck, Zap, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Image Resizer",
    upload: "Upload Image",
    download: "Download Result",
    reset: "Reset",
    quality: "Quality",
    width: "Width (px)",
    height: "Height (px)",
    lock_ratio: "Lock Aspect Ratio",
    original_size: "Original",
    compressed_size: "New Size",
    processing: "Processing..."
  },
  id: {
    title: "Ubah Ukuran Foto",
    upload: "Unggah Gambar",
    download: "Unduh Hasil",
    reset: "Ulangi",
    quality: "Kualitas",
    width: "Lebar (px)",
    height: "Tinggi (px)",
    lock_ratio: "Kunci Rasio Aspek",
    original_size: "Asli",
    compressed_size: "Ukuran Baru",
    processing: "Memproses..."
  },
  de: {
    title: "Bildgröße ändern",
    upload: "Bild hochladen",
    download: "Ergebnis herunterladen",
    reset: "Zurücksetzen",
    quality: "Qualität",
    width: "Breite (px)",
    height: "Höhe (px)",
    lock_ratio: "Seitenverhältnis sperren",
    original_size: "Original",
    compressed_size: "Neue Größe",
    processing: "Verarbeitung..."
  },
  es: {
    title: "Redimensionar Imagen",
    upload: "Subir Imagen",
    download: "Descargar Resultado",
    reset: "Reiniciar",
    quality: "Calidad",
    width: "Ancho (px)",
    height: "Alto (px)",
    lock_ratio: "Bloquear Relación de Aspecto",
    original_size: "Original",
    compressed_size: "Nuevo Tamaño",
    processing: "Procesando..."
  },
  pt: {
    title: "Redimensionar Imagem",
    upload: "Carregar Imagem",
    download: "Baixar Resultado",
    reset: "Reiniciar",
    quality: "Qualidade",
    width: "Largura (px)",
    height: "Altura (px)",
    lock_ratio: "Bloquear Proporção",
    original_size: "Original",
    compressed_size: "Novo Tamanho",
    processing: "Processando..."
  },
  fr: {
    title: "Redimensionner Image",
    upload: "Télécharger Image",
    download: "Télécharger Résultat",
    reset: "Réinitialiser",
    quality: "Qualité",
    width: "Largeur (px)",
    height: "Hauteur (px)",
    lock_ratio: "Verrouiller Ratio",
    original_size: "Original",
    compressed_size: "Nouvelle Taille",
    processing: "Traitement..."
  },
  it: {
    title: "Ridimensiona Immagine",
    upload: "Carica Immagine",
    download: "Scarica Risultato",
    reset: "Reset",
    quality: "Qualità",
    width: "Larghezza (px)",
    height: "Altezza (px)",
    lock_ratio: "Blocca Proporzioni",
    original_size: "Originale",
    compressed_size: "Nuova Dimensione",
    processing: "Elaborazione..."
  }
};

export default function ImageResizerPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const [lockRatio, setLockRatio] = useState(true);
  const [quality, setQuality] = useState([90]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setOriginalFile(file);
        setWidth(img.width);
        setHeight(img.height);
        setAspectRatio(img.width / img.height);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setImage(null);
    setOriginalFile(null);
    setWidth(0);
    setHeight(0);
    setQuality([90]);
  };

  const handleWidthChange = (val: string) => {
    const w = parseInt(val) || 0;
    setWidth(w);
    if (lockRatio && w > 0 && aspectRatio > 0) {
      setHeight(Math.round(w / aspectRatio));
    }
  };

  const handleHeightChange = (val: string) => {
    const h = parseInt(val) || 0;
    setHeight(h);
    if (lockRatio && h > 0 && aspectRatio > 0) {
      setWidth(Math.round(h * aspectRatio));
    }
  };

  const handleResize = () => {
    if (!image || width <= 0 || height <= 0) return;
    setIsProcessing(true);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(image, 0, 0, width, height);
      const dataUrl = canvas.toDataURL(originalFile?.type || 'image/jpeg', quality[0] / 100);
      
      const link = document.createElement('a');
      link.download = `resized_${originalFile?.name || 'image.jpg'}`;
      link.href = dataUrl;
      link.click();
      
      toast({ title: lang === 'id' ? "Selesai!" : "Success!", description: lang === 'id' ? "Gambar berhasil diubah ukurannya." : "Image resized successfully." });
    }
    setIsProcessing(false);
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        <Card className="shadow-lg border-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Upload className="h-5 w-5 text-primary" />
              {t('upload')}
            </CardTitle>
            {image && (
              <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground hover:text-destructive">
                <RotateCcw className="h-4 w-4 mr-1" /> {t('reset')}
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div 
              className="border-4 border-dashed border-muted rounded-3xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => document.getElementById('resizer-file')?.click()}
            >
              <input id="resizer-file" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              <ImageIcon className="h-12 w-12 text-muted-foreground opacity-30" />
              <p className="font-black uppercase tracking-widest text-xs text-primary">{lang === 'id' ? 'Klik untuk Pilih' : 'Click to Choose'}</p>
            </div>

            {image && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('width')}</Label>
                    <Input type="number" value={width} onChange={(e) => handleWidthChange(e.target.value)} className="font-bold" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('height')}</Label>
                    <Input type="number" value={height} onChange={(e) => handleHeightChange(e.target.value)} className="font-bold" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="lock" checked={lockRatio} onCheckedChange={(v) => setLockRatio(!!v)} />
                  <label htmlFor="lock" className="text-xs font-bold uppercase cursor-pointer">{t('lock_ratio')}</label>
                </div>

                <div className="space-y-4">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('quality')}: {quality[0]}%</Label>
                  <Slider value={quality} onValueChange={setQuality} max={100} step={1} />
                </div>

                <Button onClick={handleResize} disabled={isProcessing} className="w-full h-14 bg-primary font-black uppercase tracking-[0.2em] shadow-xl">
                  {isProcessing ? <Zap className="mr-2 h-5 w-5 animate-pulse" /> : <Maximize className="mr-2 h-5 w-5" />}
                  {isProcessing ? t('processing') : t('download')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg border-2 bg-muted/10 flex flex-col items-center justify-center p-8 min-h-[300px]">
          {image ? (
            <div className="w-full space-y-4">
              <div className="aspect-video bg-black/5 rounded-2xl overflow-hidden border-2 flex items-center justify-center">
                <img src={image.src} alt="Preview" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <span>{t('original_size')}: {image.width}x{image.height}</span>
                <span className="text-primary">{t('compressed_size')}: {width}x{height}</span>
              </div>
            </div>
          ) : (
            <div className="opacity-30 text-center space-y-2">
              <ImageIcon className="h-16 w-16 mx-auto" />
              <p className="font-black uppercase tracking-widest text-[10px]">{lang === 'id' ? 'Belum Ada Gambar' : 'No Image Loaded'}</p>
            </div>
          )}
        </Card>
      </div>

      <ArticleSection toolId="image-resizer" />
      <SmartAd />
      <SeoContent toolId="image-resizer" />
    </div>
  );
}
