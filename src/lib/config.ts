export const siteConfig = {
  name: "TheNextUrl",
  tagline: "Digital Infrastructure for Institutions & Businesses",
  description:
    "Custom websites, ERP systems, and mobile apps for institutions and businesses. MSME registered digital agency based in Karnataka, India.",
  url: "https://thenexturl.in",
  phone: "+91 79757 51354",
  email: "contact.thenexturl@gmail.com",
  whatsapp: "https://wa.me/917975751354",
  location: "Karnataka, India",
  foundedYear: 2024,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Refer & Earn", href: "/refer" },
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

// ─── Careers Data ───────────────────────────────────────────────

export type Department = "Development" | "Design" | "Marketing & Sales" | "SEO & Performance" | "Management";
export type JobType = "Full-time" | "Part-time" | "Internship";

export interface JobRole {
  id: string;
  title: string;
  department: Department;
  type: JobType;
  location: string;
  requirements: string[];
  icon: string;
}

export interface CareerPerk {
  title: string;
  description: string;
  icon: string;
}

export interface HiringStep {
  step: string;
  title: string;
  description: string;
}

export const careerPerks: CareerPerk[] = [
  { title: "Remote Friendly", description: "Work from anywhere in India. Flexible hybrid options available.", icon: "Wifi" },
  { title: "Learning & Growth", description: "Access to courses, conferences, and mentorship programs.", icon: "GraduationCap" },
  { title: "Modern Tech Stack", description: "Work with Next.js, React, TypeScript, and cloud-native tools.", icon: "Code2" },
  { title: "Collaborative Culture", description: "Small team, big impact. Your ideas shape the product.", icon: "Users" },
  { title: "Competitive Pay", description: "Market-aligned compensation with performance bonuses.", icon: "IndianRupee" },
  { title: "Work-Life Balance", description: "Flexible hours, paid time off, and no crunch culture.", icon: "Heart" },
];

export const hiringSteps: HiringStep[] = [
  { step: "01", title: "Apply Online", description: "Submit your application through our careers form with your details and portfolio." },
  { step: "02", title: "Resume Review", description: "Our team reviews your application and shortlists candidates within 3-5 business days." },
  { step: "03", title: "Interview", description: "A technical and cultural fit interview — remote-friendly via Google Meet." },
  { step: "04", title: "Onboarding", description: "Welcome aboard! Get set up with tools, mentors, and your first project." },
];

export const jobRoles: JobRole[] = [
  // ── Development (core service: websites, ERP, e-commerce, mobile apps) ──
  { id: "frontend-dev", title: "Frontend Developer", department: "Development", type: "Full-time", location: "Remote / Karnataka", requirements: ["Proficiency in React, Next.js, and TypeScript", "Strong understanding of responsive design and Tailwind CSS", "Experience with Git and modern build tools", "1+ years of frontend development experience"], icon: "Monitor" },
  { id: "backend-dev", title: "Backend Developer", department: "Development", type: "Full-time", location: "Remote / Karnataka", requirements: ["Experience with Node.js, Express, or similar frameworks", "Database design with PostgreSQL or MongoDB", "REST API development and authentication systems", "Understanding of cloud services (AWS/GCP/Vercel)"], icon: "Server" },
  { id: "fullstack-dev", title: "Full Stack Developer", department: "Development", type: "Full-time", location: "Remote / Karnataka", requirements: ["Proficiency in React/Next.js and Node.js", "Experience building ERP systems or e-commerce platforms", "Understanding of CI/CD pipelines and deployment", "2+ years of full stack development experience"], icon: "Layers" },
  { id: "mobile-dev", title: "Mobile App Developer", department: "Development", type: "Full-time", location: "Remote / Karnataka", requirements: ["Experience with React Native or Flutter", "Published apps on Play Store or App Store", "Understanding of mobile UI/UX patterns", "Knowledge of REST APIs and state management"], icon: "Smartphone" },
  // ── Design (UI/UX for websites, apps, and digital products) ──
  { id: "ui-ux-designer", title: "UI/UX Designer", department: "Design", type: "Full-time", location: "Remote / Karnataka", requirements: ["Proficiency in Figma or Adobe XD", "Strong portfolio of web and mobile design work", "Understanding of design systems and accessibility", "Experience with user research and wireframing"], icon: "Palette" },
  // ── Marketing & Sales ──
  { id: "marketing-manager", title: "Digital Marketing Manager", department: "Marketing & Sales", type: "Full-time", location: "Remote / Karnataka", requirements: ["Experience in digital marketing and campaign management", "Knowledge of SEO, SEM, and social media marketing", "Strong analytical skills with Google Analytics", "2+ years of marketing experience"], icon: "Megaphone" },
  { id: "sales-executive", title: "Business Development Executive", department: "Marketing & Sales", type: "Full-time", location: "Karnataka, India", requirements: ["Experience in B2B sales or IT services client acquisition", "Excellent communication and negotiation skills", "Ability to generate leads and close deals", "Understanding of web development and digital products"], icon: "TrendingUp" },
  { id: "sales-manager", title: "Sales Manager", department: "Marketing & Sales", type: "Full-time", location: "Karnataka, India", requirements: ["3+ years of sales management experience in IT/digital services", "Proven track record of meeting and exceeding sales targets", "Strong team leadership and client relationship skills", "Strategic planning and revenue forecasting ability"], icon: "Briefcase" },
  { id: "tele-sales-executive", title: "Tele-Sales Executive", department: "Marketing & Sales", type: "Full-time", location: "Karnataka, India", requirements: ["Excellent verbal communication skills in English and Hindi/Kannada", "Experience in cold calling and lead generation", "Ability to explain digital products and services over phone", "Target-driven mindset with CRM proficiency"], icon: "PhoneCall" },
  { id: "client-relationship-manager", title: "Client Relationship Manager", department: "Marketing & Sales", type: "Full-time", location: "Karnataka, India", requirements: ["Experience in client servicing or account management", "Strong interpersonal and presentation skills", "Ability to upsell and cross-sell digital services", "Proficiency in CRM tools and client communication platforms"], icon: "Handshake" },
  { id: "tele-caller-female", title: "Tele-Caller (Female)", department: "Marketing & Sales", type: "Full-time", location: "Karnataka, India", requirements: ["Excellent communication skills in English, Hindi, or Kannada", "Experience in outbound/inbound calling or customer support", "Polite and professional phone etiquette", "Basic computer skills and familiarity with CRM tools"], icon: "Headphones" },
  { id: "key-account-executive", title: "Key Account Executive", department: "Marketing & Sales", type: "Full-time", location: "Karnataka, India", requirements: ["Experience managing key client accounts in IT or digital services", "Strong negotiation and relationship-building skills", "Ability to identify upsell opportunities and drive renewals", "Excellent communication and reporting skills"], icon: "UserCheck" },
  { id: "mba-intern", title: "MBA Intern", department: "Management", type: "Internship", location: "Remote / Karnataka", requirements: ["Currently pursuing or recently completed MBA degree", "Interest in digital services, marketing, or business strategy", "Strong analytical and communication skills", "Willingness to learn and take ownership of projects"], icon: "BookOpen" },
  // ── SEO & Performance (core offering: 90+ Lighthouse, SEO optimization) ──
  { id: "seo-specialist", title: "SEO Specialist", department: "SEO & Performance", type: "Full-time", location: "Remote / Karnataka", requirements: ["Proven experience with on-page and off-page SEO", "Proficiency with tools like Ahrefs, SEMrush, or Moz", "Technical SEO knowledge (Core Web Vitals, schema markup)", "Track record of improving organic search rankings"], icon: "Search" },
  // ── Management (project delivery for clients) ──
  { id: "project-manager", title: "Project Manager", department: "Management", type: "Full-time", location: "Remote / Karnataka", requirements: ["Experience managing software development projects", "Familiarity with Agile/Scrum methodologies", "Strong communication and client management skills", "Proficiency with project tools (Jira, Notion, or similar)"], icon: "ClipboardList" },
];

export const departments: Department[] = ["Development", "Design", "Marketing & Sales", "SEO & Performance", "Management"];

export const experienceLevels = ["Fresher", "1-2 years", "3-5 years", "5+ years"] as const;
