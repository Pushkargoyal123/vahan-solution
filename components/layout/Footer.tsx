import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f7fafc", borderTop: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 30px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                🚗
              </div>
              <div>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#1a202c" }}>Vahan </span>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#ff6b35" }}>Solutions</span>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#718096", marginBottom: 20 }}>
              India's most trusted platform for traffic challan clearance — transparent, privacy-first, 100% legal.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:help@vahansolutions.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  color: "#2563eb",
                  textDecoration: "none",
                }}
              >
                <Mail style={{ width: 16, height: 16 }} />
                help@vahansolutions.com
              </a>
              <a
                href="tel:+919311933793"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  color: "#dc2626",
                  textDecoration: "none",
                }}
              >
                <Phone style={{ width: 16, height: 16 }} />
                +91 93119 33793
              </a>
              <p style={{ fontSize: 12, color: "#a0aec0", marginTop: 8 }}>
                GSTIN: 07BYCPS8901F1ZB
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a202c", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Home", "Services", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontSize: 14,
                    color: "#718096",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a202c", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Legal
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Disclaimer"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: 14,
                    color: "#718096",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a202c", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              {[
                { name: "f", color: "#1877f2", href: "https://facebook.com/vahansolutions" },
                { name: "𝕏", color: "#000000", href: "https://twitter.com/vahansolutions" },
                { name: "in", color: "#0a66c2", href: "https://linkedin.com/company/vahansolutions" },
                { name: "💬", color: "#25d366", href: "https://wa.me/919311933793" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: social.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    color: "#ffffff",
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a202c", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Newsletter
            </h4>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                }}
              />
              <button
                style={{
                  padding: "10px 20px",
                  background: "#2563eb",
                  border: "none",
                  borderRadius: 8,
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                GO →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 30,
            borderTop: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 14, color: "#a0aec0" }}>
            © {new Date().getFullYear()} Vahan Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Sitemap", "Blog", "News"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 14,
                  color: "#a0aec0",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}