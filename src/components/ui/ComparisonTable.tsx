"use client";

/** Due colonne: prima etichetta (bold), valori centrati. */
export type ComparisonTableTwoProps = {
    columns: readonly [string, string];
    rows: readonly (readonly [string, string])[];
    className?: string;
};

/** Tre colonne: stesso schema della griglia (table-fixed), bordi verticali come le linee di background (`slate-200/90`). */
export type ComparisonTableThreeProps = {
    columns: readonly [string, string, string];
    rows: readonly (readonly [string, string, string])[];
    className?: string;
};

export type ComparisonTableFourProps = {
    columns: readonly [string, string, string, string];
    rows: readonly (readonly [string, string, string, string])[];
    className?: string;
};

export type ComparisonTableProps = ComparisonTableTwoProps | ComparisonTableThreeProps | ComparisonTableFourProps;

export function ComparisonTable({ columns, rows, className }: ComparisonTableProps) {
    const n = columns.length as 2 | 3 | 4;
    const colWidth = n === 2 ? "w-[50%]" : n === 3 ? "w-[33.333333%]" : "w-[25%]";
    const minTable = n === 2 ? "min-w-[400px]" : n === 3 ? "min-w-[600px]" : "min-w-[760px]";

    return (
        <div className={className ?? "min-w-0 w-full overflow-x-auto lg:max-w-none"}>
            <table
                className={`w-full ${minTable} lg:min-w-0 table-fixed border-collapse bg-white border border-slate-200/60 shadow-sm`}
            >
                <colgroup>
                    {Array.from({ length: n }, (_, i) => (
                        <col key={i} className={colWidth} />
                    ))}
                </colgroup>
                <thead>
                    <tr className="bg-slate-900 text-white">
                        {columns.map((c, i) => (
                            <th
                                key={i}
                                className={
                                    i === 0
                                        ? "px-6 md:px-8 py-4 text-left border-r border-slate-200/90"
                                        : i === n - 1
                                          ? "px-6 md:px-8 py-4 text-center"
                                          : "px-6 md:px-8 py-4 text-center border-r border-slate-200/90"
                                }
                            >
                                {c}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                    {rows.map((r) => (
                        <tr key={r[0]}>
                            {r.map((cell, i) => (
                                <td
                                    key={i}
                                    className={
                                        i === 0
                                            ? "px-6 md:px-8 py-4 font-bold bg-surface-subtle border-r border-slate-200/90"
                                            : i === n - 1
                                              ? "px-6 md:px-8 py-4 text-center"
                                              : "px-6 md:px-8 py-4 text-center border-r border-slate-200/90"
                                    }
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
