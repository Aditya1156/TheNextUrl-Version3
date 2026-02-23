import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TheNextUrl | Digital Infrastructure for Institutions & Businesses",
    template: "%s | TheNextUrl",
  },
  description:
    "Custom websites, ERP systems, booking platforms, and mobile apps built with precision. MSME registered digital agency serving clients across India.",
  keywords: [
    "web development",
    "ERP systems",
    "school ERP",
    "website development Karnataka",
    "mobile app development",
    "e-commerce development",
    "digital agency India",
    "Next.js development",
    "booking platform",
    "admin dashboard",
    "MSME registered",
  ],
  authors: [{ name: "TheNextUrl" }],
  creator: "TheNextUrl",
  metadataBase: new URL("https://thenexturl.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thenexturl.in",
    siteName: "TheNextUrl",
    title: "TheNextUrl | Digital Infrastructure for Institutions & Businesses",
    description:
      "Custom websites, ERP systems, and mobile apps for institutions and businesses. MSME registered digital agency.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheNextUrl | Digital Infrastructure for Institutions & Businesses",
    description:
      "Custom websites, ERP systems, and mobile apps for institutions and businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
