"use client";

import { useState } from "react";
import { Shield, Zap, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  return (
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
        background: "#1e3a5f",
      }}
    >
      {/* Background Video - Traffic/Highway */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.4,
        }}
      >
        <source src="https://cdn.pixabay.com/video/2020/04/17/36617-410755929_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark blue overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(30, 58, 95, 0.85) 0%, rgba(20, 40, 70, 0.9) 100%)",
          zIndex: 1,
        }}
      />

      {/* Animated scrolling badges - Left side */}
      <div
        className="hero-badges-left"
        style={{
          position: "absolute",
          left: 20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {[
          { emoji: "🇮🇳", text: "PAN-India Challan Resolution Made Easy" },
          { emoji: "⚡", text: "Fast, Accurate & Hassle-Free" },
          { emoji: "🚗", text: "Drive Stress-Free – We Handle Your Challans" },
          { emoji: "✅", text: "5,00,000+ Challans Resolved Across India" },
        ].map((badge, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 107, 53, 0.3)",
              borderRadius: 12,
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              color: "#1a202c",
              fontWeight: 500,
              maxWidth: 280,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span style={{ fontSize: 18 }}>{badge.emoji}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </div>

      {/* Animated scrolling badges - Right side */}
      <div
        className="hero-badges-right"
        style={{
          position: "absolute",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {[
          { emoji: "😊", text: "30,000+ Happy Customers and Counting" },
          { emoji: "🎯", text: "98% Success Rate – High Accuracy Within TAT" },
          { emoji: "⚖️", text: "Certified Lawyers – Legal & Hassle-Free" },
          { emoji: "👣", text: "Settle in 3 Easy Steps" },
        ].map((badge, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 107, 53, 0.3)",
              borderRadius: 12,
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              color: "#1a202c",
              fontWeight: 500,
              maxWidth: 280,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span style={{ fontSize: 18 }}>{badge.emoji}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-badges-left,
          .hero-badges-right {
            display: none !important;
          }
        }
      `}</style>

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 16,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#ffffff",
          }}
        >
          Check & Pay<br />
          <span style={{ 
            color: "#ff6b35",
          }}>
            Traffic Challans
          </span>
        </h1>
        <h2
          style={{
            fontWeight: 700,
            marginBottom: 20,
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            color: "#ff6b35",
          }}
        >
          Anytime . Anywhere
        </h2>
        <p style={{ 
          color: "rgba(255,255,255,0.9)", 
          fontSize: 18, 
          marginBottom: 48,
          maxWidth: 600,
          margin: "0 auto 48px",
        }}>
          No queues. No court visits. Privacy-first OTP reveal — 100% secure & transparent.
        </p>

        {/* Vehicle Input Card */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 107, 53, 0.3)",
            borderRadius: 24,
            padding: "40px 32px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#718096",
              marginBottom: 20,
            }}
          >
            Enter Vehicle Number
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f7fafc",
              border: "2px solid #e2e8f0",
              borderRadius: 16,
              padding: "14px 18px",
              marginBottom: 20,
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: "#2d3748",
                paddingRight: 14,
                marginRight: 14,
                borderRight: "1px solid #cbd5e0",
                display: "flex",
                alignItems: "center",
                gap: 6,
                flexShrink: 0,
              }}
            >
              🇮🇳 IND
            </span>
            <input
              type="text"
              placeholder="DL 01 AB 1234"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
              maxLength={13}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#1a202c",
                fontSize: 16,
                letterSpacing: "0.1em",
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>

          <button
            style={{
              width: "100%",
              padding: "16px 24px",
              background: "#ff6b35",
              border: "none",
              borderRadius: 16,
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)",
            }}
          >
            Get Challan Details <ArrowRight style={{ width: 20, height: 20 }} />
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 20,
              fontSize: 13,
              color: "#718096",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Shield style={{ width: 14, height: 14 }} /> 100% Secure
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Zap style={{ width: 14, height: 14 }} /> Instant Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}