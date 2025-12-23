
import React from 'react';

const REVIEWS = [
  {
    id: 1,
    name: "Radhika Goenka",
    location: "Mumbai",
    text: "The Rajwari Choker I commissioned for my wedding was not just jewelry; it was a piece of art. Apoorv's personal attention to the Meenakari detailing made me feel truly royal.",
    title: "Bridal Client"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "I was hesitant to order heritage jewelry from abroad, but the video consultations were flawless. The emerald strings are now my most deeper treasured heirloom.",
    title: "International Collector"
  },
  {
    id: 3,
    name: "Mrs. Shekhawat",
    location: "Jaipur",
    text: "My family has bought from the Khandelwal lineage for decades. Viraasat continues that legacy of pure gold and honest craftsmanship. Exceptional.",
    title: "Patron for 15+ Years"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#02231c] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bf953f]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#bf953f] text-xs uppercase tracking-[0.6em]">Royal Patronage</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4 mb-6 text-white">Voices of Legacy</h2>
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-[#bf953f]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-[#011612] p-10 border border-[#bf953f]/20 relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-6 left-6 text-[#bf953f]/20 font-serif text-8xl leading-none font-black select-none">"</div>
              
              <div className="relative z-10 pt-8">
                <p className="font-serif text-lg text-white/90 italic leading-relaxed mb-8">
                  {review.text}
                </p>
                
                <div className="flex items-center gap-4 border-t border-[#bf953f]/20 pt-6">
                  <div>
                    <h4 className="text-[#bf953f] font-serif text-lg">{review.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{review.title} | {review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High CTA Section */}
        <div className="bg-gradient-to-r from-[#bf953f] to-[#aa771c] p-[1px]">
          <div className="bg-[#011612] py-16 px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Begin Your Royal Journey</h3>
              <p className="text-white/70 mb-8 font-light tracking-wide">
                Join our distinguished list of patrons. Whether it is a bridal set or a bespoke investment piece, excellence awaits.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a 
                  href="#bespoke" 
                  className="bg-[#bf953f] text-[#011612] px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(191,149,63,0.3)]"
                >
                  Book Private Consultation
                </a>
                <a 
                  href="#collections" 
                  className="border border-[#bf953f] text-[#bf953f] px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#bf953f]/10 transition-colors duration-300"
                >
                  View Catalogue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
