import type { Metadata } from "next";
import { BookOpen, Headphones, Languages, MessageSquareText } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "IELTS & Language Guidance",
  description: "IELTS and language guidance for students preparing to study abroad.",
};

export default function IeltsPage() {
  return (
    <>
      <PageHero
        eyebrow="IELTS & language guidance"
        title="Prepare with a plan, not random practice."
        description="We help students understand the language-preparation journey and organise practice around the skills they need to improve."
        accent="Discuss language prep"
      />
      <section className="section section-soft">
        <div className="shell">
          <SectionHeader
            eyebrow="Build the four skills"
            title="A balanced preparation approach."
            copy="Your exact requirements depend on the university, course and destination. We help you organise your preparation and next steps."
          />
          <div className="four-grid">
            <article className="skill-card"><Headphones /><span>01</span><h3>Listening</h3><p>Build concentration, note-taking and question awareness through structured practice.</p></article>
            <article className="skill-card"><BookOpen /><span>02</span><h3>Reading</h3><p>Improve pace, comprehension and the way you approach different question formats.</p></article>
            <article className="skill-card"><MessageSquareText /><span>03</span><h3>Writing</h3><p>Work on clarity, structure, task response and consistent written communication.</p></article>
            <article className="skill-card"><Languages /><span>04</span><h3>Speaking</h3><p>Develop confidence, fluency and a more natural response structure through practice.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
