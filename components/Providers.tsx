
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

type Language = 'id' | 'en';

interface TranslationDictionary {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: TranslationDictionary = {
  id: {
    title: "VersoKit",
    subtitle: "Toolkit Lengkap untuk Olahraga",
    dashboard: "Dasbor",
    futsal: "Papan Skor Futsal",
    lineup: "Penyusun Formasi",
    scoreboard: "Papan Skor Universal",
    inventory: "Inventaris",
    kanban: "Kanban Board",
    tournament: "Pembuat Turnamen",
    csv_helper: "Pembersih CSV",
    calculator: "Kalkulator Material",
    invoice: "Pembuat Invoice",
    shift: "Jadwal Shift",
    image_compressor: "Kompres Gambar",
    split_bill: "Patungan / Split Bill",
    export: "Ekspor CSV",
    import: "Impor CSV",
    reset: "Reset",
    add: "Tambah",
    delete: "Hapus",
    played: "Selesai",
    status: "Status",
    todo: "Rencana",
    progress: "Proses",
    done: "Selesai",
    offline: "Mode Offline Aktif",
    support: "Dukungan kami saat online kembali",
    home: "Kandang",
    away: "Tandang",
    score: "Skor",
    fouls: "Pelanggaran",
    time: "Waktu",
    start: "Mulai",
    pause: "Jeda",
    reset_total: "Reset Total",
    target_score: "Target Skor",
    team_name: "Nama Tim",
    add_item: "Tambah Barang",
    stock: "Stok",
    add_player: "Tambah Peserta",
    generate: "Buat Jadwal",
    dimensions: "Dimensi",
    area: "Luas",
    cost: "Estimasi Biaya",
    preview: "Pratinjau",
    remove_dupes: "Hapus Duplikat",
    download: "Unduh",
    print: "Cetak / Simpan PDF",
    client_name: "Nama Klien",
    business_name: "Nama Bisnis",
    date: "Tanggal",
    item_name: "Nama Barang",
    qty: "Jml",
    price: "Harga",
    total: "Total",
    grand_total: "Total Keseluruhan",
    employee_name: "Nama Karyawan",
    mon: "Sen",
    tue: "Sel",
    wed: "Rab",
    thu: "Kam",
    fri: "Jum",
    sat: "Sab",
    sun: "Min"
  },
  en: {
    title: "VersoKit",
    subtitle: "Complete Toolkit for Sports",
    dashboard: "Dashboard",
    futsal: "Futsal Scoreboard",
    lineup: "Lineup Builder",
    scoreboard: "Universal Scoreboard",
    inventory: "Inventory",
    kanban: "Kanban Board",
    tournament: "Tournament Maker",
    csv_helper: "CSV Cleaner",
    calculator: "Material Calculator",
    invoice: "Invoice Maker",
    shift: "Shift Roster",
    image_compressor: "Image Compressor",
    split_bill: "Split Bill / Shared Cost",
    export: "Export CSV",
    import: "Import CSV",
    reset: "Reset",
    add: "Add",
    delete: "Delete",
    played: "Played",
    status: "Status",
    todo: "To Do",
    progress: "In Progress",
    done: "Done",
    offline: "Offline Mode Active",
    support: "Support us when back online",
    home: "Home",
    away: "Away",
    score: "Score",
    fouls: "Fouls",
    time: "Time",
    start: "Start",
    pause: "Pause",
    reset_total: "Reset Total",
    target_score: "Target Score",
    team_name: "Team Name",
    add_item: "Add Item",
    stock: "Stock",
    add_player: "Add Participant",
    generate: "Generate Schedule",
    dimensions: "Dimensions",
    area: "Area",
    cost: "Estimated Cost",
    preview: "Preview",
    remove_dupes: "Remove Duplicates",
    download: "Download",
    print: "Print / Save PDF",
    client_name: "Client Name",
    business_name: "Business Name",
    date: "Date",
    item_name: "Item Name",
    qty: "Qty",
    price: "Price",
    total: "Total",
    grand_total: "Grand Total",
    employee_name: "Employee Name",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun"
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

  const t = (key: string) => translations[lang][key] || key;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}
