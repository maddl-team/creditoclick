"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function CTA() {
    return (
        <Section className="pb-32">
            <div className="relative rounded-[32px] bg-brand-indigo overflow-hidden p-12 md:p-24 text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white opacity-[0.05] blur-[150px] rounded-full" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
                        Pronto a trasformare la tua <br /> gestione finanziaria?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-12 leading-relaxed opacity-90">
                        Unisciti alle migliaia di persone che hanno già scelto CreditoClick per dare vita ai propri progetti.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="secondary" icon={ArrowRight} className="w-full sm:w-auto px-10 py-4 h-auto text-lg hover:bg-white text-brand-indigo border-transparent">
                            Inizia Ora
                        </Button>
                        <Button className="w-full sm:w-auto px-10 py-4 h-auto text-lg text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm shadow-none">
                            Parla con un esperto
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
