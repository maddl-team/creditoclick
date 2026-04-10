"use client";

import * as React from "react";
import { Stethoscope, GraduationCap, Shield, Building2, Briefcase, UserCircle } from "lucide-react";
import { Section } from "../ui/Section";
import { FeatureItem } from "../ui/FeatureItem";
import { SectionIntro } from "../ui/SectionIntro";
import { HOME_TARGET_CATEGORIES } from "@/content/home";

const CATEGORY_ICON_MAP = {
    stethoscope: Stethoscope,
    graduationCap: GraduationCap,
    shield: Shield,
    building: Building2,
    briefcase: Briefcase,
    userCircle: UserCircle,
} as const;

export function Categories() {
    return (
        <Section id="categorie" className="bg-surface-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                {/* Left Column: Messaging */}
                <div className="lg:col-span-2">
                    <SectionIntro
                        badge="Target / Professioni"
                        title="Una soluzione pensata per la tua categoria professionale"
                        description="Ogni professione ha le sue caratteristiche contrattuali, le sue convenzioni e le sue esigenze. Un infermiere con turni notturni non ha le stesse priorità di un docente con contratto MIUR, né di un maresciallo dei Carabinieri o di un dipendente di una PMI con 8 dipendenti. Per questo abbiamo costruito percorsi specifici per ciascuna categoria."
                    />
                </div>

                {/* Right Column: Category Items */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0">
                    {HOME_TARGET_CATEGORIES.map((cat, i) => (
                        <FeatureItem
                            key={i}
                            title={cat.title}
                            icon={CATEGORY_ICON_MAP[cat.icon]}
                            hasPadding={true}
                        >
                            {cat.desc}
                        </FeatureItem>
                    ))}
                </div>
            </div>
        </Section>
    );
}
