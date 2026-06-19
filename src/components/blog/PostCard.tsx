import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/wp/types";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm shadow-slate-200/40">
      {post.featuredImage ? (
        <Link href={`/blog/${post.slug}`} className="mb-5 block overflow-hidden rounded-xl border border-slate-200">
          {/* Keep img here to avoid strict remote-image domain coupling. */}
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </Link>
      ) : null}

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {post.categories.slice(0, 2).map((category) => (
          <Link
            key={category.id}
            href={`/blog/categoria/${category.slug}`}
            className="rounded-full bg-brand-indigo/10 px-3 py-1 text-xs font-semibold text-brand-indigo hover:bg-brand-indigo/15"
          >
            {category.name}
          </Link>
        ))}
        <span className="text-xs text-text-secondary">
          {new Date(post.date).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-text-primary">
        <Link href={`/blog/${post.slug}`} className="hover:text-brand-indigo">
          {post.title}
        </Link>
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-text-secondary">{post.excerptText}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo hover:text-brand-indigo/80"
      >
        Leggi articolo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
