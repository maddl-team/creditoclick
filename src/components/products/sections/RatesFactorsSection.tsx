"use client";

import * as React from "react";
import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Button } from "@/components/ui/Button";

interface RatesFactorsSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  paragraphs: readonly string[];
  factorsTitle: string;
  factors: readonly string[];
  notes: readonly string[];
  cta: string;
  ctaHref?: string;
  sectionClassName?: string;
}

export function RatesFactorsSection({
  badge,
  title,
  paragraphs,
  factorsTitle,
  factors,
  notes,
  cta,
  ctaHref,
  sectionClassName = "bg-surface-subtle border-t border-slate-200/60",
}: RatesFactorsSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
        <div className="lg:col-span-2">
          <SectionIntro
            badge={badge}
            title={title}
            descriptionClassName="space-y-6"
            description={
              <>
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </>
            }
          />
        </div>
        <div className="lg:col-span-2 pt-4 lg:pt-8">
          <FeatureItem icon={BarChart3} title={factorsTitle} theme="cyan">
            <ul className="space-y-2">
              {factors.map((f) => (
                <li key={f} className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </FeatureItem>
          <div className="p-6 md:p-8 space-y-6 text-sm text-text-secondary leading-relaxed">
            {notes.map((n) => (
              <p key={n}>{n}</p>
            ))}
            {ctaHref ? (
              <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={ctaHref}>
                {cta}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
