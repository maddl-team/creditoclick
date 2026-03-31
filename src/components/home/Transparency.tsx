"use client";

import * as React from "react";
import { ShieldCheck, FileCheck, Scale, Lock, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function Transparency() {
    return (
        <Section id="trasparenza" className="bg-slate-900 text-white overflow-hidden relative">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24">
                <div className="lg:col-span-2 p-6 md:p-8">
                    <Badge className="mb-6 bg-brand-indigo/20 text-brand-indigo border-brand-indigo/30">Trasparenza Istituzionale</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                        Chi è CreditoClick: trasparenza e conformità normativa
                    </h2>
                    <div className="space-y-6 text-indigo-100/80 text-lg leading-relaxed">
                        <p>
                            CreditoClick è un'agenzia finanziaria convenzionata, iscritta all'OAM (Organismo Agenti e Mediatori) ai sensi del D.Lgs. 141/2010. Operiamo in qualità di mediatori creditizi, collaborando con primari istituti finanziatori autorizzati da Banca d'Italia.
                        </p>
                        <p>
                            La nostra attività è regolata dal Testo Unico Bancario (TUB), dal Codice del Consumo e dalle disposizioni di Banca d'Italia in materia di trasparenza delle operazioni bancarie e dei servizi di pagamento.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-8 text-brand-cyan">Cosa significa per te:</h3>
                    <ul className="space-y-8">
                        {[
                            { icon: FileCheck, text: "Ricevi sempre un documento di trasparenza con TAEG e costo totale del credito prima della firma" },
                            { icon: ShieldCheck, text: "Non paghi nulla in anticipo per la consulenza o la valutazione del tuo profilo" },
                            { icon: Scale, text: "Hai diritto al recesso entro 14 giorni dalla stipula del contratto (D.Lgs. 141/2010)" },
                            { icon: Lock, text: "I tuoi dati sono trattati in conformità al GDPR (Reg. UE 2016/679)" }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <p className="text-indigo-50 leading-relaxed pt-1">
                                    {item.text}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 pt-8 border-t border-white/10 text-xs text-indigo-200/50 space-y-2">
                        <p>Iscrizione OAM: (inserire numero iscrizione ufficiale)</p>
                        <p>Sede legale: (inserire indirizzo)</p>
                        <p>P.IVA: (inserire)</p>
                        <div className="pt-6 flex gap-6">
                            <Button variant="link" className="text-white p-0 h-auto font-bold text-xs" icon={ArrowRight}>
                                Leggi di più su Chi Siamo
                            </Button>
                            <Button variant="link" className="text-white p-0 h-auto font-bold text-xs" icon={ArrowRight}>
                                Vai ai Contatti
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
