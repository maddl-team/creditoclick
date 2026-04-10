"use client";

interface ComparisonTableProps {
    columns: readonly [string, string, string];
    rows: readonly (readonly [string, string, string])[];
    className?: string;
}

/** Tre colonne allineate alla griglia (table-fixed 33,33%), bordi verticali come le linee di background (`slate-200/90`). */
export function ComparisonTable({ columns, rows, className }: ComparisonTableProps) {
    const [c0, c1, c2] = columns;
    return (
        <div className={className ?? "min-w-0 w-full overflow-x-auto lg:max-w-none"}>
            <table className="w-full min-w-[600px] lg:min-w-0 table-fixed border-collapse bg-white border border-slate-200/60 shadow-sm">
                <colgroup>
                    <col className="w-[33.333333%]" />
                    <col className="w-[33.333333%]" />
                    <col className="w-[33.333333%]" />
                </colgroup>
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-6 md:px-8 py-4 text-left border-r border-slate-200/90">{c0}</th>
                        <th className="px-6 md:px-8 py-4 text-center border-r border-slate-200/90">{c1}</th>
                        <th className="px-6 md:px-8 py-4 text-center">{c2}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                    {rows.map((r) => (
                        <tr key={r[0]}>
                            <td className="px-6 md:px-8 py-4 font-bold bg-surface-subtle border-r border-slate-200/90">{r[0]}</td>
                            <td className="px-6 md:px-8 py-4 text-center border-r border-slate-200/90">{r[1]}</td>
                            <td className="px-6 md:px-8 py-4 text-center">{r[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
