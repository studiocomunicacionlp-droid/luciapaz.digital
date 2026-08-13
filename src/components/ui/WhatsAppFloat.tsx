"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 items-center gap-2 rounded-full bg-wine pl-3 pr-4 text-cream shadow-soft transition-transform duration-300 hover:scale-105 sm:h-14 sm:pl-4 sm:pr-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" strokeWidth={2} />
      <span className="font-heading text-sm font-semibold">Escribime</span>
    </a>
  );
}
