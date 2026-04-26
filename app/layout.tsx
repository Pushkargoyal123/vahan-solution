import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vahan Solutions – Check & Pay Traffic Challans",
  description: "No queues. No court visits. Privacy-first OTP reveal — 100% secure & transparent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}