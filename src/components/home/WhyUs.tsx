"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";

const BENEFITS = [
    "Approvazione in meno di 24 ore",
    "Tassi di interesse trasparenti",
    "Nessuna penale per estinzione anticipata",
    "Gestione 100% digitale",
    "Consulenza dedicata h24",
    "Senza costi di commissione nascosti",
];

export function WhyUs() {
    return (
        <Section id="why-us">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 max-w-2xl">
                    <Badge variant="subtle" className="mb-4">Perché Sceglierci</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                        La trasparenza è il nostro <br /> patrimonio più grande
                    </h2>
                    <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                        Siamo nati con l'obiettivo di rendere il credito accessibile a tutti, eliminando la complessità e le zone d'ombra della finanza tradizionale.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {BENEFITS.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-indigo shrink-0" />
                                <span className="text-slate-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full relative group">
                    <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-brand-cyan/20 z-10" />
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="w-full h-full border border-slate-200 rounded-2xl bg-white shadow-lg p-8 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                <div className="h-8 w-32 bg-slate-100 rounded mb-6" />
                                <div className="space-y-4">
                                    <div className="h-4 w-full bg-slate-50 rounded" />
                                    <div className="h-4 w-5/6 bg-slate-50 rounded" />
                                    <div className="h-4 w-4/6 bg-slate-50 rounded" />
                                </div>
                                <div className="mt-auto pt-12 flex justify-end">
                                    <div className="h-10 w-24 bg-brand-indigo/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative shapes */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 blur-[60px] rounded-full" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-purple/10 blur-[60px] rounded-full" />
                </div>
            </div>
        </Section>
    );
}
