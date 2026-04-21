import * as React from "react";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "./BackgroundLines";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    showLines?: boolean;
    linesVariant?: "light" | "dark";
}

export function Section({
    children,
    className,
    containerClassName,
    showLines = true,
    linesVariant = "light",
    ...props
}: SectionProps) {
    // Automatically detect variant if not provided and background is dark
    const backgroundIsDark = className?.includes("bg-slate-900") || className?.includes("bg-brand-indigo");
    const variant = linesVariant === "light" && backgroundIsDark ? "dark" : linesVariant;

    return (
        <section
            className={cn("relative py-12 md:py-20 outline-none overflow-hidden", className)}
            {...props}
        >
            {showLines && <BackgroundLines variant={variant} />}

            <div className={cn("relative z-10 w-full mx-auto px-6 max-w-7xl", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
