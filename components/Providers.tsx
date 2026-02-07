'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

type Language = 'id' | 'en' | 'es' | 'pt' | 'de' | 'fr' | 'it';

interface TranslationDictionary {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: TranslationDictionary = {
  id: {
    title: "VersoKit",
    subtitle: "Toolkit Lengkap untuk Olahraga & Bisnis",
    dashboard: "Dasbor",
    futsal: "Papan Skor Futsal",
    budget_planner: "Rencana Anggaran",
    lineup: "Penyusun Formasi",
    scoreboard: "Skor Universal",
    inventory: "Inventaris",
    kanban: "Papan Tugas",
    tournament: "Manajer Turnamen",
    csv_helper: "Pembersih CSV",
    calculator: "Kalkulator Material",
    invoice: "Pembuat Invoice",
    shift: "Jadwal Shift",
    image_compressor: "Kompres Gambar",
    image_resizer: "Ubah Ukuran Gambar",
    image_cropper: "Potong Gambar",
    split_bill: "Patungan / Split Bill",
    pdf_merge: "Gabung PDF",
    image_to_pdf: "Gambar ke PDF",
    export: "Ekspor CSV",
    import: "Impor CSV",
    reset: "Reset",
    add: "Tambah",
    delete: "Hapus",
    status: "Status",
    todo: "Rencana",
    progress: "Proses",
    done: "Selesai",
    cat_sports: "Olahraga", cat_business: "Bisnis", cat_utilities: "Alat Bantu", cat_finance: "Keuangan"
  },
  en: {
    title: "VersoKit",
    subtitle: "Complete Toolkit for Sports & Business",
    dashboard: "Dashboard",
    futsal: "Futsal Scoreboard",
    budget_planner: "Budget Planner",
    lineup: "Lineup Builder",
    scoreboard: "Universal Scoreboard",
    inventory: "Inventory",
    kanban: "Kanban Board",
    tournament: "Tournament Manager",
    csv_helper: "CSV Cleaner",
    calculator: "Material Calculator",
    invoice: "Invoice Maker",
    shift: "Shift Roster",
    image_compressor: "Image Compressor",
    image_resizer: "Image Resizer",
    image_cropper: "Image Cropper",
    split_bill: "Split Bill",
    pdf_merge: "Merge PDF",
    image_to_pdf: "Image to PDF",
    export: "Export CSV",
    import: "Import CSV",
    reset: "Reset",
    add: "Add",
    delete: "Delete",
    status: "Status",
    todo: "To Do",
    progress: "In Progress",
    done: "Done",
    cat_sports: "Sports", cat_business: "Business", cat_utilities: "Utilities", cat_finance: "Finance"
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');

  useEffect(() => {
    const savedLang = localStorage.getItem('versokit-lang') as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('versokit-lang', newLang);
  };

  const t = (key: string) => translations[lang]?.[key] || translations['en']?.[key] || key;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}
