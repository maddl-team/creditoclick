import { MAKE_CONTACT_WEBHOOK_URL } from "@/config/make";

export type MakeContactWebhookPayload = {
  formType: string;
  subject: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  data: Record<string, unknown>;
  submittedAt: string;
  sourcePage: string;
  sourceUrl: string | null;
  site: string;
};

export function resolveSourcePage(
  request: Request,
  explicitSourcePage?: string,
): { sourcePage: string; sourceUrl: string | null } {
  const explicit = explicitSourcePage?.trim();
  if (explicit) {
    return { sourcePage: explicit, sourceUrl: null };
  }

  const referer = request.headers.get("referer");
  if (!referer) {
    return { sourcePage: "non disponibile", sourceUrl: null };
  }

  try {
    const url = new URL(referer);
    const sourcePage = `${url.pathname}${url.search}`;
    return { sourcePage: sourcePage || "/", sourceUrl: referer };
  } catch {
    return { sourcePage: referer, sourceUrl: referer };
  }
}

/**
 * Invio best-effort a Make: errori non propagati (l'email resta la fonte di verità per l'utente).
 */
export async function notifyMakeContactWebhook(body: MakeContactWebhookPayload): Promise<void> {
  const url = MAKE_CONTACT_WEBHOOK_URL;
  if (!url) return;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("[make-webhook] risposta non ok", response.status, detail.slice(0, 500));
    }
  } catch (error) {
    console.error("[make-webhook] invio fallito", error);
  } finally {
    clearTimeout(timeoutId);
  }
}
