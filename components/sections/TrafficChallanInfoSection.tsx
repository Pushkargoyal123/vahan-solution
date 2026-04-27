export default function TrafficChallanInfoSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)" }}>
      <div className="vs-container">
        <div className="info-grid">
          {/* Text */}
          <div>
            <span className="vs-label">Know More</span>
            <h2 className="vs-h2" style={{ marginBottom: 18 }}>
              What is a Traffic Challan?
            </h2>
            <p className="vs-body" style={{ marginBottom: 24 }}>
              A challan is a fine imposed by traffic police for rule violations — ensuring road
              safety and disciplined driving behaviour across India. Challans can be issued for
              speeding, signal jumping, driving without a seatbelt, and many other offences.
            </p>
            <a
              href="#"
              style={{
                fontSize: 15, fontWeight: 600, color: "var(--blue-dark)",
                textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "gap .2s",
              }}
            >
              Know more →
            </a>
          </div>

          {/* Visual */}
          <div
            style={{
              background: "#fff", borderRadius: 20, padding: 44,
              boxShadow: "var(--shadow-xl)", border: "1px solid var(--border)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", textAlign: "center",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 80 }}>⚖️</div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
              Legal &amp; Transparent
            </p>
            <p style={{ fontSize: 13, color: "var(--text-3)" }}>
              100% compliant with Indian traffic laws
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
