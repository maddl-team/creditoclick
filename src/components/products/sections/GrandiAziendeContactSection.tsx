"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Step = 1 | 2 | 3 | 4;
type Settore = "industria" | "terziario" | "servizi" | "altro";
type DimensioneAzienda = "oltre_200" | "50_200" | "non_so";
type TipoContratto = "indeterminato" | "determinato";
type PrestitiAttivi = "si" | "no";

const WHATSAPP_BASE = "393276625456";
const AZIENDE_SUGGERITE = [
  "Enel",
  "Poste Italiane",
  "Leonardo",
  "Ferrovie dello Stato",
  "Stellantis",
  "TIM",
  "Intesa Sanpaolo",
  "UniCredit",
] as const;

function normalizePhone(raw: string) {
  const digits = raw.trim().replace(/[^\d]/g, "");
  if (digits.length === 10) return `+39${digits}`;
  if (digits.length === 12 && digits.startsWith("39")) return `+${digits}`;
  return raw;
}

function formatEUR(value: number) {
  return `${new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(value)} €`;
}

export function GrandiAziendeContactSection() {
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [step4SubmitAttempted, setStep4SubmitAttempted] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Step 1
  const [nomeAzienda, setNomeAzienda] = React.useState("");
  const [settore, setSettore] = React.useState<Settore>("industria");
  const [numeroDipendenti, setNumeroDipendenti] = React.useState<DimensioneAzienda>("oltre_200");

  // Step 2
  const [tipoContratto, setTipoContratto] = React.useState<TipoContratto>("indeterminato");
  const [anzianitaAnni, setAnzianitaAnni] = React.useState<number>(5);
  const [stipendioNettoMensile, setStipendioNettoMensile] = React.useState<number>(2200);

  // Step 3
  const [importoDesiderato, setImportoDesiderato] = React.useState<number>(20000);
  const [prestitiAttiviBusta, setPrestitiAttiviBusta] = React.useState<PrestitiAttivi>("no");

  // Step 4
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [cellulare, setCellulare] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consensoPrivacy, setConsensoPrivacy] = React.useState(false);
  const [consensoMarketing, setConsensoMarketing] = React.useState(false);

  const stepLabel = `${step}/4`;

  function validateCurrentStep() {
    const next: Record<string, string> = {};

    if (step === 1) {
      if (nomeAzienda.trim().length < 2) next.nomeAzienda = "Inserisci il nome dell'azienda.";
      if (!settore) next.settore = "Seleziona il settore merceologico.";
      if (!numeroDipendenti) next.numeroDipendenti = "Seleziona la dimensione aziendale.";
    }

    if (step === 2) {
      if (!tipoContratto) next.tipoContratto = "Seleziona il tipo di contratto.";
      if (!Number.isFinite(anzianitaAnni) || anzianitaAnni < 0 || anzianitaAnni > 50) {
        next.anzianitaAnni = "Inserisci un valore tra 0 e 50 anni.";
      }
      if (!Number.isFinite(stipendioNettoMensile) || stipendioNettoMensile < 600) {
        next.stipendioNettoMensile = "Inserisci un valore minimo di 600 €.";
      }
    }

    if (step === 3) {
      if (!Number.isFinite(importoDesiderato) || importoDesiderato < 3000) {
        next.importoDesiderato = "Inserisci un importo indicativo minimo di 3.000 €.";
      }
      if (!prestitiAttiviBusta) next.prestitiAttiviBusta = "Seleziona una risposta.";
    }

    if (step === 4) {
      if (nome.trim().length < 2) next.nome = "Inserisci il nome.";
      if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci una email valida.";
      if (!/^\+39\d{10}$/.test(normalizePhone(cellulare).trim())) {
        next.cellulare = "Inserisci un cellulare valido: +39 seguito da 10 cifre.";
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
          formType: "Dipendenti Grandi Aziende",
          subject: "Nuova richiesta - Dipendenti Grandi Aziende",
          fullName: `${nome.trim()} ${cognome.trim()}`.trim(),
          phone: normalizePhone(cellulare),
          email: email.trim(),
          data: {
            nomeAzienda,
            settore,
            numeroDipendenti,
            tipoContratto,
            anzianitaAnni,
            stipendioNettoMensile: formatEUR(stipendioNettoMensile),
            importoDesiderato: formatEUR(importoDesiderato),
            prestitiAttiviBusta,
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
            badge="Richiesta Prioritaria Corporate"
            title="Compila il form dedicato ai dipendenti delle grandi aziende"
            descriptionClassName="space-y-6"
            description={
              <>
                <p>
                  Questo modulo e pensato per dipendenti di realta strutturate: ci permette di impostare subito una valutazione precisa, con
                  tempi rapidi e un percorso consulenziale chiaro fin dal primo contatto.
                </p>
                <p>
                  Inviando questi 4 step, il consulente riceve un quadro completo su profilo aziendale, contratto ed esigenza finanziaria, e
                  ti richiama con una proposta concreta senza passaggi inutili.
                </p>
              </>
            }
          />
        </div>

        <div className="lg:col-span-2 -my-12 md:-my-20 border-x border-slate-200/60 bg-surface-subtle flex">
          <div className="w-full flex-1 p-8 md:p-10 lg:p-12">
            <div className="mb-6">
              <p className="text-sm font-semibold text-brand-indigo">Step {stepLabel}</p>
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
                  <h3 className="text-2xl font-bold text-text-primary">Step 1: Profilo Aziendale</h3>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Nome dell'azienda</span>
                    <input
                      type="text"
                      value={nomeAzienda}
                      onChange={(e) => setNomeAzienda(e.target.value)}
                      list="aziende-suggerite"
                      placeholder='Es. "Leonardo", "Enel", "Poste Italiane"'
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    <datalist id="aziende-suggerite">
                      {AZIENDE_SUGGERITE.map((azienda) => (
                        <option key={azienda} value={azienda} />
                      ))}
                    </datalist>
                    {errors.nomeAzienda ? <p className="text-xs text-red-600">{errors.nomeAzienda}</p> : null}
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Settore merceologico</span>
                    <select
                      value={settore}
                      onChange={(e) => setSettore(e.target.value as Settore)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    >
                      <option value="industria">Industria</option>
                      <option value="terziario">Terziario</option>
                      <option value="servizi">Servizi</option>
                      <option value="altro">Altro</option>
                    </select>
                    {errors.settore ? <p className="text-xs text-red-600">{errors.settore}</p> : null}
                  </label>

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-text-primary">Numero dipendenti</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { value: "oltre_200", label: "Oltre 200" },
                        { value: "50_200", label: "50-200" },
                        { value: "non_so", label: "Non so" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                          <input
                            type="radio"
                            name="numero_dipendenti"
                            value={opt.value}
                            checked={numeroDipendenti === opt.value}
                            onChange={() => setNumeroDipendenti(opt.value as DimensioneAzienda)}
                            className="accent-brand-indigo"
                          />
                          <span className="text-sm text-text-primary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.numeroDipendenti ? <p className="text-xs text-red-600">{errors.numeroDipendenti}</p> : null}
                  </fieldset>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 2: Dati Contrattuali</h3>

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-text-primary">Tipo di contratto</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "indeterminato", label: "Indeterminato" },
                        { value: "determinato", label: "Determinato" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                          <input
                            type="radio"
                            name="tipo_contratto"
                            value={opt.value}
                            checked={tipoContratto === opt.value}
                            onChange={() => setTipoContratto(opt.value as TipoContratto)}
                            className="accent-brand-indigo"
                          />
                          <span className="text-sm text-text-primary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.tipoContratto ? <p className="text-xs text-red-600">{errors.tipoContratto}</p> : null}
                  </fieldset>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Anzianita lavorativa (anni)</span>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      step={1}
                      value={anzianitaAnni}
                      onChange={(e) => setAnzianitaAnni(Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.anzianitaAnni ? <p className="text-xs text-red-600">{errors.anzianitaAnni}</p> : null}
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Stipendio netto mensile</span>
                    <input
                      type="number"
                      min={600}
                      step={50}
                      value={stipendioNettoMensile}
                      onChange={(e) => setStipendioNettoMensile(Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.stipendioNettoMensile ? <p className="text-xs text-red-600">{errors.stipendioNettoMensile}</p> : null}
                  </label>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 3: Esigenza Finanziaria</h3>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Importo desiderato</span>
                    <input
                      type="number"
                      min={3000}
                      step={500}
                      value={importoDesiderato}
                      onChange={(e) => setImportoDesiderato(Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.importoDesiderato ? <p className="text-xs text-red-600">{errors.importoDesiderato}</p> : null}
                  </label>

                  <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-text-primary">Prestiti attivi in busta paga</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: "si", label: "Si" },
                        { value: "no", label: "No" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                          <input
                            type="radio"
                            name="prestiti_attivi"
                            value={opt.value}
                            checked={prestitiAttiviBusta === opt.value}
                            onChange={() => setPrestitiAttiviBusta(opt.value as PrestitiAttivi)}
                            className="accent-brand-indigo"
                          />
                          <span className="text-sm text-text-primary">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.prestitiAttiviBusta ? <p className="text-xs text-red-600">{errors.prestitiAttiviBusta}</p> : null}
                  </fieldset>
                </>
              ) : null}

              {step === 4 ? (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 4: Contatto Finale</h3>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Nome</span>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.nome ? <p className="text-xs text-red-600">{errors.nome}</p> : null}
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Cognome</span>
                    <input
                      type="text"
                      value={cognome}
                      onChange={(e) => setCognome(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.cognome ? <p className="text-xs text-red-600">{errors.cognome}</p> : null}
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Cellulare</span>
                    <input
                      type="tel"
                      placeholder="+39XXXXXXXXXX"
                      value={cellulare}
                      onChange={(e) => setCellulare(normalizePhone(e.target.value))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {step4SubmitAttempted && errors.cellulare ? <p className="text-xs text-red-600">{errors.cellulare}</p> : null}
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">Email</span>
                    <input
                      type="email"
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
                    <span className="text-sm text-text-secondary">Acconsento al trattamento dati (Privacy Policy).</span>
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
                  <Button type="button" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight} onClick={goNext}>
                    Continua
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90"
                    icon={ArrowRight}
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia"}
                  </Button>
                )}
                {step > 1 ? (
                  <Button type="button" variant="link" className="!px-0" onClick={goBack}>
                    Torna allo step precedente
                  </Button>
                ) : null}
              </div>

              {submitted ? (
                <p className="text-sm text-text-secondary bg-white border border-slate-200 rounded-xl p-4">
                  Grazie <span className="font-bold text-text-primary">{nome.trim()}</span>. Richiesta inviata: il consulente ti contattera
                  entro 24 ore lavorative.
                </p>
              ) : null}
              {submitError ? <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">{submitError}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

