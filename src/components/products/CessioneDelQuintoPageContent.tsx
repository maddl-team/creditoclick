"use client";

import * as React from "react";
import Image from "next/image";
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
import { FaqAccordion } from "@/components/ui/FaqAccordion";
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

const CATEGORY_ICONS = [Building2, Users, GraduationCap] as const;

export function CessioneDelQuintoPageContent() {
  return (
    <>
      <Section className="min-h-[70vh] !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 items-stretch w-full min-h-[70vh]">
          <div className="lg:col-span-2 p-6 md:p-8 h-full flex flex-col justify-center items-start">
            <Badge variant="subtle" className="mb-6">
              Tassi 2026 Aggiornati
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1]">
              {CDQ_HERO.title}
            </h1>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl">
              {CDQ_HERO.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button icon={ArrowRight}>{CDQ_HERO.primaryCta}</Button>
              <Button variant="secondary" icon={BarChart3}>
                {CDQ_HERO.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 h-full relative min-h-[420px] lg:min-h-full">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/cessione-del-quinto-hero.jpg"
                alt="Consulenza finanziaria per cessione del quinto"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-indigo/70 z-10" />
            </div>
          </div>
        </div>
      </Section>

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
                const [rawTitle, ...rest] = item.split(":");
                const title = rawTitle.trim();
                const description = rest.join(":").trim();
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

      <Section className="border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CDQ_CATEGORIE.sectionTitle}
              title={CDQ_CATEGORIE.title}
              description={CDQ_CATEGORIE.intro}
            />
          </div>
          <div className="lg:col-span-2 grid gap-0 pt-4 lg:pt-8">
            {CDQ_CATEGORIE.items.map((item, i) => (
              <FeatureItem key={i} icon={CATEGORY_ICONS[i]} title={item.title}>
                <div className="space-y-4">
                  <p>{item.body}</p>
                  {item.extra ? <p>{item.extra}</p> : null}
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

      <Section className="border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CDQ_CALCOLO.sectionTitle}
              title={CDQ_CALCOLO.title}
              description={CDQ_CALCOLO.intro}
            />
            <div className="px-6 md:px-8 pb-8">
              <h3 className="font-bold text-xl text-text-primary mb-4">{CDQ_CALCOLO.formulaTitle}</h3>
              <p className="text-text-secondary leading-relaxed">{CDQ_CALCOLO.formula}</p>
            </div>
          </div>
          <div className="lg:col-span-2 p-6 md:p-8 pt-4 lg:pt-8">
            <h3 className="font-bold text-text-primary text-lg mb-4">{CDQ_CALCOLO.exampleTitle}</h3>
            <table className="w-full text-sm border border-slate-200/60 rounded-2xl overflow-hidden">
              <thead className="bg-surface-subtle">
                <tr>
                  <th className="text-left px-4 py-3">Durata</th>
                  <th className="text-center px-4 py-3">Rata massima</th>
                  <th className="text-right px-4 py-3">Importo indicativo erogabile*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CDQ_CALCOLO.table.map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-4 font-bold">{row[0]}</td>
                    <td className="px-4 py-4 text-center">{row[1]}</td>
                    <td className="px-4 py-4 text-right font-bold">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">{CDQ_CALCOLO.note}</p>
            <p className="text-sm text-text-primary mt-6">{CDQ_CALCOLO.ctaText}</p>
            <Button variant="link" className="p-0 mt-2 text-sm font-bold" icon={ArrowRight}>
              {CDQ_CALCOLO.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CDQ_VANTAGGI_LIMITI.sectionTitle}
              title={CDQ_VANTAGGI_LIMITI.title}
              description={CDQ_VANTAGGI_LIMITI.intro}
            />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-6 px-6 md:px-8">{CDQ_VANTAGGI_LIMITI.prosTitle}</h3>
              {CDQ_VANTAGGI_LIMITI.pros.map((p, i) => (
                <FeatureItem key={i} icon={CheckCircle2} title={p} theme="green" />
              ))}
            </div>
            <div className="bg-slate-100/50">
              <h3 className="text-xl font-bold text-amber-600 mb-6 px-6 md:px-8">{CDQ_VANTAGGI_LIMITI.consTitle}</h3>
              {CDQ_VANTAGGI_LIMITI.cons.map((c, i) => (
                <FeatureItem key={i} icon={Scale} title={c} theme="amber" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-1">
            <SectionIntro badge={CDQ_CONFRONTO.sectionTitle} title={CDQ_CONFRONTO.title} description={CDQ_CONFRONTO.note} />
          </div>
          <div className="lg:col-span-3 p-6 md:p-8 pt-4 lg:pt-8 overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm min-w-[600px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left">Caratteristica</th>
                  <th className="px-6 py-4 text-center">Cessione del Quinto</th>
                  <th className="px-6 py-4 text-center">Prestito Personale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {CDQ_CONFRONTO.rows.map((r) => (
                  <tr key={r[0]}>
                    <td className="px-6 py-4 font-bold bg-surface-subtle">{r[0]}</td>
                    <td className="px-6 py-4 text-center">{r[1]}</td>
                    <td className="px-6 py-4 text-center">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro badge={CDQ_PASSAGGI.sectionTitle} title={CDQ_PASSAGGI.title} />
          </div>
          <div className="lg:col-span-2 p-6 md:p-8 pt-4 lg:pt-8 space-y-6">
            {CDQ_PASSAGGI.steps.map((step, i) => (
              <FeatureItem key={i} icon={CheckCircle2} title={step} hasPadding={false} className="p-6 bg-white rounded-2xl border border-slate-200/60" />
            ))}
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight}>
              {CDQ_PASSAGGI.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-900 text-white border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={<Badge className="bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30">{CDQ_EEAT.sectionTitle}</Badge>}
              title={CDQ_EEAT.title}
              titleClassName="text-white"
              descriptionClassName="space-y-6 text-indigo-100/80"
              description={
                <>
                  {CDQ_EEAT.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </>
              }
            />
          </div>
          <div className="lg:col-span-2 p-6 md:p-8 pt-4 lg:pt-8">
            <FeatureItem icon={FileCheck} title={CDQ_EEAT.paragraphs[1]} theme="cyan" titleClassName="text-indigo-50/95 text-base leading-relaxed font-medium" iconClassName="bg-white/10 text-brand-cyan" />
            <FeatureItem icon={Scale} title={CDQ_EEAT.paragraphs[2]} theme="cyan" titleClassName="text-indigo-50/95 text-base leading-relaxed font-medium" iconClassName="bg-white/10 text-brand-cyan" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60" id="faq">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
          <div className="lg:col-span-2">
            <SectionIntro badge={CDQ_FAQ.sectionTitle} title={CDQ_FAQ.title} />
          </div>
          <div className="lg:col-span-2 pr-6 md:pr-8 pt-4 lg:pt-8">
            <FaqAccordion items={CDQ_FAQ.items} />
          </div>
        </div>
      </Section>

      <section className="relative bg-brand-indigo overflow-hidden py-12 md:py-24">
        <div className="relative z-10 w-full mx-auto px-6 max-w-7xl">
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
        </div>
      </section>
    </>
  );
}
