"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

const METHODS = [
  {
    Icon: Phone,
    title: "Call Us",
    detail: "+91 93119 33793",
    href: "tel:+919311933793",
    color: "#ff6b35",
    shadow: "rgba(255,107,53,.28)",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with us instantly",
    href: "https://wa.me/919311933793",
    color: "#10b981",
    shadow: "rgba(16,185,129,.28)",
  },
  {
    Icon: Mail,
    title: "Email Us",
    detail: "help@vahansolutions.com",
    href: "mailto:help@vahansolutions.com",
    color: "#3b82f6",
    shadow: "rgba(59,130,246,.28)",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const set = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--bg-alt)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">Get in Touch</span>
          <h2 className="vs-h2">Ready to Clear Your Challans?</h2>
          <p className="vs-body" style={{ marginTop: 12 }}>
            Join 5 million+ users who trust Vahan Solutions
          </p>
        </div>

        {/* Contact method cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 22,
            marginBottom: 52,
          }}
        >
          {METHODS.map(({ Icon, title, detail, href, color, shadow }, i) => (
            <div key={i} className="contact-method">
              <div
                style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 18px",
                  boxShadow: `0 6px 18px ${shadow}`,
                }}
              >
                <Icon style={{ width: 26, height: 26, color: "#fff" }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                {title}
              </h3>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "var(--text-2)", textDecoration: "none" }}
              >
                {detail}
              </a>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div
          style={{
            maxWidth: 580, margin: "0 auto",
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: 24, padding: "40px 36px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <h3
            style={{
              fontSize: 20, fontWeight: 700, color: "var(--text)",
              marginBottom: 28, textAlign: "center",
            }}
          >
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <input
              className="vs-input"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={set("name")}
              required
            />
            <input
              className="vs-input"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={set("email")}
              required
            />
            <input
              className="vs-input"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={set("phone")}
              required
            />
            <textarea
              className="vs-input"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={set("message")}
              required
            />
            <button
              type="submit"
              className="vs-btn vs-btn-p vs-btn-lg"
              style={{ justifyContent: "center" }}
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
