import ContactForm from '@/components/organism/contact-form';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-4 mb-16">
        <div className="flex justify-center items-center gap-2 text-[#c98266e6] font-bold">
          <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
          <span className="text-xs uppercase tracking-widest">Liên hệ</span>
        </div>
        <h2 className="text-5xl font-black text-slate-900 tracking-tight">Sẵn sàng hỗ trợ bạn!</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Bạn đang tìm kiếm tổ ấm mơ ước hay muốn đầu tư? Đội ngũ chuyên gia của Fenica luôn sẵn sàng đồng hành cùng bạn.
        </p>
      </div>

      <div className="overflow-hidden flex flex-col lg:flex-row">
        {/* Thông tin liên hệ bên trái */}
        <div className="lg:w-[40%] bg-[#111827] rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[450px]">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src="/images/goc-nhin-du-an-fenica.webp" className="w-full h-full object-cover" alt="background" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl font-bold">Thông tin liên hệ</h3>
            <p className="text-slate-400">Hỗ trợ 24/7 cho các yêu cầu tham quan nhà mẫu và tư vấn tài chính.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><Phone size={20} className="text-[#c98266e6]" /></div>
                <span className="font-medium">+84 799 036 842</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><Mail size={20} className="text-[#c98266e6]" /></div>
                <span className="font-medium">contact@fenica.xyz</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl"><MapPin size={20} className="text-[#c98266e6]" /></div>
                <span className="font-medium">105 Quốc lộ 13, Phường Hiệp Bình, TP. HCM</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex gap-4">
             <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c98266e6] transition-colors cursor-pointer">f</div>
             <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c98266e6] transition-colors cursor-pointer">in</div>
             <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c98266e6] transition-colors cursor-pointer">t</div>
          </div>
        </div>

        {/* Form liên hệ bên phải */}
        <div className="lg:w-[60%] md:p-10 lg:p-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;