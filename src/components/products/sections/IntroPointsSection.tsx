"use client";

import Image from "next/image";
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { splitByFirstColon } from "@/lib/splitFeatureText";

interface IntroPointsSectionProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  paragraphs: readonly string[];
  points: readonly string[];
  icon: React.ElementType;
  sectionClassName?: string;
  bottomImage?: {
    src: string;
    alt: string;
  };
  bottomImageFit?: "cover" | "contain";
  bottomImageNatural?: boolean;
}

export function IntroPointsSection({
  badge,
  title,
  paragraphs,
  points,
  icon: Icon,
  sectionClassName = "bg-surface-subtle border-t border-slate-200/60",
  bottomImage,
  bottomImageFit = "cover",
  bottomImageNatural = false,
}: IntroPointsSectionProps) {
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
          <div className="grid gap-0">
            {points.map((point, i) => {
              const { title: itemTitle, description } = splitByFirstColon(point);
              return (
                <FeatureItem key={i} icon={Icon} title={itemTitle} theme="cyan">
                  {description}
                </FeatureItem>
              );
            })}
          </div>
          {bottomImage ? (
            bottomImageNatural ? (
              <div className="mt-8 w-full overflow-hidden rounded-2xl">
                <Image
                  src={bottomImage.src}
                  alt={bottomImage.alt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="relative mt-8 min-h-[240px] lg:min-h-[320px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={bottomImage.src}
                  alt={bottomImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={bottomImageFit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
            )
          ) : null}
        </div>
      </div>
    </Section>
  );
}
