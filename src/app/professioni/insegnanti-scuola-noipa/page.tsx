import { Metadata } from "next";
import { InsegnantiScuolaNoipaPageContent } from "@/components/products/InsegnantiScuolaNoipaPageContent";
import { ISN_FAQ, ISN_META } from "@/content/insegnantiScuolaNoipa";

export const metadata: Metadata = {
  title: ISN_META.title,
  description: ISN_META.description,
  alternates: {
    canonical: "/professioni/insegnanti-scuola-noipa",
  },
  openGraph: {
    title: ISN_META.title,
    description: ISN_META.description,
    url: "/professioni/insegnanti-scuola-noipa",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: ISN_META.title,
    description: ISN_META.description,
  },
};

export default function InsegnantiScuolaNoipaPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/professioni/insegnanti-scuola-noipa`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Professioni", item: `${siteUrl}/professioni` },
      { "@type": "ListItem", position: 3, name: "Insegnanti Scuola NoiPA", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Cessione del Quinto per Insegnanti e Personale ATA",
    description: ISN_META.description,
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
    mainEntity: ISN_FAQ.items.map((item) => ({
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
      <InsegnantiScuolaNoipaPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
