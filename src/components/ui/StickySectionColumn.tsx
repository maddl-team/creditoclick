"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { STICKY_SECTION_TOP_CLASS } from "@/lib/layout";

const COL_SPAN_CLASS = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
} as const;

export type StickySectionColumnSpan = keyof typeof COL_SPAN_CLASS;

interface StickySectionColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Colonne occupate nella griglia `lg:grid-cols-4` (default 2). */
    colSpan?: StickySectionColumnSpan;
}

/**
 * Colonna sinistra con intro (o contenuto) che resta sticky sotto la navbar da `lg` in su.
 * Usare dentro una `grid` a 4 colonne con `items-start` sulla riga.
 */
export function StickySectionColumn({ colSpan = 2, className, children, ...props }: StickySectionColumnProps) {
    return (
        <div className={cn(COL_SPAN_CLASS[colSpan], STICKY_SECTION_TOP_CLASS, className)} {...props}>
            {children}
        </div>
    );
}
