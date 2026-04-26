import { CheckCircle, Shield, Zap } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import SectionHeading from "../ui/SectionHeading";

const SERVICES = [
  {
    icon: <CheckCircle style={{ width: 32, height: 32, color: "#f97316" }} />,
    title: "Challan Check",
    description: "Instantly check all pending challans for any vehicle across India.",
  },
  {
    icon: <Shield style={{ width: 32, height: 32, color: "#f97316" }} />,
    title: "Legal Resolution",
    description: "Certified lawyers handle your challan disputes end-to-end.",
  },
  {
    icon: <Zap style={{ width: 32, height: 32, color: "#f97316" }} />,
    title: "Quick Payment",
    description: "Pay challans online in seconds with secure OTP-verified flow.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "80px 0", backgroundColor: "#080c18" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeading
          title="Our"
          highlight="Services"
          subtitle="Everything you need to resolve challans — fast & legally."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}