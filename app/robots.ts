import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://hamza-hamal.netlify.app/sitemap.xml",
    host: "https://hamza-hamal.netlify.app",
  };
}
