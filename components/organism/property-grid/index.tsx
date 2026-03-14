import { BedDouble, Bath, Square, ArrowRight } from 'lucide-react';

const PropertyGrid = () => {
  const propertyList = [
    {
      id: 1,
      name: "Căn hộ Studio Studio 'Gen Z'",
      location: "Phân khu The Sunrise, Fenica",
      price: "Liên hệ",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      specs: { beds: 1, baths: 1, area: "35m²" }
    },
    {
      id: 2,
      name: "Căn hộ Creative Loft",
      location: "Phân khu Sky Garden, Fenica",
      price: "Liên hệ",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
      specs: { beds: 2, baths: 1, area: "55m²" },
      featured: true
    },
    {
      id: 3,
      name: "Căn hộ Dual Key năng động",
      location: "Phân khu Central Park, Fenica",
      price: "Liên hệ",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      specs: { beds: 2, baths: 2, area: "75m²" }
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <div className="flex justify-center items-center gap-2 text-[#c98266] font-bold">
          <div className="w-2 h-4 bg-[#c98266] rounded-sm" />
          <span className="text-xs uppercase tracking-widest">Sản phẩm hiện có</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Khám phá không gian sống cảm hứng
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Nơi sự tinh tế, phong cách và sự tiện nghi hội tụ, kiến tạo tổ ấm hoàn hảo cho thế hệ trẻ.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {propertyList.map((item) => (
          <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.name}
              />
              {item.featured && (
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#c98266] group-hover:text-white transition-colors cursor-pointer">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#c98266] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">{item.location}</p>
                </div>
                <div className="bg-orange-50 text-[#c98266] px-4 py-2 rounded-xl text-sm font-bold">
                  {item.price}
                </div>
              </div>

              {/* Specs Divider */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                <div className="flex flex-col items-center gap-2">
                  <BedDouble size={18} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">{item.specs.beds} PN</span>
                </div>
                <div className="w-[1px] h-8 bg-slate-100" />
                <div className="flex flex-col items-center gap-2">
                  <Bath size={18} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">{item.specs.baths} WC</span>
                </div>
                <div className="w-[1px] h-8 bg-slate-100" />
                <div className="flex flex-col items-center gap-2">
                  <Square size={16} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">{item.specs.area}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;