import { PlaneTakeoff, Shield } from "lucide-react";
import Link from "next/link";

export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Fusion Abroad Services home">
      <span className="brand-mark" aria-hidden="true">
        <Shield className="brand-shield" size={compact ? 34 : 40} strokeWidth={1.9} />
        <PlaneTakeoff className="brand-plane" size={compact ? 16 : 18} strokeWidth={2.4} />
      </span>
      <span className="brand-copy">
        <strong>FUSION</strong>
        <span>ABROAD SERVICES</span>
      </span>
    </Link>
  );
}
