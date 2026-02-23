import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon192() {
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
          borderRadius: "38px",
        }}
      >
        <span style={{ color: "white", fontSize: "128px", fontWeight: 900 }}>
          N
        </span>
      </div>
    ),
    { ...size }
  );
}
