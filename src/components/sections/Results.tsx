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
    <span className="tabular-nums">
      {count}
      <span className="text-primary-light">{suffix}</span>
    </span>
  );
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={26} className="text-primary" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-white/50 text-sm mt-3 font-medium tracking-wide uppercase">
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
