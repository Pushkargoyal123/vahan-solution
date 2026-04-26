import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  /** If true, renders with a bordered box style (used in About section) */
  boxed?: boolean;
}

export default function StatCard({ value, label, boxed = false }: StatCardProps) {
  if (boxed) {
    return (
      <div
        style={{
          borderRadius: 16,
          padding: 24,
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 900, color: "#f97316" }}>{value}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{label}</div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontWeight: 900,
          color: "#f97316",
          fontSize: "clamp(1.1rem,2.5vw,1.6rem)",
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{label}</div>
    </div>
  );
}