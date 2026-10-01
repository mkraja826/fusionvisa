import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fusion Abroad Services",
    short_name: "Fusion Abroad",
    description:
      "Study abroad guidance for admissions, student visas, scholarships, IELTS, applications and education finance.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7fb",
    theme_color: "#10183a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
