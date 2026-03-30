const PLANE = [
  "/images/fenica-mat-bang-tang-1.webp",
  "/images/fenica-mat-bang-tang-2.webp",
  "/images/fenica-mat-bang-tang-3-21.webp",
  "/images/fenica-mat-bang-tang-22.webp",
]

import Image from "next/image"

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
            Cập nhật mới nhất
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {
          PLANE.map((esc, idx) => (
            <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow border border-slate-100">
              <Image 
                src={esc} 
                alt={`Mặt bằng tầng ${idx+1}`} 
                fill
                priority={idx < 2}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
          ))
        }
      </div>
    </>
  )
}
