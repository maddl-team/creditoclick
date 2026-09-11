"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { IUBENDA_PRIVACY_POLICY_URL } from "@/config/iubenda";
import {
  LAVORA_CON_NOI_FORM,
  OAM_STATUS_OPTIONS,
  type OamStatusValue,
} from "@/content/lavoraConNoi";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import {
  formatPhoneForSubmit,
  isValidPhone,
  PHONE_VALIDATION_MESSAGE,
  sanitizePhoneInput,
} from "@/lib/contact/phone";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;
const ALLOWED_CV_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function hasAllowedCvExtension(filename: string) {
  const lower = filename.toLowerCase();
  return ALLOWED_CV_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function isAllowedCvFile(file: File) {
  if (!hasAllowedCvExtension(file.name)) return false;
  if (file.type && !ALLOWED_CV_MIME.has(file.type)) return false;
  return true;
}

export function JobApplicationForm() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [oamStatus, setOamStatus] = React.useState<OamStatusValue | "">("");
  const [cvFile, setCvFile] = React.useState<File | null>(null);
  const [notes, setNotes] = React.useState("");
  const [privacyOk, setPrivacyOk] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  function validate() {
    const next: Record<string, string> = {};
    if (fullName.trim().length < 3) next.fullName = "Inserisci nome e cognome.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Inserisci un indirizzo email valido.";
    }
    if (!isValidPhone(phone)) next.phone = PHONE_VALIDATION_MESSAGE;
    if (!oamStatus) next.oamStatus = "Seleziona lo stato di iscrizione OAM.";
    if (!cvFile) {
      next.cv = "Carica il tuo CV in formato PDF o DOCX (max 5MB).";
    } else if (!isAllowedCvFile(cvFile)) {
      next.cv = "Formato non valido. Usa PDF, DOC o DOCX.";
    } else if (cvFile.size > MAX_CV_BYTES) {
      next.cv = "Il file supera i 5MB. Riduci le dimensioni e riprova.";
    }
    if (!privacyOk) next.privacyOk = "Per procedere devi accettare la Privacy Policy.";
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    if (!cvFile || !oamStatus) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    try {
      const body = new FormData();
      body.append("fullName", fullName.trim());
      body.append("email", email.trim());
      body.append("phone", formatPhoneForSubmit(phone));
      body.append("oamStatus", oamStatus);
      body.append("notes", notes.trim());
      body.append("privacyOk", privacyOk ? "Si" : "No");
      body.append("cv", cvFile, cvFile.name);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body,
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setSubmitError(result.error ?? "Invio non riuscito. Riprova tra poco.");
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError("Errore di rete. Controlla la connessione e riprova.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="candidatura" className="bg-white border-t border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-stretch">
        <div className="lg:col-span-2">
          <SectionIntro
            badge={LAVORA_CON_NOI_FORM.badge}
            title={LAVORA_CON_NOI_FORM.title}
            description={<p>{LAVORA_CON_NOI_FORM.description}</p>}
          />
        </div>

        <div className="lg:col-span-2 -my-12 md:-my-20 border-x border-slate-200/60 bg-surface-subtle flex">
          <div className="w-full flex-1 p-8 md:p-10 lg:p-12">
            {isSubmitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 text-center shadow-sm shadow-slate-200/40"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-indigo/10 text-brand-indigo">
                  <CheckCircle2 className="h-8 w-8" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{LAVORA_CON_NOI_FORM.successTitle}</h3>
                <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto">
                  {LAVORA_CON_NOI_FORM.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <label htmlFor="job-fullname" className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Nome e Cognome</span>
                  <input
                    id="job-fullname"
                    type="text"
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  {errors.fullName ? <p className="text-xs text-red-600">{errors.fullName}</p> : null}
                </label>

                <label htmlFor="job-email" className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Email</span>
                  <input
                    id="job-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
                </label>

                <label htmlFor="job-phone" className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Telefono</span>
                  <input
                    id="job-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Es. +39 327 1234567"
                    value={phone}
                    onChange={(e) => setPhone(sanitizePhoneInput(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}
                </label>

                <label htmlFor="job-oam" className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Stato Iscrizione OAM</span>
                  <select
                    id="job-oam"
                    required
                    value={oamStatus}
                    onChange={(e) => setOamStatus(e.target.value as OamStatusValue | "")}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  >
                    <option value="">Seleziona</option>
                    {OAM_STATUS_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.oamStatus ? <p className="text-xs text-red-600">{errors.oamStatus}</p> : null}
                </label>

                <div className="space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Curriculum Vitae</span>
                  <input
                    ref={fileInputRef}
                    id="job-cv"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      setCvFile(file);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-4 text-left transition-colors hover:border-brand-indigo/40 hover:bg-brand-indigo/[0.02]"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-text-primary truncate">
                        {cvFile ? cvFile.name : "Carica PDF o DOCX (max 5MB)"}
                      </span>
                      {cvFile ? (
                        <span className="mt-1 block text-xs text-text-secondary">
                          {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      ) : (
                        <span className="mt-1 block text-xs text-text-secondary">
                          Formati accettati: PDF, DOC, DOCX
                        </span>
                      )}
                    </span>
                    <Upload className="h-5 w-5 shrink-0 text-brand-indigo" aria-hidden />
                  </button>
                  {errors.cv ? <p className="text-xs text-red-600">{errors.cv}</p> : null}
                </div>

                <label htmlFor="job-notes" className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Note / Presentazione breve (opzionale)</span>
                  <textarea
                    id="job-notes"
                    maxLength={1000}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Raccontaci brevemente la tua esperienza o motivazione."
                    className="w-full min-h-[110px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  <p className="text-xs text-slate-500">{notes.length}/1000</p>
                </label>

                <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
                  <input
                    type="checkbox"
                    checked={privacyOk}
                    onChange={(e) => setPrivacyOk(e.target.checked)}
                    className="mt-1 accent-brand-indigo"
                  />
                  <span className="text-sm text-text-secondary">
                    Ho letto e accetto la{" "}
                    <a
                      href={IUBENDA_PRIVACY_POLICY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-indigo hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    ai sensi del Reg. UE 2016/679
                  </span>
                </label>
                {errors.privacyOk ? <p className="text-xs text-red-600 -mt-2">{errors.privacyOk}</p> : null}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90"
                  icon={ArrowRight}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia candidatura"}
                </Button>

                {submitError ? (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">{submitError}</p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
