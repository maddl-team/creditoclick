import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildCustomerConfirmationEmail } from "@/lib/contact/customerConfirmationEmail";
import { formatContactDataAsHtml, formatContactDataAsText } from "@/lib/contact/formatContactData";
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

  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "L'indirizzo email è obbligatorio e deve essere valido." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const extraText = formatContactDataAsText(payload.data);
  const extraHtml = formatContactDataAsHtml(payload.data);
  const confirmation = buildCustomerConfirmationEmail({
    fullName,
    phone,
    email,
    message,
    formType,
    data: payload.data,
  });

  try {
    const sendResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text: [
        `Form: ${formType}`,
        `Nome: ${fullName}`,
        `Telefono: ${phone}`,
        `Email: ${email}`,
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
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Messaggio:</strong> ${message || "Nessun messaggio libero."}</p>
          <h3 style="margin-top:18px;">Dati aggiuntivi</h3>
          ${extraHtml}
        </div>
      `,
    });

    // Conferma al cliente: non blocca la richiesta se fallisce.
    try {
      await resend.emails.send({
        from,
        to: [email],
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      });
    } catch {
      // Keep internal notification successful even if confirmation fails.
    }

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
