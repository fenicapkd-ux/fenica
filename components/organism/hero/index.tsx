import { Bed, Bath, Car } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    const projectData = {
        name: "Dự án Fenica",
        location: "Trần Quang Diệu, P.Tân Đông Hiệp, TP.HCM",
        title: "Căn hộ dành cho giới trẻ", // Dịch từ Futuristic Haven
        price: "Chỉ từ 36.500.000/m2 VNĐ", // Quy đổi xấp xỉ từ $4.75M
        stats: [
            { icon: <Bed size={20} />, label: "3 Phòng ngủ" },
            { icon: <Bath size={20} />, label: "3 Phòng tắm" },
            { icon: <Car size={20} />, label: "Chỗ đỗ xe định danh" },
        ],
        buttons: {
            contact: "Liên hệ ngay",
            details: "Xem chi tiết"
        },
        footerLabel: "Giá bán dự kiến"
    };

    return (
        <div className="relative min-h-screen w-full bg-[#f1dfd9] overflow-hidden font-sans text-white">
            {/* Background Image/Gradient Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(201, 130, 102, 0.9), transparent), url('/images/goc-nhin-du-an-fenica.webp')`
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 px-8 lg:px-16 pt-20 pb-32">
                <div className="max-w-2xl">
                    <p className="text-lg opacity-90 mb-4">{projectData.location}</p>
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
                        Căn hộ<br /> giới trẻ
                    </h1>

                    <div className="flex gap-4 text-xs md:text-base">
                        <Link href={"/lien-he"}>
                            <button className="bg-white text-black px-4 md:px-8 py-2 md:py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition">
                                Nhận tư vấn
                            </button>
                        </Link>
                        <Link href={"/tong-quan"}>
                            <button className="border border-white/40 backdrop-blur-md px-4 md:px-8 py-2 md:py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition">
                                Xem thêm thông tin
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 right-0 left-0 lg:left-auto lg:w-2/3 bg-white text-black rounded-tl-[40px] p-8 lg:p-12 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {projectData.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start gap-2 border-r border-gray-100 last:border-0">
                            <div className="text-gray-400">{stat.icon}</div>
                            <span className="text-xs font-semibold text-gray-500 uppercase">{stat.label}</span>
                        </div>
                    ))}

                    <div className="col-span-2 md:col-span-1 text-center md:text-left">
                        <div className="text-2xl font-bold">{projectData.price}</div>
                        <div className="text-xs text-gray-400 font-medium">Sắp mở bán</div>
                    </div>
                </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-12 left-16 flex gap-2">
                <div className="w-8 h-1 bg-white rounded-full" />
                <div className="w-2 h-1 bg-white/40 rounded-full" />
                <div className="w-2 h-1 bg-white/40 rounded-full" />
            </div>
        </div>
    );
};

export default Hero;