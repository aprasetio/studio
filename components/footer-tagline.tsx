'use client';

import React from 'react';
import { useLang } from '@/components/Providers';

const TAGLINE: Record<string, string> = {
  en: "Privacy-first • Offline-ready • Free forever",
  id: "Privasi Utama • Bisa Offline • Gratis Selamanya",
  de: "Datenschutz an erster Stelle • Offline nutzbar • Für immer kostenlos",
  es: "Privacidad ante todo • Modo Offline • Gratis para siempre",
  pt: "Privacidade em primeiro lugar • Funciona Offline • Grátis para sempre",
  fr: "Confidentialité d'abord • Mode Hors Ligne • Gratuit pour toujours",
  it: "Privacy al primo posto • Funziona Offline • Gratis per sempre"
};

export default function FooterTagline() {
  const { lang } = useLang();
  const tagline = TAGLINE[lang] || TAGLINE['en'];
  const year = new Date().getFullYear();

  return (
    <div className="pt-8 border-t border-muted text-center space-y-2">
      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
        © {year} <span className="text-foreground">VersoKit</span> | {tagline}
      </p>
      <p className="text-[9px] text-muted-foreground/50 font-medium uppercase tracking-[0.2em]">
        Built with <span className="text-primary font-bold">Project IDX</span>
      </p>
    </div>
  );
}
