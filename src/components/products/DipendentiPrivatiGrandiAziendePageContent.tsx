"use client";

import { ArrowRight, Building2, Calculator } from "lucide-react";
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
import { DualProductCardsSection } from "@/components/products/sections/DualProductCardsSection";
import { CardGridListSection } from "@/components/products/sections/CardGridListSection";
import {
  DPGA_CATEGORIA,
  DPGA_EEAT,
  DPGA_FAQ,
  DPGA_FINAL_CTA,
  DPGA_HERO,
  DPGA_IMPORTI,
  DPGA_ITER,
  DPGA_PERCHE,
  DPGA_PRODOTTI,
  DPGA_SETTORI,
} from "@/content/dipendentiPrivatiGrandiAziende";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20cessione%20del%20quinto%20come%20dipendente%20di%20grande%20azienda.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CESSIONE_URL = "/prodotti/cessione-del-quinto";
const DELEGA_URL = "/prodotti/delega-di-pagamento";

export function DipendentiPrivatiGrandiAziendePageContent() {
  return (
    <>
      <ProductSplitHero
        badge={DPGA_HERO.badge}
        title={DPGA_HERO.title}
        subtitle={DPGA_HERO.subtitle}
        primaryCta={DPGA_HERO.primaryCta}
        secondaryCta={DPGA_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Consulenza cessione del quinto per dipendenti di grandi aziende private"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{DPGA_PERCHE.title}</Badge>}
        title={DPGA_PERCHE.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {DPGA_PERCHE.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <CardGridListSection
        badge={DPGA_CATEGORIA.title}
        title={DPGA_CATEGORIA.sectionTitle}
        description={DPGA_CATEGORIA.intro}
        items={DPGA_CATEGORIA.items}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{DPGA_CATEGORIA.note}</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-bold text-text-primary">Nota importante: </span>
              {DPGA_CATEGORIA.important.replace("Nota importante: ", "")}
            </p>
          </div>
        }
      />

      <DualProductCardsSection
        badge={DPGA_PRODOTTI.title}
        title={DPGA_PRODOTTI.sectionTitle}
        first={{
          title: DPGA_PRODOTTI.cessioneTitle,
          body: DPGA_PRODOTTI.cessioneBody,
          cta: DPGA_PRODOTTI.cessioneCta,
          href: CESSIONE_URL,
        }}
        second={{
          title: DPGA_PRODOTTI.delegaTitle,
          body: DPGA_PRODOTTI.delegaBody,
          cta: DPGA_PRODOTTI.delegaCta,
          href: DELEGA_URL,
        }}
      />

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={DPGA_ITER.title}
        title={DPGA_ITER.sectionTitle}
        description={
          <>
            {DPGA_ITER.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{DPGA_ITER.processLabel}</p>
          </>
        }
        steps={DPGA_ITER.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {DPGA_ITER.cta}
          </Button>
        }
      />

      <ComparisonSection
        badge={DPGA_IMPORTI.title}
        title={DPGA_IMPORTI.sectionTitle}
        description={DPGA_IMPORTI.intro}
        columns={DPGA_IMPORTI.columns}
        rows={DPGA_IMPORTI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <h3 className="font-bold text-text-primary text-lg">{DPGA_IMPORTI.exampleTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{DPGA_IMPORTI.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {DPGA_IMPORTI.cta}
            </Button>
          </div>
        }
      />

      <FeatureListSection
        badge={DPGA_SETTORI.title}
        title={DPGA_SETTORI.sectionTitle}
        intro=""
        items={DPGA_SETTORI.items}
        icon={Building2}
        theme="indigo"
        splitMode="colon"
        stickyIntro
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="border-t border-slate-200/60"
        badge={DPGA_FAQ.title}
        title={DPGA_FAQ.sectionTitle}
        items={DPGA_FAQ.items}
      />

      <LegalTextSection
        badge={DPGA_EEAT.title}
        title={DPGA_EEAT.sectionTitle}
        paragraphs={DPGA_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Trasparenza e conformità normativa per cessione del quinto corporate",
        }}
      />

      <ProductFinalCtaSection
        title={DPGA_FINAL_CTA.title}
        subtitle={DPGA_FINAL_CTA.subtitle}
        primaryCta={DPGA_FINAL_CTA.primary}
        secondaryCta={DPGA_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
