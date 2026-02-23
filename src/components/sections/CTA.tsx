"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-dark rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative">
            <span className="section-tag">Get Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Ready to Build Your
              <br />
              Digital Foundation?
            </h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">
              Let&apos;s discuss your project requirements and create a roadmap for your
              digital transformation.
            </p>

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
