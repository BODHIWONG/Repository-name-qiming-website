/*
  CasesSection — 成功案例
  Story-driven case studies with metrics
  Two tracks: Business & Personal
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function CasesSection() {
  const { lang, t } = useLanguage();

  const cases = [
    {
      category: lang === "zh" ? "餐饮商业" : "F&B Business",
      client: "Ai Cafe",
      metric: "+30%",
      metricLabel: lang === "zh" ? "营业额增长" : "Revenue Growth",
      story: lang === "zh"
        ? "客流量持续下滑，生意陷入瓶颈。启明大师结合奇门遁甲与风水布局调整，重新规划空间能量流向，营业额在三个月内提升30%。"
        : "Declining customer traffic had stalled the business. Master Qiming combined Qimen Dunjia with feng shui layout adjustments to redirect spatial energy flow, achieving 30% revenue growth within three months.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    },
    {
      category: lang === "zh" ? "公益餐饮" : "Charity & Vegetarian",
      client: lang === "zh" ? "清安村素食" : "Qing An Village",
      metric: "+25%",
      metricLabel: lang === "zh" ? "客流量提升" : "Visitor Traffic",
      story: lang === "zh"
        ? "优化整体空间布局与能量流动后，客流量提升25%，运营氛围显著改善，成为社区重要的能量聚集地。"
        : "After optimizing the overall spatial layout and energy flow, visitor traffic increased by 25% and the operating atmosphere improved significantly, becoming a key community energy hub.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80",
    },
    {
      category: lang === "zh" ? "企业战略" : "Corporate Strategy",
      client: lang === "zh" ? "多家新加坡企业" : "Multiple SG Businesses",
      metric: "3+",
      metricLabel: lang === "zh" ? "年长期合作" : "Years Partnership",
      story: lang === "zh"
        ? "为多家新加坡企业提供年度战略风水规划，在关键决策节点提供支持，帮助企业主在复杂市场环境中做出正确的战略选择。"
        : "Annual strategic feng shui planning for multiple Singapore businesses, providing support at critical decision junctures, helping business owners make correct strategic choices in complex market environments.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
    {
      category: lang === "zh" ? "高端住宅" : "Luxury Residential",
      client: lang === "zh" ? "新加坡豪华别墅" : "Singapore Luxury Villa",
      metric: "100%",
      metricLabel: lang === "zh" ? "客户满意度" : "Client Satisfaction",
      story: lang === "zh"
        ? "对高端别墅进行全面风水评估与布局调整，显著改善家庭和谐度与整体财运，客户反馈生活质量得到根本性提升。"
        : "Comprehensive feng shui assessment and layout adjustment for a high-end villa, significantly improving family harmony and overall fortune, with clients reporting fundamental improvement in quality of life.",
      image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&q=80",
    },
  ];

  return (
    <section id="cases" className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
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
            <span className="section-label">{t("成功案例", "Case Studies")}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl max-w-xl">
              {lang === "zh" ? (
                <>每一个数字，都是<em className="text-[oklch(0.60_0.08_65)] not-italic">真实的决策与蜕变</em></>
              ) : (
                <>Every Number Represents a <em className="text-[oklch(0.60_0.08_65)] not-italic">Real Decision & Transformation</em></>
              )}
            </h2>
          </div>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-subtle overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.02_60/0.7)] to-transparent" />
                {/* Metric overlay */}
                <div className="absolute bottom-4 right-4 text-right">
                  <p className="text-3xl font-bold text-[oklch(0.75_0.06_65)]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {c.metric}
                  </p>
                  <p className="text-xs text-white uppercase tracking-wider"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {c.metricLabel}
                  </p>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[0.6rem] font-bold tracking-widest uppercase bg-[oklch(0.60_0.08_65)] text-white px-2 py-1">
                    {c.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="display-heading text-xl mb-3">{c.client}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_60)] leading-relaxed"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {c.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
