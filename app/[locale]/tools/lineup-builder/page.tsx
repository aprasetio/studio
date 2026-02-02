import { LineupBuilder } from '@/components/lineup-builder';
import Header from '@/components/header';
import { useTranslations } from 'next-intl';

export default function LineupBuilderPage() {
  const t = useTranslations('LineupBuilder');
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <h1 className="font-headline text-center text-3xl md:text-4xl font-bold mb-6">{t('title')}</h1>
        <LineupBuilder />
      </main>
    </div>
  );
}
