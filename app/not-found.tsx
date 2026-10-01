import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-glow" />
      <div className="shell not-found-inner">
        <span className="not-found-code">404</span>
        <h1>This route missed its destination.</h1>
        <p>The page you were looking for is not available. Return home or continue your study-abroad conversation with our team.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/"><ArrowLeft size={18} /> Back home</Link>
          <a className="btn btn-ghost btn-on-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
