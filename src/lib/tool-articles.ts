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
    title: `Aplikasi Stok Barang Sederhana: Kelola Inventaris UMKM Gratis`,
    sections: [
      {
        title: `Lelah Menghitung Stok Manual?`,
        content: `<p>Lelah menghitung stok barang setiap malam di buku tulis? Sering pusing karena uang modal "nyangkut" di barang yang tidak laku, sementara barang yang lari manis malah habis stok?</p><p>Manajemen stok adalah jantung dari setiap bisnis perdagangan. Tanpa catatan yang rapi, bisnis kecil sangat rentan mengalami kerugian akibat barang hilang, overstocking, atau kehilangan pembeli karena barang kosong.</p><p><strong>Simple Inventory Manager</strong> dari VersoKit hadir sebagai solusi bagi Anda yang sudah tidak sanggup mengelola stok secara manual, tapi belum butuh sistem POS yang rumit dan mahal.</p>`
      },
      {
        title: `Masalah Klasik yang Sering Menghambat Bisnis Kecil`,
        content: `<ul><li><strong>"Barang Hilang" Tanpa Jejak:</strong> Stok di rak dan di catatan sering berbeda karena lupa mencatat transaksi secara real-time.</li><li><strong>Uang Mati di Gudang:</strong> Anda terus membeli barang yang ternyata masih banyak, sehingga modal Anda mengendap tanpa menghasilkan keuntungan.</li><li><strong>Kehilangan Pembeli:</strong> Tidak ada yang lebih menyakitkan daripada pembeli datang membawa uang, namun Anda harus menolak karena tidak tahu kalau stok sudah habis.</li><li><strong>Pusing Hitung Aset:</strong> Menghitung total nilai modal yang ada di rak toko secara manual sangat melelahkan dan rawan salah hitung.</li></ul>`
      },
      {
        title: `Fitur Unggulan Simple Inventory Manager`,
        content: `<ol><li><strong>Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual.</li><li><strong>Low Stock Alerts:</strong> Alat ini dilengkapi indikator visual yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan.</li><li><strong>Hitung Nilai Aset Otomatis:</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang.</li><li><strong>Search & Filter Instan:</strong> Fitur pencarian kami sangat cepat untuk menemukan barang tanpa perlu scroll.</li></ol>`
      }
    ]
  },
  en: {
    title: `Simple Inventory App: Manage SME Stock for Free`,
    sections: [
      {
        title: `Tired of Manual Counting?`,
        content: `<p>Tired of counting stock every night in a notebook? Often stressed because capital is "stuck" in slow-moving items, while popular items run out of stock?</p><p>Stock management is the heart of every trading business. Without neat records, small businesses are very vulnerable to losses. <strong>Simple Inventory Manager</strong> from VersoKit comes as a solution for those who can no longer manage stock manually but don't yet need a complex POS system.</p>`
      },
      {
        title: `Classic Warehouse Management Problems`,
        content: `<ul><li><strong>"Lost Items":</strong> Stock on shelves and records often differ because of forgetting to record transactions.</li><li><strong>Idle Capital:</strong> You keep buying items that still have plenty of stock, keeping your capital stationary.</li><li><strong>Losing Customers:</strong> Turning away customers because you didn't know the stock was out is painful.</li><li><strong>Asset Stress:</strong> Manually calculating the total value of capital on store shelves is exhausting.</li></ul>`
      },
      {
        title: `Key Features`,
        content: `<ul><li><strong>Stock In & Out (One Click):</strong> Manage inventory movements instantly without re-typing.</li><li><strong>Low Stock Alerts:</strong> A visual indicator lights up when items fall below your minimum limit.</li><li><strong>Automatic Asset Valuation:</strong> See the total value of your warehouse inventory in real-time.</li><li><strong>Instant Search:</strong> Find any item in seconds with our high-speed filter.</li></ul>`
      }
    ]
  },
  de: {
    title: `Einfache Lagerverwaltungs-App: Kostenloses Inventar für KMU`,
    sections: [
      {
        title: `Müde vom manuellen Zählen?`,
        content: `<p>Haben Sie es satt, jeden Abend den Lagerbestand in ein Notizheft zu schreiben? Bestandsverwaltung ist das Herzstück jedes Handelsgeschäfts. Ohne ordentliche Aufzeichnungen sind kleine Unternehmen anfällig für Verluste. <strong>Simple Inventory Manager</strong> von VersoKit ist die Lösung für KMU.</p>`
      },
      {
        title: `Hauptmerkmale`,
        content: `<ul><li><strong>Wareneingang & Warenausgang:</strong> Aktualisieren Sie Ihren Bestand mit einem Klick.</li><li><strong>Warnungen bei niedrigem Bestand:</strong> Visuelle Hinweise zeigen Ihnen sofort, wenn Artikel nachbestellt werden müssen.</li><li><strong>Automatische Bewertung:</strong> Berechnen Sie den Gesamtwert Ihres Lagers automatisch.</li><li><strong>Sofortige Suche:</strong> Finden Sie jeden Artikel in Sekunden mit unserem schnellen Filter.</li></ul>`
      }
    ]
  },
  es: {
    title: `Gestión de Inventario Sencilla: Control de Stock para PYMES Gratis`,
    sections: [
      {
        title: `¿Cansado de contar a mano?`,
        content: `<p>¿Cansado de anotar el stock cada noche en una libreta? El <strong>Simple Inventory Manager</strong> de VersoKit es la solución ideal para pequeñas empresas que necesitan un control profesional sin costes mensuales.</p>`
      },
      {
        title: `Características Principales`,
        content: `<ul><li><strong>Entradas y Salidas:</strong> Gestione sus movimientos de stock con un solo clic.</li><li><strong>Alertas de Stock Bajo:</strong> Indicadores visuales que le avisan cuándo es momento de reponer mercancía.</li><li><strong>Privacidad Total:</strong> Sus datos se procesan 100% localmente en su navegador.</li><li><strong>Valoración Automática:</strong> Vea el valor total de su inversión en inventario al instante.</li></ul>`
      }
    ]
  },
  pt: {
    title: `Gestão de Inventário Simples: Controle de Stock para PMEs Grátis`,
    sections: [
      {
        title: `Cansado de contar manualmente?`,
        content: `<p>Pare de perder tempo com cadernos e planilhas complexas. O <strong>Simple Inventory Manager</strong> da VersoKit ajuda PMEs a organizar o estoque de forma rápida e segura.</p>`
      },
      {
        title: `Recursos Principais`,
        content: `<ul><li><strong>Entradas e Saídas:</strong> Atualize seu estoque instantaneamente com um clique.</li><li><strong>Alertas de Baixo Estoque:</strong> Saiba exatamente quando comprar novos produtos.</li><li><strong>Exportação para Excel:</strong> Baixe seus dados em CSV ou JSON com facilidade.</li><li><strong>Segurança Local:</strong> Seus dados de estoque nunca saem do seu dispositivo.</li></ul>`
      }
    ]
  },
  fr: {
    title: `Gestion de Stock Simple : Gérer l'inventaire des PME Gratuitement`,
    sections: [
      {
        title: `Fatigué du comptage manuel ?`,
        content: `<p>Ne perdez plus de temps avec des registres papier. Le <strong>Simple Inventory Manager</strong> de VersoKit est conçu pour les petites entreprises qui veulent une gestion moderne et gratuite.</p>`
      },
      {
        title: `Points Forts`,
        content: `<ul><li><strong>Entrées et Sorties :</strong> Mettez à jour vos stocks d'un simple clic sans ressaisie.</li><li><strong>Alertes de Rupture :</strong> Soyez prévenu visuellement quand le stock est critique.</li><li><strong>Valorisation des Actifs :</strong> Calculez automatiquement la valeur totale de vos marchandises.</li><li><strong>Recherche Rapide :</strong> Filtrez vos centaines d'articles en un clin d'œil.</li></ul>`
      }
    ]
  },
  it: {
    title: `App Gestione Magazzino Semplice: Inventario PMI Gratuito`,
    sections: [
      {
        title: `Stanco del conteggio manuale?`,
        content: `<p>Gestire le scorte non deve essere complicato. Con <strong>Simple Inventory Manager</strong> di VersoKit, le PMI possono monitorare il magazzino in modo rapido e sicuro senza costi di abbonamento.</p>`
      },
      {
        title: `Funzionalità Chiave`,
        content: `<ul><li><strong>Carico e Scarico:</strong> Aggiorna le giacenze con un semplice clic.</li><li><strong>Avvisi Sotto-Scorta:</strong> Monitora visivamente gli articoli in esaurimento per non perdere vendite.</li><li><strong>Valutazione Inventario:</strong> Scopri il valore totale del tuo capitale investito in merce.</li><li><strong>Privato e Offline:</strong> I tuoi dati aziendali rimangono sul tuo dispositivo.</li></ul>`
      }
    ]
  }
};

// --- 2. BUDGET PLANNER CONTENT ---
const BUDGET_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Budget Planner Online: Atur Keuangan Metode Zero-Based Budgeting`,
    sections: [
      {
        title: `Gaji Cuma Numpang Lewat?`,
        content: `<p>Pernahkah Anda merasa gaji "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan, saldo rekening sudah menipis dan Anda bingung: "Uangku habis buat apa saja, ya?"</p><p>Masalah utamanya seringkali bukan pada besarnya gaji Anda, melainkan pada cara Anda memperlakukan uang tersebut. Banyak orang terjebak menggunakan aplikasi Expense Tracker. Masalahnya, mencatat pengeluaran itu sifatnya penyesalan. Anda hanya mencatat sejarah: "Yah, uangku habis 500 ribu buat kopi."</p><p>Sudah saatnya berubah. Perkenalkan <strong>VersoKit Budget Planner</strong>. Ini bukan sekadar pencatat, ini adalah alat Perencana Masa Depan berbasis metode Zero-Based Budgeting (ZBB).</p>`
      },
      {
        title: `Apa Itu Zero-Based Budgeting (ZBB)?`,
        content: `<p>Filosofi di balik alat ini sangat sederhana namun powerful: <strong>"Berikan pekerjaan untuk setiap rupiah yang Anda miliki."</strong></p><p>Bayangkan metode "Amplop" nenek moyang kita. Jika Anda punya uang tunai Rp 5.000.000 di tangan, Anda akan memasukkannya ke dalam amplop-amplop fisik: Makan, Kost, Tabungan, dan Hiburan. Anda terus membagi uang tersebut sampai uang di tangan Anda sisa NOL (0). Artinya, semua uang sudah punya pos masing-masing.</p>`
      },
      {
        title: `Masalah Keuangan yang Kami Selesaikan`,
        content: `<ul><li><strong>Sindrom "Bocor Alus":</strong> Pengeluaran kecil sering tidak terasa. Dengan ZBB, Anda dipaksa menganggarkan hal-hal kecil ini di awal.</li><li><strong>Ketakutan Cek Saldo:</strong> Dengan alat ini, Anda akan merasa tenang karena tahu uang untuk bayar kost dan makan sudah disisihkan.</li><li><strong>Uang Tanpa Tujuan:</strong> Di ZBB, uang "menganggur" itu haram hukumnya. Semua harus dialokasikan, entah itu untuk belanja atau investasi.</li></ul>`
      },
      {
        title: `Fitur Unggulan`,
        content: `<ul><li><strong>Sistem "Siap Dianggarkan":</strong> Bantu Anda menghabiskan sisa dana ke dalam kategori sampai bernilai nol.</li><li><strong>Subsidi Silang (Roll with the Punches):</strong> Tutup overspending di satu kategori dengan mengambil dana dari kategori lain.</li><li><strong>Privasi 100%:</strong> Data tersimpan aman di browser Anda tanpa perlu upload data sensitif.</li></ul>`
      }
    ]
  },
  en: {
    title: `Budget Planner Online: Zero-Based Budgeting Method`,
    sections: [
      {
        title: `Is Your Salary Just Passing Through?`,
        content: `<p>Have you ever felt like your salary is just "passing through"? You receive your paycheck on the 25th, but by the 10th of the next month, your account balance is already low. The problem isn't the size of your salary, but how you treat that money.</p><p>Many people use Expense Trackers, but that's just recording history. It's time for a change with <strong>VersoKit Budget Planner</strong>, a future-planning tool based on the Zero-Based Budgeting (ZBB) method.</p>`
      },
      {
        title: `The Zero-Based Philosophy`,
        content: `<p>The philosophy is simple: <strong>"Give every dollar a job."</strong> Imagine putting your cash into physical envelopes for rent, food, and savings until you have zero unassigned dollars left. VersoKit digitizes this envelope system, moving you from reactive tracking to proactive control.</p>`
      },
      {
        title: `Common Financial Pain Points Solved`,
        content: `<ul><li><strong>"Small Leak" Syndrome:</strong> Small daily expenses add up. ZBB forces you to plan for them upfront.</li><li><strong>Balance Anxiety:</strong> Stop fearing your bank app. Knowing exactly what each dollar is for brings peace of mind.</li><li><strong>Unassigned Money:</strong> Idle money gets spent randomly. In ZBB, every cent must have a destination.</li></ul>`
      }
    ]
  },
  de: {
    title: `Online-Budgetplaner: Nullbasierte Budgetierung`,
    sections: [
      {
        title: `Wo ist das Geld hin?`,
        content: `<p>Haben Sie das Gefühl, dass Ihr Gehalt nur ein „Durchlaufposten“ ist? Am 25. kommt das Geld, am 10. ist es weg. Das Problem ist oft nicht die Höhe des Gehalts, sondern die fehlende Planung.</p><p>Mit der <strong>Zero-Based Budgeting (ZBB)</strong> Methode von VersoKit geben Sie jedem Cent eine Aufgabe, bevor er ausgegeben wird. Verwandeln Sie reaktives Verfolgen in proaktive Kontrolle.</p>`
      },
      {
        title: `Vorteile des Budgetplaners`,
        content: `<ul><li><strong>"To be Budgeted" System:</strong> Stellen Sie sicher, dass jeder Euro verplant ist, bis der Restbetrag Null erreicht.</li><li><strong>Flexibilität:</strong> Decken Sie Mehrausgaben in einer Kategorie einfach durch Umschichten aus einer anderen ab.</li><li><strong>Privatsphäre:</strong> Ihre Finanzdaten bleiben lokal auf Ihrem Gerät gespeichert.</li></ul>`
      }
    ]
  },
  es: {
    title: `Planificador de Presupuesto: Método de Presupuesto Base Cero`,
    sections: [
      {
        title: `¿Su Salario es Solo un "Paso de Dinero"?`,
        content: `<p>¿Alguna vez ha sentido que su salario desaparece rápidamente? El problema principal no suele ser el tamaño de su salario, sino cómo trata ese dinero. Registrar gastos es un acto de arrepentimiento. Es hora de planificar su futuro con <strong>VersoKit Budget Planner</strong>.</p>`
      },
      {
        title: `Presupuesto Base Cero (ZBB)`,
        content: `<p>La filosofía es simple: <strong>"Asigne un trabajo a cada unidad de su moneda."</strong> Al igual que el método de los sobres, usted distribuye sus ingresos hasta que el saldo por presupuestar sea cero. Esto le da el control total sobre sus ahorros y gastos de forma proactiva.</p>`
      }
    ]
  },
  pt: {
    title: `Planejador de Orçamento: Orçamento Base Zero`,
    sections: [
      {
        title: `O Seu Salário está Apenas "de Passagem"?`,
        content: `<p>Você sente que o seu dinheiro desaparece logo após o pagamento? Registrar despesas é apenas olhar para o passado. Com o <strong>VersoKit Budget Planner</strong>, você utiliza a metodologia de <strong>Orçamento Base Zero</strong> para planejar o futuro e dar uma missão a cada real.</p>`
      },
      {
        title: `Como Funciona`,
        content: `<p>Imagine colocar seu dinheiro em envelopes para aluguel, alimentação e lazer. Você continua distribuindo até que reste zero reais para orçar. Isso garante que cada centavo seja usado com propósito, ajudando você a economizar mais e gastar com consciência.</p>`
      }
    ]
  },
  fr: {
    title: `Planificateur de Budget : Méthode Budget Base Zéro`,
    sections: [
      {
        title: `Maîtrisez vos Finances`,
        content: `<p>Votre salaire n'est-il qu'un "passage d'argent" ? Donnez un rôle à chaque euro avec le <strong>Budget Base Zéro</strong>. Notre outil vous aide à allouer vos revenus de manière proactive pour épargner davantage et dépenser avec intention.</p>`
      },
      {
        title: `Pourquoi utiliser ZBB ?`,
        content: `<p>Contrairement aux trackers de dépenses classiques qui ne font que constater les dégâts, le budget base zéro vous force à décider où ira votre argent avant même de le dépenser. C'est la clé de la liberté financière et de la tranquillité d'esprit.</p>`
      }
    ]
  },
  it: {
    title: `Pianificatore di Budget: Budget a Base Zero`,
    sections: [
      {
        title: `Pianifica Ogni Centesimo`,
        content: `<p>Hai l'impressione che il tuo stipendio sia solo di "passaggio"? La filosofia del <strong>Budget a Base Zero</strong> ti permette di avere il controllo totale. Ogni euro guadagnato deve avere un compito preciso prima bahwa il mese inizi.</p>`
      },
      {
        title: `Controllo Proattivo`,
        content: `<p>Invece di limitarti a registrare le uscite passate, decidi oggi come spenderai i tuoi soldi. Assegna fondi a categorie come affitto, spesa e risparmi fino a quando il saldo "da assegnare" non arriva a zero. Questo è il modo più efficace per eliminare lo stress finanziario.</p>`
      }
    ]
  }
};

// --- 3. LINEUP BUILDER CONTENT ---
const LINEUP_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Football Lineup Builder: Buat Formasi Tim Bola & Download Gambar`,
    sections: [
      {
        title: `Visualisasi Strategi XI Anda`,
        content: `<p>Mau posting susunan pemain (Starting XI) tim Anda di Instagram tapi tidak bisa desain grafis? <strong>Football Lineup Builder</strong> dari VersoKit adalah solusinya. Ubah ide taktik Anda menjadi grafis profesional dalam hitungan detik.</p>`
      },
      {
        title: `Fitur Unggulan`,
        content: `<ul><li><strong>Drag & Drop Interface:</strong> Geser pemain sesuka hati untuk taktik spesifik.</li><li><strong>Custom Jersey:</strong> Sesuaikan warna baju tim kebanggaan Anda.</li><li><strong>Download HD:</strong> Unduh hasil akhir dalam format gambar jernih.</li></ul>`
      }
    ]
  },
  en: {
    title: `Football Lineup Builder: Create & Download Team Formations`,
    sections: [
      {
        title: `Visualize Your Strategy`,
        content: `<p>Our <strong>Football Lineup Builder</strong> transforms your tactical ideas into professional graphics. Perfect for social media admins, coaches, and fans who want to share their Starting XI with style. Drag players, set numbers, and download your winning formation.</p>`
      }
    ]
  },
  es: {
    title: `Creador de Alineaciones: Crea y Descarga Formaciones de Fútbol`,
    sections: [
      {
        title: `Visualiza tu Estrategia`,
        content: `<p>Convierte tus ideas tácticas en gráficos profesionales. Ideal para redes sociales y entrenadores que buscan compartir su 11 inicial con un diseño limpio y moderno. Arrastra los jugadores y personaliza los colores de la camiseta.</p>`
      }
    ]
  },
  pt: {
    title: `Montar Time de Futebol: Criar Escalação e Baixar Imagem`,
    sections: [
      {
        title: `Visualize sua Estratégia`,
        content: `<p>Crie escalações profissionais para o seu time. Arraste os jogadores, escolha as cores e baixe a imagem em alta definição para compartilhar no WhatsApp ou Instagram de forma instantânea.</p>`
      }
    ]
  },
  de: {
    title: `Fußball Aufstellungs-Builder: Formation Erstellen & Bild Laden`,
    sections: [
      {
        title: `Visualisieren Sie Ihre Taktik`,
        content: `<p>Erstellen Sie professionelle Grafiken Ihrer Startelf. Wählen Sie Formationen und laden Sie das Ergebnis direkt als Bild herunter, um es mit Ihrem Team oder auf Social Media zu teilen.</p>`
      }
    ]
  },
  fr: {
    title: `Compo d'Équipe Foot : Créer une Formation et Télécharger l'Image`,
    sections: [
      {
        title: `Visualisez votre Stratégie`,
        content: `<p>Transformez vos idées tactiques en graphismes professionnels. Parfait pour les réseaux sociaux et les entraîneurs qui veulent partager leur 11 de départ avec un rendu propre et élégant.</p>`
      }
    ]
  },
  it: {
    title: `Formazione Calcio: Crea lo Schema e Scarica l'Immagine`,
    sections: [
      {
        title: `Visualizza la tua Strategia`,
        content: `<p>Trasforma le tue idee tattiche in grafiche professionali. Trascina i giocatori sul campo, imposta i numeri di maglia e scarica l'immagine finale per i tuoi follower.</p>`
      }
    ]
  }
};

// --- 4. TOURNAMENT MANAGER CONTENT ---
const TOURNAMENT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Tournament Manager Pro: Buat Bagan & Klasemen Liga Otomatis`,
    sections: [
      {
        title: `Solusi Panitia Anti-Ribet`,
        content: `<p>Mengelola turnamen Futsal, E-Sports, atau lomba kampung kini lebih mudah. Masalah klasik panitia adalah administrasi yang ribet. Gunakan <strong>Tournament Manager Pro</strong> dari VersoKit untuk membuat jadwal pertandingan dalam hitungan detik.</p>`
      },
      {
        title: `Kenapa Panitia Wajib Pakai Alat Ini?`,
        content: `<ul><li><strong>Klasemen Liga Otomatis:</strong> Masukkan skor pertandingan, dan tabel klasemen akan langsung berubah urutannya secara real-time.</li><li><strong>Shuffle Drawing:</strong> Undi lawan secara adil dengan satu klik tanpa perlu kertas arisan.</li><li><strong>Download Hasil:</strong> Unduh gambar klasemen untuk dibagikan ke grup peserta.</li></ul>`
      }
    ]
  },
  en: {
    title: `Tournament Manager Pro: League Standings & Schedule`,
    sections: [
      {
        title: `Professional Event Management`,
        content: `<p>Organize Futsal, E-Sports, or community tournaments with ease. Our <strong>Tournament Manager</strong> handles the math and logic so you can focus on the action. It supports Round Robin formats with real-time standings updates.</p>`
      }
    ]
  },
  es: {
    title: `Gestor de Torneos: Cuadros y Clasificaciones de Liga`,
    sections: [
      {
        title: `Gestión Profesional de Eventos`,
        content: `<p>Organiza torneos de fútbol, e-sports o eventos comunitarios. Soporta formatos de liga con cálculos automáticos de puntos, goles y clasificación en tiempo real.</p>`
      }
    ]
  },
  pt: {
    title: `Gerador de Torneios: Tabelas e Classificação de Liga`,
    sections: [
      {
        title: `Gestão Profissional de Eventos`,
        content: `<p>Organize campeonatos com facilidade. Suporte para sistemas de liga com atualização automática da tabela de pontos e saldo de gols conforme você insere os placares.</p>`
      }
    ]
  },
  de: {
    title: `Turniermanager Pro: Spielpläne & Ligatabellen`,
    sections: [
      {
        title: `Professionelle Eventverwaltung`,
        content: `<p>Erstellen Sie Spielpläne für Ihre Turniere. Unterstützt Ligen mit automatischer Berechnung von Toren und Punkten für eine stressfreie Turnierleitung.</p>`
      }
    ]
  },
  fr: {
    title: `Gestion de Tournoi : Tableaux et Classements de Ligue`,
    sections: [
      {
        title: `Gestion d'Événements Professionnelle`,
        content: `<p>Organisez vos tournois de foot ou d'e-sport. Prise en charge des championnats avec calcul automatique des points et mise à jour instantanée du classement.</p>`
      }
    ]
  },
  it: {
    title: `Gestore Tornei Pro: Tabelloni e Classifiche Lega`,
    sections: [
      {
        title: `Gestione Eventi Professionale`,
        content: `<p>Organizza tornei sportivi o di e-sport con facilità. Supporta campionati con classifiche aggiornate in tempo reale basate sui risultati inseriti.</p>`
      }
    ]
  }
};

// --- 5. SCOREBOARD CONTENT ---
const SCOREBOARD_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Universal Scoreboard: Papan Skor Digital Badminton, Voli & Ping Pong`,
    sections: [
      {
        title: `Satu Papan Skor, Banyak Olahraga`,
        content: `<p>Pernahkah Anda bermain bulu tangkis atau voli di GOR, tapi wasitnya sering lupa skor saat ini berapa? Solusinya adalah <strong>Universal Scoreboard</strong> dari VersoKit. Satu alat canggih untuk berbagai cabang olahraga berbasis poin (Rally Point) dan set.</p>`
      },
      {
        title: `Fitur Killer Wasit`,
        content: `<ul><li><strong>Keyboard Shortcuts:</strong> Tambah poin instan tanpa menggerakkan mouse. Sangat responsif untuk mengimbangi smash cepat!</li><li><strong>Swap Sides:</strong> Tukar posisi nama dan skor saat pemain pindah lapangan hanya dengan satu klik.</li><li><strong>Sistem Poin & Set Terpisah:</strong> Membedakan skor game dan jumlah kemenangan babak secara akurat.</li></ul>`
      }
    ]
  },
  en: {
    title: `Universal Scoreboard: Digital Points for Badminton & Volleyball`,
    sections: [
      {
        title: `The Swiss Army Knife of Scoreboards`,
        content: `<p>Perfect for any point-based sport. Our <strong>Universal Scoreboard</strong> supports set tracking and rally point systems used in Tennis, Badminton, and Volleyball. Avoid disputes and keep the focus on the game.</p>`
      },
      {
        title: `Referee Features`,
        content: `<ul><li><strong>Rapid Control:</strong> Use keyboard hotkeys for fast-paced games like Ping Pong.</li><li><strong>Side Swap:</strong> One-click orientation flip when players change ends.</li><li><strong>Visual Clarity:</strong> High-contrast design perfect for tablets and TV screens.</li></ul>`
      }
    ]
  },
  es: {
    title: `Marcador Universal: Puntos para Bádminton y Voleibol`,
    sections: [
      {
        title: `Versatilidad Deportiva`,
        content: `<p>Un marcador digital diseñado para cualquier deporte basado en puntos y sets. Ideal para torneos locales y partidos amistosos donde la precisión es clave.</p>`
      },
      {
        title: `Control Rápido`,
        content: `<ul><li><strong>Atajos de Teclado:</strong> Suma puntos sin usar el ratón.</li><li><strong>Cambio de Lado:</strong> Intercambia posiciones con un solo clic.</li></ul>`
      }
    ]
  },
  pt: {
    title: `Placar Universal: Pontuação Digital para Badminton e Vôlei`,
    sections: [
      {
        title: `Versatilidade Esportiva`,
        content: `<p>Um placar digital versátil para qualquer esporte baseado em pontos e sets. Perfeito para competições de Badminton, Vôlei e Tênis de Mesa com controle de sets ganhos.</p>`
      }
    ]
  },
  de: {
    title: `Universal-Anzeigetafel: Punkte für Badminton & Volleyball`,
    sections: [
      {
        title: `Vielseitige Sportanzeige`,
        content: `<p>Perfekt für jede punktebasierte Sportart. Unterstützt Satz-Tracking und Rally-Point-Systeme für professionelle Wettkämpfe und Hobby-Turniere.</p>`
      }
    ]
  },
  fr: {
    title: `Tableau de Score Universel : Badminton et Volleyball`,
    sections: [
      {
        title: `Polyvalence Sportive`,
        content: `<p>Un tableau de score numérique conçu pour tous les sports à points et sets. Idéal pour les tournois de Badminton et de Volleyball avec une visibilité optimale.</p>`
      }
    ]
  },
  it: {
    title: `Tabellone Universale: Punti per Badminton e Pallavolo`,
    sections: [
      {
        title: `Versatilità Sportiva`,
        content: `<p>Un tabellone digitale versatile per ogni sport basato su punti e set. Perfetto per Badminton, Pallavolo e Tennis da Tavolo con supporto per scorciatoie da tastiera.</p>`
      }
    ]
  }
};

// --- 6. SHIFT SCHEDULER CONTENT ---
const SHIFT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA`,
    sections: [
      {
        title: `Kenapa Harus Pindah dari Excel?`,
        content: `<p>Manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis. Mulai dari drama di grup WhatsApp karena salah ketik, hingga toko yang kosong karena shift yang terlewat. <strong>Shift Scheduler</strong> dari VersoKit adalah asisten pribadi Anda untuk membuat roster kerja yang rapi dan adil.</p>`
      },
      {
        title: `Fitur Unggulan`,
        content: `<ul><li><strong>WhatsApp Mode:</strong> Satu klik untuk menyalin jadwal menjadi teks rapi yang siap di-paste ke grup tim.</li><li><strong>Visual Roster Builder:</strong> Gunakan kode warna untuk membedakan shift Pagi, Siang, dan Malam.</li><li><strong>Download Image:</strong> Unduh jadwal sebagai gambar untuk ditempel di papan pengumuman.</li></ul>`
      }
    ]
  },
  en: {
    title: `Free Shift Roster Maker: Manage Schedules & Share to WhatsApp`,
    sections: [
      {
        title: `Effortless Workforce Management`,
        content: `<p>Stop the scheduling drama. Our <strong>Shift Scheduler</strong> is designed for Retail, F&B, and Security teams to build clear weekly rosters in under a minute. Visual and easy to read on mobile devices.</p>`
      },
      {
        title: `Why Use Our Roster?`,
        content: `<ul><li><strong>Instant Sharing:</strong> One-click "Copy to WhatsApp" feature.</li><li><strong>Color Coding:</strong> Visual clarity for different shift types like Morning and Night.</li><li><strong>Privacy First:</strong> Employee data stays strictly local on your device.</li></ul>`
      }
    ]
  },
  es: {
    title: `Planificador de Turnos Gratis: Crea Rosters y Comparte en WA`,
    sections: [
      {
        title: `Gestión de Personal Sin Esfuerzo`,
        content: `<p>Organiza los turnos de tu equipo en minutos. Diseñado para restaurantes, tiendas y seguridad con una interfaz visual intuitiva y descarga de imagen.</p>`
      }
    ]
  },
  pt: {
    title: `Gerador de Escala de Trabalho: Criar Turnos e Compartilhar`,
    sections: [
      {
        title: `Gestão de Equipe Sem Esforço`,
        content: `<p>Organize os turnos da sua equipe rapidamente. Perfeito para varejo e alimentação com visualização clara e compartilhamento fácil via texto ou imagem.</p>`
      }
    ]
  },
  de: {
    title: `Schichtplaner Kostenlos: Dienstpläne Erstellen & Teilen`,
    sections: [
      {
        title: `Mühelose Personalverwaltung`,
        content: `<p>Erstellen Sie wöchentliche Schichtpläne für Ihr Team. Ideal für Gastronomie und Einzelhandel mit praktischer WhatsApp-Exportfunktion und klaren Farbcodes.</p>`
      }
    ]
  },
  fr: {
    title: `Planning d'Équipe Gratuit : Gérer les Shifts et Partager`,
    sections: [
      {
        title: `Gestion du Personnel Simplifiée`,
        content: `<p>Organisez les horaires de votre équipe en quelques clics. Idéal pour la restauration et le commerce de détail avec un export texte optimisé pour mobile.</p>`
      }
    ]
  },
  it: {
    title: `Pianificatore Turni Gratis: Crea il Roster e Condividi`,
    sections: [
      {
        title: `Gestione del Personale Semplificata`,
        content: `<p>Organizza i turni di lavoro settimanali in meno di un minuto. Perfetto per negozi, bar e servizi di sicurezza con supporto offline completo.</p>`
      }
    ]
  }
};

// --- 7. INVOICE GENERATOR CONTENT ---
const INVOICE_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Invoice Generator Gratis: Buat Invoice PDF Profesional (1 Menit)`,
    sections: [
      {
        title: `Tinggalkan Tagihan Berantakan`,
        content: `<p>Masih mengirim tagihan lewat chat WhatsApp atau Excel yang berantakan? Cara menagih yang tidak rapi membuat bisnis terlihat amatir. <strong>Free Invoice Generator</strong> dari VersoKit adalah solusi instan untuk faktur PDF standar industri.</p>`
      },
      {
        title: `Fitur Unggulan`,
        content: `<ul><li><strong>Otomatis & Anti Salah Hitung:</strong> Sistem menghitung total, pajak, dan subtotal secara otomatis.</li><li><strong>Privasi 100%:</strong> Data bisnis Anda diproses hanya di browser Anda dan tidak disimpan di server kami.</li><li><strong>No Watermark:</strong> Hasil PDF bersih tanpa tulisan pengganggu, sepenuhnya milik Anda.</li></ul>`
      }
    ]
  },
  en: {
    title: `Free Invoice Generator: Create Professional PDF Invoices`,
    sections: [
      {
        title: `Impress Your Clients`,
        content: `<p>Send polished, professional invoices that demand attention. Our <strong>Invoice Generator</strong> is the fastest way for small businesses to bill clients without expensive software. No signup required.</p>`
      },
      {
        title: `Pro Features`,
        content: `<ul><li><strong>Automatic Calculations:</strong> Taxes and totals handled instantly.</li><li><strong>100% Private:</strong> Your business secrets never leave your browser.</li><li><strong>Clean PDF:</strong> Professional, watermark-free invoices for your brand.</li></ul>`
      }
    ]
  },
  es: {
    title: `Generador de Facturas Gratis: Crea Invoices en PDF`,
    sections: [
      {
        title: `Impresiona a tus Clientes`,
        content: `<p>Crea facturas profesionales en segundos. Ideal para freelancers y PYMES que buscan una imagen corporativa limpia, segura y sin registros obligatorios.</p>`
      }
    ]
  },
  pt: {
    title: `Gerador de Faturas Grátis: Criar Invoice em PDF Profissional`,
    sections: [
      {
        title: `Impressione seus Clientes`,
        content: `<p>Envie faturas elegantes e profissionais. A forma mais rápida para pequenos negócios cobrarem clientes sem software caro e com total privacidade.</p>`
      }
    ]
  },
  de: {
    title: `Rechnungsgenerator Kostenlos: Professionelle PDF-Rechnungen`,
    sections: [
      {
        title: `Überzeugen Sie Ihre Kunden`,
        content: `<p>Erstellen Sie saubere und professionelle Rechnungen in Minuten. Die schnellste Lösung für Kleinunternehmer ohne teure Software-Abos und ohne Datenupload.</p>`
      }
    ]
  },
  fr: {
    title: `Générateur de Factures Gratuit : Créer des Factures PDF`,
    sections: [
      {
        title: `Impressionnez vos Clients`,
        content: `<p>Envoyez des factures soignées et professionnelles. Le moyen le plus rapide pour les indépendants de facturer leurs clients avec un rendu PDF impeccable.</p>`
      }
    ]
  },
  it: {
    title: `Generatore Fatture Gratis: Crea Fatture PDF Professionali`,
    sections: [
      {
        title: `Impressiona i tuoi Clienti`,
        content: `<p>Crea fatture professionali ed eleganti in pochi secondi. Perfetto per freelance e piccole imprese yang non vogliono software costosi o complicati.</p>`
      }
    ]
  }
};

// --- 8. AMERICANO CONTENT ---
const AMERICANO_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Generator Jadwal Americano: Padel, Pickleball & Tenis`,
    sections: [
      {
        title: `Main Americano Tanpa Ribet`,
        content: `<p>Atur turnamen sosial Anda dengan rotasi partner otomatis. Americano adalah format di mana setiap pemain akan berganti pasangan di setiap babak, dan skor dihitung secara individu untuk menentukan pemenang akhir.</p>`
      }
    ]
  },
  en: {
    title: `Americano Schedule Generator: Padel & Pickleball`,
    sections: [
      {
        title: `Fair Partner Rotation`,
        content: `<p>Automated partner rotation for your social sports sessions. Ensure every player pairs with everyone else fairly and track individual leaderboards in real-time.</p>`
      }
    ]
  },
  es: {
    title: `Generador de Torneos Americano: Pádel y Pickleball`,
    sections: [
      {
        title: `Rotación Justa de Compañeros`,
        content: `<p>Organiza tus sesiones de pádel con rotaciones automáticas. Todos juegan con todos y el sistema gestiona la clasificación individual de forma transparente.</p>`
      }
    ]
  },
  pt: {
    title: `Gerador de Torneio Americano: Padel e Pickleball`,
    sections: [
      {
        title: `Rotação Justa de Parceiros`,
        content: `<p>Organize suas partidas de padel com rotação automática. Garanta que todos joguem com parceiros diferentes e acompanhe o ranking em tempo real.</p>`
      }
    ]
  },
  de: {
    title: `Americano-Turnier-Generator: Padel & Pickleball`,
    sections: [
      {
        title: `Faire Partner-Rotation`,
        content: `<p>Organisieren Sie Ihre Padel-Runden mit automatischer Partner-Rotation. Jeder spielt mit jedem, und die Bestenliste wird automatisch basierend auf Einzelergebnissen aktualisiert.</p>`
      }
    ]
  },
  fr: {
    title: `Générateur de Tournoi Americano : Padel et Pickleball`,
    sections: [
      {
        title: `Rotation Équitable des Partenaires`,
        content: `<p>Organisez vos sessions de padel avec des rotations automatiques. Tout le monde joue avec tout le monde et le classement individuel est géré en temps réel.</p>`
      }
    ]
  },
  it: {
    title: `Generatore Torneo Americano: Padel e Pickleball`,
    sections: [
      {
        title: `Rotazione Equa dei Partner`,
        content: `<p>Organizza i tuoi tornei di padel con rotazioni automatiche. Ogni giocatore cambia partner ad ogni turno e il sistema calcola la classifica individuale automaticamente.</p>`
      }
    ]
  }
};

// --- 9. FUTSAL CONTENT ---
const FUTSAL_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Papan Skor Futsal Digital: Timer & Hitung Foul`,
    sections: [
      {
        title: `Fasilitas GOR Profesional`,
        content: `<p>Papan skor futsal digital profesional dengan hitungan foul standar FIFA. Cocok untuk liga amatir, sparing antar komunitas, atau kompetisi sekolah dengan kontrol timer yang akurat.</p>`
      }
    ]
  },
  en: {
    title: `Futsal Digital Scoreboard: Timer & Fouls`,
    sections: [
      {
        title: `Pro Match Control`,
        content: `<p>FIFA-standard foul tracking and timer for your local matches. Turn any laptop or tablet into a professional futsal scoreboard with a large, clear display.</p>`
      }
    ]
  },
  es: {
    title: `Marcador Digital de Futsal: Tiempo y Faltas`,
    sections: [
      {
        title: `Control Profesional de Partidos`,
        content: `<p>Cronómetro y control de faltas estándar para tus partidos de fútbol sala. Convierte cualquier pantalla en un marcador profesional visible para todos los jugadores.</p>`
      }
    ]
  },
  pt: {
    title: `Placar Digital de Futsal: Cronômetro e Faltas`,
    sections: [
      {
        title: `Controle Profissional de Partidas`,
        content: `<p>Acompanhe o tempo e as faltas dos seus jogos de futsal. Interface clara e fácil de usar para competições, amistosos e treinos intensos.</p>`
      }
    ]
  },
  de: {
    title: `Digitales Futsal-Scoreboard: Timer & Fouls`,
    sections: [
      {
        title: `Professionelle Spielkontrolle`,
        content: `<p>FIFA-Standard Foul-Tracking und Zeitnahme für Ihre Futsal-Spiele. Verwandeln Sie jedes Tablet in eine professionelle Anzeigetafel für Ihren Sportplatz.</p>`
      }
    ]
  },
  fr: {
    title: `Tableau de Score Futsal : Chrono et Fautes`,
    sections: [
      {
        title: `Contrôle de Match Professionnel`,
        content: `<p>Suivez le temps et les fautes selon les standards du futsal. Idéal pour les matchs locaux, les tournois scolaires et les compétitions amateurs.</p>`
      }
    ]
  },
  it: {
    title: `Tabellone Calcetto Digitale: Timer e Falli`,
    sections: [
      {
        title: `Controllo Match Professionale`,
        content: `<p>Gestisci il tempo e i falli per le tue partite di calcio a 5. Trasforma il tuo dispositivo in un tabellone segnapunti professionale facile da leggere.</p>`
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
  americano: AMERICANO_CONTENT,
  futsal: FUTSAL_CONTENT,
  "csv-helper": {
    en: { title: "CSV Cleaner", sections: [{ title: "Clean Data", content: `<p>Remove duplicates and trim spaces from your CSV files locally.</p>` }] },
    id: { title: "Pembersih CSV", sections: [{ title: "Bersihkan Data", content: `<p>Hapus duplikat dan rapikan spasi file CSV Anda secara lokal.</p>` }] }
  },
  calculator: {
    en: { title: "Material Calculator", sections: [{ title: "Estimation", content: `<p>Calculate paint and tiles needed for your renovation project.</p>` }] },
    id: { title: "Kalkulator Material", sections: [{ title: "Estimasi", content: `<p>Hitung kebutuhan cat dan ubin untuk proyek renovasi Anda.</p>` }] }
  },
  "pdf-merge": {
    en: { title: "PDF Merge", sections: [{ title: "Privacy First", content: `<p>Combine multiple PDF files into one directly in your browser.</p>` }] },
    id: { title: "Gabung PDF", sections: [{ title: "Privasi Utama", content: `<p>Gabungkan beberapa file PDF menjadi satu langsung di browser Anda.</p>` }] }
  }
};
