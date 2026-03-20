import Properties from "@/components/organism/properties";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Tiện ích dự án Fenica | Hồ bơi, gym, khu xanh và không gian sống hiện đại",
  description:
    "Khám phá hệ thống tiện ích nội khu dự án Fenica gồm hồ bơi, phòng gym, khu vui chơi trẻ em, khu BBQ, shophouse thương mại và không gian xanh hiện đại tại Dĩ An Bình Dương.",
  path: "/tien-ich",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "tiện ích fenica",
    "tiện ích dự án fenica",
    "hồ bơi fenica",
    "gym fenica",
    "căn hộ fenica bình dương",
    "khu vui chơi fenica",
    "shophouse fenica",
    "tiện ích căn hộ dĩ an"
  ]
});

export default function AboutPage() {
  return (
    <Properties />
  )
}
