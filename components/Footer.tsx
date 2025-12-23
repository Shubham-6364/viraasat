
import React from 'react';
import { BRAND_NAME, TAGLINE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-[#011612] border-t border-[#bf953f]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl gold-gradient mb-2">{BRAND_NAME}</p>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">{TAGLINE}</p>
        </div>
        
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 space-x-6">
          <a href="#" className="hover:text-[#bf953f] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#bf953f] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#bf953f] transition-colors">Copyright © 2024</a>
        </div>
        
        <div className="flex space-x-4">
          <div className="w-8 h-[1px] bg-[#bf953f]/50 mt-1.5"></div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f]">India | USA | UAE</span>
          <div className="w-8 h-[1px] bg-[#bf953f]/50 mt-1.5"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
