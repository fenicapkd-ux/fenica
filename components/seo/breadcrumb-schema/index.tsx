import Script from "next/script";

type BreadcrumbItem = {
  name: string;
  path: string;
};

interface Props {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: Props) {
  const baseUrl = "https://fenica.xyz";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
