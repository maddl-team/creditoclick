"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AccentBlock } from "./AccentBlock";

export type FeatureTheme = "indigo" | "cyan" | "green" | "amber";

interface FeatureItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    icon: React.ElementType;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    theme?: FeatureTheme;
    hasPadding?: boolean;
    iconClassName?: string;
    titleClassName?: string;
    contentClassName?: string;
    accentOffsetClassName?: string;
}

const themeMap = {
    indigo: {
        bgIcon: "bg-brand-indigo/10 text-brand-indigo",
        textHover: "group-hover:text-brand-indigo",
        borderBox: "bg-brand-indigo",
    },
    cyan: {
        bgIcon: "bg-brand-cyan/20 text-brand-indigo",
        textHover: "group-hover:text-brand-indigo",
        borderBox: "bg-brand-cyan",
    },
    green: {
        bgIcon: "bg-green-500/10 text-green-600",
        textHover: "group-hover:text-green-600",
        borderBox: "bg-green-500",
    },
    amber: {
        bgIcon: "bg-amber-500/10 text-amber-600",
        textHover: "group-hover:text-amber-600",
        borderBox: "bg-amber-500",
    }
};

export function FeatureItem({
    icon: Icon,
    title,
    subtitle,
    children,
    theme = "indigo",
    hasPadding = true,
    iconClassName,
    titleClassName,
    contentClassName,
    accentOffsetClassName,
    className,
    ...props
}: FeatureItemProps) {
    const t = themeMap[theme];

    return (
        <div
            className={cn(
                "group relative transition-all duration-300",
                hasPadding ? "p-6 md:p-8" : "py-6 md:py-8",
                className
            )}
            {...props}
        >
            <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                iconClassName,
                t.bgIcon
            )}>
                <Icon className="w-5 h-5" />
            </div>

            <AccentBlock
                className="mb-3"
                accentColorClassName={t.borderBox}
                leftOffsetClassName={accentOffsetClassName}
            >
                <h4 className={cn(
                    "text-lg font-bold text-text-primary transition-colors -ml-1",
                    t.textHover,
                    titleClassName
                )}>
                    {title}
                </h4>
                {subtitle && (
                    <div className="mt-1">
                        {subtitle}
                    </div>
                )}
            </AccentBlock>
            {children ? (
                <div className={cn("text-slate-600 text-sm leading-relaxed pl-0 mt-4", contentClassName)}>
                    {children}
                </div>
            ) : null}
        </div>
    );
}
