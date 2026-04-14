import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConsultationSection() {
  const { t } = useLanguage();

  const photos = [
    "/images/consultation-1.jpg",
    "/images/consultation-2.jpg",
    "/images/consultation-3.jpg",
    "/images/consultation-4.jpg",
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {t("真实咨询现场", "Real Consultations")}
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
            {t("真实咨询，真实案例，真实结果", "Real Consultations · Real Cases · Real Results")}
          </h2>

          <p
            className="text-sm max-w-2xl leading-relaxed"
            style={{
              fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
              color: "oklch(0.38 0.02 60)",
            }}
          >
            {t(
              "从一对一咨询到公开分享，启明大师长期为客户提供命理、风水布局与空间能量调整服务。",
              "From private consultations to live sharing sessions, Master Qiming provides real Feng Shui, destiny reading, and space alignment guidance."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden border border-[oklch(0.88_0.018_70)] bg-[oklch(0.97_0.012_75)]"
            >
              <img
                src={src}
                alt={`Consultation ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
