import CarouselWithProgress from "@/components/organism/carousel-progress";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Mặt bằng dự án Fenica | Layout căn hộ 1PN, 2PN tối ưu công năng",
  description:
    "Cập nhật mặt bằng dự án Fenica với layout căn hộ 1 phòng ngủ, 2 phòng ngủ, bố trí khoa học, tối ưu diện tích sử dụng và phù hợp nhu cầu an cư tại Dĩ An Bình Dương.",
  path: "/mat-bang",
  image: "/images/fenica-mat-bang-tang-2.webp",
  keywords: [
    "mặt bằng fenica",
    "layout fenica",
    "mặt bằng căn hộ fenica",
    "layout căn hộ 1pn fenica",
    "layout căn hộ 2pn fenica",
    "thiết kế mặt bằng fenica",
    "mặt bằng dự án fenica",
    "căn hộ fenica bình dương"
  ]
});

const PLANE_ROOM = [
  "/images/mat-bang-can-ho-1-can-goc-phong-ngu-fenica.webp",
  "/images/mat-bang-can-ho-2-phong-ngu-fenica.webp",
  "/images/mat-bang-can-ho-1-1-phong-ngu-fenica.webp",
  "/images/mat-bang-can-ho-1-phong-ngu-fenica.webp",
]

const PLANE = [
  "/images/fenica-mat-bang-tang-1.webp",
  "/images/fenica-mat-bang-tang-2.webp",
  "/images/fenica-mat-bang-tang-3-21.webp",
  "/images/fenica-mat-bang-tang-22.webp",
]



export default function AboutPage() {
  return (
    <>
      <div className="pt-20">

      </div>
      <div className="px-4 md:px-0 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-[#c98266e6] font-bold">
            <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
            <span className="text-xs uppercase tracking-widest">Tầng điển hình</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Mặt bằng tầng điển hình
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Cập nhật
          </p>
        </div>

        <Link href="/mat-bang/tang-dien-hinh">
          <button className="bg-[#111827] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#c98266e6] transition-all whitespace-nowrap shadow-lg active:scale-95">
            Xem thêm
          </button>
        </Link>
      </div>
      <CarouselWithProgress images={PLANE} />
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-[#c98266e6] font-bold">
            <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
            <span className="text-xs uppercase tracking-widest">Căn hộ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Mặt bằng căn hộ
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Cập nhật
          </p>
        </div>

        <Link href="/mat-bang/can-ho">
          <button className="bg-[#111827] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#c98266e6] transition-all whitespace-nowrap shadow-lg active:scale-95">
            Xem thêm
          </button>
        </Link>
      </div>
      <CarouselWithProgress images={PLANE_ROOM} />
    </>
  )
}
