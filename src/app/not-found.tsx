import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Brand Logo */}
        <Image
          src="/brandlogo1.png"
          alt="TheNextUrl"
          width={160}
          height={45}
          className="h-10 w-auto brightness-0 invert mx-auto mb-12"
        />

        {/* 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none gradient-text mb-2">
          404
        </h1>

        {/* Message */}
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
          Page Not Found
        </h2>
        <p className="text-white/50 text-sm mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 hover:border-primary text-white/80 hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
