
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
          content: "<p>Mau main format Americano tapi malas hitung manual? Gunakan Americano Generator & Scoreboard otomatis kami. Gratis, tanpa install aplikasi. Coba sekarang!</p><p>Apakah Anda sedang merencanakan sesi fun game Padel, Pickleball, atau Tenis akhir pekan ini? Format Americano pasti jadi pilihan utama agar suasana lebih cair dan kompetitif.</p><p>Tapi, kita semua tahu masalah utamanya: Mengatur jadwal dan menghitung poin secara manual itu memusingkan. Siapa berpasangan dengan siapa? Siapa yang harus istirahat? Bagaimana klasemen akhirnya? Jangan biarkan kertas, pulpen, atau rumus Excel yang rumit merusak keseruan Anda di lapangan.</p><p>Solusinya ada di sini. Kami menyediakan Americano Generator Tool yang bisa Anda gunakan langsung di halaman ini. Cukup masukkan nama pemain, dan biarkan sistem kami mengatur sisanya.</p>" 
        },
        { 
          title: "Apa Itu Format Americano?", 
          content: "<p>Bagi Anda yang baru pertama kali mencoba, Americano adalah format turnamen sosial yang paling adil dan seru. Konsep dasarnya sederhana:</p><ul><li><strong>Ganti Pasangan:</strong> Anda akan bermain dengan pasangan berbeda di setiap pertandingan.</li><li><strong>Skor Individu:</strong> Meskipun bermain ganda, poin yang Anda dapatkan dihitung untuk diri sendiri.</li><li><strong>Tujuan:</strong> Mengumpulkan poin sebanyak mungkin untuk menjadi juara klasemen di akhir sesi.</li></ul><p>Format ini sangat cocok untuk komunitas Padel dan Pickleball karena memaksa semua pemain untuk saling berinteraksi (sosialisasi) sekaligus berkompetisi.</p>" 
        },
        { 
          title: "Masalah Klasik Saat Main Americano Manual", 
          content: "<p>Tanpa tools atau aplikasi, main Americano bisa jadi kacau:</p><ul><li><strong>Waktu Terbuang:</strong> Debat siapa lawan siapa bisa memakan waktu 5-10 menit sendiri.</li><li><strong>Tidak Adil:</strong> Tanpa algoritma, ada kemungkinan satu orang terus menerus dapat partner yang sama.</li><li><strong>Salah Hitung:</strong> Menjumlahkan skor puluhan pertandingan secara manual di kertas sangat rawan kesalahan.</li></ul>" 
        },
        { 
          title: "Fitur Unggulan Americano Generator Kami", 
          content: "<p>Mengapa Anda harus menggunakan tools di website kami daripada aplikasi lain?</p><ol><li><strong>Tanpa Download & Install:</strong> Penyimpanan HP penuh? Tenang. Tool kami berbasis web (web-based). Anda bisa membukanya langsung dari browser di lapangan tanpa perlu repot download aplikasi berat.</li><li><strong>Algoritma Fair Play:</strong> Sistem kami memastikan rotasi pemain seimbang. Setiap orang akan mendapatkan kesempatan yang adil untuk berganti pasangan dan melawan musuh yang berbeda.</li><li><strong>Live Leaderboard (Klasemen Langsung):</strong> Begitu Anda memasukkan skor pertandingan, klasemen akan otomatis terupdate. Semua pemain bisa melihat posisi mereka secara real-time dari HP masing-masing (jika link dibagikan).</li></ol>" 
        },
        { 
          title: "Cara Menggunakan Generator Americano Ini", 
          content: "<p>Sangat mudah, ikuti langkah berikut:</p><ol><li><strong>Masukkan Nama Pemain:</strong> Ketik nama semua peserta (Minimal 4 orang). Jumlah ganjil? Tidak masalah, sistem kami bisa mengatur pemain cadangan/istirahat secara bergilir.</li><li><strong>Pilih Poin Target:</strong> Tentukan mau main sampai poin berapa? (Umumnya 24 atau 32 poin).</li><li><strong>Generate Jadwal:</strong> Klik tombol buat jadwal.</li><li><strong>Main & Input Skor:</strong> Setelah match selesai, masukkan skornya.</li><li><strong>Lihat Pemenang:</strong> Di akhir sesi, sistem akan menobatkan juara Americano hari itu!</li></ol>" 
        },
        { 
          title: "Aturan Singkat Perhitungan Poin", 
          content: "<p>Agar penggunaan tool kami makin maksimal, pastikan semua pemain paham aturan mainnya:</p><ul><li><strong>Sistem Poin:</strong> Pertandingan dihitung per bola. Jika Tim A menang 14-10 lawan Tim B, maka Pemain Tim A masing-masing dapat 14 poin, dan Tim B masing-masing dapat 10 poin.</li><li><strong>Servis:</strong> Servis bergantian setiap 4 kali bola (2 kali Tim A, 2 kali Tim B).</li><li><strong>Pemenang:</strong> Pemain dengan total poin akumulasi tertinggi di akhir turnamen.</li></ul>" 
        },
        { 
          title: "Siap Bermain?", 
          content: "<p>Jangan habiskan waktu 2 jam sewa lapangan Anda hanya untuk mencatat skor di kertas. Maksimalkan waktu bermain dan biarkan teknologi yang bekerja untuk Anda.</p><p>Cobalah Americano Generator kami sekarang juga di bawah ini (atau di bagian atas halaman). Gratis, cepat, dan dijamin bikin permainan makin seru!</p>" 
        }
      ]
    },
    en: {
      title: "Automatic Americano Schedule Generator: Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Play Americano Hassle-Free: Use Our Automatic Schedule Generator & Scoreboard", 
          content: "<p>Want to play Americano format but lazy to calculate manually? Use our automatic Americano Generator & Scoreboard. Free, no app install required. Try now!</p><p>Are you planning a fun game session of Padel, Pickleball, or Tennis this weekend? The Americano format will surely be the top choice to make the atmosphere more fluid and competitive.</p><p>But we all know the main problem: Organizing the schedule and calculating points manually is confusing. Who pairs with whom? Who should rest? What is the final leaderboard? Don't let paper, pens, or complicated Excel formulas ruin your fun on the court.</p><p>The solution is here. We provide an Americano Generator Tool that you can use directly on this page. Simply enter the player names, and let our system handle the rest.</p>" 
        },
        { 
          title: "What is the Americano Format?", 
          content: "<p>For those of you trying it for the first time, Americano is the fairest and most exciting social tournament format. The basic concept is simple:</p><ul><li><strong>Switch Partners:</strong> You will play with a different partner in every match.</li><li><strong>Individual Score:</strong> Although playing doubles, the points you earn are counted for yourself.</li><li><strong>Goal:</strong> Collect as many points as possible to become the leaderboard champion at the end of the session.</li></ul><p>This format is perfect for Padel and Pickleball communities because it forces all players to interact (socialize) while competing at the same time.</p>" 
        },
        { 
          title: "Classic Problems When Playing Manual Americano", 
          content: "<p>Without tools or apps, playing Americano can become chaotic:</p><ul><li><strong>Wasted Time:</strong> Debating who plays whom can take 5-10 minutes on its own.</li><li><strong>Unfairness:</strong> Without an algorithm, there is a possibility that one person keeps getting the same partner.</li><li><strong>Calculation Errors:</strong> Manually adding up scores from dozens of matches on paper is very prone to mistakes.</li></ul>" 
        },
        { 
          title: "Superior Features of Our Americano Generator", 
          content: "<p>Why should you use the tools on our website instead of other apps?</p><ol><li><strong>No Download & Install:</strong> Phone storage full? Relax. Our tool is web-based. You can open it directly from your browser at the court without the hassle of downloading heavy apps.</li><li><strong>Fair Play Algorithm:</strong> Our system ensures balanced player rotation. Everyone will get a fair chance to switch partners and face different opponents.</li><li><strong>Live Leaderboard:</strong> As soon as you enter match scores, the standings will update automatically. All players can see their positions in real-time from their respective phones (if the link is shared).</li></ol>" 
        },
        { 
          title: "How to Use This Americano Generator", 
          content: "<p>It's very easy, follow these steps:</p><ol><li><strong>Enter Player Names:</strong> Type the names of all participants (Minimum 4 people). Odd number? No problem, our system can arrange substitute/resting players in rotation.</li><li><strong>Select Target Points:</strong> Determine how many points you want to play to? (Generally 24 or 32 points).</li><li><strong>Generate Schedule:</strong> Click the build schedule button.</li><li><strong>Play & Input Scores:</strong> After the match is finished, enter the scores.</li><li><strong>See the Winner:</strong> At the end of the session, the system will crown the Americano champion of the day!</li></ol>" 
        },
        { 
          title: "Quick Rules for Point Calculation", 
          content: "<p>To maximize the use of our tool, make sure all players understand the rules:</p><ul><li><strong>Point System:</strong> Matches are counted per ball. If Team A wins 14-10 against Team B, then Team A players each get 14 points, and Team B players each get 10 points.</li><li><strong>Service:</strong> Service rotates every 4 balls (2 times for Team A, 2 times for Team B).</li><li><strong>Winner:</strong> The player with the highest total accumulated points at the end of the tournament.</li></ul>" 
        },
        { 
          title: "Ready to Play?", 
          content: "<p>Don't spend your 2-hour court rental just to record scores on paper. Maximize your playing time and let technology work for you. Try our Americano Generator now below (or at the top of the page). Free, fast, and guaranteed to make the game even more exciting!</p>" 
        }
      ]
    },
    de: {
      title: "Automatischer Americano-Spielplan-Generator: Padel, Pickleball & Tennis",
      sections: [
        { 
          title: "Americano spielen ohne Stress: Nutzen Sie unseren automatischen Spielplan-Generator & Scoreboard", 
          content: "<p>Wollen Sie das Americano-Format spielen, haben aber keine Lust auf manuelles Rechnen? Nutzen Sie unseren automatischen Americano-Generator & Scoreboard. Kostenlos, ohne App-Installation. Jetzt ausprobieren!</p><p>Planen Sie dieses Wochenende eine unterhaltsame Spielrunde Padel, Pickleball oder Tennis? Das Americano-Format ist sicher die beste Wahl, um die Atmosphäre lockerer und wettbewerbsfähiger zu gestalten.</p><p>Aber wir alle kennen das Hauptproblem: Den Zeitplan zu organisieren und Punkte manuell zu berechnen, ist verwirrend. Wer spielt mit wem? Wer muss pausieren? Wie sieht die Endtabelle aus? Lassen Sie nicht zu, dass Papier, Stifte oder komplizierte Excel-Formeln Ihren Spaß auf dem Platz ruinieren.</p><p>Die Lösung ist hier. Wir bieten ein Americano-Generator-Tool an, das Sie direkt auf dieser Seite nutzen können. Geben Sie einfach die Spielernamen ein und lassen Sie unser System den Rest erledigen.</p>" 
        },
        { 
          title: "Was ist das Americano-Format?", 
          content: "<p>Für diejenigen unter Ihnen, die es zum ersten Mal ausprobieren: Americano ist das fairste und spannendste soziale Turnierformat. Das Grundkonzept ist einfach:</p><ul><li><strong>Partner wechseln:</strong> Sie spielen in jedem Spiel mit einem anderen Partner.</li><li><strong>Einzelwertung:</strong> Obwohl Sie Doppel spielen, werden die erzielten Punkte für Sie persönlich gezählt.</li><li><strong>Ziel:</strong> So viele Punkte wie möglich zu sammeln, um am Ende der Sitzung Tabellenführer zu werden.</li></ul><p>Dieses Format ist perfekt für Padel- und Pickleball-Communities, da es alle Spieler dazu zwingt, miteinander zu interagieren (sozialisieren) und gleichzeitig gegeneinander anzutreten.</p>" 
        },
        { 
          title: "Klassische Probleme beim manuellen Americano-Spiel", 
          content: "<p>Ohne Tools oder Apps kann das Americano-Spielen chaotisch werden: <ul><li><strong>Zeitverschwendung:</strong> Die Debatte darüber, wer gegen wen spielt, kann allein schon 5-10 Minuten dauern.</li><li><strong>Ungerechtigkeit:</strong> Ohne Algorithmus besteht die Möglichkeit, dass eine Person ständig denselben Partner bekommt.</li><li><strong>Rechenfehler:</strong> Das manuelle Zusammenzählen von Ergebnissen aus Dutzenden von Spielen auf Papier ist sehr fehleranfällig.</li></ul>" 
        },
        { 
          title: "Herausragende Merkmale unseres Americano-Generators", 
          content: "<p>Warum sollten Sie die Tools auf unserer Website anstelle von anderen Apps verwenden?</p><ol><li><strong>Kein Download & Installation:</strong> Telefonspeicher voll? Keine Sorge. Unser Tool ist webbasiert. Sie können es direkt über Ihren Browser auf dem Platz öffnen, ohne mühsam schwere Apps herunterladen zu müssen.</li><li><strong>Fair-Play-Algorithmus:</strong> Unser System sorgt für eine ausgewogene Spielerrotation. Jeder erhält die faire Chance, den Partner zu wechseln und gegen verschiedene Gegner anzutreten.</li><li><strong>Live-Rangliste:</strong> Sobald Sie Spielergebnisse eingeben, wird die Tabelle automatisch aktualisiert. Alle Spieler können ihre Positionen in Echtzeit auf ihren jeweiligen Handys sehen (wenn der Link geteilt wird).</li></ol>" 
        },
        { 
          title: "So verwenden Sie diesen Americano-Generator", 
          content: "<p>Es ist sehr einfach, folgen Sie diesen Schritten:</p><ol><li><strong>Spielernamen eingeben:</strong> Geben Sie die Namen aller Teilnehmer ein (mindestens 4 Personen). Ungerade Anzahl? Kein Problem, unser System kann Ersatz-/Ruhespieler im Wechsel einteilen.</li><li><strong>Zielpunkte wählen:</strong> Legen Sie fest, bis zu welcher Punktzahl Sie spielen möchten? (In der Regel 24 oder 32 Punkte).</li><li><strong>Spielplan erstellen:</strong> Klicken Sie auf die Schaltfläche „Spielplan erstellen“.</li><li><strong>Spielen & Ergebnisse eingeben:</strong> Geben Sie nach Spielende die Ergebnisse ein.</li><li><strong>Gewinner sehen:</strong> Am Ende der Sitzung wird das System den Americano-Champion des Tages krönen!</li></ol>" 
        },
        { 
          title: "Kurze Regeln zur Punktberechnung", 
          content: "<p>Damit die Nutzung unseres Tools optimal gelingt, stellen Sie sicher, dass alle Spieler die Regeln verstehen:</p><ul><li><strong>Punktsystem:</strong> Spiele werden pro Ball gezählt. Wenn Team A 14-10 gegen Team B gewinnt, erhalten die Spieler von Team A jeweils 14 Punkte und die Spieler von Team B jeweils 10 Punkte.</li><li><strong>Aufschlag:</strong> Der Aufschlag wechselt alle 4 Bälle (2 Mal für Team A, 2 Mal für Team B).</li><li><strong>Gewinner:</strong> Der Spieler mit der höchsten Gesamtpunktzahl am Ende des Turniers.</li></ul>" 
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
          content: "<p>¿Quieres jugar en formato Americano pero te da pereza calcular manualmente? Usa nuestro Generador y Marcador Americano automático. Gratis, sin instalar aplicaciones. ¡Pruébalo ahora!</p><p>¿Estás planeando una sesión de juego divertido de Pádel, Pickleball o Tenis este fin de semana? El formato Americano será sin duda la mejor opción para que el ambiente sea más fluido y competitivo.</p><p>Pero todos conocemos el problema principal: organizar el calendario y calcular los puntos manualmente es confuso. ¿Quién se empareja con quién? ¿Quién debe descansar? ¿Cómo queda la clasificación final? No dejes que el papel, los bolígrafos o las complicadas fórmulas de Excel arruinen tu diversión en la pista.</p><p>La solución está aquí. Ofrecemos una herramienta de generación de Americano que puedes usar directamente en esta página. Solo tienes que introducir los nombres de los jugadores y dejar que nuestro sistema se encargue del resto.</p>" 
        },
        { 
          title: "¿Qué es el Formato Americano?", 
          content: "<p>Para los que lo prueban por primera vez, el Americano es el formato de torneo social más justo y emocionante. El concepto básico es sencillo:</p><ul><li><strong>Cambiar de Pareja:</strong> Jugarás con una pareja diferente en cada partido.</li><li><strong>Puntuación Individual:</strong> Aunque juegues dobles, los puntos que consigas se cuentan para ti mismo.</li><li><strong>Objetivo:</strong> Acumular el mayor número de puntos posible para ser el campeón de la clasificación al final de la sesión.</li></ul><p>Este formato es perfecto para las comunidades de Pádel y Pickleball porque obliga a todos los jugadores a interactuar (socializar) y a competir al mismo tiempo.</p>" 
        },
        { 
          title: "Problemas Clásicos al Jugar Americano Manuelmente", 
          content: "<p>Sin herramientas ni aplicaciones, jugar al Americano puede volverse caótico: <ul><li><strong>Tiempo Perdido:</strong> Debatir quién juega contra quién puede llevar entre 5 y 10 minutos por sí solo.</li><li><strong>Injusticia:</strong> Sin un algoritmo, existe la posibilidad de que una persona siga teniendo la misma pareja constantemente.</li><li><strong>Errores de Cálculo:</strong> Sumar manualmente las puntuaciones de docenas de partidos en papel es muy propenso a errores.</li></ul>" 
        },
        { 
          title: "Características Superiores de Nuestro Generador de Americano", 
          content: "<p>¿Por qué deberías usar las herramientas de nuestro sitio web en lugar de otras aplicaciones?</p><ol><li><strong>Sin Descarga ni Instalación:</strong> ¿Memoria del móvil llena? Tranquilo. Nuestra herramienta está basada en la web. Puedes abrirla directamente desde tu navegador en la pista sin la molestia de descargar pesadas aplicaciones.</li><li><strong>Algoritmo de Juego Limpio:</strong> Nuestro sistema garantiza una rotación equilibrada de los jugadores. Todo el mundo tendrá una oportunidad justa de cambiar de pareja y enfrentarse a diferentes enemigos.</li><li><strong>Clasificación en Vivo:</strong> En cuanto introduzcas las puntuaciones de los partidos, la clasificación se actualizará automáticamente. Todos los jugadores pueden ver sus posiciones en tiempo real desde sus respectivos móviles (si se comparte el enlace).</li></ol>" 
        },
        { 
          title: "Cómo Usar Este Generador de Americano", 
          content: "<p>Es muy fácil, sigue estos pasos:</p><ol><li><strong>Introduce los Nombres de los Jugadores:</strong> Escribe los nombres de todos los participantes (mínimo 4 personas). ¿Número impar? No hay problema, nuestro sistema puede organizar a los jugadores sustitutos/en descanso por turnos.</li><li><strong>Selecciona los Puntos Objetivo:</strong> Determina ¿hasta cuántos puntos quieres jugar? (Generalmente 24 o 32 puntos).</li><li><strong>Generar Calendario:</strong> Haz clic en el botón de crear calendario.</li><li><strong>Jugar e Introducir Puntuaciones:</strong> Una vez finalizado el partido, introduce las puntuaciones.</li><li><strong>Ver al Ganador:</strong> Al final de la sesión, ¡el sistema coronará al campeón de Americano del día!</li></ol>" 
        },
        { 
          title: "Reglas Breves para el Cálculo de Puntos", 
          content: "<p>Para maximizar el uso de nuestra herramienta, asegúrate de que todos los jugadores entienden las reglas:</p><ul><li><strong>Sistema de Puntos:</strong> Los partidos se cuentan por bola. Si el Equipo A gana 14-10 al Equipo B, los jugadores del Equipo A reciben 14 puntos cada uno, y los del Equipo B reciben 10 puntos cada uno.</li><li><strong>Saque:</strong> El saque se alterna cada 4 bolas (2 veces el Equipo A, 2 veces el Equipo B).</li><li><strong>Ganador:</strong> El jugador con el mayor total de puntos acumulados al final del torneo.</li></ul>" 
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
          content: "<p>Quer jogar no formato Americano mas tem preguiça de calcular manualmente? Utilize o nosso Gerador e Marcador Americano automático. Gratuito, sem instalar aplicações. Experimente agora!</p><p>Está a planear uma sessão de jogo divertido de Padel, Pickleball ou Ténis este fim de semana? O formato Americano será certamente a melhor escolha para tornar o ambiente mais fluido e competitivo.</p><p>Mas todos conhecemos o problema principal: organizar a tabela e calcular os pontos manualmente é confuso. Quem faz par com quem? Quem deve descansar? Como fica a classificação final? Não deixe que o papel, as canetas ou as complicadas fórmulas de Excel estraguem a sua diversão no campo.</p><p>A solução está aqui. Oferecemos uma ferramenta de geração de Americano que pode utilizar diretamente nesta página. Basta introduzir os nomes dos jogadores e deixar que o nosso sistema trate do resto.</p>" 
        },
        { 
          title: "O que é o Formato Americano?", 
          content: "<p>Para quem o experimenta pela primeira vez, o Americano é o formato de torneio social mais justo e emocionante. O conceito básico é simples:</p><ul><li><strong>Mudar de Parceiro:</strong> Jogará com um parceiro diferente em cada partida.</li><li><strong>Pontuação Individual:</strong> Embora jogue em duplas, os pontos que conseguir contam para si próprio.</li><li><strong>Objetivo:</strong> Acumular o maior número de pontos possível para ser o campeão da classificação no final da sessão.</li></ul><p>Este formato é perfeito para comunidades de Padel e Pickleball porque obriga todos os jogadores a interagir (socializar) e a competir ao mesmo tempo.</p>" 
        },
        { 
          title: "Problemas Clássicos ao Jogar Americano Manualmente", 
          content: "<p>Sem ferramentas nem aplicações, jogar Americano pode tornar-se caótico: <ul><li><strong>Tempo Desperdiçado:</strong> Debater quem joga contra quem pode levar 5 a 10 minutos por si só.</li><li><strong>Injustiça:</strong> Sem um algoritmo, existe a possibilidade de uma pessoa continuar a ter o mesmo parceiro constantemente.</li><li><strong>Erros de Cálculo:</strong> Somar manualmente as pontuações de dezenas de partidas em papel é muito propenso a erros.</li></ul>" 
        },
        { 
          title: "Funcionalidades Superiores do Nosso Gerador de Americano", 
          content: "<p>Por que deve utilizar as ferramentas do nosso site em vez de outras aplicações?</p><ol><li><strong>Sem Download nem Instalação:</strong> Memória do telemóvel cheia? Tranquilo. A nossa ferramenta é baseada na web. Pode abri-la diretamente do seu navegador no campo sem o incómodo de descarregar aplicações pesadas.</li><li><strong>Algoritmo de Jogo Limpo:</strong> O nosso sistema garante uma rotação equilibrada dos jogadores. Todos terão uma oportunidade justa de mudar de parceiro e enfrentar diferentes inimigos.</li><li><strong>Classificação em Direto:</strong> Assim que introduzir as pontuações das partidas, a classificação será atualizada automaticamente. Todos os jogadores podem ver as suas posições em tempo real nos seus respetivos telemóveis (se o link for partilhado).</li></ol>" 
        },
        { 
          title: "Como Utilizar Este Gerador de Americano", 
          content: "<p>É muito fácil, siga estes passos:</p><ol><li><strong>Introduza os Nomes dos Jogadores:</strong> Escreva os nomes de todos os participantes (mínimo 4 pessoas). Número ímpar? Não há problema, o nosso sistema pode organizar os jogadores substitutos/em descanso por turnos.</li><li><strong>Selecione os Pontos Alvo:</strong> Determine até quantos pontos quer jogar? (Geralmente 24 ou 32 pontos).</li><li><strong>Gerar Tabela:</strong> Clique no botão de criar tabela.</li><li><strong>Jogar e Introduzir Pontuações:</strong> Assim que a partida terminar, introduza as pontuações.</li><li><strong>Ver o Vencedor:</strong> No final da sessão, o sistema coroará o campeão de Americano do dia!</li></ol>" 
        },
        { 
          title: "Regras Breves para o Cálculo de Pontos", 
          content: "<p>Para maximizar a utilização da nossa ferramenta, certifique-se de que todos os jogadores entendem as regras:</p><ul><li><strong>Sistema de Pontos:</strong> As partidas son contadas por bola. Se a Equipa A vencer por 14-10 a Equipa B, os jogadores da Equipa A recebem 14 pontos cada, e os da Equipa B recebem 10 pontos cada.</li><li><strong>Serviço:</strong> O serviço alterna a cada 4 bolas (2 vezes a Equipa A, 2 vezes a Equipa B).</li><li><strong>Vencedor:</strong> O jogador com o maior total de pontos acumulados no final do torneio.</li></ul>" 
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
          content: "<p>Vous voulez jouer au format Americano mais vous avez la flemme de calculer manuellement ? Utilisez notre Générateur et Tableau de Score Americano automatique. Gratuit, sans installation d'application. Essayez maintenant !</p><p>Prévoyez-vous une session de jeu amusante de Padel, Pickleball ou Tennis ce week-end ? Le format Americano sera certainement le meilleur choix pour rendre l'atmosphère plus fluide et compétitive.</p><p>Mais nous connaissons tous le problème principal : organiser le planning et calculer les points manuellement est déroutant. Qui joue avec qui ? Qui doit se reposer ? Quel est le classement final ? Ne laissez pas le papier, les stylos ou les formules Excel compliquées gâcher votre plaisir sur le terrain.</p><p>La solution est ici. Nous proposons un outil de génération d'Americano que vous pouvez utiliser directement sur cette page. Saisissez simplement les noms des joueurs et laissez notre système s'occuper du reste.</p>" 
        },
        { 
          title: "Qu'est-ce que le Format Americano ?", 
          content: "<p>Pour ceux d'entre vous qui l'essaient pour la première fois, l'Americano est le format de tournoi social le plus équitable et le plus excitant. Le concept de base est simple :</p><ul><li><strong>Changer de Partenaire :</strong> Vous jouerez avec un partenaire différent à chaque match.</li><li><strong>Score Individuel :</strong> Bien que vous jouiez en double, les points que vous gagnez sont comptabilisés pour vous-même.</li><li><strong>Objectif :</strong> Accumuler le plus de points possible pour devenir le champion du classement à la fin de la session.</li></ul><p>Ce format est parfait pour les communautés de Padel et de Pickleball car il oblige tous les joueurs à interagir (socialiser) tout en étant en compétition en même temps.</p>" 
        },
        { 
          title: "Problèmes Classiques lors d'un Americano Manuel", 
          content: "<p>Sans outils ni applications, jouer à l'Americano peut devenir chaotique : <ul><li><strong>Temps Perdu :</strong> Débattre de qui joue contre qui peut prendre 5 à 10 minutes en soi.</li><li><strong>Injustice :</strong> Sans algorithme, il est possible qu'une personne se retrouve constamment avec le même partenaire.</li><li><strong>Erreurs de Calcul :</strong> Additionner manuellement les scores de dizaines de matchs sur papier est très source d'erreurs.</li></ul>" 
        },
        { 
          title: "Caractéristiques Supérieures de notre Générateur d'Americano", 
          content: "<p>Pourquoi devriez-vous utiliser les outils de notre site web plutôt que d'autres applications ?</p><ol><li><strong>Sans Téléchargement ni Installation :</strong> Mémoire de téléphone pleine ? Détendez-vous. Notre outil est basé sur le web. Vous pouvez l'ouvrir directement depuis votre navigateur sur le terrain sans avoir à télécharger des applications lourdes.</li><li><strong>Algorithme Fair-Play :</strong> Notre système assure une rotation équilibrée des joueurs. Tout le monde aura une chance équitable de changer de partenaire et d'affronter des adversaires différents.</li><li><strong>Classement en Direct :</strong> Dès que vous saisissez les scores des matchs, le classement se met à jour automatiquement. Tous les joueurs peuvent voir leur position en temps réel sur leur téléphone respectif (si le lien est partagé).</li></ol>" 
        },
        { 
          title: "Comment Utiliser ce Générateur d'Americano", 
          content: "<p>C'est très facile, suivez ces étapes :</p><ol><li><strong>Saisir les Noms des Joueurs :</strong> Tapez les noms de tous les participants (minimum 4 personnes). Nombre impair ? Pas de problème, notre système peut organiser les joueurs remplaçants/au repos à tour de rôle.</li><li><strong>Sélectionner les Points Cibles :</strong> Déterminez jusqu'à combien de points vous voulez jouer ? (Généralement 24 ou 32 points).</li><li><strong>Générer le Planning :</strong> Cliquez sur le bouton de création de planning.</li><li><strong>Jouer et Saisir les Scores :</strong> Une fois le match terminé, saisissez les scores.</li><li><strong>Voir le Vainqueur :</strong> À la fin de la session, le système couronnera le champion Americano du jour !</li></ol>" 
        },
        { 
          title: "Règles Courtes pour le Calcul des Points", 
          content: "<p>Pour maximiser l'utilisation de notre outil, assurez-vous que tous les joueurs comprennent les règles :</p><ul><li><strong>Système de Points :</strong> Les matchs sont comptés par balle. Si l'Équipe A gagne 14-10 contre l'Équipe B, les joueurs de l'Équipe A reçoivent chacun 14 points, et ceux de l'Équipe B en reçoivent 10 chacun.</li><li><strong>Service :</strong> Le service alterne toutes les 4 balles (2 fois pour l'Équipe A, 2 fois pour l'Équipe B).</li><li><strong>Vainqueur :</strong> Le joueur ayant le total de points accumulés le plus élevé à la fin du tournoi.</li></ul>" 
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
          content: "<p>Vuoi giocare nel formato Americano ma ti annoia calcolare i punti manualmente? Usa il nostro Generatore e Tabellone Americano automatico. Gratuito, senza installare app. Provalo ora!</p><p>Stai pianificando una divertente sessione di gioco di Padel, Pickleball o Tennis questo fine settimana? Il formato Americano sarà sicuramente la scelta migliore per rendere l'atmosfera più fluida e competitiva.</p><p>Ma tutti conosciamo il problema principale: organizzare i turni e calcolare i punti manualmente è complicato. Chi fa coppia con chi? Chi deve riposare? Qual è la classifica finale? Non lasciare che carta, penne o complicate formule Excel rovinino il tuo divertimento in campo.</p><p>La soluzione è qui. Forniamo uno strumento di generazione per l'Americano che puoi usare direttamente su questa pagina. Inserisci semplicemente i nomi dei giocatori e lascia che il nostro sistema si occupi del resto.</p>" 
        },
        { 
          title: "Cos'è il Formato Americano?", 
          content: "<p>Per chi di voi lo prova per la prima volta, l'Americano è il formato di torneo sociale più equo ed emozionante. Il concetto di base è semplice:</p><ul><li><strong>Cambiare Partner:</strong> Giocherai con un partner diverso in ogni partita.</li><li><strong>Punteggio Individuale:</strong> Anche se giochi in doppio, i punti che guadagni vengono contati per te stesso.</li><li><strong>Obiettivo:</strong> Raccogliere più punti possibile per diventare il campione della classifica alla fine della sessione.</li></ul><p>Questo formato è perfetto per le comunità di Padel e Pickleball perché costringe tutti i giocatori a interagire (socializzare) e competere allo stesso tempo.</p>" 
        },
        { 
          title: "Problemi Classici Quando si Gioca l'Americano Manualmente", 
          content: "<p>Senza strumenti o app, giocare all'Americano può diventare caotico: <ul><li><strong>Tempo Sprecato:</strong> Discutere su chi gioca contro chi può richiedere 5-10 minuti da solo.</li><li><strong>Iniquità:</strong> Senza un algoritmo, c'è la possibilità che una persona continui ad avere lo stesso partner.</li><li><strong>Errori di Calcolo:</strong> Sommare manualmente i punteggi di dozzine di partite su carta è molto incline agli errori.</li></ul>" 
        },
        { 
          title: "Caratteristiche Superiori del Nostro Generatore Americano", 
          content: "<p>Perché dovresti usare gli strumenti sul nostro sito web invece di altre app?</p><ol><li><strong>Nessun Download o Installazione:</strong> Memoria del telefono piena? Rilassati. Il nostro strumento è basato sul web. Puoi aprirlo direttamente dal tuo browser in campo senza il fastidio di scaricare app pesanti.</li><li><strong>Algoritmo Fair Play:</strong> Il nostro sistema garantisce una rotazione equilibrata dei giocatori. Tutti avranno un'equa possibilità di cambiare partner e affrontare avversari diversi.</li><li><strong>Classifica Live:</strong> Non appena inserisci i punteggi delle partite, la classifica si aggiornerà automaticamente. Tutti i giocatori possono vedere le loro posizioni in tempo reale dai rispettivi telefoni (se il link viene condiviso).</li></ol>" 
        },
        { 
          title: "Come Usare Questo Generatore Americano", 
          content: "<p>È molto facile, segui questi passaggi:</p><ol><li><strong>Inserisci i Nomi dei Giocatori:</strong> Digita i nomi di tutti i partecipanti (minimo 4 persone). Numero dispari? Nessun problema, il nostro sistema può organizzare i giocatori sostituti/a riposo a rotazione.</li><li><strong>Seleziona i Punti Obiettivo:</strong> Determina a quanti punti vuoi giocare? (Generalmente 24 o 32 punti).</li><li><strong>Genera Turni:</strong> Clicca sul pulsante di creazione turni.</li><li><strong>Gioca e Inserisci i Punteggi:</strong> Una volta terminata la partita, inserisci i punteggi.</li><li><strong>Vedi il Vincitore:</strong> Alla fine della sessione, il sistema incoronerà il campione Americano del giorno!</li></ol>" 
        },
        { 
          title: "Brevi Regole per il Calcolo dei Punti", 
          content: "<p>Per massimizzare l'uso del nostro strumento, assicurati che tutti i giocatori comprendano le regole:</p><ul><li><strong>Sistema a Punti:</strong> Le partite vengono conteggiate per palla. Se la Squadra A vince 14-10 contro la Squadra B, i giocatori della Squadra A ricevono 14 punti ciascuno e i giocatori della Squadra B ricevono 10 punti ciascuno.</li><li><strong>Servizio:</strong> Il servizio si alterna ogni 4 palle (2 volte per la Squadra A, 2 volte per la Squadra B).</li><li><strong>Vincitore:</strong> Il giocatore con il punteggio totale accumulato più alto alla fine del torneo.</li></ul>" 
        },
        { 
          title: "Pronto a Giocare?", 
          content: "<p>Non sprecare le tue 2 ore di affitto del campo solo per registrare i punteggi su carta. Massimizza il tuo tempo di gioco e lascia che la tecnologia lavori per te. Prova il nostro Generatore Americano subito qui sotto (o in cima alla pagina). Gratuito, veloce e garantito per rendere il gioco ancora più emozionante!</p>" 
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
      title: "Why Zero-Based Budgeting is the Key to Financial Freedom",
      sections: [
        {
          title: "Give Every Dollar a Job",
          content: "Zero-Based Budgeting. Allocate every dollar to a category. Track expenses vs income. Our planner uses the method where your Income minus your Expenses should always equal zero."
        }
      ]
    },
    id: {
      title: "Kuasai Keuangan dengan Metode Anggaran Berbasis Nol",
      sections: [
        {
          title: "Berikan Tugas untuk Setiap Rupiah",
          content: "Anggaran Berbasis Nol. Alokasikan setiap rupiah ke kategori. Lacak pengeluaran vs pemasukan. Metode ini memastikan setiap rupiah memiliki tugas."
        }
      ]
    },
    de: {
      title: "Nullbasiertes Budgetieren",
      sections: [
        {
          title: "Jeden Euro zuweisen",
          content: "Nullbasiertes Budgetieren. Weisen Sie jeden Euro einer Kategorie zu. Verfolgen Sie Ausgaben gegenüber Einnahmen."
        }
      ]
    },
    es: {
      title: "Presupuesto Base Cero",
      sections: [
        {
          title: "Asignar cada euro",
          content: "Presupuesto Base Cero. Asigna cada euro a una categoría. Controla tus gastos frente a tus ingresos."
        }
      ]
    },
    pt: {
      title: "Orçamento Base Zero",
      sections: [
        {
          title: "Alocar cada centavo",
          content: "Orçamento Base Zero. Aloque cada centavo a uma categoria. Acompanhe despesas versus receitas."
        }
      ]
    },
    fr: {
      title: "Budget Base Zéro",
      sections: [
        {
          title: "Allouer chaque euro",
          content: "Budget Base Zéro. Allouez chaque euro à une catégorie. Suivez vos dépenses par rapport à vos revenus."
        }
      ]
    },
    it: {
      title: "Budget a Base Zero",
      sections: [
        {
          title: "Assegna ogni euro",
          content: "Budget a Base Zero. Assegna ogni euro a una categoria. Monitora le spese rispetto alle entrate."
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
  "futsal": {
    en: {
      title: "Digital Futsal Scoreboard: Pro Features for Local Matches",
      sections: [
        {
          title: "Digital Futsal Scoreboard",
          content: "Track score, period, fouls, and time. Fullscreen mode available. Standard Futsal rules require a 20-minute countdown."
        }
      ]
    },
    id: {
      title: "Papan Skor Futsal Digital: Fitur Pro untuk Sparing",
      sections: [
        {
          title: "Papan Skor Futsal Digital",
          content: "Catat skor, babak, pelanggaran, dan waktu. Tersedia mode layar penuh. Sesuai dengan pengatur waktu standar 20 menit."
        }
      ]
    },
    de: {
      title: "Futsal-Anzeigetafel",
      sections: [{ title: "Features", content: "Digitale Futsal-Anzeigetafel. Verfolgen Sie Spielstand, Periode, Fouls und Zeit." }]
    },
    es: {
      title: "Marcador de Fútbol Sala",
      sections: [{ title: "Características", content: "Marcador de Fútbol Sala. Controla puntuación, periodo, faltas y tiempo." }]
    },
    pt: {
      title: "Placar de Futsal Digital",
      sections: [{ title: "Características", content: "Placar de Futsal Digital. Acompanhe placar, período, faltas e tempo." }]
    },
    fr: {
      title: "Tableau de Score Futsal",
      sections: [{ title: "Caractéristiques", content: "Tableau de Score Futsal. Suivez le score, la période, les fautes et le temps." }]
    },
    it: {
      title: "Tabellone Calcetto Digitale",
      sections: [{ title: "Caratteristiche", content: "Tabellone Calcetto Digitale. Traccia punteggio, periodo, falli e tempo." }]
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
  },
  "image-resizer": {
    en: { title: "Image Resizer", sections: [{ title: "Privacy-First Resizing", content: "Resize images specifically for Instagram, TikTok, or Passports. Processed 100% in your browser." }] },
    id: { title: "Ubah Ukuran Gambar", sections: [{ title: "Ubah Ukuran Aman", content: "Ubah ukuran foto khusus untuk Instagram, TikTok, atau Paspor. Diproses 100% di browser Anda, tanpa upload server." }] },
    de: { title: "Bildgröße ändern", sections: [{ title: "Datenschutzfreundliche Größenänderung", content: "Bildgröße für Instagram oder Pässe ändern. 100% im Browser verarbeitet." }] },
    es: { title: "Redimensionar Imagen", sections: [{ title: "Redimensionado Seguro", content: "Cambia el tamaño para Instagram o Pasaporte. Procesado 100% en tu navegador." }] },
    pt: { title: "Redimensionar Imagem", sections: [{ title: "Redimensionamento Seguro", content: "Redimensione para Instagram ou Pasaporte. Processado 100% no navegador." }] },
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
