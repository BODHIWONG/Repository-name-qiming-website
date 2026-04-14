import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Testimonial = {
  zh: string;
  en: string;
  clientZh: string;
  clientEn: string;
};

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  const testimonials: Testimonial[] = [
    {
      zh: "做完空间能量净化之后，晚上睡眠明显改善，原本压抑的感觉没有了，人也轻松很多。",
      en: "After the space energy clearing, my sleep improved noticeably. The heavy feeling at home was gone, and I felt much lighter.",
      clientZh: "新加坡 · 住宅客户",
      clientEn: "Singapore · Residential Client",
    },
    {
      zh: "调整店铺布局之后，整体气场完全不一样，客户停留时间明显增加，生意也更顺了。",
      en: "After adjusting the shop layout, the atmosphere changed completely. Customers stayed longer, and business felt much smoother.",
      clientZh: "新加坡 · 店铺客户",
      clientEn: "Singapore · Shop Client",
    },
    {
      zh: "原本在事业方向上很迷茫，做完咨询之后思路非常清晰，也更有底气做决定。",
      en: "I was very lost about my career direction before. After the consultation, my thinking became much clearer and I felt more confident making decisions.",
      clientZh: "新加坡 · 咨询客户",
      clientEn: "Singapore · Consultation Client",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[oklch(0.97_0.012_75)]">
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
              {t("真实客户反馈", "Real Client Results")}
            </span>
          </div>

          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "oklch(0.12 0.02 60)",
            }}
          >
            {t("改变不是说出来的，而是客户亲身感受到的", "Real transformation speaks for itself")}
          </h2>

          <p
            className="text-sm text-[oklch(0.50_0.02_65)] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "从情绪调整、财富判断到空间能量优化，真正让客户留下来的，是他们亲身感受到的变化。",
              "From emotional healing to wealth guidance and energy alignment, what stays with clients is the real change they experience."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.88_0.018_70)]">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-8 md:p-10 flex flex-col"
            >
              <div className="mb-6 text-[oklch(0.60_0.08_65)] text-xl">“</div>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{
                  fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
                  color: "oklch(0.28 0.02 60)",
                }}
              >
                {t(item.zh, item.en)}
              </p>

              <div className="w-10 h-px bg-[oklch(0.60_0.08_65)] mt-8 mb-4" />

              <p
                className="text-xs uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "oklch(0.55 0.02 65)",
                }}
              >
                {t(item.clientZh, item.clientEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
