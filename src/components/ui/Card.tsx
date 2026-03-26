import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = true, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300",
                hoverEffect && "hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
