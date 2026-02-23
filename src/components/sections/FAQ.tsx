"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are delivered within 2-4 weeks depending on complexity. Simple landing pages take about 1-2 weeks, while complex ERP systems or e-commerce platforms may take 4-8 weeks.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer 24/7 support and annual maintenance contracts (AMC). Every project comes with 30 days of free post-launch support for bug fixes and minor adjustments.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with modern, production-grade technologies including Next.js, React, TypeScript, Node.js, and cloud platforms like AWS and Vercel. We choose the best stack for each project's specific needs.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in website redesigns that improve performance, SEO, and user experience while maintaining your existing content and brand identity.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer transparent, fixed-price packages starting from \u20B914,999. No hidden costs. Every project includes a detailed scope document so you know exactly what you're paying for.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes, while we're MSME registered in India and primarily serve clients across the country, we welcome international projects and have worked with clients globally.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <BlurText
            text="Everything you need to know about working with us."
            delay={80}
            animateBy="words"
            direction="bottom"
            className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "bg-dark border-dark shadow-lg shadow-dark/20"
                    : "bg-white border-border hover:border-dark/20 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <h3
                    className={`font-semibold transition-colors text-[15px] ${
                      activeIndex === index ? "text-white" : "text-dark"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-primary text-white rotate-0"
                        : "bg-light text-dark"
                    }`}
                  >
                    {activeIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/60 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
