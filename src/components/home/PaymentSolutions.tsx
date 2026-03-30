"use client";

import * as React from "react";
import {
    Globe,
    CreditCard,
    RefreshCcw,
    ArrowRight,
    Check
} from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const FEATURES = [
    {
        icon: CreditCard,
        title: "Accedi a più di 100 metodi di pagamento",
        description: "Soddisfa le preferenze dei clienti ed espanditi in nuovi mercati proponendo metodi di pagamento internazionali utilizzati dagli acquirenti di tutto il mondo.",
    },
    {
        icon: Globe,
        title: "Mostra valute locali",
        description: "Migliora le conversioni mostrando le valute locali al tasso di cambio più recente con Adaptive Pricing.",
    },
    {
        icon: RefreshCcw,
        title: "Gestisci i fondi in più valute",
        description: "Riduci i costi di gestione di più valute regolando i pagamenti e versando i fondi tramite il regolamento multi-valuta.",
    },
];

export function PaymentSolutions() {
    return (
        <Section id="solutions">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 items-start">
                {/* Left Column: Content + Features - Spans first 2 columns (Line 1 to 3) */}
                <div className="lg:col-span-2 pr-0 lg:pr-12">
                    <div className="max-w-2xl mb-2">
                        <Badge variant="subtle" className="mb-4">Ecosistema Globale</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
                            Espanditi globalmente <br /> con facilità
                        </h2>
                        <p className="text-lg text-text-secondary mb-0 leading-relaxed">
                            Riduci la complessità e i costi della gestione multi-valuta con opzioni di pagamento transfrontaliere flessibili, disponibili in 195 Paesi e oltre 135 valute.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {FEATURES.map((feature, i) => (
                            <div key={i} className="relative group">
                                <div className="flex flex-col items-start p-5 md:p-6 group relative">
                                    {/* Icon TOP */}
                                    <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6 transition-transform group-hover:scale-110">
                                        <feature.icon className="w-5 h-5" />
                                    </div>

                                    {/* Title BELOW with Accent Bar */}
                                    <div className="relative pl-1 mb-3">
                                        {/* Accent Bar - aligned with the first vertical background line, covering ONLY title */}
                                        <div className="absolute -left-[20px] md:-left-[24px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />

                                        <h3 className="text-lg font-bold text-text-primary transition-colors group-hover:text-brand-indigo">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed max-w-lg pl-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Simple Image Placeholder - Spans last 2 columns (Line 3 to 5) */}
                <div className="lg:col-span-2 w-full pt-10 lg:pt-0 lg:pl-16">
                    <div className="relative group">
                        <div className="aspect-[4/5] w-full rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-2xl relative">
                            {/* Simple illustrative placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-brand-cyan/5" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="w-full h-full bg-white rounded-xl shadow-lg p-8 border border-slate-100 flex flex-col">
                                    <div className="h-4 w-1/3 bg-slate-100 rounded mb-8" />
                                    <div className="space-y-4">
                                        <div className="h-10 w-full bg-slate-50 rounded-lg" />
                                        <div className="h-10 w-full bg-slate-50 rounded-lg" />
                                        <div className="h-10 w-full bg-slate-50 rounded-lg" />
                                    </div>
                                    <div className="mt-auto h-12 w-full bg-brand-indigo/10 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative blur */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-indigo/10 blur-[80px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
