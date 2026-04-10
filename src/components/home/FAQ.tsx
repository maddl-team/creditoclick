"use client";

import * as React from "react";
import { Section } from "../ui/Section";
import { SectionIntro } from "../ui/SectionIntro";
import { FaqAccordion } from "../ui/FaqAccordion";
import { HOME_FAQS } from "@/content/home";

export function FAQ() {
    return (
        <Section id="faq" className="bg-surface-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Left Column: Messaging */}
                <div className="lg:col-span-2">
                    <SectionIntro
                        badge="FAQ Homepage"
                        title="Domande frequenti sui prestiti online"
                        description="Tutto quello che devi sapere sulla cessione del quinto e sulle nostre soluzioni di finanziamento. Non trovi quello che cerchi? Il nostro team è a disposizione per una consulenza gratuita e personalizzata."
                    />
                </div>

                {/* Right Column: Clean Accordions */}
                <div className="lg:col-span-2 pr-6 md:pr-8 pt-4 lg:pt-8">
                    <FaqAccordion items={HOME_FAQS} />
                </div>
            </div>
        </Section>
    );
}
