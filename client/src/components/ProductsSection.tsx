/*
  ProductsSection — 风水美学产品 (铜师傅文创)
  Partner brand deep integration
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

export default function ProductsSection() {
  const { lang, t } = useLanguage();

  const products = [
    {
      name: lang === "zh" ? "铜师傅臻品摆件" : "Tongshifu Premium Ornament",
      desc: lang === "zh" ? "经启明大师命理与风水双重鉴定，精选高能量铜制工艺品，强化空间财气" : "Dual-certified by Master Qiming through destiny and feng shui analysis, premium copper crafts to strengthen spatial wealth energy",
      tag: lang === "zh" ? "财运增强" : "Wealth Enhancement",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
    },
    {
      name: lang === "zh" ? "文创系列" : "Cultural Creative Series",
      desc: lang === "zh" ? "融合传统奇门符文与现代美学设计，兼具装饰价值与能量属性" : "Combining traditional Qimen symbols with modern aesthetic design, combining decorative value with energy properties",
      tag: lang === "zh" ? "文化传承" : "Cultural Heritage",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
    },
    {
      name: lang === "zh" ? "水晶能量系列" : "Crystal Energy Collection",
      desc: lang === "zh" ? "根据个人五行命盘定制推荐，每一颗水晶都经过能量鉴定，提升个人磁场" : "Customized recommendations based on personal Five Elements destiny chart, each crystal energy-certified to enhance personal energy field",
      tag: lang === "zh" ? "个人磁场" : "Personal Energy",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    },
    {
      name: lang === "zh" ? "吉祥摆件" : "Auspicious Feng Shui Pieces",
      desc: lang === "zh" ? "传统吉祥纹样与现代工艺的完美结合，为空间注入正向能量与美学价值" : "Perfect combination of traditional auspicious patterns and modern craftsmanship, infusing spaces with positive energy and aesthetic value",
      tag: lang === "zh" ? "空间能量" : "Space Energy",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-[oklch(0.95_0.013_75)]">
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
            <span className="section-label">{t("风水美学产品", "Feng Shui Aesthetic Products")}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                {lang === "zh" ? (
                  <>铜师傅文创<em className="text-[oklch(0.60_0.08_65)] not-italic"> 深度合作</em></>
                ) : (
                  <>Tongshifu Cultural Brand <em className="text-[oklch(0.60_0.08_65)] not-italic">Deep Partnership</em></>
                )}
              </h2>
              <p className="text-base text-[oklch(0.45_0.02_60)] max-w-xl leading-relaxed"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "每一件产品都经过启明大师的命理与风水双重分析，精心挑选后推荐。将无形的风水能量，具象化为可触摸的美学作品。",
                  "Every product is carefully selected after dual analysis by Master Qiming through destiny and feng shui. Transforming intangible feng shui energy into tangible aesthetic works."
                )}
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="border border-[oklch(0.60_0.08_65)] px-6 py-4 text-center">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-bold mb-1">
                  {t("战略合作品牌", "Strategic Partner")}
                </p>
                <p className="display-heading text-xl text-[oklch(0.15_0.02_60)]">
                  {t("铜师傅 · 文创", "Tongshifu · Cultural")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-subtle overflow-hidden group bg-[oklch(0.97_0.012_75)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[0.6rem] font-bold tracking-wider uppercase bg-[oklch(0.60_0.08_65)] text-white px-2 py-0.5">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="display-heading text-base mb-2">{product.name}</h4>
                <p className="text-xs text-[oklch(0.50_0.02_65)] leading-relaxed mb-4"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {product.desc}
                </p>
                <a
                  href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.60_0.08_65)] hover:gap-2 transition-all duration-300"
                  style={{ fontFamily: "'Lato', sans-serif" }}>
                  {t("咨询购买", "Enquire")} <ArrowRight size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-8 text-xs text-center text-[oklch(0.55_0.02_65)] italic"
          style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
          {t(
            "* 所有产品均经启明大师根据命理与风水需求进行个性化推荐，非标准化销售。",
            "* All products are personalized recommendations by Master Qiming based on destiny and feng shui needs, not standardized sales."
          )}
        </motion.p>
      </div>
    </section>
  );
}
