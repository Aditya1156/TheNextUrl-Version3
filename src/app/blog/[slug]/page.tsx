import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts, getPostBySlug, formatDate } from "@/lib/blog";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | TheNextUrl Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Simple markdown-to-html for headings, paragraphs, and lists
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      const trimmed = block.trim();

      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-bold text-dark mt-10 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="text-lg font-bold text-dark mt-6 mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-2 text-text-light leading-relaxed"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        );
      }
      if (trimmed.startsWith("**Winner:")) {
        return (
          <p
            key={i}
            className="text-primary font-semibold my-4"
          >
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      }

      return (
        <p key={i} className="text-text-light leading-relaxed my-4">
          {trimmed}
        </p>
      );
    });
  };

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-white/50 text-sm mt-6">
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-custom">
            {renderContent(post.content)}
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 bg-dark rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white">
              Ready to Build Something Great?
            </h3>
            <p className="text-white/60 text-sm mt-2">
              Let&apos;s discuss your project and bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all text-sm mt-6"
            >
              Get A Free Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-6 bg-white rounded-2xl border border-border p-4 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="relative w-32 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="128px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-primary font-semibold">
                      {related.category}
                    </span>
                    <h3 className="text-sm font-bold text-dark mt-1 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-text-lighter mt-2 block">
                      {formatDate(related.date)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
