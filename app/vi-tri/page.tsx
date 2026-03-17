import { generateSEO } from "@/lib/seo";
import MapboxDirections from "../cong-cu/_components/MapboxDirections";

export const metadata = generateSEO({
  title: "Vị trí dự án Fenica",
  description: "Vị trí chiến lược của dự án Fenica, kết nối trung tâm và tiện ích xung quanh.",
  path: "/vi-tri",
  image: "/images/ban-do-vi-tri-fenica.webp",
  keywords: ["vị trí fenica", "fenica ở đâu", "địa chỉ fenica"]
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className='w-full'>
        <div className='w-full'>
          <img
            src={"/images/ban-do-vi-tri-fenica.webp"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={""}
          />
        </div>
        <div className="w-full overflow-hidden">
          <MapboxDirections />
        </div>
        </main>
    </div>
  );
}
