import { Car, CheckCircle, TrendingUp, Award } from "lucide-react";

const STATS = [
  {
    icon: <Car style={{ width: 40, height: 40, color: "#ff6b35" }} />,
    value: "11L+",
    label: "Vehicles Protected",
  },
  {
    icon: <CheckCircle style={{ width: 40, height: 40, color: "#ff6b35" }} />,
    value: "2L+",
    label: "Challans Resolved",
  },
  {
    icon: <TrendingUp style={{ width: 40, height: 40, color: "#ff6b35" }} />,
    value: "70Cr+",
    label: "Legal Savings",
  },
  {
    icon: <Award style={{ width: 40, height: 40, color: "#ff6b35" }} />,
    value: "98%",
    label: "Success Rate",
  },
];

export default function TrustedSection() {
  return (
    <section style={{ padding: "60px 0", backgroundColor: "#f7fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            Trusted by Lakhs
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#1a202c",
            }}
          >
            India's leading challan resolution platform
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                padding: 32,
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: "#1a202c",
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#718096",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
