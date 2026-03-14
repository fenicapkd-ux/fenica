import { Metadata } from "next"
import ArticleContent from "@/components/organism/article-content"
import { getPost, getAllPosts } from "@/lib/posts"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  return {
    title: post.meta.title,
    description: post.meta.description
  }
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

  return (
   <ArticleContent content={post.content} />
  )
}