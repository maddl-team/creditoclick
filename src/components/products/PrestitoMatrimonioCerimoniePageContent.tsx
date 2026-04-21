"use client";

import { ArrowRight, Calculator, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  PMC_CERIMONIE,
  PMC_COSTI,
  PMC_COPPIA,
  PMC_EEAT,
  PMC_FAQ,
  PMC_FINAL_CTA,
  PMC_HERO,
  PMC_IMPORTI,
  PMC_PERCHE,
  PMC_PROCESSO,
  PMC_TEMPI,
} from "@/content/prestitoMatrimonioCerimonie";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20finanziare%20matrimonio%20o%20cerimonia%20con%20cessione%20del%20quinto.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const SOLUZIONI_URL = "/soluzioni";

export function PrestitoMatrimonioCerimoniePageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PMC_HERO.badge}
        title={PMC_HERO.title}
        subtitle={PMC_HERO.subtitle}
        primaryCta={PMC_HERO.primaryCta}
        secondaryCta={PMC_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestito matrimonio e cerimonie con cessione del quinto"
            priority
          />
        }
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro
              badge={PMC_COSTI.title}
              title={PMC_COSTI.sectionTitle}
              description={
                <div className="space-y-6">
                  {PMC_COSTI.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="font-semibold text-text-primary">{PMC_COSTI.lead}</p>
                </div>
              }
            />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6 px-6 md:px-8 text-lg text-text-secondary leading-relaxed">
            <ul className="list-disc pl-5 space-y-3">
              {PMC_COSTI.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{PMC_COSTI.note}</p>
          </div>
        </div>
      </Section>

      <FeatureListSection
        badge={PMC_PERCHE.title}
        title={PMC_PERCHE.sectionTitle}
        intro={PMC_PERCHE.intro}
        items={PMC_PERCHE.items}
        icon={Heart}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={PMC_IMPORTI.title}
        title={PMC_IMPORTI.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            <p>{PMC_IMPORTI.intro}</p>
            <p className="font-semibold text-text-primary">{PMC_IMPORTI.formula}</p>
            <p>{PMC_IMPORTI.lead}</p>
          </div>
        }
        columns={PMC_IMPORTI.columns}
        rows={PMC_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PMC_IMPORTI.note}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{PMC_IMPORTI.afterNote}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {PMC_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <ComparisonSection
        badge={PMC_COPPIA.title}
        title={PMC_COPPIA.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            {PMC_COPPIA.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{PMC_COPPIA.lead}</p>
          </div>
        }
        columns={PMC_COPPIA.columns}
        rows={PMC_COPPIA.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PMC_COPPIA.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
              {PMC_COPPIA.cta}
            </Button>
          </div>
        }
      />

      <FeatureListSection
        badge={PMC_CERIMONIE.title}
        title={PMC_CERIMONIE.sectionTitle}
        intro={PMC_CERIMONIE.intro}
        items={PMC_CERIMONIE.items}
        icon={Heart}
        splitMode="colon"
        theme="amber"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={SOLUZIONI_URL}>
              {PMC_CERIMONIE.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{PMC_TEMPI.title}</Badge>}
        title={PMC_TEMPI.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {PMC_TEMPI.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={WHATSAPP_URL}
          >
            {PMC_TEMPI.cta}
          </Button>
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={PMC_PROCESSO.title}
        title={PMC_PROCESSO.sectionTitle}
        steps={PMC_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {PMC_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={PMC_EEAT.title}
        title={PMC_EEAT.sectionTitle}
        paragraphs={PMC_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali prestito matrimonio e cerimonie",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PMC_FAQ.title} title={PMC_FAQ.sectionTitle} items={PMC_FAQ.items} />

      <ProductFinalCtaSection
        title={PMC_FINAL_CTA.title}
        subtitle={PMC_FINAL_CTA.subtitle}
        primaryCta={PMC_FINAL_CTA.primary}
        secondaryCta={PMC_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
