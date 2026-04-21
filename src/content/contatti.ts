export const CONTATTI_META = {
  title: "Contatti | CreditoClick — Scrivici su WhatsApp",
  description:
    "Contatta CreditoClick per una consulenza gratuita sulla cessione del quinto. Rispondiamo via WhatsApp entro 24 ore lavorative. Nessun impegno, nessun costo.",
} as const;

export const CONTATTI_HERO = {
  badge: "Contatti",
  title: "Contatta CreditoClick: siamo a un messaggio di distanza",
  subtitle:
    "Hai una domanda sulla cessione del quinto, vuoi sapere se la tua situazione è finanziabile o hai già le idee chiare e vuoi iniziare subito? Scrivici su WhatsApp: un consulente reale leggerà il tuo messaggio e ti risponderà entro 24 ore lavorative con una valutazione concreta e senza impegno.",
  primaryCta: "Scrivici su WhatsApp",
} as const;

export const CONTATTI_CANALI = {
  sectionTitle: "Come Contattarci",
  title: "Tutti i canali disponibili",
  intro:
    "Il canale principale attraverso cui gestiamo le richieste è WhatsApp. Abbiamo scelto questo canale perché è quello che si adatta meglio ai ritmi reali dei nostri clienti: puoi scriverci a qualsiasi ora, dal telefono, senza dover aspettare orari di apertura, senza dover cercare parcheggio sotto una filiale, senza dover fissare un appuntamento con settimane di anticipo.",
  contacts: [
    {
      channel: "WhatsApp (canale principale)",
      detail: "(inserire numero WhatsApp)",
      note: "Disponibile 7 giorni su 7 per ricevere messaggi. Le risposte vengono fornite entro 24 ore lavorative dal lunedì al venerdì. Per messaggi inviati nel weekend, la risposta viene garantita entro il lunedì mattina.",
    },
    {
      channel: "Email",
      detail: "(inserire indirizzo email)",
      note: "Per comunicazioni formali, invio di documentazione o richieste che preferisci gestire via posta elettronica. Tempo di risposta: entro 48 ore lavorative.",
    },
    {
      channel: "Telefono",
      detail: "(inserire numero di telefono)",
      note: "Disponibile negli orari (inserire orari di apertura). Per consulenze telefoniche è preferibile fissare un orario via WhatsApp per garantire la disponibilità del consulente.",
    },
    {
      channel: "Sede operativa",
      detail: "(inserire indirizzo sede) (inserire città, CAP, provincia)",
      note: "(Nota redazionale: valutare se mantenere o rimuovere il riferimento alla sede fisica in funzione del modello operativo effettivo dell'agenzia. Se l'operatività è interamente da remoto, sostituire con \"Operiamo interamente da remoto su tutto il territorio nazionale.\")",
    },
  ],
} as const;

export const CONTATTI_PRIMO_MESSAGGIO = {
  sectionTitle: "Cosa Scrivere nel Primo Messaggio",
  title: "Per ricevere una risposta più utile e più veloce",
  intro:
    "Non esiste un format obbligatorio per il primo messaggio. Puoi scriverci con le parole che preferisci. Tuttavia, se includi queste informazioni fin dall'inizio, il consulente potrà darti una valutazione più precisa e più rapida:",
  items: [
    "La tua categoria professionale: Dipendente pubblico (e in quale comparto: scuola, sanità, PA, forze dell'ordine), dipendente privato (e dimensione approssimativa dell'azienda), pensionato INPS.",
    "Lo stipendio o la pensione netta mensile: Non l'importo lordo — l'importo netto che ricevi effettivamente ogni mese.",
    "L'importo indicativo di cui hai bisogno: Un ordine di grandezza è sufficiente nella fase iniziale: non è necessario essere precisi al centesimo.",
    "Eventuali situazioni particolari: Se hai già una cessione del quinto in corso, se hai segnalazioni in CRIF, se hai già ricevuto rifiuti da altri istituti, se hai esigenze di tempistica specifiche (es. un rogito in programma, una data di lavori già concordata). Queste informazioni ci aiutano a valutare la tua situazione nel modo più accurato possibile.",
  ],
  outro:
    "Se preferisci non condividere subito questi dettagli, nessun problema: puoi scriverci semplicemente \"vorrei sapere se posso accedere a una cessione del quinto\" e il consulente ti guiderà nella raccolta delle informazioni necessarie.",
} as const;

export const CONTATTI_PROCESSO = {
  sectionTitle: "Cosa Succede Dopo il Primo Contatto",
  title: "Il processo dalla prima richiesta all'eventuale accredito",
  intro:
    "Vogliamo che tu sappia esattamente cosa aspettarti quando ci scrivi, senza sorprese e senza aspettative non allineate.",
  steps: [
    "Entro 24 ore lavorative — Prima risposta e valutazione preliminare: Il consulente legge il tuo messaggio, analizza le informazioni fornite e ti risponde con una prima valutazione: se la situazione appare concretamente finanziabile, quali prodotti potrebbero essere adatti al tuo profilo, e quali informazioni aggiuntive potrebbero essere necessarie per procedere. Questa fase è completamente gratuita e non impegna a nulla.",
    "Fase successiva — Analisi approfondita e selezione dell'offerta: Se decidi di procedere, il consulente analizza il tuo profilo in modo più dettagliato — datore di lavoro, anzianità contrattuale, TFR maturato, eventuale storico creditizio — e identifica tra i nostri istituti convenzionati l'offerta più competitiva disponibile per la tua situazione specifica.",
    "Preventivo personalizzato con TAEG e rata netta: Ricevi un preventivo formale con tutti i parametri economici esposti in modo chiaro e trasparente: TAN, TAEG, rata mensile netta, importo totale dovuto, costo della polizza assicurativa. Accompagnato dal modulo SECCI. Nessun costo nascosto, nessuna voce che emerge dopo la firma.",
    "Raccolta documenti e firma digitale: Se il preventivo ti soddisfa e decidi di procedere, il consulente ti guida nella raccolta dei documenti necessari — che puoi caricare via WhatsApp o via app. La firma del contratto avviene in modalità elettronica. CreditoClick gestisce la comunicazione con il datore di lavoro o con l'INPS.",
    "Accredito sul conto corrente: Dopo l'approvazione dell'istituto finanziatore, l'accredito avviene direttamente sul tuo conto corrente nei tempi previsti dal contratto — generalmente tra i 7 e i 15 giorni lavorativi dalla presentazione della pratica completa.",
  ],
} as const;

export const CONTATTI_FAQ = {
  sectionTitle: "Domande Prima di Contattarci",
  title: "Alcune risposte alle incertezze più comuni",
  items: [
    {
      q: "Contattarvi è davvero gratuito e senza impegno?",
      a: "Sì. La valutazione preliminare, il preventivo personalizzato e tutta la fase di consulenza pre-contrattuale sono completamente gratuiti. Non esiste nessun costo per \"fare una domanda\" o per ricevere un preventivo. L'unico momento in cui entrano in gioco costi — regolati dalla normativa e comunicati in modo trasparente nel preventivo — è quando si decide di procedere con la firma del contratto.",
    },
    {
      q: "Cosa succede ai miei dati quando vi scrivo?",
      a: "I dati personali che condividi con CreditoClick nel corso della valutazione sono trattati in conformità al Regolamento UE 2016/679 (GDPR), esclusivamente per le finalità connesse alla valutazione e alla gestione della richiesta di finanziamento. Non li cediamo a terzi per finalità commerciali, non li utilizziamo per inviarti comunicazioni non richieste. L'informativa completa è disponibile nella nostra Privacy Policy.",
    },
    {
      q: "Posso contattarvi anche se non sono sicuro di voler procedere?",
      a: "Assolutamente sì. Molti dei clienti che ci contattano lo fanno in una fase esplorativa — vogliono capire se è possibile, a quali condizioni, quanto costerebbe. Rispondere a queste domande è esattamente il nostro lavoro. Non c'è nessuna pressione commerciale a procedere: se dopo la consulenza decidi che non è il momento giusto, o che preferisci valutare altre opzioni, va benissimo.",
    },
    {
      q: "Posso contattarvi se ho già ricevuto un rifiuto da un'altra banca o finanziaria?",
      a: "Sì. Anzi, è uno dei motivi più frequenti per cui i clienti si rivolgono a noi. Un rifiuto da parte di un istituto generalista non preclude l'accesso a istituti specializzati con criteri di valutazione diversi. Prima di procedere, il consulente analizza il motivo del rifiuto precedente per identificare l'approccio più efficace — evitando di presentare pratiche che potrebbero lasciare tracce negative in CRIF senza probabilità concrete di approvazione.",
    },
    {
      q: "Operate solo in alcune regioni o su tutto il territorio nazionale?",
      a: "Operiamo su tutto il territorio nazionale. Il processo interamente digitale e la gestione via WhatsApp eliminano qualsiasi vincolo geografico. Assistiamo clienti dalla Valle d'Aosta alla Sicilia, dalle grandi città ai piccoli comuni, con la stessa qualità di servizio indipendentemente dalla sede di residenza o di lavoro.",
    },
  ],
} as const;

export const CONTATTI_ORARI = {
  sectionTitle: "Orari e Tempi di Risposta",
  title: "Quando e quanto velocemente rispondiamo",
  items: [
    "Messaggi WhatsApp: ricevuti in qualsiasi momento della giornata o della settimana. Le risposte vengono fornite entro 24 ore lavorative dal lunedì al venerdì. Nella maggior parte dei casi i tempi sono significativamente più brevi. Per messaggi inviati il sabato, la domenica o nei giorni festivi, la risposta viene garantita entro il mattino del primo giorno lavorativo successivo.",
    "Email: entro 48 ore lavorative dalla ricezione.",
    "Richieste urgenti: se hai una scadenza imminente — un rogito programmato, una data di lavori già concordata, una situazione che richiede liquidità in tempi stretti — segnalacelo esplicitamente nel primo messaggio. Cercheremo di darti priorità nella valutazione e nella gestione della pratica.",
  ],
} as const;

export const CONTATTI_ISTITUZIONALI = {
  sectionTitle: "Riferimenti Istituzionali",
  title: "I dati ufficiali di CreditoClick",
  rows: [
    ["Ragione sociale", "(inserire)"],
    ["Forma giuridica", "(inserire)"],
    ["P.IVA", "(inserire)"],
    ["REA", "(inserire)"],
    ["Sede legale", "(inserire indirizzo completo)"],
    ["Iscrizione OAM", "(inserire numero iscrizione)"],
    ["Email istituzionale", "(inserire)"],
    ["PEC", "(inserire)"],
  ] as const,
  note:
    "CreditoClick è iscritta all'OAM (Organismo Agenti e Mediatori) in qualità di mediatore creditizio ai sensi del D.Lgs. 141/2010. L'iscrizione è verificabile pubblicamente sul sito ufficiale dell'OAM all'indirizzo organismo-am.it.",
} as const;

export const CONTATTI_RECLAMI = {
  sectionTitle: "Segnalazioni e Reclami",
  title: "Come presentare un reclamo o una segnalazione",
  paragraphs: [
    "CreditoClick si impegna a gestire ogni richiesta con correttezza, trasparenza e professionalità. Nel caso in cui un cliente ritenga che il servizio ricevuto non sia stato conforme agli standard attesi o alle disposizioni normative applicabili, ha il diritto di presentare un reclamo formale.",
    "Come presentare un reclamo: Il reclamo può essere inviato per iscritto all'indirizzo email (inserire email reclami) oppure via PEC all'indirizzo (inserire PEC). Il reclamo deve indicare il nome del reclamante, una descrizione chiara del motivo della contestazione e i riferimenti alla pratica interessata. CreditoClick si impegna a rispondere per iscritto entro 30 giorni dal ricevimento del reclamo.",
    "Ricorso all'Arbitro Bancario Finanziario (ABF): Nel caso in cui la risposta al reclamo non risulti soddisfacente, o in assenza di risposta entro i termini previsti, il cliente ha la facoltà di ricorrere all'Arbitro Bancario Finanziario (ABF), un sistema di risoluzione alternativa delle controversie in materia bancaria e finanziaria istituito da Banca d'Italia. Informazioni sulle modalità di accesso all'ABF sono disponibili sul sito arbitrobancariofinanziario.it.",
  ],
} as const;

export const CONTATTI_CTA = {
  title: "Un messaggio. Una risposta entro 24 ore. Nessun impegno.",
  subtitle:
    "Non devi avere le idee completamente chiare per contattarci. Non devi sapere esattamente cosa vuoi o di quanto hai bisogno. Puoi scriverci semplicemente per capire se c'è una soluzione adatta alla tua situazione — e noi ti risponderemo con onestà, che la risposta sia sì oppure no.",
  primary: "Scrivici su WhatsApp",
  secondary: "Torna alla Homepage",
} as const;

export const CONTATTI_NOTE_REDAZIONALI = [
  ["Numero WhatsApp", "Inserire il numero WhatsApp business attivo dell'agenzia"],
  ["Indirizzo email", "Inserire l'indirizzo email operativo e quello specifico per i reclami"],
  ["Numero di telefono", "Inserire se previsto; rimuovere la sezione se il canale telefonico non è attivo"],
  ["Orari di apertura", "Inserire gli orari effettivi di presidio del canale WhatsApp e telefonico"],
  ["Sede operativa", "Confermare se inserire l'indirizzo fisico o optare per la dicitura \"operatività interamente da remoto\""],
  ["Dati societari", "Completare la tabella con tutti i riferimenti ufficiali"],
  ["PEC reclami", "Inserire l'indirizzo PEC dedicato alla gestione dei reclami formali"],
  ["Privacy Policy", "Verificare che il link alla Privacy Policy sia attivo e aggiornato — obbligatorio ai sensi del GDPR"],
  ["Schema Markup", "Implementare ContactPage + Organization + LocalBusiness (con orari e canali di contatto) in JSON-LD"],
  ["Google Business Profile", "Verificare che i dati di contatto siano allineati con quelli del profilo Google Business per coerenza NAP (Name, Address, Phone) — fondamentale per la SEO locale"],
  ["Widget WhatsApp", "Valutare l'inserimento di un pulsante WhatsApp flottante su tutta la pagina (e sull'intero sito) per massimizzare le conversioni"],
] as const;
