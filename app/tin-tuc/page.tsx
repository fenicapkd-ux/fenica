import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

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