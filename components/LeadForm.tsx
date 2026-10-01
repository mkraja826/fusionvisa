"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/site";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sending, setSending] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const lines = [
      "Hi Fusion Abroad Services, I would like study-abroad guidance.",
      "",
      `Name: ${form.get("name") || "-"}`,
      `Course interested in: ${form.get("course") || "-"}`,
      `Preferred country: ${form.get("country") || "-"}`,
      `Qualification: ${form.get("qualification") || "-"}`,
      `Approx. budget: ${form.get("budget") || "-"}`,
      `Preferred intake: ${form.get("intake") || "-"}`,
    ];
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setTimeout(() => setSending(false), 700);
  }

  return (
    <form className={compact ? "lead-form lead-form-compact" : "lead-form"} onSubmit={submit}>
      <div className="form-head">
        <span className="mini-icon"><MessageCircle size={18} /></span>
        <div>
          <strong>Tell us what you are planning</strong>
          <span>We will open a pre-filled WhatsApp message.</span>
        </div>
      </div>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input name="name" placeholder="Enter your name" required />
        </label>
        <label>
          <span>Course interested in</span>
          <input name="course" placeholder="e.g. MS Data Science" required />
        </label>
        <label>
          <span>Preferred country</span>
          <input name="country" placeholder="USA, UK, Europe..." required />
        </label>
        <label>
          <span>Qualification</span>
          <input name="qualification" placeholder="e.g. B.Tech / Degree" />
        </label>
        <label>
          <span>Approx. budget</span>
          <input name="budget" placeholder="Your study budget" />
        </label>
        <label>
          <span>Preferred intake</span>
          <input name="intake" placeholder="e.g. Fall 2027" />
        </label>
      </div>
      <button className="btn btn-primary btn-full" type="submit" disabled={sending}>
        {sending ? "Opening WhatsApp…" : "Continue on WhatsApp"} <ArrowUpRight size={18} />
      </button>
      <p className="form-note">
        No account needed. Your details are only placed into the WhatsApp message you choose to send.
      </p>
    </form>
  );
}
