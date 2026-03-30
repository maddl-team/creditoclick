"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    delay?: number;
}

export function Section({
    children,
    className,
    containerClassName,
    delay = 0,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("py-20 md:py-32 outline-none", className)}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
                className={cn("w-full mx-auto px-6 max-w-7xl", containerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
}
