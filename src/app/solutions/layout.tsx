import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore our digital solutions — modern web development, ERP systems, e-commerce platforms, and cross-platform mobile apps. Built with Next.js and React.",
  openGraph: {
    title: "Solutions | TheNextUrl",
    description:
      "Modern web development, ERP systems, e-commerce platforms, and cross-platform mobile apps.",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
