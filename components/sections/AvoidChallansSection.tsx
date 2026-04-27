const RULES = [
  { emoji: "🚫🍺", text: "Do not drink and drive",               penalty: "₹10,000" },
  { emoji: "🚦",   text: "Always follow traffic signals",         penalty: "₹5,000"  },
  { emoji: "🛡️",   text: "Wear safety gears like seat belt",      penalty: "₹1,000"  },
  { emoji: "📵",   text: "Avoid using mobile phone while driving", penalty: "₹5,000"  },
  { emoji: "📄",   text: "Carry valid documents while driving",   penalty: "Upto ₹10,000" },
  { emoji: "⚡",   text: "Always stick to the speed limit",       penalty: "₹5,000"  },
];

export default function AvoidChallansSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">Stay Safe</span>
          <h2 className="vs-h2">How to Avoid Challans?</h2>
          <p
            className="vs-body"
            style={{ maxWidth: 620, margin: "14px auto 0" }}
          >
            Follow these rules to keep your driving record clean and avoid heavy fines
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {RULES.map((rule, i) => (
            <div
              key={i}
              className="vs-card vs-card-hover"
              style={{ padding: 24 }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "#fee2e2",
                  color: "#dc2626",
                  fontSize: 11,
                  fontWeight: 700,
                  borderRadius: 6,
                  marginBottom: 14,
                  letterSpacing: ".05em",
                }}
              >
                PENALTY • {rule.penalty}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 30, lineHeight: 1 }}>{rule.emoji}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.4 }}>
                  {rule.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
