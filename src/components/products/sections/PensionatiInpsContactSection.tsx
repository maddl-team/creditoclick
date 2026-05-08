"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Step = 1 | 2 | 3 | 4;
type Pensione = "vecchiaia_anzianita" | "reversibilita" | "invalidita";
type Cedibilita = "si" | "no";

function normalizePhone(raw: string) {
  const digits = raw.trim().replace(/[^\d]/g, "");
  if (digits.length === 10) return `+39${digits}`;
  if (digits.length === 12 && digits.startsWith("39")) return `+${digits}`;
  return raw;
}

function isUnder85(dateOfBirth: string) {
  if (!dateOfBirth) return false;
  const today = new Date();
  const birth = new Date(dateOfBirth);
  if (Number.isNaN(birth.getTime())) return false;
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age -= 1;
  return age <= 85;
}

export function PensionatiInpsContactSection() {
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [step4SubmitAttempted, setStep4SubmitAttempted] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [dataNascita, setDataNascita] = React.useState("");
  const [importoNetto, setImportoNetto] = React.useState(1200);
  const [tipologiaPensione, setTipologiaPensione] = React.useState<Pensione>("vecchiaia_anzianita");
  const [comunicazioneCedibilita, setComunicazioneCedibilita] = React.useState<Cedibilita>("si");
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [cellulare, setCellulare] = React.useState("");
  const [telefonoFisso, setTelefonoFisso] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consensoPrivacy, setConsensoPrivacy] = React.useState(false);
  const [consensoMarketing, setConsensoMarketing] = React.useState(false);

  function validateStep() {
    const next: Record<string, string> = {};
    if (step === 1 && !isUnder85(dataNascita)) next.dataNascita = "Verifica la data di nascita: il limite operativo e 85 anni.";
    if (step === 2 && (!Number.isFinite(importoNetto) || importoNetto < 500)) next.importo = "Inserisci un importo pensione valido (minimo 500 €).";
    if (step === 4) {
      if (nome.trim().length < 2) next.nome = "Inserisci il nome.";
      if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci una email valida.";
      if (!/^\+39\d{10}$/.test(normalizePhone(cellulare).trim())) next.cellulare = "Inserisci un cellulare valido: +39 seguito da 10 cifre.";
      if (telefonoFisso.trim().length > 0 && !/^\+39\d{8,11}$/.test(normalizePhone(telefonoFisso).trim())) next.fisso = "Inserisci un numero fisso valido con prefisso +39.";
      if (!consensoPrivacy) next.consensoPrivacy = "Per proseguire devi accettare la Privacy Policy.";
    }
    return next;
  }

  function nextStep() {
    const next = validateStep();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStep((s) => Math.min(4, s + 1) as Step);
    if (step === 3) {
      setErrors({});
      setStep4SubmitAttempted(false);
    }
  }

  function previousStep() {
    setStep((s) => Math.max(1, s - 1) as Step);
    setErrors({});
    if (step === 4) setStep4SubmitAttempted(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep4SubmitAttempted(true);
    const next = validateStep();
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
          formType: "Pensionati INPS",
          subject: "Nuova richiesta - Pensionati INPS",
          fullName: `${nome.trim()} ${cognome.trim()}`.trim(),
          phone: normalizePhone(cellulare),
          email: email.trim(),
          data: {
            dataNascita,
            importoNetto: `${importoNetto} EUR`,
            tipologiaPensione,
            comunicazioneCedibilita,
            telefonoFisso: telefonoFisso ? normalizePhone(telefonoFisso) : "Non indicato",
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
            badge="Assistenza Pensionati INPS"
            title="Compila il form dedicato ai pensionati"
            descriptionClassName="space-y-6"
            description={
              <>
                <p>La scheda ci permette di verificare subito i requisiti principali, inclusa l'eta anagrafica e la documentazione disponibile.</p>
                <p>Riceverai un riscontro mirato su fattibilita e prossimi passaggi, con un contatto rapido ai recapiti che preferisci.</p>
              </>
            }
          />
        </div>
        <div className="lg:col-span-2 -my-12 md:-my-20 border-x border-slate-200/60 bg-surface-subtle flex">
          <div className="w-full flex-1 p-8 md:p-10 lg:p-12">
            <div className="mb-6"><p className="text-sm font-semibold text-brand-indigo">Step {step}/4</p></div>
            <form onSubmit={step === 4 ? onSubmit : (e) => e.preventDefault()} className="space-y-5">
              {step === 1 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 1: Verifica Eta</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Data di nascita</span><input type="date" value={dataNascita} onChange={(e) => setDataNascita(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{errors.dataNascita && <p className="text-xs text-red-600">{errors.dataNascita}</p>}</label>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 2: Dettagli Pensione</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Importo netto pensione</span><input type="number" min={500} value={importoNetto} onChange={(e) => setImportoNetto(Math.trunc(Number(e.target.value) || 0))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{errors.importo && <p className="text-xs text-red-600">{errors.importo}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Tipologia pensione</span><select value={tipologiaPensione} onChange={(e) => setTipologiaPensione(e.target.value as Pensione)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="vecchiaia_anzianita">Vecchiaia/Anzianita</option><option value="reversibilita">Reversibilita</option><option value="invalidita">Invalidita</option></select></label>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 3: Documentazione</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Comunicazione di Cedibilita</span><select value={comunicazioneCedibilita} onChange={(e) => setComunicazioneCedibilita(e.target.value as Cedibilita)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="si">Gia in possesso: Si</option><option value="no">Gia in possesso: No</option></select></label>
                </>
              )}
              {step === 4 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 4: Contatto</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Nome</span><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.nome && <p className="text-xs text-red-600">{errors.nome}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cognome</span><input type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.cognome && <p className="text-xs text-red-600">{errors.cognome}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cellulare</span><input type="tel" placeholder="+39XXXXXXXXXX" value={cellulare} onChange={(e) => setCellulare(normalizePhone(e.target.value))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.cellulare && <p className="text-xs text-red-600">{errors.cellulare}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Telefono fisso</span><input type="tel" placeholder="+390836311982" value={telefonoFisso} onChange={(e) => setTelefonoFisso(normalizePhone(e.target.value))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.fisso && <p className="text-xs text-red-600">{errors.fisso}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Email</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.email && <p className="text-xs text-red-600">{errors.email}</p>}</label>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4"><input type="checkbox" checked={consensoPrivacy} onChange={(e) => setConsensoPrivacy(e.target.checked)} className="mt-1 accent-brand-indigo" /><span className="text-sm text-text-secondary">Acconsento al trattamento dati (Privacy Policy).</span></label>
                  {step4SubmitAttempted && errors.consensoPrivacy && <p className="text-xs text-red-600 -mt-2">{errors.consensoPrivacy}</p>}
                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4"><input type="checkbox" checked={consensoMarketing} onChange={(e) => setConsensoMarketing(e.target.checked)} className="mt-1 accent-brand-indigo" /><span className="text-sm text-text-secondary">Acconsento a comunicazioni marketing.</span></label>
                </>
              )}
              <div className="flex flex-col gap-3 pt-2">
                {step < 4 ? <Button key="continue-button" type="button" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight} onClick={nextStep}>Continua</Button> : <Button key="submit-button" type="submit" disabled={isSubmitting} className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>{isSubmitting ? "Invio in corso..." : "Invia"}</Button>}
                {step > 1 && <Button type="button" variant="link" className="!px-0" onClick={previousStep}>Torna allo step precedente</Button>}
              </div>
              {submitted && <p className="text-sm text-text-secondary bg-white border border-slate-200 rounded-xl p-4">Grazie <span className="font-bold text-text-primary">{nome.trim()}</span>. Richiesta inviata: il consulente ti contattera entro 24 ore lavorative.</p>}
              {submitError && <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4">{submitError}</p>}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

