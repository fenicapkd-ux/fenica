'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Tổng quan dự án', href: '/tong-quan' },
  { label: 'Vị trí', href: '/vi-tri' },
  { label: 'Mặt bằng', href: '/mat-bang' },
  { label: 'Tiện ích', href: '/tien-ich' },
  { label: 'Sản phẩm', href: '/san-pham' },
  { label: 'Thư viện', href: '/thu-vien' },
  { label: 'Tài liệu', href: '/tai-lieu' },
  { label: 'Liên hệ', href: '/lien-he' },
]

export default function LuxuryNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 lg:px-16 backdrop-blur-xl text-white">

        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-md">
            <div className="w-4 h-4 border-2 border-white rotate-45" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Fenica
          </span>
        </Link>

        <div className="flex items-center gap-8">

          <a
            href="tel:+84799036842"
            className="hidden md:flex items-center gap-2 text-sm font-medium"
          >
            <Phone size={16} />
            +84 0799 036 842
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            <Menu size={18} />
            Menu
          </button>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-[#c98266]/20 backdrop-blur-2xl transition-all duration-700 ${
          open
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute top-8 right-8 lg:right-16">
          <button
            onClick={() => setOpen(false)}
            className="text-white p-3 rounded-full border border-white/20"
          >
            <X size={24} />
          </button>
        </div>

        <div className="h-full flex flex-col justify-center items-center space-y-8">

          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-3xl md:text-5xl font-bold text-white transition-all duration-700 ${
                open
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}

        </div>
      </div>
    </>
  )
}
