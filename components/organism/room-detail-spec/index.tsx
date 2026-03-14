import { Waves, Cpu, Zap, Layout, ShieldCheck, Sun, Wind, Beer } from 'lucide-react';
import { div } from 'motion/react-client';

const RoomDetailSpecs = () => {
  const features = [
    { icon: <Waves size={24} />, title: "Hồ bơi riêng biệt", desc: "Tận hưởng làn nước mát lành với bể bơi vô cực ngay tại ban công." },
    { icon: <Cpu size={24} />, title: "Smart-home 5.0", desc: "Điều khiển hệ thống đèn, điều hòa và an ninh qua smartphone." },
    { icon: <Zap size={24} />, title: "Năng lượng xanh", desc: "Tích hợp hệ thống điện mặt trời giúp tiết kiệm 30% chi phí vận hành." }
  ];

  const offerings = [
    { icon: <Layout size={20} />, text: "Không gian mở (Open-concept)" },
    { icon: <Cpu size={20} />, text: "Tích hợp nhà thông minh" },
    { icon: <Zap size={20} />, text: "Tiết kiệm năng lượng" },
    { icon: <Sun size={20} />, text: "Ánh sáng tự nhiên tối đa" },
    { icon: <ShieldCheck size={20} />, text: "Hệ thống an ninh 3 lớp" },
    { icon: <Beer size={20} />, text: "Khu vực Sky Bar năng động" }
  ];

  return (
    <div className='mx-auto py-24 max-w-7xl grid grid-cols-3'>
      <div className="col-span-2">
        {/* Property Details Header */}
        <div className="border-b border-slate-100 pb-12 mb-12">
          <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Chi tiết căn hộ</h3>
          <div className="space-y-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="p-4 bg-slate-50 rounded-2xl text-[#c98266e6] shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed max-w-md">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Text */}
        <div className="space-y-8 text-slate-500 leading-loose text-lg mb-20">
          <p>
            Nằm tại trái tim của TP. Thủ Đức, căn hộ <span className="text-slate-900 font-bold">Fenica Creative Loft</span>
            mang đến sự kết hợp hoàn hảo giữa nét kiến trúc tối giản và công nghệ thông minh.
            Với mức giá chỉ từ <span className="text-[#00bfa5] font-black">2,45 tỷ VNĐ</span>, không gian sống rộng 55m² này
            được thiết kế dành riêng cho những bạn trẻ đang tìm kiếm một tổ ấm cá tính và hiện đại.
          </p>
          <p>
            Bước vào bên trong, bạn sẽ được chào đón bởi thiết kế không gian mở, kết nối liền mạch giữa phòng khách,
            khu vực làm việc và bếp. Hệ thống cửa kính kịch trần mang lại tầm nhìn panorama đắt giá,
            giúp căn hộ luôn tràn ngập ánh sáng tự nhiên và gió trời.
          </p>
        </div>

        {/* What this property offers */}
        <div className="pt-12 border-t border-slate-100">
          <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Tiện ích đặc quyền tại Fenica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {offerings.map((offer, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <div className="text-slate-300 group-hover:text-[#00bfa5] transition-colors">
                  {offer.icon}
                </div>
                <span className="font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  {offer.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-8 min-h-screen font-sans">

        {/* Pricing Card */}
        <div className="relative overflow-hidden bg-[#c98266e6]/10 rounded-3xl p-8 max-w-md shadow-sm">
          {/* Geometric Background Element */}
          <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-[#c98266e6]/80 -mr-8 -mt-8 rotate-45"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
              1.650.500.000 ₫
            </h2>
            <p className="text-gray-500 mt-1 text-sm">Giá ưu đãi đặc biệt</p>

            <button className="mt-8 w-full bg-[#c98266] hover:bg-[#c98266e6] text-white font-semibold py-4 rounded-full transition-colors duration-200">
              Liên hệ ngay
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="p-8 max-w-md">
          {/* House Icon */}
          <div className="mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c98266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            "Mình đã tìm thấy căn hộ trong mơ tại **Fenica** cực nhanh!
            Thông tin minh bạch, hình ảnh thực tế và quy trình cực kỳ chuyên nghiệp.
            Đội ngũ hỗ trợ rất nhiệt tình, giải đáp mọi thắc mắc của mình.
            Chắc chắn mình sẽ giới thiệu bạn bè qua đây!"
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Khách hàng"
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Gia đình Minh Anh</h4>
              <p className="text-gray-400 text-sm">Cư dân tại Fenica</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomDetailSpecs;