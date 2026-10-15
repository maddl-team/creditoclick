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
  return decodeHtmlEntities(
    html
      .replace(/<[^>]*>?/gm, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  ).slice(0, limit);
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

/**
 * Decodes common WP HTML entities (also without trailing `;`, and double-encoded).
 * Safe for plain text and for HTML bodies that only use typographic entities.
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return "";

  let decoded = text;
  for (let pass = 0; pass < 3; pass += 1) {
    const next = decoded
      .replace(/&#8217;?/g, "'")
      .replace(/&#8216;?/g, "'")
      .replace(/&#8211;?/g, "–")
      .replace(/&#8212;?/g, "—")
      .replace(/&#8220;?/g, "“")
      .replace(/&#8221;?/g, "”")
      .replace(/&#038;?/g, "&")
      .replace(/&#160;?/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&rsquo;/gi, "'")
      .replace(/&lsquo;/gi, "'")
      .replace(/&rdquo;/gi, "”")
      .replace(/&ldquo;/gi, "“")
      .replace(/&mdash;/gi, "—")
      .replace(/&ndash;/gi, "–")
      .replace(/&hellip;/gi, "…")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&apos;/gi, "'")
      .replace(/&#x27;?/gi, "'")
      .replace(/&#39;?/g, "'")
      .replace(/&#x([0-9a-f]+);?/gi, (_, hex: string) => {
        const code = Number.parseInt(hex, 16);
        return Number.isFinite(code) ? String.fromCodePoint(code) : _;
      })
      .replace(/&#(\d+);?/g, (_, dec: string) => {
        const code = Number.parseInt(dec, 10);
        return Number.isFinite(code) ? String.fromCodePoint(code) : _;
      });

    if (next === decoded) break;
    decoded = next;
  }

  return decoded;
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

  const withLazyImages = linksRewritten.replace(/<img([^>]*)>/g, (match, attrs) => {
    let nextAttrs = attrs;
    if (!attrs.includes("loading=")) nextAttrs += ' loading="lazy"';
    if (!attrs.includes("decoding=")) nextAttrs += ' decoding="async"';
    return `<img${nextAttrs}>`;
  });

  // Decode typographic entities in HTML so titles/body never show &#8217; literally.
  return decodeHtmlEntities(withLazyImages);
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

  const title = decodeHtmlEntities(post.title.rendered);

  return {
    id: post.id,
    slug: post.slug,
    title,
    content,
    excerptHtml: normalizeHtmlContent(post.excerpt.rendered),
    excerptText: stripHtml(post.excerpt.rendered, 180),
    date: post.date,
    featuredImage: featured
      ? {
          url: featured.source_url,
          alt: decodeHtmlEntities(featured.alt_text || title),
          width: featured.media_details?.width ?? 1200,
          height: featured.media_details?.height ?? 630,
        }
      : undefined,
    categories: categories.map((category) => ({
      id: category.id,
      name: decodeHtmlEntities(category.name),
      slug: category.slug,
    })),
    headings,
    author: author
      ? {
          name: decodeHtmlEntities(author.name),
          description: decodeHtmlEntities(author.description || ""),
          avatarUrl: author.avatar_urls?.["96"] || author.avatar_urls?.["48"] || author.avatar_urls?.["24"],
        }
      : undefined,
    yoast: post.yoast_head_json ?? {},
  };
}

export function normalizeCategory(category: WPCategory): BlogCategory {
  return {
    id: category.id,
    name: decodeHtmlEntities(category.name),
    slug: category.slug,
    description: decodeHtmlEntities(category.description),
    count: category.count,
    yoast: category.yoast_head_json,
  };
}
