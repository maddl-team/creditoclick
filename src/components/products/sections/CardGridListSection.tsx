"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

interface CardGridListSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  items: readonly string[];
  footer?: React.ReactNode;
  sectionClassName?: string;
}

export function CardGridListSection({
  badge,
  title,
  description,
  items,
  footer,
  sectionClassName = "bg-surface-subtle border-t border-slate-200/60 overflow-visible",
}: CardGridListSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 gap-10">
        <SectionIntro badge={badge} title={title} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200/70 bg-white p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-indigo shrink-0 mt-0.5" />
                <p className="text-text-primary leading-relaxed">{item}</p>
              </div>
            </article>
          ))}
        </div>

        {footer ? <div className="space-y-4">{footer}</div> : null}
      </div>
    </Section>
  );
}
