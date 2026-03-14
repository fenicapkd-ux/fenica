"use client"
import React from 'react';

const Cta = () => {
  const content = {
    heading: "Bước vào không gian nơi thiết kế tinh tế và sự sang trọng vượt thời gian giao thoa.",
    buttonText: "Liên hệ tư vấn",
    marquee: [
      "KHÁM PHÁ HÀNG NGÀN CĂN HỘ TẠI VỊ TRÍ ĐẮC ĐỊA VỚI MỨC GIÁ HẤP DẪN!",
      "NHẬN ĐỊNH GIÁ BẤT ĐỘNG SẢN MIỄN PHÍ – BÁN NHÀ TỰ TIN CÙNG FENICA!",
      "ƯU ĐÃI TRẢ GÓP 0% TRONG 24 THÁNG ĐẦU TIÊN!"
    ]
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Main CTA Card */}
      <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 shadow-2xl">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop')` 
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            {content.heading}
          </h2>
          
          <button className="bg-[#c98266e6] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#c98266] transition-all shadow-lg shadow-emerald-100 active:scale-95">
            {content.buttonText}
          </button>
        </div>
      </div>

      {/* Marquee Banner - Dòng chữ chạy đặc trưng cho giới trẻ */}
      <div className="mt-4 bg-[#c98266e6] rounded-xl md:rounded-2xl py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {content.marquee.map((text, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-tighter px-8">
                    {text}
                  </span>
                  <div className="w-12 h-[1px] bg-white/40" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles cho hiệu ứng chạy chữ (Marquee) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Cta;