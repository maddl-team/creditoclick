declare global {
  interface Window {
    dataLayer?: unknown[];
    __creditoclickAdUserData?: boolean;
    __creditoclickSetAdConsent?: (granted: boolean) => void;
  }
}

/**
 * Verifica post-deploy (GTM / CMP): vedi todo cmp-11 in progetto.
 * - DevTools: prima riga dataLayer = default consent; dopo gtm.js; update Iubenda al click.
 * - GTM Preview: tag GA4/Ads con consenso negato vs accettato; eventi contact_lead e virtual_page_view.
 * - Lighthouse: confronto LCP/INP prima-dopo su home + pagina prodotto.
 */

export type ContactLeadPayload = {
  formSource: string;
  email?: string;
  phone?: string;
};

function getDataLayer(): unknown[] {
  if (typeof window === "undefined") return [];
  window.dataLayer = window.dataLayer ?? [];
  return window.dataLayer;
}

/** True solo dopo che Iubenda (callback) ha segnalato ad_user_data = granted. */
export function getLastAdUserDataConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.__creditoclickAdUserData === true;
}

/**
 * Evento per conversioni / enhanced conversions lato GTM.
 * PII in user_data solo se includeUserDataForAds (es. ad_user_data granted via CMP).
 */
export function pushContactLeadEvent(
  payload: ContactLeadPayload,
  options?: { includeUserDataForAds?: boolean },
): void {
  if (typeof window === "undefined") return;
  const dl = getDataLayer();

  const include = options?.includeUserDataForAds === true;
  const userData =
    include && (payload.email || payload.phone)
      ? {
          ...(payload.email ? { email: payload.email.trim().toLowerCase() } : {}),
          ...(payload.phone ? { phone_number: payload.phone.trim() } : {}),
        }
      : undefined;

  dl.push({
    event: "contact_lead",
    form_source: payload.formSource,
    ...(userData && Object.keys(userData).length > 0 ? { user_data: userData } : {}),
  });
}

export function pushVirtualPageView(pathname: string, search: string): void {
  if (typeof window === "undefined") return;
  const dl = getDataLayer();
  const qs = search && search !== "" ? `?${search}` : "";
  const pagePath = `${pathname}${qs}`;
  dl.push({
    event: "virtual_page_view",
    page_path: pagePath,
    page_url: typeof window !== "undefined" ? window.location.href : pagePath,
  });
}
