/*
  MasterSection — 关于启明大师
  Asymmetric layout: image left, credentials right
  降维人设：科普播客口吻，过来人视角
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const MASTER_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/master-qiming-real_2bfb42a5.jpeg";
const MASTER_STUDIO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-master-H6JmLdFeuWnLqRWkAB5NJ2.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function MasterSection() {
  const { lang, t } = useLanguage();

  const credentials = lang === "zh"
    ? [
        { label: "奇门遁甲传承人", note: "16年以上实战经验" },
        { label: "清华大学积极心理学指导师", note: "现代心理疗愈背景" },
        { label: "武当山风水传承", note: "正统玄学体系" },
        { label: "新加坡实体门店", note: "Blk 210 New Upper Changi Road" },
        { label: "互利共赢原则", note: "以真才实学服务社会" },
      ]
    : [
        { label: "Qimen Dunjia Lineage Holder", note: "16+ Years Real-World Practice" },
        { label: "Tsinghua Positive Psychology Instructor", note: "Modern Psychology Healing Background" },
        { label: "Wudang Mountain Feng Shui Lineage", note: "Orthodox Metaphysical System" },
        { label: "Singapore Physical Shop", note: "Blk 210 New Upper Changi Road" },
        { label: "Principle of Mutual Benefit", note: "Genuine Expertise in Service of Society" },
      ];

  const disciplines = lang === "zh"
    ? ["降维人设三大纪律", "摒弃恐吓式营销", "科普播客口吻", "过来人视角"]
    : ["Three Core Principles", "No Fear-Based Marketing", "Science Podcast Approach", "Wise Mentor Perspective"];

  return (
    <section id="master" className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image + Quote */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            {/* Image — 启明大师真实形象照 */}
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={MASTER_PHOTO}
                alt="黄启明大师 | Master Huang Qiming"
                className="w-full h-full object-cover object-top"
              />
              {/* Gold border accent */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-[oklch(0.60_0.08_65/0.3)] pointer-events-none" />
            </div>

            {/* Floating stats */}
            <div className="absolute bottom-8 left-8 right-8 bg-[oklch(0.15_0.02_60/0.92)] backdrop-blur-sm p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[oklch(0.75_0.06_65)]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>16+</p>
                  <p className="text-[0.6rem] text-[oklch(0.65_0.01_75)] uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {t("年实战", "Years")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[oklch(0.75_0.06_65)]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>100%</p>
                  <p className="text-[0.6rem] text-[oklch(0.65_0.01_75)] uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {t("客户满意", "Satisfaction")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[oklch(0.75_0.06_65)]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>3+</p>
                  <p className="text-[0.6rem] text-[oklch(0.65_0.01_75)] uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {t("年企业合作", "Yr Partnerships")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line w-12" style={{ height: "1px" }} />
                <span className="section-label">{t("关于启明大师", "About Master Qiming")}</span>
              </div>
              <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl mb-4">
                {lang === "zh" ? (
                  <>黄启明<em className="text-[oklch(0.60_0.08_65)] not-italic"> 大师</em></>
                ) : (
                  <>Master <em className="text-[oklch(0.60_0.08_65)] not-italic">Huang Qiming</em></>
                )}
              </h2>
              <p className="text-base text-[oklch(0.35_0.02_60)] leading-relaxed"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "启明大师不是高高在上的神仙，而是一位睿智、阅历丰富的长者朋友。他以科普播客主持人的口吻，用极其严密、冷静的逻辑剖析人生复杂的玄学规律——帮你拆解生活与事业的真实难题，而非贩卖焦虑。",
                  "Master Qiming is not an otherworldly figure, but a wise and experienced senior friend. With the tone of a science podcast host, he uses rigorous, calm logic to analyze life's complex metaphysical patterns — helping you solve real problems in life and career, not selling anxiety."
                )}
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {t("资质认证", "Credentials")}
              </h3>
              <div className="space-y-3">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-[oklch(0.92_0.015_70)] last:border-0">
                    <span className="text-[oklch(0.60_0.08_65)] text-sm mt-0.5">✦</span>
                    <div>
                      <p className="text-sm font-semibold text-[oklch(0.20_0.02_60)]"
                        style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                        {cred.label}
                      </p>
                      <p className="text-xs text-[oklch(0.55_0.02_65)] mt-0.5"
                        style={{ fontFamily: "'Lato', sans-serif" }}>
                        {cred.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Disciplines */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {t("服务理念", "Service Philosophy")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {disciplines.map((d, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 border border-[oklch(0.88_0.018_70)] text-[oklch(0.35_0.02_60)]"
                    style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <a
                href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                {t("与启明大师对话", "Connect with Master Qiming")}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
