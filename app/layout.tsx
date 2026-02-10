import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamza Hamal | Portfolio",
  description: "Professional portfolio of Hamza Hamal, Full Stack and React Native Engineer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg font-body text-text antialiased">{children}</body>
    </html>
  );
}
