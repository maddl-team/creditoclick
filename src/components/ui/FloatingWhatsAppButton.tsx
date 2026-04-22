"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/?text=Ciao%2C%20vorrei%20una%20consulenza%20gratuita%20sulla%20cessione%20del%20quinto.";

export function FloatingWhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-[1.03] hover:bg-whatsapp-hover active:scale-[0.98]"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Scrivici su WhatsApp</span>
    </Link>
  );
}
