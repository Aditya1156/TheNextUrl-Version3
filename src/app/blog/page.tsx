import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts, formatDate } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Insights &{" "}
            <span className="text-white/80">Resources</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Expert advice on web development, ERP systems, and growing your
            digital presence.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-text-lighter text-xs mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span className="w-1 h-1 bg-text-lighter rounded-full" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-text-light text-sm mt-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    Read More
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
