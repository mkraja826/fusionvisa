import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StructuredData from "@/components/StructuredData";
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
  openGraph: {
    type: "website",
    siteName: "Fusion Abroad Services",
    title: "Fusion Abroad Services | Study Abroad Guidance",
    description:
      "Admissions, student visa, scholarship, IELTS, application and education-finance guidance for students planning to study abroad.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Fusion Abroad Services | Study Abroad Guidance",
    description:
      "Study abroad guidance for admissions, visas, scholarships, IELTS, applications and education finance.",
  },
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
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <StructuredData />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
