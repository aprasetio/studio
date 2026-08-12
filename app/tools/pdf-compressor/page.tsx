'use client';

import React, { useState, useRef, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FileText, Download, Upload, Zap, RotateCcw, Loader2, ShieldCheck,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';
import TrustBadges from '@/components/ui/TrustBadges';
import { cn } from '@/lib/utils';

const PDFJS_URL = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.mjs';
const PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.mjs';

type Quality = 'max' | 'balanced' | 'high';

interface QualityConfig {
  dpi: number;
  jpegQ: number;
  labelKey: string;
  descKey: string;
  colorClass: string;
}

const QUALITY_MAP: Record<Quality, QualityConfig> = {
  max: { dpi: 72, jpegQ: 0.55, labelKey: 'q_max', descKey: 'q_max_desc', colorClass: 'border-orange-500 bg-orange-500/10' },
  balanced: { dpi: 100, jpegQ: 0.70, labelKey: 'q_balanced', descKey: 'q_balanced_desc', colorClass: 'border-primary bg-primary/10' },
  high: { dpi: 150, jpegQ: 0.85, labelKey: 'q_high', descKey: 'q_high_desc', colorClass: 'border-blue-500 bg-blue-500/10' },
};

const UI_TEXT: Record<string, Record<string, string>> = {
  en: {
    title: 'PDF Compressor',
    subtitle: 'Reduce PDF size without uploading to any server',
    upload_cta: 'Click or drop PDF here',
    upload_sub: 'Supports PDF files',
    settings: 'Compression Quality',
    compress: 'Compress PDF',
    processing: 'Compressing…',
    page_progress: 'Processing page',
    of: 'of',
    result: 'Result',
    original: 'Original',
    compressed: 'Compressed',
    saved: 'saved',
    download: 'Download Compressed PDF',
    reset: 'Reset',
    q_max: 'Maximum',
    q_max_desc: '72 DPI — smallest file',
    q_balanced: 'Balanced',
    q_balanced_desc: '100 DPI — recommended',
    q_high: 'High Quality',
    q_high_desc: '150 DPI — best quality',
    privacy: '100% Private: processed entirely in your browser. Never uploaded.',
    err_invalid: 'Please select a valid PDF file.',
    err_compress: 'Compression failed. The PDF may be encrypted.',
    success: 'PDF compressed successfully!',
    no_result: 'Result will appear here',
  },
  id: {
    title: 'Kompres PDF',
    subtitle: 'Perkecil ukuran PDF tanpa upload ke server manapun',
    upload_cta: 'Klik atau seret PDF ke sini',
    upload_sub: 'Mendukung file PDF',
    settings: 'Kualitas Kompresi',
    compress: 'Kompres PDF',
    processing: 'Mengompres…',
    page_progress: 'Memproses halaman',
    of: 'dari',
    result: 'Hasil',
    original: 'Asli',
    compressed: 'Hasil',
    saved: 'hemat',
    download: 'Unduh PDF Terkompresi',
    reset: 'Ulangi',
    q_max: 'Maksimal',
    q_max_desc: '72 DPI — ukuran terkecil',
    q_balanced: 'Seimbang',
    q_balanced_desc: '100 DPI — direkomendasikan',
    q_high: 'Kualitas Tinggi',
    q_high_desc: '150 DPI — kualitas terbaik',
    privacy: '100% Privat: diproses sepenuhnya di browser. Tidak pernah diunggah.',
    err_invalid: 'Pilih file PDF yang valid.',
    err_compress: 'Kompresi gagal. PDF mungkin terenkripsi.',
    success: 'PDF berhasil dikompres!',
    no_result: 'Hasil akan muncul di sini',
  },
};

for (const lang of ['de', 'es', 'pt', 'fr', 'it']) {
  UI_TEXT[lang] = { ...UI_TEXT['en'] };
}

let pdfjsCache: any = null;

async function loadPdfjs() {
  if (pdfjsCache) return pdfjsCache;
  // @ts-ignore
  const mod = await import(/* webpackIgnore: true */ PDFJS_URL);
  mod.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
  pdfjsCache = mod;
  return mod;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

export default function PdfCompressorPage() {
  const { lang } = useLang();
  const t = (k: string) => UI_TEXT[lang]?.[k] ?? UI_TEXT['en'][k];

  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<Quality>('balanced');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number } | null>(null);
  const [result, setResult] = useState<{ blob: Blob; size: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (f.type !== 'application/pdf' && !f.name.endsWith('.pdf')) {
      toast({ title: t('err_invalid'), variant: 'destructive' });
      return;
    }
    setFile(f);
    setResult(null);
    setProgress(null);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  }, []);

  const compress = async () => {
    if (!file) return;
    setIsProcessing(true);
    setResult(null);
    setProgress(null);

    try {
      const pdfjs = await loadPdfjs();
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) });
      const pdfDoc = await loadingTask.promise;
      const numPages = pdfDoc.numPages;
      const cfg = QUALITY_MAP[quality];

      const newPdf = await PDFDocument.create();

      for (let i = 1; i <= numPages; i++) {
        setProgress({ current: i, total: numPages });

        const page = await pdfDoc.getPage(i);
        const scale = cfg.dpi / 72;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        canvas.width = Math.round(viewport.width);
        canvas.height = Math.round(viewport.height);
        const ctx = canvas.getContext('2d')!;

        await page.render({ canvasContext: ctx, viewport }).promise;

        const jpegDataUrl = canvas.toDataURL('image/jpeg', cfg.jpegQ);
        const base64 = jpegDataUrl.split(',')[1];
        const binary = atob(base64);
        const jpegBytes = new Uint8Array(binary.length);
        for (let j = 0; j < binary.length; j++) jpegBytes[j] = binary.charCodeAt(j);

        const origViewport = page.getViewport({ scale: 1.0 });
        const embeddedImg = await newPdf.embedJpg(jpegBytes);
        const newPage = newPdf.addPage([origViewport.width, origViewport.height]);
        newPage.drawImage(embeddedImg, {
          x: 0,
          y: 0,
          width: origViewport.width,
          height: origViewport.height,
        });
      }

      const compressedBytes = await newPdf.save();
      const blob = new Blob([compressedBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      setResult({ blob, size: compressedBytes.byteLength });
      toast({ title: t('success') });
    } catch (err) {
      console.error(err);
      toast({ title: t('err_compress'), variant: 'destructive' });
    } finally {
      setIsProcessing(false);
      setProgress(null);
    }
  };

  const download = () => {
    if (!result) return;
    const url = URL.createObjectURL(result.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${file?.name ?? 'document.pdf'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setProgress(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const savingPct = result && file
    ? Math.round((1 - result.size / file.size) * 100)
    : 0;

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <p className="text-muted-foreground font-medium">{t('subtitle')}</p>
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {/* Left: Upload + Settings */}
        <div className="flex flex-col gap-6">
          <Card className="shadow-lg border-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
                <Upload className="h-5 w-5 text-primary" />
                {t('upload_cta').split(' ')[0]}
              </CardTitle>
              {file && (
                <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground hover:text-destructive">
                  <RotateCcw className="h-4 w-4 mr-1" /> {t('reset')}
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  'border-4 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors',
                  isDragging ? 'border-primary bg-primary/10' : 'border-muted hover:bg-muted/30',
                  file && 'border-green-500 bg-green-500/5',
                )}
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="application/pdf,.pdf"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                />
                <FileText className={cn('h-16 w-16', file ? 'text-green-500' : 'text-muted-foreground opacity-30')} />
                {file ? (
                  <div className="text-center">
                    <p className="font-black text-sm text-green-600 truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{formatBytes(file.size)}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="font-black uppercase tracking-widest text-sm text-primary">{t('upload_cta')}</p>
                    <p className="text-xs font-medium text-muted-foreground mt-1">{t('upload_sub')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quality Selector */}
          <Card className="shadow-lg border-2">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {t('settings')}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-3">
              {(Object.keys(QUALITY_MAP) as Quality[]).map((q) => {
                const cfg = QUALITY_MAP[q];
                const isSelected = quality === q;
                return (
                  <button
                    key={q}
                    onClick={() => setQuality(q)}
                    className={cn(
                      'border-2 rounded-2xl p-3 text-center transition-all duration-200',
                      isSelected ? cfg.colorClass + ' border-opacity-100' : 'border-muted hover:border-muted-foreground/50',
                    )}
                  >
                    <p className="font-black text-xs uppercase tracking-widest">{t(cfg.labelKey)}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{t(cfg.descKey)}</p>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <Button
            onClick={compress}
            disabled={!file || isProcessing}
            className="w-full h-14 text-xl font-black uppercase tracking-[0.2em] shadow-xl"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                {progress
                  ? `${t('page_progress')} ${progress.current} ${t('of')} ${progress.total}`
                  : t('processing')}
              </>
            ) : (
              <>
                <Zap className="mr-2 h-6 w-6" />
                {t('compress')}
              </>
            )}
          </Button>

          {/* Progress bar */}
          {isProcessing && progress && (
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
          )}

          <p className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center">
            <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
            {t('privacy')}
          </p>
        </div>

        {/* Right: Result */}
        <Card className={cn(
          'shadow-2xl border-2 transition-all duration-500',
          result ? 'opacity-100' : 'opacity-50 scale-95 blur-[2px]',
        )}>
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Download className="h-5 w-5 text-green-600" />
              {t('result')}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[400px] gap-8">
            {result ? (
              <div className="w-full space-y-8 animate-in zoom-in duration-500">
                {/* PDF icon visual */}
                <div className="flex flex-col items-center justify-center py-10 gap-4 bg-muted/30 rounded-3xl border-2">
                  <div className="relative">
                    <FileText className="h-24 w-24 text-red-500" />
                    {savingPct > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                        -{savingPct}%
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-muted-foreground truncate max-w-[200px]">
                    compressed_{file?.name}
                  </p>
                </div>

                {/* Size comparison */}
                <div className="grid grid-cols-3 gap-3 items-center">
                  <div className="bg-muted/50 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{t('original')}</p>
                    <p className="text-xl font-black">{formatBytes(file?.size ?? 0)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-green-600">→</p>
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                      {savingPct > 0 ? `-${savingPct}% ${t('saved')}` : '—'}
                    </p>
                  </div>
                  <div className="bg-green-500/10 border-2 border-green-500 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">{t('compressed')}</p>
                    <p className="text-xl font-black text-green-600">{formatBytes(result.size)}</p>
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
                <FileText className="h-24 w-24 mb-4" />
                <p className="font-black uppercase tracking-widest">{t('no_result')}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <ArticleSection toolId="pdf-compressor" />
      <SmartAd />
      <SeoContent toolId="pdf-compressor" />
    </div>
  );
}
