"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "./BackgroundLines";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    delay?: number;
    showLines?: boolean;
    linesVariant?: "light" | "dark";
}

export function Section({
    children,
    className,
    containerClassName,
    delay = 0,
    showLines = true,
    linesVariant = "light",
    ...props
}: SectionProps) {
    // Automatically detect variant if not provided and background is dark
    const backgroundIsDark = className?.includes("bg-slate-900") || className?.includes("bg-brand-indigo");
    const variant = linesVariant === "light" && backgroundIsDark ? "dark" : linesVariant;

    return (
        <section
            className={cn("relative py-20 md:py-32 outline-none overflow-hidden", className)}
            {...props}
        >
            {showLines && <BackgroundLines variant={variant} />}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
                className={cn("relative z-10 w-full mx-auto px-6 max-w-7xl", containerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
}
