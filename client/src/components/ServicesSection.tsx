import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      no: "01",
      zh: "奇门决策",
      en: "Qimen Strategy",
      zhSub: "以时机、方向、人事与环境，看清人生与事业的局势。",
      enSub: "Reading timing, direction, people dynamics and environment before major life or business decisions.",
      pointsZh: ["人生方向", "企业判断", "时机与布局"],
      pointsEn: ["Life Direction", "Business Decisions", "Timing & Positioning"],
    },
    {
      no: "02",
      zh: "梵音心源疗愈",
      en: "Sacred Sound Healing",
      zhSub: "以声音、呼吸与空间安顿身心，让人从紧张与内耗中回到清明。",
      enSub: "Using sacred sound, breath and space to support deep rest, inner stillness and emotional restoration.",
      pointsZh: ["身心安顿", "睡眠与情绪", "内在清明"],
      pointsEn: ["Deep Rest", "Sleep & Emotion", "Inner Stillness"],
    },
    {
      no: "03",
      zh: "文化策划与顾问",
      en: "Cultural Advisory",
      zhSub: "将东方智慧转化为品牌、空间、内容与教育体系。",
      enSub: "Translating Eastern wisdom into brand systems, spaces, content and cultural education.",
      pointsZh: ["品牌文化", "空间叙事", "课程与顾问"],
      pointsEn: ["Brand Culture", "Spatial Narrative", "Education & Advisory"],
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
              {t("天乙合会三大主轴", "The Three Pillars of Tian Yi He Hui")}
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
            {t("不是服务堆叠，而是一套东方战略智慧系统", "Not a List of Services, but an Eastern Strategic Intelligence System")}
          </h2>

          <p
            className="text-sm text-[oklch(0.50_0.02_65)] max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "qmmind.com 承载天乙合会的思想高度：以奇门决策见方向，以梵音疗愈安顿身心，以文化策划承载东方智慧。",
              "qmmind.com carries the thought-level identity of Tian Yi He Hui: Qimen Strategy clarifies direction, sacred sound healing restores inner stillness, and cultural advisory translates Eastern wisdom into modern forms."
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
                  Pillar
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
