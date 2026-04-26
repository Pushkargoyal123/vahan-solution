import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import TrustedSection from "../components/sections/TrustedSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import TrafficChallanInfoSection from "../components/sections/TrafficChallanInfoSection";
import AvoidChallansSection from "../components/sections/AvoidChallansSection";
import CTASection from "../components/sections/CTASection";
import NewTrafficRulesSection from "../components/sections/NewTrafficRulesSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <TrafficChallanInfoSection />
      <AvoidChallansSection />
      <NewTrafficRulesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}