import React from "react";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  /** Which part gets the orange highlight — "prefix" puts highlight before title, "suffix" after */
  highlightPosition?: "prefix" | "suffix";
  subtitle?: string;
}

export default function SectionHeading({
  title,
  highlight,
  highlightPosition = "suffix",
  subtitle,
}: SectionHeadingProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: 0 }}>
        {highlightPosition === "prefix" ? (
          <>
            <span style={{ color: "#f97316" }}>{highlight}</span> {title}
          </>
        ) : (
          <>
            {title} <span style={{ color: "#f97316" }}>{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginTop: 10, marginBottom: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}