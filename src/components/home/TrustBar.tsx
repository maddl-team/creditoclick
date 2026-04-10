"use client";

import * as React from "react";
import { ShieldCheck, Clock, Smartphone, Info } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionIntro } from "../ui/SectionIntro";
import { FeatureItem } from "../ui/FeatureItem";
import { HOME_TRUST_PILLS } from "@/content/home";

const TRUST_ICON_MAP = {
    shieldCheck: ShieldCheck,
    clock: Clock,
    smartphone: Smartphone,
    info: Info,
} as const;

export function TrustBar() {
    return (
        <Section id="perche-sceglierci" className="bg-surface-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">
                <div className="lg:col-span-2">
                    <SectionIntro
                        badge="Perché Sceglierci"
                        title="Perché scegliere CreditoClick?"
                        descriptionClassName="space-y-6"
                        description={
                            <>
                                <p>
                                    Non siamo un comparatore automatico. Non siamo una banca. Siamo un&apos;agenzia finanziaria convenzionata, composta da consulenti specializzati che lavorano ogni giorno per trovare la soluzione di credito più adatta alla tua situazione reale — non a quella ideale.
                                </p>
                                <p>
                                    Lavoriamo con i principali istituti finanziatori italiani, siamo iscritti all&apos;OAM (Organismo Agenti e Mediatori) e operiamo nel pieno rispetto della normativa sulla trasparenza bancaria e del Codice del Consumo.
                                </p>
                            </>
                        }
                    />
                </div>

                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-0">
                    {HOME_TRUST_PILLS.map((pill, i) => (
                        <FeatureItem key={i} icon={TRUST_ICON_MAP[pill.icon]} title={pill.title}>
                            {pill.desc}
                        </FeatureItem>
                    ))}
                </div>
            </div>
        </Section>
    );
}
