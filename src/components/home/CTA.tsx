"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { IndigoCtaSection } from "../ui/IndigoCtaSection";
import { HOME_PRIMARY_CTA_CONTENT } from "@/content/home";

export function CTA() {
    return (
        <IndigoCtaSection showBackgroundLines>
            <div className="max-w-3xl p-6 md:p-8">
                <Badge className="bg-white/20 text-white border-white/30 mb-6">
                    {HOME_PRIMARY_CTA_CONTENT.badge}
                </Badge>
                <h2 className="text-4xl md:text-5xl text-white leading-[1.1] font-bold mb-8">
                    {HOME_PRIMARY_CTA_CONTENT.title}
                </h2>
                <p className="text-xl text-indigo-100 opacity-90 leading-relaxed mb-12">
                    {HOME_PRIMARY_CTA_CONTENT.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button variant="secondary" className="w-full sm:w-auto bg-white text-brand-indigo hover:bg-indigo-50 border-white" icon={ArrowRight} href="/contatti">
                        {HOME_PRIMARY_CTA_CONTENT.primaryButton}
                    </Button>
                    <Button className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover border-none text-white shadow-lg shadow-emerald-500/20" icon={MessageCircle} href="/contatti">
                        {HOME_PRIMARY_CTA_CONTENT.whatsappButton}
                    </Button>
                    <Button variant="link" className="text-white hover:text-indigo-200 mt-4 sm:mt-0 sm:ml-4 font-bold border-b border-white/30 h-auto p-0 pb-1" href="/strumenti/calcolo-rata-cessione-quinto">
                        {HOME_PRIMARY_CTA_CONTENT.linkButton}
                    </Button>
                </div>
            </div>
        </IndigoCtaSection>
    );
}
