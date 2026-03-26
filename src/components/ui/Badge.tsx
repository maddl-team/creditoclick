import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "outline" | "subtle";
}

export function Badge({ className, variant = "subtle", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                variant === "subtle" && "bg-brand-indigo/10 text-brand-indigo",
                variant === "outline" && "border border-brand-indigo/20 text-brand-indigo",
                className
            )}
            {...props}
        />
    );
}
