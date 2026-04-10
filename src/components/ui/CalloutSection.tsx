"use client";

import * as React from "react";
import { Section } from "./Section";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface CalloutSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    sectionClassName?: string;
    containerClassName?: string;
    contentClassName?: string;
    badge?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    titleClassName?: string;
    descriptionClassName?: string;
    glowClassName?: string;
    showGridOverlay?: boolean;
    actions?: React.ReactNode;
}

export function CalloutSection({
    sectionClassName,
    className,
    containerClassName,
    contentClassName,
    badge,
    title,
    description,
    titleClassName,
    descriptionClassName,
    glowClassName,
    showGridOverlay = true,
    actions,
    children,
    ...props
}: CalloutSectionProps) {
    return (
        <Section className={sectionClassName}>
            <div
                className={cn(
                    "relative rounded-[32px] overflow-hidden text-left",
                    containerClassName
                )}
                {...props}
            >
                {showGridOverlay && <div className="absolute inset-0 bg-grid-pattern opacity-10" />}
                {glowClassName ? <div className={cn("absolute rounded-full blur-[150px]", glowClassName)} /> : null}

                <div className={cn("relative z-10", className)}>
                    <div className={contentClassName}>
                        {badge ? (
                            typeof badge === "string" ? (
                                <Badge className="mb-6">{badge}</Badge>
                            ) : (
                                <div className="mb-6">{badge}</div>
                            )
                        ) : null}

                        <h2 className={cn("font-bold mb-8", titleClassName)}>{title}</h2>

                        {description ? (
                            <p className={cn("leading-relaxed mb-12", descriptionClassName)}>{description}</p>
                        ) : null}

                        {actions}
                    </div>
                    {children}
                </div>
            </div>
        </Section>
    );
}
