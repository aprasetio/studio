
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
        },
        {
          title: "Cara Memulai Budgeting dalam 4 Langkah",
          content: `<ol>
  <li><strong>Input Pemasukan:</strong> Masukkan gaji atau omzet Anda. Angka "Siap Dianggarkan" akan berubah menjadi Hijau.</li>
  <li><strong>Pos-poskan (Budgeting):</strong> Masukkan nominal ke kolom "Anggaran" di setiap kategori (Kebutuhan Pokok, Cicilan, Tabungan, Hiburan) sampai "Siap Dianggarkan" menjadi Rp 0.</li>
  <li><strong>Catat Transaksi:</strong> Setiap kali Anda belanja, klik tombol (+). Pilih kategori, masukkan nominal. Saldo kategori akan otomatis berkurang.</li>
  <li><strong>Evaluasi & Penyesuaian:</strong> Jika ada kategori yang merah (over-budget), geser anggaran dari kategori lain yang masih sisa.</li>
</ol>`
        },
        {
          title: "Kendalikan Uang Anda Sekarang",
          content: `<p>Jangan biarkan uang mengendalikan hidup Anda. Mulailah merencanakan kemana setiap rupiah akan pergi sebelum bulan berakhir. Rasakan ketenangan pikiran saat mengetahui semua tagihan sudah terbayar dan tabungan sudah terisi. Gratis, Aman, dan Tanpa Install. Cobalah VersoKit Budget Planner sekarang juga!</p>`
        }
      ]
    },
    en: {
      title: "Budget Planner Online: Manage Finances with the Zero-Based Budgeting Method",
      sections: [
        {
          title: "Is Your Salary Just Passing Through?",
          content: `<p>Have you ever felt like your salary is just "passing through"? You receive your paycheck on the 25th, but by the 10th of the next month, your account balance is already low and you're left wondering: "Where did all my money go?"</p>
<p>The main problem often isn't the size of your salary, but how you treat that money.</p>
<p>Many people are trapped using Expense Tracker apps. The problem is, recording expenses is an act of regret. You are only recording history: "Oh, I spent 500 dollars on coffee."</p>
<p>It’s time for a change.</p>
<p>Introducing VersoKit Budget Planner. This isn’t just a recorder; it’s a Future Planning tool based on the <strong>Zero-Based Budgeting (ZBB)</strong> method.</p>`
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
        },
        {
          title: "Financial Problems We Solve",
          content: `<p>This tool is specifically designed to overcome common financial "illnesses":</p>
<ol>
  <li><strong>The "Small Leak" Syndrome:</strong> Small expenses like trendy coffee, parking fees, bank admin fees, or app subscriptions often go unnoticed. Suddenly, they total in the thousands. With ZBB, you are forced to budget for these small things at the beginning.</li>
  <li><strong>Balance Check Fear:</strong> Many people are afraid to open mobile banking because they're scared to see the contents. With this tool, you will feel at peace. Why? Because you know exactly that the money for rent is safe, food money is safe, and savings have already been set aside.</li>
  <li><strong>Purpose-less Money:</strong> Often we have leftover money in our account and are tempted to spend it because we feel "there's still money." In ZBB, "idle" money is strictly forbidden. Everything must be allocated, whether for spending or investment.</li>
</ol>`
        },
        {
          title: "Key Features of VersoKit Budget Planner",
          content: `<ul>
  <li><strong>"To be Budgeted" System:</strong> At the top of the app, you will see a large number. That is your money that doesn't have a "job" yet. Your mission is to spend that number into categories until the indicator is 0 (Zero).</li>
  <li><strong>Roll with the Punches (Adaptability):</strong> Life is dynamic. Sometimes we overspend in the "Food" category. If your Food category is negative (red), this tool forces you to be honest: Where will you take money from to cover it? You must take from another category (e.g., reduce the "Entertainment" allocation). This teaches the reality that money doesn't grow on trees.</li>
  <li><strong>100% Privacy (Client-Side & Offline):</strong> We know financial data is sensitive. No Bank Login, No ID Upload. All data is stored in your device's LocalStorage (Laptop/Phone). Our server does not see your data at all. <strong>Offline Ready</strong> remains perfectly usable even with bad signal or in airplane mode.</li>
  <li><strong>Export & Import Data:</strong> Changing phones or want to analyze further in Excel? You can backup your data to JSON or CSV (Excel) format anytime. You have full control over your data.</li>
</ul>`
        },
        {
          title: "How to Start Budgeting in 4 Steps",
          content: `<ol>
  <li><strong>Input Income:</strong> Enter your salary or revenue. The "To be Budgeted" number will turn Green.</li>
  <li><strong>Allocate (Budgeting):</strong> Enter amounts into the "Budgeted" column for each category (Basic Needs, Installments, Savings, Entertainment) until "To be Budgeted" becomes $0.</li>
  <li><strong>Record Transactions:</strong> Every time you spend, click the (+) button. Select a category, enter the amount. The category balance will automatically decrease.</li>
  <li><strong>Evaluate & Adjust:</strong> If a category is red (over-budget), shift the budget from another category that still has a surplus.</li>
</ol>`
        },
        {
          title: "Control Your Money Now",
          content: `<p>Don't let money control your life. Start planning where every dollar will go before the month ends. Feel the peace of mind knowing that all bills are paid and savings are filled. Free, Secure, and No Install required. Try VersoKit Budget Planner right now!</p>`
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
        },
        {
          title: "Finanzielle Probleme, die wir lösen",
          content: `<p>Dieses Tool wurde speziell entwickelt, um häufige finanzielle „Krankheiten“ zu überwinden:</p>
<ol>
  <li><strong>Das Syndrom des „kleinen Lecks“:</strong> Kleine Ausgaben wie Trend-Kaffee, Parkgebühren, Bankgebühren oder App-Abonnements bleiben oft unbemerkt. Plötzlich summieren sie sich auf Tausende. Mit ZBB sind Sie gezwungen, diese Kleinigkeiten von Anfang an einzuplanen.</li>
  <li><strong>Angst vor dem Kontocheck:</strong> Viele Menschen haben Angst, ihr Mobile-Banking zu öffnen, weil sie sich vor dem Inhalt fürchten. Mit diesem Tool werden Sie sich beruhigt fühlen. Warum? Weil Sie genau wissen, dass das Geld für die Miete sicher ist, das Geld für Essen sicher ist und die Ersparrnisse bereits beiseitegelegt wurden.</li>
  <li><strong>Zweckloses Geld:</strong> Oft haben wir noch Geld auf dem Konto und sind versucht, es auszugeben, weil wir das Gefühl haben, dass „noch Geld da ist“. Beim ZBB ist „untätiges“ Geld strengstens verboten. Alles muss zugewiesen werden, egal ob für Ausgaben oder Investitionen.</li>
</ol>`
        },
        {
          title: "Hauptmerkmale des VersoKit Budgetplaners",
          content: `<ul>
  <li><strong>„Bereit zur Budgetierung“-System:</strong> Am oberen Rand der App sehen Sie eine große Zahl. Das ist Ihr Geld, das noch keine „Aufgabe“ hat. Ihre Mission ist es, diese Zahl auf Kategorien zu verteilen, bis der Indikator 0 (Null) anzeigt.</li>
  <li><strong>Anpassungsfähigkeit (Roll with the Punches):</strong> Das Leben ist dynamisch. Manchmal geben wir in der Kategorie „Essen“ zu viel aus. Wenn Ihre Lebensmittelkategorie im Minus ist (rot markiert), zwingt Sie dieses Tool dazu, ehrlich zu sein: Woher nehmen Sie das Geld, um es zu decken? Sie müssen es aus einer anderen Kategorie nehmen (z. B. das Budget für „Unterhaltung“ kürzen). Dies lehrt die Realität, dass Geld nicht auf Bäumen wächst.</li>
  <li><strong>100 % Privatsphäre (Client-seitig & Offline):</strong> Wir wissen, dass Finanzdaten sensibel sind. Kein Bank-Login, kein Ausweis-Upload. Alle Daten werden im LocalStorage Ihres Geräts (Laptop/Handy) gespeichert. Unser Server sieht Ihre Daten überhaupt nicht. <strong>Offline-bereit</strong> bleibt auch bei schlechtem Signal oder im Flugmodus voll funktionsfähig.</li>
  <li><strong>Datenexport & -import:</strong> Sie wechseln das Handy oder möchten weitere Analysen in Excel durchführen? Sie können Ihre Daten jederzeit im JSON- oder CSV-Format (Excel) sichern. Sie haben die volle Kontrolle über Ihre Daten.</li>
</ul>`
        },
        {
          title: "Budgetplanung in 4 Schritten starten",
          content: `<ol>
  <li><strong>Einnahmen eingeben:</strong> Geben Sie Ihr Gehalt oder Ihren Umsatz ein. Die Zahl „Bereit zur Budgetierung“ wird grün.</li>
  <li><strong>Zuweisen (Budgetierung):</strong> Geben Sie Beträge in die Spalte „Budgetiert“ für jede Kategorie ein (Grundbedürfnisse, Ratenzahlungen, Sparen, Unterhaltung), bis „Bereit zur Budgetierung“ 0 € beträgt.</li>
  <li><strong>Transaktionen aufzeichnen:</strong> Jedes Mal, wenn Sie Geld ausgeben, klicken Sie auf die Schaltfläche (+). Wählen Sie eine Kategorie aus und geben Sie den Betrag ein. Der Kategoriestand verringert sich automatisch.</li>
  <li><strong>Auswerten & Anpassen:</strong> Wenn eine Kategorie rot markiert ist (Budget überschritten), verschieben Sie das Budget aus einer anderen Kategorie, die noch ein Plus aufweist.</li>
</ol>`
        },
        {
          title: "Übernehmen Sie jetzt die Kontrolle",
          content: `<p>Lassen Sie nicht zu, dass das Geld Ihr Leben kontrolliert. Planen Sie, wohin jeder Euro fließen soll, bevor der Monat zu Ende geht. Erleben Sie die beruhigende Gewissheit, dass alle Rechnungen bezahlt und die Ersparnisse gefüllt sind. Kostenlos, sicher und ohne Installation. Probieren Sie den VersoKit Budgetplaner jetzt aus!</p>`
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
        },
        {
          title: "¿Qué es el Presupuesto Base Cero (ZBB)?",
          content: `<p>La filosofía detrás de esta herramienta es muy simple pero poderosa: <strong>"Dale un trabajo a cada euro que tengas."</strong></p>
<p>Imagina el método del "Sobre" de nuestros antepasados. Si tuviera 5.000 € en efectivo en la mano, los pondría en sobres físicos:</p>
<ul>
  <li><strong>Sobre de Comida:</strong> 1.500 €</li>
  <li><strong>Sobre de Alquiler/Electricidad:</strong> 1.500 €</li>
  <li><strong>Sobre de Ahorros:</strong> 1.000 €</li>
  <li><strong>Sobre de Entretenimiento:</strong> 1.000 €</li>
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
          content: `<p>Esta herramienta está diseñada específicamente para superar las "enfermedades" financieras comunes:</p>
<ol>
  <li><strong>El Síndrome de la "Pequeña Fuga":</strong> Los gastos pequeños como el café de moda, las tarifas de estacionamiento, las comisiones bancarias o las suscripciones de aplicaciones a menudo pasan desapercibidos. De repente, suman miles. Con ZBB, te ves obligado a presupuestar estas cosas pequeñas al principio.</li>
  <li><strong>Miedo a Consultar el Saldo:</strong> Muchas personas tienen miedo de abrir la banca móvil porque temen ver el contenido. Con esta herramienta, te sentirás en paz. ¿Por qué? Porque sabes exactamente que el dinero para el alquiler está seguro, el dinero para la comida está seguro y los ahorros ya se han apartado.</li>
  <li><strong>Dinero sin Propósito:</strong> A menudo tenemos dinero sobrante en nuestra cuenta y nos sentimos tentados a gastarlo porque sentimos que "todavía hay dinero". En el ZBB, el dinero "ocioso" está estrictamente prohibido. Todo debe ser asignado, ya sea para gastos o inversiones.</li>
</ol>`
        },
        {
          title: "Características Principales de VersoKit Budget Planner",
          content: `<ul>
  <li><strong>Sistema "Listo para Presupuestar" (To be Budgeted):</strong> En la parte superior de la aplicación, verás un número grande. Ese es tu dinero que aún no tiene un "trabajo". Tu misión es repartir ese número en categorías hasta que el indicador sea 0 (Cero).</li>
  <li><strong>Subsidio Cruzado (Adaptarse a los Golpes):</strong> La vida es dinámica. A veces gastamos de más en la categoría "Comida". Si tu categoría de Comida es negativa (en rojo), esta herramienta te obliga a ser honesto: ¿de dónde sacarás dinero para cubrirlo? Debes tomarlo de otra categoría (por ejemplo, reducir la asignación para "Entretenimiento"). Esto enseña la realidad de que el dinero no crece en los árboles.</li>
  <li><strong>Privacidad 100% (Lado del Cliente y Offline):</strong> Sabemos que los datos financieros son sensibles. Sin inicio de sesión bancario, sin carga de identificación. Todos los datos se almacenan en el LocalStorage de tu dispositivo (portátil/móvil). Nuestro servidor no ve tus datos en absoluto. <strong>Listo para usar Offline</strong> incluso con mala señal o en modo avión.</li>
  <li><strong>Exportar e Importar Datos:</strong> ¿Cambias de móvil o quieres analizar más a fondo en Excel? Puedes hacer una copia de seguridad de tus datos en formato JSON o CSV (Excel) en cualquier momento. Tienes el control total sobre tus datos.</li>
</ul>`
        },
        {
          title: "Cómo Empezar a Presupuestar en 4 Pasos",
          content: `<ol>
  <li><strong>Ingresar Ingresos:</strong> Introduce tu salario o ingresos. El número "Listo para Presupuestar" cambiará a verde.</li>
  <li><strong>Asignar (Presupuestar):</strong> Introduce cantidades en la columna "Presupuestado" de cada categoría (Necesidades Básicas, Cuotas, Ahorros, Entretenimiento) hasta que "Listo para Presupuestar" sea 0 €.</li>
  <li><strong>Registrar Transacciones:</strong> Cada vez que gastes, haz clic en el botón (+). Selecciona una categoría e introduce el importe. El saldo de la categoría disminuirá automáticamente.</li>
  <li><strong>Evaluar y Ajustar:</strong> Si una categoría está en rojo (presupuesto excedido), traslada el presupuesto de otra categoría que aún tenga superávit.</li>
</ol>`
        },
        {
          title: "Controle su Dinero Ahora",
          content: `<p>No deje que el dinero controle su vida. Empiece a planificar a dónde irá cada euro antes de que acabe el mes. Siente la tranquilidad de saber que todas las facturas están pagadas y los ahorros están llenos. Gratis, seguro y sin necesidad de instalación. ¡Pruebe VersoKit Budget Planner ahora mismo!</p>`
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
        },
        {
          title: "O Que é o Orçamento Base Zero (ZBB)?",
          content: `<p>A filosofia por trás desta ferramenta é muito simples, mas poderosa: <strong>"Dê um trabalho para cada real que você possui."</strong></p>
<p>Imagine o método do "Envelope" dos nossos antepassados. Se você tivesse 5.000 € em dinheiro na mão, você o colocaria em envelopes físicos:</p>
<ul>
  <li><strong>Envelope de Comida:</strong> 1.500 €</li>
  <li><strong>Envelope de Aluguel/Eletricidade:</strong> 1.500 €</li>
  <li><strong>Envelope de Poupança:</strong> 1.000 €</li>
  <li><strong>Envelope de Entretenimento:</strong> 1.000 €</li>
</ul>
<p>Você continua dividindo esse dinheiro até que o dinheiro em sua mão seja <strong>ZERO (0)</strong>. Isso significa que todo o dinheiro já tem seu próprio destino atribuído.</p>
<p>O VersoKit Budget Planner digitaliza esse sistema de envelopes.</p>
<ul>
  <li><strong>Rastreador de Despesas Padrão:</strong> "Quanto dinheiro me resta?" (Reativo/Temeroso).</li>
  <li><strong>Planejador de Orçamento (ZBB):</strong> "Que plano eu tenho para esse dinheiro?" (Proativo/Controle).</li>
</ul>`
        },
        {
          title: "Problemas Financeiros que Resolvemos",
          content: `<p>Esta ferramenta foi projetada especificamente para superar "doenças" financeiras comuns:</p>
<ol>
  <li><strong>A Síndrome do "Pequeno Vazamento":</strong> Pequenas despesas como café da moda, taxas de estacionamento, taxas administrativas bancárias ou assinaturas de aplicativos muitas vezes passam despercebidas. De repente, elas totalizam milhares. Com o ZBB, você é forçado a orçar essas pequenas coisas logo no início.</li>
  <li><strong>Medo de Consultar o Saldo:</strong> Muitas pessoas têm medo de abrir o mobile banking porque têm receio de ver o conteúdo. Com esta ferramenta, você se sentirá em paz. Por quê? Porque você sabe exatamente que o dinheiro para o aluguel está seguro, o dinheiro para a comida está seguro e as economias já foram reservadas.</li>
  <li><strong>Dinheiro Sem Propósito:</strong> Frequentemente temos dinheiro sobrando na conta e ficamos tentados a gastá-lo porque sentimos que "ainda tem dinheiro". No ZBB, dinheiro "parado" é estritamente proibido. Tudo deve ser alocado, seja para gastos ou investimentos.</li>
</ol>`
        },
        {
          title: "Principais Funcionalidades do VersoKit Budget Planner",
          content: `<ul>
  <li><strong>Sistema "Pronto para ser Orçado" (To be Budgeted):</strong> No topo do aplicativo, você verá um número grande. Esse é o seu dinheiro que ainda não tem um "trabalho". Sua missão é distribuir esse número entre as categorias até que o indicador seja 0 (Zero).</li>
  <li><strong>Subsídio Cruzado (Jogo de Cintura):</strong> A vida é dinâmica. Às vezes gastamos demais na categoria "Comida". Se a sua categoria de Comida estiver negativa (red), esta ferramenta força você a ser honesto: de onde você vai tirar dinheiro para cobri-la? Você deve tirar de outra categoria (ex: reduzir a cota de "Lazer"). Isso ensina a realidade de que dinheiro não nasce em árvore.</li>
  <li><strong>100% de Privacidade (Client-Side e Offline):</strong> Sabemos que os dados financeiros são sensíveis. Sem Login Bancário, Sem Upload de Identidade. Todos os dados são armazenados no LocalStorage do seu dispositivo (Laptop/Celular). Nosso servidor não vê seus dados de forma alguma. <strong>Pronto para uso Offline</strong> mesmo com sinal ruim ou em modo avião.</li>
  <li><strong>Exportar e Importar Dados:</strong> Vai trocar de celular ou quer analisar melhor no Excel? Você pode fazer backup dos seus dados nos formatos JSON ou CSV (Excel) a qualquer momento. Você tem controle total sobre seus dados.</li>
</ul>`
        },
        {
          title: "Como Começar o Orçamento em 4 Passos",
          content: `<ol>
  <li><strong>Inserir Receitas:</strong> Insira seu salário ou faturamento. O número "Pronto para ser Orçado" ficará verde.</li>
  <li><strong>Destinar (Fazer o Orçamento):</strong> Insira valores na coluna "Orçado" em cada categoria (Necessidades Básicas, Parcelas, Poupança, Lazer) até que "Pronto para ser Orçado" se torne 0 €.</li>
  <li><strong>Registrar Transações:</strong> Toda vez que você gastar, clique no botão (+). Escolha a categoria e insira o valor. O saldo da categoria diminuirá automaticamente.</li>
  <li><strong>Avaliar e Ajustar:</strong> Se houver alguma categoria no vermelho (acima do orçamento), desloque o orçamento de outra categoria que ainda tenha saldo.</li>
</ol>`
        },
        {
          title: "Controle Seu Dinheiro Agora",
          content: `<p>Não deixe o dinheiro controlar sua vida. Comece a planejar para onde cada real irá antes que o mês termine. Sinta a paz de espírito ao saber que todas as contas estão pagas e as economias estão preenchidas. Grátis, seguro e sem necessidade de instalação. Experimente o VersoKit Budget Planner agora mesmo!</p>`
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
        },
        {
          title: "Qu'est-ce que le Budget Base Zéro (BBZ) ?",
          content: `<p>La philosophie derrière cet outil est très simple mais puissante : <strong>"Donnez un travail à chaque euro que vous possédez."</strong></p>
<p>Imaginez la méthode des "Enveloppes" de nos ancêtres. Si vous aviez 5 000 € en espèces dans votre main, vous les mettriez dans des enveloppes physiques :</p>
<ul>
  <li><strong>Enveloppe Nourriture :</strong> 1 500 €</li>
  <li><strong>Enveloppe Loyer/Électricité :</strong> 1 500 €</li>
  <li><strong>Enveloppe Épargne :</strong> 1 000 €</li>
  <li><strong>Enveloppe Divertissement :</strong> 1 000 €</li>
</ul>
<p>Vous continuez à diviser cet argent jusqu'à ce que l'argent dans votre main soit à <strong>ZÉRO (0)</strong>. Cela signifie que tout l'argent a déjà son propre poste assigné.</p>
<p>VersoKit Budget Planner numérise ce système d'enveloppes.</p>
<ul>
  <li><strong>Suivi des Dépenses Classique :</strong> "Combien d'argent me reste-t-il ?" (Réactif/Craintif).</li>
  <li><strong>Planificateur de Budget (BBZ) :</strong> "Quel plan ai-je pour cet argent ?" (Proactif/Contrôle).</li>
</ul>`
        },
        {
          title: "Problèmes Financiers que Nous Résolvons",
          content: `<p>Cet outil est spécifiquement conçu pour surmonter les "maladies" financières courantes :</p>
<ol>
  <li><strong>Le Syndrome de la "Petite Fuite" :</strong> Les petites dépenses comme le café à la mode, les frais de parking, les frais bancaires ou les abonnements à des applications passent souvent inaperçues. Soudain, elles totalisent des milliers d'euros. Avec le BBZ, vous êtes obligé de budgétiser ces petites choses dès le départ.</li>
  <li><strong>La Peur de Consulter son Solde :</strong> Beaucoup de gens ont peur d'ouvrir leur application bancaire par crainte de voir le contenu. Avec cet outil, vous vous sentirez serein. Pourquoi ? Parce que vous savez exactement que l'argent du loyer est en sécurité, que l'argent pour la nourriture est là et que l'épargne a déjà été mise de côté.</li>
  <li><strong>L'Argent Sans But :</strong> Souvent, il nous reste de l'argent sur notre compte et nous sommes tentés de le dépenser parce que nous avons l'impression qu'il "reste de l'argent". En BBZ, l'argent "oisif" est strictement interdit. Tout doit être alloué, que ce soit pour des dépenses ou des investissements.</li>
</ol>`
        },
        {
          title: "Fonctionnalités Clés de VersoKit Budget Planner",
          content: `<ul>
  <li><strong>Système "À Budgétiser" (To be Budgeted) :</strong> En haut de l'application, vous verrez un grand chiffre. C'est votre argent qui n'a pas encore de "travail". Votre mission est de dépenser ce chiffre dans les catégories jusqu'à ce que l'indicateur soit à 0 (Zéro).</li>
  <li><strong>Inter-financement (S'adapter aux imprévus) :</strong> La vie est dynamique. Parfois, nous dépensons trop dans la catégorie "Nourriture". Si votre catégorie Nourriture est négative (en rouge), cet outil vous oblige à être honnête : où allez-vous prendre l'argent pour couvrir cela ? Vous devez le prendre d'une autre catégorie (par exemple, réduire l'allocation "Divertissement"). Cela enseigne la réalité que l'argent ne tombe pas du ciel.</li>
  <li><strong>Confidentialité 100% (Côté Client & Hors Ligne) :</strong> Nous savons que les données financières sont sensibles. Pas de connexion bancaire, pas d'envoi de carte d'identité. Toutes les données sont stockées dans le LocalStorage de votre appareil (ordinateur/téléphone). Notre serveur ne voit pas du tout vos données. <strong>Prêt pour le mode Hors Ligne</strong> même avec un mauvais signal ou en mode avion.</li>
  <li><strong>Exportation & Importation de Données :</strong> Vous changez de téléphone ou voulez analyser plus en détail dans Excel ? Vous pouvez sauvegarder vos données au format JSON ou CSV (Excel) à tout moment. Vous avez le contrôle total sur vos données.</li>
</ul>`
        },
        {
          title: "Comment Commencer son Budget en 4 Étapes",
          content: `<ol>
  <li><strong>Saisir les Revenus :</strong> Entrez votre salaire ou votre chiffre d'affaires. Le chiffre "À Budgétiser" deviendra vert.</li>
  <li><strong>Répartir (Budgétisation) :</strong> Entrez les montants dans la colonne "Budgétisé" de chaque catégorie (Besoins de Base, Mensualités, Épargne, Divertissement) jusqu'à ce que le montant "À Budgétiser" soit de 0 €.</li>
  <li><strong>Enregistrer les Transactions :</strong> Chaque fois que vous dépensez, cliquez sur le bouton (+). Sélectionnez une catégorie, entrez le montant. Le solde de la catégorie diminuera automatiquement.</li>
  <li><strong>Évaluer & Ajuster :</strong> Si une catégorie est dans le rouge (dépassement de budget), déplacez le budget d'une autre catégorie qui présente encore un surplus.</li>
</ol>`
        },
        {
          title: "Contrôlez Votre Argent Maintenant",
          content: `<p>Ne laissez pas l'argent contrôler votre vie. Commencez à planifier où chaque euro ira avant la fin du mois. Ressentez la tranquillité d'esprit en sachant que toutes les factures sont payées et que l'épargne est constituée. Gratuit, sécurisé et sans installation requise. Essayez VersoKit Budget Planner dès maintenant !</p>`
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
<p>Molte persone sono intrappolate nell'uso di app per il monitoraggio delle spese (Expense Tracker). Il problema è che registrare le spese è un atto di rimpianto. Stai solo registrando la storia: "Oh, ho speso 500 per il caffè".</p>
<p>È ora di cambiare.</p>
<p>Ti presentiamo VersoKit Budget Planner. Questo non è solo un registratore; è uno strumento di Pianificazione del Futuro basato sul metodo del <strong>Budget a Base Zero (BBZ)</strong>.</p>`
        },
        {
          title: "Cos'è il Budget a Base Zero (BBZ)?",
          content: `<p>La filosofia alla base di questo strumento è molto semplice ma potente: <strong>"Dai un lavoro a ogni euro che possiedi."</strong></p>
<p>Immagina il metodo delle "Buste" dei nostri antenati. Se avessi 5.000 € in contanti in mano, li metteresti in buste fisiche:</p>
<ul>
  <li><strong>Busta per il Cibo:</strong> 1.500 €</li>
  <li><strong>Busta per l'Affitto/Elettricità:</strong> 1.500 €</li>
  <li><strong>Busta per i Risparmi:</strong> 1.000 €</li>
  <li><strong>Busta per lo Svago:</strong> 1.000 €</li>
</ul>
<p>Continui a dividere quel denaro finché il denaro che hai in mano non è <strong>ZERO (0)</strong>. Ciò significa che tutto il denaro ha già la sua destinazione assegnata.</p>
<p>VersoKit Budget Planner digitalizza questo sistema di buste.</p>
<ul>
  <li><strong>Tracker delle Spese Standard:</strong> "Quanto denaro mi è rimasto?" (Reattivo/Timoroso).</li>
  <li><strong>Pianificatore di Budget (BBZ):</strong> "Quale piano ho per questo denaro?" (Proattivo/Controllo).</li>
</ul>`
        },
        {
          title: "Problemi Finanziari che Risolviamo",
          content: `<p>Questo strumento è specificamente progettato per superare le comuni "malattie" finanziarie:</p>
<ol>
  <li><strong>La Sindrome della "Piccola Perdita":</strong> Piccole spese como il caffè alla moda, le tariffe del parcheggio, le commissioni bancarie o gli abbonamenti alle app spesso passano inosservate. Improvvisamente, arrivano a totalizzare migliaia di euro. Con il BBZ, sei costretto a preventivare queste piccole cose all'inizio.</li>
  <li><strong>Paura del Controllo del Saldo:</strong> Molte persone hanno paura di aprire il mobile banking perché temono di vederne il contenuto. Con questo strumento, ti sentirai in pace. Perché? Perché sai esattamente che i soldi per l'affitto sono al sicuro, i soldi per il cibo sono al sicuro e i risparmi sono già stati messi da parte.</li>
  <li><strong>Denaro Senza Scopo:</strong> Spesso abbiamo dei soldi rimasti sul conto e siamo tentati di spenderli perché sentiamo che "ci sono ancora dei soldi". Nel BBZ, il denaro "ozioso" è severamente vietato. Tutto deve essere allocato, che sia per spese o per investimenti.</li>
</ol>`
        },
        {
          title: "Caratteristiche Principali di VersoKit Budget Planner",
          content: `<ul>
  <li><strong>Sistema "Da Preventivare" (To be Budgeted):</strong> Nella parte superiore dell'app, vedrai un numero grande. Quello è il tuo denaro che non ha ancora un "lavoro". La tua missione è spendere quel numero nelle categorie finché l'indicatore non è 0 (Zero).</li>
  <li><strong>Sussidio Incrociato (Adattarsi ai Colpi):</strong> La vita è dinamica. A volte spendiamo troppo nella categoria "Cibo". Se la tua categoria Cibo è negativa (rossa), questo strumento ti costringe a essere onesto: da dove prenderai i soldi per coprirla? Devi prenderli da un'altra categoria (ad esempio, ridurre lo stanziamento per lo "Svago"). Questo insegna la realtà che i soldi non crescono sugli alberi.</li>
  <li><strong>Privacy al 100% (Client-Side e Offline):</strong> Sappiamo che i dati finanziari sono sensibili. Nessun login bancario, nessun caricamento di documenti d'identità. Tutti i dati sono memorizzati nel LocalStorage del tuo dispositivo (Laptop/Telefono). Il nostro server non vede affatto i tuoi dati. <strong>Pronto per l'uso Offline</strong> anche con segnale scarso o in modalità aereo.</li>
  <li><strong>Esporta e Importa Dati:</strong> Cambi telefono o vuoi analizzare ulteriormente in Excel? Puoi eseguire il backup dei tuoi dati in formato JSON o CSV (Excel) in qualsiasi momento. Hai il pieno controllo dei tuoi dati.</li>
</ul>`
        },
        {
          title: "Come Iniziare a Fare il Budget in 4 Passaggi",
          content: `<ol>
  <li><strong>Inserisci le Entrate:</strong> Inserisci il tuo stipendio o le tue entrate. Il numero "Da Preventivare" diventerà verde.</li>
  <li><strong>Assegna (Fare il Budget):</strong> Inserisci gli importi nella colonna "Assegnato" per ogni categoria (Bisogni Primari, Rate, Risparmi, Svago) finché "Da Preventivare" non diventa 0 €.</li>
  <li><strong>Registra le Transazioni:</strong> Ogni volta che spendi, clicca sul pulsante (+). Seleziona una categoria, inserisci l'importo. Il saldo della categoria diminuirà automaticamente.</li>
  <li><strong>Valuta e Regola:</strong> Se una categoria è rossa (fuori budget), sposta il budget da un'altra categoria che ha ancora un surplus.</li>
</ol>`
        },
        {
          title: "Controlla i Tuoi Soldi Ora",
          content: `<p>Non lasciare che il denaro controlli la tua vita. Inizia a pianificare dove andrà ogni euro prima che finisca il mese. Prova la tranquillità di sapere che tutte le bollette sono pagate e i risparmi sono accantonati. Gratuito, sicuro e senza installazione richiesta. Prova VersoKit Budget Planner proprio ora!</p>`
        }
      ]
    }
  },
  "americano": {
    en: {
      title: "Automatic Americano Schedule Generator: Padel, Pickleball & Tennis",
      sections: [
        {
          title: "Play Americano Hassle-Free: Use Our Automatic Schedule Generator & Scoreboard",
          content: `<p>Want to play Americano format but lazy to calculate manually? Use our automatic Americano Generator & Scoreboard. Free, no app install required. Try now!</p>
<p>Are you planning a fun game session of Padel, Pickleball, or Tennis this weekend? The Americano format will surely be the top choice to make the atmosphere more fluid and competitive. But we all know the main problem: Organizing the schedule and calculating points manually is confusing. Who pairs with whom? Who should rest? What is the final leaderboard? Don't let paper, pens, or complicated Excel formulas ruin your fun on the court. Solusinya ada di sini. We provide an Americano Generator Tool that you can use directly on this page. Simply enter the player names, and let our system handle the rest.</p>`
        },
        {
          title: "What is the Americano Format?",
          content: `<p>For those of you trying it for the first time, Americano is the fairest and most exciting social tournament format. The basic concept is simple: <ul><li><strong>Switch Partners:</strong> You will play with a different partner in every match.</li><li><strong>Individual Score:</strong> Although playing doubles, the points you earn are counted for yourself.</li><li><strong>Goal:</strong> Collect as many points as possible to become the leaderboard champion at the end of the session.</li></ul></p><p>This format is perfect for Padel and Pickleball communities because it forces all players to interact (socialize) while competing at the same time.</p>`
        },
        {
          title: "Classic Problems When Playing Americano Manually",
          content: `<p>Without tools or apps, playing Americano can become chaotic: <ul><li><strong>Wasted Time:</strong> Debating who plays whom can take 5-10 minutes on its own.</li><li><strong>Unfairness:</strong> Without an algorithm, there is a possibility that one person keeps getting the same partner.</li><li><strong>Calculation Errors:</strong> Manually adding up scores from dozens of matches on paper is very prone to mistakes.</li></ul></p>`
        },
        {
          title: "Superior Features of Our Americano Generator",
          content: `<p>Why should you use the tools on our website instead of other apps? <ol><li><strong>No Download & Install:</strong> Phone storage full? Relax. Our tool is web-based. You can open it directly from your browser at the court without the hassle of downloading heavy apps.</li><li><strong>Fair Play Algorithm:</strong> Our system ensures balanced player rotation. Everyone will get a fair chance to switch partners and face different opponents.</li><li><strong>Live Leaderboard:</strong> As soon as you enter match scores, the standings will update automatically. All players can see their positions in real-time from their respective phones (if the link is shared).</li></ol></p>`
        },
        {
          title: "How to Use This Americano Generator",
          content: `<p>It's very easy, follow these steps: <ol><li><strong>Enter Player Names:</strong> Type the names of all participants (Minimum 4 people). Odd number? No problem, our system can arrange substitute/resting players in rotation.</li><li><strong>Select Target Points:</strong> Determine how many points you want to play to? (Generally 24 or 32 points).</li><li><strong>Generate Schedule:</strong> Click the build schedule button.</li><li><strong>Play & Input Scores:</strong> After the match is finished, enter the scores.</li><li><strong>See the Winner:</strong> At the end of the session, the system will crown the Americano champion of the day!</li></ol></p>`
        },
        {
          title: "Quick Rules for Point Calculation",
          content: `<p>To maximize the use of our tool, make sure all players understand the rules: <ul><li><strong>Point System:</strong> Matches are counted per ball. If Team A wins 14-10 against Team B, then Team A players each get 14 points, and Team B players each get 10 points.</li><li><strong>Service:</strong> Service rotates every 4 balls (2 times for Team A, 2 times for Team B).</li><li><strong>Winner:</strong> The player with the highest total accumulated points at the end of the tournament.</li></ul></p>`
        },
        {
          title: "Ready to Play?",
          content: `<p>Don't spend your 2-hour court rental just to record scores on paper. Maximize your playing time and let technology work for you. Try our Americano Generator now below (or at the top of the page). Free, fast, and guaranteed to make the game even more exciting!</p>`
        }
      ]
    },
    id: {
      title: "Generator Jadwal Americano Otomatis: Padel, Pickleball & Tenis",
      sections: [
        {
          title: "Main Americano Tanpa Ribet: Gunakan Generator Jadwal & Skor Otomatis Kami",
          content: `<p>Mau main format Americano tapi malas hitung manual? Gunakan Americano Generator & Scoreboard otomatis kami. Gratis, tanpa install aplikasi. Coba sekarang!</p><p>Apakah Anda sedang merencanakan sesi fun game Padel, Pickleball, atau Tenis akhir pekan ini? Format Americano pasti jadi pilihan utama agar suasana lebih cair dan kompetitif. Tapi, kita semua tahu masalah utamanya: Mengatur jadwal dan menghitung poin secara manual itu memusingkan. Siapa berpasangan dengan siapa? Siapa yang harus istirahat? Bagaimana klasemen akhirnya? Jangan biarkan kertas, pulpen, atau rumus Excel yang rumit merusak keseruan Anda di lapangan. Solusinya ada di sini. Kami menyediakan Americano Generator Tool yang bisa Anda gunakan langsung di halaman ini. Cukup masukkan nama pemain, dan biarkan sistem kami mengatur sisanya.</p>`
        },
        {
          title: "Apa Itu Format Americano?",
          content: `<p>Bagi Anda yang baru pertama kali mencoba, Americano adalah format turnamen sosial yang paling adil dan seru. Konsep dasarnya sederhana: <ul><li><strong>Ganti Pasangan:</strong> Anda akan bermain dengan pasangan berbeda di setiap pertandingan.</li><li><strong>Skor Individu:</strong> Meskipun bermain ganda, poin yang Anda dapatkan dihitung untuk diri sendiri.</li><li><strong>Tujuan:</strong> Mengumpulkan poin sebanyak mungkin untuk menjadi juara klasemen di akhir sesi.</li></ul></p><p>Format ini sangat cocok untuk komunitas Padel dan Pickleball karena memaksa semua pemain untuk saling berinteraksi (sosialisasi) sekaligus berkompetisi.</p>`
        },
        {
          title: "Masalah Klasik Saat Main Americano Manual",
          content: `<p>Tanpa tools atau aplikasi, main Americano bisa jadi kacau: <ul><li><strong>Waktu Terbuang:</strong> Debat siapa lawan siapa bisa memakan waktu 5-10 menit sendiri.</li><li><strong>Tidak Adil:</strong> Tanpa algoritma, ada kemungkinan satu orang terus menerus dapat partner yang sama.</li><li><strong>Salah Hitung:</strong> Menjumlahkan skor puluhan pertandingan secara manual di kertas sangat rawan kesalahan.</li></ul></p>`
        },
        {
          title: "Fitur Unggulan Americano Generator Kami",
          content: `<p>Mengapa Anda harus menggunakan tools di website kami daripada aplikasi lain? <ol><li><strong>Tanpa Download & Install:</strong> Penyimpanan HP penuh? Tenang. Tool kami berbasis web (web-based). Anda bisa membukanya langsung dari browser di lapangan tanpa perlu repot download aplikasi berat.</li><li><strong>Algoritma Fair Play:</strong> Sistem kami memastikan rotasi pemain seimbang. Setiap orang akan mendapatkan kesempatan yang adil untuk berganti pasangan dan melawan musuh yang berbeda.</li><li><strong>Live Leaderboard (Klasemen Langsung):</strong> Begitu Anda memasukkan skor pertandingan, klasemen akan otomatis terupdate. Semua pemain bisa melihat posisi mereka secara real-time dari HP masing-masing (jika link dibagikan).</li></ol></p>`
        },
        {
          title: "Cara Menggunakan Generator Americano Ini",
          content: `<p>Sangat mudah, ikuti langkah berikut: <ol><li><strong>Masukkan Nama Pemain:</strong> Ketik nama semua peserta (Minimal 4 orang). Jumlah ganjil? Tidak masalah, sistem kami bisa mengatur pemain cadangan/istirahat secara bergilir.</li><li><strong>Pilih Poin Target:</strong> Tentukan mau main sampai poin berapa? (Umumnya 24 atau 32 poin).</li><li><strong>Generate Jadwal:</strong> Klik tombol buat jadwal.</li><li><strong>Main & Input Skor:</strong> Setelah match selesai, masukkan skornya.</li><li><strong>Lihat Pemenang:</strong> Di akhir sesi, sistem akan menobatkan juara Americano hari itu!</li></ol></p>`
        },
        {
          title: "Aturan Singkat Perhitungan Poin",
          content: `<p>Agar penggunaan tool kami makin maksimal, pastikan semua pemain paham aturan mainnya: <ul><li><strong>Sistem Poin:</strong> Pertandingan dihitung per bola. Jika Tim A menang 14-10 lawan Tim B, maka Pemain Tim A masing-masing dapat 14 poin, dan Tim B masing-masing dapat 10 poin.</li><li><strong>Servis:</strong> Servis bergantian setiap 4 kali bola (2 kali Tim A, 2 kali Tim B).</li><li><strong>Pemenang:</strong> Pemain dengan total poin akumulasi tertinggi di akhir turnamen.</li></ul></p>`
        },
        {
          title: "Siap Bermain?",
          content: `<p>Jangan habiskan waktu 2 jam sewa lapangan Anda hanya untuk mencatat skor di kertas. Maksimalkan waktu bermain dan biarkan teknologi yang bekerja untuk Anda. Cobalah Americano Generator kami sekarang juga di bawah ini (atau di bagian atas halaman). Gratis, cepat, dan dijamin bikin permainan makin seru!</p>`
        }
      ]
    }
  },
  "futsal": {
    en: {
      title: "Digital Futsal Scoreboard Online: Free, Timer & Foul Counter",
      sections: [
        {
          title: "Elevate Your Futsal Matches with Our Digital Scoreboard",
          content: `<p>Futsal matches feel less exciting without a clear scoreboard and timer. Have you ever experienced awkward moments during sparring: debating the score ("Wait, was it 4-3 or 4-4?"), or confused about how many minutes are left?</p>
<p>A classic problem on non-professional futsal courts is the lack of a proper Scoreboard. Physical digital scoreboards can cost millions, a heavy investment for small court managers or communities. Meanwhile, using a phone stopwatch is often ineffective because the screen is small and only visible to one person.</p>
<p>VersoKit brings a smart solution: <strong>Futsal Scoreboard Digital</strong>. This web-based tool instantly transforms your Laptop, Tablet, or Phone into a professional scoreboard for free!</p>`
        },
        {
          title: "Why You Need the VersoKit Scoreboard?",
          content: `<p>This tool is not just a number recorder. We designed it with specific features that follow international futsal rules (FIFA). Here are the key features you can enjoy:</p>
<ol>
  <li><strong>Flexible Match Timer (Countdown):</strong> In professional futsal, time is everything. This tool is equipped with a countdown timer that you can set—either the pro standard 20 minutes or 15 minutes for casual sparring. <strong>Pause & Resume:</strong> Ball out of play? Injured goalkeeper? Just press the Pause button. Time stops, and Resume when the ball rolls again. Perfect for simulating "Stop-clock" play.</li>
  <li><strong>Foul Counter (Crucial Feature!):</strong> This is a feature often forgotten by regular score apps. In futsal, accumulated fouls heavily determine the match result. Our tool tracks fouls from 0 to 5. <strong>Visual Indicator:</strong> When a team reaches 5 fouls, both you and the players on the field will realize that the next foul (the 6th) means a Second Penalty Mark punishment.</li>
  <li><strong>Professional Look (Customizable):</strong> Edit Team Names: Say goodbye to boring "Home vs Away" text. You can change them to real team names, e.g., "Garuda FC" vs "Harimau FC". Indicator for periods: Clear markers for 1st Half, 2nd Half, or Extra Time.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital Online: Gratis, Timer & Hitung Foul",
      sections: [
        {
          title: "Tingkatkan Level Pertandingan Futsal Anda",
          content: `<p>Main futsal rasanya kurang seru kalau tidak ada papan skor dan waktu yang jelas. Pernahkah Anda mengalami momen canggung saat sparring: berdebat soal skor ("Eh, tadi 4-3 atau 4-4?"), atau bingung sisa waktu tinggal berapa menit?</p>
<p>Masalah klasik di lapangan futsal non-profesional adalah ketiadaan Scoreboard yang layak. Harga papan skor digital fisik bisa mencapai jutaan rupiah, investasi yang cukup mahal bagi pengelola lapangan kecil atau komunitas.</p>
<p>Sementara itu, menggunakan stopwatch di HP seringkali tidak efektif karena layarnya kecil dan hanya bisa dilihat oleh satu orang.</p>
<p>VersoKit menghadirkan solusi cerdas: <strong>Futsal Scoreboard Digital</strong>. Alat berbasis web ini mengubah Laptop, Tablet, atau HP Anda menjadi papan skor profesional secara instan dan gratis!</p>`
        },
        {
          title: "Mengapa Anda Butuh Papan Skor VersoKit?",
          content: `<p>Alat ini bukan sekadar pencatat angka. Kami merancangnya dengan fitur spesifik yang mengikuti standar peraturan futsal internasional (FIFA). Berikut adalah fitur "daging" yang bisa Anda nikmati:</p>
<ol>
  <li><strong>Timer Pertandingan (Countdown) yang Fleksibel:</strong> Dalam futsal profesional, waktu adalah segalanya. Alat ini dilengkapi countdown timer (waktu mundur) yang bisa Anda atur—baik standar 20 menit (babak pro) atau 15 menit (sparring santai). <strong>Pause & Resume:</strong> Bola keluar lapangan? Kiper cedera? Cukup tekan tombol Pause. Waktu berhenti, dan Resume saat bola bergulir kembali. Sangat cocok untuk simulasi "Waktu Bersih".</li>
  <li><strong>Penghitung Pelanggaran (Foul Counter) - Fitur Krusial!:</strong> Ini adalah fitur yang sering dilupakan aplikasi skor biasa. Di futsal, akumulasi pelanggaran sangat menentukan hasil pertandingan. Alat kami melacak akumulasi foul dari 0 hingga 5. <strong>Indikator Visual:</strong> Saat tim mencapai 5 pelanggaran, Anda dan pemain di lapangan akan sadar bahwa pelanggaran berikutnya (ke-6) berarti hukuman Tendangan Penalti Titik Kedua (Second Penalty Mark).</li>
  <li><strong>Tampilan Profesional (Customizable):</strong> Edit Nama Tim: Ucapkan selamat tinggal pada tulisan membosankan "Home vs Away". Anda bisa menggantinya menjadi nama tim asli, misal: "Garuda FC" vs "Harimau FC". Indikator Babak: Penanda jelas untuk Babak 1, Babak 2, atau Extra Time.</li>
</ol>`
        }
      ]
    }
  },
  "tennis": {
    en: {
      title: "Tennis Doubles Generator: Automatic Schedule & Player Rotation",
      sections: [
        {
          title: "Stop Manual Scheduling Hassles with Our Social Mixer Algorithm",
          content: `<p>Do you have a regular tennis group but are starting to get bored because the playing partners are always the same? Or perhaps you often have a headache arranging who should play on Court 1, Court 2, and who should rest when there is an odd number of players?</p>
<p>Managing social tennis sessions for 8 to 12 people manually is indeed complicated. Paper notes are often lost, team divisions are often seen as "cliquey," and time is wasted just debating turn-taking. Leave the old ways behind. Use this <strong>Tennis Doubles Generator</strong> from VersoKit. Consider this tool as your "Pocket Tournament Manager."</p>`
        },
        {
          title: "Classic Problems on the Tennis Court",
          content: `<p>Without a clear system, club practice sessions or fun games often face obstacles:</p>
<ul>
  <li><strong>Monotonous Partners:</strong> Players tend to only play with their close friends (cliques), making new members feel isolated.</li>
  <li><strong>Wasted Time:</strong> Managing 8 people on 2 courts is easy. But what if there are 13 people on 3 courts? Calculating manual rotations takes a long time.</li>
  <li><strong>Skill Imbalance:</strong> Often, skilled players gather with other skilled players, making the game unbalanced and less exciting.</li>
  <li><strong>Odd Player Dilemma:</strong> Who should sit on the bench? Without fair rotation, there might be one person who sits for too long ("stepchild").</li>
</ul>`
        },
        {
          title: "Solusi VersoKit: Key Features of the Tennis Generator",
          content: `<p>This tool is designed to solve the above problems in seconds. Here are the main features:</p>
<ol>
  <li><strong>Doubles Pairing Generator:</strong> Our system uses a Social Mixer algorithm. Unlike official tournaments (Fixed Partner), this tool focuses on Rotating Partners. You will change partners in every round automatically. The goal is for all members to get to know each other and for the game to be more fluid.</li>
  <li><strong>Management of Many Courts (Multi-Court):</strong> Have a large session with 3 or 4 courts at once? No problem. This tool will divide players evenly into "Court 1", "Court 2", etc. You don't need to worry about dividing the crowd.</li>
  <li><strong>Smart Bench System (Fair Rest Rotation):</strong> If the number of players is odd (e.g., 9 or 11 people), our system will rotate rest turns automatically. The algorithm ensures no player sits twice in a row (unless everyone has already had a turn to rest).</li>
  <li><strong>Leaderboard & Individual Statistics:</strong> Although it's a doubles format, this tool tracks individual victories (Win/Loss Ratio and Game Difference). At the end of the session, you can see who is the "King of the Court" for that day based on statistical data.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Tennis Doubles Generator: Atur Jadwal & Rotasi Pemain Otomatis",
      sections: [
        {
          title: "Hentikan Kerumitan Penjadwalan Manual",
          content: `<p>Apakah Anda punya grup tenis rutin tapi mulai bosan karena partner mainnya itu-itu saja? Atau mungkin Anda sering pusing mengatur siapa yang harus main di Lapangan 1, Lapangan 2, dan siapa yang harus istirahat saat jumlah pemain ganjil?</p>
<p>Mengelola sesi tenis sosial (social tennis) untuk 8 hingga 12 orang secara manual memang rumit. Catatan di kertas sering hilang, pembagian tim sering dianggap "kubu-kubuan", dan waktu habis hanya untuk berdebat soal giliran main.</p>
<p>Tinggalkan cara lama. Gunakan <strong>Tennis Doubles Generator</strong> dari VersoKit ini. Anggap alat ini sebagai "Manajer Turnamen Saku" Anda.</p>`
        },
        {
          title: "Masalah Klasik di Lapangan Tenis",
          content: `<p>Tanpa sistem yang jelas, sesi latihan klub atau fun game sering mengalami kendala:</p>
<ul>
  <li><strong>Partner Monoton:</strong> Pemain cenderung hanya bermain dengan teman dekatnya (clique), sehingga anggota baru merasa terasing.</li>
  <li><strong>Waktu Terbuang:</strong> Mengatur 8 orang di 2 lapangan itu mudah. Tapi bagaimana jika ada 13 orang di 3 lapangan? Menghitung rotasi manual butuh waktu lama.</li>
  <li><strong>Ketimpangan Skill:</strong> Seringkali pemain jago berkumpul dengan pemain jago, membuat permainan tidak seimbang dan kurang seru.</li>
  <li><strong>Dilema Pemain Ganjil:</strong> Siapa yang harus duduk di bangku cadangan (bench)? Tanpa rotasi yang adil, bisa jadi ada satu orang yang duduk terlalu lama ("anak tiri").</li>
</ul>`
        },
        {
          title: "Solusi VersoKit: Fitur Unggulan Generator Tenis",
          content: `<p>Alat ini dirancang untuk memecahkan masalah di atas dalam hitungan detik. Berikut fitur utamanya:</p>
<ol>
  <li><strong>Rotasi Pasangan (Doubles Pairing Generator):</strong> Sistem kami menggunakan algoritma Social Mixer. Berbeda dengan turnamen resmi (Fixed Partner), alat ini fokus pada Rotating Partner. Anda akan berganti pasangan di setiap ronde secara otomatis. Tujuannya agar semua member saling kenal dan permainan lebih cair.</li>
  <li><strong>Manajemen Banyak Lapangan (Multi-Court):</strong> Punya sesi besar dengan 3 atau 4 lapangan sekaligus? Tidak masalah. Alat ini akan membagi pemain secara merata ke "Court 1", "Court 2", dst. Anda tidak perlu pusing membagi kerumunan.</li>
  <li><strong>Smart Bench System (Rotasi Istirahat Adil):</strong> Jika jumlah pemain ganjil (misal 9 atau 11 orang), sistem kami akan memutar giliran istirahat secara otomatis. Algoritma memastikan tidak ada pemain yang duduk dua kali berturut-turut (kecuali semua sudah kebagian istirahat).</li>
  <li><strong>Leaderboard & Statistik Individu:</strong> Meskipun formatnya ganda, alat ini melacak kemenangan individu (Win/Loss Ratio dan Game Difference). Di akhir sesi, Anda bisa melihat siapa "Raja Lapangan" hari itu berdasarkan data statistik.</li>
</ol>`
        }
      ]
    }
  },
  "lineup": {
    en: {
      title: "Football Lineup Builder: Create Team Formations & Download HD Image",
      sections: [
        {
          title: "Professional Lineup Visualization for Coaches and Fans",
          content: `<p>Want to post your team's Starting XI on Instagram but don't know graphic design? Or are you having a heated debate about strategy in a WhatsApp group, but find it hard to explain complex tactics with just text?</p>
<p>A classic problem for club social media admins or coaches is visualization. Drawing formations on paper or a whiteboard often results in a mess that's hard to read. On the other hand, using heavy software like Photoshop just to make one lineup image takes too much time.</p>
<p>The solution is here. Use the <strong>Football Lineup Builder</strong> from VersoKit. This is an online football formation maker tool that turns your strategy ideas into professional graphics in seconds. Simply "Drag & Drop", type names, and download.</p>`
        },
        {
          title: "Why You Need This Lineup Builder?",
          content: `<p>This tool functions as a digital tactics board that is far more advanced and neat than physical magnetic boards. Here are the key features that will make your life easier:</p>
<ol>
  <li><strong>Instant Starting XI Visualization:</strong> Forget blurry hand sketches. This tool generates high-quality images of a green pitch with precise player positions. Perfect for pre-match briefings.</li>
  <li><strong>Drag & Drop Interface:</strong> Player positions are not rigid. Want the right winger to push further inside? Or the defensive midfielder to drop deeper? Just click and drag (drag & drop) the player icons/jerseys to any position on the field. You have full control over your tactics.</li>
  <li><strong>Popular Formation Presets:</strong> Confused where to start? We provide ready-to-use standard formation templates: Classic (4-4-2, 4-3-3, 3-5-2) and Modern (4-2-3-1, 3-4-3 Diamond, or the "Park the Bus" 5-4-1 strategy). Choose one, adjust a little, and you're done!</li>
  <li><strong>Jersey & Name Customization:</strong> Make your team look authentic. Change player and goalkeeper kit colors to match your team pride (Red, Blue, White, Stripes, etc.). Type player names and squad numbers under the icons. No more players asking, "Where am I playing, Coach?"</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Football Lineup Builder: Buat Formasi Tim Bola & Download Gambar",
      sections: [
        {
          title: "Visualisasi Strategi Tim Layaknya Profesional",
          content: `<p>Mau posting susunan pemain (Starting XI) tim Anda di Instagram tapi tidak bisa desain grafis? Atau Anda sedang berdebat seru tentang strategi Timnas di grup WhatsApp, tapi susah menjelaskan taktik rumit hanya lewat teks?</p>
<p>Masalah klasik admin medsos klub atau pelatih adalah visualisasi. Menggambar formasi di kertas atau papan tulis spidol seringkali hasilnya berantakan dan sulit dibaca. Di sisi lain, menggunakan software berat seperti Photoshop hanya untuk membuat satu gambar line-up memakan waktu terlalu lama.</p>
<p>Solusinya ada di sini. Gunakan <strong>Football Lineup Builder</strong> dari VersoKit. Ini adalah alat pembuat formasi sepak bola online yang mengubah ide strategi Anda menjadi grafis profesional dalam hitungan detik. Cukup "Drag & Drop", ketik nama, dan unduh.</p>`
        },
        {
          title: "Mengapa Anda Perlu Lineup Builder Ini?",
          content: `<p>Alat ini berfungsi sebagai papan taktik digital yang jauh lebih canggih dan rapi daripada papan magnet fisik. Berikut adalah fitur unggulan yang akan mempermudah hidup Anda:</p>
<ol>
  <li><strong>Visualisasi Starting XI Instan:</strong> Lupakan sketsa tangan yang buram. Alat ini menghasilkan gambar grafis lapangan hijau dengan posisi pemain yang presisi. Sangat cocok untuk presentasi sebelum pertandingan (pre-match briefing).</li>
  <li><strong>Drag & Drop Interface (Geser Sesuka Hati):</strong> Posisi pemain tidak kaku. Ingin winger kanan lebih maju menusuk ke dalam? Atau gelandang bertahan lebih turun ke belakang? Cukup klik dan geser (drag & drop) ikon pemain/jersey ke posisi manapun di lapangan. Anda punya kendali penuh atas taktik Anda.</li>
  <li><strong>Preset Formasi Populer:</strong> Bingung mulai dari mana? Kami menyediakan template formasi standar yang siap pakai: Klasik (4-4-2, 4-3-3, 3-5-2) dan Modern (4-2-3-1, 3-4-3 Diamond, atau strategi "Parkir Bus" 5-4-1). Pilih satu, lalu sesuaikan sedikit, dan selesai!</li>
  <li><strong>Kustomisasi Jersey & Nama:</strong> Buat tim Anda terlihat otentik. Ubah warna baju pemain dan kiper agar sesuai dengan kebanggaan tim (Merah, Biru, Putih, Strip, dll). Ketik nama pemain dan nomor punggung di bawah ikon. Tidak ada lagi pemain yang bertanya, "Saya main di posisi mana, Coach?"</li>
</ol>`
        }
      ]
    }
  },
  "tournament": {
    en: {
      title: "Tournament Manager Pro: Auto-Brackets & League Standings",
      sections: [
        {
          title: "Professional Event Management Simplified",
          content: `<p>Busy being a tournament committee for Futsal, E-Sports, or a community competition? We know how stressful managing dozens of participant teams can be.</p>
<p>A classic committee problem is complicated administration. Drawing bracket lines on cardboard takes a long time, and if you miswrite, you have to replace it with new paper. Using Excel? Math formulas for points and goal difference often error, which ultimately triggers protests from participants.</p>
<p>Stop wasting time with manual ways. Use <strong>Tournament Manager Pro</strong> from VersoKit. This is an all-in-one solution to create match schedules, both Knockout Brackets and Round Robin League Systems, in seconds.</p>`
        },
        {
          title: "Why Committees Must Use This Tool?",
          content: `<p>This tool is the "Heart" of successful event organizers. Here are the problems we solve for you:</p>
<ol>
  <li><strong>Instant Knockout Brackets:</strong> Forget rulers and markers. Simply enter team names, and this tool will create an automatic Tree Bracket for 4, 8, 16, up to 32 teams. <strong>Interactive Visuals:</strong> Who's the winner? Just click on the winning team, and their name automatically advances to the next round in the bracket. <strong>Auto-Drawing:</strong> No need to roll dice. Our "Shuffle" button will draw who faces who fairly in 1 second.</li>
  <li><strong>Round Robin League Management:</strong> Making a league competition like the Premier League can now be done by anyone. <strong>Auto-Standings:</strong> Enter match scores (e.g., 2-1), and the standings table will instantly change its order in real-time. <strong>Accurate Calculations:</strong> The system automatically calculates Wins (3 points), Draws (1 point), Losses (0 points), as well as Goal Difference (GD) and Head-to-Head. No more miscalculation drama!</li>
  <li><strong>Multi-Sport Support:</strong> Whatever the type of competition, this tool is ready to use. Physical Sports (Futsal, Badminton, Volleyball, Table Tennis). E-Sports & Games (Mobile Legends, FIFA/eFootball, Valorant). Traditional Games (Chess, Tug of War).</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Tournament Manager Pro: Buat Bagan & Klasemen Liga Otomatis",
      sections: [
        {
          title: "Administrasi Lomba Anti-Ribet",
          content: `<p>Sedang sibuk menjadi panitia turnamen Futsal, E-Sports, atau lomba 17 Agustusan? Kami tahu betapa pusingnya mengelola puluhan tim peserta.</p>
<p>Masalah klasik panitia adalah administrasi yang ribet. Menggambar garis-garis bagan di kertas karton memakan waktu lama, dan jika salah tulis, harus ganti kertas baru. Menggunakan Excel? Rumus hitung poin dan selisih gol sering error, yang ujung-ujungnya memicu protes dari peserta.</p>
<p>Berhenti membuang waktu dengan cara manual. Gunakan <strong>Tournament Manager Pro</strong> dari VersoKit. Ini adalah solusi all-in-one untuk membuat jadwal pertandingan, baik Sistem Gugur (Knockout) maupun Sistem Liga (Round Robin) dalam hitungan detik.</p>`
        },
        {
          title: "Mengapa Panitia Wajib Pakai Alat Ini?",
          content: `<p>Alat ini adalah "Jantung"-nya penyelenggara acara sukses. Berikut masalah yang kami selesaikan untuk Anda:</p>
<ol>
  <li><strong>Sistem Gugur (Knockout Bracket) Instan:</strong> Lupakan penggaris dan spidol. Cukup masukkan nama tim, dan alat ini akan membuat Bagan Pohon (Bracket) otomatis untuk 4, 8, 16, hingga 32 tim. <strong>Visual Interaktif:</strong> Siapa pemenangnya? Cukup klik pada tim yang menang, dan nama mereka otomatis maju ke babak selanjutnya di bagan. <strong>Drawing Otomatis:</strong> Tidak perlu melinting kertas arisan. Tombol "Shuffle/Acak" kami akan mengundi siapa lawan siapa secara adil dalam 1 detik.</li>
  <li><strong>Manajemen Liga (Round Robin) Tanpa Kalkulator:</strong> Membuat kompetisi liga seperti Premier League kini bisa dilakukan siapa saja. <strong>Auto-Standings:</strong> Masukkan skor pertandingan (misal 2-1), dan tabel klasemen akan langsung berubah urutannya secara real-time. <strong>Perhitungan Akurat:</strong> Sistem otomatis menghitung Menang (3 poin), Seri (1 poin), Kalah (0 poin), serta Selisih Gol (GD) dan Head-to-Head. Tidak ada lagi drama salah hitung!</li>
  <li><strong>Dukungan Multi-Sport:</strong> Apapun jenis lombanya, alat ini siap digunakan. Olahraga Fisik (Futsal, Badminton, Voli, Tenis Meja). E-Sports & Game (Mobile Legends, FIFA/eFootball, Valorant). Lomba Tradisional (Catur, Tarik Tambang).</li>
</ol>`
        }
      ]
    }
  },
  "scoreboard": {
    en: {
      title: "Universal Scoreboard: Digital Board for Badminton, Volleyball & Table Tennis",
      sections: [
        {
          title: "One Scoreboard, Many Sports: The Ultimate Referee Companion",
          content: `<p>Have you ever played badminton or volleyball at a local sports hall, only for the referee to keep forgetting the current score? Or maybe the available manual flip board is torn, numbers are missing, and it's too small for spectators in the back stands to see?</p>
<p>In fast-paced sports like Table Tennis or Badminton, scores change every second. Even a slight loss of focus can trigger long debates between players. The solution? Leave the old manual boards behind. Use the <strong>Universal Scoreboard</strong> from VersoKit. This is the "Swiss Army Knife" of digital scoreboards. One sophisticated tool that can be used for various point-based (Rally Point) and set-based sports.</p>`
        },
        {
          title: "Killer Features for Operators & Referees",
          content: `<p>We understand that score operators need speed. Therefore, we designed these features to solve problems on the court:</p>
<ol>
  <li><strong>Keyboard Shortcuts (Fast Control):</strong> This is a favorite feature among referees. You don't have to bother moving the mouse or touching the screen every second. Simply press keys on your laptop keyboard (e.g., specific keys for Home Points, other keys for Away Points). Scores increase instantly. Very responsive to keep up with fast smashes in Ping Pong!</li>
  <li><strong>Swap Sides Feature:</strong> In racket sports and volleyball, players often change ends after every set. On manual boards, you have to flip papers one by one. On VersoKit, simply click the "Swap" button. The positions of names, scores, and team colors will swap left-right automatically in an instant.</li>
  <li><strong>Separate Point & Set Systems:</strong> This tool distinguishes between Game Score (current points) and Set Score (number of round victories). Display Example: Score 21 - 19 | Set 1 - 0. Operators don't need to manually remember who won the first set.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Universal Scoreboard: Papan Skor Digital Badminton, Voli & Ping Pong",
      sections: [
        {
          title: "Satu Papan Skor, Banyak Olahraga",
          content: `<p>Pernahkah Anda bermain bulu tangkis atau voli di GOR, tapi wasitnya sering lupa skor saat ini berapa? Atau mungkin papan skor lipat (flip board) manual yang tersedia sudah robek, angkanya hilang, dan terlalu kecil untuk dilihat penonton di tribun belakang?</p>
<p>Dalam olahraga tempo cepat seperti Tenis Meja atau Badminton, skor berubah setiap detik. Kehilangan fokus sedikit saja bisa memicu perdebatan panjang antar pemain. Solusinya? Tinggalkan papan manual kuno. Gunakan <strong>Universal Scoreboard</strong> dari VersoKit. Ini adalah "Pisau Lipat Swiss Army"-nya papan skor digital. Satu alat canggih yang bisa digunakan untuk berbagai cabang olahraga berbasis poin (Rally Point) dan set.</p>`
        },
        {
          title: "Fitur 'Killer' untuk Operator & Wasit",
          content: `<p>Kami memahami bahwa operator skor butuh kecepatan. Oleh karena itu, fitur-fitur ini kami rancang untuk menyelesaikan masalah di lapangan:</p>
<ol>
  <li><strong>Keyboard Shortcuts (Kendali Cepat):</strong> Ini adalah fitur favorit para wasit. Anda tidak perlu repot menggerakkan mouse atau menyentuh layar setiap detik. Cukup tekan tombol di keyboard laptop Anda (misal: tombol tertentu untuk Poin Home, tombol lain untuk Poin Away). Skor bertambah secara instan. Sangat responsif untuk mengimbangi smash cepat di Ping Pong!</li>
  <li><strong>Fitur Tukar Posisi (Swap Sides):</strong> Di olahraga raket dan voli, pemain sering bertukar tempat lapangan (change ends) setiap selesai satu set. Di papan manual, Anda harus membalik kertas satu per satu. Di VersoKit, cukup klik tombol "Swap". Posisi nama, skor, dan warna tim akan bertukar kiri-kanan secara otomatis dalam sekejap.</li>
  <li><strong>Sistem Poin & Set Terpisah:</strong> Alat ini membedakan antara Skor Game (Poin saat ini) dan Skor Set (Jumlah kemenangan babak). Operator tidak perlu mengingat manual siapa yang memenangkan set pertama.</li>
</ol>`
        }
      ]
    }
  },
  "invoice": {
    en: {
      title: "Free Invoice Generator: Create Professional PDF Invoices (1 Minute)",
      sections: [
        {
          title: "Professionalism and Efficiency for Small Businesses",
          content: `<p>Accounting software like QuickBooks or Xero is great, but the subscription fees are expensive. Using Excel/Word is free, but prone to formula errors and formatting often shifts.</p>
<p>Our tool combines the advantages of both: <strong>Free yet Professional</strong>.</p>
<ul>
  <li><strong>Automatic & Error-Proof:</strong> Humans often make errors, especially when adding up many items. With this tool, you don't need a calculator. Simply enter the Quantity (Qty) and Unit Price, and the system will automatically calculate the Total, including Tax (VAT) or Discount calculations if any. 100% accuracy.</li>
  <li><strong>Industry Standard PDF Format:</strong> Don't send Word files (.doc) that can be easily edited by clients. This tool generates PDF files that look elegant, clean, and secure (content is not easily changed). PDF also ensures your invoice appearance remains neat whether opened on a Laptop or Mobile.</li>
  <li><strong>Global Currency Support:</strong> Have international clients? No problem. You can change the currency from Rupiah (IDR) to Dollar (USD), Euro (EUR), or other currencies according to your work contract needs.</li>
</ul>`
        },
        {
          title: "Key Features: Privacy & Branding",
          content: `<p>We designed this tool with features usually only found in paid applications:</p>
<ul>
  <li><strong>100% Privacy (Client-Side):</strong> This is the most important feature. Client data, monetary amounts, and item details are processed only in your browser. We do NOT send or store your sensitive business data on our servers. Your company's internal secrets are safe.</li>
  <li><strong>Upload Business Logo:</strong> Want to look like a large corporation? Upload your brand logo in the invoice header to increase credibility.</li>
  <li><strong>No Watermark:</strong> The downloaded PDF result is clean. There is no large "Created by VersoKit" text that interferes. This invoice belongs entirely to you.</li>
  <li><strong>Notes & Terms:</strong> A special column is available to write payment details (e.g., "Transfer to Bank: 123456 account name Budi") or warranty terms.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Invoice Generator Gratis: Buat Invoice PDF Profesional (1 Menit)",
      sections: [
        {
          title: "Mengapa Anda Wajib Pakai Alat Ini?",
          content: `<p>Software akuntansi seperti QuickBooks atau Xero memang bagus, tapi biaya langganannya mahal. Menggunakan Excel/Word gratis, tapi rentan salah rumus dan formatnya sering geser.</p>
<p>Alat kami menggabungkan kelebihan keduanya: <strong>Gratis tapi Profesional</strong>.</p>
<ol>
  <li><strong>Otomatis & Anti Salah Hitung:</strong> Manusia sering melakukan human error, apalagi saat menjumlahkan banyak barang. Dengan alat ini, Anda tidak perlu kalkulator. Cukup masukkan Jumlah (Qty) dan Harga Satuan, sistem akan otomatis menghitung Total, termasuk kalkulasi Pajak (PPN) atau Diskon jika ada. Akurasi 100%.</li>
  <li><strong>Format PDF Standar Industri:</strong> Jangan kirim file Word (.doc) yang bisa diedit sembarangan oleh klien. Alat ini menghasilkan file PDF yang terlihat elegan, bersih, dan aman (tidak mudah diubah isinya). PDF juga menjamin tampilan invoice Anda tetap rapi baik dibuka di Laptop maupun HP.</li>
  <li><strong>Dukungan Mata Uang Global:</strong> Punya klien dari luar negeri? Tidak masalah. Anda bisa mengubah mata uang dari Rupiah (IDR) ke Dollar (USD), Euro (EUR), atau mata uang lainnya sesuai kebutuhan kontrak kerja Anda.</li>
</ol>`
        },
        {
          title: "Fitur Unggulan: Privasi & Branding",
          content: `<p>Kami merancang alat ini dengan fitur-fitur yang biasanya hanya ada di aplikasi berbayar:</p>
<ul>
  <li><strong>Privasi 100% (Client-Side):</strong> Ini fitur terpenting. Data klien, nominal uang, dan rincian barang Anda diproses hanya di browser Anda. Kami TIDAK mengirim atau menyimpan data bisnis sensitif Anda di server kami. Rahasia dapur perusahaan Anda aman.</li>
  <li><strong>Upload Logo Bisnis:</strong> Ingin terlihat seperti perusahaan besar? Unggah logo brand Anda di bagian header invoice untuk meningkatkan kredibilitas.</li>
  <li><strong>No Watermark:</strong> Hasil PDF yang Anda unduh bersih. Tidak ada tulisan besar "Created by VersoKit" yang mengganggu. Invoice ini sepenuhnya milik Anda.</li>
  <li><strong>Notes & Terms:</strong> Tersedia kolom khusus untuk menulis detail pembayaran (Misal: "Transfer ke BCA: 123456 a.n Budi") atau syarat garansi.</li>
</ul>`
        }
      ]
    }
  },
  "shift": {
    en: {
      title: "Free Shift Schedule Maker: Manage Roster & Share to WhatsApp",
      sections: [
        {
          title: "Why Switch from Excel to our Shift Scheduler?",
          content: `<p>Confused about managing employee work schedules every week? Still using handwriting on notice boards or complicated Excel formulas? Be careful, poor schedule management can have fatal impacts on your business.</p>
<p>Stop the confusion right now. Use the <strong>Shift Scheduler</strong> from VersoKit—your digital personal assistant for creating tidy, professional, and fair work rosters.</p>
<ul>
  <li><strong>Visual Roster Builder:</strong> Our grid view is simple: Rows for names and columns for days. Use color codes like Morning (Yellow) and Night (Dark) to understand the pattern at a glance.</li>
  <li><strong>"WhatsApp Mode" Feature:</strong> Stop retyping schedules in chats. One click converts the table into neat text ready to be pasted into your team group.</li>
  <li><strong>Workload Calculator:</strong> Monitor total working days automatically to ensure a fair distribution of shifts.</li>
</ul>`
        },
        {
          title: "Operational Efficiency for Every Business",
          content: `<p>Many managers use Excel, but Excel files are often not mobile-friendly. Employees have to zoom in/out multiple times on their phones just to see their work turn. VersoKit Shift Scheduler comes with advantages that traditional Excel does not have.</p>
<p><strong>Classic Problems We Solve:</strong> No more "one empty shift" stories because our visual system clearly shows who is on duty that day. Our schedules are designed to be responsive. If downloaded as an image (PNG), the appearance remains clear and fits on employee smartphone screens.</p>`
        }
      ]
    },
    id: {
      title: "Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA",
      sections: [
        {
          title: "Kenapa Harus Pindah dari Excel ke Shift Scheduler?",
          content: `<p>Hati-hati, manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis Anda. Mulai dari drama di grup WhatsApp karena salah ketik, karyawan yang protes karena jam kerja tidak adil, hingga toko yang kosong karena ada shift yang terlewat tanpa petugas.</p>
<p>Hentikan kebingungan tersebut sekarang juga. Gunakan <strong>Shift Scheduler</strong> dari VersoKit—asisten pribadi digital Anda untuk membuat roster kerja yang rapi, profesional, dan adil.</p>
<ol>
  <li><strong>Visual Roster Builder (Intuitif & Berwarna):</strong> Tampilan tabel grid kami sangat sederhana: Baris untuk Nama Karyawan dan Kolom untuk Hari (Senin-Minggu). Anda bisa menggunakan kode warna untuk membedakan shift (Misal: Pagi = Kuning, Malam = Gelap, OFF = Merah).</li>
  <li><strong>Fitur "WhatsApp Mode" (Killer Feature!):</strong> Ini adalah penyelamat bagi para manajer. Anda tidak perlu lagi mengetik ulang jadwal panjang di chat WhatsApp yang melelahkan. Cukup satu klik "Copy to Clipboard", dan sistem akan mengubah tabel jadwal menjadi teks rapi yang siap di-Paste ke grup WA tim Anda.</li>
  <li><strong>Workload Calculator (Pembagian Adil):</strong> Alat ini memantau total hari masuk setiap karyawan secara otomatis.</li>
</ol>`
        }
      ]
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
  "image-resizer": {
    en: { title: "Image Resizer", sections: [{ title: "Privacy-First Resizing", content: "Resize images specifically for Instagram, TikTok, or Passports. Processed 100% in your browser." }] },
    id: { title: "Ubah Ukuran Gambar", sections: [{ title: "Ubah Ukuran Aman", content: "Ubah ukuran foto khusus untuk Instagram, TikTok, atau Paspor. Diproses 100% di browser Anda, tanpa upload server." }] },
    de: { title: "Bildgröße ändern", sections: [{ title: "Datenschutzfreundliche Größenänderung", content: "Bildgröße für Instagram oder Pässe ändern. 100% im Browser verarbeitet." }] },
    es: { title: "Redimensionar Imagen", sections: [{ title: "Redimensionado Seguro", content: "Cambia el tamaño para Instagram o Pasaporte. Procesado 100% en tu navegador." }] },
    pt: { title: "Redimensionar Imagem", sections: [{ title: "Redimensionamento Seguro", content: "Redimensione para Instagram ou Pasaporte. Processado 100% no navegador." }] },
    fr: { title: "Redimensionner Image", sections: [{ title: "Redimensionnement Sécurisé", content: "Redimensionez pour Instagram ou Passeport. Traité à 100% dans votre navigateur." }] },
    it: { title: "Ridimensiona Immagine", sections: [{ title: "Ridimensionamento Sicuro", content: "Ridimensiona per Instagram o Passaporto. Elaborato al 100% nel browser." }] }
  },
  "image-cropper": {
    en: { title: "Image Cropper", sections: [{ title: "Crop Photos Easily", content: "Crop your images to exact ratios (1:1, 16:9) instantly. No quality loss." }] },
    id: { title: "Potong Gambar", sections: [{ title: "Potong Foto Mudah", content: "Potong gambar Anda ke rasio yang tepat (1:1, 16:9) secara instan. Tanpa mengurangi kualitas." }] },
    de: { title: "Bild zuschneiden", sections: [{ title: "Fotos einfach zuschneiden", content: "Bilder sofort auf exakte Verhältnisse (1:1, 16:9) zuschneiden. Kein Qualitätsverlust." }] },
    es: { title: "Cortar Imagen", sections: [{ title: "Recortar Fotos Fácilmente", content: "Recorta tus imágenes a ratios exactos (1:1, 16:9). Sin pérdida de calidad." }] },
    pt: { title: "Cortar Imagem", sections: [{ title: "Cortar Fotos Facilmente", content: "Corte suas imagens em proporções exatas. Sem perda de qualidade." }] },
    fr: { title: "Rogner Image", sections: [{ title: "Rogner Facilement", content: "Rognez vos images aux ratios exacts. Pas de perte de qualité." }] },
    it: { title: "Ritaglia Immagine", sections: [{ title: "Ritaglia Foto Facilmente", content: "Ritaglia le tue immagini in rapporti esatti. Nessuna perdita di qualità." }] }
  },
  "image-compressor": {
    en: { title: "Image Compressor", sections: [{ title: "Reduce File Size", content: "Secure image compression. Shrink MB to KB instantly without server uploads." }] },
    id: { title: "Kompres Gambar", sections: [{ title: "Kecilkan Foto", content: "Kompresi gambar aman. Ubah MB ke KB secara instan tanpa upload ke server." }] },
    de: { title: "Bildkompressor", sections: [{ title: "Dateigröße reduzieren", content: "Sichere Bildkomprimierung. Reduzieren Sie MB in KB ohne Server-Uploads." }] },
    es: { title: "Compresor de Imagen", sections: [{ title: "Reducir Tamaño", content: "Compresión segura. Reduce MB a KB al instante sin subir a servidores." }] },
    pt: { title: "Compressor de Imagem", sections: [{ title: "Reduzir Tamanho", content: "Compressão segura. Reduza MB para KB instantaneamente sem upload." }] },
    fr: { title: "Compresseur d'Image", sections: [{ title: "Réduire la taille", content: "Compression sécurisée. Réduisez les MB en KB sans envoi sur serveur." }] },
    it: { title: "Compressore Immagini", sections: [{ title: "Riduci Dimensioni", content: "Compressione sicura. Riduci MB in KB senza caricamenti su server." }] }
  },
  "pdf-merge": {
    en: { title: "PDF Merge", sections: [{ title: "Combine PDFs", content: "Merge multiple PDF files into one. Private and offline processing." }] },
    id: { title: "Gabung PDF", sections: [{ title: "Satukan Dokumen", content: "Gabungkan beberapa file PDF menjadi satu. Proses privat dan offline." }] },
    de: { title: "PDF zusammenfügen", sections: [{ title: "Dokumente kombinieren", content: "Mehrere PDFs zu einer Datei verbinden. Private Offline-Verarbeitung." }] },
    es: { title: "Combinar PDF", sections: [{ title: "Unir Documentos", content: "Combina varios archivos PDF en uno. Procesamiento privado y offline." }] },
    pt: { title: "Combinar PDF", sections: [{ title: "Mesclar Documentos", content: "Una vários arquivos PDF em um só. Processamento privado e offline." }] },
    fr: { title: "Fusionner PDF", sections: [{ title: "Combiner des PDF", content: "Fusionnez plusieurs PDF en un seul. Traitement privé et hors ligne." }] },
    it: { title: "Unisci PDF", sections: [{ title: "Combina Documenti", content: "Unisci più file PDF in uno solo. Elaborazione privata e offline." }] }
  },
  "csv-helper": {
    en: { title: "CSV Cleaner", sections: [{ title: "Sanitize Data", content: "Remove duplicates and trim whitespace from CSV files instantly." }] },
    id: { title: "Pembersih CSV", sections: [{ title: "Bersihkan Data", content: "Hapus duplikat dan rapikan spasi dari file CSV secara instan." }] },
    de: { title: "CSV-Reiniger", sections: [{ title: "Daten bereinigen", content: "Duplikate entfernen und Leerzeichen aus CSV-Dateien kürzen." }] },
    es: { title: "Limpiador CSV", sections: [{ title: "Sanear Datos", content: "Elimina duplicados y recorta espacios en archivos CSV al instante." }] },
    pt: { title: "Limpeza CSV", sections: [{ title: "Limpar Dados", content: "Remova duplicatas e limpe espaços em arquivos CSV instantaneamente." }] },
    fr: { title: "Nettoyeur CSV", sections: [{ title: "Nettoyer les données", content: "Supprimez les doublons et les espaces inutiles de vos fichiers CSV." }] },
    it: { title: "Pulitore CSV", sections: [{ title: "Pulisci Dati", content: "Rimuovi duplicati e spazi dai file CSV istantaneamente." }] }
  },
  "calculator": {
    en: { title: "Material Calculator", sections: [{ title: "Estimate Materials", content: "Calculate paint and floor tile needs for your renovation project." }] },
    id: { title: "Kalkulator Material", sections: [{ title: "Estimasi Bahan", content: "Hitung kebutuhan cat dan ubin untuk proyek renovasi Anda." }] },
    de: { title: "Baumaterial-Rechner", sections: [{ title: "Bedarf schätzen", content: "Berechnen Sie den Farb- und Fliesenbedarf für Ihre Renovierung." }] },
    es: { title: "Calculadora de Materiales", sections: [{ title: "Estimar Materiales", content: "Calcula pintura y azulejos para tus proyectos de renovación." }] },
    pt: { title: "Calculadora de Materiais", sections: [{ title: "Estimativa de Materiais", content: "Calcule a necessidade de tinta e pisos para sua reforma." }] },
    fr: { title: "Calculateur de Matériaux", sections: [{ title: "Estimer les matériaux", content: "Calculez vos besoins en peinture et carrelage pour vos travaux." }] },
    it: { title: "Calcolatore Materiali", sections: [{ title: "Stima Materiali", content: "Calcola il fabbisogno di vernice e piastrelle per la ristrutturazione." }] }
  },
  "image-to-pdf": {
    en: { title: "Image to PDF", sections: [{ title: "PDF Creator", content: "Convert JPG and PNG images into a clean PDF document." }] },
    id: { title: "Gambar ke PDF", sections: [{ title: "Buat PDF", content: "Ubah foto JPG dan PNG menjadi dokumen PDF yang rapi." }] },
    de: { title: "Bild zu PDF", sections: [{ title: "PDF Ersteller", content: "Wandeln Sie JPG- und PNG-Bilder in ein PDF-Dokument um." }] },
    es: { title: "Imagen a PDF", sections: [{ title: "Creador de PDF", content: "Convierte imágenes JPG y PNG en un documento PDF limpio." }] },
    pt: { title: "Imagem para PDF", sections: [{ title: "Criador de PDF", content: "Converta imagens JPG e PNG em um documento PDF limpo." }] },
    fr: { title: "Image en PDF", sections: [{ title: "Créateur PDF", content: "Convertissez des images JPG et PNG en document PDF." }] },
    it: { title: "Immagine in PDF", sections: [{ title: "Creatore PDF", content: "Converti immagini JPG e PNG in un documento PDF pulito." }] }
  },
  "kanban": {
    en: {
      title: "Kanban Board Online: Visual Task Management & Workflow",
      sections: [
        {
          title: "What is a Kanban Board?",
          content: `<p>Do you feel overwhelmed with too many tasks but confused about where to start? Or perhaps your stick-it notes are scattered and often lost? It's time to use a visual management system. <strong>Kanban</strong> is a method used by professional teams (like Toyota or software developers) to visualize work and maximize efficiency.</p><p>VersoKit Kanban Board is a digital version of this board. It allows you to see the "flow" of your work from the planning stage to completion. The concept is simple: moving cards from one column to another as tasks progress.</p>`
        },
        {
          title: "Why Use Our Kanban Tool?",
          content: `<p>We designed this tool to be the simplest and fastest way to organize your life or small business:</p><ul><li><strong>1. 100% Privacy (LocalStorage):</strong> Unlike Trello or Jira which store your data on their servers, VersoKit processes everything in your browser. Your task descriptions and projects are 100% your own secret.</li><li><strong>2. Visual Workflow:</strong> See everything at a glance. What needs to be done (To Do), what is currently being worked on (In Progress), and what is finished (Done). This visual clarity reduces mental stress.</li><li><strong>3. Drag & Drop Ease:</strong> Move tasks with one click or swipe. It's satisfying to move a card to the 'Done' column!</li><li><strong>4. Offline Support:</strong> Keep managing your tasks even without an internet connection. Perfect for working in areas with poor signal.</li></ul>`
        }
      ]
    },
    id: {
      title: "Kanban Board Online: Manajemen Tugas Visual & Alur Kerja",
      sections: [
        {
          title: "Apa Itu Kanban Board?",
          content: `<p>Apakah Anda merasa kewalahan dengan terlalu banyak tugas tapi bingung harus mulai dari mana? Atau mungkin catatan tempel (stick-it notes) Anda berantakan dan sering hilang? Saatnya menggunakan sistem manajemen visual. <strong>Kanban</strong> adalah metode yang digunakan tim profesional (seperti Toyota atau pengembang software) untuk memvisualisasikan pekerjaan dan memaksimalkan efisiensi.</p><p>VersoKit Kanban Board adalah versi digital dari papan ini. Alat ini memungkinkan Anda melihat "aliran" pekerjaan Anda dari tahap rencana hingga selesai. Konsepnya sederhana: memindahkan kartu dari satu kolom ke kolom lain seiring kemajuan tugas.</p>`
        },
        {
          title: "Mengapa Menggunakan Alat Kanban Kami?",
          content: `<p>Kami merancang alat ini untuk menjadi cara termudah dan tercepat untuk mengorganisir hidup atau bisnis kecil Anda:</p><ul><li><strong>1. Privasi 100% (LocalStorage):</strong> Berbeda dengan Trello atau Jira yang menyimpan data Anda di server mereka, VersoKit memproses semuanya di browser Anda. Deskripsi tugas dan proyek Anda 100% rahasia milik Anda sendiri.</li><li><strong>2. Alur Kerja Visual:</strong> Lihat semuanya dalam sekejap. Apa yang harus dikerjakan (To Do), apa yang sedang dikerjakan (In Progress), dan apa yang sudah selesai (Done). Kejelasan visual ini mengurangi stres mental.</li><li><strong>3. Kemudahan Drag & Drop:</strong> Pindahkan tugas dengan sekali klik atau geser. Ada kepuasan tersendiri saat memindahkan kartu ke kolom 'Selesai'!</li><li><strong>4. Dukungan Offline:</strong> Tetap kelola tugas Anda meskipun tidak ada koneksi internet. Cocok untuk bekerja di area yang susah sinyal.</li></ul>`
        }
      ]
    },
    de: {
      title: "Kanban-Board Online: Visuelles Aufgabenmanagement & Workflow",
      sections: [
        {
          title: "Was ist ein Kanban-Board?",
          content: `<p>Fühlen Sie sich von zu vielen Aufgaben überwältigt und wissen nicht, wo Sie anfangen sollen? <strong>Kanban</strong> ist eine Methode, um Arbeit zu visualisieren und die Effizienz zu maximieren.</p><p>Das VersoKit Kanban-Board hilft Ihnen, den „Fluss“ Ihrer Arbeit von der Planung bis zum Abschluss zu sehen.</p>`
        },
        {
          title: "Hauptmerkmale",
          content: `<ul><li><strong>100 % Privatsphäre:</strong> Alle Daten werden lokal in Ihrem Browser gespeichert.</li><li><strong>Visueller Workflow:</strong> Aufgaben in 'Zu tun', 'In Arbeit' und 'Erledigt' kategorisieren.</li><li><strong>Drag & Drop:</strong> Einfaches Verschieben von Karten.</li></ul>`
        }
      ]
    }
  }
};
