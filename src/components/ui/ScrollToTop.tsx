"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
