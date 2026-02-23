"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
        >
          {/* Subtle background grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="text-center relative">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30"
            >
              <span className="text-white font-black text-3xl">N</span>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white text-xl font-bold tracking-wider"
            >
              TheNextUrl
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/40 text-xs mt-2 tracking-[0.2em] uppercase"
            >
              Digital Infrastructure
            </motion.div>

            {/* Loading bar */}
            <motion.div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
