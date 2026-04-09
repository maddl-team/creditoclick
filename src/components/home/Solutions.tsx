"use client";

import * as React from "react";
import Image from "next/image";
import { AlertCircle, Target, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function Solutions() {
    return (
        <Section id="soluzioni" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Left Column (Messaging + Content) */}
                <div className="lg:col-span-2 p-6 md:p-8 space-y-12">
                    {/* Intro */}
                    <div>
                        <Badge variant="subtle" className="mb-4">Soluzioni ai Problemi</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                            Hai un problema specifico? Abbiamo una soluzione concreta.
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            A volte il bisogno di liquidità nasce da una situazione difficile — un debito da ristrutturare, una segnalazione in CRIF, un mutuo che rischia di slittare. Altre volte è un progetto di vita. In entrambi i casi, ti aiutiamo a trovare una strada.
                        </p>
                    </div>

                    {/* Solutions Content (Now on the left) */}
                    <div className="space-y-12">
                        {/* Pain Points */}
                        <div className="group relative">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6 transition-transform group-hover:scale-110">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div className="relative pl-1 mb-4">
                                <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-amber-500 opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                                <h3 className="text-xl font-bold text-text-primary">Soluzioni ai Pain Points</h3>
                            </div>
                            <div className="space-y-6 text-slate-600 text-sm leading-relaxed pl-1">
                                <p>
                                    <strong className="text-text-primary block mb-1">Prestito per Cattivi Pagatori e Segnalati CRIF</strong>
                                    Hai una segnalazione in Centrale Rischi? Con la cessione del quinto la valutazione si basa sulla busta paga, non sulla tua storia creditizia.
                                </p>
                                <p>
                                    <strong className="text-text-primary block mb-1">Consolidamento Debiti</strong>
                                    Troppe rate ogni mese? Possiamo riunirle in un'unica rata mensile più bassa e sostenibile, liberandoti dallo stress finanziario.
                                </p>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="group relative">
                            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6 transition-transform group-hover:scale-110">
                                <Target className="w-5 h-5" />
                            </div>
                            <div className="relative pl-1 mb-4">
                                <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                                <h3 className="text-xl font-bold text-text-primary">Soluzioni per Progetti di Vita</h3>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6 pl-1">
                                {[
                                    "Anticipo per il Mutuo Casa",
                                    "Acquisto Auto o Moto",
                                    "Matrimonio e Cerimonie",
                                    "Ristrutturazione Casa",
                                    "Spese Mediche e Salute"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                        <div className="w-1 h-1 rounded-full bg-brand-indigo" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pl-1">
                                <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold">
                                    Esplora tutte le soluzioni
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Image) */}
                <div className="lg:col-span-2 relative min-h-[500px] lg:min-h-full">
                    <div className="absolute inset-0">
                        <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/solutions.png"
                                alt="Consulenza Finanziaria CreditoClick"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Accent line on image container */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-indigo z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
