import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(90deg,#ea6c0a,#f97316)",
    color: "#fff",
    border: "none",
    boxShadow: "0 6px 24px rgba(249,115,22,0.45)",
  },
  outline: {
    background: "transparent",
    color: "#1d4ed8",
    border: "1.5px solid #1d4ed8",
  },
  ghost: {
    background: "none",
    color: "#374151",
    border: "none",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "6px 16px", fontSize: 13 },
  md: { padding: "8px 22px", fontSize: 14 },
  lg: { padding: "15px 24px", fontSize: 15 },
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      style={{
        borderRadius: 9999,
        fontWeight: 700,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        width: fullWidth ? "100%" : undefined,
        fontFamily: "'Poppins', sans-serif",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}