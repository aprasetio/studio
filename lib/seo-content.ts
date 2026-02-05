/**
 * Centralized SEO Content for VersoKit tools.
 * Supports English (en) and Indonesian (id).
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
    en: SeoItem;
    id: SeoItem;
  };
}

export const SEO_DATA: SeoCollection = {
  futsal: {
    en: {
      title: "Futsal Scoreboard",
      description: "Professional digital scoreboard for Futsal matches.",
      steps: [
        "Set the timer duration.",
        "Click Start to begin the match.",
        "Track Fouls (the counter turns red at 5).",
        "Toggle Period/Half as needed."
      ],
      article: "Managing a futsal match requires precision. This **Free Online Futsal Scoreboard** replaces expensive physical boards. It includes a dedicated **Foul Counter** compliant with FIFA futsal rules and a specialized timer. Perfect for local leagues, official tournaments, and sparring matches. The interface is designed for high visibility on both mobile devices and large TV screens.",
      faq: [
        { q: "Is it offline-ready?", a: "Yes, once loaded, it works entirely without an internet connection." },
        { q: "How are fouls handled?", a: "The counter tracks team fouls and highlights them in red when a team reaches the 5-foul limit, signaling a second-penalty situation." }
      ]
    },
    id: {
      title: "Papan Skor Futsal",
      description: "Papan skor digital profesional untuk pertandingan Futsal.",
      steps: [
        "Atur durasi waktu pertandingan.",
        "Klik Mulai untuk memulai waktu.",
        "Catat Foul (angka berubah merah jika mencapai 5).",
        "Ganti Babak/Period sesuai kebutuhan."
      ],
      article: "Papan Skor Futsal Digital ini adalah solusi modern pengganti papan fisik yang mahal. Dilengkapi dengan **Foul Counter** yang sesuai dengan aturan FIFA dan timer khusus. Sangat cocok untuk liga lokal, turnamen resmi, hingga sparing antar teman. Antarmuka dirancang agar mudah dibaca di layar HP maupun TV besar.",
      faq: [
        { q: "Bisa digunakan offline?", a: "Ya, setelah halaman dimuat, alat ini bisa bekerja tanpa koneksi internet sama sekali." },
        { q: "Apa yang terjadi jika foul mencapai 5?", a: "Sesuai aturan futsal, foul ke-6 mengakibatkan penalti titik kedua. Papan ini akan memberi peringatan visual saat foul ke-5 tercapai." }
      ]
    }
  },
  lineup: {
    en: {
      title: "Lineup Builder",
      description: "Create and share your football team formations.",
      steps: [
        "Drag players to your desired positions.",
        "Click a player to edit their Name, Number, and Color.",
        "Download the formation as a high-quality image."
      ],
      article: "Visualize tactics instantly with our **Football Lineup Builder**. Designed for coaches, analysts, and fans, this tool allows you to create professional squad graphics for Instagram, WhatsApp, or pre-match briefings. You have full control over positions and kit colors, and everything is processed locally on your device for total privacy.",
      faq: [
        { q: "Is it free to use?", a: "Yes, VersoKit tools are 100% free and open to everyone." },
        { q: "Can I save the image?", a: "Absolutely. Click the download button to save your formation as a PNG file." }
      ]
    },
    id: {
      title: "Penyusun Formasi",
      description: "Buat dan bagikan formasi tim sepak bola Anda.",
      steps: [
        "Geser pemain ke posisi yang diinginkan di lapangan.",
        "Klik pemain untuk mengedit Nama, Nomor, dan Warna jersey.",
        "Download hasil formasi dalam bentuk gambar berkualitas tinggi."
      ],
      article: "Visualisasikan strategi Anda secara instan dengan **Pembuat Formasi**. Dirancang untuk pelatih dan penggemar bola, alat ini memungkinkan Anda membuat grafis skuad profesional untuk story Instagram atau grup WhatsApp. Anda memiliki kontrol penuh atas posisi pemain dan warna jersey.",
      faq: [
        { q: "Apakah ini gratis?", a: "Ya, semua alat di VersoKit gratis digunakan selamanya." },
        { q: "Bisa download gambar?", a: "Tentu saja. Gunakan tombol download untuk menyimpan formasi sebagai file PNG." }
      ]
    }
  },
  scoreboard: {
    en: {
      title: "Universal Scoreboard",
      description: "Multi-sport tracker for Volleyball, Badminton, and more.",
      steps: [
        "Set the target score for each set.",
        "Click the point numbers to increase score.",
        "Use 'Reset Set' to clear points while keeping set counts."
      ],
      article: "A versatile **Universal Scoreboard** perfect for net sports like Volleyball and Badminton. Unlike simple counters, this tool tracks both 'Sets Won' and 'Current Points', making it ideal for official matches. The high-contrast design ensures players and referees can see the score from a distance.",
      faq: [
        { q: "What sports are supported?", a: "Any sport that uses a points-per-set system like Volley, Badminton, or Table Tennis." }
      ]
    },
    id: {
      title: "Papan Skor Voli/Badminton",
      description: "Pelacak skor serbaguna untuk berbagai cabang olahraga.",
      steps: [
        "Atur target poin per set.",
        "Klik pada angka skor untuk menambah poin.",
        "Gunakan 'Reset Poin' untuk memulai set baru tanpa menghapus skor set."
      ],
      article: "Papan skor serbaguna untuk Voli dan Badminton. Berbeda dengan penghitung biasa, alat ini melacak 'Set Menang' dan 'Poin', sangat ideal untuk pertandingan resmi. Desain kontras tinggi memastikan pemain dan wasit dapat melihat skor dengan jelas dari kejauhan.",
      faq: [
        { q: "Olahraga apa saja yang didukung?", a: "Semua olahraga yang menggunakan sistem poin per set seperti Voli, Badminton, dan Tenis Meja." }
      ]
    }
  },
  tournament: {
    en: {
      title: "Tournament Manager",
      description: "Round Robin generator with automatic standings.",
      steps: [
        "Input the names of all participating teams.",
        "Click Generate to create a fair schedule.",
        "Input match results to see auto-updated rankings."
      ],
      article: "Organizing a **Round Robin Tournament** is easier than ever. This generator automatically creates fixtures for your league. The highlight is the **Auto-Standings** feature, which calculates points, goal difference, and rankings in real-time as you enter scores. No login required.",
      faq: [
        { q: "How many teams can I add?", a: "There is no hard limit, though it's optimized for local and social leagues." }
      ]
    },
    id: {
      title: "Manajer Turnamen",
      description: "Pembuat jadwal liga dengan klasemen otomatis.",
      steps: [
        "Masukkan nama-nama tim peserta.",
        "Klik Buat Jadwal untuk menghasilkan urutan pertandingan.",
        "Isi skor pertandingan untuk melihat klasemen yang terupdate otomatis."
      ],
      article: "Mengelola turnamen liga sekarang jauh lebih mudah. Alat ini secara otomatis membuat jadwal pertandingan (fixtures) dan menghitung **Klasemen Otomatis** (Standings) secara real-time berdasarkan skor yang Anda masukkan. Tidak perlu daftar atau login.",
      faq: [
        { q: "Berapa banyak tim yang bisa ditambah?", a: "Tidak ada batasan kaku, namun dioptimalkan untuk liga sosial atau komunitas." }
      ]
    }
  }
};
