"use client";

import { ProcessStepsSection } from "../ui/ProcessStepsSection";
import { HOME_PROCESS_STEPS } from "@/content/home";

export function Process() {
    return (
        <ProcessStepsSection
            sectionId="processo"
            badge="Come Funziona"
            title="Il processo CreditoClick: semplice, trasparente, veloce"
            description="Dalla prima richiesta all'accredito sul conto, ti accompagniamo in ogni passaggio. Ecco come lavoriamo."
            descriptionClassName="max-w-2xl"
            steps={HOME_PROCESS_STEPS}
        />
    );
}
