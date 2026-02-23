"use client";

const techs = [
  { name: "Next.js", icon: "N" },
  { name: "React", icon: "R" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "TW" },
  { name: "Node.js", icon: "NJ" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "MongoDB", icon: "MG" },
  { name: "React Native", icon: "RN" },
  { name: "Vercel", icon: "V" },
  { name: "Firebase", icon: "FB" },
  { name: "AWS", icon: "AW" },
  { name: "Figma", icon: "FG" },
];

// Double the array for seamless infinite scroll
const marqueeItems = [...techs, ...techs];

export default function TechStack() {
  return (
    <section className="py-12 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-text-lighter text-sm font-medium">
          Built with industry-leading technologies
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 mx-8 shrink-0"
            >
              <div className="w-10 h-10 bg-light rounded-lg flex items-center justify-center border border-border">
                <span className="text-xs font-bold text-dark">{tech.icon}</span>
              </div>
              <span className="text-sm font-semibold text-text-light whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
