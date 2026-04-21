"use client";

import { ArrowRight, Calculator, Home } from "lucide-react";
import Link from "next/link";
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
  PAMC_COESISTENZA,
  PAMC_EEAT,
  PAMC_FAQ,
  PAMC_FINAL_CTA,
  PAMC_HERO,
  PAMC_IMPORTI,
  PAMC_PERCHE,
  PAMC_PROCESSO,
  PAMC_PROBLEMA,
  PAMC_SPESE,
} from "@/content/prestitoAnticipoMutuoCasa";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20una%20valutazione%20gratuita%20per%20un%20prestito%20anticipo%20mutuo%20casa.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CESSIONE_URL = "/prodotti/cessione-del-quinto";

export function PrestitoAnticipoMutuoCasaPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PAMC_HERO.badge}
        title={PAMC_HERO.title}
        subtitle={PAMC_HERO.subtitle}
        primaryCta={PAMC_HERO.primaryCta}
        secondaryCta={PAMC_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestito anticipo mutuo casa con cessione del quinto"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PAMC_PROBLEMA.title}</Badge>}
        title={PAMC_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PAMC_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={PAMC_PERCHE.title}
        title={PAMC_PERCHE.sectionTitle}
        intro={PAMC_PERCHE.intro}
        items={PAMC_PERCHE.items}
        icon={Home}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PAMC_COESISTENZA.title}</Badge>}
        title={PAMC_COESISTENZA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PAMC_COESISTENZA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <ComparisonSection
        badge={PAMC_IMPORTI.title}
        title={PAMC_IMPORTI.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            <p>
              L&apos;importo ottenibile attraverso la{" "}
              <Link href={CESSIONE_URL} className="font-semibold text-brand-indigo underline underline-offset-2">
                cessione del quinto
              </Link>{" "}
              dipende dal reddito netto mensile e dalla durata scelta.
            </p>
            <p className="font-semibold text-text-primary">{PAMC_IMPORTI.formula}</p>
            <p>{PAMC_IMPORTI.lead}</p>
          </div>
        }
        columns={PAMC_IMPORTI.columns}
        rows={PAMC_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PAMC_IMPORTI.note}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{PAMC_IMPORTI.afterNote}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {PAMC_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={PAMC_SPESE.title} title={PAMC_SPESE.sectionTitle} description={<p>{PAMC_SPESE.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6 px-6 md:px-8 text-lg text-text-secondary leading-relaxed">
            <ul className="list-disc pl-5 space-y-3">
              {PAMC_SPESE.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{PAMC_SPESE.note}</p>
          </div>
        </div>
      </Section>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={PAMC_PROCESSO.title}
        title={PAMC_PROCESSO.sectionTitle}
        steps={PAMC_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {PAMC_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={PAMC_EEAT.title}
        title={PAMC_EEAT.sectionTitle}
        paragraphs={PAMC_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali prestito anticipo mutuo casa",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PAMC_FAQ.title} title={PAMC_FAQ.sectionTitle} items={PAMC_FAQ.items} />

      <ProductFinalCtaSection
        title={PAMC_FINAL_CTA.title}
        subtitle={PAMC_FINAL_CTA.subtitle}
        primaryCta={PAMC_FINAL_CTA.primary}
        secondaryCta={PAMC_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
