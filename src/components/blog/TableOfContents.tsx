import { BlogHeading } from "@/lib/wp/types";

type TableOfContentsProps = {
  headings: BlogHeading[];
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">Indice articolo</p>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm text-text-secondary hover:text-brand-indigo ${heading.level === 3 ? "pl-4" : ""}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
