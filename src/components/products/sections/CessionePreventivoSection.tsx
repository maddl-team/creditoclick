"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Step = 1 | 2 | 3;
type Categoria = "pubblico" | "privato_grande" | "pmi" | "pensionato_inps";
type Anzianita = "lt1" | "1_3" | "3_5" | "5_10" | "gt10";
type Crif = "si" | "no" | "non_so";
type Durata = 24 | 36 | 48 | 60 | 72 | 84 | 96 | 108 | 120;
type CessioneInCorso = "si" | "no";

const DURATE: readonly Durata[] = [24, 36, 48, 60, 72, 84, 96, 108, 120];

const CATEGORY_CONFIG: Record<Categoria, { label: string; tan: number; costFactor: number }> = {
  pubblico: { label: "Dipendente Pubblico", tan: 5.9, costFactor: 0.06 },
  privato_grande: { label: "Dipendente Privato Grande Azienda", tan: 6.2, costFactor: 0.07 },
  pmi: { label: "Dipendente PMI", tan: 7.1, costFactor: 0.09 },
  pensionato_inps: { label: "Pensionato INPS", tan: 6.3, costFactor: 0.08 },
};

const ANZIANITA_LABEL: Record<Anzianita, string> = {
  lt1: "Meno di 1 anno",
  "1_3": "Da 1 a 3 anni",
  "3_5": "Da 3 a 5 anni",
  "5_10": "Da 5 a 10 anni",
  gt10: "Oltre 10 anni",
};

function pvOfAnnuity(payment: number, annualTanPct: number, months: number) {
  const r = annualTanPct / 100 / 12;
  if (r <= 0) return payment * months;
  return payment * ((1 - Math.pow(1 + r, -months)) / r);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(value);
}

function formatEURCompact(value: number) {
  return `${formatNumber(value)}€`;
}

function normalizeWhatsApp(raw: string) {
  const digits = raw.trim().replace(/[^\d]/g, "");
  if (digits.length === 10) return `+39${digits}`;
  if (digits.length === 12 && digits.startsWith("39")) return `+${digits}`;
  return raw;
}

function isValidWhatsApp(value: string) {
  return /^\+39\d{10}$/.test(value.trim());
}

export function CessionePreventivoSection() {
  const [step, setStep] = React.useState<Step>(1);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Step 1
  const [categoria, setCategoria] = React.useState<Categoria>("pubblico");
  const [datoreEnte, setDatoreEnte] = React.useState("");
  const [nettoMensile, setNettoMensile] = React.useState(1700);
  const [anzianita, setAnzianita] = React.useState<Anzianita>("1_3");
  const [crif, setCrif] = React.useState<Crif>("no");

  // Step 2
  const [importo, setImporto] = React.useState(15000);
  const [durata, setDurata] = React.useState<Durata>(84);
  const [cessioneInCorso, setCessioneInCorso] = React.useState<CessioneInCorso>("no");
  const [rataAttuale, setRataAttuale] = React.useState<number | "">("");
  const [note, setNote] = React.useState("");

  // Step 3
  const [nome, setNome] = React.useState("");
  const [cognome, setCognome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [privacyOk, setPrivacyOk] = React.useState(false);
  const [marketingOk, setMarketingOk] = React.useState(false);

  const stima = React.useMemo(() => {
    if (nettoMensile < 600) return null;
    const cfg = CATEGORY_CONFIG[categoria];
    const rataMassima = nettoMensile * 0.2;
    const lordo = pvOfAnnuity(rataMassima, cfg.tan, durata);
    const nettoStimato = lordo * (1 - cfg.costFactor);
    return {
      rataMassima: Math.round(rataMassima),
      importoStimato: Math.round(nettoStimato),
    };
  }, [nettoMensile, categoria, durata]);

  function validateStep1() {
    const next: Record<string, string> = {};
    if (!categoria) next.categoria = "Seleziona una categoria professionale.";
    if (datoreEnte.trim().length > 0 && datoreEnte.trim().length < 2) {
      next.datoreEnte = "Se compilato, inserisci almeno 2 caratteri.";
    }
    if (!Number.isInteger(nettoMensile) || nettoMensile < 600) {
      next.nettoMensile = "Inserisci un valore intero minimo di 600 €.";
    }
    if (!anzianita) next.anzianita = "Seleziona l'anzianità lavorativa.";
    if (!crif) next.crif = "Seleziona una risposta.";
    return next;
  }

  function validateStep2() {
    const next: Record<string, string> = {};
    if (importo < 3000 || importo > 75000 || importo % 1000 !== 0) {
      next.importo = "Inserisci un importo tra 3.000 € e 75.000 € (step 1.000 €).";
    }
    if (!DURATE.includes(durata)) next.durata = "Seleziona una durata valida.";
    if (!cessioneInCorso) next.cessioneInCorso = "Seleziona una risposta.";
    if (cessioneInCorso === "si" && rataAttuale !== "" && (!Number.isInteger(rataAttuale) || rataAttuale < 50)) {
      next.rataAttuale = "Se compilata, la rata deve essere un intero minimo di 50 €.";
    }
    if (note.length > 300) next.note = "Le note possono avere massimo 300 caratteri.";
    return next;
  }

  function validateStep3() {
    const next: Record<string, string> = {};
    if (nome.trim().length < 2) next.nome = "Inserisci il nome (minimo 2 caratteri).";
    if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome (minimo 2 caratteri).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci un indirizzo email valido.";
    const normalizedPhone = normalizeWhatsApp(whatsapp);
    if (!isValidWhatsApp(normalizedPhone)) next.whatsapp = "Inserisci un numero valido: +39 seguito da 10 cifre.";
    if (!privacyOk) next.privacyOk = "Per procedere devi accettare la Privacy Policy.";
    return next;
  }

  function goNext() {
    const next = step === 1 ? validateStep1() : validateStep2();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStep(step === 1 ? 2 : 3);
  }

  function buildPayload() {
    const crifTag = crif === "si" ? "CRIF_SEGNALATO" : crif === "non_so" ? "CRIF_NON_SO" : "CRIF_NO";
    return {
      profilo: {
        categoria,
        categoriaLabel: CATEGORY_CONFIG[categoria].label,
        datoreEnte: datoreEnte.trim() || null,
        nettoMensile,
        anzianita,
        anzianitaLabel: ANZIANITA_LABEL[anzianita],
        crif,
        crifTag,
      },
      richiesta: {
        importo,
        durata,
        cessioneInCorso,
        rataAttuale: cessioneInCorso === "si" ? (rataAttuale === "" ? null : rataAttuale) : null,
        note: note.trim() || null,
        stima: stima ?? null,
      },
      contatti: {
        nome: nome.trim(),
        cognome: cognome.trim(),
        email: email.trim(),
        whatsapp: normalizeWhatsApp(whatsapp),
        privacyOk,
        marketingOk,
      },
    };
  }

  function buildWhatsAppUrl() {
    const payload = buildPayload();
    const text = [
      "Nuova richiesta preventivo - Cessione del Quinto",
      "",
      "STEP 1 - Profilo",
      `Categoria: ${payload.profilo.categoriaLabel}`,
      `Datore/Ente: ${payload.profilo.datoreEnte ?? "Non indicato"}`,
      `Netto mensile: ${formatEURCompact(payload.profilo.nettoMensile)}`,
      `Anzianita: ${payload.profilo.anzianitaLabel}`,
      `CRIF/Centrale Rischi: ${payload.profilo.crif}`,
      `Tag consulente: ${payload.profilo.crifTag}`,
      "",
      "STEP 2 - Richiesta",
      `Importo desiderato: ${formatEURCompact(payload.richiesta.importo)}`,
      `Durata: ${payload.richiesta.durata} mesi`,
      `Cessione in corso: ${payload.richiesta.cessioneInCorso}`,
      `Rata attuale: ${
        payload.richiesta.rataAttuale !== null ? formatEURCompact(payload.richiesta.rataAttuale) : "Non indicata"
      }`,
      `Note: ${payload.richiesta.note ?? "Nessuna"}`,
      `Rata massima indicativa: ${payload.richiesta.stima ? formatEURCompact(payload.richiesta.stima.rataMassima) : "N/D"}/mese`,
      `Importo indicativo ottenibile: ${
        payload.richiesta.stima ? formatEURCompact(payload.richiesta.stima.importoStimato) : "N/D"
      }`,
      "",
      "STEP 3 - Contatti",
      `Nome: ${payload.contatti.nome}`,
      `Cognome: ${payload.contatti.cognome}`,
      `Email: ${payload.contatti.email}`,
      `WhatsApp: ${payload.contatti.whatsapp}`,
      `Consenso marketing: ${payload.contatti.marketingOk ? "Si" : "No"}`,
    ].join("\n");

    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  function onSubmitStep3(e: React.FormEvent) {
    e.preventDefault();
    const next = validateStep3();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setIsSubmitted(true);
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  return (
    <Section className="bg-white border-t border-slate-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
        <div className="lg:col-span-2">
          <SectionIntro
            badge="Preventivo Personalizzato"
            title="Raccontaci il tuo profilo: ti prepariamo una valutazione su misura."
            descriptionClassName="space-y-6"
            description={
              <>
                <p>
                  Questa richiesta ci aiuta a capire subito se la tua situazione e adatta a cessione del quinto standard, rinnovo o percorso con analisi dedicata.
                </p>
                <p>
                  Inserisci i dati in 3 step: il consulente riceve un quadro completo e ti risponde su WhatsApp entro 24 ore lavorative con una valutazione concreta.
                </p>
              </>
            }
          />
        </div>

        <div className="lg:col-span-2">
          <div className="h-full -my-12 md:-my-20 border-x border-slate-200/60 p-8 md:p-10 lg:p-12 bg-surface-subtle">
            <div className="flex justify-center items-center gap-2 mb-8">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={`h-1.5 w-10 rounded-full transition-all ${
                    step === idx ? "bg-brand-indigo shadow-[0_0_12px_rgba(79,70,229,0.35)]" : "bg-slate-300"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {step === 1 ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  goNext();
                }}
                className="space-y-5"
              >
                <h3 className="text-2xl font-bold text-text-primary">Richiedi il tuo preventivo personalizzato</h3>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Categoria professionale</span>
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value as Categoria)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  >
                    <option value="pubblico">Dipendente Pubblico</option>
                    <option value="privato_grande">Dipendente Privato Grande Azienda</option>
                    <option value="pmi">Dipendente PMI</option>
                    <option value="pensionato_inps">Pensionato INPS</option>
                  </select>
                  {errors.categoria ? <p className="text-xs text-red-600">{errors.categoria}</p> : null}
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Datore di lavoro o Ente di appartenenza</span>
                  <input
                    type="text"
                    value={datoreEnte}
                    onChange={(e) => setDatoreEnte(e.target.value)}
                    placeholder='es. "ASL Napoli 1", "Ministero dell’Istruzione", "Leonardo SpA"'
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  {errors.datoreEnte ? <p className="text-xs text-red-600">{errors.datoreEnte}</p> : null}
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Stipendio o Pensione netto mensile</span>
                  <input
                    type="number"
                    min={600}
                    step={1}
                    required
                    value={nettoMensile}
                    onChange={(e) => setNettoMensile(Math.trunc(Number(e.target.value) || 0))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  {errors.nettoMensile ? <p className="text-xs text-red-600">{errors.nettoMensile}</p> : null}
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Anzianità lavorativa</span>
                  <select
                    value={anzianita}
                    onChange={(e) => setAnzianita(e.target.value as Anzianita)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  >
                    <option value="lt1">Meno di 1 anno</option>
                    <option value="1_3">Da 1 a 3 anni</option>
                    <option value="3_5">Da 3 a 5 anni</option>
                    <option value="5_10">Da 5 a 10 anni</option>
                    <option value="gt10">Oltre 10 anni</option>
                  </select>
                  {errors.anzianita ? <p className="text-xs text-red-600">{errors.anzianita}</p> : null}
                </label>

                <fieldset className="space-y-2">
                  <legend className="text-sm font-semibold text-text-primary">
                    Hai segnalazioni in CRIF o Centrale Rischi?
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { value: "si", label: "Sì" },
                      { value: "no", label: "No" },
                      { value: "non_so", label: "Non so" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                        <input
                          type="radio"
                          name="crif"
                          value={opt.value}
                          checked={crif === opt.value}
                          onChange={() => setCrif(opt.value as Crif)}
                          className="accent-brand-indigo"
                        />
                        <span className="text-sm text-text-primary">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.crif ? <p className="text-xs text-red-600">{errors.crif}</p> : null}
                  {crif === "si" ? (
                    <p className="text-sm text-brand-indigo font-medium">Non preoccuparti, valutiamo ogni situazione individualmente.</p>
                  ) : null}
                </fieldset>

                <Button type="submit" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>
                  Continua
                </Button>
              </form>
            ) : null}

            {step === 2 ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  goNext();
                }}
                className="space-y-5"
              >
                <h3 className="text-2xl font-bold text-text-primary">Quanto ti serve e in quanto tempo?</h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-text-primary">Importo desiderato</span>
                    <span className="text-2xl font-bold text-text-primary">{formatEURCompact(importo)}</span>
                  </div>
                  <input
                    type="range"
                    min={3000}
                    max={75000}
                    step={1000}
                    value={importo}
                    onChange={(e) => setImporto(Number(e.target.value))}
                    className="w-full h-1.5 bg-brand-indigo/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-indigo [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-indigo [&::-moz-range-thumb]:border-none"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>3.000 €</span>
                    <span>75.000 €</span>
                  </div>
                  {errors.importo ? <p className="text-xs text-red-600">{errors.importo}</p> : null}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-text-primary">Durata preferita</span>
                    <span className="text-2xl font-bold text-text-primary">{durata} mesi</span>
                  </div>
                  <input
                    type="range"
                    min={24}
                    max={120}
                    step={12}
                    value={durata}
                    onChange={(e) => setDurata(Number(e.target.value) as Durata)}
                    className="w-full h-1.5 bg-brand-indigo/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-indigo [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-indigo [&::-moz-range-thumb]:border-none"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>24 mesi</span>
                    <span>120 mesi</span>
                  </div>
                  {errors.durata ? <p className="text-xs text-red-600">{errors.durata}</p> : null}
                </div>

                <fieldset className="space-y-2">
                  <legend className="text-sm font-semibold text-text-primary">Hai già una cessione del quinto in corso?</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: "si", label: "Sì" },
                      { value: "no", label: "No" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                        <input
                          type="radio"
                          name="cessione_in_corso"
                          value={opt.value}
                          checked={cessioneInCorso === opt.value}
                          onChange={() => setCessioneInCorso(opt.value as CessioneInCorso)}
                          className="accent-brand-indigo"
                        />
                        <span className="text-sm text-text-primary">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.cessioneInCorso ? <p className="text-xs text-red-600">{errors.cessioneInCorso}</p> : null}
                </fieldset>

                {cessioneInCorso === "si" ? (
                  <label className="block space-y-2">
                    <span className="text-sm font-semibold text-text-primary">
                      Rata mensile attuale della cessione in corso (consigliato)
                    </span>
                    <input
                      type="number"
                      min={50}
                      step={1}
                      value={rataAttuale}
                      onChange={(e) => setRataAttuale(e.target.value === "" ? "" : Math.trunc(Number(e.target.value) || 0))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                    />
                    {errors.rataAttuale ? <p className="text-xs text-red-600">{errors.rataAttuale}</p> : null}
                  </label>
                ) : null}

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Note aggiuntive</span>
                  <textarea
                    maxLength={300}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Aggiungi eventuali informazioni utili per il consulente"
                    className="w-full min-h-[100px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  <p className="text-xs text-slate-500">{note.length}/300</p>
                  {errors.note ? <p className="text-xs text-red-600">{errors.note}</p> : null}
                </label>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-text-secondary">
                    Rata massima indicativa:{" "}
                    <span className="font-bold text-text-primary">{stima ? formatEURCompact(stima.rataMassima) : "N/D"}/mese</span> — Importo
                    indicativo ottenibile:{" "}
                    <span className="font-bold text-text-primary">{stima ? formatEURCompact(stima.importoStimato) : "N/D"}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>
                    Continua
                  </Button>
                  <Button type="button" variant="link" className="!px-0" onClick={() => setStep(1)}>
                    Torna allo step precedente
                  </Button>
                </div>
              </form>
            ) : null}

            {step === 3 ? (
              <form onSubmit={onSubmitStep3} className="space-y-5">
                <h3 className="text-2xl font-bold text-text-primary">A chi mandiamo il preventivo?</h3>

                <label className="block space-y-2">
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

                <label className="block space-y-2">
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

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-text-primary">Email</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@esempio.it"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/40"
                  />
                  {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
                </label>

                <label className="block space-y-2">
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

                <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
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
                {errors.privacyOk ? <p className="text-xs text-red-600 -mt-2">{errors.privacyOk}</p> : null}

                <label className="flex items-start gap-3 rounded-xl border border-slate-300 bg-white p-4">
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

                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full bg-brand-indigo text-white hover:bg-brand-indigo/90" icon={ArrowRight}>
                    Ricevi il preventivo su WhatsApp
                  </Button>
                  <Button type="button" variant="link" className="!px-0" onClick={() => setStep(2)}>
                    Torna allo step precedente
                  </Button>
                </div>

                {isSubmitted ? (
                  <p className="text-sm text-text-secondary bg-white border border-slate-200 rounded-xl p-4">
                    Grazie <span className="font-bold text-text-primary">{nome.trim()}</span>. Il tuo consulente analizzerà il tuo profilo e ti
                    contatterà su WhatsApp entro 24 ore lavorative con un preventivo personalizzato e gratuito.
                  </p>
                ) : null}
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
