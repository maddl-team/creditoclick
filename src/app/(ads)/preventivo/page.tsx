import type { Metadata } from "next";
import { LandingPreventivoPageContent } from "@/components/landing/LandingPreventivoPageContent";
import { LANDING_PREVENTIVO_META } from "@/content/landingPreventivo";
import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { DEFAULT_SITE_OG_IMAGE } from "@/lib/seo/siteOgImages";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: LANDING_PREVENTIVO_META.title,
    description: LANDING_PREVENTIVO_META.description,
    pathname: "/preventivo",
    ogImage: DEFAULT_SITE_OG_IMAGE,
    openGraphType: "website",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreventivoLandingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/preventivo`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: LANDING_PREVENTIVO_META.title,
    description: LANDING_PREVENTIVO_META.description,
    inLanguage: "it-IT",
    isPartOf: { "@id": `${siteUrl}#website` },
  };

  return (
    <>
      <LandingPreventivoPageContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
