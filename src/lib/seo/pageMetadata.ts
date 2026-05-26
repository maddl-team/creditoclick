import type { Metadata } from "next";
import type { SiteOgImage } from "@/lib/seo/siteOgImages";

const DEFAULT_OG_WIDTH = 1200;
const DEFAULT_OG_HEIGHT = 630;

export type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  ogImage: SiteOgImage;
  openGraphType?: "website" | "article";
};

function toOpenGraphImage(ogImage: SiteOgImage) {
  return {
    url: ogImage.src,
    width: ogImage.width ?? DEFAULT_OG_WIDTH,
    height: ogImage.height ?? DEFAULT_OG_HEIGHT,
    alt: ogImage.alt,
  };
}

/** Metadati pagina con Open Graph / Twitter coerenti (inclusa immagine hero). */
export function buildPageMetadata({
  title,
  description,
  pathname,
  ogImage,
  openGraphType = "article",
}: BuildPageMetadataOptions): Metadata {
  const image = toOpenGraphImage(ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      type: openGraphType,
      locale: "it_IT",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.src],
    },
  };
}
