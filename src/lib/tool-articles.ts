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