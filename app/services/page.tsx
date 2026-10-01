import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { processSteps, services, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Admissions, student visa, scholarship, IELTS, application and education loan guidance from Fusion Abroad Services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="End-to-end support"
        title="The right support at every important stage."
        description="From choosing a course to preparing applications and planning the next step, our services are designed to work together."
      />
      <section className="section section-soft">
        <div className="shell">
          <div className="service-grid service-grid-large">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="service-card service-card-detail" key={service.title}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={22} /></span>
                    <span className="service-index">0{index + 1}</span>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="mini-list">
                    <li><CheckCircle2 size={16} /> Clear next-step guidance</li>
                    <li><CheckCircle2 size={16} /> Profile-aware planning</li>
                    <li><CheckCircle2 size={16} /> Coordinated support</li>
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <SectionHeader eyebrow="Our process" title="A simple four-stage journey." align="center" />
          <div className="step-grid">
            {processSteps.map(([number, title, copy]) => (
              <article className="step-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Discuss your requirements <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
