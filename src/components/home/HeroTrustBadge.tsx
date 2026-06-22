import Link from "next/link";
import { Star } from "lucide-react";
import { HERO_TRUST_BADGE, TRUSTPILOT_PROFILE } from "@/content/reviews";

function TrustpilotMark() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#00B67A" />
        <path
          fill="#fff"
          d="M12 4.2l2.05 4.15 4.58.67-3.31 3.23.78 4.56L12 14.9l-4.1 2.16.78-4.56-3.31-3.23 4.58-.67L12 4.2z"
        />
      </svg>
    </div>
  );
}

export function HeroTrustBadge() {
  return (
    <Link
      href={TRUSTPILOT_PROFILE.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-8 inline-flex w-full max-w-sm items-center gap-4 rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all hover:border-brand-indigo/20 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] animate-fade-in-up [animation-delay:500ms]"
      aria-label={`${HERO_TRUST_BADGE.title}, ${HERO_TRUST_BADGE.subtitle}`}
    >
      <TrustpilotMark />

      <div className="min-w-0">
        <div className="mb-1.5 flex items-center gap-0.5">
          {Array.from({ length: TRUSTPILOT_PROFILE.stars }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]"
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-sm font-bold leading-tight text-text-primary">{HERO_TRUST_BADGE.title}</p>
        <p className="text-xs leading-tight text-text-secondary">{HERO_TRUST_BADGE.subtitle}</p>
      </div>
    </Link>
  );
}
