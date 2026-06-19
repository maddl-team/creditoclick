import type { Metadata } from "next";
import { BLOG_CATEGORY_PATH, BLOG_PATH, FRONTEND_URL, WORDPRESS_URL } from "@/lib/wp/config";
import { BlogCategory, BlogPost, YoastHeadJson } from "@/lib/wp/types";
import { stripHtml } from "@/lib/wp/normalizers";

function toAbsolute(path: string): string {
  return `${FRONTEND_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizePostUrl(sourceUrl: string | undefined, slug: string): string {
  if (!sourceUrl) return toAbsolute(`${BLOG_PATH}/${slug}`);
  try {
    const parsed = new URL(sourceUrl);
    const cleanPath = parsed.pathname.replace(/\/$/, "");
    const normalizedPath = cleanPath.startsWith(BLOG_PATH) ? cleanPath : `${BLOG_PATH}${cleanPath}`;
    return toAbsolute(normalizedPath);
  } catch {
    return toAbsolute(`${BLOG_PATH}/${slug}`);
  }
}

function normalizeCategoryUrl(sourceUrl: string | undefined, slug: string): string {
  if (!sourceUrl) return toAbsolute(`${BLOG_CATEGORY_PATH}/${slug}`);
  try {
    const parsed = new URL(sourceUrl);
    const cleanPath = parsed.pathname.replace(/\/$/, "");
    if (cleanPath.startsWith("/category/")) {
      return toAbsolute(cleanPath.replace(/^\/category\//, `${BLOG_CATEGORY_PATH}/`));
    }
    if (cleanPath.startsWith(BLOG_CATEGORY_PATH)) {
      return toAbsolute(cleanPath);
    }
    return toAbsolute(`${BLOG_CATEGORY_PATH}/${slug}`);
  } catch {
    return toAbsolute(`${BLOG_CATEGORY_PATH}/${slug}`);
  }
}

const ALLOWED_SCHEMA_NODES = ["Article", "BlogPosting", "BreadcrumbList", "WebPage"];

function mapCmsToFrontendBlogUrls(input: string): string {
  const escapedWpUrl = WORDPRESS_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const wpRootRegex = new RegExp(`${escapedWpUrl}/?`, "g");

  return input
    .replace(/https?:\/\/[^"\\\s]+\/category\/([^/"\\\s]+)\/?/g, `${FRONTEND_URL}${BLOG_CATEGORY_PATH}/$1/`)
    .replace(wpRootRegex, `${FRONTEND_URL}${BLOG_PATH}/`)
    .replace(new RegExp(`${FRONTEND_URL}${BLOG_PATH}${BLOG_PATH}/`, "g"), `${FRONTEND_URL}${BLOG_PATH}/`)
    .replace(new RegExp(`${FRONTEND_URL}${BLOG_PATH}/wp-content/`, "g"), `${WORDPRESS_URL}/wp-content/`)
    .replace(new RegExp(`${FRONTEND_URL}${BLOG_PATH}/wp-json/`, "g"), `${WORDPRESS_URL}/wp-json/`)
    .replace(new RegExp(`${FRONTEND_URL}${BLOG_PATH}/wp-admin/`, "g"), `${WORDPRESS_URL}/wp-admin/`)
    .replace(new RegExp(`${FRONTEND_URL}${BLOG_PATH}/wp-login\\.php`, "g"), `${WORDPRESS_URL}/wp-login.php`)
    .replace(new RegExp(`${FRONTEND_URL}${BLOG_PATH}/#`, "g"), `${FRONTEND_URL}/#`);
}

export function getNormalizedSchema(yoast: YoastHeadJson | undefined): string | null {
  if (!yoast?.schema) return null;
  try {
    const schema = yoast.schema as Record<string, unknown>;
    if (Array.isArray(schema["@graph"])) {
      const filtered = {
        ...schema,
        "@graph": (schema["@graph"] as Array<Record<string, unknown>>).filter((node) =>
          ALLOWED_SCHEMA_NODES.includes(String(node["@type"])),
        ),
      };
      return mapCmsToFrontendBlogUrls(JSON.stringify(filtered));
    }
    return mapCmsToFrontendBlogUrls(JSON.stringify(schema));
  } catch {
    return null;
  }
}

export function getPostMetadata(post: BlogPost): Metadata {
  const yoast = post.yoast;
  const canonical = normalizePostUrl(yoast.canonical, post.slug);
  const ogUrl = normalizePostUrl(yoast.og_url || yoast.canonical, post.slug);

  const title = yoast.title || `${post.title} | CreditoClick`;
  const description = yoast.description || stripHtml(post.excerptText || post.content, 160);

  const images =
    yoast.og_image && yoast.og_image.length > 0
      ? yoast.og_image.map((image) => ({
          url: image.url,
          width: image.width,
          height: image.height,
        }))
      : post.featuredImage
        ? [
            {
              url: post.featuredImage.url,
              width: post.featuredImage.width,
              height: post.featuredImage.height,
              alt: post.featuredImage.alt,
            },
          ]
        : [];

  return {
    title,
    description,
    metadataBase: new URL(FRONTEND_URL),
    alternates: { canonical },
    robots: {
      index: yoast.robots?.index !== "noindex",
      follow: yoast.robots?.follow !== "nofollow",
    },
    openGraph: {
      title: yoast.og_title || title,
      description: yoast.og_description || description,
      url: ogUrl,
      siteName: "CreditoClick",
      locale: yoast.og_locale || "it_IT",
      type: (yoast.og_type as "article" | "website") || "article",
      images,
    },
    twitter: {
      card: (yoast.twitter_card as "summary" | "summary_large_image") || "summary_large_image",
      title: yoast.og_title || title,
      description: yoast.og_description || description,
      images: images.length > 0 ? [images[0].url] : undefined,
    },
  };
}

export function getCategoryMetadata(category: BlogCategory): Metadata {
  const yoast = category.yoast;
  const canonical = normalizeCategoryUrl(yoast?.canonical, category.slug);
  const ogUrl = normalizeCategoryUrl(yoast?.og_url || yoast?.canonical, category.slug);

  const title = yoast?.title || `${category.name} | Blog CreditoClick`;
  const description =
    yoast?.description ||
    (category.description ? stripHtml(category.description, 160) : `Approfondimenti su ${category.name}.`);

  return {
    title,
    description,
    metadataBase: new URL(FRONTEND_URL),
    alternates: { canonical },
    openGraph: {
      title: yoast?.og_title || title,
      description: yoast?.og_description || description,
      url: ogUrl,
      siteName: "CreditoClick",
      locale: "it_IT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: yoast?.og_title || title,
      description: yoast?.og_description || description,
    },
  };
}
