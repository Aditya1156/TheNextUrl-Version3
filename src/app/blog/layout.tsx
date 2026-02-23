import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, ERP systems, digital marketing, and technology trends. Expert advice from TheNextUrl's development team.",
  openGraph: {
    title: "Blog | TheNextUrl",
    description:
      "Insights on web development, ERP systems, and technology trends.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
