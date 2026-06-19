export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  categories: number[];
  yoast_head_json?: YoastHeadJson;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPCategory[][];
    author?: WPAuthor[];
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  yoast_head_json?: YoastHeadJson;
}

export interface WPMedia {
  id: number;
  alt_text: string;
  source_url: string;
  media_details?: {
    width?: number;
    height?: number;
  };
}

export interface WPAuthor {
  id: number;
  name: string;
  description: string;
  avatar_urls?: Record<string, string>;
}

export interface YoastHeadJson {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: {
    index?: string;
    follow?: string;
  };
  og_locale?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  og_image?: Array<{
    width?: number;
    height?: number;
    url: string;
    type?: string;
  }>;
  twitter_card?: string;
  schema?: unknown;
}

export type BlogHeading = {
  id: string;
  text: string;
  level: number;
};

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerptHtml: string;
  excerptText: string;
  date: string;
  featuredImage?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  categories: Array<{ id: number; name: string; slug: string }>;
  headings: BlogHeading[];
  author?: {
    name: string;
    description: string;
    avatarUrl?: string;
  };
  yoast: YoastHeadJson;
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  yoast?: YoastHeadJson;
}
