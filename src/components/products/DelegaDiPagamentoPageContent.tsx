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
const WHATSAPP_DELEGA_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20verificare%20la%20mia%20eligibilita%20per%20la%20delega%20di%20pagamento.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const RINNOVO_URL = "/prodotti/rinnovo-cessione-quinto";

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
        primaryHref={WHATSAPP_DELEGA_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/creditoclick_delega-di-pagamento.jpg"
            alt="Consulenza per delega di pagamento e doppio quinto"
            priority
          />
        }
      />

      <IntroPointsSection
        badge={DDP_DEFINIZIONE.title}
        title={DDP_DEFINIZIONE.sectionTitle}
        paragraphs={DDP_DEFINIZIONE.paragraphs}
        points={DDP_DEFINIZIONE.points}
        icon={ShieldCheck}
        bottomImageNatural
        bottomImage={{
          src: "/images/creditoclick-cosa-e-delega-di-pagamento.jpeg",
          alt: "Analisi pratica della capienza con delega di pagamento",
        }}
      />

      <StickyItemsSection
        badge={DDP_REQUISITI.title}
        title={DDP_REQUISITI.sectionTitle}
        intro={DDP_REQUISITI.intro}
        items={DDP_REQUISITI.items}
        icons={REQUIREMENT_ICONS}
      />

      <ComparisonSection
        badge={DDP_CALCOLO.title}
        title={DDP_CALCOLO.sectionTitle}
        description={DDP_CALCOLO.intro}
        columns={DDP_CALCOLO.columnLabels}
        rows={DDP_CALCOLO.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <h3 className="font-bold text-text-primary text-lg">{DDP_CALCOLO.exampleTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{DDP_CALCOLO.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_DELEGA_URL}>
              {DDP_CALCOLO.cta}
            </Button>
          </div>
        }
      />

      <FeatureListSection
        badge={DDP_VANTAGGI.title}
        title={DDP_VANTAGGI.sectionTitle}
        intro={DDP_VANTAGGI.intro}
        items={DDP_VANTAGGI.items}
        icon={CheckCircle2}
        theme="green"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <StickyItemsSection
        badge={DDP_CATEGORIE.title}
        title={DDP_CATEGORIE.sectionTitle}
        intro={DDP_CATEGORIE.intro}
        items={DDP_CATEGORIE.items}
        icons={CATEGORY_ICONS}
      />

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={DDP_PASSAGGI.title}
        title={DDP_PASSAGGI.sectionTitle}
        steps={DDP_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_DELEGA_URL}>
            {DDP_PASSAGGI.cta}
          </Button>
        }
      />

      <ComparisonSection
        badge={DDP_CONFRONTO.title}
        title={DDP_CONFRONTO.sectionTitle}
        columns={DDP_CONFRONTO.columnLabels}
        rows={DDP_CONFRONTO.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{DDP_CONFRONTO.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={RINNOVO_URL}>
              {DDP_CONFRONTO.cta}
            </Button>
          </div>
        }
      />

      <LegalTextSection
        badge={DDP_EEAT.title}
        title={DDP_EEAT.sectionTitle}
        paragraphs={DDP_EEAT.paragraphs}
        image={{
          src: "/images/cessione-del-quinto-hero.jpg",
          alt: "Documentazione e consulenza per delega di pagamento",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        badge={DDP_FAQ.title}
        title={DDP_FAQ.sectionTitle}
        items={DDP_FAQ.items}
      />

      <ProductFinalCtaSection
        title={DDP_FINAL_CTA.title}
        subtitle={DDP_FINAL_CTA.subtitle}
        primaryCta={DDP_FINAL_CTA.primary}
        secondaryCta={DDP_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_DELEGA_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
