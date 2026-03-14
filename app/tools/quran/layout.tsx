import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quran Digital Online - Terjemahan & Tafsir Indonesia (Lengkap)",
  description: "Baca Al-Quran digital dengan terjemahan Indonesia dan tafsir per ayat. Dilengkapi fitur bookmark, folder kustom, dan pencarian surah.",
};

export default function QuranLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}
