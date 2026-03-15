'use client';

import { useState, useEffect } from 'react';
import { Phone, ChevronUp, Mail } from 'lucide-react';

const ContactFixed = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hiện nút "Lên đầu trang" khi cuộn xuống
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Mobile Version: Thanh ngang dưới cùng (Bottom Bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around items-center py-2 px-4 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a href="tel:0901234567" className="flex flex-col items-center gap-1 group">
          <div className="p-2 bg-[#00c08b] text-white rounded-full animate-pulse">
            <Phone size={20} />
          </div>
          <span className="text-[10px] font-medium text-gray-600">Gọi điện</span>
        </a>
        
        <a href="https://zalo.me/0799036842" className="flex flex-col items-center gap-1">
          <div className="p-2 bg-[#0068ff] text-white rounded-full">
            <span className="font-bold text-sm">Zalo</span>
          </div>
          <span className="text-[10px] font-medium text-gray-600">Zalo</span>
        </a>

        <a href="/lien-he" className="flex flex-col items-center gap-1">
          <div className="p-2 bg-blue-600 text-white rounded-full">
            <Mail size={20} />
          </div>
          <span className="text-[10px] font-medium text-gray-600">Tin nhắn</span>
        </a>
      </div>

      {/* 2. Desktop Version: Nút nổi bên phải (Floating Buttons) */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-50">
        {/* Nút Back to Top */}
        {isVisible && (
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-white text-gray-400 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-all"
          >
            <ChevronUp size={24} />
          </button>
        )}

        {/* Nút Zalo */}
        <a 
          href="https://zalo.me/0799036842" 
          target="_blank"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0068ff] text-white rounded-full shadow-xl hover:-translate-y-1 transition-all"
        >
          <span className="font-bold text-xl tracking-tighter">Zalo</span>
          <span className="absolute right-16 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat Zalo với Fenica
          </span>
        </a>

        {/* Nút Facebook */}
        <a 
          href="/lien-he" 
          target="_blank"
          className="group relative flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-full shadow-xl hover:-translate-y-1 transition-all border border-gray-50"
        >
          <Mail size={28} />
          <span className="absolute right-16 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Gửi thông tin liên hệ
          </span>
        </a>

        {/* Nút Hotline */}
        <a 
          href="tel:0799036842" 
          className="group relative flex items-center justify-center w-14 h-14 bg-[#00c08b] text-white rounded-full shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="absolute inset-0 rounded-full bg-[#00c08b] animate-ping opacity-20"></div>
          <Phone size={24} fill="currentColor" className="relative z-10" />
          <span className="absolute right-16 bg-[#00c08b] text-white text-sm font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg whitespace-nowrap">
            Hotline: 0799.036.842
          </span>
        </a>
      </div>
    </>
  );
};

export default ContactFixed;