"use client";

import {
  ArrowRight,
  BarChart3,
  FileCheck,
  GraduationCap,
  Scale,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { IntroPointsSection } from "@/components/products/sections/IntroPointsSection";
import { StickyItemsSection } from "@/components/products/sections/StickyItemsSection";
import { RatesFactorsSection } from "@/components/products/sections/RatesFactorsSection";
import { CalculationSection } from "@/components/products/sections/CalculationSection";
import { ProsConsSection } from "@/components/products/sections/ProsConsSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalNotesSection } from "@/components/products/sections/LegalNotesSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  CDQ_CALCOLO,
  CDQ_CATEGORIE,
  CDQ_CONFRONTO,
  CDQ_DEFINIZIONE,
  CDQ_EEAT,
  CDQ_FAQ,
  CDQ_FINAL_CTA,
  CDQ_HERO,
  CDQ_PASSAGGI,
  CDQ_TASSI,
  CDQ_VANTAGGI_LIMITI,
} from "@/content/cessioneDelQuinto";

const CATEGORY_ICONS = [Building2, Users, GraduationCap] as const;
const EEAT_ICONS = [FileCheck, Scale] as const;

export function CessioneDelQuintoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={CDQ_HERO.badge}
        title={CDQ_HERO.title}
        subtitle={CDQ_HERO.subtitle}
        primaryCta={CDQ_HERO.primaryCta}
        secondaryCta={CDQ_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={BarChart3}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Consulenza finanziaria per cessione del quinto"
            priority
          />
        }
      />

      <IntroPointsSection
        badge={CDQ_DEFINIZIONE.sectionTitle}
        title={CDQ_DEFINIZIONE.title}
        paragraphs={CDQ_DEFINIZIONE.paragraphs}
        points={CDQ_DEFINIZIONE.points}
        icon={ShieldCheck}
      />

      <StickyItemsSection
        badge={CDQ_CATEGORIE.sectionTitle}
        title={CDQ_CATEGORIE.title}
        intro={CDQ_CATEGORIE.intro}
        items={CDQ_CATEGORIE.items}
        icons={CATEGORY_ICONS}
      />

      <RatesFactorsSection
        badge={CDQ_TASSI.sectionTitle}
        title={CDQ_TASSI.title}
        paragraphs={CDQ_TASSI.paragraphs}
        factorsTitle={CDQ_TASSI.factorsTitle}
        factors={CDQ_TASSI.factors}
        notes={CDQ_TASSI.notes}
        cta={CDQ_TASSI.cta}
      />

      <CalculationSection
        badge={CDQ_CALCOLO.sectionTitle}
        title={CDQ_CALCOLO.title}
        intro={CDQ_CALCOLO.intro}
        formulaTitle={CDQ_CALCOLO.formulaTitle}
        formula={CDQ_CALCOLO.formula}
        image={CDQ_CALCOLO.sectionImage}
        exampleTitle={CDQ_CALCOLO.exampleTitle}
        columnLabels={CDQ_CALCOLO.columnLabels}
        rows={CDQ_CALCOLO.table}
        note={CDQ_CALCOLO.note}
        ctaText={CDQ_CALCOLO.ctaText}
        cta={CDQ_CALCOLO.cta}
      />

      <ProsConsSection
        badge={CDQ_VANTAGGI_LIMITI.sectionTitle}
        title={CDQ_VANTAGGI_LIMITI.title}
        intro={CDQ_VANTAGGI_LIMITI.intro}
        prosTitle={CDQ_VANTAGGI_LIMITI.prosTitle}
        pros={CDQ_VANTAGGI_LIMITI.pros}
        consTitle={CDQ_VANTAGGI_LIMITI.consTitle}
        cons={CDQ_VANTAGGI_LIMITI.cons}
      />

      <ComparisonSection
        badge={CDQ_CONFRONTO.sectionTitle}
        title={CDQ_CONFRONTO.title}
        description={CDQ_CONFRONTO.note}
        columns={CDQ_CONFRONTO.columnLabels}
        rows={CDQ_CONFRONTO.rows}
      />

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={CDQ_PASSAGGI.sectionTitle}
        title={CDQ_PASSAGGI.title}
        steps={CDQ_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
            {CDQ_PASSAGGI.cta}
          </Button>
        }
      />

      <LegalNotesSection
        badge={CDQ_EEAT.sectionTitle}
        title={CDQ_EEAT.title}
        intro={CDQ_EEAT.intro}
        features={CDQ_EEAT.features}
        featureIcons={EEAT_ICONS}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        badge={CDQ_FAQ.sectionTitle}
        title={CDQ_FAQ.title}
        items={CDQ_FAQ.items}
      />

      <ProductFinalCtaSection
        title={CDQ_FINAL_CTA.title}
        subtitle={CDQ_FINAL_CTA.subtitle}
        primaryCta={CDQ_FINAL_CTA.primary}
        secondaryCta={CDQ_FINAL_CTA.secondary}
      />
    </>
  );
}
