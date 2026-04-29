"use client";

import * as React from "react";
import {
  BadgeEuro,
  BriefcaseBusiness,
  Building2,
  CircleAlert,
  Clock3,
  FileCheck2,
  FileSignature,
  HandCoins,
  HeartPulse,
  Landmark,
  MessageCircle,
  PiggyBank,
  Scale,
  School,
  SearchCheck,
  ShieldCheck,
  Wallet,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import { FeatureItem, type FeatureTheme } from "@/components/ui/FeatureItem";
import { splitByFirstColon, splitByFirstPeriod } from "@/lib/splitFeatureText";

interface FeatureListSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  intro: React.ReactNode;
  items: readonly string[];
  icon: React.ElementType;
  icons?: readonly React.ElementType[];
  theme?: FeatureTheme;
  sectionClassName?: string;
  stickyIntro?: boolean;
  footer?: React.ReactNode;
  splitMode?: "period" | "colon";
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some((k) => text.includes(k));
}

function getSemanticIcon(itemTitle: string, description: string, fallbackIcon: React.ElementType) {
  const text = normalizeText(`${itemTitle} ${description}`);

  if (includesAny(text, ["whatsapp", "messaggio", "contatto", "chiam", "telefono", "email"])) return MessageCircle;
  if (includesAny(text, ["tempo", "giorni", "ore", "scadenza", "durata"])) return Clock3;
  if (includesAny(text, ["tasso", "tan", "taeg", "rata", "importo", "liquidita", "debiti", "consolidamento"])) return BadgeEuro;
  if (includesAny(text, ["stipendio", "reddito", "busta paga", "pensione"])) return Wallet;
  if (includesAny(text, ["contratto", "firma", "document", "secci"])) return FileSignature;
  if (includesAny(text, ["garanzia", "sicur", "tutela", "protezione", "gdpr", "privacy"])) return ShieldCheck;
  if (includesAny(text, ["requisit", "verifica", "valutaz", "analisi"])) return SearchCheck;
  if (includesAny(text, ["legale", "normativa", "trasparenza", "compliance", "oam", "banca d'italia"])) return Scale;
  if (includesAny(text, ["pubblico", "ministero", "pa", "noipa", "inps"])) return Landmark;
  if (includesAny(text, ["azienda", "privato", "impresa", "pmi", "hr"])) return Building2;
  if (includesAny(text, ["scuola", "docente", "insegn"])) return School;
  if (includesAny(text, ["sanita", "medic", "inferm"])) return HeartPulse;
  if (includesAny(text, ["ristruttur", "casa", "lavori"])) return Wrench;
  if (includesAny(text, ["risparmio", "budget", "pianific"])) return PiggyBank;
  if (includesAny(text, ["vantagg", "supporto", "consulente", "aiuto"])) return HandCoins;
  if (includesAny(text, ["attenzione", "critic", "risch", "warning"])) return CircleAlert;
  if (includesAny(text, ["profilo", "categoria", "profession"])) return BriefcaseBusiness;

  return fallbackIcon ?? FileCheck2;
}

export function FeatureListSection({
  badge,
  title,
  intro,
  items,
  icon: Icon,
  icons,
  theme = "indigo",
  sectionClassName = "border-t border-slate-200/60 overflow-visible",
  stickyIntro = false,
  footer,
  splitMode = "period",
}: FeatureListSectionProps) {
  const IntroWrapper = stickyIntro ? StickySectionColumn : "div";

  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
        <IntroWrapper className="lg:col-span-2">
          <SectionIntro badge={badge} title={title} description={intro} />
        </IntroWrapper>
        <div className="lg:col-span-2 pt-4 lg:pt-8">
          <div className="grid gap-0">
            {items.map((item, i) => {
              const { title: itemTitle, description } =
                splitMode === "colon" ? splitByFirstColon(item) : splitByFirstPeriod(item);
              const ItemIcon = icons?.[i] ?? getSemanticIcon(itemTitle, description, Icon);
              return (
                <FeatureItem key={`${itemTitle}-${i}`} icon={ItemIcon} title={itemTitle} theme={theme}>
                  {description}
                </FeatureItem>
              );
            })}
          </div>
          {footer ? <div className="px-6 md:px-8 pt-6">{footer}</div> : null}
        </div>
      </div>
    </Section>
  );
}
