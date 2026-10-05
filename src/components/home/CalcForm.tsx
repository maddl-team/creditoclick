"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Upload } from "lucide-react";
import { getLastAdUserDataConsent, pushContactLeadEvent } from "@/lib/analytics/dataLayer";
import { IUBENDA_PRIVACY_POLICY_URL } from "@/config/iubenda";
import {
  formatPhoneForSubmit,
  isValidPhone,
  PHONE_VALIDATION_MESSAGE,
  sanitizePhoneInput,
} from "@/lib/contact/phone";
import {
    formatRedditoDimostrabileForSubmit,
    RedditoDimostrabileField,
    REDDITO_DIMOSTRABILE_VALIDATION_MESSAGE,
    type RedditoDimostrabile,
} from "@/components/contact/RedditoDimostrabileField";
import { Button } from "../ui/Button";
import { ContactFormSuccessPanel } from "../ui/ContactFormSuccessPanel";

const MAX_DOCUMENTO_BYTES = 5 * 1024 * 1024;
const ALLOWED_DOCUMENTO_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"] as const;
const ALLOWED_DOCUMENTO_MIME = new Set([
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function hasAllowedDocumentoExtension(filename: string) {
    const lower = filename.toLowerCase();
    return ALLOWED_DOCUMENTO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function isAllowedDocumentoFile(file: File) {
    if (!hasAllowedDocumentoExtension(file.name)) return false;
    if (file.type && !ALLOWED_DOCUMENTO_MIME.has(file.type)) return false;
    return true;
}

export function CalcForm() {
    const pathname = usePathname();
    type Step = 1 | 2;
    type ProfessionCategory = "pubblico" | "privato" | "pensionato" | "altro";
    type DurationMonths = 24 | 36 | 48 | 60 | 72 | 84 | 96 | 108 | 120;

    const CATEGORY_CONFIG: Record<ProfessionCategory, { taeg: number; tan: number; costFactor: number }> = {
        pubblico: { taeg: 6.8, tan: 5.9, costFactor: 0.06 },
        pensionato: { taeg: 7.4, tan: 6.3, costFactor: 0.08 },
        // Dipendente Privato non distingue PMI/grandi aziende: usiamo la stima "grandi aziende".
        privato: { taeg: 7.2, tan: 6.2, costFactor: 0.07 },
        // Stima conservativa per profili non standard.
        altro: { taeg: 7.4, tan: 6.4, costFactor: 0.09 },
    };

    const DURATIONS: readonly DurationMonths[] = [24, 36, 48, 60, 72, 84, 96, 108, 120];

    /** Formattazione deterministica (SSR Node e browser devono coincidere). */
    const formatNumber = (val: number) => {
        const s = String(Math.round(Math.abs(val)));
        const grouped = s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return val < 0 ? `-${grouped}` : grouped;
    };
    const formatEURCompact = (val: number) => `${formatNumber(val)}€`;

    function pvOfAnnuity(payment: number, annualTanPct: number, months: number) {
        const r = annualTanPct / 100 / 12;
        if (r <= 0) return payment * months;
        return payment * ((1 - Math.pow(1 + r, -months)) / r);
    }

    function computeStima(netMonthly: number, category: ProfessionCategory, durationMonths: DurationMonths) {
        const cfg = CATEGORY_CONFIG[category];
        const monthlyRate = netMonthly * 0.2;
        const grossAmount = pvOfAnnuity(monthlyRate, cfg.tan, durationMonths);
        const netAmount = grossAmount * (1 - cfg.costFactor);
        return { monthlyRate, netAmount };
    }

    const [step, setStep] = React.useState<Step>(1);

    // Step 1 — La tua esigenza
    const [importoDesiderato, setImportoDesiderato] = React.useState<number>(15000);
    const [numRate, setNumRate] = React.useState<DurationMonths>(48);
    const [categoria, setCategoria] = React.useState<ProfessionCategory>("pubblico");
    const [stipendioNetto, setStipendioNetto] = React.useState<number>(1700);

    // Step 2 — I tuoi contatti
    const [nome, setNome] = React.useState<string>("");
    const [cognome, setCognome] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [whatsApp, setWhatsApp] = React.useState<string>("");
    const [redditoDimostrabile, setRedditoDimostrabile] = React.useState<RedditoDimostrabile>("");
    const [documentoReddito, setDocumentoReddito] = React.useState<File | null>(null);
    const [privacyOk, setPrivacyOk] = React.useState<boolean>(false);
    const [marketingOk, setMarketingOk] = React.useState<boolean>(false);

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
    const [submitError, setSubmitError] = React.useState<string | null>(null);
    const documentoInputRef = React.useRef<HTMLInputElement>(null);

    const stima = stipendioNetto >= 600 ? computeStima(stipendioNetto, categoria, numRate) : null;

    const professionLabel: Record<ProfessionCategory, string> = {
        pubblico: "Dipendente Pubblico",
        privato: "Dipendente Privato",
        pensionato: "Pensionato",
        altro: "Altro",
    };

    function validateStep1() {
        const next: Record<string, string> = {};

        if (importoDesiderato < 3000 || importoDesiderato > 75000) {
            next.importoDesiderato = "Inserisci un importo tra 3.000 € e 75.000 €.";
        } else if (importoDesiderato % 1000 !== 0) {
            next.importoDesiderato = "L'importo deve rispettare lo step di 1.000 €.";
        }

        if (!DURATIONS.includes(numRate)) next.numRate = "Seleziona un numero di rate valido.";

        if (!categoria) next.categoria = "Seleziona una categoria professionale.";

        if (!Number.isFinite(stipendioNetto) || stipendioNetto < 600) {
            next.stipendioNetto = "Inserisci uno stipendio/pensione netto mensile minimo di 600 €.";
        } else if (!Number.isInteger(stipendioNetto)) {
            next.stipendioNetto = "Inserisci un valore intero (senza decimali).";
        }

        return next;
    }

    function validateStep2() {
        const next: Record<string, string> = {};

        if (nome.trim().length < 2) next.nome = "Inserisci il nome (minimo 2 caratteri).";
        if (cognome.trim().length < 2) next.cognome = "Inserisci il cognome (minimo 2 caratteri).";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Inserisci un indirizzo email valido.";

        if (!isValidPhone(whatsApp)) next.whatsApp = PHONE_VALIDATION_MESSAGE;

        if (redditoDimostrabile !== "si" && redditoDimostrabile !== "no") {
            next.redditoDimostrabile = REDDITO_DIMOSTRABILE_VALIDATION_MESSAGE;
        }

        if (documentoReddito) {
            if (!isAllowedDocumentoFile(documentoReddito)) {
                next.documentoReddito = "Formato non valido. Usa PDF, JPG, PNG, DOC o DOCX.";
            } else if (documentoReddito.size > MAX_DOCUMENTO_BYTES) {
                next.documentoReddito = "Il file supera i 5MB. Riduci le dimensioni e riprova.";
            }
        }

        if (!privacyOk) next.privacyOk = "Per procedere devi accettare la Privacy Policy.";

        return next;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrors({});

        if (step === 1) {
            const next = validateStep1();
            if (Object.keys(next).length > 0) {
                setErrors(next);
                return;
            }
            setStep(2);
            setIsSubmitted(false);
            return;
        }

        const next = validateStep2();
        if (Object.keys(next).length > 0) {
            setErrors(next);
            return;
        }

        if (!stima) return;
        if (redditoDimostrabile !== "si" && redditoDimostrabile !== "no") return;

        const normalizedPhone = formatPhoneForSubmit(whatsApp);
        const maxAmount = Math.round(stima.netAmount);
        const approxMonthlyRate = Math.round(stima.monthlyRate);
        setIsSubmitting(true);
        setSubmitError(null);
        setIsSubmitted(false);
        try {
            const data = {
                categoria: professionLabel[categoria],
                importoDesiderato: formatEURCompact(importoDesiderato),
                numeroRate: `${numRate} mesi`,
                stipendioNetto: formatEURCompact(stipendioNetto),
                importoStimato: formatEURCompact(maxAmount),
                rataStimata: `${formatEURCompact(approxMonthlyRate)}/mese`,
                redditoDimostrabile: formatRedditoDimostrabileForSubmit(redditoDimostrabile),
                consensoPrivacy: privacyOk ? "Si" : "No",
                consensoMarketing: marketingOk ? "Si" : "No",
            };

            let response: Response;
            if (documentoReddito) {
                const body = new FormData();
                body.append("formType", "Calcolo rata homepage");
                body.append("sourcePage", pathname);
                body.append("subject", "Nuova richiesta da calcolatore homepage");
                body.append("fullName", `${nome.trim()} ${cognome.trim()}`.trim());
                body.append("phone", normalizedPhone);
                body.append("email", email.trim());
                body.append("data", JSON.stringify(data));
                body.append("documentoReddito", documentoReddito, documentoReddito.name);
                response = await fetch("/api/contact", {
                    method: "POST",
                    body,
                });
            } else {
                response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        formType: "Calcolo rata homepage",
                        sourcePage: pathname,
                        subject: "Nuova richiesta da calcolatore homepage",
                        fullName: `${nome.trim()} ${cognome.trim()}`.trim(),
                        phone: normalizedPhone,
                        email: email.trim(),
                        data,
                    }),
                });
            }
            const result = (await response.json()) as { ok?: boolean; error?: string };
            if (!response.ok || !result.ok) {
                setSubmitError(result.error ?? "Invio non riuscito. Riprova tra poco.");
                return;
            }
            pushContactLeadEvent(
                {
                    formSource: "Calcolo rata homepage",
                    email: email.trim(),
                    phone: normalizedPhone,
                },
                { includeUserDataForAds: getLastAdUserDataConsent() },
            );
            setIsSubmitted(true);
        } catch {
            setSubmitError("Errore di rete. Controlla la connessione e riprova.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="relative h-full">
            <div className="h-full border-x border-slate-200/60 p-8 md:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center bg-surface-subtle">
                {isSubmitted ? (
                    <ContactFormSuccessPanel firstName={nome} />
                ) : (
                <>
                {/* Step indicator */}
                <div className="flex justify-center items-center gap-2 mb-8">
                    <div
                        className={`h-1.5 w-12 rounded-full transition-all ${step === 1 ? "bg-brand-indigo shadow-[0_0_12px_rgba(79,70,229,0.35)]" : "bg-slate-300"
                            }`}
                        aria-hidden="true"
                    />
                    <div
                        className={`h-1.5 w-12 rounded-full transition-all ${step === 2 ? "bg-brand-indigo shadow-[0_0_12px_rgba(79,70,229,0.35)]" : "bg-slate-300"
                            }`}
                        aria-hidden="true"
                    />
                </div>

                <h3 className="text-3xl font-bold text-text-primary text-center mb-10 tracking-tight">
                    {step === 1 ? "Calcola subito quanto puoi ottenere" : "Ricevi il preventivo gratuito su WhatsApp"}
                </h3>

                {step === 1 ? (
                    <form onSubmit={onSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-between items-end gap-4">
                                <label htmlFor="home-calc-importo-range" className="text-base text-text-primary font-medium cursor-pointer">
                                    Importo desiderato
                                </label>
                                <span className="text-3xl font-bold text-text-primary tracking-tight" aria-hidden="true">
                                    {formatEURCompact(importoDesiderato)}
                                </span>
                            </div>
                            <input
                                id="home-calc-importo-range"
                                type="range"
                                min={3000}
                                max={75000}
                                step={1000}
                                value={importoDesiderato}
                                onChange={(e) => setImportoDesiderato(Number(e.target.value))}
                                aria-valuemin={3000}
                                aria-valuemax={75000}
                                aria-valuenow={importoDesiderato}
                                aria-valuetext={formatEURCompact(importoDesiderato)}
                                className="w-full h-1.5 bg-brand-cyan rounded-lg appearance-none cursor-pointer transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none"
                            />
                            <div className="flex justify-between text-xs uppercase tracking-widest text-slate-500 font-bold">
                                <span>3.000 €</span>
                                <span>75.000 €</span>
                            </div>
                            {errors.importoDesiderato ? <p className="text-sm text-red-200">{errors.importoDesiderato}</p> : null}
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-end gap-4">
                                <label htmlFor="home-calc-num-rate-range" className="text-base text-text-primary font-medium cursor-pointer">
                                    Numero di rate
                                </label>
                                <span className="text-3xl font-bold text-text-primary tracking-tight" aria-hidden="true">
                                    {numRate} mesi
                                </span>
                            </div>
                            <input
                                id="home-calc-num-rate-range"
                                type="range"
                                min={24}
                                max={120}
                                step={12}
                                value={numRate}
                                onChange={(e) => setNumRate(Number(e.target.value) as DurationMonths)}
                                aria-valuemin={24}
                                aria-valuemax={120}
                                aria-valuenow={numRate}
                                aria-valuetext={`${numRate} mesi`}
                                className="w-full h-1.5 bg-brand-cyan rounded-lg appearance-none cursor-pointer transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none"
                            />
                            <div className="flex justify-between text-xs uppercase tracking-widest text-slate-500 font-bold">
                                <span>24</span>
                                <span>120</span>
                            </div>
                            {errors.numRate ? <p className="text-sm text-red-200">{errors.numRate}</p> : null}
                        </div>

                        <div className="space-y-4">
                            <label htmlFor="home-calc-categoria" className="block text-base text-text-primary font-medium cursor-pointer">
                                Categoria professionale
                            </label>
                            <select
                                id="home-calc-categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value as ProfessionCategory)}
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/50"
                            >
                                <option value="pubblico">Dipendente Pubblico</option>
                                <option value="privato">Dipendente Privato</option>
                                <option value="pensionato">Pensionato</option>
                                <option value="altro">Altro</option>
                            </select>
                            {errors.categoria ? <p className="text-sm text-red-200">{errors.categoria}</p> : null}
                        </div>

                        <div className="space-y-4">
                            <label htmlFor="home-calc-stipendio-netto" className="block text-base text-text-primary font-medium cursor-pointer">
                                Stipendio o Pensione netto mensile
                            </label>
                            <input
                                id="home-calc-stipendio-netto"
                                type="number"
                                min={600}
                                step={1}
                                required
                                value={stipendioNetto}
                                onChange={(e) => setStipendioNetto(Math.trunc(Number(e.target.value) || 0))}
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/50"
                            />
                            {errors.stipendioNetto ? <p className="text-sm text-red-200">{errors.stipendioNetto}</p> : null}
                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {stima ? (
                                        <>
                                            Con uno stipendio netto di <span className="font-bold text-text-primary">{formatEURCompact(stipendioNetto)}</span> potresti ottenere fino a{" "}
                                            <span className="font-bold text-text-primary">{formatEURCompact(Math.round(stima.netAmount))}</span> con una rata di circa{" "}
                                            <span className="font-bold text-text-primary">{formatEURCompact(Math.round(stima.monthlyRate))}</span>/mese
                                        </>
                                    ) : (
                                        <>Con uno stipendio netto di ...€ potresti ottenere fino a ...€ con una rata di circa ...€/mese.</>
                                    )}
                                </p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-7 rounded-2xl shadow-lg shadow-brand-indigo/30 hover:shadow-xl hover:shadow-brand-indigo/40 transition-all text-base font-bold bg-brand-indigo text-white hover:bg-brand-indigo/90"
                            icon={ArrowRight}
                        >
                            Continua
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={onSubmit} className="space-y-6">
                        <label htmlFor="home-calc-nome" className="block space-y-2">
                            <span className="text-base text-text-primary font-medium">Nome</span>
                            <input
                                id="home-calc-nome"
                                type="text"
                                minLength={2}
                                required
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/50"
                            />
                            {errors.nome ? <p className="text-sm text-red-200">{errors.nome}</p> : null}
                        </label>

                        <label htmlFor="home-calc-cognome" className="block space-y-2">
                            <span className="text-base text-text-primary font-medium">Cognome</span>
                            <input
                                id="home-calc-cognome"
                                type="text"
                                minLength={2}
                                required
                                value={cognome}
                                onChange={(e) => setCognome(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/50"
                            />
                            {errors.cognome ? <p className="text-sm text-red-200">{errors.cognome}</p> : null}
                        </label>

                        <label htmlFor="home-calc-email" className="block space-y-2">
                            <span className="text-base text-text-primary font-medium">Email</span>
                            <input
                                id="home-calc-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="nome@esempio.it"
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/50"
                            />
                            {errors.email ? <p className="text-sm text-red-200">{errors.email}</p> : null}
                        </label>

                        <label htmlFor="home-calc-whatsapp" className="block space-y-2">
                            <span className="text-base text-text-primary font-medium">Numero WhatsApp</span>
                            <input
                                id="home-calc-whatsapp"
                                type="tel"
                                required
                                placeholder="Es. +39 327 1234567"
                                value={whatsApp}
                                onChange={(e) => setWhatsApp(sanitizePhoneInput(e.target.value))}
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/50"
                            />
                            {errors.whatsApp ? <p className="text-sm text-red-200">{errors.whatsApp}</p> : null}
                        </label>

                        <RedditoDimostrabileField
                            value={redditoDimostrabile}
                            onChange={setRedditoDimostrabile}
                            error={errors.redditoDimostrabile}
                            legendClassName="text-base font-medium"
                            errorClassName="text-sm text-red-200"
                        />

                        <div className="space-y-2">
                            <span className="text-base text-text-primary font-medium">
                                Carica la tua busta paga o cedolino della pensione{" "}
                                <span className="font-normal text-text-secondary">(facoltativo)</span>
                            </span>
                            <input
                                ref={documentoInputRef}
                                id="home-calc-documento"
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,application/pdf,image/jpeg,image/png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                className="sr-only"
                                onChange={(e) => {
                                    const file = e.target.files?.[0] ?? null;
                                    setDocumentoReddito(file);
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => documentoInputRef.current?.click()}
                                className="flex w-full items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-4 text-left transition-colors hover:border-brand-indigo/40 hover:bg-brand-indigo/[0.02]"
                            >
                                <span className="min-w-0">
                                    <span className="block text-sm font-medium text-text-primary truncate">
                                        {documentoReddito
                                            ? documentoReddito.name
                                            : "Carica PDF, JPG, PNG o DOCX (max 5MB)"}
                                    </span>
                                    {documentoReddito ? (
                                        <span className="mt-1 block text-xs text-text-secondary">
                                            {(documentoReddito.size / (1024 * 1024)).toFixed(2)} MB
                                        </span>
                                    ) : (
                                        <span className="mt-1 block text-xs text-text-secondary">
                                            Campo facoltativo: puoi inviare la richiesta anche senza allegato
                                        </span>
                                    )}
                                </span>
                                <Upload className="h-5 w-5 shrink-0 text-brand-indigo" aria-hidden />
                            </button>
                            {documentoReddito ? (
                                <button
                                    type="button"
                                    className="text-xs text-brand-indigo hover:underline"
                                    onClick={() => {
                                        setDocumentoReddito(null);
                                        if (documentoInputRef.current) documentoInputRef.current.value = "";
                                    }}
                                >
                                    Rimuovi file
                                </button>
                            ) : null}
                            {errors.documentoReddito ? (
                                <p className="text-sm text-red-200">{errors.documentoReddito}</p>
                            ) : null}
                        </div>

                        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 cursor-pointer">
                            <input
                                type="checkbox"
                                required
                                checked={privacyOk}
                                onChange={(e) => setPrivacyOk(e.target.checked)}
                                className="mt-1 accent-brand-indigo"
                            />
                            <span className="text-sm text-text-secondary leading-relaxed">
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
                        {errors.privacyOk ? <p className="text-sm text-red-200 -mt-3">{errors.privacyOk}</p> : null}

                        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={marketingOk}
                                onChange={(e) => setMarketingOk(e.target.checked)}
                                className="mt-1 accent-brand-indigo"
                            />
                            <span className="text-sm text-text-secondary leading-relaxed">
                                Acconsento a ricevere comunicazioni commerciali e aggiornamenti da CreditoClick
                            </span>
                        </label>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-7 rounded-2xl shadow-lg shadow-brand-indigo/30 hover:shadow-xl hover:shadow-brand-indigo/40 transition-all text-base font-bold bg-brand-indigo text-white hover:bg-brand-indigo/90"
                            icon={ArrowRight}
                        >
                            {isSubmitting ? "Invio in corso..." : "Ricevi il preventivo"}
                        </Button>

                        {submitError ? (
                            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-2xl p-4 leading-relaxed">{submitError}</p>
                        ) : null}

                        <Button
                            type="button"
                            variant="link"
                            className="text-brand-indigo hover:text-brand-indigo/80 !px-0"
                            onClick={() => {
                                setStep(1);
                                setErrors({});
                            }}
                        >
                            Torna allo step precedente
                        </Button>
                    </form>
                )}

                <p className="mt-8 text-center text-xs text-text-secondary font-medium leading-relaxed">
                    Esempi di calcolo basati su tassi competitivi. <br />
                    Soggetto ad approvazione creditizia.
                </p>
                </>
                )}
            </div>
        </div>
    );
}
