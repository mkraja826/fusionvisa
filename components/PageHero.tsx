import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export default function PageHero({
  eyebrow,
  title,
  description,
  accent = "Start with a free conversation",
}: {
  eyebrow: string;
  title: string;
  description: string;
  accent?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-orb page-hero-orb-one" />
      <div className="page-hero-orb page-hero-orb-two" />
      <div className="shell page-hero-inner">
        <span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            {accent} <ArrowRight size={18} />
          </a>
          <Link className="btn btn-ghost btn-on-dark" href="/contact/">Share your profile</Link>
        </div>
      </div>
    </section>
  );
}
