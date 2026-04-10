"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Section } from "../ui/Section";
import { CalcForm } from "./CalcForm";
import { HOME_HERO_CONTENT } from "@/content/home";

export function Hero() {
    return (
        <Section className="min-h-[70vh] !py-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 items-stretch w-full min-h-[70vh]">
                {/* Left Column: Messaging */}
                <div className="lg:col-span-2 p-6 md:p-8 h-full flex flex-col justify-center items-start">
                    <Badge variant="subtle" className="mb-6 animate-fade-in-up">
                        <Sparkles className="w-3 h-3 mr-2" /> {HOME_HERO_CONTENT.badge}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1] animate-fade-in-up [animation-delay:200ms]">
                        {HOME_HERO_CONTENT.title}
                    </h1>
                    <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl animate-fade-in-up [animation-delay:400ms]">
                        {HOME_HERO_CONTENT.description}
                    </p>

                    <div className="flex flex-col items-start gap-4 animate-fade-in-up [animation-delay:600ms]">
                        <Button icon={ArrowRight} className="w-full sm:w-auto">
                            {HOME_HERO_CONTENT.primaryCta}
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-auto">
                            {HOME_HERO_CONTENT.secondaryCta}
                        </Button>
                    </div>

                    <div className="mt-10 lg:mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 animate-fade-in-up [animation-delay:800ms]">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{HOME_HERO_CONTENT.conventionsLabel}</p>
                        <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale contrast-125">
                            {HOME_HERO_CONTENT.conventions.map((item) => (
                                <span key={item} className="text-lg font-bold italic">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Calculator Form */}
                <div className="lg:col-span-2 animate-fade-in-up [animation-delay:400ms] bg-brand-indigo h-full">
                    <CalcForm />
                </div>
            </div>
        </Section>
    );
}
