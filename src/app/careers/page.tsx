"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  ChevronRight,
  Wifi,
  GraduationCap,
  Code2,
  Users,
  IndianRupee,
  Heart,
  Send,
  FileSearch,
  MessageSquare,
  Rocket,
  Monitor,
  Server,
  Layers,
  Smartphone,
  Palette,
  Megaphone,
  TrendingUp,
  Briefcase,
  PhoneCall,
  Handshake,
  Headphones,
  BookOpen,
  UserCheck,
  Search,
  ClipboardList,
} from "lucide-react";
import { emailjsConfig } from "@/lib/emailjs";
import { siteConfig, careerPerks, hiringSteps, jobRoles, experienceLevels } from "@/lib/config";
import BlurText from "@/components/ui/BlurText";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wifi, GraduationCap, Code2, Users, IndianRupee, Heart,
  Monitor, Server, Layers, Smartphone, Palette, Megaphone, TrendingUp, Briefcase, PhoneCall, Handshake, Headphones, BookOpen, UserCheck, Search, ClipboardList,
};

const hiringIcons = [Send, FileSearch, MessageSquare, Rocket];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,15}$/;
const URL_RE = /^https?:\/\/.+/;

function sanitize(str: string): string {
  return str.replace(/[<>"'`&;{}]/g, "").trim();
}

export default function CareersPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    emailjs.init({ publicKey: emailjsConfig.publicKey });
  }, []);

  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "instant" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    const name = sanitize((data.get("from_name") as string) || "");
    const email = sanitize((data.get("from_email") as string) || "");
    const phone = sanitize((data.get("phone") as string) || "");
    const position = sanitize((data.get("position") as string) || "");
    const portfolio = sanitize((data.get("portfolio") as string) || "");
    const experience = sanitize((data.get("experience") as string) || "");
    const message = sanitize((data.get("message") as string) || "");

    if (!EMAIL_RE.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!PHONE_RE.test(phone)) {
      setErrorMsg("Please enter a valid phone number.");
      setStatus("error");
      return;
    }
    if (portfolio && !URL_RE.test(portfolio)) {
      setErrorMsg("Please enter a valid URL starting with http:// or https://");
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: name,
        from_email: email,
        phone,
        service: `Career Application — ${position}`,
        message: [
          `Position: ${position}`,
          `Experience: ${experience}`,
          portfolio ? `Portfolio/Resume: ${portfolio}` : "",
          `\nCover Letter:\n${message || "No additional message."}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      setStatus("sent");
    } catch (error: unknown) {
      const err = error as { text?: string; message?: string };
      setErrorMsg(err.text || err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            <BlurText
              text="Join Our Team & Build the Future"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl font-bold text-white justify-center"
            />
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            We&apos;re building the next generation of digital infrastructure for
            institutions and businesses across India. Come be a part of it.
          </p>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #111827 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              Perks & <span className="gradient-text-dark">Benefits</span>
            </h2>
            <BlurText
              text="We invest in our people as much as our products."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPerks.map((perk, index) => {
              const Icon = iconMap[perk.icon];
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-light border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-dark">{perk.title}</h3>
                  <p className="text-text-light text-sm mt-2">
                    {perk.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              How to <span className="gradient-text-dark">Join Us</span>
            </h2>
            <BlurText
              text="Four simple steps from application to onboarding."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringSteps.map((step, index) => {
              const Icon = hiringIcons[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative text-center group"
                >
                  {index < hiringSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                  )}

                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 group-hover:bg-dark group-hover:scale-110 transition-all duration-300 shadow-sm">
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

      {/* ── Open Positions ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              Find Your <span className="gradient-text-dark">Role</span>
            </h2>
            <BlurText
              text="Explore current openings across our teams."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-2xl mx-auto justify-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((role, index) => {
              const Icon = iconMap[role.icon];
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-light border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      {Icon && (
                        <Icon size={20} className="text-primary" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">{role.title}</h4>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          {role.type}
                        </span>
                        <span className="text-xs text-text-lighter">
                          {role.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {role.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-text-light"
                      >
                        <ChevronRight
                          size={14}
                          className="text-primary shrink-0 mt-0.5"
                        />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center justify-center gap-2 bg-dark hover:bg-primary text-white px-5 py-2.5 rounded-lg font-semibold transition-all text-sm w-full"
                  >
                    Apply Now
                    <ArrowUpRight size={14} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="application-form" className="py-24 bg-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-4">
              Submit Your{" "}
              <span className="gradient-text-dark">Application</span>
            </h2>
            <BlurText
              text="Fill in the form below and we will get back to you within 3-5 business days."
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-text-light mt-4 max-w-xl mx-auto justify-center"
            />
          </div>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-dark">
                Application Submitted!
              </h3>
              <p className="text-text-light mt-2">
                Thank you for your interest in joining TheNextUrl. We&apos;ll
                review your application and get back to you within 3-5 business
                days.
              </p>
              <p className="text-text-lighter text-sm mt-4">
                You can also reach us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary font-medium hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Full Name*"
                    required
                    maxLength={100}
                    aria-label="Full Name"
                    className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email*"
                    required
                    maxLength={100}
                    aria-label="Email Address"
                    className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    maxLength={15}
                    aria-label="Phone Number"
                    className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <select
                    name="position"
                    required
                    aria-label="Select Position"
                    className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-text-light"
                  >
                    <option value="">Select Position*</option>
                    {jobRoles.map((role) => (
                      <option key={role.id} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="Portfolio / Resume Link (URL)"
                    maxLength={200}
                    aria-label="Portfolio or Resume URL"
                    className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <select
                    name="experience"
                    required
                    aria-label="Experience Level"
                    className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-text-light"
                  >
                    <option value="">Experience Level*</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Cover letter or anything you'd like us to know..."
                  rows={5}
                  maxLength={1500}
                  aria-label="Cover Letter"
                  className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-all text-sm w-full justify-center disabled:opacity-60 hover:shadow-lg hover:shadow-primary/25"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <div className="text-center">
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again.
                    </p>
                    {errorMsg && (
                      <p className="text-red-400 text-xs mt-1">{errorMsg}</p>
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
