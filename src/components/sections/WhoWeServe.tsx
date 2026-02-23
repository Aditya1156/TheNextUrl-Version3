"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Store,
  Rocket,
  UtensilsCrossed,
  Building2,
} from "lucide-react";

const industries = [
  {
    name: "Schools & Colleges",
    description: "ERP systems, portals, and automation",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Coaching Institutes",
    description: "Batch management and student portals",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Local Businesses",
    description: "Websites, catalogs, and online presence",
    icon: Store,
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Startups",
    description: "MVPs, dashboards, and SaaS platforms",
    icon: Rocket,
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Restaurants & Hospitality",
    description: "POS, booking, and menu management",
    icon: UtensilsCrossed,
    color: "bg-red-50 text-red-600",
  },
  {
    name: "Enterprises",
    description: "Custom software and integrations",
    icon: Building2,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Industries</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
            Who We Serve
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            We build tailored solutions for organizations across sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${industry.color} mb-5`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-dark">{industry.name}</h3>
                <p className="text-text-light text-sm mt-2">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
