/*
  HeroSection — QIMING FENG SHUI · High-Conversion Ultimate Edition
  Design: Three-layer card system (Light → White → Black+Gold)
  
  Hero Philosophy:
  - EN headline (closes deals): Transform Your Luck & Wealth
  - ZH subheading (energy/aura): 掌控你的运势 · 重构你的人生路径
  - Core sentence: We don't sell Feng Shui. We deliver certainty in your life direction.
  - CTA: Start Here (引流) | Deep Insight (成交)
  - NO "Learn More" / NO "Contact Us" / NO "WhatsApp" as primary CTA
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-hero-DRikTXt9yeL9ZRYsLqL2XL.webp";
const WA_LINK = "https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming.";

export default function HeroSection() {
  const { t } = useLanguage();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.14, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Qiming Feng Shui Singapore Consultation Space"
          className="w-full h-full object-cover"
        />
        {/* Light image → warm ivory overlay, dark text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.012_75/0.92)] via-[oklch(0.97_0.012_75/0.75)] to-[oklch(0.97_0.012_75/0.10)]" />
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">

          {/* Brand Label */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("新加坡 · 奇门遁甲 · 风水命理", "Singapore · Qimen Dunjia · Feng Shui")}
            </span>
          </motion.div>

          {/* EN Main Headline — closes deals, large + bold */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-bold leading-[1.05] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "oklch(0.12 0.02 60)",
              letterSpacing: "-0.01em",
            }}
          >
            Transform Your<br />
            <em className="not-italic" style={{ color: "oklch(0.60 0.08 65)" }}>Luck &amp; Wealth</em>
          </motion.h1>

          {/* ZH Sub-headline — aura/energy, smaller */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl mb-6 tracking-wider"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              color: "oklch(0.30 0.02 60)",
              fontWeight: 400,
            }}
          >
            {t("掌控你的运势 · 重构你的人生路径", "Take Command of Your Destiny · Reshape Your Life Path")}
          </motion.p>

          {/* Core Sentence — the real positioning */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 max-w-lg"
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                color: "oklch(0.25 0.02 60)",
                fontStyle: "italic",
              }}
            >
              {t(
                "我们不是在卖风水。\n我们给你的，是对人生方向的确定性。",
                "We don't sell Feng Shui.\nWe deliver certainty in your life direction."
              )}
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-xs text-[oklch(0.45_0.02_60)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {[
              t("16+ 年实战经验", "16+ Years Experience"),
              t("奇门遁甲传承人", "Qimen Lineage Holder"),
              t("清华积极心理学", "Tsinghua Psychology"),
              t("新加坡实体门店", "Bedok Physical Studio"),
            ].map((badge, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)]" />
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA — ONLY "Start Here" + "Deep Insight" */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            {/* Primary: Start Here (引流) */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "oklch(0.60 0.08 65)",
                color: "oklch(0.98 0.005 75)",
                letterSpacing: "0.12em",
              }}
            >
              {t("从这里开始", "Start Here")}
              <ArrowRight size={14} />
            </a>

            {/* Secondary: Deep Insight (成交) */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-widest uppercase border transition-all duration-300 hover:bg-[oklch(0.12_0.02_60)] hover:text-[oklch(0.98_0.005_75)] hover:border-[oklch(0.12_0.02_60)]"
              style={{
                fontFamily: "'Lato', sans-serif",
                border: "1.5px solid oklch(0.60 0.08 65)",
                color: "oklch(0.25 0.02 60)",
                letterSpacing: "0.12em",
              }}
            >
              {t("深度洞察", "Deep Insight")}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 mt-10 text-xs text-[oklch(0.55_0.02_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <MapPin size={11} className="text-[oklch(0.60_0.08_65)]" />
            <span>Blk 210 New Upper Changi Road #01-729 Singapore 460210</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] tracking-[0.35em] uppercase text-[oklch(0.60_0.08_65)]"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          {t("向下探索", "Scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[oklch(0.60_0.08_65)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
