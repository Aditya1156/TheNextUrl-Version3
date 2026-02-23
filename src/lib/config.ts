export const siteConfig = {
  name: "TheNextUrl",
  tagline: "Digital Infrastructure for Institutions & Businesses",
  description:
    "Custom websites, ERP systems, and mobile apps for institutions and businesses. MSME registered digital agency based in Karnataka, India.",
  url: "https://thenexturl.in",
  phone: "+91 79757 51354",
  email: "contact@thenexturl.in",
  whatsapp: "https://wa.me/917975751354",
  location: "Karnataka, India",
  foundedYear: 2024,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const solutions = [
  {
    number: "01",
    title: "Modern Web Architecture",
    description: "Fast. SEO-optimized. Mobile-first.",
    href: "/solutions#web",
  },
  {
    number: "02",
    title: "ERP & Management Systems",
    description: "Attendance. Fees. Payroll. Automation.",
    href: "/solutions#erp",
  },
  {
    number: "03",
    title: "E-Commerce & Booking Platforms",
    description: "Sell online. Take bookings. Manage operations.",
    href: "/solutions#ecommerce",
  },
  {
    number: "04",
    title: "Cross-Platform Mobile Apps",
    description: "Android & iOS from a single codebase.",
    href: "/solutions#mobile",
  },
] as const;

export const industries = [
  { name: "Schools & Colleges", icon: "GraduationCap" },
  { name: "Coaching Institutes", icon: "BookOpen" },
  { name: "Local Businesses", icon: "Store" },
  { name: "Startups", icon: "Rocket" },
  { name: "Restaurants & Hospitality", icon: "UtensilsCrossed" },
  { name: "Enterprises", icon: "Building2" },
] as const;

export const stats = [
  { value: "9+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "A+", label: "Security Grade" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business, goals, and requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "Wireframes and prototypes tailored to your brand.",
  },
  {
    step: "03",
    title: "Build",
    description: "Production-grade code with modern technologies.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy, test, and go live with ongoing support.",
  },
] as const;

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Principal, Sunrise Academy",
    content:
      "TheNextUrl built our school ERP from scratch. Attendance, fees, reports — everything automated. Our admin workload dropped by 60%.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, FreshCart Online",
    content:
      "Our e-commerce platform went live in 3 weeks. Fast, mobile-friendly, and the SEO results have been incredible. Sales up 40% in the first month.",
    rating: 5,
  },
  {
    name: "Vikram Patil",
    role: "Owner, Spice Kitchen Restaurant",
    content:
      "The booking system they built handles 200+ reservations daily without a glitch. Professional team, transparent pricing, great support.",
    rating: 5,
  },
] as const;

export const whyUsFeatures = [
  {
    title: "Modern Stack",
    description: "Next.js, React, TypeScript, Cloud",
    icon: "Code2",
  },
  {
    title: "SEO & Performance First",
    description: "90+ Lighthouse scores guaranteed",
    icon: "Gauge",
  },
  {
    title: "Secure by Default",
    description: "Production-grade security practices",
    icon: "ShieldCheck",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs, clear deliverables",
    icon: "IndianRupee",
  },
  {
    title: "Long-Term Support",
    description: "Ongoing maintenance and AMC plans",
    icon: "HeartHandshake",
  },
  {
    title: "MSME Registered",
    description: "Government of India certified agency",
    icon: "BadgeCheck",
  },
] as const;
