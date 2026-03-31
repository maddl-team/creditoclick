"use client";

import * as React from "react";
import { Star } from "lucide-react";
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
    {
        quote: "Grazie alla delega di pagamento ho ottenuto la liquidità che mi serviva per ristrutturare casa, nonostante avessi già un prestito attivo. Professionali e veloci.",
        author: "Antonio P.",
        role: "Vigile del Fuoco, Milano",
        stars: 5,
    },
];

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-50/30">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                {/* Header: Full Width */}
                <div className="lg:col-span-4 p-6 md:p-8 mb-8">
                    <Badge variant="subtle" className="mb-4">Testimonianze</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight max-w-3xl">
                        Cosa dicono i nostri clienti
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                        Centinaia di persone ogni mese si affidano a CreditoClick per rimettere ordine nelle proprie finanze o realizzare piccoli e grandi progetti.
                    </p>
                </div>

                {/* Testimonials Row: 4 Columns */}
                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-slate-200/90">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex flex-col h-full p-6 md:p-8 transition-all duration-300 group relative",
                                i !== TESTIMONIALS.length - 1 && "lg:border-r border-slate-200/90",
                                i % 2 === 0 && "md:border-r lg:border-r-0",
                                i < 2 && "border-b md:border-b-0"
                            )}
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, starIdx) => (
                                    <Star
                                        key={starIdx}
                                        className="w-3 h-3 fill-brand-indigo text-brand-indigo"
                                    />
                                ))}
                            </div>

                            <div className="relative mb-8 flex-grow">
                                <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                                <p className="text-text-primary text-sm leading-relaxed italic pr-4">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo font-bold text-[10px]">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-primary leading-none mb-1">
                                        {t.author}
                                    </p>
                                    <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
