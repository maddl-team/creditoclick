"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { IUBENDA_PRIVACY_POLICY_URL } from "@/config/iubenda";
import { LANDING_AMOUNTS, LANDING_CATEGORIES } from "@/content/landingPreventivo";
import { getLastAdUserDataConsent, pushContactLeadEvent } from "@/lib/analytics/dataLayer";
import {
  formatPhoneForSubmit,
  isValidPhone,
  PHONE_VALIDATION_MESSAGE,
  sanitizePhoneInput,
} from "@/lib/contact/phone";
import { cn } from "@/lib/utils";

type FormErrors = Partial<Record<"importo" | "categoria" | "stipendio" | "nome" | "telefono" | "email" | "privacy", string>>;

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none transition focus:border-brand-indigo/40 focus:ring-2 focus:ring-brand-indigo/30";

export function LandingPreventivoForm() {
  const pathname = usePathname();
  const [importo, setImporto] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [stipendio, setStipendio] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [privacyOk, setPrivacyOk] = React.useState(false);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!importo) next.importo = "Seleziona l’importo desiderato.";
    if (!categoria) next.categoria = "Seleziona la tua categoria lavorativa.";
    const stipendioNum = Number(stipendio.replace(",", "."));
    if (!stipendio.trim() || !Number.isFinite(stipendioNum) || stipendioNum < 500) {
      next.stipendio = "Inserisci lo stipendio netto mensile (es. 1700).";
    }
    if (nome.trim().length < 3) next.nome = "Inserisci nome e cognome.";
    if (!isValidPhone(telefono)) next.telefono = PHONE_VALIDATION_MESSAGE;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Inserisci un indirizzo email valido.";
    }
    if (!privacyOk) next.privacy = "Devi accettare la Privacy Policy per continuare.";
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const phone = formatPhoneForSubmit(telefono.startsWith("+") ? telefono : `+39 ${telefono}`);
    const categoriaLabel =
      LANDING_CATEGORIES.find((item) => item.value === categoria)?.label ?? categoria;

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Landing preventivo dipendenti Ads",
          sourcePage: pathname,
          subject: "Nuova richiesta landing preventivo dipendenti",
          fullName: nome.trim(),
          phone,
          email: email.trim(),
          data: {
            importoDesiderato: importo,
            categoriaLavorativa: categoriaLabel,
            stipendioNettoMensile: stipendio.trim(),
            consensoPrivacy: "Si",
            canale: "Google Ads Landing",
          },
        }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setSubmitError(result.error ?? "Invio non riuscito. Riprova tra poco.");
        return;
      }

      pushContactLeadEvent(
        {
          formSource: "Landing preventivo dipendenti Ads",
          email: email.trim(),
          phone,
        },
        { includeUserDataForAds: getLastAdUserDataConsent() },
      );
      setSuccess(true);
    } catch {
      setSubmitError("Invio non riuscito. Riprova tra poco.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        id="form-preventivo"
        className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-xl md:p-8"
        role="status"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary">Richiesta inviata con successo</h3>
        <p className="mt-3 text-text-secondary leading-relaxed">
          Grazie {nome.trim().split(" ")[0]}. Un consulente CreditoClick ti ricontatterà entro{" "}
          <strong className="text-text-primary">24 ore lavorative</strong> con il preventivo
          personalizzato. Nessun impegno, nessun costo.
        </p>
      </div>
    );
  }

  return (
    <div
      id="form-preventivo"
      className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xl md:p-6"
    >
      <div className="mb-5">
        <h2 className="text-xl font-bold text-text-primary md:text-2xl">
          Richiedi il tuo Preventivo Gratuito
        </h2>
        <p className="mt-1 text-sm text-text-secondary">Senza impegno • Risposta rapida in 24h</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-text-primary">Importo desiderato</span>
          <select
            value={importo}
            onChange={(e) => setImporto(e.target.value)}
            className={inputClass}
            required
          >
            <option value="">Seleziona importo</option>
            {LANDING_AMOUNTS.map((amount) => (
              <option key={amount} value={amount}>
                {amount}
              </option>
            ))}
          </select>
          {errors.importo ? <p className="text-xs text-red-600">{errors.importo}</p> : null}
        </label>

        <fieldset className="space-y-2">
          <legend className="text-sm font-semibold text-text-primary">Categoria lavorativa</legend>
          <div className="space-y-2">
            {LANDING_CATEGORIES.map((item) => (
              <label
                key={item.value}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition",
                  categoria === item.value
                    ? "border-brand-indigo bg-brand-indigo/[0.04]"
                    : "border-slate-300 bg-white hover:border-brand-indigo/40",
                )}
              >
                <input
                  type="radio"
                  name="categoria"
                  value={item.value}
                  checked={categoria === item.value}
                  onChange={() => setCategoria(item.value)}
                  className="mt-1 accent-brand-indigo"
                />
                <span className="text-sm text-text-primary leading-snug">{item.label}</span>
              </label>
            ))}
          </div>
          {errors.categoria ? <p className="text-xs text-red-600">{errors.categoria}</p> : null}
        </fieldset>

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-text-primary">Stipendio netto mensile (€)</span>
          <input
            type="number"
            inputMode="decimal"
            min={500}
            step={50}
            placeholder="es. 1.700"
            value={stipendio}
            onChange={(e) => setStipendio(e.target.value)}
            className={inputClass}
            required
          />
          {errors.stipendio ? <p className="text-xs text-red-600">{errors.stipendio}</p> : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-text-primary">Nome e Cognome</span>
          <input
            type="text"
            autoComplete="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={inputClass}
            required
          />
          {errors.nome ? <p className="text-xs text-red-600">{errors.nome}</p> : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-text-primary">Numero di Telefono</span>
          <div className="flex overflow-hidden rounded-xl border border-slate-300 focus-within:border-brand-indigo/40 focus-within:ring-2 focus-within:ring-brand-indigo/30">
            <span className="flex items-center border-r border-slate-300 bg-slate-50 px-3 text-sm font-semibold text-text-secondary">
              +39
            </span>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="327 123 4567"
              value={telefono}
              onChange={(e) => setTelefono(sanitizePhoneInput(e.target.value))}
              className="w-full bg-white px-4 py-3 text-text-primary outline-none"
              required
            />
          </div>
          {errors.telefono ? <p className="text-xs text-red-600">{errors.telefono}</p> : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-text-primary">Email</span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            required
          />
          {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
        </label>

        <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
          <input
            type="checkbox"
            checked={privacyOk}
            onChange={(e) => setPrivacyOk(e.target.checked)}
            className="mt-1 accent-brand-indigo"
            required
          />
          <span className="text-sm text-text-secondary leading-relaxed">
            Dichiaro di aver letto e accettato la{" "}
            <a
              href={IUBENDA_PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-indigo hover:underline"
            >
              Privacy Policy
            </a>{" "}
            ai sensi del Reg. UE 2016/679 (GDPR) e autorizzo il trattamento dei dati per ricevere il
            preventivo richiesto.
          </span>
        </label>
        {errors.privacy ? <p className="text-xs text-red-600 -mt-2">{errors.privacy}</p> : null}

        {submitError ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-indigo px-6 py-4",
            "text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-indigo/25",
            "transition hover:bg-brand-purple hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70",
          )}
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Invio in corso…
            </>
          ) : (
            <>
              Richiedi preventivo gratuito
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-slate-500">
          Zero costi di istruttoria preventiva • Preventivo 100% gratuito • Dati protetti da
          crittografia SSL
        </p>
      </form>
    </div>
  );
}
