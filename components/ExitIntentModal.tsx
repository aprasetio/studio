'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Mail, Copy, Check, Lightbulb } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLang } from '@/components/Providers';

const SUPPORT_EMAIL = 'support@versokit.com';
const DISMISS_KEY   = 'versokit-exit-intent-dismissed';
const COOLDOWN_MS   = 24 * 60 * 60 * 1000; // 24 hours
const TRIGGER_DELAY = 3_000;                // wait 3s before listening

type Lang = 'id' | 'en' | 'de' | 'es' | 'pt' | 'fr' | 'it';

const TEXT: Record<string, Record<string, string>> = {
  title:   { id: 'Punya Ide Tool Baru?',           en: 'Got a Tool Idea?' },
  body:    {
    id: 'Belum menemukan tool yang Anda butuhkan? Sampaikan ide Anda — mungkin tool impian Anda akan jadi kenyataan di VersoKit!',
    en: "Didn't find the tool you need? Share your idea — your dream tool might become a reality on VersoKit!",
  },
  email_label: { id: 'Kirim email ke kami di:', en: 'Send us an email at:' },
  copy:    { id: 'Salin',       en: 'Copy' },
  copied:  { id: '✓ Tersalin', en: '✓ Copied' },
  cta:     { id: 'Buka Email Client →', en: 'Open Email Client →' },
  dismiss: { id: 'Mungkin Nanti',       en: 'Maybe Later' },
};

function t(key: string, lang: Lang): string {
  return TEXT[key]?.[lang] ?? TEXT[key]?.['en'] ?? key;
}

function isDismissed(): boolean {
  try {
    const val = localStorage.getItem(DISMISS_KEY);
    if (!val) return false;
    return Date.now() - Number(val) < COOLDOWN_MS;
  } catch {
    return false;
  }
}

function saveDismissal(): void {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch { /* ignore */ }
}

export function ExitIntentModal() {
  const { lang } = useLang();
  const [open, setOpen]       = useState(false);
  const [copied, setCopied]   = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const trigger = useCallback((e: MouseEvent) => {
    if (e.clientY > 0) return;   // only top-of-viewport exit
    if (isDismissed()) return;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', trigger);
    }, TRIGGER_DELAY);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', trigger);
    };
  }, [mounted, trigger]);

  const handleDismiss = () => {
    saveDismissal();
    setOpen(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text manually
    }
  };

  const handleMailto = () => {
    saveDismissal();
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleDismiss(); }}>
      <DialogContent className="max-w-md rounded-2xl border-2 p-6 gap-0">
        <DialogHeader className="space-y-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle className="text-lg font-black tracking-tight leading-tight">
              {t('title', lang as Lang)}
            </DialogTitle>
          </div>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            {t('body', lang as Lang)}
          </DialogDescription>
        </DialogHeader>

        {/* Email display */}
        <div className="mb-5 space-y-2">
          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-muted-foreground">
            {t('email_label', lang as Lang)}
          </p>
          <div className="flex items-center gap-2 bg-muted rounded-xl border px-3 py-2">
            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="flex-1 text-sm font-mono font-bold tracking-tight select-all">
              {SUPPORT_EMAIL}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 px-2 text-[11px] font-black uppercase gap-1 flex-shrink-0"
            >
              {copied
                ? <><Check className="h-3 w-3" />{t('copied', lang as Lang)}</>
                : <><Copy className="h-3 w-3" />{t('copy', lang as Lang)}</>
              }
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button
            asChild
            className="w-full font-black uppercase tracking-tight"
            onClick={handleMailto}
          >
            <a href={`mailto:${SUPPORT_EMAIL}?subject=Tool%20Suggestion`}>
              <Mail className="h-4 w-4 mr-2" />
              {t('cta', lang as Lang)}
            </a>
          </Button>
          <Button
            variant="ghost"
            className="w-full text-muted-foreground text-xs font-black uppercase tracking-wide"
            onClick={handleDismiss}
          >
            {t('dismiss', lang as Lang)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
