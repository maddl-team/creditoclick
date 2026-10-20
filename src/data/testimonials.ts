export type TestimonialSource = "Trustpilot" | "Google";
export type TestimonialCategory = "Dipendente pubblico" | "Dipendente privato" | null;

export type Testimonial = {
  id: string;
  author: string;
  text: string;
  source: TestimonialSource;
  category: TestimonialCategory;
  /** Solo Trustpilot con tag di verifica. */
  verified: boolean;
};

/**
 * Recensioni landing /preventivo.
 * Regola: testo esatto come pubblicato; niente riscritture.
 * Fonti: Trustpilot creditoclick.it + Google Maps scheda Creditis/CreditoClick.
 */
export const LANDING_TESTIMONIALS: Testimonial[] = [
  // --- 3 esistenti sulla landing (testo invariato) ---
  {
    id: "tp-antonio-gp",
    author: "Antonio G. P.",
    text: "Persona chiara e schietta senza sorprese. Mi riaffiderei nuovamente senza problemi.",
    source: "Trustpilot",
    category: null,
    verified: true,
  },
  {
    id: "tp-gabriella-r",
    author: "Gabriella R.",
    text: "Ho trovato accoglienza e grande professionalità. Un ringraziamento di cuore.",
    source: "Trustpilot",
    category: null,
    verified: true,
  },
  {
    id: "g-andrea-dg",
    author: "Andrea D. G.",
    text: "Pratica svolta in tempi brevissimi e massima serietà. Consiglio sicuramente.",
    source: "Google",
    category: null,
    verified: false,
  },
  // --- Trustpilot già presenti in codebase (testo completo pubblicato) ---
  {
    id: "tp-alpa89",
    author: "AlPa89",
    text: "Consiglio questa agenzia ad occhi chiusi, super professionali e gentili mi hanno seguito passo dopo passo in tutto e per tutto. Una menzione speciale al signor Luciano e alla sua collaboratrice, sempre pronte ad aiutarmi e consigliarmi. Un servizio eccellente che ti segue dall'inizio della pratica fino alla fine.",
    source: "Trustpilot",
    category: null,
    verified: true,
  },
  // --- Google Maps (testo esatto, Maglie / Creditis Credito Click) ---
  {
    id: "g-luca-g",
    author: "Luca G.",
    text: "Consulenza qualificata, chiarissimi nell'indicare il da farsi anche nel caso di cessione del quinto. Mi sono sentito seguito e tutelato, veramente bravi. È già il secondo finanziamento che faccio, ottimo lavoro! Consigliatissimo.",
    source: "Google",
    category: null,
    verified: false,
  },
  {
    id: "g-rosanna-m",
    author: "Rosanna M.",
    text: "Personale gentile, paziente e molto professionale e competente.",
    source: "Google",
    category: null,
    verified: false,
  },
  {
    id: "g-arturo-p",
    author: "Arturo P.",
    text: "Ottima esperienza con l'agenzia di Maglie (LE), nella persona della dott.ssa Mirea Pellegrino, professionista molto seria, preparata, scrupolosa ed anche molto tecnica.\nSicuramente il mio giudizio è 5 stelle (peccato che non si possa indicare la sesta stella, ci starebbe tutta).\nL'unico neo, l'agenzia troppo decentrata e poco pubblicizzata.",
    source: "Google",
    category: null,
    verified: false,
  },
  {
    id: "g-marco-t",
    author: "Marco T.",
    text: "Esperienza assolutamente eccellente con Click by Finnova Srl, una realtà che si distingue per professionalità, competenza, serietà e grande attenzione al cliente.\n\nHo avuto personalmente modo di apprezzare la qualità dei loro servizi e posso confermare che anche numerosi miei amici e conoscenti, che hanno avuto il piacere di interfacciarsi direttamente con Luciano De Nuzzo, sono rimasti estremamente soddisfatti, riscontrando sempre un livello di professionalità e disponibilità davvero eccezionale.\n\nLuciano rappresenta senza dubbio un valore aggiunto, grazie alla sua preparazione, alla trasparenza e soprattutto alla capacità di comprendere le esigenze di ogni cliente, individuando le soluzioni finanziarie più appropriate con serietà e competenza.\n\nÈ raro trovare professionisti capaci di coniugare così bene competenza, affidabilità e rapporto umano, instaurando un clima di fiducia che fa davvero la differenza.\n\nUna realtà di assoluta eccellenza nel settore finanziario e un professionista, Luciano De Nuzzo, che consiglio senza alcuna esitazione. Cinque stelle più che meritate!",
    source: "Google",
    category: null,
    verified: false,
  },
  // --- 10 nuove da Trustpilot (it.trustpilot.com/review/creditoclick.it) ---
  {
    id: "tp-valentina",
    author: "Valentina",
    text: "Esperienza decisamente positiva. Mi ha seguita la dott.ssa Mirea Pellegrino che oltre ad essere molto preparata e’ stata anche molto gentile.",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-luigi-s",
    author: "Luigi S.",
    text: "Tempi rapidissimi in confronto ad altre finanziarie e personale altamente competente e pronto ad aiutare il cliente nelle sue necessità.",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-matteo-g",
    author: "Matteo G.",
    text: "Esperienza veramente al Top! Con Luciano ci conosciamo da tempo, sono bastate poche parole concise e ha subito trovato la soluzione alla mia problematica. Tutto è stato risolto in pochi giorni e soprattutto senza lunga burocrazia. Grazie INFINITE 😁",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-antonio-cp",
    author: "Antonio C. P.",
    text: "Solo l' idea di dover fare un prestito, mi terrorizzava la vita. Solo l' idea di imbattermi in consulenti finanziari, catalogati tutti come robot, con il solo obiettivo di \"appioppiarti\" il contratto mi faceva desistere con le piu' banali scuse di anno in anno. Poi un giorno di pioggia incontro Luciano per caso... Con pazienza e professionalita' ha saputo guidarmi e consigliarmi. Ha saputo rispondere ad ogni mia domanda e dubbio, cosa mai successa prima. Con La sua sincerita', la sua calma, la sua etica, ha saputo trasmettermi la tranquillita' giusta per poter intraprendere un nuovo percorso della mia vita... Non mi ha trasmesso la sua voglia e frenesia del dover concludere per forza il contratto, ma il suo amore per quello che fa... Beh, Luciano e' riuscito a farmi fare il primo vero prestito della mia vita... LUCIANO, non un semplice consulente finanziario...ma l' uomo di fiducia che ognuno di noi dovrebbe avere. Grazie di cuore a te, ed a tutto il tuo staff per la gentilezza e premura. Quindi qui non bastano 5 stelle... occorre il firmamento..",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-cliente",
    author: "cliente",
    text: "Desidero esprimere la mia piena soddisfazione per il servizio ricevuto. La pratica di finanziamento è stata accettata in tempi rapidi e la consulente Mirea si è dimostrata professionale e disponibile a chiarire ogni dubbio. L’intero processo è stato semplice, trasparente e ben organizzato. Consiglio vivamente questo servizio a chi cerca affidabilità, competenza e serietà. Grazie per l’ottima esperienza!",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-ermanno",
    author: "Ermanno",
    text: "Se già avevo avuto modo di apprezzare la professionalità di CreditoClick by Finnova Srl - Maglie, dopo aver accompagnato e assistito persone a me care, oggi posso confermare tutto anche da cliente.\n\nQuando si affronta una richiesta di prestito personale, soprattutto in situazioni delicate, ciò che fa davvero la differenza sono i valori umani. E qui ho trovato tutto ciò che si possa desiderare: gentilezza, garbo, discrezione, professionalità e, soprattutto, la capacità di individuare la soluzione più adatta alle reali esigenze del cliente.\n\nHo potuto constatare personalmente una gestione impeccabile dell’intera pratica: tempi di istruttoria ed erogazione davvero rapidissimi e condizioni applicate al prestito che definire vantaggiose è quasi riduttivo.\n\nDietro una semplice richiesta di finanziamento non ci sono soltanto procedure, ma persone competenti che sanno accompagnare il cliente con attenzione e trasparenza, dall’inizio alla fine, ottenendo i risultati attesi.\n\nUn ringraziamento speciale va a tutto il team. Se però dovessi assegnare il gradino più alto del podio, lo dedico a Mirea (senza che Andrea me ne voglia, visto quanto ha lavorato dietro le quinte! 😉): la sua dolcezza, la disponibilità e la chiarezza con cui ha seguito ogni fase della pratica, dall’istruttoria fino all’erogazione, sono state davvero impagabili.\n\nPer riconoscenza, gratitudine e per la fiducia che mi hanno trasmesso, continuerò con entusiasmo a spendere il nome di CreditoClick by Finnova Srl - Maglie ai miei contatti e alle persone in cerca di risoluzioni finanziare.\n\nNon posso che consigliarli a chiunque abbia bisogno di professionisti seri, competenti e, prima di tutto, di persone che mettono il cliente al centro.\n\nGrazie di cuore a tutto il team! 🙏❤️⭐⭐⭐⭐⭐",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-chiara-b",
    author: "Chiara B.",
    text: "Ho chiamato Creditis per un consiglio, dato che avevo in essere un prestito con loro, mi hanno aiutato molto in particolare la signora Mirea a Genova, per cui ho potuto avere accesso ad un nuovo prestito per consolidamento debiti risparmiando così una bella somma. Consiglio vivamente, sono gentili e sanno fare il loro lavoro. Grazie.",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-antonio-dv",
    author: "Antonio D. V.",
    text: "Ottima scelta, la migliore sul mercato, dopo varie ricerche, per tassi e semplicità della procedura, erogazione veloce. Personale molto professionale, disponibile e attento alle esigenze del cliente\nConsigliatissimo",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-stefano-l",
    author: "Stefano L.",
    text: "Mi ritengo estremamente soddisfatto di come è stata gestita la pratica. Professionali e veloci. Prima esperienza assolutamente positiva! In particolare ho trovato in Luciano De Nuzzo il consulente che tutti vorremmo avere..molto disponibile, preparato e paziente. Eccezionale! Da 10 stelle..altro che 5!",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
  {
    id: "tp-samuele-q",
    author: "Samuele Q.",
    text: "Un agenzia fantastica, un ottimo team, un grazie speciale va al signor Luciano de nuzzo per essere stato sempre disponibile in ogni momento, consiglio vivamente",
    source: "Trustpilot",
    category: null,
    verified: false,
  },
];

export function formatTestimonialLabel(item: Testimonial): string {
  const categoryLabel =
    item.category === "Dipendente pubblico"
      ? "Pubblico"
      : item.category === "Dipendente privato"
        ? "Privato"
        : null;

  const sourceLabel =
    item.source === "Trustpilot"
      ? item.verified
        ? "Recensione Trustpilot verificata"
        : "Recensione Trustpilot"
      : "Recensione Google";

  return categoryLabel ? `${categoryLabel} · ${sourceLabel}` : sourceLabel;
}
