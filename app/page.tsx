
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
  FileType
} from 'lucide-react';
import { useLang } from '@/components/Providers';

export default function DashboardPage() {
  const { t } = useLang();

  const tools = [
    {
      title: t('futsal'),
      description: 'Papan skor sederhana dan efektif untuk pertandingan futsal Anda.',
      href: '/tools/futsal',
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
    },
    {
      title: t('lineup'),
      description: 'Buat dan visualisasikan formasi tim sepak bola Anda.',
      href: '/tools/lineup-builder',
      icon: <Goal className="h-10 w-10 text-primary" />,
    },
    {
      title: t('tournament'),
      description: 'Pembuat jadwal Round Robin instan untuk liga dan turnamen sosial.',
      href: '/tools/tournament',
      icon: <Trophy className="h-10 w-10 text-primary" />,
    },
    {
      title: t('scoreboard'),
      description: 'Papan skor serbaguna untuk voli, bulu tamkis, dan tenis meja.',
      href: '/tools/scoreboard',
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
    {
      title: t('pdf_merge'),
      description: 'Gabungkan beberapa file PDF menjadi satu dokumen secara offline.',
      href: '/tools/pdf-merge',
      icon: <FileStack className="h-10 w-10 text-primary" />,
    },
    {
      title: t('image_to_pdf'),
      description: 'Ubah koleksi gambar JPG/PNG Anda menjadi dokumen PDF.',
      href: '/tools/image-to-pdf',
      icon: <FileType className="h-10 w-10 text-primary" />,
    },
    {
      title: t('invoice'),
      description: 'Buat invoice profesional dan simpan sebagai PDF untuk klien Anda.',
      href: '/tools/invoice',
      icon: <Receipt className="h-10 w-10 text-primary" />,
    },
    {
      title: t('shift'),
      description: 'Kelola jadwal kerja mingguan tim Anda dengan sistem shift visual.',
      href: '/tools/shift',
      icon: <CalendarDays className="h-10 w-10 text-primary" />,
    },
    {
      title: t('image_compressor'),
      description: 'Kompres ukuran file gambar langsung di browser tanpa upload.',
      href: '/tools/image-compressor',
      icon: <ImageIcon className="h-10 w-10 text-primary" />,
    },
    {
      title: t('split_bill'),
      description: 'Hitung patungan makan atau biaya tim dengan rincian untuk WA.',
      href: '/tools/split-bill',
      icon: <Banknote className="h-10 w-10 text-primary" />,
    },
    {
      title: t('csv_helper'),
      description: 'Bersihkan dan proses file CSV Anda secara lokal tanpa upload.',
      href: '/tools/csv-helper',
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
    },
    {
      title: t('calculator'),
      description: 'Kalkulator kebutuhan material cat, keramik, dan estimasi biaya.',
      href: '/tools/calculator',
      icon: <Calculator className="h-10 w-10 text-primary" />,
    },
    {
      title: t('inventory'),
      description: 'Pantau stok peralatan olahraga seperti bola, rompi, dan cone.',
      href: '/tools/inventory',
      icon: <Package className="h-10 w-10 text-primary" />,
    },
    {
      title: t('kanban'),
      description: 'Kelola tugas dan rencana tim Anda dengan papan kanban sederhana.',
      href: '/tools/kanban',
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-6 md:p-12 lg:p-20">
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="font-headline text-5xl font-black tracking-tighter text-foreground md:text-7xl uppercase">
          {t('title')} {t('dashboard')}
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <Card key={tool.href} className="flex flex-col overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl border-2 hover:border-primary/20 bg-card">
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
                  Buka Alat <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
