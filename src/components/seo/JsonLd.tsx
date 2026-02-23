import { siteConfig, testimonials } from "@/lib/config";

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are delivered within 2-4 weeks depending on complexity. Simple landing pages take about 1-2 weeks, while complex ERP systems or e-commerce platforms may take 4-8 weeks.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer 24/7 support and annual maintenance contracts (AMC). Every project comes with 30 days of free post-launch support for bug fixes and minor adjustments.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with modern, production-grade technologies including Next.js, React, TypeScript, Node.js, and cloud platforms like AWS and Vercel.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in website redesigns that improve performance, SEO, and user experience while maintaining your existing content and brand identity.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer transparent, fixed-price packages starting from \u20B914,999. No hidden costs. Every project includes a detailed scope document.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes, while we're MSME registered in India, we welcome international projects and have worked with clients globally.",
  },
];

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.3173",
      longitude: "75.7139",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    foundingDate: String(siteConfig.foundedYear),
    priceRange: "$$",
    image: `${siteConfig.url}/brandlogo1.png`,
    logo: `${siteConfig.url}/brandlogo1.png`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Modern, fast, SEO-optimized websites built with Next.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP Systems",
            description:
              "Custom ERP solutions for schools, colleges, and businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce & Booking Platforms",
            description:
              "Online stores and booking systems with payment integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Cross-platform Android & iOS apps",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonials.length),
      bestRating: "5",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
