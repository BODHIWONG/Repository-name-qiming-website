import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";

const WA_LINK = "https://wa.me/6589418791?text=Hello%20Qimen%20Strategy%2C%20I%20would%20like%20to%20consult%20about%20Qi%20Men%20Dun%20Jia%20Strategic%20Decision%20Advisory%20in%20Singapore.";

const STUDIO_LAT = 1.3236;
const STUDIO_LNG = 103.9273;

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "oklch(0.10 0.02 60)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "oklch(0.60 0.08 65)" }} />
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.08 65)" }}
            >
              {t("启明遁甲 · 新加坡", "Qimen Strategy · Singapore")}
            </span>
          </div>

          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4.8vw, 4rem)",
              color: "oklch(0.95 0.01 75)",
            }}
          >
            {t("在关键选择前，先看清局势", "See the Whole Game Before You Decide")}
          </h2>

          <p
            className="text-sm md:text-base max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif", color: "oklch(0.65 0.02 65)" }}
          >
            {t(
              "启明遁甲位于新加坡 Bedok，提供奇门决策、战略风水布局与能量调频咨询，帮助客户在事业、家庭、空间与人生关键阶段中建立更清晰的判断与布局。",
              "Qimen Strategy is based in Bedok, Singapore, providing Qi Men decision advisory, strategic Feng Shui and energy alignment for clearer judgment and better alignment in business, family, space and key life transitions."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid oklch(0.60 0.08 65)" }}
              >
                <MapPin size={16} style={{ color: "oklch(0.60 0.08 65)" }} />
              </div>

              <div>
                <p
                  className="text-base font-semibold mb-1"
                  style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.92 0.01 75)" }}
                >
                  Qimen Strategy · Singapore
                </p>

                <p
                  className="text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.65 0.02 65)" }}
                >
                  Blk 210 New Upper Changi Road #01-729
                </p>

                <p
                  className="text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.65 0.02 65)" }}
                >
                  Singapore 460210
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                t("奇门决策", "Qi Men Advisory"),
                t("战略风水", "Strategic Feng Shui"),
                t("能量调频", "Energy Alignment"),
                t("空间净化", "Space Clearing"),
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-3 text-xs border border-[oklch(0.25_0.02_60)] text-[oklch(0.75_0.02_65)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "oklch(0.60 0.08 65)",
                color: "oklch(0.10 0.02 60)",
                letterSpacing: "0.12em",
              }}
            >
              {t("预约咨询", "Book a Consultation")}
              <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden border border-[oklch(0.25_0.02_60)] h-[420px]">
              <MapView
                initialCenter={{ lat: STUDIO_LAT, lng: STUDIO_LNG }}
                initialZoom={16}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
