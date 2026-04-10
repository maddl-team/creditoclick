"use client";

import * as React from "react";
import { ClipboardList, UserCheck, FileText, Send } from "lucide-react";
import { Section } from "../ui/Section";
import { cn } from "@/lib/utils";
import { SectionIntro } from "../ui/SectionIntro";
import { FeatureItem } from "../ui/FeatureItem";
import { HOME_PROCESS_STEPS } from "@/content/home";

const PROCESS_ICON_MAP = {
    clipboardList: ClipboardList,
    userCheck: UserCheck,
    fileText: FileText,
    send: Send,
} as const;

export function Process() {
    return (
        <Section id="processo" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Section Header */}
                <div className="lg:col-span-4">
                    <SectionIntro
                        badge="Come Funziona"
                        title="Il processo CreditoClick: semplice, trasparente, veloce"
                        titleClassName="max-w-3xl mb-6"
                        descriptionClassName="max-w-2xl"
                        description="Dalla prima richiesta all'accredito sul conto, ti accompagniamo in ogni passaggio. Ecco come lavoriamo."
                    />
                </div>

                {/* Steps Grid */}
                {/* 
                    Each step takes 2 columns of the 4-column layout = 2 steps per row.
                    We use a container that is lg:col-span-4 and inside it a grid of 2 columns.
                */}
                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-100">
                    {HOME_PROCESS_STEPS.map((step, i) => (
                        <div
                            key={i}
                            className={cn(
                                "transition-all duration-300",
                                i % 2 === 0 && "md:border-r border-slate-100",
                                i < 2 && "border-b border-slate-100"
                            )}
                        >
                            <FeatureItem
                                icon={PROCESS_ICON_MAP[step.icon]}
                                title={step.title}
                                hasPadding={false}
                                className="p-8 md:p-12"
                                iconClassName="w-12 h-12 rounded-2xl mb-8"
                                titleClassName="text-xl"
                                contentClassName="text-base italic"
                                accentOffsetClassName="-left-[32px] md:-left-[48px]"
                            >
                                {step.desc}
                            </FeatureItem>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
