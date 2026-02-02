"use client";
import { useTranslations } from 'next-intl';
import { LineupBuilder } from '@/components/lineup-builder';
import Header from '@/components/header';

export default function LineupBuilderPage() {
  const t = useTranslations('LineupBuilder');
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center gap-4 p-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('title')}
        </h1>
        <LineupBuilder />
      </main>
    </div>
  );
}
