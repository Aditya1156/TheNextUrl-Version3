"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Share2,
  BadgeCheck,
  Banknote,
  Gift,
  Globe,
  Server,
  Smartphone,
  ShoppingCart,
  HelpCircle,
  Percent,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import BlurText from "@/components/ui/BlurText";

const referralSteps = [
  {
    icon: Share2,
    title: "Refer a Client",
    description:
      "Share TheNextUrl with a business, school, or startup that needs digital solutions — websites, ERP, mobile apps, or e-commerce.",
  },
  {
    icon: BadgeCheck,
    title: "We Close the Deal",
    description:
      "Our team takes it from there — consultation, proposal, and project delivery. You don't need any technical knowledge.",
  },
  {
    icon: Banknote,
    title: "You Earn Rewards",
    description:
      "Once the project is confirmed, you receive a referral bonus. The bigger the project, the bigger the reward.",
  },
];

const commissionSlabs = [
  { range: "Below ₹5,000", rate: "10%", highlight: false },
  { range: "₹5,000 – ₹15,000", rate: "15%", highlight: false },
  { range: "₹15,000 – ₹35,000", rate: "20%", highlight: true },
  { range: "₹35,000 – ₹50,000", rate: "25%", highlight: false },
  { range: "Above ₹50,000", rate: "30%", highlight: false },
];

const whatYouCanRefer = [
  {
    icon: Globe,
    title: "Websites",
    description: "Business websites, landing pages, portfolios, or blogs.",
  },
  {
    icon: Server,
    title: "ERP Systems",
    description: "School management, attendance, fees, payroll automation.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online stores, booking platforms, payment integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Android & iOS apps for businesses and institutions.",
  },
];

const faqs = [
  {
    q: "Who can refer?",
    a: "Anyone — students, professionals, freelancers, or existing clients. No sign-up or registration needed.",
  },
  {
    q: "How much can I earn?",
    a: "You earn 10% on projects below ₹5,000, 15% on ₹5,000–₹15,000, 20% on ₹15,000–₹35,000, 25% on ₹35,000–₹50,000, and 30% on projects above ₹50,000.",
  },
  {
    q: "When do I get paid?",
    a: "Once the referred client confirms and the project kicks off, your reward is processed within 7 business days.",
  },
  {
    q: "Is there a limit on referrals?",
    a: "No limit! Refer as many clients as you like. Each confirmed project earns you a separate reward.",
  },
];

export default function ReferPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            <BlurText
              text="Refer & Earn with TheNextUrl"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl font-bold text-white justify-center"
            />
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Know a business that needs a website, ERP, or app? Refer them to us
            and earn rewards — no sign-up needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-all text-sm"
            >
              Refer via WhatsApp
              <ArrowUpRight size={14} />
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=Client Referral`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-all text-sm"
            >
              Refer via Email
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #111827 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              How It <span className="gradient-text-dark">Works</span>
            </h2>
            <BlurText
              text="Three simple steps to start earning."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {referralSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {index < referralSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                )}

                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-light rounded-2xl mb-6 group-hover:bg-dark group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <step.icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                <p className="text-text-light text-sm mt-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commission Plan ── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              Commission <span className="gradient-text">Plan</span>
            </h2>
            <BlurText
              text="The bigger the project, the more you earn."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-white/50 mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {commissionSlabs.map((slab, index) => (
              <motion.div
                key={slab.range}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl p-6 text-center border transition-all ${
                  slab.highlight
                    ? "bg-primary/10 border-primary/30 scale-105"
                    : "bg-white/5 border-white/10 hover:border-primary/20"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    slab.highlight ? "bg-primary" : "bg-white/10"
                  }`}
                >
                  <Percent
                    size={18}
                    className={slab.highlight ? "text-white" : "text-primary"}
                  />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {slab.rate}
                </p>
                <p className="text-white/50 text-xs mt-2">{slab.range}</p>
                {slab.highlight && (
                  <span className="inline-block mt-3 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-white/40 text-xs text-center mt-8"
          >
            Commission is calculated on the total confirmed project value.
            Paid within 7 business days of project kickoff.
          </motion.p>
        </div>
      </section>

      {/* ── What You Can Refer ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              What You Can{" "}
              <span className="gradient-text-dark">Refer</span>
            </h2>
            <BlurText
              text="Any business needing digital solutions is a potential referral."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouCanRefer.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon
                    size={22}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                <p className="text-text-light text-sm mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              Frequently <span className="gradient-text-dark">Asked</span>
            </h2>
            <BlurText
              text="Common questions about our referral program."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-light border border-border rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle
                    size={18}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 className="font-bold text-dark">{faq.q}</h4>
                    <p className="text-text-light text-sm mt-2">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift size={28} className="text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Start Earning Today
              </h2>
            </div>
            <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
              No sign-up needed. Just send us the client&apos;s details via
              WhatsApp or email and we&apos;ll handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-all text-sm hover:shadow-lg hover:shadow-primary/25"
              >
                Refer via WhatsApp
                <ArrowUpRight size={14} />
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=Client Referral`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-all text-sm"
              >
                Refer via Email
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
