import type { Metadata } from "next";
import { Banknote, FileText, Landmark, WalletCards } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Education Loans",
  description: "Education loan guidance as part of your study abroad planning journey.",
};

export default function EducationLoansPage() {
  return (
    <>
      <PageHero
        eyebrow="Education finance"
        title="Plan the funding side of studying abroad with more clarity."
        description="We help you organise the information and documents commonly needed while exploring education-finance options for your study plan."
        accent="Discuss education finance"
      />
      <section className="section section-soft">
        <div className="shell">
          <SectionHeader
            eyebrow="Prepare before you compare"
            title="Bring your study plan and funding plan together."
            copy="Loan products, eligibility, interest, collateral requirements and approval decisions are determined by lenders. We help you prepare for the conversation."
          />
          <div className="four-grid">
            <article className="skill-card"><WalletCards /><span>01</span><h3>Budget picture</h3><p>Organise estimated tuition and related study costs into a clearer funding requirement.</p></article>
            <article className="skill-card"><FileText /><span>02</span><h3>Document prep</h3><p>Prepare the academic, admission and financial information commonly requested during loan discussions.</p></article>
            <article className="skill-card"><Landmark /><span>03</span><h3>Lender discussion</h3><p>Understand what questions to ask when comparing available education-finance options.</p></article>
            <article className="skill-card"><Banknote /><span>04</span><h3>Decision support</h3><p>Review the financing step in the context of your broader study-abroad budget.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
