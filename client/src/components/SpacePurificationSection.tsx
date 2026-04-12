/*
  SpacePurificationSection — 空间能量净化
  启明大师核心优势板块
  Design: Dark background with gold accents, ritual atmosphere
  Three pillars: 空间清理 · 个人气场调整 · 灵性防护
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Shield, Wind, ArrowRight } from "lucide-react";

const TEXTURE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-texture-YTwfcEZMZmxLJghr5yrH9P.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function SpacePurificationSection() {
  const { lang, t } = useLanguage();

  const pillars = lang === "zh"
    ? [
        {
          icon: <Wind size={22} />,
          title: "空间能量清理",
          subtitle: "Space Energy Clearing",
          desc: "针对住宅、商业场所、办公室的负面能量积累进行系统性清理。通过奇门遁甲择时、风水布局调整与传统净化仪式，重建空间的正向气场流动。",
          tags: ["住宅净化", "商业空间", "办公室气场"],
        },
        {
          icon: <Sparkles size={22} />,
          title: "个人气场调整",
          subtitle: "Personal Aura Adjustment",
          desc: "结合命理分析与积极心理学，识别并清理个人能量场中的阻滞点。帮助您突破反复出现的负面模式，重建清晰、稳定的内在能量状态。",
          tags: ["能量阻滞清理", "磁场重建", "心理疗愈"],
        },
        {
          icon: <Shield size={22} />,
          title: "灵性防护布置",
          subtitle: "Spiritual Protection Setup",
          desc: "依据个人命盘与空间特性，精选铜师傅文创能量器物进行定制化布置，为居住者与商业空间建立持久的能量防护屏障。",
          tags: ["能量器物配置", "铜师傅定制", "长效防护"],
        },
      ]
    : [
        {
          icon: <Wind size={22} />,
          title: "Space Energy Clearing",
          subtitle: "空间能量清理",
          desc: "Systematic clearing of negative energy accumulation in residences, commercial premises, and offices. Through Qimen timing, Feng Shui layout adjustments, and traditional purification rituals, we restore positive energy flow in your space.",
          tags: ["Residential", "Commercial", "Office"],
        },
        {
          icon: <Sparkles size={22} />,
          title: "Personal Aura Adjustment",
          subtitle: "个人气场调整",
          desc: "Combining destiny analysis with positive psychology to identify and clear blockages in your personal energy field. Helping you break recurring negative patterns and rebuild a clear, stable inner energy state.",
          tags: ["Energy Blockage", "Field Rebuilding", "Psychology Healing"],
        },
        {
          icon: <Shield size={22} />,
          title: "Spiritual Protection Setup",
          subtitle: "灵性防护布置",
          desc: "Based on your personal destiny chart and spatial characteristics, we curate Tongshifu cultural energy objects for customized placement, establishing lasting energy protection for residents and commercial spaces.",
          tags: ["Energy Objects", "Tongshifu Custom", "Long-term Protection"],
        },
      ];

  const processSteps = lang === "zh"
    ? [
        { num: "01", title: "现场勘察 / 线上评估", desc: "深度了解空间历史、居住者状态与当前问题" },
        { num: "02", title: "奇门择时分析", desc: "选取最佳净化时机，确保仪式效果最大化" },
        { num: "03", title: "多维净化执行", desc: "结合传统仪式、风水调整与能量器物布置" },
        { num: "04", title: "后续跟踪反馈", desc: "净化后30天内持续跟进，确保能量稳定" },
      ]
    : [
        { num: "01", title: "On-site / Online Assessment", desc: "Deep understanding of space history, occupant state, and current issues" },
        { num: "02", title: "Qimen Timing Analysis", desc: "Select optimal purification timing to maximize ritual effectiveness" },
        { num: "03", title: "Multi-dimensional Purification", desc: "Combining traditional rituals, Feng Shui adjustments, and energy object placement" },
        { num: "04", title: "Post-purification Follow-up", desc: "Continuous follow-up within 30 days to ensure energy stability" },
      ];

  return (
    <section id="space-purification" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={TEXTURE_BG} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-[oklch(0.12_0.02_60/0.88)]" />
      </div>

      <div className="relative container">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-[oklch(0.60_0.08_65)] to-transparent" />
            <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)]"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("核心优势服务", "Core Signature Service")}
            </span>
          </div>
          <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            {lang === "zh" ? (
              <>空间能量净化<br /><em className="text-[oklch(0.75_0.06_65)] not-italic text-2xl md:text-3xl">Space Energy Purification</em></>
            ) : (
              <>Space Energy<br /><em className="text-[oklch(0.75_0.06_65)] not-italic">Purification</em></>
            )}
          </h2>
          <p className="text-sm text-[oklch(0.65_0.01_75)] leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
            {t(
              "16年以上实战经验，融合奇门遁甲择时、传统风水净化仪式与现代心理能量调整。不只是「清理」，而是重建空间与人的能量共振，让您的居所与事业场所成为真正的能量加持之地。",
              "With 16+ years of real-world practice, integrating Qimen Dunjia timing, traditional Feng Shui purification rituals, and modern psychological energy adjustment. Not just \"clearing\" — but rebuilding the energy resonance between space and people, transforming your home and business into a true source of energetic support."
            )}
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="border border-[oklch(0.35_0.03_60)] bg-[oklch(0.15_0.02_60/0.7)] backdrop-blur-sm p-7 group hover:border-[oklch(0.60_0.08_65)] transition-all duration-400"
            >
              {/* Icon */}
              <div className="w-11 h-11 border border-[oklch(0.60_0.08_65/0.5)] flex items-center justify-center text-[oklch(0.60_0.08_65)] mb-5 group-hover:bg-[oklch(0.60_0.08_65/0.1)] transition-all duration-300">
                {pillar.icon}
              </div>

              <h3 className="display-heading text-xl text-white mb-1">{pillar.title}</h3>
              <p className="text-[0.6rem] text-[oklch(0.60_0.08_65)] tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {pillar.subtitle}
              </p>
              <p className="text-xs text-[oklch(0.60_0.01_75)] leading-relaxed mb-5"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {pillar.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {pillar.tags.map((tag, j) => (
                  <span key={j}
                    className="text-[0.55rem] px-2 py-1 border border-[oklch(0.35_0.03_60)] text-[oklch(0.55_0.01_75)] tracking-wider uppercase"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-7"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("净化服务流程", "Purification Process")}
            </h3>
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-5 pb-6 relative">
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-[oklch(0.30_0.02_60)]" />
                  )}
                  <div className="w-10 h-10 border border-[oklch(0.60_0.08_65/0.6)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[0.6rem] font-bold text-[oklch(0.60_0.08_65)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      {step.num}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-sm font-semibold text-[oklch(0.85_0.01_75)] mb-1"
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-[oklch(0.50_0.01_75)] leading-relaxed"
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Block */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="border border-[oklch(0.60_0.08_65/0.4)] p-8"
          >
            <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
              style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("适合您的场景", "Suitable Scenarios")}
            </p>
            <ul className="space-y-3 mb-7">
              {(lang === "zh"
                ? [
                    "新居入伙前的能量清理与开光",
                    "商业场所长期生意低迷、人员流失",
                    "家庭成员反复出现健康或情绪问题",
                    "感觉空间「压抑」、睡眠质量持续下降",
                    "重大决策前的空间能量准备",
                    "新办公室开业前的气场布置",
                  ]
                : [
                    "Energy clearing and blessing before moving into a new home",
                    "Persistent business decline or high staff turnover",
                    "Recurring health or emotional issues among family members",
                    "Feeling the space is \"oppressive\" or persistent sleep quality decline",
                    "Space energy preparation before major decisions",
                    "Aura setup before opening a new office",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-[oklch(0.65_0.01_75)]"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  <span className="text-[oklch(0.60_0.08_65)] mt-0.5 flex-shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Space%20Purification%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[oklch(0.60_0.08_65)] hover:bg-[oklch(0.50_0.07_60)] text-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 w-full justify-center"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("WhatsApp 咨询空间净化", "WhatsApp — Enquire Space Purification")}
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
