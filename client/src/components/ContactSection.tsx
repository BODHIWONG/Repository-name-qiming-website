/*
  ContactSection — 联系与预约
  WhatsApp-first CTA, Singapore address, social links
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ContactSection() {
  const { lang, t } = useLanguage();

  const steps = lang === "zh"
    ? [
        { num: "01", title: "WhatsApp 初步咨询", desc: "发送您的基本信息与咨询需求，大师助理将在24小时内回复" },
        { num: "02", title: "确认咨询方向", desc: "根据您的需求，确认最适合的咨询类型与预约时间" },
        { num: "03", title: "深度咨询", desc: "线上或线下深度咨询，获得精准的分析与解决方案" },
        { num: "04", title: "跟进与落实", desc: "咨询后持续跟进，确保建议得到有效落实" },
      ]
    : [
        { num: "01", title: "WhatsApp Initial Enquiry", desc: "Send your basic information and consultation needs; Master's assistant will reply within 24 hours" },
        { num: "02", title: "Confirm Consultation Direction", desc: "Based on your needs, confirm the most suitable consultation type and appointment time" },
        { num: "03", title: "In-Depth Consultation", desc: "Online or in-person deep consultation, receiving precise analysis and solutions" },
        { num: "04", title: "Follow-up & Implementation", desc: "Continued follow-up after consultation to ensure recommendations are effectively implemented" },
      ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[oklch(0.15_0.02_60)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA */}
          <div>
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-[oklch(0.60_0.08_65)] to-transparent" />
                <span className="section-label text-[oklch(0.60_0.08_65)]">
                  {t("预约咨询", "Book Consultation")}
                </span>
              </div>
              <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                {lang === "zh" ? (
                  <>开始您的<em className="text-[oklch(0.75_0.06_65)] not-italic">人生战略咨询</em></>
                ) : (
                  <>Begin Your <em className="text-[oklch(0.75_0.06_65)] not-italic">Life Strategy Consultation</em></>
                )}
              </h2>
              <p className="text-base text-[oklch(0.65_0.01_75)] leading-relaxed mb-8"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "咨询名额有限，为保证服务深度与质量，所有咨询均为预约制。建议提前通过 WhatsApp 联系，说明您的核心需求。",
                  "Consultation slots are limited. To maintain service depth and quality, all consultations are by appointment. We recommend contacting via WhatsApp in advance to describe your core needs."
                )}
              </p>
            </motion.div>

            {/* WhatsApp Primary CTA */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-8">
              <a
                href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[oklch(0.60_0.08_65)] hover:bg-[oklch(0.50_0.07_60)] text-white px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[oklch(0.60_0.08_65/0.3)] hover:-translate-y-0.5 w-full md:w-auto justify-center md:justify-start"
              >
                <MessageCircle size={20} />
                <span className="font-semibold tracking-wide text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}>
                  {t("WhatsApp 立即预约", "WhatsApp — Book Now")}
                </span>
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.60_0.08_65)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[oklch(0.85_0.01_75)]"
                    style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                    Blk 210 New Upper Changi Road #01-729
                  </p>
                  <p className="text-xs text-[oklch(0.55_0.01_75)]">Singapore 460210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[oklch(0.60_0.08_65)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[oklch(0.85_0.01_75)]"
                    style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                    {t("每日 10:00 — 20:00", "Daily 10:00 — 20:00")}
                  </p>
                  <p className="text-xs text-[oklch(0.55_0.01_75)]">
                    {t("线上咨询时间更灵活，请WhatsApp确认", "Online consultation hours are more flexible, please confirm via WhatsApp")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media — Singapore relevant */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-xs text-[oklch(0.55_0.01_75)] uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {t("社交媒体", "Follow Us")}
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/qmfeng" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-[oklch(0.35_0.02_60)] flex items-center justify-center text-[oklch(0.55_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                  <Instagram size={16} />
                </a>
                <a href="https://www.facebook.com/qmfeng" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-[oklch(0.35_0.02_60)] flex items-center justify-center text-[oklch(0.55_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                  <Facebook size={16} />
                </a>
                <a href="https://www.youtube.com/@qmfeng" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-[oklch(0.35_0.02_60)] flex items-center justify-center text-[oklch(0.55_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300">
                  <Youtube size={16} />
                </a>
                <a href="https://www.tiktok.com/@qmfeng" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-[oklch(0.35_0.02_60)] flex items-center justify-center text-[oklch(0.55_0.01_75)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300 text-xs font-bold"
                  style={{ fontFamily: "'Lato', sans-serif" }}>
                  TK
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Process Steps */}
          <div>
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="mb-8">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[oklch(0.60_0.08_65)] mb-6"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {t("预约流程", "Booking Process")}
              </h3>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    custom={i + 5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="flex gap-5 pb-8 relative"
                  >
                    {/* Vertical line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-px bg-[oklch(0.30_0.02_60)]" />
                    )}
                    {/* Step number */}
                    <div className="w-10 h-10 border border-[oklch(0.60_0.08_65)] flex items-center justify-center flex-shrink-0 bg-[oklch(0.15_0.02_60)]">
                      <span className="text-xs font-bold text-[oklch(0.60_0.08_65)]"
                        style={{ fontFamily: "'Lato', sans-serif" }}>
                        {step.num}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-semibold text-[oklch(0.85_0.01_75)] mb-1"
                        style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-[oklch(0.55_0.01_75)] leading-relaxed"
                        style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div custom={9} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="border border-[oklch(0.30_0.02_60)] p-5">
              <p className="text-xs text-[oklch(0.55_0.01_75)] leading-relaxed italic"
                style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}>
                {t(
                  "⚠ 启明大师坚持「互利共赢」原则：以真才实学服务社会，拒绝恐吓式营销与过度承诺。咨询结果仅供参考，最终决策权在您。",
                  "⚠ Master Qiming upholds the principle of \"mutual benefit\": serving society with genuine expertise, refusing fear-based marketing and over-promising. Consultation results are for reference only; final decision-making authority rests with you."
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
