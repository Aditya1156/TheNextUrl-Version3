"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function DiscountPopup() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState<"offer" | "form" | "success">("offer");
  const [formName, setFormName] = useState("");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("thenexturl_discount_seen");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("thenexturl_discount_seen", "true");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFormName(data.get("name") as string);
    setStep("success");
    localStorage.setItem("thenexturl_discount_seen", "true");
  };

  const openWhatsApp = () => {
    const msg = `Hi, I'm ${formName || "there"}. I just claimed the 10% discount offer (WELCOME10) from your website. I'd like to discuss a project!`;
    window.open(
      `${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[90]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[91] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-dark/5 hover:bg-dark/10 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary-light to-primary" />

              <div className="p-8">
                {step === "offer" && (
                  <div className="text-center">
                    {/* Gift icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Gift size={28} className="text-primary" />
                    </div>

                    <h3 className="text-2xl font-bold text-dark">
                      Welcome! Here&apos;s a Gift
                    </h3>
                    <p className="text-text-light mt-3 text-sm leading-relaxed">
                      Get <span className="text-primary font-bold text-lg">10% OFF</span> on
                      your first project with us. Limited time offer for new visitors.
                    </p>

                    <div className="mt-6 p-4 bg-light rounded-xl border border-dashed border-primary/30">
                      <p className="text-xs text-text-lighter uppercase tracking-wider mb-1">
                        Discount Code
                      </p>
                      <p className="text-xl font-black text-primary tracking-widest">
                        WELCOME10
                      </p>
                    </div>

                    <button
                      onClick={() => setStep("form")}
                      className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all text-sm w-full justify-center hover:shadow-lg hover:shadow-primary/25"
                    >
                      Claim My Discount
                      <ArrowUpRight size={16} />
                    </button>

                    <p className="text-text-lighter text-xs mt-4">
                      No spam. We respect your privacy.
                    </p>
                  </div>
                )}

                {step === "form" && (
                  <div>
                    <h3 className="text-xl font-bold text-dark text-center">
                      Claim Your 10% Discount
                    </h3>
                    <p className="text-text-light text-sm mt-2 text-center">
                      Enter your details and connect with us directly.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                      />

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all text-sm w-full justify-center hover:shadow-lg hover:shadow-primary/25"
                      >
                        Get My Discount
                        <ArrowUpRight size={16} />
                      </button>
                    </form>
                  </div>
                )}

                {step === "success" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Gift size={28} className="text-green-600" />
                    </div>

                    <h3 className="text-xl font-bold text-dark">
                      Discount Claimed!
                    </h3>
                    <p className="text-text-light mt-2 text-sm">
                      Use code <span className="font-bold text-primary">WELCOME10</span> when
                      you contact us. Connect with us now:
                    </p>

                    <div className="mt-6 space-y-3">
                      <button
                        onClick={openWhatsApp}
                        className="flex items-center gap-3 w-full p-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-colors"
                      >
                        <MessageCircle
                          size={20}
                          className="text-[#25D366]"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-dark text-sm">
                            Chat on WhatsApp
                          </p>
                          <p className="text-text-lighter text-xs">
                            Quick response within minutes
                          </p>
                        </div>
                      </button>

                      <a
                        href={`mailto:${siteConfig.email}?subject=10%25 Discount - New Project Inquiry&body=Hi, I claimed the WELCOME10 discount. I'd like to discuss a project.`}
                        className="flex items-center gap-3 w-full p-4 bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/10 transition-colors"
                      >
                        <Mail size={20} className="text-primary" />
                        <div className="text-left">
                          <p className="font-semibold text-dark text-sm">
                            Send an Email
                          </p>
                          <p className="text-text-lighter text-xs">
                            We&apos;ll reply within 24 hours
                          </p>
                        </div>
                      </a>
                    </div>

                    <button
                      onClick={handleClose}
                      className="mt-4 text-text-lighter text-xs hover:text-text-light transition-colors"
                    >
                      Maybe later
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
