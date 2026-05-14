import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MasterSection from "@/components/MasterSection";
import VideoSection from "@/components/VideoSection";
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
      <VideoSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
}
