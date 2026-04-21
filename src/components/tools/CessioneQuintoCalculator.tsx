"use client";

import * as React from "react";

type CategoryKey = "pubblico" | "pensionato" | "privato_grande" | "privato_pmi";

const CATEGORY_CONFIG: Record<CategoryKey, { label: string; taeg: number; tan: number; costFactor: number }> = {
  pubblico: { label: "Dipendente pubblico", taeg: 6.8, tan: 5.9, costFactor: 0.06 },
  pensionato: { label: "Pensionato", taeg: 7.4, tan: 6.3, costFactor: 0.08 },
  privato_grande: { label: "Dipendente privato grandi aziende", taeg: 7.2, tan: 6.2, costFactor: 0.07 },
  privato_pmi: { label: "Dipendente privato PMI", taeg: 8.4, tan: 7.1, costFactor: 0.09 },
};

const DURATIONS = [24, 36, 48, 60, 72, 84, 96, 108, 120] as const;

const EUR = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function pvOfAnnuity(payment: number, annualTanPct: number, months: number) {
  const r = annualTanPct / 100 / 12;
  if (r <= 0) return payment * months;
  return payment * ((1 - Math.pow(1 + r, -months)) / r);
}

export function CessioneQuintoCalculator() {
  const [netIncome, setNetIncome] = React.useState(1700);
  const [category, setCategory] = React.useState<CategoryKey>("pubblico");
  const [duration, setDuration] = React.useState<number>(84);

  const cfg = CATEGORY_CONFIG[category];
  const monthlyRate = netIncome * 0.2;
  const grossAmount = pvOfAnnuity(monthlyRate, cfg.tan, duration);
  const netAmount = grossAmount * (1 - cfg.costFactor);
  const totalDue = monthlyRate * duration;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-text-primary">Componente interattivo — Calcolatore</h3>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-text-primary">Reddito netto mensile</span>
            <input
              type="number"
              min={600}
              step={50}
              value={netIncome}
              onChange={(e) => setNetIncome(Math.max(600, Number(e.target.value) || 0))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/30"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-text-primary">Categoria professionale</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryKey)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/30"
            >
              {Object.entries(CATEGORY_CONFIG).map(([key, v]) => (
                <option key={key} value={key}>
                  {v.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-text-primary">Durata desiderata</span>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-text-primary outline-none focus:ring-2 focus:ring-brand-indigo/30"
            >
              {DURATIONS.map((m) => (
                <option key={m} value={m}>
                  {m} mesi
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="lg:col-span-2 grid gap-4 content-start">
          <ResultCard label="Rata mensile indicativa" value={EUR.format(monthlyRate)} />
          <ResultCard label="Importo lordo indicativo erogabile" value={EUR.format(grossAmount)} />
          <ResultCard label="Importo netto stimato erogabile" value={EUR.format(netAmount)} />
          <ResultCard label="TAEG indicativo di riferimento per categoria" value={`${cfg.taeg.toFixed(1)}%`} />
          <ResultCard label="Importo totale dovuto indicativo" value={EUR.format(totalDue)} />
          <p className="text-xs leading-relaxed text-text-secondary border border-slate-200 rounded-xl p-3 bg-slate-50">
            Valori indicativi — il tasso reale dipende dal profilo specifico e viene determinato nel preventivo
            personalizzato.
          </p>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-xs uppercase tracking-wide text-text-secondary">{label}</p>
      <p className="mt-1 text-xl font-bold text-text-primary">{value}</p>
    </div>
  );
}
