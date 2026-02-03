'use client';

import React, { useState, useEffect } from 'react';
import { useEventListener } from 'usehooks-ts';
import { WifiOff, Zap } from 'lucide-react';

/**
 * @fileOverview A smart ad component that handles offline states for PWAs.
 */

export function SmartAd() {
  const [isOnline, setIsOnline] = useState(true);

  // Initial check on mount
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsOnline(navigator.onLine);
    }
  }, []);

  // Update state based on window events
  useEventListener('online', () => setIsOnline(true));
  useEventListener('offline', () => setIsOnline(false));

  if (!isOnline) {
    return (
      <div className="w-full max-w-[320px] min-h-[100px] flex flex-col items-center justify-center bg-muted/40 rounded-2xl border-2 border-dashed border-muted-foreground/20 p-4 text-center mx-auto my-6 animate-in fade-in zoom-in duration-300">
        <div className="flex items-center gap-2 mb-1">
          <WifiOff className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">Offline Mode</span>
        </div>
        <p className="text-sm font-bold text-muted-foreground leading-tight">
          Aplikasi bekerja 100% luring! <Zap className="inline h-3 w-3 text-primary" /><br />
          <span className="text-[10px] font-medium opacity-70 uppercase tracking-tighter">Dukung kami saat Anda kembali daring.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[320px] min-h-[100px] mx-auto my-6 overflow-hidden rounded-2xl border-2 border-primary/5 flex flex-col items-center justify-center bg-card shadow-sm transition-all hover:border-primary/20">
      {/* Placeholder for Google AdSense */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-black text-muted-foreground/20 uppercase tracking-[0.3em]">
        Advertisement
      </div>
      
      <div className="p-4 w-full flex items-center justify-center">
        {/* The actual AdSense tag would go here */}
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', height: '90px' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="horizontal"
             data-full-width-responsive="true"></ins>
      </div>
      
      {/* Helper text if ad fails to load or is being blocked */}
      <p className="text-[9px] font-bold text-muted-foreground/30 uppercase pb-1">
        Dukungan Iklan Membantu VersoKit Tetap Gratis
      </p>
    </div>
  );
}
