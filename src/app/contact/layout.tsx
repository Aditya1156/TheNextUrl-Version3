import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TheNextUrl for a free project consultation. Custom websites, ERP systems, and mobile apps. Quick response within 24 hours.",
  openGraph: {
    title: "Contact Us | TheNextUrl",
    description:
      "Get in touch with TheNextUrl for a free project consultation. Quick response within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
