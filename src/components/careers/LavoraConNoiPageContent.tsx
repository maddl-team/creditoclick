"use client";

import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Handshake,
  Laptop,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";
import {
  LAVORA_CON_NOI_CHI_SIAMO,
  LAVORA_CON_NOI_HERO,
  LAVORA_CON_NOI_MANSIONI,
  LAVORA_CON_NOI_OFFRIAMO,
  LAVORA_CON_NOI_REQUISITI,
} from "@/content/lavoraConNoi";
import { OG_LAVORA_CON_NOI } from "@/lib/seo/siteOgImages";

const MANSIONI_ICONS = [Handshake, PhoneCall, FileCheck2, Laptop, Users, ShieldCheck] as const;
const REQUISITI_ICONS = [GraduationCap, ShieldCheck, Laptop, MessageCircle] as const;
const OFFRIAMO_ICONS = [BriefcaseBusiness, Wallet, Users, Building2] as const;

export function LavoraConNoiPageContent() {
  return (
    <>
      <Section className="min-h-[70vh] !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 items-stretch w-full min-h-[70vh]">
          <div className="lg:col-span-2 p-6 md:p-8 h-full flex flex-col justify-center items-start">
            <div className="mb-6 flex flex-wrap gap-2">
              {LAVORA_CON_NOI_HERO.badges.map((badge) => (
                <Badge key={badge} variant="subtle">
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1]">
              {LAVORA_CON_NOI_HERO.title}
            </h1>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl">
              {LAVORA_CON_NOI_HERO.subtitle}
            </p>
            <div className="flex flex-col items-start gap-4">
              <Button icon={ArrowDown} href="#candidatura">
                {LAVORA_CON_NOI_HERO.primaryCta}
              </Button>
              <Button variant="secondary" icon={ArrowRight} href="/chi-siamo">
                {LAVORA_CON_NOI_HERO.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 h-full relative min-h-[420px] lg:min-h-full">
            <ProductSplitHeroImage src={OG_LAVORA_CON_NOI.src} alt={OG_LAVORA_CON_NOI.alt} priority />
          </div>
        </div>
      </Section>

      <Section className="bg-white border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={LAVORA_CON_NOI_CHI_SIAMO.badge}
              title={LAVORA_CON_NOI_CHI_SIAMO.title}
              description={<p>{LAVORA_CON_NOI_CHI_SIAMO.body}</p>}
            />
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-surface-subtle p-6 flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo shrink-0">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Filiale di Maglie</p>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  Piazza Oronzo de Donno, 10 — 73024 Maglie (LE). Lavoro in presenza, a contatto diretto con clienti e team.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-surface-subtle p-6 flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo shrink-0">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Inserimento dipendente</p>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  Contratto di lavoro dipendente a tempo indeterminato o determinato, con percorso di affiancamento strutturato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="space-y-10">
          <SectionIntro
            badge={LAVORA_CON_NOI_MANSIONI.badge}
            title={LAVORA_CON_NOI_MANSIONI.title}
            description={<p>{LAVORA_CON_NOI_MANSIONI.intro}</p>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {LAVORA_CON_NOI_MANSIONI.items.map((item, index) => (
              <FeatureItem
                key={item.title}
                icon={MANSIONI_ICONS[index] ?? FileCheck2}
                title={item.title}
                theme="indigo"
              >
                {item.description}
              </FeatureItem>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white border-t border-slate-200/60">
        <div className="space-y-10">
          <SectionIntro
            badge={LAVORA_CON_NOI_REQUISITI.badge}
            title={LAVORA_CON_NOI_REQUISITI.title}
            description={<p>{LAVORA_CON_NOI_REQUISITI.intro}</p>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {LAVORA_CON_NOI_REQUISITI.items.map((item, index) => (
              <FeatureItem
                key={item.title}
                icon={REQUISITI_ICONS[index] ?? CheckCircle2}
                title={item.title}
                theme="cyan"
              >
                {item.description}
              </FeatureItem>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="space-y-10">
          <SectionIntro
            badge={LAVORA_CON_NOI_OFFRIAMO.badge}
            title={LAVORA_CON_NOI_OFFRIAMO.title}
            description={<p>{LAVORA_CON_NOI_OFFRIAMO.intro}</p>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {LAVORA_CON_NOI_OFFRIAMO.items.map((item, index) => (
              <FeatureItem
                key={item}
                icon={OFFRIAMO_ICONS[index] ?? CheckCircle2}
                title={item}
                theme="indigo"
              />
            ))}
          </div>
        </div>
      </Section>

      <JobApplicationForm />
    </>
  );
}
