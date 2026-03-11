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
  "image-watermark": {
    en: {
      title: "Image Watermark Generator",
      description: "Create custom text or logo watermarks to protect your photos. Bulk patterns supported.",
      steps: ["Upload your main photo.", "Choose between Text or Logo watermark.", "Toggle Tiled Pattern for bulk protection.", "Adjust opacity and download."],
      article: "Protecting your visual assets is easier than ever. VersoKit's watermark tool uses HTML5 Canvas to render patterns directly in your browser, ensuring no data ever leaves your computer. Use the tiled mode for maximum protection against unauthorized use.",
      faq: [{ q: "Can I use my own logo?", a: "Yes, you can upload any PNG file to use as a transparent logo watermark." }]
    },
    id: {
      title: "Pembuat Watermark Foto",
      description: "Buat watermark teks atau logo kustom untuk melindungi foto Anda. Mendukung pola berulang.",
      steps: ["Unggah foto utama Anda.", "Pilih watermark Teks atau Logo.", "Aktifkan Pola Berulang untuk proteksi maksimal.", "Atur transparansi dan unduh."],
      article: "Melindungi aset visual Anda kini lebih mudah. Alat watermark VersoKit menggunakan HTML5 Canvas untuk memproses pola langsung di browser Anda, menjamin data tidak pernah keluar dari komputer. Gunakan mode berulang (tiled) untuk perlindungan maksimal.",
      faq: [{ q: "Bisakah saya pakai logo sendiri?", a: "Ya, Anda bisa mengunggah file PNG apa pun untuk digunakan sebagai watermark logo transparan." }]
    }
  },
  "prayer-times": {
    en: {
      title: "Prayer Times & Qibla Finder",
      description: "Find accurate prayer times and Qibla direction based on your GPS location. Works offline and in-browser.",
      steps: ["Click 'Use Current Location'.", "Allow GPS permission.", "View local prayer times.", "Use the live compass for Qibla."],
      article: "Our tool calculates prayer times using the ISNA method and determined Qibla using spherical trigonometry. The live compass connects directly to your phone's magnetometer for real-time accuracy.",
      faq: [{ q: "Is the compass accurate?", a: "Accuracy depends on your device's hardware sensors and environmental magnetic interference." }]
    },
    id: {
      title: "Jadwal Sholat & Arah Kiblat",
      description: "Temukan jadwal sholat akurat dan arah kiblat berdasarkan lokasi GPS Anda. Berjalan lancar di browser.",
      steps: ["Klik 'Gunakan Lokasi Saat Ini'.", "Izinkan akses GPS.", "Lihat jadwal sholat lokal.", "Gunakan kompas live untuk mencari kiblat."],
      article: "Alat ini menghitung waktu sholat menggunakan data koordinat presisi dan menentukan arah Ka'bah di Makkah. Kompas live terhubung langsung dengan sensor magnetik HP Anda.",
      faq: [{ q: "Apakah kompasnya akurat?", a: "Akurasi tergantung pada kualitas sensor hardware HP Anda dan gangguan magnet di sekitar." }]
    }
  },
  "padel-americano": {
    en: {
      title: "Padel Americano Generator",
      description: "Organize Padel tournaments with fair partner rotation and automatic scoring.",
      steps: ["Add players and set target points.", "Shuffle names for a random start.", "Enter scores for each match.", "Check the individual leaderboard."],
      article: "Padel Americano is a unique format where individual performance matters more than team stability. Our generator ensures every player rotates partners fairly.",
      faq: [{ q: "What is 32 points scoring?", a: "In every match, 32 points are played in total. If you win 20, the opponent gets 12." }]
    },
    id: {
      title: "Generator Padel Americano",
      description: "Atur turnamen Padel dengan rotasi partner yang adid dan penghitungan skor otomatis.",
      steps: ["Tambah pemain dan tentukan target poin.", "Acak nama untuk memulai secara random.", "Masukkan skor setiap pertandingan.", "Pantau klasemen individu secara real-time."],
      article: "Padel Americano adalah format turnamen di mana setiap pemain akan berganti pasangan setiap babak. Skor akhir dihitung secara individu.",
      faq: [{ q: "Apa itu skor 32 poin?", a: "Setiap pertandingan memainkan total 32 poin. Jika Anda menang 20, lawan mendapat 12." }]
    }
  },
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
