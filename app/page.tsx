'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ArrowRight, 
  ClipboardList, 
  Goal, 
  Trophy, 
  Package, 
  LayoutDashboard, 
  Calendar, 
  FileSpreadsheet, 
  Calculator,
  Receipt,
  CalendarDays,
  Image as ImageIcon,
  Banknote,
  FileStack,
  FileType,
  Wallet,
  Activity,
  Maximize,
  Crop,
  Zap,
  ShieldCheck,
  WifiOff
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/components/Providers';
import { SEO_DATA } from '@/lib/seo-content';

type Category = 'sports' | 'business' | 'finance' | 'utilities';

interface ToolConfig {
  id: string;
  href: string;
  icon: React.ReactNode;
  category: Category;
  isNew?: boolean;
}

const TOOLS: ToolConfig[] = [
  // Sports
  { id: 'tennis', href: '/tools/tennis', icon: <Activity className="h-6 w-6" />, category: 'sports', isNew: true },
  { id: 'futsal', href: '/tools/futsal', icon: <ClipboardList className="h-6 w-6" />, category: 'sports' },
  { id: 'lineup', href: '/tools/lineup-builder', icon: <Goal className="h-6 w-6" />, category: 'sports' },
  { id: 'tournament', href: '/tools/tournament', icon: <Trophy className="h-6 w-6" />, category: 'sports' },
  { id: 'scoreboard', href: '/tools/scoreboard', icon: <Calendar className="h-6 w-6" />, category: 'sports' },
  
  // Finance
  { id: 'budget-planner', href: '/tools/budget-planner', icon: <Wallet className="h-6 w-6" />, category: 'finance' },
  { id: 'split-bill', href: '/tools/split-bill', icon: <Banknote className="h-6 w-6" />, category: 'finance' },
  
  // Business
  { id: 'invoice', href: '/tools/invoice', icon: <Receipt className="h-6 w-6" />, category: 'business' },
  { id: 'inventory', href: '/tools/inventory', icon: <Package className="h-6 w-6" />, category: 'business' },
  { id: 'shift', href: '/tools/shift', icon: <CalendarDays className="h-6 w-6" />, category: 'business' },
  { id: 'kanban', href: '/tools/kanban', icon: <LayoutDashboard className="h-6 w-6" />, category: 'business' },
  
  // Utilities
  { id: 'image-resizer', href: '/tools/image-resizer', icon: <Maximize className="h-6 w-6" />, category: 'utilities', isNew: true },
  { id: 'image-cropper', href: '/tools/image-cropper', icon: <Crop className="h-6 w-6" />, category: 'utilities', isNew: true },
  { id: 'image-compressor', href: '/tools/image-compressor', icon: <ImageIcon className="h-6 w-6" />, category: 'utilities' },
  { id: 'pdf-merge', href: '/tools/pdf-merge', icon: <FileStack className="h-6 w-6" />, category: 'utilities' },
  { id: 'image-to-pdf', href: '/tools/image-to-pdf', icon: <FileType className="h-6 w-6" />, category: 'utilities' },
  { id: 'csv-helper', href: '/tools/csv-helper', icon: <FileSpreadsheet className="h-6 w-6" />, category: 'utilities' },
  { id: 'calculator', href: '/tools/calculator', icon: <Calculator className="h-6 w-6" />, category: 'utilities' },
];

export default function ToolPortalPage() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const localized = SEO_DATA[tool.id]?.[lang] || SEO_DATA[tool.id]?.['en'];
      const titleMatch = localized?.title.toLowerCase().includes(search.toLowerCase());
      const descMatch = localized?.description?.toLowerCase().includes(search.toLowerCase());
      return titleMatch || descMatch;
    });
  }, [search, lang]);

  const categorized = useMemo(() => {
    const groups: Record<Category, ToolConfig[]> = {
      sports: [],
      business: [],
      finance: [],
      utilities: []
    };
    filteredTools.forEach(tool => groups[tool.category].push(tool));
    return groups;
  }, [filteredTools]);

  const HERO_TEXT: Record<string, { title: string; subtitle: string }> = {
    en: { title: "VersoKit Portal", subtitle: "All-in-one suite for sports, business, and daily productivity." },
    id: { title: "Portal VersoKit", subtitle: "Koleksi alat lengkap untuk olahraga, bisnis, dan produktivitas harian." },
    es: { title: "Portal VersoKit", subtitle: "Suite completa para deportes, negocios y productividad." },
    de: { title: "VersoKit Portal", subtitle: "Komplettlösung für Sport, Business und Produktivität." },
    fr: { title: "Portail VersoKit", subtitle: "Suite complète pour le sport, les affaires et la productivité." },
    it: { title: "Portale VersoKit", subtitle: "Suite completa per sport, business e produttività." },
    pt: { title: "Portal VersoKit", subtitle: "Conjunto completo para esportes, negócios e produtividade." }
  };

  const currentHero = HERO_TEXT[lang] || HERO_TEXT['en'];

  const categoryLabels: Record<string, Record<string, string>> = {
    sports: { en: "Sports & Games", id: "Olahraga & Game", es: "Deportes", de: "Sport", fr: "Sports", it: "Sport", pt: "Esportes" },
    business: { en: "Business & Teams", id: "Bisnis & Tim", es: "Negocios", de: "Business", fr: "Affaires", it: "Business", pt: "Negócios" },
    finance: { en: "Finance & Budget", id: "Keuangan & Anggaran", es: "Finanzas", de: "Finanzen", fr: "Finance", it: "Finanza", pt: "Finanças" },
    utilities: { en: "Files & Creative", id: "File & Kreatif", es: "Utilidades", de: "Werkzeuge", fr: "Utilitaires", it: "Utility", pt: "Utilidades" }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-20 pb-32 px-6 text-center text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-xl animate-in fade-in slide-in-from-top duration-700">
            {currentHero.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            {currentHero.subtitle}
          </p>

          <div className="max-w-xl mx-auto relative group pt-4">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none mt-4">
              <Search className="h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <Input 
              type="text"
              placeholder={lang === 'id' ? "Cari alat bantu..." : "Search for a tool..."}
              className="h-16 pl-14 pr-6 rounded-2xl text-lg font-bold shadow-2xl border-none bg-white text-black focus-visible:ring-accent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-black uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><ShieldCheck className="h-4 w-4" /> 100% Private</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><WifiOff className="h-4 w-4" /> Offline Ready</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><Zap className="h-4 w-4" /> No Login</div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="container mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="space-y-16">
          {(Object.keys(categorized) as Category[]).map(catKey => {
            const items = categorized[catKey];
            if (items.length === 0) return null;

            return (
              <div key={catKey} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground bg-white pr-6 py-2 rounded-full shadow-sm border px-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-accent rounded-full" />
                    {categoryLabels[catKey][lang] || categoryLabels[catKey]['en']}
                  </h2>
                  <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map(tool => {
                    const seo = SEO_DATA[tool.id]?.[lang] || SEO_DATA[tool.id]?.['en'];
                    return (
                      <Card key={tool.id} className="group border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col bg-card">
                        <CardHeader className="p-8 pb-4">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-6">
                              {tool.icon}
                            </div>
                            {tool.isNew && (
                              <Badge className="bg-accent text-white uppercase font-black text-[9px] tracking-widest animate-pulse">
                                {lang === 'id' ? 'Baru' : 'New'}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                            {seo?.title || tool.id}
                          </CardTitle>
                          <CardDescription className="text-sm font-medium leading-relaxed line-clamp-2 pt-2">
                            {seo?.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 mt-auto">
                          <Button asChild variant="ghost" className="w-full justify-between h-12 bg-muted/30 group-hover:bg-accent group-hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                            <Link href={tool.href} className="flex items-center w-full">
                              {lang === 'id' ? 'Buka Alat' : 'Open Tool'}
                              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-32 text-center space-y-4 opacity-40">
            <Search className="h-16 w-16 mx-auto mb-4" />
            <p className="text-xl font-black uppercase tracking-widest">
              {lang === 'id' ? 'Alat tidak ditemukan' : 'No tools found'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
