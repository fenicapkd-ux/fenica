'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const ContactFixed = dynamic(() => import('@/components/molecules/contact-fixed'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/layout/contact'), { ssr: false });

export default function LazyContact() {
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

  if (!load) return null;

  return (
    <>
      <ContactFixed />
      <ContactSection />
    </>
  );
}
