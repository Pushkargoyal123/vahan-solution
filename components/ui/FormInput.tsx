import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function FormInput({ style, ...props }: FormInputProps) {
  return (
    <input
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontSize: 13,
        outline: "none",
        boxSizing: "border-box",
        fontFamily: "'Poppins', sans-serif",
        ...style,
      }}
      {...props}
    />
  );
}