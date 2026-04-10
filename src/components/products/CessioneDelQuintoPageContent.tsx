"use client";

import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { FaqSection } from "@/components/ui/FaqSection";
import { IndigoCtaSection } from "@/components/ui/IndigoCtaSection";
import { ProcessStepsSection } from "@/components/ui/ProcessStepsSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import {
  CDQ_CALCOLO,
  CDQ_CATEGORIE,
  CDQ_CONFRONTO,
  CDQ_DEFINIZIONE,
  CDQ_EEAT,
  CDQ_FAQ,
  CDQ_FINAL_CTA,
  CDQ_HERO,
  CDQ_PASSAGGI,
  CDQ_TASSI,
  CDQ_VANTAGGI_LIMITI,
} from "@/content/cessioneDelQuinto";
import { splitByFirstColon, splitByFirstPeriod } from "@/lib/splitFeatureText";

const CATEGORY_ICONS = [Building2, Users, GraduationCap] as const;

export function CessioneDelQuintoPageContent() {
  return (
    <>
      <ProductSplitHero
        badge={CDQ_HERO.badge}
        title={CDQ_HERO.title}
        subtitle={CDQ_HERO.subtitle}
        primaryCta={CDQ_HERO.primaryCta}
        secondaryCta={CDQ_HERO.secondaryCta}
        primaryIcon={ArrowRight}
        secondaryIcon={BarChart3}
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Consulenza finanziaria per cessione del quinto"
            priority
          />
        }
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CDQ_DEFINIZIONE.sectionTitle}
              title={CDQ_DEFINIZIONE.title}
              descriptionClassName="space-y-6"
              description={
                <>
                  {CDQ_DEFINIZIONE.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </>
              }
            />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              {CDQ_DEFINIZIONE.points.map((item, i) => {
                const { title, description } = splitByFirstColon(item);
                return (
                  <FeatureItem key={i} icon={ShieldCheck} title={title} theme="cyan">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn>
            <SectionIntro badge={CDQ_CATEGORIE.sectionTitle} title={CDQ_CATEGORIE.title} description={CDQ_CATEGORIE.intro} />
          </StickySectionColumn>
          <div className="lg:col-span-2 grid gap-0 pt-4 lg:pt-8">
            {CDQ_CATEGORIE.items.map((item, i) => (
              <FeatureItem key={i} icon={CATEGORY_ICONS[i]} title={item.title}>
                <div className="space-y-4">
                  <p>{item.body}</p>
                  {"extra" in item && item.extra ? <p>{item.extra}</p> : null}
                  <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
                    {item.cta}
                  </Button>
                </div>
              </FeatureItem>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CDQ_TASSI.sectionTitle}
              title={CDQ_TASSI.title}
              descriptionClassName="space-y-6"
              description={
                <>
                  {CDQ_TASSI.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </>
              }
            />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <FeatureItem icon={BarChart3} title={CDQ_TASSI.factorsTitle} theme="cyan">
              <ul className="space-y-2">
                {CDQ_TASSI.factors.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </FeatureItem>
            <div className="p-6 md:p-8 space-y-6 text-sm text-text-secondary leading-relaxed">
              {CDQ_TASSI.notes.map((n) => (
                <p key={n}>{n}</p>
              ))}
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
                {CDQ_TASSI.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-x-0 lg:gap-y-10">
          <div className="lg:col-span-2">
            <SectionIntro badge={CDQ_CALCOLO.sectionTitle} title={CDQ_CALCOLO.title} description={CDQ_CALCOLO.intro} />
            <div className="px-6 md:px-8 pb-8">
              <h3 className="font-bold text-xl text-text-primary mb-4">{CDQ_CALCOLO.formulaTitle}</h3>
              <p className="text-text-secondary leading-relaxed">{CDQ_CALCOLO.formula}</p>
            </div>
          </div>
          <div className="lg:col-span-3 min-w-0 flex flex-col gap-4">
            <div className="px-6 md:px-8">
              <h3 className="font-bold text-text-primary text-lg">{CDQ_CALCOLO.exampleTitle}</h3>
            </div>
            <ComparisonTable columns={CDQ_CALCOLO.columnLabels} rows={CDQ_CALCOLO.table} />
            <div className="px-6 md:px-8 space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">{CDQ_CALCOLO.note}</p>
              <p className="text-sm text-text-primary">{CDQ_CALCOLO.ctaText}</p>
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
                {CDQ_CALCOLO.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <StickySectionColumn>
            <SectionIntro
              badge={CDQ_VANTAGGI_LIMITI.sectionTitle}
              title={CDQ_VANTAGGI_LIMITI.title}
              description={CDQ_VANTAGGI_LIMITI.intro}
            />
          </StickySectionColumn>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-6 px-6 md:px-8">{CDQ_VANTAGGI_LIMITI.prosTitle}</h3>
              {CDQ_VANTAGGI_LIMITI.pros.map((p, i) => {
                const { title, description } = splitByFirstPeriod(p);
                return (
                  <FeatureItem key={i} icon={CheckCircle2} title={title} theme="green">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
            <div className="bg-slate-100/50">
              <h3 className="text-xl font-bold text-amber-600 mb-6 px-6 md:px-8">{CDQ_VANTAGGI_LIMITI.consTitle}</h3>
              {CDQ_VANTAGGI_LIMITI.cons.map((c, i) => {
                const { title, description } = splitByFirstPeriod(c);
                return (
                  <FeatureItem key={i} icon={Scale} title={title} theme="amber">
                    {description}
                  </FeatureItem>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/60 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-x-0 lg:gap-y-10">
          <div className="lg:col-span-2">
            <SectionIntro badge={CDQ_CONFRONTO.sectionTitle} title={CDQ_CONFRONTO.title} description={CDQ_CONFRONTO.note} />
          </div>
          <div className="lg:col-span-3">
            <ComparisonTable columns={CDQ_CONFRONTO.columnLabels} rows={CDQ_CONFRONTO.rows} />
          </div>
        </div>
      </Section>

      <ProcessStepsSection
        sectionClassName="border-t border-slate-200/60"
        badge={CDQ_PASSAGGI.sectionTitle}
        title={CDQ_PASSAGGI.title}
        steps={CDQ_PASSAGGI.steps}
        footer={
          <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
            {CDQ_PASSAGGI.cta}
          </Button>
        }
      />

      <Section className="bg-slate-900 text-white border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={<Badge className="bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30">{CDQ_EEAT.sectionTitle}</Badge>}
              title={CDQ_EEAT.title}
              titleClassName="text-white"
              descriptionClassName="text-indigo-100/80"
              description={CDQ_EEAT.intro}
            />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <div className="grid gap-0">
              <FeatureItem
                icon={FileCheck}
                title={CDQ_EEAT.features[0].title}
                theme="cyan"
                titleClassName="text-indigo-50"
                contentClassName="text-indigo-100/80"
                iconClassName="bg-white/10 text-brand-cyan"
              >
                {CDQ_EEAT.features[0].description}
              </FeatureItem>
              <FeatureItem
                icon={Scale}
                title={CDQ_EEAT.features[1].title}
                theme="cyan"
                titleClassName="text-indigo-50"
                contentClassName="text-indigo-100/80"
                iconClassName="bg-white/10 text-brand-cyan"
              >
                {CDQ_EEAT.features[1].description}
              </FeatureItem>
            </div>
          </div>
        </div>
      </Section>

      <FaqSection
        sectionId="faq"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60"
        badge={CDQ_FAQ.sectionTitle}
        title={CDQ_FAQ.title}
        items={CDQ_FAQ.items}
      />

      <IndigoCtaSection>
        <div className="max-w-3xl p-6 md:p-8">
          <h2 className="text-4xl md:text-5xl text-white leading-[1.1] font-bold mb-8">{CDQ_FINAL_CTA.title}</h2>
          <p className="text-xl text-indigo-100 opacity-90 leading-relaxed mb-12">{CDQ_FINAL_CTA.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover border-none text-white shadow-lg shadow-emerald-500/20" icon={MessageCircle}>
              {CDQ_FINAL_CTA.primary}
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto bg-white text-brand-indigo hover:bg-indigo-50 border-white" icon={ArrowRight}>
              {CDQ_FINAL_CTA.secondary}
            </Button>
          </div>
        </div>
      </IndigoCtaSection>
    </>
  );
}
