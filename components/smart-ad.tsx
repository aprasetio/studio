
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
      <div className="w-full h-[100px] bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white rounded-lg shadow-md p-4 text-center mx-auto my-6 animate-in fade-in zoom-in duration-300">
        <div className="flex items-center gap-2 mb-1">
          <WifiOff className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-bold">⚡ Mode Offline Aktif</span>
        </div>
        <p className="text-xs font-medium opacity-80">
          Aplikasi tetap berjalan lancar! Dukung kami saat Online kembali.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[100px] bg-gray-100 flex items-center justify-center text-xs text-gray-400 border border-gray-200 rounded-lg mx-auto my-6 overflow-hidden relative group transition-all hover:border-gray-300">
      <div className="absolute top-1 left-2 text-[8px] font-black text-gray-300 uppercase tracking-widest">
        Advertisement
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <span className="font-bold">Google AdSense Space</span>
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', height: '90px' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="horizontal"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  );
}
