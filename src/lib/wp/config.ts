export const WORDPRESS_API_URL =
  process.env.WORDPRESS_API_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://cms.creditoclick.it/wp-json";

export const WORDPRESS_URL = WORDPRESS_API_URL
  .replace(/\/wp-json\/?$/, "")
  .replace(/\/$/, "");

export const FRONTEND_URL =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.creditoclick.it";

export const BLOG_PATH = "/blog";
export const BLOG_CATEGORY_PATH = `${BLOG_PATH}/categoria`;
