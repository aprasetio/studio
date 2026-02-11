
/**
 * Centralized SEO Article Repository for VersoKit tools.
 * Supports: en, id, es, pt, de, fr, it.
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

export const TOOL_ARTICLES: ArticleCollection = {
  "americano": {
    id: {
      title: "Generator Jadwal Americano Otomatis: Padel, Pickleball & Tenis",
      sections: [
        { 
          title: "Main Americano Tanpa Ribet: Gunakan Generator Jadwal & Skor Otomatis Kami", 
          content: "<p>Apakah Anda sedang merencanakan sesi fun game Padel, Pickleball, atau Tenis akhir pekan ini? Format Americano pasti jadi pilihan utama agar suasana lebih cair dan kompetitif.</p><p>Tapi, kita semua tahu masalah utamanya: Mengatur jadwal dan menghitung poin secara manual itu memusingkan. Jangan biarkan kertas, pulpen, atau rumus Excel yang rumit merusak keseruan Anda di lapangan. <strong>Solusinya ada di sini.</strong></p>" 
        },
        { 
          title: "Apa Itu Format Americano?", 
          content: "<p>Bagi Anda yang baru pertama kali mencoba, Americano adalah format turnamen sosial yang paling adil dan seru. Konsep dasarnya sederhana:</p><ul><li><strong>Ganti Pasangan:</strong> Anda akan bermain dengan pasangan berbeda di setiap pertandingan.</li><li><strong>Skor Individu:</strong> Meskipun bermain ganda, poin yang Anda dapatkan dihitung untuk diri sendiri.</li><li><strong>Tujuan:</strong> Mengumpulkan poin sebanyak mungkin untuk menjadi juara klasemen di akhir sesi.</li></ul>" 
        },
        { 
          title: "Masalah Klasik Saat Main Americano Manual", 
          content: "<p>Tanpa tools atau aplikasi, main Americano bisa jadi kacau:</p><ul><li><strong>Waktu Terbuang:</strong> Debat siapa lawan siapa bisa memakan waktu 5-10 menit sendiri.</li><li><strong>Tidak Adil:</strong> Tanpa algoritma, ada kemungkinan satu orang terus menerus dapat partner yang sama.</li><li><strong>Salah Hitung:</strong> Menjumlahkan skor puluhan pertandingan secara manual di kertas sangat rawan kesalahan.</li></ul>" 
        },
        { 
          title: "Fitur Unggulan Americano Generator Kami", 
          content: "<ul><li><strong>Tanpa Download & Install:</strong> Tool kami berbasis web (web-based) dan hemat penyimpanan HP.</li><li><strong>Algoritma Fair Play:</strong> Sistem kami memastikan rotasi pemain seimbang dan adil.</li><li><strong>Live Leaderboard:</strong> Klasemen otomatis terupdate begitu skor dimasukkan.</li></ul>" 
        },
        { 
          title: "Cara Menggunakan Generator Americano Ini", 
          content: "<ol><li><strong>Masukkan Nama Pemain:</strong> Ketik nama semua peserta (Minimal 4 orang).</li><li><strong>Pilih Poin Target:</strong> Tentukan mau main sampai poin berapa? (Umumnya 24 atau 32 poin).</li><li><strong>Generate Jadwal:</strong> Klik tombol buat jadwal.</li><li><strong>Main & Input Skor:</strong> Setelah match selesai, masukkan skornya.</li><li><strong>Lihat Pemenang:</strong> Di akhir sesi, sistem akan menobatkan juara hari itu!</li></ol>" 
        },
        { 
          title: "Aturan Singkat Perhitungan Poin", 
          content: "<ul><li><strong>Sistem Poin:</strong> Pertandingan dihitung per bola. Jika Tim A menang 14-10, maka Pemain Tim A masing-masing dapat 14 poin, dan Tim B dapat 10 poin.</li><li><strong>Servis:</strong> Servis bergantian setiap 4 kali bola.</li><li><strong>Pemenang:</strong> Pemain dengan total poin akumulasi tertinggi di akhir turnamen.</li></ul>" 
        }
      ]
    },
    en: {
      title: "Automatic Americano Schedule Generator: Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Play Americano Hassle-Free: Use Our Automatic Generator & Scoreboard", 
          content: "<p>Planning a fun Padel, Pickleball, or Tennis session this weekend? The Americano format is the perfect choice for a social yet competitive atmosphere.</p><p>However, we all know the main headache: managing schedules and calculating points manually is exhausting. Don't let paper, pens, or complex Excel formulas ruin your fun on the court. <strong>The solution is here.</strong></p>" 
        },
        { 
          title: "What is the Americano Format?", 
          content: "<p>For those trying it for the first time, Americano is one of the fairest and most exciting social tournament formats. The basic concept is simple:</p><ul><li><strong>Rotating Partners:</strong> You will play with a different partner in every match.</li><li><strong>Individual Score:</strong> Even though you play doubles, the points you earn are calculated for you personally.</li><li><strong>Goal:</strong> Accumulate as many points as possible to become the champion at the end of the session.</li></ul>" 
        },
        { 
          title: "Classic Problems with Manual Americano", 
          content: "<p>Without the right tools, Americano can quickly become chaotic:</p><ul><li><strong>Wasted Time:</strong> Debating who plays whom can take 5-10 minutes per round.</li><li><strong>Unfairness:</strong> Without an algorithm, some players might get stuck with the same partner repeatedly.</li><li><strong>Calculation Errors:</strong> Manually adding up dozens of match scores on paper is prone to mistakes.</li></ul>" 
        },
        { 
          title: "Key Features of Our Americano Generator", 
          content: "<ul><li><strong>No Download Required:</strong> Our tool is web-based, saving your phone's storage space.</li><li><strong>Fair Play Algorithm:</strong> Our system ensures balanced and fair player rotation.</li><li><strong>Live Leaderboard:</strong> Standings update automatically as soon as match scores are entered.</li></ul>" 
        },
        { 
          title: "How to Use This Americano Generator", 
          content: "<ol><li><strong>Enter Player Names:</strong> Type in all participants (Minimum 4 people).</li><li><strong>Select Target Points:</strong> Decide the match length (Commonly 24 or 32 points).</li><li><strong>Generate Schedule:</strong> Click the build schedule button.</li><li><strong>Play & Input Scores:</strong> Enter the results after each match.</li><li><strong>See the Winner:</strong> The system crowns the champion at the end of the tournament!</li></ol>" 
        },
        { 
          title: "Quick Scoring Rules", 
          content: "<ul><li><strong>Point System:</strong> Matches are counted per ball. If Team A wins 14-10, each player on Team A gets 14 points, and Team B players get 10.</li><li><strong>Serving:</strong> Service rotates every 4 points.</li><li><strong>Winner:</strong> The player with the highest total accumulated points at the end.</li></ul>" 
        }
      ]
    },
    de: {
      title: "Automatischer Americano Spielplan-Generator: Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Americano stressfrei spielen: Nutzen Sie unseren automatischen Generator", 
          content: "<p>Planen Sie eine Padel-, Pickleball- oder Tennis-Session? Das Americano-Format ist ideal für eine gesellige und wettbewerbsorientierte Atmosphäre.</p><p>Wir kennen das Problem: Den Spielplan und die Punkte manuell zu verwalten, ist mühsam. Lassen Sie sich den Spaß nicht durch Papierkram oder komplizierte Excel-Tabellen verderben. <strong>Hier ist die Lösung.</strong></p>" 
        },
        { 
          title: "Was ist das Americano-Format?", 
          content: "<p>Americano ist eines der fairsten sozialen Turnierformate. Das Konzept ist einfach:</p><ul><li><strong>Wechselnde Partner:</strong> Sie spielen in jedem Spiel mit einem anderen Partner.</li><li><strong>Einzelwertung:</strong> Obwohl Sie Doppel spielen, werden die Punkte für Sie persönlich gezählt.</li><li><strong>Ziel:</strong> Sammeln Sie so viele Punkte wie möglich, um am Ende Champion zu werden.</li></ul>" 
        },
        { 
          title: "Vorteile unseres Generators", 
          content: "<ul><li><strong>Webbasiert:</strong> Keine Installation nötig, schont den Speicherplatz.</li><li><strong>Fair-Play-Algorithmus:</strong> Garantiert eine ausgewogene Rotation der Spieler.</li><li><strong>Live-Rangliste:</strong> Ergebnisse werden sofort nach der Eingabe aktualisiert.</li></ul>" 
        }
      ]
    },
    es: {
      title: "Generador de Calendario Americano Automático: Pádel, Pickleball y Tenis",
      sections: [
        { 
          title: "Juega Americano sin complicaciones con nuestro generador automático", 
          content: "<p>¿Planeas una sesión de Pádel, Pickleball o Tenis? El formato Americano es la mejor opción para un ambiente social y competitivo.</p><p>Gestionar los horarios y calcular puntos manualmente es agotador. No dejes que el papel y el boli arruinen tu diversión. <strong>La solución está aquí.</strong></p>" 
        },
        { 
          title: "¿Qué es el formato Americano?", 
          content: "<p>El Americano es un formato de torneo social muy justo y emocionante. El concepto es simple:</p><ul><li><strong>Parejas rotativas:</strong> Jugarás con un compañero diferente en cada partido.</li><li><strong>Puntuación individual:</strong> Aunque juegues dobles, los puntos se cuentan individualmente.</li><li><strong>Objetivo:</strong> Acumular el máximo de puntos para ganar el torneo.</li></ul>" 
        },
        { 
          title: "Características principales", 
          content: "<ul><li><strong>Sin descargas:</strong> Herramienta web, no ocupa espacio en tu móvil.</li><li><strong>Algoritmo de Juego Limpio:</strong> Asegura una rotación equilibrada.</li><li><strong>Clasificación en vivo:</strong> Actualización automática de la tabla de posiciones.</li></ul>" 
        }
      ]
    },
    pt: {
      title: "Gerador Automático de Tabelas Americano: Padel, Pickleball e Ténis",
      sections: [
        { 
          title: "Jogue Americano sem chatices com o nosso gerador automático", 
          content: "<p>Vai organizar uma partida de Padel, Pickleball ou Ténis? O formato Americano é a escolha ideal para um convívio competitivo.</p><p>Gerir horários e pontos manualmente é uma dor de cabeça. Não deixe que o papel e a caneta estraguem a diversão. <strong>A solução está aqui.</strong></p>" 
        },
        { 
          title: "O que é o formato Americano?", 
          content: "<p>O Americano é um dos formatos de torneio social mais justos. O conceito é simples:</p><ul><li><strong>Parceiros Rotativos:</strong> Joga com um parceiro diferente em cada partida.</li><li><strong>Pontuação Individual:</strong> Embora jogue em duplas, os pontos são para a sua conta pessoal.</li><li><strong>Objetivo:</strong> Acumular o máximo de pontos para ser o campeão final.</li></ul>" 
        },
        { 
          title: "Funcionalidades Principais", 
          content: "<ul><li><strong>Sem Instalação:</strong> Ferramenta web que não ocupa espaço no telemóvel.</li><li><strong>Algoritmo Fair Play:</strong> Garante uma rotação equilibrada de jogadores.</li><li><strong>Classificação em Direto:</strong> Atualização automática mal insere os resultados.</li></ul>" 
        }
      ]
    },
    fr: {
      title: "Générateur Automatique de Planning Americano : Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Jouez à l'Americano sans stress grâce à notre générateur automatique", 
          content: "<p>Vous organisez une session de Padel, Pickleball ou Tennis ? Le format Americano est parfait pour une ambiance conviviale et compétitive.</p><p>Gérer le planning et les points manuellement est épuisant. Ne laissez pas la paperasse gâcher votre plaisir. <strong>La solution est ici.</strong></p>" 
        },
        { 
          title: "Qu'est-ce que le format Americano ?", 
          content: "<p>L'Americano est un format de tournoi social très équitable. Le concept est simple :</p><ul><li><strong>Partenaires tournants :</strong> Vous changez de partenaire à chaque match.</li><li><strong>Score individuel :</strong> Même si vous jouez en double, vos points sont comptabilisés personnellement.</li><li><strong>Objectif :</strong> Accumuler le plus de points possible pour gagner.</li></ul>" 
        },
        { 
          title: "Nos points forts", 
          content: "<ul><li><strong>Sans téléchargement :</strong> Outil web, n'encombre pas votre smartphone.</li><li><strong>Algorithme Fair-Play :</strong> Assure une rotation équilibrée des joueurs.</li><li><strong>Classement en direct :</strong> Mise à jour automatique des positions.</li></ul>" 
        }
      ]
    },
    it: {
      title: "Generatore Automatico di Tabellone Americano: Padel, Pickleball e Tennis",
      sections: [
        { 
          title: "Gioca all'Americano senza stress con il nostro generatore automatico", 
          content: "<p>Stai organizzando una partita di Padel, Pickleball o Tennis? Il formato Americano è la scelta migliore per unire divertimento e competizione.</p><p>Gestire turni e punti manualmente è complicato. Non lasciare che carta e penna rovinino il divertimento. <strong>La soluzione è qui.</strong></p>" 
        },
        { 
          title: "Cos'è il formato Americano?", 
          content: "<p>L'Americano è uno dei formati di torneo sociale più equi. Il concetto è semplice:</p><ul><li><strong>Partner a rotazione:</strong> Giocherai con un compagno diverso in ogni partita.</li><li><strong>Punteggio individuale:</strong> Anche se giochi in doppio, i punti sono contati per te singolarmente.</li><li><strong>Obiettivo:</strong> Accumulare più punti possibile per vincere il torneo.</li></ul>" 
        },
        { 
          title: "Caratteristiche principali", 
          content: "<ul><li><strong>Nessun download:</strong> Strumento web, non occupa spazio sul telefono.</li><li><strong>Algoritmo Fair Play:</strong> Garantisce una rotazione equilibrata dei giocatori.</li><li><strong>Classifica live:</strong> Aggiornamento automatico non appena inserisci i risultati.</li></ul>" 
        }
      ]
    }
  },
  "budget-planner": {
    en: {
      title: "Zero-Based Budget Planner Guide",
      sections: [
        { title: "What is Zero-Based Budgeting?", content: "<h2>Give Every Dollar a Job</h2><p>Zero-based budgeting (ZBB) is a methodology where your <strong>Income minus Expenses equals Zero</strong>. This doesn't mean you have no money left; it means every dollar has been assigned to a specific task, such as savings, rent, or groceries.</p>" },
        { title: "How to Use the VersoKit Planner", content: "<h2>Step-by-Step Budgeting</h2><ol><li><strong>Enter Income:</strong> Input your total monthly take-home pay.</li><li><strong>Assign Categories:</strong> Create 'Envelopes' for your needs and wants.</li><li><strong>Allocate Funds:</strong> Move money from your income to these categories until 'To be Budgeted' reaches zero.</li><li><strong>Track Activity:</strong> Add transactions throughout the month to see real-time balances.</li></ol>" },
        { title: "Handling Overspending", content: "<h2>Roll with the Punches</h2><p>If you spend more than planned in one category (the balance turns red), simply use the <strong>'Cover'</strong> feature to move funds from another category. This keeps your budget realistic and prevents debt.</p>" },
        { title: "Data Management", content: "<h2>Privacy and Backups</h2><p>Your financial data is <strong>never uploaded</strong>. It stays in your browser's local storage. Use the 'Data Management' section to export JSON backups if you want to move your data to another device.</p>" }
      ]
    },
    id: {
      title: "Panduan Lengkap Perencana Anggaran",
      sections: [
        { title: "Apa itu Zero-Based Budgeting?", content: "<h2>Berikan Tugas untuk Setiap Rupiah</h2><p>Zero-Based Budgeting (ZBB) adalah metode di mana <strong>Pendapatan dikurangi Pengeluaran sama dengan Nol</strong>. Artinya, setiap rupiah yang Anda hasilkan sudah dialokasikan ke pos tertentu seperti tabungan atau cicilan.</p>" },
        { title: "Fitur Unggulan", content: "<ul><li><strong>Metode Envelope:</strong> Alokasi dana per kategori secara visual.</li><li><strong>Tutup Overspending:</strong> Pindahkan dana antar kategori jika ada yang minus.</li><li><strong>Privasi 100%:</strong> Data hanya tersimpan di HP/Laptop Anda.</li></ul>" }
      ]
    },
    de: {
      title: "Leitfaden für die Budgetplanung",
      sections: [
        { title: "Nullbasierte Budgetierung", content: "<h2>Jeder Euro hat eine Aufgabe</h2><p>Bei der nullbasierten Budgetierung entspricht Ihr Einkommen abzüglich Ihrer Ausgaben genau Null. So behalten Sie die volle Kontrolle über Ihre Finanzen.</p>" }
      ]
    },
    es: {
      title: "Guía de Planificación de Presupuesto",
      sections: [
        { title: "Presupuesto Base Cero", content: "<h2>Asigna una función a cada euro</h2><p>El presupuesto base cero es un método donde tus ingresos menos tus gastos deben ser igual a cero. Cada euro tiene un destino específico.</p>" }
      ]
    },
    pt: {
      title: "Guia de Planejamento de Orçamento",
      sections: [
        { title: "Orçamento Base Zero", content: "<h2>Dê uma tarefa para cada centavo</h2><p>Orçamento base zero é um método onde sua renda menos suas despesas é igual a zero. Todo o seu dinheiro é planejado com intenção.</p>" }
      ]
    },
    fr: {
      title: "Guide du Planificateur Budgétaire",
      sections: [
        { title: "Le Budget Base Zéro", content: "<h2>Donnez un rôle à chaque euro</h2><p>Le budget base zéro est une méthode où vos revenus moins vos dépenses égalent zéro. Chaque euro est affecté à une catégorie précise.</p>" }
      ]
    },
    it: {
      title: "Guida al Budget a Base Zero",
      sections: [
        { title: "Cos'è il Budget a Base Zero?", content: "<h2>Ogni euro ha un compito</h2><p>Il budget a base zero è un metodo in cui le entrate meno le uscite sono uguali a zero. Tutto il tuo denaro viene allocato con precisione.</p>" }
      ]
    }
  },
  "kanban": {
    en: {
      title: "Visual Task Management with Kanban",
      sections: [
        { title: "What is a Kanban Board?", content: "<h2>Visualizing Your Workflow</h2><p>Kanban is a visual method for managing work as it moves through a process. By using cards to represent tasks and columns to represent stages, you can easily see <strong>bottlenecks</strong> and focus on finishing work rather than just starting it.</p>" },
        { title: "The Three Pillars", content: "<ul><li><strong>To Do:</strong> Tasks that are ready to be started.</li><li><strong>In Progress:</strong> Tasks you are currently working on. Limit these to stay focused!</li><li><strong>Done:</strong> Completed tasks. Celebrate your progress!</li></ul>" }
      ]
    },
    id: {
      title: "Manajemen Tugas Visual dengan Kanban",
      sections: [
        { title: "Meningkatkan Produktivitas", content: "<h2>Visualisasikan Pekerjaan Anda</h2><p>Papan Kanban membantu Anda melihat alur kerja dari 'Rencana' hingga 'Selesai'. Dengan memindahkan kartu, Anda bisa fokus menyelesaikan satu hal sebelum memulai yang lain.</p>" }
      ]
    },
    de: {
      title: "Produktivität mit Kanban steigern",
      sections: [{ title: "Workflows visualisieren", content: "<h2>Was ist Kanban?</h2><p>Kanban ist eine visuelle Methode zur Aufgabenverwaltung. Verschieben Sie Karten von 'To Do' nach 'Erledigt'.</p>" }]
    },
    es: {
      title: "Gestión de Tareas con Kanban",
      sections: [{ title: "Visualiza tu flujo de trabajo", content: "<h2>¿Qué es Kanban?</h2><p>Kanban es un método visual para gestionar tareas a medida que avanzan por un proceso.</p>" }]
    },
    pt: {
      title: "Gestão Visual com Kanban",
      sections: [{ title: "Visualize seu fluxo", content: "<h2>O que é Kanban?</h2><p>Kanban é um método visual para gerenciar o trabalho enquanto ele se move através de um processo.</p>" }]
    },
    fr: {
      title: "Gestion de Tâches Kanban",
      sections: [{ title: "Visualisez votre flux", content: "<h2>Qu'est-ce que le Kanban ?</h2><p>Le Kanban est une méthode visuelle pour gérer le travail au fur et à mesure qu'il progresse.</p>" }]
    },
    it: {
      title: "Gestione Attività con Kanban",
      sections: [{ title: "Visualizza il tuo flusso", content: "<h2>Cos'è il Kanban?</h2><p>Il Kanban è un metodo visivo per gestire il lavoro mentre si muove attraverso un processo.</p>" }]
    }
  },
  "invoice": {
    en: {
      title: "Professional PDF Invoice Generator",
      sections: [
        { title: "Create Invoices Instantly", content: "<h2>Fast Billing for Freelancers</h2><p>Our Invoice Generator helps you create professional PDF receipts and invoices directly in your browser. It's ideal for freelancers, consultants, and small business owners who need a clean, itemized bill without complex accounting software.</p>" },
        { title: "Features", content: "<ul><li><strong>Live Preview:</strong> See your invoice update as you type.</li><li><strong>Itemized Billing:</strong> Add multiple items with quantities and rates.</li><li><strong>Local Processing:</strong> Your financial and client data never leaves your device.</li><li><strong>Print to PDF:</strong> Uses your system's print dialog for pixel-perfect PDF generation.</li></ul>" }
      ]
    },
    id: {
      title: "Pembuat Invoice & Faktur Profesional",
      sections: [
        { title: "Invoice Cepat & Mudah", content: "<h2>Solusi Bisnis Kecil</h2><p>Buat faktur PDF profesional dalam hitungan detik. Sangat cocok untuk freelancer atau UMKM yang membutuhkan bukti pembayaran rapi tanpa ribet.</p>" }
      ]
    },
    de: {
      title: "Professioneller Rechnungsgenerator",
      sections: [{ title: "Rechnungen sofort erstellen", content: "<h2>Für Freiberufler</h2><p>Erstellen Sie professionelle PDF-Rechnungen direkt in Ihrem Browser. Sicher und lokal.</p>" }]
    },
    es: {
      title: "Generador de Facturas Profesional",
      sections: [{ title: "Crea facturas al instante", content: "<h2>Para autónomos y pymes</h2><p>Genera facturas PDF profesionales de forma gratuita y segura en tu navegador.</p>" }]
    },
    pt: {
      title: "Gerador de Faturas Profissional",
      sections: [{ title: "Crie faturas instantaneamente", content: "<h2>Para freelancers e PMEs</h2><p>Gere faturas PDF profissionais de forma gratuita e segura no seu navegador.</p>" }]
    },
    fr: {
      title: "Générateur de Factures Professionnel",
      sections: [{ title: "Créez des factures instantanément", content: "<h2>Pour freelances et PME</h2><p>Générez des factures PDF professionnelles gratuitement et en toute sécurité dans votre navigateur.</p>" }]
    },
    it: {
      title: "Generatore di Fatture Professionale",
      sections: [{ title: "Crea fatture istantaneamente", content: "<h2>Per freelance e PMI</h2><p>Genera fatture PDF professionali in modo gratuito e sicuro nel tuo browser.</p>" }]
    }
  },
  "futsal": {
    en: {
      title: "Professional Futsal Scoreboard Rules",
      sections: [
        { title: "Timer & Foul Rules", content: "<h2>FIFA Compliant Tracking</h2><p>In official Futsal, matches are played in two 20-minute halves. Our scoreboard includes presets for 20, 15, and 10 minutes to suit local league rules. Most importantly, the <strong>Foul Counter</strong> turns red after the 5th foul, alerting you to the 'Second Penalty' rule.</p>" },
        { title: "User Tips", content: "<ul><li><strong>Period Toggle:</strong> Use the Period button to reset fouls automatically for the second half.</li><li><strong>Fullscreen Ready:</strong> Perfect for displaying on a TV or tablet at the court.</li></ul>" }
      ]
    },
    id: {
      title: "Aturan Papan Skor Futsal Profesional",
      sections: [
        { title: "Aturan Waktu & Foul", content: "<h2>Standar FIFA</h2><p>Pertandingan futsal resmi dimainkan dalam 2x20 menit. Papan skor kami menyertakan hitungan <strong>Pelanggaran</strong> yang akan berubah merah setelah foul ke-5 (tanda penalti kedua).</p>" }
      ]
    },
    de: {
      title: "Professionelle Futsal-Anzeigetafel",
      sections: [{ title: "Zeit & Fouls", content: "<h2>Regeln</h2><p>Offizielle Spiele dauern 2x20 Minuten. Die Foul-Anzeige wird nach dem 5. Foul rot.</p>" }]
    },
    es: {
      title: "Marcador de Fútbol Sala Profesional",
      sections: [{ title: "Tiempo y Faltas", content: "<h2>Reglas</h2><p>Los partidos oficiales duran 2x20 minutos. El contador de faltas se pone rojo tras la 5ª falta.</p>" }]
    },
    pt: {
      title: "Placar de Futsal Profissional",
      sections: [{ title: "Tempo e Faltas", content: "<h2>Regras</h2><p>Partidas oficiais duram 2x20 minutos. O contador de faltas fica vermelho após a 5ª falta.</p>" }]
    },
    fr: {
      title: "Tableau de Score Futsal Professionnel",
      sections: [{ title: "Temps et Fautes", content: "<h2>Règles</h2><p>Les matchs officiels durent 2x20 minutes. Le compteur de fautes devient rouge après la 5ème faute.</p>" }]
    },
    it: {
      title: "Tabellone Futsal Professionale",
      sections: [{ title: "Tempo e Falli", content: "<h2>Regole</h2><p>Le partite ufficiali durano 2x20 minuti. Il contatore dei falli diventa rosso dopo il 5° fallo.</p>" }]
    }
  },
  "tennis": {
    en: {
      title: "Balanced Tennis Match Generator",
      sections: [
        { title: "Fair Play Algorithm", content: "<h2>Skill-Based Matchmaking</h2><p>Organizing club tennis can be difficult when skill levels vary. Our generator uses a <strong>balanced pairing logic</strong> that combines high-skill players with lower-skill partners, ensuring every match is competitive and engaging.</p>" },
        { title: "Equal Playtime", content: "<h2>No One Sits Out Too Long</h2><p>The system tracks how many rounds each player has participated in. It automatically prioritizes players with the least matches played for the next available round, making it perfect for social mixers.</p>" }
      ]
    },
    id: {
      title: "Generator Jadwal Tenis Ganda",
      sections: [
        { title: "Algoritma Fair Play", content: "<h2>Pembagian Tim Seimbang</h2><p>Sistem kami menggabungkan pemain mahir dengan pemula agar pertandingan tetap seru. Algoritma ini juga memastikan semua orang mendapat waktu bermain yang sama.</p>" }
      ]
    },
    de: {
      title: "Ausgeglichener Tennis-Match-Generator",
      sections: [{ title: "Fairness im Vordergrund", content: "<h2>Algorithmus</h2><p>Unser System kombiniert starke Spieler mit Anfängern, um faire und spannende Matches zu garantieren.</p>" }]
    },
    es: {
      title: "Generador de Partidos de Tenis Equilibrado",
      sections: [{ title: "Juego Limpio", content: "<h2>Algoritmo</h2><p>Nuestro sistema combina jugadores expertos con principiantes para garantizar partidos competitivos.</p>" }]
    },
    pt: {
      title: "Gerador de Partidas de Ténis Equilibrado",
      sections: [{ title: "Fair Play", content: "<h2>Algoritmo</h2><p>Nosso sistema combina jogadores experientes com iniciantes para garantir partidas competitivas.</p>" }]
    },
    fr: {
      title: "Générateur de Matchs de Tennis Équilibré",
      sections: [{ title: "Fair Play", content: "<h2>Algorithme</h2><p>Notre système combine des joueurs expérimentés avec des débutants pour garantir des matchs compétitifs.</p>" }]
    },
    it: {
      title: "Generatore Partite Tennis Equilibrato",
      sections: [{ title: "Gioco Equo", content: "<h2>Algoritmo</h2><p>Il nostro sistema combina giocatori esperti con principianti per garantire partite competitive.</p>" }]
    }
  },
  "scoreboard": {
    en: {
      title: "Universal Scoreboard for Multi-Sports",
      sections: [
        { title: "Simple and Reliable", content: "<h2>One Board for Every Game</h2><p>Whether it's Volleyball, Badminton, or Table Tennis, our Universal Scoreboard tracks points and sets won with a clean, high-contrast interface. It's designed for visibility from a distance.</p>" },
        { title: "Smart Features", content: "<ul><li><strong>Target Score:</strong> Set a victory target to highlight when a team is close to winning.</li><li><strong>Swap Sides:</strong> Change court positions with one click at half-time.</li><li><strong>Persistence:</strong> If you accidentally refresh the page, your score is still there.</li></ul>" }
      ]
    },
    id: {
      title: "Papan Skor Universal Serbaguna",
      sections: [
        { title: "Satu Alat untuk Semua", content: "<h2>Voli, Badminton, Pingpong</h2><p>Papan skor simpel untuk berbagai cabang olahraga. Mendukung hitungan set dan tukar posisi lapangan dengan satu klik.</p>" }
      ]
    }
  },
  "lineup": {
    en: {
      title: "Football Lineup & Formation Builder",
      sections: [
        { title: "Visualize Your Tactics", content: "<h2>Drag and Drop Formation</h2><p>Create your perfect team formation (4-4-2, 4-3-3, 3-5-2) using our interactive pitch. Simply drag players to their positions and assign names and numbers.</p>" },
        { title: "Share Your Strategy", content: "<h2>Download as Image</h2><p>Once your lineup is ready, download it as a high-quality PNG image. Perfect for sharing your matchday squad on Instagram, WhatsApp, or Twitter.</p>" }
      ]
    },
    id: {
      title: "Penyusun Formasi Sepak Bola",
      sections: [
        { title: "Visualisasikan Taktik", content: "<h2>Geser dan Atur</h2><p>Buat formasi tim favorit Anda dan unduh hasilnya sebagai gambar PNG untuk dibagikan ke media sosial atau grup WhatsApp tim.</p>" }
      ]
    }
  },
  "shift": {
    en: {
      title: "Simple Weekly Shift Scheduler",
      sections: [
        { title: "Manage Your Roster", content: "<h2>Effortless Team Planning</h2><p>The Shift Scheduler is designed for retail, security, and small teams. Manage Morning, Afternoon, and Night shifts across a 7-day week with a simple color-coded grid.</p>" },
        { title: "Export and Share", content: "<h2>One-Click Distribution</h2><p>Generate a clean image of your weekly roster to send to your staff. No more messy spreadsheets or forgotten schedules.</p>" }
      ]
    },
    id: {
      title: "Penjadwal Shift Karyawan Mingguan",
      sections: [
        { title: "Kelola Jadwal Tim", content: "<h2>Simpel & Teratur</h2><p>Atur jadwal Pagi, Siang, dan Malam untuk tim Anda. Unduh hasilnya sebagai gambar untuk dibagikan di grup kantor.</p>" }
      ]
    }
  },
  "split-bill": {
    en: {
      title: "Easy Split Bill & Shared Expense Calculator",
      sections: [
        { title: "Fair Group Dining", content: "<h2>No More Math at the Table</h2><p>Instantly calculate how much everyone owes after a group meal. Our tool handles complex <strong>Tax and Service Charges</strong> automatically, so no one ends up paying more than they should.</p>" },
        { title: "Social Sharing", content: "<h2>Copy to WhatsApp</h2><p>Generate a neatly formatted summary including the total, per-person amount, and payment instructions. Paste it directly into your group chat.</p>" }
      ]
    },
    id: {
      title: "Kalkulator Bagi Tagihan (Split Bill)",
      sections: [
        { title: "Bagi Rata Tanpa Ribet", content: "<h2>Pajak & Layanan Otomatis</h2><p>Hitung patungan makan bareng teman dengan cepat. Sudah termasuk hitungan pajak dan servis. Salin hasilnya ke WhatsApp dengan sekali klik.</p>" }
      ]
    }
  },
  "inventory": {
    en: {
      title: "Simple Inventory & Stock Manager",
      sections: [
        { title: "Track Your Items", content: "<h2>Lightweight Stock Control</h2><p>Perfect for sports equipment rooms, small warehouses, or home businesses. Track stock-in and stock-out movements without complex ERP software.</p>" },
        { title: "Privacy First", content: "<h2>Local Database</h2><p>Your inventory list is stored locally on your device. It's fast, private, and works even in basements with no internet connection.</p>" }
      ]
    },
    id: {
      title: "Manajemen Stok Barang Sederhana",
      sections: [
        { title: "Pantau Inventaris Anda", content: "<h2>Kontrol Stok Efisien</h2><p>Cocok untuk gudang kecil atau peralatan olahraga. Lacak jumlah barang masuk dan keluar dengan mudah secara offline.</p>" }
      ]
    }
  },
  "image-compressor": {
    en: {
      title: "Secure Browser-Based Image Compressor",
      sections: [
        { title: "Reduce File Size Safely", content: "<h2>No Server Uploads</h2><p>Unlike online converters that upload your photos to their servers, our tool processes images <strong>100% in your browser</strong>. Your private photos never leave your device.</p>" },
        { title: "Optimization", content: "<h2>Web Ready Images</h2><p>Reduce large MB files into small KB sizes without losing visible quality. Perfect for website optimization and sending photos via email.</p>" }
      ]
    },
    id: {
      title: "Kompres Gambar Aman & Privat",
      sections: [
        { title: "Kecilkan Ukuran File", content: "<h2>Tanpa Upload Server</h2><p>Proses kompresi terjadi 100% di browser Anda. Aman dari kebocoran data karena foto tidak pernah dikirim ke internet.</p>" }
      ]
    }
  },
  "image-resizer": {
    en: {
      title: "Pixel-Perfect Image Resizer",
      sections: [
        { title: "Precise Dimensions", content: "<h2>Resize for Any Platform</h2><p>Change the width and height of your images in pixels with precision. Use the <strong>Lock Aspect Ratio</strong> feature to ensure your photos don't look stretched or squashed.</p>" }
      ]
    },
    id: {
      title: "Ubah Ukuran Gambar Pixel-Perfect",
      sections: [
        { title: "Dimensi yang Tepat", content: "<h2>Sesuaikan Kebutuhan</h2><p>Ubah lebar dan tinggi gambar dalam pixel dengan akurat. Gunakan fitur kunci rasio agar foto tetap proporsional.</p>" }
      ]
    }
  },
  "image-cropper": {
    en: {
      title: "Interactive Image Cropping Tool",
      sections: [
        { title: "Perfect Aspect Ratios", content: "<h2>Crop for Social Media</h2><p>Crop your photos to exact ratios like <strong>1:1 (Square)</strong> for Instagram or <strong>16:9</strong> for YouTube thumbnails. Works entirely on your device for maximum speed and privacy.</p>" }
      ]
    },
    id: {
      title: "Potong Gambar Interaktif",
      sections: [
        { title: "Rasio Dimensi Sempurna", content: "<h2>Potong untuk Media Sosial</h2><p>Sesuaikan foto Anda ke rasio 1:1 (Kotak) atau 16:9 dengan mudah dan cepat tanpa upload file ke server.</p>" }
      ]
    }
  },
  "pdf-merge": {
    en: {
      title: "Secure PDF Merger & Combiner",
      sections: [
        { title: "Combine Documents Privately", content: "<h2>Client-Side PDF Processing</h2><p>Merge multiple PDF files into one single document securely. Since the processing happens in your browser, your sensitive documents are <strong>never uploaded</strong> to a cloud server.</p>" }
      ]
    },
    id: {
      title: "Gabung PDF Aman & Privat",
      sections: [
        { title: "Satukan Dokumen", content: "<h2>Proses Tanpa Internet</h2><p>Gabungkan beberapa file PDF menjadi satu dokumen secara aman. Data Anda tetap di perangkat Anda, tidak pernah diunggah ke server mana pun.</p>" }
      ]
    }
  },
  "csv-helper": {
    en: {
      title: "Clean and Format CSV Data",
      sections: [
        { title: "Data Sanitization", content: "<h2>Ready for Excel & Sheets</h2><p>Clean your raw CSV data by removing duplicate rows and trimming unnecessary whitespace. Ensure your datasets are consistent and ready for analysis.</p>" }
      ]
    },
    id: {
      title: "Pembersih & Format Data CSV",
      sections: [
        { title: "Sanitasi Data", content: "<h2>Siap untuk Excel</h2><p>Bersihkan data CSV mentah Anda dengan menghapus baris duplikat dan spasi tambahan secara otomatis di browser.</p>" }
      ]
    }
  },
  "calculator": {
    en: {
      title: "Construction Material & Cost Estimator",
      sections: [
        { title: "Accurate Renovations", content: "<h2>Calculate Paint and Tiles</h2><p>Enter your room dimensions to estimate exactly how many liters of paint or square meters of tiles you need. Avoid waste and save money on your next DIY project.</p>" }
      ]
    },
    id: {
      title: "Kalkulator Material & Estimasi Biaya",
      sections: [
        { title: "Renovasi Akurat", content: "<h2>Hitung Cat dan Ubin</h2><p>Masukkan dimensi ruangan untuk menghitung kebutuhan cat atau ubin secara presisi. Hemat biaya dengan estimasi yang tepat.</p>" }
      ]
    }
  }
};
