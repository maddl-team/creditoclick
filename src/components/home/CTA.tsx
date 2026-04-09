"use client";

import * as React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";

export function CTA() {
    return (
        <Section className="pt-10 md:pt-16 pb-32">
            <div className="relative rounded-[32px] bg-brand-indigo overflow-hidden p-12 md:p-24 text-left">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.05] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 max-w-3xl">
                    <Badge className="mb-6 bg-white/20 text-white border-white/30">Contattaci Ora</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1]">
                        Pronto a trovare la soluzione giusta per te?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-12 leading-relaxed opacity-90">
                        Non aspettare che il problema si aggravi o che l'occasione passi. I nostri consulenti sono disponibili per una valutazione gratuita, riservata e senza impegno. Ti rispondiamo entro 24 ore lavorative.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button variant="secondary" className="w-full sm:w-auto bg-white text-brand-indigo hover:bg-indigo-50 border-white" icon={ArrowRight}>
                            Richiedi consulenza gratuita
                        </Button>
                        <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] border-none text-white shadow-lg shadow-emerald-500/20" icon={MessageCircle}>
                            Scrivici su WhatsApp
                        </Button>
                        <Button variant="link" className="text-white hover:text-indigo-200 mt-4 sm:mt-0 sm:ml-4 font-bold border-b border-white/30 h-auto p-0 pb-1">
                            Calcola la tua rata
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
