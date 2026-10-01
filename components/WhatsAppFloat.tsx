import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Fusion Abroad Services on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}
