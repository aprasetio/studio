
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
        { title: "Como funciona o torneio Americano", content: "Americano é um formato social para Padel e Pickleball. Você muda de parceiro a cada rodada. O aplicativo cuida dos emparelhamentos." },
        { title: "Modo Padel vs Pickleball", content: "Para **Padel**, use 'Pontos Alvo' (ex: 32). Para **Pickleball**, use 'Corrida' (ex: até 11). O sistema gerencia o banco automaticamente para números ímpares de jogadores." }
      ]
    },
    fr: {
      title: "Comment fonctionne un tournoi Americano",
      sections: [
        { title: "Comment fonctionne un tournoi Americano", content: "L'Americano est un format social pour le Padel et le Pickleball. Vous changez de partenaire à chaque tour. L'application gère les appariements complexes." },
        { title: "Mode Padel vs Pickleball", content: "Pour le **Padel**, utilisez 'Points Cibles' (ex: 32). Pour le **Pickleball**, le mode 'Course' (ex: à 11). Le système gère automatiquement le banc pour les nonprofits." }
      ]
    },
    it: {
      title: "Come funziona il torneo Americano",
      sections: [
        { title: "Come funziona il torneo Americano", content: "L'Americano è un formato sociale per Padel e Pickleball. Cambi partner a ogni turno. L'app gestisce gli abbinamenti complessi." },
        { title: "Modalità Padel vs Pickleball", content: "Per il **Padel**, usa 'Punti Obiettivo' (es. 32). Per il **Pickleball**, la modalità 'Gara' (es. a 11). Il sistema gestisce automaticamente la panchina se i giocatori sono dispari." }
      ]
    }
  },
  "image-resizer": {
    en: { title: "Image Resizer", sections: [{ title: "Privacy-First Resizing", content: "Resize images specifically for Instagram, TikTok, or Passports. Processed 100% in your browser." }] },
    id: { title: "Ubah Ukuran Gambar", sections: [{ title: "Ubah Ukuran Aman", content: "Ubah ukuran foto khusus untuk Instagram, TikTok, atau Paspor. Diproses 100% di browser Anda, tanpa upload server." }] },
    de: { title: "Bildgröße ändern", sections: [{ title: "Datenschutzfreundliche Größenänderung", content: "Bildgröße für Instagram oder Pässe ändern. 100% im Browser verarbeitet." }] },
    es: { title: "Redimensionar Imagen", sections: [{ title: "Redimensionado Seguro", content: "Cambia el tamaño para Instagram o Pasaporte. Procesado 100% en tu navegador." }] },
    pt: { title: "Redimensionar Imagem", sections: [{ title: "Redimensionamento Seguro", content: "Redimensione para Instagram ou Passaporte. Processado 100% no navegador." }] },
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
  "tennis": {
    en: {
      title: "Mastering Your Tennis Mixer with Our Match Generator",
      sections: [
        {
          title: "How to Set Up Your Tournament",
          content: "Setting up a social tennis session has never been easier. Start by entering your <b>Number of Players</b> and <b>Total Duration</b>. Our generator will automatically calculate how many rounds fit into your time slot. Add your players' names and assign their skill levels from 'Newbie' to 'Pro' to ensure the fairest possible match-ups."
        },
        {
          title: "The Fair Play Algorithm Explained",
          content: "Tired of the same people sitting out every round? Our proprietary <b>Fair Play Algorithm</b> prioritizes players who have played the fewest games first. When balancing teams, it uses a 'Best + Worst vs. Middle Two' logic, ensuring that even with mixed skill levels, every match is competitive and fun."
        },
        {
          title: "Smart Swapping & Rebalancing",
          content: "If a player needs to leave early or arrives late, use the <b>Swap</b> feature. You can replace a player in any scheduled match, and the tool will offer to rebalance all future games to maintain equal court time for the remaining roster."
        }
      ]
    },
    id: {
      title: "Panduan Lengkap Generator Jadwal Tenis Ganda",
      sections: [
        {
          title: "Cara Mengatur Turnamen Anda",
          content: "Mengatur sesi tenis sosial kini lebih mudah. Mulailah dengan memasukkan <b>Jumlah Pemain</b> dan <b>Durasi Sewa Lapangan</b>. Generator kami akan menghitung otomatis berapa banyak babak yang tersedia. Masukkan nama pemain dan level skill mereka untuk hasil pembagian tim yang adil."
        },
        {
          title: "Memahami Algoritma Fair Play",
          content: "Algoritma kami memprioritaskan pemain yang paling sedikit bermain untuk masuk ke babak berikutnya. Ini memastikan semua orang mendapatkan waktu lapangan yang sama, sangat cocok untuk grup dengan jumlah pemain ganjil."
        },
        {
          title: "Tips Mengelola Roster Pemain",
          content: "Gunakan fitur <b>Ganti Pemain (Swap)</b> jika ada teman yang harus pulang lebih awal. Sistem akan menawarkan untuk mengacak ulang jadwal masa depan agar tetap adil bagi mereka yang masih bertahan."
        }
      ]
    },
    de: {
      title: "Tennis-Match-Generator",
      sections: [{ title: "Fairer Match-Generator", content: "Tennis-Match-Generator. Erstellen Sie mühelos ausgewogene Doppelspiele. Perfekt für gesellige Club-Sessions." }]
    },
    es: {
      title: "Generador de Partidos de Tenis",
      sections: [{ title: "Generador de Partidos Justos", content: "Generador de Partidos de Tenis. Crea partidos de dobles equilibrados sin esfuerzo. Perfecto para sesiones sociales de clubes." }]
    },
    pt: {
      title: "Gerador de Partidas de Tênis",
      sections: [{ title: "Gerador de Partidas Justas", content: "Gerador de Partidas de Tênis. Crie jogos de duplas equilibrados facilmente. Perfeito para sessões sociais de clubes." }]
    },
    fr: {
      title: "Générateur de Matchs de Tennis",
      sections: [{ title: "Générateur de Matchs Équitables", content: "Générateur de Matchs de Tennis. Créez des matchs de double équilibrés sans effort. Parfait pour les sessions sociales du club." }]
    },
    it: {
      title: "Generatore Partite Tennis",
      sections: [{ title: "Generatore di Partite Eque", content: "Generatore Partite Tennis. Crea partite di doppio equilibrate senza sforzo. Perfetto per sessioni sociali di club." }]
    }
  },
  "budget-planner": {
    en: {
      title: "Why Zero-Based Budgeting is the Key to Financial Freedom",
      sections: [
        {
          title: "Give Every Dollar a Job",
          content: "Zero-Based Budgeting. Allocate every dollar to a category. Track expenses vs income. Our planner uses the method where your Income minus your Expenses should always equal zero."
        }
      ]
    },
    id: {
      title: "Kuasai Keuangan dengan Metode Anggaran Berbasis Nol",
      sections: [
        {
          title: "Berikan Tugas untuk Setiap Rupiah",
          content: "Anggaran Berbasis Nol. Alokasikan setiap rupiah ke kategori. Lacak pengeluaran vs pemasukan. Metode ini memastikan setiap rupiah memiliki tugas."
        }
      ]
    },
    de: {
      title: "Nullbasiertes Budgetieren",
      sections: [
        {
          title: "Jeden Euro zuweisen",
          content: "Nullbasiertes Budgetieren. Weisen Sie jeden Euro einer Kategorie zu. Verfolgen Sie Ausgaben gegenüber Einnahmen."
        }
      ]
    },
    es: {
      title: "Presupuesto Base Cero",
      sections: [
        {
          title: "Asignar cada euro",
          content: "Presupuesto Base Cero. Asigna cada euro a una categoría. Controla tus gastos frente a tus ingresos."
        }
      ]
    },
    pt: {
      title: "Orçamento Base Zero",
      sections: [
        {
          title: "Alocar cada centavo",
          content: "Orçamento Base Zero. Aloque cada centavo a uma categoria. Acompanhe despesas versus receitas."
        }
      ]
    },
    fr: {
      title: "Budget Base Zéro",
      sections: [
        {
          title: "Allouer chaque euro",
          content: "Budget Base Zéro. Allouez chaque euro à une catégorie. Suivez vos dépenses par rapport à vos revenus."
        }
      ]
    },
    it: {
      title: "Budget a Base Zero",
      sections: [
        {
          title: "Assegna ogni euro",
          content: "Budget a Base Zero. Assegna ogni euro a una categoria. Monitora le spese rispetto alle entrate."
        }
      ]
    }
  },
  "invoice": {
    en: {
      title: "Professional PDF Invoicing for Freelancers",
      sections: [
        {
          title: "Free Invoice Generator",
          content: "Free Invoice Generator. Create PDF invoices instantly in your browser. No data stored on servers. A professional invoice ensures you get paid faster."
        }
      ]
    },
    id: {
      title: "Cara Buat Invoice Profesional untuk Freelancer",
      sections: [
        {
          title: "Pembuat Invoice Gratis",
          content: "Pembuat Invoice Gratis. Buat faktur PDF instan di browser. Data tidak disimpan di server. Invoice yang rapi membantu Anda terlihat profesional."
        }
      ]
    },
    de: {
      title: "Rechnungsgenerator",
      sections: [
        {
          title: "Kostenloser Rechnungsgenerator",
          content: "Kostenloser Rechnungsgenerator. Erstellen Sie PDF-Rechnungen sofort im Browser."
        }
      ]
    },
    es: {
      title: "Generador de Facturas",
      sections: [
        {
          title: "Generador de Facturas Gratis",
          content: "Generador de Facturas Gratis. Crea facturas PDF al instante."
        }
      ]
    },
    pt: {
      title: "Gerador de Faturas",
      sections: [
        {
          title: "Gerador de Faturas Grátis",
          content: "Gerador de Faturas Grátis. Crie faturas em PDF instantaneamente."
        }
      ]
    },
    fr: {
      title: "Générateur de Factures",
      sections: [
        {
          title: "Générateur de Factures Gratuit",
          content: "Générateur de Factures Gratuit. Créez des factures PDF instantanément."
        }
      ]
    },
    it: {
      title: "Generatore Fatture",
      sections: [
        {
          title: "Generatore Fatture Gratuito",
          content: "Generatore Fatture Gratuito. Crea fatture PDF istantaneamente."
        }
      ]
    }
  },
  "futsal": {
    en: {
      title: "Digital Futsal Scoreboard: Pro Features for Local Matches",
      sections: [
        {
          title: "Digital Futsal Scoreboard",
          content: "Track score, period, fouls, and time. Fullscreen mode available. Standard Futsal rules require a 20-minute countdown."
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital: Fitur Pro untuk Sparing",
      sections: [
        {
          title: "Papan Skor Futsal Digital",
          content: "Catat skor, babak, pelanggaran, dan waktu. Tersedia mode layar penuh. Sesuai dengan pengatur waktu standar 20 menit."
        }
      ]
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
      title: "Placar de Futsal Digital",
      sections: [{ title: "Características", content: "Placar de Futsal Digital. Acompanhe placar, período, faltas e tempo." }]
    },
    fr: {
      title: "Tableau de Score Futsal",
      sections: [{ title: "Caractéristiques", content: "Tableau de Score Futsal. Suivez le score, la période, les fautes et le temps." }]
    },
    it: {
      title: "Tabellone Calcetto Digitale",
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
      title: "Fußball-Aufstellungs-Planer",
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
      title: "Generatore Formazione Calcio",
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
      title: "Tableau de Score Simple",
      sections: [{ title: "Utilisation", content: "Tableau de Score Simple. Pour Badminton, Volley ou Ping Pong." }]
    },
    it: {
      title: "Tabellone Universale",
      sections: [{ title: "Utilizzo", content: "Tabellone Semplice. Usa per Badminton, Pallavolo o Ping Pong." }]
    }
  },
  "inventory": {
    en: { title: "Stock Management", sections: [{ title: "Tool Overview", content: "Stock Management Tool. Track items, quantities, and low stock alerts. Runs offline." }] },
    id: { title: "Manajemen Stok", sections: [{ title: "Ringkasan Alat", content: "Alat Manajemen Stok. Lacak barang, jumlah, dan peringatan stok menipis. Berjalan offline." }] },
    de: { title: "Lagerverwaltung", sections: [{ title: "Überblick", content: "Lagerverwaltung. Verfolgen Sie Artikel und Bestände offline." }] },
    es: { title: "Gestión de Inventario", sections: [{ title: "Descripción", content: "Gestión de Inventario. Controla artículos y stock bajo offline." }] },
    pt: { title: "Gestão de Estoque", sections: [{ title: "Visão Geral", content: "Gestão de Estoque. Acompanhe itens e alertas de estoque baixo." }] },
    fr: { title: "Gestion de Stock", sections: [{ title: "Aperçu", content: "Gestion de Stock. Suivez les articles et les alertes de stock faible." }] },
    it: { title: "Gestione Inventario", sections: [{ title: "Panoramica", content: "Gestione Inventario. Traccia articoli e scorte basse offline." }] }
  },
  "shift": {
    en: { title: "Shift Scheduler", sections: [{ title: "Tool Overview", content: "Employee Shift Planner. Organize morning, afternoon, and night shifts easily. Download schedule." }] },
    id: { title: "Jadwal Shift", sections: [{ title: "Ringkasan Alat", content: "Jadwal Shift Karyawan. Atur shift pagi, siang, malam dengan mudah. Unduh jadwal." }] },
    de: { title: "Schichtplaner", sections: [{ title: "Überblick", content: "Schichtplaner. Organisieren Sie Schichten einfach und laden Sie den Plan herunter." }] },
    es: { title: "Planificador de Turnos", sections: [{ title: "Descripción", content: "Planificador de Turnos. Organiza turnos de mañana, tarde y noche." }] },
    pt: { title: "Escala de Trabalho", sections: [{ title: "Visão Geral", content: "Escala de Trabalho. Organize turnos facilmente e baixe a escala." }] },
    fr: { title: "Planning d'Équipe", sections: [{ title: "Aperçu", content: "Planning d'Équipe. Organisez les 3x8 facilement." }] },
    it: { title: "Pianificatore Turni", sections: [{ title: "Panoramica", content: "Pianificatore Turni. Organizza i turni facilmente." }] }
  },
  "split-bill": {
    en: { title: "Split Bill", sections: [{ title: "Tool Overview", content: "Restaurant Bill Splitter. Calculate tax and service charge accurately for groups." }] },
    id: { title: "Bagi Tagihan", sections: [{ title: "Ringkasan Alat", content: "Pembagi Tagihan Restoran. Hitung pajak dan layanan secara akurat untuk grup." }] },
    de: { title: "Rechnungsteiler", sections: [{ title: "Überblick", content: "Rechnungsteiler. Berechnen Sie Steuern und Servicegebühren präzise." }] },
    es: { title: "Dividir Cuenta", sections: [{ title: "Descripción", content: "Dividir Cuenta. Calcula impuestos y servicio con precisión." }] },
    pt: { title: "Dividir Conta", sections: [{ title: "Visão Geral", content: "Dividir Conta. Calcule impostos e taxas de serviço." }] },
    fr: { title: "Partage d'Addition", sections: [{ title: "Aperçu", content: "Partage d'Addition. Calculez taxes et service avec précision." }] },
    it: { title: "Divisione Conto", sections: [{ title: "Panoramica", content: "Divisione Conto. Calcola tasse e servizio con precisione." }] }
  }
};
