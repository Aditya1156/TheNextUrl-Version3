"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/lib/config";
import { emailjsConfig } from "@/lib/emailjs";
import { images } from "@/lib/images";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    // Send via EmailJS
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: name,
          from_email: email,
          phone: phone,
          service: service,
          message: message || "No additional message.",
        },
        emailjsConfig.publicKey
      );
      setStatus("sent");
    } catch {
      // If EmailJS fails, fall back to WhatsApp
      const whatsappMessage = `Hi, I'm ${name} (${email}, ${phone}). I'm interested in ${service}. ${message}`;
      window.open(
        `${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
      setStatus("sent");
    }
  };

  return (
    <>
      {/* Hero with background image */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <Image
          src={images.contact}
          alt="Contact us"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Need assistance?
            <br />
            <span className="text-white/80">please fill the form</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            So, make the decision to move forward. Let&apos;s discuss your
            project and bring it into focus.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info + Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-dark mb-8">
                Get in touch with us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-text-light text-sm hover:text-primary transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-text-light text-sm hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Location</h3>
                    <p className="text-text-light text-sm">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mt-8">
                <Image
                  src={images.business}
                  alt="Our team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              {/* Trust badges */}
              <div className="mt-8 p-6 bg-light rounded-2xl">
                <h4 className="font-semibold text-dark mb-4 text-sm">
                  Why reach out to us?
                </h4>
                {[
                  "Free project consultation",
                  "No obligation quote",
                  "Quick response within 24 hours",
                  "MSME Registered Agency",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-text-light text-sm py-1.5"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-primary shrink-0"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {status === "sent" ? (
                <div className="bg-light rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">
                    Message Sent!
                  </h3>
                  <p className="text-text-light mt-2">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <p className="text-text-lighter text-sm mt-4">
                    You can also reach us on{" "}
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      WhatsApp
                    </a>{" "}
                    or{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Email
                    </a>{" "}
                    for faster response.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-2">
                    Please Fill In The Information Below
                  </h3>
                  <p className="text-text-lighter text-xs mb-6">
                    Your message will be sent directly to our team via email.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name*"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone*"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                      <select
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-light border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors text-text-light"
                      >
                        <option value="">Select Service*</option>
                        <option value="Web Development">
                          Web Development
                        </option>
                        <option value="ERP System">ERP System</option>
                        <option value="E-Commerce">
                          E-Commerce Platform
                        </option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Booking Platform">
                          Booking Platform
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight size={16} />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-red-500 text-xs text-center">
                        Something went wrong. Please try again or contact us via WhatsApp.
                      </p>
                    )}
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
