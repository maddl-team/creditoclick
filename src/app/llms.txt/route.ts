import { getPosts } from "@/lib/wp/client";
import { buildLlmsTxt } from "@/lib/seo/llmsTxt";

export const revalidate = 86400;

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://creditoclick.it";

  let blogPosts: { slug: string; title: string }[] = [];

  try {
    const { posts } = await getPosts(1, 50);
    blogPosts = posts.map((post) => ({
      slug: post.slug,
      title: post.title.rendered.replace(/<[^>]+>/g, "").trim(),
    }));
  } catch {
    // Static llms.txt sections remain available if WordPress is unreachable.
  }

  const body = buildLlmsTxt(siteUrl, blogPosts);

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
