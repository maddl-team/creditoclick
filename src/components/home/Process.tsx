"use client";

import * as React from "react";
import { Check, ClipboardList, UserCheck, FileText, Send } from "lucide-react";
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
            <div className="max-w-3xl mb-20 text-center mx-auto">
                <Badge variant="subtle" className="mb-4">Come Funziona</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
                    Il processo CreditoClick: semplice, trasparente, veloce
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    Dalla prima richiesta all'accredito sul conto, ti accompagniamo in ogni passaggio. Ecco come lavoriamo.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Connection Line */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-[50%] hidden md:block" />

                <div className="space-y-12 md:space-y-24">
                    {STEPS.map((step, i) => (
                        <div key={i} className={cn(
                            "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                            i % 2 !== 0 && "md:flex-row-reverse"
                        )}>
                            <div className="flex-1 text-center md:text-right w-full">
                                {i % 2 === 0 ? (
                                    <>
                                        <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                                        <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                                    </>
                                ) : <div className="hidden md:block" />}
                            </div>

                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-brand-indigo shadow-lg group-hover:scale-110 transition-transform">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-indigo text-white flex items-center justify-center text-sm font-bold shadow-md">
                                    {i + 1}
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left w-full">
                                {i % 2 !== 0 ? (
                                    <>
                                        <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                                        <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                                    </>
                                ) : <div className="hidden md:block" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
