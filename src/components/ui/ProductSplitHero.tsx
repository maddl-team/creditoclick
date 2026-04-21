"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import { Section } from "./Section";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ProductSplitHeroProps {
    badge: React.ReactNode;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    primaryCta: React.ReactNode;
    secondaryCta: React.ReactNode;
    primaryIcon?: LucideIcon;
    secondaryIcon?: LucideIcon;
    primaryHref?: string;
    secondaryHref?: string;
    right: React.ReactNode;
    sectionClassName?: string;
}

export function ProductSplitHero({
    badge,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    primaryIcon,
    secondaryIcon,
    primaryHref,
    secondaryHref,
    right,
    sectionClassName,
}: ProductSplitHeroProps) {
    return (
        <Section className={sectionClassName ?? "min-h-[70vh] !py-0"}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-0 items-stretch w-full min-h-[70vh]">
                <div className="lg:col-span-2 p-6 md:p-8 h-full flex flex-col justify-center items-start">
                    <Badge variant="subtle" className="mb-6">
                        {badge}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1]">
                        {title}
                    </h1>
                    <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl">{subtitle}</p>
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Button icon={primaryIcon} href={primaryHref}>
                            {primaryCta}
                        </Button>
                        <Button variant="secondary" icon={secondaryIcon} href={secondaryHref}>
                            {secondaryCta}
                        </Button>
                    </div>
                </div>
                <div className="lg:col-span-2 h-full relative min-h-[420px] lg:min-h-full">{right}</div>
            </div>
        </Section>
    );
}

interface ProductSplitHeroImageProps {
    src: ImageProps["src"];
    alt: string;
    priority?: boolean;
}

/** Colonna media con immagine full-bleed e barra d’accento a sinistra. */
export function ProductSplitHeroImage({ src, alt, priority }: ProductSplitHeroImageProps) {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority={priority} />
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-indigo/70 z-10" />
        </div>
    );
}
