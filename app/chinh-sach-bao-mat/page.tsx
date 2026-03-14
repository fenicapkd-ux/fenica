import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật | Fenica',
  description:
    'Chính sách bảo mật thông tin khách hàng trên website Fenica, cam kết bảo vệ dữ liệu và quyền riêng tư khi đăng ký tư vấn dự án.',
}

const privacyPolicies = [
  {
    title: '1. Mục đích thu thập thông tin',
    content:
      'Fenica thu thập thông tin khách hàng nhằm phục vụ việc tư vấn dự án, cập nhật chính sách bán hàng, tiến độ xây dựng và hỗ trợ các nhu cầu liên quan.',
  },
  {
    title: '2. Phạm vi thông tin thu thập',
    content:
      'Thông tin có thể bao gồm họ tên, số điện thoại, email và nội dung khách hàng chủ động cung cấp qua biểu mẫu liên hệ.',
  },
  {
    title: '3. Phạm vi sử dụng thông tin',
    content:
      'Thông tin được sử dụng nội bộ cho hoạt động chăm sóc khách hàng, tư vấn sản phẩm và gửi thông báo liên quan đến dự án Fenica.',
  },
  {
    title: '4. Cam kết bảo mật thông tin',
    content:
      'Fenica cam kết không chia sẻ, mua bán hoặc trao đổi dữ liệu khách hàng cho bên thứ ba khi chưa có sự đồng ý hợp pháp.',
  },
  {
    title: '5. Thời gian lưu trữ dữ liệu',
    content:
      'Thông tin khách hàng được lưu trữ trong thời gian cần thiết để phục vụ hoạt động chăm sóc khách hàng hoặc theo quy định pháp luật.',
  },
  {
    title: '6. Quyền của khách hàng',
    content:
      'Khách hàng có quyền yêu cầu kiểm tra, chỉnh sửa hoặc xóa thông tin cá nhân đã cung cấp bất kỳ lúc nào.',
  },
  {
    title: '7. Cookie và công nghệ theo dõi',
    content:
      'Website có thể sử dụng cookie nhằm tối ưu trải nghiệm truy cập, phân tích hành vi người dùng và cải thiện hiệu quả vận hành.',
  },
  {
    title: '8. Điều chỉnh chính sách',
    content:
      'Fenica có thể cập nhật chính sách bảo mật để phù hợp với quy định pháp luật và hoạt động thực tế.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-20 px-6">
      <article className="max-w-4xl mx-auto">

        <header className="mb-14 text-center">
          <p className="uppercase tracking-[0.35em] text-[#c98266] text-sm font-semibold">
            Privacy Policy
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
            Chính sách bảo mật
          </h1>

          <p className="text-slate-500 mt-5 text-lg max-w-2xl mx-auto">
            Cam kết bảo vệ thông tin cá nhân và quyền riêng tư của khách hàng khi sử dụng website Fenica.
          </p>
        </header>

        <section className="space-y-8">
          {privacyPolicies.map((item) => (
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
