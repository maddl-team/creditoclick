import { Metadata } from "next";
import { CessioneDelQuintoPageContent } from "@/components/products/CessioneDelQuintoPageContent";

export const metadata: Metadata = {
  title: "Cessione del Quinto: cos'è, come funziona e tassi aggiornati al 2026",
  description:
    "La formula di finanziamento più sicura per dipendenti e pensionati italiani. Rata automatica in busta paga, nessuna garanzia reale richiesta, approvazione anche in caso di segnalazioni CRIF.",
};

export default function CessioneDelQuintoPage() {
  return <CessioneDelQuintoPageContent />;
}
