/*
  TestimonialsSection — 客户评价
  Warm testimonial background, editorial layout
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TESTIMONIAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663267794185/G7GkzpZQq9p5c7yHvonweC/qmfeng-testimonial-aPe7DpsoGQuYQHh5g3E9jW.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function TestimonialsSection() {
  const { lang, t } = useLanguage();

  const testimonials = lang === "zh"
    ? [
        {
          quote: "建议非常实用，不是空泛的。咨询后，我们对布局、时机和业务方向都清晰了很多。",
          author: "餐饮业主",
          location: "新加坡",
          track: "事业",
        },
        {
          quote: "最大的不同是清晰感。空间建议有根有据，不模糊，不神秘。感觉像是在和一个懂逻辑的朋友聊天。",
          author: "住宅客户",
          location: "新加坡东部",
          track: "居家",
        },
        {
          quote: "奇门和风水分析帮我避开了一次时机不对的合作。避免了一个错误的决定，本身就已经是巨大的收获。",
          author: "创业者",
          location: "服务业",
          track: "事业",
        },
        {
          quote: "启明大师对我们公司整体运势的判断非常准确，帮助我们在关键时刻做出了正确的战略决策。",
          author: "企业主",
          location: "制造业",
          track: "商业",
        },
        {
          quote: "原本以为只是看风水，没想到整个咨询过程让我重新梳理了内心的很多困惑。那种被真正倾听的感觉，很珍贵。",
          author: "职场女性",
          location: "新加坡CBD",
          track: "疗愈",
        },
        {
          quote: "分手后能量很低，朋友介绍来咨询。大师没有说什么神神叨叨的话，就是帮我把问题拆解清楚了，我自己想通了很多。",
          author: "单身女性",
          location: "新加坡",
          track: "疗愈",
        },
      ]
    : [
        {
          quote: "The advice was highly practical, not abstract. After the consultation, we felt much clearer about layout, timing, and business direction.",
          author: "F&B Business Owner",
          location: "Singapore",
          track: "Career",
        },
        {
          quote: "The biggest difference was clarity. The spatial recommendations felt grounded and realistic, not vague or overly mystical.",
          author: "Residential Client",
          location: "East Singapore",
          track: "Home",
        },
        {
          quote: "The Qimen and Feng Shui analysis helped me avoid a poorly timed collaboration. Avoiding a wrong move was already a huge gain.",
          author: "Entrepreneur",
          location: "Service Industry",
          track: "Career",
        },
        {
          quote: "Master Qiming's judgment on our company's overall fortune was very accurate, helping us make the right strategic decisions at critical moments.",
          author: "Business Owner",
          location: "Manufacturing",
          track: "Business",
        },
        {
          quote: "I expected just feng shui advice, but the whole consultation helped me untangle many inner confusions. That feeling of being truly heard was precious.",
          author: "Professional Woman",
          location: "Singapore CBD",
          track: "Healing",
        },
        {
          quote: "After a breakup I had very low energy. Master Qiming didn't say anything mystical — he just helped me break down the problem clearly, and I figured things out myself.",
          author: "Single Woman",
          location: "Singapore",
          track: "Healing",
        },
      ];

  const trackColors: Record<string, string> = {
    "事业": "text-[oklch(0.45_0.08_220)]",
    "Career": "text-[oklch(0.45_0.08_220)]",
    "居家": "text-[oklch(0.45_0.08_100)]",
    "Home": "text-[oklch(0.45_0.08_100)]",
    "疗愈": "text-[oklch(0.50_0.08_340)]",
    "Healing": "text-[oklch(0.50_0.08_340)]",
    "商业": "text-[oklch(0.50_0.08_65)]",
    "Business": "text-[oklch(0.50_0.08_65)]",
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={TESTIMONIAL_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.97_0.012_75/0.93)]" />
      </div>

      <div className="relative container">
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
            <span className="section-label">{t("客户心声", "Client Testimonials")}</span>
          </div>
          <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl max-w-2xl">
            {lang === "zh" ? (
              <>客户最珍视的，是<em className="text-[oklch(0.60_0.08_65)] not-italic">真实的改变</em></>
            ) : (
              <>What Clients Value Most Is <em className="text-[oklch(0.60_0.08_65)] not-italic">Real Transformation</em></>
            )}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card-subtle p-6 md:p-7 bg-white/80 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-[oklch(0.60_0.08_65)] text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[oklch(0.30_0.02_60)] leading-relaxed mb-5 italic"
                style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: "0.95rem" }}>
                「{item.quote}」
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[oklch(0.92_0.015_70)] pt-4">
                <div>
                  <p className="text-xs font-semibold text-[oklch(0.25_0.02_60)]"
                    style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                    {item.author}
                  </p>
                  <p className="text-[0.65rem] text-[oklch(0.55_0.02_65)] mt-0.5"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {item.location}
                  </p>
                </div>
                <span className={`text-[0.6rem] font-bold tracking-wider uppercase ${trackColors[item.track] || ""}`}>
                  {item.track}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
