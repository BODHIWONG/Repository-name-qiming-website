/*
  ContactSection — Visit Our Studio
  Design: Dark bg (oklch 0.10), gold accents
  
  Trust logic: Physical studio = High trust = High conversion
  CTA: "Deep Insight" (成交) | "Exclusive Consultation" (高客单)
  NO generic "WhatsApp" as primary CTA label
*/
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Clock, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import { MapView } from "@/components/Map";

const WA_INSIGHT = "https://wa.me/6589418791?text=Hello%2C%20I%27d%20like%20a%20Deep%20Insight%20session%20with%20Master%20Qiming.";
const WA_EXCLUSIVE = "https://wa.me/6589418791?text=Hello%2C%20I%27m%20interested%20in%20Exclusive%20Consultation%20with%20Master%20Qiming.";

// Bedok studio coordinates
const STUDIO_LAT = 1.3236;
const STUDIO_LNG = 103.9273;

export default function ContactSection() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "oklch(0.10 0.02 60)" }}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "oklch(0.60 0.08 65)" }} />
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.08 65)" }}
            >
              {t("实体门店 · 新加坡", "Physical Studio · Singapore")}
            </span>
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "oklch(0.95 0.01 75)",
            }}
          >
            {t("到访我们的工作室", "Visit Our Studio")}
          </h2>
          <p
            className="text-sm max-w-lg leading-relaxed"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif", color: "oklch(0.60 0.03 65)" }}
          >
            {t(
              "有实体，有信任，有转化。亲临门店，感受能量的真实流动。",
              "Physical presence builds trust. Visit our studio and experience the real flow of energy in person."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Info + CTAs */}
          <div className="space-y-10">

            {/* Address Block */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ border: "1px solid oklch(0.60 0.08 65)" }}
                >
                  <MapPin size={16} style={{ color: "oklch(0.60 0.08 65)" }} />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif", color: "oklch(0.90 0.01 75)" }}
                  >
                    Blk 210 New Upper Changi Road
                  </p>
                  <p className="text-sm" style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.03 65)" }}>
                    #01-729 Singapore 460210
                  </p>
                  <p className="text-xs mt-1" style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.50 0.02 65)" }}>
                    {t("（Bedok MRT 步行约 8 分钟）", "(~8 min walk from Bedok MRT)")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ border: "1px solid oklch(0.60 0.08 65)" }}
                >
                  <Clock size={16} style={{ color: "oklch(0.60 0.08 65)" }} />
                </div>
                <div>
                  <p
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif", color: "oklch(0.90 0.01 75)" }}
                  >
                    {t("每日 10:00 — 20:00", "Daily 10:00 — 20:00")}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.50 0.02 65)" }}>
                    {t("线上咨询时间更灵活，请提前预约", "Online consultation hours more flexible — appointment required")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p
                className="text-[0.6rem] tracking-[0.2em] uppercase mb-4 font-semibold"
                style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.08 65)" }}
              >
                {t("信任体系", "Trusted Presence")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { zh: "16+ 年实战经验", en: "16+ Years Experience" },
                  { zh: "传统玄学传承", en: "Traditional Metaphysics Lineage" },
                  { zh: "真实案例见证", en: "Real Client Case Studies" },
                  { zh: "新加坡实体门店", en: "Bedok Physical Studio" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 text-xs font-medium"
                    style={{
                      fontFamily: "'Lato', 'Noto Sans SC', sans-serif",
                      border: "1px solid oklch(0.25 0.02 60)",
                      color: "oklch(0.75 0.02 65)",
                    }}
                  >
                    {t(badge.zh, badge.en)}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons — Deep Insight + Exclusive Consultation */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="space-y-3">
              <a
                href={WA_INSIGHT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  background: "oklch(0.60 0.08 65)",
                  color: "oklch(0.10 0.02 60)",
                  letterSpacing: "0.12em",
                }}
              >
                <span>{t("深度洞察", "Deep Insight")}</span>
                <ArrowRight size={14} />
              </a>
              <a
                href={WA_EXCLUSIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[oklch(0.60_0.08_65)] hover:text-[oklch(0.10_0.02_60)]"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  border: "1.5px solid oklch(0.60 0.08 65)",
                  color: "oklch(0.75 0.04 65)",
                  letterSpacing: "0.10em",
                }}
              >
                <span>{t("专属咨询", "Exclusive Consultation")}</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Social Media */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p
                className="text-[0.6rem] tracking-[0.2em] uppercase mb-3 font-semibold"
                style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.50 0.02 65)" }}
              >
                {t("关注我们", "Follow Us")}
              </p>
              <div className="flex gap-3">
                {[
                  { href: "https://www.instagram.com/qmfeng", Icon: Instagram },
                  { href: "https://www.facebook.com/qmfeng", Icon: Facebook },
                  { href: "https://www.youtube.com/@qmfeng", Icon: Youtube },
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                    style={{
                      border: "1px solid oklch(0.30 0.02 60)",
                      color: "oklch(0.50 0.02 65)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.60 0.08 65)";
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.60 0.08 65)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.30 0.02 60)";
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.50 0.02 65)";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right: Google Map */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="overflow-hidden" style={{ height: "420px", border: "1px solid oklch(0.25 0.02 60)" }}>
              <MapView
                initialCenter={{ lat: STUDIO_LAT, lng: STUDIO_LNG }}
                initialZoom={16}
                onMapReady={(map) => {
                  // Add marker for studio
                  const marker = new (window as any).google.maps.Marker({
                    position: { lat: STUDIO_LAT, lng: STUDIO_LNG },
                    map,
                    title: "Qiming Feng Shui Studio",
                  });
                  const infoWindow = new (window as any).google.maps.InfoWindow({
                    content: `<div style="font-family: 'Lato', sans-serif; padding: 4px;">
                      <strong style="color: #1C1810;">Qiming Feng Shui</strong><br/>
                      <span style="font-size: 12px; color: #666;">Blk 210 New Upper Changi Rd #01-729</span>
                    </div>`,
                  });
                  marker.addListener("click", () => infoWindow.open(map, marker));
                  infoWindow.open(map, marker);
                }}
              />
            </div>

            {/* Studio address overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4"
              style={{ background: "oklch(0.10 0.02 60 / 0.95)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.60 0.08 65)" }}
              >
                {t("启明风水美学工作室", "Qiming Feng Shui Studio")}
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.65 0.02 65)" }}
              >
                Blk 210 New Upper Changi Road #01-729 · Singapore 460210
              </p>
            </div>
          </motion.div>

        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid oklch(0.20 0.02 60)" }}
        >
          <p
            className="text-xs leading-relaxed italic text-center max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif", color: "oklch(0.45 0.02 60)" }}
          >
            {t(
              "⚠ 启明大师坚持「互利共赢」原则：以真才实学服务社会，拒绝恐吓式营销与过度承诺。咨询结果仅供参考，最终决策权在您。",
              "⚠ Master Qiming upholds the principle of mutual benefit: serving society with genuine expertise, refusing fear-based marketing and over-promising. Consultation results are for reference only; final decision-making authority rests with you."
            )}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
