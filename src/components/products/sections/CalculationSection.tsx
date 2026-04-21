"use client";

import Image from "next/image";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { Button } from "@/components/ui/Button";

interface CalculationSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  intro: React.ReactNode;
  formulaTitle: string;
  formula: string;
  image: {
    src: string;
    alt: string;
  };
  exampleTitle: string;
  columnLabels: readonly [string, string, string];
  rows: readonly (readonly [string, string, string])[];
  note: string;
  ctaText: string;
  cta: string;
  ctaHref?: string;
  sectionClassName?: string;
}

export function CalculationSection({
  badge,
  title,
  intro,
  formulaTitle,
  formula,
  image,
  exampleTitle,
  columnLabels,
  rows,
  note,
  ctaText,
  cta,
  ctaHref,
  sectionClassName = "border-t border-slate-200/60 overflow-visible",
}: CalculationSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:items-stretch gap-12 lg:gap-x-0 lg:gap-y-10">
        <div className="lg:col-span-2 flex flex-col">
          <SectionIntro badge={badge} title={title} description={intro} />
          <div className="px-6 md:px-8 pb-8">
            <h3 className="font-bold text-xl text-text-primary mb-4">{formulaTitle}</h3>
            <p className="text-text-secondary leading-relaxed">{formula}</p>
          </div>
        </div>
        <div className="relative lg:col-span-2 min-h-[220px] lg:min-h-full w-full overflow-hidden rounded-2xl">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="lg:col-span-3 min-w-0 flex flex-col gap-4">
          <div className="px-6 md:px-8">
            <h3 className="font-bold text-text-primary text-lg">{exampleTitle}</h3>
          </div>
          <ComparisonTable columns={columnLabels} rows={rows} />
          <div className="px-6 md:px-8 space-y-4">
            <p className="text-xs text-slate-500 leading-relaxed">{note}</p>
            <p className="text-sm text-text-primary">{ctaText}</p>
            <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={ctaHref}>
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
