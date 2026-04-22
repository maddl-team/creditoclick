"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { BackgroundLines } from "./BackgroundLines";
import { cn } from "@/lib/utils";

type NavItem = {
    label: string;
    href: string;
    children?: { label: string; href: string; description?: string }[];
};

const NAV_ITEMS: NavItem[] = [
    { label: "Homepage", href: "/" },
    {
        label: "Prodotti",
        href: "/prodotti/cessione-del-quinto",
        children: [
            { label: "Cessione del Quinto", href: "/prodotti/cessione-del-quinto", description: "Focus prodotto core e tassi 2026" },
            { label: "Delega di Pagamento", href: "/prodotti/delega-di-pagamento", description: "Focus doppio quinto per maggiore liquidità" },
            { label: "Rinnovo Cessione Quinto", href: "/prodotti/rinnovo-cessione-quinto", description: "Focus retention e portabilità" },
        ],
    },
    {
        label: "Professioni e Convenzioni",
        href: "/professioni/dipendenti-privati-grandi-aziende",
        children: [
            { label: "Dipendenti Privati Grandi Aziende", href: "/professioni/dipendenti-privati-grandi-aziende", description: "Target: SPA, SRL, colossi corporate" },
            { label: "Dipendenti Piccole Imprese PMI", href: "/professioni/dipendenti-piccole-imprese-pmi", description: "Target: aziende sotto i 15 dipendenti" },
            { label: "Sanità Infermieri Medici", href: "/professioni/sanita-infermieri-medici", description: "Target: comparto salute, ASL" },
            { label: "Insegnanti Scuola NoiPA", href: "/professioni/insegnanti-scuola-noipa", description: "Target: comparto MIUR, ATA" },
            { label: "Forze Armate e Ordine", href: "/professioni/forze-armate-ordine", description: "Macro-hub Esercito, Marina, GdF, Carabinieri, Polizia, VVF" },
            { label: "Pensionati INPS", href: "/professioni/pensionati-inps", description: "Target: terza età fino a 85 anni" },
        ],
    },
    {
        label: "Soluzioni",
        href: "/soluzioni/cattivi-pagatori-segnalati-crif",
        children: [
            { label: "Cattivi Pagatori Segnalati CRIF", href: "/soluzioni/cattivi-pagatori-segnalati-crif", description: "Area Pain Points" },
            { label: "Consolidamento Debiti", href: "/soluzioni/consolidamento-debiti", description: "Area Pain Points" },
            { label: "Prestito Anticipo Mutuo Casa", href: "/soluzioni/prestito-anticipo-mutuo-casa", description: "Area Progetti di Vita" },
            { label: "Prestito Acquisto Auto Moto", href: "/soluzioni/prestito-acquisto-auto-moto", description: "Area Progetti di Vita" },
            { label: "Prestito Matrimonio Cerimonie", href: "/soluzioni/prestito-matrimonio-cerimonie", description: "Area Progetti di Vita" },
            { label: "Prestito Ristrutturazione Casa", href: "/soluzioni/prestito-ristrutturazione-casa", description: "Area Progetti di Vita" },
            { label: "Prestito Spese Mediche Salute", href: "/soluzioni/prestito-spese-mediche-salute", description: "Area Progetti di Vita" },
        ],
    },
    {
        label: "Strumenti",
        href: "/strumenti/calcolo-rata-cessione-quinto",
        children: [{ label: "Calcolo Rata Cessione Quinto", href: "/strumenti/calcolo-rata-cessione-quinto", description: "Landing page lead generation" }],
    },
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Contatti", href: "/contatti" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-200/90",
                isScrolled ? "bg-white py-3 shadow-sm" : "bg-white py-5"
            )}
        >
            {/* Header Background Lines: Only first and last */}
            <BackgroundLines showIndices={[0, 4]} />

            <div className="w-full mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex items-center justify-between px-6 md:px-8">
                    <Link href="/" className="inline-flex items-center" aria-label="CreditoClick homepage">
                        <Image
                            src="/images/creditoclick_logo.png"
                            alt="CreditoClick"
                            width={240}
                            height={72}
                            priority
                            className="h-auto w-[150px]"
                        />
                    </Link>

                    <div className="hidden xl:flex items-center gap-2">
                        {NAV_ITEMS.map((item) =>
                            item.children ? (
                                <div key={item.label} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-text-secondary hover:text-brand-indigo transition-colors"
                                    >
                                        {item.label}
                                        <ChevronDown className="h-4 w-4" />
                                    </Link>
                                    <div className="pointer-events-none absolute left-0 top-full w-[360px] pt-2 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                                        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block rounded-xl p-3 hover:bg-slate-50 transition-colors"
                                                >
                                                    <p className="text-sm font-semibold text-text-primary">{child.label}</p>
                                                    {child.description ? <p className="text-xs text-text-secondary mt-1">{child.description}</p> : null}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-[13px] font-medium text-text-secondary hover:text-brand-indigo transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="xl:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-text-primary"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            aria-label="Apri menu di navigazione"
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen ? (
                    <div className="xl:hidden mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                        <div className="max-h-[70vh] overflow-y-auto space-y-1">
                            {NAV_ITEMS.map((item) =>
                                item.children ? (
                                    <details key={item.label} className="rounded-xl border border-slate-200/70 px-3 py-2">
                                        <summary className="cursor-pointer list-none text-sm font-semibold text-text-primary flex items-center justify-between">
                                            {item.label}
                                            <ChevronDown className="h-4 w-4 text-text-secondary" />
                                        </summary>
                                        <div className="mt-2 space-y-1">
                                            <Link href={item.href} className="block rounded-lg px-2 py-2 text-sm text-brand-indigo">
                                                Vai alla sezione
                                            </Link>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block rounded-lg px-2 py-2 text-sm text-text-secondary hover:bg-slate-50"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block rounded-lg px-3 py-2 text-[13px] font-medium text-text-secondary hover:bg-slate-50"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    );
}
