import { Metadata } from "next"
import ArticleContent from "@/components/organism/article-content"
import { getPost, getAllPosts } from "@/lib/posts"
import { generateSEO } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  return generateSEO({
    title: `${post.meta.title} | Tin Tức Fenica`,
    description: post.meta.description,
    path: `/tin-tuc/${slug}`
  })
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.meta.title,
    "image": [
      post.meta.image || "https://fenica.xyz/images/goc-nhin-hoan-hon-fenica.webp"
    ],
    "datePublished": post.meta.date,
    "author": [{
        "@type": "Organization",
        "name": "Fenica Bình Dương",
        "url": "https://fenica.xyz/"
      }]
  }

  return (
   <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="pt-24 min-h-screen">
      <ArticleContent content={post.content} />
    </div>
   </>
  )
}