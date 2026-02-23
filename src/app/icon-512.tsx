import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
          borderRadius: "102px",
        }}
      >
        <span style={{ color: "white", fontSize: "340px", fontWeight: 900 }}>
          N
        </span>
      </div>
    ),
    { ...size }
  );
}
