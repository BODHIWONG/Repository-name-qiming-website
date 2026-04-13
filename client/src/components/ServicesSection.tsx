/*
  ServicesSection — Three-Layer Monetization Structure
  Layer 1 (Awakening): Light ivory — 引流 → CTA: Start Here
  Layer 2 (Alignment): White + dividers — 成交 → CTA: Deep Insight
  Layer 3 (Mastery): Black + Gold — 收割 → CTA: Exclusive Consultation
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const WA_START = "https://wa.me/6589418791?text=Hello%2C%20I%27d%20like%20to%20Start%20Here%20with%20Master%20Qiming.";
const WA_INSIGHT = "https://wa.me/6589418791?text=Hello%2C%20I%27d%20like%20a%20Deep%20Insight%20session%20with%20Master%20Qiming.";
const WA_EXCLUSIVE = "https://wa.me/6589418791?text=Hello%2C%20I%27m%20interested%20in%20Exclusive%20Consultation%20with%20Master%20Qiming.";

export default function ServicesSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("三大核心服务体系", "Three Core Service Systems")}
            </span>
          </div>
          <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "oklch(0.12 0.02 60)" }}>
            {t("从初识到深度托付", "From First Step to Full Mastery")}
          </h2>
          <p className="text-sm text-[oklch(0.50_0.02_65)] max-w-lg leading-relaxed" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
            {t("每一层，都是一次更深的能量连接。选择适合你当下的入口。", "Each layer deepens the energy connection. Choose the entry point that fits you now.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 md:gap-px bg-[oklch(0.88_0.018_70)]">

          {/* Card 1: Awakening — ivory */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex flex-col bg-[oklch(0.97_0.012_75)] p-8 md:p-10">
            <div className="flex items-start justify-between mb-8">
              <span className="text-[0.55rem] tracking-[0.25em] uppercase font-bold text-[oklch(0.60_0.08_65)] border border-[oklch(0.60_0.08_65)] px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>01</span>
              <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.65_0.05_65)]" style={{ fontFamily: "'Lato', sans-serif" }}>{t("引流 · 能量引子", "Entry · Awakening")}</span>
            </div>
            <h3 className="mb-1 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "oklch(0.12 0.02 60)" }}>Awakening</h3>
            <p className="text-base mb-2 tracking-wide" style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.35 0.02 60)" }}>{t("缘起体验", "Your First Shift")}</p>
            <div className="w-full h-px bg-[oklch(0.88_0.018_70)] my-6" />
            <p className="text-sm leading-relaxed text-[oklch(0.35_0.02_60)]" style={{ fontFamily: "'Noto Sans SC', 'Lato', sans-serif" }}>
              {t("用最轻的方式，开启你与好运的连接。让能量开始流动，让变化自然发生。", "Begin with a gentle entry point to experience subtle energy alignment and personal shifts.")}
            </p>
            <div className="flex-1 mt-6 space-y-4">
              {[{ zh: "年度运势解读", en: "Annual Luck Reading" }, { zh: "个人能量校准", en: "Personal Energy Alignment" }].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-px h-4 bg-[oklch(0.60_0.08_65)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[oklch(0.25_0.02_60)]" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>{t(s.zh, s.en)}</span>
                </div>
              ))}
            </div>
            <a href={WA_START} target="_blank" rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase text-[oklch(0.60_0.08_65)] hover:gap-4 transition-all duration-300"
              style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.12em" }}>
              {t("从这里开始", "Start Here")} <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* Card 2: Alignment — white */}
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex flex-col bg-white p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "oklch(0.60 0.08 65)" }} />
            <div className="flex items-start justify-between mb-8">
              <span className="text-[0.55rem] tracking-[0.25em] uppercase font-bold text-[oklch(0.60_0.08_65)] border border-[oklch(0.60_0.08_65)] px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>02</span>
              <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.65_0.05_65)]" style={{ fontFamily: "'Lato', sans-serif" }}>{t("成交 · 命局解构", "Revenue · Alignment")}</span>
            </div>
            <h3 className="mb-1 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "oklch(0.12 0.02 60)" }}>Alignment</h3>
            <p className="text-base mb-2 tracking-wide" style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.35 0.02 60)" }}>{t("命局解构", "Deep Insight")}</p>
            <div className="w-full h-px bg-[oklch(0.88_0.018_70)] my-6" />
            <p className="text-sm leading-relaxed text-[oklch(0.35_0.02_60)]" style={{ fontFamily: "'Noto Sans SC', 'Lato', sans-serif" }}>
              {t("从命局、时空与空间出发，精准定位问题根源，给出可执行路径。", "Through destiny analysis and spatial alignment, we uncover root causes and implement precise solutions.")}
            </p>
            <div className="flex-1 mt-6 space-y-4">
              {[{ zh: "奇门战略分析（时空决策系统）", en: "Qi Men Strategic Analysis" }, { zh: "八字命局解构", en: "Bazi Destiny Mapping" }, { zh: "空间能量重构", en: "Space Energy Reconfiguration" }].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-px h-4 bg-[oklch(0.60_0.08_65)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[oklch(0.25_0.02_60)]" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>{t(s.zh, s.en)}</span>
                </div>
              ))}
            </div>
            <a href={WA_INSIGHT} target="_blank" rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase transition-all duration-300"
              style={{ fontFamily: "'Lato', sans-serif", background: "oklch(0.60 0.08 65)", color: "oklch(0.98 0.005 75)", letterSpacing: "0.12em" }}>
              {t("深度洞察", "Deep Insight")} <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* Card 3: Mastery — black+gold */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex flex-col p-8 md:p-10 relative" style={{ background: "oklch(0.10 0.02 60)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "oklch(0.60 0.08 65)" }} />
            <div className="flex items-start justify-between mb-8">
              <span className="text-[0.55rem] tracking-[0.25em] uppercase font-bold px-2 py-1" style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.08 65)", border: "1px solid oklch(0.60 0.08 65)" }}>03</span>
              <span className="text-[0.55rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.08 65)" }}>{t("收割 · 人生掌控", "Premium · Mastery")}</span>
            </div>
            <h3 className="mb-1 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "oklch(0.60 0.08 65)" }}>Mastery</h3>
            <p className="text-base mb-2 tracking-wide" style={{ fontFamily: "'Noto Serif SC', serif", color: "oklch(0.75 0.04 65)" }}>{t("人生掌控", "Life Mastery")}</p>
            <div className="w-full h-px my-6" style={{ background: "oklch(0.25 0.02 60)" }} />
            <p className="text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans SC', 'Lato', sans-serif", color: "oklch(0.65 0.03 65)" }}>
              {t("为高净值客户打造长期运势管理系统。从财富、决策到空间，全局护航。", "A private advisory system designed for long-term wealth growth, decision-making, and life mastery.")}
            </p>
            <div className="flex-1 mt-6 space-y-4">
              {[{ zh: "商业风水战略", en: "Business Feng Shui Strategy" }, { zh: "高端空间设计", en: "Premium Space Design" }, { zh: "长期能量顾问", en: "Long-term Energy Advisory" }].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-px h-4 mt-0.5 flex-shrink-0" style={{ background: "oklch(0.60 0.08 65)" }} />
                  <span className="text-sm" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif", color: "oklch(0.80 0.03 65)" }}>{t(s.zh, s.en)}</span>
                </div>
              ))}
            </div>
            <a href={WA_EXCLUSIVE} target="_blank" rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase transition-all duration-300 hover:opacity-90"
              style={{ fontFamily: "'Lato', sans-serif", background: "oklch(0.60 0.08 65)", color: "oklch(0.10 0.02 60)", letterSpacing: "0.10em" }}>
              {t("专属咨询", "Exclusive Consultation")} <ArrowRight size={13} />
            </a>
          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 text-center text-xs text-[oklch(0.55_0.02_65)]" style={{ fontFamily: "'Lato', sans-serif" }}>
          {t("⚡ 咨询名额有限，为保证服务深度与质量，所有咨询均为预约制。", "⚡ Limited slots available. All consultations are by appointment to ensure depth and quality.")}
        </motion.p>

      </div>
    </section>
  );
}
