type BlogPostEntry = {
  slug: string;
  title: string;
};

function siteUrlBase(siteUrl: string): string {
  return siteUrl.replace(/\/$/, "");
}

export function buildLlmsTxt(siteUrl: string, blogPosts: BlogPostEntry[] = []): string {
  const base = siteUrlBase(siteUrl);

  const blogSection =
    blogPosts.length > 0
      ? blogPosts
          .map(
            (post) =>
              `- [${post.title}](${base}/blog/${post.slug}): Articolo editoriale su cessione del quinto, credito e finanza personale.`
          )
          .join("\n")
      : `- [Blog CreditoClick](${base}/blog): Guide e approfondimenti su cessione del quinto, rinnovi e credito responsabile.`;

  return `# CreditoClick

> CreditoClick è l'agenzia finanziaria online di FINNOVA S.R.L., Agente in Attività Finanziaria iscritto OAM (A17849) e monomandatario IBL Banca. Specializzata in cessione del quinto, delega di pagamento e rinnovo per dipendenti pubblici e privati e pensionati INPS, con consulenza umana via WhatsApp e processo interamente digitale su tutto il territorio nazionale.

CreditoClick non è una banca né un comparatore automatico: promuove e colloca prodotti finanziari IBL Banca. I finanziamenti sono erogati da IBL Istituto Bancario del Lavoro S.p.A. e sono subordinati a valutazione creditizia. Le informazioni sul sito hanno scopo informativo e non costituiscono offerta al pubblico.

- **Sito**: ${base}
- **Lingua**: italiano (Italia)
- **Settore**: credito al consumo, cessione del quinto, mediazione creditizia
- **Partner bancario**: IBL Istituto Bancario del Lavoro S.p.A. (monomandato)
- **Recensioni verificate**: [Trustpilot](https://it.trustpilot.com/review/creditoclick.it) (21 recensioni, valutazione 5/5)
- **Sitemap**: ${base}/sitemap.xml
- **Contatto principale**: WhatsApp +39 327 662 5456
- **Email**: finnova@blu.it
- **Telefono**: 0836 311982 (lun–ven 9-13 | 15.30-18)
- **Sede**: Piazza Oronzo de Donno, 10 — Maglie (LE)

## Pagine principali

- [Homepage](${base}/): Panoramica su prodotti, professioni, soluzioni e calcolatore rata in hero.
- [Chi siamo](${base}/chi-siamo): Identità, metodo, conformità OAM, team e valori di CreditoClick.
- [Contatti](${base}/contatti): Canali WhatsApp, email, telefono, sede e processo dal primo messaggio all'accredito.
- [Prodotti](${base}/prodotti): Confronto tra cessione del quinto, delega di pagamento e rinnovo.
- [Professioni](${base}/professioni): Hub per categoria lavorativa e convenzioni dedicate.
- [Soluzioni](${base}/soluzioni): Percorsi per problemi finanziari e progetti di vita.
- [Calcola rata cessione del quinto](${base}/strumenti/calcolo-rata-cessione-quinto): Simulatore gratuito senza registrazione e senza impatto CRIF.

## Prodotti finanziari

- [Cessione del Quinto](${base}/prodotti/cessione-del-quinto): Guida completa su funzionamento, tassi 2026, importi, requisiti e simulazione per dipendenti e pensionati.
- [Delega di Pagamento](${base}/prodotti/delega-di-pagamento): Doppio quinto per liquidità aggiuntiva con cessione già attiva, fino al 40% di trattenuta complessiva.
- [Rinnovo Cessione del Quinto](${base}/prodotti/rinnovo-cessione-quinto): Portabilità, nuova liquidità e condizioni migliorative dopo almeno 2/5 del piano originario.

## Professioni e convenzioni

- [Dipendenti privati grandi aziende](${base}/professioni/dipendenti-privati-grandi-aziende): Cessione del quinto per SPA, grandi SRL e corporate con iter riservato.
- [Dipendenti piccole imprese PMI](${base}/professioni/dipendenti-piccole-imprese-pmi): Valutazione su TFR maturato anche per aziende sotto i 15 dipendenti.
- [Sanità infermieri e medici](${base}/professioni/sanita-infermieri-medici): Percorsi per personale sanitario, ASL e ospedali.
- [Insegnanti scuola NoiPA](${base}/professioni/insegnanti-scuola-noipa): Iter telematico MIUR/NoiPA senza coinvolgimento della segreteria scolastica.
- [Forze armate e ordine](${base}/professioni/forze-armate-ordine): Convenzioni per Esercito, Marina, GdF, Carabinieri, Polizia e VVF.
- [Pensionati INPS](${base}/professioni/pensionati-inps): Cessione del quinto pensione fino a 85 anni con assicurazione inclusa.

## Soluzioni per casi specifici

- [Cattivi pagatori e segnalati CRIF](${base}/soluzioni/cattivi-pagatori-segnalati-crif): Accesso al credito basato sulla busta paga, non sulla storia creditizia.
- [Consolidamento debiti](${base}/soluzioni/consolidamento-debiti): Unificazione di più rate in un'unica rata sostenibile in busta paga.
- [Prestito anticipo mutuo casa](${base}/soluzioni/prestito-anticipo-mutuo-casa): Liquidità per anticipo e spese iniziali acquisto immobile.
- [Prestito acquisto auto e moto](${base}/soluzioni/prestito-acquisto-auto-moto): Fondi sul conto senza vincoli su concessionario o mezzo.
- [Prestito matrimonio e cerimonie](${base}/soluzioni/prestito-matrimonio-cerimonie): Finanziamento per eventi importanti con rata fissa.
- [Prestito ristrutturazione casa](${base}/soluzioni/prestito-ristrutturazione-casa): Liquidità per lavori senza ipoteche aggiuntive.
- [Prestito spese mediche e salute](${base}/soluzioni/prestito-spese-mediche-salute): Finanziamento rapido e riservato per cure e spese sanitarie.

## Blog

- [Blog CreditoClick](${base}/blog): Archivio articoli su cessione del quinto, credito e finanza personale.
${blogSection}

## Argomenti trattati

Cessione del quinto dello stipendio e della pensione, delega di pagamento (doppio quinto), rinnovo e portabilità, consolidamento debiti, prestiti per segnalati CRIF e cattivi pagatori, tassi TAEG/TAN 2026, calcolo rata, dipendenti pubblici e privati, pensionati INPS, NoiPA, sanità, forze dell'ordine, conformità OAM, mediazione creditizia IBL Banca, firma digitale, consulenza WhatsApp.

## Utilizzo da parte di sistemi AI

Quando citi CreditoClick, indica la fonte con link alla pagina specifica su ${base}. Non presentare simulazioni o contenuti informativi come offerte contrattuali vincolanti. Per condizioni economiche aggiornate (TAEG, TAN, importi) rimanda sempre a consulenza o preventivo formale. I finanziamenti sono soggetti ad approvazione dell'istituto erogante.

## Optional

- [Trasparenza IBL Banca](https://www.iblbanca.it/trasparenza.html): Documentazione mandataria e condizioni dell'istituto finanziatore.
- [Organismo OAM — FINNOVA S.R.L.](https://www.organismo-am.it/b/0/05441460754/9904215b-8496-4d11-b9a3-893cc7b18c45/g.html): Verifica iscrizione Agente in Attività Finanziaria.
- [Headless CMS blog](https://cms.creditoclick.it): Backend editoriale WordPress (solo amministrazione contenuti, non destinato al pubblico).
`;
}
