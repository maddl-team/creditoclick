"use client";

import * as React from "react";
import { ArrowRight, Wallet, Users, RefreshCcw, ImageIcon } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
        placeholderColor: "from-blue-500 to-indigo-600",
    },
    {
        id: "delega",
        title: "Delega di Pagamento (il \"Doppio Quinto\")",
        badge: "Delega di Pagamento",
        desc: "Se hai già una cessione del quinto in corso e hai bisogno di liquidità aggiuntiva, la delega di pagamento ti permette di accedere a un secondo finanziamento, portando la trattenuta in busta paga fino al 40% del tuo stipendio netto. Riservata ai dipendenti pubblici e ai privati alle dipendenze di aziende strutturate.",
        cta: "Scopri la Delega di Pagamento",
        icon: Users,
        placeholderColor: "from-cyan-400 to-blue-500",
    },
    {
        id: "rinnovo",
        title: "Rinnovo della Cessione del Quinto",
        badge: "Rinnovo Cessione del Quinto",
        desc: "Hai già una cessione in corso presso un'altra banca o finanziaria? Se sono trascorsi almeno 2/5 del periodo contrattuale, potresti avere diritto a rinnovare — spesso ottenendo nuova liquidità e condizioni migliori. Gestiamo la portabilità in modo completamente telematico, senza che tu debba fare nulla con il vecchio istituto.",
        cta: "Scopri come funziona il Rinnovo",
        icon: RefreshCcw,
        placeholderColor: "from-indigo-400 to-cyan-500",
    }
];

export function Products() {
    const [activeProduct, setActiveProduct] = React.useState<string>(CORE_PRODUCTS[0].id);

    return (
        <Section id="prodotti" className="bg-white !overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 relative">

                {/* Left Side: Header + Products (Takes 3 columns) */}
                <div className="lg:col-span-3 flex flex-col">
                    {/* Header */}
                    <div className="p-6 md:p-8 lg:mb-12">
                        <Badge variant="subtle" className="mb-4">I nostri prodotti core</Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                            I nostri prodotti di finanziamento
                        </h2>
                        <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl">
                            Siamo specializzati da anni in soluzioni di credito garantite dalla busta paga o dalla pensione. Questo ci permette di lavorare anche per chi ha avuto difficoltà in passato con il sistema bancario tradizionale.
                        </p>
                    </div>

                    {/* Products List */}
                    <div className="flex flex-col">
                        {CORE_PRODUCTS.map((product) => (
                            <div
                                key={product.id}
                                className={cn(
                                    "p-6 md:p-8 group relative lg:mb-8 transition-colors duration-500 rounded-3xl lg:mr-8 cursor-default",
                                    activeProduct === product.id ? "bg-slate-50/50 shadow-sm" : "hover:bg-slate-50/20"
                                )}
                                onMouseEnter={() => setActiveProduct(product.id)}
                            >
                                {/* Plus Style Icon */}
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                                    activeProduct === product.id ? "bg-brand-indigo text-white scale-110 shadow-lg shadow-brand-indigo/30" : "bg-brand-indigo/10 text-brand-indigo"
                                )}>
                                    <product.icon className="w-6 h-6" />
                                </div>

                                {/* Title with Accent Bar */}
                                <div className="relative pl-1 mb-6">
                                    <div className={cn(
                                        "absolute -left-[24px] md:-left-[32px] top-1 bottom-1 bg-brand-indigo transition-all duration-300 rounded-r-full",
                                        activeProduct === product.id ? "opacity-100 w-[4px]" : "opacity-30 w-[2px] group-hover:opacity-60 group-hover:w-[3px]"
                                    )} />
                                    <h3 className={cn(
                                        "text-2xl md:text-3xl font-bold leading-tight transition-colors max-w-2xl",
                                        activeProduct === product.id ? "text-brand-indigo" : "text-text-primary"
                                    )}>
                                        {product.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="pl-1 space-y-6">
                                    <p className="text-text-secondary text-lg leading-relaxed max-w-4xl">
                                        {product.desc}
                                    </p>

                                    {product.ideal && (
                                        <p className="text-sm lg:text-base font-medium text-text-primary">
                                            {product.ideal}
                                        </p>
                                    )}

                                    {product.market && (
                                        <p className="text-sm text-slate-500 italic bg-white p-6 rounded-xl border-l-2 border-brand-indigo/30 shadow-sm max-w-3xl">
                                            {product.market}
                                        </p>
                                    )}

                                    <div className="pt-2">
                                        <Button variant="link" icon={ArrowRight} className="p-0 text-base font-bold">
                                            {product.cta}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Image Reveal (Takes 1 column) */}
                <div className="hidden lg:block lg:col-span-1 relative">
                    <div className="sticky top-32 w-full p-6 pt-12 xl:p-8 xl:pt-16">
                        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                            <AnimatePresence mode="wait">
                                {CORE_PRODUCTS.map((product) => (
                                    activeProduct === product.id && (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className={cn(
                                                "absolute inset-0 bg-gradient-to-br flex flex-col items-center justify-center p-8 text-center text-white",
                                                product.placeholderColor
                                            )}
                                        >
                                            {/* Placeholder Image Content - can be replaced with next/image later */}
                                            <ImageIcon className="w-16 h-16 mb-6 opacity-80" />
                                            <h4 className="font-bold text-xl mb-2 leading-tight">Immagine Dedicata</h4>
                                            <p className="text-sm opacity-80 font-medium">Placeholder per:<br />{product.badge}</p>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                            {/* Accent Line on Image */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-indigo/50 mix-blend-overlay z-10" />
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
