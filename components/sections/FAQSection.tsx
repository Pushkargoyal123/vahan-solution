"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    question: "Do I need to provide my mobile number to check challans?",
    answer: "No — just your vehicle number is enough to initiate the check. OTP is only used to securely reveal full challan details.",
  },
  {
    question: "Can I choose which specific challans to pay?",
    answer: "Yes! You can select exactly which challans you want to pay. We don't force bulk payments.",
  },
  {
    question: "How long does challan processing take?",
    answer: "Most challans are processed instantly. Court challans may take 7-15 days depending on the jurisdiction.",
  },
  {
    question: "Can I get a waiver on my challan fine?",
    answer: "Yes, waivers are available for compoundable offences if you have valid RC, DL, and PUC certificates. Our experts help maximize your waiver eligibility.",
  },
  {
    question: "How are payments processed?",
    answer: "We accept UPI, credit/debit cards, and net banking. All payments are 100% secure and encrypted.",
  },
  {
    question: "Is my vehicle and personal data safe?",
    answer: "Absolutely. We use bank-grade encryption and never share your data with third parties. Your privacy is our priority.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f7fafc" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
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
            GOT QUESTIONS?
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1a202c",
              marginBottom: 16,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#718096",
            }}
          >
            Everything you need to know before you start
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: openIndex === i ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: openIndex === i ? "#2563eb" : "#1a202c",
                  }}
                >
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp
                    style={{
                      width: 20,
                      height: 20,
                      color: "#2563eb",
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <ChevronDown
                    style={{
                      width: 20,
                      height: 20,
                      color: "#718096",
                      flexShrink: 0,
                    }}
                  />
                )}
              </button>
              {openIndex === i && (
                <div
                  style={{
                    padding: "0 24px 20px 24px",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#718096",
                    borderTop: "1px solid #f7fafc",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
