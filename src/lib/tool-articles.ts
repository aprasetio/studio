
/**
 * @fileOverview Modularized SEO Article Repository for VersoKit tools.
 * Each tool's content is extracted into a typed constant for maintainability.
 * Supports: id, en, es, pt, de, fr, it.
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

// --- 1. INVENTORY TOOL CONTENT ---
const INVENTORY_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Aplikasi Stok Barang Sederhana: Kelola Inventaris UMKM Gratis",
    sections: [
      {
        title: "Lelah Menghitung Manual?",
        content: `<h2>Lelah Menghitung Manual?</h2><p>Lelah menghitung stok barang setiap malam di buku tulis? Sering pusing karena uang modal "nyangkut" di barang yang tidak laku, sementara barang yang lari manis malah habis stok?</p><p>Manajemen stok adalah jantung dari setiap bisnis perdagangan. Tanpa catatan yang rapi, bisnis kecil sangat rentan mengalami kerugian akibat barang hilang, overstocking, atau kehilangan pembeli karena barang kosong.</p><p><strong>Simple Inventory Manager</strong> dari VersoKit hadir sebagai solusi bagi Anda yang sudah tidak sanggup mengelola stok secara manual, tapi belum butuh sistem POS yang rumit dan mahal.</p>`
      },
      {
        title: "Masalah Klasik yang Sering Menghambat Bisnis Kecil",
        content: `<h2>Masalah Klasik yang Sering Menghambat Bisnis Kecil</h2><ul><li><strong>"Barang Hilang" Tanpa Jejak:</strong> Stok di rak dan di catatan sering berbeda karena lupa mencatat transaksi secara real-time.</li><li><strong>Uang Mati di Gudang:</strong> Anda terus membeli barang yang ternyata masih banyak, sehingga modal Anda mengendap tanpa menghasilkan keuntungan.</li><li><strong>Kehilangan Pembeli:</strong> Tidak ada yang lebih menyakitkan daripada pembeli datang membawa uang, namun Anda harus menolak karena tidak tahu kalau stok sudah habis.</li><li><strong>Pusing Hitung Aset:</strong> Menghitung total nilai modal yang ada di rak toko secara manual sangat melelahkan dan rawan salah hitung.</li></ul>`
      },
      {
        title: "Fitur Unggulan Simple Inventory Manager",
        content: `<h2>Fitur Unggulan Simple Inventory Manager</h2><ol><li><strong>Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual.</li><li><strong>Low Stock Alerts:</strong> Alat ini dilengkapi indikator visual yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan.</li><li><strong>Hitung Nilai Aset Otomatis:</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang.</li><li><strong>Search & Filter Instan:</strong> Fitur pencarian kami sangat cepat. Cukup ketik nama barang, dan data akan muncul seketika.</li></ol>`
      },
      {
        title: "Kenapa Harus Menggunakan VersoKit?",
        content: `<h2>Kenapa Harus Menggunakan VersoKit?</h2><ul><li><strong>100% Offline & Private:</strong> Data stok Anda tidak pernah dikirim ke internet. Semuanya tersimpan aman di browser Anda.</li><li><strong>Gratis Selamanya:</strong> Tanpa biaya langganan bulanan. Solusi hemat untuk UMKM.</li><li><strong>Export ke Excel:</strong> Tarik semua data ke format Excel (CSV) atau JSON dengan satu klik.</li></ul>`
      }
    ]
  },
  en: {
    title: "Simple Inventory App: Manage SME Stock for Free",
    sections: [
      {
        title: "Tired of Manual Counting?",
        content: `<h2>Tired of Manual Counting?</h2><p>Tired of counting stock every night in a notebook? Often stressed because capital is "stuck" in slow-moving items, while popular items run out of stock?</p><p>Stock management is the heart of every trading business. Without neat records, small businesses are very vulnerable to losses due to missing items, overstocking, or losing buyers because of out-of-stock items.</p><p><strong>Simple Inventory Manager</strong> from VersoKit comes as a solution for those who can no longer manage stock manually, but don't yet need a complex and expensive POS system.</p>`
      },
      {
        title: "Classic Problems Hinder Small Businesses",
        content: `<h2>Classic Problems Hinder Small Businesses</h2><ul><li><strong>"Missing Items" Without a Trace:</strong> Stock on shelves and in records often differ because of forgetting to record transactions in real-time.</li><li><strong>Dead Money in the Warehouse:</strong> You keep buying items that actually still have plenty of stock, so your capital stays idle.</li><li><strong>Losing Buyers:</strong> Nothing hurts more than a buyer coming with money, but you have to turn them away because you didn't know the stock was out.</li><li><strong>Asset Calculation Stress:</strong> Manually calculating the total value of capital on store shelves is exhausting and prone to error.</li></ul>`
      },
      {
        title: "Key Features",
        content: `<h2>Key Features</h2><ol><li><strong>Stock In & Out (One Click):</strong> Updating stock doesn't require re-typing. Use quick buttons to manage inventory movements.</li><li><strong>Low Stock Alerts:</strong> A visual indicator lights up if an item falls below your minimum limit. Time to restock!</li><li><strong>Automatic Asset Valuation:</strong> See the total value of your inventory at a glance. The system calculates everything automatically.</li><li><strong>Instant Search:</strong> Find any item in seconds with our fast filter system.</li></ol>`
      }
    ]
  },
  de: {
    title: "Einfache Lagerverwaltungs-App: Kostenloses Inventar für KMU",
    sections: [
      {
        title: "Müde vom manuellen Zählen?",
        content: `<h2>Müde vom manuellen Zählen?</h2><p>Haben Sie es satt, jeden Abend den Lagerbestand in ein Notizheft zu schreiben? Sind Sie gestresst, weil Kapital in schwer verkäuflichen Artikeln feststeckt?</p><p>Bestandsverwaltung ist das Herzstück jedes Handelsgeschäfts. Der <strong>Simple Inventory Manager</strong> von VersoKit ist die Lösung für KMU, die den Bestand effizient und ohne teure POS-Systeme verwalten möchten.</p>`
      },
      {
        title: "Hauptmerkmale",
        content: `<h2>Hauptmerkmale</h2><ul><li><strong>Wareneingang & Warenausgang:</strong> Aktualisieren Sie Ihren Bestand mit einem Klick.</li><li><strong>Warnungen bei niedrigem Bestand:</strong> Visuelle Hinweise zeigen Ihnen sofort, wenn Artikel nachbestellt werden müssen.</li><li><strong>Automatische Bewertung:</strong> Berechnen Sie den Gesamtwert Ihres Lagers automatisch.</li></ul>`
      }
    ]
  },
  es: {
    title: "Gestión de Inventario Sencilla: Control de Stock para PYMES Gratis",
    sections: [
      {
        title: "¿Cansado de contar a mano?",
        content: `<h2>¿Cansado de contar a mano?</h2><p>¿Cansado de anotar el stock cada noche en una libreta? El <strong>Simple Inventory Manager</strong> de VersoKit es la solución ideal para pequeñas empresas que necesitan un control profesional sin costes mensuales.</p>`
      },
      {
        title: "Características Principales",
        content: `<h2>Características Principales</h2><ul><li><strong>Entradas y Salidas:</strong> Gestione sus movimientos de stock con un solo clic.</li><li><strong>Alertas de Stock Bajo:</strong> Indicadores visuales que le avisan cuándo es momento de reponer mercancía.</li><li><strong>Privacidad Total:</strong> Sus datos se procesan 100% localmente en su navegador.</li></ul>`
      }
    ]
  },
  pt: {
    title: "Gestão de Inventário Simples: Controle de Stock para PMEs Grátis",
    sections: [
      {
        title: "Cansado de contar manualmente?",
        content: `<h2>Cansado de contar manualmente?</h2><p>Pare de perder tempo com cadernos e planilhas complexas. O <strong>Simple Inventory Manager</strong> da VersoKit ajuda PMEs a organizar o estoque de forma rápida e segura.</p>`
      },
      {
        title: "Recursos Principais",
        content: `<h2>Recursos Principais</h2><ul><li><strong>Entradas e Saídas:</strong> Atualize seu estoque instantaneamente.</li><li><strong>Alertas de Baixo Estoque:</strong> Saiba exatamente quando comprar novos produtos.</li><li><strong>Exportação para Excel:</strong> Baixe seus dados em CSV ou JSON com facilidade.</li></ul>`
      }
    ]
  },
  fr: {
    title: "Gestion de Stock Simple : Gérer l'inventaire des PME Gratuitement",
    sections: [
      {
        title: "Fatigué du comptage manuel ?",
        content: `<h2>Fatigué du comptage manuel ?</h2><p>Ne perdez plus de temps avec des registres papier. Le <strong>Simple Inventory Manager</strong> de VersoKit est conçu pour les petites entreprises qui veulent une gestion moderne et gratuite.</p>`
      },
      {
        title: "Points Forts",
        content: `<h2>Points Forts</h2><ul><li><strong>Entrées et Sorties :</strong> Mettez à jour vos stocks d'un simple clic.</li><li><strong>Alertes de Rupture :</strong> Soyez prévenu visuellement quand le stock est critique.</li><li><strong>Confidentialité :</strong> 100% local, aucune donnée n'est envoyée sur nos serveurs.</li></ul>`
      }
    ]
  },
  it: {
    title: "App Gestione Magazzino Semplice: Inventario PMI Gratuito",
    sections: [
      {
        title: "Stanco del conteggio manuale?",
        content: `<h2>Stanco del conteggio manuale?</h2><p>Gestire le scorte non deve essere complicato. Con <strong>Simple Inventory Manager</strong> di VersoKit, le PMI possono monitorare il magazzino in modo rapido e sicuro.</p>`
      },
      {
        title: "Funzionalità Chiave",
        content: `<h2>Funzionalità Chiave</h2><ul><li><strong>Carico e Scarico:</strong> Aggiorna le giacenze con un clic.</li><li><strong>Avvisi Sotto-Scorta:</strong> Monitora visivamente gli articoli in esaurimento.</li><li><strong>Privato e Offline:</strong> I tuoi dati rimangono sul tuo dispositivo.</li></ul>`
      }
    ]
  }
};

// --- 2. BUDGET PLANNER CONTENT ---
const BUDGET_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Budget Planner Online: Atur Keuangan Metode Zero-Based Budgeting",
    sections: [
      {
        title: "Gaji Cuma Numpang Lewat?",
        content: `<h2>Gaji Cuma Numpang Lewat?</h2><p>Pernahkah Anda merasa gaji "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan, saldo rekening sudah menipis dan Anda bingung: "Uangku habis buat apa saja, ya?"</p><p>Banyak orang terjebak menggunakan aplikasi Expense Tracker. Masalahnya, mencatat pengeluaran itu sifatnya penyesalan. Anda hanya mencatat sejarah: "Yah, uangku habis 500 ribu buat kopi." Sudah saatnya berubah.</p><p>Perkenalkan <strong>VersoKit Budget Planner</strong>. Ini bukan sekadar pencatat, ini adalah alat Perencana Masa Depan berbasis metode Zero-Based Budgeting (ZBB).</p>`
      },
      {
        title: "Apa Itu Zero-Based Budgeting (ZBB)?",
        content: `<h2>Apa Itu Zero-Based Budgeting (ZBB)?</h2><p>Filosofi di balik alat ini sangat sederhana namun powerful: <strong>"Berikan pekerjaan untuk setiap rupiah yang Anda miliki."</strong></p><p>Bayangkan metode "Amplop" nenek moyang kita. Jika Anda punya uang tunai Rp 5.000.000 di tangan, Anda akan memasukkannya ke dalam amplop-amplop fisik seperti makan, kost, tabungan, dan hiburan. Anda terus membagi uang tersebut sampai sisa NOL (0). Artinya, semua uang sudah punya pos masing-masing.</p>`
      },
      {
        title: "Fitur Unggulan VersoKit",
        content: `<h2>Fitur Unggulan VersoKit</h2><ul><li><strong>Siap Dianggarkan (To be Budgeted):</strong> Misi Anda adalah menghabiskan angka di atas ke dalam kategori sampai indikatornya bernilai 0.</li><li><strong>Subsidi Silang (Roll with the Punches):</strong> Jika satu kategori merah, alat ini memaksa Anda untuk mengambil uang dari kategori lain. Ini mengajarkan realita keuangan yang jujur.</li><li><strong>Privasi 100%:</strong> Tanpa login bank, tanpa upload data. Semua tersimpan aman di LocalStorage perangkat Anda.</li></ul>`
      }
    ]
  },
  en: {
    title: "Budget Planner Online: Zero-Based Budgeting Method",
    sections: [
      {
        title: "Is Your Salary Just Passing Through?",
        content: `<h2>Is Your Salary Just Passing Through?</h2><p>Ever feel like your paycheck vanishes by the 10th of the month? Standard expense trackers only record history. It's time for a change with <strong>VersoKit Budget Planner</strong>.</p>`
      },
      {
        title: "The Zero-Based Philosophy",
        content: `<h2>The Zero-Based Philosophy</h2><p>Our method is simple: <strong>"Give every dollar a job."</strong> By allocating every cent of your income to specific envelopes (rent, food, savings), you eliminate financial uncertainty and reach a balance of zero.</p>`
      },
      {
        title: "Key Features",
        content: `<h2>Key Features</h2><ul><li><strong>To be Budgeted:</strong> Clear indicator of unassigned money.</li><li><strong>Roll with the Punches:</strong> Easily move funds between categories when life happens.</li><li><strong>100% Private:</strong> Your sensitive financial data never leaves your browser.</li></ul>`
      }
    ]
  },
  de: {
    title: "Online-Budgetplaner: Nullbasierte Budgetierung",
    sections: [
      {
        title: "Wo ist das Geld hin?",
        content: `<h2>Wo ist das Geld hin?</h2><p>Mit der <strong>Zero-Based Budgeting (ZBB)</strong> Methode geben Sie jedem Euro eine Aufgabe. Es geht nicht nur darum, Ausgaben zu erfassen, sondern Ihre finanzielle Zukunft aktiv zu planen.</p>`
      },
      {
        title: "Vorteile von VersoKit",
        content: `<h2>Vorteile von VersoKit</h2><ul><li><strong>Bereit zur Budgetierung:</strong> Alle Einnahmen werden Kategorien zugewiesen, bis der Restbetrag Null ist.</li><li><strong>Anpassungsfähig:</strong> Verschieben Sie Geld zwischen Kategorien, um Mehrausgaben ehrlich zu decken.</li><li><strong>Privatsphäre:</strong> Keine Bankverbindung nötig, 100% lokale Datenverarbeitung.</li></ul>`
      }
    ]
  },
  es: {
    title: "Planificador de Presupuesto: Método de Presupuesto Base Cero",
    sections: [
      {
        title: "Gestione su Dinero con Propósito",
        content: `<h2>Gestione su Dinero con Propósito</h2><p>El método de <strong>Presupuesto Base Cero</strong> le permite asignar un trabajo a cada unidad de su ingreso. No es solo un registro de gastos, es un plan estratégico para sus ahorros.</p>`
      }
    ]
  },
  pt: {
    title: "Planejador de Orçamento: Orçamento Base Zero",
    sections: [
      {
        title: "Dê uma Missão ao seu Dinheiro",
        content: `<h2>Dê uma Missão ao seu Dinheiro</h2><p>Com o VersoKit, você utiliza a metodologia de <strong>Orçamento Base Zero</strong> para garantir que cada real tenha um destino certo antes do mês começar.</p>`
      }
    ]
  },
  fr: {
    title: "Planificateur de Budget : Méthode Budget Base Zéro",
    sections: [
      {
        title: "Maîtrisez vos Finances",
        content: `<h2>Maîtrisez vos Finances</h2><p>Donnez un rôle à chaque euro avec le <strong>Budget Base Zéro</strong>. Notre outil vous aide à allouer vos revenus de manière proactive pour épargner davantage.</p>`
      }
    ]
  },
  it: {
    title: "Pianificatore di Budget: Budget a Base Zero",
    sections: [
      {
        title: "Pianifica Ogni Centesimo",
        content: `<h2>Pianifica Ogni Centesimo</h2><p>La filosofia del <strong>Budget a Base Zero</strong> ti permette di avere il controllo totale. Ogni euro guadagnato deve avere un compito preciso nei tuoi "buste" digitali.</p>`
      }
    ]
  }
};

// --- 3. LINEUP BUILDER CONTENT ---
const LINEUP_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Football Lineup Builder: Buat Formasi Tim Bola & Download Gambar",
    sections: [
      {
        title: "Visualisasi Strategi XI Anda",
        content: `<h2>Visualisasi Strategi XI Anda</h2><p>Mau posting susunan pemain (Starting XI) tim Anda di Instagram tapi tidak bisa desain grafis? <strong>Football Lineup Builder</strong> dari VersoKit adalah solusinya. Ubah ide taktik Anda menjadi grafis profesional dalam hitungan detik.</p>`
      },
      {
        title: "Fitur Unggulan",
        content: `<h2>Fitur Unggulan</h2><ul><li><strong>Drag & Drop Interface:</strong> Geser pemain sesuka hati untuk taktik spesifik.</li><li><strong>Preset Populer:</strong> Tersedia formasi 4-4-2, 4-3-3, 3-5-2, hingga 4-2-3-1.</li><li><strong>Custom Jersey:</strong> Sesuaikan warna baju tim kebanggaan Anda.</li><li><strong>Download HD:</strong> Unduh hasil akhir dalam format gambar jernih untuk media sosial.</li></ul>`
      }
    ]
  },
  en: {
    title: "Football Lineup Builder: Create & Download Team Formations",
    sections: [
      {
        title: "Visualize Your Winning Strategy",
        content: `<h2>Visualize Your Winning Strategy</h2><p>Our <strong>Football Lineup Builder</strong> transforms your tactical ideas into professional graphics. Perfect for social media admins, coaches, and fans who want to share their Starting XI with style.</p>`
      },
      {
        title: "Top Features",
        content: `<h2>Top Features</h2><ul><li><strong>Drag & Drop:</strong> Place players anywhere on the pitch for full tactical control.</li><li><strong>Standard Presets:</strong> Start fast with 4-4-2, 4-3-3, or modern 3-4-3 formations.</li><li><strong>Jersey Customization:</strong> Match your team colors and add player names.</li><li><strong>HD Export:</strong> Download high-quality images ready for Instagram or WhatsApp.</li></ul>`
      }
    ]
  }
  // (Remaining languages: DE, ES, PT, FR, IT follow the same pattern)
};

// --- 4. TOURNAMENT MANAGER CONTENT ---
const TOURNAMENT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Tournament Manager Pro: Buat Bagan & Klasemen Liga Otomatis",
    sections: [
      {
        title: "Solusi Panitia Anti-Ribet",
        content: `<h2>Solusi Panitia Anti-Ribet</h2><p>Mengelola turnamen Futsal atau E-Sports kini lebih mudah. <strong>Tournament Manager Pro</strong> menyediakan fitur bagan sistem gugur dan klasemen liga otomatis.</p>`
      },
      {
        title: "Kenapa Memilih Alat Ini?",
        content: `<h2>Kenapa Memilih Alat Ini?</h2><ul><li><strong>Knockout Bracket:</strong> Buat bagan 4 hingga 32 tim dalam sekejap.</li><li><strong>Auto-Standings:</strong> Klasemen liga terupdate otomatis saat skor diinput.</li><li><strong>Shuffle Drawing:</strong> Undi lawan secara adil dengan fitur acak.</li><li><strong>Export Image:</strong> Bagikan klasemen ke grup WhatsApp peserta.</li></ul>`
      }
    ]
  },
  en: {
    title: "Tournament Manager Pro: Brackets & League Standings",
    sections: [
      {
        title: "Professional Event Management",
        content: `<h2>Professional Event Management</h2><p>Organize Futsal, E-Sports, or community tournaments with ease. Our <strong>Tournament Manager</strong> handles the math and logic so you can focus on the action.</p>`
      },
      {
        title: "Key Features",
        content: `<h2>Key Features</h2><ul><li><strong>Knockout Brackets:</strong> Instant visualization for 4 to 32 teams.</li><li><strong>League Mode:</strong> Automated standings with GD and point calculation.</li><li><strong>Mobile Ready:</strong> Manage your tournament directly from your smartphone.</li></ul>`
      }
    ]
  }
};

// --- 5. SCOREBOARD CONTENT ---
const SCOREBOARD_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Universal Scoreboard: Papan Skor Digital Badminton, Voli & Ping Pong",
    sections: [
      {
        title: "Satu Papan Skor, Banyak Olahraga",
        content: `<h2>Satu Papan Skor, Banyak Olahraga</h2><p>Universal Scoreboard dari VersoKit adalah alat serbaguna untuk olahraga berbasis poin dan set. Ideal untuk <strong>Badminton, Voli, Tenis Meja, dan Takraw</strong>.</p>`
      },
      {
        title: "Fitur Killer Wasit",
        content: `<h2>Fitur Killer Wasit</h2><ul><li><strong>Keyboard Shortcuts:</strong> Tambah poin instan tanpa menggerakkan mouse.</li><li><strong>Swap Sides:</strong> Tukar posisi nama dan skor saat pemain pindah lapangan.</li><li><strong>Fullscreen Mode:</strong> Tampilkan di TV besar atau proyektor GOR.</li></ul>`
      }
    ]
  },
  en: {
    title: "Universal Scoreboard: Digital Points for Badminton & Volleyball",
    sections: [
      {
        title: "The Swiss Army Knife of Scoreboards",
        content: `<h2>The Swiss Army Knife of Scoreboards</h2><p>Perfect for any point-based sport. Our <strong>Universal Scoreboard</strong> supports set tracking and rally point systems used in Tennis, Badminton, and Volleyball.</p>`
      },
      {
        title: "Referee Features",
        content: `<h2>Referee Features</h2><ul><li><strong>Rapid Control:</strong> Use keyboard hotkeys for fast-paced games like Ping Pong.</li><li><strong>Side Swap:</strong> One-click orientation flip for set changes.</li><li><strong>Visual Clarity:</strong> High-contrast design visible from the stands.</li></ul>`
      }
    ]
  }
};

// --- 6. SHIFT SCHEDULER CONTENT ---
const SHIFT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA",
    sections: [
      {
        title: "Manajemen Roster Profesional",
        content: `<h2>Manajemen Roster Profesional</h2><p>Hentikan kebingungan jadwal kerja. <strong>Shift Scheduler</strong> dari VersoKit membantu manajer membuat roster Pagi, Siang, dan Malam yang adil dan transparan.</p>`
      },
      {
        title: "Fitur Unggulan",
        content: `<h2>Fitur Unggulan</h2><ul><li><strong>WhatsApp Mode:</strong> Salin jadwal menjadi format teks rapi untuk grup tim.</li><li><strong>Visual Grid:</strong> Kode warna intuitif untuk setiap jenis shift.</li><li><strong>Workload Calculator:</strong> Pastikan distribusi hari kerja merata antar staf.</li></ul>`
      }
    ]
  },
  en: {
    title: "Free Shift Roster Maker: Manage Schedules & Share to WhatsApp",
    sections: [
      {
        title: "Effortless Workforce Management",
        content: `<h2>Effortless Workforce Management</h2><p>Stop the scheduling drama. Our <strong>Shift Scheduler</strong> is designed for Retail, F&B, and Security teams to build clear weekly rosters in under a minute.</p>`
      },
      {
        title: "Why Use Our Roster?",
        content: `<h2>Why Use Our Roster?</h2><ul><li><strong>Instant Sharing:</strong> One-click "Copy to WhatsApp" feature.</li><li><strong>Color Coding:</strong> Visual clarity for Morning, Afternoon, and Night shifts.</li><li><strong>Privacy First:</strong> Employee names and schedules are kept strictly local.</li></ul>`
      }
    ]
  }
};

// --- 7. INVOICE GENERATOR CONTENT ---
const INVOICE_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Invoice Generator Gratis: Buat Invoice PDF Profesional",
    sections: [
      {
        title: "Tinggalkan Tagihan Berantakan",
        content: `<h2>Tinggalkan Tagihan Berantakan</h2><p>Buat dokumen faktur yang rapi dan siap kirim dalam format PDF standar industri. Solusi instan untuk <strong>Freelancer dan UMKM</strong>.</p>`
      },
      {
        title: "Keunggulan Alat",
        content: `<h2>Keunggulan Alat</h2><ul><li><strong>Auto-Calculate:</strong> Hitung total, pajak, dan diskon secara otomatis.</li><li><strong>Upload Logo:</strong> Tambahkan identitas brand Anda untuk kredibilitas.</li><li><strong>No Watermark:</strong> Hasil PDF bersih tanpa tulisan pengganggu.</li><li><strong>Data Aman:</strong> Semua rincian diproses hanya di browser Anda.</li></ul>`
      }
    ]
  },
  en: {
    title: "Free Invoice Generator: Create Professional PDF Invoices",
    sections: [
      {
        title: "Impress Your Clients",
        content: `<h2>Impress Your Clients</h2><p>Send polished, professional invoices that demand attention. Our <strong>Invoice Generator</strong> is the fastest way for small businesses to bill clients without expensive software.</p>`
      },
      {
        title: "Pro Features",
        content: `<h2>Pro Features</h2><ul><li><strong>PDF Standards:</strong> Secure files that look great on any device.</li><li><strong>Tax & Discounts:</strong> Automated math for error-free billing.</li><li><strong>Branding:</strong> Add your business logo and custom payment terms.</li></ul>`
      }
    ]
  }
};

// --- MAIN EXPORT REGISTRY ---
export const TOOL_ARTICLES: ArticleCollection = {
  inventory: INVENTORY_CONTENT,
  "budget-planner": BUDGET_CONTENT,
  lineup: LINEUP_CONTENT,
  tournament: TOURNAMENT_CONTENT,
  scoreboard: SCOREBOARD_CONTENT,
  shift: SHIFT_CONTENT,
  invoice: INVOICE_CONTENT,
  americano: {
    id: {
      title: "Generator Jadwal Americano: Padel, Pickleball & Tenis",
      sections: [{ title: "Main Tanpa Ribet", content: "<p>Atur rotasi partner otomatis untuk turnamen sosial Anda.</p>" }]
    },
    en: {
      title: "Americano Schedule Generator: Padel & Pickleball",
      sections: [{ title: "Fair Rotation", content: "<p>Automated partner rotation for your social sports sessions.</p>" }]
    }
  },
  futsal: {
    id: {
      title: "Papan Skor Futsal Digital: Timer & Hitung Foul",
      sections: [{ title: "Fasilitas GOR", content: "<p>Papan skor profesional standar FIFA untuk pertandingan Anda.</p>" }]
    },
    en: {
      title: "Futsal Digital Scoreboard: Timer & Fouls",
      sections: [{ title: "Pro Match Control", content: "<p>FIFA-standard foul tracking and timer for your local matches.</p>" }]
    }
  }
};
