import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { PostCard } from "@/components/blog/PostCard";
import { Section } from "@/components/ui/Section";
import { getPosts } from "@/lib/wp/client";
import { normalizePost } from "@/lib/wp/normalizers";
import { BlogPost } from "@/lib/wp/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog CreditoClick | Guide su Cessione del Quinto e Prestiti",
  description:
    "Approfondimenti pratici su cessione del quinto, rinnovo, consolidamento debiti e credito responsabile: articoli aggiornati dal team CreditoClick.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog CreditoClick | Guide su Cessione del Quinto e Prestiti",
    description:
      "Approfondimenti pratici su cessione del quinto, rinnovo, consolidamento debiti e credito responsabile: articoli aggiornati dal team CreditoClick.",
    type: "website",
    url: "/blog",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog CreditoClick | Guide su Cessione del Quinto e Prestiti",
    description:
      "Approfondimenti pratici su cessione del quinto, rinnovo, consolidamento debiti e credito responsabile: articoli aggiornati dal team CreditoClick.",
  },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = typeof params.page === "string" ? Number.parseInt(params.page, 10) : 1;
  const currentPage = Number.isNaN(page) || page < 1 ? 1 : page;

  let posts: BlogPost[] = [];
  let totalPages = 0;
  try {
    const result = await getPosts(currentPage, 10);
    totalPages = result.totalPages;
    if ((totalPages > 0 && currentPage > totalPages) || (totalPages === 0 && currentPage > 1)) {
      notFound();
    }
    posts = result.posts.map(normalizePost);
  } catch {
    posts = [];
    totalPages = 0;
  }

  return (
    <>
      <Section className="bg-brand-indigo text-white" showLines linesVariant="dark">
        <div className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Blog CreditoClick</p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">Guide pratiche su cessione del quinto e prestiti</h1>
          <p className="text-base leading-relaxed text-white/85 md:text-lg">
            Contenuti pensati per aiutarti a capire con chiarezza costi, requisiti, tempistiche e opportunita.
          </p>
        </div>
      </Section>

      <Section className="bg-white border-t border-slate-200/70">
        {posts.length > 0 ? (
          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <BlogPagination currentPage={currentPage} totalPages={totalPages} baseUrl="/blog" />
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-surface-subtle p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-text-primary">Articoli in arrivo</h2>
            <p className="mx-auto mb-6 max-w-xl text-text-secondary">
              Stiamo preparando i primi contenuti del blog: torna presto oppure contattaci direttamente per una consulenza.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 rounded-full bg-brand-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-brand-indigo/90"
            >
              Contatta un consulente
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Section>
    </>
  );
}
