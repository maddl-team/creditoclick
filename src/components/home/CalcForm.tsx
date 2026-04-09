"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function CalcForm() {
    const [amount, setAmount] = React.useState(15000);
    const [months, setMonths] = React.useState(48);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val).replace('€', '') + ' €';
    };

    return (
        <div className="relative group perspective-1000">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-indigo/10 to-brand-cyan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <div className="bg-brand-indigo rounded-[32px] border border-white/10 p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(30,27,75,0.4)] relative overflow-hidden transition-all duration-500 hover:shadow-[0_48px_96px_-24px_rgba(30,27,75,0.5)]">
                {/* Header Decoration */}
                <div className="flex justify-center gap-1.5 mb-8">
                    <div className="w-10 h-1 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
                    <div className="w-10 h-1 bg-brand-cyan/40 rounded-full" />
                </div>

                <h3 className="text-3xl font-bold text-white text-center mb-10 tracking-tight">
                    Calcola la tua rata
                </h3>

                <div className="space-y-12">
                    {/* Amount Slider */}
                    <div className="space-y-5">
                        <div className="flex justify-between items-end">
                            <p className="text-base text-white">
                                Di quale <span className="font-bold">importo</span> hai bisogno?
                            </p>
                            <span className="text-3xl font-bold text-white tracking-tight">
                                {formatCurrency(amount)}
                            </span>
                        </div>
                        <input
                            type="range"
                            min="2000"
                            max="75000"
                            step="500"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full h-1.5 bg-brand-cyan rounded-lg appearance-none cursor-pointer transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none"
                        />
                        <div className="flex justify-between text-xs uppercase tracking-widest text-white/70 font-bold">
                            <span>2.000 €</span>
                            <span>75.000 €</span>
                        </div>
                    </div>

                    {/* Months Slider */}
                    <div className="space-y-5">
                        <div className="flex justify-between items-end">
                            <p className="text-base text-white">
                                In quante <span className="font-bold">rate</span> vuoi pagare?
                            </p>
                            <span className="text-3xl font-bold text-white tracking-tight">
                                {months} rate
                            </span>
                        </div>
                        <input
                            type="range"
                            min="24"
                            max="120"
                            step="12"
                            value={months}
                            onChange={(e) => setMonths(Number(e.target.value))}
                            className="w-full h-1.5 bg-brand-cyan rounded-lg appearance-none cursor-pointer transition-all [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none"
                        />
                        <div className="flex justify-between text-xs uppercase tracking-widest text-white/70 font-bold">
                            <span>24 rate</span>
                            <span>120 rate</span>
                        </div>
                    </div>

                    <Button
                        className="w-full py-7 rounded-2xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all text-base font-bold bg-white text-brand-indigo hover:bg-slate-50"
                        icon={ArrowRight}
                    >
                        CONTINUA
                    </Button>
                </div>

                <p className="mt-8 text-center text-xs text-white/50 font-medium leading-relaxed">
                    Esempi di calcolo basati su tassi competitivi. <br />
                    Soggetto ad approvazione creditizia.
                </p>
            </div>
        </div>
    );
}
