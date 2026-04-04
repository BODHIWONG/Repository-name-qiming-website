=import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const WHATSAPP_NUMBER = "6589418791";
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

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
    addressLabel: "地址",
    address: "Blk 210 New Upper Changi Road #01-729 Singapore 460210",
    heroTitle: "奇明战略风水",
    heroSubtitle: "风水是基础，战略是应用，结果才是目的。",
    heroDescription:
      "结合命理、风水与奇门遁甲，为个人、家庭与企业主提供关键节点的决策支持。不是空谈玄学，而是帮助你在对的时间，做更有胜算的选择。",
    heroPrimaryCta: "立即 WhatsApp 咨询",
    heroSecondaryCta: "查看核心服务",
    heroTrusts: [
      "新加坡本地实体服务",
      "真实案例业绩提升最高 30%",
      "预约制深度咨询",
    ],
    urgencyTitle: "咨询名额有限",
    urgencyText:
      "为保证每位客户的分析深度，目前采用预约制。建议尽早联系，锁定合适时间。",
    stats: [
      { value: "1 对 1", label: "深度咨询" },
      { value: "本地实体", label: "新加坡门店" },
      { value: "关键节点", label: "决策支持" },
    ],
    servicesTitle: "核心服务",
    services: [
      {
        title: "命理咨询",
        desc: "解析格局、阶段运势与关键选择，适用于事业、创业、婚姻与人生规划。",
        path: "/destiny",
      },
      {
        title: "风水布局",
        desc: "住宅、办公室、商业空间整体布局，强化聚气、稳定与空间匹配度。",
        path: "/fengshui",
      },
      {
        title: "战略规划",
        desc: "为企业主与创业者提供方向、时机与节奏层面的高价值判断支持。",
        path: "/strategy",
      },
      {
        title: "占卦问事",
        desc: "针对项目、合作、投资、出行、谈判等具体问题，快速判断时机与风险。",
        path: "/qimen",
      },
      {
        title: "吉祥物 / 水晶配置",
        desc: "结合命理与空间需求，匹配适合的吉祥物、水晶与能量物件。",
        path: "/enhancer",
      },
      {
        title: "到店 / 上门服务",
        desc: "支持预约到店深聊，也可针对空间进行实地评估与布局建议。",
        path: "/fengshui",
      },
    ],
    casesTitle: "真实案例",
    cases: [
      {
        title: "Ai Cafe（F&B 企业）",
        desc:
          "原本经营困难、客户流失。经过启明大师以奇门遁甲结合风水布局调整后，公司业绩增长 30%。",
      },
      {
        title: "轻安村（慈善机构与素餐厅）",
        desc:
          "通过整体空间布局优化与能量调整后，客流量提升 25%，整体运营氛围明显改善。",
      },
    ],
    testimonialsTitle: "客户评价",
    testimonialsText:
      "客户最在意的，不是讲得玄不玄，而是建议是否落地、方向是否更清晰、结果是否更稳定。",
    testimonials: [
      {
        name: "餐饮业主 · 新加坡",
        quote:
          "老师分析得非常到位，不是空谈，建议很落地。调整后，我们对选址、布局和经营方向都更有把握。",
      },
      {
        name: "家庭客户 · 东部住宅",
        quote:
          "咨询后最大的感受是思路清楚了，家里的空间安排也更顺。不是神神叨叨，而是真的会结合现实情况给建议。",
      },
      {
        name: "创业客户 · 服务行业",
        quote:
          "奇门和风水结合起来看，帮助我避开了一个不太适合的合作时机。少走弯路，本身就是最大的价值。",
      },
    ],
    productsTitle: "精选产品展示",
    productsText:
      "根据命理、风水与空间需求精选，兼顾实用、寓意、审美与成交转化。",
    products: [
      {
        image: "/product-1.jpg",
        name: "黄水晶招财手链",
        tag: "🔥 热门推荐",
        desc: "适合提升财运、人缘与正向能量，适合作为日常佩戴型能量手链。",
      },
      {
        image: "/product-2.jpg",
        name: "绿色能量平衡手链",
        tag: "平衡气场",
        desc: "适合提升平衡感、舒缓压力与改善气场，视觉清新，适合日常佩戴。",
      },
      {
        image: "/product-3.jpg",
        name: "荷花净化摆件",
        tag: "净化空间",
        desc: "寓意清净、和合与美感，适合家居、茶室与会客空间陈设。",
      },
      {
        image: "/product-4.jpg",
        name: "紫色葫芦化煞摆件",
        tag: "纳福化煞",
        desc: "葫芦寓意纳福化煞，适合配合风水布局做空间点缀与能量补充。",
      },
      {
        image: "/product-5.jpg",
        name: "黄色葫芦聚财摆件",
        tag: "聚气稳场",
        desc: "适合用于居家、办公室与店铺空间，增强稳定与聚气效果。",
      },
      {
        image: "/product-6.jpg",
        name: "精选风水摆件",
        tag: "大师推荐",
        desc: "可依据个人命理与空间布局进行搭配，提升整体环境协调感。",
      },
      {
        image: "/product-7.jpg",
        name: "吉祥能量物件",
        tag: "吉祥寓意",
        desc: "适合作为家居陈设与个人收藏，兼具视觉美感与寓意价值。",
      },
      {
        image: "/product-8.jpg",
        name: "风水辅助摆件",
        tag: "布局辅助",
        desc: "适合与居家或商业风水方案一起搭配使用，强化整体布局效果。",
      },
    ],
    masterTitle: "黄启明大师",
    masterSubtitle: "武当山资深风水师",
    masterText:
      "专注于命理、风水与奇门遁甲实战应用，服务个人客户、家庭与企业主，帮助客户在关键节点提升决策质量与整体运势。",
    locationTitle: "门店地址",
    locationText:
      "欢迎预约后到店咨询。新加坡实体门店，更适合面对面深度沟通与空间实地判断。",
    qrTitle: "扫码直接联系",
    qrText: "可通过 WhatsApp 直接咨询与预约。",
    aboutTitle: "关于奇明",
    aboutText:
      "奇明战略风水专注于命理咨询、风水布局、战略规划、占卦问事，以及吉祥物与水晶能量配置。我们强调环境、时间与人的匹配关系，帮助客户在关键节点做出更有胜算的选择。",
    footer: "WhatsApp: +65 89418791 · © 奇明战略风水",
    pageTrustTitle: "为什么客户会选择奇明战略风水？",
    pageTrusts: [
      "围绕结果导向给出建议，而不是泛泛而谈",
      "兼顾环境、时间、人与目标的整体匹配",
      "适合个人关键选择，也适合企业重大决策",
    ],
    pages: {
      destiny: {
        title: "命理咨询",
        subtitle: "解析格局，判断时机",
        body:
          "通过八字命盘结合奇门时空盘，帮助您了解个人格局、运势周期、事业方向、合作关系与关键选择。适用于职业规划、创业时机、婚姻判断、投资方向与重大人生决策。",
        points: ["事业与财运判断", "人生关键节点分析", "合作与关系匹配", "择时与重大决策支持"],
        cta: "预约命理咨询",
      },
      fengshui: {
        title: "风水布局",
        subtitle: "让空间成为助力，而不是阻力",
        body:
          "针对住宅、办公室与商业空间进行专业评估与系统布局，从门位、动线、功能区、气场聚集与能量流动等角度出发，帮助空间与人、事业和目标达成真正匹配。",
        points: ["住宅风水", "办公室风水", "商业空间布局", "选址与调整建议"],
        cta: "预约风水勘测",
      },
      strategy: {
        title: "战略规划",
        subtitle: "方向、时机、节奏，缺一不可",
        body:
          "结合行业属性、企业节奏、个人命理与时局变化，提供更具胜算的战略规划支持。适合企业主、创业者和高净值客户在扩张、转型、合作与重大决策前使用。",
        points: ["企业扩张与转型", "合作与项目判断", "择时启动策略", "关键决策咨询"],
        cta: "预约战略咨询",
      },
      qimen: {
        title: "占卦问事",
        subtitle: "在关键节点，选择更有胜算的路径",
        body:
          "通过奇门遁甲起局，对合作、投资、项目推进、出行、谈判、择日等具体问题给出判断建议，帮助您在复杂局面中看清形势与机会。",
        points: ["项目与合作判断", "投资与行动时机", "出行与谈判择时", "关键问题快速决策"],
        cta: "立即占卦咨询",
      },
      enhancer: {
        title: "吉祥物 / 水晶配置",
        subtitle: "放大布局后的能量效果",
        body:
          "根据命理与风水需求，配置适合的风水吉祥物、水晶手链与能量物件，帮助巩固整体布局效果，使空间与个人气场更加稳定与协调。",
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
    addressLabel: "Address",
    address: "Blk 210 New Upper Changi Road #01-729 Singapore 460210",
    heroTitle: "Qiming Strategic Feng Shui",
    heroSubtitle: "Not fortune telling. We participate in critical decisions.",
    heroDescription:
      "We combine Destiny Analysis, Feng Shui, and Qimen Dunjia to support individuals, families, and business owners through key decisions. Based in Singapore, built for clients who care about timing, direction, and results.",
    heroPrimaryCta: "WhatsApp Consultation",
    heroSecondaryCta: "Explore Services",
    heroTrusts: [
      "Singapore-based service",
      "Real case results with up to 30% growth",
      "By-appointment deep consultation",
    ],
    urgencyTitle: "Limited consultation slots",
    urgencyText:
      "To maintain service depth and quality, all consultations are by appointment. Early booking is recommended.",
    stats: [
      { value: "1-on-1", label: "Deep Consultation" },
      { value: "Physical Shop", label: "Singapore Based" },
      { value: "Key Decisions", label: "Timing Support" },
    ],
    servicesTitle: "Core Services",
    services: [
      {
        title: "Destiny Consultation",
        desc: "Read structure, timing, and important life decisions for career, business, and relationships.",
        path: "/destiny",
      },
      {
        title: "Feng Shui Layout",
        desc: "Residential, office, and commercial layout designed for stronger support and energy flow.",
        path: "/fengshui",
      },
      {
        title: "Strategic Planning",
        desc: "High-value decision support for entrepreneurs, founders, and business owners.",
        path: "/strategy",
      },
      {
        title: "Qimen Divination",
        desc: "Fast judgment for projects, timing, cooperation, investment, negotiation, and travel.",
        path: "/qimen",
      },
      {
        title: "Enhancers / Crystals",
        desc: "Matched according to destiny and space needs to strengthen the overall Feng Shui outcome.",
        path: "/enhancer",
      },
      {
        title: "Shop Visit / On-site",
        desc: "Available for in-person consultation and practical site evaluation by appointment.",
        path: "/fengshui",
      },
    ],
    casesTitle: "Case Studies",
    cases: [
      {
        title: "Ai Cafe (F&B Business)",
        desc:
          "The business was struggling with declining customers. After Master Qiming applied Qimen Dunjia together with Feng Shui layout adjustments, company revenue increased by 30%.",
      },
      {
        title: "Qing An Village (Charity & Vegetarian Restaurant)",
        desc:
          "After optimizing the overall spatial layout and energy flow, visitor traffic increased by 25% and the operating atmosphere improved significantly.",
      },
    ],
    testimonialsTitle: "Client Testimonials",
    testimonialsText:
      "What clients value most is not just presentation, but whether the advice is practical, the direction becomes clearer, and the results become more stable.",
    testimonials: [
      {
        name: "F&B Business Owner · Singapore",
        quote:
          "The advice was highly practical, not abstract. After the consultation, we felt much clearer about layout, timing, and business direction.",
      },
      {
        name: "Residential Client · East Singapore",
        quote:
          "The biggest difference was clarity. The spatial recommendations felt grounded and realistic, not vague or overly mystical.",
      },
      {
        name: "Entrepreneur · Service Industry",
        quote:
          "The Qimen and Feng Shui analysis helped me avoid a poorly timed collaboration. Avoiding a wrong move was already a huge gain.",
      },
    ],
    productsTitle: "Featured Products",
    productsText:
      "Selected according to destiny, space, symbolism, and conversion value.",
    products: [
      {
        image: "/product-1.jpg",
        name: "Citrine Wealth Bracelet",
        tag: "🔥 Best Seller",
        desc: "For wealth attraction, positive energy, and daily prosperity support.",
      },
      {
        image: "/product-2.jpg",
        name: "Green Balance Bracelet",
        tag: "Aura Balance",
        desc: "Supports emotional balance, calmness, and smoother daily energy.",
      },
      {
        image: "/product-3.jpg",
        name: "Lotus Purification Ornament",
        tag: "Space Purity",
        desc: "Brings purity, harmony, and a refined visual atmosphere.",
      },
      {
        image: "/product-4.jpg",
        name: "Purple Gourd Protection Piece",
        tag: "Protection",
        desc: "Suitable for protection, blessing, and Feng Shui enhancement.",
      },
      {
        image: "/product-5.jpg",
        name: "Yellow Gourd Wealth Piece",
        tag: "Wealth Gathering",
        desc: "Suitable for homes, offices, and shops to stabilize and gather energy.",
      },
      {
        image: "/product-6.jpg",
        name: "Premium Feng Shui Ornament",
        tag: "Master Pick",
        desc: "Matched according to spatial energy needs for stronger overall harmony.",
      },
      {
        image: "/product-7.jpg",
        name: "Auspicious Energy Piece",
        tag: "Auspicious Symbol",
        desc: "A good gift and display choice with both visual and symbolic value.",
      },
      {
        image: "/product-8.jpg",
        name: "Feng Shui Support Ornament",
        tag: "Layout Support",
        desc: "Works well with home and commercial Feng Shui recommendations.",
      },
    ],
    masterTitle: "Master Huang Qiming",
    masterSubtitle: "Senior Feng Shui Master",
    masterText:
      "Focused on practical applications of destiny analysis, Feng Shui, and Qimen Dunjia for individuals, families, and business owners making important decisions.",
    locationTitle: "Office Location",
    locationText:
      "Visits are by appointment. Our Singapore location is suitable for in-person consultation and on-site assessment.",
    qrTitle: "Scan to Contact",
    qrText: "Scan the QR code to connect instantly on WhatsApp.",
    aboutTitle: "About Qiming",
    aboutText:
      "Qiming Strategic Feng Shui focuses on destiny consultation, Feng Shui layout, strategic planning, Qimen divination, and enhancer or crystal configuration. We emphasize the alignment of environment, timing, and people so clients can make stronger decisions at key moments.",
    footer: "WhatsApp: +65 89418791 · © Qiming Strategic Feng Shui",
    pageTrustTitle: "Why clients choose Qiming Strategic Feng Shui",
    pageTrusts: [
      "Advice built around outcomes, not vague theory",
      "A full view of environment, timing, people, and goals",
      "Suitable for personal decisions and major business moves",
    ],
    pages: {
      destiny: {
        title: "Destiny Consultation",
        subtitle: "Understand your structure. Choose the right timing.",
        body:
          "By combining BaZi with Qimen time-space reading, we help you understand your personal structure, life cycles, career direction, partnerships, and decision timing. Ideal for career planning, entrepreneurship, relationships, investments, and major life choices.",
        points: ["Career and wealth reading", "Major life timing analysis", "Partnership compatibility", "Decision and timing support"],
        cta: "Book Destiny Consultation",
      },
      fengshui: {
        title: "Feng Shui Layout",
        subtitle: "Turn your space into an advantage.",
        body:
          "We provide professional assessment and systematic layout recommendations for homes, offices, and commercial spaces. We evaluate entrance position, circulation, functional zones, energy concentration, and spatial alignment with people and goals.",
        points: ["Residential Feng Shui", "Office Feng Shui", "Commercial layout", "Site selection and adjustment advice"],
        cta: "Book Feng Shui Assessment",
      },
      strategy: {
        title: "Strategic Planning",
        subtitle: "Direction, timing, and rhythm all matter.",
        body:
          "By combining industry logic, business timing, personal destiny structure, and shifting circumstances, we provide stronger support for expansion, transformation, partnerships, and critical decisions.",
        points: ["Expansion and transformation", "Project and partnership evaluation", "Launch timing strategy", "Executive decision support"],
        cta: "Book Strategic Consultation",
      },
      qimen: {
        title: "Qimen Divination",
        subtitle: "Choose the path with better odds.",
        body:
          "Using Qimen Dunjia charts, we assess specific issues such as business cooperation, investments, project timing, travel, negotiations, and important action windows so you can act with greater clarity.",
        points: ["Project and cooperation analysis", "Investment and timing", "Travel and negotiation timing", "Fast decision support"],
        cta: "Book Qimen Consultation",
      },
      enhancer: {
        title: "Enhancers / Crystal Configuration",
        subtitle: "Amplify the effect of the main layout.",
        body:
          "Based on destiny needs and Feng Shui goals, we recommend suitable enhancers, crystal bracelets, and energy objects to stabilize and strengthen the overall effect of your layout and timing work.",
        points: ["Enhancer recommendations", "Crystal bracelet matching", "Placement guidance", "Personalized configuration"],
        cta: "Consult Energy Configuration",
      },
    },
  },
};

function buildWhatsAppUrl(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

function SectionTitle({ title, text }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {text ? <p className="text-gray-300 max-w-3xl mx-auto leading-8">{text}</p> : null}
    </div>
  );
}

function SafeImage({ src, alt, className, fallback = "/master-main-new.jpg" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        if (e.currentTarget.dataset.fallbackApplied === "true") return;
        e.currentTarget.dataset.fallbackApplied = "true";
        e.currentTarget.src = fallback;
      }}
    />
  );
}

function Layout({ lang, setLang, children }) {
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.06),transparent_30%)]" />

      <nav className="sticky top-0 z-40 backdrop-blur bg-black/85 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 md:px-8 py-5">
          <div className="text-lg md:text-xl font-bold tracking-wide">{t.brandShort}</div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-300">
            <Link className="hover:text-white transition" to="/">{t.nav.home}</Link>
            <Link className="hover:text-white transition" to="/destiny">{t.nav.destiny}</Link>
            <Link className="hover:text-white transition" to="/fengshui">{t.nav.fengshui}</Link>
            <Link className="hover:text-white transition" to="/strategy">{t.nav.strategy}</Link>
            <Link className="hover:text-white transition" to="/qimen">{t.nav.qimen}</Link>
            <Link className="hover:text-white transition" to="/enhancer">{t.nav.enhancer}</Link>

            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="ml-2 px-3 py-1 border border-gray-600 rounded text-sm hover:bg-gray-800 transition"
            >
              {t.toggle}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">{children}</main>

      <a
        href={buildWhatsAppUrl(
          lang === "zh"
            ? "你好，我想咨询奇明战略风水服务。"
            : "Hello, I would like to enquire about Qiming Strategic Feng Shui services."
        )}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
      >
        WhatsApp
      </a>

      <footer className="text-center text-gray-500 py-10 border-t border-gray-800 px-6 space-y-2 mt-10">
        <div>{t.footer}</div>
        <div>
          <span className="font-semibold">{t.addressLabel}:</span> {t.address}
        </div>
      </footer>
    </div>
  );
}

function HeroSection({ lang }) {
  const t = content[lang];

  return (
    <section className="px-6 md:px-8 py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm mb-5">
            <span>Qimen · Feng Shui · Strategy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">{t.heroSubtitle}</p>
          <p className="max-w-2xl text-gray-400 text-base md:text-lg leading-8 mb-8">
            {t.heroDescription}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={buildWhatsAppUrl(
                lang === "zh"
                  ? "你好，我想预约奇明战略风水咨询。"
                  : "Hello, I want to book a consultation."
              )}
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_0_30px_rgba(234,179,8,0.18)]"
            >
              {t.heroPrimaryCta}
            </a>

            <a
              href="#services"
              className="inline-block border border-gray-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-900"
            >
              {t.heroSecondaryCta}
            </a>
          </div>

          <div className="space-y-2 text-gray-300 mb-8">
            {t.heroTrusts.map((item) => (
              <p key={item}>✔ {item}</p>
            ))}
          </div>

          <div className="text-gray-300">
            <span className="font-semibold">{t.addressLabel}:</span> {t.address}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4 shadow-xl">
            <SafeImage
              src="/master-main.jpg"
              alt="Master Huang Qiming"
              className="w-full h-[520px] object-cover object-[center_top] rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.25)]"
          </div>

          <div className="grid grid-cols-3 gap-4">
            {t.stats.map((item) => (
              <div
                key={item.label}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-yellow-400">{item.value}</div>
                <div className="text-sm text-gray-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UrgencySection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-10 max-w-5xl mx-auto text-center">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">{t.urgencyTitle}</h2>
        <p className="text-gray-300 leading-8">{t.urgencyText}</p>
      </div>
    </section>
  );
}

function ServicesSection({ lang }) {
  const t = content[lang];

  return (
    <section id="services" className="px-6 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
      <SectionTitle title={t.servicesTitle} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.services.map((service) => (
          <Link
            key={service.title}
            to={service.path}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/30 hover:-translate-y-1 transition block"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-8">{service.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CasesSection({ lang }) {
  const t = content[lang];
  return (
    <section className="bg-gray-900 px-6 md:px-8 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.casesTitle} />
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
  );
}

function TestimonialsSection({ lang }) {
  const t = content[lang];

  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto">
      <SectionTitle title={t.testimonialsTitle} text={t.testimonialsText} />

      <div className="grid md:grid-cols-3 gap-6">
        {t.testimonials.map((item) => (
          <div key={item.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="text-yellow-400 text-3xl mb-4">“</div>
            <p className="text-gray-300 leading-8 mb-6">{item.quote}</p>
            <div className="text-sm text-gray-400 border-t border-gray-800 pt-4">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductsSection({ lang }) {
  const t = content[lang];

  return (
    <section className="bg-gray-900 px-6 md:px-8 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.productsTitle} text={t.productsText} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.products.map((item) => (
            <div
              key={item.name}
              className="bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition"
            >
              <div className="aspect-square bg-white">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="inline-block text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-3">
                  {item.tag}
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-7 mb-5">{item.desc}</p>

                <a
                  href={buildWhatsAppUrl(
                    lang === "zh"
                      ? `你好，我想咨询这个产品：${item.name}`
                      : `Hello, I want to enquire about this item: ${item.name}`
                  )}
                  className="inline-block w-full text-center bg-yellow-500 text-black px-4 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  {lang === "zh" ? "咨询此产品" : "Ask About This Item"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={buildWhatsAppUrl(
              lang === "zh"
                ? "你好，我想根据我的情况获取产品推荐。"
                : "Hello, I want a product recommendation based on my needs."
            )}
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            {lang === "zh" ? "WhatsApp 获取产品建议" : "WhatsApp for Product Recommendation"}
          </a>
        </div>
      </div>
    </section>
  );
}

function MasterSection({ lang }) {
  const t = content[lang];

  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto">
      <SectionTitle title={t.masterTitle} text={t.masterText} />
      <p className="text-yellow-400 text-center mb-8">{t.masterSubtitle}</p>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4">
          <SafeImage
            src="/master-main.jpg"
            alt="Master Huang Qiming"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4">
            <SafeImage
              src="/master-real.jpg"
              alt="Qiming Feng Shui shop"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">{t.locationTitle}</h3>
            <p className="text-gray-300 leading-8 mb-4">{t.locationText}</p>
            <p className="text-gray-200">
              <span className="font-semibold">{t.addressLabel}:</span> {t.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QRSection({ lang }) {
  const t = content[lang];

  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto text-center">
      <SectionTitle title={t.qrTitle} text={t.qrText} />
      <div className="max-w-xs mx-auto bg-white rounded-3xl p-4 shadow-lg">
        <SafeImage
          src="/whatsapp-qr.jpg"
          alt="WhatsApp QR"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}

function AboutSection({ lang }) {
  const t = content[lang];

  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto text-center">
      <SectionTitle title={t.aboutTitle} text={t.aboutText} />
    </section>
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

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">{t.pageTrustTitle}</h2>
          <div className="space-y-3 text-gray-300">
            {t.pageTrusts.map((item) => (
              <p key={item}>✔ {item}</p>
            ))}
          </div>
        </div>

        <a
          href={buildWhatsAppUrl(
            lang === "zh"
              ? `你好，我想预约${page.title}`
              : `Hello, I want to book ${page.title}`
          )}
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          {page.cta}
        </a>
      </section>
    </Layout>
  );
}

function Home({ lang, setLang }) {
  return (
    <Layout lang={lang} setLang={setLang}>
      <HeroSection lang={lang} />
      <UrgencySection lang={lang} />
      <ServicesSection lang={lang} />
      <CasesSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <ProductsSection lang={lang} />
      <MasterSection lang={lang} />
      <QRSection lang={lang} />
      <AboutSection lang={lang} />
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
  const browserLang =
    typeof window !== "undefined" &&
    window.navigator.language?.toLowerCase().includes("zh")
      ? "zh"
      : "en";

  const [lang, setLang] = useState(browserLang || "en");
  const stableLang = useMemo(() => (lang === "zh" ? "zh" : "en"), [lang]);

  return (
    <Router>
      <AppRoutes lang={stableLang} setLang={setLang} />
    </Router>
  );
}
