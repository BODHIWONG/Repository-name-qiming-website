import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-hero-DRikTXt9yeL9ZRYsLqL2XL.webp";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Master%20Qiming%2C%20I%20would%20like%20to%20understand%20Tian%20Yi%20He%20Hui%20and%20Eastern%20Strategic%20Intelligence.";

export default function HeroSection() {
  const { t } = useLanguage();

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: i * 0.12,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.96_0.015_80)]">
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Tian Yi He Hui Eastern Strategic Intelligence Singapore"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.012_75/0.98)] via-[oklch(0.97_0.012_75/0.88)] to-[oklch(0.97_0.012_75/0.30)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(165,111,62,0.16),transparent_38%)]" />
      </div>

      <div className="relative container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.68rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("天乙合会 · 新加坡", "Tian Yi He Hui · Singapore")}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-bold leading-[0.98] mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.1rem, 7vw, 6.4rem)",
              color: "oklch(0.12 0.02 60)",
              letterSpacing: "-0.025em",
            }}
          >
            Eastern Strategic <br />
            <span style={{ color: "oklch(0.60 0.08 65)" }}>
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xl md:text-2xl mb-4 tracking-wide"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              color: "oklch(0.30 0.02 60)",
            }}
          >
            {t(
              "心识 · 时机 · 环境 · 策略觉察",
              "Mind · Timing · Environment · Strategic Awareness"
            )}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl text-base md:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
              color: "oklch(0.26 0.02 60)",
            }}
          >
            {t(
              "天乙合会不是第二个风水服务站，而是黄启明大师面向未来建立的东方战略思想平台。它探索心识、时机、环境与人生决策之间的深层关系，承载奇门决策、梵音心源疗愈与文化策划三大方向。",
              "Tian Yi He Hui is not another Feng Shui service site. It is an Eastern strategic intelligence platform founded by Master Huang Qiming to explore the deeper relationship between mind, timing, environment and life decisions — integrating Qimen Strategy, sacred sound healing and cultural advisory."
            )}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "oklch(0.60 0.08 65)",
                color: "oklch(0.98 0.005 75)",
                letterSpacing: "0.12em",
              }}
            >
              {t("探索三大主轴", "Explore the Three Pillars")}
              <ArrowRight size={14} />
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase border transition-all duration-300 hover:bg-[oklch(0.12_0.02_60)] hover:text-[oklch(0.98_0.005_75)]"
              style={{
                fontFamily: "'Lato', sans-serif",
                border: "1.5px solid oklch(0.60 0.08 65)",
                color: "oklch(0.25 0.02 60)",
                letterSpacing: "0.12em",
              }}
            >
              {t("联系启明大师", "Contact Master Qiming")}
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-3 max-w-4xl"
          >
            {[
              t("奇门决策", "Qimen Strategy"),
              t("梵音心源疗愈", "Sacred Sound Healing"),
              t("文化策划与顾问", "Cultural Advisory"),
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm border border-[oklch(0.88_0.018_70)] px-4 py-3 text-sm"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
              >
                <span className="mr-2 text-[oklch(0.60_0.08_65)]">✦</span>
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 mt-10 text-xs text-[oklch(0.55_0.02_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <MapPin size={11} className="text-[oklch(0.60_0.08_65)]" />
            <span>Singapore · Founded by Master Huang Qiming</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
