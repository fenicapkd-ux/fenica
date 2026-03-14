import React from 'react';
import { Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const RoomIntro = () => {
  const roomData = {
    title: "Không gian sống hiện đại",
    description: "Mỗi căn hộ tại Fenica được thiết kế với phong cách tối giản nhưng đầy đủ tiện nghi, tối ưu hóa ánh sáng tự nhiên và luồng không khí, mang lại cảm giác thư thái tuyệt đối cho chủ nhân trẻ.",
    mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    subImages: [
      {
        id: 1,
        title: "Phòng khách tối giản",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Phòng ngủ ấm cúng",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Phòng tắm hiện đại",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop"
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto py-12 bg-white">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {roomData.title}
          </h2>
        </div>
        
        <div className="flex gap-8 text-slate-600 font-bold px-8 py-4">
          <div className="flex items-center gap-2 border-r border-slate-200 pr-8">
            <Bed size={18} className="text-[#c98266e6]" />
            <span className="text-sm">3 Phòng ngủ</span>
          </div>
          <div className="flex items-center gap-2 border-r border-slate-200 pr-8">
            <Bath size={18} className="text-[#c98266e6]" />
            <span className="text-sm">4 Phòng tắm</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={16} className="text-[#c98266e6]" />
            <span className="text-sm">180m²</span>
          </div>
        </div>
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
        {/* Main Big Image - Left */}
        <div className="lg:col-span-8 rounded-[3rem] overflow-hidden relative group shadow-lg">
          <img 
            src={roomData.mainImage} 
            alt="Main Room" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-12">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#c98266e6] mb-4 shadow-lg">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Column of 3 Sub Images - Right */}
        <div className="lg:col-span-4 flex flex-col gap-6">
            <div className='grid grid-cols-2 gap-y-8 gap-x-4'>

          {roomData.subImages.map((sub, idx) => (
            <div key={sub.id} className={cn("flex-1 rounded-[2rem] overflow-hidden relative group shadow-md min-h-[45vh]", idx === 0 ? "col-span-2" : "")}>
              <img 
                src={sub.image} 
                alt={sub.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold text-sm uppercase tracking-widest">{sub.title}</span>
              </div>
            </div>
          ))}
          
            </div>
        </div>
      </div>
    </section>
  );
};

export default RoomIntro;