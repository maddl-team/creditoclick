"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./Button";

const FOOTER_LINKS = [
    {
        title: "Prodotti",
        links: [
            { label: "Hub Prodotti", href: "/prodotti" },
            { label: "Cessione del Quinto", href: "/prodotti/cessione-del-quinto" },
            { label: "Delega di Pagamento", href: "/prodotti/delega-di-pagamento" },
            { label: "Rinnovo Cessione Quinto", href: "/prodotti/rinnovo-cessione-quinto" },
        ],
    },
    {
        title: "Professioni",
        links: [
            { label: "Hub Professioni", href: "/professioni" },
            { label: "Grandi Aziende", href: "/professioni/dipendenti-privati-grandi-aziende" },
            { label: "PMI", href: "/professioni/dipendenti-piccole-imprese-pmi" },
            { label: "Sanità", href: "/professioni/sanita-infermieri-medici" },
            { label: "Scuola NoiPA", href: "/professioni/insegnanti-scuola-noipa" },
            { label: "Forze Armate e Ordine", href: "/professioni/forze-armate-ordine" },
            { label: "Pensionati INPS", href: "/professioni/pensionati-inps" },
        ],
    },
    {
        title: "Soluzioni",
        links: [
            { label: "Hub Soluzioni", href: "/soluzioni" },
            { label: "Cattivi Pagatori CRIF", href: "/soluzioni/cattivi-pagatori-segnalati-crif" },
            { label: "Consolidamento Debiti", href: "/soluzioni/consolidamento-debiti" },
            { label: "Anticipo Mutuo Casa", href: "/soluzioni/prestito-anticipo-mutuo-casa" },
            { label: "Prestito Auto e Moto", href: "/soluzioni/prestito-acquisto-auto-moto" },
            { label: "Matrimonio e Cerimonie", href: "/soluzioni/prestito-matrimonio-cerimonie" },
            { label: "Ristrutturazione Casa", href: "/soluzioni/prestito-ristrutturazione-casa" },
            { label: "Spese Mediche e Salute", href: "/soluzioni/prestito-spese-mediche-salute" },
        ],
    },
    {
        title: "Azienda & Compliance",
        links: [
            { label: "Chi siamo", href: "/chi-siamo" },
            { label: "Contatti", href: "/contatti" },
            { label: "Privacy Policy", href: "/contatti" },
            { label: "Cookie Policy", href: "/contatti" },
            { label: "Termini e Condizioni", href: "/contatti" },
        ],
    },
];

export function Footer() {
    const whatsappUrl =
        "https://wa.me/?text=Ciao%2C%20vorrei%20ricevere%20una%20consulenza%20gratuita%20sulle%20soluzioni%20CreditoClick.";

    return (
        <footer className="border-t border-slate-100 bg-slate-50/50 py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-14 md:mb-16 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <Link href="/" className="inline-flex items-center mb-4" aria-label="CreditoClick homepage">
                            <Image
                                src="/images/creditoclick_logo.png"
                                alt="CreditoClick"
                                width={220}
                                height={66}
                                className="h-auto w-[190px] md:w-[220px]"
                            />
                        </Link>
                        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                            Soluzioni di credito garantite dalla busta paga o dalla pensione, con consulenza reale e processo
                            100% digitale su tutto il territorio nazionale.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <Button className="bg-whatsapp hover:bg-whatsapp-hover border-none text-white" icon={MessageCircle} href={whatsappUrl}>
                            Scrivici su WhatsApp
                        </Button>
                        <Button variant="secondary" icon={ArrowRight} href="/strumenti/calcolo-rata-cessione-quinto">
                            Calcola la tua rata
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-semibold text-text-primary mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-text-secondary hover:text-brand-indigo transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200/50 text-xs text-text-secondary gap-4">
                    <p>© 2026 CreditoClick S.p.A. Tutti i diritti riservati. | Iscrizione OAM: (inserire numero)</p>
                    <div className="flex items-center gap-6">
                        <Link href="/chi-siamo" className="hover:text-brand-indigo transition-colors">Chi siamo</Link>
                        <Link href="/contatti" className="hover:text-brand-indigo transition-colors">Contatti</Link>
                        <Link href="/soluzioni" className="hover:text-brand-indigo transition-colors">Soluzioni</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
