"use client";

import * as React from "react";
import { AlertCircle, Target, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function Solutions() {
    return (
        <Section id="soluzioni" className="bg-white">
            <div className="max-w-3xl mb-16">
                <Badge variant="subtle" className="mb-4">Soluzioni ai Problemi</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
                    Hai un problema specifico? Abbiamo una soluzione concreta.
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    A volte il bisogno di liquidità nasce da una situazione difficile — un debito da ristrutturare, una segnalazione in CRIF, un mutuo che rischia di slittare. Altre volte è un progetto di vita che merita di essere realizzato. In entrambi i casi, ti aiutiamo a trovare una strada.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Pain Points */}
                <div className="bg-slate-50 rounded-[32px] p-8 md:p-12 border border-slate-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary">Soluzioni ai Pain Points</h3>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-text-primary mb-2">Prestito per Cattivi Pagatori e Segnalati CRIF</h4>
                            <p className="text-text-secondary leading-relaxed">
                                Hai una segnalazione in Centrale Rischi? Con la cessione del quinto la valutazione si basa sulla busta paga, non sulla tua storia creditizia. In molti casi possiamo aiutarti anche quando la banca ti ha già detto no.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-text-primary mb-2">Consolidamento Debiti</h4>
                            <p className="text-text-secondary leading-relaxed">
                                Troppe rate ogni mese? Possiamo riunirle in un'unica rata mensile più bassa e sostenibile, liberandoti dallo stress finanziario del sovraindebitamento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="bg-brand-indigo/5 rounded-[32px] p-8 md:p-12 border border-brand-indigo/10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-brand-indigo text-white flex items-center justify-center">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary">Soluzioni per Progetti di Vita</h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                            "Anticipo per il Mutuo Casa",
                            "Acquisto Auto o Moto",
                            "Matrimonio e Cerimonie",
                            "Ristrutturazione Casa",
                            "Spese Mediche e Salute"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-text-primary font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button icon={ArrowRight} className="w-full sm:w-auto">
                        Esplora tutte le soluzioni
                    </Button>
                </div>
            </div>
        </Section>
    );
}
