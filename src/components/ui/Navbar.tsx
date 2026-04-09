"use client";

import * as React from "react";
import Link from "next/link";
import { BackgroundLines } from "./BackgroundLines";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Servizi", href: "/servizi" },
    { label: "Perché Noi", href: "/#why-us" },
    { label: "Contatti", href: "/contatti" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

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
                    <Link href="/" className="text-xl font-bold tracking-tight text-text-primary">
                        Credito<span className="text-brand-indigo">Click</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text-secondary hover:text-brand-indigo transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="secondary" className="hidden sm:inline-flex px-4 py-2 text-sm">
                            Accedi
                        </Button>
                        <Button className="px-5 py-2 text-sm">
                            Inizia Ora
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
