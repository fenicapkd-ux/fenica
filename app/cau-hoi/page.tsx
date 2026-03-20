import Faq from "@/components/organism/faq";
import FAQSchema from "@/components/seo/faq-schema";
import { generateSEO } from "@/lib/seo";
import { fenicaFAQs } from "@/mock-data/faq.data";

export const metadata = generateSEO({
  title: "Câu hỏi dự án Fenica | Giải đáp thông tin mua bán, pháp lý và tiện ích",
  description:
    "Tổng hợp câu hỏi thường gặp về dự án Fenica: giá bán, pháp lý, tiến độ xây dựng, tiện ích, chính sách thanh toán và thông tin căn hộ tại Dĩ An Bình Dương.",
  path: "/cau-hoi",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "câu hỏi fenica",
    "faq fenica",
    "giải đáp fenica",
    "giá bán fenica",
    "pháp lý fenica",
    "tiện ích fenica",
    "chính sách thanh toán fenica",
    "dự án fenica hỏi đáp"
  ]
});

export default function AboutPage() {
  return (
    <>
      <Faq classCss="grid grid-cols-1 gap-8" />
      <FAQSchema faqs={fenicaFAQs} />
    </>
  )
}