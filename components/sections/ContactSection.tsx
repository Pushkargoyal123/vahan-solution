"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" style={{ padding: "80px 0", backgroundColor: "#f7fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ff6b35",
              marginBottom: 12,
            }}
          >
            Get in Touch
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1a202c",
              marginBottom: 16,
            }}
          >
            Ready to Clear Your Challans?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#718096",
            }}
          >
            Join 5 million+ users who trust Vahan Solutions
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              padding: 32,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#ff6b35",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Phone style={{ width: 28, height: 28, color: "#ffffff" }} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a202c", marginBottom: 8 }}>
              Call Us
            </h3>
            <p style={{ fontSize: 14, color: "#718096" }}>
              +91 93119 33793
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              padding: 32,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#ff6b35",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <MessageCircle style={{ width: 28, height: 28, color: "#ffffff" }} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a202c", marginBottom: 8 }}>
              WhatsApp
            </h3>
            <a 
              href="https://wa.me/919311933793"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                fontSize: 14, 
                color: "#718096",
                textDecoration: "none"
              }}
            >
              Chat with us instantly
            </a>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              padding: 32,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#ff6b35",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <Mail style={{ width: 28, height: 28, color: "#ffffff" }} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a202c", marginBottom: 8 }}>
              Email Us
            </h3>
            <p style={{ fontSize: 14, color: "#718096" }}>
              help@vahansolutions.com
            </p>
          </div>
        </div>

        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 20,
            padding: 40,
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#1a202c",
                fontSize: 14,
                outline: "none",
                fontFamily: "Inter, sans-serif",
              }}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#1a202c",
                fontSize: 14,
                outline: "none",
                fontFamily: "Inter, sans-serif",
              }}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#1a202c",
                fontSize: 14,
                outline: "none",
                fontFamily: "Inter, sans-serif",
              }}
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                padding: "14px 18px",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#1a202c",
                fontSize: 14,
                outline: "none",
                resize: "none",
                fontFamily: "Inter, sans-serif",
              }}
              required
            />
            <button
              type="submit"
              style={{
                padding: "16px 24px",
                background: "#ff6b35",
                border: "none",
                borderRadius: 12,
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                transition: "all 0.3s ease",
              }}
            >
              Send Message <Send style={{ width: 18, height: 18 }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}