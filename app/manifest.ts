import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hamza Hamal Portfolio",
    short_name: "Hamza Portfolio",
    description:
      "Professional portfolio of Hamza Hamal, software engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#030712",
    icons: [
      {
        src: "/hamza-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/hamza-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
