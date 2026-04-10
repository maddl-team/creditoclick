"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { SectionIntro } from "./SectionIntro";
import { FeatureItem } from "./FeatureItem";
import { PROCESS_STEP_ICON_MAP, type ProcessStepIconKey } from "./processStepIcons";

export type ProcessStepItem = {
    title: string;
    desc: string;
    icon: ProcessStepIconKey;
};

interface ProcessStepsSectionProps {
    sectionId?: string;
    sectionClassName?: string;
    badge: React.ReactNode;
    title: React.ReactNode;
    titleClassName?: string;
    description?: React.ReactNode;
    descriptionClassName?: string;
    steps: readonly ProcessStepItem[];
    footer?: React.ReactNode;
}

export function ProcessStepsSection({
    sectionId,
    sectionClassName,
    badge,
    title,
    titleClassName,
    description,
    descriptionClassName,
    steps,
    footer,
}: ProcessStepsSectionProps) {
    return (
        <Section id={sectionId} className={cn("bg-white", sectionClassName)}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                <div className="lg:col-span-4">
                    <SectionIntro
                        badge={badge}
                        title={title}
                        titleClassName={cn("max-w-3xl mb-6", titleClassName)}
                        description={description}
                        descriptionClassName={descriptionClassName}
                    />
                </div>

                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-100">
                    {steps.map((step, i) => (
                        <div
                            key={`${step.title}-${i}`}
                            className={cn(
                                "transition-all duration-300",
                                i % 2 === 0 && "md:border-r border-slate-100",
                                i < 2 && "border-b border-slate-100"
                            )}
                        >
                            <FeatureItem
                                icon={PROCESS_STEP_ICON_MAP[step.icon]}
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

                {footer ? (
                    <div className="lg:col-span-4 border-t border-slate-100 px-6 md:px-8 py-8 md:py-10">
                        {footer}
                    </div>
                ) : null}
            </div>
        </Section>
    );
}
