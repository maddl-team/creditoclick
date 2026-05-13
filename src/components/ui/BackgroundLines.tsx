import * as React from "react";
import { cn } from "@/lib/utils";

interface BackgroundLinesProps {
    variant?: "light" | "dark";
    className?: string;
    showIndices?: number[];
    showIndicesMobile?: number[];
    showIndicesDesktop?: number[];
}

export function BackgroundLines({
    variant = "light",
    className,
    showIndices,
    showIndicesMobile,
    showIndicesDesktop,
}: BackgroundLinesProps) {
    return (
        <div className={cn(
            "absolute inset-x-0 inset-y-0 pointer-events-none z-0 overflow-hidden h-full",
            className
        )}>
            <div className="mx-auto h-full max-w-7xl flex justify-between px-6">
                {[...Array(5)].map((_, i) => (
                    (() => {
                        const mobileVisible = showIndicesMobile
                            ? showIndicesMobile.includes(i)
                            : showIndices
                                ? showIndices.includes(i)
                                : true;
                        const desktopVisible = showIndicesDesktop
                            ? showIndicesDesktop.includes(i)
                            : showIndices
                                ? showIndices.includes(i)
                                : true;

                        let visibilityClass = "opacity-100";
                        if (!mobileVisible && !desktopVisible) visibilityClass = "opacity-0";
                        else if (!mobileVisible && desktopVisible) visibilityClass = "opacity-0 md:opacity-100";
                        else if (mobileVisible && !desktopVisible) visibilityClass = "opacity-100 md:opacity-0";

                        return (
                            <div
                                key={i}
                                className={cn(
                                    "w-px h-full transition-opacity duration-300",
                                    variant === "light" ? "bg-slate-200/90" : "bg-white/10",
                                    visibilityClass
                                )}
                            />
                        );
                    })()
                ))}
            </div>
        </div>
    );
}
