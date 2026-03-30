import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Tin tức dự án Fenica | Cập nhật tiến độ, chính sách và thị trường mới nhất",
  description:
    "Tin tức mới nhất về dự án Fenica: cập nhật tiến độ xây dựng, chính sách bán hàng, pháp lý, hạ tầng khu vực và thông tin thị trường căn hộ Dĩ An Bình Dương.",
  path: "/tin-tuc",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "tin tức fenica",
    "dự án fenica mới nhất",
    "tiến độ fenica",
    "chính sách fenica",
    "pháp lý fenica",
    "tin tức căn hộ dĩ an",
    "thị trường bất động sản bình dương",
    "fenica bình dương"
  ]
});

export default function BlogPage() {
  const posts = getAllPosts()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://fenica.xyz/tin-tuc/${post.slug}`,
      "name": post.title
    }))
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="max-w-3xl mx-auto p-6 pt-24 min-h-screen">
      <h1 className="text-4xl font-black mb-8 text-[#c98266]">Tin tức & Sự kiện</h1>

      {posts.map((post) => (
        <div key={post.slug} className="mb-8 border-b border-slate-100 pb-6 hover:translate-x-2 transition-transform duration-300">
          <Link href={`/tin-tuc/${post.slug}`}>
            <h2 className="text-xl font-semibold hover:underline">
              {post.title}
            </h2>
          </Link>

          <p className="text-gray-500 text-sm">{post.date}</p>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}