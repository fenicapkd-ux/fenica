type ApartmentType = {
    name: string
    area: string
}

type ProjectOverviewProps = {
    location: string
    investor: string
    developer: string
    scale: string
    structure: string
    ownership: string
    handover: string
    apartmentTypes: ApartmentType[]
}

export default function ProjectOverview({
    location,
    investor,
    developer,
    scale,
    structure,
    ownership,
    apartmentTypes,
    handover,
}: ProjectOverviewProps) {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className="space-y-6">
                        <div>
                            <p className="uppercase text-sm tracking-[0.3em] text-[#c98266] font-semibold">
                                Tổng quan dự án
                            </p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
                                FENICA
                            </h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-2">
                            {[
                                ['Vị trí', location],
                                ['Chủ đầu tư', investor],
                                ['Đơn vị phát triển', developer],
                                ['Quy mô', scale],
                                ['Sản phẩm', structure],
                                ['Sở hữu', ownership],
                                ['Bàn giao', handover],
                            ].map(([label, value]) => (
                                <li
                                    key={label}
                                    className="p-4 rounded-2xl border-b border-slate-200 hover:shadow-xl transition"
                                >
                                    <span className="block text-sm text-slate-400">{label}</span>
                                    <strong className="block font-semibold text-slate-900 mt-1">
                                        {value}
                                    </strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="/images/goc-nhin-hoan-hon-fenica.webp"
                                alt="Fenica Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="py-4 pt-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                Loại hình căn hộ
                            </h3>

                            <div className="space-y-4">
                                {apartmentTypes.map((item) => (
                                    <div
                                        key={item.name}
                                        className="p-4 rounded-2xl border-b border-slate-200 hover:shadow-xl transition"
                                    >
                                        <span className="font-semibold text-slate-800">
                                            {item.name}
                                        </span>
                                        <span className="text-[#c98266] font-bold">
                                            {item.area}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
