/*
  InsightsSection — 洞察与干货
  承接社媒内容，建立专业权威感
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

export default function InsightsSection() {
  const { lang, t } = useLanguage();

  const articles = lang === "zh"
    ? [
        {
          tag: "奇门遁甲",
          title: "为什么奇门遁甲能帮你做出更好的商业决策？",
          excerpt: "奇门遁甲不是算命，而是一套严密的时空推演系统。了解如何用现代逻辑框架解读这门古老智慧...",
          readTime: "5 分钟",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        },
        {
          tag: "风水科普",
          title: "新加坡BTO选房：风水与朝向的实用指南",
          excerpt: "面对BTO选房，很多人既不想迷信，又担心踩坑。这篇文章用逻辑帮你梳理真正重要的空间因素...",
          readTime: "8 分钟",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
        },
        {
          tag: "心理疗愈",
          title: "为什么你总是吸引错的人？从能量磁场说起",
          excerpt: "反复陷入相似的感情模式，不是运气问题，而是能量磁场的问题。了解如何从根源上改变吸引力法则...",
          readTime: "6 分钟",
          image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&q=80",
        },
      ]
    : [
        {
          tag: "Qimen Dunjia",
          title: "Why Qimen Dunjia Can Help You Make Better Business Decisions",
          excerpt: "Qimen Dunjia is not fortune-telling, but a rigorous space-time deduction system. Learn how to interpret this ancient wisdom with a modern logical framework...",
          readTime: "5 min",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        },
        {
          tag: "Feng Shui Guide",
          title: "Singapore BTO Selection: A Practical Feng Shui & Orientation Guide",
          excerpt: "Facing BTO selection, many people neither want to be superstitious nor risk making mistakes. This article uses logic to help you sort out the truly important spatial factors...",
          readTime: "8 min",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
        },
        {
          tag: "Psychology Healing",
          title: "Why Do You Keep Attracting the Wrong People? Starting from Energy Fields",
          excerpt: "Repeatedly falling into similar relationship patterns is not a luck problem, but an energy field problem. Learn how to fundamentally change the law of attraction...",
          readTime: "6 min",
          image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&q=80",
        },
      ];

  return (
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
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
            <span className="section-label">{t("洞察与干货", "Insights & Knowledge")}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl max-w-xl">
              {lang === "zh" ? (
                <>用知识建立<em className="text-[oklch(0.60_0.08_65)] not-italic">真正的信任</em></>
              ) : (
                <>Building <em className="text-[oklch(0.60_0.08_65)] not-italic">Real Trust</em> Through Knowledge</>
              )}
            </h2>
            <a
              href="https://www.instagram.com/qmfeng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all duration-300 flex-shrink-0"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("查看更多内容", "View More")} <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
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
              <div className="relative h-44 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[0.6rem] font-bold tracking-wider uppercase bg-[oklch(0.15_0.02_60/0.85)] text-[oklch(0.75_0.06_65)] px-2 py-1">
                    {article.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="display-heading text-lg mb-3 leading-snug">{article.title}</h4>
                <p className="text-xs text-[oklch(0.50_0.02_65)] leading-relaxed mb-4"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] text-[oklch(0.60_0.08_65)]"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {article.readTime}
                  </span>
                  <a
                    href="https://www.instagram.com/qmfeng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.60_0.08_65)] hover:gap-2 transition-all duration-300"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {t("阅读全文", "Read More")} <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
