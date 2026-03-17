

import PropertyGrid from "@/components/organism/property-grid";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Sản phẩm dự án Fenica | Căn hộ 1PN, 2PN thiết kế tối ưu tại Dĩ An",
  description:
    "Khám phá các sản phẩm tại dự án Fenica gồm căn hộ 1 phòng ngủ, 2 phòng ngủ, thiết kế hiện đại, tối ưu diện tích, phù hợp an cư và đầu tư tại Dĩ An Bình Dương.",
  path: "/san-pham",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "sản phẩm fenica",
    "căn hộ fenica",
    "căn hộ 1pn fenica",
    "căn hộ 2pn fenica",
    "layout fenica",
    "diện tích căn hộ fenica",
    "thiết kế căn hộ fenica",
    "sản phẩm dự án fenica"
  ]
});

export default function AboutPage() {
  return (
    <>
      <PropertyGrid />
    </>
  )
}