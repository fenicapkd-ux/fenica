import ProjectOverview from "@/components/organism/project-overview";
import SectionHeader from "@/components/molecules/section-header";
import { generateSEO } from "@/lib/seo";
import { fenicaOverview } from "@/mock-data/overview.data";
import { 
  MapPin, Building2, ShieldCheck, 
  Map, Bus, Plane, Trophy, 
  CalendarClock, CheckCircle2, Trees
} from "lucide-react";
import Image from "next/image";

export const metadata = generateSEO({
  title: "Tổng quan dự án Fenica Dĩ An Bình Dương | Vị trí, tiện ích, pháp lý và mặt bằng",
  description:
    "Tìm hiểu tổng quan dự án Fenica tại Dĩ An Bình Dương do CĐT Phượng Hoàng và đơn vị phát triển DLR (Dalat Realco) thực hiện. Quy mô 2 block 22 tầng, tiện ích nội khu hiện đại, đầy đủ pháp lý 1/500 và GPXD.",
  path: "/tong-quan",
  image: "/images/ho-boi-fenica.webp",
  keywords: [
    "tổng quan fenica",
    "dự án fenica dĩ an",
    "chủ đầu tư phượng hoàng",
    "dlr",
    "fenica bình dương",
    "căn hộ fenica",
    "pháp lý fenica",
    "vị trí fenica",
    "tiện ích fenica",
    "mặt bằng fenica",
    "giá fenica"
  ]
});

export default function AboutPage() {
  return (
    <div className="bg-zinc-50 pb-20">
      <ProjectOverview {...fenicaOverview} />
      
      {/* VỊ TRÍ & LIÊN KẾT VÙNG */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader 
          badge="Vị trí huyết mạch" 
          title="Tâm Điểm Kết Nối Dĩ An" 
          description="Fenica tọa lạc mặt tiền Trần Quang Diệu, P. Tân Bình, TP. Dĩ An – Nút giao thương sầm uất với hạ tầng đồng bộ bậc nhất khu vực." 
        />
        <div className="grid lg:grid-cols-2 gap-12 mt-12 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 p-8 lg:p-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition">
              <div className="w-12 h-12 bg-orange-100 text-[#c98266] rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Tọa độ vàng giao thương</h3>
                <p className="text-slate-500">Khu dân cư hiện hữu sầm uất, giao thông thuận tiện với lộ giới đường nâng cấp hơn 20m dễ dàng chuyên chở.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition">
              <div className="w-12 h-12 bg-orange-100 text-[#c98266] rounded-full flex items-center justify-center shrink-0">
                <Bus size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Tốc độ kết nối hoàn hảo</h3>
                <ul className="space-y-1 text-slate-500 text-sm">
                  <li>• <strong className="text-slate-700">850m:</strong> Tuyến Metro An Phú (Suối Tiên – Bình Dương).</li>
                  <li>• <strong className="text-slate-700">1 Phút:</strong> Cao tốc Mỹ Phước – Tân Vạn.</li>
                  <li>• <strong className="text-slate-700">15-20 Phút:</strong> TP. Thủ Dầu Một, TP. Thủ Đức, Biên Hòa.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition">
              <div className="w-12 h-12 bg-orange-100 text-[#c98266] rounded-full flex items-center justify-center shrink-0">
                <Plane size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Cửa ngõ hàng không quốc tế</h3>
                <p className="text-slate-500">Di chuyển về TP.HCM & Sân bay Tân Sơn Nhất chỉ 50 phút. Đặc biệt kết nối Sân bay Quốc tế Long Thành chỉ 60 phút.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl relative group h-[400px]">
            <Image 
              src="/images/ban-do-vi-tri-fenica.webp" 
              alt="Bản đồ vị trí Fenica" 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CHỦ ĐẦU TƯ & PHÁP LÝ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            badge="Bảo chứng niềm tin" 
            title="Uy Tín Từ Thương Hiệu & Pháp Lý" 
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-xl transition duration-500">
              <Building2 className="text-[#c98266] w-14 h-14 mb-6" />
              <h3 className="text-2xl font-black text-slate-900 mb-4">Liên Minh Phát Triển Vững Mạnh</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Đầu tư và làm chủ bởi lực lượng giàu tiềm lực <strong>Công Ty TNHH Đầu Tư Dự Án Phượng Hoàng</strong>. Cùng đồng hành phát triển là đơn vị <strong>DLR (Dalat Realco)</strong>.
              </p>
              <div className="p-4 bg-orange-50 rounded-xl text-sm text-slate-700 border border-orange-100">
                <strong className="text-[#c98266] block mb-1">Về Thương Hiệu DLR (Từ Q.1992):</strong>
                Hơn 30 năm kinh nghiệm đảm nhiệm các công trình tầm cỡ: Đại học Đà Lạt, Bảo tàng Lâm Đồng, và dự án khu phức hợp Đồi Antione rộng 114.050m².
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 text-white hover:shadow-2xl transition duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c98266] opacity-10 blur-[80px] rounded-full"></div>
              <ShieldCheck className="text-[#c98266] w-14 h-14 mb-6" />
              <h3 className="text-2xl font-black mb-4">Hành Lang Pháp Lý Hoàn Thiện 100%</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-400 shrink-0 w-6 h-6" />
                  <span><strong>Quy hoạch 1/500:</strong> Phê duyệt QĐ số 237/QĐ-UBND của UBND TP. Dĩ An (Đồ án chung cư Phoenix Apartment).</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-400 shrink-0 w-6 h-6" />
                  <span><strong>Nghĩa vụ tài chính:</strong> Hoàn thành Quyết định phê duyệt số 1896/QĐ-UBND từ UBND Tỉnh Bình Dương.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-400 shrink-0 w-6 h-6" />
                  <span><strong>Giấy phép xây dựng:</strong> Sở hữu GPXD Số 3935/GPXD hợp lệ (cấp bởi Sở Xây Dựng).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SẢN PHẨM & TIỆN ÍCH */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader 
          badge="Quy mô & Tiện ích" 
          title="Không Gian Sống Đỉnh Cao" 
          description="Sở hữu tỷ trọng 85% các căn hộ thông minh diện tích nhỏ cho người trẻ, với mức giá ra mắt không tưởng, đi kèm khối tiện ích nghỉ dưỡng 2 tầng." 
        />
        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Căn hộ 1PN (39.3 - 48.0m²)</p>
                <p className="text-2xl font-black text-slate-900">39 Căn</p>
              </div>
              <div className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600">6.74%</div>
            </div>
            
            <div className="bg-[#111827] text-white p-6 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c98266]/20 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-sm text-orange-200 font-semibold mb-1 flex items-center gap-2">Căn hộ 1PN + 1 (45.0 - 50.4m²) <Trophy size={14} /></p>
                <p className="text-3xl font-black">462 Căn</p>
              </div>
              <div className="relative z-10 px-3 py-1 bg-[#c98266] rounded text-xs font-bold text-white shadow">79.79%</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Căn hộ 2PN (60.0 - 66.3m²)</p>
                <p className="text-2xl font-black text-slate-900">77 Căn</p>
              </div>
              <div className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600">13.30%</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between opacity-80">
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Căn hộ 3PN Độc bản</p>
                <p className="text-xl font-bold text-slate-900">Phiên bản giới hạn</p>
              </div>
              <div className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600">Tầng 22</div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm font-semibold mb-2">Giá bán dự kiến chỉ từ</p>
              <p className="text-4xl font-black text-red-600">1.3 Tỷ / Căn</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 overflow-hidden relative">
            <Trees className="absolute bottom-[-20px] right-[-20px] w-64 h-64 text-slate-50 opacity-50 rotate-12 pointer-events-none" />
            <h3 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">Hệ sinh thái tiện ích nội khu (2 Tầng)</h3>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#c98266] mb-4">
                  <span className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-xs">1</span>
                  Khu vực Tầng Trệt
                </h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" /> Khối đế Thương mại Shop House</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" /> Khu nhà trẻ chuẩn mực</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" /> Công viên cảnh quan nội khu</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" /> Khu BBQ ngoài trời</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" /> Biểu tượng Tụ Hương Đài</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#c98266] mb-4">
                  <span className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-xs">2</span>
                  Khu vực Tầng 2
                </h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#c98266] shrink-0 mt-0.5" /> Hồ bơi thư giãn đẳng cấp</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#c98266] shrink-0 mt-0.5" /> Khu phòng Gym & Yoga</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#c98266] shrink-0 mt-0.5" /> Khu sinh hoạt cộng đồng</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#c98266] shrink-0 mt-0.5" /> Kidzones vui chơi sáng tạo</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#c98266] shrink-0 mt-0.5" /> Livestream room (Xu hướng trẻ)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LỘ TRÌNH TRIỂN KHAI */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            badge="Khởi nguồn tâm điểm" 
            title="Lộ Trình Triển Khai 2025" 
          />
          <div className="mt-16 mx-auto relative px-4">
            {/* Thanh trục dọc */}
            <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {[
                { time: "Tháng 8", title: "Khai Trương Văn Phòng", desc: "Chính thức đi vào hoạt động văn phòng đại lý NK Properties.", align: "left" },
                { time: "Tháng 9 (17/09)", title: "Sự Kiện Họp Đại Lý", desc: "Tập hợp các đại lý chiến lược chuẩn bị cho kế hoạch mở bán.", align: "right" },
                { time: "Tháng 10 (10/10)", title: "Lễ Ký Kết Chiến Lược", desc: "Ký kết hợp tác chiến lược toàn diện cùng các đơn vị đối tác.", align: "left" },
                { time: "Tháng 11", title: "Khai Trương Nhà Mẫu", desc: "Mở cửa đón khách trải nghiệm chân thực không gian sống tại dự án.", align: "right" },
                { time: "Tháng 12", title: "Ra Mắt Dự Án Chính Thức", desc: "Sự kiện công bố sản phẩm, kick-off thị trường dịp cuối năm lịch sử.", align: "left", highlight: true },
              ].map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* Item Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${step.align === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`p-6 bg-white rounded-2xl border ${step.highlight ? 'border-[#c98266] shadow-xl shadow-orange-100' : 'border-slate-100 hover:shadow-lg hover:border-slate-200'} transition duration-300 relative`}>
                      <span className="text-[#c98266] font-bold text-sm mb-2 block flex items-center gap-2 justify-start md:justify-start">
                        <CalendarClock size={16} /> {step.time}
                      </span>
                      <h4 className="text-xl font-black text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Bullet */}
                  <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#c98266] shadow-[0_0_0_4px_white,0_0_15px_rgba(201,130,102,0.5)] z-10 group-hover:scale-150 group-hover:bg-[#c98266] transition-all duration-300"></div>
                  
                  {/* Empty Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

