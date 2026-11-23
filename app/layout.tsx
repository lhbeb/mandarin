import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mandarin Gourmet | Chinese Restaurant in San Jose, CA",
  description:
    "Authentic Chinese cuisine at Mandarin Gourmet on Santa Teresa Blvd, San Jose.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
