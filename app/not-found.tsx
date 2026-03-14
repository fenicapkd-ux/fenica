import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <section className="text-center max-w-xl">

        <p className="uppercase tracking-[0.35em] text-[#c98266] text-sm font-semibold">
          Error 404
        </p>

        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mt-4">
          Không tìm thấy trang
        </h1>

        <p className="text-slate-500 mt-6 text-lg leading-relaxed">
          Trang bạn đang tìm kiếm có thể đã bị di chuyển, xoá hoặc
          đường dẫn không chính xác.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#c98266] text-white font-semibold hover:opacity-90 transition"
          >
            Về trang chủ
          </Link>

          <Link
            href="/lien-he"
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
          >
            Liên hệ tư vấn
          </Link>

        </div>

      </section>
    </main>
  )
}
