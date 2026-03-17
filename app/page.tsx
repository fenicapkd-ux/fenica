import Script from 'next/script';
import Hero from '@/components/organism/hero';
import Properties from '@/components/organism/properties';
import Featured from '@/components/organism/featured';
import Cta from '@/components/organism/cta';
import Faq from '@/components/organism/faq';
import Blog from '@/components/organism/blog';
import Testimonials from '@/components/organism/testimonials';
import PropertyGrid from '@/components/organism/property-grid';
import SectionHeader from '@/components/molecules/section-header';
import { fenicaOverview } from '@/mock-data/overview.data';
import ProjectOverview from '@/components/organism/project-overview';
import CarouselWithProgress from '@/components/organism/carousel-progress';
import Link from 'next/link';

const PLANE = [
  "/images/fenica-mat-bang-tang-1.webp",
  "/images/fenica-mat-bang-tang-2.webp",
  "/images/fenica-mat-bang-tang-3-21.webp",
  "/images/fenica-mat-bang-tang-22.webp",
]

const DESIGN_ROOM = [
  "/images/thiet-ke-can-ho-fenica.webp",
  "/images/thiet-ke-can-ho-fenica-1.webp",
  "/images/thiet-ke-can-ho-fenica-2.webp"
]


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
        <Hero />
        <ProjectOverview {...fenicaOverview} />
        <div className='w-full'>
          <img
            src={"/images/ban-do-vi-tri-fenica.webp"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={""}
          />
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

          <Link href="/mat-bang">
            <button className="bg-[#111827] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#c98266e6] transition-all whitespace-nowrap shadow-lg active:scale-95">
              Xem thêm
            </button>
          </Link>
        </div>
        <CarouselWithProgress images={PLANE} />
        <CarouselWithProgress images={DESIGN_ROOM} />
        <Properties />
        <Testimonials />
        <Featured />
        <SectionHeader
          badge="Sản phẩm hiện có"
          title="Khám phá không gian sống cảm hứng"
          description="Nơi sự tinh tế, phong cách và sự tiện nghi hội tụ, kiến tạo tổ ấm hoàn hảo cho thế hệ trẻ."
        />
        <PropertyGrid />
        <Blog />
        <Cta />
        <Faq />
    </div>
  );
}
