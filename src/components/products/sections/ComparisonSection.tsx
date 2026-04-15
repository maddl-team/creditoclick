"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ComparisonTable } from "@/components/ui/ComparisonTable";

interface ComparisonSectionBaseProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
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

type ComparisonSectionProps = ComparisonSectionTwoColsProps | ComparisonSectionThreeColsProps;

export function ComparisonSection({
  badge,
  title,
  description,
  columns,
  rows,
  footer,
  sectionClassName = "border-t border-slate-200/60 overflow-visible",
}: ComparisonSectionProps & { footer?: React.ReactNode }) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-x-0 lg:gap-y-10">
        <div className="lg:col-span-2">
          <SectionIntro badge={badge} title={title} description={description} />
        </div>
        <div className="lg:col-span-3">
          {columns.length === 2 ? (
            <ComparisonTable
              columns={columns as readonly [string, string]}
              rows={rows as readonly (readonly [string, string])[]}
            />
          ) : (
            <ComparisonTable
              columns={columns as readonly [string, string, string]}
              rows={rows as readonly (readonly [string, string, string])[]}
            />
          )}
        </div>
        {footer ? <div className="lg:col-span-3">{footer}</div> : null}
      </div>
    </Section>
  );
}
