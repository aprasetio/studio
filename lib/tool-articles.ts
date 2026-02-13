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
        content: `<ol><li><strong>Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual. Saldo stok akan ter-update secara otomatis saat itu juga.</li><li><strong>Low Stock Alerts:</strong> Alat ini dilengkapi indikator visual (warna merah) yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan. Waktunya belanja stok lagi sebelum habis!</li><li><strong>Hitung Nilai Aset Otomatis:</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang. Sistem akan menghitung akumulasi harga beli/modal sehingga Anda tahu persis berapa total aset bisnis Anda.</li><li><strong>Search & Filter Instan:</strong> Punya ratusan jenis barang? Jangan khawatir. Fitur pencarian kami sangat cepat. Cukup ketik nama barang, dan data akan muncul seketika tanpa perlu scroll satu per satu.</li></ol>`
      },
      {
        title: `Kenapa Harus Menggunakan VersoKit?`,
        content: `<ul><li><strong>🛡️ 100% Offline & Private:</strong> Data stok, harga modal, dan nama supplier Anda tidak pernah dikirim ke internet. Semuanya tersimpan aman di browser Anda.</li><li><strong>💰 Gratis Selamanya:</strong> Tanpa biaya langganan bulanan. Solusi hemat untuk UMKM yang ingin naik kelas.</li><li><strong>📊 Export ke Excel:</strong> Butuh data untuk laporan pajak atau audit tahunan? Anda bisa menarik semua data ke format Excel (CSV) atau JSON dengan satu klik.</li></ul>`
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
        content: `<ul><li><strong>"Lost Items":</strong> Stock on shelves and records often differ because of forgetting to record transactions in real-time.</li><li><strong>Idle Capital:</strong> You keep buying items that still have plenty of stock, keeping your capital stationary.</li><li><strong>Losing Customers:</strong> Turning away customers because you didn't know the stock was out is painful.</li><li><strong>Asset Stress:</strong> Manually calculating the total value of capital on store shelves is exhausting.</li></ul>`
      },
      {
        title: `Key Features`,
        content: `<ul><li><strong>Stock In & Out (One Click):</strong> Manage inventory movements instantly without re-typing.</li><li><strong>Low Stock Alerts:</strong> A visual indicator lights up when items fall below your minimum limit.</li><li><strong>Automatic Asset Valuation:</strong> See the total value of your warehouse inventory in real-time.</li><li><strong>Instant Search:</strong> Find any item in seconds with our high-speed filter.</li></ul>`
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
        title: `Problemas clásicos de las PYMES`,
        content: `<ul><li><strong>"Artículos perdidos":</strong> El stock en los estantes y en los registros suele diferir por no registrar transacciones en tiempo real.</li><li><strong>Dinero muerto:</strong> Sigues comprando artículos que ya tienes, dejando tu capital inactivo.</li><li><strong>Pérdida de clientes:</strong> Rechazar a un cliente porque no tienes existencias es frustrante.</li><li><strong>Cálculo de activos:</strong> Calcular manualmente el valor total del inventario es propenso a errores.</li></ul>`
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
        title: `Problemas clássicos de gestão`,
        content: `<ul><li><strong>"Itens perdidos":</strong> O estoque físico e os registros costumam divergir por falta de atualização em tempo real.</li><li><strong>Capital parado:</strong> Comprar itens em excesso deixa seu dinheiro imobilizado sem gerar lucro.</li><li><strong>Perda de clientes:</strong> Não há nada pior do que recusar uma venda por não saber que o estoque acabou.</li><li><strong>Cálculo de ativos:</strong> Calcular manualmente o valor total do estoque é exaustivo e sujeito a erros.</li></ul>`
      },
      {
        title: `Recursos Principais`,
        content: `<ul><li><strong>Entradas e Saídas:</strong> Atualize seu estoque instantaneamente com um clique.</li><li><strong>Alertas de Baixo Estoque:</strong> Saiba exatamente quando comprar novos produtos.</li><li><strong>Exportação para Excel:</strong> Baixe seus dados em CSV ou JSON com facilidade.</li><li><strong>Segurança Local:</strong> Seus dados de estoque nunca saem do seu dispositivo.</li></ul>`
      }
    ]
  },
  de: {
    title: `Einfache Lagerverwaltungs-App: Kostenloses Inventar für KMU`,
    sections: [
      {
        title: `Müde vom manuellen Zählen?`,
        content: `<p>Haben Sie es satt, jeden Abend den Lagerbestand in ein Notizheft zu schreiben? Bestandsverwaltung ist das Herzstück jedes Handelsgeschäfts. <strong>Simple Inventory Manager</strong> von VersoKit ist die Lösung für KMU.</p>`
      },
      {
        title: `Klassische Probleme im Lager`,
        content: `<ul><li><strong>"Verlorene Artikel":</strong> Physischer Bestand und Aufzeichnungen weichen oft ab, weil Transaktionen nicht in Echtzeit erfasst werden.</li><li><strong>Totes Kapital:</strong> Sie kaufen Artikel nach, die noch vorrätig sind, und binden so unnötig Kapital.</li><li><strong>Kundenverlust:</strong> Kunden wegzuschicken, weil man den Lagerstand nicht kannte, ist ärgerlich.</li><li><strong>Bewertungsstress:</strong> Den Gesamtwert des Inventars manuell zu berechnen, ist fehleranfällig.</li></ul>`
      },
      {
        title: `Hauptmerkmale`,
        content: `<ul><li><strong>Wareneingang & Warenausgang:</strong> Aktualisieren Sie Ihren Bestand mit einem Klick.</li><li><strong>Warnungen bei niedrigem Bestand:</strong> Visuelle Hinweise zeigen Ihnen sofort, wenn Artikel nachbestellt werden müssen.</li><li><strong>Automatische Bewertung:</strong> Berechnen Sie den Gesamtwert Ihres Lagers automatisch.</li><li><strong>Sofortige Suche:</strong> Finden Sie jeden Artikel in Sekunden mit unserem schnellen Filter.</li></ul>`
      }
    ]
  },
  fr: {
    title: `Application de gestion des stocks simplifiée : Gérer l'inventaire des PME Gratuitement`,
    sections: [
      {
        title: `Fatigué du comptage manuel ?`,
        content: `<p>Ne perdez plus de temps avec des registres papier. Le <strong>Simple Inventory Manager</strong> de VersoKit est conçu pour les petites entreprises qui veulent une gestion moderne et gratuite.</p>`
      },
      {
        title: `Problèmes classiques de gestion`,
        content: `<ul><li><strong>"Articles perdus" :</strong> Le stock réel et théorique diffèrent souvent par manque de saisie en temps réel.</li><li><strong>Argent immobilisé :</strong> Acheter des articles déjà en stock bloque votre capital inutilement.</li><li><strong>Perte de clients :</strong> Refuser une vente par méconnaissance de ses stocks est frustrant.</li><li><strong>Calcul des actifs :</strong> Valoriser son stock manuellement est une tâche pénible et risquée.</li></ul>`
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
        title: `Problemi classici di magazzino`,
        content: `<ul><li><strong>"Articoli smarriti" :</strong> La giacenza reale e quella registrata differiscono spesso per dimenticanze.</li><li><strong>Capitale bloccato :</strong> Continuare ad acquistare merce già presente immobilizza i tuoi fondi.</li><li><strong>Perdita di clienti :</strong> Mandare via un cliente perché non sapevi di aver finito lo stock è un danno evitabile.</li><li><strong>Calcolo risorse :</strong> Calcolare manualmente il valore del magazzino è faticoso e impreciso.</li></ul>`
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
  de: {
    title: `Online-Budgetplaner: Nullbasierte Budgetierung`,
    sections: [
      {
        title: `Wo ist das Geld hin?`,
        content: `<p>Haben Sie das Gefühl, dass Ihr Gehalt nur ein „Durchlaufposten“ ist? Am 25. kommt das Geld, am 10. ist es weg. Das Problem ist oft nicht die Höhe des Gehalts, sondern die fehlende Planung.</p><p>Mit der <strong>Zero-Based Budgeting (ZBB)</strong> Methode von VersoKit geben Sie jedem Cent eine Aufgabe, bevor er ausgegeben wird. Verwandeln Sie reaktives Verfolgen in proaktive Kontrolle.</p>`
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
  }
};

// --- 4. TOURNAMENT MANAGER CONTENT ---
const TOURNAMENT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Tournament Manager Pro: Buat Bagan & Klasemen Liga Otomatis`,
    sections: [
      {
        title: `Solusi Panitia Anti-Ribet`,
        content: `<p>Mengelola turnamen Futsal, E-Sports, atau lomba kampung kini lebih mudah. Gunakan <strong>Tournament Manager Pro</strong> dari VersoKit untuk membuat jadwal pertandingan dalam hitungan detik.</p>`
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
  }
};

// --- 6. SHIFT SCHEDULER CONTENT ---
const SHIFT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA`,
    sections: [
      {
        title: `Pusing Mengatur Jadwal Shift Karyawan?`,
        content: `<p>Pusing mengatur jadwal kerja karyawan setiap minggu? Masih pakai tulis tangan di papan pengumuman atau rumus Excel yang ribet? Hentikan kebingungan tersebut sekarang juga. Gunakan <strong>Shift Scheduler</strong> dari VersoKit—asisten pribadi digital Anda.</p>`
      },
      {
        title: `Fitur "WhatsApp Mode" (Killer Feature!)`,
        content: `<p>Ini adalah penyelamat bagi para manajer. Anda tidak perlu lagi mengetik ulang jadwal panjang di chat WhatsApp. Cukup satu klik <strong>Copy to Clipboard</strong>, dan sistem akan mengubah tabel jadwal menjadi teks rapi siap paste.</p>`
      }
    ]
  },
  en: {
    title: `Free Shift Roster App: Manage Employee Schedules & Share to WhatsApp`,
    sections: [
      {
        title: `Streamline Your Team Rosters`,
        content: `<p>Stop the scheduling drama. Our <strong>Shift Scheduler</strong> is designed for Retail, F&B, and Security teams to build clear weekly rosters in under a minute.</p>`
      },
      {
        title: `WhatsApp Mode Feature`,
        content: `<p>The ultimate time-saver! Convert your complex schedule grid into a neatly formatted text message for your team groups with a single click.</p>`
      }
    ]
  },
  es: {
    title: `Planificador de Turnos Gratis: Crea Rosters y Comparte en WhatsApp`,
    sections: [
      {
        title: `Gestión de Personal Sin Esfuerzo`,
        content: `<p>Organiza los turnos de tu equipo en minutos. Diseñado para restaurantes, tiendas y seguridad con una interfaz visual intuitiva y descarga de imagen.</p>`
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
        title: `Modo WhatsApp`,
        content: `<p>Converta a tabela em texto organizado para o grupo da equipa com um clique. Prático, rápido e profissional.</p>`
      }
    ]
  },
  de: {
    title: `Schichtplaner Kostenlos: Dienstpläne Erstellen & Teilen`,
    sections: [
      {
        title: `Mühelose Personalverwaltung`,
        content: `<p>Erstellen Sie wöchentliche Schichtpläne für Ihr Team. Ideal für Gastronomie und Einzelhandel mit praktischer WhatsApp-Exportfunktion.</p>`
      }
    ]
  },
  fr: {
    title: `Planning d'Équipe Gratuit : Gérer les Shifts et Partager sur WhatsApp`,
    sections: [
      {
        title: `Gestion du Personnel Simplifiée`,
        content: `<p>Organisez les horaires de votre équipe en quelques clics. Idéal pour la restauration et le commerce de détail avec un export texte optimisé pour mobile.</p>`
      }
    ]
  },
  it: {
    title: `Pianificatore Turni Gratis: Crea il Roster e Condividi su WhatsApp`,
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
  de: {
    title: `Rechnungsgenerator Kostenlos: Professionelle PDF-Rechnungen`,
    sections: [
      {
        title: `Überzeugen Sie Ihre Kunden`,
        content: `<p>Erstellen Sie saubere und professionelle Rechnungen in Minuten. Die schnellste Lösung für Kleinunternehmer ohne teure Software-Abos.</p>`
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
        content: `<ul><li><strong>Foul Tracking:</strong> Kumulative fouls with visual alerts.</li><li><strong>Flexible Timer:</strong> Customizable period durations.</li><li><strong>Broadcast Ready:</strong> Clean fullscreen UI for stadium displays.</li></ul>`
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
  de: {
    title: `Online-Anzeigetafel für Futsal: Profi-Qualität`,
    sections: [
      {
        title: `Schluss mit Diskussionen`,
        content: `<p>Die <strong>VersoKit Futsal-Anzeigetafel</strong> verwandelt Ihren Platz mit nur einem Laptop in eine Profi-Arena für Sparring und Ligen.</p>`
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
