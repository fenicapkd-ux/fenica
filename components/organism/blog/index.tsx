const Blog = () => {
  const blogData = {
    tag: "Blog & Tin tức",
    title: "Kiến thức bất động sản",
    description: "Cập nhật những xu hướng sống mới nhất, mẹo thiết kế căn hộ và tin tức thị trường từ các Fenica.",
    buttonText: "Xem tất cả bài viết",
    articles: [
      {
        id: 1,
        title: "Mẹo tối ưu không gian cho căn hộ nhỏ",
        date: "17 Tháng 2, 2026",
        category: "Mẹo hay",
        image: "/images/finica-goc-nhin-thu-ba.webp"
      },
      {
        id: 2,
        title: "Tăng giá trị căn hộ nhờ công nghệ Smart-home",
        date: "18 Tháng 2, 2026",
        category: "Hướng dẫn",
        image: "/images/sanh-fenica.webp"
      },
      {
        id: 3,
        title: "Cập nhật lãi suất vay mua nhà năm 2026",
        date: "19 Tháng 2, 2026",
        category: "Thị trường",
        image: "/images/thiet-ke-can-ho-fenica-1.webp"
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-[#c98266e6] font-bold">
            <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
            <span className="text-xs uppercase tracking-widest">{blogData.tag}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {blogData.title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {blogData.description}
          </p>
        </div>
        
        <button className="bg-[#111827] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#c98266e6] transition-all whitespace-nowrap shadow-lg active:scale-95">
          {blogData.buttonText}
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogData.articles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] mb-6 shadow-md relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content */}
            <div className="space-y-3 px-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  {article.date}
                </span>
                <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest group-hover:bg-[#c98266e6] group-hover:text-white transition-colors">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-[#c98266e6] transition-colors">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;