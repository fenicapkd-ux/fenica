import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")

export interface PostMeta {
  title: string
  description: string
  date: string
  slug: string
  image?: string
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    meta: data as PostMeta,
    content: contentHtml
  }
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  return files.map((file) => {
    const slug = file.replace(".md", "")
    const fullPath = path.join(postsDirectory, file)

    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      ...(data as PostMeta)
      ,slug
    }
  })
}