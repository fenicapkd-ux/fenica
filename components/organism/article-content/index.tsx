type Props = {
  content: string
}

export default function ArticleContent({ content }: Props) {
  return (
    <article
      className="
      max-w-3xl mx-auto
      text-gray-700
      leading-8
      text-lg
      "
    >
      <div
        className="
        prose
        prose-lg
        prose-neutral
        max-w-none

        prose-h1:text-4xl
        prose-h1:font-bold
        prose-h1:mb-4

        prose-h2:text-2xl
        prose-h2:mt-12
        prose-h2:mb-4

        prose-h3:text-xl
        prose-h3:mt-8

        prose-p:text-gray-600
        prose-p:leading-relaxed

        prose-a:text-green-600
        prose-a:no-underline
        hover:prose-a:underline

        prose-img:rounded-xl
        prose-img:shadow-md

        prose-blockquote:border-l-4
        prose-blockquote:border-green-500
        prose-blockquote:bg-green-50
        prose-blockquote:p-4
        prose-blockquote:rounded-md
        prose-blockquote:text-gray-700

        prose-ul:list-disc
        prose-ul:ml-6

        prose-ol:list-decimal
        prose-ol:ml-6
        "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}