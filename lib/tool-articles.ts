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

// --- 1. INVENTORY TOOL ---
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
      }
    ]
  },
  en: {
    title: `Simple Inventory App: Manage SME Stock for Free`,
    sections: [
      {
        title: `Tired of Manual Counting?`,
        content: `<p>Stop counting stock every night in a notebook. <strong>Simple Inventory Manager</strong> from VersoKit is the heart of your trading business. Without neat records, small businesses are vulnerable to losses due to missing items, overstocking, or lost buyers. Our tool is the perfect bridge before you need a complex POS system.</p>`
      }
    ]
  },
  de: { title: `Einfache Lagerverwaltung: Kostenloses Inventar für KMU`, sections: [{ title: `Müde vom manuellen Zählen?`, content: `<p>Verwalten Sie Ihren Bestand professionell und kostenlos mit VersoKit.</p>` }] },
  es: { title: `Gestión de Inventario Sencilla: Control de Stock para PYMES`, sections: [{ title: `¿Cansado de contar a mano?`, content: `<p>Controle su inventario de forma rápida, segura y 100% local.</p>` }] },
  pt: { title: `Gestão de Inventário Simples: Controle de Stock para PMEs`, sections: [{ title: `Cansado de contar manualmente?`, content: `<p>Organize seu estoque sem custos mensais e com total privacidade.</p>` }] },
  fr: { title: `Gestion de Stock Simple : Gérer l'inventaire des PME`, sections: [{ title: `Fatigué du comptage manuel ?`, content: `<p>Gérez vos stocks efficacement sans logiciel coûteux.</p>` }] },
  it: { title: `App Gestione Magazzino Semplice: Inventario PMI Gratuito`, sections: [{ title: `Stanco del conteggio manuale?`, content: `<p>Monitora le tue scorte in modo rapido e sicuro sul tuo dispositivo.</p>` }] }
};

// --- 2. BUDGET PLANNER TOOL ---
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
      }
    ]
  },
  en: {
    title: `Budget Planner Online: Zero-Based Budgeting Method`,
    sections: [
      {
        title: `Is Your Salary Just Passing Through?`,
        content: `<p>Stop reactive tracking and start proactive planning. <strong>VersoKit Budget Planner</strong> uses the Zero-Based Budgeting (ZBB) method to give every dollar a job. Reach zero "To be Budgeted" and take control of your financial future.</p>`
      }
    ]
  },
  de: { title: `Online-Budgetplaner: Nullbasierte Budgetierung`, sections: [{ title: `Wo ist das Geld hin?`, content: `<p>Planen Sie Ihre Finanzen mit der bewährten Umschlagmethode im digitalen Format.</p>` }] },
  es: { title: `Planificador de Presupuesto: Método Base Cero`, sections: [{ title: `¿Su Salario es Solo de Paso?`, content: `<p>Asigne un trabajo a cada unidad de su moneda y ahorre más cada mes.</p>` }] },
  pt: { title: `Planejador de Orçamento: Orçamento Base Zero`, sections: [{ title: `O Seu Salário está de Passagem?`, content: `<p>Controle suas finanças dando uma missão a cada real antes do mês começar.</p>` }] },
  fr: { title: `Planificateur de Budget : Méthode Budget Base Zéro`, sections: [{ title: `Maîtrisez vos Finances`, content: `<p>Allouez vos revenus de manière proactive pour épargner davantage.</p>` }] },
  it: { title: `Pianificatore di Budget: Budget a Base Zero`, sections: [{ title: `Pianifica Ogni Centesimo`, content: `<p>Decidi oggi come spenderai i tuoi soldi invece di rimpiangere le spese passate.</p>` }] }
};

// --- 3. FUTSAL SCOREBOARD TOOL ---
const FUTSAL_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Papan Skor Futsal Digital Online: Ubah Lapangan Anda Jadi Arena Profesional`,
    sections: [
      {
        title: `Akhiri Debat Skor di Lapangan`,
        content: `<p>Pernahkah sesi sparring futsal Anda berakhir dengan perdebatan sengit hanya karena lupa skor? Atau pemain terus bertanya "Sisa berapa menit?" karena stopwatch wasit tidak terlihat?</p><p>Dalam pertandingan tensi tinggi, transparansi adalah segalanya. <strong>VersoKit Futsal Scoreboard</strong> hadir sebagai solusi cerdas. Cukup dengan Laptop/Tablet dan kabel HDMI ke TV, ubah lapangan biasa menjadi arena profesional layaknya liga nasional.</p>`
      },
      {
        title: `Fitur Unggulan Wasit Futsal`,
        content: `<ul><li><strong>Foul Counter:</strong> Jangan lupa aturan futsal! Pelanggaran ke-6 berarti penalti titik kedua. Fitur kami mencatat ini dengan akurat.</li><li><strong>Timer Fleksibel:</strong> Atur durasi babak (15, 20, 25 menit) lengkap dengan tombol Pause/Resume.</li><li><strong>Lokal & Offline:</strong> Aplikasi tetap berjalan lancar meski sinyal di dalam gedung olahraga kurang stabil.</li></ul>`
      }
    ]
  },
  en: {
    title: `Online Digital Futsal Scoreboard: Transform Your Pitch into a Pro Arena`,
    sections: [
      {
        title: `Stop the Score Debates`,
        content: `<p>Transparency is everything in high-tension matches. <strong>VersoKit Futsal Scoreboard</strong> transforms your ordinary pitch into a professional arena using just a laptop and an HDMI connection to a TV. Track goals, fouls, and time with FIFA-standard precision.</p>`
      }
    ]
  },
  es: { title: `Marcador Digital de Fútbol Sala Online`, sections: [{ title: `Termina con las Discusiones`, content: `<p>Transforma tu campo en un estadio profesional con nuestro marcador digital gratuito.</p>` }] },
  pt: { title: `Placar Digital Online para Futsal`, sections: [{ title: `Fim das Discussões`, content: `<p>Controle gols, faltas e tempo com precisão de liga profissional.</p>` }] },
  de: { title: `Online-Anzeigetafel für Futsal`, sections: [{ title: `Schluss mit Diskussionen`, content: `<p>Verwandeln Sie Ihren Platz mit nur einem Laptop in eine Profi-Arena.</p>` }] },
  fr: { title: `Tableau de Score Futsal en Ligne`, sections: [{ title: `Finis les Débats`, content: `<p>Une arène professionnelle gratuite sur votre écran ou TV.</p>` }] },
  it: { title: `Tabellone Digitale Futsal Online`, sections: [{ title: `Basta Discussioni`, content: `<p>Trasforma il tuo campo in un'arena professionale usando solo un browser.</p>` }] }
};

// --- 4. INVOICE TOOL ---
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
        content: `<ul><li><strong>Otomatis & Anti Salah Hitung:</strong> Sistem menghitung total, pajak, dan subtotal secara otomatis.</li><li><strong>Privasi 100%:</strong> Data bisnis Anda diproses hanya di browser Anda dan tidak disimpan di server kami.</li></ul>`
      }
    ]
  },
  en: {
    title: `Free Invoice Generator: Create Professional PDF Invoices`,
    sections: [
      {
        title: `Impress Your Clients`,
        content: `<p>Send polished, professional invoices that demand attention. Our <strong>Invoice Generator</strong> is the fastest way for small businesses to bill clients without expensive software. No signup required.</p>`
      }
    ]
  },
  es: { title: `Generador de Facturas Gratis: Crea Invoices en PDF`, sections: [{ title: `Impresiona a tus Clientes`, content: `<p>Crea facturas profesionales en segundos de forma segura y gratuita.</p>` }] },
  pt: { title: `Gerador de Faturas Grátis: Criar Invoice em PDF`, sections: [{ title: `Impressione seus Clientes`, content: `<p>A forma mais rápida para pequenos negócios cobrarem clientes com profissionalismo.</p>` }] },
  de: { title: `Rechnungsgenerator Kostenlos: PDF-Rechnungen`, sections: [{ title: `Überzeugen Sie Ihre Kunden`, content: `<p>Erstellen Sie saubere und professionelle Rechnungen in Minuten ohne Datenupload.</p>` }] },
  fr: { title: `Générateur de Factures Gratuit : Créer des Factures PDF`, sections: [{ title: `Impressionnez vos Clients`, content: `<p>Envoyez des factures soignées avec un rendu PDF impeccable.</p>` }] },
  it: { title: `Generatore Fatture Gratis: Crea Fatture PDF`, sections: [{ title: `Impressione i tuoi Clienti`, content: `<p>Crea fatture professionali ed eleganti in pochi secondi senza registrazione.</p>` }] }
};

// --- 5. SHIFT SCHEDULER TOOL ---
const SHIFT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA`,
    sections: [
      {
        title: `Kenapa Harus Pindah dari Excel?`,
        content: `<p>Manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis. Mulai dari drama di grup WhatsApp karena salah ketik, hingga toko yang kosong karena shift yang terlewat. <strong>Shift Scheduler</strong> dari VersoKit adalah asisten pribadi Anda untuk membuat roster kerja yang rapi dan adil.</p>`
      }
    ]
  },
  en: {
    title: `Free Shift Roster Maker: Manage Schedules & Share to WhatsApp`,
    sections: [
      {
        title: `Effortless Workforce Management`,
        content: `<p>Stop the scheduling drama. Our <strong>Shift Scheduler</strong> is designed for Retail, F&B, and Security teams to build clear weekly rosters in under a minute. Visual and easy to read on mobile devices.</p>`
      }
    ]
  },
  es: { title: `Planificador de Turnos Gratis: Crea Rosters`, sections: [{ title: `Gestión de Personal Sin Esfuerzo`, content: `<p>Organiza los turnos de tu equipo en minutos con una interfaz visual intuitiva.</p>` }] },
  pt: { title: `Gerador de Escala de Trabalho: Criar Turnos`, sections: [{ title: `Gestão de Equipe Sem Esforço`, content: `<p>Organize os turnos da sua equipe rapidamente e compartilhe via WhatsApp.</p>` }] },
  de: { title: `Schichtplaner Kostenlos: Dienstpläne Erstellen`, sections: [{ title: `Mühelose Personalverwaltung`, content: `<p>Erstellen Sie wöchentliche Schichtpläne für Ihr Team einfach und schnell.</p>` }] },
  fr: { title: `Planning d'Équipe Gratuit : Gérer les Shifts`, sections: [{ title: `Gestion du Personnel Simplifiée`, content: `<p>Organisez les horaires de votre équipe en quelques clics.</p>` }] },
  it: { title: `Pianificatore Turni Gratis: Crea il Roster`, sections: [{ title: `Gestione del Personale Semplificata`, content: `<p>Organizza i turni di lavoro settimanali in meno di un minuto.</p>` }] }
};

// --- 6. LINEUP BUILDER ---
const LINEUP_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Football Lineup Builder: Buat Formasi Tim Bola & Download Gambar`,
    sections: [{ title: `Visualisasi Strategi XI Anda`, content: `<p>Ubah ide taktik Anda menjadi grafis profesional Starting XI untuk media sosial dalam hitungan detik.</p>` }]
  },
  en: {
    title: `Football Lineup Builder: Create & Download Team Formations`,
    sections: [{ title: `Visualize Your Strategy`, content: `<p>Our Football Lineup Builder transforms your tactical ideas into professional graphics. Perfect for fans and coaches.</p>` }]
  },
  es: { title: `Creador de Alineaciones: Crea Formaciones de Fútbol`, sections: [{ title: `Visualiza tu Estrategia`, content: `<p>Convierte tus ideas tácticas en gráficos profesionales para redes sociales.</p>` }] },
  pt: { title: `Montar Time de Futebol: Criar Escalação`, sections: [{ title: `Visualize sua Estratégia`, content: `<p>Crie escalações profissionais e baixe a imagem em alta definição.</p>` }] },
  de: { title: `Fußball Aufstellungs-Builder: Formation Erstellen`, sections: [{ title: `Visualisieren Sie Ihre Taktik`, content: `<p>Erstellen Sie professionelle Grafiken Ihrer Startelf einfach im Browser.</p>` }] },
  fr: { title: `Compo d'Équipe Foot : Créer une Formation`, sections: [{ title: `Visualisez votre Stratégie`, content: `<p>Transformez vos idées tactiques en graphismes professionnels.</p>` }] },
  it: { title: `Formazione Calcio: Crea lo Schema`, sections: [{ title: `Visualizza la tua Strategia`, content: `<p>Trasforma le tue idee tattiche in grafiche professionali per i tuoi follower.</p>` }] }
};

// --- 7. TOURNAMENT MANAGER ---
const TOURNAMENT_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Tournament Manager Pro: Buat Bagan & Klasemen Liga Otomatis`,
    sections: [{ title: `Solusi Panitia Anti-Ribet`, content: `<p>Mengelola turnamen Futsal, E-Sports, atau lomba kampung kini lebih mudah dengan klasemen otomatis.</p>` }]
  },
  en: {
    title: `Tournament Manager Pro: League Standings & Schedule`,
    sections: [{ title: `Professional Event Management`, content: `<p>Organize sports or community tournaments with real-time standings and Round Robin logic.</p>` }]
  },
  es: { title: `Gestor de Torneos: Clasificaciones de Liga`, sections: [{ title: `Gestión Profesional de Eventos`, content: `<p>Organiza torneos con cálculos automáticos de puntos y clasificación en tiempo real.</p>` }] },
  pt: { title: `Gerador de Torneios: Tabelas e Classificação`, sections: [{ title: `Gestão Profissional de Eventos`, content: `<p>Organize campeonatos com atualização automática da tabela de pontos.</p>` }] },
  de: { title: `Turniermanager Pro: Spielpläne & Ligatabellen`, sections: [{ title: `Professionelle Eventverwaltung`, content: `<p>Erstellen Sie Spielpläne für Ihre Turniere mit automatischer Punkteberechnung.</p>` }] },
  fr: { title: `Gestion de Tournoi : Tableaux et Classements`, sections: [{ title: `Gestion d'Événements Professionnelle`, content: `<p>Organisez vos championnats avec calcul automatique des points.</p>` }] },
  it: { title: `Gestore Tornei Pro: Tabelloni e Classifiche`, sections: [{ title: `Gestione Eventi Professionale`, content: `<p>Organizza tornei sportivi con classifiche aggiornate in tempo reale.</p>` }] }
};

// --- 8. SCOREBOARD CONTENT ---
const SCOREBOARD_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Universal Scoreboard: Papan Skor Digital Badminton, Voli & Ping Pong`,
    sections: [{ title: `Satu Papan Skor, Banyak Olahraga`, content: `<p>Satu alat canggih untuk berbagai cabang olahraga berbasis poin (Rally Point) dan set.</p>` }]
  },
  en: {
    title: `Universal Scoreboard: Digital Points for Badminton & Volleyball`,
    sections: [{ title: `The Swiss Army Knife of Scoreboards`, content: `<p>Perfect for any point-based sport. Supports set tracking and rally point systems.</p>` }]
  },
  es: { title: `Marcador Universal: Puntos para Bádminton y Voleibol`, sections: [{ title: `Versatilidad Deportiva`, content: `<p>Un marcador digital diseñado para cualquier deporte basado en puntos y sets.</p>` }] },
  pt: { title: `Placar Universal: Pontuação Digital`, sections: [{ title: `Versatilidade Esportiva`, content: `<p>Um placar digital versátil para qualquer esporte baseado em pontos e sets.</p>` }] },
  de: { title: `Universal-Anzeigetafel: Punkte für Badminton & Volleyball`, sections: [{ title: `Vielseitige Sportanzeige`, content: `<p>Unterstützt Satz-Tracking und Rally-Point-Systeme für Ihre Wettkämpfe.</p>` }] },
  fr: { title: `Tableau de Score Universel : Badminton et Volleyball`, sections: [{ title: `Polyvalence Sportive`, content: `<p>Un tableau de score numérique conçu pour tous les sports à points et sets.</p>` }] },
  it: { title: `Tabellone Universale: Punti per Badminton e Pallavolo`, sections: [{ title: `Versatilità Sportiva`, content: `<p>Un tabellone digitale versatile per ogni sport basato su punti e set.</p>` }] }
};

// --- 9. AMERICANO GENERATOR ---
const AMERICANO_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Generator Jadwal Americano: Padel, Pickleball & Tenis`,
    sections: [{ title: `Main Americano Tanpa Ribet`, content: `<p>Atur turnamen sosial Anda dengan rotasi partner otomatis dan klasemen individu real-time.</p>` }]
  },
  en: {
    title: `Americano Schedule Generator: Padel & Pickleball`,
    sections: [{ title: `Fair Partner Rotation`, content: `<p>Automated partner rotation for your social sports sessions. Track individual leaderboards easily.</p>` }]
  },
  es: { title: `Generador de Torneos Americano: Pádel y Pickleball`, sections: [{ title: `Rotación Justa de Compañeros`, content: `<p>Organiza tus sesiones de pádel con rotaciones automáticas y seguimiento transparente.</p>` }] },
  pt: { title: `Gerador de Torneio Americano: Padel e Pickleball`, sections: [{ title: `Rotação Justa de Parceiros`, content: `<p>Organize suas partidas de padel com rotação automática e ranking em tempo real.</p>` }] },
  de: { title: `Americano-Turnier-Generator: Padel & Pickleball`, sections: [{ title: `Faire Partner-Rotation`, content: `<p>Organisieren Sie Ihre Padel-Runden mit automatischer Partner-Rotation und Bestenlisten.</p>` }] },
  fr: { title: `Générateur de Tournoi Americano : Padel et Pickleball`, sections: [{ title: `Rotation Équitable des Partenaires`, content: `<p>Tout le monde joue avec tout le monde dan le classement est géré en temps réel.</p>` }] },
  it: { title: `Generatore Torneo Americano: Padel e Pickleball`, sections: [{ title: `Rotazione Equa dei Partner`, content: `<p>Ogni giocatore cambia partner ad ogni turno con classifica automatica.</p>` }] }
};

// --- 10. TENNIS GENERATOR ---
const TENNIS_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: `Generator Jadwal Tenis Ganda: Matchmaking Berdasarkan Skill`,
    sections: [{ title: `Main Tenis Makin Seru`, content: `<p>Buat jadwal ganda yang adil dengan penyeimbang skill dan durasi main yang merata.</p>` }]
  },
  en: {
    title: `Tennis Match Generator: Fair Double Schedules`,
    sections: [{ title: `Skill-Based Matchmaking`, content: `<p>Generate balanced tennis double matches based on skill levels and equal court time.</p>` }]
  },
  es: { title: `Generador de Partidos de Tenis: Dobles Justos`, sections: [{ title: `Emparejamiento por Nivel`, content: `<p>Genera partidos de dobles equilibrados basados en el nivel de habilidad.</p>` }] },
  pt: { title: `Gerador de Partidas de Tênis: Duplas Equilibradas`, sections: [{ title: `Matchmaking por Habilidade`, content: `<p>Gere partidas de duplas equilibradas com tempo de quadra igual para todos.</p>` }] },
  de: { title: `Tennis-Match-Generator: Faire Doppel-Spielpläne`, sections: [{ title: `Skill-basiertes Matchmaking`, content: `<p>Erstellen Sie ausgeglichene Doppelspiele basierend auf Spielstärke.</p>` }] },
  fr: { title: `Générateur de Matchs Tennis : Doubles Équitables`, sections: [{ title: `Matchmaking par Niveau`, content: `<p>Générez des plannings de doubles équitables avec équilibrage des niveaux.</p>` }] },
  it: { title: `Generatore Partite Tennis: Doppi Equi`, sections: [{ title: `Bilanciamento Abilità`, content: `<p>Crea programmi di doppio equi con bilanciamento basato sulle abilità.</p>` }] }
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
