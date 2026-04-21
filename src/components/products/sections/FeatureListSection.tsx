"use client";

import * as React from "react";
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
  theme?: FeatureTheme;
  sectionClassName?: string;
  stickyIntro?: boolean;
  footer?: React.ReactNode;
  splitMode?: "period" | "colon";
}

export function FeatureListSection({
  badge,
  title,
  intro,
  items,
  icon: Icon,
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
              return (
                <FeatureItem key={`${itemTitle}-${i}`} icon={Icon} title={itemTitle} theme={theme}>
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
