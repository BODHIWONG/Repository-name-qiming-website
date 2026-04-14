import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-hero-DRikTXt9yeL9ZRYsLqL2XL.webp";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming.";

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Qiming Feng Shui Singapore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.012_75/0.95)] via-[oklch(0.97_0.012_75/0.82)] to-[oklch(0.97_0.012_75/0.18)]" />
      </div>

      <div className="relative container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
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
              {t("新加坡 · 奇门遁甲 · 风水命理", "Singapore · Qi Men Dunjia · Feng Shui")}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-bold leading-[1.02] mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              color: "oklch(0.12 0.02 60)",
              letterSpacing: "-0.02em",
            }}
          >
            Transform Your <br />
            <span style={{ color: "oklch(0.60 0.08 65)" }}>
              Luck, Wealth &amp; Inner Balance
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl mb-4 tracking-wide"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              color: "oklch(0.30 0.02 60)",
            }}
          >
            {t("稳住情绪 · 守住财富 · 调整能量", "Stabilise Emotions · Protect Wealth · Reset Energy")}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl text-base md:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
              color: "oklch(0.26 0.02 60)",
            }}
          >
            {t(
              "无论你正面对事业压力、财富风险、情绪困扰，还是家宅与空间气场不顺，启明大师通过奇门遁甲、八字与风水，为你提供清晰判断与可执行方案。",
              "Whether you are facing financial pressure, career uncertainty, emotional stress, or heavy space energy, Master Qiming provides clear guidance and practical solutions."
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
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "oklch(0.60 0.08 65)",
                color: "oklch(0.98 0.005 75)",
                letterSpacing: "0.12em",
              }}
            >
              {t("预约咨询", "Book Consultation")}
              <ArrowRight size={14} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase border transition-all duration-300 hover:bg-[oklch(0.12_0.02_60)] hover:text-[oklch(0.98_0.005_75)]"
              style={{
                fontFamily: "'Lato', sans-serif",
                border: "1.5px solid oklch(0.60 0.08 65)",
                color: "oklch(0.25 0.02 60)",
                letterSpacing: "0.12em",
              }}
            >
              {t("了解服务", "Explore Services")}
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-3 max-w-3xl"
          >
            {[
              t("赚钱与避险", "Wealth & Protection"),
              t("情绪与疗愈", "Healing & Balance"),
              t("空间能量净化", "Space Energy Clearing"),
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/65 backdrop-blur-sm border border-[oklch(0.88_0.018_70)] px-4 py-3 text-sm"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
              >
                <span className="mr-2 text-[oklch(0.60_0.08_65)]">✔</span>
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
            <span>Blk 210 New Upper Changi Road #01-729 Singapore 460210</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
