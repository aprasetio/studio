'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Ruler, Droplets, Banknote } from 'lucide-react';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';

export default function MaterialCalculatorPage() {
  const { t } = useLang();
  const [width, setWidth] = useState<string>('0');
  const [height, setHeight] = useState<string>('0');
  const [openings, setOpenings] = useState<string>('0');
  const [price, setPrice] = useState<string>('0');

  const wallArea = (parseFloat(width) || 0) * (parseFloat(height) || 0);
  const openingArea = (parseFloat(openings) || 0) * 1.5; // Assume 1.5m2 per opening
  const totalArea = Math.max(0, wallArea - openingArea);
  
  // 1 Liter paint covers ~10m2
  const litersNeeded = Math.ceil(totalArea / 10);
  const totalCost = litersNeeded * (parseFloat(price) || 0);

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('calculator')}</h1>
        <p className="text-muted-foreground font-medium">Hitung kebutuhan cat dan biaya material dengan mudah</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <Card className="shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Ruler className="h-5 w-5 text-primary" />
              {t('dimensions')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="width">Lebar Dinding (m)</Label>
              <Input id="width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Tinggi Dinding (m)</Label>
              <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="openings">Jumlah Pintu/Jendela</Label>
              <Input id="openings" type="number" value={openings} onChange={(e) => setOpenings(e.target.value)} />
            </div>
            <div className="space-y-2 pt-4 border-t">
              <Label htmlFor="price">Harga per Liter (Rp)</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-2 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Calculator className="h-5 w-5 text-primary" />
              {t('results')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center justify-between p-4 bg-card rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Ruler className="h-5 w-5" /></div>
                <span className="font-bold uppercase text-xs text-muted-foreground">{t('area')}</span>
              </div>
              <span className="text-2xl font-black">{totalArea.toFixed(1)} m²</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-card rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Droplets className="h-5 w-5" /></div>
                <span className="font-bold uppercase text-xs text-muted-foreground">Volume Cat</span>
              </div>
              <span className="text-2xl font-black">{litersNeeded} Liter</span>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground rounded-3xl shadow-xl gap-2">
              <span className="font-bold uppercase tracking-widest text-[10px] opacity-70">{t('cost')}</span>
              <div className="flex items-center gap-2 text-3xl font-black">
                <Banknote className="h-7 w-7" />
                <span>Rp {totalCost.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <SmartAd />
      <SeoContent toolId="calculator" />
    </div>
  );
}
