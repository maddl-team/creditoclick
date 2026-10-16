import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { Section } from "@/components/ui/Section";
import { getPostBySlug, getPosts } from "@/lib/wp/client";
import { normalizePost } from "@/lib/wp/normalizers";
import { getNormalizedSchema, getPostMetadata } from "@/lib/wp/seo";
import { BlogPost } from "@/lib/wp/types";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const rawPost = await getPostBySlug(slug);
    if (!rawPost) {
      return { title: "Articolo non trovato | Blog CreditoClick" };
    }
    return getPostMetadata(normalizePost(rawPost));
  } catch {
    return { title: "Blog CreditoClick" };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const rawPost = await getPostBySlug(slug);
  if (!rawPost) notFound();

  const post = normalizePost(rawPost);
  const normalizedSchema = getNormalizedSchema(post.yoast);

  let relatedPosts: BlogPost[] = [];
  if (post.categories.length > 0) {
    const categoryIds = post.categories.map((category) => category.id).join(",");
    try {
      const { posts } = await getPosts(1, 3, `categories=${categoryIds}&exclude=${post.id}`);
      relatedPosts = posts.map(normalizePost).slice(0, 2);
    } catch {
      relatedPosts = [];
    }
  }

  return (
    <>
      {normalizedSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: normalizedSchema }} /> : null}

      <Section className="bg-brand-indigo text-white" showLines linesVariant="dark">
        <div className="max-w-4xl space-y-6">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </nav>

          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/categoria/${category.slug}`}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white hover:bg-white/25"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <p className="text-sm text-white/80">
            {new Date(post.date).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </Section>

      <Section className="bg-white border-t border-slate-200/70">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {post.featuredImage ? (
              <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  className="max-h-[460px] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ) : null}

            <div className="mb-8 lg:hidden">
              <TableOfContents headings={post.headings} />
            </div>

            <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-10 border-t border-slate-200 pt-6">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo hover:text-brand-indigo/80">
                <ArrowLeft className="h-4 w-4" />
                Torna al blog
              </Link>
            </div>
          </article>

          <aside className="space-y-6 lg:col-span-4">
            <div className="hidden lg:block">
              <TableOfContents headings={post.headings} />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-surface-subtle p-6">
              <h3 className="mb-2 text-lg font-bold text-text-primary">Hai bisogno di una valutazione?</h3>
              <p className="mb-4 text-sm text-text-secondary">Parla con un consulente CreditoClick e ricevi un riscontro entro 24 ore lavorative.</p>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center rounded-full bg-brand-indigo px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-indigo/90"
              >
                Richiedi consulenza
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {relatedPosts.length > 0 ? (
        <Section className="bg-surface-subtle border-t border-slate-200/70">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">Potrebbe interessarti anche</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
