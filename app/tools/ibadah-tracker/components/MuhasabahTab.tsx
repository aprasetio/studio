'use client';

import React from 'react';
import { format, subDays } from 'date-fns';
import { AlertTriangle, CheckCircle2, BookOpen, Heart, TrendingUp, Lock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  useIbadahStore, IBADAH_CATALOG, FARDHU_IDS, logKey,
  getFardhuStreak, getDailyFardhuRate, getLevelInfo,
  LEVEL_NAMES, SUNNAH_REQUIREMENTS,
} from '../store/useIbadahStore';

interface MuhasabahTabProps {
  t: (k: string) => string;
}

const MOTIVATIONAL_QUOTES = [
  { ar: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا', id: 'Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang beriman.', ref: 'QS. An-Nisa: 103' },
  { ar: 'الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', id: 'Yaitu orang-orang yang mendirikan sholat dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.', ref: 'QS. Al-Baqarah: 3' },
  { ar: 'مَنْ يَتَهَجَّدُ لِلَّهِ فَإِنَّ اللَّهَ يَرْفَعُهُ', id: 'Barangsiapa yang sholat malam karena Allah, maka Allah akan mengangkat derajatnya.', ref: 'HR. Tirmidzi' },
  { ar: 'صَلَاةُ الرَّجُلِ فِي جَمَاعَةٍ تُضَعَّفُ عَلَىٰ صَلَاتِهِ فِي بَيْتِهِ وَفِي سُوقِهِ خَمْسًا وَعِشْرِينَ ضِعْفًا', id: 'Sholat seseorang secara berjamaah dilipatgandakan 25 kali dibanding sholat di rumah atau pasarnya.', ref: 'HR. Bukhari & Muslim' },
];

export function MuhasabahTab({ t }: MuhasabahTabProps) {
  const { logs, amalPoints, sunnahPoints } = useIbadahStore();
  const todayQuote = MOTIVATIONAL_QUOTES[new Date().getDate() % MOTIVATIONAL_QUOTES.length];
  const fardhuStreak = getFardhuStreak(logs);
  const weeklyRate = getDailyFardhuRate(logs, 7);

  const { level, name: levelName, desc: levelDesc, nextSunnah, sunnahPct, limitedBySunnah } = getLevelInfo(amalPoints, sunnahPoints);
  const nextLevelName = LEVEL_NAMES[level + 1] ?? null;
  const nextLevelSunnahReq = SUNNAH_REQUIREMENTS[level + 1] ?? null;

  // Last 7 days fardhu analysis
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = format(subDays(new Date(), 6 - i), 'yyyy-MM-dd');
    const label = format(subDays(new Date(), 6 - i), 'EEE d/M');
    const doneFardhu = FARDHU_IDS.filter(id => logs[logKey(id, d)]?.status === 'done');
    const missedFardhu = FARDHU_IDS.filter(id => {
      const log = logs[logKey(id, d)];
      return log?.status === 'missed' || (!log && d < format(new Date(), 'yyyy-MM-dd'));
    });
    return { d, label, doneFardhu, missedFardhu };
  });

  // Missed fardhu list (last 7 days, for qadha reminder)
  const missedEntries: { date: string; ibadahName: string }[] = [];
  for (const day of weekDays) {
    for (const id of day.missedFardhu) {
      const def = IBADAH_CATALOG.find(i => i.id === id);
      if (def) missedEntries.push({ date: day.label, ibadahName: def.name });
    }
  }

  // Total AP this week
  const weeklyAP = Object.values(logs).filter(l => {
    const d = new Date(l.date);
    const daysAgo = Math.floor((Date.now() - d.getTime()) / 86400000);
    return daysAgo < 7 && l.status === 'done';
  }).reduce((acc, l) => acc + l.ap, 0);

  // Category breakdown (last 7 days)
  const totalSunnah = Object.values(logs).filter(l => {
    const def = IBADAH_CATALOG.find(i => i.id === l.ibadahId);
    const daysAgo = Math.floor((Date.now() - new Date(l.date).getTime()) / 86400000);
    return def && !def.isFardhu && l.status === 'done' && daysAgo < 7;
  }).length;

  const rateColor = weeklyRate >= 80 ? 'text-emerald-600' : weeklyRate >= 60 ? 'text-amber-600' : 'text-red-600';
  const rateBg = weeklyRate >= 80 ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
    : weeklyRate >= 60 ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800'
    : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900';

  return (
    <div className="space-y-5">
      {/* Weekly rate card */}
      <div className={`rounded-2xl border-2 p-5 ${rateBg}`}>
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className={`h-6 w-6 ${rateColor}`} />
          <div>
            <p className="font-black uppercase tracking-tight text-sm">{t('weekly_muhasabah')}</p>
            <p className="text-[10px] text-muted-foreground">{t('last_7_days')}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <p className={`text-3xl font-black ${rateColor}`}>{weeklyRate}%</p>
            <p className="text-[10px] font-bold uppercase text-muted-foreground">{t('fardhu_rate')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">{fardhuStreak}</p>
            <p className="text-[10px] font-bold uppercase text-muted-foreground">{t('fardhu_streak_days')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">{weeklyAP}</p>
            <p className="text-[10px] font-bold uppercase text-muted-foreground">{t('weekly_ap')}</p>
          </div>
        </div>
      </div>

      {/* Level progress panel — dual-axis */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <p className="font-black uppercase tracking-tight text-sm">{t('sunnah_level_title')}</p>
        </div>

        {/* Current level */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="text-xl font-black text-primary">{level}</span>
          </div>
          <div>
            <p className="font-black text-base">{levelName}</p>
            <p className="text-[10px] text-muted-foreground">{levelDesc}</p>
          </div>
        </div>

        {/* Sunnah AP bar */}
        {nextLevelName && nextLevelSunnahReq !== null && (
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-wide text-muted-foreground">
              <span className="flex items-center gap-1">
                {limitedBySunnah && <Lock className="h-3 w-3 text-amber-500" />}
                {t('sunnah_needed')} → {nextLevelName}
              </span>
              <span className="text-amber-600">{sunnahPoints} / {nextSunnah} SP</span>
            </div>
            <Progress value={sunnahPct} className="h-2.5" />
            {limitedBySunnah && (
              <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg px-3 py-2">
                {t('limited_by_sunnah_desc')}
              </p>
            )}
          </div>
        )}

        {/* Max level */}
        {!nextLevelName && (
          <p className="text-[11px] font-bold text-emerald-600 text-center">
            ✨ {t('max_level_reached')}
          </p>
        )}
      </div>

      {/* 7-day grid */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-3">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-muted-foreground">{t('daily_fardhu_7')}</p>
        {weekDays.map(({ d, label, doneFardhu, missedFardhu }) => {
          const isToday = d === format(new Date(), 'yyyy-MM-dd');
          const total = doneFardhu.length + missedFardhu.length;
          const pct = total > 0 ? Math.round((doneFardhu.length / 5) * 100) : null;
          return (
            <div key={d} className="flex items-center gap-3">
              <span className={`text-[10px] font-black w-16 ${isToday ? 'text-primary' : 'text-muted-foreground'}`}>{label}</span>
              <div className="flex gap-1 flex-1">
                {FARDHU_IDS.map(id => {
                  const log = logs[logKey(id, d)];
                  const status = log?.status ?? (d < format(new Date(), 'yyyy-MM-dd') ? 'missed' : 'pending');
                  return (
                    <div
                      key={id}
                      className={`h-5 flex-1 rounded-sm ${
                        status === 'done' ? (log?.isJamaah ? 'bg-blue-500' : 'bg-emerald-500')
                        : status === 'missed' ? 'bg-red-400'
                        : 'bg-muted/50'
                      }`}
                      title={IBADAH_CATALOG.find(i => i.id === id)?.name}
                    />
                  );
                })}
              </div>
              {pct !== null && (
                <span className={`text-[10px] font-black w-10 text-right ${doneFardhu.length === 5 ? 'text-emerald-600' : doneFardhu.length >= 3 ? 'text-amber-600' : 'text-red-500'}`}>
                  {doneFardhu.length}/5
                </span>
              )}
            </div>
          );
        })}
        <div className="flex items-center gap-3 pt-1 text-[9px] font-bold text-muted-foreground">
          <div className="flex items-center gap-1"><div className="h-3 w-4 rounded-sm bg-blue-500" /> {t('jamaah')}</div>
          <div className="flex items-center gap-1"><div className="h-3 w-4 rounded-sm bg-emerald-500" /> {t('done')}</div>
          <div className="flex items-center gap-1"><div className="h-3 w-4 rounded-sm bg-red-400" /> {t('missed')}</div>
          <div className="flex items-center gap-1"><div className="h-3 w-4 rounded-sm bg-muted/50" /> {t('pending')}</div>
        </div>
      </div>

      {/* Sunnah summary */}
      <div className="bg-card border-2 rounded-2xl p-4 flex items-center gap-3">
        <Heart className="h-5 w-5 text-rose-500 flex-shrink-0" />
        <div>
          <p className="font-black text-sm">{totalSunnah} {t('sunnah_done_week')}</p>
          <p className="text-[10px] text-muted-foreground">{t('sunnah_week_note')}</p>
        </div>
      </div>

      {/* Qadha reminder */}
      {missedEntries.length > 0 && (
        <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <p className="font-black uppercase tracking-tight text-sm text-red-700 dark:text-red-400">{t('qadha_reminder')}</p>
          </div>
          <p className="text-[11px] text-red-600 dark:text-red-400">{t('qadha_desc')}</p>
          <div className="space-y-1.5">
            {missedEntries.slice(0, 8).map((e, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-[11px] font-bold">{e.ibadahName}</span>
                <span className="text-[10px] text-muted-foreground">— {e.date}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] italic text-muted-foreground border-t pt-2">{t('taubat_reminder')}</p>
        </div>
      )}

      {/* All fardhu complete this week */}
      {missedEntries.length === 0 && weeklyRate === 100 && (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-5 text-center space-y-2">
          <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
          <p className="font-black uppercase tracking-tight text-emerald-800 dark:text-emerald-300">{t('perfect_week')}</p>
          <p className="text-xs text-emerald-600">{t('perfect_week_msg')}</p>
        </div>
      )}

      {/* Motivational quote */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl p-5 text-white space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">{t('daily_reminder')}</p>
        <p className="text-base font-bold text-right leading-relaxed opacity-95 font-arabic">{todayQuote.ar}</p>
        <p className="text-[11px] italic opacity-80 leading-relaxed">"{todayQuote.id}"</p>
        <p className="text-[10px] font-black opacity-60 text-right">— {todayQuote.ref}</p>
      </div>
    </div>
  );
}
