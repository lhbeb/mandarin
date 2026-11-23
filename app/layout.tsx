import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mandarin Gourmet | Operated by RIFTED CARS LLC",
  description:
    "Mandarin Gourmet is the restaurant brand at 5560 Santa Teresa Blvd, San Jose, CA 95123, operated by RIFTED CARS LLC at its Sheridan, WY address.",
  applicationName: "Mandarin Gourmet",
  authors: [{ name: "RIFTED CARS LLC" }],
  creator: "RIFTED CARS LLC",
  publisher: "RIFTED CARS LLC",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  keywords: ["Mandarin Gourmet", "RIFTED CARS LLC", "Linda Hughes", "San Jose California"],
  other: {
    operator: "RIFTED CARS LLC",
    founder: "Linda Hughes",
    restaurantAddress: "5560 Santa Teresa Blvd, San Jose, CA 95123, United States of America",
    operatorAddress: "30 North Gould Street, Sheridan, WY 82801, United States of America",
    businessPhone: "+1-251-283-4593",
    businessEmail: "info@riftedcars.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
