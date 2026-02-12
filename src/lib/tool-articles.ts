
/**
 * @fileOverview Centralized SEO Article Repository for VersoKit tools.
 * Refactored into a modular structure for better maintainability.
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

// --- TOOL CONTENT CONSTANTS ---

const INVENTORY_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Aplikasi Stok Barang Sederhana: Kelola Inventaris UMKM Gratis",
    sections: [
      {
        title: "Lelah Menghitung Manual?",
        content: `<h2>Lelah Menghitung Manual?</h2>
<p>Lelah menghitung stok barang setiap malam di buku tulis? Sering pusing karena uang modal "nyangkut" di barang yang tidak laku, sementara barang yang lari manis malah habis stok?</p>
<p>Manajemen stok adalah jantung dari setiap bisnis perdagangan. Tanpa catatan yang rapi, bisnis kecil sangat rentan mengalami kerugian akibat barang hilang, overstocking (kelebihan stok), atau kehilangan pembeli karena barang kosong.</p>
<p><strong>Simple Inventory Manager</strong> dari VersoKit hadir sebagai solusi bagi Anda yang sudah tidak sanggup mengelola stok secara manual, tapi belum butuh sistem POS yang rumit dan mahal.</p>`
      },
      {
        title: "Masalah Klasik yang Sering Menghambat Bisnis Kecil",
        content: `<h2>Masalah Klasik yang Sering Menghambat Bisnis Kecil</h2>
<p>Banyak pemilik UMKM terjebak dalam masalah manajemen gudang karena tidak memiliki alat yang tepat:</p>
<ul>
  <li><strong>"Barang Hilang" Tanpa Jejak:</strong> Stok di rak dan di catatan sering berbeda karena lupa mencatat transaksi secara real-time.</li>
  <li><strong>Uang Mati di Gudang:</strong> Anda terus membeli barang yang ternyata masih banyak, sehingga modal Anda mengendap tanpa menghasilkan keuntungan.</li>
  <li><strong>Kehilangan Pembeli:</strong> Tidak ada yang lebih menyakitkan daripada pembeli datang membawa uang, namun Anda harus menolak karena tidak tahu kalau stok sudah habis.</li>
  <li><strong>Pusing Hitung Aset:</strong> Menghitung total nilai modal yang ada di rak toko secara manual sangat melelahkan dan rawan salah hitung.</li>
</ul>`
      },
      {
        title: "Fitur Unggulan Simple Inventory Manager",
        content: `<h2>Fitur Unggulan Simple Inventory Manager</h2>
<p>Alat ini adalah buku stok digital yang melakukan semua perhitungan matematika rumit untuk Anda secara otomatis.</p>
<ol>
  <li><strong>Stock In & Stock Out (Satu Klik):</strong> Update stok tidak perlu ketik ulang. Gunakan tombol cepat untuk menambah barang masuk atau mengurangi barang yang terjual. Saldo stok akan ter-update secara otomatis saat itu juga.</li>
  <li><strong>Low Stock Alerts (Peringatan Stok Tipis):</strong> Jangan biarkan stok Anda kosong melompong. Alat ini dilengkapi indikator visual (warna merah) yang akan menyala jika stok suatu barang berada di bawah batas minimum yang Anda tentukan. Waktunya belanja stok lagi sebelum habis!</li>
  <li><strong>Hitung Nilai Aset Otomatis (Valuation):</strong> Anda bisa melihat total nilai uang Anda yang saat ini berbentuk barang di gudang. Sistem akan menghitung akumulasi harga beli/modal sehingga Anda tahu persis berapa total aset bisnis Anda.</li>
  <li><strong>Search & Filter Instan:</strong> Punya ratusan jenis barang? Jangan khawatir. Fitur pencarian kami sangat cepat. Cukup ketik nama barang, dan data akan muncul seketika tanpa perlu scroll satu per satu.</li>
</ol>`
      },
      {
        title: "Kenapa Harus Menggunakan VersoKit?",
        content: `<h2>Kenapa Harus Menggunakan VersoKit?</h2>
<ul>
  <li><strong>100% Offline & Private:</strong> Ini adalah keunggulan utama kami. Data stok, harga modal, and nama supplier Anda tidak pernah dikirim ke internet. Semuanya tersimpan aman di browser Anda. Rahasia dapur bisnis Anda tetap menjadi milik Anda sepenuhnya.</li>
  <li><strong>Gratis Selamanya:</strong> Tanpa biaya langganan bulanan (No Monthly Fee). Solusi hemat untuk UMKM yang ingin naik kelas.</li>
  <li><strong>Export ke Excel:</strong> Butuh data untuk laporan pajak atau audit tahunan? Anda bisa menarik semua data ke format Excel (CSV) atau JSON dengan satu klik.</li>
  <li><strong>Tanpa Install:</strong> Tidak perlu memenuhi memori HP. Buka dari browser, dan alat siap digunakan kapan saja.</li>
</ul>`
      },
      {
        title: "Siapa yang Cocok Menggunakan Alat Ini?",
        content: `<h2>Siapa yang Cocok Menggunakan Alat Ini?</h2>
<ul>
  <li><strong>Online Shop Kecil:</strong> Untuk Anda yang berjualan dari rumah dan ingin stok di kamar terpantau rapi.</li>
  <li><strong>Warung & Toko Kelontong:</strong> Memantau persediaan sembako dan kebutuhan harian.</li>
  <li><strong>Usaha Jasa & Part:</strong> Bengkel motor yang stok busi/oli, atau teknisi AC yang memantau stok freon.</li>
  <li><strong>Hobi & Kolektor:</strong> Sangat pas untuk mendata koleksi buku, sepatu, atau mainan (Gundam/Hotwheels) agar tidak terbeli ganda.</li>
</ul>`
      },
      {
        title: "Cara Mulai Mengelola Stok dalam 4 Langkah",
        content: `<h2>Cara Mulai Mengelola Stok dalam 4 Langkah</h2>
<ol>
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
        title: "Tired of Manual Counting?",
        content: `<h2>Tired of Manual Counting?</h2>
<p>Tired of counting stock every night in a notebook? Often stressed because capital is "stuck" in slow-moving items, while popular items run out of stock?</p>
<p>Stock management is the heart of every trading business. Without neat records, small businesses are very vulnerable to losses due to missing items, overstocking, or losing buyers because of out-of-stock items.</p>
<p><strong>Simple Inventory Manager</strong> from VersoKit comes as a solution for those who can no longer manage stock manually, but don't yet need a complex and expensive POS system.</p>`
      },
      {
        title: "Classic Problems That Often Hinder Small Businesses",
        content: `<h2>Classic Problems That Often Hinder Small Businesses</h2>
<p>Many SME owners get trapped in warehouse management issues because they lack the right tools:</p>
<ul>
  <li><strong>"Missing Items" Without a Trace:</strong> Stock on shelves and in records often differ because of forgetting to record transactions in real-time.</li>
  <li><strong>Dead Money in the Warehouse:</strong> You keep buying items that actually still have plenty of stock, so your capital stays idle without generating profit.</li>
  <li><strong>Losing Buyers:</strong> Nothing hurts more than a buyer coming with money, but you have to turn them away because you didn't know the stock was out.</li>
  <li><strong>Stress Calculating Assets:</strong> Manually calculating the total value of capital on store shelves is very exhausting and prone to miscalculation.</li>
</ul>`
      },
      {
        title: "Key Features of Simple Inventory Manager",
        content: `<h2>Key Features of Simple Inventory Manager</h2>
<p>This tool is a digital stock book that does all the complex mathematical calculations for you automatically.</p>
<ol>
  <li><strong>Stock In & Stock Out (One Click):</strong> Updating stock doesn't require re-typing. Use quick buttons to add incoming goods or reduce sold items. Stock balances will be updated automatically right then and there.</li>
  <li><strong>Low Stock Alerts:</strong> Don't let your stock run empty. This tool is equipped with a visual indicator (red color) that will light up if the stock of an item is below the minimum limit you set. Time to restock before it runs out!</li>
  <li><strong>Automatic Asset Valuation:</strong> You can see the total value of your money currently in the form of goods in the warehouse. The system will calculate the accumulation of purchase/capital prices so you know exactly your total business assets.</li>
  <li><strong>Instant Search & Filter:</strong> Have hundreds of items? Don't worry. Our search feature is very fast. Just type the item name, and the data will appear instantly without needing to scroll one by one.</li>
</ol>`
      },
      {
        title: "Why Should You Use VersoKit?",
        content: `<h2>Why Should You Use VersoKit?</h2>
<ul>
  <li><strong>100% Offline & Private:</strong> This is our main advantage. Stock data, capital prices, and your supplier names are never sent to the internet. Everything is stored safely in your browser. Your business secrets remain entirely yours.</li>
  <li><strong>Free Forever:</strong> No monthly subscription fees (No Monthly Fee). A cost-effective solution for SMEs wanting to level up.</li>
  <li><strong>Export to Excel:</strong> Need data for tax reports or annual audits? You can pull all data to Excel (CSV) or JSON format with one click.</li>
  <li><strong>No Install:</strong> No need to fill up phone memory. Open from the browser, and the tool is ready to use anytime.</li>
</ul>`
      },
      {
        title: "Who is This Tool Suitable For?",
        content: `<h2>Who is This Tool Suitable For?</h2>
<ul>
  <li><strong>Small Online Shops:</strong> For those of you selling from home and wanting the stock in your room to be neatly monitored.</li>
  <li><strong>Warungs & Grocery Stores:</strong> Monitoring supplies of basic food and daily needs.</li>
  <li><strong>Service & Parts Businesses:</strong> Motorbike workshops stocking spark plugs/oil, or AC technicians monitoring freon stock.</li>
  <li><strong>Hobbies & Collectors:</strong> Perfect for listing collections of books, shoes, or toys (Gundam/Hotwheels) to avoid double buying.</li>
</ul>`
      },
      {
        title: "How to Start Managing Stock in 4 Steps",
        content: `<h2>How to Start Managing Stock in 4 Steps</h2>
<ol>
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
        title: "Müde vom manuellen Zählen?",
        content: `<h2>Müde vom manuellen Zählen?</h2>
<p>Haben Sie es satt, jeden Abend den Lagerbestand in ein Notizheft zu schreiben? Sind Sie oft gestresst, weil Kapital in schwer verkäuflichen Artikeln „feststeckt“, während beliebte Artikel ausverkauft sind?</p>
<p>Bestandsverwaltung ist das Herzstück jedes Handelsgeschäfts. Ohne ordentliche Aufzeichnungen sind kleine Unternehmen sehr anfällig für Verluste durch verschwundene Artikel, Überlagerung oder den Verlust von Käufern aufgrund von Fehlbeständen.</p>
<p><strong>Simple Inventory Manager</strong> von VersoKit ist die Lösung für alle, die den Bestand nicht mehr manuell verwalten können, aber noch kein komplexes und teures Kassensystem benötigen.</p>`
      },
      {
        title: "Klassische Probleme, die kleine Unternehmen oft behindern",
        content: `<h2>Klassische Probleme, die kleine Unternehmen oft behindern</h2>
<p>Viele KMU-Besitzer geraten in Probleme bei der Lagerverwaltung, weil ihnen die richtigen Werkzeuge fehlen:</p>
<ul>
  <li><strong>„Verschwundene Artikel“ ohne Spur:</strong> Der Bestand in den Regalen und in den Aufzeichnungen weicht oft ab, weil vergessen wurde, Transaktionen in Echtzeit zu erfassen.</li>
  <li><strong>Totes Kapital im Lager:</strong> Sie kaufen ständig Artikel nach, von denen eigentlich noch genug vorrätig ist, sodass Ihr Kapital ungenutzt bleibt, ohne Gewinn zu erwirtschaften.</li>
  <li><strong>Käuferverlust:</strong> Nichts schmerzt mehr als ein Käufer, der mit Geld kommt, den man aber wegschicken muss, weil man nicht wusste, dass der Artikel ausverkauft ist.</li>
  <li><strong>Stress bei der Vermögensberechnung:</strong> Die manuelle Berechnung des Gesamtwerts des Kapitals in den Ladenregalen ist sehr anstrengend und anfällig für Fehlkalkulationen.</li>
</ul>`
      },
      {
        title: "Herausragende Merkmale des Simple Inventory Manager",
        content: `<h2>Herausragende Merkmale des Simple Inventory Manager</h2>
<p>Dieses Tool ist ein digitales Lagerbuch, das alle komplexen mathematischen Berechnungen automatisch für Sie erledigt.</p>
<ol>
  <li><strong>Wareneingang & Warenausgang (Ein Klick):</strong> Die Aktualisierung des Bestands erfordert kein erneutes Tippen. Verwenden Sie Schnelltasten, um eingehende Waren hinzuzufügen oder verkaufte Artikel zu reduzieren. Der Lagerbestand wird sofort automatisch aktualisiert.</li>
  <li><strong>Warnungen bei niedrigem Lagerbestand:</strong> Lassen Sie Ihr Lager nicht leer werden. Dieses Tool ist mit einer visuellen Anzeige (rote Farbe) ausgestattet, die aufleuchtet, wenn der Bestand eines Artikels unter dem von Ihnen festgelegten Mindestlimit liegt. Zeit, den Bestand aufzufüllen, bevor er ausgeht!</li>
  <li><strong>Automatische Bestandsbewertung:</strong> Sie können den Gesamtwert Ihres Geldes sehen, das sich derzeit in Form von Waren im Lager befindet. Das System berechnet die Summe der Einkaufs-/Kapitalpreise, sodass Sie genau wissen, wie hoch Ihr gesamtes Betriebsvermögen ist.</li>
  <li><strong>Sofortige Suche & Filter:</strong> Haben Sie Hunderte von Artikeln? Keine Sorge. Unsere Suchfunktion ist sehr schnell. Geben Sie einfach den Artikelnamen ein, und die Daten erscheinen sofort, ohne dass Sie einzeln scrollen müssen.</li>
</ol>`
      },
      {
        title: "Warum sollten Sie VersoKit verwenden?",
        content: `<h2>Warum sollten Sie VersoKit verwenden?</h2>
<ul>
  <li><strong>100 % Offline & Privat:</strong> Dies ist unser Hauptvorteil. Bestandsdaten, Kapitalpreise und Ihre Lieferantennamen werden niemals ins Internet gesendet. Alles wird sicher in Ihrem Browser gespeichert. Ihre Geschäftsgeheimnisse bleiben vollständig in Ihrem Besitz.</li>
  <li><strong>Dauerhaft kostenlos:</strong> Keine monatlichen Abogebühren (No Monthly Fee). Eine kostengünstige Lösung für KMU, die wachsen wollen.</li>
  <li><strong>Export nach Excel:</strong> Benötigen Sie Daten für Steuerberichte oder jährliche Audits? Sie können alle Daten mit einem Klick in das Excel-Format (CSV) oder JSON exportieren.</li>
  <li><strong>Ohne Installation:</strong> Es ist nicht nötig, den Telefonspeicher zu belegen. Öffnen Sie es im Browser, und das Tool ist jederzeit einsatzbereit.</li>
</ul>`
      },
      {
        title: "Für wen ist dieses Tool geeignet?",
        content: `<h2>Für wen ist dieses Tool geeignet?</h2>
<ul>
  <li><strong>Kleine Online-Shops:</strong> Für alle, die von zu Hause aus verkaufen und möchten, dass der Bestand im Zimmer ordentlich überwacht wird.</li>
  <li><strong>Kioske & Lebensmittelgeschäfte:</strong> Überwachung der Vorräte an Grundnahrungsmitteln und des täglichen Bedarfs.</li>
  <li><strong>Dienstleistungs- & Ersatzteilgeschäfte:</strong> Motorradwerkstätten, die Zündkerzen/Öl lagern, oder Klimatechniker, die den Freon-Bestand überwachen.</li>
  <li><strong>Hobbys & Sammler:</strong> Perfekt für die Auflistung von Buch-, Schuh- oder Spielzeugsammlungen (Gundam/Hotwheels) um Doppelkäufe zu vermeiden.</li>
</ul>`
      },
      {
        title: "In 4 Schritten mit der Bestandsverwaltung beginnen",
        content: `<h2>In 4 Schritten mit der Bestandsverwaltung beginnen</h2>
<ol>
  <li><strong>Artikel hinzufügen:</strong> Geben Sie Artikelname, Anfangsbestand, Kapitalpreis und Mindestbestandsgrenze ein.</li>
  <li><strong>Wareneingang erfassen:</strong> Klicken Sie auf die Schaltfläche (+), wann immer eine neue Lieferung vom Lieferanten eintrifft.</li>
  <li><strong>Warenausgang erfassen:</strong> Klicken Sie auf die Schaltfläche (-), wann immer ein Artikel verkauft wird oder das Lager verlässt.</li>
  <li><strong>Dashboard überwachen:</strong> Sehen Sie das Gesamtkapital und kaufen Sie sofort Artikel ein, die bereits rot markiert sind.</li>
</ol>
<p><strong>Bringen Sie noch heute Ordnung in Ihre Lagerverwaltung!</strong> Ein reibungsloser Geschäftsablauf beginnt mit der richtigen Bestandsverwaltung. Hören Sie auf zu raten, wie viele Waren Sie haben, und nutzen Sie ein präzises digitales System. Ordentlicherer Bestand, reibungsloseres Geschäft. Probieren Sie den Simple Inventory Manager jetzt aus!</p>`
      }
    ]
  },
  es: {
    title: "Gestión de Inventario Sencilla: Control de Stock para PYMES Gratis",
    sections: [
      {
        title: "¿Cansado de contar a mano?",
        content: `<h2>¿Cansado de contar a mano?</h2>
<p>¿Cansado de contar el stock todas las noches en una libreta? ¿Se siente estresado porque el capital está "atrapado" en artículos que no se venden, mientras que los productos más populares se agotan?</p>
<p>La gestión de stock es el corazón de cualquier negocio comercial. Sin registros ordenados, las pequeñas empresas son muy vulnerables a pérdidas por extravío de artículos, exceso de stock o pérdida de clientes por falta de existencias.</p>
<p><strong>Simple Inventory Manager</strong> de VersoKit llega como la solución para quienes ya no pueden gestionar el stock manualmente, pero aún no necesitan un sistema POS complejo y costoso.</p>`
      },
      {
        title: "Problemas clásicos que suelen frenar a los pequeños negocios",
        content: `<h2>Problemas clásicos que suelen frenar a los pequeños negocios</h2>
<p>Muchos propietarios de PYMES quedan atrapados en problemas de gestión de almacén por falta de las herramientas adecuadas:</p>
<ul>
  <li><strong>"Artículos perdidos" sin rastro:</strong> El stock en los estantes y en los registros suele diferir por olvidar anotar las transacciones en tiempo real.</li>
  <li><strong>Dinero muerto en el almacén:</strong> Sigue comprando artículos de los que todavía hay existencias, por lo que su capital permanece inactivo sin generar beneficios.</li>
  <li><strong>Pérdida de compradores:</strong> Nada duele más que un cliente llegue con dinero y tenga que rechazarlo por no saber que el stock se había agotado.</li>
  <li><strong>Estrés al calcular activos:</strong> Calcular manualmente el valor total del capital en los estantes de la tienda es agotador y propenso a errores.</li>
</ul>`
      },
      {
        title: "Características principales de Simple Inventory Manager",
        content: `<h2>Características principales de Simple Inventory Manager</h2>
<p>Esta herramienta es un libro de stock digital que realiza todos los cálculos matemáticos complejos por usted de forma automática.</p>
<ol>
  <li><strong>Entradas y Salidas (Un clic):</strong> Actualizar el stock no requiere volver a escribir. Use botones rápidos para añadir entradas o reducir artículos vendidos. El saldo de stock se actualizará automáticamente al instante.</li>
  <li><strong>Alertas de stock bajo:</strong> No deje que su almacén se quede vacío. Esta herramienta cuenta con un indicador visual (color rojo) que se encenderá si el stock de un artículo está por debajo del límite mínimo que usted defina. ¡Es hora de reponer antes de que se agote!</li>
  <li><strong>Valoración automática de activos:</strong> Puede ver el valor total de su dinero que actualmente está en forma de mercancía en el almacén. El sistema calculará la acumulación de precios de compra/coste para que sepa exactamente el total de sus activos comerciales.</li>
  <li><strong>Búsqueda y filtros instantáneos:</strong> ¿Tiene cientos de artículos? No se preocupe. Nuestra función de búsqueda es muy rápida. Solo escriba el nombre del artículo y los datos aparecerán al instante sin necesidad de desplazarse uno por uno.</li>
</ol>`
      },
      {
        title: "¿Por qué debería usar VersoKit?",
        content: `<h2>¿Por qué debería usar VersoKit?</h2>
<ul>
  <li><strong>100% Offline y Privado:</strong> Esta es nuestra principal ventaja. Los datos de stock, precios de coste y nombres de proveedores nunca se envían a internet. Todo se almacena de forma segura en su navegador. Los secretos de su negocio siguen siendo suyos.</li>
  <li><strong>Gratis para siempre:</strong> Sin cuotas de suscripción mensual (Sin coste mensual). Una solución económica para PYMES que quieren crecer.</li>
  <li><strong>Exportar a Excel:</strong> ¿Necesita datos para informes fiscales o auditorías anuales? Puede exportar todos los datos a formato Excel (CSV) o JSON con un clic.</li>
  <li><strong>Sin instalación:</strong> No necesita ocupar memoria en el móvil. Ábralo desde el navegador y la herramienta estará lista para usar en cualquier momento.</li>
</ul>`
      },
      {
        title: "¿Para quién es adecuada esta herramienta?",
        content: `<h2>¿Para quién es adecuada esta herramienta?</h2>
<ul>
  <li><strong>Tiendas online pequeñas:</strong> Para quienes venden desde casa y quieren tener el stock de su habitación bien controlado.</li>
  <li><strong>Tiendas de alimentación y abarrotes:</strong> Control de suministros de alimentos básicos y necesidades diarias.</li>
  <li><strong>Negocios de servicios y repuestos:</strong> Talleres de motos con stock de bujías/aceite, o técnicos de aire acondicionado que controlan el stock de freon.</li>
  <li><strong>Aficiones y coleccionistas:</strong> Perfecto para listar colecciones de libros, zapatos o juguetes para evitar compras duplicadas.</li>
</ul>`
      },
      {
        title: "Cómo empezar a gestionar el stock en 4 pasos",
        content: `<h2>Cómo empezar a gestionar el stock en 4 pasos</h2>
<ol>
  <li><strong>Añadir artículo:</strong> Introduzca el nombre del artículo, stock inicial, precio de coste y límite de stock mínimo.</li>
  <li><strong>Entrada de mercancía:</strong> Haga clic en el botón (+) cada vez que llegue un nuevo envío de un proveedor.</li>
  <li><strong>Salida de mercancía:</strong> Haga clic en el botón (-) cada vez que se venda o retire un artículo.</li>
  <li><strong>Monitorear panel:</strong> Vea el capital total y compre inmediatamente los artículos que ya estén en rojo.</li>
</ol>
<p><strong>¡Empiece a ordenar la gestión de su almacén hoy mismo!</strong> Un negocio fluido empieza con una gestión de stock correcta. Deje de adivinar la cantidad de sus productos y empiece a usar un sistema digital de precisión. Stock más ordenado, negocio más fluido. ¡Pruebe Simple Inventory Manager ahora mismo!</p>`
      }
    ]
  },
  pt: {
    title: "Gestão de Inventário Simples: Controle de Stock para PMEs Grátis",
    sections: [
      {
        title: "Cansado de contar manualmente?",
        content: `<h2>Cansado de contar manualmente?</h2>
<p>Cansado de contar o stock todas as noites num caderno? Sente-se stressado porque o capital está "preso" em artigos que não vendem, enquanto os produtos mais populares se esgotam?</p>
<p>A gestão de stock é o coração de qualquer negócio comercial. Sem registos organizados, as pequenas empresas são muito vulneráveis a perdas por extravio de artigos, excesso de stock ou perda de clientes por falta de existências.</p>
<p><strong>Simple Inventory Manager</strong> da VersoKit chega como a solução para quem já não consegue gerir o stock manualmente, mas ainda não precisa de um sistema POS complexo e caro.</p>`
      },
      {
        title: "Problemas clássicos que costumam travar os pequenos negócios",
        content: `<h2>Problemas clássicos que costumam travar os pequenos negócios</h2>
<p>Muitos proprietários de PMEs ficam presos em problemas de gestão de armazém por falta das ferramentas certas:</p>
<ul>
  <li><strong>"Artigos perdidos" sem rasto:</strong> O stock nas prateleiras e nos registos costuma diferir por esquecer de anotar as transações em tempo real.</li>
  <li><strong>Dinheiro morto no armazém:</strong> Continua a comprar artigos dos quais ainda existem unidades, pelo que o seu capital permanece inativo sem gerar lucro.</li>
  <li><strong>Perda de compradores:</strong> Nada dói mais do que um cliente chegar com dinheiro e ter de recusá-lo por não saber que o stock se tinha esgotado.</li>
  <li><strong>Stress ao calcular ativos:</strong> Calcular manualmente o valor total do capital nas prateleiras da loja é exaustivo e propenso a erros.</li>
</ul>`
      },
      {
        title: "Principais recursos do Simple Inventory Manager",
        content: `<h2>Principais recursos do Simple Inventory Manager</h2>
<p>Esta ferramenta é um livro de stock digital que realiza todos os cálculos matemáticos complexos por si de forma automática.</p>
<ol>
  <li><strong>Entradas e Saídas (Um clique):</strong> Atualizar o stock não requer reescrever. Use botões rápidos para adicionar entradas ou reduzir artigos vendidos. O saldo de stock será atualizado automaticamente no instante.</li>
  <li><strong>Alertas de stock baixo:</strong> Não deixe que o seu armazém fique vazio. Esta ferramenta possui um indicador visual (cor vermelha) que se acenderá se o stock de um artigo estiver abaixo do limite mínimo que definir. É hora de repor antes que se esgote!</li>
  <li><strong>Avaliação automática de ativos:</strong> Pode ver o valor total do seu dinheiro que atualmente está em forma de mercadoria no armazém. O sistema calculará a acumulação de preços de compra/custo para que saiba exatamente o total dos seus ativos comerciais.</li>
  <li><strong>Busca e filtros instantâneos:</strong> Tem centenas de artigos? Não se preocupe. A nossa função de busca é muito rápida. Basta escrever o nome do artigo e os dados aparecerão instantaneamente sem necessidade de percorrer um por um.</li>
</ol>`
      },
      {
        title: "Por que deve usar o VersoKit?",
        content: `<h2>Por que deve usar o VersoKit?</h2>
<ul>
  <li><strong>100% Offline e Privado:</strong> Esta é a nossa principal vantagem. Os dados de stock, preços de custo e nomes de fornecedores nunca são enviados para a internet. Tudo é armazenado de forma segura no seu navegador. Os segredos do seu negócio continuam a ser seus.</li>
  <li><strong>Grátis para sempre:</strong> Sem taxas de subscrição mensal (Sem custo mensal). Uma solução económica para PMEs que querem crescer.</li>
  <li><strong>Exportar para Excel:</strong> Precisa de dados para relatórios fiscais ou auditorias anuais? Pode exportar todos os dados para formato Excel (CSV) ou JSON com um clique.</li>
  <li><strong>Sem instalação:</strong> Não precisa de ocupar memória no telemóvel. Abra a partir do navegador e a ferramenta estará pronta para usar a qualquer momento.</li>
</ul>`
      },
      {
        title: "Para quem é adequada esta ferramenta?",
        content: `<h2>Para quem é adequada esta ferramenta?</h2>
<ul>
  <li><strong>Lojas online pequenas:</strong> Para quem vende a partir de casa e quer ter o stock do seu quarto bem controlado.</li>
  <li><strong>Mercearias e minimercados:</strong> Controlo de mantimentos básicos e necessidades diárias.</li>
  <li><strong>Negócios de serviços e peças:</strong> Oficinas de motas com stock de velas/oleo, ou técnicos de ar condicionado que controlam o stock de freon.</li>
  <li><strong>Hobbies e colecionadores:</strong> Perfeito para listar coleções de livros, sapatos ou brinquedos para evitar compras duplicadas.</li>
</ul>`
      },
      {
        title: "Como começar a gerir o stock em 4 passos",
        content: `<h2>Como começar a gerir o stock em 4 passos</h2>
<ol>
  <li><strong>Adicionar artigo:</strong> Introduza o nome do artigo, stock inicial, preço de custo e limite de stock mínimo.</li>
  <li><strong>Entrada de mercadoria:</strong> Clique no botão (+) cada vez que chegar um novo envio de um fornecedor.</li>
  <li><strong>Saída de mercadoria:</strong> Clique no botão (-) cada vez que um artigo for vendido ou retirado.</li>
  <li><strong>Monitorizar painel:</strong> Veja o capital total e compre imediatamente os artigos que já estiverem a vermelho.</li>
</ol>
<p><strong>Comece a organizar a gestão do seu armazém hoje mesmo!</strong> Um negócio fluido começa com uma gestão de stock correta. Deixe de adivinar a quantidade dos seus produtos e comece a usar um sistema digital de precisão. Stock mais organizado, negócio mais fluido. Experimente o Simple Inventory Manager agora mesmo!</p>`
      }
    ]
  },
  fr: {
    title: "Gestion de Stock Simple : Gérer l'inventaire des PME Gratuitement",
    sections: [
      {
        title: "Fatigué du comptage manuel ?",
        content: `<h2>Fatigué du comptage manuel ?</h2>
<p>Fatigué de compter le stock chaque soir dans un carnet ? Souvent stressé parce que le capital est "bloqué" dans des articles qui ne se vendent pas, alors que les produits populaires sont en rupture de stock ?</p>
<p>La gestion de stock est le cœur de toute entreprise commerciale. Sans registres ordonnés, les petites entreprises sont très vulnérables aux pertes dues à la disparition d'articles, au surstockage ou à la perte de clients pour cause de rupture de stock.</p>
<p><strong>Simple Inventory Manager</strong> de VersoKit arrive comme la solution pour ceux qui ne peuvent plus gérer le stock manuellement, mais n'ont pas encore besoin d'un système POS complexe et coûteux.</p>`
      },
      {
        title: "Problèmes classiques qui freinent souvent les petites entreprises",
        content: `<h2>Problèmes classiques qui freinent souvent les petites entreprises</h2>
<p>Beaucoup de propriétaires de PME sont piégés par des problèmes de gestion d'entrepôt faute d'outils adaptés :</p>
<ul>
  <li><strong>"Articles disparus" sans trace :</strong> Le stock en rayon et dans les registres diffère souvent à cause de l'oubli de noter les transactions en temps réel.</li>
  <li><strong>Argent mort dans l'entrepôt :</strong> Vous continuez à acheter des articles dont il reste pourtant du stock, votre capital reste donc inactif sans générer de profit.</li>
  <li><strong>Perte d'acheteurs :</strong> Rien n'est plus frustrant qu'un client arrivant avec de l'argent, mais que vous deviez refuser parce que vous ne saviez pas que le stock était épuisé.</li>
  <li><strong>Stress lors du calcul des actifs :</strong> Calculer manuellement la valeur totale du capital sur les rayons du magasin est épuisant et sujet aux erreurs.</li>
</ul>`
      },
      {
        title: "Caractéristiques clés de Simple Inventory Manager",
        content: `<h2>Caractéristiques clés de Simple Inventory Manager</h2>
<p>Cet outil est un livre de stock numérique qui effectue tous les calculs mathématiques complexes pour vous de manière automatique.</p>
<ol>
  <li><strong>Entrées & Sorties (Un clic) :</strong> Mettre à jour le stock ne nécessite pas de tout réécrire. Utilisez des boutons rapides pour ajouter des entrées ou réduire les articles vendus. Le solde du stock sera mis à jour automatiquement instantanément.</li>
  <li><strong>Alertes de stock faible :</strong> Ne laissez pas votre entrepôt se vider. Cet outil dispose d'un indicateur visuel (couleur rouge) qui s'allumera si le stock d'un article est inférieur au seuil minimum que vous avez défini. Il est temps de se réapprovisionner avant la rupture !</li>
  <li><strong>Évaluation automatique des actifs :</strong> Vous pouvez voir la valeur totale de votre argent qui est actuellement sous forme de marchandises dans l'entrepôt. Le système calculera le cumul des prix d'achat/coût pour que vous connaissiez exactement le total de vos actifs commerciaux.</li>
  <li><strong>Recherche & filtres instantanés :</strong> Vous avez des centaines d'articles ? Ne vous inquiétez pas. Notre fonction de recherche est très rapide. Tapez simplement le nom de l'article et les données apparaîtront instantanément sans avoir besoin de faire défiler un par un.</li>
</ol>`
      },
      {
        title: "Pourquoi devriez-vous utiliser VersoKit ?",
        content: `<h2>Pourquoi devriez-vous utiliser VersoKit ?</h2>
<ul>
  <li><strong>100% Hors ligne & Privé :</strong> C'est notre premier avantage. Les données de stock, les prix de revient et les noms de vos fournisseurs ne sont jamais envoyés sur internet. Tout est stocké en toute sécurité dans votre navigateur. Vos secrets commerciaux restent les vôtres.</li>
  <li><strong>Gratuit pour toujours :</strong> Pas de frais d'abonnement mensuels (No Monthly Fee). Une solution économique pour les PME qui veulent passer au niveau supérieur.</li>
  <li><strong>Exporter vers Excel :</strong> Besoin de données pour les rapports fiscaux ou les audits annuels ? Vous pouvez extraire toutes les données au format Excel (CSV) ou JSON en un clic.</li>
  <li><strong>Sans installation :</strong> Pas besoin d'occuper la mémoire du téléphone. Ouvrez-le depuis le navigateur et l'outil est prêt à être utilisé à tout moment.</li>
</ul>`
      },
      {
        title: "À qui s'adresse cet outil ?",
        content: `<h2>À qui s'adresse cet outil ?</h2>
<ul>
  <li><strong>Petites boutiques en ligne :</strong> Pour ceux qui vendent depuis chez eux et veulent que le stock dans leur chambre soit bien surveillé.</li>
  <li><strong>Épiceries & commerces de proximité :</strong> Surveillance des approvisionnements en denrées de base et besoins quotidiens.</li>
  <li><strong>Services & pièces détachées :</strong> Ateliers moto stockant des bougies/huile, ou techniciens clim surveillant le stock de freon.</li>
  <li><strong>Loisirs & collectionneurs :</strong> Parfait pour lister des collections de livres, chaussures ou jouets afin d'éviter les doublons.</li>
</ul>`
      },
      {
        title: "Comment commencer à gérer le stock en 4 étapes",
        content: `<h2>Comment commencer à gérer le stock en 4 étapes</h2>
<ol>
  <li><strong>Ajouter un article :</strong> Entrez le nom de l'article, le stock initial, le prix de revient et le seuil de stock minimum.</li>
  <li><strong>Saisie des entrées :</strong> Cliquez sur le bouton (+) à chaque nouvel arrivage d'un fournisseur.</li>
  <li><strong>Saisie des sorties :</strong> Cliquez sur le bouton (-) à chaque article vendu ou sorti.</li>
  <li><strong>Surveiller le tableau de bord :</strong> Consultez le capital total et achetez immédiatement les articles qui sont déjà en rouge.</li>
</ol>
<p><strong>Commencez à mettre de l'ordre dans la gestion de votre entrepôt dès aujourd'hui !</strong> Une entreprise fluide commence par une gestion de stock correcte. Arrêtez de deviner la quantité de vos produits et commencez à utiliser un système numérique de précision. Stock plus ordonné, entreprise plus fluide. Essayez Simple Inventory Manager dès maintenant !</p>`
      }
    ]
  },
  it: {
    title: "App Gestione Magazzino Semplice: Gestisci l'inventario delle PMI gratuitamente",
    sections: [
      {
        title: "Stanco del conteggio manuale?",
        content: `<h2>Stanco del conteggio manuale?</h2>
<p>Stanco di contare le scorte ogni sera su un quaderno? Spesso stressato perché il capitale è "bloccato" in articoli che non si vendono, mentre i prodotti più popolari finiscono le scorte?</p>
<p>La gestione delle scorte è il cuore di ogni attività commerciale. Senza registri ordinati, le piccole imprese sono molto vulnerabili a perdite dovute a smarrimento di articoli, eccesso di scorte o perdita di acquirenti a causa di articoli esauriti.</p>
<p><strong>Simple Inventory Manager</strong> di VersoKit arriva come la soluzione per chi non riesce più a gestire le scorte manualmente, ma non ha ancora bisogno di un sistema POS complesso e costoso.</p>`
      },
      {
        title: "Problemi classici che spesso frenano le piccole imprese",
        content: `<h2>Problemi classici che spesso frenano le piccole imprese</h2>
<p>Molti proprietari di PMI rimangono intrappolati in problemi di gestione del magazzino per mancanza degli strumenti giusti:</p>
<ul>
  <li><strong>"Articoli smarriti" senza traccia:</strong> Le scorte sugli scaffali e nei registri spesso differiscono perché ci si dimentica di annotare le transazioni in tempo reale.</li>
  <li><strong>Denaro morto in magazzino:</strong> Continuate ad acquistare articoli di cui in realtà ci sono ancora scorte, quindi il vostro capitale rimane inattivo senza generare profitti.</li>
  <li><strong>Perdita di acquirenti:</strong> Nulla fa più male di un cliente che arriva con i soldi, ma dovete rifiutarlo perché non sapevate che le scorte erano esaurite.</li>
  <li><strong>Stress nel calcolo degli asset:</strong> Calcolare manualmente il valore totale del capitale sugli scaffali del negozio è estenuante e soggetto a errori.</li>
</ul>`
      },
      {
        title: "Caratteristiche principali di Simple Inventory Manager",
        content: `<h2>Caratteristiche principali di Simple Inventory Manager</h2>
<p>Questo strumento è un libro scorte digitale che esegue tutti i calcoli matematici complessi per voi in modo automatico.</p>
<ol>
  <li><strong>Carico & Scarico (Un clic):</strong> Aggiornare le scorte non richiede di riscrivere tutto. Usate i pulsanti rapidi per aggiungere entrate o ridurre gli articoli venduti. Il saldo delle scorte verrà aggiornato automaticamente all'istante.</li>
  <li><strong>Avvisi scorte basse:</strong> Non lasciate che il vostro magazzino rimanga vuoto. Questo strumento è dotato di un indicatore visivo (colore rosso) che si accenderà se le scorte di un articolo sono al di sotto del limite minimo da voi definito. È ora di rifornirsi prima che finiscano!</li>
  <li><strong>Valutazione automatica degli asset:</strong> Potete vedere il valore totale del vostro denaro che attualmente è sotto forma di merce in magazzino. Il sistema calcolerà l'accumulo dei prezzi di acquisto/costo per farvi conoscere esattamente il totale dei vostri asset aziendali.</li>
  <li><strong>Ricerca & filtri istantanei:</strong> Avete centinaia di articoli? Non preoccupatevi. La nostra funzione di ricerca è molto veloce. Basta digitare il nome dell'articolo e i dati appariranno istantaneamente senza dover scorrere uno per uno.</li>
</ol>`
      },
      {
        title: "Perché dovreste usare VersoKit?",
        content: `<h2>Perché dovreste usare VersoKit?</h2>
<ul>
  <li><strong>100% Offline & Privato:</strong> Questo è il nostro primo vantaggio. I dati delle scorte, i prezzi di costo e i nomi dei vostri fornitori non vengono mai inviati a internet. Tutto è memorizzato in modo sicuro nel vostro browser. I segreti della vostra attività rimangono interamente vostri.</li>
  <li><strong>Gratis per sempre:</strong> Nessun costo di abbonamento mensile (No Monthly Fee). Una soluzione economica per le PMI che vogliono crescere.</li>
  <li><strong>Esporta in Excel:</strong> Servono dati per i rapporti fiscali o gli audit annuali? Potete estrarre tutti i dati in formato Excel (CSV) o JSON con un clic.</li>
  <li><strong>Senza installazione:</strong> Non serve occupare la memoria del telefono. Apritelo dal browser e lo strumento è pronto all'uso in qualsiasi momento.</li>
</ul>`
      },
      {
        title: "Per chi è adatto questo strumento?",
        content: `<h2>Per chi è adatto questo strumento?</h2>
<ul>
  <li><strong>Piccoli negozi online:</strong> Per chi vende da casa e vuole che le scorte in camera siano monitorate con cura.</li>
  <li><strong>Alimentari & negozi di vicinato:</strong> Monitoraggio delle forniture di alimenti di base e necessità quotidiane.</li>
  <li><strong>Attività di servizi & ricambi:</strong> Officine moto con scorte di candele/olio, o tecnici caldaie che monitorano le scorte di freon.</li>
  <li><strong>Hobby & collezionisti:</strong> Perfetto per elencare collezioni di libri, scarpe o giocattoli per evitare acquisti duplicati.</li>
</ul>`
      },
      {
        title: "Come iniziare a gestire le scorte in 4 passaggi",
        content: `<h2>Come iniziare a gestire le scorte in 4 passaggi</h2>
<ol>
  <li><strong>Aggiungi articolo:</strong> Inserite il nome dell'articolo, le scorte iniziali, il prezzo di costo e il limite minimo di scorte.</li>
  <li><strong>Inserimento entrate:</strong> Cliccate sul pulsante (+) ogni volta che arriva una nuova spedizione da un fornitore.</li>
  <li><strong>Inserimento uscite:</strong> Cliccate sul pulsante (-) ogni volta che un articolo viene venduto o esce.</li>
  <li><strong>Monitora dashboard:</strong> Visualizzate il capitale totale e acquistate immediatamente gli articoli che sono già in rosso.</li>
</ol>
<p><strong>Iniziate a mettere ordine nella gestione del vostro magazzino oggi stesso!</strong> Un'attività fluida inizia con una corretta gestione delle scorte. Smettete di indovinare la quantità dei vostri prodotti e iniziate a usare un sistema digitale di precisione. Scorte più ordinate, attività più fluida. Provate Simple Inventory Manager proprio ora!</p>`
      }
    ]
  }
};

const BUDGET_CONTENT: { [lang: string]: ToolArticle } = {
  id: {
    title: "Budget Planner Online: Atur Keuangan Metode Zero-Based Budgeting",
    sections: [
      {
        title: "Gaji Cuma Numpang Lewat?",
        content: `<h2>Gaji Cuma Numpang Lewat?</h2>
<p>Pernahkah Anda merasa gaji "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan, saldo rekening sudah menipis dan Anda bingung: "Uangku habis buat apa saja, ya?"</p>
<p>Masalah utamanya seringkali bukan pada besarnya gaji Anda, melainkan pada cara Anda memperlakukan uang tersebut.</p>
<p>Banyak orang terjebak menggunakan aplikasi Expense Tracker (Pencatat Pengeluaran). Masalahnya, mencatat pengeluaran itu sifatnya penyesalan. Anda hanya mencatat sejarah: "Yah, uangku habis 500 ribu buat kopi."</p>
<p>Sudah saatnya berubah.</p>
<p>Perkenalkan VersoKit Budget Planner. Ini bukan sekadar pencatat, ini adalah alat Perencana Masa Depan berbasis metode <strong>Zero-Based Budgeting (ZBB)</strong>.</p>`
      },
      {
        title: "Apa Itu Zero-Based Budgeting (ZBB)?",
        content: `<h2>Apa Itu Zero-Based Budgeting (ZBB)?</h2>
<p>Filosofi di balik alat ini sangat sederhana namun powerful: <strong>"Berikan pekerjaan untuk setiap rupiah yang Anda miliki."</strong></p>
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
        content: `<h2>Masalah Keuangan yang Kami Selesaikan</h2>
<p>Alat ini dirancang khusus untuk mengatasi "penyakit" finansial umum:</p>
<ol>
  <li><strong>Sindrom "Bocor Alus":</strong> Pengeluaran kecil seperti kopi kekinian, biaya parkir, biaya admin bank, atau langganan aplikasi (subscription) sering tidak terasa. Tiba-tiba totalnya jutaan. Dengan ZBB, Anda dipaksa menganggarkan hal-hal kecil ini di awal.</li>
  <li><strong>Ketakutan Cek Saldo:</strong> Banyak orang takut membuka mobile banking karena takut melihat isinya. Dengan alat ini, Anda akan merasa tenang. Kenapa? Karena Anda tahu persis bahwa uang untuk bayar kost aman, uang makan aman, and uang tabungan sudah disisihkan.</li>
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
      },
      {
        title: "Cara Memulai Budgeting dalam 4 Langkah",
        content: `<h2>Cara Memulai Budgeting dalam 4 Langkah</h2>
<ol>
  <li><strong>Input Pemasukan:</strong> Masukkan gaji atau omzet Anda. Angka "Siap Dianggarkan" akan berubah menjadi Hijau.</li>
  <li><strong>Pos-poskan (Budgeting):</strong> Masukkan nominal ke kolom "Anggaran" di setiap kategori (Kebutuhan Pokok, Cicilan, Tabungan, Hiburan) sampai "Siap Dianggarkan" menjadi Rp 0.</li>
  <li><strong>Catat Transaksi:</strong> Setiap kali Anda belanja, klik tombol (+). Pilih kategori, masukkan nominal. Saldo kategori akan otomatis berkurang.</li>
  <li><strong>Evaluasi & Penyesuaian:</strong> Jika ada kategori yang merah (over-budget), geser anggaran dari kategori lain yang masih sisa.</li>
</ol>`
      },
      {
        title: "Kendalikan Uang Anda Sekarang",
        content: `<p>Jangan biarkan uang mengendalikan hidup Anda. Mulailah merencanakan kemana setiap rupiah akan pergi sebelum bulan berakhir. Rasakan ketenangan pikiran saat mengetahui semua tagihan sudah terbayar dan tabungan sudah terisi. Gratis, Aman, dan Tanpa Install. Coba VersoKit Budget Planner sekarang juga!</p>`
      }
    ]
  },
  en: {
    title: "Budget Planner Online: Manage Finances with Zero-Based Budgeting Method",
    sections: [
      {
        title: "Is Your Salary Just Passing Through?",
        content: `<h2>Is Your Salary Just Passing Through?</h2>
<p>Have you ever felt like your salary is just "passing through"? You receive your paycheck on the 25th, but by the 10th of the next month, your account balance is already low and you're left wondering: "Where did all my money go?"</p>
<p>The main problem often isn't the size of your salary, but how you treat that money.</p>
<p>Many people are trapped using Expense Tracker apps. The problem is, recording expenses is an act of regret. You are only recording history: "Oh, I spent 500 dollars on coffee."</p>
<p>It's time for a change.</p>
<p>Introducing VersoKit Budget Planner. This isn't just a recorder; it's a Future Planning tool based on the <strong>Zero-Based Budgeting (ZBB)</strong> method.</p>`
      },
      {
        title: "What is Zero-Based Budgeting (ZBB)?",
        content: `<h2>What is Zero-Based Budgeting (ZBB)?</h2>
<p>The philosophy behind this tool is very simple yet powerful: <strong>"Give a job to every dollar you own."</strong></p>
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
      },
      {
        title: "Financial Problems We Solve",
        content: `<h2>Financial Problems We Solve</h2>
<p>This tool is specifically designed to overcome common financial "illnesses":</p>
<ol>
  <li><strong>"Small Leak" Syndrome:</strong> Small expenses like trendy coffee, parking fees, bank admin fees, or app subscriptions often go unnoticed. Suddenly the total is thousands. With ZBB, you are forced to budget for these small things at the beginning.</li>
  <li><strong>Balance Check Fear:</strong> Many people are afraid to open mobile banking because they are afraid to see the content. With this tool, you will feel calm. Why? Because you know exactly that the money to pay rent is safe, food money is safe, and savings have already been set aside.</li>
  <li><strong>Money Without Purpose:</strong> Often we have leftover money in the account and are tempted to spend it because we feel "there is still money". In ZBB, "idle" money is strictly forbidden. Everything must be allocated, whether for spending or investment.</li>
</ol>`
      },
      {
        title: "Key Features of VersoKit Budget Planner",
        content: `<ul>
  <li><strong>"To be Budgeted" System:</strong> At the top of the application, you will see a large number. That is your money that doesn't have a "job" yet. Your mission is to spend that number into categories until the indicator is 0 (Zero).</li>
  <li><strong>Cross-Subsidy (Roll with the Punches):</strong> Life is dynamic. Sometimes we overspend in the "Food" category. If your Food category is negative (red), this tool forces you to be honest: Where do you take the money from to cover it? You must take it from another category (e.g., reduce the "Entertainment" portion). This teaches the reality that money cannot appear from trees.</li>
  <li><strong>100% Privacy (Client-Side & Offline):</strong> We know financial data is sensitive. No Bank Login, No ID Upload. All data is stored in your device's LocalStorage (Laptop/Phone). Our server doesn't see your data at all. <strong>Offline Ready</strong> so it can still be used smoothly even with bad signal or airplane mode.</li>
  <li><strong>Export & Import Data:</strong> Changing phones or want further analysis in Excel? You can backup your data to JSON or CSV (Excel) format at any time. You have full control over your data.</li>
</ul>`
      },
      {
        title: "How to Start Budgeting in 4 Steps",
        content: `<h2>How to Start Budgeting in 4 Steps</h2>
<ol>
  <li><strong>Input Income:</strong> Enter your salary or turnover. The "To be Budgeted" number will turn Green.</li>
  <li><strong>Allocate (Budgeting):</strong> Enter the amount into the "Budget" column in each category (Basic Needs, Installments, Savings, Entertainment) until "To be Budgeted" becomes $0.</li>
  <li><strong>Record Transactions:</strong> Every time you shop, click the (+) button. Select a category, enter the amount. The category balance will automatically decrease.</li>
  <li><strong>Evaluation & Adjustment:</strong> If any category is red (over-budget), shift the budget from another category that still has a surplus.</li>
</ol>`
      },
      {
        title: "Control Your Money Now",
        content: `<p>Don't let money control your life. Start planning where every dollar will go before the month ends. Feel the peace of mind knowing all bills are paid and savings are filled. Free, Secure, and No Install. Try VersoKit Budget Planner right now!</p>`
      }
    ]
  },
  de: {
    title: "Online-Budgetplaner: Finanzen mit der Zero-Based-Budgeting-Methode verwalten",
    sections: [
      {
        title: "Ist Ihr Gehalt nur ein Durchlaufposten?",
        content: `<h2>Ist Ihr Gehalt nur ein Durchlaufposten?</h2>
<p>Haben Sie jemals das Gefühl gehabt, dass Ihr Gehalt nur ein „Durchlaufposten“ ist? Am 25. erhalten Sie Ihr Gehalt, aber bereits am 10. des nächsten Monats ist Ihr Kontostand niedrig und Sie fragen sich: „Wofür ist mein ganzes Geld eigentlich draufgegangen?“</p>
<p>Das Hauptproblem ist oft nicht die Höhe Ihres Gehalts, sondern die Art und Weise, wie Sie mit diesem Geld umgehen.</p>
<p>Viele Menschen stecken in der Falle von Expense-Tracker-Apps (Ausgaben-Apps) fest. Das Problem ist, dass das Aufzeichnen von Ausgaben ein Akt des Bedauerns ist. Sie zeichnen lediglich die Geschichte auf: „Ach, ich habe 500 Euro für Kaffee ausgegeben.“</p>
<p>Es ist Zeit für eine Veränderung.</p>
<p>Wir stellen den VersoKit Budgetplaner vor. Dies ist nicht nur ein Aufzeichnungsgerät; es ist ein Werkzeug für die Zukunftsplanung, das auf der <strong>Zero-Based-Budgeting-Methode (ZBB)</strong> basiert.</p>`
      },
      {
        title: "Was ist nullbasiertes Budgetieren (ZBB)?",
        content: `<h2>Was ist nullbasiertes Budgetieren (ZBB)?</h2>
<p>Die Philosophie hinter diesem Tool ist sehr einfach und doch wirkungsvoll: <strong>„Geben Sie jedem Cent, den Sie besitzen, eine Aufgabe.“</strong></p>
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
      },
      {
        title: "Finanzielle Probleme, die wir lösen",
        content: `<h2>Finanzielle Probleme, die wir lösen</h2>
<p>Dieses Tool wurde speziell entwickelt, um gängige finanzielle „Krankheiten“ zu überwinden:</p>
<ol>
  <li><strong>Das „Kleinvieh-macht-auch-Mist“-Syndrom:</strong> Kleine Ausgaben wie trendiger Kaffee, Parkgebühren, Bankgebühren oder App-Abonnements bleiben oft unberkt. Plötzlich summiert sich alles auf Tausende. Mit ZBB sind Sie gezwungen, diese Kleinigkeiten von Anfang an einzuplanen.</li>
  <li><strong>Angst vor dem Kontostand:</strong> Viele Menschen haben Angst, ihr Mobile Banking zu öffnen, weil sie den Inhalt nicht sehen wollen. Mit diesem Tool werden Sie sich ruhig fühlen. Warum? Weil Sie genau wissen, dass das Geld für die Miete sicher ist, das Essensgeld sicher ist und die Ersparnisse bereits beiseitegelegt wurden.</li>
  <li><strong>Geld ohne Zweck:</strong> Oft haben wir restliches Geld auf dem Konto und sind versucht, es auszugeben, weil wir das Gefühl haben, „es ist noch Geld da“. Bei ZBB ist „untätiges“ Geld streng verboten. Alles muss zugewiesen werden, sei es für Ausgaben oder Investitionen.</li>
</ol>`
      },
      {
        title: "Hauptmerkmale des VersoKit Budgetplaners",
        content: `<ul>
  <li><strong>„Bereit zur Budgetierung“-System:</strong> Am oberen Rand der Anwendung sehen Sie eine große Zahl. Das ist Ihr Geld, das noch keine „Aufgabe“ hat. Ihre Mission ist es, diesen Betrag in Kategorien aufzuteilen, bis die Anzeige 0 (Null) erreicht.</li>
  <li><strong>Quersubventionierung (Roll with the Punches):</strong> Das Leben ist dynamisch. Manchmal geben wir in der Kategorie „Essen“ zu viel aus. Wenn Ihre Essenskategorie negativ (rot) ist, zwingt Sie dieses Tool dazu, ehrlich zu sein: Woher nehmen Sie das Geld, um es zu decken? Sie müssen es aus einer anderen Kategorie nehmen (z. B. den Anteil für „Unterhaltung“ reduzieren). Dies lehrt die Realität, dass Geld nicht auf Bäumen wächst.</li>
  <li><strong>100 % Datenschutz (Client-Side & Offline):</strong> Wir wissen, dass Finanzdaten sensibel sind. Kein Bank-Login, kein Ausweis-Upload. Alle Daten werden im LocalStorage Ihres Geräts (Laptop/Telefon) gespeichert. Unser Server sieht Ihre Daten überhaupt nicht. <strong>Offline-bereit</strong>, sodass es auch bei schlechtem Signal oder im Flugmodus reibungslos genutzt werden kann.</li>
  <li><strong>Daten exportieren & importieren:</strong> Sie wechseln das Telefon oder möchten eine weitere Analyse in Excel durchführen? Sie können Ihre Daten jederzeit im JSON- oder CSV-Format (Excel) sichern. Sie haben die volle Kontrolle über Ihre Daten.</li>
</ul>`
      },
      {
        title: "In 4 Schritten mit dem Budgetieren beginnen",
        content: `<h2>In 4 Schritten mit dem Budgetieren beginnen</h2>
<ol>
  <li><strong>Einnahmen eingeben:</strong> Geben Sie Ihr Gehalt oder Ihren Umsatz ein. Die Zahl „Bereit zur Budgetierung“ wird grün.</li>
  <li><strong>Zuweisen (Budgetieren):</strong> Geben Sie den Betrag in die Spalte „Budget“ in jeder Kategorie ein (Grundbedürfnisse, Raten, Sparen, Unterhaltung), bis „Bereit zur Budgetierung“ 0 € erreicht.</li>
  <li><strong>Transaktionen erfassen:</strong> Jedes Mal, wenn Sie einkaufen, klicken Sie auf die Schaltfläche (+). Wählen Sie eine Kategorie aus und geben Sie den Betrag ein. Das Kategorienguthaben verringert sich automatisch.</li>
  <li><strong>Bewertung & Anpassung:</strong> Wenn eine Kategorie rot ist (über dem Budget), verschieben Sie das Budget aus einer anderen Kategorie, die noch einen Überschuss aufweist.</li>
</ol>`
      },
      {
        title: "Kontrollieren Sie Ihr Geld jetzt",
        content: `<p>Lassen Sie nicht zu, dass Geld Ihr Leben kontrolliert. Planen Sie am Anfang des Monats, wohin jeder Cent fließen soll. Genießen Sie die Gewissheit, dass alle Rechnungen bezahlt und die Ersparnisse gefüllt sind. Kostenlos, sicher und ohne Installation. Probieren Sie den VersoKit Budgetplaner jetzt aus!</p>`
      }
    ]
  },
  es: {
    title: "Planificador de Presupuesto Online: Gestiona tus Finanzas con el Método de Presupuesto Base Cero",
    sections: [
      {
        title: "¿Su Salario es Solo un 'Paso de Dinero'?",
        content: `<h2>¿Su Salario es Solo un 'Paso de Dinero'?</h2>
<p>¿Alguna vez ha sentido que su salario es solo un "paso de dinero"? Recibe su paga el día 25, pero el día 10 del mes siguiente el saldo de su cuenta ya es bajo y se pregunta: "¿En qué se me ha ido todo el dinero?"</p>
<p>El problema principal no suele ser el tamaño de su salario, sino cómo trata ese dinero.</p>
<p>Muchas personas están atrapadas usando aplicaciones de seguimiento de gastos (Expense Tracker). El problema es que registrar los gastos es un acto de arrepentimiento. Solo está registrando la historia: "Vaya, me gasté 500 en café".</p>
<p>Es hora de cambiar.</p>
<p>Le presentamos VersoKit Budget Planner. Esto no es solo un registrador; es una herramienta de Planificación del Futuro basada en el método de <strong>Presupuesto Base Cero (ZBB)</strong>.</p>`
      },
      {
        title: "¿Qué es el Presupuesto Base Cero (ZBB)?",
        content: `<h2>¿Qué es el Presupuesto Base Cero (ZBB)?</h2>
<p>La filosofía detrás de esta herramienta es muy simple pero poderosa: <strong>"Asigne un trabajo a cada peso que posea."</strong></p>
<p>Imagine el método del "Sobre" de nuestros antepasados. Si tuviera $5,000 en efectivo en la mano, los pondría en sobres físicos:</p>
<ul>
  <li><strong>Sobre de Comida:</strong> $1,500</li>
  <li><strong>Sobre de Alquiler/Electricidad:</strong> $1,500</li>
  <li><strong>Sobre de Ahorros:</strong> $1,000</li>
  <li><strong>Sobre de Entretenimiento:</strong> $1,000</li>
</ul>
<p>Sigue dividiendo ese dinero hasta que el dinero en su mano sea <strong>CERO (0)</strong>. Esto significa que todo el dinero ya tiene su propio puesto asignado.</p>
<p>VersoKit Budget Planner digitaliza este sistema de sobres.</p>
<ul>
  <li><strong>Rastreador de Gastos Estándar:</strong> "¿Cuánto dinero me queda?" (Reactivo/Temeroso).</li>
  <li><strong>Planificador de Presupuesto (ZBB):</strong> "¿Qué plan tengo para este dinero?" (Proactivo/Control).</li>
</ul>`
      },
      {
        title: "Problemas Financieros que Resolvemos",
        content: `<h2>Problemas Financieros que Resolvemos</h2>
<p>Esta herramienta está diseñada específicamente para superar las "enfermedades" financieras comunes:</p>
<ol>
  <li><strong>Síndrome de la "Pequeña Fuga":</strong> Los gastos pequeños como el café de moda, las tarifas de estacionamiento, las comisiones bancarias o las suscripciones a aplicaciones a menudo pasan desapercibidos. De repente, el total es de miles. Con ZBB, se ve obligado a presupuestar estas pequeñas cosas al principio.</li>
  <li><strong>Miedo a Consultar el Saldo:</strong> Muchas personas tienen miedo de abrir la banca móvil porque temen ver el contenido. Con esta herramienta, se sentirá tranquilo. ¿Por qué? Porque sabe exactamente que el dinero para pagar el alquiler está seguro, el dinero para comida está seguro y los ahorros ya se han apartado.</li>
  <li><strong>Dinero sin Propósito:</strong> A menudo tenemos dinero sobrante en la cuenta y nos sentimos tentados a gastarlo porque sentimos que "todavía hay dinero". En ZBB, el dinero "ocioso" está estrictamente prohibido. Todo debe ser asignado, ya sea para gastos o para inversión.</li>
</ol>`
      },
      {
        title: "Características Clave de VersoKit Budget Planner",
        content: `<ul>
  <li><strong>Sistema "Por Presupuestar":</strong> En la parte superior de la aplicación, verá un número grande. Ese es su dinero que aún no tiene un "trabajo". Su misión es gastar ese número en categorías hasta que el indicador sea 0 (Cero).</li>
  <li><strong>Subsidio Cruzado (Aceptar la Realidad):</strong> La vida es dinámica. A veces gastamos de más en la categoría "Comida". Si su categoría de Comida es negativa (roja), esta herramienta lo obliga a ser honesto: ¿De dónde saca el dinero para cubrirlo? Debe tomarlo de otra categoría (por ejemplo, reducir la parte de "Entretenimiento"). Esto enseña la realidad de que el dinero no puede aparecer de los árboles.</li>
  <li><strong>100% Privacidad (Lado del Cliente y Offline):</strong> Sabemos que los datos financieros son sensibles. Sin inicio de sesión bancario, sin carga de identificación. Todos los datos se almacenan en el LocalStorage de su dispositivo (computadora/teléfono). Nuestro servidor no ve sus datos en absoluto. <strong>Listo para usar Offline</strong>, por lo que se puede seguir usando sin problemas incluso con mala señal o en modo avión.</li>
  <li><strong>Exportar e Importar Datos:</strong> ¿Cambia de teléfono o desea realizar un análisis más profundo en Excel? Puede respaldar sus datos en formato JSON o CSV (Excel) en cualquier momento. Usted tiene el control total sobre sus datos.</li>
</ul>`
      },
      {
        title: "Cómo Empezar a Presupuestar en 4 Pasos",
        content: `<h2>Cómo Empezar a Presupuestar en 4 Pasos</h2>
<ol>
  <li><strong>Ingresar Ingresos:</strong> Ingrese su salario o facturación. El número "Por Presupuestar" se volverá Verde.</li>
  <li><strong>Asignar (Presupuestar):</strong> Ingrese el monto en la columna "Presupuesto" de cada categoría (Necesidades Básicas, Cuotas, Ahorros, Entretenimiento) hasta que "Por Presupuestar" sea $0.</li>
  <li><strong>Registrar Transacciones:</strong> Cada vez que compre, haga clic en el botón (+). Seleccione una categoría e ingrese el monto. El saldo de la categoría disminuirá automáticamente.</li>
  <li><strong>Evaluación y Ajuste:</strong> Si alguna categoría está en rojo (por encima del presupuesto), traslade el presupuesto de otra categoría que aún tenga superávit.</li>
</ol>`
      },
      {
        title: "Controle su Dinero Ahora",
        content: `<p>No deje que el dinero controle su vida. Comience a planificar a dónde irá cada peso antes de que termine el mes. Sienta la tranquilidad de saber que todas las facturas están pagadas y los ahorros están llenos. ¡Gratis, Seguro y Sin Instalación. Pruebe VersoKit Budget Planner ahora mismo!</p>`
      }
    ]
  },
  pt: {
    title: "Planejador de Orçamento Online: Controle Suas Finanças com o Método de Orçamento Base Zero",
    sections: [
      {
        title: "O Seu Salário está Apenas 'de Passagem'?",
        content: `<h2>O Seu Salário está Apenas 'de Passagem'?</h2>
<p>Você já sentiu como se o seu salário estivesse apenas "de passagem"? No dia 25 você recebe o salário, mas no dia 10 do mês seguinte o saldo da conta já está baixo e você fica se perguntando: "Onde foi parar todo o meu dinheiro?"</p>
<p>O problema principal muitas vezes não é o valor do seu salário, mas a forma como você trata esse dinheiro.</p>
<p>Muitas pessoas estão presas ao uso de aplicativos de rastreamento de despesas (Expense Tracker). O problema é que registrar despesas é um ato de arrependimento. Você está apenas registrando a história: "Poxa, gastei 500 em café".</p>
<p>É hora de mudar.</p>
<p>Apresentamos o VersoKit Budget Planner. Isto não é apenas um registrador; é uma ferramenta de Planejamento do Futuro baseada no método de <strong>Orçamento Base Zero (ZBB)</strong>.</p>`
      },
      {
        title: "O Que é Orçamento Base Zero (ZBB)?",
        content: `<h2>O Que é Orçamento Base Zero (ZBB)?</h2>
<p>A filosofia por trás desta ferramenta é muito simples, mas poderosa: <strong>"Dê um trabalho para cada real que você possui."</strong></p>
<p>Imagine o método do "Envelope" de nossos antepassados. Se você tivesse R$ 5.000 em dinheiro na mão, você os colocaria em envelopes físicos:</p>
<ul>
  <li><strong>Envelope de Comida:</strong> R$ 1.500</li>
  <li><strong>Envelope de Aluguel/Eletricidade:</strong> R$ 1.500</li>
  <li><strong>Envelope de Poupança:</strong> R$ 1.000</li>
  <li><strong>Envelope de Entretenimento:</strong> R$ 1.000</li>
</ul>
<p>Você continua dividindo esse dinheiro até que o dinheiro na sua mão seja <strong>ZERO (0)</strong>. Isso significa que todo o dinheiro já tem o seu próprio posto atribuído. </p>
<p>O VersoKit Budget Planner digitaliza esse sistema de envelopes.</p>
<ul>
  <li><strong>Rastreador de Despesas Padrão:</strong> "Quanto dinheiro me resta?" (Reativo/Com medo).</li>
  <li><strong>Planejador de Orçamento (ZBB):</strong> "Qual plano eu tenho para este dinheiro?" (Proactive/Controle).</li>
</ul>`
      },
      {
        title: "Problemas Financeiros Que Resolvemos",
        content: `<h2>Problemas Financeiros Que Resolvemos</h2>
<p>Esta ferramenta foi projetada especificamente para superar "doenças" financeiras comuns:</p>
<ol>
  <li><strong>Síndrome do "Pequeno Vazamento":</strong> Pequenas despesas como café da moda, taxas de estacionamento, taxas de administração bancária ou assinaturas de aplicativos muitas vezes passam despercebidas. De repente, o total é de milhares. Com o ZBB, você é forçado a orçar essas pequenas coisas no início.</li>
  <li><strong>Medo de Consultar o Saldo:</strong> Muitas pessoas têm medo de abrir o mobile banking porque têm receio de ver o conteúdo. Com esta ferramenta, você se sentirá calmo. Por quê? Porque você sabe exatamente que o dinheiro para pagar o aluguel está seguro, o dinheiro para comida está seguro e as economias já foram reservadas.</li>
  <li><strong>Dinheiro Sem Propósito:</strong> Muitas vezes temos dinheiro sobrando na conta e ficamos tentados a gastá-lo porque sentimos que "ainda tem dinheiro". No ZBB, o dinheiro "ocioso" é estritamente proibido. Tudo deve be alocado, seja para gastos ou para investimento.</li>
</ol>`
      },
      {
        title: "Recursos Principais do VersoKit Budget Planner",
        content: `<ul>
  <li><strong>Sistema "A ser Orçado":</strong> Na parte superior do aplicativo, você verá um número grande. Esse é o seu dinheiro que ainda não tem um "trabalho". Sua missão é gastar esse número em categorias até que o indicador seja 0 (Zero).</li>
  <li><strong>Subsídio Cruzado (Aceitar a Realidade):</strong> A vida é dinâmica. Às vezes gastamos demais na categoria "Comida". Se a sua categoria de Comida estiver negativa (redirecionada), esta ferramenta o força a ser honesto: De onde você tira o dinheiro para cobri-lo? Você deve tirá-lo de outra categoria (por exemplo, reduzir a parte de "Entretenimento"). Isso ensina a realidade de que o dinheiro não pode aparecer de árvores.</li>
  <li><strong>100% Privacidade (Lado do Cliente e Offline):</strong> Sabemos que os dados financeiros são sensíveis. Sem login bancário, sem upload de identificação. Todos os dados são armazenados no LocalStorage do seu dispositivo (computador/telefone). Nosso servidor não vê seus dados de forma alguma. <strong>Pronto para usar Offline</strong>, de modo que pode ser usado sem problemas mesmo com sinal ruim ou em modo avião.</li>
  <li><strong>Exportar e Importar Dados:</strong> Mudando de telefone ou quer uma análise mais aprofundada no Excel? Você pode fazer backup de seus dados para o formato JSON ou CSV (Excel) a qualquer momento. Você tem controle total sobre seus dados.</li>
</ul>`
      },
      {
        title: "Como Começar a Orçar em 4 Passos",
        content: `<h2>Como Começar a Orçar em 4 Passos</h2>
<ol>
  <li><strong>Inserir Renda:</strong> Insira seu salário ou faturamento. O número "A ser Orçado" ficará Verde.</li>
  <li><strong>Alocar (Orçamento):</strong> Insira o valor na coluna "Orçamento" em cada categoria (Necessidades Básicas, Parcelas, Poupança, Entretenimento) até que "A ser Orçado" se torne R$ 0.</li>
  <li><strong>Registrar Transações:</strong> Toda vez que você comprar, clique no botão (+). Selecione uma categoria, insira o valor. O saldo da categoria diminuirá automaticamente.</li>
  <li><strong>Avaliação e Ajuste:</strong> Se alguma categoria estiver vermelha (acima do orçamento), mude o orçamento de outra categoria que ainda tenha um excedente.</li>
</ol>`
      },
      {
        title: "Controle Seu Dinheiro Agora",
        content: `<p>Não deixe o dinheiro controlar sua vida. Comece a planejar para onde cada real irá antes do mês acabar. Sinta a paz de espírito sabendo que todas as contas estão pagas e as economias estão cheias. Grátis, Seguro e Sem Instalação. Experimente o VersoKit Budget Planner agora mesmo!</p>`
      }
    ]
  },
  fr: {
    title: "Planificateur de Budget en Ligne : Gérez vos Finances avec la Méthode du Budget Base Zéro",
    sections: [
      {
        title: "Votre Salaire N'est-il qu'un 'Passage d'Argent' ?",
        content: `<h2>Votre Salaire N'est-il qu'un 'Passage d'Argent' ?</h2>
<p>Avez-vous déjà eu l'impression que votre salaire n'était qu'un "passage d'argent" ? Vous recevez votre chèque le 25, mais dès le 10 du mois suivant, le solde de votre compte est déjà bas et vous vous demandez : "Où est passé tout mon argent ?"</p>
<p>Le problème principal n'est souvent pas le montant de votre salaire, mais la façon dont vous traitez cet argent.</p>
<p>Beaucoup de gens sont piégés par l'utilisation d'applications de suivi des dépenses (Expense Tracker). Le problème est que l'enregistrement des dépenses est un acte de regret. Vous ne faites qu'enregistrer l'histoire : "Oh, j'ai dépensé 500 en café".</p>
<p>Il est temps de changer.</p>
<p>Découvrez VersoKit Budget Planner. Ce n'est pas seulement un enregistreur ; c'est un outil de Planification de l'Avenir basé sur la méthode du <strong>Budget Base Zéro (BBZ)</strong>.</p>`
      },
      {
        title: "Qu'est-ce que le Budget Base Zéro (BBZ) ?",
        content: `<h2>Qu'est-ce que le Budget Base Zéro (BBZ) ?</h2>
<p>La philosophie derrière cet outil est très simple mais puissante : <strong>"Donnez un travail à chaque euro que vous possédez."</strong></p>
<p>Imaginez la méthode de "l'Enveloppe" de nos ancêtres. Si vous aviez 5 000 € en espèces dans la main, vous les mettriez dans des enveloppes physiques :</p>
<ul>
  <li><strong>Enveloppe Nourriture :</strong> 1 500 €</li>
  <li><strong>Enveloppe Loyer/Électricité :</strong> 1 500 €</li>
  <li><strong>Enveloppe Épargne :</strong> 1 000 €</li>
  <li><strong>Enveloppe Divertissement :</strong> 1 000 €</li>
</ul>
<p>Vous continuez à diviser cet argent jusqu'à ce que l'argent dans votre main soit de <strong>ZÉRO (0)</strong>. Cela signifie que tout l'argent a déjà son propre poste assigné. </p>
<p>VersoKit Budget Planner numérise ce système d'enveloppes.</p>
<ul>
  <li><strong>Suivi des Dépenses Standard :</strong> "Combien d'argent me reste-t-il ?" (Réactif/Craintif).</li>
  <li><strong>Planificateur de Budget (BBZ) :</strong> "Quel plan ai-je pour cet argent ?" (Proactif/Contrôle).</li>
</ul>`
      },
      {
        title: "Problèmes Financiers Que Nous Résolvons",
        content: `<h2>Problèmes Financiers Que Nous Résolvons</h2>
<p>Cet outil est spécifiquement conçu pour surmonter les "maladies" financières courantes :</p>
<ol>
  <li><strong>Syndrome de la "Petite Fuite" :</strong> Les petites dépenses comme le café à la mode, les frais de stationnement, les frais d'administration bancaire ou les abonnements aux applications passent souvent inaperçues. Soudain, le total se chiffre en milliers. Avec le BBZ, vous êtes obligé de budgétiser ces petites choses au début.</li>
  <li><strong>Peur de Consulter le Solde :</strong> De nombreuses personnes ont peur d'ouvrir leur banque en ligne parce qu'elles craignent d'en voir le contenu. Avec cet outil, vous vous sentirez calme. Pourquoi ? Parce que vous savez exactement que l'argent pour payer le loyer est en sécurité, que l'argent pour la nourriture est en sécurité et que l'épargne a déjà été mise de côté.</li>
  <li><strong>Argent Sans But :</strong> Souvent, nous avons d'argent restant sur le compte et sommes tentés de le dépenser parce que nous sentons qu'"il reste de l'argent". Dans le BBZ, l'argent "oisif" est strictement interdit. Tout doit être alloué, que ce soit pour les dépenses ou pour l'investissement.</li>
</ol>`
      },
      {
        title: "Caractéristiques Clés de VersoKit Budget Planner",
        content: `<ul>
  <li><strong>Système "À Budgétiser" :</strong> En haut de l'application, vous verrez un grand nombre. C'est votre argent qui n'a pas encore de "travail". Votre mission est de dépenser ce montant dans des catégories jusqu'à ce que l'indicateur soit à 0 (Zéro).</li>
  <li><strong>Subvention Croisée (Accepter la Réalité) :</strong> La vie est dynamique. Parfois, nous dépensons trop dans la catégorie "Nourriture". Si votre catégorie Nourriture est négative (rouge), cet outil vous force à être honnête : d'où prenez-vous l'argent pour le couvrir ? Vous devez le prendre dans une autre catégorie (par exemple, réduire la part "Divertissement"). Cela enseigne la réalité que l'argent ne peut pas apparaître par magie.</li>
  <li><strong>100% Confidentialité (Côté Client et Offline) :</strong> Nous savons que les données financières sont sensibles. Pas de connexion bancaire, pas de téléchargement d'identité. Toutes les données sont stockées dans le LocalStorage de votre appareil (ordinateur/téléphone). Notre serveur ne voit pas du tout vos données. <strong>Prêt pour l'Offline</strong>, il peut donc être utilisé sans problème même avec un mauvais signal ou en mode avion.</li>
  <li><strong>Exporter et Importer des Données :</strong> Vous changez de téléphone ou souhaitez une analyse plus approfondie dans Excel ? Vous pouvez sauvegarder vos données au format JSON ou CSV (Excel) à tout moment. Vous avez un contrôle total sur vos données.</li>
</ul>`
      },
      {
        title: "Comment Commencer à Budgétiser en 4 Étapes",
        content: `<h2>Comment Commencer à Budgétiser en 4 Étapes</h2>
<ol>
  <li><strong>Saisir les Revenus :</strong> Saisissez votre salaire ou votre chiffre d'affaires. Le nombre "À Budgétiser" deviendra Vert.</li>
  <li><strong>Allouer (Budgétisation) :</strong> Saisissez le montant dans la colonne "Budget" de chaque catégorie (Besoins de Base, Versements, Épargne, Divertissement) jusqu'à ce que "À Budgétiser" devienne 0 €.</li>
  <li><strong>Enregistrer les Transactions :</strong> Chaque fois que vous faites un achat, cliquez sur le bouton (+). Sélectionnez une catégorie, saisissez le montant. Le solde de la catégorie diminuera automatiquement.</li>
  <li><strong>Évaluation et Ajustement :</strong> Si une catégorie est rouge (au-delà du budget), déplacez le budget d'une autre catégorie qui a encore un excédent.</li>
</ol>`
      },
      {
        title: "Contrôlez Votre Argent Maintenant",
        content: `<p>Ne laissez pas l'argent contrôler votre vie. Commencez à planifier où chaque euro ira avant la fin du mois. Ressentez la tranquillité d'esprit en sachant que toutes les factures sont payées et que l'épargne est remplie. Gratuit, Sûr et Sans Installation. Essayez VersoKit Budget Planner dès maintenant !</p>`
      }
    ]
  },
  it: {
    title: "Pianificatore di Budget Online: Gestisci le Finanze con il Metodo del Budget a Base Zero",
    sections: [
      {
        title: "Il Tuo Stipendio è Solo di 'Passaggio'?",
        content: `<h2>Il Tuo Stipendio è Solo di 'Passaggio'?</h2>
<p>Hai mai avuto l'impressione che il tuo stipendio sia solo di "passaggio"? Ricevi la busta paga il 25, ma già il 10 del mese successivo il saldo del tuo conto è basso e ti chiedi: "Dove sono finiti tutti i miei soldi?"</p>
<p>Il problema principale spesso non è l'entità del tuo stipendio, ma il modo in cui tratti quel denaro.</p>
<p>Molte persone sono intrappolate nell'uso di app per il monitoraggio delle spese (Expense Tracker). Il problema è que registrare le spese è un atto di rimpianto. Stai solo registrando la storia: "Oh, ho speso 500 per il caffè".</p>
<p>È ora di cambiare.</p>
<p>Ti presentiamo VersoKit Budget Planner. Questo non è solo un registratore; è uno strumento di Pianificazione del Futuro basato sul metodo del <strong>Budget a Base Zero (BBZ)</strong>.</p>`
      },
      {
        title: "Cos'è il Budget a Base Zero (BBZ)?",
        content: `<h2>Cos'è il Budget a Base Zero (BBZ)?</h2>
<p>La filosofia alla base di questo strumento è molto semplice ma potente: <strong>"Assegna un lavoro a ogni euro che possiedi."</strong></p>
<p>Immagina il metodo della "Busta" dei nostri antenati. Se avessi 5.000 € in contanti in mano, li metteresti in buste fisiche:</p>
<ul>
  <li><strong>Busta Cibo:</strong> 1.500 €</li>
  <li><strong>Busta Affitto/Elettricità:</strong> 1.500 €</li>
  <li><strong>Busta Risparmi:</strong> 1.000 €</li>
  <li><strong>Busta Intrattenimento:</strong> 1.000 €</li>
</ul>
<p>Continui a dividere quel denaro finché l'importo nella tua mano è <strong>ZERO (0)</strong>. Ciò significa che tutto il denaro ha già il proprio posto assegnado. </p>
<p>VersoKit Budget Planner digitalizza questo sistema di buste.</p>
<ul>
  <li><strong>Tracker delle Spese Standard:</strong> "Quanto denaro mi resta?" (Reattivo/Timoroso).</li>
  <li><strong>Pianificatore di Budget (BBZ) :</strong> "Quale piano ho per questo denaro?" (Proattivo/Controllo).</li>
</ul>`
      },
      {
        title: "Problemi Finanziari Che Risolviamo",
        content: `<h2>Problemi Finanziari Che Risolviamo</h2>
<p>Questo strumento è specificamente progettato per superare le comuni "maladies" finanziarie:</p>
<ol>
  <li><strong>Sindrome della "Piccola Perdita":</strong> Le piccole spese come il caffè alla moda, le tariffe del parcheggio, le commissioni bancarie o gli abbonamenti alle app passano spesso inosservate. All'improvviso, il totale ammonta a migliaia. Con il BBZ, sei costretto a preventivare queste piccole cose all'inizio.</li>
  <li><strong>Paura di Controllare il Saldo:</strong> Molte persone hanno paura di aprire il mobile banking perché temono di vederne il contenuto. Con questo strumento, ti sentirai calmo. Perché? Perché sai esattamente che i soldi per pagare l'affitto sono al sicuro, i soldi per il cibo sono al sicuro e i risparmi sono già stati accantonati.</li>
  <li><strong>Denaro Senza Scopo:</strong> Spesso abbiamo del denaro rimasto sul conto e siamo tentati di spenderlo perché sentiamo che "ci sono ancora dei soldi". Nel BBZ, il denaro "ozioso" è severamente vietato. Tutto deve essere allocato, sia per la spesa che per l'investimento.</li>
</ol>`
      },
      {
        title: "Caratteristiche Principali di VersoKit Budget Planner",
        content: `<ul>
  <li><strong>Sistema "Da Preventivare":</strong> Nella parte superiore dell'applicazione, vedrai un numero grande. Quello è il tuo denaro che non ha ancora un "lavoro". La tua missione è spendere quella cifra nelle categorie finché l'indicatore non è 0 (Zero).</li>
  <li><strong>Sussidio Incrociato (Accettare la Realtà):</strong> La vita è dinamica. A volte spendiamo troppo nella categoria "Cibo". Se la tua categoria Cibo è negativa (rossa), questo strumento ti costringe a essere onesto: da dove prendi i soldi per coprirlo? Devi prenderli da un'altra categoria (ad esempio, riducendo la quota per l' "Intrattenimento"). Questo insegna la realtà che i soldi non possono apparire per magia.</li>
  <li><strong>100% Privacy (Lato Client e Offline):</strong> Sappiamo che i dati finanziari sono sensibili. Nessun accesso bancario, nessun caricamento di documenti. Tutti i dati sono memorizzati nel LocalStorage del tuo dispositivo (computer/telefono). Il nostro server non vede affatto i tuoi dati. <strong>Pronto per l'Offline</strong>, quindi può essere utilizzato senza problemi anche con scarso segnale o in modalità aereo.</li>
  <li><strong>Esporta e Importa Dati:</strong> Cambi telefono o desideri un'ulteriore analisi in Excel? Puoi eseguire il backup dei tuoi dati in formato JSON o CSV (Excel) a qualsiasi momento. Hai il pieno controllo dei tuoi dati.</li>
</ul>`
      },
      {
        title: "Come Iniziare il Budgeting in 4 Passaggi",
        content: `<h2>Come Iniziare il Budgeting in 4 Passaggi</h2>
<ol>
  <li><strong>Inserisci le Entrate:</strong> Inserisci il tuo stipendio o il tuo fatturato. Il numero "Da Preventivare" diventerà Verde.</li>
  <li><strong>Alloca (Budgeting):</strong> Inserisci l'importo nella colonna "Budget" in ogni categoria (Bisogni di Base, Rate, Risparmi, Intrattenimento) finché "Da Preventivare" non diventa 0 €.</li>
  <li><strong>Registra le Transazioni:</strong> Ogni volta che fai acquisti, fai clic sul pulsante (+). Seleziona una categoria, inserisci l'importo. Il saldo della categoria diminuirà automaticamente.</li>
  <li><strong>Valutazione e Adeguamento:</strong> Se una categoria è rossa (oltre il budget), sposta il budget da un'altra categoria che ha ancora un surplus.</li>
</ol>`
      },
      {
        title: "Controlla il Tuo Denaro Ora",
        content: `<p>Non lasciare che il denaro controlli la tua vita. Inizia a pianificare dove andrà ogni euro prima che finisca il mese. Prova la tranquillità di sapere che tutte le bollette sono pagate e i risparmi sono ricaricati. Gratis, Sicuro e Senza Installazione. Prova subito VersoKit Budget Planner!</p>`
      }
    ]
  }
};

// ... (Rest of the tool content constants: TENNIS_CONTENT, LINEUP_CONTENT, TOURNAMENT_CONTENT, SCOREBOARD_CONTENT, SHIFT_CONTENT, INVOICE_CONTENT, AMERICANO_CONTENT, FUTSAL_CONTENT)

// Note: To keep this turn concise while fulfilling the modular architect request, 
// I am providing the structural template for the rest.
// Please say "continue" to output the massive remaining constants for TENNIS, LINEUP, etc.

export const TOOL_ARTICLES: ArticleCollection = {
  inventory: INVENTORY_CONTENT,
  "budget-planner": BUDGET_CONTENT,
  // tennis: TENNIS_CONTENT,
  // lineup: LINEUP_CONTENT,
  // tournament: TOURNAMENT_CONTENT,
  // scoreboard: SCOREBOARD_CONTENT,
  // shift: SHIFT_CONTENT,
  // invoice: INVOICE_CONTENT,
  // americano: AMERICANO_CONTENT,
  // futsal: FUTSAL_CONTENT
};
