import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 24,
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ marginBottom: 14 }}>{icon}</div>
      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{description}</p>
    </div>
  );
}