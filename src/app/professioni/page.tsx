import { ProfessioniPageContent } from "@/components/products/ProfessioniPageContent";
import { PROFESSIONI_FAQ, PROFESSIONI_META } from "@/content/professioni";

import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { OG_PROFESSIONI_HUB } from "@/lib/seo/siteOgImages";

export const metadata = buildPageMetadata({
  title: PROFESSIONI_META.title,
  description: PROFESSIONI_META.description,
  pathname: "/professioni",
  ogImage: OG_PROFESSIONI_HUB,
});

export default function ProfessioniPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/professioni`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Professioni", item: pageUrl },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#categories-list`,
    name: "Categorie Professionali CreditoClick",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dipendenti Privati Grandi Aziende",
        url: `${siteUrl}/professioni/dipendenti-privati-grandi-aziende`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dipendenti Piccole Imprese PMI",
        url: `${siteUrl}/professioni/dipendenti-piccole-imprese-pmi`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sanità Infermieri Medici",
        url: `${siteUrl}/professioni/sanita-infermieri-medici`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Insegnanti Scuola NoiPA",
        url: `${siteUrl}/professioni/insegnanti-scuola-noipa`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Forze Armate e Forze dell'Ordine",
        url: `${siteUrl}/professioni/forze-armate-ordine`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Pensionati INPS",
        url: `${siteUrl}/professioni/pensionati-inps`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: PROFESSIONI_FAQ.items.map((item) => ({
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
    email: "finnova@blu.it",
  };

  return (
    <>
      <ProfessioniPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
