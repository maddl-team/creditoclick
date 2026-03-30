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

            <div className="bg-white rounded-[32px] border border-slate-100 p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)]">
                {/* Header Decoration */}
                <div className="flex justify-center gap-1.5 mb-8">
                    <div className="w-10 h-1 bg-brand-indigo rounded-full" />
                    <div className="w-10 h-1 bg-slate-100 rounded-full" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary text-center mb-10 tracking-tight">
                    Calcola la tua rata
                </h3>

                <div className="space-y-10">
                    {/* Amount Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <p className="text-sm text-text-secondary">
                                Di quale <span className="font-bold text-text-primary">importo</span> hai bisogno?
                            </p>
                            <span className="text-2xl font-bold text-brand-indigo tracking-tight">
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
                            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-cyan transition-all"
                        />
                        <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                            <span>2.000 €</span>
                            <span>75.000 €</span>
                        </div>
                    </div>

                    {/* Months Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <p className="text-sm text-text-secondary">
                                In quante <span className="font-bold text-text-primary">rate</span> vuoi pagare?
                            </p>
                            <span className="text-2xl font-bold text-brand-indigo tracking-tight">
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
                            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-cyan transition-all"
                        />
                        <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                            <span>24 rate</span>
                            <span>120 rate</span>
                        </div>
                    </div>

                    <Button
                        className="w-full py-7 rounded-2xl shadow-lg shadow-brand-indigo/20 hover:shadow-xl hover:shadow-brand-indigo/30 transition-all text-base font-bold bg-brand-indigo"
                        icon={ArrowRight}
                    >
                        CONTINUA
                    </Button>
                </div>

                <p className="mt-6 text-center text-[10px] text-slate-400 font-medium leading-relaxed">
                    Esempi di calcolo basati su tassi competitivi. <br />
                    Soggetto ad approvazione creditizia.
                </p>
            </div>
        </div>
    );
}
