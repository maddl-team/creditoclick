import { Metadata } from "next";
import { ProdottiPageContent } from "@/components/products/ProdottiPageContent";
import { PRODOTTI_FAQ, PRODOTTI_META } from "@/content/prodotti";

export const metadata: Metadata = {
  title: PRODOTTI_META.title,
  description: PRODOTTI_META.description,
  alternates: {
    canonical: "/prodotti",
  },
  openGraph: {
    title: PRODOTTI_META.title,
    description: PRODOTTI_META.description,
    url: "/prodotti",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: PRODOTTI_META.title,
    description: PRODOTTI_META.description,
  },
};

export default function ProdottiPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/prodotti`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Prodotti", item: pageUrl },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#product-list`,
    name: "Prodotti CreditoClick",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Cessione del Quinto",
        url: `${siteUrl}/prodotti/cessione-del-quinto`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Delega di Pagamento",
        url: `${siteUrl}/prodotti/delega-di-pagamento`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Rinnovo della Cessione del Quinto",
        url: `${siteUrl}/prodotti/rinnovo-cessione-quinto`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: PRODOTTI_FAQ.items.map((item) => ({
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
      <ProdottiPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
