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
type FormaGiuridica = "srl" | "spa" | "sas" | "snc";
type Dimensioni = "sotto_15" | "16_50" | "oltre_50";
type DestinazioneTfr = "fondo_categoria" | "in_azienda" | "tesoreria_inps";
type Motivazione = "liquidita" | "consolidamento" | "acquisto_beni";

function formatEUR(value: number) {
  return `${new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(value)} €`;
}

export function PmiContactSection() {
  const pathname = usePathname();
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [step4SubmitAttempted, setStep4SubmitAttempted] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Step 1
  const [ragioneSociale, setRagioneSociale] = React.useState("");
  const [formaGiuridica, setFormaGiuridica] = React.useState<FormaGiuridica>("srl");
  const [dimensioni, setDimensioni] = React.useState<Dimensioni>("sotto_15");

  // Step 2
  const [stipendioNettoMensile, setStipendioNettoMensile] = React.useState(1600);
  const [tfrAccantonato, setTfrAccantonato] = React.useState<number | "">("");
  const [destinazioneTfr, setDestinazioneTfr] = React.useState<DestinazioneTfr>("in_azienda");

  // Step 3
  const [motivazione, setMotivazione] = React.useState<Motivazione>("liquidita");
  const [importoRichiesto, setImportoRichiesto] = React.useState(15000);

  // Step 4
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [cellulare, setCellulare] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consensoPrivacy, setConsensoPrivacy] = React.useState(false);
  const [consensoMarketing, setConsensoMarketing] = React.useState(false);

  function validateCurrentStep() {
    const next: Record<string, string> = {};

    if (step === 1) {
      if (ragioneSociale.trim().length < 2) next.ragioneSociale = "Inserisci la ragione sociale.";
      if (!formaGiuridica) next.formaGiuridica = "Seleziona la forma giuridica.";
      if (!dimensioni) next.dimensioni = "Seleziona la dimensione aziendale.";
    }

    if (step === 2) {
      if (!Number.isFinite(stipendioNettoMensile) || stipendioNettoMensile < 600) {
        next.stipendioNettoMensile = "Inserisci un valore minimo di 600 €.";
      }
      if (tfrAccantonato !== "" && (!Number.isFinite(tfrAccantonato) || tfrAccantonato < 0)) {
        next.tfrAccantonato = "Inserisci una stima valida del TFR.";
      }
      if (!destinazioneTfr) next.destinazioneTfr = "Seleziona la destinazione del TFR.";
    }

    if (step === 3) {
      if (!motivazione) next.motivazione = "Seleziona la motivazione.";
      if (!Number.isFinite(importoRichiesto) || importoRichiesto < 3000) {
        next.importoRichiesto = "Inserisci un importo richiesto minimo di 3.000 €.";
      }
    }

    if (step === 4) {
      if (nome.trim().length < 2) next.nome = "Inserisci il nome.";
      if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci una email valida.";
      if (!isValidPhone(cellulare)) {
        next.cellulare = PHONE_VALIDATION_MESSAGE;
      }
      if (!consensoPrivacy) next.consensoPrivacy = "Per proseguire devi accettare la Privacy Policy.";
    }

    return next;
  }

  function goNext() {
    const nextErrors = validateCurrentStep();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep((prev) => Math.min(4, prev + 1) as Step);
    if (step === 3) {
      setErrors({});
      setStep4SubmitAttempted(false);
    }
  }

  function goBack() {
    setStep((prev) => Math.max(1, prev - 1) as Step);
    setErrors({});
    if (step === 4) setStep4SubmitAttempted(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep4SubmitAttempted(true);
    const nextErrors = validateCurrentStep();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitted(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Dipendenti PMI",
          sourcePage: pathname,
          subject: "Nuova richiesta - Dipendenti PMI",
          fullName: `${nome.trim()} ${cognome.trim()}`.trim(),
          phone: formatPhoneForSubmit(cellulare),
          email: email.trim(),
          data: {
            ragioneSociale,
            formaGiuridica: formaGiuridica.toUpperCase(),
            dimensioni,
            stipendioNettoMensile: formatEUR(stipendioNettoMensile),
            tfrAccantonato: tfrAccantonato === "" ? "Non indicato" : formatEUR(tfrAccantonato),
            destinazioneTfr,
            motivazione,
            importoRichiesto: formatEUR(importoRichiesto),
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
          formSource: "Dipendenti PMI",
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
            badge="Richiesta Dedicata PMI"
            title="Compila il form dedicato ai dipendenti delle piccole imprese"
            descriptionClassName="space-y-6"
            description={
              <>
                <p>
                  Questa sezione ci aiuta a valutare subito i fattori che contano davvero nel segmento PMI: struttura aziendale, situazione TFR e
                  sostenibilita della richiesta.
                </p>
                <p>
                  Con questi 4 step il consulente riceve un quadro completo, riduce i tempi di analisi e ti ricontatta con una risposta concreta,
                  senza passaggi inutili.
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
              <div className="mt-2 flex items-center gap-2">
                {[1, 2, 3, 4].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 w-9 rounded-full transition-all ${
                      step >= idx ? "bg-brand-indigo shadow-[0_0_12px_rgba(79,70,229,0.35)]" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={step === 4 ? onSubmit : (e) => e.preventDefault()} className="space-y-5">
              {step === 1 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 1: Dati Azienda</h3>

                  <label htmlFor="pmi-ragione-sociale" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Ragione sociale</span>
                    <input
                      id="pmi-ragione-sociale"
                      type="text"
                      value={ragioneSociale}
                      onChange={(e) => setRagioneSociale(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.ragioneSociale ? <p className="text-xs text-red-600">{errors.ragioneSociale}</p> : null}
                  </label>

                  <label htmlFor="pmi-forma-giuridica" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Forma giuridica</span>
                    <select
                      id="pmi-forma-giuridica"
                      value={formaGiuridica}
                      onChange={(e) => setFormaGiuridica(e.target.value as FormaGiuridica)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="srl">SRL</option>
                      <option value="spa">SPA</option>
                      <option value="sas">SAS</option>
                      <option value="snc">SNC</option>
                    </select>
                  </label>

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-text-primary">Dimensioni</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { value: "sotto_15", label: "Sotto i 15" },
                        { value: "16_50", label: "16-50" },
                        { value: "oltre_50", label: "Oltre 50" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                          <input
                            type="radio"
                            name="dimensioni"
                            value={opt.value}
                            checked={dimensioni === opt.value}
                            onChange={() => setDimensioni(opt.value as Dimensioni)}
                            className="accent-brand-indigo"
                          />
                          <span className="text-sm text-text-primary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.dimensioni ? <p className="text-xs text-red-600">{errors.dimensioni}</p> : null}
                  </fieldset>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 2: Dati Finanziari</h3>

                  <label htmlFor="pmi-stipendio-netto" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Stipendio netto mensile</span>
                    <input
                      id="pmi-stipendio-netto"
                      type="number"
                      min={600}
                      step={50}
                      value={stipendioNettoMensile}
                      onChange={(e) => setStipendioNettoMensile(Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.stipendioNettoMensile ? <p className="text-xs text-red-600">{errors.stipendioNettoMensile}</p> : null}
                  </label>

                  <label htmlFor="pmi-tfr" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">TFR accantonato (stima opzionale)</span>
                    <input
                      id="pmi-tfr"
                      type="number"
                      min={0}
                      step={500}
                      value={tfrAccantonato}
                      onChange={(e) => setTfrAccantonato(e.target.value === "" ? "" : Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.tfrAccantonato ? <p className="text-xs text-red-600">{errors.tfrAccantonato}</p> : null}
                  </label>

                  <label htmlFor="pmi-dest-tfr" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Destinazione TFR</span>
                    <select
                      id="pmi-dest-tfr"
                      value={destinazioneTfr}
                      onChange={(e) => setDestinazioneTfr(e.target.value as DestinazioneTfr)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="fondo_categoria">Fondo di categoria</option>
                      <option value="in_azienda">In azienda</option>
                      <option value="tesoreria_inps">Tesoreria INPS</option>
                    </select>
                  </label>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 3: Dettagli Richiesta</h3>

                  <label htmlFor="pmi-motivazione" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Motivazione</span>
                    <select
                      id="pmi-motivazione"
                      value={motivazione}
                      onChange={(e) => setMotivazione(e.target.value as Motivazione)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="liquidita">Liquidita</option>
                      <option value="consolidamento">Consolidamento</option>
                      <option value="acquisto_beni">Acquisto beni</option>
                    </select>
                  </label>

                  <label htmlFor="pmi-importo-richiesto" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Importo richiesto</span>
                    <input
                      id="pmi-importo-richiesto"
                      type="number"
                      min={3000}
                      step={500}
                      value={importoRichiesto}
                      onChange={(e) => setImportoRichiesto(Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.importoRichiesto ? <p className="text-xs text-red-600">{errors.importoRichiesto}</p> : null}
                  </label>
                </>
              ) : null}

              {step === 4 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 4: Contatto</h3>

                  <label htmlFor="pmi-nome" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Nome</span>
                    <input
                      id="pmi-nome"
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.nome ? <p className="text-xs text-red-600">{errors.nome}</p> : null}
                  </label>

                  <label htmlFor="pmi-cognome" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Cognome</span>
                    <input
                      id="pmi-cognome"
                      type="text"
                      value={cognome}
                      onChange={(e) => setCognome(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.cognome ? <p className="text-xs text-red-600">{errors.cognome}</p> : null}
                  </label>

                  <label htmlFor="pmi-cellulare" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Cellulare</span>
                    <input
                      id="pmi-cellulare"
                      type="tel"
                      placeholder="Es. +39 327 1234567"
                      value={cellulare}
                      onChange={(e) => setCellulare(sanitizePhoneInput(e.target.value))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.cellulare ? <p className="text-xs text-red-600">{errors.cellulare}</p> : null}
                  </label>

                  <label htmlFor="pmi-email" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Email</span>
                    <input
                      id="pmi-email"
                      type="email" required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
                  </label>

                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
                    <input
                      type="checkbox"
                      checked={consensoPrivacy}
                      onChange={(e) => setConsensoPrivacy(e.target.checked)}
                      className="mt-1 accent-brand-indigo"
                    />
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
                  {step4SubmitAttempted && errors.consensoPrivacy ? <p className="text-xs text-red-600 -mt-2">{errors.consensoPrivacy}</p> : null}

                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
                    <input
                      type="checkbox"
                      checked={consensoMarketing}
                      onChange={(e) => setConsensoMarketing(e.target.checked)}
                      className="mt-1 accent-brand-indigo"
                    />
                    <span className="text-sm text-text-secondary">Acconsento a comunicazioni marketing.</span>
                  </label>
                </>
              ) : null}

              <div className="flex flex-col gap-3 pt-2">
                {step < 4 ? (
                  <Button key="continue-button" type="button" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight} onClick={goNext}>
                    Continua
                  </Button>
                ) : (
                  <Button key="submit-button" type="submit" disabled={isSubmitting} className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>
                    {isSubmitting ? "Invio in corso..." : "Invia"}
                  </Button>
                )}
                {step > 1 ? (
                  <Button type="button" variant="link" className="!px-0" onClick={goBack}>
                    Torna allo step precedente
                  </Button>
                ) : null}
              </div>

              {submitError ? <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">{submitError}</p> : null}
            </form>
            </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

