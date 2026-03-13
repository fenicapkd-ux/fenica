import type { Metadata } from 'next';
import Script from 'next/script';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Dự Án Căn Hộ fenica – Sống Sang Trọng, Đầu Tư Sinh Lời Bền Vững',
  description:
    'Căn hộ fenica sở hữu vị trí chiến lược, thiết kế tinh tế, tiện ích đẳng cấp, lựa chọn lý tưởng để an cư lâu dài và đầu tư sinh lời bền vững tại thị trường bất động sản đầy tiềm năng.',

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
        url: 'https://fenica.xyz/images/fenica-og.jpg',
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
    images: ['https://fenica.xyz/images/fenica-og.jpg']
  },

  alternates: {
    canonical: 'https://fenica.xyz/'
  },

  robots: {
    index: true,
    follow: true
  }
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
      <Script
        id="fenica-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ApartmentComplex',
            name: 'fenica',
            description:
              'Dự án căn hộ fenica sở hữu vị trí chiến lược, thiết kế tinh tế, phù hợp an cư và đầu tư sinh lời.',
            url: 'https://yourdomain.com/fenica',
            image: 'https://yourdomain.com/images/fenica-og.jpg',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'VN'
            }
          })
        }}
      />
    </div>
  );
}
