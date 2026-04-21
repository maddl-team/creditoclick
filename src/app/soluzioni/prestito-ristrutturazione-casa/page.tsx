import { Metadata } from "next";
import { PrestitoRistrutturazioneCasaPageContent } from "@/components/products/PrestitoRistrutturazioneCasaPageContent";
import { PRC_FAQ, PRC_META } from "@/content/prestitoRistrutturazioneCasa";

export const metadata: Metadata = {
  title: PRC_META.title,
  description: PRC_META.description,
  alternates: {
    canonical: "/soluzioni/prestito-ristrutturazione-casa",
  },
  openGraph: {
    title: PRC_META.title,
    description: PRC_META.description,
    url: "/soluzioni/prestito-ristrutturazione-casa",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: PRC_META.title,
    description: PRC_META.description,
  },
};

export default function PrestitoRistrutturazioneCasaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/soluzioni/prestito-ristrutturazione-casa`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Soluzioni", item: `${siteUrl}/soluzioni` },
      { "@type": "ListItem", position: 3, name: "Prestito Ristrutturazione Casa", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Prestito per Ristrutturazione Casa",
    description: PRC_META.description,
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
    mainEntity: PRC_FAQ.items.map((item) => ({
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
      <PrestitoRistrutturazioneCasaPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
