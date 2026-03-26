"use client";

import * as React from "react";
import Link from "next/link";
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
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
        </nav>
    );
}
