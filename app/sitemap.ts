import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fenica.xyz";

  const pages = [
    { path: "/", priority: 1, changeFrequency: "daily" as const },

    { path: "/tong-quan", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/vi-tri", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/mat-bang", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/san-pham", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/tien-ich", priority: 0.9, changeFrequency: "weekly" as const },

    { path: "/trinh-chieu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/thu-vien", priority: 0.8, changeFrequency: "weekly" as const },

    { path: "/tai-lieu", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/tin-tuc", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/cau-hoi", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/cong-cu", priority: 0.7, changeFrequency: "monthly" as const },

    { path: "/lien-he", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/dieu-khoan-dich-vu", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/chinh-sach-bao-mat", priority: 0.3, changeFrequency: "yearly" as const }
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));
}