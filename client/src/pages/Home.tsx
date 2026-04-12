/*
  Home — 启明风水美学 | Qiming Prosperity Feng Shui
  Design: Premium Advisory Firm × Wabi-Sabi Warmth
  
  Page Structure:
  1. Navbar (sticky)
  2. HeroSection (full-screen, asymmetric)
  3. DualNeedsSection (career + healing)
  4. BlueOceanSection (dark, comparison)
  5. ServicesSection (three-tier funnel)
  5b. SpacePurificationSection (core advantage)
  6. MasterSection (credentials)
  7. CasesSection (business cases)
  8. TestimonialsSection (client voices)
  9. ProductsSection (Tongshifu)
  10. InsightsSection (content marketing)
  11. ContactSection (dark, WhatsApp CTA)
  12. Footer
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DualNeedsSection from "@/components/DualNeedsSection";
import BlueOceanSection from "@/components/BlueOceanSection";
import ServicesSection from "@/components/ServicesSection";
import SpacePurificationSection from "@/components/SpacePurificationSection";
import MasterSection from "@/components/MasterSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsSection from "@/components/ProductsSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />
      <HeroSection />
      <DualNeedsSection />
      <BlueOceanSection />
      <ServicesSection />
      <SpacePurificationSection />
      <MasterSection />
      <CasesSection />
      <TestimonialsSection />
      <ProductsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
}
