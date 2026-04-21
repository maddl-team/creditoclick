import { Metadata } from "next";
import { DipendentiPiccoleImpresePmiPageContent } from "@/components/products/DipendentiPiccoleImpresePmiPageContent";
import { DPPMI_FAQ, DPPMI_META } from "@/content/dipendentiPiccoleImpresePmi";

export const metadata: Metadata = {
  title: DPPMI_META.title,
  description: DPPMI_META.description,
  alternates: {
    canonical: "/professioni/dipendenti-piccole-imprese-pmi",
  },
  openGraph: {
    title: DPPMI_META.title,
    description: DPPMI_META.description,
    url: "/professioni/dipendenti-piccole-imprese-pmi",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: DPPMI_META.title,
    description: DPPMI_META.description,
  },
};

export default function DipendentiPiccoleImpresePmiPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/professioni/dipendenti-piccole-imprese-pmi`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Professioni", item: `${siteUrl}/professioni` },
      { "@type": "ListItem", position: 3, name: "Dipendenti Piccole Imprese e PMI", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Cessione del Quinto per Dipendenti di Piccole Imprese e PMI",
    description: DPPMI_META.description,
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
    mainEntity: DPPMI_FAQ.items.map((item) => ({
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
      <DipendentiPiccoleImpresePmiPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
