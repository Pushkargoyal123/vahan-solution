"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";

const NAV_LINKS = [
  { label: "Home",     href: "#home",     id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About",    href: "#about",    id: "about" },
  { label: "Contact",  href: "#contact",  id: "contact" },
];

function SwirlLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="nav-logo-swirl"
      aria-hidden="true"
    >
      {/* Yin-yang swirl: orange right half, blue left half */}
      <path d="M18,2 A16,16 0 0,1 18,34 A8,8 0 0,0 18,18 A8,8 0 0,1 18,2 Z" fill="#ff6b35" />
      <path d="M18,2 A16,16 0 0,0 18,34 A8,8 0 0,1 18,18 A8,8 0 0,0 18,2 Z" fill="#3b82f6" />
      <circle cx="18" cy="10" r="3.5" fill="#3b82f6" />
      <circle cx="18" cy="26" r="3.5" fill="#ff6b35" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [modal, setModal] = useState<"none" | "login" | "signup">("none");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav className={`nav-root ${scrolled ? "nav-scrolled" : "nav-top"}`}>
        {/* Main bar */}
        <div className="nav-inner">
          {/* Logo */}
          <a
            href="#home"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            <SwirlLogo />
            <div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "var(--text)", lineHeight: 1.1 }}>
                Vahan
              </div>
              <div
                style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "var(--primary)",
                }}
              >
                Solutions
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link ${activeSection === l.id ? "nav-link-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className="nav-btn-login" onClick={() => setModal("login")}>
              Login
            </button>
            <button
              className="vs-btn vs-btn-p"
              style={{ padding: "9px 18px", fontSize: 14, borderRadius: 10 }}
            >
              <MessageCircle size={16} /> Get Free Help
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", color: "var(--text)", alignItems: "center", padding: 4,
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-mobile-link ${activeSection === l.id ? "nav-mobile-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 12, marginTop: 6,
                display: "flex", flexDirection: "column", gap: 8,
              }}
            >
              <button
                className="nav-btn-login"
                onClick={() => { setModal("login"); setMenuOpen(false); }}
                style={{ width: "100%", borderRadius: 8, padding: 11 }}
              >
                Login
              </button>
              <button
                className="vs-btn vs-btn-p"
                style={{ width: "100%", justifyContent: "center", borderRadius: 8, padding: 12 }}
              >
                <MessageCircle size={16} /> Get Free Help
              </button>
            </div>
          </div>
        )}
      </nav>

      <LoginModal
        isOpen={modal === "login"}
        onClose={() => setModal("none")}
        onSwitchToSignUp={() => setModal("signup")}
      />
      <SignUpModal
        isOpen={modal === "signup"}
        onClose={() => setModal("none")}
        onSwitchToLogin={() => setModal("login")}
      />
    </>
  );
}
