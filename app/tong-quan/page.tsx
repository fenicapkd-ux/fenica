import ProjectOverview from "@/components/organism/project-overview";
import { generateSEO } from "@/lib/seo";
import { fenicaOverview } from "@/mock-data/overview.data";

export const metadata = generateSEO({
  title: "Tổng quan dự án Fenica Dĩ An Bình Dương | Vị trí, tiện ích, mặt bằng",
  description:
    "Tổng quan dự án Fenica tại Dĩ An Bình Dương: vị trí chiến lược, quy mô 2 block 22 tầng, tiện ích nội khu hiện đại, mặt bằng căn hộ và tiềm năng đầu tư nổi bật.",
  path: "/tong-quan-du-an",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "tổng quan fenica",
    "dự án fenica dĩ an",
    "fenica bình dương",
    "căn hộ fenica",
    "vị trí fenica",
    "tiện ích fenica",
    "mặt bằng fenica",
    "giá fenica"
  ]
});

export default function AboutPage() {
  return (
    <ProjectOverview {...fenicaOverview} />
  )
}
