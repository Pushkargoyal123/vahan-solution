"use client";

import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import Button from "../ui/Button";

const NAV_LINKS = ["Home", "Services", "About", "Contact", "Legal"];

function NavLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          backgroundColor: "#f97316",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Car style={{ width: 20, height: 20, color: "#fff" }} />
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#111827", lineHeight: 1.1 }}>Vahan</div>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#f97316",
          }}
        >
          Solutions
        </div>
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="nav-desktop-links" style={{ gap: 32, alignItems: "center" }}>
      {NAV_LINKS.map((item, i) => (
        <a
          key={item}
          href={"#" + item.toLowerCase()}
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: i === 0 ? "#f97316" : "#374151",
            textDecoration: "none",
            borderBottom: i === 0 ? "2px solid #f97316" : "none",
            paddingBottom: 2,
          }}
        >
          {item}
          {item === "Legal" ? " ▾" : ""}
        </a>
      ))}
    </div>
  );
}

function NavButtons() {
  return (
    <div className="nav-desktop-buttons" style={{ gap: 12, alignItems: "center" }}>
      <Button variant="outline" size="md">Login</Button>
      <Button variant="primary" size="md">🚀 Get Free Help</Button>
    </div>
  );
}

function MobileMenu({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <div
      className="nav-mobile-menu"
      style={{
        backgroundColor: "#fff",
        padding: "12px 24px 16px",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {NAV_LINKS.map((item) => (
        <a
          key={item}
          href={"#" + item.toLowerCase()}
          style={{ fontSize: 14, color: "#374151", textDecoration: "none" }}
        >
          {item}
        </a>
      ))}
      <Button variant="primary" size="md" fullWidth>🚀 Get Free Help</Button>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
      }}
    >
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-desktop-buttons { display: flex; }
        .nav-mobile-toggle { display: none; }
        .nav-mobile-menu { display: none; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-buttons { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          .nav-mobile-menu { display: flex !important; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLogo />
        <NavLinks />
        <NavButtons />

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#111827" }}
        >
          {menuOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
        </button>
      </div>

      <MobileMenu open={menuOpen} />
    </nav>
  );
}