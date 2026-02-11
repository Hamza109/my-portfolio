import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://hamza-hamal.netlify.app";
const siteTitle = "Hamza Hamal | Software Engineer";
const siteDescription =
  "Portfolio of Hamza Hamal, a software engineer building scalable web and mobile products with Next.js, React Native, and modern backend systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Hamza Hamal",
  },
  description: siteDescription,
  applicationName: "Hamza Hamal Portfolio",
  authors: [{ name: "Hamza Hamal", url: siteUrl }],
  creator: "Hamza Hamal",
  publisher: "Hamza Hamal",
  category: "technology",
  keywords: [
    "Hamza Hamal",
    "Software Engineer",
    "React Native Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Portfolio",
    "Jammu",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Hamza Hamal Portfolio",
    images: [
      {
        url: "/hamza.png",
        width: 1200,
        height: 900,
        alt: "Hamza Hamal portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/hamza.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/hamza-logo.png", type: "image/png" }],
    apple: [{ url: "/hamza-logo.png", type: "image/png" }],
    shortcut: ["/hamza-logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hamza Hamal",
    jobTitle: "Software Engineer",
    url: siteUrl,
    image: `${siteUrl}/hamza.png`,
    email: "mailto:hamalhamza@gmail.com",
    telephone: "+91-9419114719",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jammu",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/hamza109",
      "https://linkedin.com/in/hamza-hamal",
    ],
  };

  return (
    <html lang="en">
      <body className='bg-bg font-body text-text antialiased'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
