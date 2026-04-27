const RULES = [
  {
    badge: "⚠️ New Licence Disqualification Policy",
    badgeColor: "#dc2626",
    number: "1",
    numberColor: "#ef4444",
    title: "New Licence Disqualification Policy",
    subtitle: "Under the amended Central Motor Vehicles Rules 2026",
    description:
      "If a person is issued 5 or more traffic challans within a single year, their driving licence may be automatically suspended or disqualified. This affects all licence holders nationwide.",
    bgColor: "#fef2f2",
  },
  {
    badge: "New 45-Day Rule",
    badgeColor: "#ea580c",
    number: "2",
    numberColor: "#f97316",
    title: "Pay or Challenge Within 45 Days",
    subtitle: "Motorists must act within 45 days of issuance",
    description:
      "If a challan is unpaid or unchallenged within 45 days, it is finalized and the vehicle/licence is automatically flagged on Vahan and Sarathi portals.",
    bgColor: "#fff7ed",
  },
  {
    badge: "Vehicle Blacklisting",
    badgeColor: "#7c3aed",
    number: "3",
    numberColor: "#8b5cf6",
    title: "Service Blocking for Pending Challans",
    subtitle: "No RC transfer, permits, or fitness certificates",
    description:
      "Vehicles with outstanding challans will be blacklisted. No RC transfer, permit renewal, fitness certificate, or address change will be allowed on Parivahan until dues are cleared.",
    bgColor: "#faf5ff",
  },
  {
    badge: "Fine Waivers",
    badgeColor: "#059669",
    number: "4",
    numberColor: "#10b981",
    title: "50–90% Waiver Potential",
    subtitle: "High potential for reduced fines",
    description:
      "Valid RC, DL, and PUC certificates required for compoundable offenses. Our experts help you maximize waiver eligibility and handle all documentation.",
    bgColor: "#f0fdf4",
  },
  {
    badge: "Documentation",
    badgeColor: "#2563eb",
    number: "5",
    numberColor: "#3b82f6",
    title: "Keep Documents Updated",
    subtitle: "RC, DL, and PUC certificates",
    description:
      "Keep your RC, DL, and valid PUC certificate updated. Valid documents significantly improve waiver approval chances.",
    bgColor: "#eff6ff",
  },
  {
    badge: "Court Challans",
    badgeColor: "#0891b2",
    number: "6",
    numberColor: "#06b6d4",
    title: "Court Challans Need Expert Help",
    subtitle: "Fully managed resolution available",
    description:
      "Court challans require physical or legal representation. Vahan Solutions provides end-to-end management — we file the paperwork, track hearing dates, and send WhatsApp updates at every milestone.",
    bgColor: "#ecfeff",
  },
];

export default function NewTrafficRulesSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">🚨 Must-Reads</span>
          <h2 className="vs-h2">New Traffic Rules 2026</h2>
          <p className="vs-body" style={{ maxWidth: 580, margin: "14px auto 0" }}>
            Stay informed about important changes effective January 1, 2026.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
            gap: 22,
          }}
        >
          {RULES.map((rule, i) => (
            <div
              key={i}
              className="rule-card"
              style={{
                background: rule.bgColor,
                border: `1px solid ${rule.badgeColor}25`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    background: rule.badgeColor,
                    color: "#fff",
                    fontSize: 11, fontWeight: 700,
                    borderRadius: 20, letterSpacing: ".05em",
                  }}
                >
                  {rule.badge}
                </div>
                <div
                  style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: rule.numberColor,
                    color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 800, flexShrink: 0,
                  }}
                >
                  {rule.number}
                </div>
              </div>

              <h3
                style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}
              >
                {rule.title}
              </h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: rule.badgeColor, marginBottom: 12 }}>
                {rule.subtitle}
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4a5568" }}>
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
