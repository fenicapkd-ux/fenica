import { ArrowUpRight, LayoutGrid } from 'lucide-react';

const Properties = () => {
  const categories = [
    {
      id: 1,
      title: "Căn hộ giới trẻ",
      description: "Trải nghiệm sự sang trọng và tiện nghi với các căn biệt thự độc bản, được thiết kế cho cuộc sống tinh tế.",
      image: "/images/sanh-fenica.jpg",
      size: "large"
    },
    {
      id: 2,
      title: "Căn hộ hiện đại",
      image: "/images/nha-tre-fenica.jpg",
      size: "small"
    },
    {
      id: 3,
      title: "Văn phòng hạng A",
      image: "/images/ho-boi-fenica.jpg",
      size: "small"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
        {/* Khối nội dung bên trái */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#c98266e6] font-medium">
            <LayoutGrid size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">Danh mục tiện ích</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Khám phá không gian tinh hoa giới trẻ <span className="text-[#c98266e6]">Fenica.</span>
          </h2>
          
          <p className="text-slate-500 text-lg max-w-md leading-relaxed">
            Khám phá danh mục đa dạng các bất động sản dành cho giói trẻ, được đo ni đóng giày cho nhu cầu của bạn.
          </p>
          
          <button className="bg-[#c98266e6] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#c98266] transition-all shadow-lg shadow-emerald-100">
            Xem tất cả tiện ích
          </button>
        </div>

        {/* Ảnh lớn bên phải */}
        <div className="rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src="/images/sanh-fenica.jpg" 
            alt="Dự án tiêu biểu fenica" 
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Lưới sản phẩm bên dưới */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Item 1: Biệt thự (Chiếm 6 cột) */}
        <div className="md:col-span-6 relative rounded-[2rem] overflow-hidden group cursor-pointer h-[450px]">
          <img 
            src={categories[0].image} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt={categories[0].title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
            <h3 className="text-3xl font-bold mb-3">{categories[0].title}</h3>
            <p className="text-sm text-gray-300 max-w-xs leading-relaxed opacity-90">
              {categories[0].description}
            </p>
          </div>
          <div className="absolute top-6 right-6 bg-white rounded-full p-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Item 2: Căn hộ (Chiếm 3 cột) */}
        <div className="md:col-span-3 rounded-[2rem] overflow-hidden group cursor-pointer h-[450px]">
          <img 
            src={categories[1].image} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={categories[1].title}
          />
        </div>

        {/* Item 3: Văn phòng (Chiếm 3 cột) */}
        <div className="md:col-span-3 rounded-[2rem] overflow-hidden group cursor-pointer h-[450px]">
          <img 
            src={categories[2].image} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={categories[2].title}
          />
        </div>
      </div>

      {/* Trang trí nền (Optional) */}
      <div className="absolute top-0 left-0 -z-10 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
          <path d="M0 100 L100 0" stroke="#00bfa5" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Properties;