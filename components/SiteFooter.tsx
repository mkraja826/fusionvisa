import Link from "next/link";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import Brand from "./Brand";
import { instagramUrl, navItems, whatsappDisplay, whatsappUrl } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Student-first guidance for admissions, visas, scholarships, language preparation and education finance.
          </p>
          <div className="footer-social">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={19} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={19} />
            </a>
          </div>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="footer-contact">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Phone size={17} /> {whatsappDisplay}
            </a>
            <span><MapPin size={17} /> India · Online counselling</span>
          </div>
        </div>
      </div>
      <div className="shell footer-disclaimer">
        Admission, scholarship, visa and education-loan outcomes are decided by the relevant universities,
        scholarship providers, immigration authorities and lenders. Fusion Abroad Services does not guarantee outcomes.
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Fusion Abroad Services</span>
        <span>Guiding you Beyond Borders</span>
      </div>
    </footer>
  );
}
