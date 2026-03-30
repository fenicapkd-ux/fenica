import { generateSEO } from "@/lib/seo";
import dynamic from "next/dynamic";
import Image from "next/image";

import MapboxDirections from "../cong-cu/_components/MapboxDirections";

export const metadata = generateSEO({
  title: "Vị trí dự án Fenica Dĩ An Bình Dương | Kết nối giao thông chiến lược",
  description: "Dự án Fenica tọa lạc mặt tiền Trần Quang Diệu, Tân Bình, Dĩ An, Bình Dương. Kết nối thuận tiện đến Metro, TP Thủ Đức và sân bay Tân Sơn Nhất.",
  path: "/vi-tri",
  image: "/images/ban-do-vi-tri-fenica.webp",
  keywords: ["vị trí fenica", "fenica ở đâu", "địa chỉ fenica", "fenica bình dương", "fenica dĩ an", "đường trần quang diệu dĩ an"]
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className='w-full'>
        <div className='w-full relative h-[600px]'>
          <Image
            src={"/images/ban-do-vi-tri-fenica.webp"}
            className="object-cover"
            alt={"Bản đồ vị trí Fenica Dĩ An"}
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="w-full overflow-hidden">
          <MapboxDirections />
        </div>
        </main>
    </div>
  );
}
