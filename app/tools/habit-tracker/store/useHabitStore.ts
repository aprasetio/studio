import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { format, subDays, differenceInDays, parseISO } from 'date-fns';

// ─── Types ────────────────────────────────────────────────────────────────────

export type HabitCategory = 'health' | 'fitness' | 'learning' | 'mindfulness' | 'productivity' | 'custom';
export type LogStatus = 'done' | 'skip' | 'missed';

export interface Habit {
  id: string;
  name: string;
  emoji: string;
  color: string;
  category: HabitCategory;
  stackAfter?: string;   // habit id
  reminderTime?: string; // "HH:MM"
  createdAt: string;
  isActive: boolean;
}

export interface HabitLog {
  habitId: string;
  date: string; // "YYYY-MM-DD"
  status: LogStatus;
  skipReason?: string;
  loggedAt: string;
}

export interface Achievement {
  id: string;
  unlockedAt: string;
}

export interface HabitStore {
  habits: Habit[];
  logs: Record<string, HabitLog>; // key: `${habitId}-${date}`
  xp: number;
  level: number;
  coins: number;
  streakShields: number;
  achievements: Achievement[];
  chestOpenedAt: string;
  notificationsEnabled: boolean;

  // Actions
  addHabit: (h: Omit<Habit, 'id' | 'createdAt'>) => void;
  editHabit: (id: string, h: Partial<Omit<Habit, 'id' | 'createdAt'>>) => void;
  deleteHabit: (id: string) => void;
  toggleActive: (id: string) => void;
  logHabit: (habitId: string, date: string, status: LogStatus, skipReason?: string) => void;
  undoLog: (habitId: string, date: string) => void;
  buyShield: () => void;
  openMysteryChest: () => void;
  setNotificationsEnabled: (v: boolean) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1200, 2500, 5000, 10000];
export const SHIELD_COST = 50;
export const MAX_SHIELDS = 3;
export const XP_DONE = 10;
export const XP_SKIP = 3;

export const ACHIEVEMENT_DEFS: { id: string; label: string; desc: string; check: (s: HabitStore) => boolean }[] = [
  { id: 'first_log',  label: 'First Step',      desc: 'Log your first habit',            check: s => Object.values(s.logs).some(l => l.status === 'done') },
  { id: 'streak_3',   label: '3-Day Streak',    desc: 'Achieve a 3-day streak',          check: s => getMaxStreakAny(s) >= 3 },
  { id: 'streak_7',   label: 'Week Warrior',    desc: 'Achieve a 7-day streak',          check: s => getMaxStreakAny(s) >= 7 },
  { id: 'streak_21',  label: 'Habit Former',    desc: 'Achieve a 21-day streak',         check: s => getMaxStreakAny(s) >= 21 },
  { id: 'streak_30',  label: 'Monthly Hero',    desc: 'Achieve a 30-day streak',         check: s => getMaxStreakAny(s) >= 30 },
  { id: 'streak_100', label: 'Century Club',    desc: 'Achieve a 100-day streak',        check: s => getMaxStreakAny(s) >= 100 },
  { id: 'habits_5',   label: 'Multi-Tasker',    desc: 'Have 5 active habits',            check: s => s.habits.filter(h => h.isActive).length >= 5 },
  { id: 'total_50',   label: 'Half Century',    desc: '50 total habit completions',      check: s => countDone(s) >= 50 },
  { id: 'total_100',  label: 'Centurion',       desc: '100 total habit completions',     check: s => countDone(s) >= 100 },
  { id: 'level_5',    label: 'Level 5 Legend',  desc: 'Reach level 5',                  check: s => s.level >= 5 },
  { id: 'shield_user',label: 'Fortress',        desc: 'Use your first Streak Shield',    check: s => s.achievements.some(a => a.id === 'shield_used_marker') },
  { id: 'collector',  label: 'Treasure Hunter', desc: 'Open your first Mystery Chest',  check: s => !!s.chestOpenedAt },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function today(): string {
  return format(new Date(), 'yyyy-MM-dd');
}

export function logKey(habitId: string, date: string): string {
  return `${habitId}-${date}`;
}

export function getStreak(logs: Record<string, HabitLog>, habitId: string): number {
  let streak = 0;
  let cursor = new Date();
  for (let i = 0; i < 365; i++) {
    const d = format(cursor, 'yyyy-MM-dd');
    const log = logs[logKey(habitId, d)];
    if (!log || log.status === 'missed') break;
    if (log.status === 'done') streak++;
    // skip doesn't add to streak but doesn't break it
    cursor = subDays(cursor, 1);
  }
  return streak;
}

function getMaxStreakAny(s: HabitStore): number {
  return Math.max(0, ...s.habits.map(h => getStreak(s.logs, h.id)));
}

function countDone(s: HabitStore): number {
  return Object.values(s.logs).filter(l => l.status === 'done').length;
}

export function getLevelInfo(xp: number): { level: number; current: number; next: number; pct: number } {
  let level = 0;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) { level = i; break; }
  }
  const current = LEVEL_THRESHOLDS[level] ?? 0;
  const next = LEVEL_THRESHOLDS[level + 1] ?? current + 1000;
  const pct = Math.round(((xp - current) / (next - current)) * 100);
  return { level, current, next, pct };
}

export function getWeeklyCompletionRate(logs: Record<string, HabitLog>, habits: Habit[]): number {
  const active = habits.filter(h => h.isActive);
  if (!active.length) return 0;
  let done = 0, total = 0;
  for (let i = 0; i < 7; i++) {
    const d = format(subDays(new Date(), i), 'yyyy-MM-dd');
    active.forEach(h => {
      total++;
      if (logs[logKey(h.id, d)]?.status === 'done') done++;
    });
  }
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useHabitStore = create<HabitStore>()(
  persist(
    (set, get) => ({
      habits: [],
      logs: {},
      xp: 0,
      level: 0,
      coins: 0,
      streakShields: 0,
      achievements: [],
      chestOpenedAt: '',
      notificationsEnabled: false,

      addHabit: (h) => {
        const habit: Habit = { ...h, id: Date.now().toString(), createdAt: new Date().toISOString() };
        set(s => ({ habits: [...s.habits, habit] }));
      },

      editHabit: (id, h) => {
        set(s => ({ habits: s.habits.map(x => x.id === id ? { ...x, ...h } : x) }));
      },

      deleteHabit: (id) => {
        set(s => ({
          habits: s.habits.filter(x => x.id !== id),
          logs: Object.fromEntries(Object.entries(s.logs).filter(([k]) => !k.startsWith(id + '-'))),
        }));
      },

      toggleActive: (id) => {
        set(s => ({ habits: s.habits.map(x => x.id === id ? { ...x, isActive: !x.isActive } : x) }));
      },

      logHabit: (habitId, date, status, skipReason) => {
        const s = get();
        const key = logKey(habitId, date);
        const existing = s.logs[key];
        if (existing && existing.status !== 'missed') return; // already logged, use undo

        let xpGain = status === 'done' ? XP_DONE : status === 'skip' ? XP_SKIP : 0;
        let coinGain = Math.floor(xpGain / 10);
        const newXp = s.xp + xpGain;
        const newCoins = s.coins + coinGain;
        const { level } = getLevelInfo(newXp);

        const newLog: HabitLog = { habitId, date, status, skipReason, loggedAt: new Date().toISOString() };
        const newLogs = { ...s.logs, [key]: newLog };

        // Check achievements
        const tempState = { ...s, logs: newLogs, xp: newXp, level, coins: newCoins };
        const newAchievements = [...s.achievements];
        for (const def of ACHIEVEMENT_DEFS) {
          if (!newAchievements.some(a => a.id === def.id) && def.check(tempState as HabitStore)) {
            newAchievements.push({ id: def.id, unlockedAt: new Date().toISOString() });
          }
        }

        set({ logs: newLogs, xp: newXp, level, coins: newCoins, achievements: newAchievements });
      },

      undoLog: (habitId, date) => {
        const key = logKey(habitId, date);
        const log = get().logs[key];
        if (!log) return;
        // Reverse XP/coins
        const xpWas = log.status === 'done' ? XP_DONE : log.status === 'skip' ? XP_SKIP : 0;
        const coinsWas = Math.floor(xpWas / 10);
        set(s => {
          const newLogs = { ...s.logs };
          delete newLogs[key];
          const newXp = Math.max(0, s.xp - xpWas);
          const newCoins = Math.max(0, s.coins - coinsWas);
          const { level } = getLevelInfo(newXp);
          return { logs: newLogs, xp: newXp, coins: newCoins, level };
        });
      },

      buyShield: () => {
        const s = get();
        if (s.coins < SHIELD_COST || s.streakShields >= MAX_SHIELDS) return;
        set({ coins: s.coins - SHIELD_COST, streakShields: s.streakShields + 1 });
      },

      openMysteryChest: () => {
        const s = get();
        const rate = getWeeklyCompletionRate(s.logs, s.habits);
        if (rate < 80) return;
        if (s.chestOpenedAt) {
          const daysSince = differenceInDays(new Date(), parseISO(s.chestOpenedAt));
          if (daysSince < 7) return;
        }
        // Random reward
        const xpReward = Math.floor(Math.random() * 40) + 10; // 10–50
        const coinReward = Math.floor(Math.random() * 15) + 5; // 5–20
        const newXp = s.xp + xpReward;
        const { level } = getLevelInfo(newXp);
        const newAchievements = [...s.achievements];
        if (!newAchievements.some(a => a.id === 'collector')) {
          newAchievements.push({ id: 'collector', unlockedAt: new Date().toISOString() });
        }
        set({ xp: newXp, level, coins: s.coins + coinReward, chestOpenedAt: new Date().toISOString(), achievements: newAchievements });
      },

      setNotificationsEnabled: (v) => set({ notificationsEnabled: v }),
    }),
    {
      name: 'versokit-habit-tracker-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
