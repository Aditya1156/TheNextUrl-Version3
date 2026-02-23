"use client";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "AWS",
  "Vercel",
  "PostgreSQL",
  "MongoDB",
  "Stripe",
  "Firebase",
  "Flutter",
];

const marqueeItems = [...technologies, ...technologies];

export default function TrustedBy() {
  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-text-lighter text-xs font-semibold uppercase tracking-[0.2em]">
          Technologies We Work With
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee-slow">
          {marqueeItems.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center mx-8 shrink-0"
            >
              <div className="px-6 py-3 border border-border rounded-xl hover:border-dark/20 hover:shadow-sm transition-all duration-300 group cursor-default">
                <span className="text-lg font-bold text-dark/25 group-hover:text-dark/60 transition-colors whitespace-nowrap">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
