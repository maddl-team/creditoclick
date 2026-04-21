"use client";

import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { LegalTextSection } from "@/components/products/sections/LegalTextSection";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { CessioneQuintoCalculator } from "@/components/tools/CessioneQuintoCalculator";
import {
  CRCQ_CATEGORIE,
  CRCQ_COME,
  CRCQ_DAL,
  CRCQ_EEAT,
  CRCQ_FAQ,
  CRCQ_FINAL_CTA,
  CRCQ_HERO,
  CRCQ_INDICATIVO,
  CRCQ_METODO,
} from "@/content/calcoloRataCessioneQuinto";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20un%20preventivo%20personalizzato%20dopo%20la%20simulazione%20della%20rata.";
const DELEGA_URL = "/prodotti/delega-di-pagamento";
const RINNOVO_URL = "/prodotti/rinnovo-cessione-quinto";

export function CalcoloRataCessioneQuintoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={CRCQ_HERO.badge}
        title={CRCQ_HERO.title}
        subtitle={CRCQ_HERO.subtitle}
        primaryCta={CRCQ_HERO.primaryCta}
        secondaryCta={CRCQ_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={Calculator}
        primaryHref="#calcolatore"
        secondaryHref={WHATSAPP_URL}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Calcolo rata cessione del quinto gratuito"
            priority
          />
        }
      />

      <Section id="calcolatore" className="bg-white border-t border-slate-200/60">
        <div className="grid grid-cols-1 gap-8">
          <SectionIntro
            badge={CRCQ_COME.title}
            title={CRCQ_COME.sectionTitle}
            description={
              <div className="space-y-4">
                <p>{CRCQ_COME.intro}</p>
                <p className="font-semibold text-text-primary">{CRCQ_COME.lead}</p>
              </div>
            }
            titleClassName="max-w-4xl"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {CRCQ_COME.points.map((point) => (
              <div key={point} className="rounded-xl border border-slate-200 p-4 text-sm text-text-secondary leading-relaxed">
                {point}
              </div>
            ))}
          </div>
          <CessioneQuintoCalculator />
          <p className="text-xs text-text-secondary">{CRCQ_COME.devNote}</p>
        </div>
      </Section>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CRCQ_INDICATIVO.title}</Badge>}
        title={CRCQ_INDICATIVO.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CRCQ_INDICATIVO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <FeatureListSection
        badge={CRCQ_DAL.title}
        title={CRCQ_DAL.sectionTitle}
        intro={CRCQ_DAL.intro}
        items={CRCQ_DAL.items}
        icon={Calculator}
        splitMode="colon"
        theme="green"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={WHATSAPP_URL}>
              {CRCQ_DAL.cta}
            </Button>
          </div>
        }
      />

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CRCQ_METODO.title}</Badge>}
        title={CRCQ_METODO.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
          {CRCQ_METODO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <Section className="bg-white border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn className="lg:col-span-2">
            <SectionIntro badge={CRCQ_CATEGORIE.title} title={CRCQ_CATEGORIE.sectionTitle} description={<p>{CRCQ_CATEGORIE.intro}</p>} />
          </StickySectionColumn>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              {CRCQ_CATEGORIE.items.map((item, i) => {
                const [rawTitle, ...rest] = item.split(":");
                const itemTitle = rawTitle.trim();
                const description = rest.join(":").trim();
                return (
                  <FeatureItem key={`${itemTitle}-${i}`} icon={Calculator} title={itemTitle} theme="indigo">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
            <div className="px-6 md:px-8 pt-6 space-y-2">
              <div>
                <Link href="/professioni/forze-armate-ordine" className="text-sm font-bold text-brand-indigo underline underline-offset-2">
                  {CRCQ_CATEGORIE.ctaPubblici}
                </Link>
              </div>
              <div>
                <Link href="/professioni/pensionati-inps" className="text-sm font-bold text-brand-indigo underline underline-offset-2">
                  {CRCQ_CATEGORIE.ctaPensionati}
                </Link>
              </div>
              <div>
                <Link href="/professioni/dipendenti-privati-grandi-aziende" className="text-sm font-bold text-brand-indigo underline underline-offset-2">
                  {CRCQ_CATEGORIE.ctaGrandiAziende}
                </Link>
              </div>
              <div>
                <Link href="/professioni/dipendenti-piccole-imprese-pmi" className="text-sm font-bold text-brand-indigo underline underline-offset-2">
                  {CRCQ_CATEGORIE.ctaPmi}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FaqSection
        sectionId="faq"
        sectionClassName="border-t border-slate-200/60"
        badge={CRCQ_FAQ.sectionTitle}
        title={CRCQ_FAQ.title}
        description={
          <div className="space-y-2">
            <div>
              <Link href={DELEGA_URL} className="text-sm font-bold text-brand-indigo underline underline-offset-2">
                {CRCQ_FAQ.ctaDelega}
              </Link>
            </div>
            <div>
              <Link href={RINNOVO_URL} className="text-sm font-bold text-brand-indigo underline underline-offset-2">
                {CRCQ_FAQ.ctaRinnovo}
              </Link>
            </div>
          </div>
        }
        items={CRCQ_FAQ.items}
      />

      <LegalTextSection badge={CRCQ_EEAT.title} title={CRCQ_EEAT.sectionTitle} paragraphs={CRCQ_EEAT.paragraphs} />

      <ProductFinalCtaSection
        title={CRCQ_FINAL_CTA.title}
        subtitle={CRCQ_FINAL_CTA.subtitle}
        primaryCta={CRCQ_FINAL_CTA.primary}
        secondaryCta={CRCQ_FINAL_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref="#calcolatore"
      />
    </>
  );
}
