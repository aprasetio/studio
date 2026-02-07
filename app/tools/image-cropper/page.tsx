'use client';

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crop, Upload, Download, Square, Monitor, User, ShieldCheck, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Image Cropper",
    upload: "Upload Image",
    download: "Download Result",
    reset: "Reset",
    presets: "Aspect Ratios",
    square: "Square (1:1)",
    landscape: "Landscape (16:9)",
    portrait: "Portrait (4:5)",
    free: "Freeform",
    processing: "Cropping...",
    hint: "Drag to move, use mouse scroll or pinch to zoom."
  },
  id: {
    title: "Potong Foto",
    upload: "Unggah Gambar",
    download: "Unduh Hasil",
    reset: "Ulangi",
    presets: "Rasio Dimensi",
    square: "Kotak (1:1)",
    landscape: "Landscape (16:9)",
    portrait: "Portrait (4:5)",
    free: "Bebas",
    processing: "Memotong...",
    hint: "Seret untuk geser, gunakan scroll mouse atau pinch untuk zoom."
  },
  de: {
    title: "Bild zuschneiden",
    upload: "Bild hochladen",
    download: "Ergebnis herunterladen",
    reset: "Zurücksetzen",
    presets: "Seitenverhältnisse",
    square: "Quadrat (1:1)",
    landscape: "Landschaft (16:9)",
    portrait: "Porträt (4:5)",
    free: "Freiform",
    processing: "Zuschneiden...",
    hint: "Ziehen zum Verschieben, Scrollen oder Zoomen."
  },
  es: {
    title: "Cortar Imagen",
    upload: "Subir Imagen",
    download: "Descargar Resultado",
    reset: "Reiniciar",
    presets: "Relaciones de Aspecto",
    square: "Cuadrado (1:1)",
    landscape: "Horizontal (16:9)",
    portrait: "Vertical (4:5)",
    free: "Libre",
    processing: "Cortando...",
    hint: "Arrastra para mover, usa el scroll o pinza para zoom."
  },
  pt: {
    title: "Cortar Imagem",
    upload: "Carregar Imagem",
    download: "Baixar Resultado",
    reset: "Reiniciar",
    presets: "Proporções",
    square: "Quadrado (1:1)",
    landscape: "Paisagem (16:9)",
    portrait: "Retrato (4:5)",
    free: "Livre",
    processing: "Cortando...",
    hint: "Arraste para mover, use o scroll ou pinça para zoom."
  },
  fr: {
    title: "Rogner Image",
    upload: "Télécharger Image",
    download: "Télécharger Résultat",
    reset: "Réinitialiser",
    presets: "Ratios d'Aspect",
    square: "Carré (1:1)",
    landscape: "Paysage (16:9)",
    portrait: "Portrait (4:5)",
    free: "Libre",
    processing: "Rognage...",
    hint: "Faites glisser pour déplacer, scrollez pour zoomer."
  },
  it: {
    title: "Ritaglia Immagine",
    upload: "Carica Immagine",
    download: "Scarica Risultato",
    reset: "Reset",
    presets: "Rapporti Aspetto",
    square: "Quadrato (1:1)",
    landscape: "Orizzontale (16:9)",
    portrait: "Verticale (4:5)",
    free: "Libero",
    processing: "Ritaglio...",
    hint: "Trascina per spostare, usa lo scroll per lo zoom."
  }
};

export default function ImageCropperPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState<number | undefined>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState('image.jpg');

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setAspect(1);
  };

  const getCroppedImg = async () => {
    if (!image || !croppedAreaPixels) return;
    setIsProcessing(true);

    try {
      const canvas = document.createElement('canvas');
      const img = new Image();
      img.src = image;
      await new Promise((resolve) => (img.onload = resolve));

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          img,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        const link = document.createElement('a');
        link.download = `cropped_${fileName}`;
        link.href = dataUrl;
        link.click();
        toast({ title: lang === 'id' ? "Selesai!" : "Success!" });
      }
    } catch (e) {
      toast({ title: "Error", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest bg-green-50 px-4 py-1 rounded-full border border-green-100">
          <ShieldCheck className="h-4 w-4" />
          Private & Browser-Based
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl">
        <div className="lg:col-span-8 space-y-4">
          <Card className="shadow-xl border-2 overflow-hidden bg-black/5 min-h-[500px] relative rounded-3xl">
            {image ? (
              <div className="absolute inset-0">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={aspect}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
            ) : (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-black/10 transition-colors"
                onClick={() => document.getElementById('cropper-file')?.click()}
              >
                <Upload className="h-16 w-16 mb-4 opacity-20" />
                <p className="font-black uppercase tracking-widest text-xs opacity-40">{t('upload')}</p>
                <input id="cropper-file" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </div>
            )}
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="shadow-lg border-2">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Crop className="h-4 w-4 text-primary" />
                {t('presets')}
              </CardTitle>
              {image && (
                <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-muted-foreground">
                  <RotateCcw className="h-3 w-3 mr-1" /> {t('reset')}
                </Button>
              )}
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant={aspect === 1 ? 'default' : 'outline'} onClick={() => setAspect(1)} className="text-[10px] uppercase font-bold h-12">
                  <Square className="mr-2 h-4 w-4" /> {t('square')}
                </Button>
                <Button variant={aspect === 16/9 ? 'default' : 'outline'} onClick={() => setAspect(16/9)} className="text-[10px] uppercase font-bold h-12">
                  <Monitor className="mr-2 h-4 w-4" /> {t('landscape')}
                </Button>
                <Button variant={aspect === 4/5 ? 'default' : 'outline'} onClick={() => setAspect(4/5)} className="text-[10px] uppercase font-bold h-12">
                  <User className="mr-2 h-4 w-4" /> {t('portrait')}
                </Button>
                <Button variant={aspect === undefined ? 'default' : 'outline'} onClick={() => setAspect(undefined)} className="text-[10px] uppercase font-bold h-12">
                  <Crop className="mr-2 h-4 w-4" /> {t('free')}
                </Button>
              </div>

              <div className="pt-6 border-t">
                <Button 
                  onClick={getCroppedImg} 
                  disabled={!image || isProcessing}
                  className="w-full h-16 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-[0.2em] shadow-xl"
                >
                  {isProcessing ? t('processing') : t('download')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-2 bg-primary/5 p-6">
            <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed text-center">
              {t('hint')}
            </p>
          </Card>
        </div>
      </div>

      <ArticleSection toolId="image-cropper" />
      <SmartAd />
      <SeoContent toolId="image-cropper" />
    </div>
  );
}
