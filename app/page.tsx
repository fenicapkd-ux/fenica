import type { Metadata } from 'next';
import Script from 'next/script';
import Hero from '@/components/organism/hero';
import Properties from '@/components/organism/properties';
import Featured from '@/components/organism/featured';
import Cta from '@/components/organism/cta';
import Faq from '@/components/organism/faq';
import Blog from '@/components/organism/blog';
import Testimonials from '@/components/organism/testimonials';
import PropertyGrid from '@/components/organism/property-grid';

export const metadata: Metadata = {
  verification: {
    google: "A_wADTxtjGs5_7CTpKnD7fwi7KRyvAxLjnvB4p4EcAI"
  },
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
      <main className='w-full'>
        <Hero />
        <Properties />
        <Testimonials />
        <Featured />
        <PropertyGrid />
        <Blog />
        <Cta />
        <Faq />
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
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: "https://fenica.xyz"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Dự án Fenica",
                item: "https://fenica.xyz/#du-an"
              }
            ]
          })
        }}
      />
      <Script
        id="realestate-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Căn hộ Fenica",
            description:
              "Dự án căn hộ Fenica với thiết kế hiện đại và tiềm năng tăng giá cao.",
            url: "https://fenica.xyz",
            image: "https://fenica.xyz/images/fenica-og.jpg",
            offers: {
              "@type": "Offer",
              priceCurrency: "VND",
              availability: "https://schema.org/InStock"
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "VN"
            }
          })
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Căn hộ Fenica nằm ở đâu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fenica tọa lạc tại vị trí chiến lược với kết nối giao thông thuận tiện."
                }
              },
              {
                "@type": "Question",
                name: "Có nên đầu tư căn hộ Fenica không?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fenica có tiềm năng tăng giá tốt nhờ vị trí và hệ thống tiện ích hiện đại."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
