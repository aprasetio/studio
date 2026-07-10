/**
 * @fileOverview Modularized SEO Article Repository for VersoKit tools.
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

const DEBT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Strategi Pelunasan Hutang: Snowball vs Avalanche`,
    sections: [
      {
        title: `Metode Snowball: Kemenangan Psikologis`,
        content: `<p>Metode Snowball berfokus pada melunasi hutang dengan saldo terkecil terlebih dahulu. Secara psikologis, ini memberikan kepuasan cepat yang membantu Anda tetap termotivasi dalam jangka panjang.</p>`
      },
      {
        title: `Metode Avalanche: Efisiensi Matematika`,
        content: `<p>Metode Avalanche menargetkan hutang dengan bunga tertinggi. Ini adalah cara tercepat secara matematis untuk keluar dari hutang karena meminimalkan total bunga yang harus Anda bayar ke bank.</p>`
      }
    ]
  },
  en: {
    title: `Debt Payoff Strategies: Snowball vs Avalanche Explained`,
    sections: [
      {
        title: `The Snowball Method: Psychological Momentum`,
        content: `<p>The Debt Snowball focuses on human behavior. By paying off your smallest balance first, you gain a sense of accomplishment that fuels your motivation to tackle larger debts later.</p>`
      },
      {
        title: `The Avalanche Method: Mathematical Efficiency`,
        content: `<p>The Debt Avalanche targets interest rates. By paying off the most expensive debt first, you reduce the total amount of money leaving your pocket in the form of interest payments.</p>`
      }
    ]
  }
};

const QURAN_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Al-Quran Digital Indonesia: Panduan Lengkap dengan Folder Bookmark & Tafsir`,
    sections: [
      {
        title: `Kemudahan Belajar dengan Folder Kustom`,
        content: `<p>Mempelajari Al-Quran kini lebih terorganisir. Dengan fitur <strong>Folder Bookmark</strong>, Anda bisa menyimpan ayat-ayat berdasarkan tema tertentu, seperti "Ayat Rezeki", "Pengingat Diri", atau "Hafalan Mingguan". Semua data disimpan secara privat di perangkat Anda.</p>`
      },
      {
        title: `Kajian Mendalam dengan Tafsir Jalalayn & Kemenag`,
        content: `<p>Bukan sekadar membaca, memahami makna setiap ayat sangatlah penting. Kami menyediakan akses cepat ke <strong>Tafsir</strong> per ayat untuk membantu Anda mentadabburi pesan-pesan Allah dalam kehidupan sehari-hari.</p>`
      }
    ]
  },
  en: {
    title: `Digital Quran Reader: Your Comprehensive Companion for Daily Study`,
    sections: [
      {
        title: `Organize Your Study with Custom Folders`,
        content: `<p>Never lose track of important verses again. Our Digital Quran allows you to create unlimited custom folders to organize verses by topic, theme, or study session. Everything is persisted locally for your privacy.</p>`
      },
      {
        title: `Resume Exactly Where You Left Off`,
        content: `<p>The 'Last Read' tracker automatically saves your position. One click on the dashboard banner takes you straight back to your exact Surah and Ayah, making regular reading easier than ever.</p>`
      }
    ]
  }
};

const PDF_WATERMARK_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Watermark PDF Online: Lindungi Dokumen Anda dengan Privasi 100%`,
    sections: [
      {
        title: `Keamanan Dokumen Tanpa Kompromi`,
        content: `<p>Banyak layanan watermark online meminta Anda mengunggah file ke server mereka. Hal ini berisiko bagi dokumen sensitif seperti kontrak atau identitas pribadi. <strong>VersoKit</strong> memproses PDF Anda secara lokal di browser, menjamin kerahasiaan data.</p>`
      },
      {
        title: `Pilih Mode Perlindungan Terbaik`,
        content: `<p>Gunakan mode <strong>Diagonal Tengah</strong> untuk dokumen standar, atau mode <strong>Pola Berulang</strong> untuk perlindungan ekstra yang menutupi seluruh halaman, sehingga sulit untuk disalin secara ilegal.</p>`
      }
    ]
  },
  en: {
    title: `Online PDF Watermark: Protect Your Documents with 100% Privacy`,
    sections: [
      {
        title: `Uncompromising Document Security`,
        content: `<p>Most online watermark services require you to upload files to their servers. This is risky for sensitive documents like contracts or personal IDs. <strong>VersoKit</strong> processes your PDF locally in your browser, guaranteeing data confidentiality.</p>`
      },
      {
        title: `Choose the Best Protection Mode`,
        content: `<p>Use <strong>Diagonal Center</strong> for standard documents, or <strong>Tiled Pattern</strong> for extra protection that covers the entire page, making illegal copying much harder.</p>`
      }
    ]
  }
};

const WATERMARK_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Watermark Foto Online: Lindungi Karya Visual Anda dengan Pola Berulang`,
    sections: [
      {
        title: `Pentingnya Melindungi Foto dari Pencurian`,
        content: `<p>Di era digital, foto produk atau hasil karya seni sangat mudah diambil orang lain tanpa izin. Menggunakan watermark adalah cara termudah untuk memberikan identitas pada foto Anda.</p>`
      },
      {
        title: `Kelebihan Mode Tiled (Pola Berulang)`,
        content: `<p>Berbeda dengan satu watermark di pojok yang mudah dihapus, mode <strong>Tiled</strong> akan memenuhi seluruh gambar dengan teks transparan. Ini membuat proses penghapusan watermark menjadi jauh lebih sulit bagi orang yang ingin menyalahgunakan foto Anda.</p>`
      }
    ]
  },
  en: {
    title: `Online Image Watermark: Protect Your Visuals with Patterned Overlays`,
    sections: [
      {
        title: `Why You Need to Watermark Your Images`,
        content: `<p>Digital assets are easily stolen. Adding a watermark ensures your brand identity stays attached to your content no matter where it spreads online.</p>`
      },
      {
        title: `The Power of Tiled Patterns`,
        content: `<p>While a single logo in the corner can be easily cropped out, a <strong>Tiled Pattern</strong> covers the entire image area, making unauthorized removal nearly impossible without ruining the original photo.</p>`
      }
    ]
  }
};

const PRAYER_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Jadwal Sholat Akurat & Kompas Kiblat: Panduan Ibadah Digital Anda`,
    sections: [
      {
        title: `Pentingnya Jadwal Sholat yang Tepat Waktu`,
        content: `<p>Sebagai Muslim, menunaikan ibadah sholat tepat waktu adalah prioritas utama. Namun, saat sedang bepergian atau berada di lokasi baru, seringkali kita bingung menentukan waktu Subuh, Dzuhur, hingga Isya yang akurat karena perbedaan zona waktu dan koordinat.</p><p><strong>VersoKit Prayer Times</strong> hadir untuk memberikan solusi jadwal sholat otomatis berdasarkan titik GPS Anda secara presisi. Tidak perlu menebak-nebak lagi.</p>`
      },
      {
        title: `Cara Menemukan Arah Kiblat Tanpa Aplikasi Tambahan`,
        content: `<p>Banyak orang mengira mencari kiblat butuh kompas fisik atau aplikasi berat yang memenuhi memori HP. Dengan teknologi Web Magnetometer, VersoKit memungkinkan Anda menemukan arah Ka'bah langsung melalui browser.</p><p>Cukup aktifkan fitur kompas, dan panah akan berputar mengikuti orientasi perangkat Anda secara real-time. Sangat praktis digunakan saat berada di hotel, kantor, atau alam terbuka.</p>`
      }
    ]
  },
  en: {
    title: `Accurate Prayer Times & Qibla Compass: Your Digital Worship Guide`,
    sections: [
      {
        title: `The Importance of Timely Prayer`,
        content: `<p>For Muslims, performing prayers on time is a top priority. However, when traveling or in a new location, it's often difficult to determine accurate local timings due to coordinate differences.</p><p><strong>VersoKit Prayer Times</strong> provides an automatic schedule based on your precise GPS coordinates. No more second-guessing local timings.</p>`
      },
      {
        title: `Find Qibla Direction Without Installing Apps`,
        content: `<p>Finding the Qibla shouldn't require heavy apps or physical tools. Using Web Magnetometer technology, VersoKit lets you find the direction of the Kaaba directly in your browser.</p><p>Enable the live compass, and the arrow will rotate according to your device's real-time orientation. Perfect for use at hotels, offices, or outdoors.</p>`
      }
    ]
  }
};

const INVENTORY_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Aplikasi Stok Barang Sederhana: Kelola Inventaris UMKM Gratis & Aman`,
    sections: [
      {
        title: `Hentikan Kebiasaan Hitung Stok Manual yang Melelahkan`,
        content: `<p>Lelah menghitung stok barang setiap malam di buku tulis? Sering pusing karena uang modal "nyangkut" di barang yang tidak laku, sementara barang yang lari manis malah habis stok?</p><p>Manajemen stok adalah jantung dari bisnis. Tanpa catatan yang rapi, bisnis kecil rentan merugi akibat barang hilang, <em>overstocking</em>, atau kehilangan pembeli karena barang kosong.</p>`
      }
    ]
  },
  en: {
    title: `Simple Inventory App: Manage MSME Inventory for Free & Securely`,
    sections: [
      {
        title: `Stop the Headache of Manual Stock Counting`,
        content: `<p>Tired of counting inventory every night in a notebook? It’s frustrating when your capital is "stuck" in unsold items, while your best-sellers are constantly out of stock.</p>`
      }
    ]
  }
};

const BUDGET_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Budget Planner Online: Atur Keuangan dengan Metode Zero-Based Budgeting`,
    sections: [
      {
        title: `Hentikan Kebiasaan Gaji "Numpang Lewat"`,
        content: `<p>Pernahkah Anda merasa gaji hanya "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan saldo rekening sudah menipis.</p><p>Masalah utamanya seringkali bukan pada besarnya gaji, melainkan pada cara Anda memperlakukan uang tersebut.</p>`
      }
    ]
  },
  en: {
    title: `Online Budget Planner: Manage Your Finances with Zero-Based Budgeting`,
    sections: [
      {
        title: `Stop the Cycle of Paycheck-to-Paycheck Living`,
        content: `<p>Have you ever felt like your paycheck just slipped by? Use <strong>VersoKit Budget Planner</strong> to give every dollar a job.</p>`
      }
    ]
  }
};

const LINEUP_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Football Lineup Builder: Buat Formasi Tim Sepak Bola & Download Gambar`,
    sections: [
      {
        title: `Visualisasikan Strategi Anda dengan Profesional`,
        content: `<p>Mau posting susunan pemain (Starting XI) tim Anda di Instagram tapi tidak bisa desain grafis? Football Lineup Builder dari VersoKit mengubah ide strategi Anda menjadi grafis profesional.</p>`
      }
    ]
  },
  en: {
    title: `Football Lineup Builder: Create Soccer Team Formations & Download Images`,
    sections: [
      {
        title: `Professional Tactical Visualization`,
        content: `<p>Want to post your starting XI on Instagram but can't design graphics? Use <strong>Football Lineup Builder</strong> to turn your ideas into professional images.</p>`
      }
    ]
  }
};

const TOURNAMENT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Tournament Manager Pro: Buat Bagan Pertandingan & Klasemen Otomatis`,
    sections: [
      {
        title: `Solusi Praktis untuk Panitia Turnamen`,
        content: `<p>Sedang sibuk menjadi panitia turnamen Futsal, E-Sports, atau lomba lokal? Kami tahu betapa pusingnya mengelola puluhan tim peserta secara manual.</p>`
      }
    ]
  },
  en: {
    title: `Tournament Manager Pro: Create Automatic Match Charts & League Standings`,
    sections: [
      {
        title: `All-in-One Solution for Match Schedules`,
        content: `<p>Busy organizing a futsal tournament or e-sports competition? Manage knockout brackets and league standings instantly.</p>`
      }
    ]
  }
};

const SHIFT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Aplikasi Jadwal Shift Kerja Gratis: Atur Roster Karyawan & Share ke WhatsApp`,
    sections: [
      {
        title: `Pusing Mengatur Jadwal Shift Karyawan?`,
        content: `<p>Pusing mengatur jadwal kerja karyawan setiap minggu? Roster yang buruk bisa berdampak fatal bagi bisnis Anda. Gunakan <strong>Shift Scheduler</strong> dari VersoKit.</p>`
      }
    ]
  },
  en: {
    title: `Free Shift Schedule App: Manage Employee Rosters & Share to WhatsApp`,
    sections: [
      {
        title: `Headache Managing Work Schedules?`,
        content: `<p>Poor schedule management can lead to drama. Use VersoKit to create neat, professional, and fair work rosters.</p>`
      }
    ]
  }
};

const INVOICE_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Invoice Generator Gratis: Buat Invoice PDF Profesional dalam 1 Menit`,
    sections: [
      {
        title: `Tinggalkan Tagihan Berantakan`,
        content: `<p>Masih mengirim tagihan ke klien hanya lewat chat WhatsApp? Cara menagih yang tidak rapi bisa membuat citra bisnis Anda terlihat amatir.</p>`
      }
    ]
  },
  en: {
    title: `Free Invoice Generator: Create Professional PDF Invoices in 1 Minute`,
    sections: [
      {
        title: `Stop Sending Messy Invoices`,
        content: `<p>A messy invoice format can make your business look amateurish and delay payments. Create neat, structured PDF invoices.</p>`
      }
    ]
  }
};

export const TOOL_ARTICLES: ArticleCollection = {
  "debt-tracker": DEBT_CONTENT,
  quran: QURAN_CONTENT,
  "pdf-watermark": PDF_WATERMARK_CONTENT,
  "image-watermark": WATERMARK_CONTENT,
  "prayer-times": PRAYER_CONTENT,
  inventory: INVENTORY_CONTENT,
  "budget-planner": BUDGET_CONTENT,
  lineup: LINEUP_CONTENT,
  tournament: TOURNAMENT_CONTENT,
  shift: SHIFT_CONTENT,
  invoice: INVOICE_CONTENT,
  americano: { en: { title: "Americano Generator", sections: [] }, id: { title: "Generator Americano", sections: [] } },
  futsal: { en: { title: "Futsal Scoreboard", sections: [] }, id: { title: "Skor Futsal", sections: [] } },
  tennis: { en: { title: "Tennis Generator", sections: [] }, id: { title: "Generator Tenis", sections: [] } },
  "tennis-ai": { en: { title: "Tennis AI Analyzer", sections: [] }, id: { title: "Analisis Tenis AI", sections: [] } },
};
