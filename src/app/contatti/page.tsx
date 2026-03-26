import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24">
            <Section className="pb-12 relative overflow-hidden">
                <div className="max-w-3xl">
                    <Badge variant="subtle" className="mb-4">Contattaci</Badge>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-8">
                        Siamo qui per <span className="text-gradient">ascoltarti.</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Hai domande o vuoi iniziare un progetto? Il nostro team di esperti è pronto a rispondere a ogni tua esigenza.
                    </p>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <Card className="p-10">
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-text-primary">Nome</label>
                                        <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all" placeholder="Mario Rossi" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-text-primary">Email</label>
                                        <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all" placeholder="mario@esempio.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-primary">Oggetto</label>
                                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all" placeholder="Informazioni servizi" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-primary">Messaggio</label>
                                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all resize-none" placeholder="Come possiamo aiutarti?" />
                                </div>
                                <Button className="w-full">Invia Messaggio</Button>
                            </form>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <Card className="p-8 border-brand-indigo/10 shadow-lg shadow-brand-indigo/5">
                            <h3 className="text-lg font-bold text-text-primary mb-6">Canali Diretti</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-indigo/5 flex items-center justify-center text-brand-indigo shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-text-primary mb-1">Email</p>
                                        <p className="text-sm text-text-secondary">supporto@creditoclick.it</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-indigo/5 flex items-center justify-center text-brand-indigo shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-text-primary mb-1">Telefono</p>
                                        <p className="text-sm text-text-secondary">+39 02 1234 5678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-indigo/5 flex items-center justify-center text-brand-indigo shrink-0">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-text-primary mb-1">Live Chat</p>
                                        <p className="text-sm text-text-secondary">Disponibile Lun-Ven, 9-18</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-lg font-bold text-text-primary mb-4">Sede Legale</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Via Alessandro Volta, 12<br />
                                20121 Milano (MI)<br />
                                Italia
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
