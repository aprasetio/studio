'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { 
  Search, 
  ArrowRight, 
  Trophy, 
  Activity, 
  Clock, 
  Minimize, 
  Users, 
  FileText, 
  Box, 
  Calculator, 
  Scaling, 
  Scissors,
  ShieldCheck,
  WifiOff,
  Heart,
  Navigation,
  Stamp,
  FileBadge,
  Lightbulb,
  Star,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/components/Providers';
import { cn } from '@/lib/utils';

type Category = 'favorites' | 'new' | 'religious' | 'sports' | 'business' | 'finance' | 'productivity';

interface Tool {
  id: string;
  icon: React.ElementType;
  category: Exclude<Category, 'favorites' | 'new'>;
  isNew?: boolean;
  href: string;
  name: Record<string, string>;
  desc: Record<string, string>;
}

const TOOLS_DATA: Tool[] = [
  // --- RELIGIOUS ---
  {
    id: "quran",
    icon: BookOpen,
    category: "religious",
    isNew: true,
    href: "/tools/quran",
    name: { en: "Digital Quran Reader", id: "Al-Quran Digital", de: "Digitaler Koran", es: "Corán Digital", pt: "Alcorão Digital", fr: "Coran Digital", it: "Corano Digitale" },
    desc: { en: "Read Quran with tajweed, translation, and Indonesian tafsir per verse.", id: "Baca Al-Quran dengan tajwid, terjemahan, dan tafsir per ayat.", de: "Koran lesen mit Tajwid und Übersetzung.", es: "Lee el Corán con tajwid y traducción.", pt: "Leia o Alcorão com tajweed e tradução.", fr: "Lisez le Coran dengan tajwid et traduction.", it: "Leggi il Corano con tajwid e traduzione." }
  },
  {
    id: "prayer-times",
    icon: Navigation,
    category: "religious",
    isNew: true,
    href: "/tools/prayer-times",
    name: { en: "Prayer Times & Qibla", id: "Jadwal Sholat & Kiblat", de: "Gebetszeiten & Qibla", es: "Horarios de Oración", pt: "Horários de Oração", fr: "Heures de Prière", it: "Orari Preghiera" },
    desc: { en: "Accurate local prayer times and real-time compass for Qibla direction.", id: "Jadwal sholat akurat dan kompas arah kiblat real-time.", de: "Genaue Gebetszeiten und Qibla-Kompass.", es: "Horarios de oración y brújula de Qibla en tiempo real.", pt: "Horários de oração e bússola Qibla em tempo real.", fr: "Heures de prière et boussole Qibla en temps réel.", it: "Orari di preghiera e bussola Qibla in tempo reale." }
  },
  // --- BUSINESS ---
  {
    id: "idea-tracker",
    icon: Lightbulb,
    category: "business",
    href: "/tools/idea-tracker",
    isNew: true,
    name: { en: "Idea Tracker", id: "Pelacak Ide", de: "Ideen-Tracker", es: "Rastreador de Ideas", pt: "Rastreador de Ideias", fr: "Suivi d'Idées", it: "Tracker di Idee" },
    desc: { en: "Capture and organize brainstorming ideas locally with voice dictation.", id: "Catat dan kelola ide brainstorming secara lokal dengan dikte suara.", de: "Ideen lokal erfassen und organisieren.", es: "Captura y organiza ideas localmente.", pt: "Capture e organize ideias localmente.", fr: "Capturez et organisez vos idées localement.", it: "Cattura e organizza le idee localmente." }
  },
  // --- PRODUCTIVITY (NEW) ---
  {
    id: "pdf-watermark",
    icon: FileBadge,
    category: "productivity",
    isNew: true,
    href: "/tools/pdf-watermark",
    name: { en: "PDF Watermark", id: "Watermark PDF", de: "PDF-Wasserzeichen", es: "Marca PDF", pt: "Marca d'água PDF", fr: "Filigrane PDF", it: "Filigrana PDF" },
    desc: { en: "Securely add text watermarks to PDF files locally.", id: "Tambah watermark teks ke file PDF lokal dengan aman.", de: "Sicher Text-Wasserzeichen zu PDF-Dateien hinzufügen.", es: "Añade marcas de agua de teks a PDF localmente.", pt: "Adicione marcas d'água de texto a PDFs localmente.", fr: "Ajoutez des filigranes texte aux PDF localement.", it: "Aggiungi filigrana teks ai PDF localmente." }
  },
  {
    id: "image-watermark",
    icon: Stamp,
    category: "productivity",
    isNew: true,
    href: "/tools/image-watermark",
    name: { en: "Image Watermark", id: "Watermark Foto", de: "Bild-Wasserzeichen", es: "Marca de Agua", pt: "Marca d'água", fr: "Filigrane Image", it: "Filigrana" },
    desc: { en: "Add text or logo patterns to protect images locally.", id: "Tambah teks atau logo untuk melindungi foto secara lokal.", de: "Text atau Logos zum Schutz von Bildern hinzufügen.", es: "Añade teks o logos para proteger imágenes.", pt: "Adicione teks atau logotipos para proteger imagens.", fr: "Ajoutez teks atau logo untuk protéger vos images.", it: "Aggiungi testo atau loghi per prottegere immagini." }
  },
  // --- SPORTS ---
  {
    id: "americano",
    icon: Trophy,
    category: "sports",
    href: "/tools/americano",
    name: { en: "Americano Generator", id: "Generator Americano", de: "Americano Generator", es: "Generador Americano", pt: "Gerador Americano", fr: "Générateur Americano", it: "Generatore Americano" },
    desc: { en: "Organize Padel or Pickleball tournaments. Auto-pairing & scoring.", id: "Atur turnamen Padel atau Pickleball. Rotasi pasangan otomatis.", de: "Organisieren Sie Padel- oder Pickleball-Turniere. Automatische Paarung.", es: "Organiza torneos de Pádel o Pickleball. Emparejamiento automático.", pt: "Organize torneios de Padel atau Pickleball. Emparelhamento automático.", fr: "Organisez des tournois de Padel atau Pickleball. Appariement auto.", it: "Organizza tornei di Padel o Pickleball. Abbinamento automatico." }
  },
  {
    id: "tennis",
    icon: Activity,
    category: "sports",
    href: "/tools/tennis",
    name: { en: "Tennis Generator", id: "Generator Tenis", de: "Tennis-Generator", es: "Generador de Tenis", pt: "Gerador de Tênis", fr: "Générateur Tennis", it: "Generatore Tennis" },
    desc: { en: "Create fair doubles matches for social clubs with skill balancing.", id: "Buat pertandingan ganda yang adil untuk klub dengan penyeimbang skill.", de: "Erstellen Sie faire Doppelspiele für Clubs.", es: "Crea partidos de dobles justos para clubes.", pt: "Crie jogos de duplas justos para clubes.", fr: "Créez des doubles équitables pour les clubs.", it: "Crea doppi equilibrati per i club." }
  },
  {
    id: "futsal",
    icon: Clock,
    category: "sports",
    href: "/tools/futsal",
    name: { en: "Futsal Scoreboard", id: "Papan Skor Futsal", de: "Futsal-Anzeige", es: "Marcador Futsal", pt: "Placar Futsal", fr: "Score Futsal", it: "Tabellone Calcetto" },
    desc: { en: "Digital scoreboard with timer and fouls.", id: "Papan skor digital dengan timer dan pelanggaran.", de: "Digitale Tafel mit Timer und Fouls.", es: "Marcador digital con temporizador dan faltas.", pt: "Placar digital con cronômetro e faltas.", fr: "Tableau numérique avec minuterie et fautes.", it: "Tabellone digitale con timer e falli." }
  },
  {
    id: "scoreboard",
    icon: Minimize,
    category: "sports",
    href: "/tools/scoreboard",
    name: { en: "Universal Scoreboard", id: "Papan Skor Universal", de: "Universal-Anzeigetafel", es: "Marcador Universal", pt: "Placar Universal", fr: "Score Universel", it: "Tabellone Universale" },
    desc: { en: "For Badminton, Volleyball, Ping Pong. Simple & Offline.", id: "Untuk Badminton, Voli, Pingpong. Simpel & Offline.", de: "Für Badminton, Volleyball. Einfach & Offline.", es: "Para Bádminton, Voleibol. Simple y Offline.", pt: "Para Badminton, Vôlei. Simples e Offline.", fr: "Pour Badminton, Volley. Simple et Hors ligne.", it: "Per Badminton, Pallavolo. Semplice e Offline." }
  },
  // --- BUSINESS ---
  {
    id: "invoice",
    icon: FileText,
    category: "business",
    href: "/tools/invoice",
    name: { en: "Invoice Generator", id: "Pembuat Invoice", de: "Rechnungsgenerator", es: "Generador Facturas", pt: "Gerador Faturas", fr: "Générateur Factures", it: "Generatore Fatture" },
    desc: { en: "Create PDF invoices. No data uploaded.", id: "Buat faktur PDF. Data tidak di-upload.", de: "PDF-Rechnungen erstellen. Keine Uploads.", es: "Crea facturas PDF. Sin subida de datos.", pt: "Crie faturas PDF. Sem envio de dados.", fr: "Créez factures PDF. Pas de données envoyées.", it: "Crea fatture PDF. Nessun dato caricato." }
  },
  {
    id: "inventory",
    icon: Box,
    category: "business",
    href: "/tools/inventory",
    name: { en: "Inventory Manager", id: "Manajemen Stok", de: "Lagerverwaltung", es: "Gestión Inventario", pt: "Gestão Estoque", fr: "Gestion Stock", it: "Gestione Inventario" },
    desc: { en: "Track stock in/out and low stock alerts.", id: "Lacak stok masuk/keluar dan peringatan habis.", de: "Bestand verfolgen und Warnungen.", es: "Controla stock y alertas de bajo inventario.", pt: "Rastreie estoque e alertas de baixa.", fr: "Suivez le stock et alertes de rupture.", it: "Traccia scorte e avvisi esaurimento." }
  },
  {
    id: "shift",
    icon: Users,
    category: "business",
    href: "/tools/shift",
    name: { en: "Shift Scheduler", id: "Jadwal Shift", de: "Schichtplaner", es: "Planificador Turnos", pt: "Escala Kerja", fr: "Planning Équipe", it: "Pianificatore Turni" },
    desc: { en: "Organize employee shifts (Morning/Night).", id: "Atur shift karyawan (Pagi/Malam).", de: "Mitarbeiterschichten organisieren.", es: "Organiza turnos de empleados.", pt: "Organize turnos de funcionários.", fr: "Organisez les équipes (Matin/Soir).", it: "Organizza turni dipendenti." }
  },
  // --- FINANCE ---
  {
    id: "budget",
    icon: Calculator,
    category: "finance",
    href: "/tools/budget-planner",
    name: { en: "Budget Planner", id: "Perencana Anggaran", de: "Budgetplaner", es: "Presupuesto", pt: "Orçamento", fr: "Budget", it: "Budget" },
    desc: { en: "Zero-based budgeting. Track every dollar.", id: "Anggaran berbasis nol. Lacak tiap rupiah.", de: "Nullbasiertes Budgetieren. Jeden Euro verfolgen.", es: "Presupuesto base cero. Controla cada euro.", pt: "Orçamento base zero. Rastreie cada centavo.", fr: "Budget base zero. Suivez chaque euro.", it: "Budget base zero. Traccia setiap euro." }
  },
  {
    id: "split-bill",
    icon: Calculator,
    category: "finance",
    href: "/tools/split-bill",
    name: { en: "Split Bill", id: "Bagi Tagihan", de: "Rechnung teilen", es: "Dividir Cuenta", pt: "Dividir Conta", fr: "Partager Addition", it: "Dividi Conto" },
    desc: { en: "Handle tax & service for group dining.", id: "Hitung pajak & layanan untuk makan grup.", de: "Steuern & Service für Gruppen berechnen.", es: "Calcula impuestos y servicio para grupos.", pt: "Calcule impuestos e serviço para grupos.", fr: "Calculez taxes et service pour groupes.", it: "Calcola tasse e servizio per gruppi." }
  },
  // --- PRODUCTIVITY CONT. ---
  {
    id: "compressor",
    icon: Minimize,
    category: "productivity",
    href: "/tools/image-compressor",
    name: { en: "Image Compressor", id: "Kompres Foto", de: "Bildkompressor", es: "Compresor Imagen", pt: "Compressor Imagem", fr: "Compresseur Image", it: "Compressore" },
    desc: { en: "Reduce file size securely in browser.", id: "Kecilkan ukuran file aman di browser.", de: "Dateigröße sicher im Browser reduzieren.", es: "Reduce tamaño de archivo en navegador.", pt: "Reduza tamanho do arquivo no navegador.", fr: "Réduisez taille fichier dalam navigateur.", it: "Riduci dimensi file nel browser." }
  },
  {
    id: "resizer",
    icon: Scaling,
    category: "productivity",
    href: "/tools/image-resizer",
    name: { en: "Image Resizer", id: "Ubah Ukuran Foto", de: "Bildgröße mengubah", es: "Redimensionar", pt: "Redimensionar", fr: "Redimensionner", it: "Ridimensiona" },
    desc: { en: "Resize dimensions (px) accurately.", id: "Ubah dimensi (px) secara akurat.", de: "Dimensionen (px) genau ändern.", es: "Cambia dimensiones (px) con precisión.", pt: "Mude dimensi (px) con precisión.", fr: "Changez dimensions (px) dengan précision.", it: "Cambia dimensi (px) con precisione." }
  },
  {
    id: "cropper",
    icon: Scissors,
    category: "productivity",
    href: "/tools/image-cropper",
    name: { en: "Image Cropper", id: "Potong Foto", de: "Bild zuschneiden", es: "Recortar Imagen", pt: "Cortar Imagem", fr: "Rogner Image", it: "Ritaglia" },
    desc: { en: "Crop to 1:1, 16:9 or custom ratio.", id: "Potong ke 1:1, 16:9 atau rasio bebas.", de: "Auf 1:1, 16:9 oder benutzerdefiniert.", es: "Recorta a 1:1, 16:9 o personalizado.", pt: "Corte em 1:1, 16:9 o personalizado.", fr: "Rognez en 1:1, 16:9 ou personnalisé.", it: "Ritaglia in 1:1, 16:9 o personalizzato." }
  }
];

const UI_LABELS: Record<string, Record<string, string>> = {
  hero_title: {
    en: "VersoKit: Daily Tools for Everyone",
    id: "VersoKit: Alat Harian untuk Semua",
    de: "VersoKit: Tägliche Werkzeuge",
    es: "VersoKit: Herramientas Diarias",
    pt: "VersoKit: Ferramentas Diárias",
    fr: "VersoKit: Outils Quotidiens",
    it: "VersoKit: Strumenti Quotidiani"
  },
  search_placeholder: {
    en: "Search for a tool (e.g., Quran, Invoice, Watermark)...",
    id: "Cari alat (misal: Quran, Invoice, Watermark)...",
    de: "Suche nach einem Werkzeug (z. B. Koran, Rechnung)...",
    es: "Buscar una herramienta (ej. Corán, Factura)...",
    pt: "Procurar ferramenta (ex: Alcorão, Fatura)...",
    fr: "Rechercher un outil (ex: Coran, Facture)...",
    it: "Cerca uno strumento (es. Corano, Fattura)..."
  },
  no_results: {
    en: "No tools found matching",
    id: "Tidak ada alat yang cocok dengan",
    de: "Keine Werkzeuge gefunden für",
    es: "No se encontraron herramientas para",
    pt: "Nenhuma ferramenta encontrada para",
    fr: "Aucun outil trouvé pour",
    it: "Nessuno strumento trovato per"
  },
  open_btn: {
    en: "Open Tool",
    id: "Buka Alat",
    de: "Öffnen",
    es: "Abrir",
    pt: "Abrir",
    fr: "Ouvrir",
    it: "Apri"
  },
  cat_favorites: { en: "Your Favorites", id: "Favorit Anda", de: "Deine Favoriten", es: "Tus Favoritos", pt: "Seus Favoritos", fr: "Vos Favoris", it: "I Tuoi Preferiti" },
  cat_new: { en: "New Releases", id: "Rilisan Terbaru", de: "Neuheiten", es: "Novedades", pt: "Lançamentos", fr: "Nouveautés", it: "Ultime Novità" },
  cat_religious: { en: "Religious Utilities", id: "Alat Ibadah", de: "Religiöse Werkzeuge", es: "Utilidades Religiosas", pt: "Utilidades Religiosas", fr: "Outils Religieux", it: "Utilità Religiose" },
  cat_sports: { en: "Sports & Games", id: "Olahraga & Game", de: "Sport & Spiele", es: "Deportes y Juegos", pt: "Desportos e Jogos", fr: "Sports et Jeux", it: "Sport e Giochi" },
  cat_business: { en: "Business Tools", id: "Bisnis & Usaha", de: "Geschäftswerkzeuge", es: "Herramientas de Negocio", pt: "Ferramentas de Negócio", fr: "Outils de Business", it: "Strumenti di Business" },
  cat_finance: { en: "Finance & Budget", id: "Keuangan & Anggaran", de: "Finanz-Werkzeuge", es: "Finanzas y Presupuesto", pt: "Ferramentas Financeiras", fr: "Outils de Finance", it: "Strumenti Finanziari" },
  cat_productivity: { en: "Productivity & Utilities", id: "Produktivitas & Utilitas", de: "Produktivitas", es: "Productividad", pt: "Produtividade", fr: "Productivité", it: "Produttività" },
  badge_new: { en: "NEW", id: "BARU", de: "NEU", es: "NUEVO", pt: "NOVO", fr: "NOUVEAU", it: "NUOVO" }
};

const BADGE_TEXT = {
  privacy: { en: "Privacy-first", id: "Privasi Utama", de: "Datenschutz", es: "Privacidad", pt: "Privacidade", fr: "Confidentialité", it: "Privacy" },
  offline: { en: "Offline-ready", id: "Bisa Offline", de: "Offline-bereit", es: "Modo Offline", pt: "Modo Offline", fr: "Hors ligne", it: "Offline" },
  free: { en: "Free forever", id: "Gratis Selamanya", de: "Kostenlos", es: "Gratis", pt: "Grátis", fr: "Gratuit", it: "Gratis" }
};

export default function ToolPortalPage() {
  const { lang } = useLang();
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useLocalStorage<string[]>('versokit-favorites', []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const getLabel = (key: string) => UI_LABELS[key]?.[lang] || UI_LABELS[key]?.['en'] || key;

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter(tool => {
      const name = tool.name[lang] || tool.name['en'] || '';
      const desc = tool.desc[lang] || tool.desc['en'] || '';
      const query = search.toLowerCase();
      return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
    });
  }, [search, lang]);

  const categorized = useMemo(() => {
    const groups: Record<Category, Tool[]> = {
      favorites: [],
      new: [],
      religious: [],
      sports: [],
      business: [],
      finance: [],
      productivity: []
    };

    // 1. Fill categories
    filteredTools.forEach(tool => {
      groups[tool.category].push(tool);
      if (tool.isNew) groups.new.push(tool);
      if (favorites.includes(tool.id)) groups.favorites.push(tool);
    });

    return groups;
  }, [filteredTools, favorites]);

  if (!mounted) return null;

  const categoryOrder: Category[] = ['favorites', 'new', 'religious', 'sports', 'business', 'finance', 'productivity'];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary pt-20 pb-32 px-6 text-center text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-xl animate-in fade-in slide-in-from-top duration-700">
            {getLabel('hero_title')}
          </h1>

          {/* Badge Pill Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50 transition-transform hover:scale-105 cursor-default">
              <ShieldCheck size={16} />
              <span className="text-sm font-bold uppercase tracking-tight">{BADGE_TEXT.privacy[lang] || BADGE_TEXT.privacy.en}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 transition-transform hover:scale-105 cursor-default">
              <WifiOff size={16} />
              <span className="text-sm font-bold uppercase tracking-tight">{BADGE_TEXT.offline[lang] || BADGE_TEXT.offline.en}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border border-purple-100 dark:border-blue-800/50 transition-transform hover:scale-105 cursor-default">
              <Heart size={16} />
              <span className="text-sm font-bold uppercase tracking-tight">{BADGE_TEXT.free[lang] || BADGE_TEXT.free.en}</span>
            </div>
          </div>

          <div className="max-w-xl mx-auto relative group pt-4">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none mt-4">
              <Search className="h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <Input 
              type="text"
              placeholder={getLabel('search_placeholder')}
              className="h-16 pl-14 pr-6 rounded-2xl text-lg font-bold shadow-2xl border-none bg-white text-black dark:bg-slate-900 dark:text-white focus-visible:ring-accent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="container mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="space-y-16">
          {categoryOrder.map(catKey => {
            const items = categorized[catKey];
            if (items.length === 0) return null;

            const isPriority = catKey === 'favorites' || catKey === 'new';

            return (
              <div key={catKey} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="flex items-center gap-4">
                  <h2 className={cn(
                    "text-2xl font-black uppercase tracking-tighter text-foreground bg-card dark:bg-slate-950 pr-6 py-2 rounded-full shadow-sm border px-6 flex items-center gap-3",
                    catKey === 'favorites' && "border-rose-200 dark:border-rose-900/30 text-rose-600",
                    catKey === 'new' && "border-amber-200 dark:border-amber-900/30 text-amber-600"
                  )}>
                    {catKey === 'favorites' ? <Star className="h-6 w-6 fill-current" /> : 
                     catKey === 'new' ? <Sparkles className="h-6 w-6" /> : 
                     <span className="w-2 h-8 bg-accent rounded-full" />}
                    {getLabel(`cat_${catKey}`)}
                  </h2>
                  <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map(tool => (
                    <Card key={`${catKey}-${tool.id}`} className={cn(
                      "group border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col bg-card relative",
                      favorites.includes(tool.id) && "border-rose-100 dark:border-rose-900/20"
                    )}>
                      {/* Favorite Toggle Overlay */}
                      <button 
                        onClick={(e) => toggleFavorite(e, tool.id)}
                        className={cn(
                          "absolute top-6 right-6 p-2 rounded-full transition-all z-10",
                          favorites.includes(tool.id) 
                            ? "bg-rose-50 text-rose-500 scale-110 shadow-md" 
                            : "bg-muted/50 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-rose-50 hover:text-rose-400"
                        )}
                      >
                        <Heart className={cn("h-5 w-5", favorites.includes(tool.id) && "fill-current")} />
                      </button>

                      <CardHeader className="p-8 pb-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className={cn(
                            "p-4 rounded-2xl transition-all duration-500 transform group-hover:rotate-6",
                            favorites.includes(tool.id) ? "bg-rose-500 text-white" : "bg-primary/5 text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                          )}>
                            <tool.icon className="h-6 w-6" />
                          </div>
                          {tool.isNew && catKey !== 'new' && (
                            <Badge className="bg-accent text-white uppercase font-black text-[9px] tracking-widest animate-pulse mr-8">
                              {getLabel('badge_new')}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                          {tool.name[lang] || tool.name['en']}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium leading-relaxed line-clamp-2 pt-2 text-muted-foreground dark:text-slate-400">
                          {tool.desc[lang] || tool.desc['en']}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 pt-0 mt-auto">
                        <Button asChild variant="ghost" className="w-full justify-between h-12 bg-muted/30 dark:bg-slate-800/50 group-hover:bg-accent group-hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                          <Link href={tool.href} className="flex items-center w-full">
                            {getLabel('open_btn')}
                            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-32 text-center space-y-4 opacity-40">
            <Search className="h-16 w-16 mx-auto mb-4" />
            <p className="text-xl font-black uppercase tracking-widest">
              {getLabel('no_results')} "{search}"
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
