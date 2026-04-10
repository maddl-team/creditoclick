"use client";

import * as React from "react";
import { ShieldCheck, FileCheck, Scale, Lock, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { HOME_TRANSPARENCY_CONTENT } from "@/content/home";
import { FeatureItem } from "../ui/FeatureItem";

const TRANSPARENCY_ICON_MAP = {
    fileCheck: FileCheck,
    shieldCheck: ShieldCheck,
    scale: Scale,
    lock: Lock,
} as const;

export function Transparency() {
    return (
        <Section id="trasparenza" className="bg-slate-900 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                <div className="lg:col-span-2 p-6 md:p-8">
                    <Badge className="mb-6 bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30">{HOME_TRANSPARENCY_CONTENT.badge}</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                        {HOME_TRANSPARENCY_CONTENT.title}
                    </h2>
                    <div className="space-y-6 text-indigo-100/80 text-lg leading-relaxed">
                        {HOME_TRANSPARENCY_CONTENT.paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 pt-4 lg:pt-8">
                    <h3 className="text-xl font-bold mb-6 text-brand-cyan px-6 md:px-8">{HOME_TRANSPARENCY_CONTENT.listTitle}</h3>
                    <div className="grid sm:grid-cols-2 gap-0">
                        {HOME_TRANSPARENCY_CONTENT.guarantees.map((item, i) => (
                            <FeatureItem
                                key={i}
                                icon={TRANSPARENCY_ICON_MAP[item.icon]}
                                title={item.text}
                                theme="cyan"
                                titleClassName="text-indigo-50/95 text-base leading-relaxed font-medium"
                                iconClassName="bg-white/10 text-brand-cyan"
                            />
                        ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10 text-xs text-indigo-200/50 space-y-2">
                        {HOME_TRANSPARENCY_CONTENT.legalNotes.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                        <div className="pt-6 flex gap-6">
                            <Button variant="link" className="text-white p-0 h-auto font-bold text-xs" icon={ArrowRight}>
                                {HOME_TRANSPARENCY_CONTENT.legalCtas[0]}
                            </Button>
                            <Button variant="link" className="text-white p-0 h-auto font-bold text-xs" icon={ArrowRight}>
                                {HOME_TRANSPARENCY_CONTENT.legalCtas[1]}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
