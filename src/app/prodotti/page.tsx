import { ProdottiPageContent } from "@/components/products/ProdottiPageContent";
import { PRODOTTI_FAQ, PRODOTTI_META } from "@/content/prodotti";

import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { OG_PRODOTTI_HUB } from "@/lib/seo/siteOgImages";

export const metadata = buildPageMetadata({
  title: PRODOTTI_META.title,
  description: PRODOTTI_META.description,
  pathname: "/prodotti",
  ogImage: OG_PRODOTTI_HUB,
});

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
    email: "finnova@blu.it",
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
