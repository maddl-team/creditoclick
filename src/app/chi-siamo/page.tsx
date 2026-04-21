import { Metadata } from "next";
import { ChiSiamoPageContent } from "@/components/about/ChiSiamoPageContent";
import { CHI_SIAMO_FAQ, CHI_SIAMO_META } from "@/content/chiSiamo";

export const metadata: Metadata = {
  title: CHI_SIAMO_META.title,
  description: CHI_SIAMO_META.description,
  alternates: {
    canonical: "/chi-siamo",
  },
  openGraph: {
    title: CHI_SIAMO_META.title,
    description: CHI_SIAMO_META.description,
    url: "/chi-siamo",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: CHI_SIAMO_META.title,
    description: CHI_SIAMO_META.description,
  },
};

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
    sameAs: [],
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
