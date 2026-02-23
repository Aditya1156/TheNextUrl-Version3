export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-website-in-2025",
    title: "Why Every Business Needs a Website in 2025",
    excerpt:
      "In today's digital-first world, not having a website is like not having a business card. Learn why a professional website is essential for growth.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: `A website is no longer a luxury — it's a necessity. Whether you're a small local shop or a growing institution, your online presence determines how customers find, trust, and engage with you.

## The Numbers Speak

- 97% of consumers search online before making a purchase decision
- 75% of users judge a company's credibility based on their website design
- Businesses with websites grow 2x faster than those without

## What a Website Does for Your Business

### 1. 24/7 Visibility
Unlike a physical store, your website works around the clock. Customers can find your services, read reviews, and contact you at any time.

### 2. Credibility & Trust
A professional website signals that your business is legitimate and established. It's often the first impression a potential customer will have.

### 3. Cost-Effective Marketing
Compared to traditional advertising, a website with good SEO provides long-term, organic traffic at a fraction of the cost.

### 4. Data & Insights
With analytics, you understand your audience — where they come from, what they look for, and how to serve them better.

## Getting Started

You don't need a massive budget. A well-designed 5-page website can start from as little as ₹14,999. The key is to start — and start now.

At TheNextUrl, we build fast, SEO-optimized websites that are designed to convert visitors into customers. Every site we deliver scores 90+ on Google Lighthouse.`,
  },
  {
    slug: "what-is-erp-and-how-it-transforms-schools",
    title: "What is ERP and How It Transforms Schools",
    excerpt:
      "School ERP systems automate attendance, fees, payroll, and reporting. Discover how digitizing operations can save hours every day.",
    date: "2025-02-10",
    readTime: "6 min read",
    category: "ERP",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    content: `Enterprise Resource Planning (ERP) might sound like corporate jargon, but for schools and colleges, it's a game-changer. A School ERP is a unified digital system that manages every operational aspect — from attendance to fee collection to payroll.

## The Problem with Manual Systems

Most schools still rely on registers, spreadsheets, and paper-based processes. This leads to:
- Hours wasted on manual data entry
- Errors in fee calculations and attendance records
- No real-time visibility for parents or management
- Difficulty generating reports for audits

## What a School ERP Handles

### Attendance Management
Automated daily attendance tracking for students and staff. Parents get instant notifications when their child is marked absent.

### Fee Management
Online fee collection with payment gateway integration. Automatic reminders for pending fees. Generate receipts instantly.

### Payroll & HR
Staff salary processing, leave management, and tax calculations — all automated.

### Reports & Analytics
One-click generation of attendance reports, fee collection summaries, and academic performance analytics.

### Parent & Student Portals
Parents can check grades, attendance, and communicate with teachers through a dedicated portal or mobile app.

## The ROI is Immediate

Schools that implement ERP typically see:
- 60% reduction in administrative workload
- 40% faster fee collection
- Near-zero errors in record keeping
- Happier parents with transparent communication

## Ready to Digitize?

TheNextUrl specializes in custom ERP systems built for Indian schools and colleges. Our systems are designed for your specific workflows, not one-size-fits-all solutions.`,
  },
  {
    slug: "nextjs-vs-wordpress-which-is-right-for-you",
    title: "Next.js vs WordPress: Which Is Right for You?",
    excerpt:
      "Comparing the two most popular web platforms. Speed, SEO, security, and cost — we break down everything to help you decide.",
    date: "2025-03-05",
    readTime: "7 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    content: `When it comes to building a website, the platform you choose matters more than you think. Let's compare Next.js (what we use) with WordPress (the world's most popular CMS).

## Performance & Speed

### WordPress
- Average load time: 3-5 seconds
- Relies on PHP server rendering
- Plugins can bloat the site significantly
- Requires caching plugins for acceptable speed

### Next.js
- Average load time: under 1.5 seconds
- Server-side rendering and static generation built-in
- No plugin bloat — only what you need
- Automatic code splitting and image optimization

**Winner: Next.js** — significantly faster out of the box.

## SEO

### WordPress
- Good SEO with plugins like Yoast
- Can be slow which hurts Core Web Vitals
- URL structure can be messy without configuration

### Next.js
- Built-in SEO features (meta tags, sitemaps, robots.txt)
- Excellent Core Web Vitals scores
- Clean URL structure by default
- Server-side rendering helps search engines crawl content

**Winner: Next.js** — better performance metrics directly impact SEO rankings.

## Security

### WordPress
- Powers 43% of the web, making it the #1 target for hackers
- Requires constant plugin and core updates
- Vulnerable through third-party plugins

### Next.js
- Much smaller attack surface
- No database by default (unless you add one)
- Deployed as static files or serverless functions
- No admin panel to hack

**Winner: Next.js** — inherently more secure architecture.

## Cost

### WordPress
- Hosting: ₹3,000-10,000/year
- Premium theme: ₹3,000-8,000 one-time
- Plugins: ₹5,000-15,000/year
- Maintenance: ongoing

### Next.js
- Hosting on Vercel: Free to ₹1,500/month
- No theme/plugin costs
- Lower maintenance needs
- Higher initial development cost

**Winner: Depends** — WordPress is cheaper to start, Next.js is cheaper long-term.

## Our Recommendation

For businesses that care about speed, SEO, and security — **Next.js wins hands down**. The initial investment is higher, but the returns in performance, search rankings, and security make it worthwhile.

At TheNextUrl, we exclusively build with Next.js because we believe our clients deserve the best technology available.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
