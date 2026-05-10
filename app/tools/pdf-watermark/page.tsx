'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { 
  FileText, 
  Download, 
  Upload, 
  ShieldCheck, 
  RotateCcw, 
  Type, 
  Grid3X3, 
  Maximize2,
  Loader2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';
import TrustBadges from '@/components/ui/TrustBadges';
import { cn } from '@/lib/utils';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "PDF Watermark Generator",
    upload: "Upload PDF",
    download: "Download Watermarked PDF",
    reset: "Reset",
    settings: "Watermark Settings",
    text_label: "Watermark Text",
    font_size: "Font Size",
    opacity: "Opacity",
    color: "Color",
    placement: "Placement Mode",
    diagonal: "Diagonal Center",
    tiled: "Tiled Pattern",
    processing: "Processing PDF...",
    hint: "100% Private: All processing happens in your browser. Your files are never uploaded to any server.",
    success: "Watermark applied successfully!",
    error_load: "Failed to load PDF. Make sure it's a valid file.",
    error_process: "Error processing PDF."
  },
  id: {
    title: "Pembuat Watermark PDF",
    upload: "Unggah PDF",
    download: "Unduh PDF Ber-watermark",
    reset: "Ulangi",
    settings: "Pengaturan Watermark",
    text_label: "Teks Watermark",
    font_size: "Ukuran Font",
    opacity: "Transparansi",
    color: "Warna",
    placement: "Mode Penempatan",
    diagonal: "Diagonal Tengah",
    tiled: "Pola Berulang",
    processing: "Memproses PDF...",
    hint: "100% Privat: Semua proses terjadi di browser Anda. File Anda tidak pernah dikirim ke server mana pun.",
    success: "Watermark berhasil diterapkan!",
    error_load: "Gagal memuat PDF. Pastikan file valid.",
    error_process: "Gagal memproses PDF."
  }
};

type PlacementMode = 'diagonal' | 'tiled';
type ColorOption = 'gray' | 'red' | 'blue';

const COLORS: Record<ColorOption, { r: number; g: number; b: number }> = {
  gray: { r: 0.5, g: 0.5, b: 0.5 },
  red: { r: 0.8, g: 0.1, b: 0.1 },
  blue: { r: 0.1, g: 0.1, b: 0.8 },
};

export default function PDFWatermarkPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [text, setText] = useState('DRAFT / CONFIDENTIAL');
  const [fontSize, setFontSize] = useState([50]);
  const [opacity, setOpacity] = useState([30]);
  const [color, setColor] = useState<ColorOption>('gray');
  const [placement, setPlacement] = useState<PlacementMode>('diagonal');
  const [isProcessing, setIsProcessing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else if (file) {
      toast({ title: "Invalid File", description: "Please upload a valid PDF document.", variant: "destructive" });
    }
  };

  const handleReset = () => {
    setPdfFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const applyWatermark = async () => {
    if (!pdfFile) return;
    setIsProcessing(true);

    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const pages = pdfDoc.getPages();
      const selectedColor = COLORS[color];

      for (const page of pages) {
        const { width, height } = page.getSize();
        
        if (placement === 'diagonal') {
          page.drawText(text, {
            x: width / 2 - (text.length * fontSize[0] * 0.3),
            y: height / 2,
            size: fontSize[0],
            font: helveticaFont,
            color: rgb(selectedColor.r, selectedColor.g, selectedColor.b),
            opacity: opacity[0] / 100,
            rotate: degrees(45),
          });
        } else {
          // Tiled Pattern
          const stepX = 200;
          const stepY = 200;
          for (let x = -width; x < width * 2; x += stepX) {
            for (let y = -height; y < height * 2; y += stepY) {
              page.drawText(text, {
                x,
                y,
                size: fontSize[0] * 0.5,
                font: helveticaFont,
                color: rgb(selectedColor.r, selectedColor.g, selectedColor.b),
                opacity: opacity[0] / 100,
                rotate: degrees(45),
              });
            }
          }
        }
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `watermarked_${pdfFile.name}`;
      link.click();
      URL.revokeObjectURL(url);
      
      toast({ title: t('success') });
    } catch (err) {
      console.error(err);
      toast({ title: t('error_process'), variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl">
        {/* Settings Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="shadow-lg border-2 rounded-[2rem] overflow-hidden">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Type className="h-4 w-4 text-primary" />
                {t('settings')}
              </CardTitle>
              {pdfFile && (
                <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-red-500 hover:bg-red-50">
                  <RotateCcw className="h-3 w-3 mr-1" /> {t('reset')}
                </Button>
              )}
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {!pdfFile ? (
                <div 
                  className="border-4 border-dashed border-muted rounded-3xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-12 w-12 text-muted-foreground opacity-30" />
                  <p className="font-black uppercase tracking-widest text-xs text-primary">{t('upload')}</p>
                  <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-black uppercase truncate">{pdfFile.name}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">{(pdfFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('text_label')}</Label>
                    <Input 
                      value={text} 
                      onChange={(e) => setText(e.target.value)} 
                      placeholder="DRAFT"
                      className="font-bold"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('font_size')}</Label>
                      <span className="text-[10px] font-black">{fontSize[0]}px</span>
                    </div>
                    <Slider value={fontSize} onValueChange={setFontSize} min={10} max={150} step={1} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('opacity')}</Label>
                      <span className="text-[10px] font-black">{opacity[0]}%</span>
                    </div>
                    <Slider value={opacity} onValueChange={setOpacity} min={5} max={100} step={1} />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('color')}</Label>
                    <div className="flex gap-2">
                      {(Object.keys(COLORS) as ColorOption[]).map((c) => (
                        <button
                          key={c}
                          onClick={() => setColor(c)}
                          className={cn(
                            "flex-1 h-10 rounded-xl border-2 transition-all uppercase text-[10px] font-black",
                            color === c ? "border-primary bg-primary text-white" : "border-muted hover:border-primary/20"
                          )}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('placement')}</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant={placement === 'diagonal' ? 'default' : 'outline'} 
                        onClick={() => setPlacement('diagonal')}
                        className="h-12 font-bold uppercase text-[9px] rounded-xl"
                      >
                        <Maximize2 className="h-3 w-3 mr-2" /> {t('diagonal')}
                      </Button>
                      <Button 
                        variant={placement === 'tiled' ? 'default' : 'outline'} 
                        onClick={() => setPlacement('tiled')}
                        className="h-12 font-bold uppercase text-[9px] rounded-xl"
                      >
                        <Grid3X3 className="h-3 w-3 mr-2" /> {t('tiled')}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    onClick={applyWatermark}
                    disabled={isProcessing}
                    className="w-full h-16 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-[0.2em] shadow-xl text-lg mt-4"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                        {t('processing')}
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-6 w-6" /> {t('download')}
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-md border-2 bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-[2rem]">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
              <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400 uppercase leading-relaxed">
                {t('hint')}
              </p>
            </div>
          </Card>
        </div>

        {/* Preview / Info Section */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="shadow-2xl border-2 overflow-hidden bg-muted/20 relative min-h-[500px] flex items-center justify-center rounded-[3rem]">
            <div className="text-center space-y-4 max-w-sm px-6">
              <FileText className="h-20 w-20 mx-auto opacity-10" />
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-tight opacity-40">
                  {pdfFile ? pdfFile.name : 'No PDF Selected'}
                </h3>
                <p className="text-xs font-medium text-muted-foreground leading-relaxed uppercase tracking-widest opacity-60">
                  {pdfFile 
                    ? 'Your document is ready for processing. Adjust settings on the left and click download to apply the watermark.'
                    : 'Upload a PDF file to get started. You can add a single diagonal watermark or a repeated pattern across all pages.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <ArticleSection toolId="pdf-watermark" />
      <SmartAd />
      <SeoContent toolId="pdf-watermark" />
    </div>
  );
}
