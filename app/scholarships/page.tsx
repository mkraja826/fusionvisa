import type { Metadata } from "next";
import { BadgeDollarSign, FileCheck2, SearchCheck, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Scholarships",
  description: "Scholarship discovery and application support for students planning to study abroad.",
};

export default function ScholarshipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scholarship guidance"
        title="Find opportunities that are worth applying for."
        description="We help you organise scholarship discovery around your profile and prepare the information commonly needed for stronger applications."
        accent="Ask about scholarships"
      />
      <section className="section section-soft">
        <div className="shell">
          <SectionHeader
            eyebrow="Scholarship support"
            title="A more focused way to search and prepare."
            copy="Scholarship availability and criteria vary by institution, program, destination and intake. We help you make the search more structured."
          />
          <div className="three-grid">
            <article className="info-card"><SearchCheck /><h3>Opportunity discovery</h3><p>Identify scholarship possibilities connected to your intended course, institution or destination.</p></article>
            <article className="info-card"><FileCheck2 /><h3>Application readiness</h3><p>Organise academic information, supporting documents and application inputs in a clearer way.</p></article>
            <article className="info-card"><BadgeDollarSign /><h3>Funding picture</h3><p>View scholarships as one part of the overall study budget rather than as a stand-alone decision.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell scholarship-banner">
          <div className="mini-icon"><Sparkles size={19} /></div>
          <div>
            <span className="section-kicker">Good to know</span>
            <h2>Start early and keep your documents organised.</h2>
            <p>Deadlines, eligibility rules and required documents can vary. Always verify current details from the scholarship provider or institution.</p>
          </div>
        </div>
      </section>
    </>
  );
}
