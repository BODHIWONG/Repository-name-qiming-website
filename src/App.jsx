import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

const WHATSAPP_NUMBER = "6589418791";
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

// ─── 内容数据 ────────────────────────────────────────────────────────────────
const content = {
  zh: {
    brand: "奇明旺财风水",
    brandShort: "奇明旺财风水",
    toggle: "EN",
    nav: {
      home: "首页",
      destiny: "命理咨询",
      fengshui: "风水布局",
      strategy: "战略规划",
      qimen: "占卦问事",
      enhancer: "吉祥物 / 水晶",
      purification: "空间磁场净化",
    },
    addressLabel: "地址",
    address: "Blk 210 New Upper Changi Road #01-729 Singapore 460210",
    heroTitle: "奇明旺财风水",
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
      { title: "命理咨询", icon: "☯", desc: "解析格局、阶段运势与关键选择，适用于事业、创业、婚姻与人生规划。", path: "/destiny" },
      { title: "风水布局", icon: "🏠", desc: "住宅、办公室、商业空间整体布局，强化聚气、稳定与空间匹配度。", path: "/fengshui" },
      { title: "战略规划", icon: "📊", desc: "为企业主与创业者提供方向、时机与节奏层面的高价值判断支持。", path: "/strategy" },
      { title: "占卦问事", icon: "🔮", desc: "针对项目、合作、投资、出行、谈判等具体问题，快速判断时机与风险。", path: "/qimen" },
      { title: "吉祥物 / 水晶配置", icon: "💎", desc: "结合命理与空间需求，匹配适合的吉祥物、水晶与能量物件。", path: "/enhancer" },
      { title: "到店 / 上门服务", icon: "📍", desc: "支持预约到店深聊，也可针对空间进行实地评估与布局建议。", path: "/fengshui" },
      { title: "空间磁场净化", icon: "✨", desc: "空间能量净化、个人磁场调整与解降头，16年修行成果，已帮助众多客户重建正向能量场。", path: "/purification" },
    ],
    casesTitle: "真实案例",
    casesSubtitle: "每一个数字背后，都是真实的决策与改变",
    cases: [
      {
        title: "Ai Cafe（F&B 企业）",
        result: "+30%",
        resultLabel: "业绩增长",
        desc: "原本经营困难、客户流失。经过启明大师以奇门遁甲结合风水布局调整后，公司业绩增长 30%。",
        image: "/case_consultation.jpeg",
      },
      {
        title: "轻安村（慈善机构与素餐厅）",
        result: "+25%",
        resultLabel: "客流提升",
        desc: "通过整体空间布局优化与能量调整后，客流量提升 25%，整体运营氛围明显改善。",
        image: "/case_onsite.jpeg",
      },
      {
        title: "企业战略咨询",
        result: "3+",
        resultLabel: "年持续合作",
        desc: "为多家新加坡本地企业提供年度战略风水规划，帮助在关键节点做出更有胜算的决策。",
        image: "/case_lecture.jpeg",
      },
      {
        title: "别墅风水布局",
        result: "100%",
        resultLabel: "客户满意度",
        desc: "对新加坡高端别墅进行全面风水评估与布局调整，家庭关系与整体运势显著改善。",
        image: "/case_villa.jpeg",
      },
    ],
    galleryTitle: "服务现场",
    galleryImages: [
      { src: "/case_award.jpeg", alt: "启明大师获奖" },
      { src: "/case_lecture.jpeg", alt: "风水讲座" },
      { src: "/case_consultation.jpeg", alt: "企业咨询" },
      { src: "/case_onsite.jpeg", alt: "现场勘测" },
      { src: "/case_residential.jpeg", alt: "住宅风水" },
      { src: "/case_villa.jpeg", alt: "别墅布局" },
    ],
    partnerTitle: "合作品牌",
    partnerSubtitle: "与铜师傅文创品牌深度合作，提供经过命理与风水认证的精选产品",
    partnerProducts: [
      { image: "/tongshifu1.webp", name: "铜师傅精品摆件" },
      { image: "/tongshifu2.jpg", name: "铜师傅文创系列" },
      { image: "/tongshifu5.webp", name: "铜师傅吉祥物" },
      { image: "/tongshifu6.webp", name: "铜师傅能量物件" },
      { image: "/tongshifu10.webp", name: "铜师傅风水摆件" },
      { image: "/tongshifu13.webp", name: "铜师傅收藏系列" },
    ],
    testimonialsTitle: "客户评价",
    testimonialsText:
      "客户最在意的，不是讲得玄不玄，而是建议是否落地、方向是否更清晰、结果是否更稳定。",
    testimonials: [
      { name: "餐饮业主 · 新加坡", stars: 5, quote: "老师分析得非常到位，不是空谈，建议很落地。调整后，我们对选址、布局和经营方向都更有把握。" },
      { name: "家庭客户 · 东部住宅", stars: 5, quote: "咨询后最大的感受是思路清楚了，家里的空间安排也更顺。不是神神叨叨，而是真的会结合现实情况给建议。" },
      { name: "创业客户 · 服务行业", stars: 5, quote: "奇门和风水结合起来看，帮助我避开了一个不太适合的合作时机。少走弯路，本身就是最大的价值。" },
      { name: "企业主 · 制造业", stars: 5, quote: "启明大师对公司整体运势的判断非常准确，帮助我们在关键节点做出了正确的战略决策。" },
    ],
    productsTitle: "精选产品展示",
    productsText: "根据命理、风水与空间需求精选，兼顾实用、寓意、审美与成交转化。",
    productsNote: "价格面议，WhatsApp 咨询获取专属推荐",
    products: [
      { image: "/product-1.jpg", name: "黄水晶招财手链", tag: "热门推荐", desc: "适合提升财运、人缘与正向能量，适合作为日常佩戴型能量手链。" },
      { image: "/product-2.jpg", name: "绿色能量平衡手链", tag: "平衡气场", desc: "适合提升平衡感、舒缓压力与改善气场，视觉清新，适合日常佩戴。" },
      { image: "/product-3.jpg", name: "荷花净化摆件", tag: "净化空间", desc: "寓意清净、和合与美感，适合家居、茶室与会客空间陈设。" },
      { image: "/product-4.jpg", name: "紫色葫芦化煞摆件", tag: "纳福化煞", desc: "葫芦寓意纳福化煞，适合配合风水布局做空间点缀与能量补充。" },
      { image: "/product-5.jpg", name: "黄色葫芦聚财摆件", tag: "聚气稳场", desc: "适合用于居家、办公室与店铺空间，增强稳定与聚气效果。" },
      { image: "/product-6.jpg", name: "精选风水摆件", tag: "大师推荐", desc: "可依据个人命理与空间布局进行搭配，提升整体环境协调感。" },
      { image: "/product-7.jpg", name: "吉祥能量物件", tag: "吉祥寓意", desc: "适合作为家居陈设与个人收藏，兼具视觉美感与寓意价值。" },
      { image: "/product-8.jpg", name: "风水辅助摆件", tag: "布局辅助", desc: "适合与居家或商业风水方案一起搭配使用，强化整体布局效果。" },
    ],
    faqTitle: "常见问题",
    faqSubtitle: "解答你对风水与命理咨询的疑问",
    faqs: [
      { q: "风水咨询适合什么人？", a: "适合正在面临重大决策的人，包括创业、换工作、搬家、结婚、投资等关键节点。无论是个人还是企业主，都可以通过风水与命理获得更清晰的方向。" },
      { q: "第一次咨询需要准备什么？", a: "只需提供出生年月日时（八字）即可。如需风水布局，建议提前准备房屋平面图或照片。到店咨询无需任何准备，直接预约即可。" },
      { q: "咨询结果有多准确？", a: "命理与风水是基于时间、空间与人的综合分析，不是100%预测未来，而是帮助你看清当前格局、识别有利时机、规避风险。真实案例显示，客户业绩平均提升 25-30%。" },
      { q: "可以线上咨询吗？", a: "可以。通过 WhatsApp 或视频通话均可进行远程咨询。风水布局需要提供空间照片或平面图。到店咨询效果更佳，欢迎预约到新加坡门店。" },
      { q: "一次咨询需要多长时间？", a: "标准命理咨询约 60-90 分钟。风水布局评估根据空间大小，通常需要 2-3 小时。企业战略咨询可根据需求定制时长。" },
      { q: "费用是多少？", a: "咨询费用根据服务类型与深度而定。请通过 WhatsApp 联系我们，我们会根据您的具体需求提供报价。" },
    ],
    masterTitle: "黄启明大师",
    masterSubtitle: "奇门遁甲正统传人 · 清华大学积极心理学指导师 · 16年+实战经验",
    masterText: "启明大师是奇门遁甲的正统传人，在风水行业已有16年+的实战经验。以利人利己为宗旨，以真才实学利益社会利益大众。他的正心正念正行正能量，影响着越来越多的客户和朋友。",
    masterCredentials: [
      "奇门遁甲正统传人 · 16年+实战经验",
      "清华大学积极心理学指导师",
      "武当山正统风水传承",
      "以利人利己为宗旨",
      "正心正念正行正能量",
      "真才实学利益社会利益大众",
    ],
    locationTitle: "门店地址",
    locationText: "欢迎预约后到店咨询。新加坡实体门店，更适合面对面深度沟通与空间实地判断。",
    qrTitle: "扫码直接联系",
    qrText: "可通过 WhatsApp 直接咨询与预约，扫码即达。",
    aboutTitle: "关于奇明",
    aboutText: "奇明旺财风水专注于命理咨询、风水布局、战略规划、占卦问事，以及吉祥物与水晶能量配置。我们强调环境、时间与人的匹配关系，帮助客户在关键节点做出更有胜算的选择。",
    footerNav: ["首页", "命理咨询", "风水布局", "战略规划", "占卦问事", "空间磁场净化"],
    footerNavPaths: ["/", "/destiny", "/fengshui", "/strategy", "/qimen", "/purification"],
    footerHours: "营业时间：周一至周六 10:00 – 19:00",
    footer: "© 2025 奇明旺财风水 · WhatsApp: +65 89418791",
    pageTrustTitle: "为什么客户会选择奇明旺财风水？",
    pageTrusts: [
      "围绕结果导向给出建议，而不是泛泛而谈",
      "兼顾环境、时间、人与目标的整体匹配",
      "适合个人关键选择，也适合企业重大决策",
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
        title: "风水布局 · 奇门遁甲应用",
        subtitle: "以奇门遁甲为核心，为您的空间注入趋吉避凶的智慧力量",
        body: "风水，是中华文明数千年积累的空间智慧；奇门遁甲，则是古代帝王将相运筹帷幄的时空战略之学。启明大师作为奇门遁甲的正统传人，将这两门顶级学问深度融合，形成了一套独特而精准的风水布局体系。\n\n传统风水注重山向水法、气口动线，而启明大师的布局体系在此基础上，进一步引入奇门遁甲的时空维度——通过排盘起局，精准判断当前时空格局中的旺气方位、吉门所在，结合命主八字、入宅时间与空间结构，制定真正因人、因时、因地制宜的个性化方案。同一套房子，在不同的时间节点布局，效果可能截然不同；而经过奇门遁甲校准的布局，则能最大化地激活空间的正向能量，帮助居住者或经营者趋吉避凶、旺财旺运。",
        body2: "启明大师在过去16年+的实战中，已为数百位客户完成住宅、办公室与商业空间的风水布局。每一次勘测，他都亲赴现场，手持罗盘，结合奇门遁甲盘局，对空间的每一个关键节点进行精准分析：大门朝向是否纳气、财位是否激活、煞气是否化解、动线是否顺畅。布局完成后，客户普遍反馈事业运势明显改善、家庭关系更加和谐、财富积累速度加快。这不是玄学，而是经过千年验证、由正统传人精准运用的时空科学。",
        points: ["住宅风水 · 奇门遁甲精准布局", "办公室 / 商业空间旺气激活", "吉方财位精准定位", "煞气化解与能量调整", "入宅 / 开业择吉日", "选址评估与改造建议"],
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
        title: "占卦问事 · 奇门遁甲",
        subtitle: "天机不可泄露，然善用者可趋吉避凶",
        body: "奇门遁甲，被誉为中华术数之王，是古代帝王将相运筹帷幄的核心工具。它以时间为经、空间为纬，将天干地支、八卦九宫、五行生克融为一体，通过起局排盘，精准解析当下时空格局中的吉凶走势与行动窗口。\n\n启明大师作为奇门遁甲的正统传人，拥有16年以上的实战经验，将奇门遁甲广泛应用于预测占卦与风水布局两大核心领域。在预测层面，可针对具体问题快速起局，判断事件走向、合作成败、投资时机与风险；在风水布局层面，奇门遁甲可精准确定空间的吉方凶方、旺气所在，结合命主八字与入宅时间，制定最优化的布局方案，使空间能量与个人命格高度契合，从而达到旺财、旺运、旺健康的综合效果。",
        body2: "奇门遁甲在风水布局中的应用，远超传统风水的范畴。它不仅考量空间的山向水法，更将时间维度纳入布局体系——同一个空间，在不同的时间节点布局，效果截然不同。启明大师将奇门遁甲的时空合一理念与现代居家、商业空间深度结合，为客户提供真正因人、因时、因地制宜的个性化风水方案。",
        points: ["项目与合作成败判断", "投资与行动最佳时机", "出行、谈判、签约择时", "关键决策快速占断", "风水布局吉方精准定位", "入宅开业择吉日"],
        cta: "立即占卦咨询",
      },
      enhancer: {
        title: "吉祥物 / 水晶配置",
        subtitle: "放大布局后的能量效果",
        body: "根据命理与风水需求，配置适合的风水吉祥物、水晶手链与能量物件，帮助巳固整体布局效果，使空间与个人气场更加稳定与协调。",
        points: ["风水吉祥物推荐", "水晶手链配置", "能量物件摆放建议", "个性化匹配方案"],
        cta: "和询能量配置",
      },
      purification: {
        title: "空间磁场净化",
        subtitle: "清除负能量，开启正向生命场域",
        body: "空间磁场净化是奇明旺财风水的核心业务之一，是启明大帇16年+修行成果与个人天赋的体现。过去四五年间，这项服务已帮助新加坡众多客户重建和谐、清晰与正向能量场。无论是家居、办公室还是商业场所，能量净化都能帮助您清除负面磁场、恢复空间活力与和谐。启明大师以正心正念正行正能量为宗旨，以真才实学利益社会利益大众。",
        points: ["空间能量净化", "个人磁场调整", "解降头与化转属", "正心正念能量引导"],
        cta: "预约磁场净化和询",
      },
    },
  },
  en: {
    brand: "Qiming Prosperity Feng Shui",
    brandShort: "Qiming Feng Shui",
    toggle: "中文",
    nav: {
      home: "Home",
      destiny: "Destiny",
      fengshui: "Feng Shui",
      strategy: "Strategy",
      qimen: "Qimen",
      enhancer: "Enhancers",
      purification: "Space Purification",
    },
    addressLabel: "Address",
    address: "Blk 210 New Upper Changi Road #01-729 Singapore 460210",
    heroTitle: "Qiming Prosperity Feng Shui",
    heroSubtitle: "Not fortune telling. We participate in critical decisions.",
    heroDescription:
      "We combine Destiny Analysis, Feng Shui, and Qimen Dunjia to support individuals, families, and business owners through key decisions. Based in Singapore, built for clients who care about timing, direction, and results.",
    heroPrimaryCta: "WhatsApp Consultation",
    heroSecondaryCta: "Explore Services",
    heroTrusts: [
      "Singapore-based physical shop",
      "Real case results: up to 30% growth",
      "By-appointment deep consultation",
    ],
    urgencyTitle: "Limited Consultation Slots",
    urgencyText:
      "To maintain service depth and quality, all consultations are by appointment. Early booking is recommended.",
    stats: [
      { value: "1-on-1", label: "Deep Consultation" },
      { value: "Physical Shop", label: "Singapore Based" },
      { value: "Key Decisions", label: "Timing Support" },
    ],
    servicesTitle: "Core Services",
    services: [
      { title: "Destiny Consultation", icon: "☯", desc: "Read structure, timing, and important life decisions for career, business, and relationships.", path: "/destiny" },
      { title: "Feng Shui Layout", icon: "🏠", desc: "Residential, office, and commercial layout designed for stronger support and energy flow.", path: "/fengshui" },
      { title: "Strategic Planning", icon: "📊", desc: "High-value decision support for entrepreneurs, founders, and business owners.", path: "/strategy" },
      { title: "Qimen Divination", icon: "🔮", desc: "Fast judgment for projects, timing, cooperation, investment, negotiation, and travel.", path: "/qimen" },
      { title: "Enhancers / Crystals", icon: "💎", desc: "Matched according to destiny and space needs to strengthen the overall Feng Shui outcome.", path: "/enhancer" },
      { title: "Shop Visit / On-site", icon: "📍", desc: "Available for in-person consultation and practical site evaluation by appointment.", path: "/fengshui" },
      { title: "Space Purification", icon: "✨", desc: "Space energy clearing, personal aura adjustment, and spiritual protection. 16+ years of practice, helping hundreds restore positive energy fields.", path: "/purification" },
    ],
    casesTitle: "Case Studies",
    casesSubtitle: "Every number represents a real decision and transformation",
    cases: [
      { title: "Ai Cafe (F&B Business)", result: "+30%", resultLabel: "Revenue Growth", desc: "The business was struggling with declining customers. After Master Qiming applied Qimen Dunjia together with Feng Shui layout adjustments, company revenue increased by 30%.", image: "/case_consultation.jpeg" },
      { title: "Qing An Village (Charity & Vegetarian Restaurant)", result: "+25%", resultLabel: "Visitor Traffic", desc: "After optimizing the overall spatial layout and energy flow, visitor traffic increased by 25% and the operating atmosphere improved significantly.", image: "/case_onsite.jpeg" },
      { title: "Corporate Strategy Consultation", result: "3+", resultLabel: "Years Partnership", desc: "Annual strategic Feng Shui planning for multiple Singapore businesses, supporting key decision-making at critical junctures.", image: "/case_lecture.jpeg" },
      { title: "Luxury Villa Feng Shui", result: "100%", resultLabel: "Client Satisfaction", desc: "Comprehensive Feng Shui assessment and layout adjustment for a high-end Singapore villa, significantly improving family harmony and overall fortune.", image: "/case_villa.jpeg" },
    ],
    galleryTitle: "Service Gallery",
    galleryImages: [
      { src: "/case_award.jpeg", alt: "Master Qiming Award" },
      { src: "/case_lecture.jpeg", alt: "Feng Shui Lecture" },
      { src: "/case_consultation.jpeg", alt: "Corporate Consultation" },
      { src: "/case_onsite.jpeg", alt: "On-site Assessment" },
      { src: "/case_residential.jpeg", alt: "Residential Feng Shui" },
      { src: "/case_villa.jpeg", alt: "Villa Layout" },
    ],
    partnerTitle: "Partner Brand",
    partnerSubtitle: "In deep collaboration with Tongshifu Cultural Brand, offering curated products certified through destiny and Feng Shui analysis",
    partnerProducts: [
      { image: "/tongshifu1.webp", name: "Tongshifu Premium Ornament" },
      { image: "/tongshifu2.jpg", name: "Tongshifu Cultural Series" },
      { image: "/tongshifu5.webp", name: "Tongshifu Auspicious Piece" },
      { image: "/tongshifu6.webp", name: "Tongshifu Energy Object" },
      { image: "/tongshifu10.webp", name: "Tongshifu Feng Shui Piece" },
      { image: "/tongshifu13.webp", name: "Tongshifu Collector Series" },
    ],
    testimonialsTitle: "Client Testimonials",
    testimonialsText: "What clients value most is not just presentation, but whether the advice is practical, the direction becomes clearer, and the results become more stable.",
    testimonials: [
      { name: "F&B Business Owner · Singapore", stars: 5, quote: "The advice was highly practical, not abstract. After the consultation, we felt much clearer about layout, timing, and business direction." },
      { name: "Residential Client · East Singapore", stars: 5, quote: "The biggest difference was clarity. The spatial recommendations felt grounded and realistic, not vague or overly mystical." },
      { name: "Entrepreneur · Service Industry", stars: 5, quote: "The Qimen and Feng Shui analysis helped me avoid a poorly timed collaboration. Avoiding a wrong move was already a huge gain." },
      { name: "Business Owner · Manufacturing", stars: 5, quote: "Master Qiming's judgment on our company's overall fortune was very accurate, helping us make the right strategic decisions at critical moments." },
    ],
    productsTitle: "Featured Products",
    productsText: "Selected according to destiny, space, symbolism, and conversion value.",
    productsNote: "Price on request — WhatsApp for personalised recommendation",
    products: [
      { image: "/product-1.jpg", name: "Citrine Wealth Bracelet", tag: "Best Seller", desc: "For wealth attraction, positive energy, and daily prosperity support." },
      { image: "/product-2.jpg", name: "Green Balance Bracelet", tag: "Aura Balance", desc: "Supports emotional balance, calmness, and smoother daily energy." },
      { image: "/product-3.jpg", name: "Lotus Purification Ornament", tag: "Space Purity", desc: "Brings purity, harmony, and a refined visual atmosphere." },
      { image: "/product-4.jpg", name: "Purple Gourd Protection Piece", tag: "Protection", desc: "Suitable for protection, blessing, and Feng Shui enhancement." },
      { image: "/product-5.jpg", name: "Yellow Gourd Wealth Piece", tag: "Wealth Gathering", desc: "Suitable for homes, offices, and shops to stabilize and gather energy." },
      { image: "/product-6.jpg", name: "Premium Feng Shui Ornament", tag: "Master Pick", desc: "Matched according to spatial energy needs for stronger overall harmony." },
      { image: "/product-7.jpg", name: "Auspicious Energy Piece", tag: "Auspicious Symbol", desc: "A good gift and display choice with both visual and symbolic value." },
      { image: "/product-8.jpg", name: "Feng Shui Support Ornament", tag: "Layout Support", desc: "Works well with home and commercial Feng Shui recommendations." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to your questions about Feng Shui and destiny consultation",
    faqs: [
      { q: "Who is Feng Shui consultation suitable for?", a: "It's ideal for anyone facing major decisions — starting a business, changing jobs, moving home, getting married, or making investments. Both individuals and business owners can gain clearer direction through Feng Shui and destiny analysis." },
      { q: "What do I need to prepare for the first consultation?", a: "Just your birth date and time (for BaZi analysis). For Feng Shui layout, it helps to have a floor plan or photos of your space. For in-person visits, no preparation is needed — just book an appointment." },
      { q: "How accurate are the consultation results?", a: "Destiny and Feng Shui analysis is based on a comprehensive reading of time, space, and personal structure. It's not 100% prediction, but rather helping you understand your current situation, identify favorable timing, and avoid risks. Real cases show an average 25–30% improvement in client outcomes." },
      { q: "Can I consult online?", a: "Yes. Remote consultations are available via WhatsApp or video call. For Feng Shui layout, please provide space photos or floor plans. In-person consultations at our Singapore shop are recommended for best results." },
      { q: "How long does a consultation take?", a: "A standard destiny consultation takes about 60–90 minutes. Feng Shui layout assessment typically takes 2–3 hours depending on space size. Corporate strategy consultations can be customized." },
      { q: "How much does it cost?", a: "Fees vary by service type and depth. Please contact us via WhatsApp and we'll provide a quote based on your specific needs." },
    ],
    masterTitle: "Master Huang Qiming",
    masterSubtitle: "Qimen Dunjia Lineage Holder · Tsinghua Positive Psychology Instructor · 16+ Years",
    masterText: "Master Qiming is a lineage holder of Qimen Dunjia with over 16 years of real-world practice in the Feng Shui industry. Guided by the principle of mutual benefit, and committed to serving society with genuine expertise. His right heart, right thought, right action, and right energy have become a guiding light for an ever-growing circle of clients and friends.",
    masterCredentials: [
      "Qimen Dunjia Lineage Holder · 16+ Years Practice",
      "Positive Psychology Instructor · Tsinghua University",
      "Wudang Mountain Feng Shui Lineage",
      "Guided by the principle of mutual benefit",
      "Right heart, right thought, right action, right energy",
      "Genuine expertise in service of society and the people",
    ],
    locationTitle: "Office Location",
    locationText: "Visits are by appointment. Our Singapore location is suitable for in-person consultation and on-site assessment.",
    qrTitle: "Scan to Contact",
    qrText: "Scan the QR code to connect instantly on WhatsApp.",
    aboutTitle: "About Qiming",
    aboutText: "Qiming Prosperity Feng Shui focuses on destiny consultation, Feng Shui layout, strategic planning, Qimen divination, and enhancer or crystal configuration. We emphasize the alignment of environment, timing, and people so clients can make stronger decisions at key moments.",
    footerNav: ["Home", "Destiny", "Feng Shui", "Strategy", "Qimen", "Space Purification"],
    footerNavPaths: ["/", "/destiny", "/fengshui", "/strategy", "/qimen", "/purification"],
    footerHours: "Mon – Sat: 10:00 AM – 7:00 PM",
    footer: "© 2025 Qiming Prosperity Feng Shui · WhatsApp: +65 89418791",
    pageTrustTitle: "Why clients choose Qiming Prosperity Feng Shui",
    pageTrusts: [
      "Advice built around outcomes, not vague theory",
      "A full view of environment, timing, people, and goals",
      "Suitable for personal decisions and major business moves",
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
        title: "Feng Shui Layout · Qi Men Dun Jia",
        subtitle: "Powered by Qi Men Dun Jia — turning your space into a precision instrument for auspicious living.",
        body: "Feng Shui is the accumulated spatial wisdom of Chinese civilization; Qi Men Dun Jia is the time-space strategy used by ancient emperors and generals to gain decisive advantage. Master Qiming, as a lineage holder of Qi Men Dun Jia, has deeply integrated these two disciplines into a unique and highly precise Feng Shui layout system.\n\nConventional Feng Shui focuses on mountain-water principles and energy flow. Master Qiming's system goes further by incorporating the time dimension of Qi Men Dun Jia — through chart construction, he precisely identifies the current auspicious directions, energy concentrations, and optimal entry timing for any given space. Combined with the resident's BaZi and the spatial structure, this produces a truly personalized layout calibrated to the person, the moment, and the place. The same home, laid out at different timing windows, can produce dramatically different results. A Qi Men Dun Jia-calibrated layout maximizes the positive energy of the space, helping residents and business owners to attract good fortune and deflect negative influences.",
        body2: "Over 16+ years of practice, Master Qiming has completed Feng Shui layouts for hundreds of clients across residential, office, and commercial spaces. Every assessment is conducted on-site, compass in hand, with a Qi Men Dun Jia chart constructed for that specific moment — analyzing every critical point: whether the main entrance captures energy, whether the wealth position is activated, whether negative influences are neutralized, and whether the circulation flow is harmonious. Clients consistently report improved business momentum, more harmonious family relationships, and accelerated wealth accumulation after the layout. This is not superstition — it is a time-space science verified over millennia, applied with precision by a true lineage holder.",
        points: ["Residential Feng Shui · Qi Men precision layout", "Office / commercial space energy activation", "Precise wealth position identification", "Negative energy neutralization", "Auspicious date selection for move-in or launch", "Site evaluation and renovation guidance"],
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
        title: "Qimen Divination · Qi Men Dun Jia",
        subtitle: "Heaven's timing cannot be revealed — but the wise can use it to prosper.",
        body: "Qi Men Dun Jia (奇門遁甲) is widely regarded as the crown jewel of Chinese metaphysics — the strategic tool used by ancient emperors and generals to gain decisive advantage. It integrates the Heavenly Stems, Earthly Branches, Eight Trigrams, Nine Palaces, and the Five Elements into a unified time-space system. By constructing a precise chart for any given moment, it reveals the flow of auspicious and inauspicious energies, and the optimal windows for action.\n\nMaster Qiming, as a lineage holder of Qi Men Dun Jia with over 16 years of real-world practice, applies this system across two core domains: divination and Feng Shui layout. For divination, he constructs a chart in response to a specific question — assessing outcomes, risks, timing, and strategic direction with remarkable precision. For Feng Shui, Qi Men Dun Jia enables exact identification of auspicious directions and energy concentrations within a space, combined with the resident's BaZi and the timing of entry, to produce a highly personalized layout that aligns the environment with the individual's destiny.",
        body2: "The application of Qi Men Dun Jia in Feng Shui layout goes far beyond conventional methods. It introduces the time dimension into spatial analysis — the same space, laid out at different timing windows, produces dramatically different results. Master Qiming integrates this time-space unity principle with modern residential and commercial environments, delivering truly individualized Feng Shui solutions that are calibrated to the person, the moment, and the place.",
        points: ["Project and partnership outcome analysis", "Optimal timing for investment and action", "Travel, negotiation, and contract timing", "Fast divination for key decisions", "Precise auspicious direction mapping", "Auspicious date selection for move-in or business launch"],
        cta: "Book Qimen Consultation",
      },
      enhancer: {
        title: "Enhancers / Crystal Configuration",
        subtitle: "Amplify the effect of the main layout.",
        body: "Based on destiny needs and Feng Shui goals, we recommend suitable enhancers, crystal bracelets, and energy objects to stabilize and strengthen the overall effect of your layout and timing work.",
        points: ["Enhancer recommendations", "Crystal bracelet matching", "Placement guidance", "Personalized configuration"],
        cta: "Consult Energy Configuration",
      },
      purification: {
        title: "Space & Aura Purification",
        subtitle: "Clear the field. Restore positive energy.",
        body: "Space & Aura Purification is one of Master Qiming's core services and a reflection of his 16+ years of spiritual practice and innate gift. Over the past four to five years, this service has helped hundreds of clients in Singapore restore harmony, clarity, and positive energy in their lives and spaces. Whether your home, office, or business feels heavy, stagnant, or spiritually compromised, Master Qiming's purification work can help you reset and rebuild.",
        points: ["Space energy clearing", "Personal aura & magnetic field adjustment", "Spiritual protection & curse removal", "Positive mindset & energy alignment"],
        cta: "Book Space Purification",
      },
    },
  },
};

// ─── 工具函数 ─────────────────────────────────────────────────────────────────
function buildWhatsAppUrl(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

// GTM 转化追踪事件推送
function trackConversion(eventName, label) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: 'WhatsApp',
      event_label: label,
      value: 1
    });
  }
}

// ─── 公共组件 ─────────────────────────────────────────────────────────────────
function SectionTitle({ title, text }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {text && <p className="text-gray-300 max-w-3xl mx-auto leading-8">{text}</p>}
    </div>
  );
}

function SafeImage({ src, alt, className, fallback = "/master-main.jpg", width, height }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      onError={(e) => {
        if (e.currentTarget.dataset.fallbackApplied === "true") return;
        e.currentTarget.dataset.fallbackApplied = "true";
        e.currentTarget.src = fallback;
      }}
    />
  );
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

// ─── 粒子动效背景 ─────────────────────────────────────────────────────────────
function ParticleBackground() {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234,179,8,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="particle-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}

// ─── Layout（导航 + Footer）────────────────────────────────────────────────────
function Layout({ lang, setLang, children }) {
  const t = content[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 路由切换时关闭菜单
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.destiny, to: "/destiny" },
    { label: t.nav.fengshui, to: "/fengshui" },
    { label: t.nav.strategy, to: "/strategy" },
    { label: t.nav.qimen, to: "/qimen" },
    { label: t.nav.enhancer, to: "/enhancer" },
    { label: t.nav.purification, to: "/purification" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      {/* 粒子动效背景 */}
      <ParticleBackground />

      {/* 背景光晕 */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.08),transparent_35%)]" />

      {/* 导航栏 */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/90 border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
          <Link to="/" className="text-lg md:text-xl font-bold tracking-wide text-white hover:text-yellow-400 transition flex items-center gap-2">
            <span className="text-yellow-400">✦</span>
            {t.brandShort}
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                className="hover:text-yellow-400 transition relative group"
                to={link.to}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-400 transition-all group-hover:w-full" />
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="ml-2 px-3 py-1.5 border border-yellow-500/50 rounded text-sm text-yellow-400 hover:bg-yellow-500/10 transition"
            >
              {t.toggle}
            </button>
          </div>

          {/* 移动端右侧按钮组 */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="px-3 py-1.5 border border-yellow-500/50 rounded text-sm text-yellow-400 hover:bg-yellow-500/10 transition"
            >
              {t.toggle}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-300 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-black/95 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-gray-300 hover:text-yellow-400 transition py-1.5 text-base"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10">{children}</main>

      {/* 悬浮 WhatsApp 按钮 */}
      <a
        href={buildWhatsAppUrl(
          lang === "zh"
            ? "你好，我想咨询奇明旺财风水服务。"
            : "Hello, I would like to enquire about Qiming Prosperity Feng Shui services."
        )}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] font-semibold transition hover:scale-105"
        aria-label="WhatsApp"
        onClick={() => trackConversion('whatsapp_click', 'floating_button')}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
              <span>✦</span> {t.brandShort}
            </div>
            <p className="text-gray-400 text-sm leading-7">{t.aboutText}</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              {lang === "zh" ? "快速导航" : "Quick Links"}
            </div>
            <div className="space-y-2">
              {t.footerNav.map((label, i) => (
                <Link key={label} to={t.footerNavPaths[i]} className="block text-gray-400 hover:text-yellow-400 transition text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              {lang === "zh" ? "联系我们" : "Contact"}
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>WhatsApp: +65 89418791</p>
              <p>{t.address}</p>
              <p>{t.footerHours}</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition" aria-label="WhatsApp">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="https://www.instagram.com/qimingfengshui" className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-80 flex items-center justify-center transition" aria-label="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.facebook.com/qimingfengshui" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition" aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 text-center text-gray-500 text-sm py-5 px-6">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm mb-5">
            <span>Qimen · Feng Shui · Strategy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">{t.heroSubtitle}</p>
          <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-8 mb-8">{t.heroDescription}</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={buildWhatsAppUrl(lang === "zh" ? "你好，我想预约奇明旺财风水咨询。" : "Hello, I want to book a consultation.")}
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition"
              onClick={() => trackConversion('whatsapp_click', 'hero_primary_cta')}
            >
              {t.heroPrimaryCta}
            </a>
            <a
              href="#services"
              className="inline-block border border-gray-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-900 hover:border-yellow-500/40 transition"
            >
              {t.heroSecondaryCta}
            </a>
          </div>
          <div className="space-y-2 text-gray-300 mb-8">
            {t.heroTrusts.map((item) => (
              <p key={item} className="flex items-center gap-2">
                <span className="text-yellow-400">✔</span> {item}
              </p>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            <span className="font-semibold text-gray-300">{t.addressLabel}:</span> {t.address}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-gray-900 border border-yellow-500/20 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.15)]">
            <SafeImage
              src="/master-main.jpg"
              alt="Master Huang Qiming 黄启明大师"
              className="w-full h-auto block"
              width="830"
              height="1046"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {t.stats.map((item) => (
              <div key={item.label} className="bg-gray-900 border border-yellow-500/20 rounded-2xl p-4 text-center hover:border-yellow-500/50 hover:bg-gray-800 transition">
                <div className="text-xl font-bold text-yellow-400 mb-1">{item.value}</div>
                <div className="text-xs text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Urgency Section ──────────────────────────────────────────────────────────
function UrgencySection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-10 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 md:p-8 text-center">
        <div className="text-yellow-400 font-semibold text-lg mb-2">⚡ {t.urgencyTitle}</div>
        <p className="text-gray-300 leading-7">{t.urgencyText}</p>
        <a
          href={buildWhatsAppUrl(lang === "zh" ? "你好，我想预约咨询。" : "Hello, I want to book a consultation.")}
          className="inline-block mt-5 bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          {lang === "zh" ? "立即预约" : "Book Now"}
        </a>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
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
            className="group bg-gray-900/80 border border-gray-800 hover:border-yellow-500/50 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)] backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-7">{service.desc}</p>
            <div className="mt-4 text-yellow-400 text-sm font-medium">{lang === "zh" ? "了解更多 →" : "Learn more →"}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Cases Section（带图片）────────────────────────────────────────────────────
function CasesSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.casesTitle} text={t.casesSubtitle} />
        <div className="grid md:grid-cols-2 gap-6">
          {t.cases.map((item) => (
            <div key={item.title} className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition group">
              <div className="aspect-video overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  width="600"
                  height="338"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="text-right shrink-0">
                    <div className="text-3xl font-bold text-yellow-400">{item.result}</div>
                    <div className="text-xs text-gray-300">{item.resultLabel}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-7 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Section ──────────────────────────────────────────────────────────
function GallerySection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
      <SectionTitle title={t.galleryTitle} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {t.galleryImages.map((img, i) => (
          <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition group">
            <SafeImage
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              width="400"
              height="225"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Partner Section（铜师傅）────────────────────────────────────────────────
function PartnerSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.partnerTitle} text={t.partnerSubtitle} />
        {/* 铜师傅品牌标识 */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/5">
            <span className="text-yellow-400 text-2xl">🏆</span>
            <span className="text-yellow-300 font-semibold text-lg">{lang === "zh" ? "铜师傅 · 文创品牌合作伙伴" : "Tongshifu · Cultural Brand Partner"}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.partnerProducts.map((item, i) => (
            <div key={i} className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/40 transition group">
              <div className="aspect-square overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  width="200"
                  height="200"
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-xs text-gray-300 leading-4">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={buildWhatsAppUrl(lang === "zh" ? "你好，我想了解铜师傅合作产品的详情。" : "Hello, I'd like to know more about the Tongshifu partner products.")}
            className="inline-block border border-yellow-500/50 text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500/10 transition"
          >
            {lang === "zh" ? "WhatsApp 了解详情" : "WhatsApp for Details"}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-7xl mx-auto">
      <SectionTitle title={t.testimonialsTitle} text={t.testimonialsText} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.testimonials.map((item) => (
          <div key={item.name} className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-yellow-500/30 transition backdrop-blur-sm">
            <StarRating count={item.stars} />
            <p className="text-gray-300 leading-7 text-sm mb-4">"{item.quote}"</p>
            <div className="text-yellow-400 text-sm font-medium">— {item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Products Section ─────────────────────────────────────────────────────────
function ProductsSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.productsTitle} text={t.productsText} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.products.map((item) => (
            <div key={item.name} className="bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition hover:border-yellow-500/30 group">
              <div className="aspect-square bg-gray-900 overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  width="400"
                  height="400"
                />
              </div>
              <div className="p-4">
                <div className="inline-block text-xs bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded-full mb-2">{item.tag}</div>
                <h3 className="font-semibold mb-1 text-sm">{item.name}</h3>
                <p className="text-gray-300 text-xs leading-5 mb-3">{item.desc}</p>
                <a
                  href={buildWhatsAppUrl(lang === "zh" ? `你好，我想了解「${item.name}」的详情与价格。` : `Hello, I'd like to know more about "${item.name}".`)}
                  className="block w-full text-center bg-yellow-500 text-black px-3 py-2 rounded-xl text-xs font-semibold hover:bg-yellow-400 transition"
                  onClick={() => trackConversion('whatsapp_click', `product_${item.name}`)}
                >
                  {lang === "zh" ? "WhatsApp 咨询价格" : "Enquire Price"}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-300 text-sm mt-6">{t.productsNote}</p>
        <div className="text-center mt-8">
          <a
            href={buildWhatsAppUrl(lang === "zh" ? "你好，我想根据我的情况获取产品推荐。" : "Hello, I want a product recommendation based on my needs.")}
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-yellow-400 transition"
            onClick={() => trackConversion('whatsapp_click', 'product_recommendation')}
          >
            {lang === "zh" ? "WhatsApp 获取专属推荐" : "WhatsApp for Personalised Recommendation"}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection({ lang }) {
  const t = content[lang];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-4xl mx-auto">
      <SectionTitle title={t.faqTitle} text={t.faqSubtitle} />
      <div className="space-y-3">
        {t.faqs.map((faq, i) => (
          <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition backdrop-blur-sm">
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-semibold text-white">{faq.q}</span>
              <span className={`text-yellow-400 text-xl transition-transform shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5">
                <p className="text-gray-300 leading-7 text-sm">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Master Section ───────────────────────────────────────────────────────────
function MasterSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto">
      <SectionTitle title={t.masterTitle} text={t.masterText} />
      <p className="text-yellow-400 text-center mb-10 font-medium">{t.masterSubtitle}</p>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-gray-900 border border-yellow-500/20 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.15)]">
          <SafeImage
            src="/master-main.jpg"
            alt="Master Huang Qiming 黄启明大师"
            className="w-full h-auto block"
            width="830"
            height="1046"
          />
        </div>
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
            <SafeImage
              src="/master-real.jpg"
              alt="Qiming Feng Shui Shop Singapore"
              className="w-full h-auto block"
              width="800"
              height="600"
            />
          </div>
          <div className="bg-gray-900 border border-yellow-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">{lang === "zh" ? "专业资历" : "Credentials"}</h3>
            <div className="space-y-2">
              {t.masterCredentials.map((item) => (
                <p key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-yellow-400">✦</span> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">{t.locationTitle}</h3>
            <p className="text-gray-300 leading-7 mb-3 text-sm">{t.locationText}</p>
            <p className="text-gray-200 text-sm"><span className="font-semibold">{t.addressLabel}:</span> {t.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── QR Section ───────────────────────────────────────────────────────────────
function QRSection({ lang }) {
  const t = content[lang];
  return (
    <section className="px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto text-center bg-gray-950 rounded-3xl my-10">
      <SectionTitle title={t.qrTitle} text={t.qrText} />
      <div className="max-w-xs mx-auto bg-white rounded-3xl p-4 shadow-lg mb-6">
        <SafeImage src="/whatsapp-qr.jpg" alt="WhatsApp QR Code" className="w-full h-auto rounded-2xl" width="400" height="400" />
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
      >
        {lang === "zh" ? "直接 WhatsApp 联系" : "Contact via WhatsApp"}
      </a>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
function Home({ lang, setLang }) {
  return (
    <Layout lang={lang} setLang={setLang}>
      <HeroSection lang={lang} />
      <UrgencySection lang={lang} />
      <ServicesSection lang={lang} />
      <CasesSection lang={lang} />
      <GallerySection lang={lang} />
      <PartnerSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <ProductsSection lang={lang} />
      <FAQSection lang={lang} />
      <MasterSection lang={lang} />
      <QRSection lang={lang} />
    </Layout>
  );
}

// ─── Purification Page ──────────────────────────────────────────────────────────
function PurificationPage({ lang, setLang }) {
  const t = content[lang];
  const page = t.pages.purification;
  const isZh = lang === "zh";

  const services = isZh ? [
    {
      icon: "🌀",
      title: "空间能量净化",
      desc: "针对住宅、办公室、商业场所进行全面的能量场扫描与净化。清除历史残留的负面能量、戾气与不良磁场，恢复空间的清净、和谐与正向流动。适合新居入住前、经营不顺时、家庭关系紧张时进行。",
    },
    {
      icon: "⚡",
      title: "个人磁场调整",
      desc: "针对个人气场混乱、运势低迷、情绪压抑、身体疲惫等状况，进行个人磁场的深度调整与能量重建。帮助您恢复内在清明、提升正向吸引力，让生命重新焕发活力。",
    },
    {
      icon: "🛡️",
      title: "解降头 · 化转属",
      desc: "针对遭受降头、邪术、符咒等负面能量侵扰的客户，启明大师凭借16年+的修行功力与天赋，进行专业的解除与化转。这是启明大师最具代表性的核心能力之一，已成功帮助众多客户摆脱困境。",
    },
    {
      icon: "✨",
      title: "正心正念能量引导",
      desc: "以正心正念正行正能量为宗旨，启明大师不仅净化外在空间与磁场，更引导客户建立内在的正向思维模式与能量状态。真正的净化，从心开始，由内而外，全面提升生命质量。",
    },
  ] : [
    {
      icon: "🌀",
      title: "Space Energy Clearing",
      desc: "A comprehensive energy scan and purification of your home, office, or commercial space. Clears residual negative energy, stagnant qi, and harmful fields — restoring clarity, harmony, and positive flow. Ideal before moving in, during business difficulties, or when relationships feel strained.",
    },
    {
      icon: "⚡",
      title: "Personal Aura & Magnetic Field Adjustment",
      desc: "For those experiencing scattered energy, low fortune, emotional suppression, or persistent fatigue — Master Qiming performs deep aura recalibration and energy rebuilding. Restore inner clarity, elevate your positive attraction, and reignite your life force.",
    },
    {
      icon: "🛡️",
      title: "Spiritual Protection & Curse Removal",
      desc: "For clients affected by black magic, curses, spiritual attacks, or dark energy interference, Master Qiming applies 16+ years of cultivation and innate spiritual gifts to professionally remove and neutralise these influences. This is one of his most distinctive core capabilities, with a strong track record of helping clients break free.",
    },
    {
      icon: "✨",
      title: "Positive Mindset & Energy Alignment",
      desc: "Guided by the principle of right heart, right thought, right action, and right energy, Master Qiming not only purifies external spaces and fields — he also guides clients toward building an inner foundation of positive thinking and energy. True purification begins within, radiating outward to elevate every dimension of life.",
    },
  ];

  const masterCredentials = isZh ? [
    "奇门遁甲正统传人 · 16年+实战经验",
    "清华大学积极心理学指导师",
    "武当山正统风水传承",
    "以利人利己为宗旨",
    "正心正念正行正能量",
    "真才实学利益社会利益大众",
  ] : [
    "Qimen Dunjia Lineage Holder · 16+ Years Practice",
    "Positive Psychology Instructor · Tsinghua University",
    "Wudang Mountain Feng Shui Lineage",
    "Guided by the principle of mutual benefit",
    "Right heart, right thought, right action, right energy",
    "Genuine expertise in service of society and the people",
  ];

  const testimonials = isZh ? [
    { name: "家庭客户 · 新加坡", stars: 5, quote: "启明大师的空间净化真的很神奇，净化后家里的氛围完全不同了，家人之间的关系也明显改善，感觉整个空间都轻盈了。" },
    { name: "企业主 · 商业空间", stars: 5, quote: "办公室净化后，团队状态明显好转，业绩也开始回升。启明大师不只是净化空间，更帮助我们重新找到了方向。" },
    { name: "个人客户 · 磁场调整", stars: 5, quote: "经过个人磁场调整后，感觉整个人都清醒了，之前那种莫名的压抑和疲惫感消失了，生活开始顺畅起来。" },
    { name: "客户 · 解降头服务", stars: 5, quote: "启明大师的功力让我非常信服，经过他的处理，困扰我多年的问题终于得到了解决，非常感恩。" },
  ] : [
    { name: "Residential Client · Singapore", stars: 5, quote: "Master Qiming's space purification was truly remarkable. After the clearing, the atmosphere at home completely transformed — family relationships improved noticeably and the whole space felt lighter." },
    { name: "Business Owner · Commercial Space", stars: 5, quote: "After the office purification, our team's energy improved significantly and business started picking up again. Master Qiming didn't just clear the space — he helped us rediscover our direction." },
    { name: "Personal Client · Aura Adjustment", stars: 5, quote: "After the personal magnetic field adjustment, I felt completely clear-headed. The unexplained heaviness and fatigue I had been carrying disappeared, and life started flowing smoothly again." },
    { name: "Client · Spiritual Protection Service", stars: 5, quote: "Master Qiming's ability truly impressed me. After his work, a problem that had troubled me for years was finally resolved. I am deeply grateful." },
  ];

  const faqs = isZh ? [
    { q: "什么情况下需要空间磁场净化？", a: "当您感觉家居或办公室氛围沉重、运势持续低迷、家庭关系紧张、事业屡遭阻碍、或有莫名的不安感时，都可以考虑进行空间磁场净化。新居入住前、装修后或经历重大变故后也建议进行净化。" },
    { q: "解降头是什么？需要我做什么准备？", a: "解降头是针对遭受降头、符咒或邪术侵扰的专业处理服务。您只需提供基本信息并预约咨询，启明大师会根据您的具体情况制定处理方案。整个过程安全、专业、保密。" },
    { q: "净化服务可以远程进行吗？", a: "可以。启明大师可以通过远程方式进行部分净化工作，但针对空间的全面净化建议到场进行效果更佳。个人磁场调整可以通过视频或WhatsApp远程进行。" },
    { q: "净化后效果能持续多久？", a: "净化效果因个人情况和空间状态而异。一般情况下，配合正确的风水布局和个人能量维护，效果可以持续较长时间。启明大师会根据您的情况给出具体建议。" },
  ] : [
    { q: "When do I need space purification?", a: "Consider space purification when your home or office feels heavy or oppressive, when fortune has been persistently low, when family relationships are strained, when business faces repeated obstacles, or when there is an unexplained sense of unease. It is also recommended before moving into a new space, after renovation, or following a major life event." },
    { q: "What is curse removal and what do I need to prepare?", a: "Curse removal is a professional service for those affected by black magic, spiritual curses, or dark energy interference. You simply need to provide basic information and book a consultation. Master Qiming will design a tailored approach based on your specific situation. The entire process is safe, professional, and confidential." },
    { q: "Can purification be done remotely?", a: "Yes. Master Qiming can perform certain purification work remotely, though for comprehensive space clearing, an in-person visit yields the best results. Personal aura and magnetic field adjustments can be conducted via video call or WhatsApp." },
    { q: "How long do the effects of purification last?", a: "The duration of effects varies by individual circumstance and spatial condition. In general, when combined with proper Feng Shui layout and personal energy maintenance, the effects can be sustained for a significant period. Master Qiming will provide specific guidance based on your situation." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Layout lang={lang} setLang={setLang}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/purification-hero.jpg" alt="Space Purification" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-20 md:py-32 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
            <span>✨</span>
            <span>{isZh ? "奇明旺财风水 · 核心业务" : "Qiming Prosperity Feng Shui · Core Service"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {isZh ? "空间磁场净化" : "Space & Aura Purification"}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-6 font-medium">
            {isZh ? "清除负能量，开启正向生命场域" : "Clear the field. Restore positive energy."}
          </p>
          <p className="max-w-3xl text-gray-300 text-base md:text-lg leading-8 mb-10">
            {isZh
              ? "这是启明大师16年+修行成果与个人天赋的结晶。过去四五年间，已帮助新加坡众多客户重建和谐、清晰与正向能量场，影响着越来越多的客户和朋友。"
              : "A reflection of Master Qiming's 16+ years of spiritual cultivation and innate gift. Over the past four to five years, this service has helped hundreds of clients in Singapore restore harmony, clarity, and positive energy — touching the lives of an ever-growing circle of clients and friends."}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(isZh ? "你好，我想预约空间磁场净化服务。" : "Hello, I would like to book a Space Purification consultation.")}
              className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition"
              onClick={() => trackConversion('whatsapp_click', 'purification_hero_cta')}
            >
              {isZh ? "立即 WhatsApp 咨询" : "WhatsApp Consultation"}
            </a>
            <a
              href="#purification-services"
              className="inline-block border border-gray-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-900 hover:border-yellow-500/40 transition"
            >
              {isZh ? "了解服务详情" : "Explore Services"}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-8 py-8 bg-gray-950 border-y border-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {(isZh ? [
            { value: "16年+", label: "修行经验" },
            { value: "4-5年", label: "专项服务历史" },
            { value: "众多", label: "成功案例" },
            { value: "100%", label: "保密处理" },
          ] : [
            { value: "16+", label: "Years of Practice" },
            { value: "4-5", label: "Years of Service" },
            { value: "Hundreds", label: "Successful Cases" },
            { value: "100%", label: "Confidential" },
          ]).map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="purification-services" className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isZh ? "四大核心净化服务" : "Four Core Purification Services"}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            {isZh
              ? "每一项服务都源自启明大师多年修行的积累与天赋，针对不同的能量问题提供精准的解决方案。"
              : "Each service draws from Master Qiming's years of cultivation and innate gifts, offering precise solutions for different energy challenges."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-gray-900/80 border border-gray-800 hover:border-yellow-500/50 rounded-3xl p-8 transition hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(234,179,8,0.15)] backdrop-blur-sm">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition">{service.title}</h3>
              <p className="text-gray-300 leading-8">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Master Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isZh ? "启明大师 · 修行与资历" : "Master Qiming · Cultivation & Credentials"}
            </h2>
            <p className="text-yellow-400 font-medium">
              {isZh ? "奇门遁甲传人 · 清华大学积极心理学指导师 · 16年+实战经验" : "Qimen Dunjia Lineage · Tsinghua Positive Psychology Instructor · 16+ Years"}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="bg-gray-900 border border-yellow-500/20 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(234,179,8,0.15)]">
                <SafeImage
                  src="/master-main.jpg"
                  alt="Master Huang Qiming"
                  className="w-full h-auto block"
                  width="830"
                  height="1046"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
                <p className="text-gray-300 leading-9 text-base">
                  {isZh
                    ? "启明大师是奇门遁甲的正统传人，在风水行业已有16年+的实战经验。他同时是清华大学积极心理学指导师，将东方玄学智慧与现代心理学相融合，形成了独特的能量净化体系。"
                    : "Master Qiming is a lineage holder of Qimen Dunjia with over 16 years of real-world practice in the Feng Shui industry. He is also a certified Positive Psychology Instructor from Tsinghua University, blending Eastern metaphysical wisdom with modern psychology to form a unique energy purification system."}
                </p>
                <p className="text-gray-300 leading-9 text-base mt-4">
                  {isZh
                    ? "以利人利己为宗旨，以真才实学利益社会利益大众。他的正心正念正行正能量，影响着越来越多的客户和朋友，成为他们生命中的一盏明灯。"
                    : "Guided by the principle of mutual benefit, and committed to serving society with genuine expertise. His right heart, right thought, right action, and right energy have become a guiding light for an ever-growing circle of clients and friends."}
                </p>
              </div>
              <div className="bg-gray-900 border border-yellow-500/20 rounded-3xl p-8">
                <h3 className="text-lg font-semibold mb-5 text-yellow-400">
                  {isZh ? "专业资历与认证" : "Professional Credentials"}
                </h3>
                <div className="space-y-3">
                  {masterCredentials.map((item) => (
                    <p key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="text-yellow-400 text-lg shrink-0">✦</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10 border border-yellow-500/30 rounded-3xl p-8">
                <p className="text-yellow-300 text-lg font-semibold mb-3">
                  {isZh ? "启明大师的使命" : "Master Qiming's Mission"}
                </p>
                <p className="text-gray-300 leading-8">
                  {isZh
                    ? "犹如一盏前行的灯，用光去照亮生活的美。启明，以风水之妙，成就您的生活之美。"
                    : "Like a lamp lighting the way forward — using light to illuminate the beauty of life. Qiming, with the art of Feng Shui, helps you create a life of beauty and purpose."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isZh ? "净化服务现场" : "Purification in Practice"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition group">
            <img
              src="/purification-space.jpg"
              alt={isZh ? "净化工具与仪式" : "Purification tools and ritual"}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition group">
            <img
              src="/purification-energy.jpg"
              alt={isZh ? "个人磁场能量" : "Personal aura energy"}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isZh ? "客户真实反馈" : "Client Testimonials"}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-8">
              {isZh
                ? "每一个改变，都是真实发生的。这些是客户在接受净化服务后的真实感受。"
                : "Every transformation is real. These are genuine reflections from clients who have experienced the purification service."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-yellow-500/30 transition backdrop-blur-sm">
                <StarRating count={item.stars} />
                <p className="text-gray-300 leading-7 text-sm mb-4">"{item.quote}"</p>
                <div className="text-yellow-400 text-sm font-medium">— {item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isZh ? "常见问题" : "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition backdrop-blur-sm">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <span className={`text-yellow-400 text-xl transition-transform shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-7 text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10 border border-yellow-500/30 rounded-3xl p-10 md:p-16 text-center">
          <div className="text-yellow-400 font-semibold text-xl mb-4">
            {isZh ? "⚡ 净化名额有限，建议尽早预约" : "⚡ Limited Purification Slots — Book Early"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isZh ? "准备好开启正向能量了吗？" : "Ready to restore your energy field?"}
          </h2>
          <p className="text-gray-300 leading-8 mb-10 max-w-2xl mx-auto">
            {isZh
              ? "无论您面临的是空间问题、个人磁场困扰还是需要解降头，启明大师都能为您提供专业、保密、有效的解决方案。"
              : "Whether you face spatial issues, personal aura disturbances, or need spiritual protection — Master Qiming offers professional, confidential, and effective solutions tailored to your needs."}
          </p>
          <a
            href={buildWhatsAppUrl(isZh ? "你好，我想预约空间磁场净化服务，请问如何安排？" : "Hello, I would like to book a Space Purification session. How do I proceed?")}
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:bg-yellow-400 hover:shadow-[0_0_60px_rgba(234,179,8,0.6)] transition"
            onClick={() => trackConversion('whatsapp_click', 'purification_final_cta')}
          >
            {isZh ? "立即 WhatsApp 预约" : "Book via WhatsApp Now"}
          </a>
        </div>
      </section>
    </Layout>
  );
}

// ─── Service Page ─────────────────────────────────────────────────────────────
const PAGE_IMAGES = {
  destiny: [
    "/destiny-consultation.jpg",
    "/destiny-consultation-2.jpg",
    "/destiny-consultation-3.jpg",
  ],
  fengshui: [
    "/fengshui-onsite-1.jpg",
    "/fengshui-onsite-2.jpg",
    "/fengshui-onsite-3.jpg",
  ],
  qimen: [
    "/qimen-prediction-1.jpg",
    "/qimen-prediction-2.jpg",
    "/qimen-prediction-3.jpg",
  ],
};

function ServicePage({ lang, setLang, pageKey }) {
  const t = content[lang];
  const page = t.pages[pageKey];
  const pageImages = PAGE_IMAGES[pageKey];
  return (
    <Layout lang={lang} setLang={setLang}>
      <section className="px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto">
        <p className="text-yellow-400 mb-4 font-medium">{page.subtitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{page.title}</h1>
        {pageImages && pageImages.length > 0 && (
          <div className="mb-10">
            {pageImages.length === 1 ? (
              <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                <img src={pageImages[0]} alt={page.title} className="w-full h-auto object-cover" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pageImages.map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/40 transition shadow-[0_0_20px_rgba(0,0,0,0.4)] group">
                    <img
                      src={src}
                      alt={`${page.title} ${i + 1}`}
                      className="w-full h-72 object-cover object-center group-hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="text-gray-300 text-lg leading-8 mb-8 space-y-4">
          {page.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {page.body2 && (
          <div className="bg-gray-900/60 border border-yellow-500/20 rounded-2xl p-6 mb-8">
            <h3 className="text-yellow-400 font-semibold text-lg mb-3">
              {pageKey === 'fengshui'
                ? (lang === 'zh' ? '启明大师实战案例与客户反馈' : 'Master Qiming in Practice')
                : (lang === 'zh' ? '奇门遁甲与风水布局的深度融合' : 'Qi Men Dun Jia in Feng Shui Layout')}
            </h3>
            <p className="text-gray-300 leading-8">{page.body2}</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {page.points.map((point) => (
            <div key={point} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-gray-300 flex items-center gap-3">
              <span className="text-yellow-400 text-lg">❆</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 border border-yellow-500/20 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">{t.pageTrustTitle}</h2>
          <div className="space-y-3 text-gray-300">
            {t.pageTrusts.map((item) => (
              <p key={item} className="flex items-center gap-2">
                <span className="text-yellow-400">✔</span> {item}
              </p>
            ))}
          </div>
        </div>
        <a
          href={buildWhatsAppUrl(lang === "zh" ? `你好，我想预约${page.title}` : `Hello, I want to book ${page.title}`)}
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-yellow-400 transition shadow-[0_0_30px_rgba(234,179,8,0.2)]"
        >
          {page.cta}
        </a>
      </section>
    </Layout>
  );
}

// ─── Routes ───────────────────────────────────────────────────────────────────
function AppRoutes({ lang, setLang }) {
  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
      <Route path="/destiny" element={<ServicePage lang={lang} setLang={setLang} pageKey="destiny" />} />
      <Route path="/fengshui" element={<ServicePage lang={lang} setLang={setLang} pageKey="fengshui" />} />
      <Route path="/strategy" element={<ServicePage lang={lang} setLang={setLang} pageKey="strategy" />} />
      <Route path="/qimen" element={<ServicePage lang={lang} setLang={setLang} pageKey="qimen" />} />
      <Route path="/enhancer" element={<ServicePage lang={lang} setLang={setLang} pageKey="enhancer" />} />
      <Route path="/purification" element={<PurificationPage lang={lang} setLang={setLang} />} />
    </Routes>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
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
