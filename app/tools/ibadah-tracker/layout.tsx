import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ibadah Tracker – Lacak Sholat, Quran & Amalan Harian | VersoKit',
  description:
    'Aplikasi pelacak ibadah Islam harian: sholat 5 waktu, sholat sunnah, tilawah, dzikir, puasa sunnah, sedekah. Fitur muhasabah, qadha reminder, dan amal points. 100% offline.',
  keywords: ['ibadah tracker', 'sholat tracker', 'amalan harian', 'muhasabah', 'quran tracker', 'puasa sunnah', 'dzikir'],
  openGraph: {
    title: 'Ibadah Tracker | VersoKit',
    description: 'Lacak ibadah harian Islam: sholat fardhu, sunnah, tilawah, dzikir, puasa. Muhasabah & amal points. 100% lokal, tanpa akun.',
    type: 'website',
  },
};

export default function IbadahTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
