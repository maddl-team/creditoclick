import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
    BarChart3,
    Globe,
    Lock,
    MousePointer2,
    Smartphone,
    Zap
} from "lucide-react";

const ALL_SERVICES = [
    {
        icon: BarChart3,
        title: "Analisi Predittiva",
        description: "Sfrutta i nostri modelli di machine learning per prevedere le tendenze del mercato e minimizzare i rischi finanziari.",
    },
    {
        icon: Globe,
        title: "Credito Internazionale",
        description: "Espandi i tuoi orizzonti con soluzioni di credito multi-valuta progettate per le imprese globali.",
    },
    {
        icon: Lock,
        title: "Sicurezza Blockchain",
        description: "Tutte le tue transazioni sono protette da protocolli di crittografia avanzati basati su tecnologia blockchain.",
    },
    {
        icon: Smartphone,
        title: "Mobile Banking",
        description: "Gestisci le tue finanze ovunque tu sia con un'app intuitiva che mette il controllo nelle tue mani.",
    },
    {
        icon: MousePointer2,
        title: "Investimenti One-Click",
        description: "Diversifica il tuo portafoglio con facilità grazie alla nostra interfaccia di investimento semplificata.",
    },
    {
        icon: Zap,
        title: "API per Sviluppatori",
        description: "Integra i nostri servizi finanziari direttamente nella tua piattaforma con API robuste e documentate.",
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-24">
            <Section className="pb-12 relative overflow-hidden">
                <div className="max-w-3xl">
                    <Badge variant="subtle" className="mb-4">Catalogo Servizi</Badge>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-8">
                        Soluzioni per ogni <span className="text-gradient">ambizione.</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Dalle esigenze quotidiane ai grandi progetti di investimento, offriamo strumenti tecnologici per navigare la finanza moderna.
                    </p>
                </div>
            </Section>

            <Section className="bg-slate-50/50">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_SERVICES.map((service) => (
                        <Card key={service.title} className="bg-white">
                            <div className="w-12 h-12 rounded-xl bg-brand-indigo/5 flex items-center justify-center mb-6 text-brand-indigo">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
