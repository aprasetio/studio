import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Goal, Trophy, Package, LayoutDashboard } from 'lucide-react';
import Header from '@/components/header';

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
      title: 'Universal Scoreboard',
      description: 'Papan skor serbaguna untuk voli, bulu tangkis, dan tenis meja.',
      href: '/tools/scoreboard',
      icon: <Trophy className="h-10 w-10 text-primary" />,
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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-8 p-4 md:p-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Dasbor VersoKit</h1>
          <p className="mt-4 text-lg text-muted-foreground">Toolkit Lengkap Anda untuk Olahraga</p>
        </div>
        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.href} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex-row items-center gap-4 p-6">
                {tool.icon}
                <div>
                  <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
                  <CardDescription className="mt-1">{tool.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex justify-end p-6 pt-0">
                <Button asChild variant="ghost" className="text-primary hover:text-primary">
                  <Link href={tool.href}>
                    Buka alat <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
