import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/logo-qimen-strategy.png";
const WA_LINK = "https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Tian%20Yi%20He%20Hui%20and%20Eastern%20Strategic%20Intelligence.";

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
    { href: "#services", zh: "三大主轴", en: "Three Pillars" },
    { href: "#master", zh: "关于启明", en: "Founder" },
    { href: "/journal-ai-era-eastern-intelligence", zh: "思想档案", en: "Journal" },
    { href: "#contact", zh: "联系", en: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.97_0.012_75/0.96)] backdrop-blur-md border-b border-[oklch(0.88_0.018_70)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        <a href="#" className="flex items-center gap-4 group">
          <img
            src={LOGO_URL}
            alt="Tian Yi He Hui Qimen Strategy Symbol"
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <span
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
              className="hidden sm:block text-xl md:text-2xl font-semibold text-[oklch(0.15_0.02_60)] tracking-wide group-hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300"
            >
              {t("天乙合会", "Tian Yi He Hui")}
            </span>
            <span className="hidden sm:block text-[0.7rem] tracking-[0.28em] uppercase text-[oklch(0.60_0.08_65)]">
              Eastern Strategic Intelligence
            </span>
          </div>
        </a>

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

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="hidden md:flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-[oklch(0.50_0.02_65)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300 border border-[oklch(0.88_0.018_70)] px-3 py-1.5 hover:border-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            {lang === "zh" ? "EN" : "中文"}
          </button>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: "oklch(0.60 0.08 65)",
              color: "oklch(0.98 0.005 75)",
              letterSpacing: "0.12em",
            }}
          >
            {t("东方洞察", "Strategic Insight")}
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[oklch(0.15_0.02_60)]">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

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
        </div>
      )}
    </header>
  );
}
