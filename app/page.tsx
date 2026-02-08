'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ArrowRight, 
  ClipboardList, 
  Goal, 
  Trophy, 
  Package, 
  LayoutDashboard, 
  Calendar, 
  FileSpreadsheet, 
  Calculator as CalcIcon,
  Receipt,
  CalendarDays,
  Image as ImageIcon,
  Banknote,
  FileStack,
  FileType,
  Wallet,
  Activity,
  Maximize,
  Crop,
  Zap,
  ShieldCheck,
  WifiOff
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/components/Providers';

type Category = 'sports' | 'business' | 'finance' | 'utilities';

interface Tool {
  id: string;
  icon: React.ReactNode;
  category: Category;
  isNew?: boolean;
  href: string;
  name: Record<string, string>;
  desc: Record<string, string>;
}

const TOOLS_DATA: Tool[] = [
  // Sports
  { 
    id: 'americano', 
    href: '/tools/americano', 
    icon: <Activity className="h-6 w-6" />, 
    category: 'sports', 
    isNew: true,
    name: {
      en: "Americano Generator",
      id: "Generator Americano",
      de: "Americano Generator",
      es: "Generador Americano",
      pt: "Gerador Americano",
      fr: "Générateur Americano",
      it: "Generatore Americano"
    },
    desc: {
      en: "Organize Padel or Pickleball tournaments. Auto-pairing & scoring.",
      id: "Atur turnamen Padel atau Pickleball. Rotasi pasangan otomatis.",
      de: "Organisieren Sie Padel- oder Pickleball-Turniere. Automatische Paarung.",
      es: "Organiza torneos de Pádel o Pickleball. Emparejamiento automático.",
      pt: "Organize torneios de Padel ou Pickleball. Emparelhamento automático.",
      fr: "Organisez des tournois de Padel ou Pickleball. Appariement auto.",
      it: "Organizza tornei di Padel o Pickleball. Abbinamento automatico."
    }
  },
  { 
    id: 'tennis', 
    href: '/tools/tennis', 
    icon: <Activity className="h-6 w-6" />, 
    category: 'sports', 
    isNew: true,
    name: { en: "Tennis Match Generator", id: "Generator Jadwal Tenis", es: "Generador de Partidos", de: "Tennis-Match-Generator", pt: "Gerador de Partidas", fr: "Générateur de Matchs", it: "Generatore Partite" },
    desc: { en: "Create fair double matches with skill balancing.", id: "Buat jadwal ganda adil dengan penyeimbang skill.", es: "Genera horarios de dobles justos.", de: "Erstellen Sie faire Doppel-Spielpläne.", pt: "Gere horários de duplas justos.", fr: "Générez des plannings de doubles équitables.", it: "Crea programmi di doppio equi." }
  },
  { 
    id: 'futsal', 
    href: '/tools/futsal', 
    icon: <ClipboardList className="h-6 w-6" />, 
    category: 'sports',
    name: { en: "Futsal Scoreboard", id: "Papan Skor Futsal", es: "Marcador de Futsal", de: "Futsal-Anzeigetafel", pt: "Placar de Futsal", fr: "Tableau de Score Futsal", it: "Tabellone Futsal" },
    desc: { en: "Digital timer and foul counter for futsal.", id: "Timer digital dan hitungan pelanggaran futsal.", es: "Cronómetro y contador de faltas.", de: "Digitaler Timer und Foul-Zähler.", pt: "Cronómetro e contador de faltas.", fr: "Chrono et compteur de fautes.", it: "Timer e contatore falli." }
  },
  { 
    id: 'lineup', 
    href: '/tools/lineup-builder', 
    icon: <Goal className="h-6 w-6" />, 
    category: 'sports',
    name: { en: "Lineup Builder", id: "Penyusun Formasi", es: "Constructor de Alineaciones", de: "Aufstellungs-Manager", pt: "Escalação Builder", fr: "Composition d'Équipe", it: "Formazione Calcio" },
    desc: { en: "Visualize team tactics on a football pitch.", id: "Visualisasi taktik tim di lapangan bola.", es: "Visualiza tácticas en el campo.", de: "Teamtaktiken visualisieren.", pt: "Visualize táticas no campo.", fr: "Visualisez les tactiques sur le terrain.", it: "Visualizza tattiche sul campo." }
  },
  { 
    id: 'tournament', 
    href: '/tools/tournament', 
    icon: <Trophy className="h-6 w-6" />, 
    category: 'sports',
    name: { en: "Tournament Manager", id: "Manajer Turnamen", es: "Gestor de Torneos", de: "Turnier-Manager", pt: "Gestor de Torneios", fr: "Gestionnaire de Tournoi", it: "Gestore Tornei" },
    desc: { en: "Round Robin fixtures and automatic standings.", id: "Jadwal kompetisi dan klasemen otomatis.", es: "Calendario y clasificación automática.", de: "Spielpläne und automatische Tabellen.", pt: "Calendário e classificação automática.", fr: "Calendrier et classement automatique.", it: "Calendario e classifica automatica." }
  },
  { 
    id: 'scoreboard', 
    href: '/tools/scoreboard', 
    icon: <Calendar className="h-6 w-6" />, 
    category: 'sports',
    name: { en: "Universal Scoreboard", id: "Skor Universal", es: "Marcador Universal", de: "Universal-Anzeigetafel", pt: "Placar Universal", fr: "Tableau de Score", it: "Tabellone Universale" },
    desc: { en: "For Volleyball, Badminton, and Ping Pong.", id: "Untuk Voli, Badminton, dan Tenis Meja.", es: "Para Voleibol, Bádminton y Tenis de Mesa.", de: "Für Volleyball, Badminton und Tischtennis.", pt: "Para Voleibol, Badminton e Ténis de Mesa.", fr: "Pour Volleyball, Badminton et Ping Pong.", it: "Per Pallavolo, Badminton e Ping Pong." }
  },
  
  // Finance
  { 
    id: 'budget-planner', 
    href: '/tools/budget-planner', 
    icon: <Wallet className="h-6 w-6" />, 
    category: 'finance',
    name: { en: "Budget Planner", id: "Rencana Anggaran", es: "Planificador de Presupuesto", de: "Budgetplaner", pt: "Planeador de Orçamento", fr: "Planificateur de Budget", it: "Pianificatore Budget" },
    desc: { en: "Zero-based budgeting for intentional spending.", id: "Metode anggaran berbasis nol yang aman.", es: "Presupuesto basado en cero.", de: "Zero-Based-Budgeting-Methode.", pt: "Orçamento baseado em zero.", fr: "Budgetisation à base zéro.", it: "Budgeting a base zero." }
  },
  { 
    id: 'split-bill', 
    href: '/tools/split-bill', 
    icon: <Banknote className="h-6 w-6" />, 
    category: 'finance',
    name: { en: "Split Bill", id: "Bagi Tagihan", es: "Dividir Cuenta", de: "Rechnung teilen", pt: "Dividir Conta", fr: "Partager l'Addition", it: "Dividi il Conto" },
    desc: { en: "Calculate shared costs and share to WhatsApp.", id: "Hitung patungan dan kirim ke WhatsApp.", es: "Calcula costos compartidos.", de: "Gemeinsame Kosten berechnen.", pt: "Calcule custos partilhados.", fr: "Calculez les frais partagés.", it: "Calcola costi condivisi." }
  },
  
  // Business
  { 
    id: 'invoice', 
    href: '/tools/invoice', 
    icon: <Receipt className="h-6 w-6" />, 
    category: 'business',
    name: { en: "Invoice Maker", id: "Pembuat Invoice", es: "Creador de Facturas", de: "Rechnungs-Editor", pt: "Criador de Faturas", fr: "Éditeur de Facture", it: "Editor Fattura" },
    desc: { en: "Generate professional PDF receipts offline.", id: "Buat struk PDF profesional secara offline.", es: "Genera facturas PDF profesionales.", de: "Professionelle PDF-Rechnungen.", pt: "Gere faturas PDF profissionais.", fr: "Générez des factures PDF.", it: "Genera fatture PDF professionali." }
  },
  { 
    id: 'inventory', 
    href: '/tools/inventory', 
    icon: <Package className="h-6 w-6" />, 
    category: 'business',
    name: { en: "Stock Management", id: "Manajemen Stok", es: "Gestión de Stock", de: "Bestandsverwaltung", pt: "Gestão de Stock", fr: "Gestion de Stock", it: "Gestione Stock" },
    desc: { en: "Track items and equipment digitally.", id: "Pantau barang dan peralatan digital.", es: "Controla artículos digitalmente.", de: "Artikel digital verfolgen.", pt: "Controle itens digitalmente.", fr: "Suivez vos articles.", it: "Monitora articoli digitalmente." }
  },
  { 
    id: 'shift', 
    href: '/tools/shift', 
    icon: <CalendarDays className="h-6 w-6" />, 
    category: 'business',
    name: { en: "Shift Scheduler", id: "Jadwal Shift", es: "Programador de Turnos", de: "Schichtplaner", pt: "Escala de Turnos", fr: "Planning de Shifts", it: "Pianificatore Turni" },
    desc: { en: "Weekly employee rosters with color codes.", id: "Jadwal mingguan karyawan dengan warna.", es: "Horarios semanales de empleados.", de: "Wöchentliche Schichtpläne.", pt: "Escalas semanais de funcionários.", fr: "Planning hebdomadaire.", it: "Turni settimanali dipendenti." }
  },
  { 
    id: 'kanban', 
    href: '/tools/kanban', 
    icon: <LayoutDashboard className="h-6 w-6" />, 
    category: 'business',
    name: { en: "Kanban Board", id: "Papan Tugas", es: "Tablero Kanban", de: "Kanban-Board", pt: "Quadro Kanban", fr: "Tableau Kanban", it: "Tabella Kanban" },
    desc: { en: "Simple visual task management.", id: "Manajemen tugas visual sederhana.", es: "Gestión visual de tareas.", de: "Einfache Aufgabenverwaltung.", pt: "Gestão visual de tareas.", fr: "Gestion visuelle des tâches.", it: "Gestione visiva dei compiti." }
  },
  
  // Utilities
  { 
    id: 'image-resizer', 
    href: '/tools/image-resizer', 
    icon: <Maximize className="h-6 w-6" />, 
    category: 'utilities', 
    isNew: true,
    name: { en: "Image Resizer", id: "Ubah Ukuran Foto", es: "Redimensionar Imagen", de: "Bildgröße ändern", pt: "Redimensionar Imagem", fr: "Redimensionneur d'Image", it: "Ridimensiona Immagine" },
    desc: { en: "Change pixel dimensions locally.", id: "Ubah ukuran pixel secara lokal.", es: "Cambia dimensiones de píxeles.", de: "Pixelabmessungen lokal ändern.", pt: "Alterar dimensões de píxeis.", fr: "Changez les dimensions en pixels.", it: "Cambia dimensioni pixel." }
  },
  { 
    id: 'image-cropper', 
    href: '/tools/image-cropper', 
    icon: <Crop className="h-6 w-6" />, 
    category: 'utilities', 
    isNew: true,
    name: { en: "Image Cropper", id: "Potong Foto", es: "Recortar Imagen", de: "Bild zuschneiden", pt: "Recortar Imagem", fr: "Recadrage d'Image", it: "Ritaglia Immagine" },
    desc: { en: "Crop photos to specific ratios.", id: "Potong foto sesuai rasio standar.", es: "Recorta fotos a ratios específicos.", de: "Bilder zuschneiden.", pt: "Recorte fotos para rácios específicos.", fr: "Recadrez vos photos.", it: "Ritaglia foto a rapporti specifici." }
  },
  { 
    id: 'image-compressor', 
    href: '/tools/image-compressor', 
    icon: <ImageIcon className="h-6 w-6" />, 
    category: 'utilities',
    name: { en: "Image Compressor", id: "Kompres Foto", es: "Compresor de Imagen", de: "Bildkompressor", pt: "Compressor de Imagem", fr: "Compresseur d'Image", it: "Compressore Immagine" },
    desc: { en: "Reduce file size without quality loss.", id: "Kecilkan file tanpa hilang kualitas.", es: "Reduce el tamaño del archivo.", de: "Dateigröße ohne Verlust reduzieren.", pt: "Reduza o tamanho do ficheiro.", fr: "Réduisez la taille du fichier.", it: "Riduci dimensiome file." }
  },
  { 
    id: 'pdf-merge', 
    href: '/tools/pdf-merge', 
    icon: <FileStack className="h-6 w-6" />, 
    category: 'utilities',
    name: { en: "PDF Merge", id: "Gabung PDF", es: "Combinar PDF", de: "PDF zusammenfügen", pt: "Combinar PDF", fr: "Fusionner PDF", it: "Unisci PDF" },
    desc: { en: "Combine multiple PDF files securely.", id: "Gabungkan file PDF dengan aman.", es: "Combina archivos PDF de forma segura.", de: "PDF-Dateien sicher kombinieren.", pt: "Combine ficheiros PDF com segurança.", fr: "Fusionnez des fichiers PDF.", it: "Unisci file PDF in sicurezza." }
  },
  { 
    id: 'image-to-pdf', 
    href: '/tools/image-to-pdf', 
    icon: <FileType className="h-6 w-6" />, 
    category: 'utilities',
    name: { en: "Image to PDF", id: "Gambar ke PDF", es: "Imagen a PDF", de: "Bild zu PDF", pt: "Imagem para PDF", fr: "Image en PDF", it: "Immagine in PDF" },
    desc: { en: "Create PDF documents from photos.", id: "Buat dokumen PDF dari foto.", es: "Crea documentos PDF desde fotos.", de: "PDF aus Fotos erstellen.", pt: "Crie PDFs a partir de fotos.", fr: "Créez des PDF depuis vos photos.", it: "Crea PDF dalle tue foto." }
  },
  { 
    id: 'csv-helper', 
    href: '/tools/csv-helper', 
    icon: <FileSpreadsheet className="h-6 w-6" />, 
    category: 'utilities',
    name: { en: "CSV Cleaner", id: "Pembersih CSV", es: "Limpiador CSV", de: "CSV-Bereiniger", pt: "Limpador CSV", fr: "Nettoyeur CSV", it: "Pulitore CSV" },
    desc: { en: "Format and clean spreadsheet data.", id: "Format dan bersihkan data tabel.", es: "Formatea datos de hojas de cálculo.", de: "Tabellendaten bereinigen.", pt: "Formate e limpe dados.", fr: "Nettoyez vos données CSV.", it: "Formatta e pulisci dati." }
  },
  { 
    id: 'calculator', 
    href: '/tools/calculator', 
    icon: <CalcIcon className="h-6 w-6" />, 
    category: 'utilities',
    name: { en: "Material Calculator", id: "Kalkulator Material", es: "Calculadora de Materiales", de: "Materialrechner", pt: "Calculadora de Materiais", fr: "Calculateur de Matériaux", it: "Calcolatore Materiali" },
    desc: { en: "Estimate paint and tiles for construction.", id: "Estimasi kebutuhan cat dan ubin.", es: "Estima pintura y azulejos.", de: "Farbe und Fliesen schätzen.", pt: "Estime tinta e azulejos.", fr: "Estimez peinture et carrelage.", it: "Calcolatore Materiali" }
  },
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
  hero_subtitle: {
    en: "Privacy-first • Offline-ready • Free forever",
    id: "Privasi utama • Bisa Offline • Gratis selamanya",
    de: "Datenschutz zuerst • Offline-bereit • Für immer kostenlos",
    es: "Privacidad primero • Offline • Gratis para siempre",
    pt: "Privacidade em primeiro lugar • Pronto offline • Grátis para sempre",
    fr: "Confidentialité d'abord • Prêt pour le hors-ligne • Gratuit pour toujours",
    it: "Privacy al primo posto • Pronto offline • Gratis per sempre"
  },
  search_placeholder: {
    en: "Search for a tool (e.g., Invoice, Tennis)...",
    id: "Cari alat (misal: Invoice, Tenis)...",
    de: "Suche nach einem Werkzeug (z. B. Rechnung, Tennis)...",
    es: "Buscar una herramienta (ej. Factura, Tenis)...",
    pt: "Procurar ferramenta (ex: Fatura, Ténis)...",
    fr: "Rechercher un outil (ex: Facture, Tennis)...",
    it: "Cerca uno strumento (es. Fattura, Tennis)..."
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
  cat_sports: { en: "Sports & Games", id: "Olahraga & Game", de: "Sport & Spiele", es: "Deportes y Juegos", pt: "Desportos e Jogos", fr: "Sports et Jeux", it: "Sport e Giochi" },
  cat_business: { en: "Business Tools", id: "Bisnis & Usaha", de: "Geschäftswerkzeuge", es: "Herramientas de Negocio", pt: "Ferramentas de Negócio", fr: "Outils de Business", it: "Strumenti di Business" },
  cat_finance: { en: "Finance Tools", id: "Keuangan", de: "Finanzwerkzeuge", es: "Herramientas Financieras", pt: "Ferramentas Financieras", fr: "Outils de Finance", it: "Strumenti di Finanza" },
  cat_utilities: { en: "Files & Utilities", id: "File & Utilitas", de: "Dateien & Dienstprogramme", es: "Archivos y Utilidades", pt: "Ficheiros e Utilitários", fr: "Fichiers et Utilitaires", it: "File e Utility" },
  badge_new: { en: "NEW", id: "BARU", de: "NEU", es: "NUEVO", pt: "NOVO", fr: "NOUVEAU", it: "NUOVO" },
  private: { en: "100% Private", id: "100% Privat", de: "100% Privat", es: "100% Privado", pt: "100% Privado", fr: "100% Privé", it: "100% Privato" },
  offline: { en: "Offline Ready", id: "Siap Offline", de: "Offline-Bereit", es: "Listo Offline", pt: "Pronto Offline", fr: "Prêt Hors-ligne", it: "Pronto Offline" },
  no_login: { en: "No Login", id: "Tanpa Login", de: "Kein Login", es: "Sin Registro", pt: "Sem Login", fr: "Sans Inscription", it: "Nessun Login" }
};

export default function ToolPortalPage() {
  const { lang } = useLang();
  const [search, setSearch] = useState('');

  const getLabel = (key: string) => UI_LABELS[key][lang] || UI_LABELS[key]['en'];

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
      sports: [],
      business: [],
      finance: [],
      utilities: []
    };
    filteredTools.forEach(tool => groups[tool.category].push(tool));
    return groups;
  }, [filteredTools]);

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
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            {getLabel('hero_subtitle')}
          </p>

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
          {(Object.keys(categorized) as Category[]).map(catKey => {
            const items = categorized[catKey];
            if (items.length === 0) return null;

            return (
              <div key={catKey} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground bg-card dark:bg-slate-950 pr-6 py-2 rounded-full shadow-sm border px-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-accent rounded-full" />
                    {getLabel(`cat_${catKey}`)}
                  </h2>
                  <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map(tool => (
                    <Card key={tool.id} className="group border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col bg-card">
                      <CardHeader className="p-8 pb-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-6">
                            {tool.icon}
                          </div>
                          {tool.isNew && (
                            <Badge className="bg-accent text-white uppercase font-black text-[9px] tracking-widest animate-pulse">
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
