import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Main Tennis Dulu",
    short_name: "Main Tennis",
    description: "Komunitas tennis untuk semua.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6ef",
    theme_color: "#10301f",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}