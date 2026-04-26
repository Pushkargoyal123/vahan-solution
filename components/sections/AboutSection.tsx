import { CheckCircle } from "lucide-react";
import StatCard from "../ui/StatCard";

const ABOUT_POINTS = [
  "PAN-India coverage — all RTOs supported",
  "Privacy-first: OTP-based data reveal only",
  "No hidden charges, full transparency",
  "98% success rate within committed TAT",
];

const ABOUT_STATS = [
  { value: "5L+", label: "Challans Resolved" },
  { value: "30K+", label: "Happy Customers" },
  { value: "98%", label: "Success Rate" },
  { value: "3", label: "Easy Steps" },
];

function AboutContent() {
  return (
    <div>
      <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 20 }}>
        Why <span style={{ color: "#f97316" }}>Vahan Solutions?</span>
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 14,
          lineHeight: 1.8,
          marginBottom: 20,
        }}
      >
        We are India's most trusted platform for traffic challan resolution. With a team of
        certified legal experts and cutting-edge technology, we ensure every challan is resolved
        quickly, securely, and at the best possible cost.
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {ABOUT_POINTS.map((pt, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <CheckCircle style={{ width: 20, height: 20, color: "#f97316", flexShrink: 0 }} />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutStatsGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
      {ABOUT_STATS.map((s, i) => (
        <StatCard key={i} value={s.value} label={s.label} boxed />
      ))}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "80px 0", backgroundColor: "#0a0e1a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          <AboutContent />
          <AboutStatsGrid />
        </div>
      </div>
    </section>
  );
}