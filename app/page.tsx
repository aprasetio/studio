'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
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
  ShieldCheck,
  Zap,
  WifiOff
} from 'lucide-react';
import { useLang } from '@/components/Providers';

export default function DashboardPage() {
  const { t, lang } = useLang();

  const HERO_TEXT: Record<string, string> = {
    en: "⚡ Fast. 🔒 Secure. ✈️ Offline-Ready. Data never leaves your device.",
    id: "⚡ Cepat. 🔒 Aman. ✈️ Bisa Offline. Data tidak meninggalkan perangkat.",
    es: "⚡ Rápido. 🔒 Seguro. ✈️ Offline. Los datos nunca salen de su dispositivo.",
    pt: "⚡ Rápido. 🔒 Seguro. ✈️ Offline. Os dados nunca saem do seu dispositivo.",
    de: "⚡ Schnell. 🔒 Sicher. ✈️ Offline. Daten verlassen niemals Ihr Gerät.",
    fr: "⚡ Rapide. 🔒 Sécurisé. ✈️ Hors ligne. Les données restent sur l'appareil.",
    it: "⚡ Veloce. 🔒 Sicuro. ✈️ Offline. I dati non lasciano mai il dispositivo."
  };

  const tools = [
    {
      id: 'futsal',
      title: t('futsal'),
      description: 'Papan skor sederhana dan efektif untuk pertandingan futsal Anda.',
      href: '/tools/futsal',
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
    },
    {
      id: 'lineup',
      title: t('lineup'),
      description: 'Buat dan visualisasikan formasi tim sepak bola Anda.',
      href: '/tools/lineup-builder',
      icon: <Goal className="h-10 w-10 text-primary" />,
    },
    {
      id: 'tournament',
      title: t('tournament'),
      description: 'Pembuat jadwal Round Robin instan untuk liga dan turnamen sosial.',
      href: '/tools/tournament',
      icon: <Trophy className="h-10 w-10 text-primary" />,
    },
    {
      id: 'scoreboard',
      title: t('scoreboard'),
      description: 'Papan skor serbaguna untuk voli, bulu tamkis, dan tenis meja.',
      href: '/tools/scoreboard',
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
    {
      id: 'pdf-merge',
      title: t('pdf_merge'),
      description: 'Gabungkan beberapa file PDF menjadi satu dokumen secara offline.',
      href: '/tools/pdf-merge',
      icon: <FileStack className="h-10 w-10 text-primary" />,
    },
    {
      id: 'image-to-pdf',
      title: t('image_to_pdf'),
      description: 'Ubah koleksi gambar JPG/PNG Anda menjadi dokumen PDF.',
      href: '/tools/image-to-pdf',
      icon: <FileType className="h-10 w-10 text-primary" />,
    },
    {
      id: 'invoice',
      title: t('invoice'),
      description: 'Buat invoice profesional dan simpan sebagai PDF untuk klien Anda.',
      href: '/tools/invoice',
      icon: <Receipt className="h-10 w-10 text-primary" />,
    },
    {
      id: 'shift',
      title: t('shift'),
      description: 'Kelola jadwal kerja mingguan tim Anda dengan sistem shift visual.',
      href: '/tools/shift',
      icon: <CalendarDays className="h-10 w-10 text-primary" />,
    },
    {
      id: 'image-compressor',
      title: t('image_compressor'),
      description: 'Kompres ukuran file gambar langsung di browser tanpa upload.',
      href: '/tools/image-compressor',
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
    },
    {
      id: 'split-bill',
      title: t('split_bill'),
      description: 'Hitung patungan makan atau biaya tim dengan rincian untuk WA.',
      href: '/tools/split-bill',
      icon: <Banknote className="h-10 w-10 text-primary" />,
    },
    {
      id: 'csv-helper',
      title: t('csv_helper'),
      description: 'Bersihkan dan proses file CSV Anda secara lokal tanpa upload.',
      href: '/tools/csv-helper',
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
    },
    {
      id: 'calculator',
      title: t('calculator'),
      description: 'Kalkulator kebutuhan material cat, keramik, dan estimasi biaya.',
      href: '/tools/calculator',
      icon: <Calculator className="h-10 w-10 text-primary" />,
    },
    {
      id: 'inventory',
      title: t('inventory'),
      description: 'Pantau stok peralatan olahraga seperti bola, rompi, dan cone.',
      href: '/tools/inventory',
      icon: <Package className="h-10 w-10 text-primary" />,
    },
    {
      id: 'kanban',
      title: t('kanban'),
      description: 'Kelola tugas dan rencana tim Anda dengan papan kanban sederhana.',
      href: '/tools/kanban',
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    },
  ];

  const currentHeroText = HERO_TEXT[lang] || HERO_TEXT['en'];

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-6 md:p-12 lg:p-20">
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="font-headline text-5xl font-black tracking-tighter text-foreground md:text-7xl uppercase">
          {t('title')} {t('dashboard')}
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          {t('subtitle')}
        </p>
        <div className="pt-4 pb-2">
           <p className="text-sm font-bold text-primary bg-primary/5 px-6 py-2 rounded-full border border-primary/10 inline-block">
             {currentHeroText}
           </p>
        </div>
      </div>

      {/* Trust Badge Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-6 px-10 bg-muted/30 rounded-[3rem] border-2 border-dashed border-muted-foreground/10 max-w-4xl w-full">
        <div className="flex items-center gap-2 text-primary">
          <Zap className="h-5 w-5" />
          <span className="text-xs font-black uppercase tracking-widest">
            {lang === 'id' ? 'Cepat' : lang === 'es' || lang === 'pt' || lang === 'it' || lang === 'fr' ? 'Rápido' : 'Fast'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-xs font-black uppercase tracking-widest">
            {lang === 'id' ? 'Aman' : lang === 'es' || lang === 'pt' || lang === 'it' ? 'Seguro' : lang === 'fr' ? 'Sécurisé' : lang === 'de' ? 'Sicher' : 'Secure'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-orange-600">
          <WifiOff className="h-5 w-5" />
          <span className="text-xs font-black uppercase tracking-widest">
            {lang === 'id' ? 'Siap Offline' : lang === 'fr' ? 'Hors ligne' : 'Offline-Ready'}
          </span>
        </div>
        <div className="h-4 w-px bg-muted-foreground/20 hidden md:block" />
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">
          {lang === 'en' ? 'Data never leaves your device' : 
           lang === 'id' ? 'Data tidak pernah meninggalkan perangkat' :
           lang === 'es' ? 'Los datos nunca salen de su dispositivo' :
           lang === 'pt' ? 'Os dados nunca saem do seu dispositivo' :
           lang === 'de' ? 'Daten verlassen niemals Ihr Gerät' :
           lang === 'fr' ? 'Les données restent sur l\'appareil' :
           lang === 'it' ? 'I dati non lasciano mai il dispositivo' :
           'Data never leaves your device'}
        </p>
      </div>

      <div className="grid grid-cols-1 w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <Card key={tool.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl border-2 hover:border-primary/20 bg-card">
            <CardHeader className="flex-row items-center gap-6 p-8">
              <div className="p-3 bg-primary/5 rounded-2xl shrink-0">
                {tool.icon}
              </div>
              <div className="space-y-1">
                <CardTitle className="font-headline text-xl font-bold tracking-tight uppercase leading-tight">{tool.title}</CardTitle>
                <CardDescription className="text-xs font-medium leading-relaxed line-clamp-2">{tool.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-auto flex justify-end p-8 pt-0">
              <Button asChild variant="ghost" className="group text-primary font-bold hover:bg-primary/5">
                <Link href={tool.href} className="flex items-center text-xs uppercase tracking-widest">
                  {lang === 'id' ? 'Buka Alat' : 'Open Tool'} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
