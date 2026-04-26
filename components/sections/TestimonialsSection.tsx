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
    <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #1a2332 0%, #1e3a5f 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            REAL STORIES, REAL SAVINGS
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              style={{
                background: "rgba(30, 58, 95, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 20,
                padding: 28,
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "2px solid #10b981",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: 4,
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "inline-block",
                  background: "#10b981",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: 16,
                }}
              >
                {testimonial.saved}
                <span style={{ fontSize: 12, fontWeight: 600, marginLeft: 4 }}>Saved</span>
              </div>

              <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    style={{ width: 16, height: 16, fill: "#fbbf24", color: "#fbbf24" }}
                  />
                ))}
              </div>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.8)",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
          <div style={{ width: 32, height: 4, background: "#ffffff", borderRadius: 2 }}></div>
          <div style={{ width: 8, height: 4, background: "rgba(255, 255, 255, 0.3)", borderRadius: 2 }}></div>
          <div style={{ width: 8, height: 4, background: "rgba(255, 255, 255, 0.3)", borderRadius: 2 }}></div>
        </div>
      </div>
    </section>
  );
}
