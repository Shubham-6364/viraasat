
import React from 'react';
import { JEWELRY_COLLECTION } from '../constants';
import { JewelryItem } from '../types';

const JewelryCard: React.FC<{ item: JewelryItem }> = ({ item }) => {
  return (
    <div className="group relative overflow-hidden bg-[#02231c] royal-border rounded-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(191,149,63,0.3)]">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#011612] via-transparent to-transparent opacity-60"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[#bf953f] text-[10px] uppercase tracking-[0.4em] mb-2">{item.category}</p>
        <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
        <p className="text-white/60 text-xs font-light line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {item.description}
        </p>
        <button className="text-xs text-[#bf953f] uppercase tracking-widest border-b border-[#bf953f]/30 pb-1 hover:border-[#bf953f] transition-all">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

const Collection: React.FC = () => {
  return (
    <section id="collections" className="py-24 px-6 bg-[#011612]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#bf953f] text-xs uppercase tracking-[0.8em]">Signature Pieces</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6">The Royal Gallery</h2>
          <div className="h-[1px] w-24 gold-bg mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {JEWELRY_COLLECTION.map((item) => (
            <JewelryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 royal-border text-[#bf953f] font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#bf953f] hover:text-[#011612] transition-all duration-500 group">
            View All Collections
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
