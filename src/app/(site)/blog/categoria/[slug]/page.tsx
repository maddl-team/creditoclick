import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { PostCard } from "@/components/blog/PostCard";
import { Section } from "@/components/ui/Section";
import { getCategoryBySlug, getPosts } from "@/lib/wp/client";
import { normalizeCategory, normalizePost } from "@/lib/wp/normalizers";
import { getCategoryMetadata, getNormalizedSchema } from "@/lib/wp/seo";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Pick<PageProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  try {
    const rawCategory = await getCategoryBySlug(slug);
    if (!rawCategory) {
      return { title: "Categoria non trovata | Blog CreditoClick" };
    }
    return getCategoryMetadata(normalizeCategory(rawCategory));
  } catch {
    return { title: "Blog CreditoClick" };
  }
}

export default async function BlogCategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const q = await searchParams;
  const page = typeof q.page === "string" ? Number.parseInt(q.page, 10) : 1;
  const currentPage = Number.isNaN(page) || page < 1 ? 1 : page;

  const rawCategory = await getCategoryBySlug(slug);
  if (!rawCategory) notFound();

  const category = normalizeCategory(rawCategory);
  const normalizedSchema = getNormalizedSchema(category.yoast);

  const { posts: rawPosts, totalPages } = await getPosts(currentPage, 10, `categories=${category.id}`);
  if ((totalPages > 0 && currentPage > totalPages) || (totalPages === 0 && currentPage > 1)) {
    notFound();
  }

  const posts = rawPosts.map(normalizePost);

  return (
    <>
      {normalizedSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: normalizedSchema }} /> : null}

      <Section className="bg-brand-indigo text-white" showLines linesVariant="dark">
        <div className="max-w-4xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Categoria blog</p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{category.name}</h1>
          <p className="text-base text-white/85">{category.description || `Articoli e approfondimenti su ${category.name}.`}</p>
        </div>
      </Section>

      <Section className="bg-white border-t border-slate-200/70">
        <div className="space-y-10">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-surface-subtle p-10 text-center text-text-secondary">
              Nessun articolo disponibile in questa categoria.
            </div>
          )}

          <BlogPagination currentPage={currentPage} totalPages={totalPages} baseUrl={`/blog/categoria/${slug}`} />
        </div>
      </Section>
    </>
  );
}
