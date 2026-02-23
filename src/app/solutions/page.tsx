"use client";

import Image from "next/image";
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
import { images } from "@/lib/images";
import BlurText from "@/components/ui/BlurText";

const allSolutions = [
  {
    id: "web",
    icon: Globe,
    number: "01",
    title: "Modern Web Architecture",
    subtitle: "Fast. SEO-optimized. Mobile-first.",
    description:
      "We build high-performance websites using Next.js, React, and modern web technologies. Every site is optimized for speed, SEO, and mobile responsiveness from day one.",
    image: images.webDev,
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
    image: images.erp,
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
    image: images.ecommerce,
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
    image: images.mobile,
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
            <BlurText
              text="Exploring business world through our services"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl font-bold text-white justify-center"
            />
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
          <div className="space-y-32">
            {allSolutions.map((solution, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-16 items-center"
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

                  {/* Image */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-dark/10">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />

                      {/* Floating label */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                        <h3 className="font-bold text-dark text-sm">
                          {solution.title}
                        </h3>
                        <p className="text-text-light text-xs">
                          {solution.subtitle}
                        </p>
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
      <section className="py-20 bg-dark relative overflow-hidden">
        <Image
          src={images.cta}
          alt="Workspace"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
