import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerData = {
    newsletter: {
      title: "Cập nhật tin tức mới nhất, khuyến mãi và các ưu đãi độc quyền từ Fenica.",
      placeholder: "Nhập email của bạn",
      button: "Đăng ký",
      note: "Bằng cách đăng ký, bạn đồng ý nhận email quảng cáo của chúng tôi. Bạn có thể hủy đăng ký bất cứ lúc nào."
    },
    cta: {
      heading: "Bắt đầu hành trình tìm kiếm tổ ấm của bạn ngay hôm nay.",
      button: "Liên hệ tư vấn"
    },
    links: [
      {
        title: "Khám phá",
        items: [
          { name: "Trang chủ", href: "/" },
          { name: "Tổng quan", href: "/tong-quang" },
          { name: "Vị trí", href: "/vi-tri" },
          { name: "Mặt bằng", href: "/mat-bang" },
          { name: "Sản phẩm", href: "/san-pham" },
          { name: "Tiện ích", href: "/tien-ich" },
          { name: "Trình chiếu", href: "/trinh-chieu" },
          { name: "Thư viện", href: "/thu-vien" },
          { name: "Liên hệ", href: "/lien-he" }
        ]
      },
      {
        title: "Hỗ trợ",
        items: [
          { name: "Tài liệu", href: "/tai-lieu" },
          { name: "Tin tức dự án", href: "/tin-tuc" },
          { name: "Hỏi đáp (FAQs)", href: "/cau-hoi" },
          { name: "Công cụ miễn phi", href: "/cong-cu" },
          { name: "Trang lỗi 404", href: "/404" }
        ]
      }
    ],
    bottom: {
      copyright: "© 2026 Dự án Fenica. Bảo lưu mọi quyền.",
      links: [
        { name: "Điều khoản dịch vụ", href: "/dieu-khoan-dich-vu" },
        { name: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" }
      ]
    }
  };

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Newsletter & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-gray-800">
          <div className="max-w-md">
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerData.newsletter.title}
            </p>
          </div>

          <div className="flex gap-4">
            <a href="tel:0799036842" className="p-2 border border-gray-800 rounded-full hover:bg-gray-800 transition"><Phone size={18} /></a>
            <a href="/lien-he" className="p-2 border border-gray-800 rounded-full hover:bg-gray-800 transition"><Mail size={18} /></a>
            <a href="https://zalo.me/0799036842" className="p-2 border border-gray-800 rounded-full hover:bg-gray-800 transition"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Middle Section: CTA & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
              {footerData.cta.heading}
            </h2>
            <button className="bg-[#c98266e6] text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-[#c98266] transition-all shadow-lg shadow-emerald-900/20 active:scale-95">
              {footerData.cta.button}
            </button>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {footerData.links.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-gray-500 font-bold text-xs uppercase tracking-widest">{group.title}</h4>
                <ul className="space-y-4">
                  {group.items.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={link.href} className="text-gray-300 hover:text-[#00bfa5] transition-colors font-medium">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-gray-500 font-medium">
          <p>{footerData.bottom.copyright}</p>
          <div className="flex gap-8">
            {footerData.bottom.links.map((link, idx) => (
              <a key={idx} href={link.href} className="hover:text-white transition-colors uppercase tracking-tighter">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;