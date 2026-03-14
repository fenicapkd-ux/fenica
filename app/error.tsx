'use client'

import Link from 'next/link'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function ErrorPage({ reset }: ErrorProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <section className="text-center max-w-xl">

        <p className="uppercase tracking-[0.35em] text-[#c98266] text-sm font-semibold">
          Error 500
        </p>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mt-4">
          Hệ thống đang gián đoạn
        </h1>

        <p className="text-slate-500 mt-6 text-lg leading-relaxed">
          Đã xảy ra lỗi trong quá trình xử lý dữ liệu. Vui lòng thử lại sau hoặc quay về trang chính.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-[#c98266] text-white font-semibold hover:opacity-90 transition"
          >
            Thử lại
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
          >
            Về trang chủ
          </Link>

        </div>

      </section>
    </main>
  )
}
