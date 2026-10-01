import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import Brand from "./Brand";
import { navItems, whatsappUrl } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand compact />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-cta desktop-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          Free counselling
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <Menu className="menu-open" size={23} />
            <X className="menu-close" size={23} />
          </summary>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-links">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <span>0{index + 1}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <a className="btn btn-primary btn-full" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
