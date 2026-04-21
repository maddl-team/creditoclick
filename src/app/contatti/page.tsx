import { Metadata } from "next";
import { ContattiPageContent } from "@/components/contact/ContattiPageContent";
import { CONTATTI_FAQ, CONTATTI_META } from "@/content/contatti";

export const metadata: Metadata = {
  title: CONTATTI_META.title,
  description: CONTATTI_META.description,
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: CONTATTI_META.title,
    description: CONTATTI_META.description,
    url: "/contatti",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: CONTATTI_META.title,
    description: CONTATTI_META.description,
  },
};

export default function ContattiPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/contatti`;
  const organizationId = `${siteUrl}#organization`;
  const pageId = `${pageUrl}#webpage`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "CreditoClick",
    url: siteUrl,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${pageUrl}#local-business`,
    name: "CreditoClick",
    url: pageUrl,
    description: CONTATTI_META.description,
    areaServed: "IT",
    inLanguage: "it-IT",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["it-IT"],
        areaServed: "IT",
      },
    ],
    provider: { "@id": organizationId },
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": pageId,
    url: pageUrl,
    name: CONTATTI_META.title,
    description: CONTATTI_META.description,
    inLanguage: "it-IT",
    isPartOf: { "@id": `${siteUrl}#website` },
    about: { "@id": organizationId },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Contatti", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "it-IT",
    mainEntityOfPage: { "@id": pageId },
    mainEntity: CONTATTI_FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <ContattiPageContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
