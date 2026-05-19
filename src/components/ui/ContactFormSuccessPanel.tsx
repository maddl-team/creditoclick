import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_MESSAGE =
  "Abbiamo ricevuto la tua richiesta. Un consulente ti contatterà entro 24 ore lavorative al recapito che hai indicato.";

type ContactFormSuccessPanelProps = {
  firstName?: string;
  className?: string;
};

export function ContactFormSuccessPanel({ firstName, className }: ContactFormSuccessPanelProps) {
  const greeting = firstName?.trim()
    ? `Grazie ${firstName.trim()}, la tua richiesta è stata inviata con successo.`
    : "Grazie, la tua richiesta è stata inviata con successo.";

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 text-center shadow-sm shadow-slate-200/40",
        className,
      )}
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-indigo/10 text-brand-indigo">
        <CheckCircle2 className="h-8 w-8" aria-hidden />
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3">{greeting}</h3>
      <p className="text-base text-text-secondary leading-relaxed max-w-lg mx-auto">{DEFAULT_MESSAGE}</p>
    </div>
  );
}
