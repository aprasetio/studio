
/**
 * Centralized SEO Article Repository for VersoKit tools.
 * Supports: en, id, es, pt, de, fr, it.
 */

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ToolArticle {
  title: string;
  sections: ArticleSection[];
}

export interface ArticleCollection {
  [toolId: string]: {
    [lang: string]: ToolArticle;
  };
}

export const TOOL_ARTICLES: ArticleCollection = {
  "americano": {
    en: {
      title: "Americano Tournament Generator (Padel & Pickleball)",
      sections: [
        { title: "How Americano Tournaments Work", content: "Americano is a social tournament format for Padel and Pickleball. You play with a different partner in every round. The app handles the complex math of pairing and scoring." },
        { title: "Padel vs. Pickleball Modes", content: "For **Padel**, use 'Target Score' (e.g., 32 points total). For **Pickleball**, use 'Race Mode' (e.g., first to 11). The system automatically manages the bench if you have odd numbers of players (5, 6, 9, etc.)." }
      ]
    },
    id: {
      title: "Generator Turnamen Americano (Padel & Pickleball)",
      sections: [
        { title: "Cara Main Turnamen Americano", content: "Americano adalah format turnamen sosial untuk Padel dan Pickleball. Anda berganti pasangan setiap ronde. Aplikasi ini mengatur jadwal pasangan dan skor secara otomatis." },
        { title: "Mode Padel vs Pickleball", content: "Untuk **Padel**, gunakan 'Target Poin' (misal: total 32). Untuk **Pickleball**, gunakan 'Mode Race' (misal: siapa cepat dapat 11). Sistem otomatis mengatur cadangan jika jumlah pemain ganjil." }
      ]
    },
    de: {
      title: "Americano-Turnier-Generator (Padel & Pickleball)",
      sections: [
        { title: "Wie Americano-Turniere funktionieren", content: "Americano ist ein soziales Turnierformat für Padel and Pickleball. Sie spielen in jeder Runde mit einem anderen Partner. Die App übernimmt die komplexe Paarung." },
        { title: "Padel vs. Pickleball", content: "Für **Padel** nutzen Sie 'Zielpunktzahl' (z.B. 32). Für **Pickleball** den 'Race-Modus' (z.B. bis 11). Das System verwaltet automatisch die Ersatzbank bei ungeraden Spielerzahlen." }
      ]
    },
    es: {
      title: "Generador de Torneos Americano (Pádel y Pickleball)",
      sections: [
        { title: "Cómo funciona el torneo Americano", content: "El Americano es un formato social para Pádel y Pickleball. Cambias de pareja en cada ronda. La app gestiona los emparejamientos y puntuaciones." },
        { title: "Modo Pádel vs Pickleball", content: "Para **Pádel**, usa 'Puntos Objetivo' (ej. 32). Para **Pickleball**, usa 'Carrera' (ej. a 11). El sistema gestiona automáticamente el banquillo si hay jugadores impares." }
      ]
    },
    pt: {
      title: "Gerador de Torneios Americano (Padel e Pickleball)",
      sections: [
        { title: "Como funciona o torneio Americano", content: "Americano é um format social para Padel e Pickleball. Você muda de parceiro a cada rodada. O aplicativo cuida dos emparelhamentos." },
        { title: "Modo Padel vs Pickleball", content: "Para **Padel**, use 'Pontos Alvo' (ex: 32). Para **Pickleball**, use 'Corrida' (ex: até 11). O sistema gerencia o banco automaticamente para números ímpares de jogadores." }
      ]
    },
    fr: {
      title: "Comment fonctionne un tournoi Americano",
      sections: [
        { title: "Comment fonctionne un tournoi Americano", content: "L'Americano est un format social pour le Padel et le Pickleball. Vous changez de partenaire à chaque tour. L'application gère les appariements complexes." },
        { title: "Mode Padel vs Pickleball", content: "Pour le **Padel**, utilisez 'Points Cibles' (ex: 32). Pour le **Pickleball**, le mode 'Course' (ex: à 11). Le système gère automatiquement le banc pour les nombres impairs." }
      ]
    },
    it: {
      title: "Come funziona il torneo Americano",
      sections: [
        { title: "Come funziona il torneo Americano", content: "L'Americano est un formato sociale per Padel e Pickleball. Cambi partner a ogni turno. L'app gestisce gli abbinamenti complessi." },
        { title: "Modalità Padel vs Pickleball", content: "Per il **Padel**, usa 'Punti Obiettivo' (es. 32). Per il **Pickleball**, la modalità 'Gara' (es. a 11). Il sistema gestisce automaticamente la panchina se i giocatori sono dispari." }
      ]
    }
  },
  "tennis": {
    en: {
      title: "Tennis Match Generator",
      sections: [{ title: "Fair Match Generator", content: "Create balanced doubles matches effortlessly. Perfect for club social sessions." }]
    },
    id: {
      title: "Generator Pertandingan Tenis",
      sections: [{ title: "Tentang", content: "Generator Pertandingan Tenis. Buat pertandingan ganda yang seimbang dengan mudah. Cocok untuk klub sosial." }]
    },
    de: {
      title: "Tennis-Match-Generator",
      sections: [{ title: "Über", content: "Tennis-Match-Generator. Erstellen Sie mühelos ausgewogene Doppelspiele." }]
    },
    es: {
      title: "Generador de Partidos de Tenis",
      sections: [{ title: "Acerca de", content: "Generador de Partidos de Tenis. Crea partidos de dobles equilibrados sin esfuerzo." }]
    },
    pt: {
      title: "Gerador de Partidas de Tênis",
      sections: [{ title: "Sobre", content: "Gerador de Partidas de Tênis. Crie jogos de duplas equilibrados facilmente." }]
    },
    fr: {
      title: "Générateur de Matchs de Tennis",
      sections: [{ title: "À propos", content: "Générateur de Matchs de Tennis. Créez des matchs de double équilibrés." }]
    },
    it: {
      title: "Generatore Partite Tennis",
      sections: [{ title: "Informazioni", content: "Generatore Partite Tennis. Crea partite di doppio equilibrate senza sforzo." }]
    }
  },
  "futsal": {
    en: {
      title: "Futsal Scoreboard",
      sections: [{ title: "Digital Futsal Scoreboard", content: "Track score, period, fouls, and time. Fullscreen mode available." }]
    },
    id: {
      title: "Papan Skor Futsal",
      sections: [{ title: "Fitur", content: "Papan Skor Futsal Digital. Catat skor, babak, pelanggaran, dan waktu. Tersedia mode layar penuh." }]
    },
    de: {
      title: "Futsal-Anzeigetafel",
      sections: [{ title: "Features", content: "Digitale Futsal-Anzeigetafel. Verfolgen Sie Spielstand, Periode, Fouls und Zeit." }]
    },
    es: {
      title: "Marcador de Fútbol Sala",
      sections: [{ title: "Características", content: "Marcador de Fútbol Sala. Controla puntuación, periodo, faltas y tiempo." }]
    },
    pt: {
      title: "Placar de Futsal",
      sections: [{ title: "Características", content: "Placar de Futsal Digital. Acompanhe placar, período, faltas e tempo." }]
    },
    fr: {
      title: "Tableau de Score Futsal",
      sections: [{ title: "Caractéristiques", content: "Tableau de Score Futsal. Suivez le score, la période, les fautes et le temps." }]
    },
    it: {
      title: "Tabellone Calcetto",
      sections: [{ title: "Caratteristiche", content: "Tabellone Calcetto Digitale. Traccia punteggio, periodo, falli e tempo." }]
    }
  },
  "lineup": {
    en: {
      title: "Lineup Builder",
      sections: [{ title: "How it works", content: "Football Lineup Builder. Drag and drop players to create formations (4-4-2, 4-3-3). Download as image." }]
    },
    id: {
      title: "Pembuat Formasi",
      sections: [{ title: "Cara Penggunaan", content: "Pembuat Formasi Sepak Bola. Geser pemain untuk membuat formasi (4-4-2, etc). Unduh sebagai gambar." }]
    },
    de: {
      title: "Aufstellungs-Planer",
      sections: [{ title: "Anleitung", content: "Fußball-Aufstellungs-Planer. Erstellen Sie Formationen per Drag & Drop." }]
    },
    es: {
      title: "Creador de Alineaciones",
      sections: [{ title: "Cómo usar", content: "Creador de Alineaciones. Arrastra jugadores para crear formaciones." }]
    },
    pt: {
      title: "Criador de Escalação",
      sections: [{ title: "Como usar", content: "Criador de Escalação. Arraste jogadores para criar formações." }]
    },
    fr: {
      title: "Créateur de Composition",
      sections: [{ title: "Comment ça marche", content: "Créateur de Composition. Glissez-déposez les joueurs pour créer des formations." }]
    },
    it: {
      title: "Generatore Formazione",
      sections: [{ title: "Come funziona", content: "Generatore Formazione Calcio. Trascina i giocatori per creare formazioni." }]
    }
  },
  "scoreboard": {
    en: {
      title: "Universal Scoreboard",
      sections: [{ title: "Usage", content: "Simple Scoreboard. Use for Badminton, Volleyball, or Ping Pong. No ads, completely offline." }]
    },
    id: {
      title: "Papan Skor Universal",
      sections: [{ title: "Penggunaan", content: "Papan Skor Serbaguna. Gunakan untuk Badminton, Voli, atau Pingpong. Tanpa iklan, offline." }]
    },
    de: {
      title: "Universal-Anzeigetafel",
      sections: [{ title: "Nutzung", content: "Einfache Anzeigetafel. Für Badminton, Volleyball oder Tischtennis." }]
    },
    es: {
      title: "Marcador Universal",
      sections: [{ title: "Uso", content: "Marcador Universal. Úsalo para Bádminton, Voleibol o Ping Pong." }]
    },
    pt: {
      title: "Placar Universal",
      sections: [{ title: "Uso", content: "Placar Simples. Use para Badminton, Vôlei ou Ping Pong." }]
    },
    fr: {
      title: "Tableau de Score Universel",
      sections: [{ title: "Utilisation", content: "Tableau de Score Simple. Pour Badminton, Volley ou Ping Pong." }]
    },
    it: {
      title: "Tabellone Universale",
      sections: [{ title: "Utilizzo", content: "Tabellone Semplice. Usa per Badminton, Pallavolo o Ping Pong." }]
    }
  },
  "image-resizer": {
    en: { title: "Image Resizer", sections: [{ title: "Privacy-First Resizing", content: "Resize images specifically for Instagram, TikTok, or Passports. Processed 100% in your browser." }] },
    id: { title: "Ubah Ukuran Gambar", sections: [{ title: "Ubah Ukuran Aman", content: "Ubah ukuran foto khusus untuk Instagram, TikTok, atau Paspor. Diproses 100% di browser Anda, tanpa upload server." }] },
    de: { title: "Bildgröße ändern", sections: [{ title: "Datenschutzfreundliche Größenänderung", content: "Bildgröße für Instagram oder Pässe ändern. 100% im Browser verarbeitet." }] },
    es: { title: "Redimensionar Imagen", sections: [{ title: "Redimensionado Seguro", content: "Cambia el tamaño para Instagram o Pasaporte. Procesado 100% en tu navegador." }] },
    pt: { title: "Redimensionar Imagem", sections: [{ title: "Redimensionamento Seguro", content: "Redimensione para Instagram ou Pasaporte. Processado 100% no navegador." }] },
    fr: { title: "Redimensionner Image", sections: [{ title: "Redimensionnement Sécurisé", content: "Redimensionnez pour Instagram ou Passeport. Traité à 100% dans votre navigateur." }] },
    it: { title: "Ridimensiona Immagine", sections: [{ title: "Ridimensionamento Sicuro", content: "Ridimensiona per Instagram o Passaporto. Elaborato al 100% nel browser." }] }
  },
  "image-cropper": {
    en: { title: "Image Cropper", sections: [{ title: "Crop Photos Easily", content: "Crop your images to exact ratios (1:1, 16:9) instantly. No quality loss." }] },
    id: { title: "Potong Gambar", sections: [{ title: "Potong Foto Mudah", content: "Potong gambar Anda ke rasio yang tepat (1:1, 16:9) secara instan. Tanpa mengurangi kualitas." }] },
    de: { title: "Bild zuschneiden", sections: [{ title: "Fotos einfach zuschneiden", content: "Bilder sofort auf exakte Verhältnisse (1:1, 16:9) zuschneiden. Kein Qualitätsverlust." }] },
    es: { title: "Cortar Imagen", sections: [{ title: "Recortar Fotos Fácilmente", content: "Recorta tus imágenes a ratios exactos (1:1, 16:9). Sin pérdida de calidad." }] },
    pt: { title: "Cortar Imagem", sections: [{ title: "Cortar Fotos Facilmente", content: "Corte suas imagens em proporções exatas. Sem perda de qualidade." }] },
    fr: { title: "Rogner Image", sections: [{ title: "Rogner Facilement", content: "Rognez vos images aux ratios exacts. Pas de perte de qualité." }] },
    it: { title: "Ritaglia Immagine", sections: [{ title: "Ritaglia Foto Facilmente", content: "Ritaglia le tue immagini in rapporti esatti. Nessuna perdita di qualità." }] }
  },
  "padel-americano": {
    en: {
      title: "Padel Americano: The Ultimate Social Tournament Format",
      sections: [
        {
          title: "What is Padel Americano?",
          content: "Unlike traditional matches, Americano is a tournament where you play with a <b>new partner every round</b>. It's designed to be social, inclusive, and highly competitive since you collect points as an individual."
        },
        {
          title: "The 32-Point Scoring Rule",
          content: "Matches in Americano often play to a fixed number of points, typically 32. This means every single point counts! If Team A wins 20-12, those points are added directly to each player's individual tally."
        }
      ]
    },
    id: {
      title: "Panduan Lengkap Turnamen Padel Americano",
      sections: [
        {
          title: "Apa itu Padel Americano?",
          content: "Format turnamen ini unik karena Anda akan <b>berganti pasangan</b> di setiap babak. Sangat cocok untuk komunitas yang ingin semua anggotanya saling mengenal sambil tetap berkompetisi secara adil."
        }
      ]
    }
  },
  "budget-planner": {
    en: {
      title: "Why Zero-Based Budgeting is the Key to Financial Freedom",
      sections: [
        {
          title: "Give Every Dollar a Job",
          content: "Our planner uses the <b>Zero-Based Budgeting</b> method. This means your Income minus your Expenses should always equal zero. By assigning every cent to a specific category (Rent, Groceries, Savings), you stop 'leaking' money and start spending with intention."
        },
        {
          title: "100% Privacy: Your Data Stays Local",
          content: "Unlike other budgeting apps, VersoKit does <b>not</b> send your financial data to a server. Everything is stored in your browser's <b>LocalStorage</b>. This means you can manage your wealth with total peace of mind, knowing your personal information is invisible to the world."
        },
        {
          title: "Managing Recurring Bills",
          content: "Set up your monthly subscriptions like Netflix or Rent once. Our tool will alert you when a bill is due and allow you to log the transaction with a single click, keeping your 'Available' balances accurate throughout the month."
        }
      ]
    },
    id: {
      title: "Kuasai Keuangan dengan Metode Anggaran Berbasis Nol",
      sections: [
        {
          title: "Berikan Tugas untuk Setiap Rupiah",
          content: "Metode <b>Zero-Based Budgeting</b> memastikan Pendapatan dikurangi Pengeluaran sama dengan nol. Dengan mengalokasikan setiap rupiah ke kategori tertentu (Listrik, Makan, Tabungan), Anda akan lebih sadar akan kemana uang Anda pergi."
        },
        {
          title: "Privasi Mutlak di Perangkat Anda",
          content: "VersoKit memproses semua data keuangan 100% secara lokal di browser Anda. Tidak ada data yang dikirim ke server kami, sehingga rahasia finansial Anda tetap aman dan pribadi."
        },
        {
          title: "Ekspor dan Backup Data",
          content: "Gunakan fitur <b>Backup JSON</b> untuk menyimpan riwayat anggaran Anda ke file lokal. Anda juga bisa mengekspor laporan ke format <b>CSV</b> untuk dibuka di Excel atau Google Sheets."
        }
      ]
    }
  },
  "invoice": {
    en: {
      title: "Professional PDF Invoicing for Freelancers",
      sections: [
        {
          title: "The Importance of Clear Billing",
          content: "A professional invoice ensures you get paid faster. Our tool generates clean, high-contrast PDF invoices that include all necessary legal fields: Business Info, Client Details, Tax calculations, and custom payment terms."
        },
        {
          title: "Required Fields for a Valid Invoice",
          content: "To avoid payment delays, always ensure your invoice includes a unique <b>Invoice Number</b>, the <b>Date of Issue</b>, a clear breakdown of services, and the <b>Grand Total</b> including any applicable taxes."
        }
      ]
    },
    id: {
      title: "Cara Buat Invoice Profesional untuk Freelancer",
      sections: [
        {
          title: "Keuntungan Invoice PDF",
          content: "Invoice yang rapi membantu Anda terlihat lebih profesional di mata klien. Gunakan generator kami untuk membuat file PDF yang siap cetak atau kirim via email dalam hitungan detik."
        },
        {
          title: "Komponen Penting dalam Faktur",
          content: "Pastikan invoice Anda memiliki Nama Bisnis, Nama Klien, Tanggal, Rincian Barang/Jasa, dan Total Harga agar proses pembayaran berjalan lancar tanpa hambatan administrasi."
        }
      ]
    }
  }
};
