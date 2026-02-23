"use client";

import {
  Sparkles,
  ShieldCheck,
  Headphones,
  Zap,
  BadgeCheck,
  IndianRupee,
  Clock,
  Rocket,
} from "lucide-react";

const highlights = [
  { text: "Free Consultation", icon: Sparkles },
  { text: "MSME Registered", icon: BadgeCheck },
  { text: "24/7 Support", icon: Headphones },
  { text: "90+ Lighthouse Score", icon: Zap },
  { text: "Secure by Default", icon: ShieldCheck },
  { text: "No Hidden Costs", icon: IndianRupee },
  { text: "2-4 Week Delivery", icon: Clock },
  { text: "Production-Grade Code", icon: Rocket },
];

const marqueeItems = [...highlights, ...highlights];

export default function TechStack() {
  return (
    <section className="py-4 bg-dark overflow-hidden">
      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.text}-${index}`}
                className="flex items-center gap-2 mx-8 shrink-0"
              >
                <Icon size={14} className="text-primary" />
                <span className="text-sm text-white/80 whitespace-nowrap font-medium">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
