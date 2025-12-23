
import React from 'react';
import { TAGLINE, BRAND_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1610492103183-9111abc341b1?auto=format&fit=crop&q=80&w=1920')`,
          filter: 'brightness(0.35)'
        }}
      ></div>
      
      {/* Visual Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011612]/80 via-transparent to-[#011612] z-1"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl animate-fadeIn">
        <p className="text-[#bf953f] text-xs uppercase tracking-[0.6em] mb-6 animate-slideUp">
          Established in the heart of Jaipur
        </p>
        <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-slideUp delay-100 whitespace-nowrap">
          <span className="gold-gradient">{BRAND_NAME}</span>
        </h1>
        <div className="h-px w-24 bg-[#bf953f] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl font-light italic text-white/80 tracking-widest mb-12 max-w-2xl mx-auto">
          "{TAGLINE}"
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="gold-bg text-[#011612] px-10 py-4 font-bold uppercase tracking-[0.3em] text-xs hover:scale-105 transition-transform shadow-xl">
            Explore Masterpieces
          </button>
          <button className="border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-[0.3em] text-xs hover:bg-white/10 transition-all">
            Private Viewing
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.4em] mb-2">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#bf953f] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
