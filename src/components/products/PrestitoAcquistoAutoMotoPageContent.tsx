"use client";

import { ArrowRight, Bike, Calculator } from "lucide-react";
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
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { splitByFirstColon } from "@/lib/splitFeatureText";
import {
  PAAM_CONFRONTO,
  PAAM_EEAT,
  PAAM_FAQ,
  PAAM_FINAL_CTA,
  PAAM_HERO,
  PAAM_IMPORTI,
  PAAM_MOTO,
  PAAM_PERCHE,
  PAAM_PROCESSO,
  PAAM_PROBLEMA,
  PAAM_USATO,
} from "@/content/prestitoAcquistoAutoMoto";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20acquisto%20auto%20o%20moto%20con%20cessione%20del%20quinto.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CRIF_URL = "/soluzioni/cattivi-pagatori-segnalati-crif";

export function PrestitoAcquistoAutoMotoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PAAM_HERO.badge}
        title={PAAM_HERO.title}
        subtitle={PAAM_HERO.subtitle}
        primaryCta={PAAM_HERO.primaryCta}
        secondaryCta={PAAM_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestito acquisto auto e moto con cessione del quinto"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PAAM_PROBLEMA.title}</Badge>}
        title={PAAM_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PAAM_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={PAAM_PERCHE.title} title={PAAM_PERCHE.sectionTitle} description={PAAM_PERCHE.intro} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              {PAAM_PERCHE.items.map((item, i) => {
                const { title: itemTitle, description } = splitByFirstColon(item);
                const titleNode =
                  itemTitle === "Accessibile anche con segnalazioni CRIF" ? (
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
                  <FeatureItem key={`${itemTitle}-${i}`} icon={Bike} title={titleNode} theme="indigo">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <ComparisonSection
        badge={PAAM_IMPORTI.title}
        title={PAAM_IMPORTI.sectionTitle}
        introColSpan={3}
        description={
          <div className="space-y-6">
            <p>L’importo ottenibile dipende dallo stipendio netto mensile (o dalla pensione) e dalla durata prescelta.</p>
            <p className="font-semibold text-text-primary">{PAAM_IMPORTI.formula}</p>
            <p>{PAAM_IMPORTI.lead}</p>
          </div>
        }
        columns={PAAM_IMPORTI.columns}
        rows={PAAM_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{PAAM_IMPORTI.note}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{PAAM_IMPORTI.afterNote}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {PAAM_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <ComparisonSection
        badge={PAAM_CONFRONTO.title}
        title={PAAM_CONFRONTO.sectionTitle}
        introColSpan={2}
        description={undefined}
        columns={PAAM_CONFRONTO.columns}
        rows={PAAM_CONFRONTO.rows}
        footer={
          <div className="px-6 md:px-8">
            <p className="text-sm text-text-secondary leading-relaxed">{PAAM_CONFRONTO.note}</p>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PAAM_USATO.title}</Badge>}
        title={PAAM_USATO.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PAAM_USATO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={PAAM_MOTO.title} title={PAAM_MOTO.sectionTitle} description={<p>{PAAM_MOTO.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8 space-y-6 px-6 md:px-8 text-lg text-text-secondary leading-relaxed">
            <p className="font-semibold text-text-primary">{PAAM_MOTO.lead}</p>
            <ul className="list-disc pl-5 space-y-3">
              {PAAM_MOTO.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{PAAM_MOTO.note}</p>
          </div>
        </div>
      </Section>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={PAAM_PROCESSO.title}
        title={PAAM_PROCESSO.sectionTitle}
        steps={PAAM_PROCESSO.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {PAAM_PROCESSO.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={PAAM_EEAT.title}
        title={PAAM_EEAT.sectionTitle}
        paragraphs={PAAM_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali prestito acquisto auto e moto",
        }}
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PAAM_FAQ.title} title={PAAM_FAQ.sectionTitle} items={PAAM_FAQ.items} />

      <ProductFinalCtaSection
        title={PAAM_FINAL_CTA.title}
        subtitle={PAAM_FINAL_CTA.subtitle}
        primaryCta={PAAM_FINAL_CTA.primary}
        secondaryCta={PAAM_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
