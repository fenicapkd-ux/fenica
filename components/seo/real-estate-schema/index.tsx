import { siteConfig } from "@/mock-data/site.data";
import Script from "next/script";

export default function RealEstateSchema() {
  const baseUrl = siteConfig.url;

  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": `${baseUrl}#apartment`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    image: `${baseUrl}${siteConfig.image}`,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country
    },

    numberOfAccommodationUnits: siteConfig.units,
    numberOfBuildings: siteConfig.buildings,

    floorSize: {
      "@type": "QuantitativeValue",
      value: siteConfig.area,
      unitCode: "MTK"
    },

    developer: {
      "@type": "Organization",
      name: siteConfig.developer
    }
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${baseUrl}#listing`,
    name: siteConfig.shortName,
    description: siteConfig.description,
    url: baseUrl,
    image: `${baseUrl}${siteConfig.image}`,

    mainEntity: {
      "@id": `${baseUrl}#apartment`
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      url: baseUrl
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country
    }
  };

  return (
    <>
      <Script
        id="apartment-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(apartmentSchema)
        }}
      />

      <Script
        id="realestate-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateSchema)
        }}
      />
    </>
  );
}
