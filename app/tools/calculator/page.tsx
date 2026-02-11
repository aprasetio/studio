'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Ruler, Droplets, Banknote, Maximize2 } from 'lucide-react';
import { SeoContent } from '@/components/SeoContent';
import { ArticleSection } from '@/components/ArticleSection';
import { SmartAd } from '@/components/smart-ad';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Material Calculator",
    dimensions: "Dimensions",
    length: "Length (m)",
    width: "Width (m)",
    height: "Height (m)",
    openings: "Windows/Doors",
    price: "Price per Liter",
    calculate: "Calculate",
    results: "Results",
    area: "Total Area",
    paint_needed: "Paint Needed",
    cost: "Estimated Cost",
    volume: "Liters"
  },
  id: {
    title: "Kalkulator Material",
    dimensions: "Dimensi",
    length: "Panjang (m)",
    width: "Lebar (m)",
    height: "Tinggi (m)",
    openings: "Jendela/Pintu",
    price: "Harga per Liter",
    calculate: "Hitung",
    results: "Hasil",
    area: "Total Luas",
    paint_needed: "Kebutuhan Cat",
    cost: "Estimasi Biaya",
    volume: "Liter"
  },
  de: {
    title: "Baurechner",
    dimensions: "Abmessungen",
    length: "Länge (m)",
    width: "Breite (m)",
    height: "Höhe (m)",
    openings: "Fenster/Türen",
    price: "Preis pro Liter",
    calculate: "Berechnen",
    results: "Ergebnisse",
    area: "Gesamtfläche",
    paint_needed: "Farbbedarf",
    cost: "Geschätzte Kosten",
    volume: "Liter"
  },
  es: {
    title: "Calculadora de Materiales",
    dimensions: "Dimensiones",
    length: "Largo (m)",
    width: "Ancho (m)",
    height: "Alto (m)",
    openings: "Ventanas/Puertas",
    price: "Precio por litro",
    calculate: "Calcular",
    results: "Resultados",
    area: "Área total",
    paint_needed: "Pintura necesaria",
    cost: "Costo estimado",
    volume: "Litros"
  },
  pt: {
    title: "Calculadora de Materiais",
    dimensions: "Dimensões",
    length: "Comprimento (m)",
    width: "Largura (m)",
    height: "Altura (m)",
    openings: "Janelas/Portas",
    price: "Preço por litro",
    calculate: "Calcular",
    results: "Resultados",
    area: "Área total",
    paint_needed: "Tinta necessária",
    cost: "Custo estimado",
    volume: "Litros"
  },
  fr: {
    title: "Calculateur de Matériaux",
    dimensions: "Dimensions",
    length: "Longueur (m)",
    width: "Largeur (m)",
    height: "Hauteur (m)",
    openings: "Fenêtres/Portes",
    price: "Prix par litre",
    calculate: "Calculer",
    results: "Résultats",
    area: "Surface totale",
    paint_needed: "Peinture nécessaire",
    cost: "Coût estimé",
    volume: "Litres"
  },
  it: {
    title: "Calcolatore Materiali",
    dimensions: "Dimensioni",
    length: "Lunghezza (m)",
    width: "Larghezza (m)",
    height: "Altezza (m)",
    openings: "Finestre/Porte",
    price: "Prezzo per litro",
    calculate: "Calcola",
    results: "Risultati",
    area: "Area totale",
    paint_needed: "Vernice necessaria",
    cost: "Costo stimato",
    volume: "Litri"
  }
};

export default function MaterialCalculatorPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

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

  const currencySymbol = lang === 'id' ? 'Rp' : '€';

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
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
              <Label htmlFor="width">{t('width')}</Label>
              <Input id="width" type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">{t('height')}</Label>
              <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="openings">{t('openings')}</Label>
              <Input id="openings" type="number" value={openings} onChange={(e) => setOpenings(e.target.value)} />
            </div>
            <div className="space-y-2 pt-4 border-t">
              <Label htmlFor="price">{t('price')} ({currencySymbol})</Label>
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
                <span className="font-bold uppercase text-xs text-muted-foreground">{t('paint_needed')}</span>
              </div>
              <span className="text-2xl font-black">{litersNeeded} {t('volume')}</span>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground rounded-3xl shadow-xl gap-2">
              <span className="font-bold uppercase tracking-widest text-[10px] opacity-70">{t('cost')}</span>
              <div className="flex items-center gap-2 text-3xl font-black">
                <Banknote className="h-7 w-7" />
                <span>{currencySymbol} {totalCost.toLocaleString(lang === 'id' ? 'id-ID' : 'de-DE')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ArticleSection toolId="calculator" />
      <SmartAd />
      <SeoContent toolId="calculator" />
    </div>
  );
}
