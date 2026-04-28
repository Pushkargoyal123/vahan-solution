// components/LoginModal.tsx
"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
}
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

export default function LoginModal({
  isOpen,
  onClose,
  onSwitchToSignUp,
}: LoginModalProps) {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 100,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 101,
          width: "100%",
          maxWidth: "min(420px, calc(100vw - 32px))",
          maxHeight: "calc(100vh - 40px)",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 60%)",
            borderRadius: "clamp(16px, 4vw, 20px)",
            padding: "clamp(24px, 5vw, 32px) clamp(20px, 4vw, 28px) clamp(20px, 4vw, 28px)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
            position: "relative",
            width: "100%",
            maxHeight: "calc(100vh - 40px)",
            overflowY: "auto",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "clamp(12px, 3vw, 14px)",
              right: "clamp(12px, 3vw, 14px)",
              background: "rgba(0,0,0,0.07)",
              border: "none",
              borderRadius: "50%",
              width: "clamp(28px, 7vw, 32px)",
              height: "clamp(28px, 7vw, 32px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#4a5568",
            }}
          >
            <X style={{ width: "clamp(14px, 3.5vw, 16px)", height: "clamp(14px, 3.5vw, 16px)" }} />
          </button>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "clamp(18px, 4vw, 24px)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(6px, 2vw, 8px)",
              }}
            >
              <SwirlLogo />
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "clamp(16px, 4vw, 18px)",
                    fontWeight: 800,
                    color: "#1a202c",
                    lineHeight: 1.1,
                  }}
                >
                  Vahan
                </div>
                <div
                  style={{
                    fontSize: "clamp(8px, 2vw, 9px)",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ff6b35",
                  }}
                >
                  Solutions
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              backgroundColor: "#edf2f7",
              borderRadius: "clamp(10px, 2.5vw, 12px)",
              padding: "clamp(3px, 1vw, 4px)",
              marginBottom: "clamp(18px, 4vw, 24px)",
            }}
          >
            {(["login", "signup"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  if (t === "signup") onSwitchToSignUp();
                  else setTab(t);
                }}
                style={{
                  flex: 1,
                  padding: "clamp(8px, 2vw, 10px) 0",
                  border: "none",
                  borderRadius: "clamp(8px, 2vw, 9px)",
                  fontSize: "clamp(13px, 3vw, 14px)",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: tab === t ? "#ffffff" : "transparent",
                  color: tab === t ? "#1a202c" : "#718096",
                  boxShadow: tab === t ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                }}
              >
                {t === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          {/* Phone input */}
          <label
            style={{
              display: "block",
              fontSize: "clamp(12px, 3vw, 13px)",
              fontWeight: 600,
              color: "#4a5568",
              marginBottom: "clamp(6px, 1.5vw, 8px)",
            }}
          >
            Phone Number
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1.5px solid #e2e8f0",
              borderRadius: "clamp(10px, 2.5vw, 12px)",
              backgroundColor: "#ffffff",
              padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)",
              marginBottom: "clamp(14px, 3vw, 16px)",
              gap: "clamp(8px, 2vw, 10px)",
            }}
          >
            <span style={{ fontSize: "clamp(13px, 3vw, 14px)", color: "#4a5568", flexShrink: 0 }}>
              🇮🇳 +91
            </span>
            <div style={{ width: 1, height: "clamp(16px, 4vw, 18px)", background: "#e2e8f0" }} />
            <input
              type="tel"
              placeholder="98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "clamp(14px, 3.5vw, 15px)",
                color: "#1a202c",
                fontWeight: 500,
                background: "transparent",
                letterSpacing: "0.04em",
              }}
            />
          </div>

          {/* Send OTP button */}
          <button
            style={{
              width: "100%",
              padding: "clamp(12px, 3vw, 14px) clamp(20px, 5vw, 24px)",
              background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
              border: "none",
              borderRadius: "clamp(10px, 2.5vw, 12px)",
              color: "#ffffff",
              fontSize: "clamp(14px, 3.5vw, 15px)",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(6px, 2vw, 8px)",
              boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)",
              marginBottom: "clamp(14px, 3vw, 16px)",
            }}
          >
            Send OTP <ArrowRight style={{ width: "clamp(16px, 4vw, 18px)", height: "clamp(16px, 4vw, 18px)" }} />
          </button>

          {/* Divider */}
          <div
            style={{
              textAlign: "center",
              fontSize: "clamp(11px, 2.5vw, 12px)",
              color: "#a0aec0",
              marginBottom: "clamp(14px, 3vw, 16px)",
              position: "relative",
            }}
          >
            <span
              style={{
                background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 100%)",
                padding: "0 clamp(10px, 2.5vw, 12px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              or get help on
            </span>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: 1,
                background: "#e2e8f0",
                zIndex: 0,
              }}
            />
          </div>

          {/* WhatsApp button */}
          <button
            style={{
              width: "100%",
              padding: "clamp(12px, 3vw, 14px) clamp(20px, 5vw, 24px)",
              background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
              border: "none",
              borderRadius: "clamp(10px, 2.5vw, 12px)",
              color: "#ffffff",
              fontSize: "clamp(14px, 3.5vw, 15px)",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(6px, 2vw, 8px)",
              boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
              marginBottom: "clamp(16px, 4vw, 20px)",
            }}
          >
            <span style={{ fontSize: "clamp(16px, 4vw, 18px)" }}>💬</span> Continue with WhatsApp
          </button>

          {/* Terms */}
          <p
            style={{
              textAlign: "center",
              fontSize: "clamp(10.5px, 2.5vw, 11.5px)",
              color: "#a0aec0",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            By continuing you agree to our{" "}
            <a
              href="#"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Terms
            </a>
            {" & "}
            <a
              href="#"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
