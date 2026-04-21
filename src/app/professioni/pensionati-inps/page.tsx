import { Metadata } from "next";
import { PensionatiInpsPageContent } from "@/components/products/PensionatiInpsPageContent";
import { PIP_FAQ, PIP_META } from "@/content/pensionatiInps";

export const metadata: Metadata = {
  title: PIP_META.title,
  description: PIP_META.description,
  alternates: {
    canonical: "/professioni/pensionati-inps",
  },
  openGraph: {
    title: PIP_META.title,
    description: PIP_META.description,
    url: "/professioni/pensionati-inps",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: PIP_META.title,
    description: PIP_META.description,
  },
};

export default function PensionatiInpsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/professioni/pensionati-inps`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Professioni", item: `${siteUrl}/professioni` },
      { "@type": "ListItem", position: 3, name: "Pensionati INPS", item: pageUrl },
    ],
  };

  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "@id": `${pageUrl}#financial-product`,
    name: "Cessione del Quinto della Pensione per Pensionati INPS",
    description: PIP_META.description,
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
    mainEntity: PIP_FAQ.items.map((item) => ({
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
      <PensionatiInpsPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
