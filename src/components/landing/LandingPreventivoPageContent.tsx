"use client";

import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  FileCheck2,
  Laptop,
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
  LANDING_SOLUTIONS,
  LANDING_STEPS,
  LANDING_FAQ,
} from "@/content/landingPreventivo";
import { ChiSiamoTeamMembersGrid } from "@/components/about/ChiSiamoTeamSection";
import { CalcForm } from "@/components/home/CalcForm";
import { CHI_SIAMO_TEAM } from "@/content/chiSiamo";
import { LandingHeroReviewBadge } from "./LandingHeroReviewBadge";
import { LandingSocialProofToast } from "./LandingSocialProofToast";
import { LandingTestimonialsSection } from "./LandingTestimonialsSection";
import { LandingTrustpilotStrip } from "./LandingTrustpilotStrip";

const ADVANTAGE_ICONS = [Wallet, FileCheck2, UserRound, Laptop] as const;

const OAM_VERIFY_HREF =
  "https://www.organismo-am.it/b/0/05441460754/9904215b-8496-4d11-b9a3-893cc7b18c45/g.html";
const OAM_SEAL_SRC =
  "https://www.organismo-am.it/b/0/c1833ae86503807319f27b710394cfc6_sl_4GT0tTt8NzLj84_eq_.png";

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

      {/* 2. Hero + Form — desktop 5/12 + 7/12 */}
      <Section className="bg-surface-subtle !pt-8 md:!pt-12 lg:!pb-14" showLines>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-5 lg:space-y-6">
            <Badge variant="subtle">{LANDING_HERO.eyebrow}</Badge>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-[2.35rem] xl:text-[2.5rem]">
              {LANDING_HERO.title}
            </h1>
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-text-secondary">
              {LANDING_HERO.subtitle}
            </p>

            <ul className="space-y-3">
              {LANDING_HERO.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm md:text-base text-text-primary">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <LandingHeroReviewBadge />
          </div>

          <div
            id="form-preventivo"
            className="lg:col-span-7 lg:sticky lg:top-24 overflow-hidden rounded-2xl bg-brand-indigo shadow-xl"
          >
            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <CalcForm
                formType="Landing preventivo dipendenti Ads"
                subject="Nuova richiesta landing preventivo dipendenti"
              />
            </div>
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

      {/* 4. Vantaggi + strip Trustpilot */}
      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <SectionIntro
          badge="Perché CreditoClick"
          title="I 4 vantaggi di CreditoClick"
          description={
            <>
              <p>
                Un’agenzia in attività finanziaria con processo digitale e consulenza umana.
              </p>
              <LandingTrustpilotStrip />
            </>
          }
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

        <div className="mt-12 space-y-8 md:mt-16 md:space-y-10">
          <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
            {CHI_SIAMO_TEAM.intro[1]}
          </p>
          <ChiSiamoTeamMembersGrid members={CHI_SIAMO_TEAM.members} />
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

      {/* 6. Recensioni paginate */}
      <LandingTestimonialsSection />

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

      {/* 9. Footer istituzionale + disclaimer legale */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-10 text-xs leading-relaxed text-text-secondary md:py-12">
          <div className="space-y-4">
            <p className="font-semibold text-text-primary">{LANDING_FOOTER.company}</p>
            <p>{LANDING_FOOTER.legal}</p>
            <p>{LANDING_FOOTER.disclaimer}</p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8">
            <h3 className="text-base md:text-lg font-semibold text-text-primary">Disclaimer legale</h3>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
              <p>
                Il sito internet{" "}
                <a
                  href="https://www.creditoclick.it"
                  className="font-medium text-brand-indigo hover:text-brand-indigo/80"
                >
                  www.creditoclick.it
                </a>{" "}
                è gestito da FINNOVA S.R.L, società operante quale Agente in Attività Finanziaria, regolarmente
                iscritta nell&apos;elenco tenuto dall&apos;OAM (Organismo degli Agenti e dei Mediatori) al n.
                A17849, nonché iscritta al Registro degli Intermediari Assicurativi Numero Iscrizione
                E000811507. La società ha sede legale e operativa in Piazza Oronzo de Donno, 10 - Maglie, è
                iscritta presso il Registro delle Imprese di LECCE, REA n. 367208, Codice Fiscale 05441460754 e
                Partita IVA 05441460754. Il capitale sociale deliberato e interamente versato è pari a €
                2000,00.
              </p>
              <p>
                FINNOVA S.R.L. svolge la propria attività in qualità di soggetto incaricato, in regime di
                monomandato, IBL Istituto Bancario del Lavoro S.p.A. con sede in Roma, Via Venti Settembre n. 30
                - Iscritto all&apos;Albo delle Banche al n. 5578, Capogruppo del Gruppo Bancario IBL Banca (di
                seguito “Gruppo”), iscritta al n. 3263.1 dell&apos;albo dei Gruppi Bancari - Codice Fiscale
                00452550585 - P IVA Di Gruppo 14994571009 - iscritta al Registro Unico degli Intermediari di
                assicurazione alla sezione D al n. D000205521. L&apos;attività svolta da FINNOVA S.R.L. è
                limitata alla promozione e al collocamento di prodotti finanziari, tra cui, a titolo
                esemplificativo e non esaustivo: finanziamenti contro cessione del quinto dello stipendio o della
                pensione, delegazione di pagamento, anticipazione del trattamento di fine servizio e prestiti
                personali.
              </p>
              <p>
                La concessione dei finanziamenti è subordinata alla preventiva valutazione, da parte
                dell&apos;intermediario mandante IBL BANCA o di eventuali ulteriori banche o intermediari
                finanziari convenzionati, dei requisiti soggettivi ed oggettivi del richiedente, nonché del
                merito creditizio dello stesso, nel rispetto della normativa vigente. Qualora il finanziamento
                venga erogato da soggetti terzi rispetto al mandante, questi ultimi assumeranno, a tutti gli
                effetti, la qualifica di parte contrattuale e titolari esclusivi del rapporto, restando esclusa
                ogni responsabilità in capo a FINNOVA S.R.L. per le decisioni assunte in merito
                all&apos;istruttoria, alla concessione e alla gestione del finanziamento. Le informazioni
                presenti sul sito hanno carattere meramente informativo e non costituiscono in alcun modo
                offerta al pubblico ai sensi dell&apos;art. 1336 c.c., né impegno contrattuale.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="w-fit rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 text-sm text-text-secondary">
                <p className="font-medium text-text-primary">Trasparenza Mandataria</p>
                <p className="mt-1 whitespace-nowrap">
                  <a
                    href="https://www.iblbanca.it/trasparenza.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-indigo hover:text-brand-indigo/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/40 rounded-sm"
                  >
                    iblbanca.it/trasparenza.html
                  </a>
                </p>
              </div>

              <a
                href={OAM_VERIFY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/40 rounded-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={OAM_SEAL_SRC}
                  alt="Verifica in tempo reale l'autorizzazione ad operare - Iscrizione OAM n. A17849"
                  width={147}
                  height={149}
                  className="h-auto w-[96px]"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 border-t border-slate-200/70 pt-6 text-center">
            <p>© 2026 FINNOVA S.R.L. Tutti i diritti riservati. | Iscrizione OAM: A17849</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={IUBENDA_PRIVACY_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-indigo hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/40 rounded-sm"
              >
                Privacy Policy
              </a>
              <a
                href={IUBENDA_COOKIE_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-indigo hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/40 rounded-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <LandingSocialProofToast />
    </>
  );
}
