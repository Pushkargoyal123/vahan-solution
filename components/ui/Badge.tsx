import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

export default function Badge({ icon, text }: BadgeProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        color: "#fff",
        backgroundColor: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 9999,
        padding: "8px 16px",
        maxWidth: 215,
      }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}