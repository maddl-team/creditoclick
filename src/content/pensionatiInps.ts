export const PIP_META = {
  title: "Cessione del Quinto Pensionati INPS 2026 | CreditoClick",
  description:
    "Sei pensionato INPS fino a 85 anni? Ottieni liquidità con la cessione del quinto della pensione: iter digitale, assicurazione inclusa. Preventivo su WhatsApp.",
} as const;

export const PIP_HERO = {
  badge: "Pensionati INPS",
  title: "Cessione del Quinto della Pensione: come funziona per i pensionati INPS fino a 85 anni",
  subtitle:
    "Sei in pensione e hai bisogno di liquidità — per te, per i tuoi figli, per un progetto che non vuoi rimandare. La cessione del quinto della pensione ti permette di accedere a un finanziamento con rata trattenuta direttamente dal cedolino INPS, assicurazione inclusa e iter completamente digitale. Nessun garante, nessuna ipoteca, nessuna garanzia reale. CreditoClick gestisce tutto via WhatsApp — senza che tu debba uscire di casa.",
  primaryCta: "Richiedi un preventivo su WhatsApp",
  secondaryCta: "Calcola la tua rata in 2 minuti",
} as const;

export const PIP_COME_FUNZIONA = {
  sectionTitle: "Cessione del Quinto della Pensione: Come Funziona",
  title: "Il meccanismo: rata trattenuta direttamente dall'INPS",
  paragraphs: [
    "La cessione del quinto della pensione funziona esattamente come quella dello stipendio, con una differenza fondamentale: al posto del datore di lavoro, è l'INPS (o l'ente pensionistico di riferimento) a trattenere la rata mensile direttamente dal cedolino pensionistico e a versarla all'istituto finanziatore.",
    "Il pensionato non deve preoccuparsi di nessun addebito su conto corrente, di nessuna scadenza da ricordare, di nessun rischio di insoluto. La trattenuta avviene a monte, in modo automatico, ogni mese, per tutta la durata del contratto.",
    "Il limite del quinto: come per i lavoratori dipendenti, la rata mensile non può superare il 20% dell'importo netto della pensione. Questo garantisce che il pensionato mantenga sempre almeno l'80% del proprio reddito disponibile.",
    "La durata: da un minimo di 24 mesi fino a un massimo di 120 mesi (10 anni), compatibilmente con il limite anagrafico.",
    "L'assicurazione obbligatoria: ogni contratto include una polizza vita obbligatoria. In caso di decesso del pensionato prima dell'estinzione del contratto, il debito residuo viene estinto dall'assicurazione senza oneri a carico degli eredi. È una tutela importante per chi vuole evitare di lasciare pendenze ai propri familiari.",
  ],
} as const;

export const PIP_ETA = {
  sectionTitle: "Fino a Che Età si Può Richiedere",
  title: "Il limite anagrafico: fino a 85 anni al termine del contratto",
  intro:
    "La cessione del quinto della pensione è accessibile fino al compimento dell'85° anno di età, calcolato non al momento della richiesta ma al termine previsto del piano di rimborso. Questo significa che:",
  examples: [
    "Un pensionato di 75 anni può richiedere un contratto fino a 120 mesi (10 anni), poiché alla scadenza avrebbe 85 anni",
    "Un pensionato di 80 anni può richiedere un contratto fino a 60 mesi (5 anni), poiché alla scadenza avrebbe 85 anni",
    "Un pensionato di 83 anni può richiedere un contratto fino a 24 mesi (2 anni), poiché alla scadenza avrebbe 85 anni",
  ],
  note: "Nota importante: il limite degli 85 anni è quello standard applicato dalla maggior parte degli istituti finanziatori convenzionati. Alcuni istituti possono applicare limiti leggermente diversi in funzione del tipo di pensione e del profilo specifico. Il consulente CreditoClick verifica il limite esatto applicabile al tuo caso nella fase di analisi preliminare.",
} as const;

export const PIP_CHI = {
  sectionTitle: "Chi Può Richiedere la Cessione del Quinto della Pensione",
  title: "Categorie di pensionati ammesse",
  intro: "",
  items: [
    "Pensionati INPS La categoria più ampia: pensioni di vecchiaia, anzianità e invalidità: I pensionati INPS rappresentano la categoria numericamente più rilevante. Sono ammessi i titolari di pensione di vecchiaia, pensione anticipata (ex anzianità), pensione di invalidità e assegno ordinario di invalidità, purché l'importo netto mensile sia sufficiente a sostenere la rata nel rispetto del limite del quinto.",
    "Pensionati INPDAP / Gestione Pubblica INPS Ex dipendenti pubblici: condizioni spesso più favorevoli: I pensionati ex dipendenti pubblici — insegnanti in pensione, ex militari, ex dipendenti ministeriali, ex personale sanitario — sono titolari di pensioni erogate dalla Gestione Pubblica INPS (ex INPDAP). Questo profilo è generalmente considerato dagli istituti finanziatori ancora più solido rispetto ai pensionati INPS ordinari, con conseguenti condizioni di tasso mediamente più vantaggiose.",
    "Pensionati di Altri Enti Casse professionali e fondi pensione specifici: I pensionati di casse professionali (avvocati, medici, ingegneri, notai) o di fondi pensione specifici possono accedere alla cessione del quinto in alcuni casi, a seconda dell'ente erogatore e delle procedure amministrative previste. Il consulente CreditoClick verifica la fattibilità specifica caso per caso.",
  ],
} as const;

export const PIP_IMPORTO = {
  sectionTitle: "Importo Massimo: Quanto Puoi Ottenere",
  title: "Il calcolo in base alla pensione netta mensile",
  introAfterCessioneLink:
    ", l'importo erogabile dipende direttamente dalla pensione netta mensile e dalla durata scelta.",
  formula: "Rata massima = Pensione netta mensile × 20%",
  exampleLead: "Esempio pratico — pensionato con assegno netto di 1.400 €:",
  columns: ["Durata", "Rata massima (20%)", "Importo indicativo erogabile*"] as const,
  rows: [
    ["24 mesi (2 anni)", "280 €", "~ 5.500 – 6.200 €"],
    ["60 mesi (5 anni)", "280 €", "~ 13.000 – 15.000 €"],
    ["120 mesi (10 anni)", "280 €", "~ 24.000 – 28.000 €"],
  ] as const,
  note:
    "Valori indicativi. Gli importi esatti dipendono dall'età del richiedente, dal tasso applicato al profilo specifico e dall'istituto finanziatore selezionato. La durata massima disponibile dipende dall'età anagrafica al momento della richiesta.",
  cta: "Calcola la tua rata esatta — Usa il nostro strumento gratuito",
} as const;

export const PIP_ASSICURAZIONE = {
  sectionTitle: "Il Ruolo dell'Assicurazione: Tutela per Te e per i Tuoi Eredi",
  title: "Perché la polizza vita inclusa è una garanzia importante",
  paragraphs: [
    "Per i pensionati, la polizza vita obbligatoria inclusa nel contratto di cessione del quinto ha un significato che va oltre il semplice adempimento normativo. È una tutela concreta per i propri familiari.",
    "In caso di decesso del pensionato prima della completa estinzione del finanziamento, il debito residuo viene estinto interamente dall'assicurazione. Gli eredi non ereditano il debito: il contratto si chiude senza ulteriori oneri a loro carico. Questo è un elemento che molti pensionati apprezzano particolarmente quando valutano la cessione del quinto come strumento di liquidità: ottengono il finanziamento di cui hanno bisogno oggi, con la certezza che non creerà problemi ai propri familiari domani.",
    "Il costo della polizza è incluso nel piano di ammortamento e viene comunicato in modo trasparente nel TAEG esposto nel preventivo. Non ci sono costi aggiuntivi fuori piano. Il costo varia in funzione dell'età anagrafica del richiedente — più avanzata è l'età, maggiore è il premio assicurativo, il che si riflette sul TAEG complessivo del contratto. Il consulente CreditoClick ti illustra questo aspetto con chiarezza prima di procedere.",
  ],
} as const;

export const PIP_VANTAGGI = {
  sectionTitle: "Perché Scegliere la Cessione del Quinto rispetto ad Altri Finanziamenti",
  title: "I vantaggi specifici per i pensionati",
  intro: "",
  items: [
    "Nessun garante richiesto: A differenza di molti finanziamenti tradizionali, la cessione del quinto non richiede la firma di un garante. La pensione è l'unica garanzia necessaria.",
    "Nessuna verifica del patrimonio: La valutazione si basa esclusivamente sull'importo della pensione e sull'età anagrafica. Non vengono richieste informazioni sul patrimonio immobiliare, sui conti correnti o su altri asset.",
    "Accessibile anche con segnalazioni CRIF: Come per i lavoratori dipendenti, la cessione del quinto della pensione è uno degli strumenti di credito più inclusivi disponibili: la valutazione si basa sulla stabilità del reddito pensionistico, non sulla storia creditizia pregressa.",
    "Rata fissa per tutta la durata: L'importo trattenuto dall'INPS ogni mese non cambia mai nel corso del contratto, indipendentemente dall'andamento dei tassi di mercato. La pianificazione finanziaria è semplice e prevedibile.",
    "Iter completamente digitale: CreditoClick gestisce l'intera pratica via WhatsApp e in modalità elettronica. Non è necessario recarsi in nessuna filiale, non è necessario stampare e consegnare documenti di persona.",
  ],
} as const;

export const PIP_LIQUIDITA = {
  sectionTitle: "A Cosa Serve la Liquidità: Le Esigenze più Frequenti dei Pensionati",
  title: "Le richieste concrete di chi si rivolge a CreditoClick",
  intro: "",
  items: [
    "Supporto economico a figli e nipoti: Una delle motivazioni più frequenti tra i pensionati che si rivolgono a CreditoClick è il desiderio di aiutare i propri figli — per un anticipo sulla casa, per le spese universitarie dei nipoti, per un momento di difficoltà familiare. La cessione del quinto consente di farlo in modo strutturato, senza intaccare i risparmi di una vita.",
    "Spese mediche e odontoiatriche: Le spese sanitarie rappresentano una delle voci di costo più rilevanti nella terza età. Visite specialistiche, protesi dentarie, interventi chirurgici non coperti dal SSN, ausili e presidi: la cessione del quinto fornisce la liquidità necessaria senza dover attingere al patrimonio.",
    "Ristrutturazione dell'abitazione: Adeguare la propria casa alle esigenze della terza età — eliminare barriere architettoniche, installare ausili per la mobilità, migliorare l'efficienza energetica — è un investimento nel proprio benessere quotidiano che la cessione del quinto può finanziare.",
    "Viaggi e qualità della vita: La pensione è anche il momento di realizzare progetti rimandati per anni. Un viaggio importante, un'esperienza speciale, un progetto personale: esigenze legittime che non richiedono giustificazioni.",
    "Estinzione di piccoli debiti pregressi: Alcuni pensionati si trovano a gestire piccoli finanziamenti residui accesi in passato. La cessione del quinto consente di consolidarli in un'unica rata automatica, semplificando la gestione mensile delle uscite.",
  ],
  cta: "Esplora tutte le soluzioni disponibili",
} as const;

export const PIP_PROCESSO = {
  sectionTitle: "Come Funziona la Richiesta con CreditoClick",
  title: "Il processo in 4 passaggi: tutto via WhatsApp, senza uscire di casa",
  steps: [
    {
      title: "Passaggio 1 — Scrivici su WhatsApp",
      desc: "Indicaci: l'importo netto mensile della tua pensione, la tua età, l'ente erogatore (INPS, ex INPDAP, cassa professionale) e l'importo indicativo di cui hai bisogno. Nessun documento in questa fase, nessun impatto sulla tua posizione CRIF.",
      icon: "clipboardList",
    },
    {
      title: "Passaggio 2 — Analisi del profilo e verifica della fattibilità",
      desc: "Il consulente verifica la durata massima disponibile in base alla tua età, calcola l'importo massimo erogabile e identifica tra i nostri istituti convenzionati quello con le condizioni più favorevoli per il tuo profilo specifico. Ti risponde direttamente su WhatsApp con una valutazione chiara e concreta.",
      icon: "userCheck",
    },
    {
      title: "Passaggio 3 — Preventivo personalizzato con TAEG e rata netta",
      desc: "Ricevi il preventivo con tutti i parametri economici esposti in modo trasparente: TAN, TAEG, rata mensile trattenuta dall'INPS, importo totale dovuto, costo della polizza vita inclusa. Nessun costo nascosto, nessuna sorpresa dopo la firma.",
      icon: "fileText",
    },
    {
      title: "Passaggio 4 — Firma digitale e comunicazione all'INPS",
      desc: "La firma del contratto avviene in modalità elettronica. CreditoClick coordina la comunicazione con l'INPS per l'attivazione della trattenuta sul cedolino. L'accredito della liquidità avviene direttamente sul tuo conto corrente.",
      icon: "send",
    },
  ],
  cta: "Inizia ora — Scrivici su WhatsApp",
} as const;

export const PIP_EEAT = {
  sectionTitle: "Sezione E-E-A-T / Note Legali e Trasparenza",
  title: "Informazioni legali e conformità normativa",
  paragraphs: [
    "La cessione del quinto della pensione è disciplinata dal D.P.R. 180/1950 e successive modificazioni, nonché dalle circolari INPS in materia di trattenute sul cedolino pensionistico. CreditoClick opera in qualità di mediatore creditizio iscritto all'OAM A17849 ai sensi del D.Lgs. 141/2010. Non eroga direttamente finanziamenti: i contratti vengono stipulati con istituti finanziatori autorizzati da Banca d'Italia.",
    "Prima della firma, il cliente riceve obbligatoriamente il modulo SECCI (Standard European Consumer Credit Information) contenente tutte le condizioni economiche del contratto: TAN, TAEG, importo totale dovuto, costo della polizza vita, piano di ammortamento dettagliato. Il diritto di recesso può essere esercitato entro 14 giorni dalla stipula del contratto (art. 125-ter TUB). La consulenza preliminare è gratuita e senza impegno.",
  ],
} as const;

export const PIP_FAQ = {
  sectionTitle: "FAQ (GEO / AEO Optimization)",
  title: "Domande frequenti sulla cessione del quinto della pensione",
  items: [
    {
      q: "Posso richiedere la cessione del quinto della pensione se ho già 80 anni?",
      a: "Sì, a condizione che la durata del contratto non porti oltre l'85° anno di età al termine del piano di rimborso. A 80 anni, la durata massima disponibile è di 60 mesi (5 anni). A 83 anni, la durata massima è di 24 mesi (2 anni). Il consulente CreditoClick verifica la durata e l'importo massimo accessibili in base alla tua età specifica.",
    },
    {
      q: "La mia pensione è bassa: posso comunque accedere alla cessione del quinto?",
      a: "Sì, purché l'importo netto mensile della pensione sia sufficiente a sostenere una rata minima nel rispetto del limite del quinto. Gli istituti finanziatori prevedono generalmente un importo minimo di rata e un importo minimo di finanziamento erogabile. Il consulente verifica la fattibilità in base al tuo importo pensionistico specifico.",
    },
    {
      q: "Ho una segnalazione in CRIF: posso comunque ottenere la cessione del quinto della pensione?",
      a: "In molti casi sì. La cessione del quinto della pensione, come quella dello stipendio, si basa sulla stabilità del reddito (la pensione INPS) piuttosto che sulla storia creditizia pregressa. La presenza di segnalazioni in CRIF non è automaticamente preclusiva. Ogni caso viene valutato individualmente dal consulente.",
    },
    {
      q: "Se muoio prima di aver finito di rimborsare, i miei figli devono pagare il debito residuo?",
      a: "No. La polizza vita obbligatoria inclusa nel contratto copre il debito residuo in caso di decesso del pensionato prima della scadenza. Gli eredi non ereditano il debito: il contratto viene estinto dall'assicurazione senza ulteriori oneri a loro carico. È uno degli elementi di tutela più apprezzati di questo strumento.",
    },
    {
      q: "Posso richiedere la cessione del quinto se percepisco una pensione di reversibilità?",
      a: "Le pensioni di reversibilità sono in linea di principio ammissibili, ma la valutazione da parte degli istituti finanziatori può variare. Alcuni istituti le accettano a pieno titolo, altri applicano criteri più restrittivi. Contattaci per una verifica specifica del tuo caso.",
    },
    {
      q: "Quanto tempo ci vuole dall'accredito della liquidità all'attivazione della trattenuta sul cedolino?",
      a: "I tempi dipendono dall'INPS e dalla tempistica di recepimento della comunicazione da parte dell'ente. Generalmente, dalla firma del contratto all'attivazione della trattenuta sul cedolino passano 30-60 giorni. La liquidità viene accreditata sul conto corrente contestualmente o poco dopo la firma, nei tempi previsti dall'istituto finanziatore. CreditoClick ti aggiorna in ogni fase del processo.",
    },
    {
      q: "Posso estinguere anticipatamente il contratto se cambia la mia situazione?",
      a: "Sì. L'estinzione anticipata è sempre possibile. L'importo da rimborsare sarà inferiore al totale dovuto a scadenza, poiché vengono detratti gli interessi non ancora maturati e una quota del premio assicurativo non goduto. Il calcolo esatto deve essere richiesto all'istituto finanziatore. CreditoClick ti assiste anche in questa fase.",
    },
  ],
} as const;

export const PIP_FINAL_CTA = {
  title: "Hai lavorato una vita. Ora hai il diritto di scegliere.",
  subtitle:
    "La pensione che hai costruito in anni di lavoro è anche una garanzia solida per accedere alla liquidità di cui hai bisogno oggi — senza garanti, senza ipoteche, senza burocrazia. Scrivici su WhatsApp: il nostro consulente ti risponde entro 24 ore lavorative, ti spiega con chiarezza quanto puoi ottenere e gestisce tutta la pratica in modalità digitale, senza che tu debba uscire di casa.",
  primary: "Scrivici su WhatsApp — Preventivo gratuito in 24h",
  secondary: "Calcola la tua rata con il nostro strumento gratuito",
} as const;
