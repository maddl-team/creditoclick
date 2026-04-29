"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Categoria = "pubblico" | "privato" | "pensionato" | "altro" | "";
type Richiesta =
  | "cessione"
  | "delega"
  | "rinnovo"
  | "consolidamento"
  | "generali"
  | "altro"
  | "";
type Fonte = "google" | "passaparola" | "social" | "altro" | "";

function normalizeWhatsApp(raw: string) {
  const digits = raw.trim().replace(/[^\d]/g, "");
  if (digits.length === 10) return `+39${digits}`;
  if (digits.length === 12 && digits.startsWith("39")) return `+${digits}`;
  return raw;
}

function isValidWhatsApp(value: string) {
  return /^\+39\d{10}$/.test(value.trim());
}

export function ContactFormSection() {
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [categoria, setCategoria] = React.useState<Categoria>("");
  const [richiesta, setRichiesta] = React.useState<Richiesta>("");
  const [situazione, setSituazione] = React.useState("");
  const [fonte, setFonte] = React.useState<Fonte>("");
  const [privacyOk, setPrivacyOk] = React.useState(false);
  const [marketingOk, setMarketingOk] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function validate() {
    const next: Record<string, string> = {};
    if (nome.trim().length < 2) next.nome = "Inserisci il nome (minimo 2 caratteri).";
    if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome (minimo 2 caratteri).";
    if (!isValidWhatsApp(normalizeWhatsApp(whatsapp))) {
      next.whatsapp = "Inserisci un numero WhatsApp valido: +39 seguito da 10 cifre.";
    }
    if (email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Inserisci un indirizzo email valido.";
    }
    if (situazione.trim().length < 10 || situazione.trim().length > 1000) {
      next.situazione = "Descrivi la situazione con almeno 10 e massimo 1.000 caratteri.";
    }
    if (!privacyOk) next.privacyOk = "Per procedere devi accettare la Privacy Policy.";
    return next;
  }

  function buildWhatsAppUrl() {
    const text = [
      "Nuovo messaggio dalla pagina Contatti",
      "",
      `Nome: ${nome.trim()}`,
      `Cognome: ${cognome.trim()}`,
      `WhatsApp: ${normalizeWhatsApp(whatsapp)}`,
      `Email: ${email.trim() || "Non indicata"}`,
      `Categoria professionale: ${categoria || "Non indicata"}`,
      `Come possiamo aiutarti: ${richiesta || "Non indicata"}`,
      `Situazione: ${situazione.trim()}`,
      `Come ci hai trovato: ${fonte || "Non indicato"}`,
      `Consenso marketing: ${marketingOk ? "Sì" : "No"}`,
    ].join("\n");
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setIsSubmitted(true);
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  return (
    <Section className="bg-white border-t border-slate-200/60">
      <div className="space-y-8">
        <SectionIntro
          badge="Modulo di Contatto"
          title="Scrivici — ti rispondiamo entro 24 ore lavorative"
          description={
            <p>
              Compila il modulo in un unico passaggio. WhatsApp resta il canale principale: l’email è facoltativa e
              ci aiuta solo come contatto di backup.
            </p>
          }
        />

        <div className="border-x border-slate-200/60 p-8 md:p-10 lg:p-12 bg-surface-subtle">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Nome</span>
                <input
                  type="text"
                  minLength={2}
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                />
                {errors.nome ? <p className="text-xs text-red-600">{errors.nome}</p> : null}
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Cognome</span>
                <input
                  type="text"
                  minLength={2}
                  required
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                />
                {errors.cognome ? <p className="text-xs text-red-600">{errors.cognome}</p> : null}
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Numero WhatsApp</span>
                <input
                  type="tel"
                  required
                  placeholder="+39XXXXXXXXXX"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(normalizeWhatsApp(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                />
                {errors.whatsapp ? <p className="text-xs text-red-600">{errors.whatsapp}</p> : null}
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Email (facoltativa)</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                />
                {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Categoria professionale (facoltativa)</span>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value as Categoria)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                >
                  <option value="">Seleziona</option>
                  <option value="Dipendente Pubblico">Dipendente Pubblico</option>
                  <option value="Dipendente Privato">Dipendente Privato</option>
                  <option value="Pensionato">Pensionato</option>
                  <option value="Altro">Altro</option>
                </select>
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Come possiamo aiutarti? (facoltativa)</span>
                <select
                  value={richiesta}
                  onChange={(e) => setRichiesta(e.target.value as Richiesta)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                >
                  <option value="">Seleziona</option>
                  <option value="Cessione del Quinto">Cessione del Quinto</option>
                  <option value="Delega di Pagamento">Delega di Pagamento</option>
                  <option value="Rinnovo Cessione del Quinto">Rinnovo Cessione del Quinto</option>
                  <option value="Consolidamento Debiti">Consolidamento Debiti</option>
                  <option value="Informazioni Generali">Informazioni Generali</option>
                  <option value="Altro">Altro</option>
                </select>
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Descrivi la tua situazione</span>
                <textarea
                  required
                  minLength={10}
                  maxLength={1000}
                  value={situazione}
                  onChange={(e) => setSituazione(e.target.value)}
                  placeholder="Descrivi brevemente la tua situazione o la domanda che vuoi farci. Non è necessario essere precisi — il consulente ti guiderà nella raccolta delle informazioni necessarie."
                  className="w-full min-h-[120px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                />
                <p className="text-xs text-slate-500">{situazione.length}/1000</p>
                {errors.situazione ? <p className="text-xs text-red-600">{errors.situazione}</p> : null}
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-text-primary">Come ci hai trovato? (facoltativa)</span>
                <select
                  value={fonte}
                  onChange={(e) => setFonte(e.target.value as Fonte)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                >
                  <option value="">Seleziona</option>
                  <option value="Google">Google</option>
                  <option value="Passaparola">Passaparola</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Altro">Altro</option>
                </select>
              </label>

              <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4 md:col-span-4">
                <input
                  type="checkbox"
                  checked={privacyOk}
                  onChange={(e) => setPrivacyOk(e.target.checked)}
                  className="mt-1 accent-brand-indigo"
                />
                <span className="text-sm text-text-secondary">
                  Ho letto e accetto la Privacy Policy ai sensi del Reg. UE 2016/679
                </span>
              </label>
              {errors.privacyOk ? <p className="text-xs text-red-600 md:col-span-4 -mt-2">{errors.privacyOk}</p> : null}

              <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4 md:col-span-4">
                <input
                  type="checkbox"
                  checked={marketingOk}
                  onChange={(e) => setMarketingOk(e.target.checked)}
                  className="mt-1 accent-brand-indigo"
                />
                <span className="text-sm text-text-secondary">
                  Acconsento a ricevere comunicazioni commerciali e aggiornamenti da CreditoClick
                </span>
              </label>

              <Button type="submit" className="w-full md:col-span-4 bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>
                Invia il messaggio
              </Button>

              {isSubmitted ? (
                <p className="text-sm text-text-secondary bg-white border border-slate-200 rounded-xl p-4 md:col-span-4">
                  Grazie <span className="font-bold text-text-primary">{nome.trim()}</span>, abbiamo ricevuto il tuo
                  messaggio. Un consulente lo leggerà e ti contatterà entro 24 ore lavorative al numero WhatsApp che
                  hai indicato.
                </p>
              ) : null}
          </form>
        </div>
      </div>
    </Section>
  );
}
