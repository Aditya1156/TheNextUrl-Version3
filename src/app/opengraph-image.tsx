import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TheNextUrl — Digital Infrastructure for Institutions & Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Blue accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(96, 165, 250, 0.1)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo "N" icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            boxShadow: "0 20px 60px rgba(37, 99, 235, 0.3)",
          }}
        >
          <span style={{ color: "white", fontSize: "42px", fontWeight: 900 }}>
            N
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          TheNextUrl
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
            marginBottom: "40px",
          }}
        >
          Digital Infrastructure
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#2563EB",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Description */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "600px",
            textAlign: "center" as const,
            lineHeight: "1.6",
          }}
        >
          Custom websites, ERP systems, and mobile apps for institutions &
          businesses
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #2563EB, #60a5fa, #2563EB)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
