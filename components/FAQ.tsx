import { HelpCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "Which countries does Fusion Abroad Services support?",
    a: "Our primary focus is the USA, UK and European study destinations. If you have another country in mind, share it with us and we can discuss the support available for your plan.",
  },
  {
    q: "What details should I share for counselling?",
    a: "Start with your course interest, preferred country, current qualification, approximate budget and preferred intake. These details help make the first conversation more useful.",
  },
  {
    q: "Can you help with scholarships?",
    a: "Yes. We can help you organise scholarship discovery around your course, institution, destination and profile, and prepare the information commonly needed for applications.",
  },
  {
    q: "Do you provide IELTS and language guidance?",
    a: "Yes. Language guidance is part of our services. Exact test or score requirements should always be checked against the current requirements of your chosen university, course and destination.",
  },
  {
    q: "Can you assist with education loans?",
    a: "Yes. We help students organise the information and documents commonly needed when exploring study-finance options. Loan eligibility, pricing and approval are decided by the lender.",
  },
  {
    q: "Do you guarantee admission, a scholarship or a visa?",
    a: "No. Admission, scholarship, visa and loan decisions are made by the relevant universities, scholarship providers, immigration authorities and lenders. Our role is to help you prepare and navigate the process.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="shell faq-layout">
        <div>
          <span className="eyebrow eyebrow-light"><HelpCircle size={14} /> Before you get started</span>
          <SectionHeader
            eyebrow="Common questions"
            title="Clear answers before the first conversation."
            copy="A few practical things students usually want to know before sharing their profile."
          />
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{item.q}</strong>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
