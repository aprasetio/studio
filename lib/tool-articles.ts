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
        content: `<p>Lelah menghitung stok barang setiap malam di buku tulis? Sering pusing karena uang modal "nyangkut" di barang yang tidak laku, sementara barang yang lari manis malah habis stok?</p><p>Manajemen stok adalah jantung dari setiap bisnis perdagangan. Tanpa catatan yang rapi, bisnis kecil sangat rentan mengalami kerugian akibat barang hilang, overstocking (kelebihan stok), atau kehilangan pembeli karena barang kosong.</p><p><strong>Simple Inventory Manager</strong> dari VersoKit hadir sebagai solusi bagi Anda yang sudah tidak sanggup mengelola stok secara manual, tapi belum butuh sistem POS yang rumit dan mahal.</p>`
      },
      {
        title: `Masalah Klasik yang Sering Menghambat Bisnis Kecil`,
        content: `<ul><li><strong>"Barang Hilang" Tanpa Jejak:</strong> Stok di rak dan di catatan sering berbeda karena lupa mencatat transaksi secara real-time.</li><li><strong>Uang Mati di Gudang:</strong> Anda terus membeli barang yang ternyata masih banyak, sehingga modal Anda mengendap tanpa menghasilkan keuntungan.</li><li><strong>Kehilangan Pembeli:</strong> Tidak ada yang lebih menyakitkan daripada pembeli datang membawa uang, namun Anda harus menolak karena tidak tahu kalau stok sudah habis.</li><li><strong>Pusing Hitung Aset:</strong> Menghitung total nilai modal yang ada di rak toko secara manual sangat melelahkan dan rawan salah hitung.</li></ul>`
      },
      {
        title: `Fitur Unggulan Simple Inventory Manager`,
        content: `<ol><li><strong>Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual. Saldo stok akan ter-update secara otomatis saat itu juga.</li><li><strong>Low Stock Alerts:</strong> Alat ini dilengkapi indikator visual (warna merah) yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan.</li><li><strong>Hitung Nilai Aset Otomatis:</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang. Sistem akan menghitung akumulasi harga beli/modal sehingga Anda tahu persis berapa total aset bisnis Anda.</li><li><strong>Search & Filter Instan:</strong> Fitur pencarian kami sangat cepat untuk menemukan barang tanpa perlu scroll.</li></ol>`
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
        content: `<ul><li><strong>Entrées et Sorties :</strong> Mettez à jour vos stocks d'un simple clic sans ressaisie.</li><li><strong>Alertas de Rupture :</strong> Soyez prévenu visuellement quand le stock est critique.</li><li><strong>Valorisation des Actifs :</strong> Calculez automatiquement la valeur totale de vos marchandises.</li><li><strong>Recherche Rapide :</strong> Filtrez vos centaines d'articles en un clin d'œil.</li></ul>`
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
      }
    ]
  },
  de: {
    title: `Online-Budgetplaner: Nullbasierte Budgetierung`,
    sections: [
      {
        title: `Wo ist das Geld hin?`,
        content: `<p>Haben Sie das Gefühl, dass Ihr Gehalt nur ein „Durchlaufposten“ ist? Am 25. kommt das Geld, am 10. ist es weg. Das Problem ist oft nicht die Höhe des Gehalts, sondern die fehlende Planung.</p><p>Mit der <strong>Zero-Based Budgeting (ZBB)</strong> Methode von VersoKit geben Sie jedem Cent eine Aufgabe, bevor er ausgegeben wird. Verwandeln Sie reaktives Verfolgen in proaktive Kontrolle.</p>`
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
      }
    ]
  },
  it: {
    title: `Pianificatore di Budget: Budget a Base Zero`,
    sections: [
      {
        title: `Pianifica Ogni Centesimo`,
        content: `<p>Hai l'impressione che il tuo stipendio sia solo di "passaggio"? La filosofia del <strong>Budget a Base Zero</strong> ti permette di avere il controllo totale. Ogni euro guadagnato deve avere un compito preciso prima bahwa il mese inizi.</p>`
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
      }
    ]
  },
  en: {
    title: `Football Lineup Builder: Create & Download Team Formations`,
    sections: [
      {
        title: `Visualize Your Strategy`,
        content: `<p>Our <strong>Football Lineup Builder</strong> transforms your tactical ideas into professional graphics. Perfect for social media admins, coaches, and fans who want to share their Starting XI with style.</p>`
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
  es: {
    title: `Creador de Alineaciones: Crea y Descarga Formaciones de Fútbol`,
    sections: [
      {
        title: `Visualiza tu Estrategia`,
        content: `<p>Convierte tus ideas tácticas en gráficos profesionales. Ideal para redes sociales y entrenadores que buscan compartir su 11 inicial con un diseño limpio y moderno.</p>`
      }
    ]
  },
  pt: {
    title: `Montar Time de Futebol: Criar Escalação e Baixar Imagem`,
    sections: [
      {
        title: `Visualize sua Estratégia`,
        content: `<p>Crie escalações profissionais para o seu time. Arraste os jogadores, escolha as cores e baixe a imagem em alta definição para compartilhar no WhatsApp ou Instagram.</p>`
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
      }
    ]
  },
  en: {
    title: `Tournament Manager Pro: League Standings & Schedule`,
    sections: [
      {
        title: `Professional Event Management`,
        content: `<p>Organize Futsal, E-Sports, or community tournaments with ease. Our <strong>Tournament Manager</strong> handles the math and logic so you can focus on the action.</p>`
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
        content: `<p>Organize campeonatos com facilidade. Suporte para sistemas de liga com atualização automática da tabela de pontos e saldo de gols.</p>`
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
        content: `<p>Pernahkah Anda bermain bulu tangkis atau voli di GOR, tapi wasitnya sering lupa skor saat ini berapa? Solusinya adalah <strong>Universal Scoreboard</strong> dari VersoKit.</p>`
      }
    ]
  },
  en: {
    title: `Universal Scoreboard: Digital Points for Badminton & Volleyball`,
    sections: [
      {
        title: `The Swiss Army Knife of Scoreboards`,
        content: `<p>Perfect for any point-based sport. Our <strong>Universal Scoreboard</strong> supports set tracking and rally point systems used in social matches.</p>`
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
  es: {
    title: `Marcador Universal: Puntos para Bádminton y Voleibol`,
    sections: [
      {
        title: `Versatilidad Deportiva`,
        content: `<p>Un marcador digital diseñado para cualquier deporte basado en puntos y sets. Ideal para torneos locales y partidos amistosos donde la precisión es clave.</p>`
      }
    ]
  },
  pt: {
    title: `Placar Universal: Pontuação Digital para Badminton e Vôlei`,
    sections: [
      {
        title: `Versatilidade Esportiva`,
        content: `<p>Um placar digital versátil para qualquer esporte baseado em pontos e sets. Perfeito para competições de Badminton, Vôlei e Tênis de Mesa.</p>`
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
        content: `<p>Un tabellone digitale versatile per ogni sport basato su punti e set. Perfetto per Badminton, Pallavolo e Tennis da Tavolo.</p>`
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
        title: `Pusing Mengatur Jadwal Shift Karyawan?`,
        content: `<p>Pusing mengatur jadwal kerja karyawan setiap minggu? Masih pakai tulis tangan di papan pengumuman atau rumus Excel yang ribet?</p><p>Hati-hati, manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis Anda. Mulai dari drama di grup WhatsApp karena salah ketik, karyawan yang protes karena jam kerja tidak adil, hingga toko yang kosong karena ada shift yang terlewat tanpa petugas.</p><p>Hentikan kebingungan tersebut sekarang juga. Gunakan <strong>Shift Scheduler</strong> dari VersoKit—asisten pribadi digital Anda untuk membuat roster kerja yang rapi, profesional, dan adil.</p>`
      },
      {
        title: `Kenapa Harus Pindah dari Excel ke Shift Scheduler?`,
        content: `<p>Banyak manajer menggunakan Excel, namun file Excel seringkali tidak mobile-friendly. Karyawan harus melakukan zoom in/out berkali-kali di HP mereka hanya untuk melihat giliran kerja.</p><p>VersoKit Shift Scheduler hadir dengan keunggulan yang tidak dimiliki Excel tradisional:</p><ul><li><strong>Visual Roster Builder (Intuitif & Berwarna):</strong> Tampilan tabel grid kami sangat sederhana. Anda bisa menggunakan kode warna untuk membedakan shift (Misal: Pagi = Kuning, Malam = Gelap, OFF = Merah). Sekali lirik, semua orang langsung paham pola kerjanya.</li><li><strong>Fitur "WhatsApp Mode" (Killer Feature!):</strong> Cukup satu klik "Copy to Clipboard", dan sistem akan mengubah tabel jadwal menjadi teks rapi yang siap di-Paste ke grup WA tim Anda.</li><li><strong>Workload Calculator (Pembagian Adil):</strong> Alat ini memantau total hari masuk setiap karyawan secara otomatis untuk pembagian beban kerja yang lebih transparan.</li></ul>`
      }
    ]
  },
  en: {
    title: `Free Shift Schedule App: Manage rosters & Share to WhatsApp`,
    sections: [
      {
        title: `Headache with Employee Schedules?`,
        content: `<p>Tired of managing employee shifts every week using whiteboards or messy Excel files?</p><p>Poor schedule management can be fatal for your business. From WhatsApp group drama due to typos to empty stores because of missed shifts, it's time for a professional solution. Use <strong>Shift Scheduler</strong> from VersoKit—your personal digital assistant for clean and fair rosters.</p>`
      },
      {
        title: `Why Switch from Excel?`,
        content: `<p>Excel is not mobile-friendly. Employees have to zoom in and out constantly just to see their shift. VersoKit offers unique advantages:</p><ul><li><strong>Visual Roster Builder:</strong> Intuitive and color-coded (e.g., Morning = Yellow, OFF = Red). One glance is all it takes to understand the work pattern.</li><li><strong>WhatsApp Mode (Killer Feature!):</strong> No more manual typing. One click "Copy to Clipboard" transforms the grid into a neat text message ready for your group chat.</li><li><strong>Workload Calculator:</strong> Automatically tracks total workdays for each staff member to ensure fair distribution.</li></ul>`
      }
    ]
  },
  de: {
    title: `Kostenlose Schichtplan-App: Dienstpläne erstellen & teilen`,
    sections: [
      {
        title: `Herausforderung bei der Personalplanung?`,
        content: `<p>Haben Sie es satt, Schichtpläne mühsam in Excel oder auf Papier zu erstellen? Der <strong>VersoKit Schichtplaner</strong> ist Ihr digitaler Assistent für saubere und faire Dienstpläne.</p><ul><li><strong>Visueller Planer:</strong> Nutzen Sie Farbcodes für maximale Übersichtlichkeit auf dem Smartphone.</li><li><strong>WhatsApp-Modus:</strong> Kopieren Sie den Plan als formatierten Text direkt in Ihre Team-Gruppe.</li><li><strong>Gerechte Verteilung:</strong> Behalten Sie die Arbeitstage jedes Mitarbeiters automatisch im Blick.</li></ul>`
      }
    ]
  },
  es: {
    title: `App de Horarios de Turnos Gratis: Crea Rosters y Comparte en WA`,
    sections: [
      {
        title: `¿Problemas con los Turnos del Personal?`,
        content: `<p>Deja de usar Excel o papel para gestionar a tu equipo. Con <strong>VersoKit Shift Scheduler</strong>, creas cuadrantes de trabajo profesionales en minutos.</p><ul><li><strong>Creador Visual:</strong> Usa códigos de colores intuitivos para mañana, tarde y noche.</li><li><strong>Modo WhatsApp:</strong> Copia la tabla como texto limpio listo para pegar en el grupo de chat.</li><li><strong>Distribución Justa:</strong> Calcula automáticamente los días trabajados por cada empleado.</li></ul>`
      }
    ]
  },
  pt: {
    title: `Gerador de Escala de Trabalho Grátis: Organize e Partilhe no WA`,
    sections: [
      {
        title: `Dificuldade em gerir os turnos da equipa?`,
        content: `<p>Abandone as folhas de cálculo confusas. O <strong>VersoKit Shift Scheduler</strong> é o seu assistente digital para criar escalas de trabalho organizadas e transparentes.</p><ul><li><strong>Construtor Visual:</strong> Diferencie os turnos por cores para facilitar a leitura no telemóvel.</li><li><strong>Modo WhatsApp:</strong> Transforme a grelha em texto formatado para o grupo da equipa com um clique.</li><li><strong>Cálculo de Carga:</strong> Garanta que o trabalho é distribuído de forma justa entre todos.</li></ul>`
      }
    ]
  },
  fr: {
    title: `Planning d'Équipe Gratuit : Gérer les Shifts et Partager sur WA`,
    sections: [
      {
        title: `Besoin d'un planning clair pour vos employés ?`,
        content: `<p>Finis les fichiers Excel illisibles sur mobile. Utilisez le <strong>Shift Scheduler</strong> de VersoKit pour une gestion simplifiée et professionnelle.</p><ul><li><strong>Planning Visuel :</strong> Codez vos shifts par couleur pour une lecture instantanée.</li><li><strong>Mode WhatsApp :</strong> Copiez le planning en format texte optimisé pour vos groupes de discussion.</li><li><strong>Équité de Charge :</strong> Surveillez automatiquement le nombre de jours travaillés par chacun.</li></ul>`
      }
    ]
  },
  it: {
    title: `Pianificatore Turni Gratis: Crea il Roster e Condividi su WA`,
    sections: [
      {
        title: `Basta confusione con i turni di lavoro`,
        content: `<p>Gestire il personale non è mai stato così semplice. Con <strong>VersoKit Shift Scheduler</strong>, crei calendari settimanali chiari e accessibili da smartphone.</p><ul><li><strong>Layout Visivo:</strong> Usa i colori per distinguere i turni (es. Mattina, Notte, Riposo).</li><li><strong>Modalità WhatsApp:</strong> Copia la tabella come testo pronto da incollare nella chat di gruppo.</li><li><strong>Carico di Lavoro:</strong> Monitora automaticamente i giorni di presenza per ogni dipendente.</li></ul>`
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
        content: `<p>Masih mengirim tagihan lewat chat WhatsApp atau Excel yang berantakan? <strong>Free Invoice Generator</strong> dari VersoKit adalah solusi instan untuk faktur PDF standar industri.</p>`
      }
    ]
  },
  en: {
    title: `Free Invoice Generator: Create Professional PDF Invoices`,
    sections: [
      {
        title: `Impress Your Clients`,
        content: `<p>Send polished, professional invoices that demand attention. Our <strong>Invoice Generator</strong> is the fastest way for small businesses to bill clients instantly.</p>`
      }
    ]
  },
  de: {
    title: `Rechnungsgenerator Kostenlos: Professionelle PDF-Rechnungen`,
    sections: [
      {
        title: `Überzeugen Sie Ihre Kunden`,
        content: `<p>Erstellen Sie saubere und professionelle Rechnungen in Minuten. Die schnellste Lösung für Kleinunternehmer ohne teure Software-Abos.</p>`
      }
    ]
  },
  es: {
    title: `Generador de Facturas Gratis: Crea Invoices en PDF`,
    sections: [
      {
        title: `Impresiona a tus Clientes`,
        content: `<p>Crea facturas profesionales en segundos. Ideal para freelancers y PYMES que buscan una imagen corporativa limpia y segura.</p>`
      }
    ]
  },
  pt: {
    title: `Gerador de Faturas Grátis: Criar Invoice em PDF Profissional`,
    sections: [
      {
        title: `Impressione seus Clientes`,
        content: `<p>Envie faturas elegantes e profissionais. A forma mais rápida para pequenos negócios cobrarem clientes sem software caro.</p>`
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
        content: `<p>Crea fatture professionali ed eleganti in pochi secondi. Perfetto per freelance e piccole imprese yang non vogliono complicazioni.</p>`
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
        content: `<p>Atur turnamen sosial Anda dengan rotasi partner otomatis. Americano adalah format di mana setiap pemain akan berganti pasangan di setiap babak.</p>`
      }
    ]
  },
  en: {
    title: `Americano Schedule Generator: Padel & Pickleball`,
    sections: [
      {
        title: `Fair Partner Rotation`,
        content: `<p>Automated partner rotation for your social sports sessions. Ensure every player pairs with everyone else fairly.</p>`
      }
    ]
  },
  de: {
    title: `Americano-Turnier-Generator: Padel & Pickleball`,
    sections: [
      {
        title: `Faire Partner-Rotation`,
        content: `<p>Organisieren Sie Ihre Padel-Runden mit automatischer Partner-Rotation. Jeder spielt mit jedem für ein faires Spielerlebnis.</p>`
      }
    ]
  },
  es: {
    title: `Generador de Torneos Americano: Pádel y Pickleball`,
    sections: [
      {
        title: `Rotación Justa de Compañeros`,
        content: `<p>Organiza tus sesiones de pádel con rotaciones automáticas. Todos juegan con todos y el sistema gestiona la clasificación individual.</p>`
      }
    ]
  },
  pt: {
    title: `Gerador de Torneio Americano: Padel e Pickleball`,
    sections: [
      {
        title: `Rotação Justa de Parceiros`,
        content: `<p>Organize suas partidas de padel com rotação automática. Garanta que todos joguem com parceiros diferentes e acompanhe o ranking.</p>`
      }
    ]
  },
  fr: {
    title: `Générateur de Tournoi Americano : Padel et Pickleball`,
    sections: [
      {
        title: `Rotation Équitable des Partenaires`,
        content: `<p>Organisez vos sessions de padel avec des rotations automatiques. Tout le monde joue avec tout le monde et le classement est géré en temps réel.</p>`
      }
    ]
  },
  it: {
    title: `Generatore Torneo Americano: Padel e Pickleball`,
    sections: [
      {
        title: `Rotazione Equa dei Partner`,
        content: `<p>Organizza i tuoi tornei di padel con rotazioni automatiche. Ogni giocatore cambia partner ad ogni turno per una competizione equilibrata.</p>`
      }
    ]
  }
};

// --- 9. FUTSAL CONTENT ---
const FUTSAL_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Papan Skor Futsal Digital Online: Ubah Lapangan Anda Jadi Arena Profesional`,
    sections: [
      {
        title: `Akhiri Debat Skor di Lapangan`,
        content: `<p>Dalam pertandingan futsal tensi tinggi, transparansi skor dan waktu adalah segalanya. <strong>VersoKit Futsal Scoreboard</strong> hadir sebagai solusi cerdas untuk sparring dan liga.</p>`
      },
      {
        title: `Fitur Unggulan`,
        content: `<ul><li><strong>Foul Counter:</strong> Pantau pelanggaran kumulatif tim secara akurat.</li><li><strong>Timer Fleksibel:</strong> Atur durasi babak sesuai kebutuhan liga Anda.</li><li><strong>TV Fullscreen Mode:</strong> Tampilan bersih tajam di TV besar lapangan.</li></ul>`
      }
    ]
  },
  en: {
    title: `Online Digital Futsal Scoreboard: Professional Arena Quality`,
    sections: [
      {
        title: `Stop the Score Debates`,
        content: `<p>Transparency is everything in high-tension matches. <strong>VersoKit Futsal Scoreboard</strong> transforms your ordinary pitch into a professional arena.</p>`
      },
      {
        title: `Pro Features`,
        content: `<ul><li><strong>Foul Tracking:</strong> Cumulative fouls with visual alerts.</li><li><strong>Flexible Timer:</strong> Customizable period durations.</li><li><strong>Broadcast Ready:</strong> Clean fullscreen UI for stadium displays.</li></ul>`
      }
    ]
  },
  de: {
    title: `Online-Anzeigetafel für Futsal: Profi-Qualität`,
    sections: [
      {
        title: `Schluss mit Diskussionen`,
        content: `<p>Die <strong>VersoKit Futsal-Anzeigetafel</strong> verwandelt Ihren Platz mit nur einem Laptop in eine Profi-Arena für Sparring und Ligen.</p>`
      }
    ]
  },
  es: {
    title: `Marcador Digital de Fútbol Sala: Calidad Profesional`,
    sections: [
      {
        title: `Termina con las Discusiones`,
        content: `<p>La transparencia es clave en los partidos de alta tensión. El <strong>Marcador VersoKit</strong> transforma tu campo en un estadio profesional.</p>`
      }
    ]
  },
  pt: {
    title: `Placar Digital Online para Futsal: Qualidade Profissional`,
    sections: [
      {
        title: `Fim das Discussões sobre o Placar`,
        content: `<p>O <strong>VersoKit Futsal Scoreboard</strong> transforma sua quadra comum em uma arena profissional, pronta para transmissões e torneios.</p>`
      }
    ]
  },
  fr: {
    title: `Tableau de Score Futsal en Ligne : Qualité Professionnelle`,
    sections: [
      {
        title: `Finis les Débats sur le Score`,
        content: `<p>Le <strong>Tableau de Score VersoKit</strong> transforme votre terrain en arène pro pour vos matchs amicaux et championnats.</p>`
      }
    ]
  },
  it: {
    title: `Tabellone Digitale Futsal Online: Qualità Professionale`,
    sections: [
      {
        title: `Basta Discussioni sul Punteggio`,
        content: `<p>Il <strong>Tabellone VersoKit</strong> trasforma il tuo campo in un'arena professionale per ogni sfida e torneo.</p>`
      }
    ]
  }
};

// --- 10. TENNIS CONTENT ---
const TENNIS_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Generator Jadwal Tenis Ganda: Matchmaking Berdasarkan Skill`,
    sections: [{ title: `Main Tenis Makin Seru`, content: `<p>Buat jadwal ganda yang adil dengan penyeimbang skill dan durasi main yang merata.</p>` }]
  },
  en: {
    title: `Tennis Match Generator: Fair Double Schedules`,
    sections: [{ title: `Skill-Based Matchmaking`, content: `<p>Generate balanced tennis double matches based on skill levels and equal court time.</p>` }]
  },
  de: {
    title: `Tennis-Match-Generator: Faire Doppel-Spielpläne`,
    sections: [{ title: `Fähigkeitsbasiertes Matchmaking`, content: `<p>Erstellen Sie ausgeglichene Tennis-Doppelspiele basierend auf Spielstärke und Spielzeit.</p>` }]
  },
  es: {
    title: `Generador de Partidos de Tenis: Horarios de Dobles Justos`,
    sections: [{ title: `Emparejamiento por Nivel`, content: `<p>Genera partidos de dobles equilibrados basados en la habilidad y el tiempo de juego.</p>` }]
  },
  pt: {
    title: `Gerador de Partidas de Tênis: Tabelas de Duplas Justas`,
    sections: [{ title: `Matchmaking por Nível`, content: `<p>Crie jogos de duplas equilibrados com base no nível técnico e tempo de quadra igualitário.</p>` }]
  },
  fr: {
    title: `Générateur de Matchs de Tennis : Plannings de Doubles Équitables`,
    sections: [{ title: `Équilibrage par Niveau`, content: `<p>Générez des matchs de doubles équilibrés en fonction du niveau et du temps de jeu.</p>` }]
  },
  it: {
    title: `Generatore Partite Tennis: Programmi di Doppio Equi`,
    sections: [{ title: `Matchmaking per Abilità`, content: `<p>Crea partite di doppio bilanciate basate sul livello tecnico e la parità di tempo in campo.</p>` }]
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
  tennis: TENNIS_CONTENT,
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
