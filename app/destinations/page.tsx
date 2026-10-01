import type { Metadata } from "next";
import { ArrowRight, Compass, GraduationCap, ListChecks } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { destinations, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Study Destinations",
  description: "Explore study abroad guidance for the USA, UK, Europe and other destinations with Fusion Abroad Services.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Study destinations"
        title="Choose a destination around your course, profile and priorities."
        description="Our primary focus includes the USA, UK and Europe. Tell us what you want to study and we will help structure the destination discussion."
      />
      <section className="section section-soft">
        <div className="shell">
          <div className="destination-grid destination-grid-page">
            {destinations.map((item, index) => (
              <article className="destination-card destination-card-large" key={item.name}>
                <div className="destination-card-head">
                  <div className="destination-flag">{item.flag}</div>
                  <span className="destination-number">0{index + 1}</span>
                </div>
                <span>{item.kicker}</span>
                <h2>{item.name}</h2>
                <p>{item.copy}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Ask about {item.name} <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <SectionHeader
            eyebrow="How to decide"
            title="Start with the variables that actually matter."
            copy="A destination should be discussed in the context of your course, academic background, budget, timing and longer-term study goals."
          />
          <div className="three-grid">
            <article className="info-card"><GraduationCap /><h3>Academic fit</h3><p>Course relevance, entry expectations and the kind of academic environment you are looking for.</p></article>
            <article className="info-card"><Compass /><h3>Personal fit</h3><p>Location preferences, study experience, timing and the practical realities of moving abroad.</p></article>
            <article className="info-card"><ListChecks /><h3>Application fit</h3><p>What documents and preparation may be needed for the institutions and destination you choose.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
