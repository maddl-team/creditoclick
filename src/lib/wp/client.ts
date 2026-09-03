import { WORDPRESS_API_URL } from "@/lib/wp/config";
import { WPCategory, WPPost } from "@/lib/wp/types";

type FetchOptions = RequestInit & {
  next?: { revalidate?: number; tags?: string[] };
};

function buildWpUrl(endpoint: string): string {
  const base = WORDPRESS_API_URL.endsWith("/")
    ? WORDPRESS_API_URL.slice(0, -1)
    : WORDPRESS_API_URL;
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
}

/**
 * WordPress REST deve restituire JSON puro. Dopo l'attacco al CMS alcune
 * risposte arrivano ancora con markup extra in coda, che fa fallire JSON.parse().
 */
function extractFirstJsonValue(text: string): string | null {
  const start = text.search(/[\[{]/);
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === '"') inString = false;
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "{" || char === "[") {
      depth += 1;
      continue;
    }

    if (char === "}" || char === "]") {
      depth -= 1;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }

  return null;
}

function parseWpJson<T>(body: string, endpoint: string): T {
  const trimmed = body.trim();
  try {
    return JSON.parse(trimmed) as T;
  } catch (error) {
    const json = extractFirstJsonValue(trimmed);
    if (!json) throw error;

    try {
      const parsed = JSON.parse(json) as T;
      console.error(`[wp] JSON valido seguito da contenuto extra su ${endpoint}. Il CMS va ripulito.`);
      return parsed;
    } catch {
      throw error;
    }
  }
}

async function readWpResponse<T>(response: Response, endpoint: string): Promise<T> {
  const body = await response.text();
  return parseWpJson<T>(body, endpoint);
}

export async function wpFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const response = await fetch(buildWpUrl(endpoint), {
    ...options,
    next: {
      revalidate: 3600,
      ...(options.next ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error ${response.status} on ${endpoint}`);
  }

  return readWpResponse<T>(response, endpoint);
}

export async function wpFetchWithMeta<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<{ data: T; totalPages: number; totalItems: number }> {
  const response = await fetch(buildWpUrl(endpoint), {
    ...options,
    next: {
      revalidate: 3600,
      ...(options.next ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error ${response.status} on ${endpoint}`);
  }

  const totalItems = Number.parseInt(response.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = Number.parseInt(response.headers.get("X-WP-TotalPages") ?? "0", 10);

  return {
    data: await readWpResponse<T>(response, endpoint),
    totalPages,
    totalItems,
  };
}

export async function getPosts(page = 1, perPage = 10, extraParams = "") {
  const extra = extraParams ? `&${extraParams}` : "";
  const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}${extra}`;
  const { data, totalPages, totalItems } = await wpFetchWithMeta<WPPost[]>(endpoint);
  return { posts: data, totalPages, totalPosts: totalItems };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
  return posts[0] ?? null;
}

export async function getCategories(): Promise<WPCategory[]> {
  return wpFetch<WPCategory[]>("/wp/v2/categories?per_page=100");
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const categories = await wpFetch<WPCategory[]>(`/wp/v2/categories?slug=${encodeURIComponent(slug)}`);
  return categories[0] ?? null;
}
