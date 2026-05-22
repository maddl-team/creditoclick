/**
 * Serializza `data` dei form contatto per email (testo/HTML).
 * Supporta oggetti annidati (es. Preventivo Cessione) senza modificare il payload verso Make.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formatContactDataValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "Non indicato";
  }
  if (typeof value === "boolean") {
    return value ? "Si" : "No";
  }
  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "Non indicato";
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || "Non indicato";
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "Non indicato";
    }
    return value.map((item) => formatContactDataValue(item)).join(", ");
  }
  return String(value);
}

/** Appiattisce oggetti annidati in chiavi `gruppo.campo` leggibili in email. */
export function flattenContactDataForDisplay(
  data: Record<string, unknown>,
  prefix = "",
): Record<string, string> {
  const out: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flattenContactDataForDisplay(value as Record<string, unknown>, path));
      continue;
    }

    out[path] = formatContactDataValue(value);
  }

  return out;
}

export function formatContactDataAsText(data: Record<string, unknown> | undefined): string {
  if (!data || Object.keys(data).length === 0) {
    return "Nessun dato aggiuntivo.";
  }

  const flat = flattenContactDataForDisplay(data);
  const lines = Object.entries(flat).map(([key, value]) => `- ${key}: ${value}`);

  return lines.length > 0 ? lines.join("\n") : "Nessun dato aggiuntivo.";
}

export function formatContactDataAsHtml(data: Record<string, unknown> | undefined): string {
  if (!data || Object.keys(data).length === 0) {
    return "<p>Nessun dato aggiuntivo.</p>";
  }

  const flat = flattenContactDataForDisplay(data);
  const entries = Object.entries(flat);

  if (entries.length === 0) {
    return "<p>Nessun dato aggiuntivo.</p>";
  }

  const rows = entries
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>${escapeHtml(key)}</strong></td><td style="padding:6px 10px;border:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;width:100%;">${rows}</table>`;
}
