"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    leftOffsetClassName?: string;
    accentColorClassName?: string;
    inactiveLineClassName?: string;
    hoverLineClassName?: string;
    activeLineClassName?: string;
}

export function AccentBlock({
    active = false,
    className,
    children,
    leftOffsetClassName = "-left-[24px] md:-left-[32px]",
    accentColorClassName = "bg-brand-indigo",
    inactiveLineClassName = "opacity-80 w-[2px]",
    hoverLineClassName = "group-hover:w-[3px] group-hover:opacity-100",
    activeLineClassName = "opacity-100 w-[3px]",
    ...props
}: AccentBlockProps) {
    return (
        <div className={cn("relative pl-1", className)} {...props}>
            <div
                className={cn(
                    "absolute top-1 bottom-1 transition-all rounded-r-full",
                    leftOffsetClassName,
                    accentColorClassName,
                    active ? activeLineClassName : inactiveLineClassName,
                    !active && hoverLineClassName
                )}
            />
            {children}
        </div>
    );
}
