
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
    en: {
      title: "Americano Tournament Generator (Padel & Pickleball)",
      sections: [
        { title: "How Americano Tournaments Work", content: "Americano is a social tournament format for Padel and Pickleball. You play with a different partner in every round. The app handles the complex math of pairing and scoring." },
        { title: "Padel vs. Pickleball Modes", content: "For **Padel**, use 'Target Score' (e.g., 32 points total). For **Pickleball**, use 'Race Mode' (e.g., first to 11). The system automatically manages the bench if you have odd numbers of players." }
      ]
    },
    id: {
      title: "Generator Turnamen Americano (Padel & Pickleball)",
      sections: [
        { title: "Cara Main Turnamen Americano", content: "Americano adalah format turnamen sosial untuk Padel dan Pickleball. Anda berganti pasangan setiap ronde. Aplikasi ini mengatur jadwal pasangan dan skor secara otomatis." },
        { title: "Mode Padel vs Pickleball", content: "Untuk **Padel**, gunakan 'Target Poin' (misal: total 32). Untuk **Pickleball**, gunakan 'Mode Race' (misal: siapa cepat dapat 11). Sistem otomatis mengatur cadangan jika jumlah pemain ganjil." }
      ]
    },
    de: {
      title: "Americano-Turnier-Generator (Padel & Pickleball)",
      sections: [
        { title: "Wie Americano-Turniere funktionieren", content: "Americano ist ein soziales Turnierformat. Sie spielen in jeder Runde mit einem anderen Partner. Die App übernimmt die Paarung." },
        { title: "Modi", content: "Wählen Sie zwischen Zielpunktzahl für Padel oder Race-Modus für Pickleball." }
      ]
    },
    es: {
      title: "Generador de Torneos Americano",
      sections: [
        { title: "Cómo funciona", content: "El Americano es un formato social donde cambias de pareja en cada ronda. La app gestiona los emparejamientos." },
        { title: "Pádel vs Pickleball", content: "Soporta puntuación fija (Pádel) o carrera de puntos (Pickleball)." }
      ]
    },
    pt: {
      title: "Gerador de Torneios Americano",
      sections: [
        { title: "Como funciona", content: "Americano é um formato social onde você muda de parceiro a cada rodada. O app cuida da matemática." }
      ]
    },
    fr: {
      title: "Générateur de Tournois Americano",
      sections: [
        { title: "Fonctionnement", content: "L'Americano est un format social où vous changez de partenaire à chaque tour." }
      ]
    },
    it: {
      title: "Generatore Tornei Americano",
      sections: [
        { title: "Come funciona", content: "L'Americano è un formato social in cui cambi partner ogni turno." }
      ]
    }
  },
  "budget-planner": {
    id: {
      title: "Panduan Lengkap & FAQ",
      sections: [
        {
          title: "Apa itu Zero-Based Budgeting?",
          content: "<p>Zero-Based Budgeting (ZBB) atau Anggaran Berbasis Nol adalah metode di mana setiap rupiah penghasilan Anda harus dialokasikan ke pos tertentu (Tabungan, Tagihan, atau Kebutuhan) hingga tersisa nol. Tujuannya bukan menghabiskan uang, melainkan memastikan setiap uang 'memiliki pekerjaan'.</p>"
        },
        {
          title: "Mengapa Menggunakan Budget Planner VersoKit?",
          content: "<p>Kebanyakan aplikasi anggaran terlalu rumit atau berbayar mahal. VersoKit hadir dengan pendekatan berbeda:</p><ul><li><strong>Privasi 100%:</strong> Data keuangan Anda tersimpan di browser (LocalStorage), tidak dikirim ke server kami. Aman dari kebocoran data.</li><li><strong>Bisa Offline:</strong> Gunakan saat tidak ada sinyal internet.</li><li><strong>Gratis Selamanya:</strong> Tanpa biaya langganan bulanan.</li></ul>"
        },
        {
          title: "Cara Menggunakan Fitur 'Cover Overspending'",
          content: "<p>Jika kategori 'Makan' Anda merah (minus), jangan panik. Klik tombol 'Cover' dan pilih kategori lain (misal: 'Hiburan') untuk menutupi kekurangannya. Ini disebut prinsip <em>Roll with the Punches</em>.</p>"
        },
        {
          title: "FAQ (Pertanyaan Umum)",
          content: "<p><strong>Q: Apakah data saya hilang jika browser ditutup?</strong><br>A: Tidak. Data tersimpan otomatis di perangkat Anda.</p><p><strong>Q: Bisakah saya memindahkan data ke HP lain?</strong><br>A: Bisa. Gunakan fitur 'Manajemen Data' > 'Backup Data', lalu kirim file tersebut ke HP baru dan lakukan 'Restore Data'.</p>"
        }
      ]
    },
    en: {
      title: "Complete Guide & FAQ",
      sections: [
        {
          title: "What is Zero-Based Budgeting?",
          content: "<p>Zero-Based Budgeting (ZBB) is a method where every single dollar of your income is assigned to a specific category (Savings, Bills, Needs) until you have zero left to budget. The goal is to give every dollar a job.</p>"
        },
        {
          title: "Why Choose VersoKit Budget Planner?",
          content: "<p>VersoKit stands out by offering professional-grade budgeting tools with a focus on ease of use and security:</p><ul><li><strong>Privacy First:</strong> Your financial data stays in your browser. We never transmit or store your personal data on our servers.</li><li><strong>Offline Ready:</strong> Budget on the go, even without an internet connection.</li><li><strong>Zero Cost:</strong> No monthly subscriptions or hidden fees, ever.</li></ul>"
        },
        {
          title: "Handling Overspending",
          content: "<p>If a category turns red (negative), use the 'Cover' button to move money from another category (e.g., from 'Wants' or 'Entertainment') to cover the cost. This keeps your budget balanced and realistic.</p>"
        },
        {
          title: "Frequently Asked Questions",
          content: "<p><strong>Q: Is my data safe?</strong><br>A: Yes, it is stored locally on your device using LocalStorage technology. Your data never leaves your browser.</p><p><strong>Q: Can I export my data?</strong><br>A: Absolutely. You can download a JSON backup for safe-keeping or a CSV file for use in Excel or Google Sheets.</p>"
        }
      ]
    },
    de: {
      title: "Vollständiger Leitfaden & FAQ",
      sections: [
        {
          title: "Was ist Zero-Based Budgeting?",
          content: "<p>Zero-Based Budgeting (ZBB) ist eine Methode, bei der jeder Euro Ihres Einkommens einer bestimmten Kategorie zugewiesen wird, bis kein Geld mehr übrig ist. Das Ziel ist es, jedem Euro eine Aufgabe zu geben.</p>"
        },
        {
          title: "Warum den VersoKit Budgetplaner wählen?",
          content: "<ul><li><strong>Privatsphäre zuerst:</strong> Ihre Daten bleiben in Ihrem Browser.</li><li><strong>Offline-fähig:</strong> Funktioniert ohne Internet.</li><li><strong>Kostenlos:</strong> Keine Abonnements.</li></ul>"
        },
        {
          title: "Mehrausgaben abdecken",
          content: "<p>Wenn eine Kategorie negativ wird, nutzen Sie die Funktion 'Abdecken', um Geld aus einer anderen Kategorie zu verschieben.</p>"
        }
      ]
    },
    es: {
      title: "Guía Completa y FAQ",
      sections: [
        {
          title: "¿Qué es el Presupuesto Base Cero?",
          content: "<p>Es un método en el que cada euro de sus ingresos se asigna a una categoría específica hasta que no quede nada por presupuestar. El objetivo es darle un trabajo a cada euro.</p>"
        },
        {
          title: "¿Por qué elegir VersoKit?",
          content: "<ul><li><strong>Privacidad Total:</strong> Sus datos no salen de su navegador.</li><li><strong>Listo para usar Offline:</strong> Funciona sin conexión.</li><li><strong>Gratis para siempre:</strong> Sin suscripciones mensuales.</li></ul>"
        }
      ]
    },
    pt: {
      title: "Guia Completo e FAQ",
      sections: [
        {
          title: "O que é o Orçamento Base Zero?",
          content: "<p>O Orçamento Base Zero (OBZ) é um método onde cada centavo da sua renda é atribuído a uma categoria específica até que restem zero para orçar.</p>"
        },
        {
          title: "Por que escolher o VersoKit?",
          content: "<ul><li><strong>Privacidade:</strong> Seus dados ficam no seu navegador.</li><li><strong>Offline:</strong> Funciona sem internet.</li><li><strong>Grátis:</strong> Sem assinaturas.</li></ul>"
        }
      ]
    },
    fr: {
      title: "Guide Complet et FAQ",
      sections: [
        {
          title: "Qu'est-ce que le Budget Base Zéro ?",
          content: "<p>Le Budget Base Zéro (BBZ) est une méthode où chaque euro de votre revenu est affecté à une catégorie spécifique jusqu'à ce qu'il ne reste plus rien à budgétiser.</p>"
        },
        {
          title: "Pourquoi choisir VersoKit ?",
          content: "<ul><li><strong>Confidentialité :</strong> Vos données restent dans votre navigateur.</li><li><strong>Hors ligne :</strong> Fonctionne sans connexion.</li><li><strong>Gratuit :</strong> Pas d'abonnement.</li></ul>"
        }
      ]
    },
    it: {
      title: "Guida Completa e FAQ",
      sections: [
        {
          title: "Cos'è il Budget a Base Zero?",
          content: "<p>Il Budget a Base Zero (BBZ) è un metodo in cui ogni singolo euro del tuo reddito viene assegnato a una categoria specifica finché non rimane nulla da preventivare.</p>"
        },
        {
          title: "Perché scegliere VersoKit?",
          content: "<ul><li><strong>Privacy:</strong> I tuoi dati rimangono nel tuo browser.</li><li><strong>Sempre Pronto:</strong> Funziona offline.</li><li><strong>Gratis:</strong> Nessun abbonamento.</li></ul>"
        }
      ]
    }
  },
  "kanban": {
    en: {
      title: "Increase Productivity with Kanban Boards",
      sections: [
        { title: "Visualizing Workflow", content: "Kanban helps you see your work. By moving cards from 'To Do' to 'Done', you identify bottlenecks and focus on finishing tasks." },
        { title: "Basics of the Kanban Method", content: "Focus on 'Work in Progress'. Limit how many items are in your active column to ensure high-quality output." }
      ]
    },
    id: {
      title: "Tingkatkan Produktivitas dengan Papan Kanban",
      sections: [
        { title: "Visualisasi Alur Kerja", content: "Kanban membantu Anda melihat pekerjaan Anda. Dengan memindahkan kartu, Anda mengidentifikasi hambatan." },
        { title: "Dasar Metode Kanban", content: "Fokus pada 'Pekerjaan yang Sedang Berjalan'. Batasi jumlah tugas aktif Anda." }
      ]
    },
    de: {
      title: "Produktivität steigern mit Kanban-Boards",
      sections: [{ title: "Workflow-Visualisierung", content: "Verschieben Sie Aufgaben von 'To Do' nach 'Erledigt'." }]
    },
    es: {
      title: "Aumenta la Productividad con Tableros Kanban",
      sections: [{ title: "Visualización del Flujo", content: "Mueve tarjetas para ver el progreso de tus tareas." }]
    },
    pt: {
      title: "Aumente a Produtividade com Quadros Kanban",
      sections: [{ title: "Visualização do Fluxo", content: "Mova cartões para acompanhar o progresso das tarefas." }]
    },
    fr: {
      title: "Boostez votre Productivité avec Kanban",
      sections: [{ title: "Visualisation", content: "Déplacez les cartes pour suivre l'avancement." }]
    },
    it: {
      title: "Aumenta la Produttività con la Bacheca Kanban",
      sections: [{ title: "Visualizzazione", content: "Sposta le schede per seguire i progressi." }]
    }
  },
  "image-compressor": {
    en: {
      title: "Secure Image Compression in Your Browser",
      sections: [
        { title: "Privacy-Focused Processing", content: "Unlike other tools, our compressor runs 100% on your device. Your photos are never uploaded to a server." },
        { title: "Reduce KB Size", content: "Optimize your web images by reducing file size without visible quality loss. Perfect for SEO and faster site loading." }
      ]
    },
    id: {
      title: "Kompres Gambar Aman di Browser Anda",
      sections: [
        { title: "Pemrosesan Berbasis Privasi", content: "Foto Anda tidak pernah diunggah ke server. Semua proses terjadi di perangkat Anda." },
        { title: "Kurangi Ukuran KB", content: "Optimalkan gambar web dengan mengurangi ukuran file tanpa mengurangi kualitas secara visual." }
      ]
    },
    de: { title: "Sichere Bildkompression", sections: [{ title: "Privatsphäre", content: "Kein Server-Upload." }] },
    es: { title: "Compresión de Imagen Segura", sections: [{ title: "Privacidad", content: "Sin subida al servidor." }] },
    pt: { title: "Compressão de Imagem Segura", sections: [{ title: "Privacidade", content: "Sem upload para o servidor." }] },
    fr: { title: "Compression d'Image Sécurisée", sections: [{ title: "Confidentialité", content: "Pas d'envoi sur serveur." }] },
    it: { title: "Compressione Immagini Sicura", sections: [{ title: "Privacy", content: "Nessun caricamento su server." }] }
  },
  "pdf-merge": {
    en: {
      title: "Merge PDF Files Offline and Securely",
      sections: [
        { title: "Combine Files Privately", content: "Combine multiple PDF documents into one single file without risking your data on external servers." },
        { title: "How to Merge", content: "Drag your files, arrange the order, and click merge. The result is generated instantly in your browser." }
      ]
    },
    id: {
      title: "Gabung File PDF Secara Offline dan Aman",
      sections: [
        { title: "Gabungkan File Secara Privat", content: "Gabungkan beberapa dokumen PDF menjadi satu file tanpa risiko data di server eksternal." },
        { title: "Cara Menggabungkan", content: "Seret file Anda, atur urutan, dan klik gabungkan." }
      ]
    },
    de: { title: "PDF sicher zusammenfügen", sections: [{ title: "Privat", content: "Alles im Browser." }] },
    es: { title: "Combinar PDF de forma segura", sections: [{ title: "Privacidad", content: "Todo en el navegador." }] },
    pt: { title: "Combinar PDF com segurança", sections: [{ title: "Privacidade", content: "Tudo no navegador." }] },
    fr: { title: "Fusionner PDF en toute sécurité", sections: [{ title: "Confidentialité", content: "Tout dans le navigateur." }] },
    it: { title: "Unisci PDF in sicurezza", sections: [{ title: "Privacy", content: "Tutto nel browser." }] }
  },
  "csv-helper": {
    en: {
      title: "Clean and Format CSV Data for Excel",
      sections: [
        { title: "Data Cleaning", content: "Remove duplicates and trim whitespace from your CSV files automatically to ensure your data is ready for analysis." },
        { title: "Excel & Sheets Ready", content: "Export cleaned data that works perfectly with Microsoft Excel, Google Sheets, or any database." }
      ]
    },
    id: {
      title: "Bersihkan dan Format Data CSV untuk Excel",
      sections: [
        { title: "Pembersihan Data", content: "Hapus duplikat dan rapikan spasi dari file CSV Anda secara otomatis." },
        { title: "Siap untuk Excel", content: "Ekspor data bersih yang berfungsi sempurna dengan Google Sheets atau Excel." }
      ]
    },
    de: { title: "CSV-Daten für Excel reinigen", sections: [{ title: "Reinigung", content: "Duplikate entfernen." }] },
    es: { title: "Limpiar datos CSV para Excel", sections: [{ title: "Limpieza", content: "Eliminar duplicados." }] },
    pt: { title: "Limpar datos CSV para Excel", sections: [{ title: "Limpeza", content: "Remover duplicatas." }] },
    fr: { title: "Nettoyer les données CSV pour Excel", sections: [{ title: "Nettoyage", content: "Supprimer les doublons." }] },
    it: { title: "Pulire dati CSV per Excel", sections: [{ title: "Pulizia", content: "Rimuovi i duplicati." }] }
  },
  "calculator": {
    en: {
      title: "Calculate Construction Material and Volume",
      sections: [
        { title: "Accurate Estimations", content: "Enter your project dimensions to calculate the exact volume of paint or tiles needed for your renovation." },
        { title: "Cost Planning", content: "Input price per unit to get a total cost estimation, helping you stay within budget for DIY projects." }
      ]
    },
    id: {
      title: "Hitung Material Konstruksi dan Volume",
      sections: [
        { title: "Estimasi Akurat", content: "Masukkan dimensi proyek untuk menghitung volume cat atau ubin yang dibutuhkan." },
        { title: "Rencana Biaya", content: "Masukkan harga per unit untuk mendapatkan estimasi total biaya proyek." }
      ]
    },
    de: { title: "Baumaterial berechnen", sections: [{ title: "Kosten", content: "Budget planen." }] },
    es: { title: "Calcular materiales de construcción", sections: [{ title: "Costos", content: "Planifica tu presupuesto." }] },
    pt: { title: "Calcular materiais de construção", sections: [{ title: "Custos", content: "Planeje seu orçamento." }] },
    fr: { title: "Calculer les matériaux de construction", sections: [{ title: "Coûts", content: "Planifiez votre budget." }] },
    it: { title: "Calcola materiali da costruzione", sections: [{ title: "Costi", content: "Pianifica il tuo budget." }] }
  },
  "futsal": {
    en: {
      title: "Professional Futsal Scoreboard Rules",
      sections: [
        { title: "Foul Counter Rules", content: "In Futsal, the 6th foul results in a direct free kick (second penalty). Our board turns red at 5 fouls to alert referees." },
        { title: "Timer Management", content: "Standard matches are 20 minutes per half. Use the presets to quickly set the official time for your match." }
      ]
    },
    id: {
      title: "Aturan Papan Skor Futsal Profesional",
      sections: [
        { title: "Aturan Hitung Pelanggaran", content: "Pelanggaran ke-6 menghasilkan tendangan bebas langsung (penalti kedua). Papan kami berubah merah pada 5 foul." },
        { title: "Manajemen Waktu", content: "Pertandingan standar adalah 20 menit per babak. Gunakan preset untuk pengaturan cepat." }
      ]
    },
    de: { title: "Futsal-Regeln", sections: [{ title: "Fouls", content: "Anzeige wird bei 5 Fouls rot." }] },
    es: { title: "Reglas de Futsal", sections: [{ title: "Faltas", content: "El tablero se pone rojo a las 5 faltas." }] },
    pt: { title: "Regras de Futsal", sections: [{ title: "Faltas", content: "O placar fica vermelho na 5ª falta." }] },
    fr: { title: "Règles du Futsal", sections: [{ title: "Fautes", content: "Le tableau devient rouge à 5 fautes." }] },
    it: { title: "Regole Futsal", sections: [{ title: "Falli", content: "Il tabellone diventa rosso al 5° fallo." }] }
  },
  "tennis": {
    en: {
      title: "Fair Play Algorithm for Tennis Double Matches",
      sections: [
        { title: "Balanced Pairings", content: "Our algorithm balances teams by combining high-skill players with lower-skill partners to ensure competitive matches." },
        { title: "Playtime Equality", content: "The system tracks rounds played to ensure every person in your club gets equal time on the court." }
      ]
    },
    id: {
      title: "Algoritma Fair Play untuk Pertandingan Tenis Ganda",
      sections: [
        { title: "Pasangan yang Seimbang", content: "Algoritma kami menyeimbangkan tim dengan menggabungkan pemain skill tinggi dengan pemula." },
        { title: "Kesamaan Waktu Main", content: "Sistem melacak jumlah ronde untuk memastikan semua orang mendapat waktu lapangan yang sama." }
      ]
    },
    de: { title: "Tennis-Algorithmus", sections: [{ title: "Fairness", content: "Gleiche Spielzeit für alle." }] },
    es: { title: "Algoritmo de Tenis", sections: [{ title: "Equidad", content: "Mismo tiempo de juego para todos." }] },
    pt: { title: "Algoritmo de Tênis", sections: [{ title: "Igualdade", content: "Mesmo tempo de quadra para todos." }] },
    fr: { title: "Algorithme de Tennis", sections: [{ title: "Équité", content: "Temps de jeu égal pour tous." }] },
    it: { title: "Algorithme Tennis", sections: [{ title: "Equità", content: "Stesso tempo di gioco per tutti." }] }
  },
  "invoice": {
    en: {
      title: "Professional PDF Invoicing for Freelancers",
      sections: [
        {
          title: "Free Invoice Generator",
          content: "Free Invoice Generator. Create PDF invoices instantly in your browser. No data stored on servers. A professional invoice ensures you get paid faster."
        }
      ]
    },
    id: {
      title: "Cara Buat Invoice Profesional untuk Freelancer",
      sections: [
        {
          title: "Pembuat Invoice Gratis",
          content: "Pembuat Invoice Gratis. Buat faktur PDF instan di browser. Data tidak disimpan di server. Invoice yang rapi membantu Anda terlihat profesional."
        }
      ]
    },
    de: {
      title: "Rechnungsgenerator",
      sections: [
        {
          title: "Kostenloser Rechnungsgenerator",
          content: "Kostenloser Rechnungsgenerator. Erstellen Sie PDF-Rechnungen sofort im Browser."
        }
      ]
    },
    es: {
      title: "Generador de Facturas",
      sections: [
        {
          title: "Generador de Facturas Gratis",
          content: "Generador de Facturas Gratis. Crea facturas PDF al instante."
        }
      ]
    },
    pt: {
      title: "Gerador de Faturas",
      sections: [
        {
          title: "Gerador de Faturas Grátis",
          content: "Gerador de Faturas Grátis. Crie faturas em PDF instantaneamente."
        }
      ]
    },
    fr: {
      title: "Générateur de Factures",
      sections: [
        {
          title: "Générateur de Factures Gratuit",
          content: "Générateur de Factures Gratuit. Créez des factures PDF instantanément."
        }
      ]
    },
    it: {
      title: "Generatore Fatture",
      sections: [
        {
          title: "Generatore Fatture Gratuito",
          content: "Generatore Fatture Gratuito. Crea fatture PDF istantaneamente."
        }
      ]
    }
  },
  "lineup": {
    en: {
      title: "Lineup Builder",
      sections: [{ title: "How it works", content: "Football Lineup Builder. Drag and drop players to create formations (4-4-2, 4-3-3). Download as image." }]
    },
    id: {
      title: "Pembuat Formasi",
      sections: [{ title: "Cara Penggunaan", content: "Pembuat Formasi Sepak Bola. Geser pemain untuk membuat formasi (4-4-2, etc). Unduh sebagai gambar." }]
    },
    de: {
      title: "Fußball-Aufstellungs-Planer",
      sections: [{ title: "Anleitung", content: "Fußball-Aufstellungs-Planer. Erstellen Sie Formationen per Drag & Drop." }]
    },
    es: {
      title: "Creador de Alineaciones",
      sections: [{ title: "Cómo usar", content: "Creador de Alineaciones. Arrastra jugadores para crear formaciones." }]
    },
    pt: {
      title: "Criador de Escalação",
      sections: [{ title: "Como usar", content: "Criador de Escalação. Arraste jogadores para criar formações." }]
    },
    fr: {
      title: "Créateur de Composition",
      sections: [{ title: "Comment ça marche", content: "Créateur de Composition. Glissez-déposez les joueurs pour créer des formations." }]
    },
    it: {
      title: "Generatore Formazione Calcio",
      sections: [{ title: "Come funziona", content: "Generatore Formazione Calcio. Trascina i giocatori per creare formazioni." }]
    }
  },
  "scoreboard": {
    en: {
      title: "Universal Scoreboard",
      sections: [{ title: "Usage", content: "Simple Scoreboard. Use for Badminton, Volleyball, or Ping Pong. No ads, completely offline." }]
    },
    id: {
      title: "Papan Skor Universal",
      sections: [{ title: "Penggunaan", content: "Papan Skor Serbaguna. Gunakan untuk Badminton, Voli, atau Pingpong. Tanpa iklan, offline." }]
    },
    de: {
      title: "Universal-Anzeigetafel",
      sections: [{ title: "Nutzung", content: "Einfache Anzeigetafel. Für Badminton, Volleyball oder Tischtennis." }]
    },
    es: {
      title: "Marcador Universal",
      sections: [{ title: "Uso", content: "Marcador Universal. Úsalo para Bádminton, Voleibol o Ping Pong." }]
    },
    pt: {
      title: "Placar Universal",
      sections: [{ title: "Uso", content: "Placar Simples. Use para Badminton, Vôlei ou Ping Pong." }]
    },
    fr: {
      title: "Tableau de Score Simple",
      sections: [{ title: "Utilisation", content: "Tableau de Score Simple. Pour Badminton, Volley ou Ping Pong." }]
    },
    it: {
      title: "Tabellone Universale",
      sections: [{ title: "Utilizzo", content: "Tabellone Semplice. Usa per Badminton, Pallavolo o Ping Pong." }]
    }
  },
  "inventory": {
    en: { title: "Stock Management", sections: [{ title: "Tool Overview", content: "Stock Management Tool. Track items, quantities, and low stock alerts. Runs offline." }] },
    id: { title: "Manajemen Stok", sections: [{ title: "Ringkasan Alat", content: "Alat Manajemen Stok. Lacak barang, jumlah, dan peringatan stok menipis. Berjalan offline." }] },
    de: { title: "Lagerverwaltung", sections: [{ title: "Überblick", content: "Lagerverwaltung. Verfolgen Sie Artikel und Bestände offline." }] },
    es: { title: "Gestión de Inventario", sections: [{ title: "Descripción", content: "Gestión de Inventario. Controla artículos y stock bajo offline." }] },
    pt: { title: "Gestão de Estoque", sections: [{ title: "Visão Geral", content: "Gestão de Estoque. Acompanhe itens e alertas de estoque baixo." }] },
    fr: { title: "Gestion de Stock", sections: [{ title: "Aperçu", content: "Gestion de Stock. Suivez les articles et les alertes de stock faible." }] },
    it: { title: "Gestione Inventario", sections: [{ title: "Panoramica", content: "Gestione Inventario. Traccia articoli e scorte basse offline." }] }
  },
  "shift": {
    en: { title: "Shift Scheduler", sections: [{ title: "Tool Overview", content: "Employee Shift Planner. Organize morning, afternoon, and night shifts easily. Download schedule." }] },
    id: { title: "Jadwal Shift", sections: [{ title: "Ringkasan Alat", content: "Jadwal Shift Karyawan. Atur shift pagi, siang, malam dengan mudah. Unduh jadwal." }] },
    de: { title: "Schichtplaner", sections: [{ title: "Überblick", content: "Schichtplaner. Organisieren Sie Schichten einfach und laden Sie den Plan herunter." }] },
    es: { title: "Planificador de Turnos", sections: [{ title: "Descripción", content: "Planificador de Turnos. Organiza turnos de mañana, tarde y noche." }] },
    pt: { title: "Escala de Trabalho", sections: [{ title: "Visão Geral", content: "Escala de Trabalho. Organize turnos facilmente e baixe a escala." }] },
    fr: { title: "Planning d'Équipe", sections: [{ title: "Aperçu", content: "Planning d'Équipe. Organisez les 3x8 facilement." }] },
    it: { title: "Pianificatore Turni", sections: [{ title: "Panoramica", content: "Pianificatore Turni. Organizza i turni facilmente." }] }
  },
  "split-bill": {
    en: { title: "Split Bill", sections: [{ title: "Tool Overview", content: "Restaurant Bill Splitter. Calculate tax and service charge accurately for groups." }] },
    id: { title: "Bagi Tagihan", sections: [{ title: "Ringkasan Alat", content: "Pembagi Tagihan Restoran. Hitung pajak dan layanan secara akurat untuk grup." }] },
    de: { title: "Rechnungsteiler", sections: [{ title: "Überblick", content: "Rechnungsteiler. Berechnen Sie Steuern und Servicegebühren präzise." }] },
    es: { title: "Dividir Cuenta", sections: [{ title: "Descripción", content: "Dividir Cuenta. Calcula impuestos y servicio con precisión." }] },
    pt: { title: "Dividir Conta", sections: [{ title: "Visão Geral", content: "Dividir Conta. Calcule impostos e taxas de serviço." }] },
    fr: { title: "Partage d'Addition", sections: [{ title: "Aperçu", content: "Partage d'Addition. Calculez taxes et service avec précision." }] },
    it: { title: "Divisione Conto", sections: [{ title: "Panoramica", content: "Divisione Conto. Calcola tasse e servizio con precisione." }] }
  }
};
