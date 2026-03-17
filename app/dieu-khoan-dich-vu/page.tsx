import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Điều khoản dịch vụ dự án Fenica | Quy định sử dụng và chính sách thông tin",
  description:
    "Điều khoản dịch vụ dự án Fenica quy định về sử dụng website, tiếp nhận thông tin, chính sách tư vấn, quyền và trách nhiệm của người dùng khi truy cập hệ thống.",
  path: "/dieu-khoan-dich-vu",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "điều khoản dịch vụ fenica",
    "quy định sử dụng fenica",
    "chính sách website fenica",
    "điều khoản dự án fenica",
    "dịch vụ tư vấn fenica",
    "quyền người dùng fenica",
    "fenica policy",
    "điều khoản website fenica"
  ]
});

const terms = [
  {
    title: '1. Giới thiệu chung',
    content:
      'Khi truy cập website Fenica, quý khách đồng ý tuân thủ các điều khoản và điều kiện sử dụng được quy định trên trang này.',
  },
  {
    title: '2. Mục đích cung cấp thông tin',
    content:
      'Website cung cấp thông tin tham khảo về dự án căn hộ Fenica bao gồm tổng quan dự án, mặt bằng, tiến độ xây dựng, chính sách bán hàng và các nội dung liên quan.',
  },
  {
    title: '3. Quyền sở hữu nội dung',
    content:
      'Toàn bộ nội dung trên website bao gồm văn bản, hình ảnh, video, giao diện và tài liệu đều thuộc quyền sở hữu hợp pháp của Fenica hoặc đối tác liên quan.',
  },
  {
    title: '4. Trách nhiệm người sử dụng',
    content:
      'Người dùng cam kết không sử dụng website vào mục đích trái pháp luật, không can thiệp hệ thống hoặc phát tán nội dung gây ảnh hưởng đến hoạt động website.',
  },
  {
    title: '5. Miễn trừ trách nhiệm',
    content:
      'Thông tin trên website có thể thay đổi theo từng giai đoạn triển khai dự án mà không cần báo trước.',
  },
  {
    title: '6. Liên kết bên thứ ba',
    content:
      'Website có thể chứa liên kết đến nền tảng khác và Fenica không chịu trách nhiệm về nội dung của các website bên ngoài.',
  },
  {
    title: '7. Chính sách bảo mật',
    content:
      'Thông tin khách hàng được bảo mật và chỉ sử dụng cho mục đích tư vấn, chăm sóc khách hàng và cập nhật thông tin dự án.',
  },
  {
    title: '8. Thay đổi điều khoản',
    content:
      'Fenica có quyền điều chỉnh điều khoản sử dụng để phù hợp với hoạt động thực tế và quy định pháp luật.',
  },
]

export default function TermsPage() {
  return (
    <main className="bg-white py-20 px-6">
      <article className="max-w-4xl mx-auto">

        <header className="mb-14 text-center">
          <p className="uppercase tracking-[0.35em] text-[#c98266] text-sm font-semibold">
            Legal Information
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
            Điều khoản dịch vụ
          </h1>

          <p className="text-slate-500 mt-5 text-lg max-w-2xl mx-auto">
            Các quy định và điều kiện áp dụng khi truy cập, sử dụng thông tin trên website Fenica.
          </p>
        </header>

        <section className="space-y-8">
          {terms.map((item) => (
            <section
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h2>

              <p className="text-slate-600 leading-8">
                {item.content}
              </p>
            </section>
          ))}
        </section>

      </article>
    </main>
  )
}