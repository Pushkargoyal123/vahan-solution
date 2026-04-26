"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // TODO: wire up to API
    console.log({ name, email, message });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <FormInput
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.05)",
          color: "#fff",
          fontSize: 13,
          outline: "none",
          resize: "none",
          boxSizing: "border-box",
          fontFamily: "'Poppins', sans-serif",
        }}
      />
      <Button
        variant="primary"
        size="lg"
        fullWidth
        style={{ borderRadius: 12 }}
        onClick={handleSubmit}
      >
        Send Message
      </Button>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "80px 0", backgroundColor: "#080c18" }}>
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <SectionHeading
          title="Get in"
          highlight="Touch"
          subtitle="Our experts are ready to help you resolve challans hassle-free."
        />
        <ContactForm />
      </div>
    </section>
  );
}