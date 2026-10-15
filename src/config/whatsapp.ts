/** Numero WhatsApp operativo CreditoClick (formato internazionale senza +). */
export const WHATSAPP_PHONE_E164 = "393276625456";

/** Numero WhatsApp in formato leggibile per UI e testi. */
export const WHATSAPP_PHONE_DISPLAY = "327 662 5456";

const DEFAULT_WHATSAPP_MESSAGE =
  "Ciao, vorrei una consulenza gratuita sulla cessione del quinto.";

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(message)}`;
}

/** URL WhatsApp predefinito per CTA e pulsanti. */
export const WHATSAPP_URL = buildWhatsAppUrl();
