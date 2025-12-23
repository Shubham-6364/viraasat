
import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#011612]/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col items-center group cursor-pointer">
          <span className={`font-serif text-2xl tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'gold-gradient' : 'text-white'}`}>
            {BRAND_NAME.split(' ')[0]}
          </span>
          <div className="h-[1px] w-0 group-hover:w-full bg-[#bf953f] transition-all duration-500 mt-1"></div>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-60">Gems & Jewels</span>
        </div>

        <div className="hidden md:flex space-x-12">
          {['Collections', 'Heritage', 'The Founder', 'Bespoke'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-xs uppercase tracking-[0.2em] hover:text-[#bf953f] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="px-6 py-2 border border-[#bf953f] text-[#bf953f] text-[10px] uppercase tracking-[0.2em] hover:bg-[#bf953f] hover:text-[#011612] transition-all duration-300">
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
