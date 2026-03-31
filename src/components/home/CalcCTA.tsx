"use client";

import * as React from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function CalcCTA() {
    return (
        <Section className="bg-white">
            <div className="relative rounded-[32px] bg-slate-900 overflow-hidden p-8 md:p-16 text-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-cyan/20 blur-[100px] rounded-full -translate-y-1/2" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <Badge className="mb-6 bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30">Strumento Gratuito</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Calcola subito la tua rata: zero impegno, massima trasparenza
                    </h2>
                    <p className="text-lg text-indigo-100/80 mb-10 leading-relaxed">
                        Vuoi sapere quanto potresti ottenere e quale sarebbe la rata mensile? Usa il nostro calcolatore gratuito: ti bastano il tuo stipendio netto (o la pensione) e la durata desiderata. Nessun dato personale richiesto, nessuna richiesta formale, nessun impatto sulla tua posizione in CRIF.
                    </p>
                    <Button
                        className="bg-brand-cyan hover:bg-brand-cyan/90 text-slate-900 border-none px-10 py-7 text-base font-bold shadow-xl shadow-brand-cyan/20"
                        icon={ArrowRight}
                    >
                        Calcola la tua rata ora
                    </Button>
                </div>
            </div>
        </Section>
    );
}
