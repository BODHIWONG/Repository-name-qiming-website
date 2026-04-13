/*
  ProductsSection — Auspicious Catalysts · 能量载体
  NOT e-commerce → Energy manifestation tools
  Value Tags: Energy Flow | Relationship Reset | Wealth Growth | Luck Enhancement
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const WA_PRODUCTS = "https://wa.me/6589418791?text=Hello%2C%20I%27m%20interested%20in%20the%20Auspicious%20Catalysts%20recommended%20by%20Master%20Qiming.";

const PRODUCTS = [
  {
    tag: { zh: "财富增长", en: "Wealth Growth" },
    tagBg: "oklch(0.60 0.08 65)",
    name: { zh: "铜制貔貅摆件", en: "Bronze Pi Xiu" },
    desc: { zh: "招财纳福，化解财运阻滞，适合事业发展期", en: "Attracts wealth and dissolves financial blockages. Ideal for career growth phases." },
    img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
  },
  {
    tag: { zh: "能量流动", en: "Energy Flow" },
    tagBg: "oklch(0.50 0.08 220)",
    name: { zh: "铜制风水罗盘", en: "Feng Shui Compass" },
    desc: { zh: "奇门遁甲择时专用，精准定位空间能量方位", en: "Precision instrument for Qi Men timing and spatial energy orientation." },
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    tag: { zh: "关系修复", en: "Relationship Reset" },
    tagBg: "oklch(0.50 0.08 340)",
    name: { zh: "玫瑰晶能量摆件", en: "Rose Quartz Crystal" },
    desc: { zh: "修复感情磁场，吸引正向人际关系，化解情感阻滞", en: "Repairs relationship energy fields and attracts positive interpersonal connections." },
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80",
  },
  {
    tag: { zh: "运势提升", en: "Luck Enhancement" },
    tagBg: "oklch(0.45 0.08 100)",
    name: { zh: "铜制葫芦摆件", en: "Bronze Gourd" },
    desc: { zh: "化解病气煞气，提升整体运势，守护家宅平安", en: "Dissolves negative energy and illness qi, enhancing overall fortune and home protection." },
    img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
  },
];

export default function ProductsSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-[oklch(0.95_0.013_75)]">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
              {t("铜师傅文创 · 深度合作", "Tongshifu · Deep Partnership")}
            </span>
          </div>
          <div className="md:flex md:items-end md:justify-between gap-8">
            <div>
              <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "oklch(0.12 0.02 60)" }}>
                {t("能量载体", "Auspicious Catalysts")}
              </h2>
              <p className="text-sm text-[oklch(0.50_0.02_65)] max-w-md leading-relaxed" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t("所有布局，都需要能量承载。这些器物，是让改变真正发生的关键一步。",
                   "Every alignment requires a physical anchor. These selected pieces serve as catalysts to manifest energy into reality.")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {[{ zh: "能量流动", en: "Energy Flow" }, { zh: "关系修复", en: "Relationship Reset" }, { zh: "财富增长", en: "Wealth Growth" }, { zh: "运势提升", en: "Luck Enhancement" }].map((tag, i) => (
                <span key={i} className="text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-[oklch(0.88_0.018_70)] text-[oklch(0.45_0.02_60)]" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {t(tag.zh, tag.en)}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.88_0.018_70)]">
          {PRODUCTS.map((product, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-[oklch(0.97_0.012_75)] flex flex-col group">
              <div className="relative overflow-hidden aspect-square">
                <img src={product.img} alt={t(product.name.zh, product.name.en)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className="text-[0.55rem] tracking-[0.15em] uppercase px-2 py-1 font-bold"
                    style={{ fontFamily: "'Lato', sans-serif", background: product.tagBg, color: "oklch(0.98 0.005 75)" }}>
                    {t(product.tag.zh, product.tag.en)}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="mb-2 font-bold" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "1.15rem", color: "oklch(0.15 0.02 60)" }}>
                  {t(product.name.zh, product.name.en)}
                </h4>
                <p className="text-xs text-[oklch(0.50_0.02_65)] leading-relaxed flex-1" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {t(product.desc.zh, product.desc.en)}
                </p>
                <a href={WA_PRODUCTS} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.1em" }}>
                  {t("咨询购买", "Enquire")} <ArrowRight size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 text-center text-xs text-[oklch(0.55_0.02_65)] max-w-xl mx-auto" style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
          {t("* 所有能量器物均经启明大师根据命理与风水需求进行个性化推荐，非标准化销售。",
             "* All auspicious catalysts are personally recommended by Master Qiming based on individual destiny and feng shui needs — not standardized retail.")}
        </motion.p>

      </div>
    </section>
  );
}
