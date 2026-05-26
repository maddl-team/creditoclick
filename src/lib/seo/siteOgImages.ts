/**
 * Immagini Open Graph allineate all'hero della prima sezione di ogni pagina.
 * Usare gli stessi export nei componenti `ProductSplitHeroImage` e in `buildPageMetadata`.
 */

export type SiteOgImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const DEFAULT_SITE_OG_IMAGE: SiteOgImage = {
  src: "/images/creditoclick-homepage_coppia.jpeg",
  alt: "CreditoClick: prestiti online veloci e sicuri",
  width: 1200,
  height: 630,
};

export const OG_PRODOTTI_CESSIONE_DEL_QUINTO: SiteOgImage = {
  src: "/images/creditoclick_cessione-del-quinto.jpg",
  alt: "Consulenza finanziaria per cessione del quinto",
};

export const OG_PRODOTTI_DELEGA: SiteOgImage = {
  src: "/images/creditoclick_delega-di-pagamento.jpg",
  alt: "Consulenza per delega di pagamento e doppio quinto",
};

export const OG_PRODOTTI_RINNOVO: SiteOgImage = {
  src: "/images/creditoclick_rinnovo-cessione-del-quinto.jpg",
  alt: "Consulenza sul rinnovo della cessione del quinto",
};

export const OG_PRODOTTI_HUB: SiteOgImage = {
  src: "/images/creditoclick_prodotti.jpeg",
  alt: "Prodotti CreditoClick",
};

export const OG_PROFESSIONI_HUB: SiteOgImage = {
  src: "/images/creditoclick_professioni.jpeg",
  alt: "Professioni CreditoClick",
};

export const OG_PROFESSIONI_GRANDI_AZIENDE: SiteOgImage = {
  src: "/images/creditoclick_grandiaziende.jpeg",
  alt: "Consulenza cessione del quinto per dipendenti di grandi aziende private",
};

export const OG_PROFESSIONI_PMI: SiteOgImage = {
  src: "/images/creditoclick_pmi.jpeg",
  alt: "Consulenza cessione del quinto per dipendenti di piccole imprese e PMI",
};

export const OG_PROFESSIONI_SANITA: SiteOgImage = {
  src: "/images/creditoclick_sanita.jpeg",
  alt: "Prestiti per infermieri, OSS e personale sanitario",
};

export const OG_PROFESSIONI_NOIPA: SiteOgImage = {
  src: "/images/creditoclick_scuola.jpeg",
  alt: "Prestiti per insegnanti e personale ATA con convenzione NoiPA",
};

export const OG_PROFESSIONI_FORZE_ARMATE: SiteOgImage = {
  src: "/images/creditoclick_forze-armate.jpeg",
  alt: "Cessione del quinto per forze armate e forze dell'ordine",
};

export const OG_PROFESSIONI_PENSIONATI: SiteOgImage = {
  src: "/images/creditoclick_pensionati.jpeg",
  alt: "Cessione del quinto della pensione per pensionati INPS",
};

export const OG_SOLUZIONI_HUB: SiteOgImage = {
  src: "/images/creditoclick_soluzioni.jpeg",
  alt: "Soluzioni CreditoClick",
};

export const OG_SOLUZIONI_CONSOLIDAMENTO: SiteOgImage = {
  src: "/images/creditoclick_consolidamento-debiti.jpeg",
  alt: "Consolidamento debiti con unica rata trattenuta in busta paga",
};

export const OG_SOLUZIONI_CRIF: SiteOgImage = {
  src: "/images/creditoclick_crif.jpeg",
  alt: "Prestito per cattivi pagatori e segnalati CRIF",
};

export const OG_SOLUZIONI_AUTO_MOTO: SiteOgImage = {
  src: "/images/creditoclick_prestito-auto-moto.jpeg",
  alt: "Prestito acquisto auto e moto con cessione del quinto",
};

export const OG_SOLUZIONI_ANTICIPO_MUTUO: SiteOgImage = {
  src: "/images/creditoclick_prestito-casa.jpeg",
  alt: "Prestito anticipo mutuo casa con cessione del quinto",
};

export const OG_SOLUZIONI_MATRIMONIO: SiteOgImage = {
  src: "/images/creditoclick_prestito-matrimonio.jpeg",
  alt: "Prestito matrimonio e cerimonie con cessione del quinto",
};

export const OG_SOLUZIONI_RISTRUTTURAZIONE: SiteOgImage = {
  src: "/images/creditoclick_ristrutturazione-casa.jpeg",
  alt: "Prestito ristrutturazione casa con cessione del quinto",
};

export const OG_SOLUZIONI_SPESE_MEDICHE: SiteOgImage = {
  src: "/images/creditoclick_spese-mediche.jpeg",
  alt: "Prestito per spese mediche e salute con cessione del quinto",
};

export const OG_STRUMENTI_CALCOLO_RATA: SiteOgImage = {
  src: "/images/creditoclick_calcolo-rata.jpeg",
  alt: "Calcolo rata cessione del quinto gratuito",
};

export const OG_CHI_SIAMO: SiteOgImage = {
  src: "/images/creditoclick_chi-siamo.jpeg",
  alt: "Team CreditoClick agenzia in attività finanziaria online",
};

export const OG_CONTATTI: SiteOgImage = {
  src: "/images/creditoclick_contatti.jpeg",
  alt: "Contatta CreditoClick su WhatsApp",
};
