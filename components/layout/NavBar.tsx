"use client";

import { useState } from "react";
import { Car, Menu, X } from "lucide-react";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

function NavLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "#ff6b35",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Car style={{ width: 22, height: 22, color: "#fff" }} />
      </div>
      <div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          Vahan
        </div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#60a5fa",
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
    <div
      className="nav-desktop-links"
      style={{ gap: 32, alignItems: "center" }}
    >
      {NAV_LINKS.map((item, i) => (
        <a
          key={item}
          href={"#" + item.toLowerCase()}
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b35")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)")
          }
        >
          {item}
        </a>
      ))}
    </div>
  );
}

function NavButtons({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <div
      className="nav-desktop-buttons"
      style={{ gap: 12, alignItems: "center" }}
    >
      <button
        onClick={onLoginClick}
        style={{
          padding: "10px 24px",
          background: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: 10,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Login
      </button>
      <button
        style={{
          padding: "10px 24px",
          background: "#ff6b35",
          border: "none",
          borderRadius: 10,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        🚀 Get Free Help
      </button>
    </div>
  );
}

function MobileMenu({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <div
      className="nav-mobile-menu"
      style={{
        backgroundColor: "#1e3a5f",
        padding: "20px 24px",
        flexDirection: "column",
        gap: 16,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {NAV_LINKS.map((item) => (
        <a
          key={item}
          href={"#" + item.toLowerCase()}
          style={{
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
          }}
        >
          {item}
        </a>
      ))}
      <button
        style={{
          width: "100%",
          padding: "12px 24px",
          background: "#ff6b35",
          border: "none",
          borderRadius: 10,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        🚀 Get Free Help
      </button>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<"none" | "login" | "signup">("none");

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#1e3a5f",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
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
          <NavButtons  onLoginClick={() => setModal("login")}/>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
            }}
          >
            {menuOpen ? (
              <X style={{ width: 24, height: 24 }} />
            ) : (
              <Menu style={{ width: 24, height: 24 }} />
            )}
          </button>
        </div>

        <MobileMenu open={menuOpen} />
      </nav>
       <LoginModal
        isOpen={modal === "login"}
        onClose={() => setModal("none")}
        onSwitchToSignUp={() => setModal("signup")}  // add this prop to LoginModal too
      />
      <SignUpModal
        isOpen={modal === "signup"}
        onClose={() => setModal("none")}
        onSwitchToLogin={() => setModal("login")}
      />
    </>
  );
}
