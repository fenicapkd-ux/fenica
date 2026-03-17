
const PLANE_ROOM = [
  "/images/mat-bang-can-ho-1-can-goc-phong-ngu-fenica.webp",
  "/images/mat-bang-can-ho-2-phong-ngu-fenica.webp",
  "/images/mat-bang-can-ho-1-1-phong-ngu-fenica.webp",
  "/images/mat-bang-can-ho-1-phong-ngu-fenica.webp",
]



export default function AboutPage() {
  return (
    <>
      <div className="pt-20">

      </div>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-[#c98266e6] font-bold">
            <div className="w-2 h-4 bg-[#c98266e6] rounded-sm" />
            <span className="text-xs uppercase tracking-widest">Căn hộ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Mặt bằng căn hộ
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Cập nhật mới nhất
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {
          PLANE_ROOM.map((esc, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow ">
              <img src={esc} alt="" className="w-full h-full object-cover" />
            </div>
          ))
        }
      </div>
    </>
  )
}
