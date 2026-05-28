'use client';

import React, { useState, useEffect } from 'react';
import { format, getDay } from 'date-fns';
import { Sparkles, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { IbadahCard } from './IbadahCard';
import {
  useIbadahStore, IBADAH_CATALOG, FARDHU_IDS, getLevelInfo,
  logKey, today, IbadahCategory,
} from '../store/useIbadahStore';

const UNDO_WINDOW_MS = 5 * 60 * 1000;

const CATEGORY_LABELS: Record<IbadahCategory, string> = {
  sholat_fardhu: '🕌 Sholat Fardhu',
  sholat_sunnah: '🌟 Sholat Sunnah',
  quran:         '📖 Al-Quran',
  dzikir:        '🤲 Dzikir & Doa',
  puasa:         '🌙 Puasa Sunnah',
  sedekah:       '💝 Sedekah',
  amal:          '🤝 Amal Sholeh',
};

interface TodayTabProps {
  t: (k: string) => string;
}

export function TodayTab({ t }: TodayTabProps) {
  const { enabledIds, logs, amalPoints, toggleIbadah, logIbadah, undoLog } = useIbadahStore();
  const [now, setNow] = useState(Date.now());
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const todayStr = today();
  const dayOfWeek = getDay(new Date()); // 0=Sun 1=Mon

  // Fardhu progress
  const fardhuDone = FARDHU_IDS.filter(id => logs[logKey(id, todayStr)]?.status === 'done').length;
  const fardhuPct = Math.round((fardhuDone / 5) * 100);
  const allFardhuDone = fardhuDone === 5;

  // Today's AP
  const todayAP = Object.values(logs).filter(l => l.date === todayStr && l.status === 'done').reduce((acc, l) => acc + l.ap, 0);

  const { level, name: levelName, pct: apPct, next: apNext } = getLevelInfo(amalPoints);

  const canUndo = (ibadahId: string): boolean => {
    const log = logs[logKey(ibadahId, todayStr)];
    if (!log) return false;
    return (now - new Date(log.loggedAt).getTime()) < UNDO_WINDOW_MS;
  };

  // Group enabled ibadah for today
  const todayIbadah = IBADAH_CATALOG.filter(def => {
    if (def.isFardhu) return true;
    if (!enabledIds.includes(def.id)) return false;
    if (def.showOnDays && !def.showOnDays.includes(dayOfWeek)) return false;
    return true;
  });

  const byCategory: Partial<Record<IbadahCategory, typeof todayIbadah>> = {};
  for (const def of todayIbadah) {
    if (!byCategory[def.category]) byCategory[def.category] = [];
    byCategory[def.category]!.push(def);
  }

  const categoryOrder: IbadahCategory[] = ['sholat_fardhu', 'sholat_sunnah', 'quran', 'dzikir', 'puasa', 'sedekah', 'amal'];

  // Sunnah items for settings panel
  const sunnahDefs = IBADAH_CATALOG.filter(d => !d.isFardhu);

  return (
    <div className="space-y-5">
      {/* Date + Fardhu Progress */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              {format(new Date(), 'EEEE, d MMMM yyyy')}
            </p>
            <p className="text-xl font-black tracking-tighter mt-0.5">
              {fardhuDone}/5 {t('fardhu_done')}
            </p>
          </div>
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted/30" />
              <circle
                cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeDasharray={`${fardhuPct} ${100 - fardhuPct}`}
                strokeLinecap="round"
                className={`transition-all duration-500 ${allFardhuDone ? 'text-emerald-500' : 'text-primary'}`}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-black">{fardhuPct}%</span>
          </div>
        </div>

        {/* AP + Level bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <span>{levelName} (Lv.{level})</span>
            <span>{amalPoints} / {apNext} AP</span>
          </div>
          <Progress value={apPct} className="h-2" />
        </div>

        {/* Today's AP */}
        {todayAP > 0 && (
          <p className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 text-center">
            +{todayAP} AP {t('earned_today')} ✨
          </p>
        )}
      </div>

      {/* All fardhu celebration */}
      {allFardhuDone && (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-5 text-center">
          <Sparkles className="h-7 w-7 text-emerald-600 mx-auto mb-2" />
          <p className="font-black uppercase tracking-tight text-emerald-800 dark:text-emerald-300">{t('fardhu_complete_title')}</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 italic">"{t('fardhu_complete_hadith')}"</p>
        </div>
      )}

      {/* Ibadah by category */}
      {categoryOrder.map(cat => {
        const defs = byCategory[cat];
        if (!defs || defs.length === 0) return null;
        return (
          <div key={cat} className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground">{CATEGORY_LABELS[cat]}</p>
            {defs.map(def => (
              <IbadahCard
                key={def.id}
                def={def}
                log={logs[logKey(def.id, todayStr)]}
                onDone={(isJamaah) => logIbadah(def.id, todayStr, 'done', isJamaah)}
                onMissed={def.isFardhu ? () => logIbadah(def.id, todayStr, 'missed') : undefined}
                onUndo={() => undoLog(def.id, todayStr)}
                canUndo={canUndo(def.id)}
                t={t}
              />
            ))}
          </div>
        );
      })}

      {/* Sunnah Settings Toggle */}
      <div className="border-2 rounded-2xl overflow-hidden">
        <button
          onClick={() => setShowSettings(v => !v)}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span className="text-[11px] font-black uppercase tracking-[0.15em]">{t('ibadah_settings')}</span>
          </div>
          {showSettings ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </button>
        {showSettings && (
          <div className="border-t-2 p-4 space-y-3 bg-muted/20">
            <p className="text-[10px] text-muted-foreground">{t('ibadah_settings_desc')}</p>
            {sunnahDefs.map(def => (
              <div key={def.id} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-lg">{def.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-tight truncate">{def.name}</p>
                    <p className="text-[10px] text-muted-foreground">{def.baseAP} AP</p>
                  </div>
                </div>
                <Switch
                  checked={enabledIds.includes(def.id)}
                  onCheckedChange={() => toggleIbadah(def.id)}
                  aria-label={`Toggle ${def.name}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
