
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
      title: "Automatic Americano Schedule Generator: Padel, Pickleball & Tennis",
      sections: [
        {
          title: "Play Americano Hassle-Free: Use Our Automatic Schedule Generator & Scoreboard",
          content: `<h2>Want to play Americano format but lazy to calculate manually?</h2>
<p>Use our automatic Americano Generator & Scoreboard. Free, no app install required. Try now!</p>
<p>Are you planning a fun game session of Padel, Pickleball, or Tennis this weekend? The Americano format will surely be the top choice to make the atmosphere more fluid and competitive. But we all know the main problem: Organizing the schedule and calculating points manually is confusing. Who pairs with whom? Who should rest? What is the final leaderboard? Don't let paper, pens, or complicated Excel formulas ruin your fun on the court. Solusinya ada di sini. We provide an Americano Generator Tool that you can use directly on this page. Simply enter the player names, and let our system handle the rest.</p>`
        },
        {
          title: "What is the Americano Format?",
          content: `<p>For those of you trying it for the first time, Americano is the fairest and most exciting social tournament format. The basic concept is simple:</p>
<ul>
  <li><strong>Switch Partners:</strong> You will play with a different partner in every match.</li>
  <li><strong>Individual Score:</strong> Although playing doubles, the points you earn are counted for yourself.</li>
  <li><strong>Goal:</strong> Collect as many points as possible to become the leaderboard champion at the end of the session.</li>
</ul>
<p>This format is perfect for Padel and Pickleball communities because it forces all players to interact (socialize) while competing at the same time.</p>`
        },
        {
          title: "Classic Problems When Playing Americano Manually",
          content: `<p>Without tools or apps, playing Americano can become chaotic:</p>
<ul>
  <li><strong>Wasted Time:</strong> Debating who plays whom can take 5-10 minutes on its own.</li>
  <li><strong>Unfairness:</strong> Without an algorithm, there is a possibility that one person keeps getting the same partner.</li>
  <li><strong>Calculation Errors:</strong> Manually adding up scores from dozens of matches on paper is very prone to mistakes.</li>
</ul>`
        },
        {
          title: "Superior Features of Our Americano Generator",
          content: `<p>Why should you use the tools on our website instead of other apps?</p>
<ol>
  <li><strong>No Download & Install:</strong> Phone storage full? Relax. Our tool is web-based. You can open it directly from your browser at the court without the hassle of downloading heavy apps.</li>
  <li><strong>Fair Play Algorithm:</strong> Our system ensures balanced player rotation. Everyone will get a fair chance to switch partners and face different opponents.</li>
  <li><strong>Live Leaderboard:</strong> As soon as you enter match scores, the standings will update automatically. All players can see their positions in real-time from their respective phones (if the link is shared).</li>
</ol>`
        },
        {
          title: "How to Use This Americano Generator",
          content: `<p>It's very easy, follow these steps:</p>
<ol>
  <li><strong>Enter Player Names:</strong> Type the names of all participants (Minimum 4 people). Odd number? No problem, our system can arrange substitute/resting players in rotation.</li>
  <li><strong>Select Target Points:</strong> Determine how many points you want to play to? (Generally 24 or 32 points).</li>
  <li><strong>Generate Schedule:</strong> Click the build schedule button.</li>
  <li><strong>Play & Input Scores:</strong> After the match is finished, enter the scores.</li>
  <li><strong>See the Winner:</strong> At the end of the session, the system will crown the Americano champion of the day!</li>
</ol>`
        },
        {
          title: "Quick Rules for Point Calculation",
          content: `<p>To maximize the use of our tool, make sure all players understand the rules:</p>
<ul>
  <li><strong>Point System:</strong> Matches are counted per ball. If Team A wins 14-10 against Team B, then Team A players each get 14 points, and Team B players each get 10 points.</li>
  <li><strong>Service:</strong> Service rotates every 4 balls (2 times for Team A, 2 times for Team B).</li>
  <li><strong>Winner:</strong> The player with the highest total accumulated points at the end of the tournament.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Generator Jadwal Americano Otomatis: Padel, Pickleball & Tenis",
      sections: [
        {
          title: "Main Americano Tanpa Ribet: Gunakan Generator Jadwal & Skor Otomatis Kami",
          content: `<h2>Mau main format Americano tapi malas hitung manual?</h2>
<p>Gunakan Americano Generator & Scoreboard otomatis kami. Gratis, tanpa install aplikasi. Coba sekarang!</p>
<p>Apakah Anda sedang merencanakan sesi fun game Padel, Pickleball, atau Tenis akhir pekan ini? Format Americano pasti jadi pilihan utama agar suasana lebih cair dan kompetitif. Tapi, kita semua tahu masalah utamanya: Mengatur jadwal dan menghitung poin secara manual itu memusingkan. Siapa berpasangan dengan siapa? Siapa yang harus istirahat? Bagaimana klasemen akhirnya? Jangan biarkan kertas, pulpen, atau rumus Excel yang rumit merusak keseruan Anda di lapangan. Solusinya ada di sini. Kami menyediakan Americano Generator Tool yang bisa Anda gunakan langsung di halaman ini. Cukup masukkan nama pemain, dan biarkan sistem kami mengatur sisanya.</p>`
        },
        {
          title: "Apa Itu Format Americano?",
          content: `<p>Bagi Anda yang baru pertama kali mencoba, Americano adalah format turnamen sosial yang paling adil dan seru. Konsep dasarnya sederhana:</p>
<ul>
  <li><strong>Ganti Pasangan:</strong> Anda akan bermain dengan pasangan berbeda di setiap pertandingan.</li>
  <li><strong>Skor Individu:</strong> Meskipun bermain ganda, poin yang Anda dapatkan dihitung untuk diri sendiri.</li>
  <li><strong>Tujuan:</strong> Mengumpulkan poin sebanyak mungkin untuk menjadi juara klasemen di akhir sesi.</li>
</ul>
<p>Format ini sangat cocok untuk komunitas Padel dan Pickleball karena memaksa semua pemain untuk saling berinteraksi (sosialisasi) sekaligus berkompetisi.</p>`
        },
        {
          title: "Masalah Klasik Saat Main Americano Manual",
          content: `<p>Tanpa tools atau aplikasi, main Americano bisa jadi kacau:</p>
<ul>
  <li><strong>Waktu Terbuang:</strong> Debat siapa lawan siapa bisa memakan waktu 5-10 menit sendiri.</li>
  <li><strong>Tidak Adil:</strong> Tanpa algoritma, ada kemungkinan satu orang terus menerus dapat partner yang sama.</li>
  <li><strong>Salah Hitung:</strong> Menjumlahkan skor puluhan pertandingan secara manual di kertas sangat rawan kesalahan.</li>
</ul>`
        },
        {
          title: "Fitur Unggulan Americano Generator Kami",
          content: `<p>Mengapa Anda harus menggunakan tools di website kami daripada aplikasi lain?</p>
<ol>
  <li><strong>Tanpa Download & Install:</strong> Penyimpanan HP penuh? Tenang. Tool kami berbasis web (web-based). Anda bisa membukanya langsung dari browser di lapangan tanpa perlu repot download aplikasi berat.</li>
  <li><strong>Algoritma Fair Play:</strong> Sistem kami memastikan rotasi pemain seimbang. Setiap orang akan mendapatkan kesempatan yang adil untuk berganti pasangan dan melawan musuh yang berbeda.</li>
  <li><strong>Live Leaderboard (Klasemen Langsung):</strong> Begitu Anda memasukkan skor pertandingan, klasemen akan otomatis terupdate. Semua pemain bisa melihat posisi mereka secara real-time dari HP masing-masing (jika link dibagikan).</li>
</ol>`
        },
        {
          title: "Cara Menggunakan Generator Americano Ini",
          content: `<p>Sangat mudah, ikuti langkah berikut:</p>
<ol>
  <li><strong>Masukkan Nama Pemain:</strong> Ketik nama semua peserta (Minimal 4 orang). Jumlah ganjil? Tidak masalah, sistem kami bisa mengatur pemain cadangan/istirahat secara bergilir.</li>
  <li><strong>Pilih Poin Target:</strong> Tentukan mau main sampai poin berapa? (Umumnya 24 atau 32 poin).</li>
  <li><strong>Generate Jadwal:</strong> Klik tombol buat jadwal.</li>
  <li><strong>Main & Input Skor:</strong> Setelah match selesai, masukkan skornya.</li>
  <li><strong>Lihat Pemenang:</strong> Di akhir sesi, sistem akan menobatkan juara Americano hari itu!</li>
</ol>`
        },
        {
          title: "Aturan Singkat Perhitungan Poin",
          content: `<p>Agar penggunaan tool kami makin maksimal, pastikan semua pemain paham aturan mainnya:</p>
<ul>
  <li><strong>Sistem Poin:</strong> Pertandingan dihitung per bola. Jika Tim A menang 14-10 lawan Tim B, maka Pemain Tim A masing-masing dapat 14 poin, dan Tim B masing-masing dapat 10 poin.</li>
  <li><strong>Servis:</strong> Servis bergantian setiap 4 kali bola (2 kali Tim A, 2 kali Tim B).</li>
  <li><strong>Pemenang:</strong> Pemain dengan total poin akumulasi tertinggi di akhir turnamen.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Automatischer Americano-Spielplan-Generator: Padel, Pickleball & Tennis",
      sections: [
        {
          title: "Americano spielen ohne Stress: Nutzen Sie unseren automatischen Spielplan-Generator & Scoreboard",
          content: `<h2>Wollen Sie das Americano-Format spielen, haben aber keine Lust auf manuelles Rechnen?</h2>
<p>Nutzen Sie unseren automatischen Americano-Generator & Scoreboard. Kostenlos, ohne App-Installation. Jetzt ausprobieren!</p>
<p>Planen Sie dieses Wochenende eine unterhaltsame Spielrunde Padel, Pickleball oder Tennis? Das Americano-Format ist sicher die beste Wahl, um die Atmosphäre lockerer und wettbewerbsfähiger zu gestalten. Aber wir alle kennen das Hauptproblem: Den Zeitplan zu organisieren und Punkte manuell zu berechnen, ist verwirrend. Wer spielt mit wem? Wer muss pausieren? Wie sieht die Endtabelle aus? Lassen Sie nicht zu, dass Papier, Stifte oder komplizierte Excel-Formeln Ihren Spaß auf dem Platz ruinieren. Die Lösung ist hier. Wir bieten ein Americano-Generator-Tool an, das Sie direkt auf dieser Seite nutzen können. Geben Sie einfach die Spielernamen ein und lassen Sie unser System den Rest erledigen.</p>`
        },
        {
          title: "Was ist das Americano-Format?",
          content: `<p>Für diejenigen unter Ihnen, die es zum ersten Mal ausprobieren: Americano ist das fairste und spannendste soziale Turnierformat. Das Grundkonzept ist einfach:</p>
<ul>
  <li><strong>Partner wechseln:</strong> Sie spielen in jedem Spiel mit einem anderen Partner.</li>
  <li><strong>Einzelwertung:</strong> Obwohl Sie Doppel spielen, werden die erzielten Punkte für Sie persönlich gezählt.</li>
  <li><strong>Ziel:</strong> So viele Punkte wie möglich zu sammeln, um am Ende der Sitzung Tabellenführer zu werden.</li>
</ul>
<p>Dieses Format ist perfekt für Padel- und Pickleball-Communities, da es alle Spieler dazu zwingt, miteinander zu interagieren (sozialisieren) und gleichzeitig gegeneinander anzutreten.</p>`
        },
        {
          title: "Klassische Probleme beim manuellen Americano-Spiel",
          content: `<p>Ohne Tools oder Apps kann das Americano-Spielen chaotisch werden:</p>
<ul>
  <li><strong>Zeitverschwendung:</strong> Die Debatte darüber, wer gegen wen spielt, kann allein schon 5-10 Minuten dauern.</li>
  <li><strong>Ungerechtigkeit:</strong> Ohne Algorithmus besteht die Möglichkeit, dass eine Person ständig denselben Partner bekommt.</li>
  <li><strong>Rechenfehler:</strong> Das manuelle Zusammenzählen von Ergebnissen aus Dutzenden von Spielen auf Papier ist sehr fehleranfällig.</li>
</ul>`
        },
        {
          title: "Herausragende Merkmale unseres Americano-Generators",
          content: `<p>Warum sollten Sie die Tools auf unserer Website anstelle von anderen Apps verwenden?</p>
<ol>
  <li><strong>Kein Download & Installation:</strong> Telefonspeicher voll? Keine Sorge. Unser Tool ist webbasiert. Sie können es direkt über Ihren Browser auf dem Platz öffnen, ohne mühsam schwere Apps herunterladen zu müssen.</li>
  <li><strong>Fair-Play-Algorithmus:</strong> Unser System sorgt für eine ausgewogene Spielerrotation. Jeder erhält die faire Chance, den Partner zu wechseln und gegen verschiedene Gegner anzutreten.</li>
  <li><strong>Live-Rangliste:</strong> Sobald Sie Spielergebnisse eingeben, wird die Tabelle automatisch aktualisiert. Alle Spieler können ihre Positionen in Echtzeit auf ihren jeweiligen Handys sehen (wenn der Link geteilt wird).</li>
</ol>`
        },
        {
          title: "So verwenden Sie diesen Americano-Generator",
          content: `<p>Es ist sehr einfach, folgen Sie diesen Schritten:</p>
<ol>
  <li><strong>Spielernamen eingeben:</strong> Geben Sie die Namen aller Teilnehmer ein (mindestens 4 Personen). Ungerade Anzahl? Kein Problem, unser System kann Ersatz-/Ruhespieler im Wechsel einteilen.</li>
  <li><strong>Zielpunkte wählen:</strong> Legen Sie fest, bis zu welcher Punktzahl Sie spielen möchten? (In der Regel 24 oder 32 Punkte).</li>
  <li><strong>Spielplan erstellen:</strong> Klicken Sie auf die Schaltfläche „Spielplan erstellen“.</li>
  <li><strong>Spielen & Ergebnisse eingeben:</strong> Geben Sie nach Spielende die Ergebnisse ein.</li>
  <li><strong>Gewinner sehen:</strong> Am Ende der Sitzung wird das System den Americano-Champion des Tages krönen!</li>
</ol>`
        },
        {
          title: "Kurze Regeln zur Punktberechnung",
          content: `<p>Damit die Nutzung unseres Tools optimal gelingt, stellen Sie sicher, dass alle Spieler die Regeln verstehen:</p>
<ul>
  <li><strong>Punktsystem:</strong> Spiele werden pro Ball gezählt. Wenn Team A 14-10 gegen Team B gewinnt, erhalten die Spieler von Team A jeweils 14 Punkte und die Spieler von Team B jeweils 10 Punkte.</li>
  <li><strong>Aufschlag:</strong> Der Aufschlag wechselt alle 4 Bälle (2 Mal für Team A, 2 Mal für Team B).</li>
  <li><strong>Gewinner:</strong> Der Spieler mit der höchsten Gesamtpunktzahl am Ende des Turniers.</li>
</ul>`
        }
      ]
    },
    es: {
      title: "Generador de Calendario Americano Automático: Pádel, Pickleball y Tenis",
      sections: [
        {
          title: "Juega Americano sin Complicaciones: Usa Nuestro Generador de Calendario y Marcador Automático",
          content: `<h2>¿Quieres jugar en formato Americano pero te da pereza calcular manualmente?</h2>
<p>Usa nuestro Generador y Marcador Americano automático. Gratis, sin instalar aplicaciones. ¡Pruébalo ahora!</p>
<p>¿Estás planeando una sesión de juego divertido de Pádel, Pickleball o Tenis este fin de semana? El formato Americano será sin duda la mejor opción para que el ambiente sea más fluido y competitivo. Pero todos conocemos el problema principal: organizar el calendario y calcular los puntos manualmente es confuso. ¿Quién se empareja con quién? ¿Quién debe descansar? ¿Cómo queda la clasificación final? No dejes que el papel, los bolígrafos o las complicadas fórmulas de Excel arruinen tu diversión en la pista. La solución está aquí. Ofrecemos una herramienta de generación de Americano que puedes usar directamente en esta página. Solo tienes que introducir los nombres de los jugadores y dejar que nuestro sistema se encargue del resto.</p>`
        },
        {
          title: "¿Qué es el Formato Americano?",
          content: `<p>Para los que lo prueban por primera vez, el Americano es el formato de torneo social más justo y emocionante. El concepto básico es sencillo:</p>
<ul>
  <li><strong>Cambiar de Pareja:</strong> Jugarás con una pareja diferente en cada partido.</li>
  <li><strong>Puntuación Individual:</strong> Aunque juegues dobles, los puntos que consigas se cuentan para ti mismo.</li>
  <li><strong>Objetivo:</strong> Acumular el mayor número de puntos posible para ser el campeón de la clasificación al final de la sesión.</li>
</ul>
<p>Este formato es perfecto para las comunidades de Pádel y Pickleball porque obliga a todos los jugadores a interactuar (socializar) y a competir al mismo tiempo.</p>`
        },
        {
          title: "Problemas Clásicos al Jugar Americano Manualmente",
          content: `<p>Sin herramientas ni aplicaciones, jugar al Americano puede volverse caótico:</p>
<ul>
  <li><strong>Tiempo Perdido:</strong> Debatir quién juega contra quién puede llevar entre 5 y 10 minutos por sí solo.</li>
  <li><strong>Injusticia:</strong> Sin un algoritmo, existe la posibilidad de que una persona siga teniendo la misma pareja constantemente.</li>
  <li><strong>Errores de Cálculo:</strong> Sumar manualmente las puntuaciones de docenas de partidos en papel es muy propenso a errores.</li>
</ul>`
        },
        {
          title: "Características Superiores de Nuestro Generador de Americano",
          content: `<p>¿Por qué deberías usar las herramientas de nuestro sitio web en lugar de otras aplicaciones?</p>
<ol>
  <li><strong>Sin Descarga ni Instalación:</strong> ¿Memoria del móvil llena? Tranquilo. Nuestra herramienta está basada en la web. Puedes abrirla directamente desde tu navegador en la pista sin la molestia de descargar pesadas aplicaciones.</li>
  <li><strong>Algoritmo de Juego Limpio:</strong> Nuestro sistema garantiza una rotación equilibrada de los jugadores. Todo el mundo tendrá una oportunidad justa de cambiar de pareja y enfrentarse a diferentes enemigos.</li>
  <li><strong>Clasificación en Vivo:</strong> En cuanto introduzcas las puntuaciones de los partidos, la clasificación se actualizará automáticamente. Todos los jugadores pueden ver sus posiciones en tiempo real desde sus respectivos móviles (si se comparte el enlace).</li>
</ol>`
        },
        {
          title: "Cómo Usar Este Generador de Americano",
          content: `<p>Es muy fácil, sigue estos pasos:</p>
<ol>
  <li><strong>Introduce los Nombres de los Jugadores:</strong> Escribe los nombres de todos los participantes (mínimo 4 personas). ¿Número impar? No hay problema, nuestro sistema puede organizar los jugadores sustitutos/en descanso por turnos.</li>
  <li><strong>Selecciona los Puntos Objetivo:</strong> Determina ¿hasta cuántos puntos quieres jugar? (Generalmente 24 o 32 puntos).</li>
  <li><strong>Generar Calendario:</strong> Haz clic en el botón de crear calendario.</li>
  <li><strong>Jugar e introducir Puntuaciones:</strong> Una vez finalizado el partido, introduce las puntuaciones.</li>
  <li><strong>Ver al Ganador:</strong> Al final de la sesión, ¡el sistema coronará al campeón de Americano del día!</li>
</ol>`
        },
        {
          title: "Reglas Breves para el Cálculo de Puntos",
          content: `<p>Para maximizar el uso de nuestra herramienta, asegúrate de que todos los jugadores entienden las reglas:</p>
<ul>
  <li><strong>Sistema de Puntos:</strong> Los partidos se cuentan por bola. Si el Equipo A gana 14-10 al Equipo B, los jugadores del Equipo A reciben 14 puntos cada uno, y los del Equipo B reciben 10 puntos cada uno.</li>
  <li><strong>Saque:</strong> El saque se alterna cada 4 bolas (2 veces el Equipo A, 2 veces el Equipo B).</li>
  <li><strong>Ganador:</strong> El jugador con el mayor total de puntos acumulados al final del torneo.</li>
</ul>`
        }
      ]
    },
    pt: {
      title: "Gerador Automático de Tabelas Americano: Padel, Pickleball e Ténis",
      sections: [
        {
          title: "Jogue Americano Sem Complicações: Utilize o Nosso Gerador de Tabelas e Marcador Automático",
          content: `<h2>Quer jogar no formato Americano mas tem preguiça de calcular manualmente?</h2>
<p>Utilize o nosso Gerador e Marcador Americano automático. Gratuito, sem instalar aplicações. Experimente agora!</p>
<p>Está a planear uma sessão de jogo divertido de Padel, Pickleball ou Ténis este fim de semana? O formato Americano será certamente a melhor escolha para tornar o ambiente mais fluido e competitivo. Mas todos conhecemos o problema principal: organizar a tabela e calcular os pontos manualmente é confuso. Quem faz par com quem? Quem deve descansar? Como fica a classificação final? Não deixe que o papel, as canetas ou as complicadas fórmulas de Excel estraguem a sua diversão no campo. A solução está aqui. Oferecemos uma ferramenta de geração de Americano que pode utilizar diretamente nesta página. Basta introduzir os nomes dos jogadores e deixar que o nosso sistema trate do resto.</p>`
        },
        {
          title: "O que é o Formato Americano?",
          content: `<p>Para quem o experimenta pela primeira vez, o Americano é o formato de torneio social mais justo e emocionante. O conceito básico é simples:</p>
<ul>
  <li><strong>Mudar de Parceiro:</strong> Jogará com um parceiro diferente em cada partida.</li>
  <li><strong>Pontuação Individual:</strong> Embora jogue em duplas, os pontos que conseguir contam para si próprio.</li>
  <li><strong>Objetivo:</strong> Acumular o maior número de pontos possível para ser o campeão da classificação no final da sessão.</li>
</ul>
<p>Este formato é perfeito para comunidades de Padel e Pickleball porque obriga todos os jogadores a interagir (socializar) e a competir ao mesmo tempo.</p>`
        },
        {
          title: "Problemas Clássicos ao Jogar Americano Manualmente",
          content: `<p>Sem ferramentas nem aplicações, jogar Americano pode tornar-se caótico:</p>
<ul>
  <li><strong>Tempo Desperdiçado:</strong> Debater quem joga contra quem pode levar 5 a 10 minutos por si só.</li>
  <li><strong>Injustiça:</strong> Sem um algoritmo, existe a possibilidade de uma pessoa continuar a ter o mesmo parceiro constantemente.</li>
  <li><strong>Erros de Cálculo:</strong> Somar manualmente as pontuações de dezenas de partidas em papel é muito propenso a erros.</li>
</ul>`
        },
        {
          title: "Funcionalidades Superiores do Nosso Gerador de Americano",
          content: `<p>Por que deve utilizar as ferramentas do nosso site em vez de outras aplicações?</p>
<ol>
  <li><strong>Sem Download nem Instalação:</strong> Memória do telemóvel cheia? Tranquilo. A nossa ferramenta é baseada na web. Pode abri-la diretamente do seu navegador no campo sem o incómodo de descarregar aplicações pesadas.</li>
  <li><strong>Algoritmo de Jogo Limpo:</strong> O nosso sistema garante uma rotação equilibrada dos jogadores. Todos terão uma oportunidade justa de mudar de parceiro e enfrentar diferentes inimigos.</li>
  <li><strong>Classificação em Direto:</strong> Assim que introduzir as pontuações das partidas, a classificação será atualizada automaticamente. Todos os jogadores podem ver as suas posições em tempo real nos seus respetivos telemóveis (se o link for partilhado).</li>
</ol>`
        },
        {
          title: "Como Utilizar Este Gerador de Americano",
          content: `<p>É muito fácil, siga estes passos:</p>
<ol>
  <li><strong>Introduza os Nomes dos Jogadores:</strong> Escreva os nomes de todos os participantes (mínimo 4 pessoas). Número ímpar? Não há problema, o nosso sistema pode organizar os jogadores substitutos/em descanso por turnos.</li>
  <li><strong>Selecione os Pontos Alvo:</strong> Determine até quantos pontos quer jogar? (Geralmente 24 ou 32 pontos).</li>
  <li><strong>Gerar Tabela:</strong> Clique no botão de criar tabela.</li>
  <li><strong>Jogar e Introduzir Pontuações:</strong> Assim que a partida terminar, introduza as pontuações.</li>
  <li><strong>Ver o Vencedor:</strong> No final da sessão, o sistema coroará o campeão de Americano do dia!</li>
</ol>`
        },
        {
          title: "Regras Breves para o Cálculo de Pontos",
          content: `<p>Para maximizar a utilização da nossa ferramenta, certifique-se de que todos os jogadores entendem as regras:</p>
<ul>
  <li><strong>Sistema de Pontos:</strong> As partidas são contadas por bola. Se a Equipa A vencer por 14-10 a Equipa B, os jogadores da Equipa A recebem 14 pontos cada, e os da Equipa B recebem 10 pontos cada.</li>
  <li><strong>Serviço:</strong> O serviço alterna a cada 4 bolas (2 vezes a Equipa A, 2 vezes a Equipa B).</li>
  <li><strong>Vencedor:</strong> O jogador com o maior total de pontos acumulados no final do torneio.</li>
</ul>`
        }
      ]
    },
    fr: {
      title: "Générateur Automatique de Planning Americano : Padel, Pickleball & Tennis",
      sections: [
        {
          title: "Jouez à l'Americano sans Stress : Utilisez notre Générateur de Planning et Tableau de Score Automatique",
          content: `<h2>Vous voulez jouer au format Americano mais vous avez la flemme de calculer manuellement ?</h2>
<p>Utilisez notre Générateur et Tableau de Score Americano automatique. Gratuit, sans installation d'application. Essayez maintenant !</p>
<p>Prévoyez-vous une session de jeu amusante de Padel, Pickleball ou Tennis ce week-end ? Le format Americano sera certainement le meilleur choix pour rendre l'atmosphère plus fluide et compétitive. Mais nous connaissons tous le problème principal : organiser le planning et calculer les points manuellement est déroutant. Qui joue avec qui ? Qui doit se reposer ? Quel est le classement final ? Ne laissez pas le papier, les stylos ou les formules Excel compliquées gâcher votre plaisir sur le terrain. La solution est ici. Nous proposons un outil de génération d'Americano que vous pouvez utiliser directement sur cette page. Saisissez simplement les noms des joueurs et laissez notre système s'occuper du reste.</p>`
        },
        {
          title: "Qu'est-ce que le Format Americano ?",
          content: `<p>Pour ceux d'entre vous qui l'essaient pour la première fois, l'Americano est le format de tournoi social le plus équitable et le plus excitant. Le concept de base est simple :</p>
<ul>
  <li><strong>Changer de Partenaire :</strong> Vous jouerez avec un partenaire différent à chaque match.</li>
  <li><strong>Score Individuel :</strong> Bien que vous jouiez en double, les points que vous gagnez sont comptabilisés pour vous-même.</li>
  <li><strong>Objectif :</strong> Accumuler le plus de points possible pour devenir le champion du classement à la fin de la session.</li>
</ul>
<p>Ce format est parfait pour les communautés de Padel et de Pickleball car il oblige tous les joueurs à interagir (socialiser) tout en étant en compétition en même temps.</p>`
        },
        {
          title: "Problèmes Classiques lors d'un Americano Manuel",
          content: `<p>Sans outils ni applications, jouer à l'Americano peut devenir chaotique :</p>
<ul>
  <li><strong>Temps Perdu :</strong> Débattre de qui joue contre qui peut prendre 5 à 10 minutes en soi.</li>
  <li><strong>Injustice :</strong> Sans algorithme, il est possible qu'une personne se retrouve constamment avec le même partenaire.</li>
  <li><strong>Erreur de Calcul :</strong> Additionner manuellement les scores de dizaines de matchs sur papier est très source d'erreurs.</li>
</ul>`
        },
        {
          title: "Caractéristiques Supérieures de notre Générateur d'Americano",
          content: `<p>Pourquoi devriez-vous utiliser les outils de notre site web plutôt que d'autres applications ?</p>
<ol>
  <li><strong>Sans Téléchargement ni Installation :</strong> Mémoire de téléphone pleine ? Détendez-vous. Notre outil est basé sur le web. Vous pouvez l'ouvrir directement depuis votre navigateur sur le terrain sans avoir à télécharger des applications lourdes.</li>
  <li><strong>Algorithme Fair-Play :</strong> Notre système assure une rotation équilibrée des joueurs. Tout le monde aura une chance équitable de changer de partenaire et d'affronter des adversaires différents.</li>
  <li><strong>Classement en Direct :</strong> Dès que vous saisissez les scores des matchs, le classement se met à jour automatiquement. Tous les joueurs peuvent voir leur position en temps réel sur leur téléphone respectif (si le lien est partagé).</li>
</ol>`
        },
        {
          title: "Comment Utiliser ce Générateur d'Americano",
          content: `<p>C'est très facile, suivez ces étapes :</p>
<ol>
  <li><strong>Saisir les Noms des Joueurs :</strong> Tapez les noms de tous les participants (minimum 4 personnes). Nombre impair ? Pas de problème, notre système peut organiser les joueurs remplaçants/au repos à tour de rôle.</li>
  <li><strong>Sélectionner les Points Cibles :</strong> Déterminez jusqu'à combien de points vous voulez jouer ? (Généralement 24 ou 32 points).</li>
  <li><strong>Générer le Planning :</strong> Cliquez sur le bouton de création de planning.</li>
  <li><strong>Jouer et Saisir les Scores :</strong> Une fois le match terminé, saisissez les scores.</li>
  <li><strong>Voir le Vainqueur :</strong> À la fin de la session, le système couronnera le champion Americano du jour !</li>
</ol>`
        },
        {
          title: "Règles Courtes pour le Calcul des Points",
          content: `<p>Pour maximiser l'utilisation de notre outil, assurez-vous que tous les joueurs comprennent les règles :</p>
<ul>
  <li><strong>Système de Points :</strong> Les matchs sont comptés par balle. Si l'Équipe A gagne 14-10 contre l'Équipe B, les joueurs de l'Équipe A reçoivent chacun 14 points, et ceux de l'Équipe B en reçoivent 10 chacun.</li>
  <li><strong>Service :</strong> Le service alterne toutes les 4 balles (2 fois pour l'Équipe A, 2 fois pour l'Équipe B).</li>
  <li><strong>Vainqueur :</strong> Le joueur ayant le total de points accumulés le plus élevé à la fin du tournoi.</li>
</ul>`
        }
      ]
    },
    it: {
      title: "Generatore Automatico di Tabellone Americano: Padel, Pickleball e Tennis",
      sections: [
        {
          title: "Gioca all'Americano Senza Stress: Usa il Nostro Generatore di Turni e Tabellone Automatico",
          content: `<h2>Vuoi giocare nel formato Americano ma ti annoia calcolare i punti manualmente?</h2>
<p>Usa il nostro Generatore e Tabellone Americano automatico. Gratuito, senza installare app. Provalo ora!</p>
<p>Stai pianificando una divertente sessione di gioco di Padel, Pickleball o Tennis questo fine settimana? El formato Americano sarà sicuramente la scelta migliore per rendere l'atmosfera più fluida e competitiva. Ma tutti conosciamo il problema principale: organizzare i turni e calcolare i punti manualmente è complicato. Chi fa coppia con chi? Chi deve riposare? Qual è la classifica finale? Non lasciare che carta, penne o complicate formule Excel rovinino il tuo divertimento in campo. La soluzione è qui. Forniamo uno strumento di generazione per l'Americano che puoi usare direttamente su questa pagina. Inserisci semplicemente i nomi dei giocatori e lascia che il nostro sistema si occupi del resto.</p>`
        },
        {
          title: "Cos'è il Formato Americano?",
          content: `<p>Per chi di voi lo prova per la prima volta, l'Americano è il formato di torneo sociale più equo ed emozionante. Il concetto di base è semplice:</p>
<ul>
  <li><strong>Cambiare Partner:</strong> Giocherai con un partner diverso in ogni partita.</li>
  <li><strong>Punteggio Individuale:</strong> Anche se giochi in doppio, i punti che guadagni vengono contati per te stesso.</li>
  <li><strong>Obiettivo:</strong> Raccogliere più punti possibile per diventare il campione della classifica alla fine della sessione.</li>
</ul>
<p>Questo formato è perfetto per le comunità di Padel e Pickleball perché costringe tutti i giocatori a interagire (socializzare) e competere allo stesso tempo.</p>`
        },
        {
          title: "Problemi Classici Quando si Gioca l'Americano Manualmente",
          content: `<p>Senza strumenti o app, giocare all'Americano può diventare caotico:</p>
<ul>
  <li><strong>Tempo Sprecato:</strong> Discutere su chi gioca contro chi può richiedere 5-10 minuti da solo.</li>
  <li><strong>Iniquità:</strong> Senza un algoritmo, c'è la possibilità che una persona continui ad avere lo stesso partner.</li>
  <li><strong>Errori di Calcolo:</strong> Sommare manualmente i punteggi di dozzine di partite su carta è molto incline agli errori.</li>
</ul>`
        },
        {
          title: "Caratteristiche Superiori del Nostro Generatore Americano",
          content: `<p>Perché dovresti usare gli strumenti sul nostro sito web invece di altre app?</p>
<ol>
  <li><strong>Nessun Download o Installazione:</strong> Memoria del telefono piena? Rilassati. Lo strumento è basato sul web. Puoi aprirlo direttamente dal tuo browser in campo senza il fastidio di scaricare app pesanti.</li>
  <li><strong>Algoritmo Fair Play:</strong> Il nostro sistema garantisce una rotazione equilibrata dei giocatori. Tutti avranno un'equa possibilità di cambiare partner e affrontare avversari diversi.</li>
  <li><strong>Classifica Live:</strong> Non appena inserisci i punteggi delle partite, la classifica si aggiornerà automaticamente. Tutti i giocatori possono vedere le loro posizioni in tempo real dai rispettivi telefoni (se il link viene condiviso).</li>
</ol>`
        },
        {
          title: "Come Usare Questo Generatore Americano",
          content: `<p>È molto facile, segui questi passaggi:</p>
<ol>
  <li><strong>Inserisci i Nomi dei Giocatori:</strong> Digita i nomi di tutti i partecipanti (minimo 4 persone). Numero dispari? Nessun problema, il nostro sistema può organizzare i giocatori sostituti/a riposo a rotazione.</li>
  <li><strong>Seleziona i Punti Obiettivo:</strong> Determina a quanti punti vuoi giocare? (Generalmente 24 o 32 punti).</li>
  <li><strong>Genera Turni:</strong> Clicca sul pulsante di creazione turni.</li>
  <li><strong>Gioca e Inserisci i Punteggi:</strong> Una volta terminata la partita, inserisci i punteggi.</li>
  <li><strong>Vedi il Vincitore:</strong> Alla fine della sessione, il sistema incoronerà il campione Americano del giorno!</li>
</ol>`
        },
        {
          title: "Brevi Regole per il Calcolo dei Punti",
          content: `<p>Per massimizzare l'uso del nostro strumento, assicurati che tutti i giocatori comprendano le regole:</p>
<ul>
  <li><strong>Sistema a Punti:</strong> Le partite vengono conteggiate per palla. Se la Squadra A vince 14-10 contro la Squadra B, i giocatori della Squadra A ricevono 14 punti ciascuno e i giocatori della Squadra B ricevono 10 punti ciascuno.</li>
  <li><strong>Servizio:</strong> Il servizio si alterna ogni 4 palle (2 volte per la Squadra A, 2 volte per la Squadra B).</li>
  <li><strong>Vincitore:</strong> Il giocatore con il punteggio totale accumulato più alto alla fine del torneo.</li>
</ul>`
        }
      ]
    }
  },
  "tennis": {
    en: {
      title: "Tennis Doubles Generator: Automatic Schedule & Player Rotation",
      sections: [
        {
          title: "Stop Manual Scheduling Hassles",
          content: `<p>Do you have a regular tennis group but are starting to get bored because the playing partners are always the same? Or perhaps you often have a headache arranging who should play on Court 1, Court 2, and who should rest when there is an odd number of players?</p>
<p>Managing social tennis sessions for 8 to 12 people manually is indeed complicated. Paper notes are often lost, team divisions are often seen as "cliquey," and time is wasted just debating turn-taking. Leave the old ways behind. Use this Tennis Doubles Generator from VersoKit. Consider this tool as your "Pocket Tournament Manager."</p>`
        },
        {
          title: "Classic Problems on the Tennis Court",
          content: `<p>Without a clear system, club practice sessions or fun games often face obstacles:</p>
<ul>
  <li><strong>Monotonous Partners:</strong> Players tend to only play with their close friends (cliques), making new members feel isolated.</li>
  <li><strong>Time wasted:</strong> Managing 8 people on 2 courts is easy. But what if there are 13 people on 3 courts? Calculating manual rotations takes a long time.</li>
  <li><strong>Skill Imbalance:</strong> Often, skilled players gather with other skilled players, making the game unbalanced and less exciting.</li>
  <li><strong>Odd Player Dilemma:</strong> Who should sit on the bench? Without fair rotation, there might be one person who sits for too long ("stepchild").</li>
</ul>`
        },
        {
          title: "VersoKit Solution: Key Features of the Tennis Generator",
          content: `<p>This tool is designed to solve the above problems in seconds. Here are the main features:</p>
<ol>
  <li><strong>Doubles Pairing Generator:</strong> Our system uses a Social Mixer algorithm. Unlike official tournaments (Fixed Partner), this tool focuses on Rotating Partners. You will change partners in every round automatically. The goal is for all members to get to know each other and for the game to be more fluid.</li>
  <li><strong>Multi-Court Management:</strong> Have a large session with 3 or 4 courts at once? No problem. This tool will divide players evenly into "Court 1", "Court 2", etc. You don't need to worry about dividing the crowd.</li>
  <li><strong>Smart Bench System (Fair Rest Rotation):</strong> If the number of players is odd (e.g., 9 or 11 people), our system will rotate rest turns automatically. The algorithm ensures no player sits twice in a row (unless everyone has already had a turn to rest).</li>
  <li><strong>Leaderboard & Statistics:</strong> Although it's a doubles format, this tool tracks individual victories (Win/Loss Ratio and Game Difference). At the end of the session, you can see who is the "King of the Court" for that day based on statistical data.</li>
</ol>`
        },
        {
          title: "Who is this Tool Suitable For?",
          content: `<ul>
  <li><strong>Office/Complex Fun Games:</strong> A group of office friends or complex residents who rent a court for 2-3 hours on weekends.</li>
  <li><strong>Amateur Tennis Clubs & Coaches:</strong> Coaches who want to hold an "Internal Tournament" or Sunday Mixer so that members become more united.</li>
  <li><strong>Tennis Mixers:</strong> Social groups who want to play casually (e.g., Tie-Break format) but still want neat and fair scorekeeping.</li>
</ul>`
        },
        {
          title: "How to Use This Schedule Generator",
          content: `<p>It's very easy, without needing to install any application. Simply send the link to this page to your tennis WhatsApp group.</p>
<ol>
  <li><strong>Input Players:</strong> Enter the names of all participants present (Minimum 4 people).</li>
  <li><strong>Select Number of Courts:</strong> Determine how many courts are available today.</li>
  <li><strong>Generate Round 1:</strong> Click the button, and the system will display who is paired with whom, on which court.</li>
  <li><strong>Play & Input Scores:</strong> After the game is finished (e.g., score 6-4 or tie-break 10-8), enter the score.</li>
  <li><strong>Continue to Next Round:</strong> The system will reshuffle partners for the second round.</li>
</ol>`
        },
        {
          title: "Understanding the Game Format",
          content: `<p>To maximize the use of this tool, here are some supported format terms:</p>
<ul>
  <li><strong>Round Robin:</strong> A format where ideally all players will meet all other players (if time is sufficient).</li>
  <li><strong>Social Mixer:</strong> A relaxed format that prioritizes social interaction with changing partners.</li>
  <li><strong>Tie-Break/Fast Tennis:</strong> This tool supports short score formats (e.g., best of 4 games or tie-break to 10) so that player rotation runs quickly and everyone gets to play a lot.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Tennis Doubles Generator: Atur Jadwal & Rotasi Pemain Otomatis",
      sections: [
        {
          title: "Stop Ribet Atur Jadwal Manual",
          content: `<p>Apakah Anda punya grup tenis rutin tapi mulai bosan karena partner mainnya itu-itu saja? Atau mungkin Anda sering pusing mengatur siapa yang harus main di Lapangan 1, Lapangan 2, dan siapa yang harus istirahat saat jumlah pemain ganjil?</p>
<p>Mengelola sesi tenis sosial (social tennis) untuk 8 hingga 12 orang secara manual memang rumit. Catatan di kertas sering hilang, pembagian tim sering dianggap "kubu-kubuan", dan waktu habis hanya untuk berdebat soal giliran main. Tinggalkan cara lama. Gunakan Tennis Doubles Generator dari VersoKit ini. Anggap alat ini sebagai "Manajer Turnamen Saku" Anda.</p>`
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
        },
        {
          title: "Siapa yang Cocok Menggunakan Alat Ini?",
          content: `<ul>
  <li><strong>Fun Game Kantor/Komplek:</strong> Sekelompok teman kantor atau bapak-bapak komplek yang menyewa lapangan 2-3 jam di akhir pekan.</li>
  <li><strong>Klub Tenis Amatir & Pelatih:</strong> Pelatih yang ingin mengadakan "Internal Tournament" atau Sunday Mixer agar membernya makin guyub.</li>
  <li><strong>Arisan Tenis:</strong> Ibu-ibu yang ingin main santai (misal format Tie-Break) tapi tetap ingin pencatatan skor yang rapi dan adil.</li>
</ul>`
        },
        {
          title: "Cara Menggunakan Generator Jadwal Ini",
          content: `<p>Sangat mudah, tanpa perlu install aplikasi apapun. Cukup kirim link halaman ini ke grup WhatsApp tenis Anda.</p>
<ol>
  <li><strong>Input Pemain:</strong> Masukkan nama semua peserta yang hadir (Minimal 4 orang).</li>
  <li><strong>Pilih Jumlah Lapangan:</strong> Tentukan berapa court yang tersedia hari ini.</li>
  <li><strong>Generate Ronde 1:</strong> Klik tombol, dan sistem akan menampilkan siapa berpasangan dengan siapa, di lapangan mana.</li>
  <li><strong>Main & Input Skor:</strong> Setelah game selesai (misal skor 6-4 atau tie-break 10-8), masukkan skornya.</li>
  <li><strong>Lanjut Ronde Berikutnya:</strong> Sistem akan mengacak ulang pasangan untuk ronde kedua.</li>
</ol>`
        },
        {
          title: "Memahami Format Permainan",
          content: `<p>Untuk memaksimalkan penggunaan alat ini, berikut beberapa istilah format yang didukung:</p>
<ul>
  <li><strong>Round Robin:</strong> Format di mana idealnya semua pemain akan bertemu dengan semua pemain lain (jika waktu cukup).</li>
  <li><strong>Social Mixer:</strong> Format santai yang mengutamakan interaksi sosial dengan gonta-ganti pasangan.</li>
  <li><strong>Tie-Break/Fast Tennis:</strong> Alat ini mendukung format skor pendek (misal best of 4 games atau tie-break to 10) agar rotasi pemain berjalan cepat dan semua kebagian main banyak.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Tennis-Doppel-Generator: Automatischer Spielplan & Spielerrotation",
      sections: [
        {
          title: "Schluss mit manuellem Planungsstress",
          content: `<p>Haben Sie eine feste Tennisgruppe, fangen aber an, sich zu langweilen, weil die Spielpartner immer die gleichen sind? Oder haben Sie oft Kopfschmerzen bei der Einteilung, wer auf Platz 1 oder Platz 2 spielen soll und wer bei einer ungeraden Spieleranzahl pausieren muss?</p>
<p>Die manuelle Verwaltung von sozialen Tennis-Sessions für 8 bis 12 Personen ist in der Tat kompliziert. Notizen auf Papier gehen oft verloren, die Teameinteilung wird oft als „Grüppchenbildung“ wahrgenommen und Zeit wird mit Debatten über die Reihenfolge verschwendet. Lassen Sie die alten Wege hinter sich. Nutzen Sie diesen Tennis-Doppel-Generator von VersoKit. Betrachten Sie dieses Tool als Ihren „Taschen-Turniermanager“.</p>`
        },
        {
          title: "Klassische Probleme auf dem Tennisplatz",
          content: `<p>Ohne ein klares System stehen Vereinstrainings oder Spaßspiele oft vor Hindernissen:</p>
<ul>
  <li><strong>Monotone Partner:</strong> Spieler neigen dazu, nur mit ihren engen Freunden zu spielen (Grüppchenbildung), wodurch sich neue Mitglieder isoliert fühlen.</li>
  <li><strong>Zeitverschwendung:</strong> Die Verwaltung von 8 Personen auf 2 Plätzen ist einfach. Aber was ist, wenn es 13 Personen auf 3 Plätzen sind? Die Berechnung manueller Rotationen nimmt viel Zeit in Anspruch.</li>
  <li><strong>Ungleichgewicht der Fähigkeiten:</strong> Oft versammeln sich talentierte Spieler mit anderen talentierten Spielern, was das Spiel unausgewogen und weniger aufregend macht.</li>
  <li><strong>Dilemma der ungeraden Spielerzahl:</strong> Wer soll auf der Bank sitzen? Ohne faire Rotation gibt es vielleicht eine Person, die zu lange sitzt („Stiefkind“).</li>
</ul>`
        },
        {
          title: "VersoKit-Lösung: Hauptmerkmale des Tennis-Generators",
          content: `<p>Dieses Tool wurde entwickelt, um die oben genannten Probleme in Sekunden zu lösen. Hier sind die Hauptmerkmale:</p>
<ol>
  <li><strong>Doppel-Paarungs-Generator:</strong> Unser System verwendet einen Social Mixer-Algorithmus. Im Gegensatz zu offiziellen Turnieren (fester Partner) konzentriert sich dieses Tool auf rotierende Partner. Sie wechseln in jeder Runde automatisch den Partner. Das Ziel ist, dass sich alle Mitglieder kennenlernen und das Spiel flüssiger wird.</li>
  <li><strong>Multi-Court-Verwaltung:</strong> Haben Sie eine große Session mit 3 oder 4 Plätzen gleichzeitig? Kein Problem. Dieses Tool teilt die Spieler gleichmäßig auf „Platz 1“, „Platz 2“ usw. auf. Sie müssen sich nicht um die Aufteilung der Menge kümmern.</li>
  <li><strong>Smart Bench System (Faire Pausenrotation):</strong> Wenn die Spieleranzahl ungerade ist (z. B. 9 oder 11 Personen), rotiert unser System die Pausen automatisch. Der Algorithmus stellt sicher, dass kein Spieler zweimal hintereinander sitzt (es sei denn, jeder war schon einmal an der Reihe zu pausieren).</li>
  <li><strong>Rangliste & Statistiken:</strong> Obwohl es ein Doppel-Format ist, verfolgt dieses Tool individuelle Siege (Sieg/Niederlage-Verhältnis und Spieldifferenz). Am Ende der Session können Sie anhand statistischer Daten sehen, wer der „König des Platzes“ für diesen Tag ist.</li>
</ol>`
        },
        {
          title: "Für wen ist dieses Tool geeignet?",
          content: `<ul>
  <li><strong>Büro-/Wohnkomplex-Spaßspiele:</strong> Eine Gruppe von Bürofreunden oder Bewohnern, die am Wochenende einen Platz für 2-3 Stunden mieten.</li>
  <li><strong>Amateur-Tennisclubs & Trainer:</strong> Trainer, die ein „internes Turnier" oder einen Sunday Mixer veranstalten möchten, damit die Mitglieder enger zusammenwachsen.</li>
  <li><strong>Tennis-Mixer:</strong> Soziale Gruppen, die locker spielen möchten (z. B. Tie-Break-Format), aber dennoch eine ordentliche und faire Punktezählung wünschen.</li>
</ul>`
        },
        {
          title: "So verwenden Sie diesen Spielplan-Generator",
          content: `<p>Es ist sehr einfach, ohne dass eine Anwendung installiert werden muss. Senden Sie einfach den Link zu dieser Seite an Ihre Tennis-WhatsApp-Gruppe.</p>
<ol>
  <li><strong>Spieler eingeben:</strong> Geben Sie die Namen aller anwesenden Teilnehmer ein (mindestens 4 Personen).</li>
  <li><strong>Anzahl der Plätze wählen:</strong> Bestimmen Sie, wie viele Plätze heute verfügbar sind.</li>
  <li><strong>Runde 1 generieren:</strong> Klicken Sie auf die Schaltfläche, und das System zeigt an, wer mit wem auf welchem Platz gepaart ist.</li>
  <li><strong>Spielen & Ergebnisse eingeben:</strong> Nachdem das Spiel beendet ist (z. B. Ergebnis 6:4 oder Tie-Break 10:8), geben Sie das Ergebnis ein.</li>
  <li><strong>Weiter zur nächsten Runde:</strong> Das System mischt die Partner für die zweite Runde neu.</li>
</ol>`
        },
        {
          title: "Das Spielformat verstehen",
          content: `<p>Um die Nutzung dieses Tools zu maximieren, finden Sie hier einige unterstützte Formatbegriffe:</p>
<ul>
  <li><strong>Round Robin:</strong> Ein Format, bei dem im Idealfall alle Spieler auf alle anderen Spieler treffen (wenn die Zeit ausreicht).</li>
  <li><strong>Social Mixer:</strong> Ein entspanntes Format, bei dem die soziale Interaktion mit wechselnden Partnern im Vordergrund steht.</li>
  <li><strong>Tie-Break/Fast Tennis:</strong> Dieses Tool unterstützt kurze Ergebnisformate (z. B. Best-of-4-Spiele oder Tie-Break bis 10), damit die Spielerrotation schnell abläuft und jeder viel zum Spielen kommt.</li>
</ul>`
        }
      ]
    },
    es: {
      title: "Tennis Doubles Generator: Horario y Rotación Automática de Jugadores",
      sections: [
        {
          title: "Detén las complicaciones de la programación manual",
          content: `<p>¿Tienes un grupo de tenis habitual pero estás empezando a aburrirte porque los compañeros de juego son siempre los mismos? ¿O quizás a menudo tienes dolor de cabeza organizando quién debe jugar en la Pista 1, la Pista 2, y quién debe descansar cuando hay un número impar de jugadores?</p>
<p>Gestionar sesiones de tenis social para 8 a 12 personas manualmente es realmente complicado. Las notas en papel se pierden a menudo, las divisiones de equipo se ven frecuentemente como "grupos cerrados" y se pierde el tiempo debatiendo los turnos. Deja atrás las viejas formas. Usa este Generador de Dobles de Tenis de VersoKit. Considera esta herramienta como tu "Gestor de Torneos de Bolsillo".</p>`
        },
        {
          title: "Problemas clásicos en la pista de tenis",
          content: `<p>Sin un sistema claro, las sesiones de práctica del club o los juegos divertidos a menudo enfrentan obstáculos:</p>
<ul>
  <li><strong>Compañeros monótonos:</strong> Los jugadores tienden a jugar solo con sus amigos cercanos (clanes), haciendo que los nuevos miembros se sientan aislados.</li>
  <li><strong>Tiempo perdido:</strong> Gestionar a 8 personas en 2 pistas es fácil. Pero ¿qué pasa si hay 13 personas en 3 pistas? Calcular las rotaciones manuales lleva mucho tiempo.</li>
  <li><strong>Desequilibrio de habilidades:</strong> A menudo, los jugadores hábiles se reúnen con otros jugadores hábiles, lo que hace que el juego sea desequilibrado y menos emocionante.</li>
  <li><strong>Dilema del jugador impar:</strong> ¿Quién debe sentarse en el banquillo? Sin una rotación justa, podría haber una persona que se siente durante demasiado tiempo ("el hijastro").</li>
</ul>`
        },
        {
          title: "Solución de VersoKit: Características clave del generador de tenis",
          content: `<p>Esta herramienta está diseñada para resolver los problemas anteriores en segundos. Aquí están las características principales:</p>
<ol>
  <li><strong>Generador de emparejamiento de dobles:</strong> Nuestro sistema utiliza un algoritmo de Mezclador Social. A diferencia de los torneos oficiales (compañero fijo), esta herramienta se centra en compañeros rotativos. Cambiarás de compañero en cada ronda automáticamente. El objetivo es que todos los miembros se conozcan entre sí y que el juego sea más fluido.</li>
  <li><strong>Gestión de múltiples pistas:</strong> ¿Tienes una sesión grande con 3 o 4 pistas a la vez? No hay problema. Esta herramienta dividirá a los jugadores uniformemente en "Pista 1", "Pista 2", etc. No necesitas preocuparte por dividir a la multitud.</li>
  <li><strong>Sistema de banquillo inteligente (rotación de descanso justa):</strong> Si el número de jugadores es impar (por ejemplo, 9 u 11 personas), nuestro sistema rotará los turnos de descanso automáticamente. El algoritmo garantiza que ningún jugador se siente dos veces seguidas (a menos que todos ya hayan tenido un turno para descansar).</li>
  <li><strong>Clasificación y estadísticas:</strong> Aunque es un formato de dobles, esta herramienta rastrea las victorias individuales (proporción de victorias/derrotas y diferencia de juegos). Al final de la sesión, puedes ver quién es el "Rey de la Pista" de ese día basado en datos estadísticos.</li>
</ol>`
        },
        {
          title: "¿Para quién es adecuada esta herramienta?",
          content: `<ul>
  <li><strong>Juegos divertidos de oficina/complejo:</strong> Un grupo de amigos de la oficina o residentes del complejo que alquilan una pista durante 2-3 horas los fines de semana.</li>
  <li><strong>Clubes de tenis amateur y entrenadores:</strong> Entrenadores que quieren organizar un "Torneo Interno" o un Mezclador dominical para que los miembros se unan más.</li>
  <li><strong>Mezcladores de tenis:</strong> Grupos sociales que quieren jugar de forma casual (por ejemplo, formato de Tie-Break) pero aún así quieren un registro de puntuación ordenado y justo.</li>
</ul>`
        },
        {
          title: "Cómo usar este generador de horarios",
          content: `<p>Es muy fácil, sin necesidad de instalar ninguna aplicación. Simplemente envía el enlace de esta página a tu grupo de WhatsApp de tenis.</p>
<ol>
  <li><strong>Introducir jugadores:</strong> Introduce los nombres de todos los participantes presentes (mínimo 4 personas).</li>
  <li><strong>Seleccionar número de pistas:</strong> Determina cuántas pistas hay disponibles hoy.</li>
  <li><strong>Generar Ronda 1:</strong> Haz clic en el botón y el sistema mostrará quién está emparejado con quién, en qué pista.</li>
  <li><strong>Jugar e introducir puntuaciones:</strong> Una vez finalizado el juego (por ejemplo, puntuación 6-4 o tie-break 10-8), introduce la puntuación.</li>
  <li><strong>Continuar con la siguiente ronda:</strong> El sistema barajará de nuevo a los compañeros para la segunda ronda.</li>
</ol>`
        },
        {
          title: "Entender el formato del juego",
          content: `<p>Para maximizar el uso de esta herramienta, aquí hay algunos términos de formato compatibles:</p>
<ul>
  <li><strong>Round Robin:</strong> Un formato donde idealmente todos los jugadores se encontrarán con todos los demás jugadores (si el tiempo es suficiente).</li>
  <li><strong>Mezclador Social:</strong> Un formato relajado que prioriza la interacción social con el cambio de compañeros.</li>
  <li><strong>Tie-Break/Tenis rápido:</strong> Esta herramienta admite formatos de puntuación corta (por ejemplo, el mejor de 4 juegos o tie-break a 10) para que la rotación de jugadores se ejecute rápidamente y todos puedan jugar mucho.</li>
</ul>`
        }
      ]
    },
    pt: {
      title: "Gerador de Duplas de Ténis: Horário e Rotação Automática de Jogadores",
      sections: [
        {
          title: "Pare com as complicações do agendamento manual",
          content: `<p>Tem um grupo de ténis regular, mas está a começar a ficar aborrecido porque os parceiros de jogo são sempre os mesmos? Ou talvez tenha frequentemente dores de cabeça a organizar quem deve jogar no Campo 1, no Campo 2 e quem deve descansar quando há um número ímpar de jogadores?</p>
<p>Gerir sessões de ténis social para 8 a 12 pessoas manualmente é, de facto, complicado. As notas em papel perdem-se frequentemente, as divisões de equipas são muitas vezes vistas como "grupos fechados" e perde-se tempo apenas a debater a ordem de jogo. Deixe as velhas formas para trás. Utilize este Gerador de Duplas de Ténis da VersoKit. Considere esta ferramenta como o seu "Gestor de Torneios de Bolso".</p>`
        },
        {
          title: "Problemas clássicos no campo de ténis",
          content: `<p>Sem um sistema claro, as sessões de treino do clube ou os jogos divertidos enfrentam frequentemente obstáculos:</p>
<ul>
  <li><strong>Parceiros monótonos:</strong> Os jogadores tendem a jogar apenas com os seus amigos próximos (clãs), fazendo com que os novos membros se sintam isolados.</li>
  <li><strong>Tempo desperdiçado:</strong> Gerir 8 pessoas em 2 campos é fácil. Mas e se houver 13 pessoas em 3 campos? Calcular as rotações manuais demora muito tempo.</li>
  <li><strong>Desequilíbrio de competências:</strong> Muitas vezes, os jogadores habilidosos reúnem-se com outros jogadores habilidosos, tornando o jogo desequilibrado e menos emocionante.</li>
  <li><strong>Dilema do jogador ímpar:</strong> Quem deve sentar-se no banco? Sem uma rotação justa, pode haver uma pessoa que se sente durante demasiado tempo ("o enteado").</li>
</ul>`
        },
        {
          title: "Solução VersoKit: Principais características do gerador de ténis",
          content: `<p>Esta ferramenta foi concebida para resolver os problemas acima referidos em segundos. Aqui estão as principais características:</p>
<ol>
  <li><strong>Gerador de emparelhamento de duplas:</strong> O nosso sistema utiliza um algoritmo de Misturador Social. Ao contrário dos torneios oficiais (parceiro fixo), esta ferramenta foca-se em parceiros rotativos. Irá mudar de parceiro em cada ronda automaticamente. O objetivo é que todos os membros se conheçam e que o jogo seja mais fluido.</li>
  <li><strong>Gestão de vários campos:</strong> Tem uma sessão grande com 3 ou 4 campos ao mesmo tempo? Não há problema. Esta ferramenta dividirá os jogadores uniformemente entre o "Campo 1", "Campo 2", etc. Não precisa de se preocupar com a divisão da multidão.</li>
  <li><strong>Sistema de banco inteligente (rotação de descanso justa):</strong> Se o número de jogadores for ímpar (por exemplo, 9 ou 11 pessoas), o nosso sistema rodará os turnos de descanso automaticamente. O algoritmo garante que nenhum jogador se sente duas vezes seguidas (a menos que todos já tenham tido a sua vez de descansar).</li>
  <li><strong>Classificação e estatísticas:</strong> Embora seja um formato de duplas, esta ferramenta monitoriza as vitórias individuais (rácio de vitórias/derrotas e diferença de jogos). No final da sessão, pode ver quem é o "Rei do Campo" desse dia com base nos dados estatísticos.</li>
</ol>`
        },
        {
          title: "Para quem é adequada esta ferramenta?",
          content: `<ul>
  <li><strong>Jogos divertidos de escritório/condomínio:</strong> Um grupo de amigos do escritório ou residentes de um condomínio que alugam um campo durante 2 a 3 horas aos fins de semana.</li>
  <li><strong>Clubes de ténis amadores e treinadores:</strong> Treinadores que queiram organizar um "Torneio Interno" ou um Misturador de domingo para que os membros se tornem mais unidos.</li>
  <li><strong>Misturadores de ténis:</strong> Grupos sociais que queiram jogar casualmente (por exemplo, formato Tie-Break), mas que queiram um registo de pontuação organizado e justo.</li>
</ul>`
        },
        {
          title: "Como utilizar este gerador de horários",
          content: `<p>É muito fácil, sem necessidade de instalar qualquer aplicação. Basta enviar o link desta página para o seu grupo de ténis no WhatsApp.</p>
<ol>
  <li><strong>Introduzir jogadores:</strong> Introduza os nomes de todos os participantes presentes (mínimo 4 pessoas).</li>
  <li><strong>Selecionar número de campos:</strong> Determine quantos campos estão disponíveis hoje.</li>
  <li><strong>Gerar Ronda 1:</strong> Clique no botão e o sistema mostrará quem está emparelhado com quem, em que campo.</li>
  <li><strong>Jogar e introduzir pontuações:</strong> Após o jogo terminar (por exemplo, pontuação 6-4 ou tie-break 10-8), introduza a pontuação.</li>
  <li><strong>Continuar para a ronda seguinte:</strong> O sistema voltará a baralhar os parceiros para a segunda ronda.</li>
</ol>`
        },
        {
          title: "Compreender o formato do jogo",
          content: `<p>Para maximizar a utilização desta ferramenta, aqui estão alguns termos de formato suportados:</p>
<ul>
  <li><strong>Round Robin:</strong> Um formato em que, idealmente, todos os jogadores se encontrarão com todos os outros jogadores (se o tempo for suficiente).</li>
  <li><strong>Misturador Social:</strong> Um formato relaxado que dá prioridade à interação social com a mudança de parceiros.</li>
  <li><strong>Tie-Break/Ténis rápido:</strong> Esta ferramenta suporta formatos de pontuação curtos (por exemplo, melhor de 4 jogos ou tie-break até 10) para que a rotação dos jogadores seja rápida e todos consigam jogar muito.</li>
</ul>`
        }
      ]
    },
    fr: {
      title: "Générateur de Doubles de Tennis : Planning et Rotation Automatique des Joueurs",
      sections: [
        {
          title: "Arrêtez les tracas de la planification manuelle",
          content: `<p>Avez-vous un groupe de tennis régulier mais commencez-vous à vous ennuyer parce que les partenaires de jeu sont toujours les mêmes ? Ou peut-être avez-vous souvent mal à la tête pour organiser qui doit jouer sur le Court 1, le Court 2, et qui doit se reposer lorsqu'il y a un nombre impair de joueurs ?</p>
<p>Gérer manuellement des sessions de tennis social pour 8 à 12 personnes est en effet compliqué. Les notes sur papier sont souvent perdues, les divisions d'équipe sont souvent perçues comme des "clans", et on perd du temps rien qu'à débattre de l'ordre de passage. Laissez les anciennes méthodes derrière vous. Utilisez ce Générateur de Doubles de Tennis de VersoKit. Considérez cet outil comme votre "Gestionnaire de Tournoi de Poche".</p>`
        },
        {
          title: "Problèmes classiques sur le court de tennis",
          content: `<p>Sans un système clair, les sessions d'entraînement du club ou les matchs amicaux rencontrent souvent des obstacles :</p>
<ul>
  <li><strong>Partenaires monotones :</strong> Les joueurs ont tendance à ne jouer qu'avec leurs amis proches (clans), ce qui donne aux nouveaux membres le sentiment d'être isolés.</li>
  <li><strong>Temps perdu :</strong> Gérer 8 personnes sur 2 courts est facile. Mais qu'en est-il s'il y a 13 personnes sur 3 courts ? Le calcul des rotations manuelles prend beaucoup de temps.</li>
  <li><strong>Déséquilibre des compétences :</strong> Souvent, les joueurs expérimentés se regroupent entre eux, ce qui rend le jeu déséquilibré et moins passionnant.</li>
  <li><strong>Dilemme du joueur impair :</strong> Qui doit rester sur le banc ? Sans une rotation équitable, il se peut qu'une personne reste assise trop longtemps (le "laissé-pour-compte").</li>
</ul>`
        },
        {
          title: "Solution VersoKit : Caractéristiques clés du générateur de tennis",
          content: `<p>Cet outil est conçu pour résoudre les problèmes ci-dessus en quelques secondes. Voici les principales caractéristiques :</p>
<ol>
  <li><strong>Générateur d'appariement de doubles :</strong> Notre système utilise un algorithme de Mixeur Social. Contrairement aux tournois officiels (partenaire fixe), cet outil se concentre sur les partenaires tournants. Vous changerez de partenaire à chaque tour automatiquement. L'objectif est que tous les membres fassent connaissance et que le jeu soit plus fluide.</li>
  <li><strong>Gestion multi-courts :</strong> Vous avez une grande session avec 3 ou 4 courts à la fois ? Pas de problème. Cet outil divisera les joueurs uniformément entre le "Court 1", "Court 2", etc. Vous n'avez pas besoin de vous soucier de diviser la foule.</li>
  <li><strong>Système de banc intelligent (rotation de repos équitable) :</strong> Si le nombre de joueurs est impair (par exemple, 9 ou 11 personnes), notre système fera tourner les tours de repos automatiquement. L'algorithme garantit qu'un joueur ne reste jamais assis deux fois de suite (sauf si tout le monde a déjà eu un tour pour se reposer).</li>
  <li><strong>Classement et statistiques :</strong> Bien qu'il s'agisse d'un format de double, cet outil suit les victoires individuelles (ratio victoires/défaites et différence de jeux). À la fin de la session, vous pouvez voir qui est le "Roi du Court" pour cette journée-là en fonction des données statistiques.</li>
</ol>`
        },
        {
          title: "À qui s'adresse cet outil ?",
          content: `<ul>
  <li><strong>Matchs amicaux de bureau/résidence :</strong> Un groupe d'amis de bureau ou de résidents d'un complexe qui louent un court pendant 2-3 heures le week-end.</li>
  <li><strong>Clubs de tennis amateurs et entraîneurs :</strong> Les entraîneurs qui souhaitent organiser un "Tournoi Interne" ou un Mixeur du dimanche pour que les membres soient plus unis.</li>
  <li><strong>Mixers de tennis :</strong> Groupes sociaux qui souhaitent jouer de manière décontractée (par exemple, format Tie-Break) tout en voulant une tenue de score soignée et équitable.</li>
</ul>`
        },
        {
          title: "Comment utiliser ce générateur de planning",
          content: `<p>C'est très facile, sans avoir besoin d'installer d'application. Envoyez simplement le lien de cette page à votre groupe WhatsApp de tennis.</p>
<ol>
  <li><strong>Saisir les joueurs :</strong> Entrez les noms de tous les participants présents (minimum 4 personnes).</li>
  <li><strong>Sélectionner le nombre de courts :</strong> Déterminez combien de courts sont disponibles aujourd'hui.</li>
  <li><strong>Générer le Tour 1 :</strong> Cliquez sur le bouton, et le système affichera qui est jumelé avec qui, sur quel court.</li>
  <li><strong>Jouer et saisir les scores :</strong> Une fois le jeu terminé (par exemple, score 6-4 ou tie-break 10-8), entrez le score.</li>
  <li><strong>Passer au tour suivant :</strong> Le système redistribuera les partenaires pour le deuxième tour.</li>
</ol>`
        },
        {
          title: "Comprendre le format du jeu",
          content: `<p>Pour maximiser l'utilisation de cet outil, voici quelques termes de format pris en charge :</p>
<ul>
  <li><strong>Round Robin :</strong> Un format où, idéalement, tous les joueurs rencontreront tous les autres joueurs (si le temps le permet).</li>
  <li><strong>Mixeur Social :</strong> Un format détendu qui privilégie l'interaction sociale avec changement de partenaires.</li>
  <li><strong>Tie-Break/Fast Tennis :</strong> Cet outil prend en charge les formats de score courts (par exemple, le meilleur de 4 jeux ou tie-break à 10) pour que la rotation des joueurs se fasse rapidement et que tout le monde puisse jouer beaucoup.</li>
</ul>`
        }
      ]
    },
    it: {
      title: "Generatore di Doppio Tennis: Programma e Rotazione Automatica dei Giocatori",
      sections: [
        {
          title: "Basta complicazioni con la programmazione manuale",
          content: `<p>Hai un gruppo di tennis abituale ma inizi ad annoiarti perché i partner di gioco sono sempre gli stessi? O forse hai spesso il mal di testa per organizzare chi deve giocare sul Campo 1, sul Campo 2 e chi deve riposare quando c'è un numero dispari di giocatori?</p>
<p>Gestire manualmente le sessioni di tennis sociale per 8-12 persone è davvero complicato. Gli appunti su carta si perdono spesso, le divisioni in squadre sono spesso viste come "gruppetti" e si perde tempo solo a discutere sui turni. Lascia perdere i vecchi metodi. Usa questo Generatore di Doppio Tennis di VersoKit. Considera questo strumento come il tuo "Gestore di Tornei tascabile".</p>`
        },
        {
          title: "Problemi classici sul campo da tennis",
          content: `<p>Senza un sistema chiaro, le sessioni di allenamento del club o le partite amichevoli affrontano spesso ostacoli:</p>
<ul>
  <li><strong>Partner monotoni:</strong> I giocatori tendono a giocare solo con i loro amici stretti (clique), facendo sentire isolati i nuovi membri.</li>
  <li><strong>Tempo sprecato:</strong> Gestire 8 persone su 2 campi è facile. Ma cosa succede se ci sono 13 persone su 3 campi? Calcolare le rotazioni manuali richiede molto tempo.</li>
  <li><strong>Squilibrio di abilità:</strong> Spesso, i giocatori esperti si riuniscono con altri giocatori esperti, rendendo il gioco sbilanciato e meno eccitante.</li>
  <li><strong>Dilemma del giocatore dispari:</strong> Chi deve sedersi in panchina? Senza una rotazione equa, potrebbe esserci una persona che siede troppo a lungo (il "figliastro").</li>
</ul>`
        },
        {
          title: "Soluzione VersoKit: Caratteristiche principali del generatore di tennis",
          content: `<p>Questo strumento è progettato per risolvere i problemi sopra citati in pochi secondi. Ecco le caratteristiche principali:</p>
<ol>
  <li><strong>Generatore di abbinamento di doppio:</strong> Il nostro sistema utilizza un algoritmo di Social Mixer. A differenza dei tornei ufficiali (partner fisso), questo strumento si concentra sui partner rotanti. Cambierai partner automaticamente in ogni turno. L'obiettivo è che tutti i membri si conoscano e che il gioco sia più fluido.</li>
  <li><strong>Gestione di più campi:</strong> Hai una sessione numerosa con 3 o 4 campi contemporaneamente? Nessun problema. Questo strumento dividerà i giocatori equamente tra "Campo 1", "Campo 2", ecc. Non devi preoccuparti di dividere la folla.</li>
  <li><strong>Sistema di panchina intelligente (rotazione di riposo equa):</strong> Se il numero di giocatori è dispari (ad esempio, 9 o 11 persone), il nostro sistema ruoterà i turni di riposo automaticamente. L'algoritmo assicura che nessun giocatore sieda due volte di seguito (a meno che tutti non abbiano già avuto un turno di riposo).</li>
  <li><strong>Classifica e statistiche:</strong> Sebbene sia un formato di doppio, questo strumento traccia le vittorie individuali (rapporto vittorie/sconfitte e differenza di giochi). Alla fine della sessione, puoi vedere chi è il "Re del Campo" per quel giorno in base ai dati statistici.</li>
</ol>`
        },
        {
          title: "Per chi è adatto questo strumento?",
          content: `<ul>
  <li><strong>Partite amichevoli tra colleghi/condomini:</strong> Un gruppo di amici dell'ufficio o residenti di un complesso che affittano un campo per 2-3 ore nei fine settimana.</li>
  <li><strong>Club di tennis amatoriali e allenatori:</strong> Allenatori che vogliono organizzare un "Torneo interno" o un Mixer domenicale affinché i membri diventino più uniti.</li>
  <li><strong>Mixer di tennis:</strong> Gruppi sociali que vogliono giocare in modo informale (ad esempio, formato Tie-Break) ma desiderano comunque un punteggio ordinato ed equo.</li>
</ul>`
        },
        {
          title: "Come usare questo generatore di programmi",
          content: `<p>È molto facile, senza dover installare alcuna applicazione. Basta inviare il link di questa pagina al tuo gruppo WhatsApp di tennis.</p>
<ol>
  <li><strong>Inserisci i giocatori:</strong> Inserisci i nomi di tutti i partecipanti presenti (minimo 4 persone).</li>
  <li><strong>Seleziona il numero di campi:</strong> Determina quanti campi sono disponibili oggi.</li>
  <li><strong>Genera il Turno 1:</strong> Clicca sul pulsante e il sistema mostrerà chi è accoppiato con chi, su quale campo.</li>
  <li><strong>Gioca e inserisci i punteggi:</strong> Una volta terminata la partita (ad esempio, punteggio 6-4 o tie-break 10-8), inserisci il punteggio.</li>
  <li><strong>Continua al turno successivo:</strong> Il sistema rimescolerà i partner per il secondo turno.</li>
</ol>`
        },
        {
          title: "Comprendere il formato del gioco",
          content: `<p>Per massimizzare l'uso di questo strumento, ecco alcuni termini di formato supportati:</p>
<ul>
  <li><strong>Round Robin:</strong> Un formato in cui idealmente tutti i giocatori incontreranno tutti gli altri (se il tempo è sufficiente).</li>
  <li><strong>Social Mixer:</strong> Un formato rilassato che dà priorità all'interazione sociale con il cambio di partner.</li>
  <li><strong>Tie-Break/Fast Tennis:</strong> Questo strumento supporta formati di punteggio brevi (ad esempio, il meglio di 4 giochi o tie-break a 10) in modo che la rotazione dei giocatori sia rapida e tutti possano giocare molto.</li>
</ul>`
        }
      ]
    }
  },
  "budget-planner": {
    en: {
      title: "Budget Planner Online: Manage Finances with Zero-Based Budgeting Method",
      sections: [
        {
          title: "What is Zero-Based Budgeting (ZBB)?",
          content: `<p>Have you ever felt like your salary is just "passing through"? You receive your paycheck on the 25th, but by the 10th of the next month, your account balance is already low and you're left wondering: "Where did all my money go?"</p>
<p>The main problem often isn't the size of your salary, but how you treat that money. Many people are trapped using Expense Tracker apps. The problem is, recording expenses is an act of regret. You are only recording history: "Oh, I spent 500 dollars on coffee." It’s time for a change.</p>
<p>Introducing VersoKit Budget Planner. This isn’t just a recorder; it’s a Future Planning tool based on the Zero-Based Budgeting (ZBB) method. The philosophy behind this tool is very simple yet powerful: <strong>"Give a job to every dollar you own."</strong></p>
<p>Imagine our ancestors' "Envelope" method. If you had $5,000 in cash in your hand, you would put it into physical envelopes: Food Envelope, Electricity Envelope, Savings Envelope, etc. You keep dividing that money until the money in your hand is ZERO (0). This means all the money already has its own assigned post.</p>
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
          content: `<p>Why should you use our tools compared to other apps?</p>
<ul>
  <li><strong>"To be Budgeted" System:</strong> At the top of the app, you will see a large number. That is your money that doesn't have a "job" yet. Your mission is to spend that number into categories until the indicator is 0 (Zero).</li>
  <li><strong>Subsidi Silang (Roll with the Punches):</strong> Life is dynamic. Sometimes we overspend in the "Food" category. If your Food category is negative (red), this tool forces you to be honest: Where will you take money from to cover it? You must take from another category (e.g., reduce the "Entertainment" allocation). This teaches the reality that money doesn't grow on trees.</li>
  <li><strong>100% Privacy (Client-Side & Offline):</strong> We know financial data is sensitive. No Bank Login, No ID Upload. All data is stored in your device's LocalStorage (Laptop/Phone). Our server does not see your data at all. Offline Ready when the signal is bad.</li>
  <li><strong>Export & Import Data:</strong> Changing phones or want to analyze further in Excel? You can backup your data to JSON or CSV (Excel) format anytime. You have full control over your data.</li>
</ul>`
        },
        {
          title: "How to Start Budgeting in 4 Steps",
          content: `<p>Change your financial fate starting today:</p>
<ol>
  <li><strong>Input Income:</strong> Enter your salary or revenue. The "To be Budgeted" number will turn Green.</li>
  <li><strong>Allocate (Budgeting):</strong> Enter amounts into the "Budgeted" column for each category (Basic Needs, Installments, Savings, Entertainment) until "To be Budgeted" becomes $0.</li>
  <li><strong>Record Transactions:</strong> Every time you spend, click the (+) button. Select a category, enter the amount. The category balance will automatically decrease.</li>
  <li><strong>Evaluate & Adjust:</strong> If a category is red (over-budget), shift the budget from another category that still has a surplus.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Budget Planner Online: Atur Keuangan Metode Zero-Based Budgeting",
      sections: [
        {
          title: "Apa Itu Zero-Based Budgeting (ZBB)?",
          content: `<p>Pernahkah Anda merasa gaji "numpang lewat"? Tanggal 25 terima gaji, tapi baru tanggal 10 bulan depan, saldo rekening sudah menipis dan Anda bingung: "Uangku habis buat apa saja, ya?"</p>
<p>Masalah utamanya seringkali bukan pada besarnya gaji Anda, melainkan pada cara Anda memperlakukan uang tersebut. Banyak orang terjebak menggunakan aplikasi Expense Tracker (Pencatat Pengeluaran). Masalahnya, mencatat pengeluaran itu sifatnya penyesalan. Anda hanya mencatat sejarah: "Yah, uangku habis 500 ribu buat kopi." Sudah saatnya berubah.</p>
<p>Perkenalkan VersoKit Budget Planner. Ini bukan sekadar pencatat, ini adalah alat Perencana Masa Depan berbasis metode Zero-Based Budgeting (ZBB).</p>`
        },
        {
          title: "Apa Itu Zero-Based Budgeting (ZBB)?",
          content: `<p>Filosofi di balik alat ini sangat sederhana namun powerful: "Berikan pekerjaan untuk setiap rupiah yang Anda miliki."</p>
<p>Bayangkan metode "Amplop" nenek moyang kita. Jika Anda punya uang tunai Rp 5.000.000 di tangan, Anda akan memasukkannya ke dalam amplop-amplop fisik: Amplop Makan, Amplop Listrik, Amplop Tabungan, dll. Anda terus membagi uang tersebut sampai uang di tangan Anda sisa NOL (0). Artinya, semua uang sudah punya pos masing-masing.</p>
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
  <li><strong>Privasi 100% (Client-Side & Offline):</strong> Kami tahu data keuangan itu sensitif. Tanpa Login Bank, Tanpa Upload KTP. Semua data tersimpan di LocalStorage perangkat Anda (Laptop/HP). Server kami tidak melihat data Anda sama sekali. Offline Ready saat sinyal jelek.</li>
  <li><strong>Export & Import Data:</strong> Ganti HP atau ingin analisa lebih lanjut di Excel? Anda bisa backup data Anda ke format JSON atau CSV (Excel) kapan saja. Anda punya kendali penuh atas data Anda.</li>
</ul>`
        },
        {
          title: "Cara Memulai Budgeting dalam 4 Langkah",
          content: `<p>Ubah nasib keuangan Anda mulai hari ini:</p>
<ol>
  <li><strong>Input Pemasukan:</strong> Masukkan gaji atau omzet Anda. Angka "Siap Dianggarkan" akan berubah menjadi Hijau.</li>
  <li><strong>Pos-poskan (Budgeting):</strong> Masukkan nominal ke kolom "Anggaran" di setiap kategori (Kebutuhan Pokok, Cicilan, Tabungan, Hiburan) sampai "Siap Dianggarkan" menjadi Rp 0.</li>
  <li><strong>Catat Transaksi:</strong> Setiap kali Anda belanja, klik tombol (+). Pilih kategori, masukkan nominal. Saldo kategori akan otomatis berkurang.</li>
  <li><strong>Evaluasi & Penyesuaian:</strong> Jika ada kategori yang merah (over-budget), geser anggaran dari kategori lain yang masih sisa.</li>
</ol>`
        }
      ]
    },
    de: {
      title: "Online-Budgetplaner: Finanzen mit der Zero-Based-Budgeting-Methode verwalten",
      sections: [
        {
          title: "Was ist nullbasiertes Budgetieren (ZBB)?",
          content: `<p>Haben Sie jemals das Gefühl gehabt, dass Ihr Gehalt nur ein "Durchlaufposten" ist? Am 25. erhalten Sie Ihr Gehalt, aber bereits am 10. des nächsten Monats ist Ihr Kontostand niedrig und Sie fragen sich: "Wofür ist mein ganzes Geld eigentlich draufgegangen?"</p>
<p>Das Hauptproblem ist oft nicht die Höhe Ihres Gehalts, sondern die Art und Weise, wie Sie mit diesem Geld umgehen. Viele Menschen stecken in der Falle von Expense-Tracker-Apps (Ausgaben-Apps) fest. Das Problem ist, dass das Aufzeichnen von Ausgaben ein Akt des Bedauerns ist. Sie zeichnen lediglich die Geschichte auf: "Oh, ich habe 500 für Kaffee ausgegeben." Es ist Zeit für eine Veränderung.</p>
<p>Wir stellen den VersoKit Budgetplaner vor. Dies ist nicht nur ein Aufzeichnungsgerät; es ist ein Werkzeug für die Zukunftsplanung, das auf der Zero-Based-Budgeting-Methode (ZBB) basiert. Die Philosophie hinter diesem Tool ist sehr einfach und doch wirkungsvoll: <strong>"Geben Sie jedem Euro, den Sie besitzen, eine Aufgabe."</strong></p>
<p>Stellen Sie sich die "Umschlagmethode" unserer Vorfahren vor. Wenn Sie 5.000 € in bar in der Hand hätten, würden Sie diese in physische Umschläge stecken: Umschlag für Essen, Umschlag für Strom, Umschlag zum Sparen usw. Sie teilen das Geld so lange auf, bis das Geld in Ihrer Hand NULL (0) ist. Das bedeutet, dass jedes Geld bereits seinen eigenen zugewiesenen Platz hat.</p>
<p>Der VersoKit Budgetplaner digitalisiert dieses Umschlagsystem.</p>
<ul>
  <li><strong>Standard-Ausgaben-Tracker:</strong> "Wie viel Geld habe ich noch übrig?" (Reaktiv/Ängstlich).</li>
  <li><strong>Budgetplaner (ZBB):</strong> "Welchen Plan habe ich für dieses Geld?" (Proaktiv/Kontrolle).</li>
</ul>`
        },
        {
          title: "Finanzielle Probleme, die wir lösen",
          content: `<p>Dieses Tool wurde speziell entwickelt, um häufige finanzielle "Krankheiten" zu überwinden:</p>
<ol>
  <li><strong>Das "Kleinvieh macht auch Mist"-Syndrom:</strong> Kleine Ausgaben wie Trend-Kaffee, Parkgebühren, Bankgebühren oder App-Abonnements bleiben oft unbemerkt. Plötzlich summieren sie sich auf Tausende. Mit ZBB sind Sie gezwungen, diese Kleinigkeiten von Anfang an einzuplanen.</li>
  <li><strong>Angst vor dem Kontocheck:</strong> Viele Menschen haben Angst, ihr Mobile-Banking zu öffnen, weil sie sich vor dem Inhalt fürchten. Mit diesem Tool werden Sie sich beruhigt fühlen. Warum? Weil Sie genau wissen, dass das Geld für die Miete sicher ist, das Geld für Essen sicher ist und die Ersparnisse bereits beiseitegelegt wurden.</li>
  <li><strong>Geld ohne Zweck:</strong> Oft haben wir noch Geld auf dem Konto und sind versucht, es auszugeben, weil wir das Gefühl haben, dass "noch Geld da ist". Beim ZBB ist "untätiges" Geld strengstens verboten. Alles muss zugewiesen werden, egal ob für Ausgaben oder Investitionen.</li>
</ol>`
        },
        {
          title: "Hauptmerkmale des VersoKit Budgetplaners",
          content: `<ul>
  <li><strong>"Bereit zur Budgetierung"-System:</strong> Am oberen Rand der App sehen Sie eine große Zahl. Das ist Ihr Geld, das noch keine "Aufgabe" hat. Ihre Mission ist es, diese Zahl auf Kategorien zu verteilen, bis der Indikator 0 (Null) anzeigt.</li>
  <li><strong>Quersubventionierung (Anpassungsfähigkeit):</strong> Das Leben ist dynamisch. Manchmal geben wir in der Kategorie "Essen" zu viel aus. Wenn Ihre Lebensmittelkategorie im Minus ist (rot markiert), zwingt Sie dieses Tool dazu, ehrlich zu sein: Woher nehmen Sie das Geld, um es zu decken? Sie müssen es aus einer anderen Kategorie nehmen (z. B. das Budget für "Unterhaltung" kürzen). Dies lehrt die Realität, dass Geld nicht auf Bäumen wächst.</li>
  <li><strong>100 % Privatsphäre (Client-seitig & Offline):</strong> Wir wissen, dass Finanzdaten sensibel sind. Kein Bank-Login, kein Ausweis-Upload. Alle Daten werden im LocalStorage Ihres Geräts (Laptop/Handy) gespeichert. Unser Server sieht Ihre Daten überhaupt nicht. Offline-bereit, wenn das Signal schlecht ist.</li>
  <li><strong>Daten exportieren & importieren:</strong> Sie wechseln das Handy oder möchten weitere Analysen in Excel durchführen? Sie können Ihre Daten jederzeit im JSON- oder CSV-Format (Excel) sichern. Sie haben die volle Kontrolle über Ihre Daten.</li>
</ul>`
        },
        {
          title: "Budgetplanung in 4 Schritten starten",
          content: `<p>Verändern Sie noch heute Ihr finanzielles Schicksal:</p>
<ol>
  <li><strong>Einnahmen eingeben:</strong> Geben Sie Ihr Gehalt oder Ihren Umsatz ein. Die Zahl "Bereit zur Budgetierung" wird grün.</li>
  <li><strong>Zuweisen (Budgetierung):</strong> Geben Sie Beträge in die Spalte "Budgetiert" für jede Kategorie ein (Grundbedürfnisse, Ratenzahlungen, Sparen, Unterhaltung), bis "Bereit zur Budgetierung" 0 € beträgt.</li>
  <li><strong>Transaktionen aufzeichnen:</strong> Jedes Mal, wenn Sie Geld ausgeben, klicken Sie auf die Schaltfläche (+). Wählen Sie eine Kategorie aus und geben Sie den Betrag ein. Der Kategoriestand verringert sich automatisch.</li>
  <li><strong>Auswerten & Anpassen:</strong> Wenn eine Kategorie rot markiert ist (Budget überschritten), verschieben Sie das Budget aus einer anderen Kategorie, die noch ein Plus aufweist.</li>
</ol>`
        }
      ]
    },
    es: {
      title: "Planificador de Presupuesto Online: Gestiona tus Finanzas con el Método de Presupuesto Base Cero",
      sections: [
        {
          title: "¿Qué es el Presupuesto Base Cero (ZBB)?",
          content: `<p>¿Alguna vez has sentido que tu salario es solo un "paso de dinero"? Recibes tu paga el día 25, pero el día 10 del mes siguiente el saldo de tu cuenta ya es bajo y te preguntas: "¿En qué se me ha ido todo el dinero?"</p>
<p>El problema principal no suele ser el tamaño de tu salario, sino cómo tratas ese dinero. Muchas personas están atrapadas usando aplicaciones de seguimiento de gastos (Expense Tracker). El problema es que registrar los gastos es un acto de arrepentimiento. Solo estás registrando la historia: "Vaya, me gasté 500 en café". Es hora de cambiar.</p>
<p>Te presentamos VersoKit Budget Planner. Esto no es solo un registrador; es una herramienta de Planificación del Futuro basada en el método de Presupuesto Base Cero (ZBB). La filosofía detrás de esta herramienta es muy simple pero poderosa: <strong>"Dale un trabajo a cada euro que tengas".</strong></p>
<p>Imagina el método del "Sobre" de nuestros antepasados. Si tuviera 5.000 € en efectivo en la mano, los pondría en sobres físicos: Sobre de Comida, Sobre de Electricidad, Sobre de Ahorros, etc. Sigue dividiendo ese dinero hasta que el dinero en su mano sea CERO (0). Esto significa que todo el dinero ya tiene su propio puesto asignado.</p>
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
  <li><strong>Sistema "Listo para Presupuestar":</strong> En la parte superior de la aplicación, verás un número grande. Ese es tu dinero que aún no tiene un "trabajo". Tu misión es repartir ese número en categorías hasta que el indicador sea 0 (Cero).</li>
  <li><strong>Subsidio Cruzado (Adaptarse a los Golpes):</strong> La vida es dinámica. A veces gastamos de más en la categoría "Comida". Si tu categoría de Comida es negativa (en rojo), esta herramienta te obliga a ser honesto: ¿de dónde sacarás dinero para cubrirlo? Debes tomarlo de otra categoría (por ejemplo, reducir la asignación para "Entretenimiento"). Esto enseña la realidad de que el dinero no crece en los árboles.</li>
  <li><strong>Privacidad 100% (Lado del Cliente y Offline):</strong> Sabemos que los datos financieros son sensibles. Sin inicio de sesión bancario, sin carga de identificación. Todos los datos se almacenan en el LocalStorage de tu dispositivo (portátil/móvil). Nuestro servidor no ve tus datos en absoluto. Listo para usar offline cuando la señal sea mala.</li>
  <li><strong>Exportar e Importar Datos:</strong> ¿Cambias de móvil o quieres analizar más a fondo en Excel? Puedes hacer una copia de seguridad de tus datos en formato JSON o CSV (Excel) en cualquier momento. Tienes el control total sobre tus datos.</li>
</ul>`
        },
        {
          title: "Cómo Empezar a Presupuestar en 4 Pasos",
          content: `<p>Cambia tu destino financiero a partir de hoy:</p>
<ol>
  <li><strong>Ingresar Ingresos:</strong> Introduce tu salario o ingresos. El número "Listo para Presupuestar" cambiará a verde.</li>
  <li><strong>Asignar (Presupuestar):</strong> Introduce cantidades en la columna "Presupuestado" de cada categoría (Necesidades Básicas, Cuotas, Ahorros, Entretenimiento) hasta que "Listo para Presupuestar" sea 0 €.</li>
  <li><strong>Registrar Transacciones:</strong> Cada vez que gastes, haz clic en el botón (+). Selecciona una categoría e introduce el importe. El saldo de la categoría disminuirá automáticamente.</li>
  <li><strong>Evaluar y Ajustar:</strong> Si una categoría está en rojo (presupuesto excedido), traslada el presupuesto de otra categoría que aún tenga superávit.</li>
</ol>`
        }
      ]
    },
    pt: {
      title: "Planejador de Orçamento Online: Controle Suas Finanças com o Método de Orçamento Base Zero",
      sections: [
        {
          title: "O Que é o Orçamento Base Zero (ZBB)?",
          content: `<p>Você já sentiu como se o seu salário estivesse apenas "de passagem"? No dia 25 você recebe o salário, mas no dia 10 do mês seguinte o saldo da conta já está baixo e você fica se perguntando: "Onde foi parar todo o meu dinheiro?"</p>
<p>O problema principal muitas vezes não é o valor do seu salário, mas a forma como você trata esse dinheiro. Muitas pessoas estão presas ao uso de aplicativos de rastreamento de despesas (Expense Tracker). O problema é que registrar despesas é um ato de arrependimento. Você está apenas registrando a história: "Poxa, gastei 500 em café". É hora de mudar.</p>
<p>Apresentamos o VersoKit Budget Planner. Isto não é apenas um registrador; é uma ferramenta de Planejamento do Futuro baseada no método de Orçamento Base Zero (ZBB). A filosofia por trás desta ferramenta é muito simples, mas poderosa: <strong>"Dê um trabalho para cada real que você possui."</strong></p>
<p>Imagine o método do "Envelope" dos nossos antepassados. Se você tivesse R$ 5.000 em dinheiro na mão, você o colocaria em envelopes físicos: Envelope de Comida, Envelope de Eletricidade, Envelope de Poupança, etc. Você continua dividindo esse dinheiro até que o dinheiro em sua mão seja ZERO (0). Isso significa que todo o dinheiro já tem seu próprio destino atribuído.</p>
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
  <li><strong>Sistema "Pronto para ser Orçado":</strong> No topo do aplicativo, você verá um número grande. Esse é o seu dinheiro que ainda não tem um "trabalho". Sua missão é distribuir esse número entre as categorias até que o indicador seja 0 (Zero).</li>
  <li><strong>Subsídio Cruzado (Jogo de Cintura):</strong> A vida é dinâmica. Às vezes gastamos demais na categoria "Comida". Se a sua categoria de Comida estiver negativa (vermelha), esta ferramenta força você a ser honesto: de onde você vai tirar dinheiro para cobri-la? Você deve tirar de outra categoria (ex: reduzir a cota de "Lazer"). Isso ensina a realidade de que dinheiro não nasce em árvore.</li>
  <li><strong>100% de Privacidade (Client-Side e Offline):</strong> Sabemos que os dados financeiros são sensíveis. Sem Login Bancário, Sem Upload de Identidade. Todos os dados são armazenados no LocalStorage do seu dispositivo (Laptop/Celular). Nosso servidor não vê seus dados de forma alguma. Pronto para uso Offline quando o sinal estiver ruim.</li>
  <li><strong>Exportar e Importar Dados:</strong> Vai trocar de celular ou quer analisar melhor no Excel? Você pode fazer backup dos seus dados nos formatos JSON ou CSV (Excel) a qualquer momento. Você tem controle total sobre seus dados.</li>
</ul>`
        },
        {
          title: "Como Começar o Orçamento em 4 Passos",
          content: `<p>Mude seu destino financeiro a partir de hoje:</p>
<ol>
  <li><strong>Inserir Receitas:</strong> Insira seu salário ou faturamento. O número "Pronto para ser Orçado" ficará verde.</li>
  <li><strong>Destinar (Fazer o Orçamento):</strong> Insira valores na coluna "Orçado" em cada categoria (Necessidades Básicas, Parcelas, Poupança, Lazer) até que "Pronto para ser Orçado" se torne R$ 0.</li>
  <li><strong>Registrar Transações:</strong> Toda vez que você gastar, clique no botão (+). Escolha a categoria e insira o valor. O saldo da categoria diminuirá automaticamente.</li>
  <li><strong>Avaliar e Ajustar:</strong> Se houver alguma categoria no vermelho (acima do orçamento), desloque o orçamento de outra categoria que ainda tenha saldo.</li>
</ol>`
        }
      ]
    },
    fr: {
      title: "Planificateur de Budget en Ligne : Gérez vos Finances avec la Méthode du Budget Base Zéro",
      sections: [
        {
          title: "Qu'est-ce que le Budget Base Zéro (BBZ) ?",
          content: `<p>Avez-vous déjà eu l'impression que votre salaire n'était qu'un "passage d'argent" ? Vous recevez votre chèque le 25, mais dès le 10 du mois suivant, le solde de votre compte est déjà bas et vous vous demandez : "Où est passé tout mon argent ?"</p>
<p>Le problème principal n'est souvent pas le montant de votre salaire, mais la façon dont vous traitez cet argent. Beaucoup de gens sont piégés par l'utilisation d'applications de suivi des dépenses (Expense Tracker). Le problème est que l'enregistrement des dépenses est un acte de regret. Vous ne faites qu'enregistrer l'histoire : "Oh, j'ai dépensé 500 en café". Il est temps de changer.</p>
<p>Découvrez VersoKit Budget Planner. Ce n'est pas seulement un enregistreur ; c'est un outil de Planification de l'Avenir basé sur la méthode du Budget Base Zéro (BBZ). La philosophie derrière cet outil est très simple mais puissante : <strong>"Donnez un travail à chaque euro que vous possédez."</strong></p>
<p>Imaginez la méthode des "Enveloppes" de nos ancêtres. Si vous aviez 5 000 € en espèces dans votre main, vous les mettriez dans des enveloppes physiques : Enveloppe Nourriture, Enveloppe Électricité, Enveloppe Épargne, etc. Vous continuez à diviser cet argent jusqu'à ce que l'argent dans votre main soit à ZÉRO (0). Cela signifie que tout l'argent a déjà son propre poste assigné.</p>
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
  <li><strong>Système "À Budgétiser" :</strong> En haut de l'application, vous verrez un grand chiffre. C'est votre argent qui n'a pas encore de "travail". Votre mission est de dépenser ce chiffre dans les catégories jusqu'à ce que l'indicateur soit à 0 (Zéro).</li>
  <li><strong>Inter-financement (S'adapter aux imprévus) :</strong> La vie est dynamique. Parfois, nous dépensons trop dans la catégorie "Nourriture". Si votre catégorie Nourriture est négative (en rouge), cet outil vous oblige à être honnête : où allez-vous prendre l'argent pour couvrir cela ? Vous devez le prendre d'une autre catégorie (par exemple, réduire l'allocation "Divertissement"). Cela enseigne la réalité que l'argent ne tombe pas du ciel.</li>
  <li><strong>Confidentialité 100% (Côté Client & Hors Ligne) :</strong> Nous savons que les données financières sont sensibles. Pas de connexion bancaire, pas d'envoi de carte d'identité. Toutes les données sont stockées dans le LocalStorage de votre appareil (ordinateur/téléphone). Notre serveur ne voit pas du tout vos données. Prêt pour le mode Hors Ligne quand le signal est mauvais.</li>
  <li><strong>Exportation & Importation de Données :</strong> Vous changez de téléphone ou voulez analyser plus en détail dans Excel ? Vous pouvez sauvegarder vos données au format JSON ou CSV (Excel) à tout moment. Vous avez le contrôle total sur vos données.</li>
</ul>`
        },
        {
          title: "Comment Commencer son Budget en 4 Étapes",
          content: `<p>Changez votre destin financier dès aujourd'hui :</p>
<ol>
  <li><strong>Saisir les Revenus :</strong> Entrez votre salaire ou votre chiffre d'affaires. Le chiffre "À Budgétiser" deviendra vert.</li>
  <li><strong>Répartir (Budgétisation) :</strong> Entrez les montants dans la colonne "Budgétisé" de chaque catégorie (Besoins de Base, Mensualités, Épargne, Divertissement) jusqu'à ce que le montant "À Budgétiser" soit de 0 €.</li>
  <li><strong>Enregistrer les Transactions :</strong> Chaque fois que vous dépensez, cliquez sur le bouton (+). Sélectionnez une catégorie, entrez le montant. Le solde de la catégorie diminuera automatiquement.</li>
  <li><strong>Évaluer & Ajuster :</strong> Si une catégorie est dans le rouge (dépassement de budget), déplacez le budget d'une autre catégorie qui présente encore un surplus.</li>
</ol>`
        }
      ]
    },
    it: {
      title: "Pianificatore di Budget Online: Gestisci le Finanze con il Metodo del Budget a Base Zero",
      sections: [
        {
          title: "Cos'è il Budget a Base Zero (BBZ)?",
          content: `<p>Hai mai avuto l'impressione che il tuo stipendio sia solo di "passaggio"? Ricevi la busta paga il 25, ma già il 10 del mese successivo il saldo del tuo conto è basso e ti chiedi: "Dove sono finiti tutti i miei soldi?"</p>
<p>Il problema principale spesso non è l'entità del tuo stipendio, ma il modo in cui tratti quel denaro. Molte persone sono intrappolate nell'uso di app per il monitoraggio delle spese (Expense Tracker). Il problema è che registrare le spese è un atto di rimpianto. Stai solo registrando la storia: "Oh, ho speso 500 per il caffè". È ora di cambiare.</p>
<p>Ti presentiamo VersoKit Budget Planner. Questo non è solo un registratore; è uno strumento di Pianificazione del Futuro basato sul metodo del Budget a Base Zero (BBZ). La filosofia alla base di questo strumento è molto semplice ma potente: <strong>"Dai un lavoro a ogni euro che possiedi."</strong></p>
<p>Immagina il metodo delle "Buste" dei nostri antenati. Se avessi 5.000 € in contanti in mano, li metteresti in buste fisiche: Busta per il Cibo, Busta per l'Elettricità, Busta per i Risparmi, ecc. Continui a dividere quel denaro finché il denaro che hai in mano non è ZERO (0). Ciò significa che tutto il denaro ha già la sua destinazione assegnata.</p>
<p>VersoKit Budget Planner digitalizza questo sistema di buste.</p>
<ul>
  <li><strong>Tracker delle Spese Standard:</strong> "Quanto denaro mi è rimasto?" (Reattivo/Timoroso).</li>
  <li><strong>Pianificatore di Budget (BBZ):</strong> "Quale piano ho per questo denaro?" (Proactive/Controllo).</li>
</ul>`
        },
        {
          title: "Problemi Finanziari che Risolviamo",
          content: `<p>Questo strumento è specificamente progettato per superare le comuni "malattie" finanziarie:</p>
<ol>
  <li><strong>La Sindrome della "Piccola Perdita":</strong> Piccole spese come il caffè alla moda, le tariffe del parcheggio, le commissioni bancarie o gli abbonamenti alle app spesso passano inosservate. Improvvisamente, arrivano a totalizzare migliaia di euro. Con il BBZ, sei costretto a preventivare queste piccole cose all'inizio.</li>
  <li><strong>Paura del Controllo del Saldo:</strong> Molte persone hanno paura di aprire il mobile banking perché temono di vederne il contenuto. Con questo strumento, ti sentirai in pace. Perché? Perché sai esattamente che i soldi per l'affitto sono al sicuro, i soldi per il cibo sono al sicuro e i risparmi sono già stati messi da parte.</li>
  <li><strong>Denaro Senza Scopo:</strong> Spesso abbiamo dei soldi rimasti sul conto e siamo tentati di spenderli perché sentiamo che "ci sono ancora dei soldi". Nel BBZ, il denaro "ozioso" è severamente vietato. Tutto deve essere allocato, che sia per spese o per investimenti.</li>
</ol>`
        },
        {
          title: "Caratteristiche Principali di VersoKit Budget Planner",
          content: `<ul>
  <li><strong>Sistema "Da Preventivare":</strong> Nella parte superiore dell'app, vedrai un numero grande. Quello è il tuo denaro che non ha ancora un "lavoro". La tua missione è spendere quel numero nelle categorie finché l'indicatore non è 0 (Zero).</li>
  <li><strong>Sussidio Incrociato (Adattarsi ai colpi):</strong> La vita è dinamica. A volte spendiamo troppo nella categoria "Cibo". Se la tua categoria Cibo è negativa (rossa), questo strumento ti costringe a essere onesto: da dove prenderai i soldi per coprirla? Devi prenderli da un'altra categoria (ad esempio, ridurre lo stanziamento per lo "Svago"). Questo insegna la realtà que i soldi non crescono sugli alberi.</li>
  <li><strong>Privacy al 100% (Client-Side e Offline):</strong> Sappiamo che i dati finanziari sono sensibili. Nessun login bancario, nessun caricamento di documenti d'identità. Tutti i dati sono memorizzati nel LocalStorage del tuo dispositivo (Laptop/Telefono). Il nostro server non vede affatto i tuoi dati. Pronto per l'uso offline quando il segnale è scarso.</li>
  <li><strong>Esporta e Importa Dati:</strong> Cambi telefono o vuoi analizzare ulteriormente in Excel? Puoi eseguire il backup dei tuoi dati in formato JSON o CSV (Excel) in qualsiasi momento. Hai il pieno controllo dei tuoi dati.</li>
</ul>`
        },
        {
          title: "Come Iniziare a Fare il Budget in 4 Passaggi",
          content: `<p>Cambia il tuo destino finanziario a partire da oggi:</p>
<ol>
  <li><strong>Inserisci le Entrate:</strong> Inserisci il tuo stipendio o le tue entrate. Il numero "Da Preventivare" diventerà verde.</li>
  <li><strong>Assegna (Fare il Budget):</strong> Inserisci gli importi nella colonna "Assegnato" per ogni categoria (Bisogni Primari, Rate, Risparmi, Svago) finché "Da Preventivare" non diventa 0 €.</li>
  <li><strong>Registra le Transazioni:</strong> Ogni volta che spendi, clicca sul pulsante (+). Seleziona una categoria, inserisci l'importo. Il saldo della categoria diminuirà automaticamente.</li>
  <li><strong>Valuta e Regola:</strong> Se una categoria è rossa (fuori budget), sposta il budget da un'altra categoria che ha ancora un surplus.</li>
</ol>`
        }
      ]
    }
  },
  "futsal": {
    en: {
      title: "Digital Futsal Scoreboard Online: Free, Timer & Foul Counter",
      sections: [
        {
          title: "Elevate Your Futsal Matches",
          content: `<p>Futsal matches feel less exciting without a clear scoreboard and timer. Have you ever experienced awkward moments during sparring: debating the score ("Wait, was it 4-3 or 4-4?"), or confused about how many minutes are left?</p>
<p>A classic problem on non-professional futsal courts is the lack of a proper Scoreboard. Physical digital scoreboards can cost millions, a heavy investment for small court managers or communities. Meanwhile, using a phone stopwatch is often ineffective because the screen is small and only visible to one person.</p>
<p>VersoKit brings a smart solution: Digital Futsal Scoreboard. This web-based tool instantly transforms your Laptop, Tablet, or Phone into a professional scoreboard for free!</p>`
        },
        {
          title: "Why You Need the VersoKit Scoreboard",
          content: `<p>This tool is not just a number recorder. We designed it with specific features that follow international futsal rules (FIFA). Here are the key features you can enjoy:</p>
<ol>
  <li><strong>Flexible Match Timer (Countdown):</strong> In professional futsal, time is everything. This tool is equipped with a countdown timer that you can set—either the pro standard 20 minutes or 15 minutes for casual sparring. <strong>Pause & Resume:</strong> Ball out of play? Injured goalkeeper? Just press the Pause button. Time stops, and Resume when the ball rolls again. Perfect for simulating "Stop-clock" play.</li>
  <li><strong>Foul Counter (Crucial Feature!):</strong> This is a feature often forgotten by regular score apps. In futsal, accumulated fouls heavily determine the match result. Our tool tracks fouls from 0 to 5. <strong>Visual Indicator:</strong> When a team reaches 5 fouls, both you and the players on the field will realize that the next foul (the 6th) means a Second Penalty Mark punishment.</li>
  <li><strong>Professional Look (Customizable):</strong> Edit Team Names: Say goodbye to boring "Home vs Away" text. You can change them to real team names, e.g., "Garuda FC" vs "Harimau FC". Indicator for periods: Clear markers for 1st Half, 2nd Half, or Extra Time.</li>
</ol>`
        },
        {
          title: "Technical Advantages: Advanced Without the Hassle",
          content: `<p>We know court operators or referees don't want to be bothered with complicated installations. Therefore, VersoKit Futsal Scoreboard is built with modern technology:</p>
<ul>
  <li><strong>Web-Based & No Install:</strong> No need to fill up phone memory by downloading apps. Just open your browser (Chrome/Safari/Edge), and the tool is ready to use.</li>
  <li><strong>Fullscreen Mode:</strong> Want a Pro League TV look? Click the Fullscreen button. All browser elements will disappear, leaving a clean and elegant scoreboard.</li>
  <li><strong>Offline Ready:</strong> Signal weak at the court? Don't worry. Once this page is fully loaded, the Timer and Score will continue to function normally even if the internet drops.</li>
  <li><strong>Responsive:</strong> The display adjusts automatically. Perfect on a Laptop to connect to a TV/Projector via HDMI. Ideal on a Tablet/Phone for a referee to hold score control on the sidelines.</li>
</ul>`
        },
        {
          title: "How to Use This Futsal Scoreboard",
          content: `<p>It only takes 1 minute to start a match like a professional:</p>
<ol>
  <li><strong>Prepare Device:</strong> Open this VersoKit page on your Laptop or Tablet.</li>
  <li><strong>Connect to Large Screen (Optional):</strong> If you are a court manager, connect the Laptop to a hanging TV or Projector using an HDMI cable.</li>
  <li><strong>Enter Fullscreen Mode:</strong> Click the Fullscreen button for maximum view.</li>
  <li><strong>Setup Match:</strong> Click team name text to change names. Set time duration (e.g., 20 minutes).</li>
  <li><strong>Kick-off!:</strong> Press "Start".</li>
  <li><strong>Real-time Update:</strong> Press (+) on Score if a goal occurs. Press (+) on Foul if the referee blows the whistle. Press Pause if the ball is out.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital Online: Gratis, Timer & Hitung Foul",
      sections: [
        {
          title: "Main futsal rasanya kurang seru kalau tidak ada papan skor dan waktu yang jelas.",
          content: `<p>Pernahkah Anda mengalami momen canggung saat sparring: berdebat soal skor ("Eh, tadi 4-3 atau 4-4?"), atau bingung sisa waktu tinggal berapa menit?</p>
<p>Masalah klasik di lapangan futsal non-profesional adalah ketiadaan Scoreboard yang layak. Harga papan skor digital fisik bisa mencapai jutaan rupiah, investasi yang cukup mahal bagi pengelola lapangan kecil atau komunitas. Sementara itu, menggunakan stopwatch di HP seringkali tidak efektif karena layarnya kecil dan hanya bisa dilihat oleh satu orang.</p>
<p>VersoKit menghadirkan solusi cerdas: Futsal Scoreboard Digital. Alat berbasis web ini mengubah Laptop, Tablet, atau HP Anda menjadi papan skor profesional secara instan dan gratis!</p>`
        },
        {
          title: "Mengapa Anda Butuh Papan Skor VersoKit?",
          content: `<p>Alat ini bukan sekadar pencatat angka. Kami merancangnya dengan fitur spesifik yang mengikuti standar peraturan futsal internasional (FIFA). Berikut adalah fitur "daging" yang bisa Anda nikmati:</p>
<ol>
  <li><strong>Timer Pertandingan (Countdown) yang Fleksibel:</strong> Dalam futsal profesional, waktu adalah segalanya. Alat ini dilengkapi countdown timer (waktu mundur) yang bisa Anda atur—baik standar 20 menit (babak pro) atau 15 menit (sparring santai). <strong>Pause & Resume:</strong> Bola keluar lapangan? Kiper cedera? Cukup tekan tombol Pause. Waktu berhenti, dan Resume saat bola bergulir kembali. Sangat cocok untuk simulasi "Waktu Bersih".</li>
  <li><strong>Penghitung Pelanggaran (Foul Counter) - Fitur Krusial!:</strong> Ini adalah fitur yang sering dilupakan aplikasi skor biasa. Di futsal, akumulasi pelanggaran sangat menentukan hasil pertandingan. Alat kami melacak akumulasi foul dari 0 hingga 5. <strong>Indikator Visual:</strong> Saat tim mencapai 5 pelanggaran, Anda dan pemain di lapangan akan sadar bahwa pelanggaran berikutnya (ke-6) berarti hukuman Tendangan Penalti Titik Kedua (Second Penalty Mark).</li>
  <li><strong>Tampilan Profesional (Customizable):</strong> Edit Nama Tim: Ucapkan selamat tinggal pada tulisan membosankan "Home vs Away". Anda bisa menggantinya menjadi nama tim asli, misal: "Garuda FC" vs "Harimau FC". Indikator Babak: Penanda jelas untuk Babak 1, Babak 2, atau Extra Time.</li>
</ol>`
        },
        {
          title: "Keunggulan Teknis: Canggih Tanpa Ribet",
          content: `<p>Kami tahu operator lapangan atau wasit tidak ingin direpotkan dengan instalasi yang rumit. Oleh karena itu, VersoKit Futsal Scoreboard dibuat dengan teknologi modern:</p>
<ul>
  <li><strong>Web-Based & No Install:</strong> Tidak perlu memenuhi memori HP dengan download aplikasi di PlayStore/AppStore. Cukup buka browser (Chrome/Safari/Edge), dan alat siap digunakan.</li>
  <li><strong>Fullscreen Mode:</strong> Ingin tampilan seperti di TV Liga Pro? Klik tombol Fullscreen. Semua elemen browser akan hilang, menyisakan papan skor yang bersih dan elegan.</li>
  <li><strong>Offline Ready:</strong> Internet di lapangan futsal sering lemot? Tenang. Setelah halaman ini terbuka sempurna, Timer dan Skor tetap berfungsi normal meskipun internet putus.</li>
  <li><strong>Responsif:</strong> Tampilan otomatis menyesuaikan. Di Laptop sempurna untuk disambungkan ke TV/Proyektor via kabel HDMI. Di Tablet/HP ideal untuk wasit memegang kendali skor di pinggir lapangan.</li>
</ul>`
        },
        {
          title: "Cara Menggunakan Papan Skor Futsal Ini",
          content: `<p>Hanya butuh 1 menit untuk memulai pertandingan layaknya profesional:</p>
<ol>
  <li><strong>Siapkan Perangkat:</strong> Buka halaman VersoKit ini di Laptop atau Tablet Anda.</li>
  <li><strong>Sambungkan ke Layar Besar (Opsional):</strong> Jika Anda pengelola lapangan, sambungkan Laptop ke TV Gantung atau Proyektor menggunakan kabel HDMI.</li>
  <li><strong>Masuk Mode Layar Penuh:</strong> Klik tombol Fullscreen untuk tampilan maksimal.</li>
  <li><strong>Atur Pertandingan:</strong> Klik teks nama tim untuk mengubah nama. Atur durasi waktu (misal: 20 menit).</li>
  <li><strong>Kick-off!:</strong> Tekan "Start".</li>
  <li><strong>Update Real-time:</strong> Tekan (+) pada Skor jika gol terjadi. Tekan (+) pada Foul jika wasit meniup peluit pelanggaran. Tekan Pause jika bola keluar.</li>
</ol>`
        }
      ]
    },
    de: {
      title: "Digitale Futsal-Anzeigetafel Online: Kostenlos, Timer & Foulzähler",
      sections: [
        {
          title: "Werten Sie Ihre Futsal-Spiele auf",
          content: `<p>Futsal-Spiele fühlen sich ohne eine klare Anzeigetafel und einen Timer weniger aufregend an. Haben Sie jemals unangenehme Momente beim Sparring erlebt: Debatten über den Spielstand oder Verwirrung darüber, wie viele Minuten noch übrig sind?</p>
<p>Ein klassisches Problem auf nicht-professionellen Futsal-Plätzen ist das Fehlen einer ordentlichen Anzeigetafel. Physische digitale Tafeln können Millionen kosten. In der Zwischenzeit ist die Verwendung einer Handy-Stoppuhr oft ineffektiv, da der Bildschirm klein und nur für eine Person sichtbar ist.</p>
<p>VersoKit bietet eine intelligente Lösung: Digitale Futsal-Anzeigetafel. Dieses webbasierte Tool verwandelt Ihren Laptop, Ihr Tablet oder Ihr Handy sofort und kostenlos in eine professionelle Anzeigetafel!</p>`
        },
        {
          title: "Warum Sie das VersoKit Scoreboard brauchen",
          content: `<p>Dieses Tool ist nicht nur ein Ergebnis-Logger. Wir haben es mit spezifischen Funktionen entwickelt, die den internationalen Futsal-Regeln (FIFA) entsprechen:</p>
<ol>
  <li><strong>Flexibler Match-Timer (Countdown):</strong> Im professionellen Futsal ist Zeit alles. Dieses Tool ist mit einem Countdown-Timer ausgestattet, den Sie einstellen können – entweder den Pro-Standard von 20 Minuten oder 15 Minuten für lockeres Sparring. <strong>Pause & Fortsetzen:</strong> Ball im Aus? Verletzter Torwart? Drücken Sie einfach die Pause-Taste. Die Zeit stoppt, und setzen Sie fort, wenn der Ball wieder rollt.</li>
  <li><strong>Foulzähler (Entscheidendes Feature!):</strong> Dies ist eine Funktion, die oft vergessen wird. Im Futsal bestimmen kumulierte Fouls maßgeblich das Spielergebnis. Unser Tool verfolgt Fouls von 0 bis 5. <strong>Visueller Indikator:</strong> Wenn ein Team 5 Fouls erreicht, wird allen Beteiligten klar, dass das nächste Foul (das 6.) eine Zehnmeter-Strafe bedeutet.</li>
  <li><strong>Professioneller Look (Anpassbar):</strong> Teamnamen bearbeiten: Verabschieden Sie sich von langweiligem „Heim vs. Gast“. Sie können sie in echte Teamnamen ändern. Periodenanzeige: Klare Markierungen für 1. Halbzeit, 2. Halbzeit oder Verlängerung.</li>
</ol>`
        },
        {
          title: "Technische Vorteile: Fortschrittlich ohne Aufwand",
          content: `<p>VersoKit Futsal Scoreboard basiert auf moderner Technologie:</p>
<ul>
  <li><strong>Webbasiert & Keine Installation:</strong> Kein Download von Apps nötig. Öffnen Sie einfach Ihren Browser, und das Tool ist einsatzbereit.</li>
  <li><strong>Vollbildmodus:</strong> Für einen Pro-League-Look.</li>
  <li><strong>Offline-bereit:</strong> Einmal geladen, funktionieren Timer und Score auch ohne Internetverbindung weiter.</li>
  <li><strong>Responsiv:</strong> Das Display passt sich automatisch an.</li>
</ul>`
        }
      ]
    },
    es: {
      title: "Marcador de Fútbol Sala Digital Online: Gratis, Cronómetro y Faltas",
      sections: [
        {
          title: "Mejora tus partidos de fútbol sala",
          content: `<p>Los partidos de fútbol sala son menos emocionantes sin un marcador y un cronómetro claros. ¿Alguna vez has tenido momentos incómodos: debatiendo el marcador o confundido sobre cuántos minutos quedan?</p>
<p>Un problema clásico en las canchas de fútbol sala no profesionales es la falta de un marcador adecuado. Los marcadores digitales físicos pueden ser muy caros. Mientras tanto, usar un cronómetro en el móvil suele ser ineficaz porque la pantalla es pequeña y solo la ve una persona.</p>
<p>VersoKit trae una solución inteligente: Marcador Digital de Fútbol Sala. ¡Esta herramienta web transforma instantáneamente tu portátil, tablet o móvil en un marcador profesional de forma gratuita!</p>`
        },
        {
          title: "¿Por qué necesitas el marcador VersoKit?",
          content: `<p>Esta herramienta no es solo un registrador de números. La diseñamos con características específicas que siguen las reglas internacionales de fútbol sala (FIFA):</p>
<ol>
  <li><strong>Cronómetro de partido flexible (Cuenta atrás):</strong> En el fútbol sala profesional, el tiempo lo es todo. Esta herramienta cuenta con un temporizador que puedes configurar: ya sea el estándar pro de 20 minutos o 15 minutos para pachangas. <strong>Pausa y reanudación:</strong> ¿Balón fuera? ¿Portero lesionado? Solo pulsa el botón de Pausa. El tiempo se detiene y se reanuda cuando el balón vuelve a rodar.</li>
  <li><strong>Contador de faltas (¡Función crucial!):</strong> Esta es una función que a menudo se olvida. En el fútbol sala, las faltas acumuladas determinan el resultado. Nuestra herramienta rastrea las faltas de 0 a 5. <strong>Indicador visual:</strong> Cuando un equipo llega a 5 faltas, todos se darán cuenta de que la siguiente falta (la 6ª) significa un doble penalti.</li>
  <li><strong>Aspecto profesional (Personalizable):</strong> Edita los nombres de los equipos. Indicador de periodos: Marcas claras para la 1ª parte, 2ª parte o tiempo extra.</li>
</ol>`
        },
        {
          title: "Ventajas técnicas: Avanzado sin complicaciones",
          content: `<p>VersoKit Futsal Scoreboard está construido con tecnología moderna:</p>
<ul>
  <li><strong>Basado en la web y sin instalación:</strong> No necesitas descargar aplicaciones. Abre tu navegador y listo.</li>
  <li><strong>Modo pantalla completa:</strong> Para un aspecto de liga profesional.</li>
  <li><strong>Listo para usar offline:</strong> Una vez cargada la página, el cronómetro y el marcador siguen funcionando aunque se pierda el internet.</li>
  <li><strong>Responsivo:</strong> La pantalla se ajusta automáticamente.</li>
</ul>`
        }
      ]
    },
    pt: {
      title: "Placar de Futsal Digital Online: Grátis, Cronómetro e Faltas",
      sections: [
        {
          title: "Eleve as suas partidas de futsal",
          content: `<p>As partidas de futsal são menos emocionantes sem um placar e um cronómetro claros. Já passou por momentos estranhos: debatendo o resultado ou confuso sobre quantos minutos faltam?</p>
<p>Um problema clássico em quadras de futsal não profissionais é a falta de um placar adequado. Os placares digitais físicos podem ser muito caros. Entretanto, usar um cronómetro no telemóvel é ineficaz porque o ecrã é pequeno.</p>
<p>A VersoKit traz uma solução inteligente: Placar Digital de Futsal. Esta ferramenta web transforma instantaneamente o seu portátil, tablet ou telemóvel num placar profissional de forma gratuita!</p>`
        },
        {
          title: "Por que precisa do placar VersoKit?",
          content: `<p>Esta ferramenta segue as regras internacionais de futsal (FIFA):</p>
<ol>
  <li><strong>Cronómetro de jogo flexível (Contagem decrescente):</strong> Configure o padrão pro de 20 minutos ou 15 minutos para jogos casuais. <strong>Pausa e Retoma:</strong> O tempo para quando a bola sai e retoma quando volta a rolar.</li>
  <li><strong>Contador de Faltas (Recurso Crucial!):</strong> No futsal, as faltas acumuladas determinam o resultado. Rastreamos as faltas de 0 a 5. <strong>Indicador Visual:</strong> Quando uma equipa chega a 5 faltas, a próxima falta (a 6ª) significa um livre direto da marca dos dez metros.</li>
  <li><strong>Visual Profissional:</strong> Edite nomes de equipas e acompanhe os períodos do jogo.</li>
</ol>`
        },
        {
          title: "Vantagens Técnicas",
          content: `<ul>
  <li><strong>Baseado na web e sem instalação:</strong> Abra no seu browser e use.</li>
  <li><strong>Modo ecrã inteiro:</strong> Visual de liga profissional.</li>
  <li><strong>Pronto para uso offline:</strong> Funciona mesmo se a internet cair após o carregamento.</li>
  <li><strong>Responsivo:</strong> Ajusta-se a qualquer ecrã.</li>
</ul>`
        }
      ]
    },
    fr: {
      title: "Tableau de Score Futsal Digital en Ligne : Gratuit, Timer & Fautes",
      sections: [
        {
          title: "Améliorez vos matchs de futsal",
          content: `<p>Les matchs de futsal sont moins passionnants sans un tableau de score et un chrono clairs. Avez-vous déjà vécu des moments gênants : débattre du score ou ne pas savoir combien de minutes il reste ?</p>
<p>Un problème classique sur les terrains de futsal non professionnels est l'absence d'un vrai tableau d'affichage. Les modèles numériques physiques coûtent cher. Utiliser un chrono sur téléphone est souvent inefficace.</p>
<p>VersoKit apporte une solution intelligente : le Tableau de Score Futsal Digital. Cet outil web transforme instantanément votre ordinateur, tablette ou smartphone en un tableau de bord professionnel gratuit !</p>`
        },
        {
          title: "Pourquoi choisir le Scoreboard VersoKit ?",
          content: `<p>Conçu selon les règles internationales de la FIFA :</p>
<ol>
  <li><strong>Chronomètre flexible (Compte à rebours) :</strong> Réglez 20 minutes (pro) ou 15 minutes (amical). <strong>Pause & Reprise :</strong> Arrêtez le temps dès que le ballon sort pour simuler le "temps effectif".</li>
  <li><strong>Compteur de fautes (Indispensable !) :</strong> Le cumul des fautes est crucial. Notre outil suit les fautes de 0 à 5. <strong>Indicateur visuel :</strong> À la 5ème faute, tout le monde sait que la prochaine (la 6ème) entraîne un jet franc aux 10 mètres.</li>
  <li><strong>Apparence professionnelle :</strong> Personnalisez les noms d'équipes et les périodes.</li>
</ol>`
        },
        {
          title: "Avantages Techniques",
          content: `<ul>
  <li><strong>Basé sur le web, sans installation :</strong> Ouvrez votre navigateur et jouez.</li>
  <li><strong>Mode plein écran :</strong> Pour un rendu TV.</li>
  <li><strong>Mode Hors-ligne :</strong> Continue de fonctionner même sans connexion après chargement.</li>
  <li><strong>Responsif :</strong> S'adapte à tous les écrans (TV via HDMI, Tablettes).</li>
</ul>`
        }
      ]
    },
    it: {
      title: "Tabellone Segnapunti Calcio a 5 Online: Gratis, Timer & Falli",
      sections: [
        {
          title: "Migliora le tue partite di futsal",
          content: `<p>Le partite di calcio a 5 sono meno coinvolgenti senza un tabellone e un cronometro chiari. Vi è mai capitato di discutere sul punteggio o sul tempo rimanente?</p>
<p>Un problema classico nei campi non professionali è la mancanza di un tabellone adeguato. Quelli fisici costano molto. Usare uno smartphone è spesso inefficace.</p>
<p>VersoKit offre la soluzione: il Tabellone Segnapunti Digitale. Trasforma istantaneamente il tuo Laptop, Tablet o Smartphone in un tabellone professionale gratuitamente!</p>`
        },
        {
          title: "Perché usare il segnapunti VersoKit?",
          content: `<p>Progettato seguendo le regole internazionali FIFA:</p>
<ol>
  <li><strong>Timer di gara flessibile (Countdown):</strong> Imposta 20 minuti (pro) o 15 minuti. <strong>Pausa & Ripresa:</strong> Ferma il tempo a palla ferma per il "tempo effettivo".</li>
  <li><strong>Conteggio Falli (Fondamentale!):</strong> Nel futsal i falli accumulati sono decisivi. Tracciamo i falli da 0 a 5. <strong>Indicatore Visivo:</strong> Al 5° fallo, tutti sapranno che il prossimo (il 6°) comporterà un tiro libero dal secondo dischetto.</li>
  <li><strong>Look Professionale:</strong> Personalizza nomi squadre e periodi di gioco.</li>
</ol>`
        },
        {
          title: "Vantaggi Tecnici",
          content: `<ul>
  <li><strong>Web-based, nessuna installazione:</strong> Apri il browser e sei pronto.</li>
  <li><strong>Modalità schermo intero:</strong> Effetto TV professionale.</li>
  <li><strong>Funziona offline:</strong> Una volta caricato, continua a funzionare anche senza internet.</li>
  <li><strong>Responsivo:</strong> Si adatta a TV (via HDMI) o tablet.</li>
</ul>`
        }
      ]
    }
  },
  "image-resizer": {
    en: {
      title: "Image Resizer Online: Change Photo Dimensions Privately",
      sections: [
        {
          title: "Privacy-First Image Resizing",
          content: `<p>Need to change image dimensions for Instagram, TikTok, or Passport photos without compromising quality? Most online tools upload your photos to their servers, posing a privacy risk.</p>
<p>VersoKit Image Resizer is different. It uses modern browser technology to process your images 100% locally on your device. Your sensitive photos never leave your computer or phone.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Pixel Perfect Control:</strong> Set exact width and height in pixels.</li>
  <li><strong>Lock Aspect Ratio:</strong> Maintain proportions automatically so your images don't look stretched.</li>
  <li><strong>Quality Settings:</strong> Adjust the compression level to balance file size and visual clarity.</li>
  <li><strong>No Server Upload:</strong> Instant processing with maximum privacy.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Ubah Ukuran Gambar Online: Ubah Dimensi Foto dengan Aman",
      sections: [
        {
          title: "Ubah Ukuran Foto dengan Jaminan Privasi",
          content: `<p>Butuh mengubah ukuran foto untuk Instagram, TikTok, atau Paspor tanpa mengurangi kualitas? Kebanyakan alat online mengunggah foto Anda ke server mereka, yang berisiko bagi privasi.</p>
<p>VersoKit Image Resizer berbeda. Kami menggunakan teknologi browser modern untuk memproses gambar Anda 100% secara lokal di perangkat Anda. Foto sensitif Anda tidak pernah meninggalkan komputer atau HP Anda.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Kontrol Piksel Presisi:</strong> Atur lebar dan tinggi tepat dalam piksel.</li>
  <li><strong>Kunci Rasio Aspek:</strong> Jaga proporsi otomatis agar gambar tidak terlihat gepeng atau tertarik.</li>
  <li><strong>Pengaturan Kualitas:</strong> Atur tingkat kompresi untuk menyeimbangkan ukuran file dan kejelasan visual.</li>
  <li><strong>Tanpa Upload Server:</strong> Proses instan dengan privasi maksimal.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Bildgröße ändern Online: Abmessungen privat anpassen",
      sections: [
        {
          title: "Datenschutzfreundliche Größenänderung",
          content: `<p>Ändern Sie Bildgrößen für Instagram oder Pässe. 100% im Browser verarbeitet, kein Server-Upload.</p>`
        }
      ]
    },
    es: {
      title: "Redimensionar Imagen Online: Cambia dimensiones con privacidad",
      sections: [
        {
          title: "Redimensionado Seguro",
          content: `<p>Cambia el tamaño para Instagram o Pasaporte. Procesado 100% en tu navegador sin subir archivos al servidor.</p>`
        }
      ]
    },
    pt: {
      title: "Redimensionar Imagem Online: Mude as dimensões com segurança",
      sections: [
        {
          title: "Redimensionamento Seguro",
          content: `<p>Redimensione para Instagram ou Pasaporte. Processado 100% no navegador para total privacidade.</p>`
        }
      ]
    },
    fr: {
      title: "Redimensionner Image Online : Changez les dimensions en toute sécurité",
      sections: [
        {
          title: "Redimensionnement Sécurisé",
          content: `<p>Redimensionnez vos photos pour Instagram ou Passeport. Traité à 100% dans votre navigateur sans envoi sur serveur.</p>`
        }
      ]
    },
    it: {
      title: "Ridimensiona Immagine Online: Cambia dimensioni in privato",
      sections: [
        {
          title: "Ridimensionamento Sicuro",
          content: `<p>Ridimensiona per Instagram o Passaporto. Elaborato al 100% nel browser per la massima sicurezza.</p>`
        }
      ]
    }
  },
  "image-cropper": {
    en: {
      title: "Image Cropper Online: Crop Photos to Custom Ratios",
      sections: [
        {
          title: "Easy & Private Photo Cropping",
          content: `<p>Crop your photos for social media profile pictures or cover photos instantly. Whether you need a perfect 1:1 square for Instagram or a 16:9 landscape for YouTube, our tool handles it with ease.</p>
<p><strong>Privacy Guaranteed:</strong> Like all VersoKit tools, the cropping happens entirely in your browser. We never see your images.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Standard Presets:</strong> Quickly select 1:1, 16:9, or 4:5 ratios.</li>
  <li><strong>Freeform Cropping:</strong> Drag the handles to select any custom area.</li>
  <li><strong>Zoom & Rotate:</strong> Fine-tune your selection with intuitive controls.</li>
  <li><strong>High Quality Export:</strong> Save your results in high resolution.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Potong Gambar Online: Potong Foto ke Rasio Kustom",
      sections: [
        {
          title: "Potong Foto Mudah & Privat",
          content: `<p>Potong foto Anda untuk foto profil media sosial atau foto sampul secara instan. Baik Anda butuh rasio kotak 1:1 untuk Instagram atau landscape 16:9 untuk YouTube, alat kami menanganinya dengan mudah.</p>
<p><strong>Jaminan Privasi:</strong> Seperti semua alat VersoKit, proses pemotongan terjadi sepenuhnya di browser Anda. Kami tidak pernah melihat gambar Anda.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Preset Standar:</strong> Pilih rasio 1:1, 16:9, atau 4:5 dengan cepat.</li>
  <li><strong>Pemotongan Bebas:</strong> Geser kotak untuk memilih area kustom apa pun.</li>
  <li><strong>Zoom & Putar:</strong> Atur pilihan Anda dengan kontrol yang intuitif.</li>
  <li><strong>Ekspor Kualitas Tinggi:</strong> Simpan hasil Anda dalam resolusi tinggi.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Bild zuschneiden Online: Fotos auf exakte Maße bringen",
      sections: [
        {
          title: "Fotos einfach zuschneiden",
          content: `<p>Bilder sofort auf exakte Verhältnisse (1:1, 16:9) zuschneiden. Kein Qualitätsverlust und 100% lokal im Browser.</p>`
        }
      ]
    },
    es: {
      title: "Cortar Imagen Online: Recorta fotos a ratios exactos",
      sections: [
        {
          title: "Recortar Fotos Fácilmente",
          content: `<p>Recorta tus imágenes a ratios exactos (1:1, 16:9). Sin pérdida de calidad y con privacidad total.</p>`
        }
      ]
    },
    pt: {
      title: "Cortar Imagem Online: Recorte fotos com precisão",
      sections: [
        {
          title: "Cortar Fotos Facilmente",
          content: `<p>Corte suas imagens em proporções exatas. Sem perda de qualidade e processado localmente no seu dispositivo.</p>`
        }
      ]
    },
    fr: {
      title: "Rogner Image Online : Rognez vos photos facilement",
      sections: [
        {
          title: "Rogner Facilement",
          content: `<p>Rognez vos images aux ratios exacts (1:1, 16:9). Pas de perte de qualité et respect total de la vie privée.</p>`
        }
      ]
    },
    it: {
      title: "Ritaglia Immagine Online: Ritaglia foto con semplicità",
      sections: [
        {
          title: "Ritaglia Foto Facilmente",
          content: `<p>Ritaglia le tue immagini in rapporti esatti. Nessuna perdita di qualità e protezione dei dati garantita.</p>`
        }
      ]
    }
  },
  "image-compressor": {
    en: {
      title: "Image Compressor Online: Reduce File Size Without Quality Loss",
      sections: [
        {
          title: "Optimize Your Images Instantly",
          content: `<p>Large image files can slow down your website or exceed email attachment limits. Our Image Compressor helps you shrink MBs to KBs in seconds.</p>
<p><strong>Secure Processing:</strong> Your files are never uploaded to our servers. All compression happens locally using your browser's power.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Multiple Formats:</strong> Supports JPG, PNG, and WEBP.</li>
  <li><strong>Quality Slider:</strong> You decide the balance between size and quality.</li>
  <li><strong>Real-time Preview:</strong> See the estimated file size before downloading.</li>
  <li><strong>Secure & Fast:</strong> No waiting for uploads or downloads to a remote server.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Kompres Gambar Online: Kecilkan Ukuran File Tanpa Hilang Kualitas",
      sections: [
        {
          title: "Optimalkan Gambar Anda Secara Instan",
          content: `<p>File gambar yang besar dapat memperlambat website Anda atau melebihi batas lampiran email. Kompresor Gambar kami membantu Anda mengecilkan MB menjadi KB dalam hitungan detik.</p>
<p><strong>Proses Aman:</strong> File Anda tidak pernah diunggah ke server kami. Semua kompresi terjadi secara lokal menggunakan daya browser Anda.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Banyak Format:</strong> Mendukung JPG, PNG, dan WEBP.</li>
  <li><strong>Slider Kualitas:</strong> Anda menentukan keseimbangan antara ukuran dan kualitas.</li>
  <li><strong>Pratinjau Real-time:</strong> Lihat estimasi ukuran file sebelum mengunduh.</li>
  <li><strong>Aman & Cepat:</strong> Tidak perlu menunggu upload atau download ke server jauh.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Bildkompressor Online: Dateigröße sicher reduzieren",
      sections: [
        {
          title: "Dateigröße reduzieren",
          content: `<p>Sichere Bildkomprimierung. Reduzieren Sie MB in KB ohne Server-Uploads direkt im Browser.</p>`
        }
      ]
    },
    es: {
      title: "Compresor de Imagen Online: Reduce tamaño sin perder calidad",
      sections: [
        {
          title: "Reducir Tamaño",
          content: `<p>Compresión segura. Reduce MB a KB al instante sin subir archivos a servidores externos.</p>`
        }
      ]
    },
    pt: {
      title: "Compressor de Imagem Online: Reduza o tamanho do arquivo",
      sections: [
        {
          title: "Reduzir Tamanho",
          content: `<p>Compressão segura. Reduza MB para KB instantaneamente sem necessidade de upload.</p>`
        }
      ]
    },
    fr: {
      title: "Compresseur d'Image Online : Réduisez la taille sans perte de qualité",
      sections: [
        {
          title: "Réduire la taille",
          content: `<p>Compression sécurisée. Réduisez les MB en KB sans envoi sur serveur pour une confidentialité totale.</p>`
        }
      ]
    },
    it: {
      title: "Compressore Immagini Online: Riduci dimensioni senza perdere qualità",
      sections: [
        {
          title: "Riduci Dimensioni",
          content: `<p>Compressione sicura. Riduci MB in KB senza caricamenti su server esterni.</p>`
        }
      ]
    }
  },
  "invoice": {
    en: {
      title: "Free Invoice Generator: Create Professional PDF Invoices (1 Minute)",
      sections: [
        {
          title: "Why Should You Use This Tool?",
          content: `<p>Still sending invoices to clients only via WhatsApp chat? Or using Excel files that look messy when opened on someone else's phone? Be careful, untidy billing can make your business image look amateur. Even worse, clients might hesitate or delay your payment.</p>
<p>Accounting software like QuickBooks or Xero is great, but the subscription fees are expensive. Using Excel/Word is free, but prone to formula errors and formatting often shifts. Our tool combines the advantages of both: Free yet Professional.</p>
<ul>
  <li><strong>Automatic & Error-Proof:</strong> Humans often make errors, especially when adding up many items. With this tool, you don't need a calculator. Simply enter the Quantity (Qty) and Unit Price, and the system will automatically calculate the Total, including Tax (VAT) or Discount calculations. 100% accuracy.</li>
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
        },
        {
          title: "Who is This Invoice Suitable For?",
          content: `<ul>
  <li><strong>Freelancers:</strong> Graphic designers, writers, freelance programmers who need a quick bill to disburse a down payment (DP).</li>
  <li><strong>SMEs & Online Shops:</strong> Catering sellers, clothing stores, even shoe laundry services who want tidier bookkeeping.</li>
  <li><strong>Consultants & Professional Services:</strong> Legal services, business consultants, wedding photographers, even AC technicians.</li>
</ul>`
        },
        {
          title: "How to Create an Invoice in 4 Steps",
          content: `<ol>
  <li><strong>Fill in Identity:</strong> Complete the "From" column (Your Business Info) and "To" (Client Info). Don't forget to upload a logo if you have one.</li>
  <li><strong>Enter Goods/Services:</strong> Type item names, short descriptions, quantities, and unit prices.</li>
  <li><strong>Add Tax/Discount:</strong> Click the add tax button (e.g., 11% VAT) or discount if you are running a promotion. The total will be calculated automatically.</li>
  <li><strong>Download PDF:</strong> Double-check the data (don't forget the due date), then click the "Download Invoice" button. Done!</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Invoice Generator Gratis: Buat Invoice PDF Profesional (1 Menit)",
      sections: [
        {
          title: "Mengapa Anda Wajib Pakai Alat Ini?",
          content: `<p>Masih mengirim tagihan ke klien hanya lewat chat WhatsApp? Atau masih menggunakan file Excel yang formatnya berantakan saat dibuka di HP orang lain? Hati-hati, cara menagih yang tidak rapi bisa membuat citra bisnis Anda terlihat amatir. Lebih buruk lagi, klien mungkin ragu atau menunda pembayaran Anda.</p>
<p>Software akuntansi seperti QuickBooks atau Xero memang bagus, tapi biaya langganannya mahal. Menggunakan Excel/Word gratis, tapi rentan salah rumus dan formatnya sering geser. Alat kami menggabungkan kelebihan keduanya: Gratis tapi Profesional.</p>
<ul>
  <li><strong>Otomatis & Anti Salah Hitung:</strong> Manusia sering melakukan human error, apalagi saat menjumlahkan banyak barang. Dengan alat ini, Anda tidak perlu kalkulator. Cukup masukkan Jumlah (Qty) dan Harga Satuan, sistem akan otomatis menghitung Total, termasuk kalkulasi Pajak (PPN) atau Diskon jika ada. Akurasi 100%.</li>
  <li><strong>Format PDF Standar Industri:</strong> Jangan kirim file Word (.doc) yang bisa diedit sembarangan oleh klien. Alat ini menghasilkan file PDF yang terlihat elegan, bersih, dan aman (tidak mudah diubah isinya). PDF juga menjamin tampilan invoice Anda tetap rapi baik dibuka di Laptop maupun HP.</li>
  <li><strong>Dukungan Mata Uang Global:</strong> Punya klien dari luar negeri? Tidak masalah. Anda bisa mengubah mata uang dari Rupiah (IDR) ke Dollar (USD), Euro (EUR), atau mata uang lainnya sesuai kebutuhan kontrak kerja Anda.</li>
</ul>`
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
        },
        {
          title: "Siapa yang Cocok Menggunakan Invoice Ini?",
          content: `<ul>
  <li><strong>Freelancer:</strong> Desainer grafis, penulis, programmer lepas yang butuh tagihan cepat untuk cairkan down payment (DP).</li>
  <li><strong>UMKM & Online Shop:</strong> Penjual katering, toko baju, hingga jasa cuci sepatu yang ingin pembukuan lebih rapi.</li>
  <li><strong>Konsultan & Jasa Profesional:</strong> Jasa hukum, konsultan bisnis, fotografer wedding, hingga teknisi AC.</li>
</ul>`
        },
        {
          title: "Cara Membuat Invoice dalam 4 Langkah",
          content: `<ol>
  <li><strong>Isi Identitas:</strong> Lengkapi kolom "Dari" (Info Bisnis Anda) dan "Kepada" (Info Klien). Jangan lupa upload logo jika ada.</li>
  <li><strong>Masukkan Barang/Jasa:</strong> Ketik nama barang, deskripsi singkat, kuantitas, dan harga satuan.</li>
  <li><strong>Tambahkan Pajak/Diskon:</strong> Klik tombol tambah pajak (misal PPN 11%) atau diskon jika Anda sedang promo. Total akan terhitung otomatis.</li>
  <li><strong>Download PDF:</strong> Periksa kembali data (jangan lupa tanggal jatuh tempo), lalu klik tombol "Download Invoice". Selesai!</li>
</ol>`
        }
      ]
    },
    de: {
      title: "Kostenloser Rechnungsgenerator: Professionelle PDF-Rechnungen erstellen (1 Minute)",
      sections: [
        {
          title: "Warum sollten Sie dieses Tool nutzen?",
          content: `<p>Senden Sie Rechnungen immer noch nur per WhatsApp an Kunden? Oder verwenden Sie Excel-Dateien, die auf anderen Telefonen unordentlich aussehen? Vorsicht, eine unordentliche Abrechnung kann Ihr Geschäftsimage amateurhaft wirken lassen. Buchhaltungssoftware wie QuickBooks oder Xero ist zwar gut, aber die Abonnements sind teuer. Unser Tool vereint das Beste aus beiden Welten: Kostenlos und doch professionell.</p>
<ul>
  <li><strong>Automatisch & Fehlersicher:</strong> Geben Sie einfach Menge und Einzelpreis ein, und das System berechnet automatisch den Gesamtbetrag inklusive MwSt. 100 % Genauigkeit.</li>
  <li><strong>Industriestandard PDF-Format:</strong> Dieses Tool erstellt elegante, saubere und sichere PDF-Dateien, die auf jedem Gerät perfekt aussehen.</li>
  <li><strong>Globale Währungsunterstützung:</strong> Ändern Sie die Währung je nach den Anforderungen Ihres Kunden.</li>
</ul>`
        },
        {
          title: "Top-Features: Privatsphäre & Branding",
          content: `<ul>
  <li><strong>100 % Privatsphäre (Client-Side):</strong> Kundendaten und Geldbeträge werden nur in Ihrem Browser verarbeitet. Wir speichern nichts auf unseren Servern.</li>
  <li><strong>Unternehmenslogo hochladen:</strong> Laden Sie Ihr Markenlogo hoch, um Ihre Glaubwürdigkeit zu erhöhen.</li>
  <li><strong>Kein Wasserzeichen:</strong> Das heruntergeladene PDF ist sauber und professionell.</li>
</ul>`
        }
      ]
    },
    es: {
      title: "Generador de Facturas Gratis: Crea Facturas PDF Profesionales (1 Minuto)",
      sections: [
        {
          title: "¿Por qué deberías usar esta herramienta?",
          content: `<p>¿Sigues enviando facturas a clientes solo por WhatsApp? ¿O usas archivos Excel que se ven mal en otros móviles? Una facturación descuidada puede dañar tu imagen profesional. Los programas de contabilidad son caros; nuestra herramienta es gratuita y profesional.</p>
<ul>
  <li><strong>Automática y sin errores:</strong> Ingresa cantidad y precio, y el sistema calculará el total con impuestos automáticamente.</li>
  <li><strong>Formato PDF estándar:</strong> Genera documentos elegantes y seguros que mantienen su formato en cualquier dispositivo.</li>
  <li><strong>Soporte multimoneda:</strong> Cambia la moneda según las necesidades de tu contrato.</li>
</ul>`
        },
        {
          title: "Privacidad y Marca",
          content: `<ul>
  <li><strong>100% Privacidad:</strong> Los datos se procesan solo en tu navegador. No guardamos información en nuestros servidores.</li>
  <li><strong>Sube tu Logo:</strong> Personaliza tus facturas para aumentar tu credibilidad.</li>
  <li><strong>Sin marcas de agua:</strong> Resultados limpios y profesionales listos para enviar.</li>
</ul>`
        }
      ]
    },
    pt: {
      title: "Gerador de Faturas Grátis: Crie Faturas em PDF Profissionais (1 Minuto)",
      sections: [
        {
          title: "Por que deve usar esta ferramenta?",
          content: `<p>Ainda envia faturas apenas por WhatsApp? Ou usa Excel que fica desconfigurado noutros telemóveis? Uma faturação desorganizada pode parecer amadora. Softwares de contabilidade são caros; a nossa ferramenta é gratuita e profissional.</p>
<ul>
  <li><strong>Automática e sem erros:</strong> Insira a quantidade e o preço e o sistema calcula o total com impostos automaticamente.</li>
  <li><strong>PDF Padrão:</strong> Gere documentos seguros e elegantes que mantêm o aspeto em qualquer ecrã.</li>
  <li><strong>Moedas Globais:</strong> Suporte para várias moedas conforme o seu cliente.</li>
</ul>`
        },
        {
          title: "Privacidade e Branding",
          content: `<ul>
  <li><strong>100% Privacidade:</strong> Dados processados localmente no seu browser. Nada é guardado nos nossos servidores.</li>
  <li><strong>Logótipo do Negócio:</strong> Adicione a sua marca para maior credibilidade.</li>
  <li><strong>Sem Marca de Água:</strong> PDF limpo e profissional sem publicidade.</li>
</ul>`
        }
      ]
    },
    fr: {
      title: "Générateur de Factures Gratuit : Créez des Factures PDF Professionnelles (1 Minute)",
      sections: [
        {
          title: "Pourquoi utiliser cet outil ?",
          content: `<p>Envoyez-vous toujours vos factures par WhatsApp ? Ou utilisez-vous des fichiers Excel mal formatés ? Une facturation négligée peut nuire à votre image de marque. Les logiciels comptables sont chers ; notre outil est gratuit et professionnel.</p>
<ul>
  <li><strong>Automatique et sans erreur :</strong> Saisissez la quantité et le prix, le total avec taxes est calculé instantanément.</li>
  <li><strong>Format PDF Standard :</strong> Des documents élégants et sécurisés qui restent parfaits sur tous les écrans.</li>
  <li><strong>Devises mondiales :</strong> Changez la devise selon les besoins de vos clients.</li>
</ul>`
        },
        {
          title: "Confidentialité et Image de Marque",
          content: `<ul>
  <li><strong>100% Confidentialité :</strong> Données traitées localement dans votre navigateur. Rien n'est stocké sur nos serveurs.</li>
  <li><strong>Logo d'entreprise :</strong> Ajoutez votre logo pour renforcer votre crédibilité.</li>
  <li><strong>Sans filigrane :</strong> Des factures propres et professionnelles sans mention publicitaire.</li>
</ul>`
        }
      ]
    },
    it: {
      title: "Generatore Fatture Gratuito: Crea Fatture PDF Professionali (1 Minuto)",
      sections: [
        {
          title: "Perché dovresti usare questo strumento?",
          content: `<p>Invii ancora fatture solo via WhatsApp? O usi file Excel che si vedono male su altri telefoni? Una fatturazione disordinata può far sembrare la tua attività amatoriale. I software di contabilità sono costosi; il nostro strumento è gratuito e professionale.</p>
<ul>
  <li><strong>Automatico e preciso:</strong> Inserisci quantità e prezzo e il sistema calcola il totale comprensivo di tasse.</li>
  <li><strong>Standard PDF:</strong> Genera file eleganti e sicuri che mantengono il formato su ogni dispositivo.</li>
  <li><strong>Supporto Valute:</strong> Cambia la valuta in base al contratto di lavoro.</li>
</ul>`
        },
        {
          title: "Privacy e Branding",
          content: `<ul>
  <li><strong>Privacy 100%:</strong> I dati vengono elaborati solo nel tuo browser. Non salviamo nulla sui server.</li>
  <li><strong>Carica Logo:</strong> Aggiungi il tuo logo per aumentare la tua credibilità.</li>
  <li><strong>Senza filigrana:</strong> Risultati puliti e professionali senza marchi esterni.</li>
</ul>`
        }
      ]
    }
  },
  "kanban": {
    en: {
      title: "Kanban Board Online: Visual Task Management & Workflow",
      sections: [
        {
          title: "What is a Kanban Board?",
          content: `<p>Do you feel overwhelmed with too many tasks but confused about where to start? Or perhaps your stick-it notes are scattered and often lost? It's time to use a visual management system. <strong>Kanban</strong> is a method used by professional teams (like Toyota or software developers) to visualize work and maximize efficiency.</p>
<p>VersoKit Kanban Board is a digital version of this board. It allows you to see the "flow" of your work from the planning stage to completion. The concept is simple: moving cards from one column to another as tasks progress.</p>`
        },
        {
          title: "Why Use Our Kanban Tool?",
          content: `<p>We designed this tool to be the simplest and fastest way to organize your life or small business:</p>
<ul>
  <li><strong>1. 100% Privacy (LocalStorage):</strong> Unlike Trello or Jira which store your data on their servers, VersoKit processes everything in your browser. Your task descriptions and projects are 100% your own secret.</li>
  <li><strong>2. Visual Workflow:</strong> See everything at a glance. What needs to be done (To Do), what is currently being worked on (In Progress), and what is finished (Done). This visual clarity reduces mental stress.</li>
  <li><strong>3. Drag & Drop Ease:</strong> Move tasks with one click or swipe. It's satisfying to move a card to the 'Done' column!</li>
  <li><strong>4. Offline Support:</strong> Keep managing your tasks even without an internet connection. Perfect for working in areas with poor signal.</li>
</ul>`
        },
        {
          title: "Who is This Kanban Board For?",
          content: `<ul>
  <li><strong>Students & Researchers:</strong> Managing assignments, thesis chapters, or study schedules.</li>
  <li><strong>Freelancers:</strong> Tracking multiple client projects simultaneously.</li>
  <li><strong>Solo-Preneurs:</strong> Managing daily operations of an online shop or service.</li>
  <li><strong>Anyone with a 'To-Do' list:</strong> If you have a list, you can Kanban it!</li>
</ul>`
        },
        {
          title: "How to Use Kanban in 3 Steps",
          content: `<ol>
  <li><strong>Add Cards:</strong> Type your task in the input box and click (+). It will appear in the 'To Do' column.</li>
  <li><strong>Progress Tasks:</strong> As you start working, move the card to 'In Progress'. When finished, move it to 'Done'.</li>
  <li><strong>Analyze & Reset:</strong> See how many tasks you've completed today. You can delete individual tasks or reset the board for a new project.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Kanban Board Online: Manajemen Tugas Visual & Alur Kerja",
      sections: [
        {
          title: "Apa Itu Kanban Board?",
          content: `<p>Apakah Anda merasa kewalahan dengan terlalu banyak tugas tapi bingung harus mulai dari mana? Atau mungkin catatan tempel (stick-it notes) Anda berantakan dan sering hilang? Saatnya menggunakan sistem manajemen visual. <strong>Kanban</strong> adalah metode yang digunakan tim profesional (seperti Toyota atau pengembang software) untuk memvisualisasikan pekerjaan dan memaksimalkan efisiensi.</p>
<p>VersoKit Kanban Board adalah versi digital dari papan ini. Alat ini memungkinkan Anda melihat "aliran" pekerjaan Anda dari tahap rencana hingga selesai. Konsepnya sederhana: memindahkan kartu dari satu kolom ke kolom lain seiring kemajuan tugas.</p>`
        },
        {
          title: "Mengapa Menggunakan Alat Kanban Kami?",
          content: `<p>Kami merancang alat ini untuk menjadi cara termudah dan tercepat untuk mengorganisir hidup atau bisnis kecil Anda:</p>
<ul>
  <li><strong>1. Privasi 100% (LocalStorage):</strong> Berbeda dengan Trello atau Jira yang menyimpan data Anda di server mereka, VersoKit memproses semuanya di browser Anda. Deskripsi tugas dan proyek Anda 100% rahasia milik Anda sendiri.</li>
  <li><strong>2. Alur Kerja Visual:</strong> Lihat semuanya dalam sekejap. Apa yang harus dikerjakan (To Do), apa yang sedang dikerjakan (In Progress), dan apa yang sudah selesai (Done). Kejelasan visual ini mengurangi stres mental.</li>
  <li><strong>3. Kemudahan Drag & Drop:</strong> Pindahkan tugas dengan sekali klik atau geser. Ada kepuasan tersendiri saat memindahkan kartu ke kolom 'Selesai'!</li>
  <li><strong>4. Dukungan Offline:</strong> Tetap kelola tugas Anda meskipun tidak ada koneksi internet. Cocok untuk bekerja di area yang susah sinyal.</li>
</ul>`
        },
        {
          title: "Siapa yang Cocok Menggunakan Kanban Board Ini?",
          content: `<ul>
  <li><strong>Pelajar & Mahasiswa:</strong> Mengelola tugas kuliah, bab skripsi, atau jadwal belajar.</li>
  <li><strong>Freelancer:</strong> Melacak beberapa proyek klien secara bersamaan.</li>
  <li><strong>Solo-Preneur:</strong> Mengatur operasional harian online shop atau jasa.</li>
  <li><strong>Siapapun yang punya 'Daftar Tugas':</strong> Jika Anda punya daftar, Anda bisa melakukan Kanban!</li>
</ul>`
        },
        {
          title: "Cara Menggunakan Kanban dalam 3 Langkah",
          content: `<ol>
  <li><strong>Tambah Kartu:</strong> Ketik tugas Anda di kotak input dan klik (+). Tugas akan muncul di kolom 'To Do'.</li>
  <li><strong>Majukan Tugas:</strong> Saat mulai mengerjakan, pindahkan kartu ke 'In Progress'. Jika sudah rampung, pindahkan ke 'Done'.</li>
  <li><strong>Analisa & Reset:</strong> Lihat berapa banyak tugas yang berhasil Anda selesaikan hari ini. Anda bisa menghapus tugas satu per satu atau meriset papan untuk proyek baru.</li>
</ol>`
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
    },
    es: {
      title: "Tablero Kanban Online: Gestión Visual de Tareas y Flujo de Trabajo",
      sections: [
        {
          title: "¿Qué es un Tablero Kanban?",
          content: `<p>¿Se siente abrumado por las tareas? <strong>Kanban</strong> es un método visual para gestionar el trabajo de manera eficiente.</p><p>El tablero Kanban de VersoKit le permite ver el progreso de sus tareas desde el inicio hasta el final.</p>`
        },
        {
          title: "Características Principales",
          content: `<ul><li><strong>Privacidad 100%:</strong> Sus datos se quedan en su navegador.</li><li><strong>Flujo Visual:</strong> Organize tareas en 'Por hacer', 'En progreso' y 'Hecho'.</li><li><strong>Fácil de usar:</strong> Arrastre y suelte tarjetas para actualizar su estado.</li></ul>`
        }
      ]
    },
    pt: {
      title: "Quadro Kanban Online: Gestão Visual de Tarefas e Fluxo de Trabalho",
      sections: [
        {
          title: "O que é um Quadro Kanban?",
          content: `<p>Sente-se sobrecarregado? O <strong>Kanban</strong> é um método visual para organizar tarefas e aumentar a produtividade.</p><p>Com o quadro Kanban do VersoKit, você visualiza o progresso do seu trabalho de forma clara e simples.</p>`
        },
        {
          title: "Recursos Principais",
          content: `<ul><li><strong>Privacidade 100%:</strong> Dados processados localmente no seu dispositivo.</li><li><strong>Fluxo de Trabalho:</strong> Colunas para 'A fazer', 'Em progresso' e 'Concluído'.</li><li><strong>Simplicidade:</strong> Arraste as tarefas conforme elas avançam.</li></ul>`
        }
      ]
    },
    fr: {
      title: "Tableau Kanban en Ligne : Gestion Visuelle des Tâches",
      sections: [
        {
          title: "Qu'est-ce qu'un tableau Kanban ?",
          content: `<p>Vous avez trop de choses à faire ? Le <strong>Kanban</strong> est une méthode visuelle pour organiser vos tâches efficacement.</p><p>Le tableau Kanban de VersoKit vous permet de suivre l'avancement de vos projets en un coup d'œil.</p>`
        },
        {
          title: "Points Forts",
          content: `<ul><li><strong>Confidentialité totale :</strong> Les données restent dans votre navigateur.</li><li><strong>Organisation visuelle :</strong> Colonnes 'À faire', 'En cours' et 'Terminé'.</li><li><strong>Utilisation intuitive :</strong> Glissez-déposez vos tâches facilement.</li></ul>`
        }
      ]
    },
    it: {
      title: "Lavagna Kanban Online: Gestione Visuale delle Attività",
      sections: [
        {
          title: "Cos'è una lavagna Kanban?",
          content: `<p>Troppi impegni? Il <strong>Kanban</strong> è un metodo visuale per gestire il lavoro e massimizzare l'efficienza.</p><p>La lavagna Kanban di VersoKit ti aiuta a monitorare il flusso di lavoro dalla pianificazione al completamento.</p>`
        },
        {
          title: "Caratteristiche principali",
          content: `<ul><li><strong>Privacy 100%:</strong> I dati vengono salvati localmente nel tuo browser.</li><li><strong>Workflow visivo:</strong> Organizza i compiti in 'Da fare', 'In corso' e 'Fatto'.</li><li><strong>Interfaccia rapida:</strong> Sposta le schede con un clic.</li></ul>`
        }
      ]
    }
  },
  "pdf-merge": {
    en: {
      title: "PDF Merge Online: Combine Multiple PDF Files Instantly",
      sections: [
        {
          title: "Combine PDFs Securely",
          content: `<p>Need to join several PDF documents into one single file? VersoKit PDF Merge allows you to combine your documents instantly without any software installation.</p>
<p><strong>100% Client-Side Processing:</strong> Your sensitive documents are never uploaded to our servers. All merging happens right in your browser, ensuring your data stays private and secure.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Drag & Drop Ordering:</strong> Easily rearrange the order of your files before merging.</li>
  <li><strong>Privacy First:</strong> Documents are processed locally on your device.</li>
  <li><strong>No File Limits:</strong> Merge as many files as your device's memory can handle.</li>
  <li><strong>Free Forever:</strong> No subscriptions or hidden fees.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Gabung PDF Online: Satukan Beberapa File PDF Sekaligus",
      sections: [
        {
          title: "Gabungkan PDF dengan Aman",
          content: `<p>Perlu menyatukan beberapa dokumen PDF menjadi satu file? VersoKit PDF Merge memungkinkan Anda menggabungkan dokumen secara instan tanpa instalasi software apa pun.</p>
<p><strong>Proses 100% di Browser:</strong> Dokumen sensitif Anda tidak pernah diunggah ke server kami. Semua penggabungan terjadi langsung di browser Anda, memastikan data Anda tetap privat dan aman.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Atur Urutan Mudah:</strong> Geser dan urutkan file sebelum digabung.</li>
  <li><strong>Privasi Utama:</strong> Dokumen diproses secara lokal di perangkat Anda.</li>
  <li><strong>Tanpa Batas File:</strong> Gabungkan file sebanyak daya tampung memori perangkat Anda.</li>
  <li><strong>Gratis Selamanya:</strong> Tanpa biaya langganan atau biaya tersembunyi.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "PDF zusammenfügen Online: Dokumente sicher verbinden",
      sections: [
        {
          title: "Dokumente kombinieren",
          content: `<p>Mehrere PDFs zu einer Datei verbinden. Private Offline-Verarbeitung direkt im Browser ohne Upload.</p>`
        }
      ]
    },
    es: {
      title: "Combinar PDF Online: Une tus archivos de forma segura",
      sections: [
        {
          title: "Unir Documentos",
          content: `<p>Combina varios archivos PDF en uno. Procesamiento privado y offline sin subir datos a servidores externos.</p>`
        }
      ]
    },
    pt: {
      title: "Combinar PDF Online: Una os seus documentos com facilidade",
      sections: [
        {
          title: "Mesclar Documentos",
          content: `<p>Una vários arquivos PDF em um só. Procesamento privado e offline para garantir a segurança dos seus dados.</p>`
        }
      ]
    },
    fr: {
      title: "Fusionner PDF Online : Combinez vos fichiers instantanément",
      sections: [
        {
          title: "Combiner des PDF",
          content: `<p>Fusionnez plusieurs PDF en un seul. Traitement privé et hors ligne dans votre navigateur sans transfert de données.</p>`
        }
      ]
    },
    it: {
      title: "Unisci PDF Online: Combina i tuoi documenti in privato",
      sections: [
        {
          title: "Combina Documenti",
          content: `<p>Unisci più file PDF in uno solo. Elaborazione privata e offline direttamente sul tuo dispositivo.</p>`
        }
      ]
    }
  },
  "csv-helper": {
    en: {
      title: "CSV Cleaner Online: Sanitize and Clean Your Data",
      sections: [
        {
          title: "Prepare Your Data for Analysis",
          content: `<p>Messy CSV files can ruin your data analysis. Our CSV Cleaner helps you sanitize your data instantly before importing it into Excel, Google Sheets, or a database.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Remove Duplicates:</strong> Automatically detect and delete identical rows.</li>
  <li><strong>Trim Whitespace:</strong> Remove extra spaces from the beginning or end of your data cells.</li>
  <li><strong>Data Preview:</strong> See the first few rows of your cleaned data before downloading.</li>
  <li><strong>Secure:</strong> Processing happens entirely in your browser.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Pembersih CSV Online: Rapikan dan Bersihkan Data Anda",
      sections: [
        {
          title: "Siapkan Data untuk Analisis",
          content: `<p>File CSV yang berantakan bisa merusak analisis data Anda. Pembersih CSV kami membantu merapikan data secara instan sebelum diimpor ke Excel, Google Sheets, atau database.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Hapus Duplikat:</strong> Deteksi dan hapus baris yang identik secara otomatis.</li>
  <li><strong>Rapikan Spasi (Trim):</strong> Hapus spasi berlebih di awal atau akhir sel data.</li>
  <li><strong>Pratinjau Data:</strong> Lihat beberapa baris pertama data yang sudah dibersihkan sebelum diunduh.</li>
  <li><strong>Aman:</strong> Proses terjadi sepenuhnya di browser Anda.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "CSV-Reiniger Online: Daten für Excel vorbereiten",
      sections: [
        {
          title: "Daten bereinigen",
          content: `<p>Duplikate entfernen und Leerzeichen aus CSV-Dateien kürzen. Sicher und lokal im Browser verarbeitet.</p>`
        }
      ]
    },
    es: {
      title: "Limpiador CSV Online: Sanea tus datos al instante",
      sections: [
        {
          title: "Sanear Datos",
          content: `<p>Elimina duplicados y recorta espacios en archivos CSV al instante para un análisis de datos perfecto.</p>`
        }
      ]
    },
    pt: {
      title: "Limpeza CSV Online: Limpe e organize seus dados",
      sections: [
        {
          title: "Limpar Dados",
          content: `<p>Remova duplicatas e limpe espaços em arquivos CSV instantaneamente no seu navegador.</p>`
        }
      ]
    },
    fr: {
      title: "Nettoyeur CSV Online : Nettoyez vos données de données",
      sections: [
        {
          title: "Nettoyer les données",
          content: `<p>Supprimez les doublons et les espaces inutiles de vos fichiers CSV pour une analyse précise.</p>`
        }
      ]
    },
    it: {
      title: "Pulitore CSV Online: Pulisci i tuoi dati in un clic",
      sections: [
        {
          title: "Pulisci Dati",
          content: `<p>Rimuovi duplicati e spazi dai file CSV istantaneamente. Massima sicurezza dei dati locali.</p>`
        }
      ]
    }
  },
  "calculator": {
    en: {
      title: "Material Calculator Online: Estimate Paint & Tiles Instantly",
      sections: [
        {
          title: "Professional Renovation Estimates",
          content: `<p>Planning a renovation? Avoid overbuying materials with our professional calculator. Estimate exactly how much paint or floor tiles you need for your project.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Area Calculation:</strong> LxWxH dimensions supported.</li>
  <li><strong>Opening Deduction:</strong> Automatically subtract area for doors and windows.</li>
  <li><strong>Cost Estimation:</strong> Input unit prices to get a total budget estimate.</li>
  <li><strong>Multi-Unit Support:</strong> Work with metric measurements easily.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Kalkulator Material Online: Estimasi Kebutuhan Cat & Ubin",
      sections: [
        {
          title: "Estimasi Renovasi Profesional",
          content: `<p>Berencana melakukan renovasi? Hindari kelebihan membeli bahan dengan kalkulator profesional kami. Hitung tepat berapa banyak cat atau ubin lantai yang Anda butuhkan.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Hitung Luas:</strong> Mendukung dimensi PxLxT.</li>
  <li><strong>Potongan Bukaan:</strong> Otomatis mengurangi luas area pintu dan jendela.</li>
  <li><strong>Estimasi Biaya:</strong> Masukkan harga satuan untuk mendapatkan estimasi total anggaran.</li>
  <li><strong>Dukungan Satuan:</strong> Bekerja dengan satuan metrik dengan mudah.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Baumaterial-Rechner Online: Farbe und Fliesen schätzen",
      sections: [
        {
          title: "Bedarf schätzen",
          content: `<p>Berechnen Sie den Farb- und Fliesenbedarf für Ihre Renovierung inkl. Kostenkalkulation.</p>`
        }
      ]
    },
    es: {
      title: "Calculadora de Materiales Online: Estima pintura y azulejos",
      sections: [
        {
          title: "Estimar Materiales",
          content: `<p>Calcula pintura y azulejos para tus proyectos de renovación de forma fácil y precisa.</p>`
        }
      ]
    },
    pt: {
      title: "Calculadora de Materiais Online: Estime tinta e pisos",
      sections: [
        {
          title: "Estimativa de Materiais",
          content: `<p>Calcule a necessidade de tinta e pisos para sua reforma e controle seus custos.</p>`
        }
      ]
    },
    fr: {
      title: "Calculateur de Matériaux Online : Estimez vos besoins",
      sections: [
        {
          title: "Estimer les matériaux",
          content: `<p>Calculez vos besoins en peinture et carrelage pour vos travaux de rénovation.</p>`
        }
      ]
    },
    it: {
      title: "Calcolatore Materiali Online: Stima vernice e piastrelle",
      sections: [
        {
          title: "Stima Materiali",
          content: `<p>Calcola il fabbisogno di vernice e piastrelle per la ristrutturazione della tua casa.</p>`
        }
      ]
    }
  },
  "tournament": {
    en: {
      title: "Tournament Manager Pro: Create Brackets & League Standings",
      sections: [
        {
          title: "Manage Tournaments Like a Pro",
          content: `<p>Organizing a futsal, e-sports, or community tournament? We know how stressful managing dozens of teams can be.</p>
<p>Stop wasting time with manual brackets or complex Excel formulas. Use VersoKit Tournament Manager Pro to create knockout brackets or league schedules in seconds.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Instant Knockout Brackets:</strong> Automated tree structures for 4 to 32 teams.</li>
  <li><strong>Auto-Standings:</strong> Insert match scores and the league table updates in real-time.</li>
  <li><strong>Fair Drawing:</strong> Use the "Shuffle" button to randomize opponents instantly.</li>
  <li><strong>Export to Image:</strong> Download your bracket or standings to share on WhatsApp or social media.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Tournament Manager Pro: Buat Bagan & Klasemen Liga Otomatis",
      sections: [
        {
          title: "Kelola Turnamen Layaknya Profesional",
          content: `<p>Sedang sibuk menjadi panitia turnamen Futsal, E-Sports, atau lomba komunitas? Kami tahu betapa pusingnya mengelola puluhan tim peserta.</p>
<p>Berhenti membuang waktu dengan bagan manual atau rumus Excel yang rumit. Gunakan Tournament Manager Pro dari VersoKit untuk membuat jadwal sistem gugur atau liga dalam hitungan detik.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Bagan Gugur Instan:</strong> Struktur pohon otomatis untuk 4 hingga 32 tim.</li>
  <li><strong>Klasemen Otomatis:</strong> Masukkan skor pertandingan dan tabel klasemen akan terupdate real-time.</li>
  <li><strong>Undian Adil:</strong> Gunakan tombol "Shuffle" untuk mengundi lawan secara acak.</li>
  <li><strong>Ekspor ke Gambar:</strong> Unduh bagan atau klasemen Anda untuk dibagikan di WhatsApp atau media sosial.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Turniermanager Pro Online: Spielpläne und Tabellen erstellen",
      sections: [
        {
          title: "Turniere professionell verwalten",
          content: `<p>Erstellen Sie Knockout-Bäume oder Liga-Tabellen in Sekunden für Futsal, E-Sports und mehr.</p>`
        }
      ]
    },
    es: {
      title: "Gestor de Torneos Pro Online: Crea cuadros y clasificaciones",
      sections: [
        {
          title: "Gestiona torneos como un profesional",
          content: `<p>Genera cuadros de eliminación o tablas de liga al instante para cualquier deporte o E-Sports.</p>`
        }
      ]
    },
    pt: {
      title: "Gerente de Torneios Pro Online: Crie chaves e classificações",
      sections: [
        {
          title: "Gerencie torneios como um profissional",
          content: `<p>Gere chaves de eliminação ou tabelas de liga instantaneamente para futsal, e-sports e mais.</p>`
        }
      ]
    },
    fr: {
      title: "Gestion Tournoi Pro Online : Créez des tableaux et classements",
      sections: [
        {
          title: "Gérez vos tournois comme un pro",
          content: `<p>Générez des arbres de tournois ou des classements de ligue instantanément pour tout événement.</p>`
        }
      ]
    },
    it: {
      title: "Gestore Tornei Pro Online: Crea tabelloni e classifiche",
      sections: [
        {
          title: "Gestisci i turni come un professionista",
          content: `<p>Crea tabelloni a eliminazione diretta o classifiche di campionato in pochi secondi.</p>`
        }
      ]
    }
  },
  "image-to-pdf": {
    en: {
      title: "Image to PDF Online: Convert JPG and PNG to Clean PDF",
      sections: [
        {
          title: "Instantly Create PDF Documents",
          content: `<p>Need to turn your photos or scanned documents into a single PDF file? Our Image to PDF tool allows you to bundle images into a professional document without uploading them to any server.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Bulk Conversion:</strong> Add multiple images at once.</li>
  <li><strong>Order Control:</strong> Rearrange images to set the page order.</li>
  <li><strong>Privacy First:</strong> Images are processed locally on your device.</li>
  <li><strong>High Quality:</strong> Maintains the original resolution of your photos.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Gambar ke PDF Online: Ubah JPG dan PNG ke PDF yang Rapi",
      sections: [
        {
          title: "Buat Dokumen PDF Secara Instan",
          content: `<p>Perlu mengubah foto atau pindaian dokumen menjadi satu file PDF? Alat Gambar ke PDF kami memungkinkan Anda menggabungkan gambar menjadi dokumen profesional tanpa mengunggahnya ke server mana pun.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Konversi Massal:</strong> Tambahkan banyak gambar sekaligus.</li>
  <li><strong>Atur Urutan:</strong> Susun ulang gambar untuk menentukan urutan halaman.</li>
  <li><strong>Privasi Utama:</strong> Gambar diproses secara lokal di perangkat Anda.</li>
  <li><strong>Kualitas Tinggi:</strong> Menjaga resolusi asli foto Anda.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Bild zu PDF Online: JPG und PNG sicher umwandeln",
      sections: [
        {
          title: "PDF Ersteller",
          content: `<p>Wandeln Sie JPG- und PNG-Bilder in ein sauberes PDF-Dokument um. 100% lokal verarbeitet.</p>`
        }
      ]
    },
    es: {
      title: "Imagen a PDF Online: Convierte JPG y PNG a PDF limpio",
      sections: [
        {
          title: "Creador de PDF",
          content: `<p>Convierte imágenes JPG y PNG en un documento PDF de forma rápida y con total privacidad.</p>`
        }
      ]
    },
    pt: {
      title: "Imagem para PDF Online: Converta JPG e PNG em PDF",
      sections: [
        {
          title: "Criador de PDF",
          content: `<p>Converta imagens JPG e PNG em um documento PDF limpo e seguro no seu navegador.</p>`
        }
      ]
    },
    fr: {
      title: "Image en PDF Online : Convertissez vos images en document PDF",
      sections: [
        {
          title: "Créateur PDF",
          content: `<p>Convertissez des images JPG et PNG en document PDF proprement et sans upload.</p>`
        }
      ]
    },
    it: {
      title: "Immagine in PDF Online: Converti JPG e PNG in un PDF pulito",
      sections: [
        {
          title: "Creatore PDF",
          content: `<p>Converti immagini JPG e PNG in un documento PDF professionale direttamente sul tuo dispositivo.</p>`
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
<p>Hentikan kebingungan tersebut sekarang juga. Use the <strong>Shift Scheduler</strong> from VersoKit—your digital personal assistant for creating tidy, professional, and fair work rosters.</p>
<ul>
  <li><strong>Visual Roster Builder:</strong> Our grid view is simple: Rows for names and columns for days. Use color codes like Morning (Yellow) and Night (Dark) to understand the pattern at a glance.</li>
  <li><strong>"WhatsApp Mode" Feature:</strong> Stop retyping schedules in chats. One click converts the table into neat text ready to be pasted into your team group.</li>
  <li><strong>Workload Calculator:</strong> Monitor total working days automatically to ensure a fair distribution of shifts.</li>
</ul>`
        },
        {
          title: "Classic Problems We Solve",
          content: `<ul>
  <li><strong>Schedule Clashes:</strong> Our system clearly shows who is on duty, eliminating "empty shift" stories.</li>
  <li><strong>Mobile Friendly:</strong> Unlike Excel, our schedule is responsive and fits perfectly on smartphone screens.</li>
  <li><strong>Memory Aid:</strong> Employees can easily save the schedule image in their phone galleries.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Aplikasi Jadwal Shift Kerja Gratis: Atur Roster & Share ke WA",
      sections: [
        {
          title: "Kenapa Harus Pindah dari Excel ke Shift Scheduler?",
          content: `<p>Pusing mengatur jadwal kerja karyawan setiap minggu? Masih pakai tulis tangan di papan pengumuman atau rumus Excel yang ribet? Hati-hati, manajemen jadwal yang buruk bisa berdampak fatal bagi bisnis Anda.</p>
<p>Hentikan kebingungan tersebut sekarang juga. Gunakan <strong>Shift Scheduler</strong> dari VersoKit—asisten pribadi digital Anda untuk membuat roster kerja yang rapi, profesional, dan adil.</p>
<ul>
  <li><strong>Visual Roster Builder:</strong> Tampilan tabel grid kami sangat sederhana: Baris untuk Nama dan Kolom untuk Hari. Gunakan kode warna seperti Pagi (Kuning) dan Malam (Gelap) untuk memahami pola kerja dalam sekejap.</li>
  <li><strong>Fitur "WhatsApp Mode":</strong> Tidak perlu mengetik ulang jadwal di chat. Satu klik mengubah tabel menjadi teks rapi yang siap di-Paste ke grup WA tim.</li>
  <li><strong>Workload Calculator:</strong> Memantau total hari masuk secara otomatis untuk memastikan pembagian beban kerja yang adil.</li>
</ul>`
        },
        {
          title: "Masalah Klasik yang Kami Selesaikan",
          content: `<ul>
  <li><strong>Bentrokan Jadwal:</strong> Tidak ada lagi cerita "satu shift kosong" karena sistem visual kami menunjukkan dengan jelas siapa yang berjaga.</li>
  <li><strong>Mobile Friendly:</strong> Berbeda dengan Excel, jadwal kami responsif dan pas di layar smartphone karyawan.</li>
  <li><strong>Pengingat Roster:</strong> Karyawan bisa menyimpan gambar jadwal di galeri HP mereka dengan mudah.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Kostenloser Schichtplan-Ersteller: Dienstplan verwalten & teilen",
      sections: [
        {
          title: "Warum vom Excel zum Schichtplaner wechseln?",
          content: `<p>Nutzen Sie den <strong>Shift Scheduler</strong> von VersoKit für ordentliche, professionelle und faire Dienstpläne inkl. WhatsApp-Export.</p>
<ul>
  <li><strong>Visueller Dienstplan-Ersteller:</strong> Einfache Gitteransicht mit Farbcodes für verschiedene Schichten.</li>
  <li><strong>WhatsApp-Modus:</strong> Tabelle in Text umwandeln und direkt in die Team-Gruppe einfügen.</li>
  <li><strong>Arbeitslast-Rechner:</strong> Überwacht automatisch die Arbeitstage pro Mitarbeiter.</li>
</ul>`
        }
      ]
    },
    es: {
      title: "Aplicación de Horarios de Turnos Gratis: Gestiona el Roster",
      sections: [
        {
          title: "¿Por qué usar el Planificador de Turnos?",
          content: `<p>Usa el <strong>Shift Scheduler</strong> de VersoKit: tu asistente personal digital para crear rosters de trabajo ordenados, profesionales y justos.</p>
<ul>
  <li><strong>Constructor de Roster Visual:</strong> Vista de tabla sencilla con códigos de colores para cada turno.</li>
  <li><strong>Modo WhatsApp:</strong> Convierte el horario en texto listo para pegar en el grupo de tu equipo.</li>
  <li><strong>Calculadora de Carga:</strong> Controla los días trabajados por cada empleado automáticamente.</li>
</ul>`
        }
      ]
    },
    pt: {
      title: "Aplicativo de Escala de Revezamento Grátis: Organize o Roster",
      sections: [
        {
          title: "Por que Mudar para o Planejador de Turnos?",
          content: `<p>Use o <strong>Shift Scheduler</strong> da VersoKit para criar rosters de trabalho organizados, profissionais e justos com envio para WhatsApp.</p>
<ul>
  <li><strong>Construtor de Roster Visual:</strong> Visualização de tabela simples com cores para distinguir os turnos.</li>
  <li><strong>Recurso WhatsApp:</strong> Converta a tabela em texto limpo pronto para colar no grupo da sua equipe.</li>
  <li><strong>Carga de Trabalho:</strong> Monitora automaticamente o total de dias trabalhados de cada funcionário.</li>
</ul>`
        }
      ]
    },
    fr: {
      title: "Application de Planning de Travail Gratuite : Gérez vos Rotations",
      sections: [
        {
          title: "Pourquoi passer d'Excel au Planificateur de Shifts ?",
          content: `<p>Utilisez le <strong>Shift Scheduler</strong> de VersoKit — votre assistant personnel numérique pour créer des rotations de travail ordonnées et professionnelles.</p>
<ul>
  <li><strong>Générateur de Rotation Visuel :</strong> Vue en grille simple avec codes couleur pour chaque shift.</li>
  <li><strong>Mode WhatsApp :</strong> Transformez le planning en texte propre prêt à être collé dans votre groupe.</li>
  <li><strong>Répartition Équitable :</strong> Surveillance automatique du nombre de jours travaillés par employé.</li>
</ul>`
        }
      ]
    },
    it: {
      title: "App per Turni di Lavoro Gratis: Gestisci i Turni e Condividi",
      sections: [
        {
          title: "Perché passare allo Shift Scheduler?",
          content: `<p>Usa lo <strong>Shift Scheduler</strong> di VersoKit: il tuo assistente personale digitale per creare turni di lavoro ordinati, professionali ed equi.</p>
<ul>
  <li><strong>Costruttore Visivo di Turni:</strong> Vista a griglia semplicissima con codici colore per ogni turno.</li>
  <li><strong>Modalità WhatsApp:</strong> Trasforma la tabella dei turni in un messaggio di testo pronto da inviare.</li>
  <li><strong>Distribuzione Equa:</strong> Monitora automaticamente i giorni lavorati da ogni dipendente.</li>
</ul>`
        }
      ]
    }
  },
  "inventory": {
    en: {
      title: "Stock Management Online: Track Items, Quantities & Low Stock",
      sections: [
        {
          title: "Simple Inventory Tracking",
          content: `<p>VersoKit Inventory Manager is a lightweight tool for small teams, warehouses, or sports equipment rooms. Keep track of what you have in stock without complex database software.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Stock In/Out:</strong> Quickly increment or decrement quantities with one click.</li>
  <li><strong>Search & Filter:</strong> Find items in your roster instantly.</li>
  <li><strong>Privacy First:</strong> Data is stored 100% locally in your browser.</li>
  <li><strong>Data Management:</strong> Backup and restore your inventory lists anytime using JSON files.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Manajemen Stok Online: Lacak Barang, Jumlah & Stok Menipis",
      sections: [
        {
          title: "Pelacakan Inventaris Sederhana",
          content: `<p>VersoKit Inventory Manager adalah alat ringan untuk tim kecil, gudang, atau ruang peralatan olahraga. Pantau stok barang Anda tanpa software database yang rumit.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Stok Masuk/Keluar:</strong> Tambah atau kurangi jumlah barang dengan satu klik cepat.</li>
  <li><strong>Cari & Filter:</strong> Temukan barang dalam daftar Anda secara instan.</li>
  <li><strong>Privasi Utama:</strong> Data disimpan 100% secara lokal di browser Anda.</li>
  <li><strong>Manajemen Data:</strong> Simpan dan pulihkan daftar inventaris Anda kapan saja menggunakan file JSON.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Lagerverwaltung Online: Bestände sicher verfolgen",
      sections: [
        {
          title: "Überblick",
          content: `<p>Lagerverwaltung für kleine Teams. Verfolgen Sie Artikel und Bestände offline direkt im Browser.</p>`
        }
      ]
    },
    es: {
      title: "Gestión de Inventario Online: Controla tu stock en privado",
      sections: [
        {
          title: "Descripción",
          content: `<p>Gestión de Inventario para equipos pequeños. Controla artículos y alertas de stock bajo sin conexión.</p>`
        }
      ]
    },
    pt: {
      title: "Gestão de Estoque Online: Acompanhe itens e quantidades",
      sections: [
        {
          title: "Visão Geral",
          content: `<p>Gestão de Estoque simplificada. Acompanhe itens e receba alertas de estoque baixo no seu navegador.</p>`
        }
      ]
    },
    fr: {
      title: "Gestion de Stock Online : Suivez vos articles en privé",
      sections: [
        {
          title: "Aperçu",
          content: `<p>Outil de gestion de stock pour petites équipes. Suivez les articles et les alertes de stock faible en local.</p>`
        }
      ]
    },
    it: {
      title: "Gestione Inventario Online: Monitora le scorte in privato",
      sections: [
        {
          title: "Panoramica",
          content: `<p>Gestione Inventario per piccoli team. Traccia articoli e scorte basse offline sul tuo dispositivo.</p>`
        }
      ]
    }
  },
  "split-bill": {
    en: {
      title: "Split Bill Calculator: Divide Group Dining Costs Fairly",
      sections: [
        {
          title: "Easy Bill Splitting",
          content: `<p>Group dining often ends with confusion about who owes what. Our Split Bill tool handles the math so you can enjoy your meal.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Tax & Service Calculation:</strong> Input percentages and the tool does the rest.</li>
  <li><strong>Per Person Breakdown:</strong> See exactly how much each participant needs to pay.</li>
  <li><strong>Share to WhatsApp:</strong> Generate a neat text summary to paste into your group chat.</li>
  <li><strong>Privacy Focused:</strong> No data is sent to our servers.</li>
</ul>`
        }
      ]
    },
    id: {
      title: "Bagi Tagihan Online: Hitung Patungan Makan Grup Secara Adil",
      sections: [
        {
          title: "Bagi Tagihan Jadi Mudah",
          content: `<p>Makan bersama grup sering berakhir dengan kebingungan siapa bayar berapa. Alat Bagi Tagihan kami menangani hitungannya agar Anda bisa menikmati makanan Anda.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Hitung Pajak & Layanan:</strong> Masukkan persentase dan alat ini akan melakukan sisanya.</li>
  <li><strong>Rincian Per Orang:</strong> Lihat tepat berapa yang harus dibayar setiap peserta.</li>
  <li><strong>Share ke WA:</strong> Hasilkan ringkasan teks rapi untuk ditempel di chat grup Anda.</li>
  <li><strong>Fokus Privasi:</strong> Tidak ada data yang dikirim ke server kami.</li>
</ul>`
        }
      ]
    },
    de: {
      title: "Rechnungsteiler Online: Gruppenausgaben fair aufteilen",
      sections: [
        {
          title: "Überblick",
          content: `<p>Rechnungsteiler für Restaurants. Berechnen Sie Steuern und Servicegebühren präzise für Ihre Gruppe.</p>`
        }
      ]
    },
    es: {
      title: "Dividir Cuenta Online: Calcula el pago por persona con IVA",
      sections: [
        {
          title: "Descripción",
          content: `<p>Dividir Cuenta de restaurante. Calcula impuestos y servicio con precisión para grupos grandes.</p>`
        }
      ]
    },
    pt: {
      title: "Dividir Conta Online: Calcule a parte de cada um",
      sections: [
        {
          title: "Visão Geral",
          content: `<p>Dividir Conta de restaurante. Calcule impostos e taxas de serviço de forma justa e rápida.</p>`
        }
      ]
    },
    fr: {
      title: "Partage d'Addition Online : Calculez la part de chacun",
      sections: [
        {
          title: "Aperçu",
          content: `<p>Partage d'Addition de restaurant. Calculez taxes et service avec précision pour vos sorties en groupe.</p>`
        }
      ]
    },
    it: {
      title: "Divisione Conto Online: Calcola la quota per persona",
      sections: [
        {
          title: "Panoramica",
          content: `<p>Divisione Conto ristorante. Calcola tasse e servizio con precisione per i tuoi amici.</p>`
        }
      ]
    }
  },
  "scoreboard": {
    en: {
      title: "Universal Scoreboard: Digital Board for Badminton, Volley & Ping Pong",
      sections: [
        {
          title: "Professional Scores for Every Sport",
          content: `<p>Ever played badminton or volleyball and the referee forgot the score? Manual flip boards are often torn or too small. VersoKit Universal Scoreboard is the "Swiss Army Knife" of digital scoreboards.</p>
<p>Designed for rally point and set-based sports like Table Tennis, Badminton, and Volleyball.</p>`
        },
        {
          title: "Referee-First Features",
          content: `<ul>
  <li><strong>Keyboard Shortcuts:</strong> Favorite for referees. Add points instantly without moving your mouse.</li>
  <li><strong>Swap Sides:</strong> Change ends with one click. Team names, scores, and colors swap instantly.</li>
  <li><strong>Sets & Points Tracking:</strong> Separate current game points from total sets won.</li>
  <li><strong>Custom Team Colors:</strong> Match the scoreboard background to team jerseys for clarity.</li>
</ul>`
        },
        {
          title: "How to Use",
          content: `<ol>
  <li><strong>Setup:</strong> Enter player/team names and choose colors.</li>
  <li><strong>Start:</strong> Use (+) buttons or keyboard shortcuts to add points.</li>
  <li><strong>End of Set:</strong> Add (+) to the Sets column and Reset points for the next round. Click Swap if players switch sides.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Universal Scoreboard: Papan Skor Digital Badminton, Voli & Ping Pong",
      sections: [
        {
          title: "Skor Profesional untuk Setiap Olahraga",
          content: `<p>Pernahkah Anda bermain bulu tangkis atau voli dan wasitnya lupa skor saat ini? Papan manual seringkali rusak atau terlalu kecil. Universal Scoreboard VersoKit adalah "Pisau Lipat" papan skor digital.</p>
<p>Dirancang untuk olahraga berbasis poin dan set seperti Tenis Meja, Badminton, dan Voli.</p>`
        },
        {
          title: "Fitur Khusus Wasit",
          content: `<ul>
  <li><strong>Keyboard Shortcuts:</strong> Favorit wasit. Tambah poin instan tanpa menggerakkan mouse.</li>
  <li><strong>Swap Sides (Tukar Lapangan):</strong> Tukar posisi nama, skor, dan warna tim hanya dengan satu klik.</li>
  <li><strong>Pelacakan Set & Poin:</strong> Pisahkan poin game saat ini dari total kemenangan set.</li>
  <li><strong>Warna Tim Kustom:</strong> Sesuaikan warna latar papan skor dengan jersey tim agar lebih jelas.</li>
</ul>`
        },
        {
          title: "Cara Penggunaan",
          content: `<ol>
  <li><strong>Persiapan:</strong> Masukkan nama pemain/tim dan pilih warna jersey.</li>
  <li><strong>Mulai:</strong> Gunakan tombol (+) atau shortcut keyboard untuk menambah poin.</li>
  <li><strong>Selesai Set:</strong> Tambahkan (+) pada kolom Set dan Reset poin untuk babak baru. Klik Swap jika pemain bertukar lapangan.</li>
</ol>`
        }
      ]
    },
    de: {
      title: "Universal-Anzeigetafel Online: Digital für Badminton, Volley & Tischtennis",
      sections: [
        {
          title: "Profihilfe für jedes Spiel",
          content: `<p>Das "Schweizer Taschenmesser" unter den Anzeigetafeln. Mit Tastenkürzeln und Seitenwechsel-Funktion.</p>`
        }
      ]
    },
    es: {
      title: "Marcador Universal Online: Digital para Bádminton, Voleibol y Ping Pong",
      sections: [
        {
          title: "Puntuaciones Profesionales",
          content: `<p>La "navaja suiza" de los marcadores digitales. Con atajos de teclado y función de cambio de campo.</p>`
        }
      ]
    },
    pt: {
      title: "Placar Universal Online: Digital para Badminton, Voleibol e Ping Pong",
      sections: [
        {
          title: "Pontuação Profissional",
          content: `<p>O "canivete suíço" dos placares digitais. Com atalhos de teclado e função de troca de campo.</p>`
        }
      ]
    },
    fr: {
      title: "Tableau de Score Universel Online : Badminton, Volley & Ping Pong",
      sections: [
        {
          title: "Scores Pro pour tous les sports",
          content: `<p>Le "couteau suisse" des tableaux de score. Avec raccourcis clavier et fonction de changement de côté.</p>`
        }
      ]
    },
    it: {
      title: "Tabellone Universale Online: Digital per Badminton, Volley & Ping Pong",
      sections: [
        {
          title: "Punteggi Professionali",
          content: `<p>Il "coltellino svizzero" dei tabelloni digitali. Con scorciatoie da tastiera e funzione scambia campo.</p>`
        }
      ]
    }
  },
  "lineup": {
    en: {
      title: "Football Lineup Builder: Create Team Formations & Download Image",
      sections: [
        {
          title: "Professional Starting XI Visuals",
          content: `<p>Want to post your team's Starting XI on Instagram but aren't a graphic designer? Or debating tactics in a group chat? Drawing formations on paper is messy. VersoKit Football Lineup Builder is your digital tactics board.</p>
<p>Transform your strategic ideas into professional graphics in seconds. Just "Drag & Drop", type names, and download.</p>`
        },
        {
          title: "Key Features",
          content: `<ul>
  <li><strong>Instant XI Visualization:</strong> High-quality pitch graphics with precise player positions.</li>
  <li><strong>Drag & Drop Interface:</strong> Move player icons anywhere on the field for specific tactical instructions.</li>
  <li><strong>Popular Formation Presets:</strong> Start with 4-4-2, 4-3-3, 3-5-2 or modern tactics like 4-2-3-1.</li>
  <li><strong>Jersey & Name Customization:</strong> Change jersey colors and type player names/numbers for authenticity.</li>
</ul>`
        },
        {
          title: "How to Create in 1 Minute",
          content: `<ol>
  <li><strong>Choose Base:</strong> Start with a preset (e.g., 4-3-3).</li>
  <li><strong>Input Names:</strong> Click icons to set names and numbers.</li>
  <li><strong>Customize:</strong> Set your team's Home/Away jersey colors.</li>
  <li><strong>Set Tactics:</strong> Drag players to specific positions.</li>
  <li><strong>Download:</strong> Save your professional PNG/JPG image.</li>
</ol>`
        }
      ]
    },
    id: {
      title: "Football Lineup Builder: Buat Formasi Tim Bola & Download Gambar",
      sections: [
        {
          title: "Visualisasi Starting XI Profesional",
          content: `<p>Mau posting susunan pemain tim Anda di Instagram tapi tidak bisa desain? Menggambar formasi di kertas seringkali berantakan. Football Lineup Builder VersoKit adalah papan taktik digital Anda.</p>
<p>Ubah ide strategi Anda menjadi grafis profesional dalam hitungan detik. Cukup "Drag & Drop", ketik nama, dan unduh.</p>`
        },
        {
          title: "Fitur Utama",
          content: `<ul>
  <li><strong>Visualisasi XI Instan:</strong> Grafis lapangan hijau berkualitas tinggi dengan posisi presisi.</li>
  <li><strong>Interface Drag & Drop:</strong> Geser ikon pemain ke mana saja di lapangan untuk instruksi taktik khusus.</li>
  <li><strong>Preset Formasi Populer:</strong> Mulai dengan 4-4-2, 4-3-3, 3-5-2 atau taktik modern 4-2-3-1.</li>
  <li><strong>Kustomisasi Jersey & Nama:</strong> Ubah warna baju dan ketik nama/nomor punggung agar otentik.</li>
</ul>`
        },
        {
          title: "Cara Membuat dalam 1 Menit",
          content: `<ol>
  <li><strong>Pilih Dasar:</strong> Mulai dengan preset (misal: 4-3-3).</li>
  <li><strong>Input Nama:</strong> Klik ikon untuk mengatur nama dan nomor.</li>
  <li><strong>Kustomisasi:</strong> Atur warna jersey tim Anda.</li>
  <li><strong>Atur Taktik:</strong> Geser pemain ke posisi spesifik.</li>
  <li><strong>Download:</strong> Simpan gambar PNG/JPG profesional Anda.</li>
</ol>`
        }
      ]
    },
    de: {
      title: "Football Lineup Builder Online: Formationen erstellen & Bilder laden",
      sections: [
        {
          title: "Professionelle Aufstellungen",
          content: `<p>Erstellen Sie Ihre Starting XI mit Drag & Drop und laden Sie das Bild für Social Media herunter. 100% lokal im Browser.</p>`
        }
      ]
    },
    es: {
      title: "Football Lineup Builder Online: Crea formaciones y descarga imágenes",
      sections: [
        {
          title: "Visualización Starting XI",
          content: `<p>Crea estrategias profesionales con Drag & Drop y descarga el resultado en HD para tus redes sociales.</p>`
        }
      ]
    },
    pt: {
      title: "Football Lineup Builder Online: Crie táticas e baixe imagens",
      sections: [
        {
          title: "Visualização Starting XI",
          content: `<p>Crie formações profissionais com Drag & Drop e baixe a imagem HD para partilhar com a sua equipa.</p>`
        }
      ]
    },
    fr: {
      title: "Football Lineup Builder Online : Créez vos compos et téléchargez",
      sections: [
        {
          title: "Compos d'Équipe Pro",
          content: `<p>Créez votre Onze de départ avec Drag & Drop et téléchargez l'image HD pour vos réseaux sociaux.</p>`
        }
      ]
    },
    it: {
      title: "Football Lineup Builder Online: Crea formazioni e scarica immagini",
      sections: [
        {
          title: "Formazioni Professionali",
          content: `<p>Crea la tua formazione ideale con Drag & Drop e scarica l'immagine HD per condividerla con i tifosi.</p>`
        }
      ]
    }
  }
};
