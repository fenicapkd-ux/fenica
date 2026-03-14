type SectionHeaderProps = {
  badge?: string
  title: string
  description?: string
}

export default function SectionHeader({
  badge = 'Sản phẩm hiện có',
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center space-y-4 mb-16">
      <div className="flex justify-center items-center gap-2 text-[#c98266] font-bold">
        <div className="w-2 h-4 bg-[#c98266] rounded-sm" />
        <span className="text-xs uppercase tracking-widest">{badge}</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}