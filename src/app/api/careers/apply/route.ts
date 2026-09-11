import { NextResponse } from "next/server";
import { Resend } from "resend";
import { oamStatusLabel } from "@/content/lavoraConNoi";
import { isValidPhone, PHONE_VALIDATION_MESSAGE } from "@/lib/contact/phone";

export const runtime = "nodejs";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;
const ALLOWED_CV_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function hasAllowedCvExtension(filename: string) {
  const lower = filename.toLowerCase();
  return ALLOWED_CV_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CAREERS_TO_EMAIL || process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { ok: false, error: "Configurazione email incompleta sul server." },
      { status: 500 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Payload non valido." }, { status: 400 });
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const oamStatus = String(formData.get("oamStatus") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const privacyOk = String(formData.get("privacyOk") ?? "").trim();
  const cv = formData.get("cv");

  if (!fullName || fullName.length < 3) {
    return NextResponse.json({ ok: false, error: "Nome e cognome obbligatori." }, { status: 400 });
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Email obbligatoria e valida." }, { status: 400 });
  }
  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ ok: false, error: PHONE_VALIDATION_MESSAGE }, { status: 400 });
  }
  if (!oamStatus) {
    return NextResponse.json({ ok: false, error: "Seleziona lo stato di iscrizione OAM." }, { status: 400 });
  }
  if (privacyOk !== "Si") {
    return NextResponse.json({ ok: false, error: "Devi accettare la Privacy Policy." }, { status: 400 });
  }
  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ ok: false, error: "Curriculum obbligatorio." }, { status: 400 });
  }
  if (!hasAllowedCvExtension(cv.name) || (cv.type && !ALLOWED_CV_MIME.has(cv.type))) {
    return NextResponse.json(
      { ok: false, error: "Formato CV non valido. Usa PDF, DOC o DOCX." },
      { status: 400 },
    );
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json({ ok: false, error: "Il CV supera i 5MB." }, { status: 400 });
  }

  const oamLabel = oamStatusLabel(oamStatus);
  const cvBytes = Buffer.from(await cv.arrayBuffer());
  const resend = new Resend(apiKey);

  const internalSubject = `Nuova candidatura Lavora con noi — ${fullName}`;
  const internalText = [
    "Nuova candidatura dal sito CreditoClick",
    "",
    `Nome e cognome: ${fullName}`,
    `Email: ${email}`,
    `Telefono: ${phone}`,
    `Stato OAM: ${oamLabel}`,
    `Privacy: ${privacyOk}`,
    `CV: ${cv.name} (${Math.round(cv.size / 1024)} KB)`,
    "",
    "Note / Presentazione:",
    notes || "Nessuna nota.",
  ].join("\n");

  const internalHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
      <h2 style="margin-bottom:8px;">Nuova candidatura — Lavora con noi</h2>
      <p><strong>Nome e cognome:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Stato OAM:</strong> ${escapeHtml(oamLabel)}</p>
      <p><strong>Privacy:</strong> ${escapeHtml(privacyOk)}</p>
      <p><strong>CV allegato:</strong> ${escapeHtml(cv.name)}</p>
      <h3 style="margin-top:18px;">Note / Presentazione</h3>
      <p>${escapeHtml(notes || "Nessuna nota.")}</p>
    </div>
  `;

  try {
    const sendResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: internalSubject,
      text: internalText,
      html: internalHtml,
      attachments: [
        {
          filename: cv.name,
          content: cvBytes,
          contentType: cv.type || undefined,
        },
      ],
    });

    try {
      await resend.emails.send({
        from,
        to: [email],
        subject: "Abbiamo ricevuto la tua candidatura — CreditoClick",
        text: [
          `Gentile ${fullName},`,
          "",
          "grazie per aver inviato la tua candidatura per la posizione di Consulente Finanziario presso la filiale di Maglie.",
          "Abbiamo ricevuto correttamente i tuoi dati e il curriculum.",
          "Ti ricontatteremo a breve.",
          "",
          "Cordiali saluti,",
          "Il team CreditoClick",
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
            <p>Gentile ${escapeHtml(fullName)},</p>
            <p>grazie per aver inviato la tua candidatura per la posizione di <strong>Consulente Finanziario</strong> presso la filiale di Maglie.</p>
            <p>Abbiamo ricevuto correttamente i tuoi dati e il curriculum. Ti ricontatteremo a breve.</p>
            <p>Cordiali saluti,<br/>Il team CreditoClick</p>
          </div>
        `,
      });
    } catch {
      // La conferma al candidato non deve bloccare la candidatura interna.
    }

    return NextResponse.json({ ok: true, id: sendResult.data?.id ?? null }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invio candidatura non riuscito. Riprova tra poco." },
      { status: 500 },
    );
  }
}
