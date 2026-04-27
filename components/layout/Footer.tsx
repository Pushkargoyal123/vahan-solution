import { Mail, Phone } from "lucide-react";

const QUICK_LINKS = ["Home", "Services", "About", "Contact"];
const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Disclaimer"];

const SOCIAL = [
  { label: "f",  href: "https://facebook.com/vahansolutions",        color: "#1877f2" },
  { label: "𝕏",  href: "https://twitter.com/vahansolutions",         color: "#18181b" },
  { label: "in", href: "https://linkedin.com/company/vahansolutions", color: "#0a66c2" },
  { label: "💬", href: "https://wa.me/919311933793",                  color: "#25d366" },
];

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="vs-container" style={{ padding: "64px 24px 32px" }}>
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 44,
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                  background: "linear-gradient(135deg,#ff6b35,#e85c24)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18,
                }}
              >
                🚗
              </div>
              <div>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Vahan </span>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#ff6b35" }}>Solutions</span>
              </div>
            </div>

            <p
              style={{
                fontSize: 14, lineHeight: 1.75,
                color: "rgba(255,255,255,.5)", marginBottom: 20,
              }}
            >
              India's most trusted platform for traffic challan clearance —
              transparent, privacy-first, 100% legal.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:help@vahansolutions.com"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 14, color: "#93c5fd", textDecoration: "none",
                }}
              >
                <Mail size={15} /> help@vahansolutions.com
              </a>
              <a
                href="tel:+919311933793"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 14, color: "#fca5a5", textDecoration: "none",
                }}
              >
                <Phone size={15} /> +91 93119 33793
              </a>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.28)", marginTop: 4 }}>
                GSTIN: 07BYCPS8901F1ZB
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-h">Quick Links</h4>
            {QUICK_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                {link}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-h">Legal</h4>
            {LEGAL_LINKS.map((link) => (
              <a key={link} href="#" className="footer-link">{link}</a>
            ))}
          </div>

          {/* Social + Newsletter */}
          <div>
            <h4 className="footer-h">Follow Us</h4>
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              {SOCIAL.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  style={{ background: s.color }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            <h4 className="footer-h">Newsletter</h4>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1, padding: "10px 14px",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 8, fontSize: 14,
                  background: "rgba(255,255,255,.07)",
                  color: "#fff", outline: "none", fontFamily: "inherit",
                }}
              />
              <button className="footer-newsletter-btn">GO →</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.3)" }}>
            © {new Date().getFullYear()} Vahan Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Sitemap", "Blog", "News"].map((l) => (
              <a key={l} href="#" className="footer-bottom-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
