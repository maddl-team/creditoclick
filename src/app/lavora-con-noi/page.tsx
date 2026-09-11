import { LavoraConNoiPageContent } from "@/components/careers/LavoraConNoiPageContent";
import {
  buildJobPostingSchema,
  LAVORA_CON_NOI_META,
} from "@/content/lavoraConNoi";
import { buildPageMetadata } from "@/lib/seo/pageMetadata";
import { OG_LAVORA_CON_NOI } from "@/lib/seo/siteOgImages";

export const metadata = buildPageMetadata({
  title: LAVORA_CON_NOI_META.title,
  description: LAVORA_CON_NOI_META.description,
  pathname: "/lavora-con-noi",
  ogImage: OG_LAVORA_CON_NOI,
  openGraphType: "website",
});

export default function LavoraConNoiPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";
  const pageUrl = `${siteUrl}/lavora-con-noi`;

  const jobPostingSchema = buildJobPostingSchema(siteUrl, pageUrl);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Lavora con noi", item: pageUrl },
    ],
  };

  return (
    <>
      <LavoraConNoiPageContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
