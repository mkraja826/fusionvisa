import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Fusion Abroad Services | Study Abroad Guidance",
    template: "%s | Fusion Abroad Services",
  },
  description:
    "Study abroad guidance for admissions, student visas, scholarships, IELTS and language preparation, application support and education loans.",
  keywords: [
    "study abroad",
    "student visa",
    "overseas education",
    "scholarships",
    "IELTS",
    "education loan",
    "USA admissions",
    "UK admissions",
    "Europe study",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10183a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
