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
  "tennis": {
    en: {
      title: "Mastering Your Tennis Mixer with Our Match Generator",
      sections: [
        {
          title: "How to Set Up Your Tournament",
          content: "Setting up a social tennis session has never been easier. Start by entering your <b>Number of Players</b> and <b>Total Duration</b>. Our generator will automatically calculate how many rounds fit into your time slot. Add your players' names and assign their skill levels from 'Newbie' to 'Pro' to ensure the fairest possible match-ups."
        },
        {
          title: "The Fair Play Algorithm Explained",
          content: "Tired of the same people sitting out every round? Our proprietary <b>Fair Play Algorithm</b> prioritizes players who have played the fewest games first. When balancing teams, it uses a 'Best + Worst vs. Middle Two' logic, ensuring that even with mixed skill levels, every match is competitive and fun."
        },
        {
          title: "Smart Swapping & Rebalancing",
          content: "If a player needs to leave early or arrives late, use the <b>Swap</b> feature. You can replace a player in any scheduled match, and the tool will offer to rebalance all future games to maintain equal court time for the remaining roster."
        }
      ]
    },
    id: {
      title: "Panduan Lengkap Generator Jadwal Tenis Ganda",
      sections: [
        {
          title: "Cara Mengatur Turnamen Anda",
          content: "Mengatur sesi tenis sosial kini lebih mudah. Mulailah dengan memasukkan <b>Jumlah Pemain</b> dan <b>Durasi Sewa Lapangan</b>. Generator kami akan menghitung otomatis berapa banyak babak yang tersedia. Masukkan nama pemain dan level skill mereka untuk hasil pembagian tim yang adil."
        },
        {
          title: "Memahami Algoritma Fair Play",
          content: "Algoritma kami memprioritaskan pemain yang paling sedikit bermain untuk masuk ke babak berikutnya. Ini memastikan semua orang mendapatkan waktu lapangan yang sama, sangat cocok untuk grup dengan jumlah pemain ganjil."
        },
        {
          title: "Tips Mengelola Roster Pemain",
          content: "Gunakan fitur <b>Ganti Pemain (Swap)</b> jika ada teman yang harus pulang lebih awal. Sistem akan menawarkan untuk mengacak ulang jadwal masa depan agar tetap adil bagi mereka yang masih bertahan."
        }
      ]
    },
    de: {
      title: "Meisterung Ihres Tennis-Mixers mit unserem Match-Generator",
      sections: [
        {
          title: "So richten Sie Ihr Turnier ein",
          content: "Die Einrichtung einer sozialen Tennis-Session war noch nie so einfach. Geben Sie zunächst Ihre <b>Spieleranzahl</b> und die <b>Gesamtdauer</b> ein. Unser Generator berechnet automatisch, wie viele Runden in Ihr Zeitfenster passen. Fügen Sie die Namen Ihrer Spieler hinzu und weisen Sie ihnen Spielstärken von 'Anfänger' bis 'Profi' zu, um die fairsten Paarungen zu gewährleisten."
        },
        {
          title: "Der Fair-Play-Algorithmus erklärt",
          content: "Haben Sie es satt, dass immer die gleichen Leute jede Runde aussetzen müssen? Unser proprietärer <b>Fair-Play-Algorithmus</b> priorisiert Spieler, die bisher am wenigsten Spiele absolviert haben. Bei der Team-Zusammenstellung wird eine Logik von 'Bester + Schlechtester gegen die mittleren zwei' verwendet, um sicherzustellen, dass jedes Match wettbewerbsfähig bleibt."
        },
        {
          title: "Intelligentes Tauschen & Neuverteilen",
          content: "Wenn ein Spieler früher gehen muss oder später ankommt, nutzen Sie die <b>Tausch-Funktion</b>. Sie können einen Spieler in jedem geplanten Match ersetzen, und das Tool bietet an, alle zukünftigen Spiele neu zu verteilen, um eine gleiche Spielzeit für den verbleibenden Kader beizubehalten."
        }
      ]
    },
    es: {
      title: "Dominando su Mixer de Tenis con nuestro Generador de Partidos",
      sections: [
        {
          title: "Cómo configurar su torneo",
          content: "Configurar una sesión social de tenis nunca ha sido tan fácil. Comience ingresando su <b>Número de Jugadores</b> y la <b>Duración Total</b>. Nuestro generador calculará automáticamente cuántas rondas caben en su intervalo de tiempo. Agregue los nombres de sus jugadores y asigne sus niveles de habilidad para asegurar los enfrentamientos más justos."
        },
        {
          title: "El Algoritmo de Juego Limpio Explicado",
          content: "¿Cansado de que las mismas personas se queden fuera en cada ronda? Nuestro <b>Algoritmo de Juego Limpio</b> prioriza a los jugadores que han jugado menos partidos primero. Al equilibrar los equipos, utiliza una lógica de 'Mejor + Peor vs. Los dos del medio', asegurando que cada partido sea competitivo."
        },
        {
          title: "Intercambio Inteligente y Reequilibrio",
          content: "Si un jugador necesita irse temprano o llega tarde, use la función de <b>Intercambio</b>. Puede reemplazar a un jugador en cualquier partido programado, y la herramienta ofrecerá reequilibrar todos los juegos futuros para mantener el tiempo en cancha igual para el resto."
        }
      ]
    },
    fr: {
      title: "Maîtrisez vos Rencontres de Tennis avec notre Générateur",
      sections: [
        {
          title: "Comment configurer votre tournoi",
          content: "Organiser une session de tennis social n'a jamais été aussi simple. Commencez par saisir votre <b>Nombre de Joueurs</b> et la <b>Durée Totale</b>. Notre générateur calculera automatiquement le nombre de tours possibles. Ajoutez les noms des joueurs et définissez leurs niveaux pour garantir des matchs équilibrés."
        },
        {
          title: "L'Algorithme Fair Play expliqué",
          content: "Marre que les mêmes personnes attendent à chaque tour ? Notre <b>Algorithme Fair Play</b> donne la priorité aux joueurs ayant le moins joué. Pour l'équilibre des équipes, il utilise la logique 'Meilleur + Moins bon vs Les deux du milieu', assurant des matchs compétitifs pour tous."
        },
        {
          title: "Échange Intelligent et Rééquilibrage",
          content: "Si un joueur doit partir tôt ou arrive en retard, utilisez la fonction <b>Échanger</b>. Vous pouvez remplacer un joueur dans n'importe quel match prévu, et l'outil proposera de recalculer les matchs futurs pour maintenir un temps de jeu égal pour tous."
        }
      ]
    },
    pt: {
      title: "Dominando seu Mixer de Tênis com nosso Gerador de Partidas",
      sections: [
        {
          title: "Como configurar seu torneio",
          content: "Configurar uma sessão social de tênis nunca foi tão fácil. Comece inserindo o <b>Número de Jogadores</b> e a <b>Duração Total</b>. Nosso gerador calculará automaticamente quantas rodadas cabem no seu tempo. Adicione os nomes dos jogadores e atribua níveis de habilidade para garantir jogos justos."
        },
        {
          title: "O Algoritmo Fair Play Explicado",
          content: "Cansado das mesmas pessoas ficarem de fora em todas as rodadas? Nosso <b>Algoritmo Fair Play</b> prioriza quem jogou menos partidas. Ao equilibrar as equipes, utiliza a lógica 'Melhor + Pior vs. Dois do meio', garantindo que cada partida seja competitiva e divertida."
        },
        {
          title: "Troca Inteligente e Reequilíbrio",
          content: "Se um jogador precisar sair cedo ou chegar atrasado, use o recurso <b>Trocar</b>. Você pode substituir um jogador em qualquer partida agendada, e a ferramenta oferecerá reequilibrar os jogos futuros para manter o tempo de quadra igual para o restante do grupo."
        }
      ]
    },
    it: {
      title: "Padroneggiare il tuo Tennis Mixer con il nostro Generatore",
      sections: [
        {
          title: "Come impostare il tuo torneo",
          content: "Organizzare una sessione di tennis sociale non è mai stato così facile. Inizia inserendo il <b>Numero di Giocatori</b> e la <b>Durata Totale</b>. Il nostro generatore calcolerà automaticamente quanti turni rientrano nella tua fascia oraria. Aggiungi i nomi dei giocatori e assegna i livelli di abilità per garantire sfide equilibrate."
        },
        {
          title: "L'Algoritmo Fair Play spiegato",
          content: "Stanco delle solite persone che restano fuori a ogni turno? Il nostro <b>Algoritmo Fair Play</b> dà la priorità ai giocatori che hanno giocato meno partite. Nel bilanciare le squadre, usa la logica 'Migliore + Peggiore vs I due medi', assicurando che ogni match sia competitivo."
        },
        {
          title: "Scambio Intelligente e Ribilanciamento",
          content: "Se un giocatore deve andarsene prima o arriva in ritardo, usa la funzione <b>Scambia</b>. Puoi sostituire un giocatore in qualsiasi match programmato e lo strumento offrirà di ribilanciare tutte le partite future per mantenere lo stesso tempo di gioco per tutti."
        }
      ]
    }
  },
  "budget-planner": {
    en: {
      title: "Why Zero-Based Budgeting is the Key to Financial Freedom",
      sections: [
        {
          title: "Give Every Dollar a Job",
          content: "Our planner uses the <b>Zero-Based Budgeting</b> method. This means your Income minus your Expenses should always equal zero. By assigning every cent to a specific category (Rent, Groceries, Savings), you stop 'leaking' money and start spending with intention."
        },
        {
          title: "100% Privacy: Your Data Stays Local",
          content: "Unlike other budgeting apps, VersoKit does <b>not</b> send your financial data to a server. Everything is stored in your browser's <b>LocalStorage</b>. This means you can manage your wealth with total peace of mind, knowing your personal information is invisible to the world."
        },
        {
          title: "Managing Recurring Bills",
          content: "Set up your monthly subscriptions like Netflix or Rent once. Our tool will alert you when a bill is due and allow you to log the transaction with a single click, keeping your 'Available' balances accurate throughout the month."
        }
      ]
    },
    id: {
      title: "Kuasai Keuangan dengan Metode Anggaran Berbasis Nol",
      sections: [
        {
          title: "Berikan Tugas untuk Setiap Rupiah",
          content: "Metode <b>Zero-Based Budgeting</b> memastikan Pendapatan dikurangi Pengeluaran sama dengan nol. Dengan mengalokasikan setiap rupiah ke kategori tertentu (Listrik, Makan, Tabungan), Anda akan lebih sadar akan kemana uang Anda pergi."
        },
        {
          title: "Privasi Mutlak di Perangkat Anda",
          content: "VersoKit memproses semua data keuangan 100% secara lokal di browser Anda. Tidak ada data yang dikirim ke server kami, sehingga rahasia finansial Anda tetap aman dan pribadi."
        },
        {
          title: "Ekspor dan Backup Data",
          content: "Gunakan fitur <b>Backup JSON</b> untuk menyimpan riwayat anggaran Anda ke file lokal. Anda juga bisa mengekspor laporan ke format <b>CSV</b> untuk dibuka di Excel atau Google Sheets."
        }
      ]
    },
    de: {
      title: "Warum Zero-Based Budgeting der Schlüssel zur finanziellen Freiheit ist",
      sections: [
        {
          title: "Geben Sie jedem Euro eine Aufgabe",
          content: "Unser Planer nutzt die <b>Zero-Based Budgeting</b> Methode. Das bedeutet: Einkommen minus Ausgaben ergibt immer Null. Indem Sie jeden Cent einer Kategorie (Miete, Lebensmittel, Sparen) zuweisen, stoppen Sie unbewusste Ausgaben."
        },
        {
          title: "100% Privatsphäre: Ihre Daten bleiben lokal",
          content: "Im Gegensatz zu anderen Apps sendet VersoKit <b>keine</b> Finanzdaten an einen Server. Alles wird im <b>LocalStorage</b> Ihres Browsers gespeichert. So verwalten Sie Ihr Vermögen absolut privat."
        },
        {
          title: "Wiederkehrende Rechnungen verwalten",
          content: "Richten Sie monatliche Abos wie Netflix oder Miete einmalig ein. Unser Tool erinnert Sie an fällige Rechnungen und ermöglicht das Buchen mit einem Klick."
        }
      ]
    },
    es: {
      title: "Por qué el presupuesto base cero es la clave de la libertad financiera",
      sections: [
        {
          title: "Dale un trabajo a cada moneda",
          content: "Usamos el método de <b>Presupuesto Base Cero</b>. Esto significa que tus ingresos menos tus gastos deben ser siempre cero. Al asignar cada centavo a una categoría, gastas con intención."
        },
        {
          title: "100% Privacidad: Tus datos son locales",
          content: "VersoKit <b>no</b> envía tus datos financieros a ningún servidor. Todo se guarda en el <b>LocalStorage</b> de tu navegador, garantizando que tu información personal sea invisible para el mundo."
        },
        {
          title: "Gestión de facturas recurrentes",
          content: "Configura tus suscripciones o alquiler una vez. La herramienta te avisará cuando venza una factura y te permitirá registrarla con un solo clic."
        }
      ]
    },
    fr: {
      title: "Le budget base zéro : la clé de la liberté financière",
      sections: [
        {
          title: "Donnez une mission à chaque euro",
          content: "Notre outil utilise la méthode du <b>Budget Base Zéro</b>. Vos revenus moins vos dépenses doivent toujours égaler zéro. En assignant chaque centime à une catégorie (Loyer, Courses, Épargne), vous dépensez de manière intentionnelle."
        },
        {
          title: "100% Privé : Vos données restent locales",
          content: "VersoKit n'envoie <b>aucune</b> donnée financière vers un serveur. Tout est stocké dans le <b>LocalStorage</b> de votre navigateur. Vous gérez vos finances en toute sérénité."
        },
        {
          title: "Gérer les charges récurrentes",
          content: "Configurez vos abonnements une fois pour toutes. Notre outil vous alerte des échéances et permet de valider la transaction en un clic."
        }
      ]
    },
    pt: {
      title: "Por que o Orçamento Base Zero é a chave para a liberdade financeira",
      sections: [
        {
          title: "Dê uma função a cada real",
          content: "Nosso planejador utiliza o método de <b>Orçamento Base Zero</b>. Isso significa que sua renda menos suas despesas deve ser sempre igual a zero. Ao atribuir cada centavo a uma categoria, você gasta com propósito."
        },
        {
          title: "100% Privacidade: Seus dados ficam no dispositivo",
          content: "Diferente de outros apps, o VersoKit <b>não</b> envia seus dados para servidores. Tudo é salvo no <b>LocalStorage</b> do seu navegador, mantendo sua vida financeira protegida."
        },
        {
          title: "Gerenciando contas recorrentes",
          content: "Configure assinaturas e aluguel uma única vez. A ferramenta avisará quando uma conta estiver vencendo e permitirá registrá-la com um clique."
        }
      ]
    },
    it: {
      title: "Perché il budget a base zero è la chiave per la libertà finanziaria",
      sections: [
        {
          title: "Dai un compito a ogni euro",
          content: "Il nostro planner usa il metodo del <b>Budget a Base Zero</b>. Le tue entrate meno le uscite devono sempre fare zero. Assegnando ogni centesimo a una categoria, smetti di sprecare denaro e pianifichi con intenzione."
        },
        {
          title: "100% Privacy: I tuoi dati restano locali",
          content: "VersoKit <b>non</b> invia i tuoi dati finanziari a un server. Tutto è memorizzato nel <b>LocalStorage</b> del tuo browser. Gestisci i tuoi risparmi in totale tranquillità."
        },
        {
          title: "Gestione delle spese ricorrenti",
          content: "Imposta i tuoi abbonamenti o l'affitto una volta sola. Lo strumento ti avviserà delle scadenze e ti permetterà di registrare l'uscita con un semplice clic."
        }
      ]
    }
  },
  "invoice": {
    en: {
      title: "Professional PDF Invoicing for Freelancers",
      sections: [
        {
          title: "The Importance of Clear Billing",
          content: "A professional invoice ensures you get paid faster. Our tool generates clean, high-contrast PDF invoices that include all necessary legal fields: Business Info, Client Details, Tax calculations, and custom payment terms."
        },
        {
          title: "Required Fields for a Valid Invoice",
          content: "To avoid payment delays, always ensure your invoice includes a unique <b>Invoice Number</b>, the <b>Date of Issue</b>, a clear breakdown of services, and the <b>Grand Total</b> including any applicable taxes."
        }
      ]
    },
    id: {
      title: "Cara Buat Invoice Profesional untuk Freelancer",
      sections: [
        {
          title: "Keuntungan Invoice PDF",
          content: "Invoice yang rapi membantu Anda terlihat lebih profesional di mata klien. Gunakan generator kami untuk membuat file PDF yang siap cetak atau kirim via email dalam hitungan detik."
        },
        {
          title: "Komponen Penting dalam Faktur",
          content: "Pastikan invoice Anda memiliki Nama Bisnis, Nama Klien, Tanggal, Rincian Barang/Jasa, dan Total Harga agar proses pembayaran berjalan lancar tanpa hambatan administrasi."
        }
      ]
    },
    de: {
      title: "Professionelle PDF-Rechnungen für Freelancer",
      sections: [
        {
          title: "Die Bedeutung klarer Abrechnungen",
          content: "Eine professionelle Rechnung sorgt für schnellere Zahlungen. Unser Tool erstellt saubere PDF-Rechnungen mit allen rechtlichen Feldern: Firmeninfo, Kundendetails und Steuern."
        },
        {
          title: "Pflichtangaben für Rechnungen",
          content: "Stellen Sie sicher, dass Ihre Rechnung eine eindeutige Nummer, das Ausstellungsdatum und eine klare Aufschlüsselung der Leistungen enthält."
        }
      ]
    },
    es: {
      title: "Facturación PDF profesional para autónomos",
      sections: [
        {
          title: "La importancia de cobros claros",
          content: "Una factura profesional te ayuda a cobrar más rápido. Generamos PDFs limpios que incluyen info de la empresa, detalles del cliente e impuestos."
        },
        {
          title: "Campos necesarios en una factura",
          content: "Asegúrate de incluir un número de factura único, la fecha de emisión y el desglose claro de los servicios prestados."
        }
      ]
    },
    fr: {
      title: "Facturation PDF professionnelle pour freelances",
      sections: [
        {
          title: "L'importance d'une facturation claire",
          content: "Une facture professionnelle garantit un paiement plus rapide. Notre outil génère des PDFs clairs incluant les infos légales et les taxes."
        },
        {
          title: "Mentions obligatoires sur une facture",
          content: "N'oubliez jamais d'inclure un numéro unique, la date d'émission et le détail précis des prestations fournies."
        }
      ]
    },
    pt: {
      title: "Faturamento PDF profissional para freelancers",
      sections: [
        {
          title: "A importância de cobranças claras",
          content: "Uma fatura profissional garante que você receba mais rápido. Geramos PDFs limpos com dados da empresa, cliente e impostos."
        },
        {
          title: "Campos obrigatórios em uma fatura",
          content: "Sempre inclua um número único de fatura, a data de emissão e uma descrição detalhada dos serviços prestados."
        }
      ]
    },
    it: {
      title: "Fatturazione PDF professionale per freelance",
      sections: [
        {
          title: "L'importanza di una fattura chiara",
          content: "Una fattura professionale assicura pagamenti più veloci. Il nostro strumento crea PDF puliti con tutti i dettagli legali e fiscali."
        },
        {
          title: "Campi obbligatori per una fattura valida",
          content: "Assicurati di inserire un numero univoco, la data di emissione e un riepilogo chiaro dei servizi offerti."
        }
      ]
    }
  },
  "futsal": {
    en: {
      title: "Digital Futsal Scoreboard: Pro Features for Local Matches",
      sections: [
        {
          title: "Managing the Clock and Fouls",
          content: "Standard Futsal rules require a 20-minute countdown. Our scoreboard includes presets for 10, 15, and 20 minutes. It also tracks team fouls, highlighting them in <b>red</b> once a team reaches the 5-foul limit (Second Penalty threshold)."
        },
        {
          title: "Digital vs. Manual Scoring",
          content: "Stop using paper or unreliable mobile apps. Our scoreboard is designed for large screens and TV displays, providing high visibility for players and spectators alike, even in high-intensity match environments."
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital: Fitur Pro untuk Sparing",
      sections: [
        {
          title: "Mengelola Waktu dan Pelanggaran",
          content: "Gunakan pengatur waktu standar 20 menit dengan fitur jeda (pause) instan. Alat ini juga mencatat akumulasi pelanggaran (fouls) dan akan berubah menjadi <b>merah</b> saat tim mencapai 5 pelanggaran sebagai tanda penalti titik kedua."
        },
        {
          title: "Tampilan untuk Layar Besar",
          content: "Papan skor ini dioptimalkan untuk ditampilkan di TV atau monitor besar di lapangan, memberikan kemudahan bagi penonton dan pemain untuk melihat skor dan sisa waktu dengan jelas."
        }
      ]
    },
    de: {
      title: "Digitales Futsal-Scoreboard: Profi-Features für lokale Spiele",
      sections: [
        {
          title: "Uhr und Fouls verwalten",
          content: "Futsal-Regeln sehen einen 20-Minuten-Countdown vor. Unser Board bietet Presets und trackt Teamfouls – ab 5 Fouls wird die Anzeige <b>rot</b> (Zehnmeter-Marke)."
        },
        {
          title: "Große Anzeige für TV-Screens",
          content: "Vergessen Sie Papierlisten. Unser Scoreboard ist für große Bildschirme optimiert, damit Spieler und Zuschauer alles im Blick haben."
        }
      ]
    },
    es: {
      title: "Marcador de Futsal Digital: Funciones Pro para partidos locales",
      sections: [
        {
          title: "Gestión del tiempo y faltas",
          content: "Incluye cuenta atrás de 20 min. Rastrea las faltas acumuladas y las resalta en <b>rojo</b> al llegar a 5 (límite para doble penalti)."
        },
        {
          title: "Visibilidad para pantallas grandes",
          content: "Diseñado para mostrarse en TVs en la cancha, asegurando que todos vean el marcador claramente."
        }
      ]
    },
    fr: {
      title: "Tableau de Score Futsal Digital : Fonctions Pro",
      sections: [
        {
          title: "Gérer le chronomètre et les fautes",
          content: "Compte à rebours de 20 min inclus. Suit les fautes d'équipe et s'affiche en <b>rouge</b> dès la 5ème faute (seuil du jet franc)."
        },
        {
          title: "Affichage pour grands écrans",
          content: "Optimisé pour une diffusion sur TV, offrant une visibilité maximale pour les joueurs et le public."
        }
      ]
    },
    pt: {
      title: "Placar de Futsal Digital: Recursos Pro para Amistosos",
      sections: [
        {
          title: "Gerenciando o tempo e faltas",
          content: "Contagem de 20 min integrada. Monitora as faltas coletivas, destacando em <b>vermelho</b> ao atingir 5 faltas (limite para tiro livre)."
        },
        {
          title: "Visibilidade em telas grandes",
          content: "Ideal para exibir em TVs no ginásio, facilitando a visualização por jogadores e torcida."
        }
      ]
    },
    it: {
      title: "Tabellone Futsal Digitale: Funzioni Pro per Scontri Locali",
      sections: [
        {
          title: "Gestione tempo e falli",
          content: "Countdown da 20 min incluso. Registra i falli cumulativi ed evidenzia in <b>rosso</b> al raggiungimento dei 5 falli (tiro libero)."
        },
        {
          title: "Visibilità su schermi grandi",
          content: "Perfetto per essere trasmesso su TV, garantendo che tutti vedano chiaramente il punteggio."
        }
      ]
    }
  },
  "inventory": {
    en: {
      title: "Mastering Small Business Stock Control",
      sections: [
        {
          title: "The Importance of Stock Tracking",
          content: "Keeping an accurate count of your inventory is the backbone of any successful small business. Our tool helps you avoid stockouts and overstocking by providing a clear, digital view of your items."
        },
        {
          title: "The FIFO Method",
          content: "<b>FIFO (First-In, First-Out)</b> is a simple but effective strategy where you sell the oldest stock first. By tracking your quantities regularly, you can ensure that nothing sits on the shelf for too long."
        }
      ]
    },
    id: {
      title: "Cara Mudah Mengelola Stok Barang UKM",
      sections: [
        {
          title: "Pentingnya Pencatatan Stok",
          content: "Mencatat stok masuk dan keluar secara teratur adalah kunci kesuksesan UKM. Alat kami membantu Anda memantau ketersediaan barang agar tidak pernah kehabisan stok saat pelanggan memesan."
        },
        {
          title: "Strategi FIFO di Gudang",
          content: "Gunakan metode <b>FIFO (First-In, First-Out)</b> dengan memastikan barang yang masuk lebih awal dijual terlebih dahulu. Catatan digital memudahkan Anda melihat barang mana yang sudah lama mengendap."
        }
      ]
    },
    de: {
      title: "Bestandsführung für kleine Unternehmen meistern",
      sections: [
        {
          title: "Wichtigkeit der Bestandsverfolgung",
          content: "Ein präziser Überblick über Ihr Inventar ist die Basis jedes Geschäfts. Unser Tool hilft Ihnen, Engpässe und Überbestände zu vermeiden."
        },
        {
          title: "Die FIFO-Methode",
          content: "<b>FIFO (First-In, First-Out)</b> bedeutet, die ältesten Bestände zuerst zu verkaufen. So stellen Sie sicher, dass keine Waren veralten."
        }
      ]
    },
    es: {
      title: "Control de stock para pequeñas empresas",
      sections: [
        {
          title: "Importancia de rastrear inventario",
          content: "Mantener un conteo exacto es vital. Nuestra herramienta te ayuda a evitar la falta de productos o el exceso de stock."
        },
        {
          title: "El método FIFO",
          content: "<b>FIFO (Primero en entrar, primero en salir)</b> asegura que vendas lo más antiguo primero, evitando mermas o productos obsoletos."
        }
      ]
    },
    fr: {
      title: "Maîtriser la gestion des stocks pour PME",
      sections: [
        {
          title: "Importance du suivi de stock",
          content: "Un inventaire précis est le pilier de toute réussite. Notre outil évite les ruptures de stock ou le surstockage inutile."
        },
        {
          title: "La méthode FIFO",
          content: "<b>FIFO (Premier entré, premier sorti)</b> consiste à vendre les stocks les plus anciens en priorité pour éviter les pertes."
        }
      ]
    },
    pt: {
      title: "Controle de estoque para pequenas empresas",
      sections: [
        {
          title: "Importância do rastreamento",
          content: "Manter uma contagem precisa é a base do sucesso. Nossa ferramenta ajuda a evitar falta ou excesso de produtos."
        },
        {
          title: "O método FIFO",
          content: "<b>FIFO (Primeiro a entrar, primeiro a sair)</b> garante que você venda o estoque mais antigo primeiro, evitando perdas."
        }
      ]
    },
    it: {
      title: "Gestione magazzino per piccole imprese",
      sections: [
        {
          title: "Importanza del tracciamento stock",
          content: "Mantenere un conteggio accurato è fondamentale. Il nostro strumento ti aiuta a evitare rotture di stock o eccedenze."
        },
        {
          title: "Il metodo FIFO",
          content: "<b>FIFO (First-In, First-Out)</b> assicura che tu venda prima la merce più vecchia, evitando sprechi o prodotti invenduti."
        }
      ]
    }
  },
  "shift": {
    en: {
      title: "Creating Fair Employee Schedules",
      sections: [
        {
          title: "Balanced Shift Rotation",
          content: "Rotating employees between morning, afternoon, and night shifts is essential to prevent burnout. A transparent roster ensures everyone feels the workload is shared fairly."
        },
        {
          title: "Visualize Your Team Coverage",
          content: "Our visual shift planner allows you to see at a glance if you have enough staff for every day of the week. Use the color-coded system to identify gaps in your schedule immediately."
        }
      ]
    },
    id: {
      title: "Tips Membuat Jadwal Shift Karyawan yang Adil",
      sections: [
        {
          title: "Pembagian Shift yang Seimbang",
          content: "Membagi jadwal antara shift pagi, siang, dan malam secara adil sangat penting untuk menjaga kesehatan dan produktivitas karyawan. Roster yang transparan meminimalisir komplain dari staf."
        },
        {
          title: "Visualisasi Jadwal Kerja",
          content: "Sistem warna pada VersoKit memudahkan Anda melihat apakah cakupan tim sudah cukup untuk setiap hari. Anda bisa langsung mendeteksi jika ada hari yang kekurangan tenaga kerja."
        }
      ]
    },
    de: {
      title: "Faire Dienstpläne erstellen",
      sections: [
        {
          title: "Ausgewogene Schichtrotation",
          content: "Der Wechsel zwischen Früh-, Spät- und Nachtschicht verhindert Burnout. Ein transparenter Plan sorgt für Fairness im Team."
        },
        {
          title: "Teamabdeckung visualisieren",
          content: "Unser visueller Planer zeigt sofort, ob an jedem Tag genug Personal eingeplant ist. Nutzen Sie das Farbsystem zur Analyse."
        }
      ]
    },
    es: {
      title: "Creando horarios de empleados justos",
      sections: [
        {
          title: "Rotación equilibrada",
          content: "Rotar turnos de mañana y noche evita el agotamiento. Un cuadrante transparente asegura que la carga de trabajo sea compartida."
        },
        {
          title: "Visualiza la cobertura",
          content: "Nuestro planificador visual permite ver si tienes personal suficiente cada día de la semana de forma rápida."
        }
      ]
    },
    fr: {
      title: "Créer des plannings d'employés équitables",
      sections: [
        {
          title: "Rotation équilibrée des shifts",
          content: "Alterner entre matin et nuit est essentiel pour éviter l'épuisement. Un planning transparent garantit l'équité."
        },
        {
          title: "Visualiser la couverture d'équipe",
          content: "Notre outil visuel permet de vérifier en un clin d'œil si vous avez assez de personnel pour chaque jour."
        }
      ]
    },
    pt: {
      title: "Criando escalas de funcionários justas",
      sections: [
        {
          title: "Rotação equilibrada",
          content: "Alternar turnos entre manhã e noite evita o burnout. Uma escala transparente garante que o trabalho seja dividido igualmente."
        },
        {
          title: "Visualize a cobertura da equipe",
          content: "Nosso planejador visual permite ver rapidamente se há staff suficiente para cada dia da semana."
        }
      ]
    },
    it: {
      title: "Creare turni di lavoro equi",
      sections: [
        {
          title: "Rotazione bilanciata dei turni",
          content: "Ruotare il personale tra mattina e notte evita il burnout. Un piano trasparente assicura che il carico di lavoro sia diviso."
        },
        {
          title: "Visualizza la copertura del team",
          content: "Il nostro pianificatore visivo permette di vedere subito se c'è abbastanza personale per ogni giorno della settimana."
        }
      ]
    }
  },
  "lineup": {
    en: {
      title: "Football Tactics: Choosing the Right Formation",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "The classic <b>4-4-2</b> provides a balanced structure, while <b>4-3-3</b> is more offensive and dynamic. Choosing the right formation depends on your players' strengths and your tactical approach."
        },
        {
          title: "Visualizing Roles",
          content: "Using a lineup builder helps players visualize their starting positions and responsibilities on the pitch. It clears up confusion before the whistle blows."
        }
      ]
    },
    id: {
      title: "Strategi & Formasi Sepak Bola Modern",
      sections: [
        {
          title: "Panduan Memilih Formasi",
          content: "Formasi <b>4-4-2</b> memberikan keseimbangan antara pertahanan dan serangan, sedangkan <b>4-3-3</b> lebih dinamis untuk menyerang. Pilih strategi yang paling sesuai dengan komposisi pemain Anda."
        },
        {
          title: "Pentingnya Visualisasi Taktik",
          content: "Melihat posisi mereka secara visual di lapangan membantu pemain memahami peran dan tanggung jawab masing-masing sebelum pertandingan dimulai."
        }
      ]
    },
    de: {
      title: "Fußballtaktik: Die richtige Formation wählen",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "Das klassische <b>4-4-2</b> bietet Stabilität, während <b>4-3-3</b> offensiver ist. Die Wahl hängt von der Stärke Ihrer Spieler ab."
        },
        {
          title: "Rollen visualisieren",
          content: "Ein Aufstellungs-Planer hilft Spielern, ihre Startpositionen und Aufgaben auf dem Platz besser zu verstehen."
        }
      ]
    },
    es: {
      title: "Tácticas de fútbol: Elegir la formación",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "El <b>4-4-2</b> es equilibrado, el <b>4-3-3</b> es ofensivo. La elección depende de las fortalezas tácticas de tu plantilla."
        },
        {
          title: "Visualizar roles",
          content: "Ver la alineación ayuda a los jugadores a entender su posición y responsabilidad antes de que empiece el partido."
        }
      ]
    },
    fr: {
      title: "Tactiques de foot : Choisir la bonne formation",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "Le <b>4-4-2</b> offre une structure équilibrée, le <b>4-3-3</b> est plus offensif. Le choix dépend de votre approche tactique."
        },
        {
          title: "Visualiser les rôles",
          content: "Un créateur de compo aide les joueurs à visualiser leur placement et leurs consignes avant le coup d'envoi."
        }
      ]
    },
    pt: {
      title: "Táticas de Futebol: Escolhendo a formação certa",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "O <b>4-4-2</b> é equilibrado, enquanto o <b>4-3-3</b> é mais ofensivo. A escolha depende das forças do seu elenco."
        },
        {
          title: "Visualizando funções",
          content: "Montar a escalação ajuda os atletas a entenderem seu posicionamento e deveres em campo antes do jogo."
        }
      ]
    },
    it: {
      title: "Tattiche di Calcio: Scegliere il modulo giusto",
      sections: [
        {
          title: "4-4-2 vs 4-3-3",
          content: "Il classico <b>4-4-2</b> è equilibrato, il <b>4-3-3</b> è più dinamico. La scelta dipende dalle caratteristiche dei tuoi giocatori."
        },
        {
          title: "Visualizzare i ruoli",
          content: "Vedere la formazione aiuta i giocatori a capire la loro posizione e i compiti tattici prima della gara."
        }
      ]
    }
  },
  "split-bill": {
    en: {
      title: "Restaurant Bill Splitting Made Easy",
      sections: [
        {
          title: "Handling Tax & Service Charges",
          content: "Restaurant bills often come with additional fees like Tax and Service charges. Our calculator allows you to input a percentage that is automatically applied to each person's subtotal, ensuring the final sum is accurate down to the last cent."
        },
        {
          title: "Splitting by Item vs. Evenly",
          content: "While splitting a bill evenly is fast, it's not always fair. This tool is perfect for large groups where some guests might have ordered significantly more than others. By listing participants, you can ensure everyone pays for exactly what they consumed."
        }
      ]
    },
    id: {
      title: "Cara Hitung Split Bill Tanpa Pusing",
      sections: [
        {
          title: "Menangani Pajak dan Biaya Layanan",
          content: "Tagihan restoran seringkali menyertakan pajak (Tax) dan biaya layanan (Service Charge). Kalkulator kami memungkinkan Anda memasukkan persentase biaya tersebut agar otomatis dibebankan secara adil kepada setiap peserta."
        },
        {
          title: "Bagi Rata vs Bagi per Item",
          content: "Meskipun bagi rata lebih cepat, pembagian per item jauh lebih adil untuk acara seperti Buka Bersama (Bukber) atau makan siang kantor. Alat ini membantu Anda memberikan rincian transparan yang siap dibagikan ke grup WhatsApp."
        }
      ]
    },
    de: {
      title: "Rechnungen im Restaurant einfach teilen",
      sections: [
        {
          title: "Steuern und Servicegebühren",
          content: "Restaurantrechnungen enthalten oft Gebühren. Unser Rechner wendet Prozentsätze automatisch auf die Zwischensummen an."
        },
        {
          title: "Fair teilen statt nur durch Anzahl",
          content: "Gleichmäßiges Teilen ist schnell, aber nicht immer fair. Listen Sie Teilnehmer auf, damit jeder nur das bezahlt, was er hatte."
        }
      ]
    },
    es: {
      title: "Dividir cuentas de restaurante sin líos",
      sections: [
        {
          title: "Impuestos y cargos por servicio",
          content: "Las facturas suelen incluir extras. Nuestro calculador aplica porcentajes automáticamente para que el total sea exacto."
        },
        {
          title: "Dividir por item vs. por igual",
          content: "Dividir a partes iguales es rápido, pero injusto si alguien pidió más. Asegura que cada uno pague lo suyo."
        }
      ]
    },
    fr: {
      title: "Partager l'addition au restaurant facilement",
      sections: [
        {
          title: "Gérer les taxes et le service",
          content: "Le service est souvent inclus ou en sus. Notre outil applique les pourcentages automatiquement sur chaque quote-part."
        },
        {
          title: "Partage équitable vs. division brute",
          content: "Diviser par le nombre de convives est rapide, mais peu juste. Listez les participants pour un paiement au réel."
        }
      ]
    },
    pt: {
      title: "Dividir conta de restaurante sem complicação",
      sections: [
        {
          title: "Lidando com taxas e impostos",
          content: "Contas de restaurante incluem taxas de serviço. Nossa calculadora aplica porcentagens automaticamente em cada subtotal."
        },
        {
          title: "Divisão por item vs. divisão igual",
          content: "Dividir igualmente é rápido, mas nem sempre justo. Garanta que cada amigo pague exatamente o que consumiu."
        }
      ]
    },
    it: {
      title: "Dividere il conto al ristorante senza errori",
      sections: [
        {
          title: "Gestione tasse e coperto",
          content: "I conti includono spesso costi extra. Il nostro calcolatore applica le percentuali automaticamente su ogni quota."
        },
        {
          title: "Divisione equa vs. divisione in parti uguali",
          content: "Dividere per il numero di persone è veloce, ma ingiusto se qualcuno ha ordinato di più. Paga solo quello che mangi."
        }
      ]
    }
  },
  "scoreboard": {
    en: {
      title: "Digital Scoreboard for Any Sport",
      sections: [
        {
          title: "One Scoreboard, Many Sports",
          content: "Whether you're playing Volleyball, Badminton, Table Tennis, or even a casual board game, this universal scoreboard is designed to adapt. Set your target score (e.g., 21 or 25) and track both points and sets won with a clean, high-contrast interface."
        },
        {
          title: "High Visibility for Players",
          content: "Designed for use on mobile phones, tablets, or even cast to a TV screen. The large typography ensures that players and spectators can see the score clearly from across the court, eliminating confusion and maintaining the flow of the game."
        }
      ]
    },
    id: {
      title: "Papan Skor Digital Serbaguna (Badminton/Voli)",
      sections: [
        {
          title: "Satu Papan untuk Semua Cabang",
          content: "Baik Anda bermain Bulu Tangkis, Voli, Tenis Meja, atau bahkan permainan kartu, papan skor ini siap digunakan. Anda bisa mengatur target poin kemenangan (misal 21 atau 25) dan mencatat skor serta jumlah set yang dimenangkan dengan mudah."
        },
        {
          title: "Visibilitas Tinggi untuk Pemain",
          content: "Tampilan didesain agar terlihat jelas dari kejauhan. Sangat cocok digunakan di ponsel, tablet, atau dihubungkan ke layar TV lapangan agar pemain dan penonton bisa memantau skor tanpa gangguan iklan."
        }
      ]
    },
    de: {
      title: "Digitales Scoreboard für jede Sportart",
      sections: [
        {
          title: "Ein Board, viele Sportarten",
          content: "Ob Volleyball, Badminton oder Tischtennis – dieses Scoreboard passt sich an. Setzen Sie Zielpunkte und tracken Sie Sätze."
        },
        {
          title: "Hohe Sichtbarkeit für Spieler",
          content: "Dank großer Typografie können Spieler und Zuschauer den Spielstand auch aus der Ferne perfekt ablesen."
        }
      ]
    },
    es: {
      title: "Marcador digital para cualquier deporte",
      sections: [
        {
          title: "Un marcador, muchos deportes",
          content: "Sirve para Voleibol, Bádminton o Ping Pong. Fija los puntos de victoria y lleva el control de los sets ganados."
        },
        {
          title: "Alta visibilidad para jugadores",
          content: "Diseñado con números grandes para que se vea bien desde el otro lado de la cancha sin confusiones."
        }
      ]
    },
    fr: {
      title: "Tableau de score digital multi-sports",
      sections: [
        {
          title: "Un seul outil pour tous les sports",
          content: "Volley, Badminton, Tennis de table... Réglez le score cible et suivez les points et les sets remportés."
        },
        {
          title: "Haute visibilité pour les joueurs",
          content: "L'affichage contrasté permet de lire le score de loin sur le terrain, idéal sur tablette ou TV."
        }
      ]
    },
    pt: {
      title: "Placar Digital para qualquer esporte",
      sections: [
        {
          title: "Um placar, vários esportes",
          content: "Para Vôlei, Badminton ou Pingue-pongue. Defina a pontuação de vitória e acompanhe os sets ganhos."
        },
        {
          title: "Alta visibilidade para jogadores",
          content: "Números grandes e limpos garantem que todos na quadra vejam o resultado sem dificuldades."
        }
      ]
    },
    it: {
      title: "Segnapunti digitale per ogni sport",
      sections: [
        {
          title: "Un tabellone, molti sport",
          content: "Dalla Pallavolo al Badminton. Imposta il punteggio target e tieni traccia di punti e set vinti."
        },
        {
          title: "Alta visibilità per i giocatori",
          content: "Caratteri grandi e alta leggibilità permettono di vedere il punteggio da fondo campo senza problemi."
        }
      ]
    }
  }
};
