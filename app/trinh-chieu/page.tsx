import { generateSEO } from "@/lib/seo";
import EmbedFrame from "./_components/embed-frame";

export const metadata = generateSEO({
  title: "Trình chiếu hình ảnh dự án Fenica",
  description: "Danh sách hình ảnh dự án Fenica.",
  path: "/san-pham",
  image: "/images/ho-boi-fenica.webp",
  keywords: ["hỉnh ảnh fenica", "fenica hỉnh ảnh ", "cảnh quan fenica"]
});

export default function AboutPage() {
  return (
    <EmbedFrame />
  )
}
