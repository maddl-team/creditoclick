"use client";

import { ArrowRight, MessageCircle, BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  PROFESSIONI_CATEGORIE,
  PROFESSIONI_DIFFERENZA,
  PROFESSIONI_FAQ,
  PROFESSIONI_FINAL_CTA,
  PROFESSIONI_HERO,
  PROFESSIONI_LOGICA,
  PROFESSIONI_NON_LISTATE,
} from "@/content/professioni";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20una%20valutazione%20in%20base%20alla%20mia%20categoria%20professionale.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata";

export function ProfessioniPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PROFESSIONI_HERO.badge}
        title={PROFESSIONI_HERO.title}
        subtitle={PROFESSIONI_HERO.subtitle}
        primaryCta={PROFESSIONI_HERO.primaryCta}
        secondaryCta={PROFESSIONI_HERO.secondaryCta}
        primaryIcon={MessageCircle}
        secondaryIcon={ArrowRight}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={<ProductSplitHeroImage src="/images/cessione-del-quinto-hero.jpg" alt="Professioni CreditoClick" priority />}
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PROFESSIONI_LOGICA.title}</Badge>}
        title={PROFESSIONI_LOGICA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PROFESSIONI_LOGICA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="space-y-10">
          <SectionIntro badge={PROFESSIONI_CATEGORIE.title} title={PROFESSIONI_CATEGORIE.sectionTitle} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROFESSIONI_CATEGORIE.cards.map((card) => (
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

      <CalloutSection
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        containerClassName="bg-white p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PROFESSIONI_DIFFERENZA.title}</Badge>}
        title={PROFESSIONI_DIFFERENZA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PROFESSIONI_DIFFERENZA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <div className="lg:col-span-2">
            <SectionIntro badge={PROFESSIONI_NON_LISTATE.title} title={PROFESSIONI_NON_LISTATE.sectionTitle} />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <FeatureItem icon={BriefcaseBusiness} title="Lavoriamo anche con profili non elencati" theme="indigo">
              <div className="space-y-4">
                {PROFESSIONI_NON_LISTATE.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href={WHATSAPP_URL}>
                  {PROFESSIONI_NON_LISTATE.cta}
                </Button>
              </div>
            </FeatureItem>
          </div>
        </div>
      </Section>

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PROFESSIONI_FAQ.sectionTitle} title={PROFESSIONI_FAQ.title} items={PROFESSIONI_FAQ.items} />

      <ProductFinalCtaSection
        title={PROFESSIONI_FINAL_CTA.title}
        subtitle={PROFESSIONI_FINAL_CTA.subtitle}
        primaryCta={PROFESSIONI_FINAL_CTA.primary}
        secondaryCta={PROFESSIONI_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
