import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jadwal Sholat & Arah Kiblat Online - Prayer Times & Qibla Compass",
  description: "Cek jadwal sholat akurat berdasarkan lokasi GPS Anda dan temukan arah kiblat secara real-time menggunakan kompas digital di browser.",
};

export default function PrayerTimesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
