import { MapPin, Waves, Smartphone, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const Featured = () => {
  const propertyData = {
    tag: "Dự án tiêu biểu",
    name: "Căn hộ Fenica",
    subBrand: "Căn hộ giới trẻ - Sống chất kiến tạo",
    location: "Đ.Trần Quang Diệu, P.Tân Đông Hiệp, TP.HCM",
    description: "Trải nghiệm chuẩn sống mới tại Fenica. Với thiết kế mở đón trọn ánh sáng tự nhiên và hệ thống nhà thông minh thế hệ mới, đây là không gian hoàn hảo cho người trẻ năng động. Căn hộ 2 phòng ngủ với tầm nhìn hướng biển nhân tạo, tích hợp công nghệ tiết kiệm năng lượng bền vững.",
    features: [
      {
        icon: <Waves size={24} />,
        title: "Tầm nhìn biển hồ",
        desc: "Sở hữu ban công vô cực hướng thẳng ra khu vực hồ bơi phong cách resort."
      },
      {
        icon: <Smartphone size={24} />,
        title: "Hệ sinh thái Smart-home",
        desc: "Kiểm soát toàn bộ căn hộ chỉ với một chạm qua điện thoại thông minh."
      },
      {
        icon: <Lightbulb size={24} />,
        title: "Tiết kiệm năng lượng",
        desc: "Công nghệ kính Low-E và hệ thống chiếu sáng cảm biến tự động."
      }
    ],
    price: "Chỉ từ 36.500.000/m2 VNĐ",
    priceNote: "Giá ưu đãi đợt 1"
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Gallery Section */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative shadow-2xl">
            <img 
              src="/images/goc-nhin-hoan-hon-fenica.webp" 
              alt="Fenica Interior" 
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button aria-label="Hình ảnh trước" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-[#00bfa5] transition-colors">
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button aria-label="Hình ảnh tiếp theo" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-[#00bfa5] transition-colors">
              <ChevronRight size={24} aria-hidden="true" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white/40 rounded-full" />
              <div className="w-2 h-2 bg-white/40 rounded-full" />
              <div className="w-2 h-2 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2 text-[#c98266e6] font-bold">
            <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
            <span className="text-xs uppercase tracking-widest">{propertyData.tag}</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              {propertyData.name}
            </h2>
            <div className="flex items-center gap-1 text-slate-400 font-medium">
              <MapPin size={16} />
              <span className="text-sm">{propertyData.location}</span>
            </div>
          </div>

          <p className="text-slate-500 leading-relaxed text-[15px]">
            {propertyData.description}
          </p>

          {/* Features List */}
          <div className="space-y-6 pt-4">
            {propertyData.features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 bg-slate-50 rounded-xl text-slate-700">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action & Price */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-100">
            <button className="bg-[#c98266e6] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#c98266] transition-all shadow-lg shadow-emerald-100 active:scale-95">
              Liên hệ tư vấn
            </button>
            <div>
              <div className="text-2xl font-black text-slate-900">{propertyData.price}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{propertyData.priceNote}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;