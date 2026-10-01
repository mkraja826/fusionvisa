export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Fusion Abroad Services",
    description:
      "Study abroad guidance for admissions, student visas, scholarships, IELTS and language preparation, application support and education loans.",
    telephone: "+91 70329 31731",
    sameAs: ["https://www.instagram.com/fusion_abroad_service"],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Place", name: "Europe" },
    ],
    serviceType: [
      "Study abroad admissions guidance",
      "Student visa guidance",
      "Scholarship guidance",
      "IELTS and language guidance",
      "Education loan guidance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
