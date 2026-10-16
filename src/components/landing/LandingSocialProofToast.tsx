"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { LANDING_SOCIAL_PROOF } from "@/content/landingPreventivo";
import { cn } from "@/lib/utils";

const VISIBLE_MS = 5000;
const HIDDEN_MS = 8000;

export function LandingSocialProofToast() {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    if (dismissed) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const cycle = (show: boolean, currentIndex: number) => {
      if (show) {
        setVisible(true);
        timeoutId = setTimeout(() => cycle(false, currentIndex), VISIBLE_MS);
      } else {
        setVisible(false);
        timeoutId = setTimeout(() => {
          const next = (currentIndex + 1) % LANDING_SOCIAL_PROOF.length;
          setIndex(next);
          cycle(true, next);
        }, HIDDEN_MS);
      }
    };

    cycle(true, 0);

    return () => clearTimeout(timeoutId);
  }, [dismissed]);

  if (dismissed) return null;

  const item = LANDING_SOCIAL_PROOF[index];

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-50 transition-all duration-500",
        "left-4 right-4 bottom-4 sm:right-auto sm:bottom-6 sm:left-6 sm:max-w-sm",
        "max-sm:bottom-[max(1rem,env(safe-area-inset-bottom))]",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
      aria-live="polite"
    >
      <div className="pointer-events-auto flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-2xl">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-text-primary">
            {item.name}{" "}
            <span className="font-medium text-text-secondary">— {item.role}</span>
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">
            ha ottenuto <span className="font-semibold text-text-primary">{item.amount}</span> tramite{" "}
            {item.product}
          </p>
          <p className="mt-1 text-[11px] text-slate-400">
            {item.when} · {item.place}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-text-primary"
          aria-label="Chiudi notifica"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
