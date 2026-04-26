const RULES = [
  { emoji: "🚫🍺", text: "Do not drink and drive", penalty: "₹10,000" },
  { emoji: "🚦", text: "Always follow traffic signals", penalty: "₹5,000" },
  { emoji: "🛡️", text: "Wear safety gears like seat belt", penalty: "₹1,000" },
  { emoji: "📵", text: "Avoid using mobile phone while driving", penalty: "₹5,000" },
  { emoji: "📄", text: "Carry valid documents while driving", penalty: "Upto ₹10,000" },
  { emoji: "⚡", text: "Always stick to the speed limit", penalty: "₹5,000" },
];

export default function AvoidChallansSection() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
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
            Stay Safe
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1a202c",
              marginBottom: 16,
            }}
          >
            How to Avoid Challans?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#718096",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Follow these rules to keep your driving record clean and avoid heavy fines
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {RULES.map((rule, i) => (
            <div
              key={i}
              style={{
                background: "#f7fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                padding: 24,
                transition: "all 0.3s ease",
              }}
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
                  marginBottom: 12,
                  letterSpacing: "0.05em",
                }}
              >
                PENALTY • {rule.penalty}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>{rule.emoji}</span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#1a202c",
                  }}
                >
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
