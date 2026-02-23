import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/solutions#web" },
  { label: "ERP Systems", href: "/solutions#erp" },
  { label: "E-Commerce", href: "/solutions#ecommerce" },
  { label: "Mobile Apps", href: "/solutions#mobile" },
];

export default function Footer() {
  return (
    <>
      {/* Newsletter Bar */}
      <section className="bg-dark-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Want To Get Any Support?
            <br className="hidden sm:block" />
            <span className="text-white/80 font-normal">
              {" "}We&apos;re Ready For You.
            </span>
          </h3>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-dark text-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-lg">N</span>
                </div>
                <span className="text-xl font-bold text-white">
                  {siteConfig.name}
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                {siteConfig.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                MSME Registered
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{siteConfig.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
              Reserved.
            </p>
            <p className="text-xs text-white/50">
              Built with Next.js &middot; MSME Registered
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
