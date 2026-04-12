/*
  Navbar — Premium Advisory Firm × Wabi-Sabi Warmth
  Ivory background, deep brown text, gold accent
  Sticky with backdrop blur on scroll
*/
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

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
    { href: "#services", zh: "服务", en: "Services" },
    { href: "#space-purification", zh: "空间净化", en: "Space Purification" },
    { href: "#dual-needs", zh: "您的需求", en: "Your Needs" },
    { href: "#master", zh: "关于启明", en: "About Master" },
    { href: "#cases", zh: "成功案例", en: "Case Studies" },
    { href: "#products", zh: "风水美学产品", en: "Products" },
    { href: "#contact", zh: "预约咨询", en: "Book Now" },
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
        <a href="#" className="flex flex-col leading-tight group">
          <span
            style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
            className="text-xl md:text-2xl font-semibold text-[oklch(0.15_0.02_60)] tracking-wide group-hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300"
          >
            {t("启明风水美学", "Qiming Feng Shui")}
          </span>
          <span className="text-[0.6rem] font-light tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)]">
            {t("奇门 · 风水 · 疗愈", "Qimen · Feng Shui · Healing")}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[oklch(0.35_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
            >
              {t(link.zh, link.en)}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="hidden md:flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.50_0.02_65)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 border border-[oklch(0.88_0.018_70)] px-3 py-1.5 hover:border-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-gold text-xs py-2 px-4"
          >
            {t("WhatsApp 咨询", "WhatsApp")}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[oklch(0.15_0.02_60)]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.97_0.012_75)] border-t border-[oklch(0.88_0.018_70)] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-[oklch(0.25_0.02_60)] hover:text-[oklch(0.60_0.08_65)] transition-colors py-2 border-b border-[oklch(0.92_0.015_70)]"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
            >
              {t(link.zh, link.en)}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => { setLang(lang === "zh" ? "en" : "zh"); setMenuOpen(false); }}
              className="btn-outline-gold text-xs py-2 px-4 flex-1"
            >
              {lang === "zh" ? "English" : "中文"}
            </button>
            <a
              href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-2 px-4 flex-1 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
