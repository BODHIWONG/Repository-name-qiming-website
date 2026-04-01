import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Layout({ children }) {
  const [lang, setLang] = useState("zh");

  const t = {
    zh: {
      home: "首页",
      destiny: "命理",
      fengshui: "风水",
      strategy: "战略",
      qimen: "奇门",
      enhancer: "能量物",
    },
    en: {
      home: "Home",
      destiny: "Destiny",
      fengshui: "Feng Shui",
      strategy: "Strategy",
      qimen: "Qi Men",
      enhancer: "Enhancers",
    },
  };

  return (
  
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-between items-center px-8 py-6 bg-black border-b border-gray-800">
        <div className="text-xl font-bold">
  {lang === "zh" ? "奇明战略风水" : "Qiming Strategic Feng Shui"}
</div>
        <div className="space-x-6 text-gray-300 flex items-center">
  <Link to="/">{t[lang].home}</Link>
  <Link to="/destiny">{t[lang].destiny}</Link>
  <Link to="/fengshui">{t[lang].fengshui}</Link>
  <Link to="/strategy">{t[lang].strategy}</Link>
  <Link to="/qimen">{t[lang].qimen}</Link>
  <Link to="/enhancer">{t[lang].enhancer}</Link>

  <button
    onClick={() => setLang(lang === "zh" ? "en" : "zh")}
    className="ml-4 px-3 py-1 border border-gray-500 rounded text-sm hover:bg-gray-700 transition"
  >
    {lang === "zh" ? "EN" : "中文"}
  </button>
</div>
      </nav>
      {children}
      <footer className="text-center text-gray-500 py-10 border-t border-gray-800">
        WhatsApp: +65 89418791 · © Qiming Strategic Feng Shui
      </footer>
    </div>
  );
}

function PageWrapper({ title, children, cta }
  return (
    <Layout>
      <div className="px-8 py-24 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">{title}</h1>
         <text-lg leading-8 space-y-6">{children}</div>
        <a href="https://wa.me/6589418791" className="mt-12 inline-block bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg">
          {cta}
        </a>
      </div>
    </Layout>--
  );
}

function DestinyPage() {
  return (
    <PageWrapper title="命理咨询 Destiny & Bazi Consultation" cta="预约命理咨询">
      <p>通过八字命盘结合奇门时空盘，解析个人格局、运势周期与关键人生节点。</p>
      <p className="text-yellow-400">为什么努力很多，却始终不顺？关键在于时运与格局未匹配。</p>
    </PageWrapper>
  );
}

function FengShuiPage() {
  return (
    <PageWrapper title="风水布局 Feng Shui Layout" cta="预约风水勘测">
      <p>针对住宅、办公室与商业空间进行系统勘测与布局调整，让空间成为聚气聚财的能量场。</p>
      <p className="text-yellow-400">为什么换了更好的地方，反而更差？</p>
    </PageWrapper>
  );
}

function StrategyPage() {
  return (
    <PageWrapper title="战略规划顾问 Strategic Planning" cta="预约战略咨询">
      <p>结合行业属性、命盘与奇门时局，为企业家提供选址、扩张与转型的关键决策支持。</p>
      <p className="text-yellow-400">方向没错，但节奏不对，结果完全不同。</p>
    </PageWrapper>
  );
}

function QimenPage() {
  return (
    <PageWrapper title="占卦问事 Qimen Divination" cta="立即占卦咨询">
      <p>针对具体问题起奇门局，判断合作、项目与行动时机。</p>
      <p className="text-yellow-400">关键节点，需要最有胜算的选择。</p>
    </PageWrapper>
  );
}

function EnhancerPage() {
  return (
    <PageWrapper title="吉祥物与水晶配置 Enhancers & Crystals" cta="咨询能量配置">
      <p>根据命理与空间布局，定制能量物件与水晶手链，放大整体布局效果。</p>
      <p className="text-yellow-400">巩固与放大风水与奇门后的能量成果。</p>
    </PageWrapper>
  );
}

function Home() {
  return (
    <Layout>
      <section className="text-center px-6 py-28 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-6xl font-bold mb-6">奇明战略风水<br/>Qiming Strategic Feng Shui</h1>
        <p className="text-gray-300 text-2xl">不是看风水，是参与关键决策</p>
        <a href="https://wa.me/6589418791" className="mt-10 inline-block bg-yellow-500 text-black px-10 py-5 rounded-2xl text-xl">
          预约咨询 Book Consultation
        </a>
      </section>

      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">核心业务 | Core Services</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-lg">
          <div className="p-6 bg-gray-900 rounded-2xl">命理咨询 · Destiny & Bazi Consultation</div>
          <div className="p-6 bg-gray-900 rounded-2xl">风水布局 · Feng Shui Layout</div>
          <div className="p-6 bg-gray-900 rounded-2xl">战略规划 · Strategic Planning</div>
          <div className="p-6 bg-gray-900 rounded-2xl">占卦问事 · Qimen Divination</div>
          <div className="p-6 bg-gray-900 rounded-2xl">风水吉祥物 · Feng Shui Enhancers</div>
          <div className="p-6 bg-gray-900 rounded-2xl">水晶手链 · Crystal Bracelets</div>
        </div>
      </section>

      <section className="bg-gray-900 px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">成功案例 | Case Studies</h2>
          <div className="space-y-8 text-gray-300 text-lg">
            <div className="bg-black p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Ai Cafe（F&B 企业）</h3>
              <p>原来经营困难，客户凋零。启明大师用奇门遁甲结合风水布局后，公司业绩增长 30%。</p>
            </div>
            <div className="bg-black p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">轻安村（慈善机构与素餐厅）</h3>
              <p>经过启明大师精心布局后，客流量增加了 25%。</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function QimingWebsite() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destiny" element={<DestinyPage />} />
        <Route path="/fengshui" element={<FengShuiPage />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/qimen" element={<QimenPage />} />
        <Route path="/enhancer" element={<EnhancerPage />} />
      </Routes>
    </Router>
  );
}
