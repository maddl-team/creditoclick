import { Metadata } from "next";
import { CalcoloRataCessioneQuintoPageContent } from "@/components/products/CalcoloRataCessioneQuintoPageContent";
import { CRCQ_FAQ, CRCQ_META } from "@/content/calcoloRataCessioneQuinto";

export const metadata: Metadata = {
  title: CRCQ_META.title,
  description: CRCQ_META.description,
  alternates: {
    canonical: "/strumenti/calcolo-rata-cessione-quinto",
  },
  openGraph: {
    title: CRCQ_META.title,
    description: CRCQ_META.description,
    url: "/strumenti/calcolo-rata-cessione-quinto",
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: CRCQ_META.title,
    description: CRCQ_META.description,
  },
};

export default function CalcoloRataCessioneQuintoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/strumenti/calcolo-rata-cessione-quinto`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Strumenti", item: `${siteUrl}/strumenti` },
      { "@type": "ListItem", position: 3, name: "Calcolo Rata Cessione Quinto", item: pageUrl },
    ],
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${pageUrl}#webapp`,
    name: "Calcolatore rata cessione del quinto",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    url: pageUrl,
    inLanguage: "it-IT",
    isAccessibleForFree: true,
    provider: { "@id": organizationId },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: CRCQ_FAQ.items.map((item) => ({
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
      <CalcoloRataCessioneQuintoPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
