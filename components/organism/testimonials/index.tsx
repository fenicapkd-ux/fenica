import React from 'react';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  // Dữ liệu Mock Đánh giá cho Dự án Fenica - Căn hộ giới trẻ
  const testimonialData = {
    tag: "Đánh giá",
    title: "Khách hàng nói gì về Fenica",
    quote: "Mình đã tìm được căn hộ mơ ước chỉ trong nháy mắt! Các thông tin niêm yết rất chi tiết, hình ảnh chính xác, và toàn bộ quy trình mua nhà diễn ra vô cùng suôn sẻ. Dịch vụ chăm sóc khách hàng đỉnh cao, giải đáp mọi thắc mắc của mình. Chắc chắn mình sẽ lại sử dụng nền tảng này trong tương lai!",
    client: "Chị Trang",
    role: "Người mua nhà lần đầu",
    // Placeholder image URL, should be replaced with an actual image of the family
    image: "/images/dinh-thap-fenica.webp"
  };

  return (
    <section className="bg-[#c98266] text-white py-20 font-sans relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0">
        <svg 
          className="absolute right-0 top-0 h-full w-auto text-emerald-900/10" 
          viewBox="0 0 100 100" 
          fill="none" 
          preserveAspectRatio="xMidYMax slice"
        >
          <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header and Navigation */}
        <div className="flex justify-between items-start mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold">
              <div className="w-2 h-4 bg-[#fff] rounded-sm" />
              <span className="text-xs uppercase tracking-widest">{testimonialData.tag}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {testimonialData.title}
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 pt-3">
            <button aria-label="Xem nhận xét trước" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition group">
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
            <button aria-label="Xem nhận xét tiếp theo" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition group">
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Testimonial Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Quote and Client Info - Left side */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="text-[#c98266] p-3 rounded-2xl bg-[#0f172a] mt-1 shadow-inner">
                <Home size={28} />
              </div>
              <blockquote className="text-base md:text-2xl font-medium text-gray-200 leading-relaxed max-w-2xl">
                “{testimonialData.quote}”
              </blockquote>
            </div>
            
            <div className="md:pl-[4rem] space-y-1">
              <p className="font-bold text-lg text-white">{testimonialData.client}</p>
              {/* <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{testimonialData.role}</p> */}
            </div>
          </div>

          {/* Client Image - Right side */}
          <div className="md:col-span-5">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl relative">
              <img 
                src={testimonialData.image} 
                alt="Khách hàng Fenica hạnh phúc" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent p-10 flex flex-col justify-end">
                <span className="text-white text-xs font-bold uppercase tracking-widest bg-[#c98266] px-3 py-1 rounded-full self-start">Sống Chất</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;