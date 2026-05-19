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

type Step = 1 | 2 | 3;
type Mensilita = "13" | "14";
type CategoriaProfessionale =
  | "dipendente_statale"
  | "dipendente_pubblico"
  | "dipendente_privato_grandi_aziende"
  | "dipendente_privato_pmi"
  | "pensionato";
type DurataMesi = "24" | "36" | "48" | "60" | "72" | "84" | "96" | "108" | "120";
type AnzianitaLavorativa = "meno_2" | "2_5" | "oltre_5";
type Trattenute = "si" | "no";
type OrarioContatto = "mattina" | "pomeriggio" | "sera" | "";

function categoriaLabel(value: CategoriaProfessionale) {
  switch (value) {
    case "dipendente_statale":
      return "Dipendente Statale";
    case "dipendente_pubblico":
      return "Dipendente Pubblico";
    case "dipendente_privato_grandi_aziende":
      return "Dipendente Privato Grandi Aziende";
    case "dipendente_privato_pmi":
      return "Dipendente Privato PMI";
    case "pensionato":
      return "Pensionato";
  }
}

function anzianitaLabel(value: AnzianitaLavorativa) {
  switch (value) {
    case "meno_2":
      return "Meno di 2 anni";
    case "2_5":
      return "2-5 anni";
    case "oltre_5":
      return "Oltre 5 anni";
  }
}

function orarioLabel(value: OrarioContatto) {
  switch (value) {
    case "mattina":
      return "Mattina";
    case "pomeriggio":
      return "Pomeriggio";
    case "sera":
      return "Sera";
    default:
      return "Non indicato";
  }
}

export function CalcoloRataLeadFormSection() {
  const pathname = usePathname();
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [step3SubmitAttempted, setStep3SubmitAttempted] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Step 1
  const [redditoNettoMensile, setRedditoNettoMensile] = React.useState<number>(1800);
  const [mensilita, setMensilita] = React.useState<Mensilita>("13");
  const [categoriaProfessionale, setCategoriaProfessionale] = React.useState<CategoriaProfessionale>("dipendente_pubblico");
  const [durataDesiderata, setDurataDesiderata] = React.useState<DurataMesi>("120");
  const [dataNascita, setDataNascita] = React.useState("");

  // Step 2
  const [nomeAziendaEnte, setNomeAziendaEnte] = React.useState("");
  const [anzianitaLavorativa, setAnzianitaLavorativa] = React.useState<AnzianitaLavorativa>("2_5");
  const [presenzaTrattenute, setPresenzaTrattenute] = React.useState<Trattenute>("no");

  // Step 3
  const [nomeCognome, setNomeCognome] = React.useState("");
  const [cellulare, setCellulare] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [orarioContatto, setOrarioContatto] = React.useState<OrarioContatto>("");
  const [consensoPrivacy, setConsensoPrivacy] = React.useState(false);
  const [consensoMarketing, setConsensoMarketing] = React.useState(false);

  function validateCurrentStep() {
    const next: Record<string, string> = {};

    if (step === 1) {
      if (!Number.isFinite(redditoNettoMensile) || redditoNettoMensile < 500) {
        next.redditoNettoMensile = "Inserisci un reddito netto mensile valido (minimo 500 €).";
      }
      if (!mensilita) next.mensilita = "Seleziona il numero di mensilita.";
      if (!categoriaProfessionale) next.categoriaProfessionale = "Seleziona la categoria professionale.";
      if (!durataDesiderata) next.durataDesiderata = "Seleziona la durata desiderata.";
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dataNascita)) {
        next.dataNascita = "Inserisci una data di nascita valida.";
      }
    }

    if (step === 2) {
      if (nomeAziendaEnte.trim().length < 2) {
        next.nomeAziendaEnte = "Inserisci il nome dell'azienda o ente pensionistico.";
      }
      if (!anzianitaLavorativa) next.anzianitaLavorativa = "Seleziona l'anzianita lavorativa.";
      if (!presenzaTrattenute) next.presenzaTrattenute = "Seleziona se hai altre trattenute.";
    }

    if (step === 3) {
      if (nomeCognome.trim().length < 3) next.nomeCognome = "Inserisci nome e cognome.";
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
    setStep((prev) => Math.min(3, prev + 1) as Step);
    if (step === 2) {
      setErrors({});
      setStep3SubmitAttempted(false);
    }
  }

  function goBack() {
    setStep((prev) => Math.max(1, prev - 1) as Step);
    setErrors({});
    if (step === 3) setStep3SubmitAttempted(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep3SubmitAttempted(true);
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
          formType: "Calcolo rata cessione quinto",
          sourcePage: pathname,
          subject: "Nuova richiesta - Calcolo rata cessione quinto",
          fullName: nomeCognome.trim(),
          phone: formatPhoneForSubmit(cellulare),
          email: email.trim(),
          data: {
            redditoNettoMensile: `${new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(redditoNettoMensile)} €`,
            numeroMensilita: mensilita,
            categoriaProfessionale: categoriaLabel(categoriaProfessionale),
            durataDesiderataMesi: durataDesiderata,
            dataNascita,
            nomeAziendaEntePensionistico: nomeAziendaEnte.trim(),
            anzianitaLavorativa: anzianitaLabel(anzianitaLavorativa),
            presenzaAltreTrattenute: presenzaTrattenute === "si" ? "Si" : "No",
            orarioPreferitoContatto: orarioLabel(orarioContatto),
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
          formSource: "Calcolo rata cessione quinto",
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
    <Section id="calcolatore" className="bg-white border-t border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-stretch">
        <div className="lg:col-span-2">
          <SectionIntro
            badge="Valutazione personalizzata"
            title="Compila il form per una stima reale della tua cessione del quinto"
            descriptionClassName="space-y-6"
            description={
              <>
                <p>
                  Questa sezione sostituisce il calcolo istantaneo: raccogliamo i dati che incidono davvero su fattibilita, rata sostenibile e
                  condizioni applicabili al tuo profilo.
                </p>
                <p>
                  Inviando i 3 step, il consulente riceve tutte le variabili necessarie per impostare una valutazione accurata e ricontattarti con
                  una proposta concreta, senza simulazioni generiche.
                </p>
              </>
            }
          />
        </div>

        <div className="lg:col-span-2 -my-12 md:-my-20 border-x border-slate-200/60 bg-surface-subtle flex">
          <div className="w-full flex-1 p-8 md:p-10 lg:p-12">
            {submitted ? (
              <ContactFormSuccessPanel firstName={nomeCognome} />
            ) : (
            <>

            <div className="mb-6">
              <p className="text-sm font-semibold text-brand-indigo">Step {step}/3</p>
              <div className="mt-2 flex items-center gap-2">
                {[1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 w-10 rounded-full transition-all ${
                      step >= idx ? "bg-brand-indigo shadow-[0_0_12px_rgba(79,70,229,0.35)]" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={step === 3 ? onSubmit : (e) => e.preventDefault()} className="space-y-5">
              {step === 1 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 1: Profilo Finanziario</h3>

                  <label htmlFor="crlq-reddito-netto" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Reddito netto mensile</span>
                    <input
                      id="crlq-reddito-netto"
                      type="number"
                      min={500}
                      step={50}
                      value={redditoNettoMensile}
                      onChange={(e) => setRedditoNettoMensile(Math.trunc(Number(e.target.value) || 0))}
                      placeholder="Inserisci il tuo stipendio o pensione netta"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.redditoNettoMensile ? <p className="text-xs text-red-600">{errors.redditoNettoMensile}</p> : null}
                  </label>

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-text-primary">Numero di mensilita</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "13", label: "13 mensilita" },
                        { value: "14", label: "14 mensilita" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                          <input
                            type="radio"
                            name="mensilita"
                            value={opt.value}
                            checked={mensilita === opt.value}
                            onChange={() => setMensilita(opt.value as Mensilita)}
                            className="accent-brand-indigo"
                          />
                          <span className="text-sm text-text-primary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.mensilita ? <p className="text-xs text-red-600">{errors.mensilita}</p> : null}
                  </fieldset>

                  <label htmlFor="crlq-categoria-prof" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Categoria professionale</span>
                    <select
                      id="crlq-categoria-prof"
                      value={categoriaProfessionale}
                      onChange={(e) => setCategoriaProfessionale(e.target.value as CategoriaProfessionale)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="dipendente_statale">Dipendente Statale</option>
                      <option value="dipendente_pubblico">Dipendente Pubblico</option>
                      <option value="dipendente_privato_grandi_aziende">Dipendente Privato Grandi Aziende</option>
                      <option value="dipendente_privato_pmi">Dipendente Privato PMI</option>
                      <option value="pensionato">Pensionato</option>
                    </select>
                    {errors.categoriaProfessionale ? <p className="text-xs text-red-600">{errors.categoriaProfessionale}</p> : null}
                  </label>

                  <label htmlFor="crlq-durata" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Durata desiderata</span>
                    <select
                      id="crlq-durata"
                      value={durataDesiderata}
                      onChange={(e) => setDurataDesiderata(e.target.value as DurataMesi)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      {["24", "36", "48", "60", "72", "84", "96", "108", "120"].map((months) => (
                        <option key={months} value={months}>
                          {months} mesi
                        </option>
                      ))}
                    </select>
                    {errors.durataDesiderata ? <p className="text-xs text-red-600">{errors.durataDesiderata}</p> : null}
                  </label>

                  <label htmlFor="crlq-data-nascita" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Data di nascita</span>
                    <input
                      id="crlq-data-nascita"
                      type="date"
                      value={dataNascita}
                      onChange={(e) => setDataNascita(e.target.value)}
                      className="block w-full min-w-0 max-w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.dataNascita ? <p className="text-xs text-red-600">{errors.dataNascita}</p> : null}
                  </label>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 2: Dati di Qualificazione</h3>

                  <label htmlFor="crlq-nome-azienda-ente" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Nome azienda o ente pensionistico</span>
                    <input
                      id="crlq-nome-azienda-ente"
                      type="text"
                      value={nomeAziendaEnte}
                      onChange={(e) => setNomeAziendaEnte(e.target.value)}
                      placeholder={"Es. \"Ministero dell'Istruzione\", \"INPS\", \"Leonardo SpA\""}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.nomeAziendaEnte ? <p className="text-xs text-red-600">{errors.nomeAziendaEnte}</p> : null}
                  </label>

                  <label htmlFor="crlq-anzianita" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Anzianita lavorativa (se dipendente)</span>
                    <select
                      id="crlq-anzianita"
                      value={anzianitaLavorativa}
                      onChange={(e) => setAnzianitaLavorativa(e.target.value as AnzianitaLavorativa)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="meno_2">Meno di 2 anni</option>
                      <option value="2_5">2-5 anni</option>
                      <option value="oltre_5">Oltre 5 anni</option>
                    </select>
                    {errors.anzianitaLavorativa ? <p className="text-xs text-red-600">{errors.anzianitaLavorativa}</p> : null}
                  </label>

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-text-primary">Presenza di altre trattenute in busta paga</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "si", label: "Si" },
                        { value: "no", label: "No" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                          <input
                            type="radio"
                            name="trattenute"
                            value={opt.value}
                            checked={presenzaTrattenute === opt.value}
                            onChange={() => setPresenzaTrattenute(opt.value as Trattenute)}
                            className="accent-brand-indigo"
                          />
                          <span className="text-sm text-text-primary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.presenzaTrattenute ? <p className="text-xs text-red-600">{errors.presenzaTrattenute}</p> : null}
                  </fieldset>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 3: Dati di Contatto</h3>

                  <label htmlFor="crlq-nome-cognome" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Nome e cognome</span>
                    <input
                      id="crlq-nome-cognome"
                      type="text"
                      value={nomeCognome}
                      onChange={(e) => setNomeCognome(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step3SubmitAttempted && errors.nomeCognome ? <p className="text-xs text-red-600">{errors.nomeCognome}</p> : null}
                  </label>

                  <label htmlFor="crlq-cellulare" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Numero di cellulare</span>
                    <input
                      id="crlq-cellulare"
                      type="tel"
                      placeholder="Es. +39 327 1234567"
                      value={cellulare}
                      onChange={(e) => setCellulare(sanitizePhoneInput(e.target.value))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step3SubmitAttempted && errors.cellulare ? <p className="text-xs text-red-600">{errors.cellulare}</p> : null}
                  </label>

                  <label htmlFor="crlq-email" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Email</span>
                    <input
                      id="crlq-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step3SubmitAttempted && errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
                  </label>

                  <label htmlFor="crlq-orario-contatto" className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Orario preferito per il contatto (opzionale)</span>
                    <select
                      id="crlq-orario-contatto"
                      value={orarioContatto}
                      onChange={(e) => setOrarioContatto(e.target.value as OrarioContatto)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="">Seleziona (opzionale)</option>
                      <option value="mattina">Mattina</option>
                      <option value="pomeriggio">Pomeriggio</option>
                      <option value="sera">Sera</option>
                    </select>
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
                  {step3SubmitAttempted && errors.consensoPrivacy ? <p className="text-xs text-red-600 -mt-2">{errors.consensoPrivacy}</p> : null}

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
                {step < 3 ? (
                  <Button key="continue-button" type="button" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight} onClick={goNext}>
                    Continua
                  </Button>
                ) : (
                  <Button
                    key="submit-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90"
                    icon={ArrowRight}
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
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

