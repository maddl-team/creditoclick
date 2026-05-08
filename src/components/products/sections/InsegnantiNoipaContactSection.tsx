"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Step = 1 | 2 | 3 | 4;
type Ruolo = "docente" | "personale_ata";
type Grado = "infanzia_primaria" | "secondaria" | "universita";
type Stato = "di_ruolo" | "supplente_annuale";
type Cedolino = "si" | "no";
type Cessioni = "si" | "no" | "non_ricordo";

function normalizePhone(raw: string) {
  const digits = raw.trim().replace(/[^\d]/g, "");
  if (digits.length === 10) return `+39${digits}`;
  if (digits.length === 12 && digits.startsWith("39")) return `+${digits}`;
  return raw;
}

export function InsegnantiNoipaContactSection() {
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [step4SubmitAttempted, setStep4SubmitAttempted] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const [ruolo, setRuolo] = React.useState<Ruolo>("docente");
  const [gradoScolastico, setGradoScolastico] = React.useState<Grado>("secondaria");
  const [statoGiuridico, setStatoGiuridico] = React.useState<Stato>("di_ruolo");
  const [cedolinoPdf, setCedolinoPdf] = React.useState<Cedolino>("si");
  const [stipendioMensile, setStipendioMensile] = React.useState(1800);
  const [cessioniAttive, setCessioniAttive] = React.useState<Cessioni>("no");
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [cellulare, setCellulare] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consensoPrivacy, setConsensoPrivacy] = React.useState(false);
  const [consensoMarketing, setConsensoMarketing] = React.useState(false);

  function validateCurrentStep() {
    const next: Record<string, string> = {};
    if (step === 2 && (!Number.isFinite(stipendioMensile) || stipendioMensile < 600)) next.stipendio = "Inserisci uno stipendio valido (minimo 600 €).";
    if (step === 4) {
      if (nome.trim().length < 2) next.nome = "Inserisci il nome.";
      if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci una email valida.";
      if (!/^\+39\d{10}$/.test(normalizePhone(cellulare).trim())) next.cellulare = "Inserisci un cellulare valido: +39 seguito da 10 cifre.";
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
          formType: "Insegnanti e Scuola (NoiPA)",
          subject: "Nuova richiesta - Insegnanti e Scuola (NoiPA)",
          fullName: `${nome.trim()} ${cognome.trim()}`.trim(),
          phone: normalizePhone(cellulare),
          email: email.trim(),
          data: {
            ruolo,
            gradoScolastico,
            statoGiuridico,
            cedolinoPdf,
            stipendioMensile: `${stipendioMensile} EUR`,
            cessioniAttive,
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
            badge="Form dedicato NoiPA"
            title="Compila il form per insegnanti e personale ATA"
            descriptionClassName="space-y-6"
            description={
              <>
                <p>Con questo percorso raccogliamo i dati essenziali di posizione lavorativa e situazione debitoria in modo ordinato.</p>
                <p>Ti richiamiamo con una valutazione coerente con il profilo NoiPA, riducendo tempi di attesa e passaggi inutili.</p>
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
                  <h3 className="text-2xl font-bold text-text-primary">Step 1: Posizione Lavorativa</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Ruolo</span><select value={ruolo} onChange={(e) => setRuolo(e.target.value as Ruolo)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="docente">Docente</option><option value="personale_ata">Personale ATA</option></select></label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Grado scolastico</span><select value={gradoScolastico} onChange={(e) => setGradoScolastico(e.target.value as Grado)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="infanzia_primaria">Infanzia/Primaria</option><option value="secondaria">Secondaria</option><option value="universita">Universita</option></select></label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Stato giuridico</span><select value={statoGiuridico} onChange={(e) => setStatoGiuridico(e.target.value as Stato)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="di_ruolo">Di ruolo</option><option value="supplente_annuale">Supplente annuale</option></select></label>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 2: Integrazione Digitale</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Disponibilita Cedolino PDF</span><select value={cedolinoPdf} onChange={(e) => setCedolinoPdf(e.target.value as Cedolino)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="si">Si</option><option value="no">No</option></select></label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Stipendio mensile</span><input type="number" min={600} value={stipendioMensile} onChange={(e) => setStipendioMensile(Math.trunc(Number(e.target.value) || 0))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{errors.stipendio && <p className="text-xs text-red-600">{errors.stipendio}</p>}</label>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 3: Situazione Debitoria</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cessioni attive</span><select value={cessioniAttive} onChange={(e) => setCessioniAttive(e.target.value as Cessioni)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="si">Si</option><option value="no">No</option><option value="non_ricordo">Non ricordo</option></select></label>
                </>
              )}
              {step === 4 && (
                <>
                  <h3 className="text-2xl font-bold text-text-primary">Step 4: Contatto</h3>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Nome</span><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.nome && <p className="text-xs text-red-600">{errors.nome}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cognome</span><input type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.cognome && <p className="text-xs text-red-600">{errors.cognome}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Cellulare</span><input type="tel" placeholder="+39XXXXXXXXXX" value={cellulare} onChange={(e) => setCellulare(normalizePhone(e.target.value))} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.cellulare && <p className="text-xs text-red-600">{errors.cellulare}</p>}</label>
                  <label className="block space-y-2"><span className="text-sm font-semibold text-text-primary">Email</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3" />{step4SubmitAttempted && errors.email && <p className="text-xs text-red-600">{errors.email}</p>}</label>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4"><input type="checkbox" checked={consensoPrivacy} onChange={(e) => setConsensoPrivacy(e.target.checked)} className="mt-1 accent-brand-indigo" /><span className="text-sm text-text-secondary">Acconsento al trattamento dati (Privacy Policy).</span></label>
                  {step4SubmitAttempted && errors.consensoPrivacy && <p className="text-xs text-red-600 -mt-2">{errors.consensoPrivacy}</p>}
                  <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4"><input type="checkbox" checked={consensoMarketing} onChange={(e) => setConsensoMarketing(e.target.checked)} className="mt-1 accent-brand-indigo" /><span className="text-sm text-text-secondary">Acconsento a comunicazioni marketing.</span></label>
                </>
              )}
              <div className="flex flex-col gap-3 pt-2">
                {step < 4 ? <Button type="button" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight} onClick={goNext}>Continua</Button> : <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>{isSubmitting ? "Invio in corso..." : "Invia"}</Button>}
                {step > 1 && <Button type="button" variant="link" className="!px-0" onClick={goBack}>Torna allo step precedente</Button>}
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

