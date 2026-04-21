"use client";

import { ArrowRight, ShieldCheck, Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AccentBlock } from "@/components/ui/AccentBlock";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  FAO_COMPARTI,
  FAO_DELEGA,
  FAO_EEAT,
  FAO_FAQ,
  FAO_FINAL_CTA,
  FAO_HERO,
  FAO_IMPORTI,
  FAO_PROCESSO,
  FAO_RISERVATEZZA,
  FAO_STRUTTURA,
  FAO_TRATTAMENTO,
} from "@/content/forzeArmateOrdine";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20la%20cessione%20del%20quinto%20per%20Forze%20Armate%20e%20Forze%20dell'Ordine.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const DELEGA_URL = "/prodotti/delega-di-pagamento";
const RINNOVO_URL = "/prodotti/rinnovo-cessione-quinto";

export function ForzeArmateOrdinePageContent() {
  return (
    <>
      <ProductSplitHero
        badge={FAO_HERO.badge}
        title={FAO_HERO.title}
        subtitle={FAO_HERO.subtitle}
        primaryCta={FAO_HERO.primaryCta}
        secondaryCta={FAO_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Cessione del quinto per forze armate e forze dell'ordine"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{FAO_TRATTAMENTO.title}</Badge>}
        title={FAO_TRATTAMENTO.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {FAO_TRATTAMENTO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={FAO_COMPARTI.title}
        title={FAO_COMPARTI.sectionTitle}
        intro={FAO_COMPARTI.intro}
        items={FAO_COMPARTI.items}
        icon={ShieldCheck}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={FAO_STRUTTURA.title}
              title={FAO_STRUTTURA.sectionTitle}
              descriptionClassName="space-y-6"
              description={
                <>
                  {FAO_STRUTTURA.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="font-semibold text-text-primary">{FAO_STRUTTURA.includedTitle}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {FAO_STRUTTURA.includedItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              }
            />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="px-6 md:px-8 space-y-6 text-lg text-text-secondary leading-relaxed">
              <p className="font-semibold text-text-primary">{FAO_STRUTTURA.excludedTitle}</p>
              <div className="space-y-4">
                {FAO_STRUTTURA.excludedItems.map((item) => (
                  <AccentBlock key={item} className="group" accentColorClassName="bg-brand-indigo">
                    <p className="text-lg leading-relaxed text-text-secondary">{item}</p>
                  </AccentBlock>
                ))}
              </div>
              <p>{FAO_STRUTTURA.footer}</p>
            </div>
          </div>
        </div>
      </Section>

      <ComparisonSection
        badge={FAO_IMPORTI.title}
        title={FAO_IMPORTI.sectionTitle}
        description={<p>{FAO_IMPORTI.exampleTitle}</p>}
        columns={FAO_IMPORTI.columns}
        rows={FAO_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{FAO_IMPORTI.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {FAO_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{FAO_RISERVATEZZA.title}</Badge>}
        title={FAO_RISERVATEZZA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {FAO_RISERVATEZZA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{FAO_DELEGA.title}</Badge>}
        title={FAO_DELEGA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {FAO_DELEGA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={DELEGA_URL}
          >
            {FAO_DELEGA.cta}
          </Button>
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={FAO_PROCESSO.title}
        title={FAO_PROCESSO.sectionTitle}
        steps={FAO_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {FAO_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={FAO_EEAT.title}
        title={FAO_EEAT.sectionTitle}
        paragraphs={FAO_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali e conformità normativa cessione del quinto comparto sicurezza",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="border-t border-slate-200/60"
        badge={FAO_FAQ.title}
        title={FAO_FAQ.sectionTitle}
        description={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={RINNOVO_URL}>
            {FAO_FAQ.renewalCta}
          </Button>
        }
        items={FAO_FAQ.items}
      />

      <ProductFinalCtaSection
        title={FAO_FINAL_CTA.title}
        subtitle={FAO_FINAL_CTA.subtitle}
        primaryCta={FAO_FINAL_CTA.primary}
        secondaryCta={FAO_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
