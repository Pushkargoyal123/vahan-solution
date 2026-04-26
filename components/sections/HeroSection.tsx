"use client";

import { useState } from "react";
import {
  MapPin, Zap, Car, CheckCircle, Star, Shield,
  Users, TrendingUp, Award, ArrowRight,
} from "lucide-react";
import Badge from "../ui/Badge";
import StatCard from "../ui/StatCard";
import Button from "../ui/Button";

/* ── Data ─────────────────────────────────────────────── */

const LEFT_BADGES = [
  { icon: <MapPin style={{ width: 16, height: 16, color: "#60a5fa" }} />, text: "PAN-India Challan Resolution Made Easy" },
  { icon: <Zap style={{ width: 16, height: 16, color: "#facc15" }} />, text: "Fast, Accurate & Hassle-Free" },
  { icon: <Car style={{ width: 16, height: 16, color: "#4ade80" }} />, text: "Drive Stress-Free – We Handle Your Challans" },
  { icon: <CheckCircle style={{ width: 16, height: 16, color: "#34d399" }} />, text: "5,00,000+ Challans Resolved Across India" },
];

const RIGHT_BADGES = [
  { icon: <Users style={{ width: 16, height: 16, color: "#f472b6" }} />, text: "30,000+ Happy Customers and Counting" },
  { icon: <Star style={{ width: 16, height: 16, color: "#facc15" }} />, text: "98% Success Rate – High Accuracy Within TAT" },
  { icon: <Award style={{ width: 16, height: 16, color: "#60a5fa" }} />, text: "Certified Lawyers – Legal & Hassle-Free" },
  { icon: <TrendingUp style={{ width: 16, height: 16, color: "#4ade80" }} />, text: "Settle in 3 Easy Steps" },
];

const HERO_STATS = [
  { value: "20K+", label: "Happy Users Trust Our Platform" },
  { value: "₹10 lakh+", label: "Challans Cleared" },
  { value: "Upto 60%", label: "Waiver Savings On Bulk Deals" },
];

/* ── Sub-components ───────────────────────────────────── */

function HeroBadgeColumn({
  badges,
  side,
}: {
  badges: typeof LEFT_BADGES;
  side: "left" | "right";
}) {
  return (
    <div
      className="hero-badges"
      style={{
        position: "absolute",
        [side]: 20,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 10,
      }}
    >
      {badges.map((b, i) => (
        <Badge key={i} icon={b.icon} text={b.text} />
      ))}
    </div>
  );
}

function HeroHeading() {
  return (
    <>
      <h1
        style={{
          fontWeight: 900,
          lineHeight: 1.15,
          marginBottom: 4,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "#ffffff",
          textShadow: "0 2px 20px rgba(0,0,0,0.5)",
        }}
      >
        Check &amp; Pay<br />Traffic Challans
      </h1>
      <h2
        style={{
          fontWeight: 900,
          marginBottom: 16,
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
    </>
  );
}

function VehicleInputCard() {
  const [vehicleNumber, setVehicleNumber] = useState("");

  return (
    <div
      style={{
        backgroundColor: "rgba(15,25,60,0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 20,
        padding: "28px 24px",
        boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          marginBottom: 16,
        }}
      >
        Enter Vehicle Number
      </p>

      {/* Vehicle number input */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 12,
          padding: "10px 14px",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            paddingRight: 12,
            marginRight: 12,
            borderRight: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexShrink: 0,
          }}
        >
          🇮🇳 IND
        </span>
        <input
          type="text"
          placeholder="DL 01 AB12XX"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
          maxLength={11}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontSize: 15,
            letterSpacing: "0.12em",
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
          }}
        />
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        style={{ borderRadius: 12 }}
      >
        Get Challan Details <ArrowRight style={{ width: 20, height: 20 }} />
      </Button>

      {/* Trust indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 28,
          marginTop: 14,
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Shield style={{ width: 12, height: 12 }} /> 100% Secure
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Zap style={{ width: 12, height: 12 }} /> Instant Results
        </span>
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 16,
        marginTop: 28,
      }}
    >
      {HERO_STATS.map((s, i) => (
        <StatCard key={i} value={s.value} label={s.label} />
      ))}
    </div>
  );
}

/* ── Main Section ─────────────────────────────────────── */

export default function HeroSection() {
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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545060894-9b24f8cfb9d9?w=1600&auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <style>{`
        .hero-badges { display: flex; }
        @media (max-width: 1024px) {
          .hero-badges { display: none !important; }
        }
      `}</style>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, rgba(5,15,45,0.82) 0%, rgba(10,20,60,0.75) 60%, rgba(5,10,35,0.85) 100%)",
        }}
      />

      <HeroBadgeColumn badges={LEFT_BADGES} side="left" />
      <HeroBadgeColumn badges={RIGHT_BADGES} side="right" />

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 620,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <HeroHeading />
        <VehicleInputCard />
        <HeroStats />
      </div>
    </section>
  );
}