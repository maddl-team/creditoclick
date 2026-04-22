"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CalloutSection } from "../ui/CalloutSection";
import { HOME_CALC_CTA_CONTENT } from "@/content/home";

export function CalcCTA() {
    return (
        <CalloutSection
            sectionClassName="bg-white"
            containerClassName="bg-slate-900 p-10 md:p-16 lg:p-20"
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center"
            contentClassName="lg:col-span-3"
            badge={<Badge className="bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">{HOME_CALC_CTA_CONTENT.badge}</Badge>}
            title={HOME_CALC_CTA_CONTENT.title}
            titleClassName="text-3xl md:text-4xl text-white leading-tight"
            description={HOME_CALC_CTA_CONTENT.description}
            descriptionClassName="text-lg md:text-xl text-indigo-100/70 max-w-3xl"
            showGridOverlay={false}
            actions={
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button
                        className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-cyan/90 text-slate-900 border-none shadow-xl shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95"
                        icon={ArrowRight}
                        href="/strumenti/calcolo-rata-cessione-quinto"
                    >
                        {HOME_CALC_CTA_CONTENT.primaryButton}
                    </Button>
                </div>
            }
        />
    );
}
