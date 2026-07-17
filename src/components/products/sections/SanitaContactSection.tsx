"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getLastAdUserDataConsent, pushContactLeadEvent } from "@/lib/analytics/dataLayer";
import { IUBENDA_PRIVACY_POLICY_URL } from "@/config/iubenda";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ContactFormSuccessPanel } from "@/components/ui/ContactFormSuccessPanel";
import {
  formatPhoneForSubmit,
  isValidPhone,
  PHONE_VALIDATION_MESSAGE,
  sanitizePhoneInput,
} from "@/lib/contact/phone";

type Step = 1 | 2 | 3 | 4;
type Ruolo = "medico" | "infermiere" | "oss" | "amministrativo";
type Ente = "asl_ospedale_pubblico" | "clinica_convenzionata" | "struttura_privata";
type Tempistiche = "immediata_15gg" | "breve_1mese" | "informativa";

function formatEUR(value: number) {
  return `${new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(value)} €`;
}

export function SanitaContactSection() {
  const pathname = usePathname();
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [step4SubmitAttempted, setStep4SubmitAttempted] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const [ruolo, setRuolo] = React.useState<Ruolo>("infermiere");
  const [ente, setEnte] = React.useState<Ente>("asl_ospedale_pubblico");
  const [anzianitaServizio, setAnzianitaServizio] = React.useState(6);
  const [stipendioNetto, setStipendioNetto] = React.useState(2000);
  const [tempistiche, setTempistiche] = React.useState<Tempistiche>("breve_1mese");
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [cellulare, setCellulare] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consensoPrivacy, setConsensoPrivacy] = React.useState(false);
  const [consensoMarketing, setConsensoMarketing] = React.useState(false);

  function validateCurrentStep() {
    const next: Record<string, string> = {};
    if (step === 1) {
      if (!ruolo) next.ruolo = "Seleziona il ruolo professionale.";
      if (!ente) next.ente = "Seleziona l'ente di appartenenza.";
    }
    if (step === 2) {
      if (!Number.isFinite(anzianitaServizio) || anzianitaServizio < 0 || anzianitaServizio > 50) next.anzianita = "Inserisci un valore tra 0 e 50 anni.";
      if (!Number.isFinite(stipendioNetto) || stipendioNetto < 600) next.stipendio = "Inserisci uno stipendio netto minimo di 600 €.";
    }
    if (step === 3) {
      if (!tempistiche) next.tempistiche = "Seleziona una tempistica.";
    }
    if (step === 4) {
      if (nome.trim().length < 2) next.nome = "Inserisci il nome.";
      if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci una email valida.";
      if (!isValidPhone(cellulare)) next.cellulare = PHONE_VALIDATION_MESSAGE;
      if (!consensoPrivacy) next.consensoPrivacy = "Per proseguire devi accettare la Privacy Policy.";
    }
    return next;
  }

  function goNext() {
    const next = validateCurrentStep();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStep((s) => Math.min(4, s + 1) as Step);
    if (step === 3) {
      setErrors({});
      setStep4SubmitAttempted(false);
    }
  }

  function goBack() {
    setStep((s) => Math.max(1, s - 1) as Step);
    setErrors({});
    if (step === 4) setStep4SubmitAttempted(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep4SubmitAttempted(true);
    const next = validateCurrentStep();
    setErrors(next);
    if (Object.keys(next).length) return;
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitted(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Sanita (Infermieri e Medici)",
          sourcePage: pathname,
          subject: "Nuova richiesta - Sanita (Infermieri e Medici)",
          fullName: `${nome.trim()} ${cognome.trim()}`.trim(),
          phone: formatPhoneForSubmit(cellulare),
          email: email.trim(),
          data: {
            ruolo,
            ente,
            anzianitaServizio,
            stipendioNetto: formatEUR(stipendioNetto),
            tempistiche,
            consensoPrivacy: consensoPrivacy ? "Si" : "No",
            consensoMarketing: consensoMarketing ? "Si" : "No",
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
          formSource: "Sanita (Infermieri e Medici)",
          email: email.trim(),
          phone: formatPhoneForSubmit(cellulare),
        },
        { includeUserDataForAds: getLastAdUserDataConsent() },
      );
      setSubmitted(true);
    } catch {
      setSubmitError("Errore di rete. Controlla la connessione e riprova.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section className="bg-white border-t border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-stretch">
        <div className="lg:col-span-2">
          <SectionIntro
            badge="Richiesta Prioritaria Sanita"
            title="Compila il form dedicato al personale sanitario"
            descriptionClassName="space-y-6"
            description={
              <>
                <p>
                  Questa richiesta e pensata per medici, infermieri, OSS e personale amministrativo: ci aiuta a capire subito inquadramento e priorita.
                </p>
                <p>
                  Con pochi step possiamo impostare una valutazione concreta e ricontattarti con tempistiche chiare, senza allungare inutilmente il percorso.
                </p>
              </>
            }
          />
        </div>

        <div className="lg:col-span-2 -my-12 md:-my-20 border-x border-slate-200/60 bg-surface-subtle flex">
          <div className="w-full flex-1 p-8 md:p-10 lg:p-12">
            {submitted ? (
              <ContactFormSuccessPanel firstName={nome} />
            ) : (
            <>

            <div className="mb-6">
              <p className="text-sm font-semibold text-brand-indigo">Step {step}/4</p>
              <div className="mt-2 flex items-center gap-2">{[1, 2, 3, 4].map((i) => <div key={i} className={`h-1.5 w-9 rounded-full ${step >= i ? "bg-brand-indigo" : "bg-slate-300"}`} />)}</div>
            </div>

            <form onSubmit={step === 4 ? onSubmit : (e) => e.preventDefault()} className="space-y-5">
              {step === 1 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 1: Inquadramento</h3>
                  <label htmlFor="sanita-ruolo" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Ruolo professionale</span>
                    <select id="sanita-ruolo" value={ruolo} onChange={(e) => setRuolo(e.target.value as Ruolo)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3">
                      <option value="medico">Medico</option><option value="infermiere">Infermiere</option><option value="oss">OSS</option><option value="amministrativo">Amministrativo</option>
                    </select>{errors.ruolo && <p className="text-xs text-red-600">{errors.ruolo}</p>}
                  </label>
                  <label htmlFor="sanita-ente" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Ente di appartenenza</span>
                    <select id="sanita-ente" value={ente} onChange={(e) => setEnte(e.target.value as Ente)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3">
                      <option value="asl_ospedale_pubblico">ASL/Ospedale Pubblico</option><option value="clinica_convenzionata">Clinica Convenzionata</option><option value="struttura_privata">Struttura Privata</option>
                    </select>{errors.ente && <p className="text-xs text-red-600">{errors.ente}</p>}
                  </label>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 2: Dati Economici</h3>
                  <label htmlFor="sanita-anzianita" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Anzianita di servizio (anni)</span>
                    <input id="sanita-anzianita" type="number" min={0} max={50} value={anzianitaServizio} onChange={(e) => setAnzianitaServizio(Math.trunc(Number(e.target.value) || 0))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    {errors.anzianita && <p className="text-xs text-red-600">{errors.anzianita}</p>}
                  </label>
                  <label htmlFor="sanita-stipendio" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Stipendio netto</span>
                    <input id="sanita-stipendio" type="number" min={600} step={50} value={stipendioNetto} onChange={(e) => setStipendioNetto(Math.trunc(Number(e.target.value) || 0))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />
                    {errors.stipendio && <p className="text-xs text-red-600">{errors.stipendio}</p>}
                  </label>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 3: Urgenza</h3>
                  <label htmlFor="sanita-tempistiche" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Tempistiche</span>
                    <select id="sanita-tempistiche" value={tempistiche} onChange={(e) => setTempistiche(e.target.value as Tempistiche)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3">
                      <option value="immediata_15gg">Immediata (15 gg)</option><option value="breve_1mese">Breve termine (1 mese)</option><option value="informativa">Informativa</option>
                    </select>{errors.tempistiche && <p className="text-xs text-red-600">{errors.tempistiche}</p>}
                  </label>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 4: Contatto</h3>
                  <label htmlFor="sanita-nome" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Nome</span><input id="sanita-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.nome && <p className="text-xs text-red-600">{errors.nome}</p>}</label>
                  <label htmlFor="sanita-cognome" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cognome</span><input id="sanita-cognome" type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.cognome && <p className="text-xs text-red-600">{errors.cognome}</p>}</label>
                  <label htmlFor="sanita-cellulare" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cellulare</span><input id="sanita-cellulare" type="tel" placeholder="Es. +39 327 1234567" value={cellulare} onChange={(e) => setCellulare(sanitizePhoneInput(e.target.value))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.cellulare && <p className="text-xs text-red-600">{errors.cellulare}</p>}</label>
                  <label htmlFor="sanita-email" className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Email</span><input id="sanita-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.email && <p className="text-xs text-red-600">{errors.email}</p>}</label>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
                    <input type="checkbox" checked={consensoPrivacy} onChange={(e) => setConsensoPrivacy(e.target.checked)} className="mt-1 accent-brand-indigo" />
                    <span className="text-sm text-text-secondary">
                      Acconsento al trattamento dati (
                      <a
                        href={IUBENDA_PRIVACY_POLICY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-indigo hover:underline"
                      >
                        Privacy Policy
                      </a>
                      ).
                    </span>
                  </label>
                  {step4SubmitAttempted && errors.consensoPrivacy && <p className="text-xs text-red-600 -mt-2">{errors.consensoPrivacy}</p>}
                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4"><input type="checkbox" checked={consensoMarketing} onChange={(e) => setConsensoMarketing(e.target.checked)} className="mt-1 accent-brand-indigo" /><span className="text-sm text-text-secondary">Acconsento a comunicazioni marketing.</span></label>
                </>
              )}

              <div className="flex flex-col gap-3 pt-2">
                {step < 4 ? (
                  <Button key="continue-button" type="button" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight} onClick={goNext}>Continua</Button>
                ) : (
                  <Button key="submit-button" type="submit" disabled={isSubmitting} className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>{isSubmitting ? "Invio in corso..." : "Invia"}</Button>
                )}
                {step > 1 && <Button type="button" variant="link" className="!px-0" onClick={goBack}>Torna allo step precedente</Button>}
              </div>

              {submitError && <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">{submitError}</p>}
            </form>
            </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

