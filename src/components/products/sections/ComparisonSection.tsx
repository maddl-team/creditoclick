"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ComparisonTable } from "@/components/ui/ComparisonTable";

interface ComparisonSectionBaseProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Larghezza dell'intro sul layout a 4 colonne (default 2). Usa 3 per testo sopra tabella più largo. */
  introColSpan?: 2 | 3;
  /** Posizione tabella per layout 2 colonne: default a destra. */
  twoColsTableAlign?: "left" | "right";
  sectionClassName?: string;
}

type ComparisonSectionTwoColsProps = ComparisonSectionBaseProps & {
  columns: readonly [string, string];
  rows: readonly (readonly [string, string])[];
};

type ComparisonSectionThreeColsProps = ComparisonSectionBaseProps & {
  columns: readonly [string, string, string];
  rows: readonly (readonly [string, string, string])[];
};

type ComparisonSectionFourColsProps = ComparisonSectionBaseProps & {
  columns: readonly [string, string, string, string];
  rows: readonly (readonly [string, string, string, string])[];
};

type ComparisonSectionProps =
  | ComparisonSectionTwoColsProps
  | ComparisonSectionThreeColsProps
  | ComparisonSectionFourColsProps;

export function ComparisonSection({
  badge,
  title,
  description,
  introColSpan = 2,
  twoColsTableAlign = "right",
  columns,
  rows,
  footer,
  sectionClassName = "border-t border-slate-200/60 overflow-visible",
}: ComparisonSectionProps & { footer?: React.ReactNode }) {
  const introSpanClass = introColSpan === 3 ? "lg:col-span-3" : "lg:col-span-2";
  const tableLayoutClass =
    columns.length === 2
      ? twoColsTableAlign === "left"
        ? "lg:col-span-2 lg:col-start-1"
        : "lg:col-span-2 lg:col-start-3"
      : columns.length === 4
        ? "lg:col-span-4"
        : "lg:col-span-3";

  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-x-0 lg:gap-y-10">
        <div className={introSpanClass}>
          <SectionIntro badge={badge} title={title} description={description} />
        </div>
        <div className={tableLayoutClass}>
          {columns.length === 2 ? (
            <ComparisonTable
              columns={columns as readonly [string, string]}
              rows={rows as readonly (readonly [string, string])[]}
            />
          ) : columns.length === 3 ? (
            <ComparisonTable
              columns={columns as readonly [string, string, string]}
              rows={rows as readonly (readonly [string, string, string])[]}
            />
          ) : (
            <ComparisonTable
              columns={columns as readonly [string, string, string, string]}
              rows={rows as readonly (readonly [string, string, string, string])[]}
            />
          )}
        </div>
        {footer ? <div className={tableLayoutClass}>{footer}</div> : null}
      </div>
    </Section>
  );
}
