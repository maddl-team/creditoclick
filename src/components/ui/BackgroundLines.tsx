"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BackgroundLinesProps {
    variant?: "light" | "dark";
    className?: string;
    showIndices?: number[];
}

export function BackgroundLines({ variant = "light", className, showIndices }: BackgroundLinesProps) {
    return (
        <div className={cn(
            "absolute inset-x-0 inset-y-0 pointer-events-none z-0 overflow-hidden h-full",
            className
        )}>
            <div className="mx-auto h-full max-w-7xl flex justify-between px-6">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "w-px h-full transition-opacity duration-300",
                            variant === "light" ? "bg-slate-200/90" : "bg-white/10",
                            showIndices && !showIndices.includes(i) && "opacity-0"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
