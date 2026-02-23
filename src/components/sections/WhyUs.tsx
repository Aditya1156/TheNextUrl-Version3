"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Gauge,
  ShieldCheck,
  IndianRupee,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const iconMap = {
  Code2,
  Gauge,
  ShieldCheck,
  IndianRupee,
  HeartHandshake,
  BadgeCheck,
};

const features = [
  {
    title: "Modern Stack",
    description: "Next.js, React, TypeScript, Cloud",
    icon: Code2,
  },
  {
    title: "SEO & Performance First",
    description: "90+ Lighthouse scores guaranteed",
    icon: Gauge,
  },
  {
    title: "Secure by Default",
    description: "Production-grade security practices",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs, clear deliverables",
    icon: IndianRupee,
  },
  {
    title: "Long-Term Support",
    description: "Ongoing maintenance and AMC plans",
    icon: HeartHandshake,
  },
  {
    title: "MSME Registered",
    description: "Government of India certified agency",
    icon: BadgeCheck,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="section-tag">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              We Build Solutions for
              <br />
              Your Growth
            </h2>
            <p className="text-white/60 mt-6 leading-relaxed">
              A modern digital agency built for IT companies, institutions, and businesses.
              Fully responsive, SEO-optimized, and packed with features to help
              you build a strong and professional digital presence.
            </p>

            {/* Progress bars - like Nexbiz */}
            <div className="mt-10 space-y-6">
              {[
                { label: "Development & Engineering", value: 95 },
                { label: "SEO & Performance", value: 90 },
                { label: "UI/UX Design", value: 85 },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">
                      {bar.label}
                    </span>
                    <span className="text-white/60 text-sm">{bar.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
