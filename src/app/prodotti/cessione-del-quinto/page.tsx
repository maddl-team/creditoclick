import { Metadata } from "next";
import { CessioneDelQuintoPageContent } from "@/components/products/CessioneDelQuintoPageContent";
import { CDQ_FAQ } from "@/content/cessioneDelQuinto";

export const metadata: Metadata = {
  title: "Cessione del Quinto: cos'è, come funziona e tassi aggiornati al 2026",
  description:
    "La formula di finanziamento più sicura per dipendenti e pensionati italiani. Rata automatica in busta paga, nessuna garanzia reale richiesta, approvazione anche in caso di segnalazioni CRIF.",
  alternates: {
    canonical: "/prodotti/cessione-del-quinto",
  },
  openGraph: {
    title: "Cessione del Quinto: cos'è, come funziona e tassi aggiornati al 2026",
    description:
      "La formula di finanziamento più sicura per dipendenti e pensionati italiani. Rata automatica in busta paga, nessuna garanzia reale richiesta, approvazione anche in caso di segnalazioni CRIF.",
    url: "/prodotti/cessione-del-quinto",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cessione del Quinto: cos'è, come funziona e tassi aggiornati al 2026",
    description:
      "La formula di finanziamento più sicura per dipendenti e pensionati italiani. Rata automatica in busta paga, nessuna garanzia reale richiesta, approvazione anche in caso di segnalazioni CRIF.",
  },
};

export default function CessioneDelQuintoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/prodotti/cessione-del-quinto`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Prodotti", item: `${siteUrl}/prodotti` },
      { "@type": "ListItem", position: 3, name: "Cessione del Quinto", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Cessione del Quinto",
    description:
      "Finanziamento a tasso fisso con trattenuta automatica in busta paga o cedolino pensione, dedicato a dipendenti e pensionati.",
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    provider: { "@id": organizationId },
    brand: { "@id": organizationId },
    category: "Prestito con cessione del quinto",
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: CDQ_FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "CreditoClick",
    url: siteUrl,
  };

  return (
    <>
      <CessioneDelQuintoPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
