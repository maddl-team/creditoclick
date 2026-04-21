import { Metadata } from "next";
import { PrestitoAnticipoMutuoCasaPageContent } from "@/components/products/PrestitoAnticipoMutuoCasaPageContent";
import { PAMC_FAQ, PAMC_META } from "@/content/prestitoAnticipoMutuoCasa";

export const metadata: Metadata = {
  title: PAMC_META.title,
  description: PAMC_META.description,
  alternates: {
    canonical: "/soluzioni/prestito-anticipo-mutuo-casa",
  },
  openGraph: {
    title: PAMC_META.title,
    description: PAMC_META.description,
    url: "/soluzioni/prestito-anticipo-mutuo-casa",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: PAMC_META.title,
    description: PAMC_META.description,
  },
};

export default function PrestitoAnticipoMutuoCasaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/soluzioni/prestito-anticipo-mutuo-casa`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Soluzioni", item: `${siteUrl}/soluzioni` },
      { "@type": "ListItem", position: 3, name: "Prestito Anticipo Mutuo Casa", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Prestito per l'Anticipo del Mutuo Casa",
    description: PAMC_META.description,
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
    mainEntity: PAMC_FAQ.items.map((item) => ({
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
      <PrestitoAnticipoMutuoCasaPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
