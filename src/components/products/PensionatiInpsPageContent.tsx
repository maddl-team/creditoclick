"use client";

import { ArrowRight, Calculator, Heart } from "lucide-react";
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
  PIP_ASSICURAZIONE,
  PIP_CHI,
  PIP_COME_FUNZIONA,
  PIP_ETA,
  PIP_EEAT,
  PIP_FAQ,
  PIP_FINAL_CTA,
  PIP_HERO,
  PIP_IMPORTO,
  PIP_LIQUIDITA,
  PIP_PROCESSO,
  PIP_VANTAGGI,
} from "@/content/pensionatiInps";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20la%20cessione%20del%20quinto%20della%20pensione%20INPS.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CESSIONE_URL = "/prodotti/cessione-del-quinto";
const CRIF_URL = "/soluzioni/cattivi-pagatori-segnalati-crif";
const SOLUZIONI_URL = "/soluzioni";

export function PensionatiInpsPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PIP_HERO.badge}
        title={PIP_HERO.title}
        subtitle={PIP_HERO.subtitle}
        primaryCta={PIP_HERO.primaryCta}
        secondaryCta={PIP_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Cessione del quinto della pensione per pensionati INPS"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PIP_COME_FUNZIONA.title}</Badge>}
        title={PIP_COME_FUNZIONA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PIP_COME_FUNZIONA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro
              badge={PIP_ETA.title}
              title={PIP_ETA.sectionTitle}
              descriptionClassName="space-y-6"
              description={<p>{PIP_ETA.intro}</p>}
            />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6">
            <ul className="px-6 md:px-8 space-y-4 text-lg text-text-secondary leading-relaxed list-disc pl-10">
              {PIP_ETA.examples.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="px-6 md:px-8 text-lg text-text-secondary leading-relaxed">{PIP_ETA.note}</p>
          </div>
        </div>
      </Section>

      <FeatureListSection
        badge={PIP_CHI.title}
        title={PIP_CHI.sectionTitle}
        intro={PIP_CHI.intro}
        items={PIP_CHI.items}
        icon={Heart}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={PIP_IMPORTO.title}
        title={PIP_IMPORTO.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            <p>
              Come per la{" "}
              <Link href={CESSIONE_URL} className="font-semibold text-brand-indigo underline underline-offset-2">
                cessione del quinto dello stipendio
              </Link>
              {PIP_IMPORTO.introAfterCessioneLink}
            </p>
            <p className="font-semibold text-text-primary">{PIP_IMPORTO.formula}</p>
            <p>{PIP_IMPORTO.exampleLead}</p>
          </div>
        }
        columns={PIP_IMPORTO.columns}
        rows={PIP_IMPORTO.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PIP_IMPORTO.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {PIP_IMPORTO.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PIP_ASSICURAZIONE.title}</Badge>}
        title={PIP_ASSICURAZIONE.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PIP_ASSICURAZIONE.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={PIP_VANTAGGI.title} title={PIP_VANTAGGI.sectionTitle} description={PIP_VANTAGGI.intro} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              {PIP_VANTAGGI.items.map((item, i) => {
                const { title: itemTitle, description } = splitByFirstColon(item);
                const titleNode =
                  itemTitle.trim() === "Accessibile anche con segnalazioni CRIF" ? (
                    <>
                      Accessibile anche con{" "}
                      <Link href={CRIF_URL} className="text-brand-indigo underline underline-offset-2">
                        segnalazioni CRIF
                      </Link>
                    </>
                  ) : (
                    itemTitle
                  );
                return (
                  <FeatureItem key={`${itemTitle}-${i}`} icon={Heart} title={titleNode} theme="green">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <FeatureListSection
        badge={PIP_LIQUIDITA.title}
        title={PIP_LIQUIDITA.sectionTitle}
        intro={PIP_LIQUIDITA.intro}
        items={PIP_LIQUIDITA.items}
        icon={Heart}
        splitMode="colon"
        theme="amber"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={SOLUZIONI_URL}>
              {PIP_LIQUIDITA.cta}
            </Button>
          </div>
        }
      />

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={PIP_PROCESSO.title}
        title={PIP_PROCESSO.sectionTitle}
        steps={PIP_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {PIP_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={PIP_EEAT.title}
        title={PIP_EEAT.sectionTitle}
        paragraphs={PIP_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali cessione del quinto della pensione INPS",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PIP_FAQ.title} title={PIP_FAQ.sectionTitle} items={PIP_FAQ.items} />

      <ProductFinalCtaSection
        title={PIP_FINAL_CTA.title}
        subtitle={PIP_FINAL_CTA.subtitle}
        primaryCta={PIP_FINAL_CTA.primary}
        secondaryCta={PIP_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
