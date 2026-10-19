function TrustpilotBoxStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="2" fill="#00B67A" />
      <path
        fill="#fff"
        d="M12 4.2l2.05 4.15 4.58.67-3.31 3.23.78 4.56L12 14.9l-4.1 2.16.78-4.56-3.31-3.23 4.58-.67L12 4.2z"
      />
    </svg>
  );
}

function TrustpilotWordmark() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#00B67A]" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 1.5l2.83 5.74 6.33.92-4.58 4.46 1.08 6.3L12 15.96l-5.66 2.96 1.08-6.3L2.84 8.16l6.33-.92L12 1.5z"
        />
      </svg>
      <span className="text-sm font-bold text-[#191919]">Trustpilot</span>
    </span>
  );
}

export function LandingTrustpilotStrip() {
  return (
    <div
      className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[#E8F4F8] px-4 py-3"
      aria-label="Valutazione Eccellente 4,7 su 5 su Trustpilot"
    >
      <span className="text-sm font-bold text-text-primary">Eccellente</span>
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="inline-block h-5 w-5 overflow-hidden rounded-[2px]">
            <TrustpilotBoxStar />
          </span>
        ))}
      </div>
      <TrustpilotWordmark />
    </div>
  );
}
