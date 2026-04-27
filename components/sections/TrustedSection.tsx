import { Car, CheckCircle, TrendingUp, Award } from "lucide-react";

const STATS = [
  {
    Icon: Car,         value: "11L+",   label: "Vehicles Protected",
    color: "#ff6b35",  bg: "rgba(255,107,53,.1)",   border: "rgba(255,107,53,.2)",
  },
  {
    Icon: CheckCircle, value: "2L+",    label: "Challans Resolved",
    color: "#10b981",  bg: "rgba(16,185,129,.1)",  border: "rgba(16,185,129,.2)",
  },
  {
    Icon: TrendingUp,  value: "₹70Cr+", label: "Legal Savings",
    color: "#3b82f6",  bg: "rgba(59,130,246,.1)",  border: "rgba(59,130,246,.2)",
  },
  {
    Icon: Award,       value: "98%",    label: "Success Rate",
    color: "#f59e0b",  bg: "rgba(245,158,11,.1)",  border: "rgba(245,158,11,.2)",
  },
];

export default function TrustedSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">Trusted by Lakhs</span>
          <h2 className="vs-h2">India's leading challan resolution platform</h2>
          <div className="accent-line" style={{ margin: "14px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 22,
          }}
        >
          {STATS.map(({ Icon, value, label, color, bg, border }, i) => (
            <div key={i} className="stat-card">
              <div
                style={{
                  width: 62, height: 62, borderRadius: 14,
                  background: bg, border: `1px solid ${border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 18px",
                }}
              >
                <Icon style={{ width: 28, height: 28, color }} />
              </div>
              <div
                style={{
                  fontSize: 38, fontWeight: 900, color: "var(--text)",
                  marginBottom: 6, fontVariantNumeric: "tabular-nums",
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-2)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
