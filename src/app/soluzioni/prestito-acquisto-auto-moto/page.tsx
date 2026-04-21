import { Metadata } from "next";
import { PrestitoAcquistoAutoMotoPageContent } from "@/components/products/PrestitoAcquistoAutoMotoPageContent";
import { PAAM_FAQ, PAAM_META } from "@/content/prestitoAcquistoAutoMoto";

export const metadata: Metadata = {
  title: PAAM_META.title,
  description: PAAM_META.description,
  alternates: {
    canonical: "/soluzioni/prestito-acquisto-auto-moto",
  },
  openGraph: {
    title: PAAM_META.title,
    description: PAAM_META.description,
    url: "/soluzioni/prestito-acquisto-auto-moto",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: PAAM_META.title,
    description: PAAM_META.description,
  },
};

export default function PrestitoAcquistoAutoMotoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/soluzioni/prestito-acquisto-auto-moto`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Soluzioni", item: `${siteUrl}/soluzioni` },
      { "@type": "ListItem", position: 3, name: "Prestito Acquisto Auto e Moto", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Prestito per Acquisto Auto e Moto",
    description: PAAM_META.description,
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
    mainEntity: PAAM_FAQ.items.map((item) => ({
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
      <PrestitoAcquistoAutoMotoPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
