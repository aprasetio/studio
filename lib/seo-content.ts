/**
 * Centralized SEO Content for VersoKit tools.
 * Supports: en, id, es, pt, de, fr, it.
 */

export interface SeoItem {
  title: string;
  description?: string;
  steps: string[];
  article: string;
  faq: { q: string; a: string }[];
}

export interface SeoCollection {
  [key: string]: {
    [lang: string]: SeoItem;
  };
}

export const SEO_DATA: SeoCollection = {
  futsal: {
    en: {
      title: "Futsal Scoreboard",
      steps: ["Set timer duration.", "Click Start.", "Use + buttons for goals.", "Track Fouls (Red at 5)."],
      article: "Professional digital Futsal Scoreboard with FIFA-compliant foul counters. Ideal for local leagues and sparring.",
      faq: [{ q: "Is it offline-ready?", a: "Yes, it works 100% offline once loaded." }]
    },
    id: {
      title: "Papan Skor Futsal",
      steps: ["Atur durasi waktu.", "Klik Mulai.", "Gunakan tombol + untuk gol.", "Catat Fouls (Merah di angka 5)."],
      article: "Papan skor futsal digital profesional dengan hitungan foul standar FIFA. Cocok untuk liga dan sparing.",
      faq: [{ q: "Bisa offline?", a: "Ya, bekerja 100% secara offline." }]
    },
    es: {
      title: "Pizarra de Futsal",
      steps: ["Establecer tiempo.", "Click en Inicio.", "Añadir goles.", "Contar faltas (Rojo en 5)."],
      article: "Marcador digital profesional para Futsal con contadores de faltas reglamentarios FIFA.",
      faq: [{ q: "¿Funciona offline?", a: "Sí, funciona totalmente sin internet tras cargar." }]
    },
    pt: {
      title: "Placar de Futsal",
      steps: ["Definir tempo.", "Iniciar partida.", "Adicionar gols.", "Contar faltas (Vermelho em 5)."],
      article: "Placar digital de Futsal profissional com contagem de faltas FIFA para quadras e torneios.",
      faq: [{ q: "Funciona offline?", a: "Sim, opera 100% offline." }]
    },
    de: {
      title: "Futsal-Anzeigetafel",
      steps: ["Zeit einstellen.", "Start klicken.", "Tore zählen.", "Fouls tracken (Rot ab 5)."],
      article: "Professionelle Futsal-Anzeigetafel mit FIFA-konformen Foul-Zählern für Vereine und Turniere.",
      faq: [{ q: "Offline nutzbar?", a: "Ja, funktioniert nach dem Laden komplett offline." }]
    },
    fr: {
      title: "Tableau de Score Futsal",
      steps: ["Régler le temps.", "Démarrer.", "Ajouter les buts.", "Suivre les fautes (Rouge à 5)."],
      article: "Tableau de score professionnel pour le Futsal avec compteurs de fautes conformes à la FIFA.",
      faq: [{ q: "Fonctionne hors ligne ?", a: "Oui, fonctionne 100% sans connexion après chargement." }]
    },
    it: {
      title: "Tabellone Futsal",
      steps: ["Imposta tempo.", "Avvia gara.", "Aggiungi gol.", "Segna falli (Rosso a 5)."],
      article: "Tabellone segnapunti digitale per Futsal con gestione falli FIFA e timer professionale.",
      faq: [{ q: "Funziona offline?", a: "Sì, opera totalmente offline." }]
    }
  },
  lineup: {
    en: {
      title: "Lineup Builder",
      steps: ["Choose formation.", "Drag players.", "Edit names.", "Download Image."],
      article: "Visualize football tactics with our professional lineup creator. Perfect for social media and briefings.",
      faq: [{ q: "High quality?", a: "Yes, downloads are high-resolution PNGs." }]
    },
    id: {
      title: "Penyusun Formasi",
      steps: ["Pilih formasi.", "Geser pemain.", "Edit nama.", "Download Gambar."],
      article: "Visualisasikan taktik bola dengan penyusun formasi profesional. Cocok untuk media sosial.",
      faq: [{ q: "Resolusi tinggi?", a: "Ya, download dalam format PNG resolusi tinggi." }]
    },
    es: {
      title: "Constructor de Alineaciones",
      steps: ["Elegir formación.", "Arrastrar jugadores.", "Editar nombres.", "Descargar Imagen."],
      article: "Crea gráficos de alineaciones profesionales para tu equipo de fútbol de forma gratuita.",
      faq: [{ q: "¿Es gratis?", a: "Sí, es totalmente gratuito." }]
    },
    pt: {
      title: "Escalação de Time",
      steps: ["Escolher formação.", "Arrastar jogadores.", "Editar nomes.", "Baixar Imagem."],
      article: "Monte a escalação do seu time de futebol e compartilhe fotos profissionais no WhatsApp.",
      faq: [{ q: "Qualidade boa?", a: "Sim, gera imagens em alta resolução." }]
    },
    de: {
      title: "Aufstellungs-Manager",
      steps: ["Formation wählen.", "Spieler schieben.", "Namen ändern.", "Bild herunterladen."],
      article: "Erstellen Sie professionelle Fußball-Aufstellungen für soziale Medien oder Taktik-Besprechungen.",
      faq: [{ q: "Kostenlos?", a: "Ja, alle Tools auf VersoKit sind gratis." }]
    },
    fr: {
      title: "Composition d'Équipe",
      steps: ["Choisir formation.", "Glisser joueurs.", "Éditer noms.", "Télécharger Image."],
      article: "Créez des visuels professionnels de votre composition d'équipe en quelques secondes.",
      faq: [{ q: "Téléchargeable ?", a: "Oui, au format PNG haute qualité." }]
    },
    it: {
      title: "Formazione Calcio",
      steps: ["Scegli modulo.", "Sposta giocatori.", "Modifica nomi.", "Scarica Immagine."],
      article: "Crea grafiche professionali per la formazione della tua squadra di calcio gratis.",
      faq: [{ q: "E' privato?", a: "Sì, tutto avviene sul tuo dispositivo." }]
    }
  },
  scoreboard: {
    en: {
      title: "Universal Scoreboard",
      steps: ["Set target score.", "Click points.", "Reset per set."],
      article: "Versatile scoreboard for Volleyball, Badminton, and Table Tennis with set tracking.",
      faq: [{ q: "Custom score?", a: "Yes, you can set any winning point target." }]
    },
    id: {
      title: "Papan Skor Universal",
      steps: ["Atur target poin.", "Klik untuk poin.", "Reset per set."],
      article: "Papan skor serbaguna untuk Voli, Badminton, dan Tenis Meja dengan pelacakan set.",
      faq: [{ q: "Bisa atur poin?", a: "Ya, target poin kemenangan bisa diatur bebas." }]
    },
    es: {
      title: "Marcador Universal",
      steps: ["Fijar puntos.", "Sumar puntos.", "Reiniciar por set."],
      article: "Marcador versátil para Voleibol, Bádminton y Tenis de Mesa con seguimiento de sets.",
      faq: [{ q: "¿Sirve para Volley?", a: "Sí, es ideal para deportes de red." }]
    },
    pt: {
      title: "Placar Universal",
      steps: ["Definir pontos.", "Adicionar pontos.", "Resetar set."],
      article: "Placar versátil para Vôlei, Badminton e Tênis de Mesa com contagem de sets ganhos.",
      faq: [{ q: "Personalizável?", a: "Sim, defina a pontuação final desejada." }]
    },
    de: {
      title: "Universal-Punktezähler",
      steps: ["Zielpunktzahl.", "Punkte zählen.", "Satz zurücksetzen."],
      article: "Vielseitiger Punktezähler für Volleyball, Badminton und Tischtennis.",
      faq: [{ q: "Satz-Modus?", a: "Ja, Sätze werden separat gezählt." }]
    },
    fr: {
      title: "Tableau de Score Universel",
      steps: ["Régler l'objectif.", "Ajouter points.", "Reset par set."],
      article: "Tableau de score polyvalent pour Volleyball, Badminton et Tennis de Table.",
      faq: [{ q: "Multi-sports ?", a: "Oui, adapté à tous les sports de filet." }]
    },
    it: {
      title: "Tabellone Universale",
      steps: ["Imposta target.", "Aggiungi punti.", "Reset set."],
      article: "Segnapunti universale per Pallavolo, Badminton e Tennis Tavolo con contatore set.",
      faq: [{ q: "Si salva?", a: "Sì, i dati rimangono nel browser." }]
    }
  },
  tournament: {
    en: {
      title: "Tournament Manager",
      steps: ["Add teams.", "Generate schedule.", "Enter scores.", "View Standings."],
      article: "Automated Round Robin generator with live standings and goal difference calculations.",
      faq: [{ q: "Max teams?", a: "No hard limit, works best for social leagues." }]
    },
    id: {
      title: "Manajer Turnamen",
      steps: ["Tambah tim.", "Buat jadwal.", "Isi skor.", "Lihat Klasemen."],
      article: "Pembuat jadwal liga otomatis dengan klasemen real-time dan hitungan selisih gol.",
      faq: [{ q: "Batas tim?", a: "Tidak ada batasan kaku, cocok untuk liga sosial." }]
    },
    es: {
      title: "Gestor de Torneos",
      steps: ["Añadir equipos.", "Generar cruces.", "Poner resultados.", "Ver Tabla."],
      article: "Generador de ligas de todos contra todos con tabla de posiciones automática.",
      faq: [{ q: "¿Calcula goles?", a: "Sí, calcula diferencia de goles y puntos." }]
    },
    pt: {
      title: "Gestor de Torneios",
      steps: ["Adicionar times.", "Gerar tabela.", "Inserir placares.", "Ver Classificação."],
      article: "Gerador de torneios todos contra todos (Round Robin) com classificação automática.",
      faq: [{ q: "Faz o chaveamento?", a: "Sim, gera todos os confrontos automaticamente." }]
    },
    de: {
      title: "Turnier-Manager",
      steps: ["Teams eingeben.", "Plan erstellen.", "Ergebnisse tippen.", "Tabelle ansehen."],
      article: "Automatischer Generator für Round-Robin-Turniere mit Live-Tabelle.",
      faq: [{ q: "Modus?", a: "Aktuell wird Jeder-gegen-Jeden unterstützt." }]
    },
    fr: {
      title: "Gestionnaire de Tournoi",
      steps: ["Ajouter équipes.", "Générer planning.", "Saisir scores.", "Classement."],
      article: "Générateur de championnat automatique avec calcul direct du classement.",
      faq: [{ q: "Facile ?", a: "Génère les matchs en un clic." }]
    },
    it: {
      title: "Gestore Tornei",
      steps: ["Aggiungi team.", "Genera calendario.", "Inserisci punteggi.", "Classifica."],
      article: "Generatore di tornei all'italiana con calcolo automatico della classifica.",
      faq: [{ q: "Si scarica?", a: "Sì, puoi scaricare l'immagine della classifica." }]
    }
  },
  inventory: {
    en: {
      title: "Inventory Manager",
      steps: ["Add items.", "Set initial stock.", "Update with +/-.", "Export to CSV."],
      article: "Simple inventory tracking for sports equipment, small businesses, or home stock.",
      faq: [{ q: "Privacy?", a: "Data never leaves your browser." }]
    },
    id: {
      title: "Stok Barang Gudang",
      steps: ["Tambah barang.", "Atur stok awal.", "Update dengan +/-.", "Ekspor ke CSV."],
      article: "Pelacakan stok sederhana untuk alat olahraga, bisnis kecil, atau gudang pribadi.",
      faq: [{ q: "Privasi?", a: "Data tidak pernah meninggalkan browser Anda." }]
    },
    es: {
      title: "Gestor de Inventario",
      steps: ["Añadir items.", "Poner stock.", "Usar +/-.", "Exportar CSV."],
      article: "Control de stock sencillo para pequeños negocios o equipos deportivos.",
      faq: [{ q: "¿Seguro?", a: "Tus datos se guardan solo en tu PC." }]
    },
    pt: {
      title: "Gestor de Inventário",
      steps: ["Adicionar itens.", "Definir estoque.", "Usar +/-.", "Exportar CSV."],
      article: "Controle de estoque simples para equipamentos esportivos ou pequenos comércios.",
      faq: [{ q: "Exporta?", a: "Sim, permite baixar tudo em CSV." }]
    },
    de: {
      title: "Inventar-Manager",
      steps: ["Teile hinzufügen.", "Bestand setzen.", "Mit +/- ändern.", "CSV Export."],
      article: "Einfache Bestandsführung für Sportvereine oder kleine Lager.",
      faq: [{ q: "Sicher?", a: "Daten werden lokal im Browser gespeichert." }]
    },
    fr: {
      title: "Gestion d'Inventaire",
      steps: ["Ajouter articles.", "Fixer stock.", "Mettre à jour +/-.", "Export CSV."],
      article: "Suivi de stock simple pour matériel sportif ou petites entreprises.",
      faq: [{ q: "Privé ?", a: "100% des données restent sur votre appareil." }]
    },
    it: {
      title: "Gestore Inventario",
      steps: ["Aggiungi articoli.", "Imposta stock.", "Usa +/-.", "Esporta CSV."],
      article: "Gestione magazzino semplice per attrezzature sportive o piccoli uffici.",
      faq: [{ q: "Limite?", a: "Nessun limite al numero di articoli." }]
    }
  },
  kanban: {
    en: {
      title: "Kanban Board",
      steps: ["Add tasks.", "Move to progress.", "Move to done.", "Delete finished."],
      article: "Visual task management to organize your team or personal projects efficiently.",
      faq: [{ q: "Columns?", a: "To Do, In Progress, and Done." }]
    },
    id: {
      title: "Papan Kanban",
      steps: ["Tambah tugas.", "Geser ke proses.", "Geser ke selesai.", "Hapus yang tuntas."],
      article: "Manajemen tugas visual untuk mengatur tim atau proyek pribadi dengan efisien.",
      faq: [{ q: "Kolom?", a: "Rencana, Proses, dan Selesai." }]
    },
    es: {
      title: "Tablero Kanban",
      steps: ["Añadir tareas.", "Mover a proceso.", "Mover a hecho.", "Eliminar."],
      article: "Gestión visual de tareas para organizar proyectos personales o de equipo.",
      faq: [{ q: "¿Cómo funciona?", a: "Arrastra y suelta tus tareas entre columnas." }]
    },
    pt: {
      title: "Quadro Kanban",
      steps: ["Add tarefas.", "Mover p/ processo.", "Mover p/ feito.", "Excluir."],
      article: "Gerenciamento visual de tarefas para organizar sua rotina ou projetos de equipe.",
      faq: [{ q: "Temas?", a: "Suporta modo claro e escuro." }]
    },
    de: {
      title: "Kanban-Board",
      steps: ["Aufgaben adden.", "Verschieben.", "Abschließen.", "Löschen."],
      article: "Visuelles Projektmanagement für bessere Organisation im Team.",
      faq: [{ q: "Spalten?", a: "To Do, In Arbeit, Erledigt." }]
    },
    fr: {
      title: "Tableau Kanban",
      steps: ["Ajouter tâches.", "Déplacer.", "Terminer.", "Supprimer."],
      article: "Gestion visuelle des tâches pour organiser vos projets efficacement.",
      faq: [{ q: "Simple ?", a: "Interface intuitive et rapide." }]
    },
    it: {
      title: "Lavagna Kanban",
      steps: ["Aggiungi task.", "Sposta.", "Concludi.", "Elimina."],
      article: "Gestione visuale delle attività per organizzare il tuo lavoro quotidiano.",
      faq: [{ q: "Si salva?", a: "Sì, i task restano nel tuo browser." }]
    }
  },
  calculator: {
    en: {
      title: "Material Calculator",
      steps: ["Enter dimensions.", "Input unit price.", "View needed volume.", "See total cost."],
      article: "Estimate paint or tile requirements for renovation projects instantly.",
      faq: [{ q: "Units?", a: "Calculates in Meters and Liters/Units." }]
    },
    id: {
      title: "Kalkulator Material",
      steps: ["Isi dimensi.", "Input harga satuan.", "Lihat volume butuh.", "Lihat total biaya."],
      article: "Estimasi kebutuhan cat atau keramik untuk proyek renovasi secara instan.",
      faq: [{ q: "Satuan?", a: "Menghitung dalam Meter dan Liter/Unit." }]
    },
    es: {
      title: "Calculadora de Materiales",
      steps: ["Poner medidas.", "Precio unitario.", "Ver volumen.", "Ver costo total."],
      article: "Estima cuánta pintura o azulejos necesitas para tu obra rápidamente.",
      faq: [{ q: "¿Es precisa?", a: "Usa promedios estándar de cobertura." }]
    },
    pt: {
      title: "Calculadora de Materiais",
      steps: ["Inserir medidas.", "Preço unitário.", "Ver volume.", "Ver custo total."],
      article: "Estime a quantidade de tinta ou pisos para sua reforma instantaneamente.",
      faq: [{ q: "Métricas?", a: "Calcula em metros quadrados." }]
    },
    de: {
      title: "Material-Rechner",
      steps: ["Maße eingeben.", "Preis pro Einheit.", "Volumen sehen.", "Gesamtkosten."],
      article: "Berechnen Sie den Bedarf an Farbe oder Fliesen für Ihr Renovierungsprojekt.",
      faq: [{ q: "Genau?", a: "Basiert auf Standard-Verbrauchswerten." }]
    },
    fr: {
      title: "Calculateur de Matériaux",
      steps: ["Saisir dimensions.", "Prix unitaire.", "Volume requis.", "Coût total."],
      article: "Estimez vos besoins en peinture ou carrelage pour vos travaux.",
      faq: [{ q: "Unité ?", a: "Calculs en mètres et litres." }]
    },
    it: {
      title: "Calcolatrice Materiali",
      steps: ["Inserisci misure.", "Prezzo unitario.", "Vedi volume.", "Costo totale."],
      article: "Calcola quanta vernice o piastrelle ti servono per la ristrutturazione.",
      faq: [{ q: "Facile?", a: "Inserisci i metri e fa tutto lui." }]
    }
  },
  invoice: {
    en: {
      title: "Invoice Generator",
      steps: ["Fill details.", "Add items/qty.", "Preview design.", "Print to PDF."],
      article: "Create professional invoices on-the-go. No data leaves your device, keeping finances private.",
      faq: [{ q: "Format?", a: "Standard professional PDF layout." }]
    },
    id: {
      title: "Pembuat Invoice",
      steps: ["Isi detail.", "Tambah barang/jml.", "Lihat desain.", "Cetak ke PDF."],
      article: "Buat invoice profesional kapan saja. Data tidak keluar dari perangkat, keuangan tetap pribadi.",
      faq: [{ q: "Format?", a: "Layout PDF profesional standar." }]
    },
    es: {
      title: "Generador de Facturas",
      steps: ["Datos empresa.", "Añadir items.", "Previsualizar.", "Guardar PDF."],
      article: "Crea facturas profesionales al instante sin subir datos a internet.",
      faq: [{ q: "¿Descarga?", a: "Sí, genera un archivo PDF listo." }]
    },
    pt: {
      title: "Gerador de Faturas",
      steps: ["Dados da empresa.", "Adicionar itens.", "Ver prévia.", "Salvar em PDF."],
      article: "Crie faturas e recibos profissionais na hora. Seus dados financeiros são privados.",
      faq: [{ q: "Profissional?", a: "Sim, layout limpo e elegante." }]
    },
    de: {
      title: "Rechnungs-Generator",
      steps: ["Details ausfüllen.", "Posten adden.", "Vorschau prüfen.", "Als PDF drucken."],
      article: "Erstellen Sie professionelle Rechnungen direkt im Browser. 100% Datenschutz.",
      faq: [{ q: "Sprache?", a: "Das PDF wird basierend auf Ihren Eingaben erstellt." }]
    },
    fr: {
      title: "Générateur de Factures",
      steps: ["Saisir infos.", "Ajouter articles.", "Aperçu.", "Imprimer PDF."],
      article: "Créez des factures professionnelles. Vos données financières restent privées.",
      faq: [{ q: "Gratuit ?", a: "Oui, sans aucun frais caché." }]
    },
    it: {
      title: "Generatore Fatture",
      steps: ["Inserisci dati.", "Aggiungi voci.", "Anteprima.", "Salva PDF."],
      article: "Crea fatture professionali velocemente. Massima privacy per i tuoi dati.",
      faq: [{ q: "Si stampa?", a: "Sì, clicca Stampa per salvare in PDF." }]
    }
  },
  shift: {
    en: {
      title: "Shift Roster",
      steps: ["Add employees.", "Click day to cycle.", "View coverage.", "Download Image."],
      article: "Manage weekly staff schedules easily. Supports multiple shifts and status visualization.",
      faq: [{ q: "Colors?", a: "Yellow (Morning), Blue (Afternoon), Black (Night)." }]
    },
    id: {
      title: "Jadwal Shift",
      steps: ["Tambah karyawan.", "Klik hari untuk ganti.", "Lihat jadwal.", "Download Gambar."],
      article: "Kelola jadwal mingguan staf dengan mudah. Mendukung berbagai shift dan visualisasi status.",
      faq: [{ q: "Warna?", a: "Kuning (Pagi), Biru (Siang), Hitam (Malam)." }]
    },
    es: {
      title: "Gestor de Turnos",
      steps: ["Añadir personal.", "Cambiar turnos.", "Ver cobertura.", "Descargar Imagen."],
      article: "Organiza los turnos semanales de tu equipo de forma rápida y visual.",
      faq: [{ q: "¿Se guarda?", a: "Se guarda automáticamente en tu navegador." }]
    },
    pt: {
      title: "Escala de Trabalho",
      steps: ["Add funcionários.", "Mudar turnos.", "Ver cobertura.", "Baixar Imagem."],
      article: "Gerencie escalas semanais de funcionários. Ideal para lojas e segurança.",
      faq: [{ q: "Legenda?", a: "Inclui legenda de cores no rodapé." }]
    },
    de: {
      title: "Schichtplaner",
      steps: ["Mitarbeiter adden.", "Schicht wählen.", "Plan prüfen.", "Download Bild."],
      article: "Planen Sie die wöchentlichen Schichten Ihres Teams ganz einfach visuell.",
      faq: [{ q: "Export?", a: "Kann als PNG-Bild exportiert werden." }]
    },
    fr: {
      title: "Planning de Shifts",
      steps: ["Ajouter staff.", "Changer shifts.", "Voir planning.", "Télécharger."],
      article: "Gérez les plannings hebdomadaires de votre équipe en quelques clics.",
      faq: [{ q: "Privé ?", a: "Données locales uniquement." }]
    },
    it: {
      title: "Turni Lavoro",
      steps: ["Aggiungi staff.", "Cambia turno.", "Vedi piano.", "Scarica Immagine."],
      article: "Gestisci i turni settimanali dei dipendenti in modo semplice e visivo.",
      faq: [{ q: "Watermark?", a: "Include il marchio VersoKit sull'immagine." }]
    }
  },
  "pdf-merge": {
    en: {
      title: "PDF Merger",
      steps: ["Select PDFs.", "Order files.", "Merge & Download."],
      article: "Combine multiple PDF documents into one single file safely in your browser.",
      faq: [{ q: "Security?", a: "Files are never uploaded to any server." }]
    },
    id: {
      title: "Gabung PDF",
      steps: ["Pilih PDF.", "Urutkan file.", "Gabung & Download."],
      article: "Gabungkan beberapa dokumen PDF menjadi satu file secara aman di browser Anda.",
      faq: [{ q: "Keamanan?", a: "File tidak pernah diupload ke server mana pun." }]
    },
    es: {
      title: "Unir PDF",
      steps: ["Elegir PDFs.", "Ordenar.", "Unir y Bajar."],
      article: "Combina varios documentos PDF en uno solo de forma segura y privada.",
      faq: [{ q: "¿Es seguro?", a: "Tus archivos no salen de tu PC." }]
    },
    pt: {
      title: "Juntar PDF",
      steps: ["Selecionar PDFs.", "Ordenar arquivos.", "Juntar e Baixar."],
      article: "Combine vários documentos PDF em um único arquivo de forma 100% privada.",
      faq: [{ q: "Limite?", a: "Depende da memória do seu navegador." }]
    },
    de: {
      title: "PDF Verbinden",
      steps: ["PDFs wählen.", "Sortieren.", "Verbinden & Laden."],
      article: "Verbinden Sie mehrere PDF-Dateien sicher direkt in Ihrem Browser.",
      faq: [{ q: "Privat?", a: "Dateien verlassen niemals Ihr Gerät." }]
    },
    fr: {
      title: "Fusionner PDF",
      steps: ["Choisir PDFs.", "Ordonner.", "Fusionner."],
      article: "Combinez vos documents PDF en toute sécurité sans upload serveur.",
      faq: [{ q: "Rapide ?", a: "Traitement instantané en local." }]
    },
    it: {
      title: "Unisci PDF",
      steps: ["Scegli PDF.", "Ordina.", "Unisci e Scarica."],
      article: "Combina più documenti PDF in un unico file in totale sicurezza.",
      faq: [{ q: "Gratis?", a: "Sì, senza limiti di utilizzo." }]
    }
  },
  "image-to-pdf": {
    en: {
      title: "Image to PDF",
      steps: ["Upload images.", "Sort pages.", "Click Convert."],
      article: "Turn JPG or PNG photos into professional PDF documents instantly.",
      faq: [{ q: "Formats?", a: "Supports JPG and PNG." }]
    },
    id: {
      title: "Gambar ke PDF",
      steps: ["Upload gambar.", "Urutkan halaman.", "Klik Convert."],
      article: "Ubah foto JPG atau PNG menjadi dokumen PDF profesional secara instan.",
      faq: [{ q: "Format?", a: "Mendukung JPG dan PNG." }]
    },
    es: {
      title: "Imagen a PDF",
      steps: ["Subir imágenes.", "Ordenar.", "Convertir."],
      article: "Convierte tus fotos JPG o PNG en documentos PDF profesionales al instante.",
      faq: [{ q: "¿Soporta fotos?", a: "Sí, ideal para escanear documentos." }]
    },
    pt: {
      title: "Imagem para PDF",
      steps: ["Subir imagens.", "Ordenar.", "Converter."],
      article: "Transforme suas fotos em um documento PDF organizado e profissional.",
      faq: [{ q: "Privacidade?", a: "Suas fotos não são enviadas para a nuvem." }]
    },
    de: {
      title: "Bild zu PDF",
      steps: ["Bilder hochladen.", "Sortieren.", "Konvertieren."],
      article: "Verwandeln Sie Ihre JPG- oder PNG-Fotos in professionelle PDF-Dokumente.",
      faq: [{ q: "Qualität?", a: "Originalqualität wird beibehalten." }]
    },
    fr: {
      title: "Image vers PDF",
      steps: ["Ajouter images.", "Trier.", "Convertir."],
      article: "Transformez vos photos JPG/PNG en documents PDF en un clin d'œil.",
      faq: [{ q: "Scanner ?", a: "Pratique pour numériser des reçus." }]
    },
    it: {
      title: "Immagine in PDF",
      steps: ["Aggiungi immagini.", "Ordina.", "Converti."],
      article: "Trasforma le tue foto JPG o PNG in file PDF professionali subito.",
      faq: [{ q: "Più immagini?", a: "Sì, ogni immagine sarà una pagina." }]
    }
  },
  "image-compressor": {
    en: {
      title: "Image Compressor",
      steps: ["Select Image.", "Adjust quality.", "Click Compress."],
      article: "Reduce image file size without uploading files. 100% private and fast.",
      faq: [{ q: "Quality loss?", a: "Minimal, you can control the ratio." }]
    },
    id: {
      title: "Kompres Gambar",
      steps: ["Pilih Gambar.", "Atur kualitas.", "Klik Kompres."],
      article: "Perkecil ukuran file gambar tanpa upload file. 100% privat dan cepat.",
      faq: [{ q: "Kualitas turun?", a: "Minimal, Anda bisa kontrol rasionya." }]
    },
    es: {
      title: "Comprimir Imagen",
      steps: ["Elegir imagen.", "Ajustar calidad.", "Comprimir."],
      article: "Reduce el peso de tus fotos sin subirlas a ningún servidor.",
      faq: [{ q: "¿Privado?", a: "Sí, todo ocurre en tu navegador." }]
    },
    pt: {
      title: "Comprimir Imagem",
      steps: ["Escolher imagem.", "Ajustar qualidade.", "Comprimir."],
      article: "Reduza o tamanho de suas fotos mantendo a privacidade total.",
      faq: [{ q: "Rapidez?", a: "Processamento instantâneo." }]
    },
    de: {
      title: "Bild-Kompressor",
      steps: ["Bild wählen.", "Qualität regeln.", "Komprimieren."],
      article: "Verkleinern Sie Bilder ohne Cloud-Upload. 100% Datenschutz.",
      faq: [{ q: "Verlust?", a: "Qualität ist über den Slider einstellbar." }]
    },
    fr: {
      title: "Compresser l'Image",
      steps: ["Choisir image.", "Régler qualité.", "Compresser."],
      article: "Réduisez la taille de vos fichiers images localement et rapidement.",
      faq: [{ q: "Poids ?", a: "Gagnez jusqu'à 90% de place." }]
    },
    it: {
      title: "Comprimi Immagine",
      steps: ["Scegli immagine.", "Regola qualità.", "Comprimi."],
      article: "Riduci il peso delle tue foto senza caricarle online.",
      faq: [{ q: "Privato?", a: "Certo, i file non lasciano il PC." }]
    }
  },
  "split-bill": {
    en: {
      title: "Split Bill",
      steps: ["Enter total.", "Add tax/service.", "List names.", "Copy to WA."],
      article: "Fairly divide shared costs with friends. Perfect for team lunches or futsal fees.",
      faq: [{ q: "WA Format?", a: "Yes, optimized for clear reading in group chats." }]
    },
    id: {
      title: "Patungan",
      steps: ["Isi total.", "Tambah pajak.", "List nama.", "Salin ke WA."],
      article: "Bagi biaya bersama teman secara adil. Cocok untuk makan tim atau biaya futsal.",
      faq: [{ q: "Format WA?", a: "Ya, dioptimalkan agar mudah dibaca di grup." }]
    },
    es: {
      title: "Dividir Cuenta",
      steps: ["Total cuenta.", "Impuestos.", "Nombres.", "Copiar a WA."],
      article: "Calcula cuánto debe pagar cada uno y comparte el resumen por WhatsApp.",
      faq: [{ q: "¿Sirve para grupos?", a: "Sí, ideal para cenas o deportes." }]
    },
    pt: {
      title: "Dividir Conta",
      steps: ["Total conta.", "Taxas.", "Nomes.", "Copiar p/ WA."],
      article: "Divida gastos com amigos de forma justa e envie o resumo no WhatsApp.",
      faq: [{ q: "Dados banco?", a: "Pode incluir info de pagamento opcional." }]
    },
    de: {
      title: "Rechnung teilen",
      steps: ["Summe eingeben.", "Gebühren adden.", "Namen listen.", "Für WA kopieren."],
      article: "Teilen Sie Kosten fair auf. Ideal für Team-Essen oder Sportgebühren.",
      faq: [{ q: "WhatsApp?", a: "Text ist perfekt für Chats formatiert." }]
    },
    fr: {
      title: "Partager l'Addition",
      steps: ["Total addition.", "Taxes.", "Noms.", "Copier WA."],
      article: "Divisez les frais entre amis équitablement et envoyez le résumé sur WhatsApp.",
      faq: [{ q: "Pratique ?", a: "Fini les calculs complexes à table." }]
    },
    it: {
      title: "Dividi Conto",
      steps: ["Totale conto.", "Tasse.", "Nomi.", "Copia per WA."],
      article: "Dividi le spese con gli amici e invia il resoconto via WhatsApp.",
      faq: [{ q: "Equo?", a: "Calcola le quote al centesimo." }]
    }
  }
};
