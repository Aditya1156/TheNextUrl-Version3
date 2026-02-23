"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/config";

export default function Testimonials() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left - Header + Rating Card */}
          <div>
            <span className="section-tag">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              Read what Our Clients say about work
            </h2>
            <p className="text-text-light mt-4">
              Real feedback from real clients who trust us to build their digital infrastructure.
            </p>

            {/* Rating Card - Nexbiz style */}
            <div className="bg-primary rounded-2xl p-8 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 border-2 border-primary flex items-center justify-center text-white text-xs font-bold"
                    >
                      {["R", "P", "V"][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold">9+</div>
                  <div className="text-white/70 text-xs">Client Reviews</div>
                </div>
              </div>
              <div className="text-4xl font-black text-white">5.0</div>
              <p className="text-white/80 text-sm mt-2">
                Clients are satisfied with our
                <br />
                Technology Services.
              </p>
            </div>
          </div>

          {/* Right - Testimonial Cards */}
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border relative"
              >
                {/* Quote mark */}
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-primary/10"
                />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>

                <p className="text-text italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-text-light text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
