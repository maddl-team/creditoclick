"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Section } from "../ui/Section";
import { CalcForm } from "./CalcForm";

export function Hero() {
    return (
        <Section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20 min-h-[80vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 items-center w-full">
                {/* Left Column: Messaging */}
                <div className="lg:col-span-2 p-6 md:p-8">
                    <Badge variant="subtle" className="mb-6 animate-fade-in-up">
                        <Sparkles className="w-3 h-3 mr-2" /> Agenti e Mediatori Certificati OAM
                    </Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1] animate-fade-in-up [animation-delay:200ms]">
                        CreditoClick: la tua agenzia di prestiti online, esperta, veloce e dalla tua parte.
                    </h1>
                    <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl animate-fade-in-up [animation-delay:400ms]">
                        Cessione del quinto, rinnovi, consolidamenti e soluzioni su misura per dipendenti, pensionati e Forze dell'Ordine. Tutto online, senza file in filiale, con un esperto reale che ti segue dal primo contatto all'accredito.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up [animation-delay:600ms]">
                        <Button icon={ArrowRight} className="w-full sm:w-auto px-8">
                            Richiedi una consulenza gratuita
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-auto px-8">
                            Calcola la tua rata in 2 minuti
                        </Button>
                    </div>

                    <div className="mt-16 lg:mt-20 pt-10 border-t border-slate-200/90 flex flex-wrap items-center gap-x-12 gap-y-6 animate-fade-in-up [animation-delay:800ms]">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Convenzioni Nazionali</p>
                        <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale contrast-125">
                            <span className="text-lg font-bold italic">Inps</span>
                            <span className="text-lg font-bold italic">NoiPa</span>
                            <span className="text-lg font-bold italic">Mef</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Calculator Form */}
                <div className="lg:col-span-2 lg:pl-12 animate-fade-in-up [animation-delay:400ms]">
                    <CalcForm />
                </div>
            </div>
        </Section>
    );
}
