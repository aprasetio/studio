import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { format, subDays } from 'date-fns';

// ─── Types ────────────────────────────────────────────────────────────────────

export type IbadahCategory =
  | 'sholat_fardhu'
  | 'sholat_sunnah'
  | 'quran'
  | 'dzikir'
  | 'puasa'
  | 'sedekah'
  | 'amal'
  | 'insidental';

export interface QuantityOption {
  label: string;
  detail: string;
  ap: number;
}

export interface IbadahDef {
  id: string;
  name: string;
  category: IbadahCategory;
  isFardhu: boolean;
  baseAP: number;
  jamaahBonusAP: number;
  emoji: string;
  desc: string;
  defaultEnabled: boolean;
  showOnDays?: number[];        // 0=Sun 1=Mon … 6=Sat
  quantityOptions?: QuantityOption[]; // if set, show picker instead of single Done
}

export interface DailyLog {
  ibadahId: string;
  date: string;
  status: 'done' | 'missed';
  isJamaah?: boolean;
  detail?: string;   // e.g. "4r" for tahajud rakaat selection
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
  amalPoints: number;   // total (fardhu + sunnah)
  sunnahPoints: number; // sunnah-only — gates level advancement
  level: number;
  achievements: Achievement[];
  notificationsEnabled: boolean;

  toggleIbadah: (id: string) => void;
  logIbadah: (id: string, date: string, status: 'done' | 'missed', opts?: { isJamaah?: boolean; detail?: string; overrideAP?: number }) => void;
  undoLog: (id: string, date: string) => void;
  setNotificationsEnabled: (v: boolean) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

// Both thresholds must be satisfied simultaneously
export const AP_THRESHOLDS      = [0, 500, 1500, 3500, 7000, 15000, 25000, 50000];
export const SUNNAH_REQUIREMENTS = [0,  50,  200,  600, 1500,  3500,  7000, 14000];
export const LEVEL_NAMES = ['Muslim', 'Mukmin', 'Muttaqi', 'Muhsin', 'Awwab', 'Qanit', 'Shalih', 'Wali'];
export const LEVEL_DESCS = [
  'Menunaikan ibadah wajib',                // Muslim
  'Wajib + sunnah rutin',                   // Mukmin
  'Istiqomah dalam ketaatan',               // Muttaqi
  'Beribadah seolah melihat Allah',         // Muhsin
  'Selalu kembali kepada Allah',            // Awwab
  'Taat & khusyu dalam segala ibadah',      // Qanit
  'Sempurna amal & akhlaknya',              // Shalih
  'Kekasih Allah — puncak kedekatan',       // Wali
];

export const FARDHU_IDS = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya'];

export const IBADAH_CATALOG: IbadahDef[] = [
  // ── SHOLAT FARDHU ──────────────────────────────────────────────────────────
  { id: 'subuh',   name: 'Sholat Subuh',   category: 'sholat_fardhu', isFardhu: true, baseAP: 20, jamaahBonusAP: 30, emoji: '🌅', desc: '2 rakaat — sebelum terbit matahari. Subuh berjamaah di masjid = 50 AP (paling utama)',             defaultEnabled: true },
  { id: 'dzuhur',  name: 'Sholat Dzuhur',  category: 'sholat_fardhu', isFardhu: true, baseAP: 20, jamaahBonusAP: 10, emoji: '☀️', desc: '4 rakaat — tengah hari',                                                                          defaultEnabled: true },
  { id: 'ashar',   name: 'Sholat Ashar',   category: 'sholat_fardhu', isFardhu: true, baseAP: 20, jamaahBonusAP: 10, emoji: '🌤️', desc: '4 rakaat — sore hari. "Jagalah sholat Ashar" (QS. Al-Baqarah: 238)',                             defaultEnabled: true },
  { id: 'maghrib', name: 'Sholat Maghrib', category: 'sholat_fardhu', isFardhu: true, baseAP: 20, jamaahBonusAP: 10, emoji: '🌆', desc: '3 rakaat — setelah matahari terbenam',                                                           defaultEnabled: true },
  { id: 'isya',    name: 'Sholat Isya',    category: 'sholat_fardhu', isFardhu: true, baseAP: 20, jamaahBonusAP: 10, emoji: '🌙', desc: '4 rakaat — malam hari. Berjamaah setara separuh malam (HR. Muslim)',                             defaultEnabled: true },

  // ── SHOLAT SUNNAH ──────────────────────────────────────────────────────────
  { id: 'sunnah_subuh',    name: 'Sunnah Qabliyah Subuh',  category: 'sholat_sunnah', isFardhu: false, baseAP: 7,  jamaahBonusAP: 0, emoji: '🌄', desc: '2 rakaat sebelum Subuh — "lebih baik dari dunia dan isinya" (HR. Muslim)',           defaultEnabled: true },
  { id: 'dhuha',           name: 'Sholat Dhuha',           category: 'sholat_sunnah', isFardhu: false, baseAP: 12, jamaahBonusAP: 0, emoji: '⛅', desc: 'Min. 2 rakaat di waktu Dhuha — pintu rezeki dari Allah ﷻ',                         defaultEnabled: true },
  {
    id: 'tahajud', name: 'Tahajud / Qiyamul Lail', category: 'sholat_sunnah', isFardhu: false, baseAP: 15, jamaahBonusAP: 0, emoji: '🌟',
    desc: 'Sholat malam setelah tidur — waktu paling mustajab berdoa. Pilih jumlah rakaat:',
    defaultEnabled: true,
    quantityOptions: [
      { label: '2 rakaat',                    detail: '2r',  ap: 15 },
      { label: '4 rakaat',                    detail: '4r',  ap: 25 },
      { label: '8 rakaat',                    detail: '8r',  ap: 38 },
      { label: '11 rakaat (penuh + witir)',   detail: '11r', ap: 50 },
    ],
  },
  { id: 'witir',           name: 'Sholat Witir',           category: 'sholat_sunnah', isFardhu: false, baseAP: 10, jamaahBonusAP: 0, emoji: '🕌', desc: '1, 3 atau 5 rakaat penutup malam — sunnah muakkad',                               defaultEnabled: true },
  { id: 'rawatib_dzuhur',  name: 'Sunnah Rawatib Dzuhur',  category: 'sholat_sunnah', isFardhu: false, baseAP: 5,  jamaahBonusAP: 0, emoji: '☀️', desc: '4 rakaat sebelum + 2 rakaat sesudah Dzuhur',                                      defaultEnabled: false },
  { id: 'rawatib_maghrib', name: 'Sunnah Rawatib Maghrib', category: 'sholat_sunnah', isFardhu: false, baseAP: 5,  jamaahBonusAP: 0, emoji: '🌆', desc: '2 rakaat sesudah Maghrib',                                                         defaultEnabled: false },
  { id: 'rawatib_isya',    name: 'Sunnah Rawatib Isya',    category: 'sholat_sunnah', isFardhu: false, baseAP: 5,  jamaahBonusAP: 0, emoji: '🌙', desc: '2 rakaat sesudah Isya',                                                            defaultEnabled: false },

  // ── QURAN ──────────────────────────────────────────────────────────────────
  { id: 'tilawah',          name: 'Tilawah Al-Quran',       category: 'quran', isFardhu: false, baseAP: 10, jamaahBonusAP: 0, emoji: '📖', desc: 'Minimal 1 halaman — setiap huruf = 10 kebaikan (HR. Tirmidzi)',                            defaultEnabled: true },
  { id: 'quran_sampai_subuh', name: 'Baca Quran s.d. Subuh', category: 'quran', isFardhu: false, baseAP: 30, jamaahBonusAP: 0, emoji: '🌙📖', desc: 'Setelah Tahajud membaca Al-Quran hingga masuk waktu Subuh — amalan sangat utama',    defaultEnabled: false },
  { id: 'muraja',           name: 'Murajaah / Hafalan',     category: 'quran', isFardhu: false, baseAP: 15, jamaahBonusAP: 0, emoji: '🗒️', desc: 'Mengulang atau menghafal ayat Al-Quran',                                                defaultEnabled: false },

  // ── DZIKIR & DOA ──────────────────────────────────────────────────────────
  { id: 'dzikir_pagi',   name: 'Dzikir Pagi',    category: 'dzikir', isFardhu: false, baseAP: 8, jamaahBonusAP: 0, emoji: '🌞', desc: 'Wirid setelah Subuh — Al-Matsurat atau Hishnul Muslim',           defaultEnabled: true },
  { id: 'dzikir_petang', name: 'Dzikir Petang',   category: 'dzikir', isFardhu: false, baseAP: 8, jamaahBonusAP: 0, emoji: '🌇', desc: 'Wirid setelah Ashar/Maghrib — perlindungan di sore hari',        defaultEnabled: true },
  { id: 'istighfar',     name: 'Istighfar 100x',  category: 'dzikir', isFardhu: false, baseAP: 5, jamaahBonusAP: 0, emoji: '🤲', desc: 'Nabi ﷺ beristighfar 100x setiap hari (HR. Muslim)',              defaultEnabled: false },
  { id: 'sholawat',      name: 'Sholawat 100x',   category: 'dzikir', isFardhu: false, baseAP: 5, jamaahBonusAP: 0, emoji: '💚', desc: 'Sholawat 1x → Allah bersholawat 10x kepadanya (HR. Muslim)',    defaultEnabled: false },

  // ── PUASA SUNNAH ──────────────────────────────────────────────────────────
  { id: 'puasa_senin',        name: 'Puasa Senin',        category: 'puasa', isFardhu: false, baseAP: 25, jamaahBonusAP: 0, emoji: '🌙', desc: 'Amal manusia diperlihatkan pada hari Senin (HR. Muslim)',              defaultEnabled: true,  showOnDays: [1] },
  { id: 'puasa_kamis',        name: 'Puasa Kamis',        category: 'puasa', isFardhu: false, baseAP: 25, jamaahBonusAP: 0, emoji: '🌙', desc: 'Amal manusia diperlihatkan pada hari Kamis (HR. Muslim)',              defaultEnabled: true,  showOnDays: [4] },
  { id: 'puasa_ayyamul_bidh', name: 'Puasa Ayyamul Bidh', category: 'puasa', isFardhu: false, baseAP: 30, jamaahBonusAP: 0, emoji: '🌕', desc: 'Puasa 13–15 bulan Hijriyah — seperti puasa setahun penuh (HR. Ahmad)', defaultEnabled: false },

  // ── SEDEKAH ───────────────────────────────────────────────────────────────
  { id: 'sedekah',       name: 'Sedekah',       category: 'sedekah', isFardhu: false, baseAP: 10, jamaahBonusAP: 0, emoji: '💝', desc: 'Dalam bentuk apapun — Allah lipatgandakan hingga 700x (QS. 2:261)', defaultEnabled: true },
  { id: 'sedekah_subuh', name: 'Sedekah Subuh', category: 'sedekah', isFardhu: false, baseAP: 15, jamaahBonusAP: 0, emoji: '🌅💝', desc: 'Sedekah di pagi hari — dua malaikat berdoa untuk pemberi sedekah (HR. Bukhari)', defaultEnabled: false },

  // ── AMAL SHOLEH ──────────────────────────────────────────────────────────
  { id: 'majelis_ilmu', name: 'Majelis Ilmu',       category: 'amal', isFardhu: false, baseAP: 20, jamaahBonusAP: 0, emoji: '🕌📚', desc: 'Menghadiri kajian/halaqah ilmu — dianjurkan min. 1x seminggu. Malaikat mengelilingi majelis ilmu (HR. Muslim)', defaultEnabled: false },
  { id: 'ceramah',      name: 'Mendengarkan Ceramah', category: 'amal', isFardhu: false, baseAP: 8,  jamaahBonusAP: 0, emoji: '📻', desc: 'Mendengarkan ceramah via YouTube, radio, atau TV sebagai thalabul ilmu',                              defaultEnabled: false },
  { id: 'ilmu',         name: 'Thalabul Ilmu',        category: 'amal', isFardhu: false, baseAP: 8,  jamaahBonusAP: 0, emoji: '📚', desc: "Mempelajari ilmu syar'i — Allah permudah jalan ke surga (HR. Muslim)",                              defaultEnabled: false },

  // ── INSIDENTAL ───────────────────────────────────────────────────────────
  { id: 'jenguk_sakit',    name: 'Menjenguk Orang Sakit',   category: 'insidental', isFardhu: false, baseAP: 20, jamaahBonusAP: 0, emoji: '🏥', desc: '"Barangsiapa menjenguk orang sakit, ia berada di kebun surga" (HR. Muslim)',               defaultEnabled: false },
  { id: 'melayat',         name: 'Melayat / Sholat Jenazah', category: 'insidental', isFardhu: false, baseAP: 25, jamaahBonusAP: 0, emoji: '🕊️', desc: 'Mengantar jenazah hingga dikubur = 2 qirat pahala — seperti 2 gunung (HR. Bukhari)',    defaultEnabled: false },
  { id: 'hadiri_undangan', name: 'Menghadiri Undangan',      category: 'insidental', isFardhu: false, baseAP: 12, jamaahBonusAP: 0, emoji: '🤝', desc: 'Memenuhi undangan saudaranya — termasuk hak sesama Muslim (HR. Bukhari)',               defaultEnabled: false },
  { id: 'silaturahmi',     name: 'Silaturahmi',              category: 'insidental', isFardhu: false, baseAP: 15, jamaahBonusAP: 0, emoji: '👨‍👩‍👧', desc: 'Menghubungi/mengunjungi kerabat — memperpanjang umur & rezeki (HR. Bukhari)',    defaultEnabled: false },
];

// ─── Achievement Definitions ─────────────────────────────────────────────────

export const ACHIEVEMENT_DEFS: {
  id: string; label: string; desc: string;
  check: (s: IbadahStore) => boolean;
}[] = [
  { id: 'langkah_pertama', label: 'Langkah Pertama',    desc: 'Catat ibadah pertamamu',                                                   check: s => Object.keys(s.logs).length > 0 },
  { id: 'fardhu_5',        label: '5 Waktu Sempurna',   desc: 'Selesaikan semua 5 sholat fardhu dalam satu hari',                         check: s => hasPerfectFardhuDay(s) },
  { id: 'istiqomah_7',     label: 'Istiqomah 7 Hari',   desc: '7 hari berturut-turut sholat 5 waktu sempurna',                            check: s => getFardhuStreak(s.logs) >= 7 },
  { id: 'istiqomah_30',    label: 'Istiqomah 30 Hari',  desc: '30 hari berturut-turut sholat 5 waktu sempurna',                           check: s => getFardhuStreak(s.logs) >= 30 },
  { id: 'istiqomah_100',   label: 'Istiqomah 100 Hari', desc: '100 hari berturut-turut sholat 5 waktu sempurna',                          check: s => getFardhuStreak(s.logs) >= 100 },
  { id: 'tahajud_perdana', label: 'Ahli Malam',         desc: 'Pertama kali mencatat Tahajud',                                            check: s => Object.values(s.logs).some(l => l.ibadahId === 'tahajud' && l.status === 'done') },
  { id: 'tahajud_penuh',   label: 'Lailatul Abid',      desc: 'Tahajud 11 rakaat (penuh + witir) minimal sekali',                         check: s => Object.values(s.logs).some(l => l.ibadahId === 'tahajud' && l.detail === '11r') },
  { id: 'quran_7',         label: 'Pembaca Setia',      desc: '7 hari berturut-turut tilawah Al-Quran',                                   check: s => getIbadahStreak(s.logs, 'tilawah') >= 7 },
  { id: 'dzikir_7',        label: 'Lidah yang Basah',   desc: '7 hari berturut-turut dzikir pagi & petang',                               check: s => getIbadahStreak(s.logs, 'dzikir_pagi') >= 7 },
  { id: 'jamaah_10',       label: 'Jamaah Masjid',      desc: '10 kali sholat fardhu berjamaah',                                          check: s => countJamaah(s.logs) >= 10 },
  { id: 'sedekah_10',      label: 'Tangan Kanan',       desc: '10 kali sedekah tercatat',                                                  check: s => countDoneById(s.logs, 'sedekah') + countDoneById(s.logs, 'sedekah_subuh') >= 10 },
  { id: 'puasa_4',         label: 'Puasa Rutin',        desc: '4 kali puasa sunnah (Senin/Kamis)',                                         check: s => countDoneById(s.logs, 'puasa_senin') + countDoneById(s.logs, 'puasa_kamis') >= 4 },
  { id: 'hari_sempurna',   label: 'Hari Sempurna',      desc: '5 fardhu + Dhuha + Tahajud (rakaat apapun) + Tilawah dalam satu hari',      check: s => hasPerfectDay(s) },
  { id: 'level_muhsin',    label: 'Sang Muhsin',        desc: 'Capai level Muhsin (level 3) — beribadah seolah melihat Allah',             check: s => s.level >= 3 },
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
  const requiredIds = [...FARDHU_IDS, 'dhuha', 'tilawah'];
  for (let i = 0; i < 30; i++) {
    const d = format(subDays(new Date(), i), 'yyyy-MM-dd');
    const hasRequired = requiredIds.every(id => s.logs[logKey(id, d)]?.status === 'done');
    const hasTahajud = s.logs[logKey('tahajud', d)]?.status === 'done';
    if (hasRequired && hasTahajud) return true;
  }
  return false;
}

function levelFromThreshold(thresholds: number[], value: number): number {
  let level = 0;
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (value >= thresholds[i]) { level = i; break; }
  }
  return level;
}

export function getLevelInfo(totalAP: number, sunnahAP: number): {
  level: number; name: string; desc: string;
  nextAP: number; nextSunnah: number;
  apPct: number; sunnahPct: number;
  limitedBySunnah: boolean;
} {
  const apLevel     = levelFromThreshold(AP_THRESHOLDS, totalAP);
  const sunnahLevel = levelFromThreshold(SUNNAH_REQUIREMENTS, sunnahAP);
  const level       = Math.min(apLevel, sunnahLevel);
  const limitedBySunnah = sunnahLevel < apLevel;

  const currentAP     = AP_THRESHOLDS[level] ?? 0;
  const nextAP        = AP_THRESHOLDS[level + 1] ?? currentAP + 5000;
  const currentSunnah = SUNNAH_REQUIREMENTS[level] ?? 0;
  const nextSunnah    = SUNNAH_REQUIREMENTS[level + 1] ?? currentSunnah + 1000;

  const apPct     = Math.min(100, Math.round(((totalAP  - currentAP)     / (nextAP     - currentAP))     * 100));
  const sunnahPct = Math.min(100, Math.round(((sunnahAP - currentSunnah) / (nextSunnah - currentSunnah)) * 100));

  return {
    level,
    name:   LEVEL_NAMES[level]  ?? 'Wali',
    desc:   LEVEL_DESCS[level]  ?? '',
    nextAP,
    nextSunnah,
    apPct,
    sunnahPct,
    limitedBySunnah,
  };
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
      sunnahPoints: 0,
      level: 0,
      achievements: [],
      notificationsEnabled: false,

      toggleIbadah: (id) => {
        const def = IBADAH_CATALOG.find(i => i.id === id);
        if (!def || def.isFardhu) return;
        set(s => ({
          enabledIds: s.enabledIds.includes(id)
            ? s.enabledIds.filter(x => x !== id)
            : [...s.enabledIds, id],
        }));
      },

      logIbadah: (id, date, status, opts = {}) => {
        const s = get();
        const key = logKey(id, date);
        if (s.logs[key]) return;
        const def = IBADAH_CATALOG.find(i => i.id === id);
        if (!def) return;

        const { isJamaah = false, detail, overrideAP } = opts;
        const ap = status === 'done'
          ? (overrideAP ?? (def.baseAP + (isJamaah && def.jamaahBonusAP > 0 ? def.jamaahBonusAP : 0)))
          : 0;

        const newLog: DailyLog = {
          ibadahId: id, date, status,
          isJamaah: isJamaah && status === 'done',
          detail,
          loggedAt: new Date().toISOString(),
          ap,
        };

        const newLogs     = { ...s.logs, [key]: newLog };
        const newTotal    = s.amalPoints + ap;
        const newSunnah   = s.sunnahPoints + (!def.isFardhu && status === 'done' ? ap : 0);
        const { level }   = getLevelInfo(newTotal, newSunnah);

        const tempState = { ...s, logs: newLogs, amalPoints: newTotal, sunnahPoints: newSunnah, level } as IbadahStore;
        const newAchievements = [...s.achievements];
        for (const achDef of ACHIEVEMENT_DEFS) {
          if (!newAchievements.some(a => a.id === achDef.id) && achDef.check(tempState)) {
            newAchievements.push({ id: achDef.id, unlockedAt: new Date().toISOString() });
          }
        }

        set({ logs: newLogs, amalPoints: newTotal, sunnahPoints: newSunnah, level, achievements: newAchievements });
      },

      undoLog: (id, date) => {
        const key = logKey(id, date);
        const log = get().logs[key];
        if (!log) return;
        const def = IBADAH_CATALOG.find(i => i.id === id);
        set(s => {
          const newLogs   = { ...s.logs };
          delete newLogs[key];
          const newTotal  = Math.max(0, s.amalPoints  - log.ap);
          const newSunnah = Math.max(0, s.sunnahPoints - (!def?.isFardhu && log.status === 'done' ? log.ap : 0));
          const { level } = getLevelInfo(newTotal, newSunnah);
          return { logs: newLogs, amalPoints: newTotal, sunnahPoints: newSunnah, level };
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
