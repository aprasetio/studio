
'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';
import { useLang } from '@/components/Providers';

export function SmartAd() {
  const [isOnline, setIsOnline] = useState(true);
  const { t } = useLang();

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsOnline(navigator.onLine);
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="w-full h-[100px] bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white rounded-lg shadow-md p-4 text-center mx-auto my-6 animate-in fade-in zoom-in duration-300">
        <div className="flex items-center gap-2 mb-1">
          <WifiOff className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-bold uppercase tracking-wider">⚡ {t('offline')}</span>
        </div>
        <p className="text-xs font-medium opacity-80">
          Aplikasi tetap berjalan lancar! {t('support')}.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[100px] bg-muted/30 flex items-center justify-center text-xs text-muted-foreground border border-border rounded-lg mx-auto my-6 overflow-hidden relative group transition-all hover:border-primary/30">
      <div className="absolute top-1 left-2 text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest">
        ADVERTISEMENT
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <span className="font-bold">Google AdSense Space</span>
        <div className="text-[10px] opacity-50">Slot iklan akan dimuat di sini secara otomatis</div>
      </div>
    </div>
  );
}
