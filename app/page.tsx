import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Compass,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import SectionHeader from "@/components/SectionHeader";
import { destinations, processSteps, services, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid-lines" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow"><Sparkles size={14} /> Your study-abroad journey, made clearer</span>
            <h1>
              Build your path to a <span>global education.</span>
            </h1>
            <p>
              Fusion Abroad Services helps students navigate admissions, visas, scholarships, language preparation,
              applications and education finance with one coordinated plan.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Free counselling
              </a>
              <Link className="btn btn-ghost btn-on-dark" href="/destinations/">
                Explore destinations <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-trust-row">
              <span><Check size={15} /> Profile-first guidance</span>
              <span><Check size={15} /> Mobile-friendly support</span>
              <span><Check size={15} /> USA · UK · Europe + more</span>
            </div>
          </div>
          <div className="hero-console">
            <div className="console-top">
              <span className="status-dot" />
              <span>Student journey planner</span>
              <span className="console-pill">01 — 04</span>
            </div>
            <div className="console-main">
              <div className="journey-orbit">
                <div className="orbit-ring orbit-ring-one" />
                <div className="orbit-ring orbit-ring-two" />
                <div className="orbit-core"><Compass size={34} /></div>
                <span className="orbit-chip chip-one">Admissions</span>
                <span className="orbit-chip chip-two">Visa</span>
                <span className="orbit-chip chip-three">Scholarships</span>
                <span className="orbit-chip chip-four">IELTS</span>
              </div>
              <div className="console-card">
                <span>START HERE</span>
                <strong>Share your study profile</strong>
                <p>Course · Country · Qualification · Budget · Intake</p>
                <Link href="/contact/">Start profile <ChevronRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-marquee">
          <div className="shell marquee-inner">
            <span>ABROAD ADMISSIONS</span><i />
            <span>STUDENT VISAS</span><i />
            <span>SCHOLARSHIPS</span><i />
            <span>IELTS GUIDANCE</span><i />
            <span>EDUCATION LOANS</span>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeader
            eyebrow="What we help with"
            title="One team across the important parts of your journey."
            copy="No cluttered process. Start with your goals and move through a clear sequence of next steps."
          />
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={22} /></span>
                    <span className="service-index">0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="/services/">Learn more <ArrowRight size={16} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeader
            eyebrow="Primary destinations"
            title="Go where your goals fit best."
            copy="Our primary focus includes the USA, UK and Europe. We can also discuss other destinations based on your plan."
          />
          <div className="destination-grid">
            {destinations.map((item) => (
              <article className="destination-card" key={item.name}>
                <div className="destination-flag">{item.flag}</div>
                <span>{item.kicker}</span>
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
                <Link href="/destinations/">Explore <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="shell process-layout">
          <div>
            <SectionHeader
              eyebrow="How it works"
              title="A cleaner way to move from idea to application."
              copy="You always know what stage you are in, what information is needed and what happens next."
            />
            <a className="text-link-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Discuss your plan <ArrowRight size={17} />
            </a>
          </div>
          <div className="process-list">
            {processSteps.map(([number, title, copy]) => (
              <div className="process-item" key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell split-layout">
          <div>
            <span className="eyebrow eyebrow-light"><ShieldCheck size={14} /> Built around your profile</span>
            <h2 className="feature-title">Your choices deserve context, not generic advice.</h2>
            <p className="feature-copy">
              Course fit, destination, academic background, budget and timing all matter. We begin with those details
              before discussing the next practical steps.
            </p>
            <div className="check-stack">
              <span><CircleCheck size={18} /> Profile and goal discovery</span>
              <span><CircleCheck size={18} /> Clear document checklist guidance</span>
              <span><CircleCheck size={18} /> WhatsApp-first communication</span>
            </div>
          </div>
          <LeadForm compact />
        </div>
      </section>

      <FAQ />
    </>
  );
}
