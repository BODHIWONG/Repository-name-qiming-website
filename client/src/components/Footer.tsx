import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#services", zh: "三大主轴", en: "Three Pillars" },
    { href: "#master", zh: "关于启明", en: "Founder" },
    { href: "#contact", zh: "联系", en: "Contact" },
  ];

  return (
    <footer className="bg-[oklch(0.10_0.015_60)] border-t border-[oklch(0.20_0.02_60)]">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-logo_029b66c8.jpg"
                alt="Tian Yi He Hui"
                className="h-14 w-14 object-contain rounded-full border border-[oklch(0.35_0.04_65)]"
              />
              <div>
                <p className="display-heading text-lg text-white mb-0.5">
                  {t("天乙合会", "Tian Yi He Hui")}
                </p>
                <p className="text-[0.55rem] tracking-[0.22em] uppercase text-[oklch(0.60_0.08_65)]">
                  Eastern Strategic Intelligence
                </p>
              </div>
            </div>

            <p
              className="text-xs text-[oklch(0.50_0.01_75)] leading-relaxed"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
            >
              {t(
                "探索心识、环境、时机与战略觉察之间的深层关系。",
                "Exploring the relationship between mind, timing, environment and strategic awareness."
              )}
            </p>
          </div>

          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              Navigation
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

          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              Eastern Strategic Intelligence
            </p>

            <div
              className="space-y-3 text-xs text-[oklch(0.50_0.01_75)]"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
            >
              <p>
                {t(
                  "奇门决策 · 梵音疗愈 · 文化顾问",
                  "Qimen Strategy · Sacred Sound Healing · Cultural Advisory"
                )}
              </p>

              <p>Singapore</p>
            </div>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 text-[0.65rem] text-[oklch(0.35_0.01_75)]"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <p>
            © {new Date().getFullYear()} Tian Yi He Hui
          </p>

          <p>
            {t(
              "AI时代东方智慧平台",
              "Eastern wisdom platform for the AI era"
            )}
          </p>
        </div>
      </div>
    </footer>
