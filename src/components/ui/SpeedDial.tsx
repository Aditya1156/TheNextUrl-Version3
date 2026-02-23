"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, Headset } from "lucide-react";
import { siteConfig } from "@/lib/config";

const actions = [
  {
    label: "WhatsApp",
    href: siteConfig.whatsapp,
    icon: MessageCircle,
    color: "bg-[#25D366]",
    shadow: "shadow-[#25D366]/30",
  },
  {
    label: "Call Us",
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
    color: "bg-primary",
    shadow: "shadow-primary/30",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    color: "bg-rose-500",
    shadow: "shadow-rose-500/30",
  },
];

export default function SpeedDial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Main toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? "bg-dark-lighter text-white rotate-0"
            : "bg-primary text-white hover:bg-primary-dark shadow-primary/30"
        }`}
        aria-label="Quick actions"
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? <X size={22} /> : <Headset size={22} />}
        </motion.div>
      </button>

      {/* Action buttons */}
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.label === "WhatsApp" ? "_blank" : undefined}
              rel={action.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.3, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.3, y: 20 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className={`group flex items-center gap-3`}
              onClick={() => setOpen(false)}
            >
              <span className="bg-white text-dark text-xs font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {action.label}
              </span>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${action.color} ${action.shadow} hover:scale-110 transition-transform`}
              >
                <action.icon size={20} className={action.label === "WhatsApp" ? "fill-white" : ""} />
              </div>
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  );
}
