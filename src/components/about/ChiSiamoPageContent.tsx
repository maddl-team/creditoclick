"use client";

import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { cn } from "@/lib/utils";
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

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          <div className="lg:col-span-4 p-6 md:p-8 mb-8">
            <Badge variant="subtle" className="mb-4">{CHI_SIAMO_RECENSIONI.title}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight max-w-3xl">
              {CHI_SIAMO_RECENSIONI.sectionTitle}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">{CHI_SIAMO_RECENSIONI.intro}</p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-slate-200/90">
            {CHI_SIAMO_RECENSIONI.cards.map((card, i) => {
              const [quotePart, authorPart = ""] = card.split(" — ");
              const [author = "", role = ""] = authorPart.split(", ");
              return (
                <div
                  key={card}
                  className={cn(
                    "flex flex-col h-full p-6 md:p-8 transition-all duration-300 group relative",
                    i !== CHI_SIAMO_RECENSIONI.cards.length - 1 && "lg:border-r border-slate-200/90",
                    i % 2 === 0 && "md:border-r lg:border-r-0",
                    i < 2 && "border-b md:border-b-0"
                  )}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3 h-3 fill-brand-indigo text-brand-indigo" />
                    ))}
                  </div>

                  <div className="relative mb-8 flex-grow">
                    <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                    <p className="text-text-primary text-sm leading-relaxed italic pr-4">{quotePart}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo font-bold text-[10px]">
                      {author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary leading-none mb-1">{author}</p>
                      <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">{role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Section>

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={CHI_SIAMO_FAQ.sectionTitle} title={CHI_SIAMO_FAQ.title} items={CHI_SIAMO_FAQ.items} />

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
