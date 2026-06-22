import Link from "next/link";
import { Star } from "lucide-react";
import { TRUSTPILOT_PROFILE } from "@/content/reviews";

export function TrustpilotRating() {
  return (
    <Link
      href={TRUSTPILOT_PROFILE.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 transition-colors hover:border-brand-indigo/30 hover:bg-brand-indigo/[0.02]"
      aria-label={`${TRUSTPILOT_PROFILE.displayRating} stelle su Trustpilot, ${TRUSTPILOT_PROFILE.reviewCount} recensioni`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: TRUSTPILOT_PROFILE.stars }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-brand-indigo text-brand-indigo"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="text-sm leading-tight">
        <span className="font-bold text-text-primary">{TRUSTPILOT_PROFILE.displayRating}/5</span>
        <span className="text-text-secondary"> · {TRUSTPILOT_PROFILE.reviewCount} recensioni su </span>
        <span className="font-semibold text-text-primary">Trustpilot</span>
      </div>
    </Link>
  );
}
