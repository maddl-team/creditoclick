"use client";

import Image from "next/image";
import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

interface LegalTextSectionProps {
  badge: string;
  title: string;
  paragraphs: readonly string[];
  sectionClassName?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export function LegalTextSection({
  badge,
  title,
  paragraphs,
  sectionClassName = "bg-slate-900 text-white border-t border-white/10",
  image,
}: LegalTextSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 lg:items-stretch">
        <div className="lg:col-span-2">
          <SectionIntro
            badge={<Badge className="bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30">{badge}</Badge>}
            title={title}
            titleClassName="text-white"
            descriptionClassName="text-indigo-100/80 space-y-6"
            description={
              <>
                {paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </>
            }
          />
        </div>
        {image ? (
          <div className="relative lg:col-span-2 min-h-[260px] lg:min-h-full w-full overflow-hidden rounded-2xl">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
