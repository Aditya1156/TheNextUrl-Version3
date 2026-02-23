"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/config";
import { images } from "@/lib/images";
import BlurText from "@/components/ui/BlurText";

const avatarImages = [images.avatar1, images.avatar2, images.avatar3];

export default function Testimonials() {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left - Header + Rating Card */}
          <div>
            <span className="section-tag">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              What Our <span className="gradient-text-dark">Clients</span> Say
            </h2>
            <BlurText
              text="Real feedback from real clients who trust us to build their digital infrastructure."
              delay={80}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4"
            />

            {/* Rating Card - Nexbiz style */}
            <div className="bg-primary rounded-2xl p-8 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {avatarImages.map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden relative"
                    >
                      <Image
                        src={src}
                        alt="Client"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
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
                className="bg-white rounded-2xl p-8 border border-border relative hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <Image
                        src={avatarImages[index]}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
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
