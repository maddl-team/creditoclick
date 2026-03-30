"use client";

import * as React from "react";
import {
    CreditCard,
    TrendingUp,
    ShieldCheck,
    Zap,
    ArrowRight
} from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        icon: CreditCard,
        title: "Credito al Consumo",
        description: "Finanziamenti flessibili per ogni tua esigenza, con tassi competitivi e approvazione rapida.",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        icon: TrendingUp,
        title: "Analisi di Portafoglio",
        description: "Algoritmi avanzati per ottimizzare i tuoi investimenti e monitorare l'andamento del mercato.",
        color: "bg-indigo-500/10 text-indigo-500",
    },
    {
        icon: ShieldCheck,
        title: "Assicurazioni Smart",
        description: "Proteggi ciò che ami con polizze dinamiche che si adattano al tuo stile di vita reale.",
        color: "bg-cyan-500/10 text-cyan-500",
    },
    {
        icon: Zap,
        title: "Prestiti Veloci",
        description: "Liquidità immediata per le tue emergenze, senza la burocrazia delle banche tradizionali.",
        color: "bg-purple-500/10 text-purple-500",
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-slate-50/50 pb-0 md:pb-0">
            <div className="max-w-3xl mb-20 pl-1">
                <Badge variant="subtle" className="mb-4">I Nostri Servizi</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
                    Soluzioni finanziarie su misura per te
                </h2>
                <p className="text-lg text-text-secondary">
                    Offriamo una gamma completa di strumenti finanziari progettati per aiutarti a raggiungere i tuoi obiettivi con semplicità e trasparenza.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-slate-200/90">
                {SERVICES.map((service, index) => (
                    <div
                        key={service.title}
                        className={cn(
                            "flex flex-col h-full p-5 md:p-6 transition-all duration-300 group relative",
                            index !== 3 && "lg:border-r border-slate-200/90",
                            index % 2 === 0 && "md:border-r lg:border-r-0",
                            (index === 0 || index === 1) && "border-b md:border-b-0"
                        )}
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.color}`}>
                            <service.icon className="w-5 h-5" />
                        </div>

                        <div className="relative pl-1 mb-3">
                            {/* Accent Bar on the Left Column Border (Background Line) */}
                            <div className={cn(
                                "absolute -left-[21px] md:-left-[25px] top-1 bottom-1 w-[2px] rounded-r-full transition-all duration-500",
                                "bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100"
                            )} />
                            <h3 className="text-lg font-bold text-text-primary transition-colors duration-300 group-hover:text-brand-indigo">
                                {service.title}
                            </h3>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow pl-1">
                            {service.description}
                        </p>

                        <Button variant="link" icon={ArrowRight} className="text-sm justify-start p-0 pl-1 group-hover:translate-x-1 transition-transform">
                            Scopri di più
                        </Button>
                    </div>
                ))}
            </div>
        </Section>
    );
}
