"use client";

import * as React from "react";
import { ArrowRight, Wallet, Users, RefreshCcw } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const CORE_PRODUCTS = [
    {
        id: "cessione",
        title: "Cessione del Quinto dello Stipendio o della Pensione",
        badge: "Cessione del Quinto",
        desc: "La formula di finanziamento più sicura per dipendenti e pensionati: la rata viene trattenuta direttamente in busta paga o sul cedolino della pensione, fino a un massimo del 20% del tuo netto mensile. Nessun rischio di dimenticare un pagamento, nessun addebito su conto corrente.",
        ideal: "Ideale per: dipendenti pubblici e privati, statali, insegnanti, infermieri, militari, pensionati INPS fino a 85 anni.",
        market: "Tassi cessione del quinto 2026: il mercato ha visto una progressiva stabilizzazione dei tassi dopo i rialzi del biennio precedente. I nostri consulenti aggiornano quotidianamente le offerte dei partner convenzionati per garantirti sempre la migliore condizione disponibile.",
        cta: "Scopri la Cessione del Quinto | Calcola la rata",
        icon: Wallet,
    },
    {
        id: "delega",
        title: "Delega di Pagamento (il \"Doppio Quinto\")",
        badge: "Delega di Pagamento",
        desc: "Se hai già una cessione del quinto in corso e hai bisogno di liquidità aggiuntiva, la delega di pagamento ti permette di accedere a un secondo finanziamento, portando la trattenuta in busta paga fino al 40% del tuo stipendio netto. Riservata ai dipendenti pubblici e ai privati alle dipendenze di aziende strutturate.",
        cta: "Scopri la Delega di Pagamento",
        icon: Users,
    },
    {
        id: "rinnovo",
        title: "Rinnovo della Cessione del Quinto",
        badge: "Rinnovo Cessione del Quinto",
        desc: "Hai già una cessione in corso presso un'altra banca o finanziaria? Se sono trascorsi almeno 2/5 del periodo contrattuale, potresti avere diritto a rinnovare — spesso ottenendo nuova liquidità e condizioni migliori. Gestiamo la portabilità in modo completamente telematico, senza che tu debba fare nulla con il vecchio istituto.",
        cta: "Scopri come funziona il Rinnovo",
        icon: RefreshCcw,
    }
];

export function Products() {
    return (
        <Section id="prodotti" className="bg-white">
            <div className="max-w-3xl mb-16">
                <Badge variant="subtle" className="mb-4">I nostri prodotti core</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
                    I nostri prodotti di finanziamento
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                    Specializziamo da anni in soluzioni di credito garantite dalla busta paga o dalla pensione. Questo ci permette di lavorare anche per chi ha avuto difficoltà in passato con il sistema bancario tradizionale.
                </p>
            </div>

            <div className="space-y-12">
                {CORE_PRODUCTS.map((product, i) => (
                    <div key={product.id} className="grid grid-cols-1 lg:grid-cols-4 gap-0 border-t border-slate-100 pt-12 first:border-t-0 first:pt-0 group">
                        <div className="lg:col-span-1 mb-8 lg:mb-0">
                            <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-4 transition-transform group-hover:scale-110">
                                <product.icon className="w-6 h-6" />
                            </div>
                            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{product.badge}</Badge>
                        </div>
                        <div className="lg:col-span-3">
                            <h3 className="text-2xl font-bold text-text-primary mb-4 leading-tight group-hover:text-brand-indigo transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                                {product.desc}
                            </p>

                            {product.ideal && (
                                <p className="text-text-primary font-medium mb-4">
                                    {product.ideal}
                                </p>
                            )}

                            {product.market && (
                                <p className="text-slate-500 text-sm mb-8 leading-relaxed italic bg-slate-50 p-4 rounded-xl border-l-4 border-brand-indigo/30">
                                    {product.market}
                                </p>
                            )}

                            <Button variant="link" icon={ArrowRight} className="p-0 text-sm font-bold">
                                {product.cta}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
