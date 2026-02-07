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
  },
  "inventory": {
    en: {
      title: "Mastering Small Business Stock Control",
      sections: [
        {
          title: "The Importance of Stock Tracking",
          content: "Keeping an accurate count of your inventory is the backbone of any successful small business. Our tool helps you avoid stockouts and overstocking by providing a clear, digital view of your items."
        },
        {
          title: "The FIFO Method",
          content: "<b>FIFO (First-In, First-Out)</b> is a simple but effective strategy where you sell the oldest stock first. By tracking your quantities regularly, you can ensure that nothing sits on the shelf for too long."
        }
      ]
    },
    id: {
      title: "Cara Mudah Mengelola Stok Barang UKM",
      sections: [
        {
          title: "Pentingnya Pencatatan Stok",
          content: "Mencatat stok masuk dan keluar secara teratur adalah kunci kesuksesan UKM. Alat kami membantu Anda memantau ketersediaan barang agar tidak pernah kehabisan stok saat pelanggan memesan."
        },
        {
          title: "Strategi FIFO di Gudang",
          content: "Gunakan metode <b>FIFO (First-In, First-Out)</b> dengan memastikan barang yang masuk lebih awal dijual terlebih dahulu. Catatan digital memudahkan Anda melihat barang mana yang sudah lama mengendap."
        }
      ]
    }
  },
  "shift": {
    en: {
      title: "Creating Fair Employee Schedules",
      sections: [
        {
          title: "Balanced Shift Rotation",
          content: "Rotating employees between morning, afternoon, and night shifts is essential to prevent burnout. A transparent roster ensures everyone feels the workload is shared fairly."
        },
        {
          title: "Visualize Your Team Coverage",
          content: "Our visual shift planner allows you to see at a glance if you have enough staff for every day of the week. Use the color-coded system to identify gaps in your schedule immediately."
        }
      ]
    },
    id: {
      title: "Tips Membuat Jadwal Shift Karyawan yang Adil",
      sections: [
        {
          title: "Pembagian Shift yang Seimbang",
          content: "Membagi jadwal antara shift pagi, siang, dan malam secara adil sangat penting untuk menjaga kesehatan dan produktivitas karyawan. Roster yang transparan meminimalisir komplain dari staf."
        },
        {
          title: "Visualisasi Jadwal Kerja",
          content: "Sistem warna pada VersoKit memudahkan Anda melihat apakah cakupan tim sudah cukup untuk setiap hari. Anda bisa langsung mendeteksi jika ada hari yang kekurangan tenaga kerja."
        }
      ]
    }
  },
  "lineup": {
    en: {
      title: "Football Tactics: Choosing the Right Formation",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "The classic <b>4-4-2</b> provides a balanced structure, while <b>4-3-3</b> is more offensive and dynamic. Choosing the right formation depends on your players' strengths and your tactical approach."
        },
        {
          title: "Visualizing Roles",
          content: "Using a lineup builder helps players visualize their starting positions and responsibilities on the pitch. It clears up confusion before the whistle blows."
        }
      ]
    },
    id: {
      title: "Strategi & Formasi Sepak Bola Modern",
      sections: [
        {
          title: "Panduan Memilih Formasi",
          content: "Formasi <b>4-4-2</b> memberikan keseimbangan antara pertahanan dan serangan, sedangkan <b>4-3-3</b> lebih dinamis untuk menyerang. Pilih strategi yang paling sesuai dengan komposisi pemain Anda."
        },
        {
          title: "Pentingnya Visualisasi Taktik",
          content: "Melihat posisi mereka secara visual di lapangan membantu pemain memahami peran dan tanggung jawab masing-masing sebelum pertandingan dimulai."
        }
      ]
    }
  },
  "split-bill": {
    en: {
      title: "Restaurant Bill Splitting Made Easy",
      sections: [
        {
          title: "Handling Tax & Service Charges",
          content: "Restaurant bills often come with additional fees like Tax and Service charges. Our calculator allows you to input a percentage that is automatically applied to each person's subtotal, ensuring the final sum is accurate down to the last cent."
        },
        {
          title: "Splitting by Item vs. Evenly",
          content: "While splitting a bill evenly is fast, it's not always fair. This tool is perfect for large groups where some guests might have ordered significantly more than others. By listing participants, you can ensure everyone pays for exactly what they consumed."
        }
      ]
    },
    id: {
      title: "Cara Hitung Split Bill Tanpa Pusing",
      sections: [
        {
          title: "Menangani Pajak dan Biaya Layanan",
          content: "Tagihan restoran seringkali menyertakan pajak (Tax) dan biaya layanan (Service Charge). Kalkulator kami memungkinkan Anda memasukkan persentase biaya tersebut agar otomatis dibebankan secara adil kepada setiap peserta."
        },
        {
          title: "Bagi Rata vs Bagi per Item",
          content: "Meskipun bagi rata lebih cepat, pembagian per item jauh lebih adil untuk acara seperti Buka Bersama (Bukber) atau makan siang kantor. Alat ini membantu Anda memberikan rincian transparan yang siap dibagikan ke grup WhatsApp."
        }
      ]
    }
  },
  "scoreboard": {
    en: {
      title: "Digital Scoreboard for Any Sport",
      sections: [
        {
          title: "One Scoreboard, Many Sports",
          content: "Whether you're playing Volleyball, Badminton, Table Tennis, or even a casual board game, this universal scoreboard is designed to adapt. Set your target score (e.g., 21 or 25) and track both points and sets won with a clean, high-contrast interface."
        },
        {
          title: "High Visibility for Players",
          content: "Designed for use on mobile phones, tablets, or even cast to a TV screen. The large typography ensures that players and spectators can see the score clearly from across the court, eliminating confusion and maintaining the flow of the game."
        }
      ]
    },
    id: {
      title: "Papan Skor Digital Serbaguna (Badminton/Voli)",
      sections: [
        {
          title: "Satu Papan untuk Semua Cabang",
          content: "Baik Anda bermain Bulu Tangkis, Voli, Tenis Meja, atau bahkan permainan kartu, papan skor ini siap digunakan. Anda bisa mengatur target poin kemenangan (misal 21 atau 25) dan mencatat skor serta jumlah set yang dimenangkan dengan mudah."
        },
        {
          title: "Visibilitas Tinggi untuk Pemain",
          content: "Tampilan didesain agar terlihat jelas dari kejauhan. Sangat cocok digunakan di ponsel, tablet, atau dihubungkan ke layar TV lapangan agar pemain dan penonton bisa memantau skor tanpa gangguan iklan."
        }
      ]
    }
  }
};
