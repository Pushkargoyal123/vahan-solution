// components/LoginModal.tsx
"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
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
          maxWidth: 380,
          padding: "0 16px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 60%)",
            borderRadius: 20,
            padding: "32px 28px 28px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "rgba(0,0,0,0.07)",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#4a5568",
            }}
          >
            <X style={{ width: 16, height: 16 }} />
          </button>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "#ff6b35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                🚗
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#1a202c",
                    lineHeight: 1.1,
                  }}
                >
                  Vahan
                </div>
                <div
                  style={{
                    fontSize: 9,
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
              borderRadius: 12,
              padding: 4,
              marginBottom: 24,
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
                  padding: "10px 0",
                  border: "none",
                  borderRadius: 9,
                  fontSize: 14,
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
              fontSize: 13,
              fontWeight: 600,
              color: "#4a5568",
              marginBottom: 8,
            }}
          >
            Phone Number
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1.5px solid #e2e8f0",
              borderRadius: 12,
              backgroundColor: "#ffffff",
              padding: "12px 16px",
              marginBottom: 16,
              gap: 10,
            }}
          >
            <span style={{ fontSize: 14, color: "#4a5568", flexShrink: 0 }}>
              🇮🇳 +91
            </span>
            <div style={{ width: 1, height: 18, background: "#e2e8f0" }} />
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
                fontSize: 15,
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
              padding: "14px 24px",
              background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
              border: "none",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)",
              marginBottom: 16,
            }}
          >
            Send OTP <ArrowRight style={{ width: 18, height: 18 }} />
          </button>

          {/* Divider */}
          <div
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#a0aec0",
              marginBottom: 16,
              position: "relative",
            }}
          >
            <span
              style={{
                background: "linear-gradient(160deg, #f0f4ff 0%, #ffffff 100%)",
                padding: "0 12px",
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
              padding: "14px 24px",
              background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
              border: "none",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 18 }}>💬</span> Continue with WhatsApp
          </button>

          {/* Terms */}
          <p
            style={{
              textAlign: "center",
              fontSize: 11.5,
              color: "#a0aec0",
              margin: 0,
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
