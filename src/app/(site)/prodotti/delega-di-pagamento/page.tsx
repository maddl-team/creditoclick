import { DelegaDiPagamentoPageContent } from "@/components/products/DelegaDiPagamentoPageContent";
import { DDP_FAQ, DDP_META } from "@/content/delegaDiPagamento";

import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { OG_PRODOTTI_DELEGA } from "@/lib/seo/siteOgImages";

export const metadata = buildPageMetadata({
  title: DDP_META.title,
  description: DDP_META.description,
  pathname: "/prodotti/delega-di-pagamento",
  ogImage: OG_PRODOTTI_DELEGA,
});

export default function DelegaDiPagamentoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/prodotti/delega-di-pagamento`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Prodotti", item: `${siteUrl}/prodotti` },
      { "@type": "ListItem", position: 3, name: "Delega di Pagamento", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Delega di Pagamento",
    description: DDP_META.description,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    provider: { "@id": organizationId },
    brand: { "@id": organizationId },
    category: "Prestito con trattenuta in busta paga",
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: DDP_FAQ.items.map((item) => ({
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
      <DelegaDiPagamentoPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
