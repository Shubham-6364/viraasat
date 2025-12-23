
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RoyalConcierge from './components/RoyalConcierge';

const App: React.FC = () => {
  useEffect(() => {
    // Custom cursor or entrance animations could go here
    document.title = "Viraasat Gems & Jewels | Preserving Royal Craftsmanship";
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#bf953f] selection:text-[#011612]">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="bg-[#011612] py-20 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center px-6">
            <svg className="w-12 h-12 text-[#bf953f] mx-auto mb-8 opacity-40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <h2 className="font-serif text-2xl md:text-3xl italic text-white/80 leading-relaxed">
              "Every gemstone carries a soul, and every design at Viraasat is crafted to honor the spirit of Jaipur's majestic history."
            </h2>
          </div>
        </div>

        <Collection />
        <Founder />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <RoyalConcierge />
    </div>
  );
};

export default App;
