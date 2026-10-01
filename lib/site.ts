import {
  BadgeDollarSign,
  BookOpenCheck,
  GraduationCap,
  HandCoins,
  Languages,
  PlaneTakeoff,
} from "lucide-react";

export const whatsappNumber = "917032931731";
export const whatsappDisplay = "+91 70329 31731";
export const instagramUrl = "https://www.instagram.com/fusion_abroad_service";
export const whatsappUrl =
  "https://wa.me/917032931731?text=Hi%20Fusion%20Abroad%20Services%2C%20I%20would%20like%20guidance%20for%20studying%20abroad.";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Destinations", href: "/destinations/" },
  { label: "Scholarships", href: "/scholarships/" },
  { label: "IELTS", href: "/ielts/" },
  { label: "Education Loans", href: "/education-loans/" },
  { label: "Contact", href: "/contact/" },
];

export const services = [
  {
    title: "Abroad Admissions",
    description:
      "Shortlisting, application planning and submission support built around your academic profile and goals.",
    icon: GraduationCap,
  },
  {
    title: "Student Visas",
    description:
      "Structured document guidance and application-readiness support for your chosen study destination.",
    icon: PlaneTakeoff,
  },
  {
    title: "Scholarships",
    description:
      "Help identifying relevant scholarship opportunities and preparing a stronger application package.",
    icon: BadgeDollarSign,
  },
  {
    title: "IELTS & Language Guidance",
    description:
      "A practical preparation path for language tests and university language requirements.",
    icon: Languages,
  },
  {
    title: "Application Support",
    description:
      "One coordinated journey from course discovery through documents, applications and next steps.",
    icon: BookOpenCheck,
  },
  {
    title: "Education Loans",
    description:
      "Guidance on preparing the information and documents commonly needed while exploring study finance.",
    icon: HandCoins,
  },
];

export const destinations = [
  {
    flag: "🇺🇸",
    name: "United States",
    kicker: "Broad academic choice",
    copy: "Explore universities, programs and intake options aligned to your study goals and profile.",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    kicker: "Focused study pathways",
    copy: "Compare courses and institutions with support from shortlist to application preparation.",
  },
  {
    flag: "🇪🇺",
    name: "Europe",
    kicker: "Multiple study markets",
    copy: "Explore selected European destinations, courses and study pathways based on your requirements.",
  },
  {
    flag: "🌍",
    name: "Other destinations",
    kicker: "Ask our counsellors",
    copy: "Have another country in mind? Tell us your preferred destination and we will discuss available support.",
  },
];

export const processSteps = [
  ["01", "Profile discovery", "We understand your course interest, qualification, budget, preferred country and intake."],
  ["02", "Shortlist & plan", "We organise suitable study options and explain the application path clearly."],
  ["03", "Prepare & apply", "Get structured support for documents, applications and related next steps."],
  ["04", "Move forward", "Stay supported through the remaining admission and study-abroad preparation journey."],
];
