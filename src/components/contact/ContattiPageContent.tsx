"use client";

import {
  ArrowRight,
  BadgeEuro,
  Building2,
  BriefcaseBusiness,
  CircleAlert,
  Clock3,
  FileCheck2,
  FileSignature,
  FileText,
  HandCoins,
  Mail,
  MessageCircle,
  MessagesSquare,
  Phone,
  Route,
  SearchCheck,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CalloutSection } from "@/components/ui/CalloutSection";
import { FaqSection } from "@/components/ui/FaqSection";
import { ProductSplitHero, ProductSplitHeroImage } from "@/components/ui/ProductSplitHero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ProductFinalCtaSection } from "@/components/products/sections/ProductFinalCtaSection";
import { FeatureListSection } from "@/components/products/sections/FeatureListSection";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import {
  CONTATTI_CANALI,
  CONTATTI_CTA,
  CONTATTI_FAQ,
  CONTATTI_HERO,
  CONTATTI_ISTITUZIONALI,
  CONTATTI_ORARI,
  CONTATTI_PRIMO_MESSAGGIO,
  CONTATTI_PROCESSO,
  CONTATTI_RECLAMI,
} from "@/content/contatti";

const WHATSAPP_URL = "https://wa.me/?text=Ciao%2C%20vorrei%20una%20consulenza%20gratuita%20sulla%20cessione%20del%20quinto.";
const CONTATTI_PRIMO_MESSAGGIO_ICONS = [BriefcaseBusiness, BadgeEuro, HandCoins, CircleAlert] as const;
const CONTATTI_PROCESSO_ICONS = [MessagesSquare, SearchCheck, FileCheck2, FileSignature, Route] as const;
const CONTATTI_ORARI_ICONS = [MessageCircle, Mail, Timer] as const;

export function ContattiPageContent() {
  const getContactIcon = (channel: string) => {
    const normalized = channel.toLowerCase();
    if (normalized.includes("whatsapp")) return MessageCircle;
    if (normalized.includes("email")) return Mail;
    if (normalized.includes("telefono")) return Phone;
    if (normalized.includes("sede")) return Building2;
    return MessageCircle;
  };

  return (
    <>
      <ProductSplitHero
        badge={CONTATTI_HERO.badge}
        title={CONTATTI_HERO.title}
        subtitle={CONTATTI_HERO.subtitle}
        primaryCta={CONTATTI_HERO.primaryCta}
        secondaryCta="Torna alla Homepage"
        primaryIcon={MessageCircle}
        secondaryIcon={ArrowRight}
        primaryHref={WHATSAPP_URL}
        secondaryHref="/"
        right={
          <ProductSplitHeroImage
            src="/images/cessione-del-quinto-hero.jpg"
            alt="Contatta CreditoClick su WhatsApp"
            priority
          />
        }
      />

      <Section className="bg-white border-t border-slate-200/60">
        <div className="space-y-10">
          <SectionIntro badge={CONTATTI_CANALI.title} title={CONTATTI_CANALI.sectionTitle} description={CONTATTI_CANALI.intro} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {CONTATTI_CANALI.contacts.map((item) => (
              <FeatureItem
                key={item.channel}
                icon={getContactIcon(item.channel)}
                title={item.channel}
                subtitle={<p className="text-text-primary font-medium text-sm">{item.detail}</p>}
                theme="indigo"
              >
                {item.note}
              </FeatureItem>
            ))}
          </div>
        </div>
      </Section>

      <ContactFormSection />

      <FeatureListSection
        badge={CONTATTI_PRIMO_MESSAGGIO.title}
        title={CONTATTI_PRIMO_MESSAGGIO.sectionTitle}
        intro={CONTATTI_PRIMO_MESSAGGIO.intro}
        items={CONTATTI_PRIMO_MESSAGGIO.items}
        icon={FileText}
        icons={CONTATTI_PRIMO_MESSAGGIO_ICONS}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
        footer={
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <p className="text-text-secondary leading-relaxed">{CONTATTI_PRIMO_MESSAGGIO.outro}</p>
          </div>
        }
      />

      <FeatureListSection
        badge={CONTATTI_PROCESSO.title}
        title={CONTATTI_PROCESSO.sectionTitle}
        intro={CONTATTI_PROCESSO.intro}
        items={CONTATTI_PROCESSO.steps}
        icon={Route}
        icons={CONTATTI_PROCESSO_ICONS}
        splitMode="colon"
        theme="indigo"
        sectionClassName="bg-surface-subtle border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <FaqSection
        sectionId="faq"
        sectionClassName="border-t border-slate-200/60"
        badge={CONTATTI_FAQ.sectionTitle}
        title={CONTATTI_FAQ.title}
        items={CONTATTI_FAQ.items}
      />

      <FeatureListSection
        badge={CONTATTI_ORARI.title}
        title={CONTATTI_ORARI.sectionTitle}
        intro=""
        items={CONTATTI_ORARI.items}
        icon={Clock3}
        icons={CONTATTI_ORARI_ICONS}
        splitMode="colon"
        theme="amber"
        sectionClassName="bg-white border-t border-slate-200/60 overflow-visible"
        stickyIntro
      />

      <Section className="bg-surface-subtle border-t border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
          <div className="lg:col-span-2">
            <SectionIntro
              badge={CONTATTI_ISTITUZIONALI.title}
              title={CONTATTI_ISTITUZIONALI.sectionTitle}
              description={<p>{CONTATTI_ISTITUZIONALI.note}</p>}
            />
          </div>
          <div className="lg:col-span-2 pt-4 lg:pt-8">
            <ComparisonTable columns={["Elemento", "Dettaglio"]} rows={CONTATTI_ISTITUZIONALI.rows.map(([a, b]) => [a, b])} />
          </div>
        </div>
      </Section>

      <CalloutSection
        sectionClassName="bg-white border-t border-slate-200/60"
        containerClassName="bg-surface-subtle p-10 md:p-16 lg:p-20"
        className="space-y-6"
        badge={<Badge variant="subtle">{CONTATTI_RECLAMI.title}</Badge>}
        title={CONTATTI_RECLAMI.sectionTitle}
        titleClassName="text-3xl md:text-4xl text-text-primary leading-tight"
        showGridOverlay={false}
      >
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          {CONTATTI_RECLAMI.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CalloutSection>

      <ProductFinalCtaSection
        title={CONTATTI_CTA.title}
        subtitle={CONTATTI_CTA.subtitle}
        primaryCta={CONTATTI_CTA.primary}
        secondaryCta={CONTATTI_CTA.secondary}
        primaryHref={WHATSAPP_URL}
        secondaryHref="/"
      />
    </>
  );
}
