import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TheNextUrl — Digital Infrastructure",
    short_name: "TheNextUrl",
    description:
      "Custom websites, ERP systems, and mobile apps for institutions and businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon-192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
