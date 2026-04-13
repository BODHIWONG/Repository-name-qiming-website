/*
  Navbar — QIMING FENG SHUI · High-Conversion Ultimate Edition
  CTA: "Start Here" | "Deep Insight" | "Exclusive Consultation"
  NO generic "WhatsApp" as primary CTA
*/
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/6589418791?text=Hello%2C%20I%27d%20like%20a%20Deep%20Insight%20session%20with%20Master%20Qiming.";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", zh: "服务体系", en: "Services" },
    { href: "#master", zh: "关于启明", en: "About" },
    { href: "#cases", zh: "成功案例", en: "Cases" },
    { href: "#products", zh: "能量载体", en: "Catalysts" },
    { href: "#contact", zh: "联系我们", en: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.97_0.012_75/0.97)] backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.018_70)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-logo_029b66c8.jpg"
            alt="Qiming Feng Shui Logo"
            className="h-10 md:h-12 w-auto object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
          />
          <span style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
            className="hidden sm:block text-lg md:text-xl font-semibold text-[oklch(0.15_0.02_60)] tracking-wide group-hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300">
            {t("启明风水美学", "Qiming Feng Shui")}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-sm font-medium text-[oklch(0.35_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
              {t(link.zh, link.en)}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="hidden md:flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.50_0.02_65)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 border border-[oklch(0.88_0.018_70)] px-3 py-1.5 hover:border-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* Deep Insight CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            style={{ fontFamily: "'Lato', sans-serif", background: "oklch(0.60 0.08 65)", color: "oklch(0.98 0.005 75)", letterSpacing: "0.12em" }}>
            {t("深度洞察", "Deep Insight")}
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[oklch(0.15_0.02_60)]">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.97_0.012_75)] border-t border-[oklch(0.88_0.018_70)] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-[oklch(0.25_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors py-2 border-b border-[oklch(0.92_0.015_70)]"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
              {t(link.zh, link.en)}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button onClick={() => { setLang(lang === "zh" ? "en" : "zh"); setMenuOpen(false); }}
              className="text-xs py-2 px-4 flex-1 border border-[oklch(0.60_0.08_65)] text-[oklch(0.60_0.08_65)] font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              {lang === "zh" ? "English" : "中文"}
            </button>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="text-xs py-2 px-4 flex-1 text-center font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Lato', sans-serif", background: "oklch(0.60 0.08 65)", color: "oklch(0.98 0.005 75)" }}>
              {t("深度洞察", "Deep Insight")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
