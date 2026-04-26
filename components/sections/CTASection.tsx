export default function CTASection() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8f 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 20,
          }}
        >
          Ready to Clear Your Challans?
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: 40,
            maxWidth: 700,
            margin: "0 auto 40px",
          }}
        >
          Join 5 million+ users who trust Vahan Solutions — India's most transparent challan platform.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "16px 32px",
              background: "#ff6b35",
              border: "none",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)",
            }}
          >
            🔍 Check Challans Now
          </button>
          <button
            style={{
              padding: "16px 32px",
              background: "#10b981",
              border: "none",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.3s ease",
            }}
          >
            💬 WhatsApp Us
          </button>
          <button
            style={{
              padding: "16px 32px",
              background: "transparent",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.3s ease",
            }}
          >
            📞 Request Callback
          </button>
        </div>
      </div>
    </section>
  );
}
