export const ANNOUNCEMENT_TOPBAR_MESSAGE =
  "Comunichiamo che tutte le richieste ricevute dal 13 al 31 agosto saranno prese in carico e lavorate a partire dal 1° settembre.";

export function AnnouncementTopbar() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-brand-purple text-white border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5">
        <p className="text-center text-[12px] sm:text-sm leading-snug font-medium tracking-tight text-balance">
          {ANNOUNCEMENT_TOPBAR_MESSAGE}
        </p>
      </div>
    </div>
  );
}
