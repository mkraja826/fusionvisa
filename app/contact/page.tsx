import type { Metadata } from "next";
import { Instagram, MessageCircle, PhoneCall } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { instagramUrl, whatsappDisplay, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fusion Abroad Services for study abroad counselling and application guidance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free counselling"
        title="Tell us where you want your education to take you."
        description="Share a few details about your study plan. The form below prepares a WhatsApp message so you can continue the conversation directly with our team."
        accent="Chat now"
      />
      <section className="section section-soft">
        <div className="shell contact-layout">
          <div className="contact-panel">
            <span className="section-kicker">Contact Fusion</span>
            <h2>One conversation can make the next step clearer.</h2>
            <p>Send your course interest, preferred country, qualification, approximate budget and preferred intake.</p>
            <div className="contact-methods">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <span><MessageCircle /></span><div><small>WhatsApp</small><strong>{whatsappDisplay}</strong></div>
              </a>
              <a href="tel:+917032931731">
                <span><PhoneCall /></span><div><small>Call</small><strong>{whatsappDisplay}</strong></div>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <span><Instagram /></span><div><small>Instagram</small><strong>@fusion_abroad_service</strong></div>
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
