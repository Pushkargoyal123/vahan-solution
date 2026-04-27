// components/SignUpModal.tsx
"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
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
          maxWidth: 380,
          padding: "0 16px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
            position: "relative",
          }}
        >
          {/* Top gradient section with logo + tabs */}
          <div
            style={{
              background: "linear-gradient(160deg, #dce8f5 0%, #eaf0fa 100%)",
              padding: "28px 28px 0",
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
                background: "rgba(0,0,0,0.08)",
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "#ff6b35",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                  }}
                >
                  🚗
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#1a202c", lineHeight: 1.1 }}>Vahan</div>
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
            <div style={{ display: "flex", gap: 0 }}>
              <button
                onClick={onSwitchToLogin}
                style={{
                  flex: 1,
                  padding: "12px 0",
                  border: "none",
                  background: "transparent",
                  fontSize: 14,
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
                  padding: "12px 0",
                  border: "none",
                  background: "#ffffff",
                  borderRadius: "12px 12px 0 0",
                  fontSize: 14,
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
          <div style={{ padding: "24px 28px 28px" }}>
            {/* Your Name */}
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#4a5568",
                  marginBottom: 7,
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
                  padding: "12px 14px",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  fontSize: 14,
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
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#4a5568",
                  marginBottom: 7,
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
                  padding: "12px 14px",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  fontSize: 14,
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
            <div style={{ marginBottom: 18 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#4a5568",
                  marginBottom: 7,
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
                  padding: "12px 14px",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  fontSize: 14,
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
                marginBottom: 14,
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
                marginBottom: 14,
                position: "relative",
              }}
            >
              <span
                style={{
                  background: "#ffffff",
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
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
                marginBottom: 18,
              }}
            >
              <span style={{ fontSize: 18 }}>💬</span> Continue with WhatsApp
            </button>

            {/* Terms */}
            <p style={{ textAlign: "center", fontSize: 11.5, color: "#a0aec0", margin: 0 }}>
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