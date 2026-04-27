import { Lock, ListChecks, CreditCard, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: <Lock style={{ width: 32, height: 32 }} />,
    title: "Privacy-First OTP",
    description: "Challan details are securely accessed via OTP — your data stays private.",
  },
  {
    icon: <ListChecks style={{ width: 32, height: 32 }} />,
    title: "Select Your Challans",
    description: "Choose exactly which challans to pay — no unnecessary bulk payments.",
  },
  {
    icon: <CreditCard style={{ width: 32, height: 32 }} />,
    title: "Pay & Get Waiver",
    description: "Pay online instantly or apply for a waiver on compoundable offences.",
  },
  {
    icon: <Zap style={{ width: 32, height: 32 }} />,
    title: "Instant Receipt",
    description: "Get your receipt instantly after payment — no delays, no waiting.",
  },
];

export default function WhyChooseSection() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f7fafc" }}>
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
              marginBottom: 16,
            }}
          >
            Why Choose <span style={{ color: "#ff6b35" }}>Vahan Solutions</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
        >
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                padding: 32,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "#ff6b35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: "#ffffff",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1a202c",
                  marginBottom: 12,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#718096",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
