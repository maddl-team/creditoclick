"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionIntroProps extends React.HTMLAttributes<HTMLDivElement> {
    badge?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    titleClassName?: string;
    descriptionClassName?: string;
}

export function SectionIntro({
    badge,
    title,
    description,
    className,
    titleClassName,
    descriptionClassName,
    ...props
}: SectionIntroProps) {
    return (
        <div className={cn("p-6 md:p-8", className)} {...props}>
            {badge ? (
                typeof badge === "string" ? (
                    <Badge variant="subtle" className="mb-4">
                        {badge}
                    </Badge>
                ) : (
                    <div className="mb-4">{badge}</div>
                )
            ) : null}

            <h2 className={cn(
                "text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight",
                titleClassName
            )}>
                {title}
            </h2>

            {description ? (
                typeof description === "string" ? (
                    <p className={cn("text-lg text-text-secondary leading-relaxed", descriptionClassName)}>
                        {description}
                    </p>
                ) : (
                    <div className={cn("text-lg text-text-secondary leading-relaxed", descriptionClassName)}>
                        {description}
                    </div>
                )
            ) : null}
        </div>
    );
}
