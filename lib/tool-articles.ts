
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
          content: "<p>Want to play Americano format but lazy to calculate manually? Use our automatic Americano Generator & Scoreboard. Free, no app install required. Try now!</p><p>Are you planning a fun game session of Padel, Pickleball, or Tennis this weekend? The Americano format will surely be the top choice to make the atmosphere more fluid and competitive. But we all know the main problem: Organizing the schedule and calculating points manually is confusing. Who pairs with whom? Who should rest? What is the final leaderboard? Don't let paper, pens, or complicated Excel formulas ruin your fun on the court. The solution is here. We provide an Americano Generator Tool that you can use directly on this page. Simply enter the player names, and let our system handle the rest.</p>" 
        },
        { 
          title: "What is the Americano Format?", 
          content: "<p>For those of you trying it for the first time, Americano is the fairest and most exciting social tournament format. The basic concept is simple: <ul><li><strong>Switch Partners:</strong> You will play with a different partner in every match.</li><li><strong>Individual Score:</strong> Although playing doubles, the points you earn are counted for yourself.</li><li><strong>Goal:</strong> Collect as many points as possible to become the leaderboard champion at the end of the session.</li></ul></p><p>This format is perfect for Padel and Pickleball communities because it forces all players to interact (socialize) while competing at the same time.</p>" 
        },
        { 
          title: "Classic Problems When Playing Manual Americano", 
          content: "<p>Without tools or apps, playing Americano can become chaotic: <ul><li><strong>Wasted Time:</strong> Debating who plays whom can take 5-10 minutes on its own.</li><li><strong>Unfairness:</strong> Without an algorithm, there is a possibility that one person keeps getting the same partner.</li><li><strong>Calculation Errors:</strong> Manually adding up scores from dozens of matches on paper is very prone to mistakes.</li></ul></p>" 
        },
        { 
          title: "Superior Features of Our Americano Generator", 
          content: "<p>Why should you use the tools on our website instead of other apps? <ol><li><strong>No Download & Install:</strong> Phone storage full? Relax. Our tool is web-based. You can open it directly from your browser at the court without the hassle of downloading heavy apps.</li><li><strong>Fair Play Algorithm:</strong> Our system ensures balanced player rotation. Everyone will get a fair chance to switch partners and face different opponents.</li><li><strong>Live Leaderboard:</strong> As soon as you enter match scores, the standings will update automatically. All players can see their positions in real-time from their respective phones (if the link is shared).</li></ol></p>" 
        },
        { 
          title: "How to Use This Americano Generator", 
          content: "<p>It's very easy, follow these steps: <ol><li><strong>Enter Player Names:</strong> Type the names of all participants (Minimum 4 people). Odd number? No problem, our system can arrange substitute/resting players in rotation.</li><li><strong>Select Target Points:</strong> Determine how many points you want to play to? (Generally 24 or 32 points).</li><li><strong>Generate Schedule:</strong> Click the build schedule button.</li><li><strong>Play & Input Scores:</strong> After the match is finished, enter the scores.</li><li><strong>See the Winner:</strong> At the end of the session, the system will crown the Americano champion of the day!</li></ol></p>" 
        },
        { 
          title: "Quick Rules for Point Calculation", 
          content: "<p>To maximize the use of our tool, make sure all players understand the rules: <ul><li><strong>Point System:</strong> Matches are counted per ball. If Team A wins 14-10 against Team B, then Team A players each get 14 points, and Team B players each get 10 points.</li><li><strong>Service:</strong> Service rotates every 4 balls (2 times for Team A, 2 times for Team B).</li><li><strong>Winner:</strong> The player with the highest total accumulated points at the end of the tournament.</li></ul></p>" 
        },
        { 
          title: "Ready to Play?", 
          content: "<p>Don't spend your 2-hour court rental just to record scores on paper. Maximize your playing time and let technology work for you. Try our Americano Generator now below (or at the top of the page). Free, fast, and guaranteed to make the game even more exciting!</p>" 
        }
      ]
    },
    id: {
      title: "Generator Jadwal Americano Otomatis: Padel, Pickleball & Tenis",
      sections: [
        { 
          title: "Main Americano Tanpa Ribet: Gunakan Generator Jadwal & Skor Otomatis Kami", 
          content: "<p>Mau main format Americano tapi malas hitung manual? Gunakan Americano Generator & Scoreboard otomatis kami. Gratis, tanpa install aplikasi. Coba sekarang!</p><p>Apakah Anda sedang merencanakan sesi fun game Padel, Pickleball, atau Tenis akhir pekan ini? Format Americano pasti jadi pilihan utama agar suasana lebih cair dan kompetitif. Tapi, kita semua tahu masalah utamanya: Mengatur jadwal dan menghitung poin secara manual itu memusingkan. Siapa berpasangan dengan siapa? Siapa yang harus istirahat? Bagaimana klasemen akhirnya? Jangan biarkan kertas, pulpen, atau rumus Excel yang rumit merusak keseruan Anda di lapangan. Solusinya ada di sini. Kami menyediakan Americano Generator Tool yang bisa Anda gunakan langsung di halaman ini. Cukup masukkan nama pemain, dan biarkan sistem kami mengatur sisanya.</p>" 
        },
        { 
          title: "Apa Itu Format Americano?", 
          content: "<p>Bagi Anda yang baru pertama kali mencoba, Americano adalah format turnamen sosial yang paling adil dan seru. Konsep dasarnya sederhana: <ul><li><strong>Ganti Pasangan:</strong> Anda akan bermain dengan pasangan berbeda di setiap pertandingan.</li><li><strong>Skor Individu:</strong> Meskipun bermain ganda, poin yang Anda dapatkan dihitung untuk diri sendiri.</li><li><strong>Tujuan:</strong> Mengumpulkan poin sebanyak mungkin untuk menjadi juara klasemen di akhir sesi.</li></ul></p><p>Format ini sangat cocok untuk komunitas Padel dan Pickleball karena memaksa semua pemain untuk saling berinteraksi (sosialisasi) sekaligus berkompetisi.</p>" 
        },
        { 
          title: "Masalah Klasik Saat Main Americano Manual", 
          content: "<p>Tanpa tools atau aplikasi, main Americano bisa jadi kacau: <ul><li><strong>Waktu Terbuang:</strong> Debat siapa lawan siapa bisa memakan waktu 5-10 menit sendiri.</li><li><strong>Tidak Adil:</strong> Tanpa algoritma, ada kemungkinan satu orang terus menerus dapat partner yang sama.</li><li><strong>Salah Hitung:</strong> Menjumlahkan skor puluhan pertandingan secara manual di kertas sangat rawan kesalahan.</li></ul></p>" 
        },
        { 
          title: "Fitur Unggulan Americano Generator Kami", 
          content: "<p>Mengapa Anda harus menggunakan tools di website kami daripada aplikasi lain? <ol><li><strong>Tanpa Download & Install:</strong> Penyimpanan HP penuh? Tenang. Tool kami berbasis web (web-based). Anda bisa membukanya langsung dari browser di lapangan tanpa perlu repot download aplikasi berat.</li><li><strong>Algoritma Fair Play:</strong> Sistem kami memastikan rotasi pemain seimbang. Setiap orang akan mendapatkan kesempatan yang adil untuk berganti pasangan dan melawan musuh yang berbeda.</li><li><strong>Live Leaderboard (Klasemen Langsung):</strong> Begitu Anda memasukkan skor pertandingan, klasemen akan otomatis terupdate. Semua pemain bisa melihat posisi mereka secara real-time dari HP masing-masing (jika link dibagikan).</li></ol></p>" 
        },
        { 
          title: "Cara Menggunakan Generator Americano Ini", 
          content: "<p>Sangat mudah, ikuti langkah berikut: <ol><li><strong>Masukkan Nama Pemain:</strong> Ketik nama semua peserta (Minimal 4 orang). Jumlah ganjil? Tidak masalah, sistem kami bisa mengatur pemain cadangan/istirahat secara bergilir.</li><li><strong>Pilih Poin Target:</strong> Tentukan mau main sampai poin berapa? (Umumnya 24 atau 32 poin).</li><li><strong>Generate Jadwal:</strong> Klik tombol buat jadwal.</li><li><strong>Main & Input Skor:</strong> Setelah match selesai, masukkan skornya.</li><li><strong>Lihat Pemenang:</strong> Di akhir sesi, sistem akan menobatkan juara Americano hari itu!</li></ol></p>" 
        },
        { 
          title: "Aturan Singkat Perhitungan Poin", 
          content: "<p>Agar penggunaan tool kami makin maksimal, pastikan semua pemain paham aturan mainnya: <ul><li><strong>Sistem Poin:</strong> Pertandingan dihitung per bola. Jika Tim A menang 14-10 lawan Tim B, maka Pemain Tim A masing-masing dapat 14 poin, dan Tim B masing-masing dapat 10 poin.</li><li><strong>Servis:</strong> Servis bergantian setiap 4 kali bola (2 kali Tim A, 2 kali Tim B).</li><li><strong>Pemenang:</strong> Pemain dengan total poin akumulasi tertinggi di akhir turnamen.</li></ul></p>" 
        },
        { 
          title: "Siap Bermain?", 
          content: "<p>Jangan habiskan waktu 2 jam sewa lapangan Anda hanya untuk mencatat skor di kertas. Maksimalkan waktu bermain dan biarkan teknologi yang bekerja untuk Anda. Cobalah Americano Generator kami sekarang juga di bawah ini (atau di bagian atas halaman). Gratis, cepat, dan dijamin bikin permainan makin seru!</p>" 
        }
      ]
    },
    de: {
      title: "Automatischer Americano-Spielplan-Generator: Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Americano spielen ohne Stress: Nutzen Sie unseren automatischen Spielplan-Generator & Scoreboard", 
          content: "<p>Wollen Sie das Americano-Format spielen, haben aber keine Lust auf manuelles Rechnen? Nutzen Sie unseren automatischen Americano-Generator & Scoreboard. Kostenlos, ohne App-Installation. Jetzt ausprobieren!</p><p>Planen Sie dieses Wochenende eine unterhaltsame Spielrunde Padel, Pickleball oder Tennis? Das Americano-Format ist sicher die beste Wahl, um die Atmosphäre lockerer und wettbewerbsfähiger zu gestalten. Aber wir alle kennen das Hauptproblem: Den Zeitplan zu organisieren und Punkte manuell zu berechnen, ist verwirrend. Wer spielt mit wem? Wer muss pausieren? Wie sieht die Endtabelle aus? Lassen Sie nicht zu, dass Papier, Stifte oder komplizierte Excel-Formeln Ihren Spaß auf dem Platz ruinieren. Die Lösung ist hier. Wir bieten ein Americano-Generator-Tool an, das Sie direkt auf dieser Seite nutzen können. Geben Sie einfach die Spielernamen ein und lassen Sie unser System den Rest erledigen.</p>" 
        },
        { 
          title: "Was ist das Americano-Format?", 
          content: "<p>Für diejenigen unter Ihnen, die es zum ersten Mal ausprobieren: Americano ist das fairste und spannendste soziale Turnierformat. Das Grundkonzept ist einfach: <ul><li><strong>Partner wechseln:</strong> Sie spielen in jedem Spiel mit einem anderen Partner.</li><li><strong>Einzelwertung:</strong> Obwohl Sie Doppel spielen, werden die erzielten Punkte für Sie persönlich gezählt.</li><li><strong>Ziel:</strong> So viele Punkte wie möglich zu sammeln, um am Ende der Sitzung Tabellenführer zu werden.</li></ul></p><p>Dieses Format ist perfekt für Padel- und Pickleball-Communities, da es alle Spieler dazu zwingt, miteinander zu interagieren (sozialisieren) und gleichzeitig gegeneinander anzutreten.</p>" 
        },
        { 
          title: "Klassische Probleme beim manuellen Americano-Spiel", 
          content: "<p>Ohne Tools oder Apps kann das Americano-Spielen chaotisch werden: <ul><li><strong>Zeitverschwendung:</strong> Die Debatte darüber, wer gegen wen spielt, kann allein schon 5-10 Minuten dauern.</li><li><strong>Ungerechtigkeit:</strong> Ohne Algorithmus besteht die Möglichkeit, dass eine Person ständig denselben Partner bekommt.</li><li><strong>Rechenfehler:</strong> Das manuelle Zusammenzählen von Ergebnissen aus Dutzenden von Spielen auf Papier ist sehr fehleranfällig.</li></ul></p>" 
        },
        { 
          title: "Herausragende Merkmale unseres Americano-Generators", 
          content: "<p>Warum sollten Sie die Tools auf unserer Website anstelle von anderen Apps verwenden? <ol><li><strong>Kein Download & Installation:</strong> Telefonspeicher voll? Keine Sorge. Unser Tool ist webbasiert. Sie können es direkt über Ihren Browser auf dem Platz öffnen, ohne mühsam schwere Apps herunterladen zu müssen.</li><li><strong>Fair-Play-Algorithmus:</strong> Unser System sorgt für eine ausgewogene Spielerrotation. Jeder erhält die faire Chance, den Partner zu wechseln und gegen verschiedene Gegner anzutreten.</li><li><strong>Live-Rangliste:</strong> Sobald Sie Spielergebnisse eingeben, wird die Tabelle automatisch aktualisiert. Alle Spieler können ihre Positionen in Echtzeit auf ihren jeweiligen Handys sehen (wenn der Link geteilt wird).</li></ol></p>" 
        },
        { 
          title: "So verwenden Sie diesen Americano-Generator", 
          content: "<p>Es ist sehr einfach, folgen Sie diesen Schritten: <ol><li><strong>Spielernamen eingeben:</strong> Geben Sie die Namen aller Teilnehmer ein (mindestens 4 Personen). Ungerade Anzahl? Kein Problem, unser System kann Ersatz-/Ruhespieler im Wechsel einteilen.</li><li><strong>Zielpunkte wählen:</strong> Legen Sie fest, bis zu welcher Punktzahl Sie spielen möchten? (In der Regel 24 oder 32 Punkte).</li><li><strong>Spielplan erstellen:</strong> Klicken Sie auf die Schaltfläche „Spielplan erstellen“.</li><li><strong>Spielen & Ergebnisse eingeben:</strong> Geben Sie nach Spielende die Ergebnisse ein.</li><li><strong>Gewinner sehen:</strong> Am Ende der Sitzung wird das System den Americano-Champion des Tages krönen!</li></ol></p>" 
        },
        { 
          title: "Kurze Regeln zur Punktberechnung", 
          content: "<p>Damit die Nutzung unseres Tools optimal gelingt, stellen Sie sicher, dass alle Spieler die Regeln verstehen: <ul><li><strong>Punktsystem:</strong> Spiele werden pro Ball gezählt. Wenn Team A 14-10 gegen Team B gewinnt, erhalten die Spieler von Team A jeweils 14 Punkte und die Spieler von Team B jeweils 10 Punkte.</li><li><strong>Aufschlag:</strong> Der Aufschlag wechselt alle 4 Bälle (2 Mal für Team A, 2 Mal für Team B).</li><li><strong>Gewinner:</strong> Der Spieler mit der höchsten Gesamtpunktzahl am Ende des Turniers.</li></ul></p>" 
        },
        { 
          title: "Bereit zum Spielen?", 
          content: "<p>Verschwenden Sie nicht Ihre 2-stündige Platzmiete damit, nur Ergebnisse auf Papier festzuhalten. Maximieren Sie Ihre Spielzeit und lassen Sie die Technik für sich arbeiten. Probieren Sie unseren Americano-Generator jetzt unten (oder am Seitenanfang) aus. Kostenlos, schnell und garantiert ein noch spannenderes Spiel!</p>" 
        }
      ]
    },
    es: {
      title: "Generador de Calendario Americano Automático: Pádel, Pickleball y Tenis",
      sections: [
        { 
          title: "Juega Americano sin Complicaciones: Usa Nuestro Generador de Calendario y Marcador Automático", 
          content: "<p>¿Quieres jugar en formato Americano pero te da pereza calcular manualmente? Usa nuestro Generador y Marcador Americano automático. Gratis, sin instalar aplicaciones. ¡Pruébalo ahora!</p><p>¿Estás planeando una sesión de juego divertido de Pádel, Pickleball o Tenis este fin de semana? El formato Americano será sin duda la mejor opción para que el ambiente sea más fluido y competitivo. Pero todos conocemos el problema principal: organizar el calendario y calcular los puntos manualmente es confuso. ¿Quién se empareja con quién? ¿Quién debe descansar? ¿Cómo queda la clasificación final? No dejes que el papel, los bolígrafos o las complicadas fórmulas de Excel arruinen tu diversión en la pista. La solución está aquí. Ofrecemos una herramienta de generación de Americano que puedes usar directamente en esta página. Solo tienes que introducir los nombres de los jugadores y dejar que nuestro sistema se encargue del resto.</p>" 
        },
        { 
          title: "¿Qué es el Formato Americano?", 
          content: "<p>Para los que lo prueban por primera vez, el Americano es el formato de torneo social más justo y emocionante. El concepto básico es sencillo: <ul><li><strong>Cambiar de Pareja:</strong> Jugarás con una pareja diferente en cada partido.</li><li><strong>Puntuación Individual:</strong> Aunque juegues dobles, los puntos que consigas se cuentan para ti mismo.</li><li><strong>Objetivo:</strong> Acumular el mayor número de puntos posible para ser el campeón de la clasificación al final de la sesión.</li></ul></p><p>Este formato es perfecto para las comunidades de Pádel y Pickleball porque obliga a todos los jugadores a interactuar (socializar) y a competir al mismo tiempo.</p>" 
        },
        { 
          title: "Problemas Clásicos al Jugar Americano Manuelmente", 
          content: "<p>Sin herramientas ni aplicaciones, jugar al Americano puede volverse caótico: <ul><li><strong>Tiempo Perdido:</strong> Debatir quién juega contra quién puede llevar entre 5 y 10 minutos por sí solo.</li><li><strong>Injusticia:</strong> Sin un algoritmo, existe la posibilidad de que una persona siga teniendo la misma pareja constantemente.</li><li><strong>Errores de Cálculo:</strong> Sumar manualmente las puntuaciones de docenas de partidos en papel es muy propenso a errores.</li></ul></p>" 
        },
        { 
          title: "Características Superiores de Nuestro Generador de Americano", 
          content: "<p>¿Por qué deberías usar las herramientas de nuestro sitio web en lugar de otras aplicaciones? <ol><li><strong>Sin Descarga ni Instalación:</strong> ¿Memoria del móvil llena? Tranquilo. Nuestra herramienta está basada en la web. Puedes abrirla directamente desde tu navegador en la pista sin la molestia de descargar pesadas aplicaciones.</li><li><strong>Algoritmo de Juego Limpio:</strong> Nuestro sistema garantiza una rotación equilibrada de los jugadores. Todo el mundo tendrá una oportunidad justa de cambiar de pareja y enfrentarse a diferentes enemigos.</li><li><strong>Clasificación en Vivo:</strong> En cuanto introduzcas las puntuaciones de los partidos, la clasificación se actualizará automáticamente. Todos los jugadores pueden ver sus posiciones en tiempo real desde sus respectivos móviles (si se comparte el enlace).</li></ol></p>" 
        },
        { 
          title: "Cómo Usar Este Generador de Americano", 
          content: "<p>Es muy fácil, sigue estos pasos: <ol><li><strong>Introduce los Nombres de los Jugadores:</strong> Escribe los nombres de todos los participantes (mínimo 4 personas). ¿Número impar? No hay problema, nuestro sistema puede organizar a los jugadores sustitutos/en descanso por turnos.</li><li><strong>Selecciona los Puntos Objetivo:</strong> Determina ¿hasta cuántos puntos quieres jugar? (Generalmente 24 o 32 puntos).</li><li><strong>Generar Calendario:</strong> Haz clic en el botón de crear calendario.</li><li><strong>Jugar e Introducir Puntuaciones:</strong> Una vez finalizado el partido, introduce las puntuaciones.</li><li><strong>Ver al Ganador:</strong> Al final de la sesión, ¡el sistema coronará al campeón de Americano del día!</li></ol></p>" 
        },
        { 
          title: "Reglas Breves para el Cálculo de Puntos", 
          content: "<p>Para maximizar el uso de nuestra herramienta, asegúrate de que todos los jugadores entienden las reglas: <ul><li><strong>Sistema de Puntos:</strong> Los partidos se cuentan por bola. Si el Equipo A gana 14-10 al Equipo B, los jugadores del Equipo A reciben 14 puntos cada uno, y los del Equipo B reciben 10 puntos cada uno.</li><li><strong>Saque:</strong> El saque se alterna cada 4 bolas (2 veces el Equipo A, 2 veces el Equipo B).</li><li><strong>Ganador:</strong> El jugador con el mayor total de puntos acumulados al final del torneo.</li></ul></p>" 
        },
        { 
          title: "¿Listo para Jugar?", 
          content: "<p>No malgaste tus 2 horas de alquiler de pista solo para anotar puntuaciones en un papel. Maximiza tu tiempo de juego y deja que la tecnología trabaje por ti. ¡Prueba nuestro Generador Americano ahora mismo abajo (o en la parte superior de la página). Gratis, rápido y garantizado para hacer el juego aún más emocionante!</p>" 
        }
      ]
    },
    pt: {
      title: "Gerador Automático de Tabelas Americano: Padel, Pickleball e Ténis",
      sections: [
        { 
          title: "Jogue Americano Sem Complicações: Utilize o Nosso Gerador de Tabelas e Marcador Automático", 
          content: "<p>Quer jogar no formato Americano mas tem preguiça de calcular manualmente? Utilize o nosso Gerador e Marcador Americano automático. Gratuito, sem instalar aplicações. Experimente agora!</p><p>Está a planear uma sessão de jogo divertido de Padel, Pickleball ou Ténis este fim de semana? O formato Americano será certamente a melhor escolha para tornar o ambiente mais fluido e competitivo. Mas todos conhecemos o problema principal: organizar a tabela e calcular os pontos manualmente é confuso. Quem faz par com quem? Quem deve descansar? Como fica a classificação final? Não deixe que o papel, as canetas ou as complicadas fórmulas de Excel estraguem a sua diversão no campo. A solução está aqui. Oferecemos uma ferramenta de geração de Americano que pode utilizar diretamente nesta página. Basta introduzir os nomes dos jogadores e deixar que o nosso sistema trate do resto.</p>" 
        },
        { 
          title: "O que é o Formato Americano?", 
          content: "<p>Para quem o experimenta pela primeira vez, o Americano é o formato de torneio social mais justo e emocionante. O conceito básico é simples: <ul><li><strong>Mudar de Parceiro:</strong> Jogará com um parceiro diferente em cada partida.</li><li><strong>Pontuação Individual:</strong> Embora jogue em duplas, os pontos que conseguir contam para si próprio.</li><li><strong>Objetivo:</strong> Acumular o maior número de pontos possível para ser o campeão da classificação no final da sessão.</li></ul></p><p>Este formato é perfeito para comunidades de Padel e Pickleball porque obriga todos os jogadores a interagir (socializar) e a competir ao mesmo tempo.</p>" 
        },
        { 
          title: "Problemas Clássicos ao Jogar Americano Manualmente", 
          content: "<p>Sem ferramentas nem aplicações, jogar Americano pode tornar-se caótico: <ul><li><strong>Tempo Desperdiçado:</strong> Debater quem joga contra quem pode levar 5 a 10 minutos por si só.</li><li><strong>Injustiça:</strong> Sem um algoritmo, existe a possibilidade de uma pessoa continuar a ter o mesmo parceiro constantemente.</li><li><strong>Erros de Cálculo:</strong> Somar manualmente as pontuações de dezenas de partidas em papel é muito propenso a erros.</li></ul></p>" 
        },
        { 
          title: "Funcionalidades Superiores do Nosso Gerador de Americano", 
          content: "<p>Por que deve utilizar as ferramentas do nosso site em vez de outras aplicações? <ol><li><strong>Sem Download nem Instalação:</strong> Memória do telemóvel cheia? Tranquilo. A nossa ferramenta é baseada na web. Pode abri-la diretamente do seu navegador no campo sem o incómodo de descarregar aplicações pesadas.</li><li><strong>Algoritmo de Jogo Limpo:</strong> O nosso sistema garante uma rotação equilibrada dos jogadores. Todos terão uma oportunidade justa de mudar de parceiro e enfrentar diferentes inimigos.</li><li><strong>Classificação em Direto:</strong> Assim que introduzir as pontuações das partidas, a classificação será atualizada automaticamente. Todos os jogadores podem ver as suas posições em tempo real nos seus respetivos telemóveis (se o link for partilhado).</li></ol></p>" 
        },
        { 
          title: "Como Utilizar Este Gerador de Americano", 
          content: "<p>É muito fácil, siga estes passos: <ol><li><strong>Introduza os Nomes dos Jogadores:</strong> Escreva os nomes de todos os participantes (mínimo 4 pessoas). Número ímpar? Não há problema, o nosso sistema pode organizar os jogadores substitutos/em descanso por turnos.</li><li><strong>Selecione os Pontos Alvo:</strong> Determine até quantos pontos quer jogar? (Geralmente 24 ou 32 pontos).</li><li><strong>Gerar Tabela:</strong> Clique no botão de criar tabela.</li><li><strong>Jogar e Introduzir Pontuações:</strong> Assim que a partida terminar, introduza as pontuações.</li><li><strong>Ver o Vencedor:</strong> No final da sessão, o sistema coroará o campeão de Americano do dia!</li></ol></p>" 
        },
        { 
          title: "Regras Breves para o Cálculo de Pontos", 
          content: "<p>Para maximizar a utilização da nossa ferramenta, certifique-se de que todos os jogadores entendem as regras: <ul><li><strong>Sistema de Pontos:</strong> As partidas son contadas por bola. Se a Equipa A vencer por 14-10 a Equipa B, os jogadores da Equipa A recebem 14 pontos cada, e os da Equipa B recebem 10 pontos cada.</li><li><strong>Serviço:</strong> O serviço alterna a cada 4 bolas (2 vezes a Equipa A, 2 vezes a Equipa B).</li><li><strong>Vencedor:</strong> O jogador com o maior total de pontos acumulados no final do torneio.</li></ul></p>" 
        },
        { 
          title: "Pronto para Jogar?", 
          content: "<p>Não desperdice as suas 2 horas de aluguer de campo apenas para anotar pontuações num papel. Maximize o seu tempo de jogo e deixe que a tecnologia trabalhe por si. Experimente o nosso Gerador Americano agora mesmo abaixo (ou no topo da página). Gratuito, rápido e garantido para tornar o jogo ainda mais emocionante!</p>" 
        }
      ]
    },
    fr: {
      title: "Générateur Automatique de Planning Americano : Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Jouez à l'Americano sans Stress : Utilisez notre Générateur de Planning et Tableau de Score Automatique", 
          content: "<p>Vous voulez jouer au format Americano mais vous avez la flemme de calculer manuellement ? Utilisez notre Générateur et Tableau de Score Americano automatique. Gratuit, sans installation d'application. Essayez maintenant !</p><p>Prévoyez-vous une session de jeu amusante de Padel, Pickleball ou Tennis ce week-end ? Le format Americano sera certainement le meilleur choix pour rendre l'atmosphère plus fluide et compétitive. Mais nous connaissons tous le problème principal : organiser le planning et calculer les points manuellement est déroutant. Qui joue avec qui ? Qui doit se reposer ? Quel est le classement final ? Ne laissez pas le papier, les stylos ou les formules Excel compliquées gâcher votre plaisir sur le terrain. La solution est ici. Nous proposons un outil de génération d'Americano que vous pouvez utiliser directement sur cette page. Saisissez simplement les noms des joueurs et laissez notre système s'occuper du reste.</p>" 
        },
        { 
          title: "Qu'est-ce que le Format Americano ?", 
          content: "<p>Pour ceux d'entre vous qui l'essaient pour la première fois, l'Americano est le format de tournoi social le plus équitable et le plus excitant. Le concept de base est simple : <ul><li><strong>Changer de Partenaire :</strong> Vous jouerez avec un partenaire différent à chaque match.</li><li><strong>Score Individuel :</strong> Bien que vous jouiez en double, les points que vous gagnez sont comptabilisés pour vous-même.</li><li><strong>Objectif :</strong> Accumuler le plus de points possible pour devenir le champion du classement à la fin de la session.</li></ul></p><p>Ce format est parfait pour les communautés de Padel et de Pickleball car il oblige tous les joueurs à interagir (socialiser) tout en étant en compétition en même temps.</p>" 
        },
        { 
          title: "Problèmes Classiques lors d'un Americano Manuel", 
          content: "<p>Sans outils ni applications, jouer à l'Americano peut devenir chaotique : <ul><li><strong>Temps Perdu :</strong> Débattre de qui joue contre qui peut prendre 5 à 10 minutes en soi.</li><li><strong>Injustice :</strong> Sans algorithme, il est possible qu'une personne se retrouve constamment avec le même partenaire.</li><li><strong>Erreurs de Calcul :</strong> Additionner manuellement les scores de dizaines de matchs sur papier est très source d'erreurs.</li></ul></p>" 
        },
        { 
          title: "Caractéristiques Supérieures de notre Générateur d'Americano", 
          content: "<p>Pourquoi devriez-vous utiliser les outils de notre site web plutôt que d'autres applications ? <ol><li><strong>Sans Téléchargement ni Installation :</strong> Mémoire de téléphone pleine ? Détendez-vous. Notre outil est basé sur le web. Vous pouvez l'ouvrir directement depuis votre navigateur sur le terrain sans avoir à télécharger des applications lourdes.</li><li><strong>Algorithme Fair-Play :</strong> Notre système assure une rotation équilibrée des joueurs. Tout le monde aura une chance équitable de changer de partenaire et d'affronter des adversaires différents.</li><li><strong>Classement en Direct :</strong> Dès que vous saisissez les scores des matchs, le classement se met à jour automatiquement. Tous les joueurs peuvent voir leur position en temps réel sur leur téléphone respectif (si le lien est partagé).</li></ol></p>" 
        },
        { 
          title: "Comment Utiliser ce Générateur d'Americano", 
          content: "<p>C'est très facile, suivez ces étapes : <ol><li><strong>Saisir les Noms des Joueurs :</strong> Tapez les noms de tous les participants (minimum 4 personnes). Nombre impair ? Pas de problème, notre système peut organiser les joueurs remplaçants/au repos à tour de rôle.</li><li><strong>Sélectionner les Points Cibles :</strong> Déterminez jusqu'à combien de points vous voulez jouer ? (Généralement 24 ou 32 points).</li><li><strong>Générer le Planning :</strong> Cliquez sur le bouton de création de planning.</li><li><strong>Jouer et Saisir les Scores :</strong> Une fois le match terminé, saisissez les scores.</li><li><strong>Voir le Vainqueur :</strong> À la fin de la session, le système couronnera le champion Americano du jour !</li></ol></p>" 
        },
        { 
          title: "Règles Courtes pour le Calcul des Points", 
          content: "<p>Pour maximiser l'utilisation de notre outil, assurez-vous que tous les joueurs comprennent les règles : <ul><li><strong>Système de Points :</strong> Les matchs sont comptés par balle. Si l'Équipe A gagne 14-10 contre l'Équipe B, les joueurs de l'Équipe A reçoivent chacun 14 points, et ceux de l'Équipe B en reçoivent 10 chacun.</li><li><strong>Service :</strong> Le service alterne toutes les 4 balles (2 fois pour l'Équipe A, 2 fois pour l'Équipe B).</li><li><strong>Vainqueur :</strong> Le joueur ayant le total de points accumulés le plus élevé à la fin du tournoi.</li></ul></p>" 
        },
        { 
          title: "Prêt à Jouer ?", 
          content: "<p>Ne passez pas vos 2 heures de location de terrain juste pour noter des scores sur papier. Maximisez votre temps de jeu et laissez la technologie travailler pour vous. Essayez notre Générateur Americano dès maintenant ci-dessous (ou en haut de la page). Gratuit, rapide et garanti pour rendre le jeu encore plus passionnant !</p>" 
        }
      ]
    },
    it: {
      title: "Generatore Automatico di Tabellone Americano: Padel, Pickleball e Tennis",
      sections: [
        { 
          title: "Gioca all'Americano Senza Stress: Usa il Nostro Generatore di Turni e Tabellone Automatico", 
          content: "<p>Vuoi giocare nel formato Americano ma ti annoia calcolare i punti manualmente? Usa il nostro Generatore e Tabellone Americano automatico. Gratuito, senza installare app. Provalo ora!</p><p>Stai pianificando una divertente sessione di gioco di Padel, Pickleball o Tennis questo fine settimana? Il formato Americano sarà sicuramente la scelta migliore per rendere l'atmosfera più fluida e competitiva. Ma tutti conosciamo il problema principale: organizzare i turni e calcolare i punti manualmente è complicato. Chi fa coppia con chi? Chi deve riposare? Qual è la classifica finale? Non lasciare che carta, penne o complicate formule Excel rovinino il tuo divertimento in campo. La soluzione è qui. Forniamo uno strumento di generazione per l'Americano che puoi usare direttamente su questa pagina. Inserisci semplicemente i nomi dei giocatori e lascia che il nostro sistema si occupi del resto.</p>" 
        },
        { 
          title: "Cos'è il Formato Americano?", 
          content: "<p>Per chi di voi lo prova per la prima volta, l'Americano è il formato di torneo sociale più equo ed emozionante. Il concetto di base esemplice: <ul><li><strong>Cambiare Partner:</strong> Giocherai con un partner diverso in ogni partita.</li><li><strong>Punteggio Individuale:</strong> Anche se giochi in doppio, i punti che guadagni vengono contati per te stesso.</li><li><strong>Obiettivo:</strong> Raccogliere più punti possibile per diventare il campione della classifica alla fine della sessione.</li></ul></p><p>Questo formato è perfetto per le comunità di Padel e Pickleball perché costringe tutti i giocatori a interagire (socializzare) e competere allo stesso tempo.</p>" 
        },
        { 
          title: "Problemi Classici Quando si Gioca l'Americano Manualmente", 
          content: "<p>Senza strumenti o app, giocare all'Americano può diventare caotico: <ul><li><strong>Tempo Sprecato:</strong> Discutere su chi gioca contro chi può richiedere 5-10 minuti da solo.</li><li><strong>Iniquità:</strong> Senza un algoritmo, c'è la possibilità che una persona continui ad avere lo stesso partner.</li><li><strong>Errori di Calcolo:</strong> Sommare manualmente i punteggi di dozzine di partite su carta è molto incline agli errori.</li></ul></p>" 
        },
        { 
          title: "Caratteristiche Superiori del Nostro Generatore Americano", 
          content: "<p>Perché dovresti usare gli strumenti sul nostro sito web invece di altre app? <ol><li><strong>Nessun Download o Installazione:</strong> Memoria del telefono piena? Rilassati. Il nostro strumento è basato sul web. Puoi aprirlo direttamente dal tuo browser in campo senza il fastidio di scaricare app pesanti.</li><li><strong>Algoritmo Fair Play:</strong> Il nostro sistema garantisce una rotazione equilibrata dei giocatori. Tutti avranno un'equa possibilità di cambiare partner e affrontare avversari diversi.</li><li><strong>Classifica Live:</strong> Non appena inserisci i punteggi delle partite, la classifica si aggiornerà automaticamente. Tutti i giocatori possono vedere le loro posizioni in tempo reale dai rispettivi telefoni (se il link viene condiviso).</li></ol></p>" 
        },
        { 
          title: "Come Usare Questo Generatore Americano", 
          content: "<p>È molto facile, segui questi passaggi: <ol><li><strong>Inserisci i Nomi dei Giocatori:</strong> Digita i nomi di tutti i partecipanti (minimo 4 persone). Numero dispari? Nessun problema, il nostro sistema può organizzare i giocatori sostituti/a riposo a rotazione.</li><li><strong>Seleziona i Punti Obiettivo:</strong> Determina a quanti punti vuoi giocare? (Generalmente 24 o 32 punti).</li><li><strong>Genera Turni:</strong> Clicca sul pulsante di creazione turni.</li><li><strong>Gioca e Inserisci i Punteggi:</strong> Una volta terminata la partita, inserisci i punteggi.</li><li><strong>Vedi il Vincitore:</strong> Alla fine della sessione, il sistema incoronerà il campione Americano del giorno!</li></ol></p>" 
        },
        { 
          title: "Brevi Regole per il Calcolo dei Punti", 
          content: "<p>Per massimizzare l'uso del nostro strumento, assicurati che tutti i giocatori comprendano le regole: <ul><li><strong>Sistema a Punti:</strong> Le partite vengono conteggiate per palla. Se la Squadra A vince 14-10 contro la Squadra B, i giocatori della Squadra A ricevono 14 punti ciascuno e i giocatori della Squadra B ricevono 10 punti ciascuno.</li><li><strong>Servizio:</strong> Il servizio si alterna ogni 4 palle (2 volte per la Squadra A, 2 volte per la Squadra B).</li><li><strong>Vincitore:</strong> Il giocatore con il punteggio totale accumulato più alto alla fine del torneo.</li></ul></p>" 
        },
        { 
          title: "Pronto a Giocare?", 
          content: "<p>Non sprecare le tue 2 ore di affitto del campo solo per registrare i punteggi su carta. Massimizza il tuo tempo di gioco e lascia che la tecnologia lavori per te. Prova il nostro Generatore Americano subito qui sotto (o in cima alla pagina). Gratuito, veloce e garantito per rendere il gioco ancora più emozionante!</p>" 
        }
      ]
    }
  },
  "futsal": {
    en: {
      title: "Online Digital Futsal Scoreboard: Free, Timer & Foul Counter",
      sections: [
        {
          title: "Pro Scoreboard for Sparring & Tournaments",
          content: "<p>Playing futsal feels less exciting if there is no clear scoreboard and time. Have you ever experienced an awkward moment during sparring: debating the score (\"Hey, was it 4-3 or 4-4?\"), or confused about how many minutes are left?</p><p>A classic problem on non-professional futsal courts is the lack of a proper Scoreboard. The price of a physical digital scoreboard can reach millions of rupiah ($150 - $400), a quite expensive investment for small court managers or communities. Meanwhile, using a stopwatch on a phone is often ineffective because the screen is small and can only be seen by one person. VersoKit presents a smart solution: <strong>Digital Futsal Scoreboard</strong>. This web-based tool instantly and for free turns your Laptop, Tablet, or Phone into a professional scoreboard!</p>"
        },
        {
          title: "Why Do You Need the VersoKit Scoreboard?",
          content: "<p>This tool is not just a number recorder. We designed it with specific features that follow international futsal regulation standards (FIFA). Here are the \"meaty\" features you can enjoy:</p><ul><li><strong>1. Flexible Match Timer (Countdown)</strong>: In professional futsal, time is everything. This tool is equipped with a countdown timer that you can set—either the standard 20 minutes (pro half) or 15 minutes (casual sparring). <strong>Pause & Resume</strong>: Ball out of bounds? Keeper injured? Just press the Pause button. Time stops, and Resume when the ball rolls again. Perfect for simulating \"Stop-clock\" time.</li><li><strong>2. Foul Counter - A Crucial Feature!</strong>: This is a feature often forgotten by regular score apps. In futsal, accumulated fouls determine match results. Our tool tracks accumulated fouls from 0 to 5. <strong>Visual Indicator</strong>: When a team reaches 5 fouls, you and the players on the field will realize that the next foul (the 6th) means a Second Penalty Mark kick penalty.</li><li><strong>3. Professional Appearance (Customizable)</strong>: <strong>Edit Team Names</strong>: Say goodbye to the boring \"Home vs Away\" text. You can change it to real team names, e.g.: \"Garuda FC\" vs \"Harimau FC\". <strong>Period Indicator</strong>: Clear markers for Half 1, Half 2, or Extra Time.</li></ul>"
        },
        {
          title: "Technical Advantages: Advanced Without Hassle",
          content: "<p>We know that court operators or referees don't want to be bothered with complicated installations. Therefore, the VersoKit Futsal Scoreboard is built with modern technology:</p><ul><li><strong>Web-Based & No Install</strong>: No need to fill up phone memory by downloading apps from PlayStore/AppStore. Just open the browser (Chrome/Safari/Edge), and the tool is ready to use.</li><li><strong>Fullscreen Mode</strong>: Want a display like on Pro League TV? Click the Fullscreen button. All browser elements will disappear, leaving a clean and elegant scoreboard.</li><li><strong>Offline Ready</strong>: Is the internet at the futsal court often slow? Relax. Once this page is fully open, the Timer and Score continue to function normally even if the internet is disconnected.</li><li><strong>Responsive</strong>: The display automatically adjusts. Perfect on a Laptop to be connected to a TV/Projector via HDMI cable. Ideal on a Tablet/Phone for referees to control the score from the sidelines.</li></ul>"
        },
        {
          title: "How to Use This Futsal Scoreboard",
          content: "<p>It only takes 1 minute to start a match like a professional:</p><ol><li><strong>Prepare Device</strong>: Open this VersoKit page on your Laptop or Tablet.</li><li><strong>Connect to Large Screen (Optional)</strong>: If you are a court manager, connect the Laptop to a Hanging TV or Projector using an HDMI cable.</li><li><strong>Enter Fullscreen Mode</strong>: Click the Fullscreen button for maximum display.</li><li><strong>Set Match</strong>: Click the team name text to change names. Set the time duration (e.g.: 20 minutes).</li><li><strong>Kick-off!</strong>: Press \"Start\".</li><li><strong>Real-time Update</strong>: Press (+) on Score if a goal occurs. Press (+) on Foul if the referee blows the whistle for a violation. Press Pause if the ball goes out.</li></ol>"
        },
        {
          title: "Understand Futsal Rules to Make Playing More Fun",
          content: "<p>Using this tool also helps your community learn real futsal rule discipline:</p><ul><li><strong>Stop-clock vs Running-clock</strong>: Professional futsal uses 20 minutes of Stop-clock (the clock stops every time the ball is dead). However, for public court rentals, they usually use Running-clock (the clock keeps going). With our Pause/Resume feature, you are free to choose which play style you want to apply.</li><li><strong>Accumulated Foul Rule</strong>: Many amateur teams underestimate fouls. Remember, in futsal, every foul counts! If your team has committed 5 fouls in one half, you must play very carefully. Use the Foul Counter in this tool to keep both teams alert.</li></ul>"
        },
        {
          title: "Ready for Pro Level Match?",
          content: "<p>Don't let your exciting match be ruined by forgetting the score or debating the time. Make your sparring practice or village tournament feel like a Professional League with clear score visualization. Free, Easy, and Professional. Try the VersoKit Digital Futsal Scoreboard right now!</p>"
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital Online: Gratis, Timer & Hitung Foul",
      sections: [
        {
          title: "Papan Skor Pro untuk Sparing & Turnamen",
          content: "<p>Main futsal rasanya kurang seru kalau tidak ada papan skor dan waktu yang jelas. Pernahkah Anda mengalami momen canggung saat sparring: berdebat soal skor (\"Eh, tadi 4-3 atau 4-4?\"), atau bingung sisa waktu tinggal berapa menit?</p><p>Masalah klasik di lapangan futsal non-profesional adalah ketiadaan Scoreboard yang layak. Harga papan skor digital fisik bisa mencapai jutaan rupiah (Rp 2.000.000 - Rp 5.000.000), investasi yang cukup mahal bagi pengelola lapangan kecil atau komunitas. Sementara itu, menggunakan stopwatch di HP seringkali tidak efektif karena layarnya kecil dan hanya bisa dilihat oleh satu orang. VersoKit menghadirkan solusi cerdas: <strong>Futsal Scoreboard Digital</strong>. Alat berbasis web ini mengubah Laptop, Tablet, atau HP Anda menjadi papan skor profesional secara instan dan gratis!</p>"
        },
        {
          title: "Mengapa Anda Butuh Papan Skor VersoKit?",
          content: "<p>Alat ini bukan sekadar pencatat angka. Kami merancangnya dengan fitur spesifik yang mengikuti standar peraturan futsal internasional (FIFA). Berikut adalah fitur \"daging\" yang bisa Anda nikmati:</p><ul><li><strong>1. Timer Pertandingan (Countdown) yang Fleksibel</strong>: Dalam futsal profesional, waktu adalah segalanya. Alat ini dilengkapi countdown timer (waktu mundur) yang bisa Anda atur—baik standar 20 menit (babak pro) atau 15 menit (sparring santai). <strong>Pause & Resume</strong>: Bola keluar lapangan? Kiper cedera? Cukup tekan tombol Pause. Waktu berhenti, dan Resume saat bola bergulir kembali. Sangat cocok untuk simulasi \"Waktu Bersih\".</li><li><strong>2. Penghitung Pelanggaran (Foul Counter) - Fitur Krusial!</strong>: Ini adalah fitur yang sering dilupakan aplikasi skor biasa. Di futsal, akumulasi pelanggaran sangat menentukan hasil pertandingan. Alat kami melacak akumulasi foul dari 0 hingga 5. <strong>Indikator Visual</strong>: Saat tim mencapai 5 pelanggaran, Anda dan pemain di lapangan akan sadar bahwa pelanggaran berikutnya (ke-6) berarti hukuman Tendangan Penalti Titik Kedua (Second Penalty Mark).</li><li><strong>3. Tampilan Profesional (Customizable)</strong>: <strong>Edit Nama Tim</strong>: Ucapkan selamat tinggal pada tulisan membosankan \"Home vs Away\". Anda bisa menggantinya menjadi nama tim asli, misal: \"Garuda FC\" vs \"Harimau FC\". <strong>Indikator Babak</strong>: Penanda jelas untuk Babak 1, Babak 2, atau Extra Time.</li></ul>"
        },
        {
          title: "Keunggulan Teknis: Canggih Tanpa Ribet",
          content: "<p>Kami tahu operator lapangan atau wasit tidak ingin direpotkan dengan instalasi yang rumit. Oleh karena itu, VersoKit Futsal Scoreboard dibuat dengan teknologi modern:</p><ul><li><strong>Web-Based & No Install</strong>: Tidak perlu memenuhi memori HP dengan download aplikasi di PlayStore/AppStore. Cukup buka browser (Chrome/Safari/Edge), dan alat siap digunakan.</li><li><strong>Fullscreen Mode</strong>: Ingin tampilan seperti di TV Liga Pro? Klik tombol Fullscreen. Semua elemen browser akan hilang, menyisakan papan skor yang bersih dan elegan.</li><li><strong>Offline Ready</strong>: Internet di lapangan futsal sering lemot? Tenang. Setelah halaman ini terbuka sempurna, Timer dan Skor tetap berfungsi normal meskipun internet putus.</li><li><strong>Responsif</strong>: Tampilan otomatis menyesuaikan. Di Laptop sempurna untuk disambungkan ke TV/Proyektor via kabel HDMI. Di Tablet/HP ideal untuk wasit memegang kendali skor di pinggir lapangan.</li></ul>"
        },
        {
          title: "Cara Menggunakan Papan Skor Futsal Ini",
          content: "<p>Hanya butuh 1 menit untuk memulai pertandingan layaknya profesional:</p><ol><li><strong>Siapkan Perangkat</strong>: Buka halaman VersoKit ini di Laptop atau Tablet Anda.</li><li><strong>Sambungkan ke Layar Besar (Opsional)</strong>: Jika Anda pengelola lapangan, sambungkan Laptop ke TV Gantung atau Proyektor menggunakan kabel HDMI.</li><li><strong>Masuk Mode Layar Penuh</strong>: Klik tombol Fullscreen untuk tampilan maksimal.</li><li><strong>Atur Pertandingan</strong>: Klik teks nama tim untuk mengubah nama. Atur durasi waktu (misal: 20 menit).</li><li><strong>Kick-off!</strong>: Tekan \"Start\".</li><li><strong>Update Real-time</strong>: Tekan (+) pada Skor jika gol terjadi. Tekan (+) pada Foul jika wasit meniup peluit pelanggaran. Tekan Pause jika bola keluar.</li></ol>"
        },
        {
          title: "Pahami Aturan Futsal Agar Main Lebih Seru",
          content: "<p>Menggunakan alat ini juga membantu komunitas Anda belajar disiplin aturan futsal yang sebenarnya:</p><ul><li><strong>Waktu Bersih vs Waktu Kotor</strong>: Futsal profesional menggunakan 20 menit Waktu Bersih (jam berhenti setiap bola mati). Namun, untuk penyewaan lapangan umum, biasanya menggunakan Waktu Kotor (jam jalan terus). Dengan fitur Pause/Resume kami, Anda bebas memilih gaya permainan mana yang ingin diterapkan.</li><li><strong>Aturan Akumulasi Foul</strong>: Banyak tim amatir meremehkan pelanggaran. Ingat, dalam futsal, setiap pelanggaran dihitung! Jika tim Anda sudah melakukan 5 kali foul dalam satu babak, Anda harus bermain sangat hati-hati. Gunakan Foul Counter di alat ini agar kedua tim waspada.</li></ul>"
        },
        {
          title: "Siap Pertandingan Level Pro?",
          content: "<p>Jangan biarkan pertandingan seru Anda rusak karena lupa skor atau debat waktu. Jadikan latihan sparring atau turnamen antarkampung Anda terasa seperti Liga Profesional dengan visualisasi skor yang jelas. Gratis, Mudah, dan Profesional. Cobalah Futsal Scoreboard Digital VersoKit sekarang juga!</p>"
        }
      ]
    },
    de: {
      title: "Online Digitales Futsal-Anzeigetafel: Kostenlos, Timer & Foul-Zähler",
      sections: [
        {
          title: "Profi-Anzeigetafel für Sparing & Turniere",
          content: "<p>Futsal spielen macht weniger Spaß, wenn es keine klare Anzeigetafel und Zeitmessung gibt. Haben Sie jemals einen peinlichen Moment beim Sparing erlebt: Diskussionen über den Spielstand („Hey, war das 4:3 oder 4:4?“) oder Verwirrung darüber, wie viele Minuten noch übrig sind?</p><p>Ein klassisches Problem auf nicht-professionellen Futsal-Plätzen ist das Fehlen einer ordentlichen Anzeigetafel. Der Preis für eine physische digitale Anzeigetafel kann Millionen von Rupiah erreichen (150 € - 400 €), eine ziemlich teure Investition für kleine Platzbetreiber oder Gemeinschaften. Unterdessen ist die Verwendung einer Stoppuhr auf dem Handy oft ineffektiv, da der Bildschirm klein ist und nur von einer Person gesehen werden kann. VersoKit präsentiert eine clevere Lösung: <strong>Digitales Futsal-Scoreboard</strong>. Dieses webbasierte Tool verwandelt Ihren Laptop, Ihr Tablet oder Ihr Handy sofort und kostenlos in eine professionelle Anzeigetafel!</p>"
        },
        {
          title: "Warum brauchen Sie das VersoKit Scoreboard?",
          content: "<p>Dieses Tool ist nicht nur ein Zahlenaufzeichner. Wir haben es mit spezifischen Funktionen entwickelt, die den internationalen Futsal-Regelstandards (FIFA) entsprechen. Hier sind die „gehaltvollen“ Funktionen, die Sie genießen können:</p><ul><li><strong>1. Flexibler Match-Timer (Countdown)</strong>: Im Profi-Futsal ist Zeit alles. Dieses Tool ist mit einem Countdown-Timer ausgestattet, den Sie einstellen können – entweder die standardmäßigen 20 Minuten (Profi-Halbzeit) oder 15 Minuten (lockeres Sparing). <strong>Pause & Resume</strong>: Ball im Aus? Torwart verletzt? Drücken Sie einfach die Pause-Taste. Die Zeit stoppt, und Resume, wenn der Ball wieder rollt. Perfekt für die Simulation von „Netto-Spielzeit“.</li><li><strong>2. Foul-Zähler - Eine entscheidende Funktion!</strong>: Dies ist eine Funktion, die von normalen Score-Apps oft vergessen wird. Beim Futsal entscheiden kumulierte Fouls über das Spielergebnis. Unser Tool verfolgt kumulierte Fouls von 0 bis 5. <strong>Visueller Indikator</strong>: Wenn ein Team 5 Fouls erreicht, werden Sie und die Spieler auf dem Feld erkennen, dass das nächste Foul (das 6.) eine Bestrafung durch einen Strafstoß vom zweiten Elfmeterpunkt (Zehnmeter) bedeutet.</li><li><strong>3. Professionelles Erscheinungsbild (Anpassbar)</strong>: <strong>Teamnamen bearbeiten</strong>: Verabschieden Sie sich von dem langweiligen „Home vs Away“-Text. Sie können ihn in echte Teamnamen ändern, z. B.: „Garuda FC“ vs. „Harimau FC“. <strong>Halbzeit-Anzeige</strong>: Klare Markierungen für Halbzeit 1, Halbzeit 2 oder Verlängerung.</li></ul>"
        },
        {
          title: "Technische Vorteile: Hochentwickelt ohne Aufwand",
          content: "<p>Wir wissen, dass Platzbetreiber oder Schiedsrichter sich nicht mit komplizierten Installationen herumschlagen wollen. Daher wurde das VersoKit Futsal-Scoreboard mit moderner Technologie entwickelt:</p><ul><li><strong>Webbasiert & keine Installation</strong>: Der Telefonspeicher muss nicht durch das Herunterladen von Apps aus dem PlayStore/AppStore gefüllt werden. Öffnen Sie einfach den Browser (Chrome/Safari/Edge), und das Tool ist einsatzbereit.</li><li><strong>Vollbildmodus</strong>: Möchten Sie eine Anzeige wie im Profi-Liga-TV? Klicken Sie auf die Schaltfläche Vollbild. Alle Browserelemente verschwinden und hinterlassen eine saubere und elegante Anzeigetafel.</li><li><strong>Offline-Bereit</strong>: Ist das Internet am Futsal-Platz oft langsam? Entspannen Sie sich. Sobald diese Seite vollständig geöffnet ist, funktionieren Timer und Spielstand normal weiter, auch wenn das Internet unterbrochen wird.</li><li><strong>Reaktionsschnell</strong>: Die Anzeige passt sich automatisch an. Perfekt auf einem Laptop, um ihn per HDMI-Kabel an einen Fernseher/Projektor anzuschließen. Ideal auf einem Tablet/Handy für Schiedsrichter, um den Spielstand vom Spielfeldrand aus zu kontrollieren.</li></ul>"
        },
        {
          title: "So verwenden Sie diese Futsal-Anzeigetafel",
          content: "<p>Es dauert nur 1 Minute, um ein Spiel wie ein Profi zu starten:</p><ol><li><strong>Gerät vorbereiten</strong>: Öffnen Sie diese VersoKit-Seite auf Ihrem Laptop oder Tablet.</li><li><strong>An großen Bildschirm anschließen (Optional)</strong>: Wenn Sie ein Platzbetreiber sind, schließen Sie den Laptop mit einem HDMI-Kabel an einen hängenden Fernseher oder Projektor an.</li><li><strong>Vollbildmodus aktivieren</strong>: Klicken Sie auf die Schaltfläche Vollbild für eine maximale Anzeige.</li><li><strong>Spiel einstellen</strong>: Klicken Sie auf den Text des Teamnamens, um Namen zu ändern. Stellen Sie die Zeitdauer ein (z. B.: 20 Minuten).</li><li><strong>Anpfiff!</strong>: Drücken Sie „Start“.</li><li><strong>Echtzeit-Update</strong>: Drücken Sie (+) bei Score, wenn ein Tor fällt. Drücken Sie (+) bei Foul, wenn der Schiedsrichter eine Verletzung abpfeift. Drücken Sie Pause, wenn der Ball ins Aus geht.</li></ol>"
        },
        {
          title: "Futsal-Regeln verstehen, damit das Spielen mehr Spaß macht",
          content: "<p>Die Verwendung dieses Tools hilft Ihrer Gemeinschaft auch, echte Futsal-Regeldisziplin zu lernen:</p><ul><li><strong>Netto-Zeit vs. Brutto-Zeit</strong>: Profi-Futsal verwendet 20 Minuten Netto-Zeit (die Uhr stoppt jedes Mal, wenn der Ball ruht). Bei der Vermietung öffentlicher Plätze wird jedoch normalerweise Brutto-Zeit verwendet (die Uhr läuft weiter). Mit unserer Pause/Resume-Funktion können Sie frei wählen, welchen Spielstil Sie anwenden möchten.</li><li><strong>Regel für kumulierte Fouls</strong>: Viele Amateurteams unterschätzen Fouls. Denken Sie daran, beim Futsal zählt jedes Foul! Wenn Ihr Team in einer Halbzeit 5 Fouls begangen hat, müssen Sie sehr vorsichtig spielen. Verwenden Sie den Foul-Zähler in diesem Tool, um beide Teams wachsam zu halten.</li></ul>"
        },
        {
          title: "Bereit für ein Spiel auf Profi-Niveau?",
          content: "<p>Lassen Sie Ihr spannendes Spiel nicht dadurch ruinieren, dass Sie den Spielstand vergessen oder über die Zeit debattieren. Sorgen Sie dafür, dass sich Ihr Sparing-Training oder Ihr Dorfturnier wie eine Profiliga anfühlt mit einer klaren Score-Visualisierung. Kostenlos, einfach und professionell. Probieren Sie das digitale Futsal-Scoreboard von VersoKit jetzt aus!</p>"
        }
      ]
    },
    es: {
      title: "Marcador Digital de Fútbol Sala Online: Gratis, Temporizador y Contador de Faltas",
      sections: [
        {
          title: "Marcador Pro para Sparing y Torneos",
          content: "<p>Jugar al fútbol sala parece menos emocionante si no hay un marcador y un tiempo claros. ¿Alguna vez has experimentado un momento incómodo durante el sparring: debatiendo el marcador (\"¡Eh, era 4-3 o 4-4!\"), o confundido sobre cuántos minutos quedan?</p><p>Un problema clásico en las canchas de fútbol sala no profesionales es la falta de un marcador adecuado. El precio de un marcador digital físico puede alcanzar millones de rupias ($150 - $400), una inversión bastante cara para los administradores de pequeñas canchas o comunidades. Mientras tanto, usar un cronómetro en el teléfono suele ser ineficaz porque la pantalla es pequeña y solo la puede ver una persona. VersoKit presenta una solución inteligente: <strong>Marcador Digital de Fútbol Sala</strong>. ¡Esta herramienta basada en la web convierte instantáneamente y de forma gratuita tu Laptop, Tablet o Teléfono en un marcador profesional!</p>"
        },
        {
          title: "¿Por qué necesitas el Marcador de VersoKit?",
          content: "<p>Esta herramienta no es solo un grabador de números. La diseñamos con características específicas que siguen los estándares de regulación internacional de fútbol sala (FIFA). Aquí están las características clave que puedes disfrutar:</p><ul><li><strong>1. Temporizador de Partido Flexible (Cuenta Regresiva)</strong>: En el fútbol sala profesional, el tiempo lo es todo. Esta herramienta está equipada con un temporizador de cuenta regresiva que puedes configurar, ya sea los 20 minutos estándar (mitad pro) o 15 minutos (sparring casual). <strong>Pausa y Reanudación</strong>: ¿Balón fuera? ¿Portero lesionado? Solo presiona el botón Pausa. El tiempo se detiene, y Reanudar cuando el balón ruede de nuevo. Perfecto para simular el tiempo de \"Reloj Parado\".</li><li><strong>2. Contador de Faltas - ¡Una característica crucial!</strong>: Esta es una característica que a menudo olvidan las aplicaciones de puntuación normales. En el fútbol sala, las faltas acumuladas determinan los resultados del partido. Nuestra herramienta rastrea las faltas acumuladas de 0 a 5. <strong>Indicador Visual</strong>: Cuando un equipo alcanza las 5 faltas, tú y los jugadores en el campo se darán cuenta de que la siguiente falta (la 6ª) significa una penalización de tiro desde el Segundo Punto de Penal.</li><li><strong>3. Apariencia Profesional (Personalizable)</strong>: <strong>Editar Nombres de Equipos</strong>: Dile adiós al aburrido texto \"Local vs Visitante\". Puedes cambiarlo por nombres de equipos reales, ej.: \"Garuda FC\" vs \"Harimau FC\". <strong>Indicador de Periodo</strong>: Marcadores claros para Mitad 1, Mitad 2 o Tiempo Extra.</li></ul>"
        },
        {
          title: "Ventajas Técnicas: Avanzado sin Complicaciones",
          content: "<p>Sabemos que los operadores de canchas o árbitros no quieren molestarse con instalaciones complicadas. Por lo tanto, el Marcador de Fútbol Sala VersoKit está construido con tecnología moderna:</p><ul><li><strong>Basado en la Web y sin instalación</strong>: No es necesario llenar la memoria del teléfono descargando aplicaciones de PlayStore/AppStore. Simplemente abre el navegador (Chrome/Safari/Edge) y la herramienta estará lista para usar.</li><li><strong>Modo de Pantalla Completa</strong>: ¿Quieres una pantalla como en la TV de la Liga Pro? Haz clic en el botón Pantalla Completa. Todos los elementos del navegador desaparecerán, dejando un marcador limpio y elegante.</li><li><strong>Listo para usar sin conexión</strong>: ¿El internet en la cancha de fútbol sala suele ser lento? Relájate. Una vez que esta página está completamente abierta, el Temporizador y el Marcador continúan funcionando normalmente incluso si el internet se desconecta.</li><li><strong>Responsivo</strong>: La pantalla se ajusta automáticamente. Perfecto en una Laptop para conectarse a una TV/Proyector mediante cable HDMI. Ideal en una Tablet/Teléfono para que los árbitros controlen el marcador desde la banda.</li></ul>"
        },
        {
          title: "Cómo usar este Marcador de Fútbol Sala",
          content: "<p>Solo toma 1 minuto comenzar un partido como un profesional:</p><ol><li><strong>Preparar el Dispositivo</strong>: Abre esta página de VersoKit en tu Laptop o Tablet.</li><li><strong>Conectar a una pantalla grande (Opcional)</strong>: Si eres administrador de una cancha, conecta la Laptop a una TV colgante o proyector mediante un cable HDMI.</li><li><strong>Entrar en Modo de Pantalla Completa</strong>: Haz clic en el botón Pantalla Completa para una visualización máxima.</li><li><strong>Configurar el Partido</strong>: Haz clic en el texto del nombre del equipo para cambiar los nombres. Configura la duración del tiempo (ej.: 20 minutos).</li><li><strong>¡Saque inicial!</strong>: Presiona \"Iniciar\".</li><li><strong>Actualización en tiempo real</strong>: Presiona (+) en Puntuación si ocurre un gol. Presiona (+) en Falta si el árbitro pita una infracción. Presiona Pausa si el balón sale.</li></ol>"
        },
        {
          title: "Entiende las reglas del Fútbol Sala para que jugar sea más divertido",
          content: "<p>El uso de esta herramienta también ayuda a tu comunidad a aprender la disciplina de las reglas reales del fútbol sala:</p><ul><li><strong>Reloj Parado vs. Reloj Corrido</strong>: El fútbol sala profesional utiliza 20 minutos de Reloj Parado (el reloj se detiene cada vez que el balón está muerto). Sin embargo, para los alquileres de canchas públicas, suelen usar Reloj Corrido (el reloj sigue funcionando). Con nuestra función de Pausa/Reanudación, eres libre de elegir qué estilo de juego quieres aplicar.</li><li><strong>Regla de Faltas Acumuladas</strong>: Muchos equipos amateurs subestiman las faltas. ¡Recuerda, en el fútbol sala, cada falta cuenta! Si tu equipo ha cometido 5 faltas en una mitad, debes jugar con mucho cuidado. Usa el Contador de Faltas en esta herramienta para mantener a ambos equipos alerta.</li></ul>"
        },
        {
          title: "¿Listo para un partido de nivel Pro?",
          content: "<p>No dejes que tu emocionante partido se arruine por olvidar el marcador o debatir el tiempo. Haz que tu práctica de sparring o tu torneo local se sientan como una Liga Profesional con una visualización de puntuación clara. Gratis, Fácil y Profesional. ¡Prueba el Marcador Digital de Fútbol Sala VersoKit ahora mismo!</p>"
        }
      ]
    },
    pt: {
      title: "Placar Digital de Futsal Online: Grátis, Cronômetro e Contador de Faltas",
      sections: [
        {
          title: "Placar Pro para Sparing e Torneios",
          content: "<p>Jogar futsal parece menos emocionante se não houver um placar e um tempo claros. Você já experimentou um momento estranho durante o sparring: debatendo o placar (\"Ei, foi 4-3 ou 4-4?\"), ou confuso sobre quantos minutos restam?</p><p>Um problema clássico em quadras de futsal não profissionais é a falta de um Placar adequado. O preço de um placar digital físico pode chegar a milhões de rúpias ($150 - $400), um investimento bastante caro para gestores de pequenas quadras ou comunidades. Enquanto isso, usar um cronômetro no telefone costuma ser ineficaz porque a tela é pequena e só pode ser vista por uma pessoa. VersoKit apresenta uma solução inteligente: <strong>Placar Digital de Futsal</strong>. Esta ferramenta baseada na web transforma instantaneamente e gratuitamente seu Laptop, Tablet ou Celular em um placar profissional!</p>"
        },
        {
          title: "Por que você precisa do Placar VersoKit?",
          content: "<p>Esta ferramenta não é apenas um gravador de números. Nós a projetamos com recursos específicos que seguem os padrões de regulação internacional de futsal (FIFA). Aqui estão os recursos principais que você pode aproveitar:</p><ul><li><strong>1. Cronômetro de Jogo Flexível (Contagem Regressiva)</strong>: No futsal profissional, o tempo é tudo. Esta ferramenta está equipada com um cronômetro de contagem regressiva que você pode configurar — seja os 20 minutos padrão (metade pro) ou 15 minutos (sparring casual). <strong>Pausar e Retomar</strong>: Bola fora? Goleiro lesionado? Basta pressionar o botão Pausa. O tempo para, e Retomar quando a bola rolar novamente. Perfeito para simular o tempo de \"Cronômetro Parado\".</li><li><strong>2. Contador de Faltas - Um recurso crucial!</strong>: Este é um recurso muitas vezes esquecido pelos aplicativos de pontuação comuns. No futsal, as faltas acumuladas determinam os resultados do jogo. Nossa ferramenta rastreia as faltas acumuladas de 0 a 5. <strong>Indicador Visual</strong>: Quando uma equipe atinge 5 faltas, você e os jogadores em campo perceberão que a próxima falta (a 6ª) significa uma penalidade de tiro livre direto do Segundo Ponto de Penalidade.</li><li><strong>3. Aparência Profissional (Customizável)</strong>: <strong>Editar Nomes das Equipes</strong>: Diga adeus ao texto entediante \"Casa vs Fora\". Você pode alterá-lo para nomes de equipes reais, ex.: \"Garuda FC\" vs \"Harimau FC\". <strong>Indicador de Período</strong>: Marcadores claros para 1º Tempo, 2º Tempo ou Tempo Extra.</li></ul>"
        },
        {
          title: "Vantagens Técnicas: Avançado sem Complicações",
          content: "<p>Sabemos que os operadores de quadra ou árbitros não querem se preocupar com instalações complicadas. Portanto, o Placar de Futsal VersoKit é construído com tecnologia moderna:</p><ul><li><strong>Baseado na Web e sem instalação</strong>: Não é necessário encher a memória do telefone baixando aplicativos da PlayStore/AppStore. Basta abrir o navegador (Chrome/Safari/Edge) e a ferramenta estará pronta para uso.</li><li><strong>Modo de Tela Cheia</strong>: Quer uma tela como na TV da Liga Pro? Clique no botão Tela Cheia. Todos os elementos do navegador desaparecerão, deixando um placar limpo e elegante.</li><li><strong>Pronto para uso offline</strong>: A internet na quadra de futsal costuma ser lenta? Relaxe. Assim que esta página estiver completamente aberta, o Cronômetro e o Placar continuam funcionando normalmente, mesmo que a internet seja desconectada.</li><li><strong>Responsivo</strong>: A tela se ajusta automaticamente. Perfeito em um Laptop para se conectar a uma TV/Projetor via cabo HDMI. Ideal em um Tablet/Celular para os árbitros controlarem o placar da lateral.</li></ul>"
        },
        {
          title: "Como usar este Placar de Futsal",
          content: "<p>Leva apenas 1 minuto para começar uma partida como um profissional:</p><ol><li><strong>Preparar o Dispositivo</strong>: Abra esta página do VersoKit em seu Laptop ou Tablet.</li><li><strong>Conectar a uma tela grande (Opcional)</strong>: Se você for um gestor de quadra, conecte o Laptop a uma TV suspensa ou projetor usando um cabo HDMI.</li><li><strong>Entrar no Modo de Tela Cheia</strong>: Clique no botão Tela Cheia para visualização máxima.</li><li><strong>Configurar a Partida</strong>: Clique no texto do nome da equipe para alterar os nomes. Configure a duração do tempo (ex.: 20 minutos).</li><li><strong>Início de jogo!</strong>: Pressione \"Iniciar\".</li><li><strong>Atualização em tempo real</strong>: Pressione (+) no Placar se ocorrer um gol. Pressione (+) na Falta se o árbitro apitar uma infração. Pressione Pausa se a bola sair.</li></ol>"
        },
        {
          title: "Entenda as regras do Futsal para tornar o jogo mais divertido",
          content: "<p>O uso desta ferramenta também ajuda sua comunidade a aprender a disciplina das regras reais do futsal:</p><ul><li><strong>Cronômetro Parado vs. Cronômetro Corrido</strong>: O futsal profissional utiliza 20 minutos de Cronômetro Parado (o relógio para toda vez que a bola está morta). No entanto, para aluguéis de quadras públicas, costumam usar Cronômetro Corrido (o relógio continua funcionando). Com nossa função de Pausar/Retomar, você é livre para escolher qual estilo de jogo deseja aplicar.</li><li><strong>Regra de Faltas Acumuladas</strong>: Muitas equipes amadoras subestimam as faltas. Lembre-se, no futsal, cada falta conta! Se sua equipe cometeu 5 faltas em um tempo, você deve jogar com muito cuidado. Use o Contador de Faltas nesta ferramenta para manter as duas equipes alertas.</li></ul>"
        },
        {
          title: "Pronto para um jogo de nível Pro?",
          content: "<p>Não deixe seu jogo emocionante ser arruinado por esquecer o placar ou debater o tempo. Faça com que seu treino de sparring ou torneio local pareçam uma Liga Profissional com uma visualização de pontuação clara. Grátis, Fácil e Profissional. Experimente o Placar Digital de Futsal VersoKit agora mesmo!</p>"
        }
      ]
    },
    fr: {
      title: "Tableau de Score Futsal Digital en Ligne : Gratuit, Timer & Compteur de Fautes",
      sections: [
        {
          title: "Tableau de Score Pro pour les Sparing & Tournois",
          content: "<p>Jouer au futsal est moins excitant s'il n'y a pas de tableau de score et de temps clair. Avez-vous déjà vécu un moment embarrassant pendant un sparring : débattre du score (\"Hé, c'était 4-3 ou 4-4 ?\"), ou être confus sur le nombre de minutes restantes ?</p><p>Un problème classique sur les terrains de futsal non professionnels est l'absence d'un tableau de score approprié. Le prix d'un tableau de score numérique physique peut atteindre des millions de roupies (150 € - 400 €), un investissement assez coûteux pour les gestionnaires de petits terrains ou les communautés. Pendant ce temps, utiliser un chronomètre sur un téléphone est souvent inefficace car l'écran est petit et ne peut être vu que par une seule personne. VersoKit présente une solution intelligente : <strong>Tableau de Score Futsal Digital</strong>. Cet outil en ligne transforme instantanément et gratuitement votre ordinateur portable, tablette ou téléphone en un tableau de score professionnel !</p>"
        },
        {
          title: "Pourquoi avez-vous besoin du Tableau de Score VersoKit ?",
          content: "<p>Cet outil n'est pas seulement un enregistreur de chiffres. Nous l'avons conçu avec des fonctionnalités spécifiques qui suivent les normes de réglementation internationales du futsal (FIFA). Voici les fonctionnalités clés dont vous pouvez profiter :</p><ul><li><strong>1. Timer de Match Flexible (Compte à Rebours)</strong> : Dans le futsal professionnel, le temps est tout. Cet outil est équipé d'un compte à rebours que vous pouvez régler, soit les 20 minutes standard (mi-temps pro), soit 15 minutes (sparring décontracté). <strong>Pause & Reprise</strong> : Ballon hors limites ? Gardien blessé ? Appuyez simplement sur le bouton Pause. Le temps s'arrête, et Reprendre quand le ballon roule à nouveau. Parfait pour simuler le temps de \"Chronomètre Arrêté\".</li><li><strong>2. Compteur de Fautes - Une fonctionnalité cruciale !</strong> : C'est une fonctionnalité souvent oubliée par les applications de score classiques. Au futsal, les fautes accumulées déterminent les résultats du match. Notre outil suit les fautes accumulées de 0 à 5. <strong>Indicateur Visuel</strong> : Lorsqu'une équipe atteint 5 fautes, vous et les joueurs sur le terrain réaliserez que la faute suivante (la 6e) signifie une pénalité de coup franc direct au deuxième point de penalty.</li><li><strong>3. Apparence Professionnelle (Personnalisable)</strong> : <strong>Modifier les Noms des Équipes</strong> : Dites adieu au texte ennuyeux \"Domicile vs Extérieur\". Vous pouvez le changer pour de vrais noms d'équipes, ex : \"Garuda FC\" vs \"Harimau FC\". <strong>Indicateur de Période</strong> : Des marqueurs clairs pour la 1ère mi-temps, la 2e mi-temps ou les prolongations.</li></ul>"
        },
        {
          title: "Avantages Techniques : Avancé sans Tracas",
          content: "<p>Nous savons que les gestionnaires de terrains ou les arbitres ne veulent pas s'embêter avec des installations compliquées. Par conséquent, le Tableau de Score Futsal VersoKit est construit avec une technologie moderne :</p><ul><li><strong>Basé sur le Web et sans installation</strong> : Pas besoin de remplir la mémoire du téléphone en téléchargeant des applications sur le PlayStore/AppStore. Ouvrez simplement le navigateur (Chrome/Safari/Edge) et l'outil est prêt à l'emploi.</li><li><strong>Mode Plein Écran</strong> : Vous voulez un affichage comme sur la TV de la Ligue Pro ? Cliquez sur le bouton Plein Écran. Tous les éléments du navigateur disparaîtront, laissant un tableau de score propre et élégant.</li><li><strong>Prêt pour le mode hors ligne</strong> : L'internet sur le terrain de futsal est-il souvent lent ? Détendez-vous. Une fois cette page complètement ouverte, le Timer et le Score continuent de fonctionner normalement même si l'internet est déconnecté.</li><li><strong>Responsif</strong> : L'affichage s'ajuste automatiquement. Parfait sur un ordinateur portable pour être connecté à une TV/Projecteur via un câble HDMI. Idéal sur une tablette/téléphone pour que les arbitres contrôlent le score depuis la ligne de touche.</li></ul>"
        },
        {
          title: "Comment utiliser ce Tableau de Score Futsal",
          content: "<p>Il ne faut que 1 minute pour commencer un match comme un professionnel :</p><ol><li><strong>Préparer l'Appareil</strong> : Ouvrez cette page VersoKit sur votre ordinateur portable ou votre tablette.</li><li><strong>Connecter à un grand écran (Facultatif)</strong> : Si vous êtes un gestionnaire de terrain, connectez l'ordinateur portable à une TV suspendue ou à un projecteur à l'aide d'un câble HDMI.</li><li><strong>Entrer en Mode Plein Écran</strong> : Cliquez sur le bouton Plein Écran pour un affichage maximal.</li><li><strong>Régler le Match</strong> : Cliquez sur le texte du nom de l'équipe pour changer les noms. Réglez la durée (ex : 20 minutes).</li><li><strong>Coup d'envoi !</strong> : Appuyez sur \"Démarrer\".</li><li><strong>Mise à jour en temps réel</strong> : Appuyez sur (+) sur le Score si un but est marqué. Appuyez sur (+) sur la Faute si l'arbitre siffle une infraction. Appuyez sur Pause si le ballon sort.</li></ol>"
        },
        {
          title: "Comprenez les règles du Futsal pour rendre le jeu plus amusant",
          content: "<p>L'utilisation de cet outil aide également votre communauté à apprendre la discipline des vraies règles du futsal :</p><ul><li><strong>Temps de Jeu vs. Temps Réel</strong> : Le futsal professionnel utilise 20 minutes de Temps de Jeu (le chrono s'arrête à chaque fois que le ballon est mort). Cependant, pour les locations de terrains publics, on utilise généralement le Temps Réel (le chrono continue de tourner). Avec notre fonction Pause/Reprise, vous êtes libre de choisir le style de jeu que vous souhaitez appliquer.</li><li><strong>Règle des Fautes Accumulées</strong> : Beaucoup d'équipes amateurs sous-estiment les fautes. Rappelez-vous, au futsal, chaque faute compte ! Si votre équipe a commis 5 fautes dans une mi-temps, vous devez jouer très prudemment. Utilisez le Compteur de Fautes de cet outil pour garder les deux équipes vigilantes.</li></ul>"
        },
        {
          title: "Prêt pour un match de niveau Pro ?",
          content: "<p>Ne laissez pas votre match passionnant être gâché par l'oubli du score ou un débat sur le temps. Faites en sorte que votre entraînement de sparring ou votre tournoi local ressemble à une Ligue Professionnelle avec une visualisation claire du score. Gratuit, Facile et Professionnel. Essayez le Tableau de Score Futsal Digital VersoKit dès maintenant !</p>"
        }
      ]
    },
    it: {
      title: "Tabellone Digitale Calcio a 5 Online: Gratuito, Timer e Conteggio Falli",
      sections: [
        {
          title: "Tabellone Pro per Sparing e Tornei",
          content: "<p>Giocare a calcio a 5 è meno emozionante se non c'è un tabellone e un tempo chiari. Hai mai vissuto un momento imbarazzante durante lo sparring: discutere sul punteggio (\"Ehi, era 4-3 o 4-4?\"), o essere confuso su quanti minuti mancano?</p><p>Un problema classico nei campi di calcio a 5 non professionali è la mancanza di un tabellone adeguato. Il prezzo di un tabellone digitale fisico può raggiungere milioni di rupie ($150 - $400), un investimento piuttosto costoso per i gestori di piccoli campi o per le comunità. Nel frattempo, usare un cronometro sul telefono è spesso inefficace perché lo schermo è piccolo e può essere visto solo da una persona. VersoKit presenta una soluzione intelligente: <strong>Tabellone Digitale Calcio a 5</strong>. Questo strumento online trasforma istantaneamente e gratuitamente il tuo Laptop, Tablet o Telefono in un tabellone professionale!</p>"
        },
        {
          title: "Perché hai bisogno del Tabellone VersoKit?",
          content: "<p>Questo strumento non è solo un registratore di numeri. Lo abbiamo progettato con caratteristiche specifiche che seguono gli standard internazionali di regolamentazione del calcio a 5 (FIFA). Ecco le caratteristiche chiave di cui puoi godere:</p><ul><li><strong>1. Timer di Gara Flessibile (Conto alla Rovescia)</strong>: Nel calcio a 5 professionale, il tempo è tutto. Questo strumento è dotato di un timer per il conto alla rovescia che puoi impostare — o i 20 minuti standard (tempo pro) o i 15 minuti (sparring amichevole). <strong>Pausa e Ripresa</strong>: Palla fuori? Portiere infortunato? Basta premere il pulsante Pausa. Il tempo si ferma, e Riprendi quando la palla torna in gioco. Perfetto per simulare il tempo di \"Cronometro Fermo\".</li><li><strong>2. Conteggio Falli - Una funzione cruciale!</strong>: Questa è una funzione spesso dimenticata dalle normali app di punteggio. Nel calcio a 5, i falli accumulati determinano i risultati della gara. Il nostro strumento traccia i falli accumulati da 0 a 5. <strong>Indicatore Visivo</strong>: Quando una squadra raggiunge i 5 falli, tu e i giocatori in campo vi renderete conto che il fallo successivo (il 6°) significa una penalità di tiro libero diretto dal Secondo Punto del Rigore.</li><li><strong>3. Aspetto Professionale (Personalizzabile)</strong>: <strong>Modifica Nomi Squadre</strong>: Dì addio al noioso testo \"Casa vs Ospiti\". Puoi cambiarlo con i nomi reali delle squadre, ad es.: \"Garuda FC\" vs \"Harimau FC\". <strong>Indicatore di Periodo</strong>: Marcatori chiari per 1° Tempo, 2° Tempo o Tempi Supplementari.</li></ul>"
        },
        {
          title: "Vantaggi Tecnici: Avanzato senza Problemi",
          content: "<p>Sappiamo che i gestori dei campi o gli arbitri non vogliono essere disturbati da installazioni complicate. Pertanto, il Tabellone Calcio a 5 VersoKit è costruito con tecnologia moderna:</p><ul><li><strong>Basato sul Web e senza installazione</strong>: Non è necessario riempire la memoria del telefono scaricando app dal PlayStore/AppStore. Basta aprire il browser (Chrome/Safari/Edge) e lo strumento è pronto all'uso.</li><li><strong>Modalità Schermo Intero</strong>: Vuoi una visualizzazione come sulla TV della Lega Pro? Clicca sul pulsante Schermo Intero. Tutti gli elementi del browser scompariranno, lasciando un tabellone pulito ed elegante.</li><li><strong>Pronto per l'uso offline</strong>: L'internet sul campo di calcio a 5 è spesso lento? Rilassati. Una volta che questa pagina è completamente aperta, il Timer e il Punteggio continuano a funzionare normalmente anche se l'internet viene scollegato.</li><li><strong>Resposivo</strong>: La visualizzazione si adatta automaticamente. Perfetto su un Laptop per essere collegato a una TV/Proiettore tramite cavo HDMI. Ideale su un Tablet/Telefono per gli arbitri per controllare il punteggio da bordo campo.</li></ul>"
        },
        {
          title: "Come usare questo Tabellone per il Calcio a 5",
          content: "<p>Ci vuole solo 1 minuto per iniziare una gara come un professionista:</p><ol><li><strong>Prepara il Dispositivo</strong>: Apri questa pagina di VersoKit sul tuo Laptop o Tablet.</li><li><strong>Collega a uno schermo grande (Opzionale)</strong>: Se sei un gestore di un campo, collega il Laptop a una TV sospesa o a un proiettore usando un cavo HDMI.</li><li><strong>Entra in Modalità Schermo Intero</strong>: Clicca sul pulsante Schermo Intero per la massima visualizzazione.</li><li><strong>Imposta la Gara</strong>: Clicca sul testo del nome della squadra per cambiare i nomi. Imposta la durata del tempo (ad es.: 20 minuti).</li><li><strong>Calcio d'inizio!</strong>: Premi \"Inizia\".</li><li><strong>Aggiornamento in tempo reale</strong>: Premi (+) sul Punteggio se viene segnato un gol. Premi (+) sul Fallo se l'arbitro fischia un'infrazione. Premi Pausa se la palla esce.</li></ol>"
        },
        {
          title: "Comprendi le regole del Calcio a 5 per rendere il gioco più divertente",
          content: "<p>L'uso di questo strumento aiuta anche la tua comunità a imparare la disciplina delle vere regole del calcio a 5:</p><ul><li><strong>Cronometro Fermo vs. Cronometro Scorrevole</strong>: Il calcio a 5 professionale utilizza 20 minuti di Cronometro Fermo (l'orologio si ferma ogni volta che la palla è morta). Tuttavia, per gli affitti dei campi pubblici, di solito usano il Cronometro Scorrevole (l'orologio continua a scorrere). Con la nostra funzione Pausa/Ripresa, sei libero di scegliere quale stile di gioco vuoi applicare.</li><li><strong>Regola dei Falli Accumulati</strong>: Molte squadre amatoriali sottovalutano i falli. Ricorda, nel calcio a 5, ogni fallo conta! Se la tua squadra ha commesso 5 falli in un tempo, devi giocare con molta attenzione. Usa il Conteggio Falli in questo strumento per mantenere entrambe le squadre all'erta.</li></ul>"
        },
        {
          title: "Pronto per un match di livello Pro?",
          content: "<p>Non lasciare che il tuo match emozionante sia rovinato dimenticando il punteggio o discutendo sul tempo. Fai in modo che il tuo allenamento di sparring o il tuo torneo locale sembrino una Lega Professionale con una visualizzazione del punteggio chiara. Gratuito, Facile e Professionale. Prova il Tabellone Digitale Calcio a 5 VersoKit proprio ora!</p>"
        }
      ]
    }
  },
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
      title: "Tennis-Match-Generator",
      sections: [{ title: "Fairer Match-Generator", content: "Tennis-Match-Generator. Erstellen Sie mühelos ausgewogene Doppelspiele. Perfekt für gesellige Club-Sessions." }]
    },
    es: {
      title: "Generador de Partidos de Tenis",
      sections: [{ title: "Generador de Partidos Justos", content: "Generador de Partidos de Tenis. Crea partidos de dobles equilibrados sin esfuerzo. Perfecto para sesiones sociales de clubes." }]
    },
    pt: {
      title: "Gerador de Partidas de Tênis",
      sections: [{ title: "Gerador de Partidas Justas", content: "Gerador de Partidas de Tênis. Crie jogos de duplas equilibrados facilmente. Perfeito para sessões sociais de clubes." }]
    },
    fr: {
      title: "Générateur de Matchs de Tennis",
      sections: [{ title: "Générateur de Matchs Équitables", content: "Générateur de Matchs de Tennis. Créez des matchs de double équilibrés sans effort. Parfait pour les sessions sociales du club." }]
    },
    it: {
      title: "Generatore Partite Tennis",
      sections: [{ title: "Generatore di Partite Eque", content: "Generatore Partite Tennis. Crea partite di doppio equilibrate senza sforzo. Perfetto per sessioni sociali di club." }]
    }
  },
  "budget-planner": {
    en: {
      title: "Complete Guide & FAQ",
      sections: [
        {
          title: "What is Zero-Based Budgeting?",
          content: "<p>Zero-Based Budgeting (ZBB) is a method where every single dollar of your income is assigned to a specific category (Savings, Bills, Needs) until you have zero left to budget. The goal is to give every dollar a job.</p>"
        },
        {
          title: "Why Choose VersoKit Budget Planner?",
          content: "<ul><li><strong>Privacy First:</strong> Your financial data stays in your browser. We never see it.</li><li><strong>Offline Ready:</strong> Budget on the go, even without a connection.</li><li><strong>Zero Cost:</strong> No monthly subscriptions, ever.</li></ul>"
        },
        {
          title: "Handling Overspending",
          content: "<p>If a category turns red (negative), use the \"Fix\" button to move money from another category (e.g., from \"Entertainment\") to cover the cost. This keeps your budget balanced.</p>"
        },
        {
          title: "Frequently Asked Questions",
          content: "<p><strong>Q: Is my data safe?</strong><br>A: Yes, it is stored locally on your device using LocalStorage technology.</p>"
        }
      ]
    },
    id: {
      title: "Panduan Lengkap & FAQ",
      sections: [
        {
          title: "Apa itu Zero-Based Budgeting?",
          content: "<p>Zero-Based Budgeting (ZBB) atau Anggaran Berbasis Nol adalah metode di mana setiap rupiah penghasilan Anda harus dialokasikan ke pos tertentu (Tabungan, Tagihan, atau Kebutuhan) hingga tersisa nol. Tujuannya bukan menghabiskan uang, melainkan memastikan setiap uang \"memiliki pekerjaan\".</p>"
        },
        {
          title: "Mengapa Menggunakan Budget Planner VersoKit?",
          content: "<p>Kebanyakan aplikasi anggaran terlalu rumit atau berbayar mahal. VersoKit hadir dengan pendekatan berbeda:</p><ul><li><strong>Privasi 100%:</strong> Data keuangan Anda tersimpan di browser (LocalStorage), tidak dikirim ke server kami. Aman dari kebocoran data.</li><li><strong>Bisa Offline:</strong> Gunakan saat tidak ada sinyal internet.</li><li><strong>Gratis Selamanya:</strong> Tanpa biaya langganan bulanan.</li></ul>"
        },
        {
          title: "Cara Menggunakan Fitur \"Cover Overspending\"",
          content: "<p>Jika kategori \"Makan\" Anda merah (minus), jangan panik. Klik tombol \"Fix\" dan pilih kategori lain (misal: \"Hiburan\") untuk menutupi kekurangannya. Ini disebut prinsip <em>Roll with the Punches</em>.</p>"
        },
        {
          title: "FAQ (Pertanyaan Umum)",
          content: "<p><strong>Q: Apakah data saya hilang jika browser ditutup?</strong><br>A: Tidak. Data tersimpan otomatis di perangkat Anda.</p><p><strong>Q: Bisakah saya memindahkan data ke HP lain?</strong><br>A: Bisa. Gunakan fitur \"Manajemen Data\" > \"Ekspor JSON\", lalu kirim file tersebut ke HP baru dan lakukan \"Impor JSON\".</p>"
        }
      ]
    },
    de: {
      title: "Vollständiger Leitfaden & FAQ",
      sections: [
        {
          title: "Was ist nullbasiertes Budgetieren?",
          content: "<p>Nullbasiertes Budgetieren (ZBB) ist eine Methode, bei der jeder einzelne Euro Ihres Einkommens einer bestimmten Kategorie zugewiesen wird, bis null Euro übrig bleiben. Das Ziel ist es, jedem Euro eine Aufgabe zu geben.</p>"
        }
      ]
    },
    es: {
      title: "Guía Completa y FAQ",
      sections: [
        {
          title: "¿Qué es el Presupuesto Base Cero?",
          content: "<p>El Presupuesto Base Cero (ZBB) es un método en el que cada euro de sus ingresos se asigna a una categoría específica hasta que queden cero euros por presupuestar.</p>"
        }
      ]
    },
    pt: {
      title: "Guia Completo e FAQ",
      sections: [
        {
          title: "O que é Orçamento Base Zero?",
          content: "<p>Orçamento Base Zero (ZBB) é um método onde cada centavo de sua renda é atribuído a uma categoria específica até que reste zero para orçar.</p>"
        }
      ]
    },
    fr: {
      title: "Guide Complet & FAQ",
      sections: [
        {
          title: "Qu'est-ce que le budget base zéro ?",
          content: "<p>Le budget base zéro (ZBB) est une méthode où chaque euro de votre revenu est affecté à une catégorie spécifique jusqu'à ce qu'il reste zéro à budgétiser.</p>"
        }
      ]
    },
    it: {
      title: "Guida Completa e FAQ",
      sections: [
        {
          title: "Cos'è il budget a base zero?",
          content: "<p>Il budget a base zero (ZBB) è un metodo in cui ogni singolo euro del tuo reddito viene assegnato a una categoria specifica fino a quando non rimangono zero euro da preventivare.</p>"
        }
      ]
    }
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
    en: { title: "Stock Management", sections: [
      { title: "Tool Overview", content: "Stock Management Tool. Track items, quantities, and low stock alerts. Runs offline." }
    ]},
    id: { title: "Manajemen Stok", sections: [
      { title: "Ringkasan Alat", content: "Alat Manajemen Stok. Lacak barang, jumlah, dan peringatan stok menipis. Berjalan offline." }
    ]},
    de: { title: "Lagerverwaltung", sections: [{ title: "Überblick", content: "Lagerverwaltung. Verfolgen Sie Artikel und Bestände offline." }] },
    es: { title: "Gestión de Inventario", sections: [{ title: "Descripción", content: "Gestión de Inventario. Controla artículos y stock bajo offline." }] },
    pt: { title: "Gestão de Estoque", sections: [{ title: "Visão Geral", content: "Gestão de Estoque. Acompanhe itens e alertas de estoque baixo." }] },
    fr: { title: "Gestion de Stock", sections: [{ title: "Aperçu", content: "Gestion de Stock. Suivez les articles et les alertes de stock faible." }] },
    it: { title: "Gestione Inventario", sections: [{ title: "Panoramica", content: "Gestione Inventario. Traccia articoli e scorte basse offline." }] }
  },
  "shift": {
    en: { title: "Shift Scheduler", sections: [
      { title: "Tool Overview", content: "Employee Shift Planner. Organize morning, afternoon, and night shifts easily. Download schedule." }
    ]},
    id: { title: "Jadwal Shift", sections: [
      { title: "Ringkasan Alat", content: "Jadwal Shift Karyawan. Atur shift pagi, siang, malam dengan mudah. Unduh jadwal." }
    ]},
    de: { title: "Schichtplaner", sections: [{ title: "Überblick", content: "Schichtplaner. Organisieren Sie Schichten einfach und laden Sie den Plan herunter." }] },
    es: { title: "Planificador de Turnos", sections: [{ title: "Descripción", content: "Planificador de Turnos. Organiza turnos de mañana, tarde y noche." }] },
    pt: { title: "Escala de Trabalho", sections: [{ title: "Visão Geral", content: "Escala de Trabalho. Organize turnos facilmente e baixe a escala." }] },
    fr: { title: "Planning d'Équipe", sections: [{ title: "Aperçu", content: "Planning d'Équipe. Organisez les 3x8 facilement." }] },
    it: { title: "Pianificatore Turni", sections: [{ title: "Panoramica", content: "Pianificatore Turni. Organizza i turni facilmente." }] }
  },
  "split-bill": {
    en: { title: "Split Bill", sections: [
      { title: "Tool Overview", content: "Restaurant Bill Splitter. Calculate tax and service charge accurately for groups." }
    ]},
    id: { title: "Bagi Tagihan", sections: [
      { title: "Ringkasan Alat", content: "Pembagi Tagihan Restoran. Hitung pajak dan layanan secara akurat untuk grup." }
    ]},
    de: { title: "Rechnungsteiler", sections: [{ title: "Überblick", content: "Rechnungsteiler. Berechnen Sie Steuern und Servicegebühren präzise." }] },
    es: { title: "Dividir Cuenta", sections: [{ title: "Descripción", content: "Dividir Cuenta. Calcula impuestos y servicio con precisión." }] },
    pt: { title: "Dividir Conta", sections: [{ title: "Visão Geral", content: "Dividir Conta. Calcule impostos e taxas de serviço." }] },
    fr: { title: "Partage d'Addition", sections: [{ title: "Aperçu", content: "Partage d'Addition. Calculez taxes et service avec précision." }] },
    it: { title: "Divisione Conto", sections: [{ title: "Panoramica", content: "Divisione Conto. Calcola tasse e servizio con precisione." }] }
  },
  "image-resizer": {
    en: { title: "Image Resizer", sections: [{ title: "Privacy-First Resizing", content: "Resize images specifically for Instagram, TikTok, or Passports. Processed 100% in your browser." }] },
    id: { title: "Ubah Ukuran Gambar", sections: [{ title: "Ubah Ukuran Aman", content: "Ubah ukuran foto khusus untuk Instagram, TikTok, atau Paspor. Diproses 100% di browser Anda, tanpa upload server." }] },
    de: { title: "Bildgröße ändern", sections: [{ title: "Datenschutzfreundliche Größenänderung", content: "Bildgröße für Instagram oder Pässe ändern. 100% im Browser verarbeitet." }] },
    es: { title: "Redimensionar Imagen", sections: [{ title: "Redimensionado Seguro", content: "Cambia el tamaño para Instagram o Pasaporte. Procesado 100% en tu navegador." }] },
    pt: { title: "Redimensionar Imagem", sections: [{ title: "Redimensionamento Seguro", content: "Redimensione para Instagram ou Passaporte. Processado 100% no navegador." }] },
    fr: { title: "Redimensionner Image", sections: [{ title: "Redimensionnement Sécurisé", content: "Redimensionnez pour Instagram ou Passeport. Traité à 100% dans votre navigateur." }] },
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
  "tournament": {
    en: { title: "Tournament Manager", sections: [{ title: "Organizer", content: "Create round-robin tournament brackets and auto-updating leaderboards." }] },
    id: { title: "Manajer Turnamen", sections: [{ title: "Penyelenggara", content: "Buat bagan turnamen round-robin dan klasemen otomatis." }] },
    de: { title: "Turniermanager", sections: [{ title: "Organisation", content: "Erstellen Sie Round-Robin-Spielpläne und Tabellen." }] },
    es: { title: "Gestor de Torneos", sections: [{ title: "Organizador", content: "Crea cuadros de torneo round-robin y clasificaciones automáticas." }] },
    pt: { title: "Gestor de Torneios", sections: [{ title: "Organizador", content: "Crie chaves de torneio round-robin e placares automáticos." }] },
    fr: { title: "Gestionnaire de Tournoi", sections: [{ title: "Organisateur", content: "Créez des tournois round-robin et des classements automatiques." }] },
    it: { title: "Gestore Torneo", sections: [{ title: "Organizzatore", content: "Crea tabelloni per tornei round-robin e classifiche automatiche." }] }
  }
};
