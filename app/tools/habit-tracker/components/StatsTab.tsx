'use client';

import React from 'react';
import { format, subDays } from 'date-fns';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, Legend,
} from 'recharts';
import { useHabitStore, getStreak, logKey } from '../store/useHabitStore';
import { TrendingUp, Target, Flame, CheckCircle2 } from 'lucide-react';

interface StatsTabProps {
  t: (k: string) => string;
}

export function StatsTab({ t }: StatsTabProps) {
  const { habits, logs, xp } = useHabitStore();
  const active = habits.filter(h => h.isActive);

  // Weekly completion data (last 7 days)
  const weeklyData = Array.from({ length: 7 }, (_, i) => {
    const d = format(subDays(new Date(), 6 - i), 'yyyy-MM-dd');
    const label = format(subDays(new Date(), 6 - i), 'EEE');
    const done = active.filter(h => logs[logKey(h.id, d)]?.status === 'done').length;
    const skip = active.filter(h => logs[logKey(h.id, d)]?.status === 'skip').length;
    return { label, done, skip, total: active.length };
  });

  // XP growth (last 30 days — cumulative daily XP estimate)
  const xpData = Array.from({ length: 30 }, (_, i) => {
    const d = format(subDays(new Date(), 29 - i), 'yyyy-MM-dd');
    const label = format(subDays(new Date(), 29 - i), 'MMM d');
    const dayXp = active.reduce((acc, h) => {
      const log = logs[logKey(h.id, d)];
      if (log?.status === 'done') return acc + 10;
      if (log?.status === 'skip') return acc + 3;
      return acc;
    }, 0);
    return { label, xp: dayXp };
  });

  // Pie chart: all-time distribution
  const totalDone = Object.values(logs).filter(l => l.status === 'done').length;
  const totalSkip = Object.values(logs).filter(l => l.status === 'skip').length;
  const totalMissed = Object.values(logs).filter(l => l.status === 'missed').length;
  const pieData = [
    { name: t('done'), value: totalDone, color: '#22c55e' },
    { name: t('skipped'), value: totalSkip, color: '#f59e0b' },
    { name: t('missed'), value: totalMissed, color: '#ef4444' },
  ].filter(d => d.value > 0);

  // Best streak
  const bestStreak = Math.max(0, ...active.map(h => getStreak(logs, h.id)));

  // Avg completion (last 7 days)
  const avgCompletion = active.length > 0 ? Math.round(
    weeklyData.reduce((acc, d) => acc + (d.total > 0 ? d.done / d.total : 0), 0) / 7 * 100
  ) : 0;

  const summaryCards = [
    { icon: CheckCircle2, value: totalDone, label: t('total_done'), color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
    { icon: Flame, value: bestStreak, label: t('best_streak'), color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30' },
    { icon: TrendingUp, value: `${avgCompletion}%`, label: t('avg_completion'), color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/30' },
    { icon: Target, value: xp, label: t('total_xp'), color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/30' },
  ];

  if (active.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-4xl mb-3">📊</p>
        <p className="font-black uppercase tracking-tight">{t('no_data')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3">
        {summaryCards.map(({ icon: Icon, value, label, color, bg }) => (
          <div key={label} className={`rounded-2xl p-4 ${bg} border`}>
            <Icon className={`h-5 w-5 ${color} mb-2`} />
            <p className="text-2xl font-black">{value}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Weekly bar chart */}
      <div className="bg-card border-2 rounded-2xl p-5">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-4">{t('weekly_completion')}</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={weeklyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="label" tick={{ fontSize: 10, fontWeight: 700 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: '2px solid hsl(var(--border))', fontSize: 12, fontWeight: 700 }}
              labelStyle={{ textTransform: 'uppercase', letterSpacing: 1 }}
            />
            <Bar dataKey="done" name={t('done')} fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="skip" name={t('skipped')} fill="#f59e0b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* XP area chart */}
      <div className="bg-card border-2 rounded-2xl p-5">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-4">{t('daily_xp')} (30 {t('days')})</p>
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={xpData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} interval={6} />
            <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: '2px solid hsl(var(--border))', fontSize: 12, fontWeight: 700 }}
            />
            <Area type="monotone" dataKey="xp" name="XP" stroke="#8b5cf6" fill="url(#xpGrad)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Pie chart */}
      {pieData.length > 0 && (
        <div className="bg-card border-2 rounded-2xl p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.15em] mb-4">{t('all_time_distribution')}</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 12, fontSize: 12, fontWeight: 700 }} />
              <Legend iconType="circle" iconSize={10} formatter={(v) => <span className="text-[11px] font-bold uppercase">{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
