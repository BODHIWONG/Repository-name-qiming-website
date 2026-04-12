/*
  Footer — 启明风水美学
  Dark background, gold accents, Singapore-relevant social links
*/
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const { lang, t } = useLanguage();

  const navLinks = [
    { href: "#services", zh: "服务体系", en: "Services" },
    { href: "#dual-needs", zh: "您的需求", en: "Your Needs" },
    { href: "#master", zh: "关于启明", en: "About Master" },
    { href: "#cases", zh: "成功案例", en: "Case Studies" },
    { href: "#products", zh: "风水美学产品", en: "Products" },
    { href: "#contact", zh: "预约咨询", en: "Book Now" },
  ];

  return (
    <footer className="bg-[oklch(0.10_0.015_60)] border-t border-[oklch(0.20_0.02_60)]">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="display-heading text-xl text-white mb-1">
                {t("启明风水美学", "Qiming Feng Shui")}
              </p>
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)]">
                {t("奇门 · 风水 · 疗愈", "Qimen · Feng Shui · Healing")}
              </p>
            </div>
            <p className="text-xs text-[oklch(0.50_0.01_75)] leading-relaxed"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
              {t(
                "用现代逻辑解析传统奇门，用心理学疗愈都市高压。新加坡高端风水命理咨询。",
                "Decoding traditional Qimen with modern logic, healing urban stress with psychology. Premium feng shui consultation in Singapore."
              )}
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/qmfeng" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                <Instagram size={13} />
              </a>
              <a href="https://www.facebook.com/qmfeng" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                <Facebook size={13} />
              </a>
              <a href="https://www.youtube.com/@qmfeng" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                <Youtube size={13} />
              </a>
              <a href="https://www.tiktok.com/@qmfeng" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.25_0.02_60)] flex items-center justify-center text-[oklch(0.45_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300 text-[0.6rem] font-bold"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                TK
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("快速导航", "Quick Links")}
            </p>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-[oklch(0.50_0.01_75)] hover:text-[oklch(0.60_0.08_65)] transition-colors duration-300"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
                >
                  {t(link.zh, link.en)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("联系方式", "Contact")}
            </p>
            <div className="space-y-3 text-xs text-[oklch(0.50_0.01_75)]"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
              <p>Blk 210 New Upper Changi Road #01-729<br />Singapore 460210</p>
              <p>{t("营业时间：每日 10:00 — 20:00", "Hours: Daily 10:00 — 20:00")}</p>
              <a
                href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[oklch(0.60_0.08_65)] hover:text-[oklch(0.75_0.06_65)] transition-colors duration-300 font-semibold"
              >
                WhatsApp {t("预约", "Booking")} →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-line mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[0.65rem] text-[oklch(0.35_0.01_75)]"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          <p>© {new Date().getFullYear()} {t("启明风水美学 · 版权所有", "Qiming Feng Shui · All Rights Reserved")}</p>
          <p>
            {t(
              "本网站所有内容仅供参考，不构成任何专业建议。最终决策权在您。",
              "All content on this website is for reference only and does not constitute professional advice. Final decision-making authority rests with you."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
