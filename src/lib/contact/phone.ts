/** Cifre minime richieste (qualsiasi prefisso internazionale). */
export const PHONE_MIN_DIGITS = 6;

/** Lunghezza massima caratteri nel campo (inclusi spazi, +, trattini). */
export const PHONE_MAX_LENGTH = 30;

export const PHONE_VALIDATION_MESSAGE =
  "Inserisci un numero di telefono valido (almeno 6 cifre).";

const ALLOWED_INPUT = /[^\d+\s\-()]/g;

export function countPhoneDigits(value: string): number {
  return (value.match(/\d/g) ?? []).length;
}

/** Filtra in digitazione: solo cifre e separatori comuni, niente lettere. */
export function sanitizePhoneInput(raw: string): string {
  const filtered = raw.replace(ALLOWED_INPUT, "");
  if (filtered.length <= PHONE_MAX_LENGTH) return filtered;
  return filtered.slice(0, PHONE_MAX_LENGTH);
}

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > PHONE_MAX_LENGTH) return false;
  return countPhoneDigits(trimmed) >= PHONE_MIN_DIGITS;
}

/** Valore inviato a API, email, Make e GTM. */
export function formatPhoneForSubmit(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}
