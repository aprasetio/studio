'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Image as ImageIcon, 
  Download, 
  Upload, 
  Type, 
  LayoutGrid, 
  Grid3X3, 
  RotateCw, 
  Trash2, 
  ShieldCheck,
  Zap,
  MoreHorizontal
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';
import TrustBadges from '@/components/ui/TrustBadges';
import { cn } from '@/lib/utils';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Watermark Generator",
    upload_main: "Upload Base Image",
    text_tab: "Text Watermark",
    logo_tab: "Logo Watermark",
    text_placeholder: "Enter watermark text...",
    font_size: "Font Size",
    opacity: "Opacity",
    color: "Text Color",
    placement: "Placement Mode",
    single: "Single",
    tiled: "Tiled Pattern",
    spacing: "Pattern Spacing",
    orientation: "Orientation",
    download: "Download High-Res",
    reset: "Clear All",
    logo_upload: "Upload Logo (PNG)",
    logo_size: "Logo Size",
    hint: "All processing happens locally. Your images are never uploaded."
  },
  id: {
    title: "Pembuat Watermark",
    upload_main: "Unggah Foto Asli",
    text_tab: "Watermark Teks",
    logo_tab: "Watermark Logo",
    text_placeholder: "Masukkan teks watermark...",
    font_size: "Ukuran Font",
    opacity: "Transparansi",
    color: "Warna Teks",
    placement: "Mode Penempatan",
    single: "Satu Posisi",
    tiled: "Pola Berulang",
    spacing: "Jarak Antar Pola",
    orientation: "Orientasi",
    download: "Unduh Resolusi Tinggi",
    reset: "Hapus Semua",
    logo_upload: "Unggah Logo (PNG)",
    logo_size: "Ukuran Logo",
    hint: "Semua proses terjadi lokal. Foto Anda tidak pernah dikirim ke server."
  }
};

type PlacementMode = 'single' | 'tiled';
type Orientation = '0' | '45' | '-45' | '90';
type Position = 'tl' | 'tc' | 'tr' | 'ml' | 'cc' | 'mr' | 'bl' | 'bc' | 'br';

export default function ImageWatermarkPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  // Image States
  const [baseImage, setBaseImage] = useState<HTMLImageElement | null>(null);
  const [logoImage, setLogoImage] = useState<HTMLImageElement | null>(null);
  const [fileName, setFileName] = useState('');

  // Control States
  const [mode, setMode] = useState<'text' | 'logo'>('text');
  const [text, setText] = useState('VERSOKIT PROTECTED');
  const [fontSize, setFontSize] = useState([40]);
  const [opacity, setOpacity] = useState([50]);
  const [color, setColor] = useState('#ffffff');
  const [placement, setPlacement] = useState<PlacementMode>('tiled');
  const [position, setPosition] = useState<Position>('cc');
  const [orientation, setOrientation] = useState<Orientation>('45');
  const [spacing, setSpacing] = useState([150]);
  const [logoScale, setLogoScale] = useState([20]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleBaseUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => setBaseImage(img);
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => setLogoImage(img);
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const draw = useCallback((isExport = false) => {
    if (!baseImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use full res for export, scaled for preview
    const width = isExport ? baseImage.width : Math.min(baseImage.width, 1200);
    const height = (width / baseImage.width) * baseImage.height;
    
    canvas.width = width;
    canvas.height = height;

    // Draw Base
    ctx.drawImage(baseImage, 0, 0, width, height);

    // Prepare Watermark
    ctx.save();
    ctx.globalAlpha = opacity[0] / 100;
    ctx.fillStyle = color;
    ctx.font = `bold ${fontSize[0] * (width / 1000)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const wmWidth = mode === 'text' 
      ? ctx.measureText(text).width 
      : (logoImage ? (logoImage.width * (logoScale[0]/100) * (width / 1000)) : 50);
    
    const wmHeight = mode === 'text' 
      ? fontSize[0] * (width / 1000) 
      : (logoImage ? (logoImage.height * (logoScale[0]/100) * (width / 1000)) : 50);

    const angle = parseInt(orientation) * Math.PI / 180;

    if (placement === 'single') {
      let x = width / 2;
      let y = height / 2;
      const margin = 40 * (width / 1000);

      switch (position) {
        case 'tl': x = margin + wmWidth/2; y = margin + wmHeight/2; break;
        case 'tc': x = width / 2; y = margin + wmHeight/2; break;
        case 'tr': x = width - margin - wmWidth/2; y = margin + wmHeight/2; break;
        case 'ml': x = margin + wmWidth/2; y = height / 2; break;
        case 'cc': x = width / 2; y = height / 2; break;
        case 'mr': x = width - margin - wmWidth/2; y = height / 2; break;
        case 'bl': x = margin + wmWidth/2; y = height - margin - wmHeight/2; break;
        case 'bc': x = width / 2; y = height - margin - wmHeight/2; break;
        case 'br': x = width - margin - wmWidth/2; y = height - margin - wmHeight/2; break;
      }

      ctx.translate(x, y);
      ctx.rotate(angle);
      if (mode === 'text') {
        ctx.fillText(text, 0, 0);
      } else if (logoImage) {
        ctx.drawImage(logoImage, -wmWidth/2, -wmHeight/2, wmWidth, wmHeight);
      }
    } else {
      // Tiled Pattern
      const step = spacing[0] * (width / 1000);
      // Loop with buffer to cover corners when rotated
      for (let x = -width; x < width * 2; x += step) {
        for (let y = -height; y < height * 2; y += step) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);
          if (mode === 'text') {
            ctx.fillText(text, 0, 0);
          } else if (logoImage) {
            ctx.drawImage(logoImage, -wmWidth/2, -wmHeight/2, wmWidth, wmHeight);
          }
          ctx.restore();
        }
      }
    }

    ctx.restore();
  }, [baseImage, logoImage, text, fontSize, opacity, color, placement, position, orientation, spacing, logoScale, mode]);

  useEffect(() => {
    draw(false);
  }, [draw]);

  const handleDownload = () => {
    if (!baseImage) return;
    
    // Create temporary offscreen canvas for full-res render
    const offscreen = document.createElement('canvas');
    offscreen.width = baseImage.width;
    offscreen.height = baseImage.height;
    
    // We need to re-run draw logic on this specific canvas
    // Or simpler: Resize the visible canvas, capture, and resize back.
    // Let's do the capture logic:
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Temporarily draw high res
    draw(true);
    
    const link = document.createElement('a');
    link.download = `watermarked_${fileName || 'image.jpg'}`;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
    
    toast({ title: lang === 'id' ? "Selesai!" : "Success!", description: "High-resolution image downloaded." });
    
    // Revert to preview scale
    draw(false);
  };

  const handleReset = () => {
    setBaseImage(null);
    setLogoImage(null);
    setFileName('');
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Left Side: Controls */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="shadow-lg border-2">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <LayoutGrid className="h-4 w-4 text-primary" />
                Settings
              </CardTitle>
              {baseImage && (
                <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-red-500 hover:bg-red-50">
                  <Trash2 className="h-3 w-3 mr-1" /> {t('reset')}
                </Button>
              )}
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {!baseImage ? (
                <div 
                  className="border-4 border-dashed border-muted rounded-3xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => document.getElementById('base-upload')?.click()}
                >
                  <Upload className="h-12 w-12 text-muted-foreground opacity-30" />
                  <p className="font-black uppercase tracking-widest text-xs text-primary">{t('upload_main')}</p>
                  <input id="base-upload" type="file" accept="image/*" className="hidden" onChange={handleBaseUpload} />
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <Tabs value={mode} onValueChange={(v: any) => setMode(v)}>
                    <TabsList className="grid grid-cols-2 w-full h-12 bg-muted p-1 rounded-xl">
                      <TabsTrigger value="text" className="font-bold uppercase text-[10px] rounded-lg">
                        <Type className="h-3 w-3 mr-2" /> {t('text_tab')}
                      </TabsTrigger>
                      <TabsTrigger value="logo" className="font-bold uppercase text-[10px] rounded-lg">
                        <ImageIcon className="h-3 w-3 mr-2" /> {t('logo_tab')}
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="text" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase opacity-60">{t('text_tab')}</Label>
                        <Input 
                          value={text} 
                          onChange={(e) => setText(e.target.value)} 
                          placeholder={t('text_placeholder')}
                          className="font-bold"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase opacity-60">{t('color')}</Label>
                          <input 
                            type="color" 
                            value={color} 
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full h-10 rounded-lg cursor-pointer border-2" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase opacity-60">{t('font_size')}: {fontSize[0]}</Label>
                          <Slider value={fontSize} onValueChange={setFontSize} min={10} max={200} step={1} />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="logo" className="space-y-4 pt-4">
                      {!logoImage ? (
                        <Button 
                          variant="outline" 
                          className="w-full h-24 border-dashed border-2 rounded-2xl flex flex-col gap-2"
                          onClick={() => document.getElementById('logo-upload')?.click()}
                        >
                          <Upload className="h-5 w-5" />
                          <span className="text-[10px] font-black uppercase">{t('logo_upload')}</span>
                          <input id="logo-upload" type="file" accept="image/png" className="hidden" onChange={handleLogoUpload} />
                        </Button>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <img src={logoImage.src} className="h-10 w-10 object-contain bg-black/10 rounded" alt="Logo" />
                              <span className="text-[10px] font-bold uppercase">Logo Loaded</span>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setLogoImage(null)} className="text-red-500 h-8 w-8">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase opacity-60">{t('logo_size')}: {logoScale[0]}%</Label>
                            <Slider value={logoScale} onValueChange={setLogoScale} min={5} max={100} step={1} />
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-4 pt-4 border-t border-dashed">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('placement')}</Label>
                      <div className="grid grid-cols-2 gap-2 bg-muted p-1 rounded-xl">
                        <Button 
                          variant={placement === 'single' ? 'default' : 'ghost'} 
                          size="sm" 
                          onClick={() => setPlacement('single')}
                          className="h-8 font-bold uppercase text-[9px] rounded-lg"
                        >
                          {t('single')}
                        </Button>
                        <Button 
                          variant={placement === 'tiled' ? 'default' : 'ghost'} 
                          size="sm" 
                          onClick={() => setPlacement('tiled')}
                          className="h-8 font-bold uppercase text-[9px] rounded-lg"
                        >
                          {t('tiled')}
                        </Button>
                      </div>
                    </div>

                    {placement === 'single' ? (
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase opacity-60">Position</Label>
                        <div className="grid grid-cols-3 gap-1 w-fit mx-auto">
                          {(['tl','tc','tr','ml','cc','mr','bl','bc','br'] as Position[]).map(pos => (
                            <button 
                              key={pos}
                              onClick={() => setPosition(pos)}
                              className={cn(
                                "w-10 h-10 border-2 rounded transition-all",
                                position === pos ? "bg-primary border-primary" : "bg-muted border-transparent hover:border-primary/20"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase opacity-60">{t('spacing')}</Label>
                          <Slider value={spacing} onValueChange={setSpacing} min={50} max={500} step={10} />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('orientation')}</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {(['0', '45', '-45', '90'] as Orientation[]).map(deg => (
                          <Button 
                            key={deg}
                            variant={orientation === deg ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setOrientation(deg)}
                            className="h-10 font-bold text-[10px]"
                          >
                            {deg}°
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('opacity')}: {opacity[0]}%</Label>
                      <Slider value={opacity} onValueChange={setOpacity} min={0} max={100} step={1} />
                    </div>

                    <Button 
                      onClick={handleDownload}
                      className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-[0.2em] shadow-xl text-lg mt-4"
                    >
                      <Download className="mr-2 h-6 w-6" /> {t('download')}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-md border-2 bg-primary/5 p-6">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
              <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed">
                {t('hint')}
              </p>
            </div>
          </Card>
        </div>

        {/* Right Side: Preview */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <Card className="shadow-2xl border-2 overflow-hidden bg-muted/20 relative min-h-[400px] flex items-center justify-center rounded-[2.5rem]">
            {!baseImage ? (
              <div className="text-center opacity-30 py-20">
                <ImageIcon className="h-20 w-20 mx-auto mb-4" />
                <p className="font-black uppercase tracking-widest text-sm">No Image Loaded</p>
              </div>
            ) : (
              <div className="w-full h-full p-4 md:p-8">
                <canvas 
                  ref={canvasRef} 
                  className="max-w-full h-auto mx-auto rounded-xl shadow-2xl border-4 border-white"
                />
              </div>
            )}
          </Card>
        </div>
      </div>

      <ArticleSection toolId="image-watermark" />
      <SmartAd />
      <SeoContent toolId="image-watermark" />
    </div>
  );
}
