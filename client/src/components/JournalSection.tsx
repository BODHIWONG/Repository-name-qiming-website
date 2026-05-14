import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const essays = [
  {
    category: "AI ERA",
    title: "Why Eastern Strategic Intelligence Matters in the AI Era",
    excerpt:
      "Artificial intelligence increases access to information, but strategic awareness remains rare.",
    href: "/journal-ai-era-eastern-intelligence",
  },
  {
    category: "QIMEN STRATEGY",
    title: "Why Smart People Stay Stuck",
    excerpt:
      "The problem is often not intelligence, but timing, environment and unseen human dynamics.",
    href: "#",
  },
  {
    category: "CONSCIOUSNESS",
    title: "Environment and Human Awareness",
    excerpt:
      "Environment silently shapes emotion, perception and long-term decision-making patterns.",
    href: "#",
  },
];

export default function JournalSection() {
  const { t } = useLanguage();

  return (
    <section className="py-28 bg-white border-t border-[oklch(0.90_0.015_70)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p
            className="mb-4 text-[0.68rem] uppercase tracking-[0.28em] text-[oklch(0.60_0.08_65)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Eastern Strategic Intelligence Journal
          </p>

          <h2
            className="mb-5 text-[oklch(0.12_0.02_60)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem,5vw,4.8rem)",
              lineHeight: "1.02",
            }}
          >
            {t(
              "思想档案与战略洞察",
              "Essays, Research & Strategic Thought"
            )}
          </h2>

          <p
            className="text-sm md:text-base leading-relaxed text-[oklch(0.42_0.02_60)]"
            style={{ fontFamily: "'Lato', 'Noto Sans SC', sans-serif" }}
          >
            {t(
              "这里记录关于意识、环境、时机、战略觉察与 AI 时代东方智慧的长期研究。",
              "A growing archive exploring consciousness, environment, timing and strategic awareness in the AI era."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[oklch(0.90_0.015_70)]">
          {essays.map((essay, index) => (
            <motion.a
              key={index}
              href={essay.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[oklch(0.98_0.008_75)] p-8 md:p-10 min-h-[320px] flex flex-col justify-between hover:bg-white transition-all duration-300"
            >
              <div>
                <div className="mb-8 text-[0.6rem] tracking-[0.22em] uppercase text-[oklch(0.60_0.08_65)]">
                  {essay.category}
                </div>

                <h3
                  className="mb-4 text-[oklch(0.12_0.02_60)]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.6rem,2.5vw,2.3rem)",
                    lineHeight: "1.08",
                  }}
                >
                  {essay.title}
                </h3>

                <p
                  className="text-sm leading-relaxed text-[oklch(0.42_0.02_60)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {essay.excerpt}
                </p>
              </div>

              <div className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-[oklch(0.60_0.08_65)]">
                Read Journal
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
