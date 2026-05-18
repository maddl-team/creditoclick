/** Webhook Make.com per lead da moduli contatto (sempre attivo; override con env). */
export const MAKE_CONTACT_WEBHOOK_URL =
  process.env.MAKE_CONTACT_WEBHOOK_URL?.trim() ||
  "https://hook.eu1.make.com/oxf8m90a2utvfhl58y2o9hgaurrq54k8";
