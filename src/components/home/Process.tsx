"use client";

import * as React from "react";
import { ClipboardList, UserCheck, FileText, Send } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

const STEPS = [
    {
        title: "Step 1 — Compila il modulo online.",
        desc: "Nessun documento richiesto in questa fase: ci basta qualche informazione di base per darti una prima valutazione.",
        icon: ClipboardList,
    },
    {
        title: "Step 2 — Analisi gratuita del tuo profilo.",
        desc: "Un consulente specializzato analizza la tua situazione contrattuale, il tuo reddito e l'eventuale storico creditizio. Ti proponiamo solo soluzioni concretamente accessibili — non promesse irrealizzabili.",
        icon: UserCheck,
    },
    {
        title: "Step 3 — Preventivo personalizzato e confronto offerte.",
        desc: "Ti presentiamo la migliore offerta del nostro istituto convenzionato con TAEG, TAN e rata netta chiaramente esposta. Nessun costo nascosto, nessuna sorpresa.",
        icon: FileText,
    },
    {
        title: "Step 4 — Firma digitale e accredito.",
        desc: "Tutta la documentazione si gestisce in modalità elettronica. Una volta approvata la pratica, l'accredito avviene direttamente sul tuo conto corrente nei tempi previsti dal contratto.",
        icon: Send,
    },
];

export function Process() {
    return (
        <Section id="processo" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Section Header */}
                <div className="lg:col-span-4 p-6 md:p-8">
                    <Badge variant="subtle" className="mb-4">Come Funziona</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6 max-w-3xl">
                        Il processo CreditoClick: semplice, trasparente, veloce
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                        Dalla prima richiesta all'accredito sul conto, ti accompagniamo in ogni passaggio. Ecco come lavoriamo.
                    </p>
                </div>

                {/* Steps Grid */}
                {/* 
                    Each step takes 2 columns of the 4-column layout = 2 steps per row.
                    We use a container that is lg:col-span-4 and inside it a grid of 2 columns.
                */}
                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-100">
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative p-8 md:p-12 transition-all duration-300",
                                i % 2 === 0 && "md:border-r border-slate-100",
                                i < 2 && "border-b border-slate-100"
                            )}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-8 transition-transform group-hover:scale-110">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div className="relative pl-1 mb-4">
                                <div className="absolute -left-[32px] md:-left-[48px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                                <h3 className="text-xl font-bold text-text-primary transition-colors group-hover:text-brand-indigo">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed pl-1 italic">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
