import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import ContactFixed from "@/components/molecules/contact-fixed";
import LuxuryNavbar from "@/components/layout/luxury-navbar";
import ContactSection from "@/components/layout/contact";
import { Toaster } from '@/components/ui/sonner';
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { pages } from "@/mock-data/breadcrumb.data";
import RealEstateSchema from "@/components/seo/real-estate-schema";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "A_wADTxtjGs5_7CTpKnD7fwi7KRyvAxLjnvB4p4EcAI",
    yandex: "4495102f9cb91013",
    other: {
      'msvalidate.01': 'EE0EEBD5CFA877BEE3F858484B110AB0',
    },
  },
  title: 'Dự Án Căn Hộ Fenica Dĩ An Bình Dương – Chủ Đầu Tư Phượng Hoàng',
  description:
    'Dự án căn hộ Fenica tại Dĩ An, Bình Dương. Quy mô 5.537 m², 2 block 22 tầng do Chủ đầu tư Phượng Hoàng và DLR phát triển. Giá bán chỉ từ 1.3 tỷ/căn.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    'fenica',
    'căn hộ fenica',
    'dự án fenica',
    'fenica dĩ an',
    'fenica bình dương',
    'phượng hoàng',
    'dự án phượng hoàng dĩ an',
    'dlr',
    'mua căn hộ fenica',
    'đầu tư căn hộ fenica'
  ],

  openGraph: {
    title: 'Dự Án Căn Hộ Fenica Dĩ An Bình Dương – CĐT Phượng Hoàng',
    description:
      'Dự án căn hộ Fenica sở hữu vị trí chiến lược tại TP. Dĩ An. Quy mô 5.537m², 579 căn hộ thiết kế cao cấp.',
    url: 'https://fenica.xyz',
    siteName: 'Fenica',
    images: [
      {
        url: 'https://fenica.xyz/dinh-thap-fenica.webp',
        width: 1200,
        height: 630,
        alt: 'Quy mô dự án căn hộ Fenica Bình Dương'
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dự Án Căn Hộ Fenica Dĩ An Bình Dương',
    description:
      'Sống đẳng cấp và đầu tư sinh lời cùng Fenica Bình Dương.',
    images: ['https://fenica.xyz/dinh-thap-fenica.webp']
  },

  alternates: {
    canonical: 'https://fenica.xyz/'
  },

  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LuxuryNavbar />
        <main className="bg-zinc-50">
          {children}
          <ContactFixed />
          <ContactSection />
          <Footer />
          <Toaster />
          <BreadcrumbSchema items={pages} />
          <RealEstateSchema />
        </main >
      </body >
    </html >
  );
}
