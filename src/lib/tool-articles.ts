
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
        { title: "Wie Americano-Turniere funktionieren", content: "Americano ist ein soziales Turnierformat für Padel und Pickleball. Sie spielen in jeder Runde mit einem anderen Partner. Die App übernimmt die komplexe Paarung." },
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
      title: "Générateur de Tournois Americano (Padel & Pickleball)",
      sections: [
        { title: "Comment fonctionne un tournoi Americano", content: "L'Americano est un format populaire au Padel et au Pickleball. À chaque tour, vous jouez avec un **partenaire différent**. Le but est de collecter un maximum de points individuels." },
        { title: "Mode Padel vs Pickleball", content: "Pour le **Padel**, utilisez 'Points Cibles' (ex : jusqu'à 32). Pour le **Pickleball**, le mode 'Course' (ex : jusqu'à 21). L'application gère la rotation automatiquement." }
      ]
    },
    it: {
      title: "Generatore di Tornei Americano (Padel e Pickleball)",
      sections: [
        { title: "Come funziona le torneo Americano", content: "L'Americano è un formato popolare nel Padel e Pickleball. In ogni turno, giochi con un **partner diverso**. L'obiettivo è raccogliere il maggior numero di punti individuali." },
        { title: "Modalità Padel vs Pickleball", content: "Per il **Padel**, usa 'Punti Obiettivo' (es. 32). Per il **Pickleball**, la modalità 'Gara' (es. a 21). Il sistema gestisce automaticamente la panchina se i giocatori sono dispari." }
      ]
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
    de: { title: "Bild zuschneiden", sections: [{ title: "Bild einfach zuschneiden", content: "Schneiden Sie Ihre Bilder sofort auf das exakte Verhältnis (1:1, 16:9) zu. Kein Qualitätsverlust." }] },
    es: { title: "Cortar Imagen", sections: [{ title: "Recortar fotos fácilmente", content: "Recorta tus imágenes a relaciones exactas (1:1, 16:9) al instante. Sin pérdida de calidad." }] },
    pt: { title: "Cortar Imagem", sections: [{ title: "Recortar fotos facilmente", content: "Recorte as suas imagens para rácios exatos (1:1, 16:9) instantaneamente. Sem perda de qualidade." }] },
    fr: { title: "Rogner Image", sections: [{ title: "Recadrer des photos facilement", content: "Recadrez instantanément vos images à des ratios exacts (1:1, 16:9). Aucune perte de qualité." }] },
    it: { title: "Ritaglia Immagine", sections: [{ title: "Ritaglia foto facilmente", content: "Ritaglia istantaneamente le tue immagini in rapporti esatti (1:1, 16:9). Nessuna perdita di qualità." }] }
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
  },
  "futsal": {
    en: {
      title: "Digital Futsal Scoreboard: Pro Features for Local Matches",
      sections: [
        {
          title: "Managing the Clock and Fouls",
          content: "Standard Futsal rules require a 20-minute countdown. Our scoreboard includes presets for 10, 15, and 20 minutes. It also tracks team fouls, highlighting them in <b>red</b> once a team reaches the 5-foul limit (Second Penalty threshold)."
        },
        {
          title: "Digital vs. Manual Scoring",
          content: "Stop using paper or unreliable mobile apps. Our scoreboard is designed for large screens and TV displays, providing high visibility for players and spectators alike, even in high-intensity match environments."
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital: Fitur Pro untuk Sparing",
      sections: [
        {
          title: "Mengelola Waktu dan Pelanggaran",
          content: "Gunakan pengatur waktu standar 20 menit dengan fitur jeda (pause) instan. Alat ini juga mencatat akumulasi pelanggaran (fouls) dan akan berubah menjadi <b>merah</b> saat tim mencapai 5 pelanggaran sebagai tanda penalti titik kedua."
        },
        {
          title: "Tampilan untuk Layar Besar",
          content: "Papan skor ini dioptimalkan untuk ditampilkan di TV atau monitor besar di lapangan, memberikan kemudahan bagi penonton dan pemain untuk melihat skor dan sisa waktu dengan jelas."
        }
      ]
    }
  }
};
