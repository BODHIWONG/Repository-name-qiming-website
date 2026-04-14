import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const WA_WEALTH =
  "https://wa.me/6589418791?text=Hello%2C%20I%27m%20interested%20in%20Wealth%20Growth%20and%20Risk%20Protection%20consultation%20with%20Master%20Qiming.";

const WA_HEALING =
  "https://wa.me/6589418791?text=Hello%2C%20I%27m%20interested%20in%20Emotional%20and%20Relationship%20Healing%20consultation%20with%20Master%20Qiming.";

const WA_CLEARING =
  "https://wa.me/6589418791?text=Hello%2C%20I%27m%20interested%20in%20Space%20Energy%20Clearing%20with%20Master%20Qiming.";

type ServiceItem = {
  zh: string;
  en: string;
};

type ServiceCard = {
  no: string;
  tagZh: string;
  tagEn: string;
  titleZh: string;
  titleEn: string;
  subtitleZh: string;
  subtitleEn: string;
  descZh: string;
  descEn: string;
  items: ServiceItem[];
  link: string;
  ctaZh: string;
  ctaEn: string;
  dark: boolean;
  highlightPrice?: boolean;
};

export default function ServicesSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
    }),
  };

  const services: ServiceCard[] = [
    {
      no: "01",
      tagZh: "赚钱与避险刚需",
      tagEn: "Wealth Growth & Risk Protection",
      titleZh: "赚钱与避险",
      titleEn: "Wealth Growth & Risk Protection",
      subtitleZh: "看清方向，避开风险，做对关键决策",
      subtitleEn: "See the timing, avoid risks, and make better decisions",
      descZh:
        "适合事业卡点、投资犹豫、财运波动、转型压力大，以及面对重大选择与风险判断的人群。",
      descEn:
        "For those facing business bottlenecks, investment hesitation, unstable wealth flow, major transitions, or high-stakes decisions.",
      items: [
        { zh: "奇门决策分析", en: "Qi Men Decision Analysis" },
        { zh: "八字财运与事业方向", en: "Bazi Wealth & Career Analysis" },
        { zh: "商业与店铺旺财布局", en: "Business Feng Shui for Wealth" },
        { zh: "重要节点择时避险", en: "Timing for Key Risk Decisions" },
      ],
      link: WA_WEALTH,
      ctaZh: "预约财富咨询",
      ctaEn: "Book Wealth Consultation",
      dark: false,
    },
    {
      no: "02",
      tagZh: "情绪（情感）与疗愈刚需",
      tagEn: "Emotional & Relationship Healing",
      titleZh: "情绪与疗愈",
      titleEn: "Emotional & Relationship Healing",
      subtitleZh: "缓解焦虑，稳定关系，回到内在平衡",
      subtitleEn: "Restore emotional balance, relationships, and inner stability",
      descZh:
        "适合长期焦虑、情绪反复、感情受阻、睡眠不稳或内耗严重的人群。",
      descEn:
        "For those dealing with anxiety, emotional instability, relationship struggles, poor sleep, or inner heaviness.",
      items: [
        { zh: "情绪与关系命理分析", en: "Emotional & Relationship Reading" },
        { zh: "个人能量校准", en: "Personal Energy Alignment" },
        { zh: "睡眠与家宅气场调整", en: "Sleep & Home Energy Adjustment" },
        { zh: "情感状态疗愈建议", en: "Healing Guidance for Emotional Recovery" },
      ],
      link: WA_HEALING,
      ctaZh: "预约疗愈咨询",
      ctaEn: "Book Healing Consultation",
      dark: true,
    },
    {
      no: "03",
      tagZh: "空间能量净化",
      tagEn: "Space Energy Clearing",
      titleZh: "空间能量净化",
      titleEn: "Space Energy Clearing",
      subtitleZh: "快速调整环境能量，改善压抑与不顺",
      subtitleEn: "Reset your environment and clear heavy energy quickly",
      descZh:
        "适合家宅不舒服、店铺气场差、睡眠受影响、情绪烦躁或空间压抑的人群。",
      descEn:
        "For homes, shops, or offices with heavy energy, poor sleep, emotional irritability, or spaces needing a fast energetic reset.",
      items: [
        { zh: "家宅能量净化", en: "Residential Energy Clearing" },
        { zh: "店铺与办公室气场调整", en: "Shop & Office Energy Reset" },
        { zh: "睡眠与气场优化", en: "Sleep & Atmosphere Improvement" },
        { zh: "快速入口服务", en: "Fast Entry-Level Service" },
      ],
      link: WA_CLEARING,
      ctaZh: "预约净化服务",
      ctaEn: "Book Clearing Service",
      dark: false,
      highlightPrice: true,
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
              {t("三大核心服务", "Three Core Services")}
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
            {t("聚焦客户最急的三件事", "Focused on the Three Needs Clients Care About Most")}
          </h2>

          <p
            className="text-sm text-[oklch(0.50_0.02_65)] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "重点讲清楚客户真正关心的结果：赚钱与避险、情绪与关系修复，以及空间能量净化。",
              "Focus on what clients truly care about: wealth protection, emotional healing, and space energy clearing."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.88_0.018_70)]">
          {services.map((service, i) => (
            <motion.div
              key={service.no}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className={`flex flex-col p-8 md:p-10 ${
                service.dark ? "bg-[oklch(0.10_0.02_60)]" : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[0.55rem] tracking-[0.25em] uppercase font-bold px-2 py-1"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.60 0.08 65)",
                    border: "1px solid oklch(0.60 0.08 65)",
                  }}
                >
                  {service.no}
                </span>

                <span
                  className="text-[0.55rem] tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "oklch(0.60 0.08 65)",
                  }}
                >
                  {t(service.tagZh, service.tagEn)}
                </span>
              </div>

              <h3
                className="mb-1 font-bold"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.55rem, 3vw, 2.2rem)",
                  color: service.dark ? "oklch(0.60 0.08 65)" : "oklch(0.12 0.02 60)",
                }}
              >
                {service.titleEn}
              </h3>

              <p
                className="text-base mb-2 tracking-wide"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: service.dark ? "oklch(0.75 0.04 65)" : "oklch(0.35 0.02 60)",
                }}
              >
                {t(service.titleZh, service.titleEn)}
              </p>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{
                  fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
                  color: service.dark ? "oklch(0.82 0.03 65)" : "oklch(0.26 0.02 60)",
                }}
              >
                {t(service.subtitleZh, service.subtitleEn)}
              </p>

              {service.highlightPrice && (
                <div
                  className="mb-5 inline-flex items-center self-start px-4 py-2 text-sm font-bold"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    background: "oklch(0.60 0.08 65)",
                    color: "oklch(0.98 0.005 75)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t("$288 起", "From $288")}
                </div>
              )}

              <div
                className="w-full h-px my-6"
                style={{
                  background: service.dark ? "oklch(0.25 0.02 60)" : "oklch(0.88_0.018_70)",
                }}
              />

              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Noto Sans SC', 'Lato', sans-serif",
                  color: service.dark ? "oklch(0.68 0.03 65)" : "oklch(0.35 0.02 60)",
                }}
              >
                {t(service.descZh, service.descEn)}
              </p>

              <div className="flex-1 mt-6 space-y-4">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className="w-px h-4 mt-0.5 flex-shrink-0"
                      style={{ background: "oklch(0.60 0.08 65)" }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
                        color: service.dark ? "oklch(0.82 0.03 65)" : "oklch(0.25_0.02_60)",
                      }}
                    >
                      {t(item.zh, item.en)}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase transition-all duration-300 hover:gap-4"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  letterSpacing: "0.12em",
                  color: "oklch(0.60 0.08 65)",
                }}
              >
                {t(service.ctaZh, service.ctaEn)} <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 text-center text-xs text-[oklch(0.55_0.02_65)] max-w-2xl mx-auto"
          style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
        >
          {t(
            "所有咨询均为预约制，启明大师会根据你的实际情况，判断更适合从财富决策、情绪疗愈，还是空间净化切入。",
            "All consultations are by appointment. Master Qiming will recommend whether wealth guidance, healing support, or space clearing is the right starting point for your situation."
          )}
        </motion.p>
      </div>
    </section>
  );
}
