import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";

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

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: getRouteLastModified(route),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
