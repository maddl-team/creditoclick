"use client";

import { FaqSection } from "../ui/FaqSection";
import { HOME_FAQS } from "@/content/home";

export function FAQ() {
    return (
        <FaqSection
            sectionId="faq"
            sectionClassName="bg-surface-subtle"
            badge="FAQ Homepage"
            title="Domande frequenti sui prestiti online"
            description="Tutto quello che devi sapere sulla cessione del quinto e sulle nostre soluzioni di finanziamento. Non trovi quello che cerchi? Il nostro team è a disposizione per una consulenza gratuita e personalizzata."
            items={HOME_FAQS}
        />
    );
}
