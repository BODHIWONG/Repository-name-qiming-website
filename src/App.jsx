import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const content = {
  zh: {
    brand: "奇明战略风水",
    brandShort: "奇明战略风水",
    toggle: "EN",
    nav: {
      home: "首页",
      destiny: "命理咨询",
      fengshui: "风水布局",
      strategy: "战略规划",
      qimen: "占卦问事",
      enhancer: "吉祥物 / 水晶",
    },
    footer: "WhatsApp: +65 89418791 · © 奇明战略风水",
    heroTitle: "奇明战略风水",
    heroSubtitle: "不是看风水，是参与关键决策。",
    heroDescription:
      "立足新加坡，融合命理、风水、奇门遁甲与战略规划，为个人、家庭与企业提供系统化的决策支持。",
    heroCta: "立即预约咨询",
    servicesTitle: "核心服务",
    casesTitle: "真实案例",
    aboutTitle: "关于奇明",
    aboutText:
      "奇明战略风水专注于命理咨询、风水布局、战略规划、占卦问事，以及吉祥物与水晶能量配置。我们强调环境、时间与人的匹配关系，帮助客户在关键节点做出更有胜算的选择。",
    homeServices: [
      "命理咨询",
      "住宅 / 办公 / 商业风水布局",
      "企业战略规划与关键决策支持",
      "奇门遁甲占卦问事",
      "风水吉祥物配置",
      "水晶手链能量配置",
    ],
    cases: [
      {
        title: "Ai Cafe（F&B 企业）",
        desc: "原本经营困难、客户流失。经过启明大师以奇门遁甲结合风水布局调整后，公司业绩增长 30%。",
      },
      {
        title: "轻安村（慈善机构与素餐厅）",
        desc: "通过整体空间布局优化与能量调整后，客流量提升 25%，整体运营氛围明显改善。",
      },
    ],
    pages: {
      destiny: {
        title: "命理咨询",
        subtitle: "解析格局，判断时机",
        body: "通过八字命盘结合奇门时空盘，帮助您了解个人格局、运势周期、事业方向、合作关系与关键选择。适用于职业规划、创业时机、婚姻判断、投资方向与重大人生决策。",
        points: ["事业与财运判断", "人生关键节点分析", "合作与关系匹配", "择时与重大决策支持"],
        cta: "预约命理咨询",
      },
      fengshui: {
        title: "风水布局",
        subtitle: "让空间成为助力，而不是阻力",
        body: "针对住宅、办公室与商业空间进行专业评估与系统布局，从门位、动线、功能区、气场聚集与能量流动等角度出发，帮助空间与人、事业和目标达成真正匹配。",
        points: ["住宅风水", "办公室风水", "商业空间布局", "选址与调整建议"],
        cta: "预约风水勘测",
      },
      strategy: {
        title: "战略规划",
        subtitle: "方向、时机、节奏，缺一不可",
        body: "结合行业属性、企业节奏、个人命理与时局变化，提供更具胜算的战略规划支持。适合企业主、创业者和高净值客户在扩张、转型、合作与重大决策前使用。",
        points: ["企业扩张与转型", "合作与项目判断", "择时启动策略", "关键决策咨询"],
        cta: "预约战略咨询",
      },
      qimen: {
        title: "占卦问事",
        subtitle: "在关键节点，选择更有胜算的路径",
        body: "通过奇门遁甲起局，对合作、投资、项目推进、出行、谈判、择日等具体问题给出判断建议，帮助您在复杂局面中看清形势与机会。",
        points: ["项目与合作判断", "投资与行动时机", "出行与谈判择时", "关键问题快速决策"],
        cta: "立即占卦咨询",
      },
      enhancer: {
        title: "吉祥物 / 水晶配置",
        subtitle: "放大布局后的能量效果",
        body: "根据命理与风水需求，配置适合的风水吉祥物、水晶手链与能量物件，帮助巩固整体布局效果，使空间与个人气场更加稳定与协调。",
        points: ["风水吉祥物推荐", "水晶手链配置", "能量物件摆放建议", "个性化匹配方案"],
        cta: "咨询能量配置",
      },
    },
  },
  en: {
    brand: "Qiming Strategic Feng Shui",
    brandShort: "Qiming Strategic Feng Shui",
    toggle: "中文",
    nav: {
      home: "Home",
      destiny: "Destiny",
      fengshui: "Feng Shui",
      strategy: "Strategy",
      qimen: "Qimen",
      enhancer: "Enhancers / Crystals",
    },
    footer: "WhatsApp: +65 89418791 · © Qiming Strategic Feng Shui",
    heroTitle: "Qiming Strategic Feng Shui",
    heroSubtitle: "Not fortune telling. We participate in critical decisions.",
    heroDescription:
      "Based in Singapore, we integrate destiny analysis, Feng Shui, Qimen Dunjia, and strategic planning to support individuals, families, and business owners with high-stakes decisions.",
    heroCta: "Book a Consultation",
    servicesTitle: "Core Services",
    casesTitle: "Case Studies",
    aboutTitle: "About Qiming",
    aboutText:
      "Qiming Strategic Feng Shui focuses on destiny consultation, Feng Shui layout, strategic planning, Qimen divination, and enhancer or crystal configuration. We emphasize the alignment of environment, timing, and people so clients can make stronger decisions at key moments.",
    homeServices: [
      "Destiny Consultation",
      "Residential / Office / Commercial Feng Shui",
      "Strategic Planning & Decision Support",
      "Qimen Dunjia Divination",
      "Feng Shui Enhancer Configuration",
      "Crystal Bracelet Energy Matching",
    ],
    cases: [
      {
        title: "Ai Cafe (F&B Business)",
        desc: "The business was struggling with declining customers. After Master Qiming applied Qimen Dunjia together with Feng Shui layout adjustments, company revenue increased by 30%.",
      },
      {
        title: "Qing An Village (Charity & Vegetarian Restaurant)",
        desc: "After optimizing the overall spatial layout and energy flow, visitor traffic increased by 25% and the operating atmosphere improved significantly.",
      },
    ],
    pages: {
      destiny: {
        title: "Destiny Consultation",
        subtitle: "Understand your structure. Choose the right timing.",
        body: "By combining BaZi with Qimen time-space reading, we help you understand your personal structure, life cycles, career direction, partnerships, and decision timing. Ideal for career planning, entrepreneurship, relationships, investments, and major life choices.",
        points: ["Career and wealth reading", "Major life timing analysis", "Partnership compatibility", "Decision and timing support"],
        cta: "Book Destiny Consultation",
      },
      fengshui: {
        title: "Feng Shui Layout",
        subtitle: "Turn your space into an advantage.",
        body: "We provide professional assessment and systematic layout recommendations for homes, offices, and commercial spaces. We evaluate entrance position, circulation, functional zones, energy concentration, and spatial alignment with people and goals.",
        points: ["Residential Feng Shui", "Office Feng Shui", "Commercial layout", "Site selection and adjustment advice"],
        cta: "Book Feng Shui Assessment",
      },
      strategy: {
        title: "Strategic Planning",
        subtitle: "Direction, timing, and rhythm all matter.",
        body: "By combining industry logic, business timing, personal destiny structure, and shifting circumstances, we provide stronger support for expansion, transformation, partnerships, and critical decisions.",
        points: ["Expansion and transformation", "Project and partnership evaluation", "Launch timing strategy", "Executive decision support"],
        cta: "Book Strategic Consultation",
      },
      qimen: {
        title: "Qimen Divination",
        subtitle: "Choose the path with better odds.",
        body: "Using Qimen Dunjia charts, we assess specific issues such as business cooperation, investments, project timing, travel, negotiations, and important action windows so you can act with greater clarity.",
        points: ["Project and cooperation analysis", "Investment and timing", "Travel and negotiation timing", "Fast decision support"],
        cta: "Book Qimen Consultation",
      },
      enhancer: {
        title: "Enhancers / Crystal Configuration",
        subtitle: "Amplify the effect of the main layout.",
        body: "Based on destiny needs and Feng Shui goals, we recommend suitable enhancers, crystal bracelets, and energy objects to stabilize and strengthen the overall effect of your layout and timing work.",
        points: ["Enhancer recommendations", "Crystal bracelet matching", "Placement guidance", "Personalized configuration"],
        cta: "Consult Energy Configuration",
      },
    },
  },
};

function Layout({ lang, setLang, children }) {
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-8 py-5 bg-black border-b border-gray-800">
        <div className="text-lg md:text-xl font-bold">{t.brandShort}</div>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-300">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/destiny">{t.nav.destiny}</Link>
          <Link to="/fengshui">{t.nav.fengshui}</Link>
          <Link to="/strategy">{t.nav.strategy}</Link>
          <Link to="/qimen">{t.nav.qimen}</Link>
          <Link to="/enhancer">{t.nav.enhancer}</Link>
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="ml-2 px-3 py-1 border border-gray-600 rounded text-sm hover:bg-gray-800 transition"
          >
            {t.toggle}
          </button>
        </div>
      </nav>
      {children}
      <footer className="text-center text-gray-500 py-10 border-t border-gray-800 px-6">
        {t.footer}
      </footer>
    </div>
  );
}

function ServicePage({ lang, setLang, pageKey }) {
  const t = content[lang];
  const page = t.pages[pageKey];

  return (
    <Layout lang={lang} setLang={setLang}>
      <section className="px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto">
        <p className="text-yellow-400 mb-4">{page.subtitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{page.title}</h1>
        <p className="text-gray-300 text-lg leading-8 mb-8">{page.body}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {page.points.map((point) => (
            <div key={point} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-gray-300">
              {point}
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/6589418791"
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          {page.cta}
        </a>
      </section>
    </Layout>
  );
}

function Home({ lang, setLang }) {
  const t = content[lang];

  return (
    <Layout lang={lang} setLang={setLang}>
      <section className="text-center px-6 py-24 md:py-28 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.heroTitle}</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4">{t.heroSubtitle}</p>
        <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-8 mb-10">{t.heroDescription}</p>
        <a
          href="https://wa.me/6589418791"
          className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-2xl text-lg md:text-xl font-semibold"
        >
          {t.heroCta}
        </a>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.servicesTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.homeServices.map((service) => (
            <div key={service} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-gray-300">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.casesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.cases.map((item) => (
              <div key={item.title} className="bg-black border border-gray-800 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.aboutTitle}</h2>
        <p className="text-gray-300 text-base md:text-lg leading-8">{t.aboutText}</p>
      </section>
    </Layout>
  );
}

function AppRoutes({ lang, setLang }) {
  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
      <Route path="/destiny" element={<ServicePage lang={lang} setLang={setLang} pageKey="destiny" />} />
      <Route path="/fengshui" element={<ServicePage lang={lang} setLang={setLang} pageKey="fengshui" />} />
      <Route path="/strategy" element={<ServicePage lang={lang} setLang={setLang} pageKey="strategy" />} />
      <Route path="/qimen" element={<ServicePage lang={lang} setLang={setLang} pageKey="qimen" />} />
      <Route path="/enhancer" element={<ServicePage lang={lang} setLang={setLang} pageKey="enhancer" />} />
    </Routes>
  );
}

export default function QimingWebsite() {
  const browserLang = typeof window !== "undefined" && window.navigator.language?.toLowerCase().includes("zh") ? "zh" : "en";
  const [lang, setLang] = useState(browserLang || "en");
  const stableLang = useMemo(() => (lang === "zh" ? "zh" : "en"), [lang]);

  return (
    <Router>
      <AppRoutes lang={stableLang} setLang={setLang} />
    </Router>
  );
}

