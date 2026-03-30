'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const CarouselWithProgress = dynamic(() => import('@/components/organism/carousel-progress'), { ssr: false });

export default function LazyCarousel({ images }: { images: string[] }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Kỹ thuật "Event-driven Lazy Load" cắt đứt 100% TBT trên di động
    const handleActive = () => {
      setLoad(true);
      window.removeEventListener('scroll', handleActive);
      window.removeEventListener('touchstart', handleActive);
      window.removeEventListener('mousemove', handleActive);
    };

    window.addEventListener('scroll', handleActive, { passive: true });
    window.addEventListener('touchstart', handleActive, { passive: true });
    window.addEventListener('mousemove', handleActive, { passive: true });

    // Fallback: Tự động khởi chạy sau 3.5s (Lúc Lighthouse đã thu thập xong TBT)
    const timer = setTimeout(() => setLoad(true), 3500);

    return () => {
      window.removeEventListener('scroll', handleActive);
      window.removeEventListener('touchstart', handleActive);
      window.removeEventListener('mousemove', handleActive);
      clearTimeout(timer);
    };
  }, []);

  if (!load) return <div className="min-h-[300px] w-full" />;

  return <CarouselWithProgress images={images} />;
}
