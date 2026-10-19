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
 *
 * TODO — raggiungere 18+ recensioni: Trustpilot bloccato da anti-bot in questa sessione;
 * da Google Maps recuperate 4 recensioni positive con testo completo (+ Anna Casaluci senza testo, esclusa).
 */
export const LANDING_TESTIMONIALS: Testimonial[] = [
  // --- 3 esistenti sulla landing (testo invariato) ---
  {
    id: "tp-antonio-gp",
    author: "Antonio G. P.",
    text: "Persona chiara e schietta senza sorprese. Mi riaffiderei nuovamente senza problemi.",
    source: "Trustpilot",
    category: null, // TODO: DA COMPILARE (pubblico/privato)
    verified: true,
  },
  {
    id: "tp-gabriella-r",
    author: "Gabriella R.",
    text: "Ho trovato accoglienza e grande professionalità. Un ringraziamento di cuore.",
    source: "Trustpilot",
    category: null, // TODO: DA COMPILARE (pubblico/privato)
    verified: true,
  },
  {
    id: "g-andrea-dg",
    author: "Andrea D. G.",
    text: "Pratica svolta in tempi brevissimi e massima serietà. Consiglio sicuramente.",
    source: "Google",
    category: null, // TODO: DA COMPILARE (pubblico/privato)
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
];

export function formatTestimonialLabel(item: Testimonial): string {
  const employee =
    item.category === "Dipendente pubblico"
      ? "Dipendente pubblico"
      : item.category === "Dipendente privato"
        ? "Dipendente privato"
        : "Dipendente";

  const sourceLabel =
    item.source === "Trustpilot"
      ? item.verified
        ? "Recensione Trustpilot verificata"
        : "Recensione Trustpilot"
      : "Recensione Google";

  return `${employee} · ${sourceLabel}`;
}
