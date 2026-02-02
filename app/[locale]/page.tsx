import { useTranslations } from 'next-intl';
import { Link } from 'next-intl/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, SoccerBall, ClipboardList } from 'lucide-react';
import Header from '@/components/header';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');

  const tools = [
    {
      title: t('futsalTitle'),
      description: t('futsalDescription'),
      href: '/tools/futsal',
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
    },
    {
      title: t('lineupTitle'),
      description: t('lineupDescription'),
      href: '/tools/lineup-builder',
      icon: <SoccerBall className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-8 p-4 md:p-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t('title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <Card key={tool.href} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                    Go to tool <ArrowRight className="ml-2 h-4 w-4" />
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
