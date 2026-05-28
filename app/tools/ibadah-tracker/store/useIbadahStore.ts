import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { format, subDays, differenceInDays, parseISO } from 'date-fns';

// ─── Types ────────────────────────────────────────────────────────────────────

export type IbadahCategory = 'sholat_fardhu' | 'sholat_sunnah' | 'quran' | 'dzikir' | 'puasa' | 'sedekah' | 'amal';

export interface IbadahDef {
  id: string;
  name: string;         // Indonesian name (always)
  category: IbadahCategory;
  isFardhu: boolean;
  baseAP: number;
  jamaahBonusAP: number;
  emoji: string;
  desc: string;
  defaultEnabled: boolean;
  showOnDays?: number[]; // 0=Sun 1=Mon ... 6=Sat
}

export interface DailyLog {
  ibadahId: string;
  date: string;
  status: 'done' | 'missed';
  isJamaah?: boolean;
  loggedAt: string;
  ap: number;
}

export interface Achievement {
  id: string;
  unlockedAt: string;
}

export interface IbadahStore {
  enabledIds: string[];
  logs: Record<string, DailyLog>;
  amalPoints: number;
  level: number;
  achievements: Achievement[];
  notificationsEnabled: boolean;

  toggleIbadah: (id: string) => void;
  logIbadah: (id: string, date: string, status: 'done' | 'missed', isJamaah?: boolean) => void;
  undoLog: (id: string, date: string) => void;
  setNotificationsEnabled: (v: boolean) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const AP_THRESHOLDS = [0, 150, 400, 800, 1500, 3000, 6000, 12000];
export const LEVEL_NAMES = ['Mubtadi', 'Thalib', 'Mujahid', 'Shalih', 'Muttaqi', 'Abid', 'Mukhlis', 'Wali'];
export const FARDHU_IDS = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];

export const IBADAH_CATALOG: IbadahDef[] = [
  // SHOLAT FARDHU
  { id: 'subuh',   name: 'Sholat Subuh',   category: 'sholat_fardhu', isFardhu: true,  baseAP: 15, jamaahBonusAP: 20, emoji: '🌅', desc: '2 rakaat — sebelum terbit matahari',          defaultEnabled: true },
  { id: 'dzuhur',  name: 'Sholat Dzuhur',  category: 'sholat_fardhu', isFardhu: true,  baseAP: 15, jamaahBonusAP: 20, emoji: '☀️', desc: '4 rakaat — tengah hari',                      defaultEnabled: true },
  { id: 'ashar',   name: 'Sholat Ashar',   category: 'sholat_fardhu', isFardhu: true,  baseAP: 15, jamaahBonusAP: 20, emoji: '🌤️', desc: '4 rakaat — sore hari',                        defaultEnabled: true },
  { id: 'maghrib', name: 'Sholat Maghrib', category: 'sholat_fardhu', isFardhu: true,  baseAP: 15, jamaahBonusAP: 20, emoji: '🌆', desc: '3 rakaat — setelah matahari terbenam',         defaultEnabled: true },
  { id: 'isya',    name: 'Sholat Isya',    category: 'sholat_fardhu', isFardhu: true,  baseAP: 15, jamaahBonusAP: 20, emoji: '🌙', desc: '4 rakaat — malam hari',                       defaultEnabled: true },

  // SHOLAT SUNNAH
  { id: 'sunnah_subuh',    name: 'Sunnah Qabliyah Subuh',  category: 'sholat_sunnah', isFardhu: false, baseAP: 7,  jamaahBonusAP: 0, emoji: '🌄', desc: '2 rakaat sebelum Subuh — "lebih baik dari dunia dan isinya" (HR. Muslim)', defaultEnabled: true },
  { id: 'dhuha',           name: 'Sholat Dhuha',           category: 'sholat_sunnah', isFardhu: false, baseAP: 12, jamaahBonusAP: 0, emoji: '⛅', desc: 'Min. 2 rakaat di waktu Dhuha — pintu rezeki dari Allah',                  defaultEnabled: true },
  { id: 'tahajud',         name: 'Tahajud / Qiyamul Lail', category: 'sholat_sunnah', isFardhu: false, baseAP: 20, jamaahBonusAP: 0, emoji: '🌟', desc: 'Sholat malam setelah tidur — waktu paling mustajab berdoa',              defaultEnabled: true },
  { id: 'witir',           name: 'Sholat Witir',           category: 'sholat_sunnah', isFardhu: false, baseAP: 10, jamaahBonusAP: 0, emoji: '🕌', desc: '1, 3 atau 5 rakaat penutup malam',                                       defaultEnabled: true },
  { id: 'rawatib_dzuhur',  name: 'Sunnah Rawatib Dzuhur',  category: 'sholat_sunnah', isFardhu: false, baseAP: 5,  jamaahBonusAP: 0, emoji: '☀️', desc: '4 rakaat sebelum + 2 rakaat sesudah Dzuhur',                            defaultEnabled: false },
  { id: 'rawatib_maghrib', name: 'Sunnah Rawatib Maghrib', category: 'sholat_sunnah', isFardhu: false, baseAP: 5,  jamaahBonusAP: 0, emoji: '🌆', desc: '2 rakaat sesudah Maghrib',                                               defaultEnabled: false },
  { id: 'rawatib_isya',    name: 'Sunnah Rawatib Isya',    category: 'sholat_sunnah', isFardhu: false, baseAP: 5,  jamaahBonusAP: 0, emoji: '🌙', desc: '2 rakaat sesudah Isya',                                                  defaultEnabled: false },

  // QURAN
  { id: 'tilawah', name: 'Tilawah Al-Quran', category: 'quran', isFardhu: false, baseAP: 10, jamaahBonusAP: 0, emoji: '📖', desc: 'Minimal 1 halaman per hari — setiap huruf = 10 kebaikan (HR. Tirmidzi)', defaultEnabled: true },
  { id: 'muraja',  name: 'Murajaah / Hafalan', category: 'quran', isFardhu: false, baseAP: 15, jamaahBonusAP: 0, emoji: '🗒️', desc: 'Mengulang atau menghafal ayat Al-Quran',                                 defaultEnabled: false },

  // DZIKIR & DOA
  { id: 'dzikir_pagi',   name: 'Dzikir Pagi',    category: 'dzikir', isFardhu: false, baseAP: 8, jamaahBonusAP: 0, emoji: '🌞', desc: 'Wirid setelah Subuh — Al-Matsurat atau Hishnul Muslim', defaultEnabled: true },
  { id: 'dzikir_petang', name: 'Dzikir Petang',   category: 'dzikir', isFardhu: false, baseAP: 8, jamaahBonusAP: 0, emoji: '🌇', desc: 'Wirid setelah Ashar/Maghrib — perlindungan sore hari', defaultEnabled: true },
  { id: 'istighfar',     name: 'Istighfar 100x',  category: 'dzikir', isFardhu: false, baseAP: 5, jamaahBonusAP: 0, emoji: '🤲', desc: 'Nabi ﷺ beristighfar 100x setiap hari (HR. Muslim)', defaultEnabled: false },
  { id: 'sholawat',      name: 'Sholawat 100x',   category: 'dzikir', isFardhu: false, baseAP: 5, jamaahBonusAP: 0, emoji: '💚', desc: 'Barangsiapa bersholawat sekali, Allah bersholawat 10x kepadanya (HR. Muslim)', defaultEnabled: false },

  // PUASA SUNNAH
  { id: 'puasa_senin',        name: 'Puasa Senin',       category: 'puasa', isFardhu: false, baseAP: 25, jamaahBonusAP: 0, emoji: '🌙', desc: 'Amal manusia diperlihatkan pada hari Senin (HR. Muslim)', defaultEnabled: true, showOnDays: [1] },
  { id: 'puasa_kamis',        name: 'Puasa Kamis',       category: 'puasa', isFardhu: false, baseAP: 25, jamaahBonusAP: 0, emoji: '🌙', desc: 'Amal manusia diperlihatkan pada hari Kamis (HR. Muslim)',  defaultEnabled: true, showOnDays: [4] },
  { id: 'puasa_ayyamul_bidh', name: "Puasa Ayyamul Bidh",category: 'puasa', isFardhu: false, baseAP: 30, jamaahBonusAP: 0, emoji: '🌕', desc: 'Puasa tanggal 13–15 bulan Hijriyah — seperti puasa setahun penuh (HR. Ahmad)', defaultEnabled: false },

  // SEDEKAH & AMAL SHOLEH
  { id: 'sedekah',     name: 'Sedekah',          category: 'sedekah', isFardhu: false, baseAP: 10, jamaahBonusAP: 0, emoji: '💝', desc: 'Sedekah dalam bentuk apapun — Allah melipatgandakan hingga 700x (QS. 2:261)', defaultEnabled: true },
  { id: 'silaturahmi', name: 'Silaturahmi',       category: 'amal',   isFardhu: false, baseAP: 8,  jamaahBonusAP: 0, emoji: '🤝', desc: 'Menghubungi/mengunjungi kerabat — memperpanjang umur & rezeki (HR. Bukhari)', defaultEnabled: false },
  { id: 'ilmu',        name: 'Thalabul Ilmu',     category: 'amal',   isFardhu: false, baseAP: 8,  jamaahBonusAP: 0, emoji: '📚', desc: 'Mempelajari ilmu syar\'i — Allah permudah jalan ke surga (HR. Muslim)',        defaultEnabled: false },
];

// ─── Achievement Definitions ─────────────────────────────────────────────────

export const ACHIEVEMENT_DEFS: {
  id: string; label: string; desc: string;
  check: (s: IbadahStore) => boolean;
}[] = [
  { id: 'langkah_pertama', label: 'Langkah Pertama',   desc: 'Catat ibadah pertamamu',                                                  check: s => Object.keys(s.logs).length > 0 },
  { id: 'fardhu_5',        label: '5 Waktu Sempurna',  desc: 'Selesaikan semua 5 sholat fardhu dalam satu hari',                        check: s => hasPerfectFardhuDay(s) },
  { id: 'istiqomah_7',     label: 'Istiqomah 7 Hari',  desc: '7 hari berturut-turut sholat 5 waktu sempurna',                           check: s => getFardhuStreak(s.logs) >= 7 },
  { id: 'istiqomah_30',    label: 'Istiqomah 30 Hari', desc: '30 hari berturut-turut sholat 5 waktu sempurna',                          check: s => getFardhuStreak(s.logs) >= 30 },
  { id: 'istiqomah_100',   label: 'Istiqomah 100 Hari',desc: '100 hari berturut-turut sholat 5 waktu sempurna',                         check: s => getFardhuStreak(s.logs) >= 100 },
  { id: 'tahajud_perdana', label: 'Ahli Malam',        desc: 'Pertama kali mencatat Tahajud',                                           check: s => Object.values(s.logs).some(l => l.ibadahId === 'tahajud' && l.status === 'done') },
  { id: 'quran_7',         label: 'Pembaca Setia',     desc: '7 hari berturut-turut tilawah Al-Quran',                                  check: s => getIbadahStreak(s.logs, 'tilawah') >= 7 },
  { id: 'dzikir_7',        label: 'Lidah yang Basah',  desc: '7 hari berturut-turut dzikir pagi & petang',                              check: s => getIbadahStreak(s.logs, 'dzikir_pagi') >= 7 },
  { id: 'jamaah_10',       label: 'Jamaah Masjid',     desc: '10 kali sholat fardhu berjamaah',                                         check: s => countJamaah(s.logs) >= 10 },
  { id: 'sedekah_10',      label: 'Tangan Kanan',      desc: '10 kali sedekah tercatat',                                                check: s => countDoneById(s.logs, 'sedekah') >= 10 },
  { id: 'puasa_4',         label: 'Puasa Rutin',       desc: '4 kali puasa sunnah (Senin/Kamis)',                                       check: s => countDoneById(s.logs, 'puasa_senin') + countDoneById(s.logs, 'puasa_kamis') >= 4 },
  { id: 'hari_sempurna',   label: 'Hari Sempurna',     desc: '5 fardhu + Dhuha + Tahajud + Tilawah dalam satu hari',                    check: s => hasPerfectDay(s) },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function today(): string {
  return format(new Date(), 'yyyy-MM-dd');
}

export function logKey(ibadahId: string, date: string): string {
  return `${ibadahId}-${date}`;
}

export function getFardhuStreak(logs: Record<string, DailyLog>): number {
  let streak = 0;
  let cursor = new Date();
  for (let i = 0; i < 365; i++) {
    const d = format(cursor, 'yyyy-MM-dd');
    const allDone = FARDHU_IDS.every(id => logs[logKey(id, d)]?.status === 'done');
    if (!allDone) break;
    streak++;
    cursor = subDays(cursor, 1);
  }
  return streak;
}

export function getIbadahStreak(logs: Record<string, DailyLog>, ibadahId: string): number {
  let streak = 0;
  let cursor = new Date();
  for (let i = 0; i < 365; i++) {
    const d = format(cursor, 'yyyy-MM-dd');
    if (logs[logKey(ibadahId, d)]?.status !== 'done') break;
    streak++;
    cursor = subDays(cursor, 1);
  }
  return streak;
}

function countJamaah(logs: Record<string, DailyLog>): number {
  return Object.values(logs).filter(l => l.isJamaah && l.status === 'done').length;
}

function countDoneById(logs: Record<string, DailyLog>, id: string): number {
  return Object.values(logs).filter(l => l.ibadahId === id && l.status === 'done').length;
}

function hasPerfectFardhuDay(s: IbadahStore): boolean {
  for (let i = 0; i < 30; i++) {
    const d = format(subDays(new Date(), i), 'yyyy-MM-dd');
    if (FARDHU_IDS.every(id => s.logs[logKey(id, d)]?.status === 'done')) return true;
  }
  return false;
}

function hasPerfectDay(s: IbadahStore): boolean {
  const perfectIds = [...FARDHU_IDS, 'dhuha', 'tahajud', 'tilawah'];
  for (let i = 0; i < 30; i++) {
    const d = format(subDays(new Date(), i), 'yyyy-MM-dd');
    if (perfectIds.every(id => s.logs[logKey(id, d)]?.status === 'done')) return true;
  }
  return false;
}

export function getLevelInfo(ap: number): { level: number; name: string; next: number; pct: number } {
  let level = 0;
  for (let i = AP_THRESHOLDS.length - 1; i >= 0; i--) {
    if (ap >= AP_THRESHOLDS[i]) { level = i; break; }
  }
  const current = AP_THRESHOLDS[level] ?? 0;
  const next = AP_THRESHOLDS[level + 1] ?? current + 2000;
  const pct = Math.round(((ap - current) / (next - current)) * 100);
  return { level, name: LEVEL_NAMES[level] ?? 'Wali', next, pct };
}

export function getDailyFardhuRate(logs: Record<string, DailyLog>, days = 7): number {
  let done = 0, total = 0;
  for (let i = 0; i < days; i++) {
    const d = format(subDays(new Date(), i), 'yyyy-MM-dd');
    FARDHU_IDS.forEach(id => {
      total++;
      if (logs[logKey(id, d)]?.status === 'done') done++;
    });
  }
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useIbadahStore = create<IbadahStore>()(
  persist(
    (set, get) => ({
      enabledIds: IBADAH_CATALOG.filter(i => i.defaultEnabled).map(i => i.id),
      logs: {},
      amalPoints: 0,
      level: 0,
      achievements: [],
      notificationsEnabled: false,

      toggleIbadah: (id) => {
        const def = IBADAH_CATALOG.find(i => i.id === id);
        if (!def || def.isFardhu) return; // fardhu always enabled
        set(s => ({
          enabledIds: s.enabledIds.includes(id)
            ? s.enabledIds.filter(x => x !== id)
            : [...s.enabledIds, id],
        }));
      },

      logIbadah: (id, date, status, isJamaah = false) => {
        const s = get();
        const key = logKey(id, date);
        if (s.logs[key]) return; // already logged
        const def = IBADAH_CATALOG.find(i => i.id === id);
        if (!def) return;

        const ap = status === 'done'
          ? def.baseAP + (isJamaah && def.jamaahBonusAP > 0 ? def.jamaahBonusAP : 0)
          : 0;

        const newLog: DailyLog = { ibadahId: id, date, status, isJamaah: isJamaah && status === 'done', loggedAt: new Date().toISOString(), ap };
        const newLogs = { ...s.logs, [key]: newLog };
        const newAP = s.amalPoints + ap;
        const { level } = getLevelInfo(newAP);

        // Check achievements
        const tempState = { ...s, logs: newLogs, amalPoints: newAP, level } as IbadahStore;
        const newAchievements = [...s.achievements];
        for (const def of ACHIEVEMENT_DEFS) {
          if (!newAchievements.some(a => a.id === def.id) && def.check(tempState)) {
            newAchievements.push({ id: def.id, unlockedAt: new Date().toISOString() });
          }
        }

        set({ logs: newLogs, amalPoints: newAP, level, achievements: newAchievements });
      },

      undoLog: (id, date) => {
        const key = logKey(id, date);
        const log = get().logs[key];
        if (!log) return;
        set(s => {
          const newLogs = { ...s.logs };
          delete newLogs[key];
          const newAP = Math.max(0, s.amalPoints - log.ap);
          const { level } = getLevelInfo(newAP);
          return { logs: newLogs, amalPoints: newAP, level };
        });
      },

      setNotificationsEnabled: (v) => set({ notificationsEnabled: v }),
    }),
    {
      name: 'versokit-ibadah-tracker-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
