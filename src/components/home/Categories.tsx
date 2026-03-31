"use client";

import * as React from "react";
import { Stethoscope, GraduationCap, Shield, Building2, Briefcase, UserCircle } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { cn } from "@/lib/utils";

const TARGET_CATEGORIES = [
    {
        title: "Sanità e Infermieri",
        desc: "Prestiti veloci per chi non ha tempo di stare in fila in banca.",
        icon: Stethoscope,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Insegnanti e ATA",
        desc: "Convenzione NoiPA, iter telematico, zero scartoffie in segreteria.",
        icon: GraduationCap,
        color: "bg-brand-indigo/10 text-brand-indigo",
    },
    {
        title: "Forze Armate e dell'Ordine",
        desc: "Convezioni dedicate per Esercito, GdF, Carabinieri, Polizia, VVF.",
        icon: Shield,
        color: "bg-slate-100 text-slate-700",
    },
    {
        title: "Dipendenti Grandi Aziende",
        desc: "SPA e SRL strutturate: iter riservato e rapido.",
        icon: Building2,
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Dipendenti PMI",
        desc: "Sotto i 15 dipendenti? Valutiamo il tuo TFR accumulato, non solo il bilancio aziendale.",
        icon: Briefcase,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Pensionati INPS",
        desc: "Fino a 85 anni, con assicurazione inclusa e iter completamente digitale.",
        icon: UserCircle,
        color: "bg-purple-50 text-purple-600",
    },
];

export function Categories() {
    return (
        <Section id="categorie" className="bg-slate-50/30">
            <div className="max-w-3xl mb-16">
                <Badge variant="subtle" className="mb-4">Target / Professioni</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
                    Una soluzione pensata per la tua categoria professionale
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    Ogni professione ha le sue caratteristiche contrattuali, le sue convenzioni e le sue esigenze. Un infermiere con turni notturni non ha le stesse priorità di un docente con contratto MIUR, né di un maresciallo dei Carabinieri o di un dipendente di una PMI con 8 dipendenti. Per questo abbiamo costruito percorsi specifici per ciascuna categoria.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TARGET_CATEGORIES.map((cat, i) => (
                    <Card
                        key={i}
                        className="p-8 hover:border-brand-indigo/30 transition-all duration-300 group cursor-pointer border-slate-200/60"
                    >
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", cat.color)}>
                            <cat.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">
                            {cat.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            {cat.desc}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
