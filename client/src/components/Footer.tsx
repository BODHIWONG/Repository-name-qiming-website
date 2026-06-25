import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "/logo-qimen-strategy.png";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#services", zh: "顾问服务", en: "Services" },
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
                src={LOGO_URL}
                alt="Qimen Strategy Symbol"
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="display-heading text-lg text-white mb-0.5">
                  {t("启明遁甲", "Qimen Strategy")}
                </p>
                <p className="text-[0.55rem] tracking-[0.22em] uppercase text-[oklch(0.60_0.08_65)]">
                  Strategic Feng Shui Advisory
                </p>
              </div>
            </div>

            <p
              className="text-xs text-[oklch(0.50_0.01_75)] leading-relaxed"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
            >
              {t(
                "环境影响状态，状态影响决策，决策最终塑造结果。",
                "Environment shapes state, state shapes decisions, and decisions shape outcomes."
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
              Qimen Strategy
            </p>

            <div
              className="space-y-3 text-xs text-[oklch(0.50_0.01_75)]"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
            >
              <p>
                {t(
                  "奇门决策 · 战略风水 · 能量调频",
                  "Qi Men Decision Advisory · Strategic Feng Shui · Energy Alignment"
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
            © {new Date().getFullYear()} Qimen Strategy
          </p>

          <p>
            {t(
              "启明遁甲 · 新加坡",
              "Singapore-based strategic Feng Shui advisory"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
