"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    period: "onwards",
    description: "Perfect for small businesses and personal brands",
    popular: false,
    features: [
      { name: "Responsive Website (up to 5 pages)", included: true },
      { name: "Mobile-Friendly Design", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "WhatsApp Integration", included: true },
      { name: "1 Month Free Support", included: true },
      { name: "Custom Admin Dashboard", included: false },
      { name: "E-Commerce Features", included: false },
    ],
  },
  {
    name: "Professional",
    price: "₹49,999",
    period: "onwards",
    description: "For growing businesses that need more power",
    popular: true,
    features: [
      { name: "Everything in Starter", included: true },
      { name: "Up to 15 Pages", included: true },
      { name: "Custom Admin Dashboard", included: true },
      { name: "Advanced SEO (90+ Lighthouse)", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "3 Months Free Support", included: true },
      { name: "Performance Optimization", included: true },
      { name: "E-Commerce (up to 100 products)", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Full-scale systems for institutions and enterprises",
    popular: false,
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Unlimited Pages & Features", included: true },
      { name: "ERP / Management System", included: true },
      { name: "Mobile App (Android + iOS)", included: true },
      { name: "E-Commerce (Unlimited)", included: true },
      { name: "Dedicated Support & AMC", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Priority Development", included: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Pricing Plan</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            <BlurText
              text="Find the perfect plan for your needs"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl font-bold text-white justify-center"
            />
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Transparent pricing with no hidden costs. Choose the plan that fits
            your business.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  plan.popular
                    ? "bg-dark text-white border-dark shadow-2xl shadow-dark/20 scale-105"
                    : "bg-white text-dark border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full -rotate-2">
                    Popular
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    plan.popular ? "bg-primary" : "bg-primary/10"
                  }`}
                >
                  <span
                    className={`text-lg font-black ${
                      plan.popular ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{plan.name}</h3>

                <div className="mt-4 mb-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.popular ? "text-white/60" : "text-text-light"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                <p
                  className={`text-sm mb-8 ${
                    plan.popular ? "text-white/60" : "text-text-light"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="border-t border-current/10 pt-6 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-start gap-3 text-sm"
                      >
                        {feature.included ? (
                          <Check
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              plan.popular ? "text-primary" : "text-primary"
                            }`}
                          />
                        ) : (
                          <X
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              plan.popular ? "text-white/30" : "text-text-lighter"
                            }`}
                          />
                        )}
                        <span
                          className={
                            !feature.included
                              ? plan.popular
                                ? "text-white/30"
                                : "text-text-lighter"
                              : ""
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-dark hover:bg-dark-light text-white"
                  }`}
                >
                  Get Started
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-text-light text-sm mt-12">
            All prices are excluding GST. Custom requirements?
            <Link href="/contact" className="text-primary font-medium ml-1">
              Contact us for a quote.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
