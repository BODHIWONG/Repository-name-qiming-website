import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      no: "01",
      zh: "奇门决策",
      en: "Qi Men Decision Advisory",
      zhSub: "以奇门遁甲审视时机、方向、人事与风险，帮助客户在关键选择前看清局势。",
      enSub: "Using Qi Men Dun Jia to review timing, direction, people dynamics and risk before important life or business decisions.",
      pointsZh: ["重大决策", "事业与企业判断", "时机与方向"],
      pointsEn: ["Major Decisions", "Business Direction", "Timing & Direction"],
    },
    {
      no: "02",
      zh: "战略风水布局",
      en: "Strategic Feng Shui",
      zhSub: "从空间、动线、气场与人事关系入手，让环境更好地支持事业、家庭与长期发展。",
      enSub: "Aligning space, movement, energy flow and human dynamics so the environment better supports business, family and long-term growth.",
      pointsZh: ["企业空间", "居家风水", "布局优化"],
      pointsEn: ["Business Space", "Home Feng Shui", "Layout Alignment"],
    },
    {
      no: "03",
      zh: "能量调频实践",
      en: "Energy Alignment",
      zhSub: "通过空间净化、声音与能量调理，帮助人从内耗、混乱与沉重中回到清晰稳定。",
      enSub: "Supporting clarity and stability through space clearing, sound-based practice and energy alignment.",
      pointsZh: ["空间净化", "状态调整", "身心安定"],
      pointsEn: ["Space Clearing", "State Alignment", "Inner Stability"],
    },
  ];

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
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("启明遁甲核心体系", "The Qimen Strategy Framework")}
            </span>
          </div>

          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4.8vw, 3.8rem)",
              color: "oklch(0.12 0.02 60)",
            }}
          >
            {t("不是单一服务，而是一套环境、状态与决策的调衡系统", "Not a Single Service, but a System of Environment, State and Decision Alignment")}
          </h2>

          <p
            className="text-sm text-[oklch(0.50_0.02_65)] max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "启明遁甲以奇门决策看清局势，以战略风水调整空间，以能量调频稳定状态，帮助客户在天时、地利、人和之间建立更清晰的判断与布局。",
              "Qimen Strategy uses Qi Men decision advisory to clarify the situation, strategic Feng Shui to align the environment, and energy alignment to support a steadier state before important decisions."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.88_0.018_70)]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.no}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`${i === 1 ? "bg-[oklch(0.10_0.02_60)]" : "bg-white"} p-8 md:p-10 min-h-[430px] flex flex-col`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[0.55rem] tracking-[0.25em] uppercase font-bold px-2 py-1 border border-[oklch(0.60_0.08_65)] text-[oklch(0.60_0.08_65)]">
                  {pillar.no}
                </span>
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)]">
                  Framework
                </span>
              </div>

              <h3
                className="mb-2 font-bold"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  color: i === 1 ? "oklch(0.72 0.06 65)" : "oklch(0.12 0.02 60)",
                }}
              >
                {pillar.en}
              </h3>

              <p
                className="text-base mb-6 tracking-wide"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: i === 1 ? "oklch(0.76 0.04 65)" : "oklch(0.35 0.02 60)",
                }}
              >
                {pillar.zh}
              </p>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{
                  fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
                  color: i === 1 ? "oklch(0.78 0.02 70)" : "oklch(0.35 0.02 60)",
                }}
              >
                {t(pillar.zhSub, pillar.enSub)}
              </p>

              <div className="mt-8 space-y-3">
                {(t(pillar.pointsZh.join("|"), pillar.pointsEn.join("|")).split("|")).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <span className="text-[oklch(0.60_0.08_65)]">✦</span>
                    <span className={i === 1 ? "text-white/75" : "text-[oklch(0.25_0.02_60)]"}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
