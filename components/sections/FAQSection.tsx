"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Do I need to provide my mobile number to check challans?",
    answer:
      "No — just your vehicle number is enough to initiate the check. OTP is only used to securely reveal full challan details.",
  },
  {
    question: "Can I choose which specific challans to pay?",
    answer:
      "Yes! You can select exactly which challans you want to pay. We don't force bulk payments.",
  },
  {
    question: "How long does challan processing take?",
    answer:
      "Most challans are processed instantly. Court challans may take 7–15 days depending on the jurisdiction.",
  },
  {
    question: "Can I get a waiver on my challan fine?",
    answer:
      "Yes, waivers are available for compoundable offences if you have valid RC, DL, and PUC certificates. Our experts help maximize your waiver eligibility.",
  },
  {
    question: "How are payments processed?",
    answer:
      "We accept UPI, credit/debit cards, and net banking. All payments are 100% secure and encrypted.",
  },
  {
    question: "Is my vehicle and personal data safe?",
    answer:
      "Absolutely. We use bank-grade encryption and never share your data with third parties. Your privacy is our priority.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)" }}>
      <div className="vs-container" style={{ maxWidth: 860 }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="vs-label">Got Questions?</span>
          <h2 className="vs-h2">Frequently Asked Questions</h2>
          <p className="vs-body" style={{ marginTop: 12 }}>
            Everything you need to know before you start
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <button
                className="faq-btn"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-q">{faq.question}</span>
                <div className="faq-icon">
                  <ChevronDown size={16} />
                </div>
              </button>
              {openIndex === i && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
