"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, SmilePlus, Headphones, ShieldCheck } from "lucide-react";

const stats = [
  { value: 9, suffix: "+", label: "Projects Delivered", icon: Briefcase },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: SmilePlus },
  { value: 24, suffix: "/7", label: "Support Available", icon: Headphones },
  { value: 100, suffix: "%", label: "Security Grade", icon: ShieldCheck },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-primary">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-white/70 text-sm mt-2 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
