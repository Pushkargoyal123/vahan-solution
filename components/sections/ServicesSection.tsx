import { CreditCard, FileText, Scale } from "lucide-react";

const SERVICES = [
  {
    icon: "💼",
    title: "Challan Payment",
    description: "Pay traffic challans online — select which challans to resolve, pay via UPI/cards/net banking, and download instant receipt.",
  },
  {
    icon: "📊",
    title: "Challan Info",
    description: "Complete challan details — full challan history, fine amounts, and offence details — revealed securely with privacy protection.",
  },
  {
    icon: "🏛️",
    title: "Resolution",
    description: "Fully managed resolution for court challans with WhatsApp status updates, clear timelines, and expert handling of the entire process.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ff6b35",
              marginBottom: 12,
            }}
          >
            What We Offer
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1a202c",
            }}
          >
            Our Services
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={i}
              style={{
                background: "#f7fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                padding: 36,
                transition: "all 0.3s ease",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  marginBottom: 20,
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1a202c",
                  marginBottom: 16,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#718096",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}