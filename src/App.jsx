{/* ===== 成交版产品区 ===== */}
<section className="px-6 py-20 bg-[#0B1120]">
  <h2 className="text-3xl font-bold text-white mb-4 text-center">
    Feng Shui Energy Products
  </h2>
  <p className="text-gray-400 text-center mb-12">
    根据命理与空间需求精选，提升运势、聚财与能量场
  </p>

  <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {[
      {
        name: "黄水晶招财手链",
        tag: "🔥 热门推荐",
        image: "/product-1.jpg",
        desc: "提升财运与贵人运，适合长期佩戴增强财富磁场",
      },
      {
        name: "绿色能量平衡手链",
        tag: "能量调节",
        image: "/product-2.jpg",
        desc: "缓解压力，稳定气场，适合事业与生活平衡",
      },
      {
        name: "荷花净化摆件",
        tag: "空间净化",
        image: "/product-3.jpg",
        desc: "净化环境磁场，提升空间美感与舒适度",
      },
      {
        name: "紫色葫芦化煞摆件",
        tag: "风水必备",
        image: "/product-4.jpg",
        desc: "化煞挡灾，适合家居与办公室布局使用",
      },
      {
        name: "黄色葫芦聚财摆件",
        tag: "招财聚气",
        image: "/product-5.jpg",
        desc: "稳定财运，增强空间聚气能力",
      },
      {
        name: "高端风水组合摆件",
        tag: "大师推荐",
        image: "/product-6.jpg",
        desc: "根据命理搭配，整体提升运势结构",
      },
      {
        name: "吉祥能量物件",
        tag: "提升运势",
        image: "/product-7.jpg",
        desc: "适合居家与个人使用，增强整体好运",
      },
      {
        name: "风水布局辅助摆件",
        tag: "布局增强",
        image: "/product-8.jpg",
        desc: "搭配风水方案使用，效果更明显",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
      >
        <div className="h-52 bg-gray-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/master-main.jpg";
            }}
          />
        </div>

        <div className="p-4">
          <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
            {item.tag}
          </span>

          <h3 className="text-white text-lg mt-2 font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

          {/* 💰 成交按钮（核心） */}
          <a
            href={`https://wa.me/6589418791?text=I want to enquire about ${encodeURIComponent(
              item.name
            )}`}
            target="_blank"
          >
            <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-xl font-semibold hover:bg-yellow-300">
              咨询此产品
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
