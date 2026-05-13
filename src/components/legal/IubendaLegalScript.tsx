import Script from "next/script";

/** Carica una sola volta iubenda.js per i link con classe `iubenda-embed` (footer, moduli). */
export function IubendaLegalScript() {
  return <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" id="iubenda-legal-embed" />;
}
