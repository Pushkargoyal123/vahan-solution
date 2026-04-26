import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}