import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { getCategories, getPosts } from "@/lib/wp/client";

const FALLBACK_LAST_MODIFIED = new Date("2026-01-01T00:00:00.000Z");

function getRoutePagePath(route: string): string {
  if (route === "") {
    return join(process.cwd(), "src", "app", "page.tsx");
  }

  return join(process.cwd(), "src", "app", route.slice(1), "page.tsx");
}

function getRouteLastModified(route: string): Date {
  try {
    return statSync(getRoutePagePath(route)).mtime;
  } catch {
    return FALLBACK_LAST_MODIFIED;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";

  const routes = [
    "",
    "/chi-siamo",
    "/contatti",
    "/prodotti",
    "/professioni",
    "/professioni/forze-armate-ordine",
    "/professioni/dipendenti-privati-grandi-aziende",
    "/professioni/dipendenti-piccole-imprese-pmi",
    "/professioni/insegnanti-scuola-noipa",
    "/professioni/pensionati-inps",
    "/professioni/sanita-infermieri-medici",
    "/prodotti/cessione-del-quinto",
    "/prodotti/delega-di-pagamento",
    "/prodotti/rinnovo-cessione-quinto",
    "/soluzioni",
    "/soluzioni/cattivi-pagatori-segnalati-crif",
    "/soluzioni/consolidamento-debiti",
    "/soluzioni/prestito-anticipo-mutuo-casa",
    "/soluzioni/prestito-acquisto-auto-moto",
    "/soluzioni/prestito-matrimonio-cerimonie",
    "/soluzioni/prestito-spese-mediche-salute",
    "/soluzioni/prestito-ristrutturazione-casa",
    "/strumenti/calcolo-rata-cessione-quinto",
    "/blog",
  ];

  const staticItems: MetadataRoute.Sitemap = routes.map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route === "" ? "weekly" : "monthly";

    return {
      url: `${siteUrl}${route}`,
      lastModified: getRouteLastModified(route),
      changeFrequency,
      priority: route === "" ? 1 : 0.8,
    };
  });

  try {
    const [{ posts }, categories] = await Promise.all([getPosts(1, 100), getCategories()]);

    const postItems: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    const categoryItems: MetadataRoute.Sitemap = categories.map((category) => ({
      url: `${siteUrl}/blog/categoria/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

    return [...staticItems, ...postItems, ...categoryItems];
  } catch {
    return staticItems;
  }
}
