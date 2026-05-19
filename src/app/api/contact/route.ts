import { NextResponse } from "next/server";
import { Resend } from "resend";
import { notifyMakeContactWebhook, resolveSourcePage } from "@/lib/contact/makeWebhook";
import { isValidPhone, PHONE_VALIDATION_MESSAGE } from "@/lib/contact/phone";

type ContactPayload = {
  formType?: string;
  subject?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
  sourcePage?: string;
  data?: Record<string, unknown>;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function formatDataAsText(data: Record<string, unknown> | undefined) {
  if (!data || Object.keys(data).length === 0) {
    return "Nessun dato aggiuntivo.";
  }

  return Object.entries(data)
    .map(([key, value]) => `- ${key}: ${String(value)}`)
    .join("\n");
}

function formatDataAsHtml(data: Record<string, unknown> | undefined) {
  if (!data || Object.keys(data).length === 0) {
    return "<p>Nessun dato aggiuntivo.</p>";
  }

  const rows = Object.entries(data)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #e2e8f0;"><strong>${key}</strong></td><td style="padding:6px 10px;border:1px solid #e2e8f0;">${String(value)}</td></tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;width:100%;">${rows}</table>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { ok: false, error: "Configurazione email incompleta sul server." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Payload JSON non valido." }, { status: 400 });
  }

  const fullName = (payload.fullName ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const email = (payload.email ?? "").trim();
  const formType = (payload.formType ?? "Form contatto").trim();
  const subject = (payload.subject ?? "").trim() || `Nuova richiesta dal sito - ${formType}`;
  const message = (payload.message ?? "").trim();

  if (!fullName || !phone) {
    return NextResponse.json(
      { ok: false, error: "I campi fullName e phone sono obbligatori." },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ ok: false, error: PHONE_VALIDATION_MESSAGE }, { status: 400 });
  }

  if (email && !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Email non valida." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const extraText = formatDataAsText(payload.data);
  const extraHtml = formatDataAsHtml(payload.data);

  try {
    const sendResult = await resend.emails.send({
      from,
      to: [to],
      subject,
      text: [
        `Form: ${formType}`,
        `Nome: ${fullName}`,
        `Telefono: ${phone}`,
        `Email: ${email || "Non indicata"}`,
        `Messaggio: ${message || "Nessun messaggio libero."}`,
        "",
        "Dati aggiuntivi:",
        extraText,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
          <h2 style="margin-bottom:8px;">Nuova richiesta dal sito</h2>
          <p><strong>Form:</strong> ${formType}</p>
          <p><strong>Nome:</strong> ${fullName}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Non indicata"}</p>
          <p><strong>Messaggio:</strong> ${message || "Nessun messaggio libero."}</p>
          <h3 style="margin-top:18px;">Dati aggiuntivi</h3>
          ${extraHtml}
        </div>
      `,
    });

    const { sourcePage, sourceUrl } = resolveSourcePage(request, payload.sourcePage);
    const siteHost =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "") ??
      "creditoclick.it";

    await notifyMakeContactWebhook({
      formType,
      subject,
      fullName,
      phone,
      email,
      message,
      data: payload.data ?? {},
      submittedAt: new Date().toISOString(),
      sourcePage,
      sourceUrl,
      site: siteHost,
    });

    return NextResponse.json({ ok: true, id: sendResult.data?.id ?? null }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invio email non riuscito. Riprova tra poco." },
      { status: 500 },
    );
  }
}

