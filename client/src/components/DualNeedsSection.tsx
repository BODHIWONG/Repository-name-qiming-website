/*
  DualNeedsSection — 双重刚需解决方案
  Two-column asymmetric layout
  Left: Career & Wealth (搞钱避险)
  Right: Emotional Healing (情绪疗愈)
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Heart, ArrowRight } from "lucide-react";

const DUAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-dual-needs-aMZ4XqZRYEuPAysxV5z7uv.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function DualNeedsSection() {
  const { lang, t } = useLanguage();

  const careerPainPoints = lang === "zh"
    ? ["BTO/Condo选房，极度害怕踩坑", "职场晋升瓶颈，政治斗争内耗", "副业投资方向迷茫，试错成本高昂", "重大决策前缺乏严密逻辑推演"]
    : ["BTO/Condo purchase — fear of making wrong choices", "Career ceiling & workplace politics", "Investment direction unclear, high trial-and-error cost", "Lack of rigorous logic before critical decisions"];

  const healingPainPoints = lang === "zh"
    ? ["长期吸引负能量伴侣，烂桃花不断", "分手后能量枯竭，无法走出阴影", "大龄催婚焦虑，配得感严重不足", "职场内耗严重，新移民异乡孤独"]
    : ["Repeatedly attracting toxic relationships", "Post-breakup energy depletion, unable to move on", "Marriage pressure anxiety, low self-worth", "Workplace burnout & immigrant loneliness"];

  return (
    <section id="dual-needs" className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
      <div className="container">
        {/* Section Header */}
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
              {t("高压社会催生的双重刚需", "Two Core Needs of Modern Urban Life")}
            </span>
          </div>
          <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl max-w-2xl">
            {lang === "zh" ? (
              <>您面临的，<em className="text-[oklch(0.60_0.08_65)] not-italic">正是我们最擅长的</em></>
            ) : (
              <>What You Face Is <em className="text-[oklch(0.60_0.08_65)] not-italic">Exactly What We Solve</em></>
            )}
          </h2>
          <p className="mt-4 text-[oklch(0.45_0.02_60)] max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
            {t(
              "通胀压力、极高的生活成本、职场内耗、异乡孤独——新加坡都市人的双重刚需，在启明大师的咨询体系中，都有精准的解决方案。",
              "Inflation pressure, high cost of living, workplace burnout, immigrant loneliness — Singapore's dual urban needs all have precise solutions in Master Qiming's consultation framework."
            )}
          </p>
        </motion.div>

        {/* Dual Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Career & Wealth */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative overflow-hidden group"
          >
            <div className="card-subtle p-8 md:p-10 h-full">
              {/* Icon & Label */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[oklch(0.60_0.08_65)] flex items-center justify-center">
                  <TrendingUp size={20} className="text-[oklch(0.60_0.08_65)]" />
                </div>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-bold border border-[oklch(0.60_0.08_65)] px-2 py-1">
                  {t("刚需一", "Need 01")}
                </span>
              </div>

              <h3 className="display-heading text-2xl md:text-3xl mb-3">
                {t("搞钱与避险刚需", "Career & Wealth Strategy")}
              </h3>
              <p className="text-sm text-[oklch(0.50_0.02_65)] mb-6 leading-relaxed"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "通胀压力与极高的新加坡生活成本，让每一个重大决策的试错成本都极其高昂。您急需「玄学外脑」来进行严密测算，最大化降低人生重大决策的风险。",
                  "Inflation and Singapore's high cost of living make every major decision's trial-and-error cost extremely high. You need a strategic advisor to minimize risk in life's critical decisions."
                )}
              </p>

              {/* Pain Points */}
              <div className="space-y-3 mb-8">
                {careerPainPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[oklch(0.35_0.02_60)]"
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Target Audience */}
              <div className="bg-[oklch(0.97_0.012_75)] border border-[oklch(0.88_0.018_70)] p-4 mb-6">
                <p className="text-xs text-[oklch(0.50_0.02_65)] mb-1 uppercase tracking-wider font-bold"
                  style={{ fontFamily: "'Lato', sans-serif" }}>
                  {t("适合人群", "Ideal For")}
                </p>
                <p className="text-sm text-[oklch(0.25_0.02_60)]"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {t(
                    "28-45岁，EP/SP新移民或本地PMEB，具备扎实经济基础，高度看重逻辑分析",
                    "Age 28-45, EP/SP new immigrants or local PMEBs, strong financial foundation, value logical analysis"
                  )}
                </p>
              </div>

              <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {t("查看相关服务", "View Services")} <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Emotional Healing */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative overflow-hidden group"
          >
            <div className="card-subtle p-8 md:p-10 h-full">
              {/* Icon & Label */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[oklch(0.60_0.08_65)] flex items-center justify-center">
                  <Heart size={20} className="text-[oklch(0.60_0.08_65)]" />
                </div>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] font-bold border border-[oklch(0.60_0.08_65)] px-2 py-1">
                  {t("刚需二", "Need 02")}
                </span>
              </div>

              <h3 className="display-heading text-2xl md:text-3xl mb-3">
                {t("情绪与疗愈刚需", "Emotional Healing & Energy")}
              </h3>
              <p className="text-sm text-[oklch(0.50_0.02_65)] mb-6 leading-relaxed"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "职场严重内耗、新移民的异乡孤独感、大龄婚恋焦虑——50%是为了预测未来，50%是为了寻找「心理树洞」并进行深层的能量疏理。",
                  "Workplace burnout, immigrant loneliness, relationship anxiety — 50% is about predicting the future, 50% is about finding a safe emotional outlet and deep energy clearing."
                )}
              </p>

              {/* Pain Points */}
              <div className="space-y-3 mb-8">
                {healingPainPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[oklch(0.60_0.08_65)] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[oklch(0.35_0.02_60)]"
                      style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Target Audience */}
              <div className="bg-[oklch(0.97_0.012_75)] border border-[oklch(0.88_0.018_70)] p-4 mb-6">
                <p className="text-xs text-[oklch(0.50_0.02_65)] mb-1 uppercase tracking-wider font-bold"
                  style={{ fontFamily: "'Lato', sans-serif" }}>
                  {t("适合人群", "Ideal For")}
                </p>
                <p className="text-sm text-[oklch(0.25_0.02_60)]"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                  {t(
                    "25-40岁，单身、离异或深陷情感纠葛的女性群体为主，渴求斩断负面磁场",
                    "Age 25-40, primarily single, divorced or emotionally entangled women seeking to break negative energy patterns"
                  )}
                </p>
              </div>

              <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.60_0.08_65)] hover:gap-3 transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {t("查看相关服务", "View Services")} <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dual Needs Visual Banner */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative h-64 md:h-80 overflow-hidden"
        >
          <img src={DUAL_BG} alt="双重刚需解决方案" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.15_0.02_60/0.55)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="section-label text-[oklch(0.75_0.06_65)] mb-3">
                {t("启明大师蓝海定位", "Master Qiming's Blue Ocean Positioning")}
              </p>
              <h3 className="display-heading text-2xl md:text-3xl lg:text-4xl text-white">
                {t(
                  "权威实战派 × 现代心理疗愈",
                  "Authority & Strategy × Modern Psychology Healing"
                )}
              </h3>
              <p className="text-sm text-[oklch(0.85_0.01_75)] mt-3 max-w-lg mx-auto"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "精准填补老派传统风水与新潮社媒玄学之间的高端市场空白",
                  "Precisely filling the premium market gap between old-school traditional feng shui and trendy social media mysticism"
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
