import Link from "next/link";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

function buildPageHref(baseUrl: string, page: number): string {
  if (page <= 1) return baseUrl;
  return `${baseUrl}?page=${page}`;
}

export function BlogPagination({ currentPage, totalPages, baseUrl }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Paginazione articoli blog" className="flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 ? (
        <Link
          href={buildPageHref(baseUrl, currentPage - 1)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-text-secondary hover:border-brand-indigo hover:text-brand-indigo"
        >
          Precedente
        </Link>
      ) : null}

      {pages.map((page) => (
        <Link
          key={page}
          href={buildPageHref(baseUrl, page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={
            page === currentPage
              ? "rounded-full bg-brand-indigo px-4 py-2 text-sm font-semibold text-white"
              : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-text-secondary hover:border-brand-indigo hover:text-brand-indigo"
          }
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link
          href={buildPageHref(baseUrl, currentPage + 1)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-text-secondary hover:border-brand-indigo hover:text-brand-indigo"
        >
          Successiva
        </Link>
      ) : null}
    </nav>
  );
}
