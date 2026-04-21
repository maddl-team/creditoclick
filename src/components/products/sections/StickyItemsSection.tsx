"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StickySectionColumn } from "@/components/ui/StickySectionColumn";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Button } from "@/components/ui/Button";

interface StickyItem {
  title: string;
  body: string;
  cta?: string;
  ctaHref?: string;
  extra?: string;
  details?: readonly string[];
}

interface StickyItemsSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  intro: React.ReactNode;
  items: readonly StickyItem[];
  icons: readonly React.ElementType[];
  sectionClassName?: string;
}

export function StickyItemsSection({
  badge,
  title,
  intro,
  items,
  icons,
  sectionClassName = "border-t border-slate-200/60 overflow-visible",
}: StickyItemsSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
        <StickySectionColumn>
          <SectionIntro badge={badge} title={title} description={intro} />
        </StickySectionColumn>
        <div className="lg:col-span-2 grid gap-0 pt-4 lg:pt-8">
          {items.map((item, i) => (
            <FeatureItem key={item.title} icon={icons[i]} title={item.title}>
              <div className="space-y-4">
                <p>{item.body}</p>
                {item.extra ? <p>{item.extra}</p> : null}
                {item.details?.length ? (
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="list-disc ml-5">
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.cta ? (
                  <Button variant="link" className="p-0 text-sm font-bold" icon={ArrowRight} href={item.ctaHref}>
                    {item.cta}
                  </Button>
                ) : null}
              </div>
            </FeatureItem>
          ))}
        </div>
      </div>
    </Section>
  );
}
