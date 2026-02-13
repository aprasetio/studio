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
        content: `<ol><li><strong>Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual. Saldo stok akan ter-update secara otomatis saat itu juga.</li><li><strong>Low Stock Alerts (Peringatan Stok Tipis):</strong> Jangan biarkan stok Anda kosong melompong. Alat ini dilengkapi indikator visual (warna merah) yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan. Waktunya belanja stok lagi sebelum habis!</li><li><strong>Hitung Nilai Aset Otomatis (Valuation):</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang. Sistem akan menghitung akumulasi harga beli/modal sehingga Anda tahu persis berapa total aset bisnis Anda.</li><li><strong>Search & Filter Instan:</strong> Punya ratusan jenis barang? Jangan khawatir. Fitur pencarian kami sangat cepat. Cukup ketik nama barang, dan data akan muncul seketika tanpa perlu scroll satu per satu.</li></ol>`
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
        content: `<p>Pernahkah Anda merasa gaji "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan, saldo rekening sudah menipis dan Anda bingung: "Uangku habis buat apa saja, ya?" Masalah utamanya seringkali bukan pada besarnya gaji Anda, melainkan pada cara Anda memperlakukan uang tersebut. Banyak orang terjebak menggunakan aplikasi Expense Tracker. Masalahnya, mencatat pengeluaran itu sifatnya penyesalan. Anda hanya mencatat sejarah: "Yah, uangku habis 500 ribu buat kopi." Sudah saatnya berubah. Perkenalkan VersoKit Budget Planner. Ini bukan sekadar pencatat, ini adalah alat Perencana Masa Depan berbasis metode Zero-Based Budgeting (ZBB).</p>`
      },
      {
        title: `Apa Itu Zero-Based Budgeting (ZBB)?`,
        content: `<p>Filosofi di balik alat ini sangat sederhana namun powerful: <strong>"Berikan pekerjaan untuk setiap rupiah yang Anda miliki."</strong> Bayangkan metode "Amplop" nenek moyang kita. Jika Anda punya uang tunai Rp 5.000.000 di tangan, Anda akan memasukkannya ke dalam amplop-amplop fisik: Makan, Kost, Tabungan, dan Hiburan. Anda terus membagi uang tersebut sampai uang di tangan Anda sisa NOL (0). Artinya, semua uang sudah punya pos masing-masing. VersoKit Budget Planner mendigitalkan sistem amplop ini.</p>`
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
        content: `<p>Have you ever felt like your salary is just "passing through"? You receive your paycheck on the 25th, but by the 10th of the next month, your account balance is already low. The problem isn't the size of your salary, but how you treat that money. Many people use Expense Trackers, but that's just recording history. It's time for a change with <strong>VersoKit Budget Planner</strong>, a future-planning tool based on the Zero-Based Budgeting (ZBB) method.</p>`
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
        content: `<p>Haben Sie das Gefühl, dass Ihr Gehalt nur ein „Durchlaufposten“ ist? Am 25. kommt das Geld, am 10. ist es weg. Das Problem ist oft nicht die Höhe des Gehalts, sondern die fehlende Planung. Mit der <strong>Zero-Based Budgeting (ZBB)</strong> Methode von VersoKit geben Sie jedem Cent eine Aufgabe, bevor er ausgegeben wird.</p>`
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
    title: `Aplikasi Jadwal Shift Kerja Gratis: Atur Roster Karyawan & Share ke WhatsApp`,
    sections: [
      {
        title: `Pusing Mengatur Jadwal Shift Karyawan?`,
        content: `<p>Pusing mengatur jadwal kerja karyawan setiap minggu? Masih pakai tulis tangan di papan pengumuman atau rumus Excel yang ribet? Hati-hati, manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis Anda. Mulai dari drama di grup WhatsApp karena salah ketik, karyawan yang protes karena jam kerja tidak adil, hingga toko yang kosong karena ada shift yang terlewat.</p><p>Hentikan kebingungan tersebut sekarang juga. Gunakan <strong>Shift Scheduler</strong> dari VersoKit—asisten pribadi digital Anda untuk membuat roster kerja yang rapi, profesional, and adil.</p>`
      },
      {
        title: `Kenapa Harus Pindah dari Excel ke VersoKit?`,
        content: `<p>Banyak manajer menggunakan Excel, namun file Excel seringkali tidak mobile-friendly. Karyawan harus melakukan zoom in/out berkali-kali di HP mereka hanya untuk melihat giliran kerja. VersoKit menawarkan solusi lebih baik:</p><ul><li><strong>Visual Roster Builder (Intuitif):</strong> Tampilan tabel grid kami sangat sederhana. Anda bisa menggunakan kode warna untuk membedakan shift (Misal: Pagi = Kuning, Malam = Gelap, OFF = Merah). Sekali lirik, semua orang langsung paham.</li><li><strong>WhatsApp Mode (Killer Feature!):</strong> Tidak perlu mengetik ulang jadwal panjang. Cukup satu klik "Copy to Clipboard", sistem mengubah tabel menjadi teks rapi yang siap di-Paste ke grup WA tim Anda.</li><li><strong>Workload Calculator (Adil):</strong> Alat ini memantau total hari masuk setiap karyawan secara otomatis. Pastikan pembagian beban kerja transparan dan adil.</li></ul>`
      },
      {
        title: `Masalah Klasik yang Kami Selesaikan`,
        content: `<ul><li><strong>Bentrokan Jadwal:</strong> Tidak ada lagi cerita "satu shift kosong" karena sistem visual kami menunjukkan dengan jelas siapa yang berjaga.</li><li><strong>Excel Berantakan:</strong> Jadwal kami didesain responsif. Jika diunduh sebagai gambar (PNG), tampilannya tetap jernih di layar HP.</li><li><strong>Lupa Giliran:</strong> Dengan format gambar atau teks WhatsApp yang rapi, karyawan bisa menyimpan jadwal di galeri HP mereka.</li></ul>`
      },
      {
        title: `Cara Membuat Jadwal Kerja dalam 1 Menit`,
        content: `<ol><li><strong>Input Nama Karyawan:</strong> Masukkan daftar tim yang aktif minggu ini.</li><li><strong>Tentukan Jenis Shift:</strong> Atur jam kerja (Misal: P=08.00-16.00, S=16.00-24.00).</li><li><strong>Klik Kotak Hari:</strong> Cukup klik pada kotak hari di bawah nama karyawan untuk menentukan shift mereka. Tidak perlu ketik manual!</li><li><strong>Evaluasi & Bagikan:</strong> Cek ringkasan jam kerja agar adil, lalu klik "Copy Text" untuk WhatsApp atau "Download Image".</li></ol>`
      },
      {
        title: `Keamanan Data Terjamin`,
        content: `<p>Kami menghargai privasi bisnis Anda. Data nama karyawan dan rincian jadwal Anda <strong>TIDAK</strong> dikirim ke server kami. Semuanya tersimpan dengan aman di browser (LocalStorage) perangkat Anda. Jadi, data operasional Anda tidak akan bocor ke pihak luar.</p>`
      }
    ]
  },
  en: {
    title: `Free Shift Schedule App: Manage Employee Rosters & Share to WhatsApp`,
    sections: [
      {
        title: `Headache Managing Work Schedules?`,
        content: `<p>Still using handwriting on a bulletin board or complicated Excel formulas? Poor schedule management can have fatal consequences: from drama in WhatsApp groups due to typos, to empty stores because a shift was missed. Use <strong>VersoKit Shift Scheduler</strong>—your personal digital assistant to create neat, professional, and fair work rosters.</p>`
      },
      {
        title: `Why Switch from Excel?`,
        content: `<p>Excel files are often not mobile-friendly, forcing employees to zoom in and out. VersoKit offers advantages that traditional Excel doesn't:</p><ul><li><strong>Visual Roster Builder:</strong> Simple grid layout. Use color coding to differentiate shifts (e.g., Morning = Yellow, Off = Red). With just a glance, everyone understands the pattern.</li><li><strong>WhatsApp Mode (Killer Feature!):</strong> No more retyping long schedules. Just click "Copy to Clipboard," and the system converts the table into neat text for your team's WhatsApp group.</li><li><strong>Workload Calculator:</strong> Automatically monitors total workdays to ensure fair distribution. No more burning out one employee while another is underutilized.</li></ul>`
      },
      {
        title: `Who Needs This Tool?`,
        content: `<ul><li><strong>F&B (Cafe/Restaurant):</strong> Manage barista, waiter, and cook rotations.</li><li><strong>Retail/Stores:</strong> Manage cashier and salesperson schedules.</li><li><strong>Security:</strong> Ensure 24/7 shifts are always staffed.</li><li><strong>Customer Service:</strong> Manage admin teams responding to chats on rotation.</li></ul>`
      },
      {
        title: `How to Create a Schedule in 1 Minute`,
        content: `<ol><li><strong>Enter Names:</strong> Input your active team list.</li><li><strong>Define Shifts:</strong> Set work hours (e.g., M=Morning, E=Evening).</li><li><strong>Click to Assign:</strong> Simply click on the day box to assign a shift. No manual typing!</li><li><strong>Share:</strong> Click "Copy Text" for WhatsApp or "Download Image" for the bulletin board.</li></ol>`
      },
      {
        title: `Data Security Guaranteed`,
        content: `<p>We respect your business privacy. Your employee names and schedule details are <strong>NOT</strong> sent to our servers. Everything is securely stored in your device's browser (LocalStorage).</p>`
      }
    ]
  },
  es: {
    title: `App gratuita de programación de turnos: Gestiona listas y comparte en WhatsApp`,
    sections: [
      {
        title: `¿Te cuesta gestionar los horarios?`,
        content: `<p>¿Sigues usando Excel o papel? Una mala gestión puede causar conflictos y turnos vacíos. <strong>VersoKit Shift Scheduler</strong> es tu asistente digital para crear listas de trabajo ordenadas y justas.</p>`
      },
      {
        title: `¿Por qué dejar Excel?`,
        content: `<ul><li><strong>Creador Visual:</strong> Usa códigos de colores (ej: Mañana = Amarillo, Tarde = Oscuro) para que todos entiendan el patrón de un vistazo.</li><li><strong>Modo WhatsApp:</strong> ¡Función estrella! Convierte la tabla en texto ordenado para pegar en el grupo de WhatsApp con un solo clic.</li><li><strong>Calculadora de Carga:</strong> Monitorea los días trabajados para asegurar una distribución justa y transparente.</li></ul>`
      },
      {
        title: `Cómo crear un horario en 1 minuto`,
        content: `<ol><li><strong>Nombres:</strong> Introduce la lista de empleados.</li><li><strong>Turnos:</strong> Define las horas (ej: M=8:00-16:00).</li><li><strong>Asignar:</strong> Haz clic en los días para asignar turnos rápidamente.</li><li><strong>Compartir:</strong> Usa "Copiar texto" para WhatsApp o descarga la imagen.</li></ol>`
      },
      {
        title: `Privacidad Garantizada`,
        content: `<p>Respetamos tu privacidad. Los datos NO se envían a nuestros servidores; todo se guarda localmente en tu navegador para máxima seguridad.</p>`
      }
    ]
  },
  fr: {
    title: `Application gratuite de gestion des plannings : Partagez sur WhatsApp`,
    sections: [
      {
        title: `Problèmes de Planning ?`,
        content: `<p>Une mauvaise gestion des horaires peut désorganiser votre entreprise. Fini les fichiers Excel illisibles sur mobile. Utilisez <strong>VersoKit Shift Scheduler</strong> pour des plannings clairs et équitables.</p>`
      },
      {
        title: `Pourquoi utiliser VersoKit ?`,
        content: `<ul><li><strong>Planning Visuel :</strong> Utilisez des codes couleurs pour différencier les horaires. En un coup d'œil, tout est clair.</li><li><strong>Mode WhatsApp :</strong> Ne retapez plus les plannings ! Copiez le tableau en format texte optimisé pour WhatsApp en un clic.</li><li><strong>Calculateur de Charge :</strong> Évitez les injustices en surveillant automatiquement le nombre de jours travaillés par chacun.</li></ul>`
      },
      {
        title: `Créer un planning en 1 minute`,
        content: `<ol><li><strong>Noms :</strong> Saisissez les employés.</li><li><strong>Horaires :</strong> Définissez les types de postes.</li><li><strong>Attribuer :</strong> Cliquez sur les cases pour assigner les shifts.</li><li><strong>Partager :</strong> Téléchargez l'image ou copiez le texte pour WhatsApp.</li></ol>`
      },
      {
        title: `Sécurité des Données`,
        content: `<p>Vos données restent privées. Rien n'est envoyé sur nos serveurs ; tout est stocké localement sur votre appareil.</p>`
      }
    ]
  },
  it: {
    title: `App gratuita pianificazione turni: Gestisci e condividi su WhatsApp`,
    sections: [
      {
        title: `Basta confusione con i turni`,
        content: `<p>Gestire gli orari su Excel o carta è obsoleto e rischioso. <strong>VersoKit Shift Scheduler</strong> ti aiuta a creare turni ordinati e professionali, evitando negozi vuoti e lamentele.</p>`
      },
      {
        title: `Vantaggi rispetto a Excel`,
        content: `<ul><li><strong>Layout Visivo:</strong> Usa i colori per distinguere i turni (es. Mattina, Pomeriggio, Riposo). Intuitivo anche da mobile.</li><li><strong>Modalità WhatsApp:</strong> La funzione geniale! Converti la tabella in testo pronto per essere incollato nella chat del gruppo.</li><li><strong>Carico di Lavoro:</strong> Controlla automaticamente i giorni lavorati per garantire una distribuzione equa.</li></ul>`
      },
      {
        title: `Come funziona`,
        content: `<ol><li><strong>Nomi:</strong> Inserisci il team.</li><li><strong>Turni:</strong> Imposta gli orari.</li><li><strong>Assegna:</strong> Clicca sui giorni per riempire il calendario.</li><li><strong>Condividi:</strong> Copia il testo per WhatsApp o scarica l'immagine PNG.</li></ol>`
      },
      {
        title: `Sicurezza Garantita`,
        content: `<p>I tuoi dati sono al sicuro. Non inviamo nulla ai server; tutto rimane salvato nel browser del tuo dispositivo.</p>`
      }
    ]
  },
  pt: {
    title: `Criador de Escalas de Trabalho Grátis: Partilhe no WhatsApp`,
    sections: [
      {
        title: `Dores de cabeça com escalas?`,
        content: `<p>Uma má gestão de escalas pode ser fatal. Abandone o Excel e use o <strong>VersoKit Shift Scheduler</strong> para criar escalas organizadas e justas em minutos.</p>`
      },
      {
        title: `Por que usar o VersoKit?`,
        content: `<ul><li><strong>Visual Intuitivo:</strong> Use cores para diferenciar turnos. Fácil de entender num piscar de olhos.</li><li><strong>Modo WhatsApp:</strong> Converta a tabela em texto organizado para o grupo da equipa com um clique.</li><li><strong>Distribuição Justa:</strong> A calculadora de carga de trabalho monitoriza os dias para evitar sobrecargas injustas.</li></ul>`
      },
      {
        title: `Como criar em 1 minuto`,
        content: `<ol><li><strong>Funcionários:</strong> Insira os nomes.</li><li><strong>Turnos:</strong> Defina os horários.</li><li><strong>Atribuir:</strong> Clique nos dias para marcar o turno. Sem digitar repetidamente!</li><li><strong>Partilhar:</strong> Copie para o WhatsApp ou baixe a imagem.</li></ol>`
      },
      {
        title: `Privacidade Total`,
        content: `<p>Respeitamos a sua privacidade. Os dados não saem do seu dispositivo, ficando armazenados apenas no seu navegador.</p>`
      }
    ]
  },
  de: {
    title: `Kostenlose Schichtplan-App: Verwalten & per WhatsApp teilen`,
    sections: [
      {
        title: `Schluss mit dem Dienstplan-Chaos`,
        content: `<p>Excel-Tabellen sind auf Handys schwer zu lesen. Der <strong>VersoKit Schichtplaner</strong> ist Ihr digitaler Assistent für übersichtliche und faire Dienstpläne.</p>`
      },
      {
        title: `Warum VersoKit?`,
        content: `<ul><li><strong>Visueller Planer:</strong> Nutzen Sie Farbcodes (z.B. Gelb für Frühschicht), damit jeder den Plan sofort versteht.</li><li><strong>WhatsApp-Modus:</strong> Nie wieder Pläne abtippen! Kopieren Sie den Plan als Text direkt in Ihre WhatsApp-Gruppe.</li><li><strong>Arbeitslastrechner:</strong> Überwacht automatisch die Arbeitstage für eine gerechte Verteilung.</li></ul>`
      },
      {
        title: `Anleitung`,
        content: `<ol><li><strong>Namen:</strong> Mitarbeiter eintragen.</li><li><strong>Schichten:</strong> Zeiten definieren.</li><li><strong>Zuweisen:</strong> Einfach auf die Tage klicken.</li><li><strong>Teilen:</strong> Als Bild herunterladen oder Text für WhatsApp kopieren.</li></ol>`
      },
      {
        title: `Datensicherheit`,
        content: `<p>Ihre Daten bleiben privat. Wir speichern nichts auf Servern; alles bleibt lokal in Ihrem Browser.</p>`
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
        content: `<p>Pernahkah sesi sparring futsal Anda berakhir dengan perdebatan sengit hanya karena lupa skor? Atau pemain terus bertanya "Sisa berapa menit?" karena stopwatch wasit tidak terlihat?</p><p>Dalam pertandingan tensi tinggi, transparansi adalah segalanya. <strong>VersoKit Futsal Scoreboard</strong> hadir sebagai solusi cerdas. Cukup dengan Laptop/Tablet dan kabel HDMI ke TV, ubah lapangan biasa menjadi arena profesional layaknya liga nasional.</p>`
      },
      {
        title: `Masalah Klasik yang Kami Selesaikan`,
        content: `<ul><li><strong>Hakim yang Adil:</strong> Tampilan Timer/Countdown besar mengakhiri debat sisa waktu antara pemain dan wasit.</li><li><strong>Foul Counter:</strong> Jangan lupa aturan futsal! Pelanggaran ke-6 berarti penalti titik kedua. Fitur kami mencatat ini dengan akurat.</li><li><strong>Hemat Jutaan Rupiah:</strong> Tidak perlu beli papan skor fisik mahal. Dapatkan fitur lebih canggih secara Gratis.</li></ul>`
      },
      {
        title: `Fitur Unggulan`,
        content: `<ul><li><strong>Custom Team Name:</strong> Ubah nama "Home" & "Away" jadi nama tim asli.</li><li><strong>Timer Fleksibel:</strong> Atur durasi babak (15, 20, 25 menit) lengkap dengan tombol Pause/Resume.</li><li><strong>Fullscreen Mode TV:</strong> Tampilan bersih tanpa menu browser, tajam di TV besar.</li><li><strong>Period Indicator:</strong> Penanda Babak 1, Babak 2, hingga Extra Time.</li></ul>`
      }
    ]
  },
  en: {
    title: `Online Digital Futsal Scoreboard: Transform Your Pitch into a Professional Arena`,
    sections: [
      {
        title: `Stop the Score Debates`,
        content: `<p>Have your sparring sessions ever ended in arguments because someone forgot the score? Or players constantly asking, "How much time is left, Coach?"</p><p>Transparency is everything in high-tension matches. <strong>VersoKit Futsal Scoreboard</strong> transforms your ordinary pitch into a professional arena using just a laptop and an HDMI connection. Save money on expensive physical scoreboards.</p>`
      },
      {
        title: `Problems We Solve`,
        content: `<ul><li><strong>The Fair Judge:</strong> A large, clear Timer/Countdown display ends all time disputes instantly.</li><li><strong>Foul Counter:</strong> In futsal, the 6th foul means a Second Penalty Point. Our tool tracks this crucial rule strictly.</li><li><strong>Cost-Effective:</strong> Get advanced scoreboard features for free, replacing expensive physical hardware.</li></ul>`
      }
    ]
  },
  es: {
    title: `Marcador Digital de Fútbol Sala Online: Estadio Profesional Gratis`,
    sections: [
      {
        title: `Termina con las Discusiones`,
        content: `<p>¿Tus partidos terminan en discusiones por olvidar el marcador? ¿Los jugadores preguntan constantemente cuánto tiempo queda? La transparencia es clave.</p><p>El <strong>Marcador VersoKit</strong> transforma tu campo en un estadio profesional usando solo un portátil y un cable HDMI. Una solución inteligente y gratuita frente a los costosos marcadores físicos.</p>`
      },
      {
        title: `Características Principales`,
        content: `<ul><li><strong>Nombres Personalizados:</strong> Cambia "Local" y "Visitante" por los nombres reales de los equipos.</li><li><strong>Temporizador Flexible:</strong> Configura la duración (15, 20, 25 min) con control total de pausa.</li><li><strong>Modo Pantalla Completa:</strong> Diseño limpio tipo transmisión de TV, sin menús del navegador.</li></ul>`
      }
    ]
  },
  pt: {
    title: `Placar Digital Online para Futsal: Sua Quadra Virou Arena Profissional`,
    sections: [
      {
        title: `Fim das Discussões sobre o Placar`,
        content: `<p>Seus treinos terminam em brigas porque esqueceram o placar? Os jogadores perguntam "Quanto tempo falta?" o tempo todo?</p><p>O <strong>VersoKit Futsal Scoreboard</strong> resolve isso. Com apenas um laptop e um cabo HDMI, sua quadra comum se transforma em uma arena profissional, pronta para transmissões, sem o custo alto de placares físicos.</p>`
      }
    ]
  },
  de: {
    title: `Online-Anzeigetafel für Futsal: Verwandeln Sie Ihren Platz in eine Profi-Arena`,
    sections: [
      {
        title: `Schluss mit Diskussionen`,
        content: `<p>Enden Ihre Spiele oft in Streitigkeiten über den Spielstand oder die verbleibende Zeit? Transparenz ist entscheidend.</p><p>Die <strong>VersoKit Futsal-Anzeigetafel</strong> verwandelt Ihren Platz mit nur einem Laptop und HDMI-Kabel in eine Profi-Arena. Sparen Sie sich teure physische Anzeigetafeln.</p>`
      }
    ]
  },
  fr: {
    title: `Tableau de Score Futsal en Ligne : Une Arène Professionnelle Gratuite`,
    sections: [
      {
        title: `Finis les Débats sur le Score`,
        content: `<p>Vos matchs finissent-ils en disputes à cause d'un oubli de score ou de temps ? La transparence est primordiale.</p><p>Le <strong>Tableau de Score VersoKit</strong> transforme votre terrain en arène pro avec un simple ordinateur et un câble HDMI. Une solution intelligente et gratuite qui remplace les équipements coûteux.</p>`
      }
    ]
  },
  it: {
    title: `Tabellone Digitale Futsal Online: Trasforma il Campo in Arena Pro`,
    sections: [
      {
        title: `Basta Discussioni sul Punteggio`,
        content: `<p>Le tue partite finiscono in liti per il punteggio dimenticato? I giocatori chiedono sempre "Quanto manca"?</p><p>Il <strong>Tabellone VersoKit</strong> trasforma il tuo campo in un'arena professionale usando solo un PC e un cavo HDMI. Una soluzione smart che sostituisce i costosi tabelloni fisici.</p>`
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
