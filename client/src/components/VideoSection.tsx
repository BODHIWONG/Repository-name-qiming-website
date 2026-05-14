import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VideoSection() {
  const { t } = useLanguage();

  const insights = [
    {
      titleZh: "为什么聪明人依然会卡住？",
      titleEn: "Why Smart People Stay Stuck",
      descZh: "问题往往不是能力，而是时机、方向与环境。",
      descEn: "The problem is often not intelligence, but timing, direction and environment.",
      tag: "Qimen Strategy",
    },
    {
      titleZh: "环境如何影响人的决策？",
      titleEn: "How Environment Shapes Decision-Making",
      descZh: "空间不仅影响情绪，也会改变人的判断与行动。",
      descEn: "Environment does not only affect emotion. It also shapes judgment and action.",
      tag: "Environment",
    },
    {
      titleZh: "AI时代为什么更需要战略觉察？",
      titleEn: "Why Strategic Awareness Matters in the AI Era",
      descZh: "信息越来越多，但真正稀缺的是方向感。",
      descEn: "Information is abundant. Strategic clarity is rare.",
      tag: "AI Era",
    },
  ];

  return (
    <section className="py-24 bg-[oklch(0.95_0.013_75)]">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <p
            className="text-xs uppercase tracking-[0.22em] text-[oklch(0.60_0.08_65)] mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {t("思想碎片与洞察", "Thought Fragments & Insights")}
          </p>

          <h2
            className="text-3xl md:text-5xl font-bold mb-5 text-[oklch(0.12_0.02_60)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t(
              "AI时代的东方战略智慧",
              "Eastern Strategic Intelligence in the AI Era"
            )}
          </h2>

          <p
            className="text-sm leading-relaxed text-[oklch(0.45_0.02_65)]"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "这里不只是视频展示，而是关于时机、环境、意识与战略觉察的思想片段。",
              "This section is not merely media content, but fragments of thought exploring timing, environment, consciousness and strategic awareness."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.88_0.018_70)]">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-white p-8 md:p-10 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <div className="mb-8 inline-flex px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] border border-[oklch(0.60_0.08_65)] text-[oklch(0.60_0.08_65)]">
                  {item.tag}
                </div>

                <h3
                  className="font-bold mb-3 text-[oklch(0.12_0.02_60)]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  }}
                >
                  {t(item.titleZh, item.titleEn)}
                </h3>

                <p
                  className="text-sm leading-relaxed text-[oklch(0.40_0.02_60)]"
                  style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
                >
                  {t(item.descZh, item.descEn)}
                </p>
              </div>

              <div className="mt-10 text-[0.65rem] uppercase tracking-[0.2em] text-[oklch(0.60_0.08_65)]">
                Eastern Strategic Intelligence
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
