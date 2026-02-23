"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowUpRight, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-dark/95 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium hidden sm:block">
                Ready to start your project?
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-white/60 text-sm hover:text-primary transition-colors"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">{siteConfig.phone}</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get Free Quote
                <ArrowUpRight size={14} />
              </Link>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/30 hover:text-white/70 transition-colors p-1"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
