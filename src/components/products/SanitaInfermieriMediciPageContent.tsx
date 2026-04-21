"use client";

import { ArrowRight, Calculator, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import {
  SIM_CATEGORIE,
  SIM_CESSIONE,
  SIM_CRIF,
  SIM_DELEGA,
  SIM_EEAT,
  SIM_FAQ,
  SIM_FINAL_CTA,
  SIM_HERO,
  SIM_PASSAGGI,
  SIM_PROBLEMA,
  SIM_SOLUZIONI,
  SIM_VANTAGGI,
} from "@/content/sanitaInfermieriMedici";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20la%20cessione%20del%20quinto%20nel%20comparto%20sanitario.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const DELEGA_URL = "/prodotti/delega-di-pagamento";
const CRIF_URL = "/soluzioni/cattivi-pagatori-segnalati-crif";
const SOLUZIONI_URL = "/soluzioni";

export function SanitaInfermieriMediciPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={SIM_HERO.badge}
        title={SIM_HERO.title}
        subtitle={SIM_HERO.subtitle}
        primaryCta={SIM_HERO.primaryCta}
        secondaryCta={SIM_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestiti per infermieri, OSS e personale sanitario"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{SIM_PROBLEMA.title}</Badge>}
        title={SIM_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {SIM_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={SIM_VANTAGGI.title}
        title={SIM_VANTAGGI.sectionTitle}
        intro={
          <>
            {SIM_VANTAGGI.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        items={SIM_VANTAGGI.items}
        icon={HeartPulse}
        theme="cyan"
      />

      <FeatureListSection
        badge={SIM_CATEGORIE.title}
        title={SIM_CATEGORIE.sectionTitle}
        intro=""
        items={SIM_CATEGORIE.items}
        icon={HeartPulse}
        splitMode="colon"
        theme="indigo"
        stickyIntro
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
      />

      <Section className="border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:items-stretch gap-12 lg:gap-x-0 lg:gap-y-10">
          <div className="lg:col-span-3">
            <SectionIntro
              badge={SIM_CESSIONE.title}
              title={SIM_CESSIONE.sectionTitle}
              descriptionClassName="space-y-6"
              description={
                <>
                  <p>{SIM_CESSIONE.intro}</p>
                  <p>{SIM_CESSIONE.body}</p>
                  <p className="font-bold text-text-primary">{SIM_CESSIONE.formulaTitle}</p>
                  <p>{SIM_CESSIONE.formula}</p>
                </>
              }
            />
          </div>
          <div className="lg:col-span-3 min-w-0 flex flex-col gap-4">
            <div className="px-6 md:px-8">
              <h3 className="font-bold text-text-primary text-lg">{SIM_CESSIONE.exampleTitle}</h3>
            </div>
            <ComparisonTable columns={SIM_CESSIONE.columns} rows={SIM_CESSIONE.rows} />
            <div className="px-6 md:px-8 space-y-4">
              <p className="text-sm text-text-secondary leading-relaxed">{SIM_CESSIONE.note}</p>
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
                {SIM_CESSIONE.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={SIM_CRIF.title}
              title={SIM_CRIF.sectionTitle}
              descriptionClassName="space-y-6"
              description={
                <>
                  {SIM_CRIF.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </>
              }
            />
            <div className="px-6 md:px-8 pb-8">
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CRIF_URL}>
                {SIM_CRIF.cta}
              </Button>
            </div>
          </div>
          <div className="relative lg:col-span-2 min-h-[260px] lg:min-h-full w-full overflow-hidden rounded-2xl">
            <ProductSplitHeroImage
              src="/images/calcolo-importo-massimo.jpg"
              alt="Valutazione cessione del quinto per personale sanitario con segnalazione CRIF"
            />
          </div>
        </div>
      </Section>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{SIM_DELEGA.title}</Badge>}
        title={SIM_DELEGA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {SIM_DELEGA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={DELEGA_URL}
          >
            {SIM_DELEGA.cta}
          </Button>
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={SIM_PASSAGGI.title}
        title={SIM_PASSAGGI.sectionTitle}
        description={SIM_PASSAGGI.intro}
        steps={SIM_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {SIM_PASSAGGI.cta}
          </Button>
        }
      />

      <FeatureListSection
        badge={SIM_SOLUZIONI.title}
        title={SIM_SOLUZIONI.sectionTitle}
        intro=""
        items={SIM_SOLUZIONI.items}
        icon={HeartPulse}
        splitMode="colon"
        theme="green"
        stickyIntro
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        footer={
          <div className="px-6 md:px-8">
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={SOLUZIONI_URL}>
              {SIM_SOLUZIONI.cta}
            </Button>
          </div>
        }
      />

      <LegalTextSection
        badge={SIM_EEAT.title}
        title={SIM_EEAT.sectionTitle}
        paragraphs={SIM_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali e conformità normativa per prestiti personale sanitario",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="border-t border-slate-200/60"
        badge={SIM_FAQ.title}
        title={SIM_FAQ.sectionTitle}
        items={SIM_FAQ.items}
      />

      <ProductFinalCtaSection
        title={SIM_FINAL_CTA.title}
        subtitle={SIM_FINAL_CTA.subtitle}
        primaryCta={SIM_FINAL_CTA.primary}
        secondaryCta={SIM_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
