
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
        { title: "Come funziona", content: "L'Americano è un formato social in cui cambi partner ogni turno." }
      ]
    }
  },
  "budget-planner": {
    en: {
      title: "Master Your Finances with Zero-Based Budgeting",
      sections: [
        { title: "The 50/30/20 Rule", content: "A popular method where you allocate 50% of income to Needs, 30% to Wants, and 20% to Savings or Debt. Our tool helps you visualize this split easily." },
        { title: "Track Daily Expenses", content: "Input your daily spending to see your 'Available' balance update in real-time. This prevents overspending before the month ends." }
      ]
    },
    id: {
      title: "Kuasai Keuangan dengan Anggaran Berbasis Nol",
      sections: [
        { title: "Aturan 50/30/20", content: "Metode populer di mana Anda mengalokasikan 50% pendapatan untuk Kebutuhan, 30% Keinginan, dan 20% Tabungan. Alat kami membantu visualisasi ini." },
        { title: "Lacak Pengeluaran Harian", content: "Masukkan pengeluaran harian untuk melihat saldo 'Tersedia' diperbarui secara real-time." }
      ]
    },
    de: {
      title: "Finanzen meistern mit Null-basierter Budgetierung",
      sections: [{ title: "50/30/20-Regel", content: "50% Bedürfnisse, 30% Wünsche, 20% Sparen." }]
    },
    es: {
      title: "Domina tus Finanzas con Presupuesto Base Cero",
      sections: [{ title: "Regla 50/30/20", content: "Asigna 50% a Necesidades, 30% a Deseos y 20% a Ahorros." }]
    },
    pt: {
      title: "Domine suas Finanças com Orçamento Base Zero",
      sections: [{ title: "Regra 50/30/20", content: "50% Necessidades, 30% Desejos e 20% Poupança." }]
    },
    fr: {
      title: "Maîtrisez vos Finances avec le Budget Base Zéro",
      sections: [{ title: "Règle 50/30/20", content: "50% Besoins, 30% Envies et 20% Épargne." }]
    },
    it: {
      title: "Domina le tue Finanze con il Budget a Base Zero",
      sections: [{ title: "Regola 50/30/20", content: "50% Bisogni, 30% Desideri e 20% Risparmio." }]
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
    pt: { title: "Limpar dados CSV para Excel", sections: [{ title: "Limpeza", content: "Remover duplicatas." }] },
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
    it: { title: "Algoritmo Tennis", sections: [{ title: "Equità", content: "Stesso tempo di gioco per tutti." }] }
  }
};
