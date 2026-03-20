import { generateSEO } from '@/lib/seo';
import Link from 'next/link';

export const metadata = generateSEO({
  title: "Công cụ dự án Fenica | Tính vay mua nhà, diện tích và đầu tư căn hộ",
  description:
    "Sử dụng công cụ dự án Fenica để tính khoản vay mua căn hộ, diện tích sử dụng, dòng tiền đầu tư và hỗ trợ ra quyết định tài chính khi sở hữu căn hộ tại Dĩ An Bình Dương.",
  path: "/cong-cu",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "công cụ fenica",
    "tính vay fenica",
    "tính lãi suất căn hộ fenica",
    "công cụ mua nhà fenica",
    "tính đầu tư fenica",
    "công cụ dự án fenica",
    "tính diện tích căn hộ fenica",
    "calculator fenica"
  ]
});

export default function ToolPage() {
  const tools = [
    {
      title: 'Tìm đường đến dự án Fenica',
      desc: 'Chỉ đường trực tiếp đến dự án bằng bản đồ',
      href: '/cong-cu/tim-duong',
      icon: '📍',
    },
    {
      title: 'Tính lãi vay',
      desc: 'Công cụ tính lãi suất vay mua căn hộ nhanh chóng',
      href: '/cong-cu/tinh-tien-lai',
      icon: '💰',
    },
    {
      title: 'Chuyển tiền',
      desc: 'Công cụ chuyển đổi tiền tệ nhanh chóng',
      href: '/cong-cu/chuyen-tien',
      icon: '💰',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Công cụ hỗ trợ khách hàng
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="text-5xl mb-5">{tool.icon}</div>

              <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-900 transition">
                {tool.title}
              </h2>

              <p className="text-slate-500 mt-3 leading-relaxed">
                {tool.desc}
              </p>

              <div className="mt-6 inline-flex items-center text-blue-900 font-semibold">
                Mở công cụ →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
