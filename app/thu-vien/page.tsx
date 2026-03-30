import Link from "next/link";
import Image from "next/image";
import VideoPopup from "./_component/video-popup";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Thư viện dự án Fenica | Hình ảnh phối cảnh, tiện ích và không gian căn hộ",
  description:
    "Thư viện hình ảnh dự án Fenica cập nhật phối cảnh tổng thể, tiện ích nội khu, thiết kế căn hộ, cảnh quan sống và hình ảnh thực tế mới nhất tại Dĩ An Bình Dương.",
  path: "/thu-vien",
  image: "/images/fenica-goc-nhin-thu-ba.webp",
  keywords: [
    "thư viện fenica",
    "hình ảnh fenica",
    "phối cảnh fenica",
    "ảnh dự án fenica",
    "căn hộ fenica bình dương",
    "thiết kế fenica",
    "hình thực tế fenica",
    "gallery fenica"
  ]
});

export default function DemoOne() {
    return (<main className="min-h-screen overflow-x-hidden w-full flex flex-col items-center justify-center py-20">
        {/* The Component */}
        <VideoPopup />


        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button type="button" aria-pressed="true" className="text-fg-brand rounded-2xl border border-brand bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-[#c98266]/50 rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Tất cả hình ảnh</button>
            <button type="button" aria-pressed="false" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-[#c98266]/50 rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Tổng quan</button>
            <button type="button" aria-pressed="false" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-[#c98266]/50 rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Tiện ích</button>
            <button type="button" aria-pressed="false" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-[#c98266]/50 rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Thiết kế căn hộ</button>
            <button type="button" aria-pressed="false" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-[#c98266]/50 rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Tiến độ thi công</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 w-full max-w-7xl">
            {Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx} className="rounded-xl shadow overflow-hidden relative aspect-video">
                  <Image 
                    className="object-cover" 
                    src="/images/sanh-fenica.webp" 
                    alt={`Thư viện sảnh Fenica ${idx+1}`} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority={idx < 4}
                  />
                </div>
            ))}
        </div>

    </main>);
}