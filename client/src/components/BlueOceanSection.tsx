/*
  BlueOceanSection — 蓝海占位展示
  Three-column comparison: Old Traditional vs New Social Media vs Qiming (Blue Ocean)
  Dark background section for contrast
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Check } from "lucide-react";

const TEXTURE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-texture-YTwfcEZMZmxLJghr5yrH9P.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function BlueOceanSection() {
  const { lang, t } = useLanguage();

  const columns = [
    {
      label: lang === "zh" ? "老派传统风水" : "Old-School Feng Shui",
      desc: lang === "zh" ? "神像、法器与恐吓式营销" : "Idols, ritual objects & fear-based marketing",
      color: "text-[oklch(0.55_0.02_60)]",
      borderColor: "border-[oklch(0.35_0.02_60)]",
      items: lang === "zh"
        ? ["依赖神秘感与恐吓", "排斥高学历年轻人", "缺乏逻辑解析", "廉价感强，信任度低"]
        : ["Relies on mystery & fear", "Alienates educated young professionals", "Lacks logical analysis", "Low trust, cheap perception"],
      isNegative: true,
    },
    {
      label: lang === "zh" ? "新潮社媒玄学" : "Trendy Social Media Mysticism",
      desc: lang === "zh" ? "塔罗、星座的娱乐化玄学" : "Tarot, astrology — entertainment-first mysticism",
      color: "text-[oklch(0.55_0.02_60)]",
      borderColor: "border-[oklch(0.35_0.02_60)]",
      items: lang === "zh"
        ? ["娱乐属性极强", "面临大额决策时权威感不足", "缺乏深度实战经验", "无法提供精准解决方案"]
        : ["Highly entertainment-oriented", "Lacks authority for major decisions", "No deep practical experience", "Cannot provide precise solutions"],
      isNegative: true,
    },
    {
      label: lang === "zh" ? "启明大师蓝海" : "Master Qiming's Blue Ocean",
      desc: lang === "zh" ? "权威实战派 + 现代心理疗愈" : "Authority & Strategy + Modern Psychology Healing",
      color: "text-[oklch(0.75_0.06_65)]",
      borderColor: "border-[oklch(0.60_0.08_65)]",
      items: lang === "zh"
        ? ["严密逻辑，科普播客口吻", "清华积极心理学背景加持", "16年实战案例背书", "精准填补高端市场空白"]
        : ["Rigorous logic, science podcast approach", "Tsinghua Positive Psychology background", "16+ years of real case studies", "Precisely fills premium market gap"],
      isNegative: false,
      highlight: true,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[oklch(0.15_0.02_60)]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img src={TEXTURE_BG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.02_60/0.3)] to-[oklch(0.15_0.02_60/0.9)]" />

      <div className="relative container">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-[oklch(0.60_0.08_65)] to-transparent" />
            <span className="section-label text-[oklch(0.60_0.08_65)]">
              {t("市场断层分析", "Market Gap Analysis")}
            </span>
          </div>
          <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl">
            {lang === "zh" ? (
              <>为什么选择<em className="text-[oklch(0.75_0.06_65)] not-italic">启明大师</em>？</>
            ) : (
              <>Why Choose <em className="text-[oklch(0.75_0.06_65)] not-italic">Master Qiming</em>?</>
            )}
          </h2>
          <p className="mt-4 text-[oklch(0.65_0.01_75)] max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
            {t(
              "在老派传统风水与新潮社媒玄学之间，存在一片无人占领的高端蓝海市场。启明大师精准填补这一空白。",
              "Between old-school feng shui and trendy social media mysticism lies an unoccupied premium blue ocean. Master Qiming precisely fills this gap."
            )}
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className={`relative p-6 md:p-8 border ${col.borderColor} ${
                col.highlight
                  ? "bg-[oklch(0.20_0.025_60)] ring-1 ring-[oklch(0.60_0.08_65)]"
                  : "bg-[oklch(0.18_0.02_60/0.6)]"
              }`}
            >
              {col.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[oklch(0.60_0.08_65)] px-4 py-1">
                  <span className="text-[0.6rem] font-bold tracking-widest uppercase text-white">
                    {t("蓝海占位", "Blue Ocean")}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-2 ${col.color}`}>
                  {col.label}
                </p>
                <p className="text-xs text-[oklch(0.55_0.01_75)] leading-relaxed"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {col.desc}
                </p>
              </div>

              <div className="space-y-3">
                {col.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    {col.isNegative ? (
                      <X size={14} className="text-[oklch(0.55_0.15_20)] mt-0.5 flex-shrink-0" />
                    ) : (
                      <Check size={14} className="text-[oklch(0.60_0.08_65)] mt-0.5 flex-shrink-0" />
                    )}
                    <span className={`text-sm leading-relaxed ${
                      col.highlight ? "text-[oklch(0.85_0.01_75)]" : "text-[oklch(0.60_0.01_75)]"
                    }`}
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <blockquote className="text-lg md:text-2xl text-[oklch(0.85_0.01_75)] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontStyle: "italic" }}>
            {t(
              "「真正的玄学，是帮助现代人重塑内心的秩序。」",
              '"True metaphysics helps modern people rebuild their inner order."'
            )}
          </blockquote>
          <p className="mt-3 text-xs text-[oklch(0.60_0.08_65)] tracking-widest uppercase"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            — {t("黄启明大师", "Master Huang Qiming")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
