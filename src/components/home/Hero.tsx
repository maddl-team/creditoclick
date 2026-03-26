"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Section } from "../ui/Section";

export function Hero() {
    return (
        <Section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center">
            <div className="max-w-4xl">
                <Badge variant="subtle" className="mb-6 animate-fade-in-up">
                    <Sparkles className="w-3 h-3 mr-2" /> La nuova era del credito agentico
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1] animate-fade-in-up [animation-delay:200ms]">
                    Il futuro delle finanze <br />
                    <span className="text-gradient">semplificato e intelligente.</span>
                </h1>
                <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl animate-fade-in-up [animation-delay:400ms]">
                    Ottieni accesso immediato a soluzioni finanziarie personalizzate grazie al potere dell'intelligenza artificiale applicata al credito.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up [animation-delay:600ms]">
                    <Button icon={ArrowRight} className="w-full sm:w-auto px-8">
                        Richiedi Consulenza
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto px-8">
                        Scopri come funziona
                    </Button>
                </div>

                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap items-center gap-x-12 gap-y-6 animate-fade-in-up [animation-delay:800ms]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Partner di Fiducia</p>
                    <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale contrast-125">
                        <span className="text-xl font-bold italic">Goldman Sachs</span>
                        <span className="text-xl font-bold italic">Unicredit</span>
                        <span className="text-xl font-bold italic">Intesa Sanpaolo</span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
