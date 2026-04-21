"use client";

import { ArrowRight, Calculator, WalletCards } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  CD_ACCESSO,
  CD_COSA,
  CD_CRIF,
  CD_EEAT,
  CD_FAQ,
  CD_FINAL_CTA,
  CD_HERO,
  CD_MECCANISMO,
  CD_PROBLEMA,
  CD_PROCESSO,
  CD_QUANDO,
  CD_RISPARMIO,
} from "@/content/consolidamentoDebiti";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20una%20valutazione%20gratuita%20per%20il%20consolidamento%20debiti.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CESSIONE_URL = "/prodotti/cessione-del-quinto";
const CRIF_URL = "/soluzioni/cattivi-pagatori-segnalati-crif";
const RINNOVO_URL = "/prodotti/rinnovo-cessione-quinto";

export function ConsolidamentoDebitiPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={CD_HERO.badge}
        title={CD_HERO.title}
        subtitle={CD_HERO.subtitle}
        primaryCta={CD_HERO.primaryCta}
        secondaryCta={CD_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Consolidamento debiti con unica rata trattenuta in busta paga"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CD_PROBLEMA.title}</Badge>}
        title={CD_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CD_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CD_COSA.title} title={CD_COSA.sectionTitle} description={<p>{CD_COSA.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6 px-6 md:px-8 text-lg text-text-secondary leading-relaxed">
            <p>
              Nel contesto di CreditoClick, il consolidamento debiti viene realizzato principalmente attraverso la{" "}
              <Link href={CESSIONE_URL} className="font-semibold text-brand-indigo underline underline-offset-2">
                cessione del quinto dello stipendio o della pensione
              </Link>
              {" — uno strumento che si presta particolarmente bene a questa finalità per diverse ragioni:"}
            </p>
            <ul className="list-disc pl-5 space-y-3">
              {CD_COSA.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p>{CD_COSA.note}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CD_QUANDO.title} title={CD_QUANDO.sectionTitle} description={<p>{CD_QUANDO.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              {CD_QUANDO.items.map((item, i) => (
                <FeatureItem key={`${item.title}-${i}`} icon={WalletCards} title={item.title} theme="green">
                  {item.desc}
                </FeatureItem>
              ))}
            </div>
            <div className="px-6 md:px-8 pt-6">
              <p className="text-sm text-text-secondary leading-relaxed">{CD_QUANDO.warning}</p>
            </div>
          </div>
        </div>
      </Section>

      <FeatureListSection
        badge={CD_MECCANISMO.title}
        title={CD_MECCANISMO.sectionTitle}
        intro={CD_MECCANISMO.intro}
        items={CD_MECCANISMO.items}
        icon={WalletCards}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={CD_RISPARMIO.title}
        title={CD_RISPARMIO.sectionTitle}
        introColSpan={3}
        description={<p>{CD_RISPARMIO.beforeLead}</p>}
        columns={CD_RISPARMIO.beforeColumns}
        rows={CD_RISPARMIO.beforeRows}
        footer={
          <div className="px-6 md:px-8 space-y-6">
            <p className="text-sm text-text-secondary leading-relaxed">{CD_RISPARMIO.middleNote}</p>
            <p className="font-semibold text-text-primary">{CD_RISPARMIO.afterLead}</p>
            <ComparisonTable columns={CD_RISPARMIO.afterColumns} rows={CD_RISPARMIO.afterRows} />
            <div className="space-y-4">
              <p className="text-sm text-text-secondary leading-relaxed">{CD_RISPARMIO.afterNote}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{CD_RISPARMIO.note}</p>
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
                {CD_RISPARMIO.cta}
              </Button>
            </div>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CD_CRIF.title}</Badge>}
        title={CD_CRIF.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CD_CRIF.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CRIF_URL}>
            {CD_CRIF.cta}
          </Button>
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CD_ACCESSO.title} title={CD_ACCESSO.sectionTitle} description={<p>{CD_ACCESSO.lead}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6 px-6 md:px-8 text-lg text-text-secondary leading-relaxed">
            <ul className="list-disc pl-5 space-y-3">
              {CD_ACCESSO.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{CD_ACCESSO.notAllowed}</p>
            <p>
              La capienza residua in busta paga è il parametro chiave. Se hai già una cessione del quinto in corso che assorbe il 20%
              della busta paga, la capienza disponibile per il consolidamento potrebbe essere limitata o assente — a meno di{" "}
              <Link href={RINNOVO_URL} className="font-semibold text-brand-indigo underline underline-offset-2">
                rinnovare la cessione esistente
              </Link>
              {" includendo il consolidamento degli altri debiti. Il consulente CreditoClick verifica questa compatibilità nella fase di analisi preliminare."}
            </p>
          </div>
        </div>
      </Section>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={CD_PROCESSO.title}
        title={CD_PROCESSO.sectionTitle}
        steps={CD_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {CD_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={CD_EEAT.title}
        title={CD_EEAT.sectionTitle}
        paragraphs={CD_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali sul consolidamento debiti con cessione del quinto",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={CD_FAQ.title} title={CD_FAQ.sectionTitle} items={CD_FAQ.items} />

      <ProductFinalCtaSection
        title={CD_FINAL_CTA.title}
        subtitle={CD_FINAL_CTA.subtitle}
        primaryCta={CD_FINAL_CTA.primary}
        secondaryCta={CD_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
