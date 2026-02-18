
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="High-performance gym setting" 
          className="w-full h-full object-cover grayscale opacity-25" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIm3rjzkKLDcKqtoYuDGozE46mghlmYhEGnwQIQOYthYPLPomp2MpOYVDCjDtNYl6Qsnhb86PG-sYgGj15ciBDOLZtqFULdzM5tvnfdmncyLmH-sqKQI5ojcrigBkkUTEliLx8U-Elo2G2jH_j_wySYenXybENgvIEezzHdJDayAkR8OKoSVpLN5WuAG2VJdTW6aVje3PJcPAcHq5H4TO5v7IaqivQzjf499_DFzlAZym6OOtnv0e3beXDW4gHCWir-M00Pdlrkw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/10 via-obsidian/80 to-obsidian"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center animate-fade-in-up">
        <span className="text-lime font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 block">
          Elite Training SF • Since 2011
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-10 uppercase font-grotesk">
          A Smarter Way to <span className="italic text-lime">Train.</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Elite coaching for those who demand more. Justin La Plante, CSCS, combines 15+ years of clinical exercise science with a boutique training experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
          <button className="bg-lime text-black font-bold px-10 py-5 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all min-w-[240px] uppercase tracking-widest text-sm">
            Book Free Consult
          </button>
          <a 
            href="#programs" 
            className="flex items-center gap-3 font-bold border-b-2 border-white/10 pb-1 hover:border-lime transition-all group tracking-widest text-sm uppercase"
          >
            Explore Methodology
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
