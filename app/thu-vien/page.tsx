import Link from "next/link";
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
            <button type="button" className="text-fg-brand rounded-2xl border border-brand bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">All categories</button>
            <button type="button" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Shoes</button>
            <button type="button" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Bags</button>
            <button type="button" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Electronics</button>
            <button type="button" className="text-heading rounded-2xl border border-buffer hover:border-default bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">Gaming</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href={"/images/sanh-fenica.webp"} className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </Link>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
            <div className="rounded-xl shadow overflow-hidden">
                <img className="h-auto max-w-full rounded-base" src="/images/sanh-fenica.webp" alt="" />
            </div>
        </div>

    </main>);
}