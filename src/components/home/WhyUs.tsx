"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

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
        <Section id="why-us" className="pb-0 md:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 items-center">
                {/* Left Column: Content + Features */}
                <div className="lg:col-span-2">
                    <div className="max-w-2xl mb-8">
                        <Badge variant="subtle" className="mb-4">Perché Sceglierci</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                            La trasparenza è il nostro <br /> patrimonio più grande
                        </h2>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            Siamo nati con l'obiettivo di rendere il credito accessibile a tutti, eliminando la complessità e le zone d'ombra della finanza tradizionale.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-0">
                        {[
                            { title: "Approvazione Rapida", desc: "Processo decisionale in meno di 24 ore per non farti perdere tempo.", icon: CheckCircle2 },
                            { title: "Trasparenza Totale", desc: "Tassi chiari e nessuna commissione nascosta nei nostri contratti.", icon: CheckCircle2 },
                            { title: "Gestione Digitale", desc: "Dalla richiesta alla firma, tutto avviene online in pochi clic.", icon: CheckCircle2 },
                            { title: "Flessibilità", desc: "Opzioni di estinzione anticipata senza penali o costi aggiuntivi.", icon: CheckCircle2 },
                        ].map((benefit, i) => (
                            <div key={i} className="group relative p-6 md:p-8">
                                <div className="flex flex-col items-start">
                                    {/* Icon TOP */}
                                    <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6 transition-transform group-hover:scale-110">
                                        <benefit.icon className="w-5 h-5" />
                                    </div>

                                    {/* Title BELOW with Accent Bar */}
                                    <div className="relative pl-1 mb-3">
                                        {/* Accent Bar - aligned with grid lines, covering ONLY title */}
                                        <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />

                                        <h3 className="text-lg font-bold text-text-primary transition-colors group-hover:text-brand-indigo">
                                            {benefit.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed pl-1">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Decorative Image */}
                <div className="lg:col-span-2 w-full relative group lg:pl-16 mt-16 lg:mt-0">
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
