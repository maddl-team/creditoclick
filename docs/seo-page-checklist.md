# SEO Page Checklist (Template)

## Metadata
- [ ] `title` unico (50-60 caratteri circa)
- [ ] `description` unica (140-160 caratteri circa)
- [ ] `canonical` corretto
- [ ] `openGraph` valorizzato (`title`, `description`, `url`, `type`)
- [ ] `twitter` valorizzato (`card`, `title`, `description`)

## Structured Data
- [ ] `BreadcrumbList` presente e coerente con la URL
- [ ] `FinancialProduct` presente con `@id`, `provider`, `mainEntityOfPage`
- [ ] `FAQPage` presente solo se la sezione FAQ è realmente visibile in pagina
- [ ] JSON-LD valido (nessun warning bloccante in Rich Results Test)

## On-page SEO
- [ ] Un solo `h1` per pagina
- [ ] Gerarchia heading coerente (`h2`/`h3`)
- [ ] CTA con link reali (no pulsanti senza destinazione)
- [ ] Link interni verso pagine esistenti (no 404)

## Media & Performance
- [ ] Immagini above-the-fold con `priority` solo dove necessario
- [ ] `alt` descrittivi e pertinenti
- [ ] `sizes` corretti per immagini responsive
- [ ] Nessun layout shift evidente (CLS)

## Technical SEO
- [ ] URL inclusa in `sitemap.xml`
- [ ] Pagina non bloccata da `robots.txt`
- [ ] Build produzione OK (`npm run build`)
- [ ] Lint/TS OK
