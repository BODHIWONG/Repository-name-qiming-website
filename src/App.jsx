
import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      brand: "Qiming Strategic Feng Shui",
      home: "Home",
      services: "Services",
      cases: "Cases",
      about: "About",
      contact: "Contact",
      heroTitle: "Qiming Strategic Feng Shui",
      heroSub: "Not fortune telling. We participate in critical decisions.",
      heroBtn: "WhatsApp Consultation",
      address: "Address: Blk 210 New Upper Changi Road #01-729 Singapore 460210",
    },
    zh: {
      brand: "奇明战略风水",
      home: "首页",
      services: "服务",
      cases: "案例",
      about: "关于",
      contact: "联系",
      heroTitle: "奇明战略风水",
      heroSub: "不是看风水，是参与关键决策",
      heroBtn: "WhatsApp咨询",
      address: "地址：Blk 210 New Upper Changi Road #01-729 Singapore 460210",
    },
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* NAV */}
      <nav className="flex justify-between px-8 py-6 border-b border-gray-800">
        <div className="font-bold text-xl">{t[lang].brand}</div>
        <div className="space-x-6">
          <button onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="border px-3 py-1 rounded">
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </nav>

      {/* HERO + 大师 */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">{t[lang].heroTitle}</h1>
          <p className="text-gray-400 mb-6">{t[lang].heroSub}</p>

          <a href="https://wa.me/6589418791"
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl text-lg">
            {t[lang].heroBtn}
          </a>

          <p className="mt-6 text-gray-500">{t[lang].address}</p>
        </div>

        <img src="/master-main.jpg" className="rounded-2xl shadow-lg" />
      </section>

      {/* 门店 */}
      <section className="px-8 py-10">
        <img src="/19021772873454_pic.jpg" className="rounded-xl" />
      </section>

      {/* 服务 */}
      <section className="px-8 py-16">
        <h2 className="text-3xl mb-8">Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">Destiny & Bazi</div>
          <div className="bg-gray-900 p-6 rounded-xl">Feng Shui Layout</div>
          <div className="bg-gray-900 p-6 rounded-xl">Qimen Strategy</div>

        </div>
      </section>

      {/* 产品 */}
      <section className="px-8 py-16 bg-gray-900">
        <h2 className="text-3xl mb-8">Feng Shui Products</h2>

        <div className="grid md:grid-cols-4 gap-6">

          <img src="/18121770710785_pic.jpg" className="rounded-xl" />
          <img src="/18171770710952_pic.jpg" className="rounded-xl" />
          <img src="/18221770711636_pic_hd.jpg" className="rounded-xl" />
          <img src="/18521772681805_pic_hd.jpg" className="rounded-xl" />

        </div>
      </section>

      {/* 二维码 */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-2xl mb-4">Scan to Contact</h2>
        <img src="/56acf676b9113890a8c1e23d94.jpg"
             className="mx-auto w-48 rounded-xl" />
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 border-t border-gray-800">
        WhatsApp: +65 8941 8791
      </footer>

    </div>
  );
}
