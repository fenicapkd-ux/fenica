import { BedDouble, Bath, Square, ArrowRight } from 'lucide-react';

const PropertyGrid = () => {
  const propertyList = [
    {
      id: 1,
      name: "Căn hộ 1 phòng ngủ",
      location: "",
      price: "Liên hệ",
      image: "/images/mat-bang-can-ho-1-phong-ngu-fenica.webp",
      specs: { beds: 1, baths: 1, area: "35m²" }
    },
    {
      id: 2,
      name: "Căn hộ 1 phòng ngủ +1",
      location: "",
      price: "Liên hệ",
      image: "/images/mat-bang-can-ho-1-1-phong-ngu-fenica.webp",
      specs: { beds: 2, baths: 1, area: "55m²" },
      featured: true
    },
    {
      id: 3,
      name: "Căn hộ 2 phòng ngủ",
      location: "",
      price: "Liên hệ",
      image: "/images/mat-bang-can-ho-2-phong-ngu-fenica.webp",
      specs: { beds: 2, baths: 2, area: "75m²" }
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
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