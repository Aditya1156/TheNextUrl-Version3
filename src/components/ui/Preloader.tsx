"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center overflow-hidden"
        >
          {/* Subtle glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-primary"
          />

          {/* Content */}
          <div className="text-center relative z-10">
            {/* Brand Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "backOut" }}
              className="mx-auto mb-8"
            >
              <Image
                src="/brandlogo1.png"
                alt="TheNextUrl"
                width={220}
                height={110}
                className="brightness-0 invert"
                priority
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
