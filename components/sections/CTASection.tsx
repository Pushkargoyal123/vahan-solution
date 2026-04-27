export default function CTASection() {
  return (
    <section
      style={{
        padding: "88px 0",
        background: "linear-gradient(135deg, #0f2244 0%, #1e3a5f 55%, #2d5a8f 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: -80, right: -80,
          width: 320, height: 320, borderRadius: "50%",
          background: "rgba(255,107,53,.06)", pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: -100, left: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(59,130,246,.05)", pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "rgba(255,255,255,.015)", pointerEvents: "none",
        }}
      />

      <div
        className="vs-container"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <span className="vs-label" style={{ color: "#93c5fd" }}>Take Action Now</span>

        <h2
          className="vs-h2"
          style={{ color: "#fff", marginBottom: 18 }}
        >
          Ready to Clear Your Challans?
        </h2>

        <p
          style={{
            fontSize: 17, color: "rgba(255,255,255,.82)",
            maxWidth: 620, margin: "0 auto 44px", lineHeight: 1.7,
          }}
        >
          Join 5 million+ users who trust Vahan Solutions — India's most transparent
          challan platform.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="vs-btn vs-btn-p vs-btn-lg">🔍 Check Challans Now</button>
          <button className="vs-btn vs-btn-g vs-btn-lg">💬 WhatsApp Us</button>
          <button className="vs-btn vs-btn-ghost vs-btn-lg">📞 Request Callback</button>
        </div>
      </div>
    </section>
  );
}
