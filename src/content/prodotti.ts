export const PRODOTTI_META = {
  title: "Prodotti CreditoClick | Confronto Cessione, Delega e Rinnovo",
  description:
    "Cessione del quinto, delega di pagamento e rinnovo: scopri qual è il prodotto giusto per la tua situazione. Confronto chiaro e preventivo gratuito via WhatsApp.",
} as const;

export const PRODOTTI_HERO = {
  badge: "Prodotti CreditoClick",
  title: "I nostri prodotti: soluzioni di credito garantite dalla busta paga o dalla pensione",
  subtitle:
    "CreditoClick si occupa esclusivamente di finanziamenti garantiti dal reddito — stipendio o pensione. Tre prodotti distinti, ciascuno pensato per una situazione specifica. Se non sai ancora quale fa per te, questa pagina è il punto di partenza giusto.",
  primaryCta: "Parla con un consulente su WhatsApp",
  secondaryCta: "Calcola la tua rata",
} as const;

export const PRODOTTI_LOGICA = {
  sectionTitle: "La Logica Comune: Perché il Reddito è la Garanzia",
  title: "Cosa accomuna tutti i nostri prodotti",
  paragraphs: [
    "I tre prodotti che CreditoClick gestisce — cessione del quinto, delega di pagamento e rinnovo — condividono una caratteristica fondamentale che li distingue da qualsiasi altro strumento di credito al consumo: la rata viene trattenuta automaticamente dalla busta paga o dal cedolino pensionistico, prima ancora che il reddito venga accreditato sul conto corrente.",
    "Questo meccanismo cambia radicalmente la logica della valutazione del credito. Il rimborso non dipende dalla memoria del debitore, dalla disponibilità del conto corrente o dalla continuità dei pagamenti manuali — dipende dalla stabilità del reddito. Ed è per questo che questi prodotti sono accessibili anche a chi ha avuto difficoltà creditizie in passato, a chi ha segnalazioni in CRIF, a chi le banche tradizionali hanno già detto no.",
    "La busta paga — o la pensione — è l'unica garanzia richiesta. Nessun garante, nessuna ipoteca, nessun bene da mettere a garanzia.",
  ],
} as const;

export const PRODOTTI_CONFRONTO = {
  sectionTitle: "I Tre Prodotti a Confronto",
  title: "Quale fa per te: una guida rapida all'orientamento",
  cards: [
    {
      badge: "Cessione del Quinto",
      heading: "Il prodotto di accesso: per chi parte da zero",
      paragraphs: [
        "La cessione del quinto è il punto di partenza per chi vuole accedere a liquidità con un meccanismo stabile e prevedibile: rata fissa trattenuta direttamente in busta paga o pensione, durata estesa e condizioni definite fin dall'inizio.",
        "È la scelta corretta quando non hai ancora una cessione attiva e vuoi una soluzione strutturata, con percorso chiaro dalla valutazione al preventivo personalizzato.",
      ],
      bullets: [
        "Rata massima: 20% del reddito netto mensile",
        "Durata: da 24 a 120 mesi",
        "Accessibile a: dipendenti pubblici, dipendenti privati a tempo indeterminato, pensionati INPS fino a 85 anni",
        "Assicurazione: obbligatoria e inclusa nel piano",
      ],
      cta: "Approfondisci la Cessione del Quinto: funzionamento, tassi 2026, importi e simulazioni",
      href: "/prodotti/cessione-del-quinto",
    },
    {
      badge: "Delega di Pagamento",
      heading: "Il prodotto aggiuntivo: per chi vuole più liquidità senza cambiare la cessione in corso",
      paragraphs: [
        "La delega di pagamento (doppio quinto) è la soluzione per aumentare la liquidità mantenendo attiva la cessione esistente: si affianca un secondo finanziamento e si amplia la capienza complessiva della trattenuta in busta paga.",
        "È indicata quando hai già una cessione in corso, vuoi ulteriore margine finanziario e preferisci non sostituire il contratto attuale con un rinnovo.",
      ],
      bullets: [
        "Rata massima aggiuntiva: fino al 20% del reddito netto mensile",
        "Trattenuta complessiva massima (cessione + delega): 40%",
        "Requisito: cessione del quinto già in corso",
        "Consenso del datore di lavoro: necessario",
      ],
      cta: "Approfondisci la Delega di Pagamento: requisiti, importi e come ottenerla",
      href: "/prodotti/delega-di-pagamento",
    },
    {
      badge: "Rinnovo della Cessione del Quinto",
      heading: "Il prodotto evolutivo: per chi vuole migliorare le condizioni o accedere a nuova liquidità",
      paragraphs: [
        "Il rinnovo permette di chiudere in anticipo la cessione in essere e attivarne una nuova, spesso con condizioni aggiornate, diversa struttura economica e possibilità di nuova liquidità netta sul conto.",
        "È la scelta più adatta quando hai già maturato i requisiti temporali e vuoi ottimizzare tasso, rata o importo disponibile in base alle condizioni di mercato correnti.",
      ],
      bullets: [
        "Requisito: rimborso di almeno 2/5 della durata originaria",
        "Liquidità: differenza tra nuovo importo erogato e debito residuo estinto",
        "Portabilità: gestita interamente da CreditoClick senza contattare il vecchio istituto",
        "Costi: inclusi nel nuovo piano (TAEG); portabilità pura senza liquidità è gratuita per legge",
      ],
      cta: "Approfondisci il Rinnovo della Cessione del Quinto: quando conviene, come funziona e quanto si ottiene",
      href: "/prodotti/rinnovo-cessione-quinto",
    },
  ],
} as const;

export const PRODOTTI_TAVOLA = {
  sectionTitle: "Tavola di Orientamento Rapido",
  title: "Non sai ancora quale prodotto fa per te? Parti da qui",
  columns: ["La tua situazione", "Il prodotto consigliato"] as const,
  rows: [
    ["Non ho nessuna cessione del quinto in corso", "Cessione del Quinto"],
    ["Ho già una cessione in corso e voglio liquidità aggiuntiva", "Delega di Pagamento"],
    ["Ho già una cessione in corso da almeno 2/5 e voglio condizioni migliori o nuova liquidità", "Rinnovo della Cessione del Quinto"],
    ["Ho già una cessione in corso da meno di 2/5 e ho bisogno di più liquidità", "Delega di Pagamento"],
    ["Ho più debiti e voglio riunirli in una rata sola", "Cessione del Quinto con consolidamento"],
    ["Non so quale prodotto fa per me", "Consulenza gratuita via WhatsApp"],
  ] as const,
} as const;

export const PRODOTTI_ACCESSO = {
  sectionTitle: "Chi Può Accedere ai Nostri Prodotti",
  title: "I requisiti comuni a tutti e tre gli strumenti",
  intro:
    "I prodotti CreditoClick sono accessibili a una platea ampia di lavoratori e pensionati. Il requisito fondamentale comune a tutti e tre è la presenza di un reddito stabile e documentabile — stipendio o pensione — che costituisce la garanzia del finanziamento.",
  items: [
    "Dipendenti pubblici a tempo indeterminato: La categoria con le condizioni di tasso più vantaggiose: insegnanti, infermieri, personale della PA, forze dell'ordine, forze armate, dipendenti di enti locali e nazionali.",
    "Dipendenti privati a tempo indeterminato: Sia i dipendenti di grandi aziende strutturate — con condizioni spesso paragonabili al pubblico — sia i dipendenti di piccole e medie imprese, per i quali la valutazione tiene conto del TFR maturato come garanzia integrativa.",
    "Pensionati INPS e INPDAP: Fino all'85° anno di età al termine del piano di rimborso, con assicurazione vita obbligatoria inclusa che tutela gli eredi in caso di decesso prima dell'estinzione del contratto.",
  ],
  notAllowed:
    "I prodotti non sono accessibili a lavoratori autonomi, liberi professionisti, titolari di partita IVA, lavoratori con contratto a tempo determinato o in somministrazione.",
  cta: "Scopri le soluzioni specifiche per la tua categoria professionale",
} as const;

export const PRODOTTI_PROCESSO = {
  sectionTitle: "Dalla Scelta del Prodotto alla Firma: Come Lavoriamo",
  title: "Il processo CreditoClick in sintesi",
  paragraphs: [
    "Indipendentemente dal prodotto che ti riguarda, il processo è sempre lo stesso: valutazione preliminare gratuita via WhatsApp, analisi del profilo da parte di un consulente reale, preventivo personalizzato con TAEG e rata netta esposti in modo trasparente, firma digitale e accredito sul conto corrente.",
    "Nessun passaggio in filiale. Nessuna documentazione da portare di persona. Nessun costo di consulenza nella fase pre-contrattuale.",
  ],
  linkLabel: "Scopri come lavoriamo nella pagina Chi Siamo",
  cta: "Inizia ora — Scrivici su WhatsApp",
} as const;

export const PRODOTTI_FAQ = {
  sectionTitle: "FAQ (GEO / AEO Optimization)",
  title: "Domande frequenti sui prodotti CreditoClick",
  items: [
    {
      q: "Quale prodotto devo scegliere se non ho mai attivato una cessione del quinto?",
      a: "In genere il percorso corretto parte dalla cessione del quinto base. È il prodotto d'ingresso per chi non ha finanziamenti di questo tipo in corso e vuole ottenere liquidità con rata fissa trattenuta in busta paga o pensione. Dopo la prima attivazione, in base all'evoluzione della situazione personale, si potrà valutare delega o rinnovo.",
    },
    {
      q: "Quando conviene la delega di pagamento rispetto al rinnovo?",
      a: "La delega è più adatta quando hai già una cessione attiva e vuoi altra liquidità senza sostituire il contratto attuale. Il rinnovo, invece, è indicato quando hai maturato i requisiti temporali e vuoi chiudere la cessione in corso per aprirne una nuova, con possibili condizioni migliorative e nuova liquidità netta.",
    },
    {
      q: "Posso avere cessione e delega contemporaneamente?",
      a: "Sì, è possibile avere cessione del quinto e delega di pagamento in parallelo, se il profilo è idoneo e c'è capienza reddituale. Non è invece possibile avere due cessioni del quinto attive sullo stesso reddito: in quel caso l'operazione corretta è il rinnovo, che estingue la precedente prima della nuova attivazione.",
    },
    {
      q: "Posso passare da cessione a rinnovo dopo alcuni anni?",
      a: "Sì. È un percorso frequente: prima cessione del quinto, poi eventuale rinnovo quando sono maturati i requisiti previsti. La fattibilità dipende da mesi già rimborsati, situazione contrattuale aggiornata e condizioni disponibili al momento della richiesta.",
    },
    {
      q: "Come faccio a sapere quale prodotto è giusto per la mia situazione?",
      a: "La tavola di orientamento in questa pagina è il primo filtro utile. Per una risposta precisa, serve una valutazione del profilo reale: contratto, anzianità, eventuali finanziamenti in corso e obiettivo di liquidità. Scrivendo su WhatsApp, il consulente ti indica in modo chiaro quale prodotto è più coerente e perché.",
    },
  ],
} as const;

export const PRODOTTI_FINAL_CTA = {
  title: "Non sei ancora sicuro di quale prodotto fa per te?",
  subtitle:
    "Non devi saperlo prima di contattarci. Scrivici su WhatsApp descrivendo la tua situazione — anche in modo approssimativo — e il consulente ti orienta verso il prodotto più adatto, spiega le differenze e ti fornisce una prima stima senza impegno. È il modo più rapido per trasformare un dubbio in una soluzione concreta.",
  primary: "Scrivici su WhatsApp — Orientamento gratuito in 24h",
  secondary: "Calcola la tua rata con il nostro strumento gratuito",
} as const;
