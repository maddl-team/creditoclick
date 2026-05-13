"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pushVirtualPageView } from "@/lib/analytics/dataLayer";

let lastVirtualPagePath = "";

/**
 * Notifica a GTM i cambi di route (App Router) senza reload.
 */
export function GtmRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const search = searchParams?.toString() ?? "";
    const key = `${pathname}?${search}`;
    if (key === lastVirtualPagePath) return;
    lastVirtualPagePath = key;
    pushVirtualPageView(pathname, search);
  }, [pathname, searchParams]);

  return null;
}
