"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

interface LegalFeature {
  title: string;
  description: string;
}

interface LegalNotesSectionProps {
  badge: string;
  title: string;
  intro: string;
  features: readonly LegalFeature[];
  featureIcons: readonly React.ElementType[];
  sectionClassName?: string;
}

export function LegalNotesSection({
  badge,
  title,
  intro,
  features,
  featureIcons,
  sectionClassName = "bg-slate-900 text-white border-t border-white/10",
}: LegalNotesSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
        <div className="lg:col-span-2">
          <SectionIntro
            badge={<Badge className="bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30">{badge}</Badge>}
            title={title}
            titleClassName="text-white"
            descriptionClassName="text-indigo-100/80"
            description={intro}
          />
        </div>
        <div className="lg:col-span-2 pt-4 lg:pt-8">
          <div className="grid gap-0">
            {features.map((feature, i) => (
              <FeatureItem
                key={feature.title}
                icon={featureIcons[i]}
                title={feature.title}
                theme="cyan"
                titleClassName="text-indigo-50"
                contentClassName="text-indigo-100/80"
                iconClassName="bg-white/10 text-brand-cyan"
              >
                {feature.description}
              </FeatureItem>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
