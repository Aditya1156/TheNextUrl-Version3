import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web development, ERP systems, and mobile apps. Starting from ₹14,999. No hidden costs. MSME registered digital agency.",
  openGraph: {
    title: "Pricing | TheNextUrl",
    description:
      "Transparent pricing starting from ₹14,999. No hidden costs. MSME registered digital agency.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
