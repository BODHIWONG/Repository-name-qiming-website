/*
  FloatingActions — WhatsApp CTA + Back to Top
  Always visible, bottom-right corner
*/
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronUp, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-[oklch(0.97_0.012_75)] border border-[oklch(0.88_0.018_70)] flex items-center justify-center text-[oklch(0.50_0.02_65)] hover:border-[oklch(0.60_0.08_65)] hover:text-[oklch(0.60_0.08_65)] transition-all duration-300 shadow-md"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/6589418791?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Master%20Qiming."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 bg-[oklch(0.60_0.08_65)] text-white px-4 py-3 shadow-lg shadow-[oklch(0.60_0.08_65/0.3)] hover:bg-[oklch(0.50_0.07_60)] transition-all duration-300"
      >
        <MessageCircle size={16} />
        <span className="text-xs font-bold tracking-wide hidden sm:block"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          {t("立即咨询", "Book Now")}
        </span>
      </motion.a>
    </div>
  );
}
