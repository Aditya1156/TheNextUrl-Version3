"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, CheckCircle2 } from "lucide-react";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={images.hero}
        alt="Modern office workspace"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/50" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent circles */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Section tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag text-primary">
              Digital Infrastructure Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight"
          >
            Digital Infrastructure
            <br />
            for Institutions &{" "}
            <span className="relative inline-block">
              <span className="text-primary">Businesses</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47 2 153 2 199 5.5"
                  stroke="#F26522"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 mt-6 max-w-xl leading-relaxed"
          >
            Websites. ERP Systems. Booking Platforms. Mobile Apps.
            <br />
            Built with precision. Designed to scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 text-sm"
            >
              Get Free Consultation
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white px-6 py-4 font-medium transition-colors text-sm group"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <Play size={16} className="ml-0.5" />
              </span>
              View Solutions
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/10"
          >
            {[
              "MSME Registered",
              "Built with Next.js",
              "Serving Clients Across India",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <CheckCircle2 size={16} className="text-primary" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
