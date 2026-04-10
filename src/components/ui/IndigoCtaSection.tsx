"use client";

import * as React from "react";
import { BackgroundLines } from "./BackgroundLines";

interface IndigoCtaSectionProps {
    showBackgroundLines?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function IndigoCtaSection({ showBackgroundLines = false, children, className }: IndigoCtaSectionProps) {
    return (
        <section className={className ?? "relative bg-brand-indigo overflow-hidden py-12 md:py-24"}>
            {showBackgroundLines ? <BackgroundLines variant="dark" /> : null}
            <div className="relative z-10 w-full mx-auto px-6 max-w-7xl">{children}</div>
        </section>
    );
}
