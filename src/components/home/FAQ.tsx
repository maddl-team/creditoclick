"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        q: "Come funziona la cessione del quinto?",
        a: "La cessione del quinto è un finanziamento riservato a dipendenti e pensionati. La rata mensile viene trattenuta direttamente dalla busta paga o dal cedolino pensionistico da parte del datore di lavoro o dell'INPS, e versata all'istituto finanziatore. L'importo massimo della rata non può superare il 20% del reddito netto mensile. La durata va da 24 a 120 mesi."
    },
    {
        q: "Posso richiedere un prestito se sono segnalato in CRIF?",
        a: "Sì, in molti casi è possibile. Con la cessione del quinto, la valutazione del rischio si basa principalmente sulla stabilità del reddito (busta paga o pensione) e non esclusivamente sulla storia creditizia. Contattaci per una valutazione gratuita e riservata del tuo profilo."
    },
    {
        q: "Qual è la differenza tra cessione del quinto e delega di pagamento?",
        a: "La cessione del quinto permette di cedere fino al 20% dello stipendio netto. La delega di pagamento (o \"doppio quinto\") è un secondo finanziamento aggiuntivo che porta la trattenuta complessiva fino al 40%. È riservata a dipendenti pubblici e privati di aziende strutturate che acconsentono alla delega."
    },
    {
        q: "Quanto tempo ci vuole per avere i soldi sul conto?",
        a: "I tempi variano in base all'istituto finanziatore e alla completezza della documentazione. Nella maggior parte dei casi, dalla presentazione della pratica completa all'accredito passano da 5 a 15 giorni lavorativi. Casi urgenti possono essere gestiti in via prioritaria: contattaci direttamente."
    },
    {
        q: "È possibile rinnovare una cessione del quinto già in corso?",
        a: "Sì. Quando sono stati rimborsati almeno 2/5 del piano di rimborso originario, è possibile procedere con un rinnovo — estinguendo il contratto precedente e accedendo a nuova liquidità, spesso a condizioni migliorative. Gestiamo la portabilità in modo completamente digitale."
    },
    {
        q: "Quali documenti servono per richiedere un prestito online?",
        a: "Generalmente: documento d'identità in corso di validità, codice fiscale, ultima busta paga o cedolino pensionistico, e il CUD/730 più recente. In alcuni casi possono essere richiesti ulteriori documenti a seconda del prodotto e dell'istituto. Il nostro consulente ti guiderà passo per passo."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <Section id="faq" className="bg-[#f6f9fc]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Left Column: Messaging */}
                <div className="lg:col-span-2 p-6 md:p-8">
                    <Badge variant="subtle" className="mb-4">FAQ Homepage</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                        Domande frequenti sui prestiti online
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        Tutto quello che devi sapere sulla cessione del quinto e sulle nostre soluzioni di finanziamento. Non trovi quello che cerchi? Il nostro team è a disposizione per una consulenza gratuita e personalizzata.
                    </p>
                </div>

                {/* Right Column: Clean Accordions */}
                <div className="lg:col-span-2 space-y-4 pt-4 lg:pt-8">
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative transition-all duration-300 border-b border-slate-200/60 last:border-0",
                                openIndex === i && "pb-4"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:text-brand-indigo transition-all"
                            >
                                <div className="relative pl-1">
                                    {/* Accent Bar - only visible when open or hovered */}
                                    <div className={cn(
                                        "absolute -left-[24px] md:-left-[24px] top-1 bottom-1 w-[2px] bg-brand-indigo transition-all rounded-r-full",
                                        openIndex === i ? "opacity-100 w-[3px]" : "opacity-0 group-hover:opacity-50"
                                    )} />
                                    <span className={cn(
                                        "text-lg font-bold leading-tight transition-colors",
                                        openIndex === i ? "text-brand-indigo" : "text-text-primary"
                                    )}>
                                        {faq.q}
                                    </span>
                                </div>
                                <ChevronDown className={cn(
                                    "w-5 h-5 flex-shrink-0 transition-transform duration-300 text-slate-400 group-hover:text-brand-indigo",
                                    openIndex === i && "rotate-180 text-brand-indigo"
                                )} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-text-secondary leading-relaxed text-sm pl-10 md:pl-10">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
