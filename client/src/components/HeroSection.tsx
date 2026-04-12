/*
  HeroSection — Premium Advisory Firm × Wabi-Sabi Warmth
  Full-screen hero with luxury Singapore consultation room background
  Dark overlay text on light background image
  Asymmetric layout: text left, image right
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-hero-DRikTXt9yeL9ZRYsLqL2XL.webp";

export default function HeroSection() {
  const { lang, t } = useLanguage();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="启明风水美学咨询空间"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay — light image so use dark text, overlay is subtle warm tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.012_75/0.88)] via-[oklch(0.97_0.012_75/0.70)] to-[oklch(0.97_0.012_75/0.15)]" />
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="gold-line w-12" style={{ height: "1px" }} />
            <span className="section-label">
              {t("新加坡 · 奇门遁甲 · 风水命理", "Singapore · Qimen Dunjia · Feng Shui")}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="display-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6"
          >
            {lang === "zh" ? (
              <>
                用逻辑拆解<br />
                <em className="text-[oklch(0.60_0.08_65)] not-italic">传统奇门</em><br />
                用心理学疗愈<br />
                <em className="text-[oklch(0.60_0.08_65)] not-italic">都市高压</em>
              </>
            ) : (
              <>
                Decode Ancient Wisdom<br />
                with <em className="text-[oklch(0.60_0.08_65)] not-italic">Modern Logic</em><br />
                Heal Urban Stress<br />
                with <em className="text-[oklch(0.60_0.08_65)] not-italic">Psychology</em>
              </>
            )}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base md:text-lg text-[oklch(0.35_0.02_60)] leading-relaxed mb-3 max-w-xl"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "不是算命，是参与您的重大决策。结合奇门遁甲实战推演与清华积极心理学，为新加坡高净值人群提供精准的人生战略咨询。",
              "Not fortune-telling. We participate in your critical decisions. Combining Qimen Dunjia strategy with Tsinghua Positive Psychology for Singapore's high-value professionals."
            )}
          </motion.p>

          {/* Brand Philosophy Quote */}
          <motion.blockquote
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="border-l-2 border-[oklch(0.60_0.08_65)] pl-4 my-6 text-sm italic text-[oklch(0.45_0.02_60)]"
            style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif" }}
          >
            {t(
              "「风水是外力，奇门是工具。最终能疗愈和改变你的，永远是你自己的心念。」",
              '"Feng Shui is external force, Qimen is the tool. What truly heals and transforms you is always your own mindset."'
            )}
          </motion.blockquote>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs text-[oklch(0.40_0.02_60)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)]" />
              {t("16年实战经验", "16+ Years Practice")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)]" />
              {t("奇门遁甲传承人", "Qimen Dunjia Lineage Holder")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)]" />
              {t("清华积极心理学指导师", "Tsinghua Positive Psychology Instructor")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)]" />
              {t("新加坡实体门店", "Singapore Physical Shop")}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#dual-needs"
              className="btn-gold inline-flex items-center gap-2"
            >
              {t("了解您的需求", "Explore Your Needs")}
              <ArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-2"
            >
              {t("立即预约咨询", "Book Consultation")}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 mt-8 text-xs text-[oklch(0.50_0.02_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <MapPin size={12} className="text-[oklch(0.60_0.08_65)]" />
            <span>Blk 210 New Upper Changi Road #01-729 Singapore 460210</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[oklch(0.60_0.08_65)]">
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
