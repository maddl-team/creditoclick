"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
    {
        quote: "Avevo una segnalazione CRIF e nessuna banca mi aiutava. CreditoClick ha trovato una soluzione in meno di 48 ore. Finalmente respiro.",
        author: "Marco T.",
        role: "Infermiere, Napoli",
        stars: 5,
    },
    {
        quote: "Insegno alle medie e non avevo tempo per andare in banca. Ho fatto tutto dal telefono, in pausa pranzo. Pratica approvata in 3 giorni.",
        author: "Giovanna R.",
        role: "Docente, Torino",
        stars: 5,
    },
    {
        quote: "Avevo 5 rate diverse ogni mese. Ora ne ho una sola, più bassa. Hanno gestito tutto loro, io ho solo firmato.",
        author: "Roberto M.",
        role: "Dipendente pubblico, Roma",
        stars: 5,
    },
];

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-50/30 pt-10 md:pt-16 pb-0 md:pb-0">
            <div className="max-w-3xl mb-20 px-1">
                <Badge variant="subtle" className="mb-4">Testimonianze</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
                    Cosa dicono i nostri partner
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    Supportiamo aziende di ogni dimensione nel loro percorso di crescita finanziaria. Ecco alcune delle loro esperienze.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-slate-200/90">
                {TESTIMONIALS.map((t, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex flex-col h-full p-6 md:p-8 transition-all duration-300 group relative",
                            i !== 3 && "lg:border-r border-slate-200/90",
                            i % 2 === 0 && "md:border-r lg:border-r-0",
                            (i === 0 || i === 1) && "border-b md:border-b-0"
                        )}
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(t.stars)].map((_, starIdx) => (
                                <Star
                                    key={starIdx}
                                    className="w-4 h-4 fill-brand-indigo text-brand-indigo"
                                />
                            ))}
                        </div>

                        {/* Quote with Accent Bar */}
                        <div className="relative mb-8 flex-grow">
                            {/* Accent Bar - aligned with grid lines */}
                            <div className="absolute -left-[25px] md:-left-[33px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />

                            <p className="text-text-primary text-sm leading-relaxed italic pr-4">
                                "{t.quote}"
                            </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo font-bold text-xs">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text-primary leading-none mb-1">
                                    {t.author}
                                </p>
                                <p className="text-xs text-text-secondary uppercase tracking-wider font-medium">
                                    {t.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
