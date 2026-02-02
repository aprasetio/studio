"use client";
import { FutsalScoreboard } from '@/components/futsal-scoreboard';
import Header from '@/components/header';

export default function FutsalPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <FutsalScoreboard />
      </main>
    </div>
  );
}
