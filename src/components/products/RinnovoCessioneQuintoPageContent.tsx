"use client";

import { ArrowRight, Calculator, CheckCircle2, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { IntroPointsSection } from "@/components/products/sections/IntroPointsSection";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  RCQ_CONFRONTO,
  RCQ_CONVIENE,
  RCQ_DEFINIZIONE,
  RCQ_EEAT,
  RCQ_FAQ,
  RCQ_FINAL_CTA,
  RCQ_HERO,
  RCQ_LIQUIDITA,
  RCQ_PASSAGGI,
  RCQ_PORTABILITA,
  RCQ_REQUISITI,
} from "@/content/rinnovoCessioneQuinto";

const WHATSAPP_RENEWAL_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20verificare%20se%20posso%20rinnovare%20la%20mia%20cessione%20del%20quinto.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";
const CONSOLIDAMENTO_DEBITI_URL = "/soluzioni/consolidamento-debiti";
const DELEGA_DI_PAGAMENTO_URL = "/prodotti/delega-di-pagamento";
const CESSIONE_DEL_QUINTO_URL = "/prodotti/cessione-del-quinto";

export function RinnovoCessioneQuintoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={RCQ_HERO.badge}
        title={RCQ_HERO.title}
        subtitle={RCQ_HERO.subtitle}
        primaryCta={RCQ_HERO.primaryCta}
        secondaryCta={RCQ_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref={WHATSAPP_RENEWAL_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={
          <ProductSplitHeroImage
            src="/images/creditoclick_rinnovo-cessione-del-quinto.jpg"
            alt="Consulenza sul rinnovo della cessione del quinto"
            priority
          />
        }
      />

      <IntroPointsSection
        badge={RCQ_DEFINIZIONE.title}
        title={RCQ_DEFINIZIONE.sectionTitle}
        paragraphs={RCQ_DEFINIZIONE.paragraphs.slice(0, 2)}
        points={[RCQ_DEFINIZIONE.paragraphs[2]]}
        icon={RefreshCcw}
        bottomImage={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Analisi del rinnovo e della nuova liquidità disponibile",
        }}
      />

      <ComparisonSection
        badge={RCQ_REQUISITI.title}
        title={RCQ_REQUISITI.sectionTitle}
        description={
          <div className="space-y-4">
            <p>{RCQ_REQUISITI.intro}</p>
            <p className="font-bold text-text-primary">
              {RCQ_REQUISITI.ruleTitle} {RCQ_REQUISITI.ruleSubtitle}
            </p>
          </div>
        }
        columns={RCQ_REQUISITI.columns}
        rows={RCQ_REQUISITI.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{RCQ_REQUISITI.note}</p>
            <p className="font-bold text-text-primary">
              {RCQ_REQUISITI.extraTitle} {RCQ_REQUISITI.extraSubtitle}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">{RCQ_REQUISITI.extraBody}</p>
          </div>
        }
      />

      <ComparisonSection
        badge={RCQ_LIQUIDITA.title}
        title={RCQ_LIQUIDITA.sectionTitle}
        description={RCQ_LIQUIDITA.intro}
        columns={RCQ_LIQUIDITA.columns}
        rows={RCQ_LIQUIDITA.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <h3 className="font-bold text-text-primary text-lg">{RCQ_LIQUIDITA.exampleTitle}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{RCQ_LIQUIDITA.note}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_RENEWAL_URL}>
              {RCQ_LIQUIDITA.cta}
            </Button>
          </div>
        }
      />

      <FeatureListSection
        badge={RCQ_CONVIENE.title}
        title={RCQ_CONVIENE.sectionTitle}
        intro={RCQ_CONVIENE.intro}
        items={RCQ_CONVIENE.items}
        icon={CheckCircle2}
        theme="green"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div className="space-y-4">
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CONSOLIDAMENTO_DEBITI_URL}>
              {RCQ_CONVIENE.consolidamentoCta}
            </Button>
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-bold text-text-primary">{RCQ_CONVIENE.whenNotTitle} </span>
              {RCQ_CONVIENE.whenNotBody}
            </p>
          </div>
        }
      />

      <Section className="border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-x-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={RCQ_PORTABILITA.title}
              title={RCQ_PORTABILITA.sectionTitle}
              descriptionClassName="space-y-6"
              description={
                <>
                  {RCQ_PORTABILITA.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </>
              }
            />
          </div>
          <div className="relative lg:col-span-2 min-h-[260px] lg:min-h-full w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/cessione-del-quinto-hero.jpg"
              alt="Gestione portabilità della cessione del quinto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={RCQ_PASSAGGI.title}
        title={RCQ_PASSAGGI.sectionTitle}
        steps={RCQ_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_RENEWAL_URL}>
            {RCQ_PASSAGGI.cta}
          </Button>
        }
      />

      <ComparisonSection
        badge={RCQ_CONFRONTO.title}
        title={RCQ_CONFRONTO.sectionTitle}
        columns={RCQ_CONFRONTO.columns}
        rows={RCQ_CONFRONTO.rows}
        footer={
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-sm text-text-secondary leading-relaxed">{RCQ_CONFRONTO.note}</p>
            <div className="flex flex-col gap-2">
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={DELEGA_DI_PAGAMENTO_URL}>
                {RCQ_CONFRONTO.delegaCta}
              </Button>
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={CESSIONE_DEL_QUINTO_URL}>
                {RCQ_CONFRONTO.cessioneCta}
              </Button>
            </div>
          </div>
        }
      />

      <LegalTextSection
        badge={RCQ_EEAT.title}
        title={RCQ_EEAT.sectionTitle}
        paragraphs={RCQ_EEAT.paragraphs}
        image={{
          src: "/images/calcolo-importo-massimo.jpg",
          alt: "Informazioni legali sul rinnovo della cessione del quinto",
        }}
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        badge={RCQ_FAQ.title}
        title={RCQ_FAQ.sectionTitle}
        items={RCQ_FAQ.items}
      />

      <ProductFinalCtaSection
        title={RCQ_FINAL_CTA.title}
        subtitle={RCQ_FINAL_CTA.subtitle}
        primaryCta={RCQ_FINAL_CTA.primary}
        secondaryCta={RCQ_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_RENEWAL_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
