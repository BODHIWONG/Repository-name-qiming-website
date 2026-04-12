/*
  ServicesSection — 商业变现漏斗 + 核心服务
  Three tiers: Entry / Core / Premium
  Two tracks: Career & Wealth / Emotional Healing
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  const services = [
    {
      tier: lang === "zh" ? "引流品 · 建立好感" : "Entry · Build Trust",
      tierNote: lang === "zh" ? "低门槛，轻体验" : "Low barrier, light experience",
      price: lang === "zh" ? "数十至百元新币起" : "From SGD tens",
      items: [
        {
          icon: "✦",
          name: lang === "zh" ? "年度运势轻解析" : "Annual Fortune Light Reading",
          desc: lang === "zh" ? "个人年度运势概览，了解流年吉凶方位与关键时间节点" : "Annual fortune overview, auspicious directions and key timing nodes",
          track: lang === "zh" ? "通用" : "General",
        },
        {
          icon: "✦",
          name: lang === "zh" ? "五行水晶能量穿搭建议" : "Five Elements Crystal Energy Styling",
          desc: lang === "zh" ? "根据个人命盘，定制专属水晶能量穿搭方案，提升个人磁场" : "Personalized crystal energy styling based on your destiny chart to enhance personal energy field",
          track: lang === "zh" ? "疗愈" : "Healing",
        },
      ],
    },
    {
      tier: lang === "zh" ? "利润品 · 深度信任" : "Core · Deep Trust",
      tierNote: lang === "zh" ? "中高客单，精准解局" : "Mid-high value, precise solutions",
      price: lang === "zh" ? "中高客单价" : "Mid-to-high pricing",
      items: [
        {
          icon: "◆",
          name: lang === "zh" ? "奇门遁甲沙盘推演" : "Qimen Dunjia Strategic Deduction",
          desc: lang === "zh" ? "针对事业决策、感情抉择、投资时机的专项奇门推演，提供严密逻辑分析" : "Specialized Qimen deduction for career decisions, relationship choices, and investment timing with rigorous logical analysis",
          track: lang === "zh" ? "事业" : "Career",
        },
        {
          icon: "◆",
          name: lang === "zh" ? "线上情感疗愈与磁场清理" : "Online Emotional Healing & Field Clearing",
          desc: lang === "zh" ? "深度情感倾听 + 心理疗愈 + 能量磁场清理，斩断负面能量循环" : "Deep emotional listening + psychological healing + energy field clearing to break negative energy cycles",
          track: lang === "zh" ? "疗愈" : "Healing",
        },
        {
          icon: "◆",
          name: lang === "zh" ? "命理深度解析" : "Destiny Deep Analysis",
          desc: lang === "zh" ? "命盘结构精读，解析人生格局、事业财运、感情婚姻的深层规律" : "In-depth destiny chart reading, analyzing life patterns, career wealth, and relationship dynamics",
          track: lang === "zh" ? "通用" : "General",
        },
      ],
    },
    {
      tier: lang === "zh" ? "高客单 · 彻底托付" : "Premium · Full Commitment",
      tierNote: lang === "zh" ? "数千新币，高净值定制" : "Thousands SGD, high-net-worth customized",
      price: lang === "zh" ? "数千新币起" : "From SGD thousands",
      items: [
        {
          icon: "◈",
          name: lang === "zh" ? "住宅风水深度勘察" : "Residential Feng Shui Deep Assessment",
          desc: lang === "zh" ? "BTO/Condo/别墅线下实地勘察，全方位布局调整，彻底化解煞气" : "On-site assessment for BTO/Condo/Villa, comprehensive layout adjustment, complete sha qi resolution",
          track: lang === "zh" ? "居家" : "Home",
        },
        {
          icon: "◈",
          name: lang === "zh" ? "商业实体店面风水定制" : "Commercial Feng Shui Customization",
          desc: lang === "zh" ? "餐饮、零售、办公室等商业空间的专业风水勘察与高级定制布局" : "Professional feng shui assessment and premium custom layout for F&B, retail, and office spaces",
          track: lang === "zh" ? "商业" : "Business",
        },
        {
          icon: "◈",
          name: lang === "zh" ? "年度战略风水规划" : "Annual Strategic Feng Shui Planning",
          desc: lang === "zh" ? "企业年度战略风水规划，支持关键节点决策，已服务多家新加坡企业" : "Annual strategic feng shui planning for businesses, supporting critical decision nodes, serving multiple Singapore companies",
          track: lang === "zh" ? "商业" : "Business",
        },
      ],
    },
  ];

  const trackColors: Record<string, string> = {
    "通用": "bg-[oklch(0.88_0.018_70)] text-[oklch(0.40_0.02_60)]",
    "General": "bg-[oklch(0.88_0.018_70)] text-[oklch(0.40_0.02_60)]",
    "疗愈": "bg-[oklch(0.90_0.04_340/0.3)] text-[oklch(0.50_0.08_340)]",
    "Healing": "bg-[oklch(0.90_0.04_340/0.3)] text-[oklch(0.50_0.08_340)]",
    "事业": "bg-[oklch(0.90_0.04_220/0.3)] text-[oklch(0.45_0.08_220)]",
    "Career": "bg-[oklch(0.90_0.04_220/0.3)] text-[oklch(0.45_0.08_220)]",
    "居家": "bg-[oklch(0.90_0.05_100/0.3)] text-[oklch(0.45_0.08_100)]",
    "Home": "bg-[oklch(0.90_0.05_100/0.3)] text-[oklch(0.45_0.08_100)]",
    "商业": "bg-[oklch(0.90_0.06_65/0.3)] text-[oklch(0.50_0.08_65)]",
    "Business": "bg-[oklch(0.90_0.06_65/0.3)] text-[oklch(0.50_0.08_65)]",
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[oklch(0.95_0.013_75)]">
      <div className="container">
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
            <div className="gold-line w-12" style={{ height: "1px" }} />
            <span className="section-label">
              {t("服务体系", "Service Framework")}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl max-w-xl">
              {lang === "zh" ? (
                <>从<em className="text-[oklch(0.60_0.08_65)] not-italic">初识</em>到<em className="text-[oklch(0.60_0.08_65)] not-italic">深度托付</em></>
              ) : (
                <>From <em className="text-[oklch(0.60_0.08_65)] not-italic">First Touch</em> to <em className="text-[oklch(0.60_0.08_65)] not-italic">Full Commitment</em></>
              )}
            </h2>
            <p className="text-sm text-[oklch(0.50_0.02_65)] max-w-xs"
              style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
              {t("三层服务漏斗，从引流品到高客单，引导您逐步深入", "Three-tier service funnel guiding you from entry to premium")}
            </p>
          </div>
        </motion.div>

        {/* Service Tiers */}
        <div className="space-y-8">
          {services.map((tier, ti) => (
            <motion.div
              key={ti}
              custom={ti + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Tier Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[oklch(0.60_0.08_65)] font-bold text-lg">{String(ti + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[oklch(0.15_0.02_60)] text-sm"
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {tier.tier}
                    </p>
                    <p className="text-xs text-[oklch(0.55_0.02_65)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      {tier.tierNote}
                    </p>
                  </div>
                </div>
                <div className="flex-1 gold-line" style={{ height: "1px" }} />
                <span className="text-xs text-[oklch(0.60_0.08_65)] font-semibold whitespace-nowrap"
                  style={{ fontFamily: "'Lato', sans-serif" }}>
                  {tier.price}
                </span>
              </div>

              {/* Service Cards */}
              <div className={`grid gap-4 ${tier.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                {tier.items.map((item, ii) => (
                  <div key={ii} className="card-subtle p-6 bg-[oklch(0.97_0.012_75)]">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[oklch(0.60_0.08_65)] text-lg">{item.icon}</span>
                      <span className={`text-[0.6rem] font-bold tracking-wider uppercase px-2 py-0.5 ${trackColors[item.track] || ""}`}>
                        {item.track}
                      </span>
                    </div>
                    <h4 className="display-heading text-lg mb-2">{item.name}</h4>
                    <p className="text-sm text-[oklch(0.50_0.02_65)] leading-relaxed mb-4"
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {item.desc}
                    </p>
                    <a
                      href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[oklch(0.60_0.08_65)] hover:gap-2.5 transition-all duration-300"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                      {t("WhatsApp 咨询", "WhatsApp Enquiry")} <ArrowRight size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[oklch(0.50_0.02_65)] mb-6"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
            {t(
              "⚡ 咨询名额有限，为保证服务深度与质量，所有咨询均为预约制。建议提前预约。",
              "⚡ Limited consultation slots. To maintain service depth and quality, all consultations are by appointment. Early booking recommended."
            )}
          </p>
          <a href="#contact" className="btn-gold inline-flex items-center gap-2">
            {t("立即预约咨询", "Book Your Consultation")} <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
