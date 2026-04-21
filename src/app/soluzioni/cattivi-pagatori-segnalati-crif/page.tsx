import { Metadata } from "next";
import { CattiviPagatoriCrifPageContent } from "@/components/products/CattiviPagatoriCrifPageContent";
import { CPC_FAQ, CPC_META } from "@/content/cattiviPagatoriCrif";

export const metadata: Metadata = {
  title: CPC_META.title,
  description: CPC_META.description,
  alternates: {
    canonical: "/soluzioni/cattivi-pagatori-segnalati-crif",
  },
  openGraph: {
    title: CPC_META.title,
    description: CPC_META.description,
    url: "/soluzioni/cattivi-pagatori-segnalati-crif",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: CPC_META.title,
    description: CPC_META.description,
  },
};

export default function CattiviPagatoriCrifPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/soluzioni/cattivi-pagatori-segnalati-crif`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Soluzioni", item: `${siteUrl}/soluzioni` },
      { "@type": "ListItem", position: 3, name: "Cattivi pagatori e CRIF", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Prestito per cattivi pagatori e segnalati CRIF",
    description: CPC_META.description,
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
    mainEntity: CPC_FAQ.items.map((item) => ({
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
      <CattiviPagatoriCrifPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
