"use client";

import * as React from "react";
import { ShieldCheck, Clock, Smartphone, Info } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

const TRUST_PILLS = [
    {
        title: "Operatori OAM certificati",
        desc: "Mediatori creditizi regolarmente iscritti al registro ufficiale.",
        icon: ShieldCheck,
    },
    {
        title: "Risposta in 24 ore lavorative",
        desc: "Prima valutazione gratuita e senza impegno entro un giorno.",
        icon: Clock,
    },
    {
        title: "100% digitale, 0% code",
        desc: "Tutta la pratica si gestisce online o via WhatsApp. Nessuna filiale.",
        icon: Smartphone,
    },
    {
        title: "Trasparenza totale sul costo del credito",
        desc: "Ti mostriamo TAEG, TAN e rata netta prima di firmare qualsiasi cosa.",
        icon: Info,
    },
];

export function TrustBar() {
    return (
        <Section id="perche-sceglierci" className="bg-slate-50/50">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                <div className="lg:col-span-2 pr-0 lg:pr-12">
                    <Badge variant="subtle" className="mb-4">Perché Sceglierci</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                        Perché scegliere CreditoClick?
                    </h2>
                    <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                        <p>
                            Non siamo un comparatore automatico. Non siamo una banca. Siamo un'agenzia finanziaria convenzionata, composta da consulenti specializzati che lavorano ogni giorno per trovare la soluzione di credito più adatta alla tua situazione reale — non a quella ideale.
                        </p>
                        <p>
                            Lavoriamo con i principali istituti finanziatori italiani, siamo iscritti all'OAM (Organismo Agenti e Mediatori) e operiamo nel pieno rispetto della normativa sulla trasparenza bancaria e del Codice del Consumo.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0 border-l border-slate-200/90 ml-[-1px]">
                    {TRUST_PILLS.map((pill, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative p-6 md:p-8 transition-all duration-300",
                                i % 2 === 0 && "border-r border-slate-200/90",
                                (i === 0 || i === 1) && "border-b border-slate-200/90"
                            )}
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6 transition-transform group-hover:scale-110">
                                <pill.icon className="w-5 h-5" />
                            </div>
                            <div className="relative pl-1 mb-3">
                                <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                                <h3 className="text-lg font-bold text-text-primary transition-colors group-hover:text-brand-indigo">
                                    {pill.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed pl-1">
                                {pill.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
