"use client";

import { ArrowRight, Calculator, Scale } from "lucide-react";
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
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { splitByFirstColon } from "@/lib/splitFeatureText";
import {
  CPC_CONSOLIDAMENTO,
  CPC_EEAT,
  CPC_FAQ,
  CPC_FINAL_CTA,
  CPC_HERO,
  CPC_IMPORTI,
  CPC_PERCHE,
  CPC_PROBLEMA,
  CPC_PROCESSO,
  CPC_TEMPI,
  CPC_TIPOLOGIE,
  CPC_VALUTA,
} from "@/content/cattiviPagatoriCrif";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20una%20valutazione%20riservata%20per%20un%20prestito%20con%20segnalazioni%20CRIF.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CESSIONE_URL = "/prodotti/cessione-del-quinto";
const CONSOLIDAMENTO_URL = "/soluzioni/consolidamento-debiti";

export function CattiviPagatoriCrifPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={CPC_HERO.badge}
        title={CPC_HERO.title}
        subtitle={CPC_HERO.subtitle}
        primaryCta={CPC_HERO.primaryCta}
        secondaryCta={CPC_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestito per cattivi pagatori e segnalati CRIF"
            priority
          />
        }
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CPC_PROBLEMA.title} title={CPC_PROBLEMA.sectionTitle} description={<p>{CPC_PROBLEMA.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              {CPC_PROBLEMA.items.map((item, i) => {
                const { title: itemTitle, description } = splitByFirstColon(item);
                return (
                  <FeatureItem key={`${itemTitle}-${i}`} icon={Scale} title={itemTitle} theme="indigo">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
            <div className="px-6 md:px-8 pt-6 space-y-4 text-lg text-text-secondary leading-relaxed">
              {CPC_PROBLEMA.afterItems.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CPC_PERCHE.title}</Badge>}
        title={CPC_PERCHE.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CPC_PERCHE.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <Link href={CESSIONE_URL} className="font-semibold text-brand-indigo underline underline-offset-2">
              {CPC_PERCHE.paragraphWithCessioneLink.linkText}
            </Link>
            {CPC_PERCHE.paragraphWithCessioneLink.rest}
          </p>
          {CPC_PERCHE.paragraphsAfter.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={CPC_TIPOLOGIE.title}
        title={CPC_TIPOLOGIE.sectionTitle}
        intro={CPC_TIPOLOGIE.intro}
        items={CPC_TIPOLOGIE.items}
        icon={Scale}
        splitMode="colon"
        theme="cyan"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={CPC_TEMPI.title}
        title={CPC_TEMPI.sectionTitle}
        introColSpan={3}
        twoColsTableAlign="left"
        description={
          <div className="space-y-6">
            <p>{CPC_TEMPI.intro}</p>
          </div>
        }
        columns={CPC_TEMPI.columns}
        rows={CPC_TEMPI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            {CPC_TEMPI.note.map((p) => (
              <p key={p} className="text-sm text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        }
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CPC_VALUTA.title} title={CPC_VALUTA.sectionTitle} description={<p>{CPC_VALUTA.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0 border-t border-slate-100">
              {CPC_VALUTA.phases.map((phase) => (
                <FeatureItem
                  key={phase.title}
                  icon={Scale}
                  title={phase.title}
                  theme="indigo"
                  hasPadding={false}
                  className="p-8 md:p-12 border-b border-slate-100"
                  titleClassName="text-xl"
                  contentClassName="text-base not-italic"
                  accentOffsetClassName="-left-[32px] md:-left-[48px]"
                >
                  {phase.desc}
                </FeatureItem>
              ))}
            </div>
            <div className="border-t border-slate-100 px-6 md:px-8 py-8 md:py-10">
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
                {CPC_VALUTA.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CPC_IMPORTI.title}</Badge>}
        title={CPC_IMPORTI.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CPC_IMPORTI.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CPC_CONSOLIDAMENTO.title} title={CPC_CONSOLIDAMENTO.sectionTitle} description={<p>{CPC_CONSOLIDAMENTO.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6 px-6 md:px-8 text-lg text-text-secondary leading-relaxed">
            <ul className="list-disc pl-5 space-y-3">
              {CPC_CONSOLIDAMENTO.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CONSOLIDAMENTO_URL}>
              {CPC_CONSOLIDAMENTO.cta}
            </Button>
          </div>
        </div>
      </Section>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={CPC_PROCESSO.title}
        title={CPC_PROCESSO.sectionTitle}
        steps={CPC_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {CPC_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={CPC_EEAT.title}
        title={CPC_EEAT.sectionTitle}
        paragraphs={CPC_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali prestiti per cattivi pagatori e segnalazioni CRIF",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={CPC_FAQ.title} title={CPC_FAQ.sectionTitle} items={CPC_FAQ.items} />

      <ProductFinalCtaSection
        title={CPC_FINAL_CTA.title}
        subtitle={CPC_FINAL_CTA.subtitle}
        primaryCta={CPC_FINAL_CTA.primary}
        secondaryCta={CPC_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
