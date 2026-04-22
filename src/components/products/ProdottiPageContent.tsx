"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Scale, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ComparisonSection } from "@/components/products/sections/ComparisonSection";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import {
  PRODOTTI_ACCESSO,
  PRODOTTI_CONFRONTO,
  PRODOTTI_FAQ,
  PRODOTTI_FINAL_CTA,
  PRODOTTI_HERO,
  PRODOTTI_LOGICA,
  PRODOTTI_PROCESSO,
  PRODOTTI_TAVOLA,
} from "@/content/prodotti";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20capire%20quale%20prodotto%20%C3%A8%20pi%C3%B9%20adatto%20alla%20mia%20situazione.";
const CALCOLO_RATA_URL = "/strumenti/calcolo-rata-cessione-quinto";

export function ProdottiPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={PRODOTTI_HERO.badge}
        title={PRODOTTI_HERO.title}
        subtitle={PRODOTTI_HERO.subtitle}
        primaryCta={PRODOTTI_HERO.primaryCta}
        secondaryCta={PRODOTTI_HERO.secondaryCta}
        primaryIcon={MessageCircle}
        secondaryIcon={ArrowRight}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
        right={<ProductSplitHeroImage src="/images/cessione-del-quinto-hero.jpg" alt="Prodotti CreditoClick" priority />}
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{PRODOTTI_LOGICA.title}</Badge>}
        title={PRODOTTI_LOGICA.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {PRODOTTI_LOGICA.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="space-y-10">
          <SectionIntro badge={PRODOTTI_CONFRONTO.title} title={PRODOTTI_CONFRONTO.sectionTitle} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRODOTTI_CONFRONTO.cards.map((card) => (
              <div key={card.badge} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-5">
                <Badge variant="subtle">{card.badge}</Badge>
                <h3 className="text-xl font-bold text-text-primary leading-tight">{card.heading}</h3>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-text-primary">In sintesi:</p>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc ml-5">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href={card.href}>
                  {card.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ComparisonSection
        badge={PRODOTTI_TAVOLA.title}
        title={PRODOTTI_TAVOLA.sectionTitle}
        description=""
        columns={PRODOTTI_TAVOLA.columns}
        rows={PRODOTTI_TAVOLA.rows}
        twoColsTableAlign="left"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
      />

      <FeatureListSection
        badge={PRODOTTI_ACCESSO.title}
        title={PRODOTTI_ACCESSO.sectionTitle}
        intro={PRODOTTI_ACCESSO.intro}
        items={PRODOTTI_ACCESSO.items}
        icon={WalletCards}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div className="space-y-4">
            <p className="text-text-secondary leading-relaxed">{PRODOTTI_ACCESSO.notAllowed}</p>
            <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href="/professioni">
              {PRODOTTI_ACCESSO.cta}
            </Button>
          </div>
        }
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <div className="lg:col-span-2">
            <SectionIntro badge={PRODOTTI_PROCESSO.title} title={PRODOTTI_PROCESSO.sectionTitle} />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <FeatureItem icon={Scale} title="Il processo CreditoClick in sintesi" theme="cyan">
              <div className="space-y-4">
                {PRODOTTI_PROCESSO.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Link href="/chi-siamo" className="inline-flex text-sm font-semibold text-brand-indigo underline underline-offset-2">
                  {PRODOTTI_PROCESSO.linkLabel}
                </Link>
                <div>
                  <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold" href={WHATSAPP_URL}>
                    {PRODOTTI_PROCESSO.cta}
                  </Button>
                </div>
              </div>
            </FeatureItem>
          </div>
        </div>
      </Section>

      <FaqSection sectionId="faq" sectionClassName="border-t border-slate-200/60" badge={PRODOTTI_FAQ.sectionTitle} title={PRODOTTI_FAQ.title} items={PRODOTTI_FAQ.items} />

      <ProductFinalCtaSection
        title={PRODOTTI_FINAL_CTA.title}
        subtitle={PRODOTTI_FINAL_CTA.subtitle}
        primaryCta={PRODOTTI_FINAL_CTA.primary}
        secondaryCta={PRODOTTI_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref={CALCOLO_RATA_URL}
      />
    </>
  );
}
