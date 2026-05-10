import {
  Trophy, Activity, Clock, Minimize, Users, FileText, Box,
  Calculator, Scaling, Scissors, Navigation, Stamp, FileBadge,
  Lightbulb, BookOpen, TrendingDown,
} from 'lucide-react';

export type Category =
  | 'favorites'
  | 'new'
  | 'religious'
  | 'sports'
  | 'business'
  | 'finance'
  | 'productivity';

export interface Tool {
  id: string;
  icon: React.ElementType;
  category: Exclude<Category, 'favorites' | 'new'>;
  isNew?: boolean;
  href: string;
  name: Record<string, string>;
  desc: Record<string, string>;
}

export const TOOLS_DATA: Tool[] = [
  // --- RELIGIOUS ---
  {
    id: 'quran',
    icon: BookOpen,
    category: 'religious',
    href: '/tools/quran',
    name: { en: 'Digital Quran Reader', id: 'Al-Quran Digital', de: 'Digitaler Koran', es: 'Corán Digital', pt: 'Alcorão Digital', fr: 'Coran Digital', it: 'Corano Digitale' },
    desc: { en: 'Read Quran with tajweed, translation, and Indonesian tafsir per verse.', id: 'Baca Al-Quran dengan tajwid, terjemahan, dan tafsir per ayat.', de: 'Koran lesen mit Tajwid und Übersetzung.', es: 'Lee el Corán con tajwid y traducción.', pt: 'Leia o Alcorão com tajweed e tradução.', fr: 'Lisez le Coran dengan tajwid et traduction.', it: 'Leggi il Corano con tajwid e traduzione.' },
  },
  {
    id: 'prayer-times',
    icon: Navigation,
    category: 'religious',
    href: '/tools/prayer-times',
    name: { en: 'Prayer Times & Qibla', id: 'Jadwal Sholat & Kiblat', de: 'Gebetszeiten & Qibla', es: 'Horarios de Oración', pt: 'Horários de Oração', fr: 'Heures de Prière', it: 'Orari Preghiera' },
    desc: { en: 'Accurate local prayer times and real-time compass for Qibla direction.', id: 'Jadwal sholat akurat dan kompas arah kiblat real-time.', de: 'Genaue Gebetszeiten und Qibla-Kompass.', es: 'Horarios de oración dan brújula de Qibla en tiempo real.', pt: 'Horários de oração e bússola Qibla em tempo real.', fr: 'Heures de prière et boussole Qibla en temps réel.', it: 'Orari di preghiera e bussola Qibla in tempo reale.' },
  },
  // --- FINANCE ---
  {
    id: 'debt-tracker',
    icon: TrendingDown,
    category: 'finance',
    isNew: true,
    href: '/tools/debt-tracker',
    name: { en: 'Debt Payoff Tracker', id: 'Pelacak Pelunasan Hutang', de: 'Schulden-Tracker', es: 'Rastreador de Deudas', pt: 'Calculadora de Dívidas', fr: 'Suivi de Dettes', it: 'Tracker Debiti' },
    desc: { en: 'Calculate your debt-free date using Snowball or Avalanche methods.', id: 'Hitung tanggal lunas hutang dengan metode Snowball atau Avalanche.', de: 'Berechnen Sie Ihr schuldenfreies Datum.', es: 'Calcula tu fecha de desendeudamiento.', pt: 'Calcule sua data livre de dívidas.', fr: 'Calculez votre date de libération de dettes.', it: 'Calcola la tua data di libertà dai debiti.' },
  },
  {
    id: 'budget',
    icon: Calculator,
    category: 'finance',
    href: '/tools/budget-planner',
    name: { en: 'Budget Planner', id: 'Perencana Anggaran', de: 'Budgetplaner', es: 'Presupuesto', pt: 'Orçamento', fr: 'Budget', it: 'Budget' },
    desc: { en: 'Zero-based budgeting. Track every dollar.', id: 'Anggaran berbasis nol. Lacak tiap rupiah.', de: 'Nullbasiertes Budgetieren. Jeden Euro verfolgen.', es: 'Presupuesto base cero. Controla cada euro.', pt: 'Orçamento base zero. Rastreie cada centavo.', fr: 'Budget base zero. Suivez chaque euro.', it: 'Budget base zero. Traccia setiap euro.' },
  },
  {
    id: 'split-bill',
    icon: Calculator,
    category: 'finance',
    href: '/tools/split-bill',
    name: { en: 'Split Bill', id: 'Bagi Tagihan', de: 'Rechnung teilen', es: 'Dividir Cuenta', pt: 'Dividir Conta', fr: 'Partager Addition', it: 'Dividi Conto' },
    desc: { en: 'Handle tax & service for group dining.', id: 'Hitung pajak & layanan untuk makan grup.', de: 'Steuern & Service für Gruppen berechnen.', es: 'Calcula impuestos y servicio para grupos.', pt: 'Calcule impuestos e serviço para grupos.', fr: 'Calculez taxes et service pour groupes.', it: 'Calcola tasse e servizio per gruppi.' },
  },
  // --- BUSINESS ---
  {
    id: 'idea-tracker',
    icon: Lightbulb,
    category: 'business',
    href: '/tools/idea-tracker',
    name: { en: 'Idea Tracker', id: 'Pelacak Ide', de: 'Ideen-Tracker', es: 'Rastreador de Ideas', pt: 'Rastreador de Ideias', fr: "Suivi d'Idées", it: 'Tracker di Idee' },
    desc: { en: 'Capture and organize brainstorming ideas locally with voice dictation.', id: 'Catat dan kelola ide brainstorming secara lokal dengan dikte suara.', de: 'Ideen lokal erfassen und organisieren.', es: 'Captura y organiza ideas localmente.', pt: 'Capture e organize ideias localmente.', fr: 'Capturez et organisez vos idées localement.', it: 'Cattura e organizza le idee localmente.' },
  },
  {
    id: 'invoice',
    icon: FileText,
    category: 'business',
    href: '/tools/invoice',
    name: { en: 'Invoice Generator', id: 'Pembuat Invoice', de: 'Rechnungsgenerator', es: 'Generador Facturas', pt: 'Gerador Faturas', fr: 'Générateur Factures', it: 'Generatore Fatture' },
    desc: { en: 'Create PDF invoices. No data uploaded.', id: 'Buat faktur PDF. Data tidak di-upload.', de: 'PDF-Rechnungen erstellen. Keine Uploads.', es: 'Crea facturas PDF. Sin subida de datos.', pt: 'Crie faturas PDF. Sem envio de dados.', fr: 'Créez factures PDF. Pas de données envoyées.', it: 'Crea fatture PDF. Nessun dato caricato.' },
  },
  {
    id: 'inventory',
    icon: Box,
    category: 'business',
    href: '/tools/inventory',
    name: { en: 'Inventory Manager', id: 'Manajemen Stok', de: 'Lagerverwaltung', es: 'Gestión Inventario', pt: 'Gestão Estoque', fr: 'Gestion Stock', it: 'Gestione Inventario' },
    desc: { en: 'Track stock in/out and low stock alerts.', id: 'Lacak stok masuk/keluar dan peringatan habis.', de: 'Bestand verfolgen und Warnungen.', es: 'Controla stock y alertas de bajo inventario.', pt: 'Rastreie estoque e alertas de baixa.', fr: 'Suivez le stock et alertes de rupture.', it: 'Traccia scorte e avvisi esaurimento.' },
  },
  {
    id: 'shift',
    icon: Users,
    category: 'business',
    href: '/tools/shift',
    name: { en: 'Shift Scheduler', id: 'Jadwal Shift', de: 'Schichtplaner', es: 'Planificador Turnos', pt: 'Escala Kerja', fr: 'Planning Équipe', it: 'Pianificatore Turni' },
    desc: { en: 'Organize employee shifts (Morning/Night).', id: 'Atur shift karyawan (Pagi/Malam).', de: 'Mitarbeiterschichten organisieren.', es: 'Organiza turnos de empleados.', pt: 'Organize turnos de funcionários.', fr: 'Organisez les équipes (Matin/Soir).', it: 'Organizza turni dipendenti.' },
  },
  // --- SPORTS ---
  {
    id: 'americano',
    icon: Trophy,
    category: 'sports',
    href: '/tools/americano',
    name: { en: 'Americano Generator', id: 'Generator Americano', de: 'Americano Generator', es: 'Generador Americano', pt: 'Gerador Americano', fr: 'Générateur Americano', it: 'Generatore Americano' },
    desc: { en: 'Organize Padel or Pickleball tournaments. Auto-pairing & scoring.', id: 'Atur turnamen Padel atau Pickleball. Rotasi pasangan otomatis.', de: 'Organisieren Sie Padel- oder Pickleball-Turniere.', es: 'Organiza torneos de Pádel o Pickleball.', pt: 'Organize torneios de Padel atau Pickleball.', fr: 'Organisez des tournois de Padel atau Pickleball.', it: 'Organizza tornei di Padel o Pickleball.' },
  },
  {
    id: 'tennis',
    icon: Activity,
    category: 'sports',
    href: '/tools/tennis',
    name: { en: 'Tennis Generator', id: 'Generator Tenis', de: 'Tennis-Generator', es: 'Generador de Tenis', pt: 'Gerador de Tênis', fr: 'Générateur Tennis', it: 'Generatore Tennis' },
    desc: { en: 'Create fair doubles matches for social clubs with skill balancing.', id: 'Buat pertandingan ganda yang adil untuk klub dengan penyeimbang skill.', de: 'Erstellen Sie faire Doppelspiele für Clubs.', es: 'Crea partidos de dobles justos para clubes.', pt: 'Crie jogos de duplas justos para clubes.', fr: 'Créez des doubles équitables pour les clubs.', it: 'Crea doppi equilibrati per i club.' },
  },
  {
    id: 'futsal',
    icon: Clock,
    category: 'sports',
    href: '/tools/futsal',
    name: { en: 'Futsal Scoreboard', id: 'Papan Skor Futsal', de: 'Futsal-Anzeige', es: 'Marcador Futsal', pt: 'Placar Futsal', fr: 'Score Futsal', it: 'Tabellone Calcetto' },
    desc: { en: 'Digital scoreboard with timer and fouls.', id: 'Papan skor digital dengan timer dan pelanggaran.', de: 'Digitale Tafel mit Timer und Fouls.', es: 'Marcador digital con temporizador dan faltas.', pt: 'Placar digital con cronômetro e faltas.', fr: 'Tableau numérique avec minuterie et fautes.', it: 'Tabellone digitale con timer e falli.' },
  },
  {
    id: 'scoreboard',
    icon: Minimize,
    category: 'sports',
    href: '/tools/scoreboard',
    name: { en: 'Universal Scoreboard', id: 'Papan Skor Universal', de: 'Universal-Anzeigetafel', es: 'Marcador Universal', pt: 'Placar Universal', fr: 'Score Universel', it: 'Tabellone Universale' },
    desc: { en: 'For Badminton, Volleyball, Ping Pong. Simple & Offline.', id: 'Untuk Badminton, Voli, Pingpong. Simpel & Offline.', de: 'Für Badminton, Volleyball. Einfach & Offline.', es: 'Para Bádminton, Voleibol. Simple y Offline.', pt: 'Para Badminton, Vôlei. Simples e Offline.', fr: 'Pour Badminton, Volley. Simple et Hors ligne.', it: 'Per Badminton, Pallavolo. Semplice e Offline.' },
  },
  // --- PRODUCTIVITY ---
  {
    id: 'pdf-watermark',
    icon: FileBadge,
    category: 'productivity',
    href: '/tools/pdf-watermark',
    name: { en: 'PDF Watermark', id: 'Watermark PDF', de: 'PDF-Wasserzeichen', es: 'Marca PDF', pt: "Marca d'água PDF", fr: 'Filigrane PDF', it: 'Filigrana PDF' },
    desc: { en: 'Securely add text watermarks to PDF files locally.', id: 'Tambah watermark teks ke file PDF lokal dengan aman.', de: 'Sicher Text-Wasserzeichen zu PDF-Dateien hinzufügen.', es: 'Añade marcas de agua de teks a PDF localmente.', pt: "Adicione marcas d'água de texto a PDFs localmente.", fr: 'Ajoutez des filigranes texte aux PDF localement.', it: 'Aggiungi filigrana teks ai PDF localmente.' },
  },
  {
    id: 'image-watermark',
    icon: Stamp,
    category: 'productivity',
    href: '/tools/image-watermark',
    name: { en: 'Image Watermark', id: 'Watermark Foto', de: 'Bild-Wasserzeichen', es: 'Marca de Agua', pt: "Marca d'água", fr: 'Filigrane Image', it: 'Filigrana' },
    desc: { en: 'Add text or logo patterns to protect images locally.', id: 'Tambah teks atau logo untuk melindungi foto secara lokal.', de: 'Text oder Logos zum Schutz von Bildern hinzufügen.', es: 'Añade teks o logos para proteger imágenes.', pt: 'Adicione teks atau logotipos para proteger imagens.', fr: 'Ajoutez teks atau logo untuk protéger vos images.', it: 'Aggiungi testo atau loghi per prottegere immagini.' },
  },
  {
    id: 'compressor',
    icon: Minimize,
    category: 'productivity',
    href: '/tools/image-compressor',
    name: { en: 'Image Compressor', id: 'Kompres Foto', de: 'Bildkompressor', es: 'Compresor Imagen', pt: 'Compressor Imagem', fr: 'Compresseur Image', it: 'Compressore' },
    desc: { en: 'Reduce file size securely in browser.', id: 'Kecilkan ukuran file aman di browser.', de: 'Dateigröße sicher im Browser reduzieren.', es: 'Reduce tamaño de archivo en navegador.', pt: 'Reduza tamanho do arquivo no navegador.', fr: 'Réduisez taille fichier dalam navigateur.', it: 'Riduci dimensi file nel browser.' },
  },
  {
    id: 'resizer',
    icon: Scaling,
    category: 'productivity',
    href: '/tools/image-resizer',
    name: { en: 'Image Resizer', id: 'Ubah Ukuran Foto', de: 'Bildgröße mengubah', es: 'Redimensionar', pt: 'Redimensionar', fr: 'Redimensionner', it: 'Ridimensiona' },
    desc: { en: 'Resize dimensions (px) accurately.', id: 'Ubah dimensi (px) secara akurat.', de: 'Dimensionen (px) genau ändern.', es: 'Cambia dimensiones (px) con precisión.', pt: 'Mude dimensi (px) con precisión.', fr: 'Changez dimensions (px) dengan précision.', it: 'Cambia dimensi (px) con precisione.' },
  },
  {
    id: 'cropper',
    icon: Scissors,
    category: 'productivity',
    href: '/tools/image-cropper',
    name: { en: 'Image Cropper', id: 'Potong Foto', de: 'Bild zuschneiden', es: 'Recortar Imagen', pt: 'Cortar Imagem', fr: 'Rogner Image', it: 'Ritaglia' },
    desc: { en: 'Crop to 1:1, 16:9 or custom ratio.', id: 'Potong ke 1:1, 16:9 atau rasio bebas.', de: 'Auf 1:1, 16:9 oder benutzerdefiniert.', es: 'Recorta a 1:1, 16:9 o personalizado.', pt: 'Corte em 1:1, 16:9 o personalizado.', fr: 'Rognez en 1:1, 16:9 ou personnalisé.', it: 'Ritaglia in 1:1, 16:9 o personalizzato.' },
  },
];

export const CATEGORY_ORDER: Category[] = [
  'favorites', 'new', 'religious', 'sports', 'business', 'finance', 'productivity',
];

export const UI_LABELS: Record<string, Record<string, string>> = {
  hero_title: { en: 'VersoKit: Daily Tools for Everyone', id: 'VersoKit: Alat Harian untuk Semua', de: 'VersoKit: Tägliche Werkzeuge', es: 'VersoKit: Herramientas Diarias', pt: 'VersoKit: Ferramentas Diárias', fr: 'VersoKit: Outils Quotidiens', it: 'VersoKit: Strumenti Quotidiani' },
  search_placeholder: { en: 'Search for a tool (e.g., Quran, Debt, Budget)...', id: 'Cari alat (misal: Quran, Hutang, Anggaran)...', de: 'Suche nach einem Werkzeug (z. B. Koran, Schulden)...', es: 'Buscar una herramienta (ej. Corán, Deuda)...', pt: 'Procurar ferramenta (ex: Alcorão, Dívida)...', fr: 'Rechercher un outil (ex: Coran, Dette)...', it: 'Cerca uno strumento (es. Corano, Debito)...' },
  no_results: { en: 'No tools found matching', id: 'Tidak ada alat yang cocok dengan', de: 'Keine Werkzeuge gefunden für', es: 'No se encontraron herramientas para', pt: 'Nenhuma ferramenta encontrada para', fr: 'Aucun outil trouvé pour', it: 'Nessuno strumento trovato per' },
  open_btn: { en: 'Open Tool', id: 'Buka Alat', de: 'Öffnen', es: 'Abrir', pt: 'Abrir', fr: 'Ouvrir', it: 'Apri' },
  cat_favorites: { en: 'Your Favorites', id: 'Favorit Anda', de: 'Deine Favoriten', es: 'Tus Favoritos', pt: 'Seus Favoritos', fr: 'Vos Favoris', it: 'I Tuoi Preferiti' },
  cat_new: { en: 'New Releases', id: 'Rilisan Terbaru', de: 'Neuheiten', es: 'Novedades', pt: 'Lançamentos', fr: 'Nouveautés', it: 'Ultime Novità' },
  cat_religious: { en: 'Religious Utilities', id: 'Alat Ibadah', de: 'Religiöse Werkzeuge', es: 'Utilidades Religiosas', pt: 'Utilidades Religiosas', fr: 'Outils Religieux', it: 'Utilità Religiose' },
  cat_sports: { en: 'Sports & Games', id: 'Olahraga & Game', de: 'Sport & Spiele', es: 'Deportes y Juegos', pt: 'Desportos e Jogos', fr: 'Sports et Jeux', it: 'Sport e Giochi' },
  cat_business: { en: 'Business Tools', id: 'Bisnis & Usaha', de: 'Geschäftswerkzeuge', es: 'Herramientas de Negocio', pt: 'Ferramentas de Negócio', fr: 'Outils de Business', it: 'Strumenti di Business' },
  cat_finance: { en: 'Finance & Budget', id: 'Keuangan & Anggaran', de: 'Finanz-Werkzeuge', es: 'Finanzas y Presupuesto', pt: 'Ferramentas Financeiras', fr: 'Outils de Finance', it: 'Strumenti Finanziari' },
  cat_productivity: { en: 'Productivity & Utilities', id: 'Produktivitas & Utilitas', de: 'Produktivitas', es: 'Productividad', pt: 'Produtividade', fr: 'Productivité', it: 'Produttività' },
  badge_new: { en: 'NEW', id: 'BARU', de: 'NEU', es: 'NUEVO', pt: 'NOVO', fr: 'NOUVEAU', it: 'NUOVO' },
};

export const BADGE_TEXT: Record<string, Record<string, string>> = {
  privacy: { en: 'Privacy-first', id: 'Privasi Utama', de: 'Datenschutz', es: 'Privacidad', pt: 'Privacidad', fr: 'Confidentialité', it: 'Privacy' },
  offline: { en: 'Offline-ready', id: 'Bisa Offline', de: 'Offline-bereit', es: 'Modo Offline', pt: 'Modo Offline', fr: 'Hors ligne', it: 'Offline' },
  free: { en: 'Free forever', id: 'Gratis Selamanya', de: 'Kostenlos', es: 'Gratis', pt: 'Grátis', fr: 'Gratuit', it: 'Gratis' },
};
