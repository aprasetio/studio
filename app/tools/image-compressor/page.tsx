'use client';

import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Image as ImageIcon, Download, Upload, Zap, ShieldCheck } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';

const UI_TEXT: Record<string, any> = {
  en: {
    upload_title: "Upload Image",
    click_to_choose: "Click to Choose Image",
    supports: "Supports JPG, PNG, WebP",
    original_size: "Original Size",
    quality: "Quality",
    compress: "Compress",
    processing: "Processing...",
    result_title: "Compression Result",
    new_size: "New Size",
    type: "Type",
    saving: "Smaller",
    download: "Download",
    no_result: "No result yet"
  },
  id: {
    upload_title: "Upload Gambar",
    click_to_choose: "Klik untuk Pilih Gambar",
    supports: "Mendukung JPG, PNG, WebP",
    original_size: "Ukuran Asli",
    quality: "Kualitas",
    compress: "Kompres",
    processing: "Memproses...",
    result_title: "Hasil Kompresi",
    new_size: "Ukuran Baru",
    type: "Tipe",
    saving: "Lebih Kecil",
    download: "Unduh",
    no_result: "Belum ada hasil"
  },
  es: {
    upload_title: "Subir Imagen",
    click_to_choose: "Clic para elegir imagen",
    supports: "Soporta JPG, PNG, WebP",
    original_size: "Tamaño original",
    quality: "Calidad",
    compress: "Comprimir",
    processing: "Procesando...",
    result_title: "Resultado de compresión",
    new_size: "Nuevo tamaño",
    type: "Tipo",
    saving: "Más pequeño",
    download: "Descargar",
    no_result: "Sin resultados"
  },
  pt: {
    upload_title: "Carregar Imagem",
    click_to_choose: "Clique para escolher imagem",
    supports: "Suporta JPG, PNG, WebP",
    original_size: "Tamanho original",
    quality: "Qualidade",
    compress: "Comprimir",
    processing: "Processando...",
    result_title: "Resultado da compressão",
    new_size: "Novo tamanho",
    type: "Tipo",
    saving: "Menor",
    download: "Baixar",
    no_result: "Nenhum resultado"
  },
  de: {
    upload_title: "Bild hochladen",
    click_to_choose: "Klicken Sie hier, um ein Bild auszuwählen",
    supports: "Unterstützt JPG, PNG, WebP",
    original_size: "Originalgröße",
    quality: "Qualität",
    compress: "Komprimieren",
    processing: "Wird bearbeitet...",
    result_title: "Kompressionsergebnis",
    new_size: "Neue Größe",
    type: "Typ",
    saving: "Kleiner",
    download: "Herunterladen",
    no_result: "Noch kein Ergebnis"
  },
  fr: {
    upload_title: "Charger l'image",
    click_to_choose: "Cliquer pour choisir l'image",
    supports: "Supporte JPG, PNG, WebP",
    original_size: "Taille originale",
    quality: "Qualité",
    compress: "Compresser",
    processing: "Traitement...",
    result_title: "Résultat de la compression",
    new_size: "Nouvelle taille",
    type: "Type",
    saving: "Plus petit",
    download: "Télécharger",
    no_result: "Aucun résultat"
  },
  it: {
    upload_title: "Carica immagine",
    click_to_choose: "Fai clic per scegliere l'immagine",
    supports: "Supporta JPG, PNG, WebP",
    original_size: "Dimensione originale",
    quality: "Qualità",
    compress: "Comprimi",
    processing: "Elaborazione...",
    result_title: "Risultato della compressione",
    new_size: "Nuova dimensione",
    type: "Tipo",
    saving: "Più piccolo",
    download: "Scarica",
    no_result: "Nessun risultato"
  }
};

export default function ImageCompressorPage() {
  const { t: globalT, lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<File | null>(null);
  const [quality, setQuality] = useState([80]);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalImage(file);
      setCompressedImage(null);
    }
  };

  const compress = async () => {
    if (!originalImage) return;
    setIsCompressing(true);
    
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: quality[0] / 100,
    };

    try {
      const compressedFile = await imageCompression(originalImage, options);
      setCompressedImage(compressedFile);
      toast({ title: lang === 'id' ? "Kompresi Berhasil" : "Compression Successful" });
    } catch (error) {
      toast({ title: lang === 'id' ? "Gagal Mengompres" : "Compression Failed", variant: "destructive" });
    } finally {
      setIsCompressing(false);
    }
  };

  const download = () => {
    if (!compressedImage) return;
    const url = URL.createObjectURL(compressedImage);
    const link = document.createElement('a');
    link.href = url;
    link.download = `compressed_${originalImage?.name}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{globalT('image_compressor')}</h1>
        <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest bg-green-50 px-4 py-1 rounded-full border border-green-100">
          <ShieldCheck className="h-4 w-4" />
          100% Private & Offline
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        <Card className="shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Upload className="h-5 w-5 text-primary" />
              {t('upload_title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div 
              className="border-4 border-dashed border-muted rounded-3xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <input 
                id="file-input" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange} 
              />
              <ImageIcon className="h-16 w-16 text-muted-foreground opacity-30" />
              <div className="text-center">
                <p className="font-black uppercase tracking-widest text-sm text-primary">{t('click_to_choose')}</p>
                <p className="text-xs font-medium text-muted-foreground mt-1">{t('supports')}</p>
              </div>
            </div>

            {originalImage && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex justify-between items-center bg-muted/50 p-4 rounded-2xl">
                  <span className="font-bold text-xs uppercase text-muted-foreground tracking-widest">{t('original_size')}</span>
                  <span className="font-black text-lg">{formatSize(originalImage.size)}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold uppercase tracking-widest">{t('quality')}: {quality[0]}%</label>
                  </div>
                  <Slider 
                    value={quality} 
                    onValueChange={setQuality} 
                    max={100} 
                    step={1} 
                    className="py-4"
                  />
                </div>

                <Button 
                  onClick={compress} 
                  disabled={isCompressing}
                  className="w-full h-14 bg-primary text-xl font-black uppercase tracking-[0.2em] shadow-xl"
                >
                  <Zap className={`mr-2 h-6 w-6 ${isCompressing ? 'animate-pulse' : ''}`} />
                  {isCompressing ? t('processing') : t('compress')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className={`shadow-2xl border-2 transition-all duration-500 ${compressedImage ? 'opacity-100 scale-100' : 'opacity-50 scale-95 blur-[2px]'}`}>
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Download className="h-5 w-5 text-green-600" />
              {t('result_title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 flex flex-col items-center justify-center min-h-[400px]">
            {compressedImage ? (
              <div className="w-full space-y-8 animate-in zoom-in duration-500">
                <div className="aspect-video bg-muted/20 rounded-3xl overflow-hidden border-2 flex items-center justify-center relative">
                   <img 
                    src={URL.createObjectURL(compressedImage)} 
                    alt="Preview" 
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {Math.round((1 - compressedImage.size / (originalImage?.size || 1)) * 100)}% {t('saving')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-muted/50 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{t('new_size')}</p>
                    <p className="text-2xl font-black">{formatSize(compressedImage.size)}</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{t('type')}</p>
                    <p className="text-2xl font-black uppercase">{compressedImage.type.split('/')[1]}</p>
                  </div>
                </div>

                <Button 
                  onClick={download} 
                  className="w-full h-14 bg-green-600 hover:bg-green-700 text-xl font-black uppercase tracking-[0.2em] shadow-xl text-white"
                >
                  <Download className="mr-2 h-6 w-6" />
                  {t('download')}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center opacity-30">
                <ImageIcon className="h-24 w-24 mb-4" />
                <p className="font-black uppercase tracking-widest">{t('no_result')}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <ArticleSection toolId="image-compressor" />

      <SmartAd />
      <SeoContent toolId="image-compressor" />
    </div>
  );
}
