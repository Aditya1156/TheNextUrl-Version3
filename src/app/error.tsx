"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-black text-primary mb-4">Oops!</h1>
        <h2 className="text-white text-xl font-bold mb-3">
          Something went wrong
        </h2>
        <p className="text-white/50 text-sm mb-10">
          An unexpected error occurred. Please try again or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all text-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-white/20 hover:border-primary text-white/80 hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
