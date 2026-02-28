import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join TheNextUrl — a growing digital agency in Karnataka, India. Explore open positions in development, design, marketing, and management. Apply online today.",
  openGraph: {
    title: "Careers | TheNextUrl",
    description:
      "Explore career opportunities at TheNextUrl. Join our team of developers, designers, and digital strategists.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
