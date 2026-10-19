'use client';

import React, { useState, useRef, useCallback } from 'react';
import { removeBackground } from '@imgly/background-removal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useLang } from '@/components/Providers';
import TrustBadges from '@/components/ui/TrustBadges';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { Wand2, Upload, Download, RotateCcw, ShieldCheck, Cpu, Wifi } from 'lucide-react';

const UI_TEXT: Record<string, Record<string, string>> = {
  en: {
    title: 'Background Remover',
    subtitle: 'AI-powered, runs 100% in your browser',
    upload_label: 'Drop your image here or click to choose',
    supports: 'Supports JPG, PNG, WebP',
    loading_model: 'Loading AI model…',
    processing: 'Removing background…',
    original: 'Original',
    result: 'Result',
    download: 'Download PNG',
    reset: 'New Image',
    privacy_title: 'Your image never leaves your device',
    privacy_body:
      'All processing happens in your browser using WebAssembly. The AI model weights are fetched once from a public CDN — your photo is never uploaded anywhere.',
    note_model: 'First run downloads ~40 MB AI model (cached afterwards)',
    error: 'Processing failed. Try a smaller image or refresh.',
  },
  id: {
    title: 'Hapus Background',
    subtitle: 'AI lokal, proses 100% di browser Anda',
    upload_label: 'Seret foto ke sini atau klik untuk pilih',
    supports: 'Mendukung JPG, PNG, WebP',
    loading_model: 'Memuat model AI…',
    processing: 'Menghapus background…',
    original: 'Asli',
    result: 'Hasil',
    download: 'Unduh PNG',
    reset: 'Foto Baru',
    privacy_title: 'Foto Anda tidak pernah diunggah',
    privacy_body:
      'Semua proses terjadi di browser menggunakan WebAssembly. Bobot model AI diunduh sekali dari CDN publik — foto Anda tidak pernah keluar dari perangkat.',
    note_model: 'Pertama kali mengunduh ~40 MB model AI (tersimpan cache setelahnya)',
    error: 'Gagal memproses. Coba gambar lebih kecil atau refresh.',
  },
};

const FALLBACK = UI_TEXT.en;
function t(lang: string, key: string): string {
  return (UI_TEXT[lang] ?? FALLBACK)[key] ?? FALLBACK[key] ?? key;
}

type Stage = 'idle' | 'loading_model' | 'processing' | 'done' | 'error';

export default function BgRemoverPage() {
  const { lang } = useLang();
  const [stage, setStage] = useState<Stage>('idle');
  const [progress, setProgress] = useState(0);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [originalName, setOriginalName] = useState('image');
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Not an image', variant: 'destructive' });
      return;
    }
    // Revoke previous object URLs
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    if (resultUrl) URL.revokeObjectURL(resultUrl);

    setOriginalUrl(URL.createObjectURL(file));
    setOriginalName(file.name.replace(/\.[^.]+$/, ''));
    setProgress(0);
    setStage('loading_model');

    try {
      const blob = await removeBackground(file, {
        // Load WASM + model from CDN — image itself never leaves browser
        publicPath: `https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.7.0/dist/`,
        progress: (key, current, total) => {
          if (key === 'compute:inference') {
            setStage('processing');
          }
          if (total > 0) setProgress(Math.round((current / total) * 100));
        },
      });
      setResultUrl(URL.createObjectURL(blob));
      setStage('done');
    } catch (err) {
      console.error(err);
      setStage('error');
      toast({ title: t(lang, 'error'), variant: 'destructive' });
    }
  }, [lang, originalUrl, resultUrl]);

  const handleFile = (file: File | undefined) => {
    if (file) processFile(file);
  };

  const handleReset = () => {
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setOriginalUrl(null);
    setResultUrl(null);
    setStage('idle');
    setProgress(0);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `${originalName}_nobg.png`;
    a.click();
  };

  const isProcessing = stage === 'loading_model' || stage === 'processing';

  return (
    <div className="flex flex-col items-center p-4 md:p-8 max-w-5xl mx-auto w-full gap-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Wand2 className="h-8 w-8 text-primary" />
          {t(lang, 'title')}
        </h1>
        <p className="text-sm text-muted-foreground font-medium">{t(lang, 'subtitle')}</p>
        <TrustBadges />
      </div>

      {/* Privacy Notice */}
      <div className="w-full max-w-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-4 flex gap-3">
        <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-green-800 dark:text-green-300">{t(lang, 'privacy_title')}</p>
          <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">{t(lang, 'privacy_body')}</p>
        </div>
      </div>

      {/* Upload area — hidden when image loaded */}
      {!originalUrl && (
        <Card
          className={`w-full max-w-2xl border-2 border-dashed rounded-3xl transition-colors cursor-pointer ${
            dragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/30 hover:border-primary/50'
          }`}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => inputRef.current?.click()}
        >
          <CardContent className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-7 w-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-bold text-base">{t(lang, 'upload_label')}</p>
              <p className="text-xs text-muted-foreground mt-1">{t(lang, 'supports')}</p>
            </div>
            <p className="text-[10px] text-amber-600 flex items-center gap-1">
              <Wifi className="h-3 w-3" /> {t(lang, 'note_model')}
            </p>
          </CardContent>
        </Card>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => handleFile(e.target.files?.[0])}
      />

      {/* Processing state */}
      {isProcessing && (
        <Card className="w-full max-w-2xl rounded-3xl border-2">
          <CardContent className="flex flex-col items-center py-12 gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div
                className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
                style={{ animationDuration: '1s' }}
              />
              <Cpu className="absolute inset-0 m-auto h-6 w-6 text-primary" />
            </div>
            <p className="font-bold text-base">
              {stage === 'loading_model' ? t(lang, 'loading_model') : t(lang, 'processing')}
            </p>
            {progress > 0 && (
              <div className="w-full max-w-xs">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground mt-1">{progress}%</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Before / After comparison */}
      {(stage === 'done' || stage === 'error') && originalUrl && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Original */}
          <Card className="rounded-3xl border-2 overflow-hidden">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                {t(lang, 'original')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={originalUrl} alt="original" className="w-full rounded-2xl object-contain max-h-72" />
            </CardContent>
          </Card>

          {/* Result */}
          <Card className="rounded-3xl border-2 overflow-hidden">
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                {t(lang, 'result')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              {resultUrl ? (
                <div
                  className="w-full rounded-2xl overflow-hidden max-h-72 flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg,#e0e0e0 25%,transparent 25%),linear-gradient(-45deg,#e0e0e0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e0e0e0 75%),linear-gradient(-45deg,transparent 75%,#e0e0e0 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0,0 10px,10px -10px,-10px 0',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={resultUrl} alt="result" className="max-h-72 object-contain" />
                </div>
              ) : (
                <div className="w-full h-48 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <p className="text-sm text-destructive font-bold">{t(lang, 'error')}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Action buttons */}
      {(stage === 'done' || stage === 'error') && (
        <div className="flex gap-3 flex-wrap justify-center">
          {stage === 'done' && resultUrl && (
            <Button onClick={handleDownload} className="bg-primary text-white font-black uppercase tracking-widest px-6">
              <Download className="h-4 w-4 mr-2" /> {t(lang, 'download')}
            </Button>
          )}
          <Button variant="outline" onClick={handleReset} className="font-black uppercase tracking-widest px-6 border-2">
            <RotateCcw className="h-4 w-4 mr-2" /> {t(lang, 'reset')}
          </Button>
        </div>
      )}

      <SmartAd />
      <ArticleSection toolId="bg-remover" />
      <SeoContent toolId="bg-remover" />
    </div>
  );
}
