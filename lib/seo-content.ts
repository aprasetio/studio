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
  "debt-tracker": {
    en: {
      title: "Debt Payoff Calculator",
      description: "Accelerate your journey to zero debt. Compare Snowball vs. Avalanche strategies and see your exact debt-free date.",
      steps: ["Add all your debts (Balance, Interest, Min Payment).", "Input your monthly extra budget.", "Choose between Snowball or Avalanche strategy.", "View your month-by-month payoff schedule."],
      article: "Strategic debt management is the foundation of wealth building. Our Debt Payoff Tracker allows you to input multiple liabilities and simulates various repayment scenarios. The Snowball method focuses on behavior by paying off small balances first, while the Avalanche method targets high-interest debt to save you the most money.",
      faq: [{ q: "What is the Snowball Method?", a: "It is a strategy where you pay off debts in order of smallest balance first, regardless of interest rate." }, { q: "What is the Avalanche Method?", a: "This targets the debt with the highest interest rate first, mathematically saving you the most money over time." }]
    },
    id: {
      title: "Kalkulator Pelunasan Hutang",
      description: "Percepat perjalanan Anda menuju bebas hutang. Bandingkan strategi Snowball vs. Avalanche dan lihat tanggal pasti lunas Anda.",
      steps: ["Tambah semua hutang (Saldo, Bunga, Bayar Minimum).", "Masukkan anggaran tambahan bulanan.", "Pilih strategi Snowball atau Avalanche.", "Lihat jadwal pelunasan bulan demi bulan."],
      article: "Manajemen hutang yang strategis adalah pondasi pembangunan kekayaan. Pelacak Pelunasan Hutang kami memungkinkan Anda memasukkan berbagai kewajiban dan mensimulasikan berbagai skenario pembayaran. Metode Snowball berfokus pada perilaku dengan melunasi saldo terkecil terlebih dahulu, sedangkan metode Avalanche menargetkan hutang berbunga tinggi untuk menghemat uang paling banyak.",
      faq: [{ q: "Apa itu Metode Snowball?", a: "Strategi di mana Anda melunasi hutang mulai dari saldo terkecil, tanpa mempedulikan suku bunga." }, { q: "Apa itu Metode Avalanche?", a: "Metode ini menargetkan hutang dengan bunga tertinggi terlebih dahulu, secara matematis menghemat uang paling banyak." }]
    }
  },
  "quran": {
    en: {
      title: "Digital Quran Reader",
      description: "Read the Holy Quran digital version with accurate translations and Indonesian Tafsir per verse.",
      steps: ["Select a Surah from the index.", "Adjust your reading settings (Translation, Latin, Tafsir).", "Bookmark verses to your custom folders.", "Pin your current verse as 'Last Read' to resume later."],
      article: "Digital Quran Reader by VersoKit provides a high-quality study experience. We use verified APIs to provide localized translations and detailed Tafsir. The clean interface allows you to focus on the wisdom of the text, with tools designed for daily spiritual growth and reference.",
      faq: [{ q: "Where are my bookmarks stored?", a: "All your bookmarks and folders are stored locally in your browser's storage, ensuring 100% privacy." }]
    },
    id: {
      title: "Al-Quran Digital Terjemahan Indonesia",
      description: "Baca Al-Quran digital lengkap dengan terjemahan Kemenag, dan Tafsir per ayat. Fitur bookmark folder kustom dan Last Read.",
      steps: ["Pilih Surah dari daftar indeks.", "Atur tampilan bacaan (Latin, Terjemahan, Tafsir).", "Gunakan folder untuk mengelompokkan bookmark.", "Tandai ayat terakhir dibaca untuk melanjutkan di lain waktu."],
      article: "Al-Quran Digital VersoKit dirancang untuk memudahkan ibadah dan tadabbur harian. Dilengkapi dengan API Al-Quran yang menyediakan teks standar dan Tafsir Jalalayn. Dengan fitur Folder Bookmark, Anda bisa mengelompokkan ayat berdasarkan tema studi Anda.",
      faq: [{ q: "Apakah data bookmark aman?", a: "Ya, bookmark disimpan secara lokal di browser Anda. Tidak ada data yang kami simpan di server." }]
    }
  },
  "idea-tracker": {
    en: {
      title: "Secure Local Idea Tracker",
      description: "A private brainstorming tool that stores your ideas 100% locally in your browser. Features voice dictation and priority management.",
      steps: ["Capture your thought using the 'New Idea' button.", "Add details, tags, and set a priority level.", "Use voice dictation to speak your ideas instead of typing.", "Organize and filter your workspace as it grows."],
      article: "Managing creativity requires a safe and fast space. VersoKit's Idea Tracker provides an enterprise-grade experience with 100% data privacy. By utilizing local storage, your business strategies, product concepts, and personal thoughts never leave your device. The integrated Web Speech API allows for high-speed capturing when your hands are full.",
      faq: [{ q: "Where are my ideas stored?", a: "They are stored in your browser's Local Storage. We never upload your ideas to any database." }, { q: "Can I sync between devices?", a: "Since data is local, you must use the 'Backup' and 'Restore' feature to move your ideas between devices." }]
    },
    id: {
      title: "Pelacak Ide Lokal Aman",
      description: "Alat brainstorming pribadi yang menyimpan ide Anda 100% secara lokal di browser. Dilengkapi dengan dikte suara dan manajemen prioritas.",
      steps: ["Catat pemikiran Anda menggunakan tombol 'Ide Baru'.", "Tambahkan rincian, tag, dan tentukan tingkat prioritas.", "Gunakan fitur dikte suara untuk berbicara daripada mengetik.", "Atur dan filter ruang kerja Anda saat ide-ide mulai bertambah."],
      article: "Mengelola kreativitas membutuhkan ruang yang aman dan cepat. Idea Tracker dari VersoKit memberikan pengalaman kelas enterprise dengan privasi data 100%. Dengan memanfaatkan penyimpanan lokal, strategi bisnis, konsep produk, dan pemikiran pribadi Anda tidak pernah keluar dari perangkat Anda. API Pengenalan Suara yang terintegrasi memungkinkan penangkapan ide berkecepatan tinggi saat tangan Anda sibuk.",
      faq: [{ q: "Di mana ide saya disimpan?", a: "Ide-ide Anda disimpan di Penyimpanan Lokal (Local Storage) browser Anda. Kami tidak pernah mengunggah ide Anda ke database mana pun." }, { q: "Bisakah saya sinkronisasi antar perangkat?", a: "Karena data bersifat lokal, Anda harus menggunakan fitur 'Cadangkan' dan 'Pulihkan' untuk memindahkan ide Anda antar perangkat." }]
    }
  },
  "pdf-watermark": {
    en: {
      title: "PDF Watermark Generator",
      description: "Securely add text watermarks to your PDF documents entirely in your browser. No files uploaded.",
      steps: ["Upload your PDF file.", "Enter the watermark text.", "Adjust font size, color, and opacity.", "Choose placement mode and download."],
      article: "Protecting your PDF documents is critical for business privacy. VersoKit's PDF Watermark tool uses client-side processing, meaning your documents never touch our servers. This ensures 100% data confidentiality while giving you professional tools to prevent unauthorized copying.",
      faq: [{ q: "Is it safe for sensitive documents?", a: "Yes, all processing is done locally in your browser using the pdf-lib library. Your files are never transmitted." }]
    },
    id: {
      title: "Pembuat Watermark PDF",
      description: "Tambah watermark teks ke dokumen PDF Anda dengan aman sepenuhnya di browser. Tanpa upload file.",
      steps: ["Unggah file PDF Anda.", "Masukkan teks watermark.", "Atur ukuran font, warna, dan transparansi.", "Pilih mode penempatan dan unduh."],
      article: "Melindungi dokumen PDF sangat penting untuk privasi bisnis. Alat Watermark PDF VersoKit menggunakan pemrosesan client-side, yang berarti dokumen Anda tidak pernah menyentuh server kami. Ini menjamin kerahasiaan data 100% sambil memberi Anda alat profesional untuk mencegah penyalinan tanpa izin.",
      faq: [{ q: "Apakah aman untuk dokumen sensitif?", a: "Ya, semua pemrosesan dilakukan secara lokal di browser Anda menggunakan library pdf-lib. File Anda tidak pernah dikirim." }]
    }
  },
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
      steps: ["Select image.", "Adjust quality slider.", "Click Compress.", "Save result."],
      article: "Compress images directly in your browser with no upload required. Supports JPEG and PNG with adjustable quality.",
      faq: [{ q: "Will it lose quality?", a: "Compression is lossy for JPEG but you can control the quality slider to minimize visible degradation." }]
    },
    id: {
      title: "Kompres Gambar",
      description: "Kecilkan ukuran file foto tanpa mengurangi kualitas secara signifikan.",
      steps: ["Pilih gambar.", "Atur kualitas.", "Klik Kompres.", "Simpan hasil."],
      article: "Kompres gambar langsung di browser tanpa perlu upload ke server. Mendukung JPEG dan PNG dengan slider kualitas yang bisa diatur.",
      faq: [{ q: "Apakah kualitas berkurang?", a: "Kompresi bersifat lossy untuk JPEG, namun Anda bisa mengatur slider kualitas untuk meminimalkan penurunan visual." }]
    }
  },
  "qr-generator": {
    en: {
      title: "QR Code Generator",
      description: "Free QR code generator for URLs, WiFi credentials, and contacts. Customize colors, download as PNG or SVG. 100% offline, no data sent.",
      steps: [
        "Choose an input type: URL/Text, WiFi, or Contact (vCard).",
        "Fill in the relevant fields for your chosen type.",
        "Optionally customize the QR foreground and background colors.",
        "Preview the QR code updating in real time.",
        "Click Download PNG or Download SVG to save."
      ],
      article: "QR codes are two-dimensional barcodes readable by any smartphone camera. This generator supports three use cases: sharing a URL or plain text, embedding WiFi credentials so guests can connect without typing a password, and encoding a vCard contact card that can be saved directly to a phone's address book.\n\nAll QR codes are generated entirely in your browser using the Web Crypto API — no data leaves your device. The SVG format is ideal for print because it scales without pixelation, while PNG is better for digital sharing (messaging apps, email).",
      faq: [
        { q: "What QR types are supported?", a: "URL/plain text, WiFi (WPA/WPA2, WEP, and open networks), and vCard contacts (name, phone, email)." },
        { q: "Is my data sent to a server?", a: "No. QR codes are generated entirely in your browser. Nothing is uploaded or stored." },
        { q: "What is the difference between PNG and SVG?", a: "PNG is a raster format — best for sharing digitally. SVG is vector-based and scales perfectly for printing at any size." },
        { q: "How do I scan the QR code?", a: "Open your phone's camera app and point it at the code. Most modern smartphones recognize QR codes without a separate app." }
      ]
    },
    id: {
      title: "Pembuat Kode QR",
      description: "Generator kode QR gratis untuk URL, WiFi, dan kontak. Kustomisasi warna, unduh PNG atau SVG. 100% offline, tanpa kirim data.",
      steps: [
        "Pilih jenis input: URL/Teks, WiFi, atau Kontak (vCard).",
        "Isi kolom yang sesuai dengan jenis yang dipilih.",
        "Opsional: kustomisasi warna QR dan latar belakang.",
        "Pratinjau kode QR langsung diperbarui secara real-time.",
        "Klik Unduh PNG atau Unduh SVG untuk menyimpan."
      ],
      article: "Kode QR adalah barcode dua dimensi yang bisa dibaca oleh kamera smartphone mana pun. Generator ini mendukung tiga kasus penggunaan: berbagi URL atau teks biasa, menyematkan kredensial WiFi agar tamu bisa terhubung tanpa mengetik kata sandi, dan mengenkode kartu kontak vCard yang langsung bisa disimpan ke buku alamat ponsel.\n\nSemua kode QR dibuat sepenuhnya di browser Anda — tidak ada data yang meninggalkan perangkat Anda. Format SVG ideal untuk cetak karena bisa diperbesar tanpa pikselasi, sedangkan PNG lebih cocok untuk berbagi digital.",
      faq: [
        { q: "Apa saja jenis QR yang didukung?", a: "URL/teks biasa, WiFi (WPA/WPA2, WEP, dan jaringan terbuka), dan kontak vCard (nama, telepon, email)." },
        { q: "Apakah data saya dikirim ke server?", a: "Tidak. Kode QR dibuat sepenuhnya di browser Anda. Tidak ada yang diunggah atau disimpan." },
        { q: "Apa perbedaan PNG dan SVG?", a: "PNG adalah format raster — terbaik untuk berbagi secara digital. SVG berbasis vektor dan bisa dicetak di ukuran berapa pun tanpa pecah." },
        { q: "Bagaimana cara memindai kode QR?", a: "Buka aplikasi kamera di ponsel dan arahkan ke kode. Sebagian besar smartphone modern langsung mengenali kode QR tanpa aplikasi tambahan." }
      ]
    }
  }
};
