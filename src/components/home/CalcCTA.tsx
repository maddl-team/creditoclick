"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function CalcCTA() {
    return (
        <Section className="bg-white">
            <div className="relative rounded-[32px] bg-slate-900 overflow-hidden p-10 md:p-16 lg:p-20 text-left">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center relative z-10">
                    <div className="lg:col-span-3">
                        <Badge className="mb-6 bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">Strumento Gratuito</Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            Calcola subito la tua rata: zero impegno, massima trasparenza
                        </h2>
                        <p className="text-lg md:text-xl text-indigo-100/70 leading-relaxed max-w-3xl mb-12">
                            Vuoi sapere quanto potresti ottenere e quale sarebbe la rata mensile? Usa il nostro calcolatore gratuito: ti bastano il tuo stipendio netto e la durata desiderata. Nessun dato personale richiesto.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Button
                                className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-cyan/90 text-slate-900 border-none shadow-xl shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95"
                                icon={ArrowRight}
                            >
                                Calcola la tua rata ora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
