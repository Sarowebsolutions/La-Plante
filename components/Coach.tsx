
import React from 'react';

const Coach: React.FC = () => {
  return (
    <section className="py-24 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Coach Image Side */}
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-48 md:w-80 h-48 md:h-80 bg-lime/5 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="relative flex justify-center">
              <img 
                alt="Justin La Plante Professional Portrait" 
                className="rounded-[2.5rem] grayscale w-full max-w-[500px] aspect-[4/5] object-cover shadow-2xl transition-all duration-700 group-hover:grayscale-0" 
                src="https://images.squarespace-cdn.com/content/v1/68af405d3f98a47a7e179287/f6bda766-22af-4f15-99a7-a36005fe54b6/2021+1+2+Justin+L+Headshot.jpg?format=1000w"
              />
              <div className="absolute -bottom-6 -right-4 lg:-right-8 glass-card p-6 md:p-8 rounded-3xl shadow-xl">
                <span className="text-4xl md:text-5xl font-bold text-lime font-grotesk">15+</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-2 font-bold">Years CSCS Certified</p>
              </div>
            </div>
          </div>

          {/* Coach Content Side */}
          <div className="text-center lg:text-left mt-10 lg:mt-0">
            <span className="text-lime font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Meet Your Coach</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 uppercase leading-none font-grotesk">
              The <span className="italic text-lime">Coach</span>
            </h2>
            <div className="space-y-8 text-base md:text-lg text-gray-400 font-light leading-relaxed mx-auto lg:mx-0 max-w-xl">
              <p>Justin La Plante specializes in helping high-performers look and feel like elite athletes. His approach bypasses "fitness influencer" fads in favor of clinical, peer-reviewed methodology.</p>
              <p>Whether you're overcoming injury or preparing for a competitive season, the programming is built around your physiological data points, not guesswork.</p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-16">
              <div>
                <h4 className="text-lime font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Philosophy</h4>
                <p className="text-sm font-medium text-gray-300">Sustainable biomechanics over high-intensity burnout.</p>
              </div>
              <div>
                <h4 className="text-lime font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Mission</h4>
                <p className="text-sm font-medium text-gray-300">Building resilient bodies for San Francisco's best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
