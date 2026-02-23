"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Server, ShoppingCart, Smartphone } from "lucide-react";
import { solutions } from "@/lib/config";

const icons = [Globe, Server, ShoppingCart, Smartphone];

export default function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Our Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
            What We Build
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Scalable digital systems engineered for performance, security, and growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={solution.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={solution.href}
                  className="group block p-8 bg-white border border-border rounded-2xl hover:border-dark/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all duration-300 shrink-0">
                        <Icon size={24} className="text-dark/70 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary">
                          {solution.number}
                        </span>
                        <h3 className="text-xl font-bold text-dark mt-1">
                          {solution.title}
                        </h3>
                        <p className="text-text-light mt-2 text-sm">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-dark group-hover:border-dark transition-all shrink-0">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
