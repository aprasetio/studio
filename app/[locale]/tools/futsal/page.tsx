import { FutsalScoreboard } from '@/components/futsal-scoreboard';
import Header from '@/components/header';
import { useTranslations } from 'next-intl';

export default function FutsalPage() {
  const t = useTranslations('FutsalScoreboard');
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <FutsalScoreboard />
      </main>
    </div>
  );
}
