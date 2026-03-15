import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import ContactFixed from "@/components/molecules/contact-fixed";
import LuxuryNavbar from "@/components/layout/luxury-navbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
<meta name="msvalidate.01" content="EE0EEBD5CFA877BEE3F858484B110AB0" />
export const metadata: Metadata = {
  verification: {
    google: "A_wADTxtjGs5_7CTpKnD7fwi7KRyvAxLjnvB4p4EcAI",
    yandex: "4495102f9cb91013",
    other: {
      'msvalidate.01': 'EE0EEBD5CFA877BEE3F858484B110AB0',
    },
  },
  title: 'Dự Án Căn Hộ fenica – Sống Sang Trọng, Đầu Tư Sinh Lời Bền Vững',
  description:
    'Căn hộ fenica sở hữu vị trí chiến lược, thiết kế tinh tế, tiện ích đẳng cấp, lựa chọn lý tưởng để an cư lâu dài và đầu tư sinh lời bền vững tại thị trường bất động sản đầy tiềm năng.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    'fenica',
    'căn hộ fenica',
    'dự án fenica',
    'căn hộ cao cấp fenica',
    'mua căn hộ fenica',
    'đầu tư căn hộ fenica',
    'bất động sản fenica',
    'căn hộ sang trọng',
    'dự án căn hộ đầu tư'
  ],

  openGraph: {
    title: 'Dự Án Căn Hộ fenica – Sống Sang Trọng, Đầu Tư Sinh Lời',
    description:
      'fenica mang đến không gian sống hiện đại, vị trí chiến lược, tiềm năng tăng giá bền vững cho nhà đầu tư.',
    url: 'https://fenica.xyz',
    siteName: 'fenica',
    images: [
      {
        url: 'https://fenica.xyz/dinh-thap-fenica.jpg',
        width: 1200,
        height: 630,
        alt: 'Căn hộ fenica'
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dự Án Căn Hộ fenica – Sống Sang Trọng',
    description:
      'Không gian sống đẳng cấp – cơ hội đầu tư sinh lời dài hạn.',
    images: ['https://fenica.xyz/dinh-thap-fenica.jpg']
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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LuxuryNavbar />
        {children}
        <ContactFixed />
        <Footer />
      </body>
    </html>
  );
}
