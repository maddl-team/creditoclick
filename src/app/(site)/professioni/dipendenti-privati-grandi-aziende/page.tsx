import { DipendentiPrivatiGrandiAziendePageContent } from "@/components/products/DipendentiPrivatiGrandiAziendePageContent";
import { DPGA_FAQ, DPGA_META } from "@/content/dipendentiPrivatiGrandiAziende";

import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { OG_PROFESSIONI_GRANDI_AZIENDE } from "@/lib/seo/siteOgImages";

export const metadata = buildPageMetadata({
  title: DPGA_META.title,
  description: DPGA_META.description,
  pathname: "/professioni/dipendenti-privati-grandi-aziende",
  ogImage: OG_PROFESSIONI_GRANDI_AZIENDE,
});

export default function DipendentiPrivatiGrandiAziendePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/professioni/dipendenti-privati-grandi-aziende`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Professioni", item: `${siteUrl}/professioni` },
      { "@type": "ListItem", position: 3, name: "Dipendenti Privati Grandi Aziende", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Cessione del Quinto per Dipendenti di Grandi Aziende Private",
    description: DPGA_META.description,
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
    mainEntity: DPGA_FAQ.items.map((item) => ({
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
    email: "finnova@blu.it",
  };

  return (
    <>
      <DipendentiPrivatiGrandiAziendePageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
