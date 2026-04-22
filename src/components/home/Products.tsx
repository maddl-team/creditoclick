"use client";

import * as React from "react";
import { ArrowRight, Wallet, Users, RefreshCcw, ImageIcon } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionIntro } from "../ui/SectionIntro";
import { AccentBlock } from "../ui/AccentBlock";
import { HOME_CORE_PRODUCTS } from "@/content/home";

const PRODUCT_ICON_MAP = {
    wallet: Wallet,
    users: Users,
    refresh: RefreshCcw,
} as const;

const PRODUCT_LINK_MAP: Record<string, string> = {
    cessione: "/prodotti/cessione-del-quinto",
    delega: "/prodotti/delega-di-pagamento",
    rinnovo: "/prodotti/rinnovo-cessione-quinto",
};

export function Products() {
    const [activeProduct, setActiveProduct] = React.useState<string>(HOME_CORE_PRODUCTS[0].id);

    return (
        <Section id="prodotti" className="bg-white !overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 relative">

                {/* Left Side: Header + Products (Takes 3 columns) */}
                <div className="lg:col-span-3 flex flex-col">
                    {/* Header */}
                    <SectionIntro
                        className="lg:mb-12"
                        badge="I nostri prodotti core"
                        title="I nostri prodotti di finanziamento"
                        description="Siamo specializzati da anni in soluzioni di credito garantite dalla busta paga o dalla pensione. Questo ci permette di lavorare anche per chi ha avuto difficoltà in passato con il sistema bancario tradizionale."
                        descriptionClassName="max-w-3xl"
                    />

                    {/* Products List */}
                    <div className="flex flex-col">
                        {HOME_CORE_PRODUCTS.map((product) => (
                            <motion.div
                                key={product.id}
                                className="p-6 md:p-8 group relative lg:mb-8 transition-all duration-500 rounded-3xl lg:mr-8 cursor-default"
                                onMouseEnter={() => setActiveProduct(product.id)}
                                onViewportEnter={() => setActiveProduct(product.id)}
                                viewport={{ margin: "-45% 0px -45% 0px" }}
                            >
                                {/* Plus Style Icon */}
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                                    activeProduct === product.id ? "bg-brand-indigo text-white scale-110 shadow-lg shadow-brand-indigo/30" : "bg-brand-indigo/10 text-brand-indigo"
                                )}>
                                    {React.createElement(PRODUCT_ICON_MAP[product.icon], { className: "w-5 h-5" })}
                                </div>

                                {/* Title with Accent Bar */}
                                <AccentBlock
                                    className="mb-4"
                                    active={activeProduct === product.id}
                                    inactiveLineClassName="opacity-30 w-[2px]"
                                    hoverLineClassName="group-hover:opacity-60 group-hover:w-[3px]"
                                    activeLineClassName="opacity-100 w-[4px]"
                                >
                                    <h3 className={cn(
                                        "text-xl font-bold leading-tight transition-colors",
                                        activeProduct === product.id ? "text-brand-indigo" : "text-text-primary"
                                    )}>
                                        {product.title}
                                    </h3>
                                </AccentBlock>

                                {/* Content */}
                                <div className="pl-1 space-y-4">
                                    <p className="text-text-secondary text-base leading-relaxed max-w-4xl">
                                        {product.desc}
                                    </p>

                                    {"ideal" in product && product.ideal ? (
                                        <p className="text-sm font-medium text-text-primary">
                                            {product.ideal}
                                        </p>
                                    ) : null}

                                    {"market" in product && product.market ? (
                                        <p className="text-sm text-slate-500 italic bg-white p-4 rounded-xl border-l-2 border-brand-indigo/30 shadow-sm max-w-3xl">
                                            {product.market}
                                        </p>
                                    ) : null}

                                    <div className="pt-2">
                                        <Button
                                            variant="link"
                                            icon={ArrowRight}
                                            className="p-0 text-sm font-bold"
                                            href={PRODUCT_LINK_MAP[product.id] ?? "/prodotti/cessione-del-quinto"}
                                        >
                                            {product.cta}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Image Reveal (Takes 1 column) */}
                <div className="hidden lg:block lg:col-span-1 relative">
                    <div className="sticky top-32 w-full pt-12 xl:pt-16">
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                            <AnimatePresence mode="wait">
                                {HOME_CORE_PRODUCTS.map((product) => (
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
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
