import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';

const SMARTSCREENER_URL = 'https://smartscreener.streamlit.app';

export function CrossPromoWidget() {
  return (
    <div className="my-8 rounded-2xl border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 p-5 not-prose">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-600 dark:text-amber-400 mb-1">
            Rekomendasi Tools
          </p>
          <p className="font-black text-sm uppercase tracking-tight">SmartScreener</p>
        </div>
      </div>
      <p className="text-[12px] text-muted-foreground leading-relaxed mb-4">
        Cari saham syariah yang layak investasi? SmartScreener membantu Anda menemukan rekomendasi saham syariah berdasarkan analisis teknikal dan fundamental — gratis dan mudah digunakan.
      </p>
      <a
        href={SMARTSCREENER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-xl bg-amber-500 hover:bg-amber-600 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white transition-colors"
      >
        Buka SmartScreener <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
