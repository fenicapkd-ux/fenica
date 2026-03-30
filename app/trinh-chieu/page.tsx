import { generateSEO } from "@/lib/seo";
import EmbedFrame from "./_components/embed-frame";

export const metadata = generateSEO({
  title: "Trình chiếu hình ảnh dự án Fenica Dĩ An | Video và VR 360",
  description: "Trải nghiệm hình ảnh chân thực, video tiến độ và không gian sống thực tế tại dự án căn hộ Fenica Dĩ An Bình Dương.",
  path: "/trinh-chieu",
  image: "/images/ho-boi-fenica.webp",
  keywords: ["hình ảnh fenica", "fenica hình ảnh", "cảnh quan fenica", "video fenica", "tiến độ fenica dĩ an"]
});

export default function AboutPage() {
  return (
    <EmbedFrame />
  )
}
