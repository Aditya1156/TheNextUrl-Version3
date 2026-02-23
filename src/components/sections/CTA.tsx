"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import BlurText from "@/components/ui/BlurText";
import { images } from "@/lib/images";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={images.cta}
            alt="Modern workspace"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-dark/85" />

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative">
            <span className="section-tag">Get Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              <BlurText
                text="Ready to Build Your Digital Foundation?"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white justify-center"
              />
            </h2>
            <BlurText
              text="Let's discuss your project requirements and create a roadmap for your digital transformation."
              delay={60}
              animateBy="words"
              direction="bottom"
              className="text-white/60 mt-6 max-w-xl mx-auto justify-center"
            />

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 text-sm"
              >
                Schedule Free Consultation
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all text-sm border border-white/10"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
