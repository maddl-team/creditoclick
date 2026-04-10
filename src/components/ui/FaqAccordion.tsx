"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AccentBlock } from "./AccentBlock";

export interface FaqItem {
    q: string;
    a: string;
}

interface FaqAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    items: readonly FaqItem[];
    defaultOpen?: number | null;
    buttonClassName?: string;
}

export function FaqAccordion({
    items,
    defaultOpen = 0,
    className,
    buttonClassName,
    ...props
}: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpen);

    return (
        <div className={cn("space-y-4", className)} {...props}>
            {items.map((faq, i) => (
                <div
                    key={i}
                    className={cn(
                        "group relative transition-all duration-300 border-b border-slate-200/60 last:border-0 -mr-6 md:-mr-8",
                        openIndex === i && "pb-4"
                    )}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className={cn(
                            "w-full flex items-center justify-between p-6 text-left hover:text-brand-indigo transition-all",
                            buttonClassName
                        )}
                    >
                        <AccentBlock
                            leftOffsetClassName="-left-[24px] md:-left-[24px]"
                            active={openIndex === i}
                            inactiveLineClassName="opacity-0 w-[2px]"
                            hoverLineClassName="group-hover:opacity-50"
                            activeLineClassName="opacity-100 w-[3px]"
                        >
                            <span className={cn(
                                "text-lg font-bold leading-tight transition-colors",
                                openIndex === i ? "text-brand-indigo" : "text-text-primary"
                            )}>
                                {faq.q}
                            </span>
                        </AccentBlock>
                        <ChevronDown className={cn(
                            "w-5 h-5 flex-shrink-0 transition-transform duration-300 text-slate-400 group-hover:text-brand-indigo",
                            openIndex === i && "rotate-180 text-brand-indigo"
                        )} />
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 text-text-secondary leading-relaxed text-sm pl-10 md:pl-10">
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
