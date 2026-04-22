import { Metadata } from "next";
import { SoluzioniPageContent } from "@/components/products/SoluzioniPageContent";
import { SOLUZIONI_FAQ, SOLUZIONI_META } from "@/content/soluzioni";

export const metadata: Metadata = {
  title: SOLUZIONI_META.title,
  description: SOLUZIONI_META.description,
  alternates: {
    canonical: "/soluzioni",
  },
  openGraph: {
    title: SOLUZIONI_META.title,
    description: SOLUZIONI_META.description,
    url: "/soluzioni",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: SOLUZIONI_META.title,
    description: SOLUZIONI_META.description,
  },
};

export default function SoluzioniPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/soluzioni`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Soluzioni", item: pageUrl },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#solutions-list`,
    name: "Soluzioni CreditoClick",
    numberOfItems: 7,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Prestito per Cattivi Pagatori e Segnalati CRIF",
        url: `${siteUrl}/soluzioni/cattivi-pagatori-segnalati-crif`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Consolidamento Debiti",
        url: `${siteUrl}/soluzioni/consolidamento-debiti`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Prestito per l'Anticipo del Mutuo Casa",
        url: `${siteUrl}/soluzioni/prestito-anticipo-mutuo-casa`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Prestito per Acquisto Auto e Moto",
        url: `${siteUrl}/soluzioni/prestito-acquisto-auto-moto`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Prestito per Matrimonio e Cerimonie",
        url: `${siteUrl}/soluzioni/prestito-matrimonio-cerimonie`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Prestito per Ristrutturazione Casa",
        url: `${siteUrl}/soluzioni/prestito-ristrutturazione-casa`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Prestito per Spese Mediche e Salute",
        url: `${siteUrl}/soluzioni/prestito-spese-mediche-salute`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: SOLUZIONI_FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "CreditoClick",
    url: siteUrl,
  };

  return (
    <>
      <SoluzioniPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
