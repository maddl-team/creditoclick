"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pushVirtualPageView } from "@/lib/analytics/dataLayer";

let lastVirtualPagePath = "";

function scheduleIdleTask(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const w = window as Window & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  };
  if (typeof w.requestIdleCallback === "function") {
    const id = w.requestIdleCallback(() => cb(), { timeout: 2500 });
    return () => w.cancelIdleCallback?.(id);
  }
  const t = window.setTimeout(cb, 0);
  return () => window.clearTimeout(t);
}

/**
 * Notifica a GTM i cambi di route (App Router) senza reload.
 * Il push è leggermente differito (idle) per non competere con idratazione e paint iniziale.
 */
export function GtmRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const search = searchParams?.toString() ?? "";
    const key = `${pathname}?${search}`;
    if (key === lastVirtualPagePath) return;

    let cancelled = false;
    const keyAtSchedule = key;

    const cancelScheduled = scheduleIdleTask(() => {
      if (cancelled) return;
      const searchNow = searchParams?.toString() ?? "";
      const keyNow = `${pathname}?${searchNow}`;
      if (keyNow !== keyAtSchedule) return;
      if (keyNow === lastVirtualPagePath) return;
      lastVirtualPagePath = keyNow;
      pushVirtualPageView(pathname, searchNow);
    });

    return () => {
      cancelled = true;
      cancelScheduled();
    };
  }, [pathname, searchParams]);

  return null;
}
