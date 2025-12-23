
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="bespoke" className="py-24 px-6 bg-[#011612] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-[#bf953f] text-xs uppercase tracking-[0.8em]">Exclusive Experience</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-8">Bespoke Consultations</h2>
          <div className="h-[1px] w-32 gold-bg mx-auto mb-8"></div>
          <p className="text-white/60 font-light text-lg tracking-wide max-w-2xl mx-auto leading-relaxed">
            Invite royalty into your collection. Schedule a private viewing in our Jaipur atelier or a virtual bespoke consultation with Apoorv Khandelwal.
          </p>
        </div>

        <form className="space-y-6 text-left max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f]">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-[#bf953f] py-3 text-white transition-all outline-none" placeholder="Mr./Ms. Royal Guest" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f]">Contact Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-[#bf953f] py-3 text-white transition-all outline-none" placeholder="guest@highsociety.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f]">Subject of Interest</label>
            <select className="w-full bg-transparent border-b border-white/20 focus:border-[#bf953f] py-3 text-white transition-all outline-none appearance-none cursor-pointer">
              <option className="bg-[#011612]">Bridal Heritage Collection</option>
              <option className="bg-[#011612]">High Jewelry Commission</option>
              <option className="bg-[#011612]">Private Atelier Visit</option>
              <option className="bg-[#011612]">General Inquiry</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f]">Personal Message</label>
            <textarea rows={3} className="w-full bg-transparent border-b border-white/20 focus:border-[#bf953f] py-3 text-white transition-all outline-none resize-none" placeholder="Tell us about your requirements..."></textarea>
          </div>
          <div className="text-center pt-8">
            <button type="submit" className="gold-bg text-[#011612] px-16 py-5 font-bold uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all shadow-2xl">
              Request Exclusive Invitation
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div>
            <h4 className="text-[#bf953f] text-xs uppercase tracking-widest mb-4 font-bold">Location</h4>
            <p className="text-white/40 text-sm">Johari Bazaar, Pink City<br/>Jaipur, Rajasthan, India</p>
          </div>
          <div>
            <h4 className="text-[#bf953f] text-xs uppercase tracking-widest mb-4 font-bold">Contact</h4>
            <p className="text-white/40 text-sm">concierge@viraasatgems.com<br/>+91 141 234XXXX</p>
          </div>
          <div>
            <h4 className="text-[#bf953f] text-xs uppercase tracking-widest mb-4 font-bold">Follow Our Journey</h4>
            <div className="flex justify-center space-x-6 mt-4">
              {['Instagram', 'Pinterest', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-white/20 hover:text-[#bf953f] text-xs uppercase tracking-widest transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
