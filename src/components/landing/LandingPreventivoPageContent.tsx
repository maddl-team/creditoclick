"use client";

import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  FileCheck2,
  Laptop,
  Star,
  UserRound,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/ui/FaqSection";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { IUBENDA_COOKIE_POLICY_URL, IUBENDA_PRIVACY_POLICY_URL } from "@/config/iubenda";
import {
  LANDING_ADVANTAGES,
  LANDING_FOOTER,
  LANDING_HERO,
  LANDING_REVIEWS,
  LANDING_SOLUTIONS,
  LANDING_STEPS,
  LANDING_FAQ,
} from "@/content/landingPreventivo";
import { CalcForm } from "@/components/home/CalcForm";
import { LandingSocialProofToast } from "./LandingSocialProofToast";

const ADVANTAGE_ICONS = [Wallet, FileCheck2, UserRound, Laptop] as const;

function scrollToForm() {
  document.getElementById("form-preventivo")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LandingPreventivoPageContent() {
  return (
    <>
      {/* 1. Header minimale anti-leak */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center" aria-label="CreditoClick">
            <Image
              src="/images/creditoclick_logo.png"
              alt="CreditoClick"
              width={180}
              height={54}
              className="h-auto w-[140px] md:w-[170px]"
              priority
            />
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-text-secondary md:text-xs md:normal-case md:tracking-normal">
            <span className="hidden sm:inline">Iscrizione OAM A17849 | Agente Monomandatario IBL Banca</span>
            <span className="sm:hidden">OAM A17849 · IBL Banca</span>
          </div>
        </div>
      </header>

      {/* 2. Hero + Form */}
      <Section className="bg-surface-subtle !pt-8 md:!pt-12" showLines>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <Badge variant="subtle">{LANDING_HERO.eyebrow}</Badge>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem]">
              {LANDING_HERO.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">{LANDING_HERO.subtitle}</p>

            <ul className="space-y-3">
              {LANDING_HERO.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm md:text-base text-text-primary">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-0.5 text-[#00B67A]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  <span className="font-bold text-text-primary">Eccellente 4.7 su 5</span>
                  <span className="text-slate-400"> · </span>
                  Recensioni Verificate Trustpilot
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm font-bold text-text-primary">Google Maps 5.0 / 5.0</p>
              </div>
            </div>
          </div>

          <div
            id="form-preventivo"
            className="lg:col-span-6 xl:col-span-5 lg:sticky lg:top-24 overflow-hidden rounded-2xl bg-brand-indigo shadow-xl"
          >
            <CalcForm
              formType="Landing preventivo dipendenti Ads"
              subject="Nuova richiesta landing preventivo dipendenti"
            />
          </div>
        </div>
      </Section>

      {/* 3. Soluzioni a confronto */}
      <Section className="bg-white border-t border-slate-200/60">
        <SectionIntro
          badge="Soluzioni"
          title="Soluzioni su misura per il tuo contratto"
          description="Due percorsi dedicati, con le stesse garanzie di trasparenza e un consulente OAM al tuo fianco."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {LANDING_SOLUTIONS.map((solution, index) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-slate-200 bg-surface-subtle p-6 md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-indigo/10 text-brand-indigo">
                {index === 0 ? <Building2 className="h-6 w-6" /> : <Wallet className="h-6 w-6" />}
              </div>
              <h3 className="text-xl font-bold text-text-primary">{solution.title}</h3>
              <ul className="mt-4 space-y-3">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-indigo" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Vantaggi */}
      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <SectionIntro
          badge="Perché CreditoClick"
          title="I 4 vantaggi di CreditoClick"
          description="Un’agenzia monomandataria IBL Banca / Creditis, con processo digitale e consulenza umana."
        />
        <div className="mt-10 grid grid-cols-1 gap-0 border-t border-slate-200 md:grid-cols-2">
          {LANDING_ADVANTAGES.map((item, i) => (
            <div
              key={item.title}
              className={[
                i % 2 === 0 ? "md:border-r border-slate-200" : "",
                i < 2 ? "border-b border-slate-200" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <FeatureItem
                icon={ADVANTAGE_ICONS[i]}
                title={item.title}
                theme="indigo"
                hasPadding={false}
                className="p-6 md:p-8"
              >
                {item.desc}
              </FeatureItem>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Come funziona */}
      <Section className="bg-white border-t border-slate-200/60">
        <SectionIntro
          badge="Processo"
          title="Come funziona"
          description="Tre passaggi chiari, dalla richiesta all’accredito."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LANDING_STEPS.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-indigo text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Recensioni */}
      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <SectionIntro
          badge="Social proof"
          title="Recensioni verificate"
          description="Esperienze reali di dipendenti che hanno scelto CreditoClick."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LANDING_REVIEWS.map((review) => (
            <article
              key={review.author}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">“{review.quote}”</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-bold text-text-primary">{review.author}</p>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  {review.role} · Recensione Verificata · {review.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 7. FAQ */}
      <FaqSection
        sectionClassName="bg-white border-t border-slate-200/60"
        badge="Domande frequenti"
        title="Risposte chiare prima di richiedere"
        items={LANDING_FAQ}
      />

      {/* 8. Bottom CTA scroll-to-form */}
      <Section className="bg-brand-indigo border-t border-brand-purple/20" linesVariant="dark">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Pronto a conoscere la tua rata?
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              Compila il modulo gratuito: un consulente ti risponde entro 24 ore lavorative con un
              preventivo trasparente, senza impegno.
            </p>
          </div>
          <Button
            type="button"
            variant="secondary"
            className="w-full shrink-0 border-white bg-white text-brand-indigo hover:bg-indigo-50 sm:w-auto"
            onClick={scrollToForm}
          >
            Richiedi preventivo gratuito
          </Button>
        </div>
      </Section>

      {/* 9. Footer istituzionale */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-4 px-6 py-10 text-xs leading-relaxed text-text-secondary md:py-12">
          <p className="font-semibold text-text-primary">{LANDING_FOOTER.company}</p>
          <p>{LANDING_FOOTER.legal}</p>
          <p>{LANDING_FOOTER.disclaimer}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={IUBENDA_PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-indigo hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href={IUBENDA_COOKIE_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-indigo hover:underline"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>

      <LandingSocialProofToast />
    </>
  );
}
