// components/SignUpModal.tsx
"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
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

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }: SignUpModalProps) {
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
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
            background: "#ffffff",
            borderRadius: "clamp(16px, 4vw, 20px)",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
            position: "relative",
            width: "100%",
            maxHeight: "calc(100vh - 40px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top gradient section with logo + tabs */}
          <div
            style={{
              background: "linear-gradient(160deg, #dce8f5 0%, #eaf0fa 100%)",
              padding: "clamp(20px, 4vw, 28px) clamp(20px, 4vw, 28px) 0",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "clamp(12px, 3vw, 14px)",
                right: "clamp(12px, 3vw, 14px)",
                background: "rgba(0,0,0,0.08)",
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: "clamp(6px, 2vw, 8px)" }}>
                  <SwirlLogo />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "clamp(15px, 3.5vw, 17px)", fontWeight: 800, color: "#1a202c", lineHeight: 1.1 }}>Vahan</div>
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
            <div style={{ display: "flex", gap: 0 }}>
              <button
                onClick={onSwitchToLogin}
                style={{
                  flex: 1,
                  padding: "clamp(10px, 2.5vw, 12px) 0",
                  border: "none",
                  background: "transparent",
                  fontSize: "clamp(13px, 3vw, 14px)",
                  fontWeight: 600,
                  color: "#718096",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "clamp(10px, 2.5vw, 12px) 0",
                  border: "none",
                  background: "#ffffff",
                  borderRadius: "clamp(10px, 2.5vw, 12px) clamp(10px, 2.5vw, 12px) 0 0",
                  fontSize: "clamp(13px, 3vw, 14px)",
                  fontWeight: 700,
                  color: "#1a202c",
                  cursor: "pointer",
                  boxShadow: "0 -2px 8px rgba(0,0,0,0.06)",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* White form section */}
          <div 
            style={{ 
              padding: "clamp(18px, 4vw, 24px) clamp(20px, 4vw, 28px) clamp(20px, 4vw, 28px)",
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            {/* Your Name */}
            <div style={{ marginBottom: "clamp(12px, 3vw, 14px)" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(12px, 3vw, 13px)",
                  fontWeight: 600,
                  color: "#4a5568",
                  marginBottom: "clamp(6px, 1.5vw, 7px)",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 14px)",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "clamp(8px, 2vw, 10px)",
                  fontSize: "clamp(13px, 3vw, 14px)",
                  color: "#1a202c",
                  outline: "none",
                  background: "#ffffff",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Vehicle Number */}
            <div style={{ marginBottom: "clamp(12px, 3vw, 14px)" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(12px, 3vw, 13px)",
                  fontWeight: 600,
                  color: "#4a5568",
                  marginBottom: "clamp(6px, 1.5vw, 7px)",
                }}
              >
                Vehicle Number
              </label>
              <input
                type="text"
                placeholder="DL01AB1234"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                maxLength={13}
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 14px)",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "clamp(8px, 2vw, 10px)",
                  fontSize: "clamp(13px, 3vw, 14px)",
                  color: "#1a202c",
                  outline: "none",
                  background: "#ffffff",
                  boxSizing: "border-box",
                  letterSpacing: "0.08em",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Phone Number */}
            <div style={{ marginBottom: "clamp(14px, 3.5vw, 18px)" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(12px, 3vw, 13px)",
                  fontWeight: 600,
                  color: "#4a5568",
                  marginBottom: "clamp(6px, 1.5vw, 7px)",
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 14px)",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "clamp(8px, 2vw, 10px)",
                  fontSize: "clamp(13px, 3vw, 14px)",
                  color: "#1a202c",
                  outline: "none",
                  background: "#ffffff",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
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
                marginBottom: "clamp(12px, 3vw, 14px)",
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
                marginBottom: "clamp(12px, 3vw, 14px)",
                position: "relative",
              }}
            >
              <span
                style={{
                  background: "#ffffff",
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
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
                marginBottom: "clamp(14px, 3.5vw, 18px)",
              }}
            >
              <span style={{ fontSize: "clamp(16px, 4vw, 18px)" }}>💬</span> Continue with WhatsApp
            </button>

            {/* Terms */}
            <p style={{ textAlign: "center", fontSize: "clamp(10.5px, 2.5vw, 11.5px)", color: "#a0aec0", margin: 0, lineHeight: 1.4 }}>
              By continuing you agree to our{" "}
              <a href="#" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>
                Terms
              </a>{" "}
              &{" "}
              <a href="#" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}