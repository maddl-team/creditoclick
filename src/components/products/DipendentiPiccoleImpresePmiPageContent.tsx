"use client";

import { ArrowRight, BriefcaseBusiness, Calculator, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { IntroPointsSection } from "@/components/products/sections/IntroPointsSection";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { CardGridListSection } from "@/components/products/sections/CardGridListSection";
import {
  DPPMI_ANZIANITA,
  DPPMI_CATEGORIE,
  DPPMI_DOCUMENTI,
  DPPMI_EEAT,
  DPPMI_FAQ,
  DPPMI_FINAL_CTA,
  DPPMI_HERO,
  DPPMI_IMPORTI,
  DPPMI_PASSAGGI,
  DPPMI_PROBLEMA,
  DPPMI_RIFIUTO,
  DPPMI_VALUTAZIONE,
} from "@/content/dipendentiPiccoleImpresePmi";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20una%20valutazione%20gratuita%20per%20la%20cessione%20del%20quinto%20come%20dipendente%20PMI.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CRIF_URL = "/soluzioni/cattivi-pagatori-segnalati-crif";

export function DipendentiPiccoleImpresePmiPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={DPPMI_HERO.badge}
        title={DPPMI_HERO.title}
        subtitle={DPPMI_HERO.subtitle}
        primaryCta={DPPMI_HERO.primaryCta}
        secondaryCta={DPPMI_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Consulenza cessione del quinto per dipendenti di piccole imprese e PMI"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{DPPMI_PROBLEMA.title}</Badge>}
        title={DPPMI_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {DPPMI_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={DPPMI_VALUTAZIONE.title}
        title={DPPMI_VALUTAZIONE.sectionTitle}
        intro={
          <>
            {DPPMI_VALUTAZIONE.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-bold text-text-primary">
              {DPPMI_VALUTAZIONE.h3Title} {DPPMI_VALUTAZIONE.h3Subtitle}
            </p>
            {DPPMI_VALUTAZIONE.h3Paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        items={DPPMI_VALUTAZIONE.parameters}
        icon={CheckCircle2}
        theme="cyan"
        stickyIntro
      />

      <CardGridListSection
        badge={DPPMI_CATEGORIE.title}
        title={DPPMI_CATEGORIE.sectionTitle}
        description={DPPMI_CATEGORIE.intro}
        items={DPPMI_CATEGORIE.items}
        footer={
          <div className="px-6 md:px-8">
            <p className="text-sm text-text-secondary leading-relaxed">{DPPMI_CATEGORIE.note}</p>
          </div>
        }
      />

      <FeatureListSection
        badge={DPPMI_DOCUMENTI.title}
        title={DPPMI_DOCUMENTI.sectionTitle}
        intro={DPPMI_DOCUMENTI.intro}
        items={DPPMI_DOCUMENTI.items}
        icon={CheckCircle2}
        theme="indigo"
        stickyIntro
        footer={
          <div className="px-6 md:px-8">
            <p className="text-sm text-text-secondary leading-relaxed">{DPPMI_DOCUMENTI.note}</p>
          </div>
        }
      />

      <ComparisonSection
        badge={DPPMI_IMPORTI.title}
        title={DPPMI_IMPORTI.sectionTitle}
        description={DPPMI_IMPORTI.intro}
        columns={DPPMI_IMPORTI.columns}
        rows={DPPMI_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <h3 className="font-bold text-text-primary text-lg">{DPPMI_IMPORTI.exampleTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{DPPMI_IMPORTI.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {DPPMI_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <IntroPointsSection
        badge={DPPMI_ANZIANITA.title}
        title={DPPMI_ANZIANITA.sectionTitle}
        paragraphs={DPPMI_ANZIANITA.paragraphs}
        points={[]}
        icon={BriefcaseBusiness}
        bottomImage={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Valore dell'anzianità e TFR nella cessione del quinto PMI",
        }}
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{DPPMI_RIFIUTO.title}</Badge>}
        title={DPPMI_RIFIUTO.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {DPPMI_RIFIUTO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={CRIF_URL}
          >
            {DPPMI_RIFIUTO.cta}
          </Button>
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={DPPMI_PASSAGGI.title}
        title={DPPMI_PASSAGGI.sectionTitle}
        steps={DPPMI_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {DPPMI_PASSAGGI.cta}
          </Button>
        }
      />

      <LegalTextSection
        badge={DPPMI_EEAT.title}
        title={DPPMI_EEAT.sectionTitle}
        paragraphs={DPPMI_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Trasparenza e conformità normativa per cessione del quinto PMI",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        badge={DPPMI_FAQ.title}
        title={DPPMI_FAQ.sectionTitle}
        items={DPPMI_FAQ.items}
      />

      <ProductFinalCtaSection
        title={DPPMI_FINAL_CTA.title}
        subtitle={DPPMI_FINAL_CTA.subtitle}
        primaryCta={DPPMI_FINAL_CTA.primary}
        secondaryCta={DPPMI_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
