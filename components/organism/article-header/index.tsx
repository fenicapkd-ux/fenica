type Props = {
  title: string
  description: string
  author: string
  date: string
  image: string
}

export default function ArticleHeader({
  title,
  description,
  author,
  date,
  image
}: Props) {
  return (
    <header className="max-w-4xl mx-auto mb-10">

      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-gray-500 mb-6">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span>{author}</span>
        <span>•</span>
        <span>{date}</span>
      </div>

      <img
        src={image}
        alt={title}
        className="rounded-xl w-full"
      />
    </header>
  )
}