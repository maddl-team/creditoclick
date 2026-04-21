"use client";

import { ArrowRight, BookOpenText, Calculator } from "lucide-react";
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
import {
  ISN_CATEGORIE,
  ISN_CRIF,
  ISN_DELEGA,
  ISN_EEAT,
  ISN_FAQ,
  ISN_FINAL_CTA,
  ISN_HERO,
  ISN_NOIPA,
  ISN_PASSAGGI,
  ISN_PROBLEMA,
  ISN_SOLUZIONI,
  ISN_TASSI,
} from "@/content/insegnantiScuolaNoipa";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20per%20la%20cessione%20del%20quinto%20tramite%20NoiPA.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const DELEGA_URL = "/prodotti/delega-di-pagamento";
const RINNOVO_URL = "/prodotti/rinnovo-cessione-quinto";
const CRIF_URL = "/soluzioni/cattivi-pagatori-segnalati-crif";
const SOLUZIONI_URL = "/soluzioni";

export function InsegnantiScuolaNoipaPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={ISN_HERO.badge}
        title={ISN_HERO.title}
        subtitle={ISN_HERO.subtitle}
        primaryCta={ISN_HERO.primaryCta}
        secondaryCta={ISN_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Prestiti per insegnanti e personale ATA con convenzione NoiPA"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{ISN_PROBLEMA.title}</Badge>}
        title={ISN_PROBLEMA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {ISN_PROBLEMA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <IntroPointsSection
        badge={ISN_NOIPA.title}
        title={ISN_NOIPA.sectionTitle}
        paragraphs={[ISN_NOIPA.paragraphs[0], ISN_NOIPA.paragraphs[3]]}
        points={ISN_NOIPA.points}
        icon={BookOpenText}
      />

      <FeatureListSection
        badge={ISN_CATEGORIE.title}
        title={ISN_CATEGORIE.sectionTitle}
        intro={ISN_CATEGORIE.intro}
        items={ISN_CATEGORIE.items}
        icon={BookOpenText}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ComparisonSection
        badge={ISN_TASSI.title}
        title={ISN_TASSI.sectionTitle}
        introColSpan={3}
        description={
          <>
            {ISN_TASSI.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </>
        }
        columns={ISN_TASSI.columns}
        rows={ISN_TASSI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <h3 className="font-bold text-text-primary text-lg">{ISN_TASSI.exampleTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{ISN_TASSI.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CALCOLO_RATA_URL}>
              {ISN_TASSI.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{ISN_CRIF.title}</Badge>}
        title={ISN_CRIF.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {ISN_CRIF.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={CRIF_URL}
          >
            {ISN_CRIF.cta}
          </Button>
        </div>
      </CalloutSection>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{ISN_DELEGA.title}</Badge>}
        title={ISN_DELEGA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-white leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-indigo-100/80 leading-relaxed">
          {ISN_DELEGA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button
            variant="link"
            className="p-0 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80"
            icon={ArrowRight}
            href={DELEGA_URL}
          >
            {ISN_DELEGA.cta}
          </Button>
        </div>
      </CalloutSection>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={ISN_PASSAGGI.title}
        title={ISN_PASSAGGI.sectionTitle}
        steps={ISN_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
            {ISN_PASSAGGI.cta}
          </Button>
        }
      />

      <FeatureListSection
        badge={ISN_SOLUZIONI.title}
        title={ISN_SOLUZIONI.sectionTitle}
        intro=""
        items={ISN_SOLUZIONI.items}
        icon={BookOpenText}
        splitMode="colon"
        theme="green"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={SOLUZIONI_URL}>
              {ISN_SOLUZIONI.cta}
            </Button>
          </div>
        }
      />

      <LegalTextSection
        badge={ISN_EEAT.title}
        title={ISN_EEAT.sectionTitle}
        paragraphs={ISN_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali e conformità normativa per cessione del quinto NoiPA",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="border-t border-slate-200/60"
        badge={ISN_FAQ.title}
        title={ISN_FAQ.sectionTitle}
        description={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={RINNOVO_URL}>
            {ISN_FAQ.renewalCta}
          </Button>
        }
        items={ISN_FAQ.items}
      />

      <ProductFinalCtaSection
        title={ISN_FINAL_CTA.title}
        subtitle={ISN_FINAL_CTA.subtitle}
        primaryCta={ISN_FINAL_CTA.primary}
        secondaryCta={ISN_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
