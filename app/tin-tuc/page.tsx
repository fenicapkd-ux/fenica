// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { CalendarIcon, ArrowRight } from "lucide-react";

import { WPPost } from "@/types/wordpress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Tối ưu SEO Meta Data
export const metadata = {
  title: "Tin tức Bất Động Sản | Cập nhật dự án mới nhất",
  description: "Cập nhật thông tin các dự án bất động sản, chung cư, căn hộ tiềm năng với vị trí chiến lược và khả năng sinh lời cao.",
};

// Hàm Fetch Data từ WordPress API
async function getPosts(): Promise<WPPost[]> {
  // Thêm ?_embed để API trả về luôn thông tin Ảnh đại diện và Danh mục
  const res = await fetch(
    "http://batdongsan.atservice.vn/wp-json/wp/v2/posts?_embed&per_page=9",
    {
      next: { revalidate: 3600 }, // Cache dữ liệu trong 1 giờ (ISR)
    }
  );

  if (!res.ok) {
    throw new Error("Không thể tải dữ liệu bài viết");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl pt-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-4">
          Tin Tức Dự Án
        </h1>
        <p className="text-lg text-muted-foreground">
          Cập nhật những thông tin nóng hổi và phân tích chuyên sâu về thị trường bất động sản.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          // Lấy URL ảnh đại diện (nếu có)
          const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder-image.jpg";
          
          // Lấy danh mục đầu tiên (nếu có)
          const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Tin Tức";

          return (
            <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Ảnh Thumbnail */}
              <div className="relative h-60 w-full overflow-hidden bg-muted">
                <Image
                  src={featuredImage}
                  alt={post.title.rendered}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-4 left-4 z-10 bg-primary/90 hover:bg-primary">
                  {category}
                </Badge>
              </div>

              <CardHeader className="flex-none">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })}
                  </time>
                </div>
                {/* WordPress trả về HTML entities, cần dùng dangerouslySetInnerHTML hoặc thư viện parse */}
                <CardTitle className="line-clamp-2 text-xl hover:text-primary transition-colors">
                  <Link href={`/tin-tuc/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                {/* Render Excerpt (đoạn trích) */}
                <div
                  className="text-muted-foreground line-clamp-3 text-sm prose-p:m-0"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </CardContent>

              <CardFooter className="pt-4 border-t">
                <Button asChild variant="ghost" className="w-full justify-between group">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    Xem chi tiết
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
