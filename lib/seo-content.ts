/**
 * Centralized SEO Content for VersoKit tools.
 * Supports: en, id, es, pt, de, fr, it.
 */

export interface SeoItem {
  title: string;
  description?: string;
  steps: string[];
  article: string;
  faq: { q: string; a: string }[];
}

export interface SeoCollection {
  [key: string]: {
    [lang: string]: SeoItem;
  };
}

export const SEO_DATA: SeoCollection = {
  "tennis": {
    en: {
      title: "Tennis Match Generator",
      description: "Generate fair double match schedules with skill balancing and leaderboards.",
      steps: ["Add players and skill levels.", "Set court count and duration.", "Click Generate Schedule.", "Enter scores to update leaderboard."],
      article: "Our Fair Play algorithm ensures every player gets equal court time while balancing teams by skill. Perfect for clubs with odd numbers of players.",
      faq: [{ q: "How is it fair?", a: "The algorithm prioritizes players who have played the fewest rounds first." }]
    },
    id: {
      title: "Generator Jadwal Tenis",
      description: "Buat jadwal ganda yang adil dengan penyeimbang skill dan klasemen otomatis.",
      steps: ["Tambah pemain dan level skill.", "Atur jumlah lapangan.", "Klik Buat Jadwal.", "Isi skor untuk update klasemen."],
      article: "Algoritma Fair Play kami memastikan setiap pemain mendapatkan waktu bermain yang sama sambil menyeimbangkan tim berdasarkan skill.",
      faq: [{ q: "Bagaimana cara kerjanya?", a: "Algoritma memprioritaskan pemain yang paling sedikit bermain untuk masuk ke babak berikutnya." }]
    },
    de: {
      title: "Tennis-Match-Generator",
      description: "Erstellen Sie faire Doppel-Spielpläne mit Skill-Balancing und Bestenlisten.",
      steps: ["Spieler und Spielstärke hinzufügen.", "Platzanzahl und Dauer festlegen.", "Zeitplan generieren.", "Ergebnisse eingeben."],
      article: "Unser Fair-Play-Algorithmus stellt sicher, dass jeder Spieler die gleiche Spielzeit erhält, während die Teams nach Spielstärke ausgeglichen werden.",
      faq: [{ q: "Wie ist es fair?", a: "Der Algorithmus priorisiert Spieler, die bisher am wenigsten gespielt haben." }]
    },
    es: {
      title: "Generador de Partidos",
      description: "Genera horarios de dobles justos con equilibrio de habilidades y clasificación.",
      steps: ["Añadir jugadores y niveles.", "Fijar canchas y duración.", "Generar calendario.", "Ingresar resultados."],
      article: "Nuestro algoritmo de Fair Play garantiza que cada jugador tenga el mismo tiempo en cancha mientras equilibra los equipos por nivel.",
      faq: [{ q: "¿Cómo es justo?", a: "El algoritmo prioriza a los jugadores que han jugado menos rondas." }]
    },
    fr: {
      title: "Générateur de Matchs",
      description: "Générez des plannings de doubles équitables avec équilibrage des niveaux.",
      steps: ["Ajouter joueurs et niveaux.", "Régler terrains et durée.", "Générer planning.", "Saisir les scores."],
      article: "Notre algorithme Fair Play garantit que chaque joueur dispose d'un temps de jeu égal tout en équilibrant les équipes par niveau.",
      faq: [{ q: "Comment est-ce équitable ?", a: "L'algorithme donne la priorité aux joueurs ayant disputé le moins de tours." }]
    },
    pt: {
      title: "Gerador de Partidas",
      description: "Gere horários de duplas justos com balanceamento de habilidades e placar.",
      steps: ["Adicionar jogadores e níveis.", "Definir quadras e duração.", "Gerar tabela.", "Inserir placares."],
      article: "Nosso algoritmo Fair Play garante que cada jogador receba tempo de quadra igual, equilibrando as equipes por nível técnico.",
      faq: [{ q: "Como é feito o equilíbrio?", a: "O algoritmo prioriza jogadores que participaram de menos rodadas." }]
    },
    it: {
      title: "Generatore Partite Tennis",
      description: "Crea programmi di doppio equi con bilanciamento abilità e classifiche.",
      steps: ["Aggiungi giocatori e abilità.", "Imposta campi e durata.", "Genera programma.", "Inserisci punteggi."],
      article: "Il nostro algoritmo Fair Play assicura che ogni giocatore riceva lo stesso tempo di gioco, bilanciando le squadre per abilità.",
      faq: [{ q: "Com'è garantita l'equità?", a: "L'algoritmo prioritizza i giocatori che hanno disputato meno turni." }]
    }
  },
  "budget-planner": {
    en: {
      title: "Zero-Based Budget Planner",
      description: "Allocate every dollar of your income to categories using the proven envelope budgeting method.",
      steps: ["Enter your monthly income.", "Create category groups.", "Assign budgets to items.", "Reach zero 'To be Budgeted'."],
      article: "Zero-based budgeting means your income minus your expenses equals zero. This gives every dollar a job, helping you save more and spend intentionally.",
      faq: [{ q: "What is Zero-Based?", a: "It's a method where you account for every single dollar of income until none is left unassigned." }]
    },
    id: {
      title: "Perencana Anggaran",
      description: "Alokasikan setiap rupiah pendapatan Anda ke kategori menggunakan metode envelope budgeting yang terbukti.",
      steps: ["Isi pendapatan bulanan.", "Buat grup kategori.", "Masukkan anggaran tiap item.", "Pastikan 'Siap Dianggarkan' menjadi nol."],
      article: "Anggaran berbasis nol berarti pendapatan dikurangi pengeluaran sama dengan nol. Ini memberikan tugas pada setiap rupiah, membantu Anda menabung lebih banyak.",
      faq: [{ q: "Apa itu Zero-Based?", a: "Metode di mana Anda mencatat setiap rupiah pendapatan sampai tidak ada yang tersisa tanpa tugas." }]
    }
  },
  "futsal": {
    en: {
      title: "Futsal Scoreboard",
      description: "A simple and effective digital scoreboard for your futsal matches.",
      steps: ["Set timer duration.", "Click Start.", "Use + buttons for goals.", "Track Fouls (Red at 5)."],
      article: "Professional digital Futsal Scoreboard with FIFA-compliant foul counters. Ideal for local leagues and sparring.",
      faq: [{ q: "Is it offline-ready?", a: "Yes, it works 100% offline once loaded." }]
    },
    id: {
      title: "Papan Skor Futsal",
      description: "Papan skor digital yang sederhana dan efektif untuk pertandingan futsal Anda.",
      steps: ["Atur durasi waktu.", "Klik Mulai.", "Gunakan tombol + untuk gol.", "Catat Fouls (Merah di angka 5)."],
      article: "Papan skor futsal digital profesional dengan hitungan foul standar FIFA. Cocok untuk liga dan sparing.",
      faq: [{ q: "Bisa offline?", a: "Ya, bekerja 100% secara offline." }]
    }
  },
  "image-resizer": {
    en: {
      title: "Image Resizer",
      description: "Change image dimensions while maintaining high quality and privacy.",
      steps: ["Upload your photo.", "Set target Width/Height.", "Lock aspect ratio if needed.", "Download resized image."],
      article: "Professional image resizing directly in your browser. Perfect for preparing photos for websites or social media without sacrificing quality.",
      faq: [{ q: "Privacy?", a: "All resizing happens on your device. No images are uploaded to any server." }]
    },
    id: {
      title: "Ubah Ukuran Gambar",
      description: "Ubah dimensi gambar dengan kualitas tinggi dan jaminan privasi.",
      steps: ["Upload foto Anda.", "Atur Lebar/Tinggi.", "Kunci rasio jika perlu.", "Unduh hasil gambar."],
      article: "Ubah ukuran gambar profesional langsung di browser Anda. Cocok untuk kebutuhan website atau media sosial.",
      faq: [{ q: "Aman?", a: "Ya, semua proses terjadi lokal di HP/Laptop Anda." }]
    }
  },
  "image-cropper": {
    en: {
      title: "Image Cropper",
      description: "Crop your images to any size or standard aspect ratio instantly.",
      steps: ["Upload your image.", "Select area to crop.", "Use presets like Square or 16:9.", "Click Crop & Download."],
      article: "Easy-to-use image cropping tool. Use standard ratios for Instagram, Facebook, or LinkedIn perfectly every time.",
      faq: [{ q: "Presets?", a: "We provide Square, Landscape, and Portrait presets." }]
    },
    id: {
      title: "Potong Gambar",
      description: "Potong gambar Anda ke ukuran apa pun atau rasio standar secara instan.",
      steps: ["Upload gambar.", "Pilih area potong.", "Gunakan preset rasio.", "Klik Potong & Unduh."],
      article: "Alat potong gambar yang mudah digunakan. Sesuai dengan ukuran standar media sosial.",
      faq: [{ q: "Ada preset?", a: "Ya, tersedia preset Kotak, Landscape, dan Portrait." }]
    }
  },
  "image-compressor": {
    en: {
      title: "Image Compressor",
      description: "Reduce file size without losing quality using browser-based compression.",
      steps: ["Select image.", "Adjust quality slider.", "Click Compress.", "Save result."]
    },
    id: {
      title: "Kompres Gambar",
      description: "Kecilkan ukuran file foto tanpa mengurangi kualitas secara signifikan.",
      steps: ["Pilih gambar.", "Atur kualitas.", "Klik Kompres.", "Simpan hasil."]
    }
  }
};
