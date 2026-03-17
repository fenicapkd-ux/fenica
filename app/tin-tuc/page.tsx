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

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tin tức</h1>

      {posts.map((post) => (
        <div key={post.slug} className="mb-6 border-b pb-4">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-semibold hover:underline">
              {post.title}
            </h2>
          </Link>

          <p className="text-gray-500 text-sm">{post.date}</p>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}