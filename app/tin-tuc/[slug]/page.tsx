// app/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { CalendarIcon, User } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";

import { WPPost } from "@/types/wordpress";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ slug: string }>;
};

const WP_API_URL = "http://batdongsan.atservice.vn/wp-json/wp/v2";

async function getPost(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
    // next: { revalidate: 3600 },
  });
  const posts: WPPost[] = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function generateStaticParams() {
  const res = await fetch(`${WP_API_URL}/posts?_fields=slug&per_page=50`);
  const posts: { slug: string }[] = await res.json();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Không tìm thấy bài viết" };

  const plainDescription = post.excerpt.rendered.replace(/<[^>]+>/g, "").trim();
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${post.title.rendered} | Tin Tức Bất Động Sản`,
    description: plainDescription,
    openGraph: {
      title: post.title.rendered,
      description: plainDescription,
      url: `http://localhost:3000/${slug}`,
      siteName: "Bất Động Sản",
      images: featuredImage ? [{ url: featuredImage }] : [],
      locale: "vi_VN",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Tin Tức";
  const author = post._embedded?.["author"]?.[0]?.name || "Chuyên gia BĐS";

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* --- HEADER SECTION --- */}
      <header className="container mx-auto px-4 pt-16 pb-10 max-w-4xl text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">
          {category}
        </Badge>
        
        <h1 
          className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.2]"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-slate-500 font-medium text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-slate-700">{author}</span>
          </div>
          <span className="hidden md:inline-block text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })}
            </time>
          </div>
        </div>
      </header>

      {/* --- HERO IMAGE --- */}
      {featuredImage && (
        <div className="container mx-auto px-4 max-w-5xl mb-16">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <Image
              src={featuredImage}
              alt={post.title.rendered.replace(/<[^>]+>/g, "")} // Xóa HTML tag trong alt
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}

      {/* --- CONTENT SECTION (Tối ưu cực mạnh) --- */}
      <div className="container mx-auto px-4">
        {/* max-w-3xl là kích thước hoàn hảo để đọc text (khoảng 65-75 ký tự/dòng) */}
        <div 
          className="
            mx-auto max-w-3xl 
            prose prose-lg md:prose-xl 
            
            /* Tiêu đề chung */
            prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
            
            /* Thẻ H2: Thêm đường gạch dưới tạo điểm nhấn cho từng phần */
            prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3
            
            /* Thẻ H3, H4 */
            prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-xl md:prose-h3:text-2xl
            
            /* Đoạn văn bản (Paragraph) */
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            
            /* Ảnh trong bài viết từ WordPress */
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:mx-auto prose-img:my-10
            prose-figure:mx-auto prose-figure:text-center
            prose-figcaption:text-sm prose-figcaption:text-slate-500 prose-figcaption:mt-3
            
            /* Links */
            prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-800 prose-a:transition-colors
            
            /* Lists (Danh sách) */
            prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-3 prose-ul:my-6
            prose-li:relative prose-li:pl-7 prose-li:text-slate-700
            prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-2 prose-li:before:top-[11px] prose-li:before:w-1.5 prose-li:before:h-1.5 prose-li:before:bg-blue-500 prose-li:before:rounded-full
            
            /* Trích dẫn (Blockquote) */
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-800 prose-blockquote:my-8 prose-blockquote:font-medium
            
            /* In đậm */
            prose-strong:text-slate-900 prose-strong:font-semibold
          "
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.rendered) }}
        />
      </div>
      
      {/* Tùy chọn: Thêm nút chia sẻ hoặc Call to Action ở cuối bài */}
      <div className="container mx-auto px-4 max-w-3xl mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 mb-4">Bạn quan tâm đến dự án này?</p>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
          Nhận bảng giá & Tư vấn miễn phí
        </button>
      </div>
    </article>
  );
}
