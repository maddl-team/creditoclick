"use client";

import { ArrowRight, Calculator, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  PSMS_COPRE,
  PSMS_EEAT,
  PSMS_FAQ,
  PSMS_FAMILIARE,
  PSMS_FINAL_CTA,
  PSMS_HERO,
  PSMS_IMPORTI,
  PSMS_PERCHE,
  PSMS_PROCESSO,
  PSMS_PROBLEMA,
} from "@/content/prestitoSpeseMedicheSalute";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20spese%20mediche%20e%20salute%20con%20cessione%20del%20quinto.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const PENSIONATI_URL = "/professioni/pensionati-inps";

export function PrestitoSpeseMedicheSalutePageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PSMS_HERO.badge}
        title={PSMS_HERO.title}
        subtitle={PSMS_HERO.subtitle}
        primaryCta={PSMS_HERO.primaryCta}
        secondaryCta={PSMS_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestito per spese mediche e salute con cessione del quinto"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PSMS_PROBLEMA.title}</Badge>}
        title={PSMS_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PSMS_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={PSMS_COPRE.title}
        title={PSMS_COPRE.sectionTitle}
        intro={PSMS_COPRE.intro}
        items={PSMS_COPRE.items}
        icon={HeartPulse}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <FeatureListSection
        badge={PSMS_PERCHE.title}
        title={PSMS_PERCHE.sectionTitle}
        intro={PSMS_PERCHE.intro}
        items={PSMS_PERCHE.items}
        icon={HeartPulse}
        splitMode="colon"
        theme="cyan"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={PSMS_IMPORTI.title}
        title={PSMS_IMPORTI.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            <p>{PSMS_IMPORTI.intro}</p>
            <p className="font-semibold text-text-primary">{PSMS_IMPORTI.formula}</p>
            <p>{PSMS_IMPORTI.lead}</p>
          </div>
        }
        columns={PSMS_IMPORTI.columns}
        rows={PSMS_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PSMS_IMPORTI.note}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{PSMS_IMPORTI.afterNote}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {PSMS_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{PSMS_FAMILIARE.title}</Badge>}
        title={PSMS_FAMILIARE.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {PSMS_FAMILIARE.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={PENSIONATI_URL}
          >
            {PSMS_FAMILIARE.cta}
          </Button>
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={PSMS_PROCESSO.title}
        title={PSMS_PROCESSO.sectionTitle}
        steps={PSMS_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {PSMS_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={PSMS_EEAT.title}
        title={PSMS_EEAT.sectionTitle}
        paragraphs={PSMS_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali prestito spese mediche e salute",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PSMS_FAQ.title} title={PSMS_FAQ.sectionTitle} items={PSMS_FAQ.items} />

      <ProductFinalCtaSection
        title={PSMS_FINAL_CTA.title}
        subtitle={PSMS_FINAL_CTA.subtitle}
        primaryCta={PSMS_FINAL_CTA.primary}
        secondaryCta={PSMS_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
