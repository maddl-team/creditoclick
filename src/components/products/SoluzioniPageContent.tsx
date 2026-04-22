"use client";

import { ArrowRight, MessageCircle, Target } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  SOLUZIONI_FAQ,
  SOLUZIONI_FINAL_CTA,
  SOLUZIONI_HERO,
  SOLUZIONI_LOGICA,
  SOLUZIONI_ORIENTAMENTO,
  SOLUZIONI_PAIN,
  SOLUZIONI_PRINCIPI,
  SOLUZIONI_PROGETTI,
} from "@/content/soluzioni";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20ti%20descrivo%20la%20mia%20situazione%20per%20capire%20la%20soluzione%20pi%C3%B9%20adatta.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";

export function SoluzioniPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={SOLUZIONI_HERO.badge}
        title={SOLUZIONI_HERO.title}
        subtitle={SOLUZIONI_HERO.subtitle}
        primaryCta={SOLUZIONI_HERO.primaryCta}
        secondaryCta={SOLUZIONI_HERO.secondaryCta}
        primaryIcon={MessageCircle}
        secondaryIcon={ArrowRight}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={<ProductSplitHeroImage src="/images/cessione-del-quinto-hero.jpg" alt="Soluzioni CreditoClick" priority />}
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{SOLUZIONI_LOGICA.title}</Badge>}
        title={SOLUZIONI_LOGICA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {SOLUZIONI_LOGICA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="space-y-8">
          <SectionIntro badge={SOLUZIONI_PAIN.title} title={SOLUZIONI_PAIN.sectionTitle} description={<p>{SOLUZIONI_PAIN.intro}</p>} />
          <p className="text-text-secondary leading-relaxed px-6 md:px-8">{SOLUZIONI_PAIN.outro}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SOLUZIONI_PAIN.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-5">
                <h3 className="text-2xl font-bold text-text-primary leading-tight">{card.title}</h3>
                <p className="text-base font-semibold text-text-primary">{card.subtitle}</p>
                <p className="text-text-secondary leading-relaxed">{card.body}</p>
                <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href={card.href}>
                  {card.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="space-y-8">
          <SectionIntro badge={SOLUZIONI_PROGETTI.title} title={SOLUZIONI_PROGETTI.sectionTitle} description={<p>{SOLUZIONI_PROGETTI.intro}</p>} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SOLUZIONI_PROGETTI.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5">
                <h3 className="text-2xl font-bold text-text-primary leading-tight">{card.title}</h3>
                <p className="text-base font-semibold text-text-primary">{card.subtitle}</p>
                <p className="text-text-secondary leading-relaxed">{card.body}</p>
                <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href={card.href}>
                  {card.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ComparisonSection
        badge={SOLUZIONI_ORIENTAMENTO.title}
        title={SOLUZIONI_ORIENTAMENTO.sectionTitle}
        description=""
        columns={SOLUZIONI_ORIENTAMENTO.columns}
        rows={SOLUZIONI_ORIENTAMENTO.rows}
        twoColsTableAlign="left"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
      />

      <FeatureListSection
        badge={SOLUZIONI_PRINCIPI.title}
        title={SOLUZIONI_PRINCIPI.sectionTitle}
        intro={SOLUZIONI_PRINCIPI.intro}
        items={SOLUZIONI_PRINCIPI.items}
        icon={Target}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href={WHATSAPP_URL}>
            {SOLUZIONI_PRINCIPI.cta}
          </Button>
        }
      />

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={SOLUZIONI_FAQ.sectionTitle} title={SOLUZIONI_FAQ.title} items={SOLUZIONI_FAQ.items} />

      <ProductFinalCtaSection
        title={SOLUZIONI_FINAL_CTA.title}
        subtitle={SOLUZIONI_FINAL_CTA.subtitle}
        primaryCta={SOLUZIONI_FINAL_CTA.primary}
        secondaryCta={SOLUZIONI_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
