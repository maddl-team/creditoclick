import * as React from "react";
import Link from "next/link";

const FOOTER_LINKS = [
    {
        title: "Prodotto",
        links: [
            { label: "Servizi", href: "/servizi" },
            { label: "Prezzi", href: "#" },
            { label: "Documentazione", href: "#" },
        ],
    },
    {
        title: "Azienda",
        links: [
            { label: "Chi siamo", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Carriere", href: "#" },
        ],
    },
    {
        title: "Supporto",
        links: [
            { label: "Help Center", href: "#" },
            { label: "Contatti", href: "/contatti" },
            { label: "Status", href: "#" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-slate-50/50 py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight text-text-primary mb-6 block">
                            Credito<span className="text-brand-indigo">Click</span>
                        </Link>
                        <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                            Semplifichiamo l&apos;accesso al credito con tecnologie intelligenti e trasparenti.
                        </p>
                    </div>
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-semibold text-text-primary mb-6">{section.title}</h4>
                            <ul className="space-y-4">
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
                    <p>© 2026 CreditoClick S.p.A. Tutti i diritti riservati.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-brand-indigo transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-indigo transition-colors">Cookie Policy</Link>
                        <Link href="#" className="hover:text-brand-indigo transition-colors">Termini di Servizio</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
