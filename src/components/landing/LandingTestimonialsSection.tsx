"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import {
  formatTestimonialLabel,
  LANDING_TESTIMONIALS,
  type Testimonial,
} from "@/data/testimonials";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 3;

function TestimonialCard({ item, animate }: { item: Testimonial; animate: boolean }) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        animate && "motion-safe:animate-fade-in-up",
      )}
    >
      <div className="mb-3 flex items-center gap-0.5 text-amber-400" aria-label="Valutazione 5 su 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-text-secondary whitespace-pre-line">“{item.text}”</p>
      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-bold text-text-primary">{item.author}</p>
        <p className="text-xs uppercase tracking-wider text-text-secondary">
          {formatTestimonialLabel(item)}
        </p>
      </div>
    </article>
  );
}

export function LandingTestimonialsSection() {
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const [justLoadedFrom, setJustLoadedFrom] = React.useState<number | null>(null);

  const visible = LANDING_TESTIMONIALS.slice(0, visibleCount);
  const hasMore = visibleCount < LANDING_TESTIMONIALS.length;

  function showMore() {
    setJustLoadedFrom(visibleCount);
    setVisibleCount((n) => Math.min(n + PAGE_SIZE, LANDING_TESTIMONIALS.length));
  }

  return (
    <Section className="bg-surface-subtle border-t border-slate-200/60">
      <SectionIntro
        badge="Dicono di noi"
        title="Recensioni verificate"
        description="Esperienze reali di dipendenti che hanno scelto CreditoClick.it per il loro prestito."
      />

      <div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        aria-live="polite"
      >
        {visible.map((item, index) => (
          <TestimonialCard
            key={item.id}
            item={item}
            animate={justLoadedFrom !== null && index >= justLoadedFrom}
          />
        ))}
      </div>

      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={showMore}
            className="rounded-full border border-brand-indigo/30 bg-white px-6 py-3 text-sm font-bold text-brand-indigo shadow-sm transition hover:border-brand-indigo hover:bg-brand-indigo/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo/40"
          >
            Mostra altre recensioni
          </button>
        </div>
      ) : null}
    </Section>
  );
}
