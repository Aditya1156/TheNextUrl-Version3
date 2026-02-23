"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="fill-white" />
      <span className="absolute bottom-full right-0 mb-2 bg-white text-dark text-xs font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
