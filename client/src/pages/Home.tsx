/*
  Home — QIMING FENG SHUI · High-Conversion Ultimate Edition
  
  Page Flow (陌生 → 信任 → 成交 → 高客单):
  1. Navbar
  2. HeroSection — Transform Your Luck & Wealth
  3. ServicesSection — 01 Awakening | 02 Alignment | 03 Mastery
  4. MasterSection — Trusted Presence (16+ years, real photo, lineage)
  5. CasesSection — Real Client Case Studies
  6. TestimonialsSection — Client Voices
  7. ProductsSection — Auspicious Catalysts 能量载体
  8. ContactSection — Visit Our Studio + Google Map
  9. Footer
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MasterSection from "@/components/MasterSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_75)]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MasterSection />
      <CasesSection />
      <TestimonialsSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
}
