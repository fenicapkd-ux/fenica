"use client"
import { useState } from 'react';
import { LayoutGrid, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
type FaqProp = {
  classCss?: string;
}
const Faq = ({classCss = "grid grid-cols-1 md:grid-cols-2"}: FaqProp) => {
  // Dữ liệu Mock cho Dự án Fenica - Căn hộ giới trẻ
  const faqData = {
    tag: "Hỏi đáp",
    title: "Mọi thứ về Fenica",
    intro: "Chúng tôi hiểu rằng việc mua, bán, hay đầu tư căn hộ lần đầu có thể rất băn khoăn. Dưới đây là những câu hỏi thường gặp để giúp bạn hiểu rõ hơn về Fenica.",
    questions: [
      {
        id: 1,
        question: "Tôi có thể cá nhân hóa căn hộ Fenica của mình không?",
        answer: "Hoàn toàn có thể! Fenica cung cấp các gói 'bàn giao thô' để bạn tự do thiết kế hoặc các gói 'bàn giao cơ bản' với nhiều tùy chọn màu sắc tường, sàn và tủ bếp phù hợp với cá tính của bạn.",
      },
      {
        id: 2,
        question: "Hệ sinh thái tiện ích dành cho người trẻ có gì đặc biệt?",
        answer: "Cực kỳ đặc biệt! Chúng tôi tập trung vào trải nghiệm sống số với: Hub cộng đồng đồng sáng tạo (Co-working space) 24/7, phòng E-sports chuyên nghiệp, phòng Gym tích hợp AI, và hệ thống nhà thông minh (Smart-home) được trang bị sẵn.",
      },
      {
        id: 3,
        question: "Quy trình mua căn hộ Fenica như thế nào?",
        answer: "Quy trình được tối giản hóa cho người trẻ: 1. Đặt chỗ ưu tiên (Booking) online - 2. Nhận tư vấn chi tiết và chọn căn - 3. Ký hợp đồng cọc - 4. Hỗ trợ vay ngân hàng lên tới 70% giá trị - 5. Ký hợp đồng mua bán.",
      },
    ],
    footer: "Khám phá danh mục căn hộ vị trí đắc địa với thiết kế thời thượng, được đo ni đóng giày cho nhu cầu sống của người trẻ năng động.",
  };

  // State để quản lý câu hỏi nào đang được mở
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index : number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans text-slate-800">
      <div className={cn(classCss , "flex-col md:flex-row md:items-start md:gap-16")}>
        {/* Gallery - Lưới ảnh bên trái */}
        <div className="w-full flex flex-col md:flex-row gap-5 mb-10 md:mb-0">
          <div className="w-full md:w-[55%] flex flex-col gap-5">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="/images/finica-goc-nhin-thu-nhat.png" 
                alt="Ngoại thất Fenica" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-square shadow-xl bg-slate-50 relative p-6 flex flex-col justify-end">
              <img 
                src="/images/finica-goc-nhin-thu-hai.png" 
                alt="Chi tiết nội thất Fenica" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent p-6 flex flex-col justify-end">
                <span className="text-white text-xs font-bold uppercase tracking-widest bg-[#c98266] px-3 py-1 rounded-full self-start">Sống Chất</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[45%] rounded-[2rem] overflow-hidden aspect-[2/3] md:h-auto shadow-2xl relative">
            <img 
              src="/images/finica-goc-nhin-thu-ba.png" 
              alt="Co-working space tại Fenica" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-end text-white">
                <h4 className="font-bold text-base leading-tight">cộng đồng thế hệ mới</h4>
                <p className="text-[11px] opacity-80">Gặp gỡ, làm việc, kết nối.</p>
            </div>
          </div>
        </div>

        {/* Content - Phần Hỏi đáp bên phải */}
        <div className="w-full flex-1 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#c98266] font-bold">
              <LayoutGrid size={18} />
              <span className="text-xs uppercase tracking-widest">{faqData.tag}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              {faqData.title}
            </h2>
            
            <p className="text-slate-500 leading-relaxed max-w-lg text-[15px]">
              {faqData.intro}
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4 pt-4">
            {faqData.questions.map((item, index) => (
              <div key={item.id} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition"
                >
                  <span className="text-base font-bold text-slate-800 flex gap-4">
                    <span className="text-[#c98266]/40">{index + 1}.</span>
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#00bfa5]' : ''}`} 
                    size={20} 
                  />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[300px]' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 border-t border-slate-50 text-slate-500 text-sm leading-relaxed pl-[4.5rem]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-lg pt-10">
            {faqData.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;