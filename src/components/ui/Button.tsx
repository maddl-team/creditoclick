"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
    variant?: "primary" | "secondary" | "link";
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", icon: Icon, iconPosition = "right", children, ...props }, ref) => {
        const isLink = variant === "link";

        if (isLink) {
            const standardProps = props as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>;
            return (
                <button
                    ref={ref}
                    className={cn(
                        "group flex items-center gap-1 text-brand-indigo font-medium hover:text-brand-indigo/80 transition-colors duration-200",
                        className
                    )}
                    {...standardProps}
                >
                    {children}
                    {Icon && (
                        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                </button>
            );
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 disabled:opacity-50 disabled:pointer-events-none",
                    variant === "primary" && "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20 hover:shadow-xl hover:shadow-brand-indigo/30",
                    variant === "secondary" && "bg-white text-text-primary border border-slate-200 hover:bg-slate-50",
                    className
                )}
                {...props}
            >
                {Icon && iconPosition === "left" && <Icon className="w-4 h-4 mr-2" />}
                {children}
                {Icon && iconPosition === "right" && <Icon className="w-4 h-4 ml-2" />}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
