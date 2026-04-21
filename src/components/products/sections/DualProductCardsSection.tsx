"use client";

import * as React from "react";
import { ArrowRight, CreditCard, Layers } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";

interface DualProductCardsSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  first: {
    title: string;
    body: string;
    cta: string;
    href: string;
  };
  second: {
    title: string;
    body: string;
    cta: string;
    href: string;
  };
  sectionClassName?: string;
}

export function DualProductCardsSection({
  badge,
  title,
  first,
  second,
  sectionClassName = "bg-surface-subtle border-t border-slate-200/60",
}: DualProductCardsSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
        <div className="lg:col-span-2">
          <SectionIntro badge={badge} title={title} />
        </div>
        <div className="lg:col-span-2 pt-4 lg:pt-8 grid gap-6">
          <article className="rounded-2xl border border-slate-200/70 bg-white p-6 md:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-indigo font-bold text-sm">
              <CreditCard className="w-4 h-4" />
              <span>Soluzione 1</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary leading-snug">{first.title}</h3>
            <p className="text-text-secondary leading-relaxed">{first.body}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={first.href}>
              {first.cta}
            </Button>
          </article>

          <article className="rounded-2xl border border-slate-200/70 bg-white p-6 md:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-indigo font-bold text-sm">
              <Layers className="w-4 h-4" />
              <span>Soluzione 2</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary leading-snug">{second.title}</h3>
            <p className="text-text-secondary leading-relaxed">{second.body}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={second.href}>
              {second.cta}
            </Button>
          </article>
        </div>
      </div>
    </Section>
  );
}
