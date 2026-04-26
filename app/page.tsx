"use client";

import { useState } from "react";
import {
  MapPin, Zap, Car, CheckCircle, Star, Shield, Users,
  TrendingUp, Award, ArrowRight, Menu, X,
} from "lucide-react";

export default function Home() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-desktop-buttons { display: flex; }
        .nav-mobile-toggle { display: none; }
        .nav-mobile-menu { display: none; }
        .hero-badges-left { display: flex; }
        .hero-badges-right { display: flex; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-buttons { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          .nav-mobile-menu { display: flex !important; }
          .hero-badges-left { display: none !important; }
          .hero-badges-right { display: none !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "12px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 36, height: 36, borderRadius: 8,
                backgroundColor: "#f97316",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Car className="w-5 h-5" style={{ color: "#fff" }} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#111827", lineHeight: 1.1 }}>Vahan</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#f97316" }}>Solutions</div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-desktop-links" style={{ gap: 32, alignItems: "center" }}>
            {["Home", "Services", "About", "Contact", "Legal"].map((item, i) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                style={{
                  fontSize: 14, fontWeight: 500,
                  color: i === 0 ? "#f97316" : "#374151",
                  textDecoration: "none",
                  borderBottom: i === 0 ? "2px solid #f97316" : "none",
                  paddingBottom: 2,
                }}
              >{item}{item === "Legal" ? " ▾" : ""}</a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="nav-desktop-buttons" style={{ gap: 12, alignItems: "center" }}>
            <button
              style={{
                padding: "8px 22px", borderRadius: 9999,
                border: "1.5px solid #1d4ed8", background: "transparent",
                color: "#1d4ed8", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >Login</button>
            <button
              style={{
                padding: "8px 20px", borderRadius: 9999,
                background: "linear-gradient(90deg,#f97316,#fb923c)",
                color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer",
                border: "none", display: "flex", alignItems: "center", gap: 6,
              }}
            >🚀 Get Free Help</button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#111827" }}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="nav-mobile-menu" style={{ backgroundColor: "#fff", padding: "12px 24px 16px", flexDirection: "column", gap: 14 }}>
            {["Home", "Services", "About", "Contact", "Legal"].map(item => (
              <a key={item} href={"#" + item.toLowerCase()} style={{ fontSize: 14, color: "#374151", textDecoration: "none" }}>{item}</a>
            ))}
            <button style={{ padding: "10px", borderRadius: 9999, background: "#f97316", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer" }}>
              🚀 Get Free Help
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80,
          overflow: "hidden",
          backgroundImage: "url('https://images.unsplash.com/photo-1545060894-9b24f8cfb9d9?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, rgba(5,15,45,0.82) 0%, rgba(10,20,60,0.75) 60%, rgba(5,10,35,0.85) 100%)",
          }}
        />

        {/* Left floating badges */}
        <div
          className="hero-badges-left"
          style={{
            position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
            flexDirection: "column", gap: 12, zIndex: 10,
          }}
        >
          {[
            { icon: <MapPin className="w-4 h-4" style={{ color: "#60a5fa" }} />, text: "PAN-India Challan Resolution Made Easy" },
            { icon: <Zap className="w-4 h-4" style={{ color: "#facc15" }} />, text: "Fast, Accurate & Hassle-Free" },
            { icon: <Car className="w-4 h-4" style={{ color: "#4ade80" }} />, text: "Drive Stress-Free – We Handle Your Challans" },
            { icon: <CheckCircle className="w-4 h-4" style={{ color: "#34d399" }} />, text: "5,00,000+ Challans Resolved Across India" },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 12, color: "#fff",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 9999, padding: "8px 16px",
                maxWidth: 215,
              }}
            >
              {b.icon}<span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Right floating badges */}
        <div
          className="hero-badges-right"
          style={{
            position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
            flexDirection: "column", gap: 12, zIndex: 10,
          }}
        >
          {[
            { icon: <Users className="w-4 h-4" style={{ color: "#f472b6" }} />, text: "30,000+ Happy Customers and Counting" },
            { icon: <Star className="w-4 h-4" style={{ color: "#facc15" }} />, text: "98% Success Rate – High Accuracy Within TAT" },
            { icon: <Award className="w-4 h-4" style={{ color: "#60a5fa" }} />, text: "Certified Lawyers – Legal & Hassle-Free" },
            { icon: <TrendingUp className="w-4 h-4" style={{ color: "#4ade80" }} />, text: "Settle in 3 Easy Steps" },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 12, color: "#fff",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 9999, padding: "8px 16px",
                maxWidth: 215,
              }}
            >
              {b.icon}<span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Center content */}
        <div
          style={{
            position: "relative", zIndex: 10,
            textAlign: "center", maxWidth: 620, margin: "0 auto", padding: "0 16px",
          }}
        >
          <h1
            style={{
              fontWeight: 900, lineHeight: 1.15, marginBottom: 4,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#ffffff",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Check &amp; Pay<br />Traffic Challans
          </h1>

          <h2
            style={{
              fontWeight: 900, marginBottom: 16,
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              color: "#f97316",
              textShadow: "0 2px 20px rgba(249,115,22,0.4)",
            }}
          >
            Anytime . Anywhere
          </h2>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 32 }}>
            No queues. No court visits. Privacy-first OTP reveal — 100% secure &amp; transparent.
          </p>

          {/* Input card */}
          <div
            style={{
              backgroundColor: "rgba(15,25,60,0.65)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              padding: "28px 24px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
              Enter Vehicle Number
            </p>

            {/* Input row */}
            <div
              style={{
                display: "flex", alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12, padding: "10px 14px", marginBottom: 14,
              }}
            >
              <span
                style={{
                  fontSize: 13, color: "rgba(255,255,255,0.7)",
                  paddingRight: 12, marginRight: 12,
                  borderRight: "1px solid rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", gap: 4, flexShrink: 0,
                }}
              >
                🇮🇳 IND
              </span>
              <input
                type="text"
                placeholder="DL 01 AB12XX"
                value={vehicleNumber}
                onChange={e => setVehicleNumber(e.target.value.toUpperCase())}
                maxLength={11}
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontSize: 15, letterSpacing: "0.12em", fontWeight: 600,
                }}
              />
            </div>

            <button
              style={{
                width: "100%", padding: "15px 0", borderRadius: 12,
                background: "linear-gradient(90deg,#ea6c0a,#f97316)",
                color: "#fff", fontWeight: 800, fontSize: 15,
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: "0 6px 24px rgba(249,115,22,0.45)",
              }}
            >
              Get Challan Details <ArrowRight className="w-5 h-5" />
            </button>

            <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Shield className="w-3 h-3" /> 100% Secure
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Zap className="w-3 h-3" /> Instant Results
              </span>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 28,
            }}
          >
            {[
              { value: "20K+", label: "Happy Users Trust Our Platform" },
              { value: "₹10 lakh+", label: "Challans Cleared" },
              { value: "Upto 60%", label: "Waiver Savings On Bulk Deals" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 900, color: "#f97316", fontSize: "clamp(1.1rem,2.5vw,1.6rem)", lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "80px 0", backgroundColor: "#080c18" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff" }}>Our <span style={{ color: "#f97316" }}>Services</span></h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginTop: 10 }}>Everything you need to resolve challans — fast &amp; legally.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {[
              { icon: <CheckCircle className="w-8 h-8" style={{ color: "#f97316" }} />, title: "Challan Check", desc: "Instantly check all pending challans for any vehicle across India." },
              { icon: <Shield className="w-8 h-8" style={{ color: "#f97316" }} />, title: "Legal Resolution", desc: "Certified lawyers handle your challan disputes end-to-end." },
              { icon: <Zap className="w-8 h-8" style={{ color: "#f97316" }} />, title: "Quick Payment", desc: "Pay challans online in seconds with secure OTP-verified flow." },
            ].map((s, i) => (
              <div key={i} style={{ borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div style={{ marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "80px 0", backgroundColor: "#0a0e1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 20 }}>Why <span style={{ color: "#f97316" }}>Vahan Solutions?</span></h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                We are India's most trusted platform for traffic challan resolution. With a team of certified legal experts and cutting-edge technology, we ensure every challan is resolved quickly, securely, and at the best possible cost.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {["PAN-India coverage — all RTOs supported", "Privacy-first: OTP-based data reveal only", "No hidden charges, full transparency", "98% success rate within committed TAT"].map((pt, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                    <CheckCircle className="w-5 h-5" style={{ color: "#f97316", flexShrink: 0 }} />{pt}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[{ value: "5L+", label: "Challans Resolved" }, { value: "30K+", label: "Happy Customers" }, { value: "98%", label: "Success Rate" }, { value: "3", label: "Easy Steps" }].map((s, i) => (
                <div key={i} style={{ borderRadius: 16, padding: 24, textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "#f97316" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px 0", backgroundColor: "#080c18" }}>
        <div style={{ maxWidth: 500, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 14 }}>Get in <span style={{ color: "#f97316" }}>Touch</span></h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 28 }}>Our experts are ready to help you resolve challans hassle-free.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[{ type: "text", placeholder: "Your Name" }, { type: "email", placeholder: "Email Address" }].map((f, i) => (
              <input key={i} type={f.type} placeholder={f.placeholder}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 13, outline: "none", boxSizing: "border-box" }}
              />
            ))}
            <textarea rows={4} placeholder="Your Message"
              style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 13, outline: "none", resize: "none", boxSizing: "border-box" }}
            />
            <button style={{ width: "100%", padding: 16, borderRadius: 12, background: "#f97316", color: "#fff", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer" }}>
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "28px 0", textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.35)", borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0a0e1a" }}>
        © {new Date().getFullYear()} Vahan Solutions. All rights reserved.
      </footer>
    </main>
  );
}