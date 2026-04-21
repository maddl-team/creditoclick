"use client";

import { ArrowRight, Calculator, Home } from "lucide-react";
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
  PRC_COSA,
  PRC_DETRAZIONI,
  PRC_EEAT,
  PRC_FAQ,
  PRC_FINAL_CTA,
  PRC_HERO,
  PRC_IMPORTI,
  PRC_INQUILINO,
  PRC_PERCHE,
  PRC_PROCESSO,
  PRC_PROBLEMA,
} from "@/content/prestitoRistrutturazioneCasa";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20ristrutturazione%20casa%20con%20cessione%20del%20quinto.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";

export function PrestitoRistrutturazioneCasaPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PRC_HERO.badge}
        title={PRC_HERO.title}
        subtitle={PRC_HERO.subtitle}
        primaryCta={PRC_HERO.primaryCta}
        secondaryCta={PRC_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestito ristrutturazione casa con cessione del quinto"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PRC_PROBLEMA.title}</Badge>}
        title={PRC_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PRC_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={PRC_PERCHE.title}
        title={PRC_PERCHE.sectionTitle}
        intro={PRC_PERCHE.intro}
        items={PRC_PERCHE.items}
        icon={Home}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <FeatureListSection
        badge={PRC_COSA.title}
        title={PRC_COSA.sectionTitle}
        intro={PRC_COSA.intro}
        items={PRC_COSA.items}
        icon={Home}
        splitMode="colon"
        theme="cyan"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={PRC_IMPORTI.title}
        title={PRC_IMPORTI.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            <p>{PRC_IMPORTI.intro}</p>
            <p className="font-semibold text-text-primary">{PRC_IMPORTI.formula}</p>
            <p>{PRC_IMPORTI.lead}</p>
          </div>
        }
        columns={PRC_IMPORTI.columns}
        rows={PRC_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PRC_IMPORTI.note}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{PRC_IMPORTI.afterNote}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {PRC_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PRC_DETRAZIONI.title}</Badge>}
        title={PRC_DETRAZIONI.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PRC_DETRAZIONI.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{PRC_INQUILINO.title}</Badge>}
        title={PRC_INQUILINO.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {PRC_INQUILINO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={PRC_PROCESSO.title}
        title={PRC_PROCESSO.sectionTitle}
        steps={PRC_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {PRC_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={PRC_EEAT.title}
        title={PRC_EEAT.sectionTitle}
        paragraphs={PRC_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali prestito ristrutturazione casa",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PRC_FAQ.title} title={PRC_FAQ.sectionTitle} items={PRC_FAQ.items} />

      <ProductFinalCtaSection
        title={PRC_FINAL_CTA.title}
        subtitle={PRC_FINAL_CTA.subtitle}
        primaryCta={PRC_FINAL_CTA.primary}
        secondaryCta={PRC_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
