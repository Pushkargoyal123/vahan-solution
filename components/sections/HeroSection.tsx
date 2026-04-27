"use client";

import { useState } from "react";
import { Shield, Zap, ArrowRight } from "lucide-react";

const LEFT_BADGES = [
  { emoji: "🇮🇳", text: "PAN-India Challan Resolution Made Easy" },
  { emoji: "⚡",   text: "Fast, Accurate & Hassle-Free" },
  { emoji: "🚗",   text: "Drive Stress-Free – We Handle Your Challans" },
  { emoji: "✅",   text: "5,00,000+ Challans Resolved Across India" },
];

const RIGHT_BADGES = [
  { emoji: "😊", text: "30,000+ Happy Customers and Counting" },
  { emoji: "🎯", text: "98% Success Rate – High Accuracy Within TAT" },
  { emoji: "⚖️", text: "Certified Lawyers – Legal & Hassle-Free" },
  { emoji: "👣", text: "Settle in 3 Easy Steps" },
];

const STATS = [
  { value: "20K+",      label: "Happy Users Trust Our Platform" },
  { value: "₹10 lakh+", label: "Challans Cleared" },
  { value: "Upto 60%",  label: "Waiver Savings On Bulk Deals" },
];

export default function HeroSection() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
        overflow: "hidden",
        background: "#0a1a38",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover", zIndex: 0, opacity: 0.45,
        }}
      >
        <source src="/assets/vid-D2aLfXaI.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(160deg, rgba(10,26,56,.82) 0%, rgba(8,20,48,.9) 100%)",
        }}
      />

      {/* Left badges */}
      <div className="hero-side" style={{ left: 24 }}>
        {LEFT_BADGES.map((b, i) => (
          <div key={i} className="hero-badge">
            <span style={{ fontSize: 18 }}>{b.emoji}</span>
            <span>{b.text}</span>
          </div>
        ))}
      </div>

      {/* Right badges */}
      <div className="hero-side" style={{ right: 24 }}>
        {RIGHT_BADGES.map((b, i) => (
          <div key={i} className="hero-badge">
            <span style={{ fontSize: 18 }}>{b.emoji}</span>
            <span>{b.text}</span>
          </div>
        ))}
      </div>

      {/* Center content */}
      <div
        style={{
          position: "relative", zIndex: 10,
          textAlign: "center", maxWidth: 700,
          width: "100%",
          margin: "0 auto", padding: "0 24px",
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "clamp(32px, 6vw, 58px)",
            fontWeight: 900,
            color: "rgb(255, 255, 255)",
            lineHeight: 1.08,
            letterSpacing: "-0.8px",
            marginBottom: 20,
            maxWidth: 700,
          }}
        >
          Check &amp; Pay
          <br />
          Traffic Challans
          <br />
          <em style={{ fontStyle: "normal", color: "rgb(249, 115, 22)" }}>Anytime . Anywhere</em>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,.78)", fontSize: 17,
            maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7,
          }}
        >
          No queues. No court visits. Privacy-first OTP reveal — 100% secure &amp; transparent.
        </p>

        {/* Search card — dark glass */}
        <div
          style={{
            background: "rgba(10,22,52,.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,.14)",
            borderRadius: 24,
            padding: "36px 30px",
            boxShadow: "0 24px 64px rgba(0,0,0,.45)",
            maxWidth: 560, width: "100%",
          }}
        >
          <p
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: ".15em",
              textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 18,
            }}
          >
            Enter Vehicle Number
          </p>

          {/* Input row */}
          <div
            style={{
              display: "flex", alignItems: "center",
              background: "rgba(255,255,255,.07)",
              border: `2px solid ${focused ? "#ff6b35" : "rgba(255,255,255,.18)"}`,
              borderRadius: 14, padding: "13px 16px", marginBottom: 18,
              transition: "all .28s",
              boxShadow: focused ? "0 0 0 3px rgba(255,107,53,.18)" : "none",
            }}
          >
            <span
              style={{
                fontSize: 14, color: "rgba(255,255,255,.75)",
                paddingRight: 14, marginRight: 14,
                borderRight: "1px solid rgba(255,255,255,.18)",
                display: "flex", alignItems: "center", gap: 6, flexShrink: 0,
                fontWeight: 600,
              }}
            >
              🇮🇳 IND
            </span>
            <input
              type="text"
              placeholder="DL 01 AB12XX"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              maxLength={13}
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                color: "#fff", fontSize: 17, letterSpacing: ".08em",
                fontWeight: 700, fontFamily: "Inter, sans-serif",
              }}
            />
          </div>

          <button
            className="vs-btn vs-btn-p vs-btn-lg"
            style={{ width: "100%", borderRadius: 14, justifyContent: "center", fontSize: 16 }}
          >
            Get Challan Details <ArrowRight size={20} />
          </button>

          <div
            style={{
              display: "flex", justifyContent: "center", gap: 28,
              marginTop: 18, fontSize: 13, color: "rgba(255,255,255,.45)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Shield size={14} /> 100% Secure
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Zap size={14} /> Instant Results
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "relative", zIndex: 10,
          width: "100%", marginTop: 48,
          background: "rgba(0,0,0,.32)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div className="vs-container hero-stats">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="hero-stats-divider"
              style={{
                textAlign: "center",
                padding: "20px 16px",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,.12)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.2,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
