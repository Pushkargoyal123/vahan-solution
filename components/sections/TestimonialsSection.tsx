import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rohit Verma",
    role: "Car Owner • Delhi",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    saved: "₹3,500",
    rating: 5,
    text: "Got my court challan resolved without visiting anywhere. Saved both time and money. Highly recommend!",
  },
  {
    name: "Priya Sharma",
    role: "Car Owner • Delhi NCR",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    saved: "₹1,800",
    rating: 5,
    text: "Got a great waiver on court challans. Superfast, legal, and no hidden fees. Highly recommend to all vehicle owners.",
  },
  {
    name: "Amit Joshi",
    role: "Truck Owner • Pune",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    saved: "₹5,000",
    rating: 5,
    text: "Multiple vehicles, multiple challans — all cleared in one day. The team is super responsive on WhatsApp.",
  },
  {
    name: "Neha Gupta",
    role: "Two-Wheeler Owner • Jaipur",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    saved: "₹1,500",
    rating: 5,
    text: "Was scared about the court challan but team handled everything. Paid reduced fine and got receipt instantly.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="section-pad"
      style={{
        background: "linear-gradient(135deg, #0f2244 0%, #1e3a5f 60%, #2d5a8f 100%)",
      }}
    >
      <div className="vs-container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label" style={{ color: "#93c5fd" }}>What Our Clients Say</span>
          <h2 className="vs-h2" style={{ color: "#fff" }}>Real Stories, Real Savings</h2>
          <div className="accent-line" style={{ margin: "14px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="vs-card-dark">
              {/* Decorative quote */}
              <div className="quote-mark">"</div>

              {/* Avatar + name */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: 52, height: 52, borderRadius: "50%",
                    border: "2px solid #10b981", objectFit: "cover", flexShrink: 0,
                  }}
                />
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                    {t.name}
                  </h4>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{t.role}</p>
                </div>
              </div>

              {/* Savings badge */}
              <div className="savings-pill">
                {t.saved}
                <span style={{ fontSize: 12, fontWeight: 600 }}>Saved</span>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} style={{ width: 15, height: 15, fill: "#fbbf24", color: "#fbbf24" }} />
                ))}
              </div>

              {/* Quote text */}
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,.78)", fontStyle: "italic" }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
          <div style={{ width: 32, height: 4, background: "#fff", borderRadius: 2 }} />
          <div style={{ width: 8,  height: 4, background: "rgba(255,255,255,.3)", borderRadius: 2 }} />
          <div style={{ width: 8,  height: 4, background: "rgba(255,255,255,.3)", borderRadius: 2 }} />
        </div>
      </div>
    </section>
  );
}
