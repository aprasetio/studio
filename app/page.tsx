import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Goal, Trophy, Package, LayoutDashboard, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const tools = [
    {
      title: 'Papan Skor Futsal',
      description: 'Papan skor sederhana dan efektif untuk pertandingan futsal Anda.',
      href: '/tools/futsal',
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Penyusun Formasi',
      description: 'Buat dan visualisasikan formasi tim sepak bola Anda.',
      href: '/tools/lineup-builder',
      icon: <Goal className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Generator Turnamen',
      description: 'Buat jadwal Round Robin dan klasemen otomatis untuk liga Anda.',
      href: '/tools/tournament',
      icon: <Trophy className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Papan Skor Universal',
      description: 'Papan skor serbaguna untuk voli, bulu tangkis, dan tenis meja.',
      href: '/tools/scoreboard',
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Inventaris',
      description: 'Pantau stok peralatan olahraga seperti bola, rompi, dan cone.',
      href: '/tools/inventory',
      icon: <Package className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Kanban Board',
      description: 'Kelola tugas dan rencana tim Anda dengan papan kanban sederhana.',
      href: '/tools/kanban',
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-6 md:p-12 lg:p-24">
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="font-headline text-5xl font-black tracking-tighter text-foreground md:text-7xl uppercase">
          Dasbor VersoKit
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          Toolkit Lengkap Anda untuk Manajemen Olahraga yang Lebih Efisien
        </p>
      </div>

      <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.href} className="flex flex-col overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl border-2 hover:border-primary/20">
            <CardHeader className="flex-row items-center gap-6 p-8">
              <div className="p-3 bg-primary/5 rounded-2xl">
                {tool.icon}
              </div>
              <div className="space-y-1">
                <CardTitle className="font-headline text-2xl font-bold tracking-tight uppercase">{tool.title}</CardTitle>
                <CardDescription className="text-sm font-medium leading-relaxed">{tool.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-auto flex justify-end p-8 pt-0">
              <Button asChild variant="ghost" className="group text-primary font-bold hover:bg-primary/5">
                <Link href={tool.href} className="flex items-center">
                  Buka Alat <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
