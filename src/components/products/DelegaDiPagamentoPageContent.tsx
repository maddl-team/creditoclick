"use client";

import { ArrowRight, BarChart3, Building2, CheckCircle2, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { IntroPointsSection } from "@/components/products/sections/IntroPointsSection";
import { StickyItemsSection } from "@/components/products/sections/StickyItemsSection";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  DDP_CALCOLO,
  DDP_CATEGORIE,
  DDP_CONFRONTO,
  DDP_DEFINIZIONE,
  DDP_EEAT,
  DDP_FAQ,
  DDP_FINAL_CTA,
  DDP_HERO,
  DDP_PASSAGGI,
  DDP_REQUISITI,
  DDP_VANTAGGI,
} from "@/content/delegaDiPagamento";

const REQUIREMENT_ICONS = [ShieldCheck, Building2, BarChart3] as const;
const CATEGORY_ICONS = [Users, GraduationCap] as const;

export function DelegaDiPagamentoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={DDP_HERO.badge}
        title={DDP_HERO.title}
        subtitle={DDP_HERO.subtitle}
        primaryCta={DDP_HERO.primaryCta}
        secondaryCta={DDP_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={BarChart3}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Consulenza per delega di pagamento e doppio quinto"
            priority
          />
        }
      />

      <IntroPointsSection
        badge={DDP_DEFINIZIONE.sectionTitle}
        title={DDP_DEFINIZIONE.title}
        paragraphs={DDP_DEFINIZIONE.paragraphs}
        points={DDP_DEFINIZIONE.points}
        icon={ShieldCheck}
        bottomImage={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Analisi pratica della capienza con delega di pagamento",
        }}
      />

      <StickyItemsSection
        badge={DDP_REQUISITI.sectionTitle}
        title={DDP_REQUISITI.title}
        intro={DDP_REQUISITI.intro}
        items={DDP_REQUISITI.items}
        icons={REQUIREMENT_ICONS}
      />

      <ComparisonSection
        badge={DDP_CALCOLO.sectionTitle}
        title={DDP_CALCOLO.title}
        description={DDP_CALCOLO.intro}
        columns={DDP_CALCOLO.columnLabels}
        rows={DDP_CALCOLO.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <h3 className="font-bold text-text-primary text-lg">{DDP_CALCOLO.exampleTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{DDP_CALCOLO.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
              {DDP_CALCOLO.cta}
            </Button>
          </div>
        }
      />

      <FeatureListSection
        badge={DDP_VANTAGGI.sectionTitle}
        title={DDP_VANTAGGI.title}
        intro={DDP_VANTAGGI.intro}
        items={DDP_VANTAGGI.items}
        icon={CheckCircle2}
        theme="green"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <StickyItemsSection
        badge={DDP_CATEGORIE.sectionTitle}
        title={DDP_CATEGORIE.title}
        intro={DDP_CATEGORIE.intro}
        items={DDP_CATEGORIE.items}
        icons={CATEGORY_ICONS}
      />

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={DDP_PASSAGGI.sectionTitle}
        title={DDP_PASSAGGI.title}
        steps={DDP_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
            {DDP_PASSAGGI.cta}
          </Button>
        }
      />

      <ComparisonSection
        badge={DDP_CONFRONTO.sectionTitle}
        title={DDP_CONFRONTO.title}
        columns={DDP_CONFRONTO.columnLabels}
        rows={DDP_CONFRONTO.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{DDP_CONFRONTO.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
              {DDP_CONFRONTO.cta}
            </Button>
          </div>
        }
      />

      <LegalTextSection
        badge={DDP_EEAT.sectionTitle}
        title={DDP_EEAT.title}
        paragraphs={DDP_EEAT.paragraphs}
        image={{
          src: "/images/cessione-del-quinto-hero.jpg",
          alt: "Documentazione e consulenza per delega di pagamento",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        badge={DDP_FAQ.sectionTitle}
        title={DDP_FAQ.title}
        items={DDP_FAQ.items}
      />

      <ProductFinalCtaSection
        title={DDP_FINAL_CTA.title}
        subtitle={DDP_FINAL_CTA.subtitle}
        primaryCta={DDP_FINAL_CTA.primary}
        secondaryCta={DDP_FINAL_CTA.secondary}
      />
    </>
  );
}
