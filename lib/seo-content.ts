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
        "Choose your formation (e.g., 4-4-2).",
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
        "Pilih formasi yang diinginkan (misal 4-4-2).",
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
      article: "A versatile **Universal Scoreboard** perfect for net sports like Volleyball and Badminton. Unlike simple counters, this tool tracks both 'Sets Won' and 'Current Points', making it ideal for official matches where keeping track of sets is crucial.",
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
        "Input match results in the 'Matches' tab to see auto-updated rankings."
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
        "Isi skor pertandingan di tab 'Jadwal' untuk melihat klasemen yang terupdate otomatis."
      ],
      article: "Mengelola turnamen liga sekarang jauh lebih mudah. Alat ini secara otomatis membuat jadwal pertandingan (fixtures) dan menghitung **Klasemen Otomatis** (Standings) secara real-time berdasarkan skor yang Anda masukkan. Tidak perlu daftar atau login.",
      faq: [
        { q: "Berapa banyak tim yang bisa ditambah?", a: "Tidak ada batasan kaku, namun dioptimalkan untuk liga sosial atau komunitas." }
      ]
    }
  },
  inventory: {
    en: {
      title: "Inventory Manager",
      description: "Track your stock levels efficiently.",
      steps: [
        "Click 'Add Item' to start tracking a product.",
        "Enter the product name and initial count.",
        "Use the + and - buttons to adjust stock levels as items arrive or are used."
      ],
      article: "Keep your sports equipment or small warehouse organized with the **VersoKit Inventory Manager**. This tool allows you to track balls, jerseys, cones, or any other items in real-time. It's designed for quick updates on the field or in the storage room.",
      faq: [
        { q: "Is the data saved?", a: "Yes, all inventory data is saved to your browser's local storage automatically." }
      ]
    },
    id: {
      title: "Stok Barang Gudang",
      description: "Pantau tingkat stok barang Anda dengan efisien.",
      steps: [
        "Klik 'Tambah Barang' untuk mulai melacak produk.",
        "Masukkan nama produk dan jumlah awal.",
        "Gunakan tombol + dan - untuk menyesuaikan stok saat barang masuk atau keluar."
      ],
      article: "Jaga peralatan olahraga atau gudang kecil Anda tetap teratur dengan **Manajer Inventaris VersoKit**. Alat ini memungkinkan Anda melacak bola, rompi, cone, atau barang lainnya secara real-time. Dirancang untuk pembaruan cepat di lapangan atau di ruang penyimpanan.",
      faq: [
        { q: "Apakah datanya tersimpan?", a: "Ya, semua data stok disimpan ke penyimpanan lokal browser Anda secara otomatis." }
      ]
    }
  },
  kanban: {
    en: {
      title: "Kanban Board",
      description: "Visual task management for your team.",
      steps: [
        "Add a new task in the 'To Do' column.",
        "Move tasks to 'In Progress' as you start working on them.",
        "Delete or move to 'Done' once the task is complete."
      ],
      article: "Streamline your team's workflow with this **Simple Kanban Board**. Perfect for managing tournament preparations, construction tasks, or daily business operations. Visualizing your progress helps identify bottlenecks and keeps everyone on the same page.",
      faq: [
        { q: "Can I use this for personal tasks?", a: "Absolutely, it's a great tool for personal productivity and simple project management." }
      ]
    },
    id: {
      title: "Papan Kanban",
      description: "Manajemen tugas visual untuk tim Anda.",
      steps: [
        "Tambah tugas baru di kolom 'Rencana'.",
        "Geser tugas ke 'Proses' saat mulai dikerjakan.",
        "Hapus atau pindahkan ke 'Selesai' setelah tugas tuntas."
      ],
      article: "Sederhanakan alur kerja tim Anda dengan **Papan Kanban Sederhana** ini. Sangat cocok untuk mengelola persiapan turnamen, tugas konstruksi, atau operasional bisnis harian. Memvisualisasikan progres membantu mengidentifikasi hambatan.",
      faq: [
        { q: "Bisa untuk tugas pribadi?", a: "Tentu saja, ini alat yang bagus untuk produktivitas pribadi dan manajemen proyek sederhana." }
      ]
    }
  },
  calculator: {
    en: {
      title: "Construction Material Calculator",
      description: "Estimate materials and costs for your projects.",
      steps: [
        "Enter the dimensions of your wall or floor area.",
        "Input the unit price of the material.",
        "View the total area, required volume, and estimated total cost instantly."
      ],
      article: "Avoid material waste with the **VersoKit Construction Calculator**. Whether you're a contractor or doing DIY home improvement, this tool helps you buy exactly what you need. It calculates paint coverage and material quantities based on area dimensions.",
      faq: [
        { q: "How accurate is the calculation?", a: "It uses standard coverage ratios, but we always recommend adding a 5-10% buffer for waste." }
      ]
    },
    id: {
      title: "Kalkulator Tukang",
      description: "Estimasi material dan biaya untuk proyek Anda.",
      steps: [
        "Masukkan dimensi luas dinding atau lantai Anda.",
        "Isi harga per unit material.",
        "Lihat total luas, volume yang dibutuhkan, dan estimasi biaya secara instan."
      ],
      article: "Hindari pemborosan material dengan **Kalkulator Konstruksi VersoKit**. Baik Anda seorang kontraktor atau renovasi rumah DIY, alat ini membantu Anda membeli tepat apa yang dibutuhkan. Menghitung kebutuhan cat dan material berdasarkan luas dimensi.",
      faq: [
        { q: "Seberapa akurat perhitungannya?", a: "Alat ini menggunakan rasio cakupan standar, namun kami sarankan menambah 5-10% cadangan." }
      ]
    }
  },
  invoice: {
    en: {
      title: "Invoice Generator",
      description: "Create professional invoices instantly.",
      steps: [
        "Fill in your business and client information.",
        "Add line items with quantity and unit price.",
        "Review the generated layout and click 'Print' to save as a professional PDF."
      ],
      article: "Create professional billing documents on the go with our **Free Invoice Maker**. No account required, and all data stays private on your device. Ideal for freelancers, small business owners, and service providers who need to issue receipts quickly.",
      faq: [
        { q: "Can I save my business info?", a: "The current version uses local state; we recommend keeping a template for recurring use." }
      ]
    },
    id: {
      title: "Pembuat Invoice",
      description: "Buat invoice profesional secara instan.",
      steps: [
        "Isi informasi bisnis dan detail klien Anda.",
        "Tambah daftar barang beserta jumlah dan harga satuannya.",
        "Tinjau tata letak yang dihasilkan dan klik 'Cetak' untuk menyimpan sebagai PDF profesional."
      ],
      article: "Buat dokumen penagihan profesional di mana saja dengan **Pembuat Invoice Gratis** kami. Tidak perlu akun, dan semua data tetap pribadi di perangkat Anda. Ideal untuk freelancer, pemilik bisnis kecil, dan penyedia jasa.",
      faq: [
        { q: "Data saya aman?", a: "Ya, invoice diproses sepenuhnya di browser Anda dan tidak pernah diunggah ke server kami." }
      ]
    }
  },
  shift: {
    en: {
      title: "Shift Roster Scheduler",
      description: "Manage weekly team schedules easily.",
      steps: [
        "Add employees to the roster list.",
        "Click on any day for an employee to cycle through shift types (Morning, Afternoon, Night, Off).",
        "View the complete weekly coverage at a glance."
      ],
      article: "Organize your staff schedules without complex spreadsheets. This **Shift Roster Tool** is perfect for retail, security teams, or sports facility staff. Its simple interface makes it easy to assign duties and share the weekly plan with your team.",
      faq: [
        { q: "Can I export the schedule?", a: "You can use the Export CSV feature or take a screenshot to share with your team." }
      ]
    },
    id: {
      title: "Jadwal Shift Kerja",
      description: "Kelola jadwal mingguan tim dengan mudah.",
      steps: [
        "Tambah nama karyawan ke daftar jadwal.",
        "Klik pada kotak hari untuk mengganti tipe shift (Pagi, Siang, Malam, Libur).",
        "Lihat keseluruhan jadwal mingguan dalam satu tampilan ringkas."
      ],
      article: "Atur jadwal staf Anda tanpa spreadsheet yang rumit. **Alat Jadwal Shift** ini sangat cocok untuk toko ritel, tim keamanan, atau staf fasilitas olahraga. Antarmukanya yang sederhana memudahkan pembagian tugas mingguan.",
      faq: [
        { q: "Bisa ekspor jadwal?", a: "Gunakan fitur Ekspor CSV atau ambil tangkapan layar untuk dibagikan ke tim." }
      ]
    }
  },
  "pdf-merge": {
    en: {
      title: "PDF Merger",
      description: "Combine multiple PDF files into one.",
      steps: [
        "Select multiple PDF files from your device.",
        "Reorder the files in the list if needed.",
        "Click 'Merge PDF' to process the files locally and download the single combined document."
      ],
      article: "Combine your PDF documents securely with our **Privacy-First PDF Merger**. Since all merging happens in your browser, your sensitive documents never leave your computer. Perfect for combining reports, assignments, or legal documents.",
      faq: [
        { q: "Is there a file limit?", a: "The limit depends on your browser's memory, but it handles common document sizes easily." }
      ]
    },
    id: {
      title: "Gabung PDF",
      description: "Gabungkan beberapa file PDF menjadi satu.",
      steps: [
        "Pilih beberapa file PDF dari perangkat Anda.",
        "Urutkan file dalam daftar jika diperlukan.",
        "Klik 'Gabungkan PDF' untuk memproses file secara lokal dan mengunduh dokumen gabungan."
      ],
      article: "Gabungkan dokumen PDF Anda dengan aman menggunakan **Penyatu PDF Prioritas Privasi**. Karena semua penggabungan terjadi di browser, dokumen sensitif Anda tidak pernah meninggalkan komputer Anda.",
      faq: [
        { q: "Ada batas ukuran file?", a: "Batasnya tergantung pada memori browser Anda, namun biasanya lancar untuk ukuran dokumen standar." }
      ]
    }
  },
  "image-to-pdf": {
    en: {
      title: "Image to PDF Converter",
      description: "Turn your photos into a single PDF document.",
      steps: [
        "Upload multiple images (JPG or PNG).",
        "Arrange the order of images to match your desired PDF pages.",
        "Click 'Convert to PDF' to generate the document locally."
      ],
      article: "Convert your photos, scans, or screenshots into a professional PDF report. This **Image to PDF Tool** is perfect for creating digital document submissions without needing a scanner. Your images remain private throughout the conversion process.",
      faq: [
        { q: "Which formats are supported?", a: "We support high-quality JPG and PNG image formats." }
      ]
    },
    id: {
      title: "Foto ke PDF",
      description: "Ubah koleksi foto Anda menjadi dokumen PDF tunggal.",
      steps: [
        "Upload beberapa gambar (JPG atau PNG).",
        "Atur urutan gambar sesuai dengan halaman PDF yang diinginkan.",
        "Klik 'Convert ke PDF' untuk menghasilkan dokumen secara lokal."
      ],
      article: "Ubah foto, hasil scan, atau screenshot Anda menjadi laporan PDF profesional. Alat ini sangat cocok untuk membuat kiriman dokumen digital tanpa perlu scanner fisik.",
      faq: [
        { q: "Format apa saja yang didukung?", a: "Kami mendukung format gambar JPG dan PNG berkualitas tinggi." }
      ]
    }
  },
  "image-compressor": {
    en: {
      title: "Image Compressor",
      description: "Reduce image file size without losing privacy.",
      steps: [
        "Select a high-resolution JPG or PNG image.",
        "Adjust the quality slider to your desired balance of size and quality.",
        "Download the compressed image directly to your device."
      ],
      article: "Optimize your images for web use or email with the **VersoKit Image Compressor**. By reducing file sizes locally, you save bandwidth and storage while ensuring your original data never touches our servers. Fast, secure, and private.",
      faq: [
        { q: "Will I lose quality?", a: "Compression involves some data loss, but settings around 80% are usually indistinguishable from the original." }
      ]
    },
    id: {
      title: "Kompres Foto",
      description: "Perkecil ukuran file gambar tanpa kehilangan privasi.",
      steps: [
        "Pilih gambar JPG atau PNG beresolusi tinggi.",
        "Atur slider kualitas untuk keseimbangan antara ukuran dan detail.",
        "Download gambar yang sudah dikompresi langsung ke perangkat Anda."
      ],
      article: "Optimalkan gambar Anda untuk penggunaan web atau email dengan **Kompresor Gambar VersoKit**. Dengan memperkecil ukuran file secara lokal, Anda menghemat bandwidth sambil memastikan data asli tetap aman.",
      faq: [
        { q: "Kualitasnya akan turun?", a: "Kompresi melibatkan pengurangan data, namun pengaturan sekitar 80% biasanya tidak terlihat bedanya." }
      ]
    }
  },
  "split-bill": {
    en: {
      title: "Split Bill Calculator",
      description: "Fairly divide shared costs with friends.",
      steps: [
        "Enter the total bill amount and any tax/service charges.",
        "List the names of all participants.",
        "Click the copy button to get a formatted summary ready for WhatsApp."
      ],
      article: "No more awkward math after lunch or futsal. The **VersoKit Split Bill Tool** makes sharing costs simple and transparent. It calculates individual shares and formats a clear summary you can send instantly to your group chat.",
      faq: [
        { q: "Can I add bank info?", a: "Yes, there is an optional field to include your payment details in the copied summary." }
      ]
    },
    id: {
      title: "Hitung Patungan",
      description: "Bagi biaya bersama teman secara adil dan cepat.",
      steps: [
        "Masukkan total tagihan dan biaya pajak/layanan.",
        "Masukkan nama-nama semua peserta yang ikut patungan.",
        "Klik tombol salin untuk mendapatkan ringkasan yang siap dikirim ke WhatsApp."
      ],
      article: "Tidak ada lagi hitung-hitungan canggung setelah makan siang atau futsal. **Alat Hitung Patungan VersoKit** membuat pembagian biaya menjadi sederhana dan transparan. Menghitung bagian tiap orang dengan rincian yang rapi.",
      faq: [
        { q: "Bisa tambah info rekening?", a: "Ya, ada kolom opsional untuk memasukkan detail pembayaran dalam ringkasan yang disalin." }
      ]
    }
  }
};
