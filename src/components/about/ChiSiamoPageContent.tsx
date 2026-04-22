"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  CHI_SIAMO_COMPETENZE,
  CHI_SIAMO_CONFORMITA,
  CHI_SIAMO_CONVENZIONI,
  CHI_SIAMO_FAQ,
  CHI_SIAMO_FINAL_CTA,
  CHI_SIAMO_HERO,
  CHI_SIAMO_METODO,
  CHI_SIAMO_NUMERI,
  CHI_SIAMO_PERCHE,
  CHI_SIAMO_RECENSIONI,
  CHI_SIAMO_STORIA,
  CHI_SIAMO_TEAM,
  CHI_SIAMO_TRASPARENZA,
  CHI_SIAMO_VALORI,
} from "@/content/chiSiamo";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20maggiori%20informazioni%20su%20CreditoClick%20e%20sulle%20vostre%20soluzioni.";

export function ChiSiamoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={CHI_SIAMO_HERO.badge}
        title={CHI_SIAMO_HERO.title}
        subtitle={CHI_SIAMO_HERO.subtitle}
        primaryCta={CHI_SIAMO_HERO.primaryCta}
        secondaryCta={CHI_SIAMO_HERO.secondaryCta}
        primaryIcon={MessageCircle}
        secondaryIcon={ArrowRight}
        primaryHref={WHATSAPP_URL}
        secondaryHref="/prodotti"
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Team CreditoClick agenzia finanziaria online"
            priority
          />
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CHI_SIAMO_STORIA.title}</Badge>}
        title={CHI_SIAMO_STORIA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CHI_SIAMO_STORIA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={CHI_SIAMO_METODO.title}
        title={CHI_SIAMO_METODO.sectionTitle}
        intro=""
        items={CHI_SIAMO_METODO.items}
        icon={MessageCircle}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <FeatureListSection
        badge={CHI_SIAMO_VALORI.title}
        title={CHI_SIAMO_VALORI.sectionTitle}
        intro=""
        items={CHI_SIAMO_VALORI.items}
        icon={MessageCircle}
        splitMode="colon"
        theme="green"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <FeatureListSection
        badge={CHI_SIAMO_COMPETENZE.title}
        title={CHI_SIAMO_COMPETENZE.sectionTitle}
        intro=""
        items={CHI_SIAMO_COMPETENZE.items}
        icon={MessageCircle}
        splitMode="colon"
        theme="cyan"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CHI_SIAMO_TEAM.title}</Badge>}
        title={CHI_SIAMO_TEAM.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CHI_SIAMO_TEAM.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60">
        <div className="space-y-8">
          <SectionIntro badge={CHI_SIAMO_NUMERI.title} title={CHI_SIAMO_NUMERI.sectionTitle} description={<p>{CHI_SIAMO_NUMERI.note}</p>} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHI_SIAMO_NUMERI.grid.map((entry) => (
              <div key={entry.label} className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                <p className="text-xs uppercase tracking-wide text-text-secondary">{entry.label}</p>
                <p className="mt-2 text-lg font-bold text-text-primary">{entry.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CHI_SIAMO_CONFORMITA.title}
              title={CHI_SIAMO_CONFORMITA.sectionTitle}
              description={
                <div className="space-y-6">
                  {CHI_SIAMO_CONFORMITA.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <p className="font-semibold text-text-primary">{CHI_SIAMO_CONFORMITA.afterTitle}</p>
                  <p>{CHI_SIAMO_CONFORMITA.after}</p>
                </div>
              }
            />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <ComparisonTable
              columns={["Elemento", "Dettaglio"]}
              rows={CHI_SIAMO_CONFORMITA.table.map(([a, b]) => [a, b])}
            />
          </div>
        </div>
      </Section>

      <FeatureListSection
        badge={CHI_SIAMO_PERCHE.title}
        title={CHI_SIAMO_PERCHE.sectionTitle}
        intro={CHI_SIAMO_PERCHE.intro}
        items={CHI_SIAMO_PERCHE.items}
        icon={MessageCircle}
        splitMode="colon"
        theme="amber"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CHI_SIAMO_CONVENZIONI.title}</Badge>}
        title={CHI_SIAMO_CONVENZIONI.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CHI_SIAMO_CONVENZIONI.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60">
        <div className="space-y-8">
          <SectionIntro badge={CHI_SIAMO_RECENSIONI.title} title={CHI_SIAMO_RECENSIONI.sectionTitle} description={<p>{CHI_SIAMO_RECENSIONI.intro}</p>} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {CHI_SIAMO_RECENSIONI.cards.map((card) => (
              <div key={card} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-text-secondary leading-relaxed">
                {card}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-secondary">{CHI_SIAMO_RECENSIONI.note}</p>
        </div>
      </Section>

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={CHI_SIAMO_FAQ.sectionTitle} title={CHI_SIAMO_FAQ.title} items={CHI_SIAMO_FAQ.items} />

      <FeatureListSection
        badge={CHI_SIAMO_TRASPARENZA.title}
        title={CHI_SIAMO_TRASPARENZA.sectionTitle}
        intro=""
        items={CHI_SIAMO_TRASPARENZA.items}
        icon={MessageCircle}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <ProductFinalCtaSection
        title={CHI_SIAMO_FINAL_CTA.title}
        subtitle={CHI_SIAMO_FINAL_CTA.subtitle}
        primaryCta={CHI_SIAMO_FINAL_CTA.primary}
        secondaryCta={CHI_SIAMO_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref="/contatti"
      />
    </>
  );
}
