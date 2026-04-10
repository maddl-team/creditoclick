"use client";

import * as React from "react";
import { Section } from "./Section";
import { SectionIntro } from "./SectionIntro";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";

interface FaqSectionProps {
    sectionId?: string;
    sectionClassName?: string;
    badge: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    items: readonly FaqItem[];
}

export function FaqSection({ sectionId, sectionClassName, badge, title, description, items }: FaqSectionProps) {
    return (
        <Section id={sectionId} className={sectionClassName}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                <div className="lg:col-span-2">
                    <SectionIntro badge={badge} title={title} description={description} />
                </div>
                <div className="lg:col-span-2 pr-6 md:pr-8 pt-4 lg:pt-8">
                    <FaqAccordion items={items} />
                </div>
            </div>
        </Section>
    );
}
