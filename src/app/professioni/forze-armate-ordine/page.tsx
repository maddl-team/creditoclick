import { Metadata } from "next";
import { ForzeArmateOrdinePageContent } from "@/components/products/ForzeArmateOrdinePageContent";
import { FAO_FAQ, FAO_META } from "@/content/forzeArmateOrdine";

export const metadata: Metadata = {
  title: FAO_META.title,
  description: FAO_META.description,
  alternates: {
    canonical: "/professioni/forze-armate-ordine",
  },
  openGraph: {
    title: FAO_META.title,
    description: FAO_META.description,
    url: "/professioni/forze-armate-ordine",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: FAO_META.title,
    description: FAO_META.description,
  },
};

export default function ForzeArmateOrdinePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/professioni/forze-armate-ordine`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Professioni", item: `${siteUrl}/professioni` },
      { "@type": "ListItem", position: 3, name: "Forze Armate e Ordine", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Cessione del Quinto per Forze Armate e Forze dell'Ordine",
    description: FAO_META.description,
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
    mainEntity: FAO_FAQ.items.map((item) => ({
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
      <ForzeArmateOrdinePageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
