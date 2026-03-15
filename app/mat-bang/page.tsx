import CarouselWithProgress from "@/components/organism/carousel-progress";
import Link from "next/link";

const PLANE_ROOM = [
  "/images/mat-bang-can-ho-1-can-goc-phong-ngu-fenica.jpg",
  "/images/mat-bang-can-ho-2-phong-ngu-fenica.jpg",
  "/images/mat-bang-can-ho-1-1-phong-ngu-fenica.jpg",
  "/images/mat-bang-can-ho-1-phong-ngu-fenica.jpg",
]

const PLANE = [
  "/images/fenica-mat-bang-tang-1.jpg",
  "/images/fenica-mat-bang-tang-2.jpg",
  "/images/fenica-mat-bang-tang-3-21.jpg",
  "/images/fenica-mat-bang-tang-22.jpg",
]



export default function AboutPage() {
  return (
    <main>
      <div className="pt-20">

      </div>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-[#c98266e6] font-bold">
            <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
            <span className="text-xs uppercase tracking-widest">Tầng điển hình</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
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
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
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
    </main>
  )
}
