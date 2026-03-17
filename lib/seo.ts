export function generateSEO({
  title,
  description,
  path = "",
  image = "/og.jpg",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}) {
  const baseUrl = "https://fenica.xyz";

  // 🔥 auto keyword generation
  const autoKeywords = [
    "dự án fenica",
    "fenica",
    "bất động sản fenica",
    "căn hộ fenica",
    "mua nhà fenica",
    title.toLowerCase(),
    ...description.split(" ").slice(0, 10)
  ];

  const mergedKeywords = [...new Set([...keywords, ...autoKeywords])];

  return {
    title: `${title} | Dự án Fenica`,
    description,

    keywords: mergedKeywords,

    openGraph: {
      title,
      description,
      url: baseUrl + path,
      siteName: "Fenica",
      images: [
        {
          url: baseUrl + image,
          width: 1200,
          height: 630
        }
      ],
      locale: "vi_VN",
      type: "website"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [baseUrl + image]
    },

    alternates: {
      canonical: baseUrl + path
    },

    robots: {
      index: true,
      follow: true
    }
  };
}