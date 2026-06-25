import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-hero-DRikTXt9yeL9ZRYsLqL2XL.webp";

const WA_LINK =
  "https://wa.me/6589418791?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20consult%20about%20Qi%20Men%20Dun%20Jia%20Strategic%20Decision%20Advisory%20in%20Singapore.";

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
          alt="Qimen Strategy Strategic Feng Shui and Qi Men Decision Advisory Singapore"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.012_75/0.98)] via-[oklch(0.97_0.012_75/0.88)] to-[oklch(0.97_0.012_75/0.30)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(165,111,62,0.16),transparent_38%)]" />
      </div>

      <div className="relative container pt-32 pb-20 md:pt-40 md:pb-28">
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
              {t("启明遁甲 · 新加坡", "Qimen Strategy · Singapore")}
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
            Qimen <br />
            <span style={{ color: "oklch(0.60 0.08 65)" }}>
              Strategy
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
              "命运，并不只由能力决定",
              "Destiny is not shaped by ability alone"
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
              "很多时候，我们并非输给了能力，而是输给了那些看不见，却真实影响人生与事业结果的力量。空间影响能量，能量影响状态，状态影响决策，而决策最终塑造命运。启明遁甲融合奇门遁甲智慧、战略风水布局与能量调频实践，帮助企业家、专业人士与家庭，在关键决策、空间布局与内在状态之间建立更深层的和谐、清晰与平衡。因为真正的成功，不仅来自努力，更来自正确的布局。",
              "Many believe success depends on ability alone. At Qimen Strategy, we see a deeper pattern: environment shapes energy, energy shapes state, state shapes decisions, and decisions shape outcomes. Blending Qi Men Dun Jia, strategic Feng Shui and energy alignment, Qimen Strategy helps entrepreneurs, professionals and families build deeper harmony, clarity and balance between timing, environment, people and decisions."
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
              {t("探索顾问服务", "Explore Advisory Services")}
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
              {t("预约咨询", "Book a Consultation")}
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
              t("奇门决策", "Qi Men Decision Advisory"),
              t("战略风水布局", "Strategic Feng Shui"),
              t("能量调频实践", "Energy Alignment"),
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
            <span>Singapore · Founded by Huang Qiming, Founder of Qimen Strategy</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
