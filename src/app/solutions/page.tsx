"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Server,
  ShoppingCart,
  Smartphone,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const allSolutions = [
  {
    id: "web",
    icon: Globe,
    number: "01",
    title: "Modern Web Architecture",
    subtitle: "Fast. SEO-optimized. Mobile-first.",
    description:
      "We build high-performance websites using Next.js, React, and modern web technologies. Every site is optimized for speed, SEO, and mobile responsiveness from day one.",
    features: [
      "Server-side rendering for SEO",
      "Mobile-first responsive design",
      "90+ Lighthouse performance score",
      "Fast loading under 2 seconds",
      "Content management ready",
      "Analytics & tracking integration",
    ],
  },
  {
    id: "erp",
    icon: Server,
    number: "02",
    title: "ERP & Management Systems",
    subtitle: "Attendance. Fees. Payroll. Automation.",
    description:
      "Custom-built management systems for schools, colleges, and institutions. Automate attendance, fees, payroll, and reporting with a single unified platform.",
    features: [
      "Student/Staff attendance tracking",
      "Fee management & payment gateway",
      "Payroll automation",
      "Report generation & analytics",
      "Role-based access control",
      "Parent/Student portals",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    number: "03",
    title: "E-Commerce & Booking Platforms",
    subtitle: "Sell online. Take bookings. Manage operations.",
    description:
      "Full-featured online stores and booking systems with payment processing, inventory management, and customer management built in.",
    features: [
      "Product catalog & inventory",
      "Secure payment processing",
      "Order tracking & management",
      "Booking/appointment scheduling",
      "Customer accounts & wishlists",
      "Admin dashboard & reports",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    number: "04",
    title: "Cross-Platform Mobile Apps",
    subtitle: "Android & iOS from a single codebase.",
    description:
      "Native-quality mobile applications built with React Native. Deploy to both Android and iOS from one codebase, saving time and cost.",
    features: [
      "Single codebase for Android & iOS",
      "Native-quality performance",
      "Push notifications",
      "Offline-first capabilities",
      "App Store & Play Store deployment",
      "API integration & backend",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Our Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Exploring business world
            <br />
            <span className="text-white/80">through our services</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Scalable digital systems engineered for performance, security, and
            growth.
          </p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {allSolutions.map((solution, index) => {
              const Icon = solution.icon;
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <span className="text-xs font-bold text-primary tracking-wider">
                      {solution.number}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
                      {solution.title}
                    </h2>
                    <p className="text-primary font-medium mt-2">
                      {solution.subtitle}
                    </p>
                    <p className="text-text-light mt-4 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-text"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all text-sm mt-8"
                    >
                      Get Started
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  {/* Visual Card */}
                  <div
                    className={`${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="bg-light rounded-2xl p-12 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                      <div className="relative">
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                          <Icon size={40} className="text-primary" />
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-border text-center">
                          <h3 className="font-bold text-dark text-lg">
                            {solution.title}
                          </h3>
                          <p className="text-text-light text-sm mt-1">
                            {solution.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="text-white/60 mt-4">
            Let&apos;s discuss your project and build something great together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all text-sm mt-8"
          >
            Schedule Free Consultation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
