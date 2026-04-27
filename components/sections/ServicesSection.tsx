const SERVICES = [
  {
    icon: "💼",
    title: "Challan Payment",
    description:
      "Pay traffic challans online — select which challans to resolve, pay via UPI/cards/net banking, and download instant receipt.",
    accent: "#ff6b35",
  },
  {
    icon: "📊",
    title: "Challan Info",
    description:
      "Complete challan details — full challan history, fine amounts, and offence details — revealed securely with privacy protection.",
    accent: "#3b82f6",
  },
  {
    icon: "🏛️",
    title: "Resolution",
    description:
      "Fully managed resolution for court challans with WhatsApp status updates, clear timelines, and expert handling of the entire process.",
    accent: "#10b981",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">What We Offer</span>
          <h2 className="vs-h2">Our Services</h2>
          <div className="accent-line" style={{ margin: "14px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 28,
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="vs-card vs-card-hover"
              style={{
                textAlign: "center",
                borderTop: `3px solid ${s.accent}`,
                paddingTop: 36,
              }}
            >
              <div style={{ fontSize: 52, marginBottom: 20 }}>{s.icon}</div>
              <h3 className="vs-h3" style={{ marginBottom: 14 }}>{s.title}</h3>
              <p className="vs-body" style={{ fontSize: 14 }}>{s.description}</p>
              <div style={{ marginTop: 24 }}>
                <a
                  href="#"
                  style={{
                    fontSize: 14, fontWeight: 600, color: s.accent,
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 4,
                    transition: "gap .2s",
                  }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
