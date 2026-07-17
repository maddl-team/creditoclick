import { formatContactDataAsHtml, formatContactDataAsText } from "@/lib/contact/formatContactData";

type CustomerConfirmationInput = {
  fullName: string;
  phone: string;
  email: string;
  message?: string;
  formType: string;
  data?: Record<string, unknown>;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export function buildCustomerConfirmationEmail(input: CustomerConfirmationInput) {
  const { firstName, lastName } = splitName(input.fullName);
  const greetingName = [firstName, lastName].filter(Boolean).join(" ");
  const extraText = formatContactDataAsText(input.data);
  const extraHtml = formatContactDataAsHtml(input.data);
  const message = (input.message ?? "").trim() || "Nessun messaggio libero.";

  const subject = "Abbiamo ricevuto la sua richiesta — CreditoClick";

  const text = [
    `Gentile ${greetingName},`,
    "",
    "grazie per averci contattato. Abbiamo ricevuto correttamente la sua richiesta e un consulente CreditoClick la ricontatterà quanto prima.",
    "",
    "Di seguito trova il riepilogo dei dati inviati:",
    "",
    `Nome e cognome: ${input.fullName}`,
    `Telefono: ${input.phone}`,
    `Email: ${input.email}`,
    `Tipo di richiesta: ${input.formType}`,
    `Messaggio: ${message}`,
    "",
    "Dati aggiuntivi:",
    extraText,
    "",
    "Se ha bisogno di aggiornare qualche informazione, risponda pure a questa email oppure contattaci ai recapiti indicati sul sito.",
    "",
    "Cordiali saluti,",
    "Il team CreditoClick",
    "FINNOVA S.R.L. — Agente in Attività Finanziaria IBL Banca | OAM A17849",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;max-width:640px;">
      <p>Gentile <strong>${escapeHtml(greetingName)}</strong>,</p>
      <p>
        grazie per averci contattato. Abbiamo ricevuto correttamente la sua richiesta e un consulente CreditoClick
        <strong>la ricontatterà quanto prima</strong>.
      </p>
      <p style="margin-top:20px;margin-bottom:8px;"><strong>Riepilogo della richiesta</strong></p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
        <tr>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>Nome e cognome</strong></td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;">${escapeHtml(input.fullName)}</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>Telefono</strong></td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;">${escapeHtml(input.phone)}</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>Email</strong></td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;">${escapeHtml(input.email)}</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>Tipo di richiesta</strong></td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;">${escapeHtml(input.formType)}</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>Messaggio</strong></td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;">${escapeHtml(message)}</td>
        </tr>
      </table>
      <p style="margin-bottom:8px;"><strong>Dati aggiuntivi</strong></p>
      ${extraHtml}
      <p style="margin-top:20px;">
        Se ha bisogno di aggiornare qualche informazione, risponda pure a questa email oppure contattaci ai recapiti indicati sul sito.
      </p>
      <p style="margin-top:24px;">
        Cordiali saluti,<br />
        <strong>Il team CreditoClick</strong><br />
        <span style="color:#64748b;font-size:13px;">FINNOVA S.R.L. — Agente in Attività Finanziaria IBL Banca | OAM A17849</span>
      </p>
    </div>
  `;

  return { subject, text, html };
}
