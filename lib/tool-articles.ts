
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
  "budget-planner": {
    id: {
      title: "Budget Planner Online: Atur Keuangan Metode Zero-Based Budgeting",
      sections: [
        {
          title: "Gaji Cuma Numpang Lewat?",
          content: `<p>Pernahkah Anda merasa gaji "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan, saldo rekening sudah menipis dan Anda bingung: "Uangku habis buat apa saja, ya?"</p>
<p>Masalah utamanya seringkali bukan pada besarnya gaji Anda, melainkan pada cara Anda memperlakukan uang tersebut.</p>
<p>Banyak orang terjebak menggunakan aplikasi Expense Tracker (Pencatat Pengeluaran). Masalahnya, mencatat pengeluaran itu sifatnya penyesalan. Anda hanya mencatat sejarah: "Yah, uangku habis 500 ribu buat kopi."</p>
<p>Sudah saatnya berubah.</p>
<p>Perkenalkan VersoKit Budget Planner. Ini bukan sekadar pencatat, ini adalah alat Perencana Masa Depan berbasis metode <strong>Zero-Based Budgeting (ZBB)</strong>.</p>`
        },
        {
          title: "Apa Itu Zero-Based Budgeting (ZBB)?",
          content: `<p>Filosofi di balik alat ini sangat sederhana namun powerful: <strong>"Berikan pekerjaan untuk setiap rupiah yang Anda miliki."</strong></p>
<p>Bayangkan metode "Amplop" nenek moyang kita. Jika Anda punya uang tunai Rp 5.000.000 di tangan, Anda akan memasukkannya ke dalam amplop-amplop fisik:</p>
<ul>
  <li><strong>Amplop Makan:</strong> Rp 1.500.000</li>
  <li><strong>Amplop Kost/Listrik:</strong> Rp 1.500.000</li>
  <li><strong>Amplop Tabungan:</strong> Rp 1.000.000</li>
  <li><strong>Amplop Hiburan:</strong> Rp 1.000.000</li>
</ul>
<p>Anda terus membagi uang tersebut sampai uang di tangan Anda sisa <strong>NOL (0)</strong>. Artinya, semua uang sudah punya pos masing-masing.</p>
<p>VersoKit Budget Planner mendigitalkan sistem amplop ini.</p>
<ul>
  <li><strong>Expense Tracker Biasa:</strong> "Uangku sisa berapa ya?" (Reaktif/Takut).</li>
  <li><strong>Budget Planner (ZBB):</strong> "Aku punya rencana apa untuk uang ini?" (Proaktif/Kontrol).</li>
</ul>`
        },
        {
          title: "Masalah Keuangan yang Kami Selesaikan",
          content: `<p>Alat ini dirancang khusus untuk mengatasi "penyakit" finansial umum:</p>
<ol>
  <li><strong>Sindrom "Bocor Alus":</strong> Pengeluaran kecil seperti kopi kekinian, biaya parkir, biaya admin bank, atau langganan aplikasi (subscription) sering tidak terasa. Tiba-tiba totalnya jutaan. Dengan ZBB, Anda dipaksa menganggarkan hal-hal kecil ini di awal.</li>
  <li><strong>Ketakutan Cek Saldo:</strong> Banyak orang takut membuka mobile banking karena takut melihat isinya. Dengan alat ini, Anda akan merasa tenang. Kenapa? Karena Anda tahu persis bahwa uang untuk bayar kost aman, uang makan aman, dan uang tabungan sudah disisihkan.</li>
  <li><strong>Uang Tanpa Tujuan:</strong> Seringkali kita punya sisa uang di rekening dan tergoda membelanjakannya karena merasa "masih ada uang". Di ZBB, uang "menganggur" itu haram hukumnya. Semua harus dialokasikan, entah itu untuk belanja atau investasi.</li>
</ol>`
        },
        {
          title: "Fitur Unggulan VersoKit Budget Planner",
          content: `<ul>
  <li><strong>Sistem "Siap Dianggarkan" (To be Budgeted):</strong> Di bagian atas aplikasi, Anda akan melihat angka besar. Itu adalah uang Anda yang belum punya "pekerjaan". Misi Anda adalah menghabiskan angka itu ke dalam kategori-kategori sampai indikatornya bernilai 0 (Nol).</li>
  <li><strong>Subsidi Silang (Roll with the Punches):</strong> Hidup itu dinamis. Kadang kita boros di kategori "Makan". Jika kategori Makan Anda minus (berwarna merah), alat ini memaksa Anda untuk jujur: Ambil uang dari mana untuk menutupinya? Anda harus mengambil dari kategori lain (misal: kurangi jatah "Hiburan"). Ini mengajarkan realita bahwa uang tidak bisa muncul dari pohon.</li>
  <li><strong>Privasi 100% (Client-Side & Offline):</strong> Kami tahu data keuangan itu sensitif. Tanpa Login Bank, Tanpa Upload KTP. Semua data tersimpan di LocalStorage perangkat Anda (Laptop/HP). Server kami tidak melihat data Anda sama sekali. <strong>Offline Ready</strong> tetap bisa digunakan lancar meski sinyal jelek atau mode pesawat.</li>
  <li><strong>Export & Import Data:</strong> Ganti HP atau ingin analisa lebih lanjut di Excel? Anda bisa backup data Anda ke format JSON atau CSV (Excel) kapan saja. Anda punya kendali penuh atas data Anda.</li>
</ul>`
        }
      ]
    },
    en: {
      title: "Budget Planner Online: Manage Finances with Zero-Based Budgeting Method",
      sections: [
        {
          title: "Is Your Salary Just Passing Through?",
          content: `<p>Have you ever felt like your salary is just "passing through"? You receive your paycheck on the 25th, but by the 10th of the next month, your account balance is already low and you're left wondering: "Where did all my money go?"</p>
<p>The main problem often isn't the size of your salary, but how you treat that money.</p>
<p>Many people are trapped using Expense Tracker apps. The problem is, recording expenses is an act of regret. You are only recording history: "Oh, I spent 500 dollars on coffee."</p>
<p>It's time for a change.</p>
<p>Introducing VersoKit Budget Planner. This isn't just a recorder; it's a Future Planning tool based on the <strong>Zero-Based Budgeting (ZBB)</strong> method.</p>`
        },
        {
          title: "What is Zero-Based Budgeting (ZBB)?",
          content: `<p>The philosophy behind this tool is very simple yet powerful: <strong>"Give a job to every dollar you own."</strong></p>
<p>Imagine our ancestors' "Envelope" method. If you had $5,000 in cash in your hand, you would put it into physical envelopes:</p>
<ul>
  <li><strong>Food Envelope:</strong> $1,500</li>
  <li><strong>Rent/Electricity Envelope:</strong> $1,500</li>
  <li><strong>Savings Envelope:</strong> $1,000</li>
  <li><strong>Entertainment Envelope:</strong> $1,000</li>
</ul>
<p>You keep dividing that money until the money in your hand is <strong>ZERO (0)</strong>. This means all the money already has its own assigned post.</p>
<p>VersoKit Budget Planner digitizes this envelope system.</p>
<ul>
  <li><strong>Standard Expense Tracker:</strong> "How much money do I have left?" (Reactive/Fearful).</li>
  <li><strong>Budget Planner (ZBB):</strong> "What plan do I have for this money?" (Proactive/Control).</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Online-Budgetplaner: Finanzen mit der Zero-Based-Budgeting-Methode verwalten",
      sections: [
        {
          title: "Ist Ihr Gehalt nur ein Durchlaufposten?",
          content: `<p>Haben Sie jemals das Gefühl gehabt, dass Ihr Gehalt nur ein „Durchlaufposten“ ist? Am 25. erhalten Sie Ihr Gehalt, aber bereits am 10. des nächsten Monats ist Ihr Kontostand niedrig und Sie fragen sich: „Wofür ist mein ganzes Geld eigentlich draufgegangen?“</p>
<p>Das Hauptproblem ist oft nicht die Höhe Ihres Gehalts, sondern die Art und Weise, wie Sie mit diesem Geld umgehen.</p>
<p>Viele Menschen stecken in der Falle von Expense-Tracker-Apps (Ausgaben-Apps) fest. Das Problem ist, dass das Aufzeichnen von Ausgaben ein Akt des Bedauerns ist. Sie zeichnen lediglich die Geschichte auf: „Ach, ich habe 500 Euro für Kaffee ausgegeben.“</p>
<p>Es ist Zeit für eine Veränderung.</p>
<p>Wir stellen den VersoKit Budgetplaner vor. Dies ist nicht nur ein Aufzeichnungsgerät; es ist ein Werkzeug für die Zukunftsplanung, das auf der <strong>Zero-Based-Budgeting-Methode (ZBB)</strong> basiert.</p>`
        },
        {
          title: "Was ist nullbasiertes Budgetieren (ZBB)?",
          content: `<p>Die Philosophie hinter diesem Tool ist sehr einfach und doch wirkungsvoll: <strong>„Geben Sie jedem Cent, den Sie besitzen, eine Aufgabe.“</strong></p>
<p>Stellen Sie sich die „Umschlagmethode“ unserer Vorfahren vor. Wenn Sie 5.000 € in bar in der Hand hätten, würden Sie diese in physische Umschläge stecken:</p>
<ul>
  <li><strong>Umschlag für Essen:</strong> 1.500 €</li>
  <li><strong>Umschlag für Miete/Strom:</strong> 1.500 €</li>
  <li><strong>Umschlag zum Sparen:</strong> 1.000 €</li>
  <li><strong>Umschlag für Unterhaltung:</strong> 1.000 €</li>
</ul>
<p>Sie teilen das Geld so lange auf, bis das Geld in Ihrer Hand <strong>NULL (0)</strong> ist. Das bedeutet, dass jedes Geld bereits seinen eigenen zugewiesenen Platz hat.</p>
<p>Der VersoKit Budgetplaner digitalisiert dieses Umschlagsystem.</p>
<ul>
  <li><strong>Standard-Ausgaben-Tracker:</strong> „Wie viel Geld habe ich noch übrig?“ (Reaktiv/Ängstlich).</li>
  <li><strong>Budgetplaner (ZBB):</strong> „Welchen Plan habe ich für dieses Geld?“ (Proaktiv/Kontrolle).</li>
</ul>`
        }
      ]
    },
    es: {
      title: "Planificador de Presupuesto Online: Gestiona tus Finanzas con el Método de Presupuesto Base Cero",
      sections: [
        {
          title: "¿Su Salario es Solo un 'Paso de Dinero'?",
          content: `<p>¿Alguna vez ha sentido que su salario es solo un "paso de dinero"? Recibe su paga el día 25, pero el día 10 del mes siguiente el saldo de su cuenta ya es bajo y se pregunta: "¿En qué se me ha ido todo el dinero?"</p>
<p>El problema principal no suele ser el tamaño de su salario, sino cómo trata ese dinero.</p>
<p>Muchas personas están atrapadas usando aplicaciones de seguimiento de gastos (Expense Tracker). El problema es que registrar los gastos es un acto de arrepentimiento. Solo está registrando la historia: "Vaya, me gasté 500 en café".</p>
<p>Es hora de cambiar.</p>
<p>Le presentamos VersoKit Budget Planner. Esto no es solo un registrador; es una herramienta de Planificación del Futuro basada en el método de <strong>Presupuesto Base Cero (ZBB)</strong>.</p>`
        }
      ]
    },
    pt: {
      title: "Planejador de Orçamento Online: Controle Suas Finanças com o Método de Orçamento Base Zero",
      sections: [
        {
          title: "O Seu Salário está Apenas 'de Passagem'?",
          content: `<p>Você já sentiu como se o seu salário estivesse apenas "de passagem"? No dia 25 você recebe o salário, mas no dia 10 do mês seguinte o saldo da conta já está baixo e você fica se perguntando: "Onde foi parar todo o meu dinheiro?"</p>
<p>O problema principal muitas vezes não é o valor do seu salário, mas a forma como você trata esse dinheiro.</p>
<p>Muitas pessoas estão presas ao uso de aplicativos de rastreamento de despesas (Expense Tracker). O problema é que registrar despesas é um ato de arrependimento. Você está apenas registrando a história: "Poxa, gastei 500 em café".</p>
<p>É hora de mudar.</p>
<p>Apresentamos o VersoKit Budget Planner. Isto não é apenas um registrador; é uma ferramenta de Planejamento do Futuro baseada no método de <strong>Orçamento Base Zero (ZBB)</strong>.</p>`
        }
      ]
    },
    fr: {
      title: "Planificateur de Budget en Ligne : Gérez vos Finances avec la Méthode du Budget Base Zéro",
      sections: [
        {
          title: "Votre Salaire N'est-il qu'un 'Passage d'Argent' ?",
          content: `<p>Avez-vous déjà eu l'impression que votre salaire n'était qu'un "passage d'argent" ? Vous recevez votre chèque le 25, mais dès le 10 du mois suivant, le solde de votre compte est déjà bas et vous vous demandez : "Où est passé tout mon argent ?"</p>
<p>Le problème principal n'est souvent pas le montant de votre salaire, mais la façon dont vous traitez cet argent.</p>
<p>Beaucoup de gens sont piégés par l'utilisation d'applications de suivi des dépenses (Expense Tracker). Le problème est que l'enregistrement des dépenses est un acte de regret. Vous ne faites qu'enregistrer l'histoire : "Oh, j'ai dépensé 500 en café".</p>
<p>Il est temps de changer.</p>
<p>Découvrez VersoKit Budget Planner. Ce n'est pas seulement un enregistreur ; c'est un outil de Planification de l'Avenir basé sur la méthode du <strong>Budget Base Zéro (BBZ)</strong>.</p>`
        }
      ]
    },
    it: {
      title: "Pianificatore di Budget Online: Gestisci le Finanze con il Metodo del Budget a Base Zero",
      sections: [
        {
          title: "Il Tuo Stipendio è Solo di 'Passaggio'?",
          content: `<p>Hai mai avuto l'impressione che il tuo stipendio sia solo di "passaggio"? Ricevi la busta paga il 25, ma già il 10 del mese successivo il saldo del tuo conto è basso e ti chiedi: "Dove sono finiti tutti i miei soldi?"</p>
<p>Il problema principale spesso non è l'entità del tuo stipendio, ma il modo in cui tratti quel denaro.</p>
<p>Molte persone sono intrappolate nell'uso di app per il monitoraggio delle spese (Expense Tracker). Il problema è que registrare le spese è un atto di rimpianto. Stai solo registrando la storia: "Oh, ho speso 500 per il caffè".</p>
<p>È ora di cambiare.</p>
<p>Ti presentiamo VersoKit Budget Planner. Questo non è solo un registratore; è uno strumento di Pianificazione del Futuro basato sul metodo del <strong>Budget a Base Zero (BBZ)</strong>.</p>`
        }
      ]
    }
  },
  "americano": {
    id: {
      title: "Generator Jadwal Americano Otomatis: Padel, Pickleball & Tenis",
      sections: [
        {
          title: "Main Americano Tanpa Ribet: Gunakan Generator Jadwal & Skor Otomatis Kami",
          content: `<p>Mau main format Americano tapi malas hitung manual? Gunakan Americano Generator & Scoreboard otomatis kami. Gratis, tanpa install aplikasi. Coba sekarang!</p>
<p>Apakah Anda sedang merencanakan sesi fun game Padel, Pickleball, atau Tenis akhir pekan ini? Format Americano pasti jadi pilihan utama agar suasana lebih cair dan kompetitif. Tapi, kita semua tahu masalah utamanya: Mengatur jadwal dan menghitung poin secara manual itu memusingkan. Siapa berpasangan dengan siapa? Siapa yang harus istirahat? Bagaimana klasemen akhirnya? Jangan biarkan kertas, pulpen, atau rumus Excel yang rumit merusak keseruan Anda di lapangan. Solusinya ada di sini.</p>`
        },
        {
          title: "Apa Itu Format Americano?",
          content: `<p>Bagi Anda yang baru pertama kali mencoba, Americano adalah format turnamen sosial yang paling adil dan seru. Konsep dasarnya sederhana: <ul><li><strong>Ganti Pasangan:</strong> Anda akan bermain dengan pasangan berbeda di setiap pertandingan.</li><li><strong>Skor Individu:</strong> Meskipun bermain ganda, poin yang Anda dapatkan dihitung untuk diri sendiri.</li><li><strong>Tujuan:</strong> Mengumpulkan poin sebanyak mungkin untuk menjadi juara klasemen di akhir sesi.</li></ul></p>`
        }
      ]
    },
    en: {
      title: "Automatic Americano Schedule Generator: Padel, Pickleball & Tennis",
      sections: [
        {
          title: "Play Americano Hassle-Free: Use Our Automatic Schedule Generator & Scoreboard",
          content: `<p>Want to play Americano format but lazy to calculate manually? Use our automatic Americano Generator & Scoreboard. Free, no app install required. Try now!</p>
<p>Are you planning a fun game session of Padel, Pickleball, or Tennis this weekend? The Americano format will surely be the top choice to make the atmosphere more fluid and competitive. But we all know the main problem: Organizing the schedule and calculating points manually is confusing. Who pairs with whom? Who should rest? What is the final leaderboard? Don't let paper, pens, or complicated Excel formulas ruin your fun on the court. The solution is here.</p>`
        },
        {
          title: "What is the Americano Format?",
          content: `<p>For those of you trying it for the first time, Americano is the fairest and most exciting social tournament format. The basic concept is simple: <ul><li><strong>Switch Partners:</strong> You will play with a different partner in every match.</li><li><strong>Individual Score:</strong> Although playing doubles, the points you earn are counted for yourself.</li><li><strong>Goal:</strong> Collect as many points as possible to become the leaderboard champion at the end of the session.</li></ul></p>`
        }
      ]
    }
  },
  "futsal": {
    id: {
      title: "Papan Skor Futsal Digital Online: Gratis, Timer & Hitung Foul",
      sections: [
        {
          title: "Tingkatkan Level Pertandingan Futsal Anda",
          content: `<p>Main futsal rasanya kurang seru kalau tidak ada papan skor dan waktu yang jelas. Pernahkah Anda mengalami momen canggung saat sparring: berdebat soal skor (\"Eh, tadi 4-3 atau 4-4?\"), atau bingung sisa waktu tinggal berapa menit?</p>
<p>Masalah klasik di lapangan futsal non-profesional adalah ketiadaan Scoreboard yang layak. Harga papan skor digital fisik bisa mencapai jutaan rupiah, investasi yang cukup mahal bagi pengelola lapangan kecil atau komunitas. VersoKit menghadirkan solusi cerdas: <strong>Futsal Scoreboard Digital</strong>. Alat berbasis web ini mengubah Laptop, Tablet, atau HP Anda menjadi papan skor profesional secara instan dan gratis!</p>`
        }
      ]
    },
    en: {
      title: "Digital Futsal Scoreboard Online: Free, Timer & Foul Counter",
      sections: [
        {
          title: "Elevate Your Futsal Matches with Our Digital Scoreboard",
          content: `<p>Futsal matches feel less exciting without a clear scoreboard and timer. Have you ever experienced awkward moments during sparring: debating the score (\"Wait, was it 4-3 or 4-4?\"), or confused about how many minutes are left?</p>
<p>A classic problem on non-professional futsal courts is the lack of a proper Scoreboard. Physical digital scoreboards can cost millions, a heavy investment for small court managers or communities. VersoKit brings a smart solution: <strong>Futsal Scoreboard Digital</strong>. This web-based tool instantly transforms your Laptop, Tablet, or Phone into a professional scoreboard for free!</p>`
        }
      ]
    }
  },
  "inventory": {
    id: {
      title: "Aplikasi Stok Barang Sederhana: Kelola Inventaris UMKM Gratis",
      sections: [
        {
          title: "Apa itu Simple Inventory Manager?",
          content: `<p>Lelah menghitung stok barang setiap malam di buku tulis? Sering pusing karena uang modal "nyangkut" di barang yang tidak laku, sementara barang yang lari manis malah habis stok?</p>
<p><strong>Manajemen stok</strong> adalah jantung dari setiap bisnis perdagangan. Tanpa catatan yang rapi, bisnis kecil sangat rentan mengalami kerugian akibat barang hilang, overstocking (kelebihan stok), atau kehilangan pembeli karena barang kosong.</p>
<p>Simple Inventory Manager dari VersoKit hadir sebagai solusi bagi Anda yang sudah tidak sanggup mengelola stok secara manual, tapi belum butuh sistem POS yang rumit dan mahal.</p>`
        },
        {
          title: "Masalah Klasik yang Sering Menghambat Bisnis Kecil",
          content: `<ul>
  <li><strong>"Barang Hilang" Tanpa Jejak:</strong> Stok di rak dan di catatan sering berbeda karena lupa mencatat transaksi secara real-time.</li>
  <li><strong>Uang Mati di Gudang:</strong> Anda terus membeli barang yang ternyata masih banyak, sehingga modal Anda mengendap tanpa menghasilkan keuntungan.</li>
  <li><strong>Kehilangan Pembeli:</strong> Tidak ada yang lebih menyakitkan daripada pembeli datang membawa uang, namun Anda harus menolak karena tidak tahu kalau stok sudah habis.</li>
  <li><strong>Pusing Hitung Aset:</strong> Menghitung total nilai modal yang ada di rak toko secara manual sangat melelahkan dan rawan salah hitung.</li>
</ul>`
        },
        {
          title: "Fitur Unggulan Simple Inventory Manager",
          content: `<p>Alat ini adalah buku stok digital yang melakukan semua perhitungan matematika rumit untuk Anda secara otomatis.</p>
<ul>
  <li><strong>1. Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual. Saldo stok akan ter-update secara otomatis saat itu juga.</li>
  <li><strong>2. Low Stock Alerts (Peringatan Stok Tipis):</strong> Jangan biarkan stok Anda kosong melompong. Alat ini dilengkapi indikator visual (warna merah) yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan. Waktunya belanja stok lagi sebelum habis!</li>
  <li><strong>3. Hitung Nilai Aset Otomatis (Valuation):</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang. Sistem akan menghitung akumulasi harga beli/modal sehingga Anda tahu persis berapa total aset bisnis Anda.</li>
  <li><strong>4. Search & Filter Instan:</strong> Punya ratusan jenis barang? Jangan khawatir. Fitur pencarian kami sangat cepat. Cukup ketik nama barang, dan data akan muncul seketika tanpa perlu scroll satu per satu.</li>
</ul>`
        },
        {
          title: "Kenapa Harus Menggunakan VersoKit?",
          content: `<ul>
  <li><strong>100% Offline & Private:</strong> Ini adalah keunggulan utama kami. Data stok, harga modal, and nama supplier Anda tidak pernah dikirim ke internet. Semuanya tersimpan aman di browser Anda. Rahasia dapur bisnis Anda tetap menjadi milik Anda sepenuhnya.</li>
  <li><strong>Gratis Selamanya:</strong> Tanpa biaya langganan bulanan (No Monthly Fee). Solusi hemat untuk UMKM yang ingin naik kelas.</li>
  <li><strong>Export ke Excel:</strong> Butuh data untuk laporan pajak atau audit tahunan? Anda bisa menarik semua data ke format Excel (CSV) atau JSON dengan satu klik.</li>
  <li><strong>Tanpa Install:</strong> Tidak perlu memenuhi memori HP. Buka dari browser, dan alat siap digunakan kapan saja.</li>
</ul>`
        },
        {
          title: "Siapa yang Cocok Menggunakan Alat Ini?",
          content: `<ul>
  <li><strong>Online Shop Kecil:</strong> Untuk Anda yang berjualan dari rumah dan ingin stok di kamar terpantau rapi.</li>
  <li><strong>Warung & Toko Kelontong:</strong> Memantau persediaan sembako dan kebutuhan harian.</li>
  <li><strong>Usaha Jasa & Part:</strong> Bengkel motor yang stok busi/oli, atau teknisi AC yang memantau stok freon.</li>
  <li><strong>Hobi & Kolektor:</strong> Sangat pas untuk mendata koleksi buku, sepatu, atau mainan (Gundam/Hotwheels) agar tidak terbeli ganda.</li>
</ul>`
        },
        {
          title: "Cara Mulai Mengelola Stok dalam 4 Langkah",
          content: `<ol>
  <li><strong>Tambah Barang:</strong> Masukkan nama barang, stok awal, harga modal, dan batas minimum stok.</li>
  <li><strong>Input Barang Masuk:</strong> Klik tombol (+) setiap ada kiriman baru dari supplier.</li>
  <li><strong>Input Barang Keluar:</strong> Klik tombol (-) setiap ada barang terjual atau keluar.</li>
  <li><strong>Pantau Dashboard:</strong> Lihat total modal dan segera belanja untuk barang-barang yang sudah berwarna merah.</li>
</ol>
<p><strong>Mulai Rapikan Manajemen Gudang Anda Hari Ini!</strong> Bisnis yang lancar dimulai dari manajemen stok yang benar. Berhenti menebak-nebak jumlah barang Anda dan mulailah menggunakan sistem digital yang presisi. Lebih rapi stoknya, lebih lancar bisnisnya. Coba Simple Inventory Manager sekarang juga!</p>`
        }
      ]
    },
    en: {
      title: "Simple Inventory App: Manage SME Stock for Free",
      sections: [
        {
          title: "What is Simple Inventory Manager?",
          content: `<p>Tired of counting stock every night in a notebook? Often stressed because capital is "stuck" in slow-moving items, while popular items run out of stock?</p>
<p><strong>Stock management</strong> is the heart of every trading business. Without neat records, small businesses are very vulnerable to losses due to missing items, overstocking, or losing buyers because of out-of-stock items.</p>
<p>Simple Inventory Manager from VersoKit comes as a solution for those who can no longer manage stock manually, but don't yet need a complex and expensive POS system.</p>`
        },
        {
          title: "Classic Problems That Often Hinder Small Businesses",
          content: `<ul>
  <li><strong>"Missing Items" Without a Trace:</strong> Stock on shelves and in records often differ because of forgetting to record transactions in real-time.</li>
  <li><strong>Dead Money in the Warehouse:</strong> You keep buying items that actually still have plenty of stock, so your capital stays idle without generating profit.</li>
  <li><strong>Losing Buyers:</strong> Nothing hurts more than a buyer coming with money, but you have to turn them away because you didn't know the stock was out.</li>
  <li><strong>Stress Calculating Assets:</strong> Manually calculating the total value of capital on store shelves is very exhausting and prone to miscalculation.</li>
</ul>`
        },
        {
          title: "Key Features of Simple Inventory Manager",
          content: `<p>This tool is a digital stock book that does all the complex mathematical calculations for you automatically.</p>
<ul>
  <li><strong>1. Stock In & Stock Out (One Click):</strong> Updating stock doesn't require re-typing. Use quick buttons to add incoming goods or reduce sold items. Stock balances will be updated automatically right then and there.</li>
  <li><strong>2. Low Stock Alerts:</strong> Don't let your stock run empty. This tool is equipped with a visual indicator (red color) that will light up if the stock of an item is below the minimum limit you set. Time to restock before it runs out!</li>
  <li><strong>3. Automatic Asset Valuation (Valuation):</strong> You can see the total value of your money currently in the form of goods in the warehouse. The system will calculate the accumulation of purchase/capital prices so you know exactly your total business assets.</li>
  <li><strong>4. Instant Search & Filter:</strong> Have hundreds of items? Don't worry. Our search feature is very fast. Just type the item name, and the data will appear instantly without needing to scroll one by one.</li>
</ul>`
        },
        {
          title: "Why Should You Use VersoKit?",
          content: `<ul>
  <li><strong>100% Offline & Private:</strong> This is our main advantage. Stock data, capital prices, and your supplier names are never sent to the internet. Everything is stored safely in your browser. Your business secrets remain entirely yours.</li>
  <li><strong>Free Forever:</strong> No monthly subscription fees (No Monthly Fee). A cost-effective solution for SMEs wanting to level up.</li>
  <li><strong>Export to Excel:</strong> Need data for tax reports or annual audits? You can pull all data to Excel (CSV) or JSON format with one click.</li>
  <li><strong>No Install:</strong> No need to fill up phone memory. Open from the browser, and the tool is ready to use anytime.</li>
</ul>`
        },
        {
          title: "Who is This Tool Suitable For?",
          content: `<ul>
  <li><strong>Small Online Shops:</strong> For those of you selling from home and wanting the stock in your room to be neatly monitored.</li>
  <li><strong>Warungs & Grocery Stores:</strong> Monitoring supplies of basic food and daily needs.</li>
  <li><strong>Service & Parts Businesses:</strong> Motorbike workshops stocking spark plugs/oil, or AC technicians monitoring freon stock.</li>
  <li><strong>Hobbies & Collectors:</strong> Perfect for listing collections of books, shoes, or toys (Gundam/Hotwheels) to avoid double buying.</li>
</ul>`
        },
        {
          title: "How to Start Managing Stock in 4 Steps",
          content: `<ol>
  <li><strong>Add Item:</strong> Enter item name, initial stock, capital price, and minimum stock limit.</li>
  <li><strong>Input Incoming Goods:</strong> Click the (+) button every time there is a new shipment from a supplier.</li>
  <li><strong>Input Outgoing Goods:</strong> Click the (-) button every time an item is sold or leaves.</li>
  <li><strong>Monitor Dashboard:</strong> See total capital and immediately shop for items that are already red.</li>
</ol>
<p><strong>Start Tidying Up Your Warehouse Management Today!</strong> Smooth business starts with correct stock management. Stop guessing the number of your goods and start using a precision digital system. Neater stock, smoother business. Try Simple Inventory Manager right now!</p>`
        }
      ]
    },
    de: {
      title: "Einfache Warenbestands-App: Kostenlose KMU-Inventarverwaltung",
      sections: [
        {
          title: "Was ist der Simple Inventory Manager?",
          content: `<p>Haben Sie es satt, jeden Abend den Lagerbestand in ein Notizheft zu schreiben? Sind Sie oft gestresst, weil Kapital in schwer verkäuflichen Artikeln „feststeckt“, während beliebte Artikel ausverkauft sind?</p>
<p><strong>Die Bestandsverwaltung</strong> ist das Herzstück jedes Handelsgeschäfts. Ohne ordentliche Aufzeichnungen sind kleine Unternehmen sehr anfällig für Verluste durch verschwundene Artikel, Überlagerung oder den Verlust von Käufern aufgrund von Fehlbeständen.</p>
<p>Der Simple Inventory Manager von VersoKit ist die Lösung für alle, die den Bestand nicht mehr manuell verwalten können, aber noch kein komplexes und teures Kassensystem benötigen.</p>`
        },
        {
          title: "Klassische Probleme, die kleine Unternehmen oft behindern",
          content: `<ul>
  <li><strong>„Verschwundene Artikel“ ohne Spur:</strong> Der Bestand in den Regalen und in den Aufzeichnungen weicht oft ab, weil vergessen wurde, Transaktionen in Echtzeit zu erfassen.</li>
  <li><strong>Totes Kapital im Lager:</strong> Sie kaufen ständig Artikel nach, von denen eigentlich noch genug vorrätig ist, sodass Ihr Kapital ungenutzt bleibt, ohne Gewinn zu erwirtschaften.</li>
  <li><strong>Käuferverlust:</strong> Nichts schmerzt mehr als ein Käufer, der mit Geld kommt, den man aber wegschicken muss, weil man nicht wusste, dass der Artikel ausverkauft ist.</li>
  <li><strong>Stress bei der Vermögensberechnung:</strong> Die manuelle Berechnung des Gesamtwerts des Kapitals in den Ladenregalen ist sehr anstrengend und anfällig für Fehlkalkulationen.</li>
</ul>`
        },
        {
          title: "Herausragende Merkmale des Simple Inventory Manager",
          content: `<p>Dieses Tool ist ein digitales Lagerbuch, das alle komplexen mathematischen Berechnungen automatisch für Sie erledigt.</p>
<ul>
  <li><strong>1. Wareneingang & Warenausgang (Ein Klick):</strong> Die Aktualisierung des Bestands erfordert kein erneutes Tippen. Verwenden Sie Schnelltasten, um eingehende Waren hinzuzufügen oder verkaufte Artikel zu reduzieren. Der Lagerbestand wird sofort automatisch aktualisiert.</li>
  <li><strong>2. Warnungen bei niedrigem Lagerbestand:</strong> Lassen Sie Ihr Lager nicht leer werden. Dieses Tool ist mit einer visuellen Anzeige (rote Farbe) ausgestattet, die aufleuchtet, wenn der Bestand eines Artikels unter dem von Ihnen festgelegten Mindestlimit liegt. Zeit, den Bestand aufzufüllen, bevor er ausgeht!</li>
  <li><strong>3. Automatische Bestandsbewertung (Valuation):</strong> Sie können den Gesamtwert Ihres Geldes sehen, das sich derzeit in Form von Waren im Lager befindet. Das System berechnet die Summe der Einkaufs-/Kapitalpreise, sodass Sie genau wissen, wie hoch Ihr gesamtes Betriebsvermögen ist.</li>
  <li><strong>4. Sofortige Suche & Filter:</strong> Haben Sie Hunderte von Artikeln? Keine Sorge. Unsere Suchfunktion ist sehr schnell. Geben Sie einfach den Artikelnamen ein, und die Daten erscheinen sofort, ohne dass Sie einzeln scrollen müssen.</li>
</ul>`
        },
        {
          title: "Warum sollten Sie VersoKit verwenden?",
          content: `<ul>
  <li><strong>100 % Offline & Privat:</strong> Dies ist unser Hauptvorteil. Bestandsdaten, Kapitalpreise und Ihre Lieferantennamen werden niemals ins Internet gesendet. Alles wird sicher in Ihrem Browser gespeichert. Ihre Geschäftsgeheimnisse bleiben vollständig in Ihrem Besitz.</li>
  <li><strong>Dauerhaft kostenlos:</strong> Keine monatlichen Abogebühren (No Monthly Fee). Eine kostengünstige Lösung für KMU, die wachsen wollen.</li>
  <li><strong>Export nach Excel:</strong> Benötigen Sie Daten für Steuerberichte oder jährliche Audits? Sie können alle Daten mit einem Klick in das Excel-Format (CSV) oder JSON exportieren.</li>
  <li><strong>Ohne Installation:</strong> Es ist nicht nötig, den Telefonspeicher zu belegen. Öffnen Sie es im Browser, und das Tool ist jederzeit einsatzbereit.</li>
</ul>`
        },
        {
          title: "Für wen ist dieses Tool geeignet?",
          content: `<ul>
  <li><strong>Kleine Online-Shops:</strong> Für alle, die von zu Hause aus verkaufen und möchten, dass der Bestand im Zimmer ordentlich überwacht wird.</li>
  <li><strong>Kioske & Lebensmittelgeschäfte:</strong> Überwachung der Vorräte an Grundnahrungsmitteln und des täglichen Bedarfs.</li>
  <li><strong>Dienstleistungs- & Ersatzteilgeschäfte:</strong> Motorradwerkstätten, die Zündkerzen/Öl lagern, oder Klimatechniker, die den Freon-Bestand überwachen.</li>
  <li><strong>Hobbys & Sammler:</strong> Perfekt für die Auflistung von Buch-, Schuh- oder Spielzeugsammlungen (Gundam/Hotwheels), um Doppelkäufe zu vermeiden.</li>
</ul>`
        },
        {
          title: "In 4 Schritten mit der Bestandsverwaltung beginnen",
          content: `<ol>
  <li><strong>Artikel hinzufügen:</strong> Geben Sie Artikelname, Anfangsbestand, Kapitalpreis und Mindestbestandsgrenze ein.</li>
  <li><strong>Wareneingang erfassen:</strong> Klicken Sie auf die Schaltfläche (+), wann immer eine neue Lieferung vom Lieferanten eintrifft.</li>
  <li><strong>Warenausgang erfassen:</strong> Klicken Sie auf die Schaltfläche (-), wann immer ein Artikel verkauft wird oder das Lager verlässt.</li>
  <li><strong>Dashboard überwachen:</strong> Sehen Sie das Gesamtkapital und kaufen Sie sofort Artikel ein, die bereits rot markiert sind.</li>
</ol>
<p><strong>Bringen Sie noch heute Ordnung in Ihre Lagerverwaltung!</strong> Ein reibungsloser Geschäftsablauf beginnt mit der richtigen Bestandsverwaltung. Hören Sie auf zu raten, wie viele Waren Sie haben, und nutzen Sie ein präzises digitales System. Ordentlicherer Bestand, reibungsloseres Geschäft. Probieren Sie den Simple Inventory Manager jetzt aus!</p>`
        }
      ]
    }
  },
  "shift": {
    id: {
      title: "Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA",
      sections: [
        {
          title: "Kenapa Harus Pindah dari Excel ke Shift Scheduler?",
          content: `<p>Hati-hati, manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis Anda. Mulai dari drama di grup WhatsApp karena salah ketik, karyawan yang protes karena jam kerja tidak adil, hingga toko yang kosong karena ada shift yang terlewat tanpa petugas.</p>
<p>Hentikan kebingungan tersebut sekarang juga. Gunakan <strong>Shift Scheduler</strong> dari VersoKit—asisten pribadi digital Anda untuk membuat roster kerja yang rapi, profesional, and adil.</p>
<ol>
  <li><strong>Visual Roster Builder (Intuitif & Berwarna):</strong> Tampilan tabel grid kami sangat sederhana: Baris untuk Nama Karyawan dan Kolom untuk Hari (Senin-Minggu). Anda bisa menggunakan kode warna untuk membedakan shift (Misal: Pagi = Kuning, Malam = Gelap, OFF = Merah).</li>
  <li><strong>Fitur \"WhatsApp Mode\" (Killer Feature!):</strong> Ini adalah penyelamat bagi para manajer. Anda tidak perlu lagi mengetik ulang jadwal panjang di chat WhatsApp yang melelahkan. Cukup satu klik \"Copy to Clipboard\", dan sistem akan mengubah tabel jadwal menjadi teks rapi yang siap di-Paste ke grup WA tim Anda.</li>
  <li><strong>Workload Calculator (Pembagian Adil):</strong> Alat ini memantau total hari masuk setiap karyawan secara otomatis.</li>
</ol>`
        }
      ]
    },
    en: {
      title: "Free Shift Schedule Maker: Manage Roster & Share to WhatsApp",
      sections: [
        {
          title: "Why Switch from Excel to our Shift Scheduler?",
          content: `<p>Confused about managing employee work schedules every week? Still using handwriting on notice boards or complicated Excel formulas? Be careful, poor schedule management can have fatal impacts on your business.</p>
<p>Stop the confusion right now. Use the <strong>Shift Scheduler</strong> from VersoKit—your digital personal assistant for creating tidy, professional, and fair work rosters.</p>
<ul>
  <li><strong>Visual Roster Builder:</strong> Our grid view is simple: Rows for names and columns for days. Use color codes like Morning (Yellow) and Night (Dark) to understand the pattern at a glance.</li>
  <li><strong>\"WhatsApp Mode\" Feature:</strong> Stop retyping schedules in chats. One click converts the table into neat text ready to be pasted into your team group.</li>
  <li><strong>Workload Calculator:</strong> Monitor total working days automatically to ensure a fair distribution of shifts.</li>
</ul>`
        }
      ]
    }
  }
};
