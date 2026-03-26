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
        <Section id="services" className="bg-slate-50/50">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <Badge variant="subtle" className="mb-4">I Nostri Servizi</Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
                    Soluzioni finanziarie su misura per te
                </h2>
                <p className="text-lg text-text-secondary">
                    Offriamo una gamma completa di strumenti finanziari progettati per aiutarti a raggiungere i tuoi obiettivi con semplicità e trasparenza.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, index) => (
                    <Card key={service.title} className="flex flex-col h-full">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                            <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                            {service.description}
                        </p>
                        <Button variant="link" icon={ArrowRight} className="text-sm justify-start p-0">
                            Scopri di più
                        </Button>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
