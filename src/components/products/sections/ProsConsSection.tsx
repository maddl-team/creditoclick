"use client";

import * as React from "react";
import { CheckCircle2, Scale } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { splitByFirstPeriod } from "@/lib/splitFeatureText";

interface ProsConsSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  intro: React.ReactNode;
  prosTitle: string;
  pros: readonly string[];
  consTitle: string;
  cons: readonly string[];
  sectionClassName?: string;
}

export function ProsConsSection({
  badge,
  title,
  intro,
  prosTitle,
  pros,
  consTitle,
  cons,
  sectionClassName = "bg-surface-subtle border-t border-slate-200/60 overflow-visible",
}: ProsConsSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
        <StickySectionColumn>
          <SectionIntro badge={badge} title={title} description={intro} />
        </StickySectionColumn>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0">
          <div>
            <h3 className="text-xl font-bold text-green-600 mb-6 px-6 md:px-8">{prosTitle}</h3>
            {pros.map((p, i) => {
              const { title: itemTitle, description } = splitByFirstPeriod(p);
              return (
                <FeatureItem key={i} icon={CheckCircle2} title={itemTitle} theme="green">
                  {description}
                </FeatureItem>
              );
            })}
          </div>
          <div className="bg-slate-100/50">
            <h3 className="text-xl font-bold text-amber-600 mb-6 px-6 md:px-8">{consTitle}</h3>
            {cons.map((c, i) => {
              const { title: itemTitle, description } = splitByFirstPeriod(c);
              return (
                <FeatureItem key={i} icon={Scale} title={itemTitle} theme="amber">
                  {description}
                </FeatureItem>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
