import { ChiSiamoPageContent } from "@/components/about/ChiSiamoPageContent";
import { CHI_SIAMO_FAQ, CHI_SIAMO_META } from "@/content/chiSiamo";
import { SCHEMA_ORARI_APERTURA_LD } from "@/content/contatti";

import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { OG_CHI_SIAMO } from "@/lib/seo/siteOgImages";

export const metadata = buildPageMetadata({
  title: CHI_SIAMO_META.title,
  description: CHI_SIAMO_META.description,
  pathname: "/chi-siamo",
  ogImage: OG_CHI_SIAMO,
});

export default function ChiSiamoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/chi-siamo`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Chi Siamo", item: pageUrl },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "CreditoClick",
    url: siteUrl,
    email: "finnova@blu.it",
    telephone: "+390836311982",
    sameAs: [],
    openingHoursSpecification: [...SCHEMA_ORARI_APERTURA_LD],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${pageUrl}#local-business`,
    name: "CreditoClick",
    url: pageUrl,
    description: CHI_SIAMO_META.description,
    areaServed: "IT",
    inLanguage: "it-IT",
    openingHoursSpecification: [...SCHEMA_ORARI_APERTURA_LD],
    provider: { "@id": organizationId },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: CHI_SIAMO_FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <ChiSiamoPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
