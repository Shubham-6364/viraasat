
import React from 'react';
import { FOUNDER_NAME, FOUNDER_EXP } from '../constants';

const Founder: React.FC = () => {
  return (
    <section id="the-founder" className="py-24 px-6 bg-[#02231c] relative overflow-hidden">
      {/* Decorative gold background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#bf953f] fill-current">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 border border-[#bf953f]/30 z-0 group-hover:-inset-6 transition-all duration-500"></div>
          <div className="relative z-10 aspect-[3/4] overflow-hidden royal-border shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt={FOUNDER_NAME} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#bf953f] p-8 hidden md:block">
            <p className="text-[#011612] font-serif text-3xl leading-none">{FOUNDER_EXP}</p>
            <p className="text-[#011612] text-[10px] uppercase tracking-widest mt-2 font-bold">Of Craftsmanship</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <span className="text-[#bf953f] text-xs uppercase tracking-[0.6em]">The Visionary</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-2">{FOUNDER_NAME}</h2>
            <p className="text-[#bf953f]/80 italic tracking-widest">Master Jeweler & Founder</p>
          </div>

          <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg">
            <p>
              "Jewelry is not just about gemstones and precious metals; it is a narrative of heritage, a whisper of royalty, and a legacy that transcends generations."
            </p>
            <p>
              With over a decade of hands-on experience in the vibrant gem bazaars of Jaipur, Apoorv Khandelwal founded Viraasat Gems & Jewels to bridge the gap between ancient royal artistry and contemporary luxury.
            </p>
            <p>
              His philosophy is simple yet profound: every piece of jewelry should be a masterpiece of 'Viraasat'—something worthy of being inherited and cherished for centuries.
            </p>
          </div>

          <div className="pt-6">
            <button className="flex items-center space-x-4 text-[#bf953f] group">
              <span className="h-px w-12 bg-[#bf953f] group-hover:w-20 transition-all duration-500"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Read Full Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
