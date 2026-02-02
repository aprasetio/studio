"use client";
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FutsalScoreboard } from '@/components/futsal-scoreboard';
import Header from '@/components/header';

export default function FutsalPage() {
  const t = useTranslations('FutsalScoreboard');
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <FutsalScoreboard />
      </main>
    </div>
  );
}
