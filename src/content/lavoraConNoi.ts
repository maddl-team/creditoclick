export const LAVORA_CON_NOI_META = {
  title: "Lavora con noi | Consulente Finanziario Maglie – CreditoClick",
  description:
    "Posizione aperta a Maglie (LE): Consulente Finanziario Junior/Senior per cessione del quinto e prestiti personali. Contratto dipendente, formazione OAM e crescita in un'agenzia strutturata.",
} as const;

export const LAVORA_CON_NOI_HERO = {
  badges: [
    "Sede: Maglie (LE)",
    "Contratto: Dipendente a tempo indeterminato/determinato",
    "Presenza in sede",
  ],
  title: "Consulente Finanziario Junior/Senior – Cessione del Quinto e Prestiti Personali",
  subtitle:
    "Entra in un'agenzia finanziaria strutturata, con processi chiari, strumenti digitali e un percorso di crescita reale nel credito al consumo. Lavori in filiale a Maglie, a contatto con clienti e team, con responsabilità concrete fin dal primo giorno.",
  primaryCta: "Candidati ora",
  secondaryCta: "Scopri Chi Siamo",
} as const;

export const LAVORA_CON_NOI_CHI_SIAMO = {
  badge: "Chi siamo",
  title: "Un'agenzia strutturata, una filiale in crescita",
  body: "Siamo un'agenzia finanziaria strutturata con sede a Maglie, specializzata nelle soluzioni di accesso al credito per famiglie, dipendenti e pensionati. Per il potenziamento della nostra filiale locale, ricerchiamo una figura interna da inserire come collaboratore dipendente dedicato allo sviluppo e alla gestione delle richieste di finanziamento.",
} as const;

export const LAVORA_CON_NOI_MANSIONI = {
  badge: "Il ruolo",
  title: "Cosa farai ogni giorno",
  intro:
    "Un ruolo operativo e commerciale, con responsabilità chiare dalla prima consulenza fino alla liquidazione della pratica.",
  items: [
    {
      title: "Consulenza e Collocamento Prodotti",
      description:
        "Consulenza dedicata ai clienti per il collocamento di prodotti di Cessione del Quinto (Stipendio e Pensione) e Prestiti Personali (PP e CQ).",
    },
    {
      title: "Gestione Lead e Accoglienza",
      description:
        "Accoglienza clienti in filiale e gestione dei contatti telefonici e digitali generati dalle campagne marketing aziendali.",
    },
    {
      title: "Istruttoria e Valutazione Pratiche",
      description:
        "Raccolta documentale reddituale (buste paga, cedolini pensione, modelli CUD/CU) e valutazione preventiva di fattibilità.",
    },
    {
      title: "Caricamento e Monitoraggio Quotidiano",
      description:
        "Inserimento delle richieste nei portali/gestionali bancari partner e monitoraggio dell'iter fino alla liquidazione finale del contratto.",
    },
    {
      title: "Gestione CRM e Follow-up",
      description:
        "Aggiornamento costante del CRM aziendale, inserimento nuovi nominativi finanziati, pianificazione attività di ricontatto periodico e fidelizzazione.",
    },
    {
      title: "Archiviazione e Back-office",
      description:
        "Archiviazione documentale e gestione amministrativa delle pratiche nel rispetto delle policy di compliance e privacy.",
    },
  ],
} as const;

export const LAVORA_CON_NOI_REQUISITI = {
  badge: "Requisiti",
  title: "Cosa richiediamo",
  intro: "Cerchiamo una figura motivata, precisa e orientata al cliente, con base formativa solida e propensione all'operatività digitale.",
  items: [
    {
      title: "Titolo di Studio",
      description: "Diploma di scuola superiore o Laurea.",
    },
    {
      title: "Requisito OAM",
      description:
        "Iscrizione attiva come collaboratore OAM o possesso dei requisiti formativi (prova valutativa OAM superata) con idoneità all'iscrizione immediata.",
    },
    {
      title: "Competenze Tecniche",
      description:
        "Ottima padronanza degli strumenti informatici, pacchetto Office e attitudine all'utilizzo di gestionali/CRM aziendali.",
    },
    {
      title: "Soft Skills",
      description: "Empatia, forte orientamento al cliente, precisione nella gestione dei dati e spirito di squadra.",
    },
  ],
} as const;

export const LAVORA_CON_NOI_OFFRIAMO = {
  badge: "Benefit",
  title: "Cosa offriamo",
  intro: "Un inserimento trasparente, con contratto regolare e un ambiente di lavoro moderno per crescere nel settore del credito.",
  items: [
    "Contratto di lavoro dipendente regolare, solido e trasparente.",
    "Stipendio fisso mensile garantito.",
    "Percorso di affiancamento iniziale strutturato e formazione continua per l'aggiornamento dei crediti professionali obbligatori OAM.",
    "Ufficio moderno, tecnologico e accogliente nel centro di Maglie.",
  ],
} as const;

export const LAVORA_CON_NOI_FORM = {
  badge: "Candidatura",
  title: "Invia la tua candidatura",
  description:
    "Compila il form in pochi minuti: allega il CV e indica lo stato della tua iscrizione OAM. Ti ricontatteremo a breve.",
  successTitle: "Candidatura inviata con successo",
  successMessage: "Candidatura inviata con successo, ti ricontatteremo a breve.",
} as const;

export const OAM_STATUS_OPTIONS = [
  { value: "iscrizione_attiva", label: "Iscrizione OAM attiva" },
  { value: "prova_superata", label: "Prova valutativa superata (in attesa di iscrizione)" },
  { value: "nessuna", label: "Nessuna iscrizione / Da conseguire" },
] as const;

export type OamStatusValue = (typeof OAM_STATUS_OPTIONS)[number]["value"];

export function oamStatusLabel(value: string): string {
  return OAM_STATUS_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

/** Data di scadenza annuncio: 60 giorni da oggi (ISO date YYYY-MM-DD). */
export function getJobValidThroughDate(from = new Date()): string {
  const date = new Date(from);
  date.setUTCDate(date.getUTCDate() + 60);
  return date.toISOString().slice(0, 10);
}

export function buildJobPostingSchema(siteUrl: string, pageUrl: string) {
  const base = siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Consulente Finanziario - Cessione del Quinto e Prestiti Personali",
    description: [
      LAVORA_CON_NOI_CHI_SIAMO.body,
      "",
      "Mansioni:",
      ...LAVORA_CON_NOI_MANSIONI.items.map((item) => `- ${item.title}: ${item.description}`),
      "",
      "Requisiti:",
      ...LAVORA_CON_NOI_REQUISITI.items.map((item) => `- ${item.title}: ${item.description}`),
      "",
      "Offriamo:",
      ...LAVORA_CON_NOI_OFFRIAMO.items.map((item) => `- ${item}`),
    ].join("\n"),
    datePosted: new Date().toISOString().slice(0, 10),
    validThrough: `${getJobValidThroughDate()}T23:59:59+02:00`,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "CreditoClick",
      sameAs: base,
      logo: `${base}/images/creditoclick_logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Piazza Oronzo de Donno, 10",
        addressLocality: "Maglie",
        addressRegion: "LE",
        postalCode: "73024",
        addressCountry: "IT",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "IT",
    },
    directApply: true,
    url: pageUrl,
    industry: "Financial Services",
  };
}
