'use client';

import Link from 'next/link';
import { useLang } from '@/components/Providers';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LangToggle } from '@/components/LangToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Trophy, 
  Briefcase, 
  Wrench, 
  ChevronDown,
  LayoutGrid,
  Navigation,
  Stamp
} from 'lucide-react';

const MENU_TEXT: Record<string, any> = {
  cat_sports: { en: "Sports", id: "Olahraga", de: "Sport", es: "Deportes", pt: "Esportes", fr: "Sports", it: "Sport" },
  cat_business: { en: "Business", id: "Bisnis", de: "Geschäft", es: "Negocios", pt: "Negócios", fr: "Affaires", it: "Business" },
  cat_utilities: { en: "Utilities", id: "Utilitas", de: "Dienstprogramme", es: "Utilidades", pt: "Utilitários", fr: "Utilitaires", it: "Utilità" },
  cat_religious: { en: "Religious", id: "Ibadah", de: "Religiös", es: "Religioso", pt: "Religioso", fr: "Religieux", it: "Religioso" },

  prayer_times: { en: "Prayer Times & Qibla", id: "Jadwal Sholat & Kiblat", de: "Gebetszeiten", es: "Horarios Oración", pt: "Horários Oração", fr: "Prière & Qibla", it: "Preghiera" },
  americano: { en: "Americano Generator", id: "Generator Americano", de: "Americano Generator", es: "Generador Americano", pt: "Gerador Americano", fr: "Générateur Americano", it: "Generatore Americano" },
  futsal: { en: "Futsal Scoreboard", id: "Skor Futsal", de: "Futsal-Anzeige", es: "Marcador Futsal", pt: "Placar Futsal", fr: "Score Futsal", it: "Tabellone Calcetto" },
  tennis: { en: "Tennis Generator", id: "Generator Tenis", de: "Tennis-Generator", es: "Generador Tenis", pt: "Gerador Tênis", fr: "Générateur Tennis", it: "Generatore Tennis" },
  lineup: { en: "Lineup Builder", id: "Pembuat Formasi", de: "Aufstellungs-Tool", es: "Alineaciones", pt: "Escalação", fr: "Compo d'Équipe", it: "Formazione" },
  tournament: { en: "Tournament Manager", id: "Manajer Turnamen", de: "Turniermanager", es: "Gestor Torneos", pt: "Gerente Torneio", fr: "Gestion Tournoi", it: "Gestore Torneo" },
  scoreboard: { en: "Universal Scoreboard", id: "Papan Skor", de: "Anzeigetafel", es: "Marcador", pt: "Placar", fr: "Tableau de Score", it: "Tabellone" },
  
  budget: { en: "Budget Planner", id: "Perencana Anggaran", de: "Budgetplaner", es: "Presupuesto", pt: "Orçamento", fr: "Budget", it: "Pianificatore Budget" },
  invoice: { en: "Invoice Maker", id: "Pembuat Invoice", de: "Rechnungsersteller", es: "Facturas", pt: "Faturas", fr: "Factures", it: "Fatturazione" },
  shift: { en: "Shift Roster", id: "Jadwal Shift", de: "Schichtplan", es: "Turnos", pt: "Turnos", fr: "Planning", it: "Turni" },
  inventory: { en: "Inventory", id: "Inventaris", de: "Inventar", es: "Inventario", pt: "Estoque", fr: "Stock", it: "Inventario" },
  kanban: { en: "Kanban Board", id: "Papan Kanban", de: "Kanban Board", es: "Tablero Kanban", pt: "Quadro Kanban", fr: "Tableau Kanban", it: "Kanban Board" },

  watermark: { en: "Image Watermark", id: "Watermark Foto", de: "Bild-Wasserzeichen", es: "Marca de Agua", pt: "Marca d'água", fr: "Filigrane", it: "Filigrana" },
  resizer: { en: "Image Resizer", id: "Ubah Ukuran", de: "Bildgröße", es: "Redimensionar", pt: "Redimensionar", fr: "Redimensionner", it: "Ridimensiona" },
  cropper: { en: "Image Cropper", id: "Potong Foto", de: "Zuschneiden", es: "Recortar", pt: "Cortar", fr: "Rogner", it: "Ritaglia" },
  compressor: { en: "Image Compressor", id: "Kompres Foto", de: "Bildkompressor", es: "Compresor", pt: "Compressor", fr: "Compresseur", it: "Compressore" },
  pdf_merge: { en: "PDF Merge", id: "Gabung PDF", de: "PDF Zusammenfügen", es: "Combinar PDF", pt: "Combinar PDF", fr: "Fusion PDF", it: "Unisci PDF" },
  image_to_pdf: { en: "Image to PDF", id: "Gambar ke PDF", de: "Bild zu PDF", es: "Imagen a PDF", pt: "Imagen para PDF", fr: "Image en PDF", it: "Immagine in PDF" },
  calculator: { en: "Material Calc", id: "Kalkulator", de: "Baurechner", es: "Calculadora", pt: "Calculadora", fr: "Calculateur", it: "Calcolatore" },
  csv_helper: { en: "CSV Cleaner", id: "Pembersih CSV", de: "CSV-Reiniger", es: "Limpiador CSV", pt: "Limpeza CSV", fr: "Nettoyeur CSV", it: "Pulitore CSV" },
  split_bill: { en: "Split Bill", id: "Bagi Tagihan", de: "Rechnung teilen", es: "Dividir Cuenta", pt: "Dividir Conta", fr: "Partager l'Addition", it: "Dividi Conto" },
};

export default function Header() {
  const { lang } = useLang();

  const categories = [
    {
      label: MENU_TEXT.cat_religious[lang] || MENU_TEXT.cat_religious['en'],
      icon: <Navigation className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/prayer-times', label: MENU_TEXT.prayer_times[lang] || MENU_TEXT.prayer_times['en'] },
      ]
    },
    {
      label: MENU_TEXT.cat_sports[lang] || MENU_TEXT.cat_sports['en'],
      icon: <Trophy className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/americano', label: MENU_TEXT.americano[lang] || MENU_TEXT.americano['en'] },
        { href: '/tools/futsal', label: MENU_TEXT.futsal[lang] || MENU_TEXT.futsal['en'] },
        { href: '/tools/tennis', label: MENU_TEXT.tennis[lang] || MENU_TEXT.tennis['en'] },
        { href: '/tools/lineup-builder', label: MENU_TEXT.lineup[lang] || MENU_TEXT.lineup['en'] },
        { href: '/tools/tournament', label: MENU_TEXT.tournament[lang] || MENU_TEXT.tournament['en'] },
        { href: '/tools/scoreboard', label: MENU_TEXT.scoreboard[lang] || MENU_TEXT.scoreboard['en'] },
      ]
    },
    {
      label: MENU_TEXT.cat_business[lang] || MENU_TEXT.cat_business['en'],
      icon: <Briefcase className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/budget-planner', label: MENU_TEXT.budget[lang] || MENU_TEXT.budget['en'] },
        { href: '/tools/invoice', label: MENU_TEXT.invoice[lang] || MENU_TEXT.invoice['en'] },
        { href: '/tools/shift', label: MENU_TEXT.shift[lang] || MENU_TEXT.shift['en'] },
        { href: '/tools/inventory', label: MENU_TEXT.inventory[lang] || MENU_TEXT.inventory['en'] },
        { href: '/tools/kanban', label: MENU_TEXT.kanban[lang] || MENU_TEXT.kanban['en'] },
      ]
    },
    {
      label: MENU_TEXT.cat_utilities[lang] || MENU_TEXT.cat_utilities['en'],
      icon: <Wrench className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/image-watermark', label: MENU_TEXT.watermark[lang] || MENU_TEXT.watermark['en'] },
        { href: '/tools/image-resizer', label: MENU_TEXT.resizer[lang] || MENU_TEXT.resizer['en'] },
        { href: '/tools/image-cropper', label: MENU_TEXT.cropper[lang] || MENU_TEXT.cropper['en'] },
        { href: '/tools/image-compressor', label: MENU_TEXT.compressor[lang] || MENU_TEXT.compressor['en'] },
        { href: '/tools/pdf-merge', label: MENU_TEXT.pdf_merge[lang] || MENU_TEXT.pdf_merge['en'] },
        { href: '/tools/image-to-pdf', label: MENU_TEXT.image_to_pdf[lang] || MENU_TEXT.image_to_pdf['en'] },
        { href: '/tools/calculator', label: MENU_TEXT.calculator[lang] || MENU_TEXT.calculator['en'] },
        { href: '/tools/csv-helper', label: MENU_TEXT.csv_helper[lang] || MENU_TEXT.csv_helper['en'] },
        { href: '/tools/split-bill', label: MENU_TEXT.split_bill[lang] || MENU_TEXT.split_bill['en'] },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-8 w-8 text-primary">
            <rect width="256" height="256" fill="none" />
            <path d="M32,96v64a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M168,168V64a40,40,0,0,0-80,0v96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
          <span className="text-xl font-black tracking-tighter uppercase">VersoKit</span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-4">
          {categories.map((cat, idx) => (
            <DropdownMenu key={idx}>
              <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors outline-none">
                {cat.icon}
                {cat.label}
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 rounded-xl shadow-xl border-2">
                <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{cat.label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {cat.items.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full cursor-pointer font-bold uppercase text-[11px] py-3 hover:bg-primary/5">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden p-2 hover:bg-muted rounded-full outline-none">
              <LayoutGrid className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-64 rounded-2xl shadow-2xl border-2 max-h-[80vh] overflow-y-auto overscroll-contain scrollbar-thin"
            >
              {categories.map((cat, idx) => (
                <div key={idx}>
                  <DropdownMenuLabel className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] px-4 py-3 bg-muted/30">
                    {cat.icon}
                    {cat.label}
                  </DropdownMenuLabel>
                  {cat.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="w-full px-8 py-3 font-bold uppercase text-[10px]">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  {idx < categories.length - 1 && <DropdownMenuSeparator />}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
