"use client";

import * as React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IndigoCtaSection } from "@/components/ui/IndigoCtaSection";

interface ProductFinalCtaSectionProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function ProductFinalCtaSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
}: ProductFinalCtaSectionProps) {
  return (
    <IndigoCtaSection showBackgroundLines>
      <div className="max-w-3xl p-6 md:p-8">
        <h2 className="text-4xl md:text-5xl text-white leading-[1.1] font-bold mb-8">{title}</h2>
        <p className="text-xl text-indigo-100 opacity-90 leading-relaxed mb-12">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {primaryHref ? (
            <Button
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover border-none text-white shadow-lg shadow-emerald-500/20"
              icon={MessageCircle}
              href={primaryHref}
            >
              {primaryCta}
            </Button>
          ) : null}
          {secondaryHref ? (
            <Button
              variant="secondary"
              className="w-full sm:w-auto bg-white text-brand-indigo hover:bg-indigo-50 border-white"
              icon={ArrowRight}
              href={secondaryHref}
            >
              {secondaryCta}
            </Button>
          ) : null}
        </div>
      </div>
    </IndigoCtaSection>
  );
}
