import { BLOG_CATEGORY_PATH, BLOG_PATH, FRONTEND_URL, WORDPRESS_URL } from "@/lib/wp/config";
import { BlogCategory, BlogHeading, BlogPost, WPCategory, WPPost } from "@/lib/wp/types";

const BLACKLIST_PATHS = [
  "/wp-content/",
  "/wp-admin/",
  "/wp-login.php",
  "/wp-json/",
  "/feed/",
  "/tag/",
  "/author/",
  "/search/",
];

export function stripHtml(html = "", limit = 200): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>?/gm, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&hellip;/g, "…");
}

export function normalizeHtmlContent(html: string): string {
  if (!html) return "";

  const escapedWpUrl = WORDPRESS_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const hrefRegex = new RegExp(`href="(${escapedWpUrl}([^"]*))"`, "g");

  const linksRewritten = html.replace(hrefRegex, (match, fullUrl) => {
    try {
      const parsed = new URL(fullUrl);
      const pathname = parsed.pathname;
      const search = parsed.search;
      const hash = parsed.hash;

      if (pathname === "/" || BLACKLIST_PATHS.some((path) => pathname.includes(path))) {
        return match;
      }

      if (pathname.startsWith("/category/")) {
        const categoryPath = pathname.replace("/category/", `${BLOG_CATEGORY_PATH}/`);
        return `href="${FRONTEND_URL}${categoryPath}${search}${hash}"`;
      }

      return `href="${FRONTEND_URL}${BLOG_PATH}${pathname}${search}${hash}"`;
    } catch {
      return match;
    }
  });

  return linksRewritten.replace(/<img([^>]*)>/g, (match, attrs) => {
    let nextAttrs = attrs;
    if (!attrs.includes("loading=")) nextAttrs += ' loading="lazy"';
    if (!attrs.includes("decoding=")) nextAttrs += ' decoding="async"';
    return `<img${nextAttrs}>`;
  });
}

function injectHeadingIds(html: string): { content: string; headings: BlogHeading[] } {
  const headings: BlogHeading[] = [];
  const headingRegex = /<(h[23])([^>]*)>(.*?)<\/h[23]>/gi;

  const content = html.replace(headingRegex, (match, tag, attrs, text) => {
    const cleanText = text.replace(/<[^>]*>?/gm, "").trim();
    const decodedText = decodeHtmlEntities(cleanText);
    const id = slugify(decodedText);
    const level = Number.parseInt(String(tag).slice(1), 10);

    headings.push({ id, text: decodedText, level });
    return `<${tag}${attrs} id="${id}">${text}</${tag}>`;
  });

  return { content, headings };
}

export function normalizePost(post: WPPost): BlogPost {
  const featured = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];
  const author = post._embedded?.author?.[0];

  const baseContent = normalizeHtmlContent(post.content.rendered);
  const { content, headings } = injectHeadingIds(baseContent);

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    content,
    excerptHtml: normalizeHtmlContent(post.excerpt.rendered),
    excerptText: stripHtml(post.excerpt.rendered, 180),
    date: post.date,
    featuredImage: featured
      ? {
          url: featured.source_url,
          alt: featured.alt_text || post.title.rendered,
          width: featured.media_details?.width ?? 1200,
          height: featured.media_details?.height ?? 630,
        }
      : undefined,
    categories: categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
    })),
    headings,
    author: author
      ? {
          name: author.name,
          description: author.description || "",
          avatarUrl: author.avatar_urls?.["96"] || author.avatar_urls?.["48"] || author.avatar_urls?.["24"],
        }
      : undefined,
    yoast: post.yoast_head_json ?? {},
  };
}

export function normalizeCategory(category: WPCategory): BlogCategory {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    count: category.count,
    yoast: category.yoast_head_json,
  };
}
