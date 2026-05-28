'use client';

import React from 'react';
import { format, subDays } from 'date-fns';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, Legend,
} from 'recharts';
import { useIbadahStore, IBADAH_CATALOG, FARDHU_IDS, logKey, getFardhuStreak } from '../store/useIbadahStore';
import { Flame, Trophy, Star, TrendingUp } from 'lucide-react';

interface StatsTabProps {
  t: (k: string) => string;
}

const CATEGORY_COLORS: Record<string, string> = {
  sholat_fardhu: '#22c55e',
  sholat_sunnah: '#3b82f6',
  quran:         '#8b5cf6',
  dzikir:        '#f59e0b',
  puasa:         '#14b8a6',
  sedekah:       '#ec4899',
  amal:          '#6366f1',
};

export function StatsTab({ t }: StatsTabProps) {
  const { logs, amalPoints, level } = useIbadahStore();

  // Weekly fardhu bar chart
  const weeklyData = Array.from({ length: 7 }, (_, i) => {
    const d = format(subDays(new Date(), 6 - i), 'yyyy-MM-dd');
    const label = format(subDays(new Date(), 6 - i), 'EEE');
    const done = FARDHU_IDS.filter(id => logs[logKey(id, d)]?.status === 'done').length;
    const jamaah = FARDHU_IDS.filter(id => logs[logKey(id, d)]?.isJamaah).length;
    return { label, done, jamaah };
  });

  // 30-day AP area chart
  const apData = Array.from({ length: 30 }, (_, i) => {
    const d = format(subDays(new Date(), 29 - i), 'yyyy-MM-dd');
    const label = format(subDays(new Date(), 29 - i), 'MMM d');
    const dayAP = Object.values(logs).filter(l => l.date === d && l.status === 'done').reduce((acc, l) => acc + l.ap, 0);
    return { label, ap: dayAP };
  });

  // Category pie
  const catCounts: Record<string, number> = {};
  for (const log of Object.values(logs)) {
    if (log.status !== 'done') continue;
    const def = IBADAH_CATALOG.find(d => d.id === log.ibadahId);
    if (!def) continue;
    catCounts[def.category] = (catCounts[def.category] ?? 0) + 1;
  }
  const pieData = Object.entries(catCounts).map(([cat, count]) => ({
    name: t(`cat_${cat}`),
    value: count,
    color: CATEGORY_COLORS[cat] ?? '#94a3b8',
  }));

  const streak = getFardhuStreak(logs);
  const totalDone = Object.values(logs).filter(l => l.status === 'done').length;
  const totalJamaah = Object.values(logs).filter(l => l.isJamaah && l.status === 'done').length;

  const summaryCards = [
    { icon: Flame,     value: streak,     label: t('fardhu_streak'), color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30' },
    { icon: Trophy,    value: totalDone,  label: t('total_ibadah'),  color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
    { icon: TrendingUp,value: amalPoints, label: t('total_ap'),      color: 'text-purple-600',  bg: 'bg-purple-50 dark:bg-purple-950/30' },
    { icon: Star,      value: totalJamaah,label: t('total_jamaah'),  color: 'text-blue-600',    bg: 'bg-blue-50 dark:bg-blue-950/30' },
  ];

  if (Object.keys(logs).length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-4xl mb-3">📊</p>
        <p className="font-black uppercase tracking-tight">{t('no_data_yet')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {summaryCards.map(({ icon: Icon, value, label, color, bg }) => (
          <div key={label} className={`rounded-2xl p-4 ${bg} border`}>
            <Icon className={`h-5 w-5 ${color} mb-2`} />
            <p className="text-2xl font-black">{value}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Fardhu + Jamaah bar chart */}
      <div className="bg-card border-2 rounded-2xl p-5">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-4">{t('weekly_fardhu_chart')}</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={weeklyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="label" tick={{ fontSize: 10, fontWeight: 700 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 5]} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '2px solid hsl(var(--border))', fontSize: 12, fontWeight: 700 }} />
            <Bar dataKey="done"   name={t('done')}   fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="jamaah" name={t('jamaah')} fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[10px] text-muted-foreground text-center mt-1">{t('max_5_per_day')}</p>
      </div>

      {/* AP area chart */}
      <div className="bg-card border-2 rounded-2xl p-5">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-4">{t('daily_ap')} (30 {t('days')})</p>
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={apData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="apGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} interval={6} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '2px solid hsl(var(--border))', fontSize: 12, fontWeight: 700 }} />
            <Area type="monotone" dataKey="ap" name="AP" stroke="#22c55e" fill="url(#apGrad)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Category pie */}
      {pieData.length > 0 && (
        <div className="bg-card border-2 rounded-2xl p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-4">{t('ibadah_breakdown')}</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3} dataKey="value">
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 12, fontSize: 12, fontWeight: 700 }} />
              <Legend iconType="circle" iconSize={10} formatter={(v) => <span className="text-[11px] font-bold">{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
