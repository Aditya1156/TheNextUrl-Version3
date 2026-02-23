"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/config";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const icons = [Search, Palette, Code2, Rocket];

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">How We Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
            Our <span className="gradient-text-dark">Process</span>
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Four simple steps from idea to launch.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-light rounded-2xl mb-6 group-hover:bg-dark group-hover:scale-110 transition-all duration-300">
                  <Icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                <p className="text-text-light text-sm mt-2">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
