export default function TrafficChallanInfoSection() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f7fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ff6b35",
                marginBottom: 16,
              }}
            >
              Know More
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "#1a202c",
                marginBottom: 20,
              }}
            >
              What is Traffic Challan?
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#718096",
                marginBottom: 24,
              }}
            >
              Challan is a fine imposed by traffic police for rule violations and ensures road safety.
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#2563eb",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Know more →
            </a>
          </div>
          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 40,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 80 }}>⚖️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
