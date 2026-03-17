export const breadcrumbMap: Record<string, string> = {
  "/": "Trang chủ",
  "/tong-quan": "Tổng quan",
  "/vi-tri": "Vị trí",
  "/mat-bang": "Mặt bằng",
  "/san-pham": "Sản phẩm",
  "/tien-ich": "Tiện ích",
  "/trinh-chieu": "Trình chiếu",
  "/thu-vien": "Thư viện",
  "/tai-lieu": "Tài liệu",
  "/tin-tuc": "Tin tức",
  "/cau-hoi": "Hỏi đáp",
  "/cong-cu": "Công cụ",
  "/lien-he": "Liên hệ",
  "/dieu-khoan-dich-vu": "Điều khoản dịch vụ",
  "/chinh-sach-bao-mat": "Chính sách bảo mật"
};

export const pages = [
    { path: "/", name: "Trang chủ", priority: 1, changeFrequency: "daily" as const },

    { path: "/tong-quan", name: "Tổng quan", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/vi-tri", name: "Vị trí", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/mat-bang", name: "Mặt bằng", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/san-pham", name: "Sản phẩm", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/tien-ich", name: "Tiện ích", priority: 0.9, changeFrequency: "weekly" as const },

    { path: "/trinh-chieu", name: "Trình chiếu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/thu-vien", name: "Thư viện", priority: 0.8, changeFrequency: "weekly" as const },

    { path: "/tai-lieu", name: "Tài liệu", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/tin-tuc", name: "Tin tức", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/cau-hoi", name: "Câu hỏi giải đáp", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/cong-cu", name: "Công cụ", priority: 0.7, changeFrequency: "monthly" as const },

    { path: "/lien-he", name: "Liên hệ", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/dieu-khoan-dich-vu", name: "Điều khoản dịch vụ", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/chinh-sach-bao-mat", name: "Chính sách bảo mật", priority: 0.3, changeFrequency: "yearly" as const }
  ];