import { Lock, ListChecks, CreditCard, Zap } from "lucide-react";

const FEATURES = [
  {
    Icon: Lock,
    title: "Privacy-First OTP",
    description: "Challan details are securely accessed via OTP — your data stays private.",
    num: "01",
  },
  {
    Icon: ListChecks,
    title: "Select Your Challans",
    description: "Choose exactly which challans to pay — no unnecessary bulk payments.",
    num: "02",
  },
  {
    Icon: CreditCard,
    title: "Pay & Get Waiver",
    description: "Pay online instantly or apply for a waiver on compoundable offences.",
    num: "03",
  },
  {
    Icon: Zap,
    title: "Instant Receipt",
    description: "Get your receipt instantly after payment — no delays, no waiting.",
    num: "04",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">What Makes Us Different</span>
          <h2 className="vs-h2">
            Why Choose <span className="vs-accent">Vahan Solutions</span>
          </h2>
          <div className="accent-line" style={{ margin: "14px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 26,
          }}
        >
          {FEATURES.map(({ Icon, title, description, num }, i) => (
            <div key={i} className="vs-card vs-card-hover">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 20,
                }}
              >
                <div className="icon-wrap">
                  <Icon size={28} />
                </div>
                <span
                  style={{
                    fontSize: 13, fontWeight: 800,
                    color: "var(--border)",
                    letterSpacing: ".04em",
                  }}
                >
                  {num}
                </span>
              </div>
              <h3 className="vs-h3" style={{ marginBottom: 10 }}>{title}</h3>
              <p className="vs-body" style={{ fontSize: 14 }}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
