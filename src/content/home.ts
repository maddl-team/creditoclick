export const HOME_TRUST_PILLS = [
    {
        title: "Operatori OAM certificati",
        desc: "Mediatori creditizi regolarmente iscritti al registro ufficiale.",
        icon: "shieldCheck",
    },
    {
        title: "Risposta in 24 ore lavorative",
        desc: "Prima valutazione gratuita e senza impegno entro un giorno.",
        icon: "clock",
    },
    {
        title: "100% digitale, 0% code",
        desc: "Tutta la pratica si gestisce online o via WhatsApp. Nessuna filiale.",
        icon: "smartphone",
    },
    {
        title: "Trasparenza totale sul costo del credito",
        desc: "Ti mostriamo TAEG, TAN e rata netta prima di firmare qualsiasi cosa.",
        icon: "info",
    },
] as const;

export const HOME_CORE_PRODUCTS = [
    {
        id: "cessione",
        title: "Cessione del Quinto dello Stipendio o della Pensione",
        badge: "Cessione del Quinto",
        desc: "La formula di finanziamento più sicura per dipendenti e pensionati: la rata viene trattenuta direttamente in busta paga o sul cedolino della pensione, fino a un massimo del 20% del tuo netto mensile. Nessun rischio di dimenticare un pagamento, nessun addebito su conto corrente.",
        ideal: "Ideale per: dipendenti pubblici e privati, statali, insegnanti, infermieri, militari, pensionati INPS fino a 85 anni.",
        market: "Tassi cessione del quinto 2026: il mercato ha visto una progressiva stabilizzazione dei tassi dopo i rialzi del biennio precedente. I nostri consulenti aggiornano quotidianamente le offerte dei partner convenzionati per garantirti sempre la migliore condizione disponibile.",
        cta: "Scopri la Cessione del Quinto | Calcola la rata",
        icon: "wallet",
        placeholderColor: "from-blue-500 to-indigo-600",
    },
    {
        id: "delega",
        title: "Delega di Pagamento (il \"Doppio Quinto\")",
        badge: "Delega di Pagamento",
        desc: "Se hai già una cessione del quinto in corso e hai bisogno di liquidità aggiuntiva, la delega di pagamento ti permette di accedere a un secondo finanziamento, portando la trattenuta in busta paga fino al 40% del tuo stipendio netto. Riservata ai dipendenti pubblici e ai privati alle dipendenze di aziende strutturate.",
        cta: "Scopri la Delega di Pagamento",
        icon: "users",
        placeholderColor: "from-cyan-400 to-blue-500",
    },
    {
        id: "rinnovo",
        title: "Rinnovo della Cessione del Quinto",
        badge: "Rinnovo Cessione del Quinto",
        desc: "Hai già una cessione in corso presso un'altra banca o finanziaria? Se sono trascorsi almeno 2/5 del periodo contrattuale, potresti avere diritto a rinnovare — spesso ottenendo nuova liquidità e condizioni migliori. Gestiamo la portabilità in modo completamente telematico, senza che tu debba fare nulla con il vecchio istituto.",
        cta: "Scopri come funziona il Rinnovo",
        icon: "refresh",
        placeholderColor: "from-indigo-400 to-cyan-500",
    }
] as const;

export const HOME_PROCESS_STEPS = [
    {
        title: "Step 1 — Compila il modulo online.",
        desc: "Nessun documento richiesto in questa fase: ci basta qualche informazione di base per darti una prima valutazione.",
        icon: "clipboardList",
    },
    {
        title: "Step 2 — Analisi gratuita del tuo profilo.",
        desc: "Un consulente specializzato analizza la tua situazione contrattuale, il tuo reddito e l'eventuale storico creditizio. Ti proponiamo solo soluzioni concretamente accessibili — non promesse irrealizzabili.",
        icon: "userCheck",
    },
    {
        title: "Step 3 — Preventivo personalizzato e confronto offerte.",
        desc: "Ti presentiamo la migliore offerta del nostro istituto convenzionato con TAEG, TAN e rata netta chiaramente esposta. Nessun costo nascosto, nessuna sorpresa.",
        icon: "fileText",
    },
    {
        title: "Step 4 — Firma digitale e accredito.",
        desc: "Tutta la documentazione si gestisce in modalità elettronica. Una volta approvata la pratica, l'accredito avviene direttamente sul tuo conto corrente nei tempi previsti dal contratto.",
        icon: "send",
    },
] as const;

export const HOME_TARGET_CATEGORIES = [
    {
        title: "Sanità e Infermieri",
        desc: "Prestiti veloci per chi non ha tempo di stare in fila in banca.",
        icon: "stethoscope",
    },
    {
        title: "Insegnanti e ATA",
        desc: "Convenzione NoiPA, iter telematico, zero scartoffie in segreteria.",
        icon: "graduationCap",
    },
    {
        title: "Forze Armate e dell'Ordine",
        desc: "Convezioni dedicate per Esercito, GdF, Carabinieri, Polizia, VVF.",
        icon: "shield",
    },
    {
        title: "Dipendenti Grandi Aziende",
        desc: "SPA e SRL strutturate: iter riservato e rapido.",
        icon: "building",
    },
    {
        title: "Dipendenti PMI",
        desc: "Sotto i 15 dipendenti? Valutiamo il tuo TFR accumulato, non solo il bilancio aziendale.",
        icon: "briefcase",
    },
    {
        title: "Pensionati INPS",
        desc: "Fino a 85 anni, con assicurazione inclusa e iter completamente digitale.",
        icon: "userCircle",
    },
] as const;

export const HOME_FAQS = [
    {
        q: "Come funziona la cessione del quinto?",
        a: "La cessione del quinto è un finanziamento riservato a dipendenti e pensionati. La rata mensile viene trattenuta direttamente dalla busta paga o dal cedolino pensionistico da parte del datore di lavoro o dell'INPS, e versata all'istituto finanziatore. L'importo massimo della rata non può superare il 20% del reddito netto mensile. La durata va da 24 a 120 mesi."
    },
    {
        q: "Posso richiedere un prestito se sono segnalato in CRIF?",
        a: "Sì, in molti casi è possibile. Con la cessione del quinto, la valutazione del rischio si basa principalmente sulla stabilità del reddito (busta paga o pensione) e non esclusivamente sulla storia creditizia. Contattaci per una valutazione gratuita e riservata del tuo profilo."
    },
    {
        q: "Qual è la differenza tra cessione del quinto e delega di pagamento?",
        a: "La cessione del quinto permette di cedere fino al 20% dello stipendio netto. La delega di pagamento (o \"doppio quinto\") è un secondo finanziamento aggiuntivo che porta la trattenuta complessiva fino al 40%. È riservata a dipendenti pubblici e privati di aziende strutturate che acconsentono alla delega."
    },
    {
        q: "Quanto tempo ci vuole per avere i soldi sul conto?",
        a: "I tempi variano in base all'istituto finanziatore e alla completezza della documentazione. Nella maggior parte dei casi, dalla presentazione della pratica completa all'accredito passano da 5 a 15 giorni lavorativi. Casi urgenti possono essere gestiti in via prioritaria: contattaci direttamente."
    },
    {
        q: "È possibile rinnovare una cessione del quinto già in corso?",
        a: "Sì. Quando sono stati rimborsati almeno 2/5 del piano di rimborso originario, è possibile procedere con un rinnovo — estinguendo il contratto precedente e accedendo a nuova liquidità, spesso a condizioni migliorative. Gestiamo la portabilità in modo completamente digitale."
    },
    {
        q: "Quali documenti servono per richiedere un prestito online?",
        a: "Generalmente: documento d'identità in corso di validità, codice fiscale, ultima busta paga o cedolino pensionistico, e il CUD/730 più recente. In alcuni casi possono essere richiesti ulteriori documenti a seconda del prodotto e dell'istituto. Il nostro consulente ti guiderà passo per passo."
    }
] as const;

export const HOME_TESTIMONIALS = [
    {
        quote: "Avevo una segnalazione CRIF e nessuna banca mi aiutava. CreditoClick ha trovato una soluzione in meno di 48 ore. Finalmente respiro.",
        author: "Marco T.",
        role: "Infermiere, Napoli",
        stars: 5,
    },
    {
        quote: "Insegno alle medie e non avevo tempo per andare in banca. Ho fatto tutto dal telefono, in pausa pranzo. Pratica approvata in 3 giorni.",
        author: "Giovanna R.",
        role: "Docente, Torino",
        stars: 5,
    },
    {
        quote: "Avevo 5 rate diverse ogni mese. Ora ne ho una sola, più bassa. Hanno gestito tutto loro, io ho solo firmato.",
        author: "Roberto M.",
        role: "Dipendente pubblico, Roma",
        stars: 5,
    },
    {
        quote: "Grazie alla delega di pagamento ho ottenuto la liquidità che mi serviva per ristrutturare casa, nonostante avessi già un prestito attivo. Professionali e veloci.",
        author: "Antonio P.",
        role: "Vigile del Fuoco, Milano",
        stars: 5,
    },
] as const;

export const HOME_HERO_CONTENT = {
    badge: "Agenti e Mediatori Certificati OAM",
    title: "CreditoClick: la tua agenzia di prestiti online, esperta, veloce e dalla tua parte.",
    description: "Cessione del quinto, rinnovi, consolidamenti e soluzioni su misura per dipendenti, pensionati e Forze dell'Ordine. Tutto online, senza file in filiale, con un esperto reale che ti segue dal primo contatto all'accredito.",
    primaryCta: "Richiedi una consulenza gratuita",
    secondaryCta: "Calcola la tua rata in 2 minuti",
    conventionsLabel: "Convenzioni Nazionali",
    conventions: ["Inps", "NoiPa", "Mef"],
} as const;

export const HOME_SOLUTIONS_CONTENT = {
    badge: "Soluzioni ai Problemi",
    title: "Hai un problema specifico? Abbiamo una soluzione concreta.",
    intro: "A volte il bisogno di liquidità nasce da una situazione difficile — un debito da ristrutturare, una segnalazione in CRIF, un mutuo che rischia di slittare. Altre volte è un progetto di vita. In entrambi i casi, ti aiutiamo a trovare una strada.",
    painPoints: {
        title: "Soluzioni ai Pain Points",
        items: [
            {
                heading: "Prestito per Cattivi Pagatori e Segnalati CRIF",
                text: "Hai una segnalazione in Centrale Rischi? Con la cessione del quinto la valutazione si basa sulla busta paga, non sulla tua storia creditizia.",
            },
            {
                heading: "Consolidamento Debiti",
                text: "Troppe rate ogni mese? Possiamo riunirle in un'unica rata mensile più bassa e sostenibile, liberandoti dallo stress finanziario.",
            },
        ],
    },
    projects: {
        title: "Soluzioni per Progetti di Vita",
        items: [
            "Anticipo per il Mutuo Casa",
            "Acquisto Auto o Moto",
            "Matrimonio e Cerimonie",
            "Ristrutturazione Casa",
            "Spese Mediche e Salute",
        ],
        cta: "Esplora tutte le soluzioni",
    },
} as const;

export const HOME_TRANSPARENCY_CONTENT = {
    badge: "Trasparenza Istituzionale",
    title: "Chi è CreditoClick: trasparenza e conformità normativa",
    paragraphs: [
        "CreditoClick è un'agenzia finanziaria convenzionata, iscritta all'OAM (Organismo Agenti e Mediatori) ai sensi del D.Lgs. 141/2010. Operiamo in qualità di mediatori creditizi, collaborando con primari istituti finanziatori autorizzati da Banca d'Italia.",
        "La nostra attività è regolata dal Testo Unico Bancario (TUB), dal Codice del Consumo e dalle disposizioni di Banca d'Italia in materia di trasparenza delle operazioni bancarie e dei servizi di pagamento.",
    ],
    listTitle: "Cosa significa per te:",
    guarantees: [
        { icon: "fileCheck", text: "Ricevi sempre un documento di trasparenza con TAEG e costo totale del credito prima della firma" },
        { icon: "shieldCheck", text: "Non paghi nulla in anticipo per la consulenza o la valutazione del tuo profilo" },
        { icon: "scale", text: "Hai diritto al recesso entro 14 giorni dalla stipula del contratto (D.Lgs. 141/2010)" },
        { icon: "lock", text: "I tuoi dati sono trattati in conformità al GDPR (Reg. UE 2016/679)" },
    ],
    legalNotes: [
        "Iscrizione OAM: (inserire numero iscrizione ufficiale)",
        "Sede legale: (inserire indirizzo)",
        "P.IVA: (inserire)",
    ],
    legalCtas: ["Leggi di più su Chi Siamo", "Vai ai Contatti"],
} as const;

export const HOME_PRIMARY_CTA_CONTENT = {
    badge: "Contattaci Ora",
    title: "Pronto a trovare la soluzione giusta per te?",
    description: "Non aspettare che il problema si aggravi o che l'occasione passi. I nostri consulenti sono disponibili per una valutazione gratuita, riservata e senza impegno. Ti rispondiamo entro 24 ore lavorative.",
    primaryButton: "Richiedi consulenza gratuita",
    whatsappButton: "Scrivici su WhatsApp",
    linkButton: "Calcola la tua rata",
} as const;

export const HOME_CALC_CTA_CONTENT = {
    badge: "Strumento Gratuito",
    title: "Calcola subito la tua rata: zero impegno, massima trasparenza",
    description: "Vuoi sapere quanto potresti ottenere e quale sarebbe la rata mensile? Usa il nostro calcolatore gratuito: ti bastano il tuo stipendio netto e la durata desiderata. Nessun dato personale richiesto.",
    primaryButton: "Calcola la tua rata ora",
} as const;
