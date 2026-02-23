"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Gauge,
  ShieldCheck,
  IndianRupee,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import { images } from "@/lib/images";

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
          {/* Left - Image + Overlay Card (Nexbiz style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src={images.whyUs}
                alt="Team collaborating on digital solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Overlay Card — like Nexbiz */}
            <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 bg-primary rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/30 max-w-[240px]">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Code2 size={24} className="text-white" />
              </div>
              <h4 className="text-white font-bold text-lg leading-tight">
                IT Solutions For The Modern Workplace.
              </h4>
            </div>

            {/* Small secondary image */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-32 h-32 rounded-xl overflow-hidden border-4 border-dark shadow-xl">
              <Image
                src={images.whyUsCard}
                alt="Digital strategy"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              We Build Solutions for
              <br />
              Your Growth
            </h2>
            <p className="text-white/60 mt-6 leading-relaxed">
              A modern digital agency built for IT companies, institutions, and
              businesses. Fully responsive, SEO-optimized, and packed with
              features to help you build a strong and professional digital
              presence.
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

            {/* Feature Tags */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-all"
                  >
                    <Icon size={18} className="text-primary shrink-0" />
                    <span className="text-white text-sm font-medium">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
