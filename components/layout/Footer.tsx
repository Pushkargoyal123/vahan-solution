export default function Footer() {
  return (
    <footer
      style={{
        padding: "28px 0",
        textAlign: "center",
        fontSize: 12,
        color: "rgba(255,255,255,0.35)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "#0a0e1a",
      }}
    >
      © {new Date().getFullYear()} Vahan Solutions. All rights reserved.
    </footer>
  );
}