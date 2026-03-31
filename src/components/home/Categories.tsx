"use client";

import * as React from "react";
import { Stethoscope, GraduationCap, Shield, Building2, Briefcase, UserCircle } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

const TARGET_CATEGORIES = [
    {
        title: "Sanità e Infermieri",
        desc: "Prestiti veloci per chi non ha tempo di stare in fila in banca.",
        icon: Stethoscope,
    },
    {
        title: "Insegnanti e ATA",
        desc: "Convenzione NoiPA, iter telematico, zero scartoffie in segreteria.",
        icon: GraduationCap,
    },
    {
        title: "Forze Armate e dell'Ordine",
        desc: "Convezioni dedicate per Esercito, GdF, Carabinieri, Polizia, VVF.",
        icon: Shield,
    },
    {
        title: "Dipendenti Grandi Aziende",
        desc: "SPA e SRL strutturate: iter riservato e rapido.",
        icon: Building2,
    },
    {
        title: "Dipendenti PMI",
        desc: "Sotto i 15 dipendenti? Valutiamo il tuo TFR accumulato, non solo il bilancio aziendale.",
        icon: Briefcase,
    },
    {
        title: "Pensionati INPS",
        desc: "Fino a 85 anni, con assicurazione inclusa e iter completamente digitale.",
        icon: UserCircle,
    },
];

export function Categories() {
    return (
        <Section id="categorie" className="bg-slate-50/30">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Left Column: Messaging */}
                <div className="lg:col-span-2 p-6 md:p-8">
                    <Badge variant="subtle" className="mb-4">Target / Professioni</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                        Una soluzione pensata per la tua categoria professionale
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        Ogni professione ha le sue caratteristiche contrattuali, le sue convenzioni e le sue esigenze. Un infermiere con turni notturni non ha le stesse priorità di un docente con contratto MIUR, né di un maresciallo dei Carabinieri o di un dipendente di una PMI con 8 dipendenti. Per questo abbiamo costruito percorsi specifici per ciascuna categoria.
                    </p>
                </div>

                {/* Right Column: Category Items */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0">
                    {TARGET_CATEGORIES.map((cat, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative p-6 md:p-8 transition-all duration-300"
                            )}
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-6 transition-transform group-hover:scale-110">
                                <cat.icon className="w-5 h-5" />
                            </div>
                            <div className="relative pl-1 mb-3">
                                <div className="absolute -left-[24px] md:-left-[32px] top-1 bottom-1 w-[2px] bg-brand-indigo opacity-80 group-hover:w-[3px] group-hover:opacity-100 transition-all rounded-r-full" />
                                <h3 className="text-lg font-bold text-text-primary transition-colors group-hover:text-brand-indigo">
                                    {cat.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed pl-1">
                                {cat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
