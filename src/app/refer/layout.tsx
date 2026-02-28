import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer & Earn",
  description:
    "Refer a business, school, or startup to TheNextUrl and earn rewards. No sign-up needed — just share and earn when the project is confirmed.",
  openGraph: {
    title: "Refer & Earn | TheNextUrl",
    description:
      "Know someone who needs a website, ERP, or app? Refer them to TheNextUrl and earn a referral bonus.",
  },
};

export default function ReferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
