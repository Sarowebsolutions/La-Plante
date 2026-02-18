import React from 'react';

const Coach: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Coach Image Side */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-48 md:w-80 h-48 md:h-80 bg-lime/10 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="relative flex justify-center">
              <img 
                alt="Justin La Plante - Founder & Head Coach" 
                className="rounded-[2.5rem] grayscale w-full max-w-[500px] aspect-[4/5] object-cover shadow-2xl transition-all duration-700 group-hover:grayscale-0 border border-white/10" 
                src="https://images.squarespace-cdn.com/content/v1/51b14298e4b09b0b63304407/1591825167812-07H6E0X3Q9P6V9Y9P3Y3/Justin+La+Plante.jpg"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-3xl hidden md:block">
                <p className="text-lime font-bold text-2xl font-grotesk">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years CSCS</p>
              </div>
            </div>
          </div>

          {/* Coach Text Side */}
          <div className="order-1 lg:order-2">
            <span className="text-lime font-bold tracking-[0.4em] uppercase text-xs mb-8 block">The Architect</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-10 leading-none font-grotesk">
              Justin <br className="hidden md:block" /> <span className="italic text-white">La Plante</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Justin is a <span className="text-white font-medium">Certified Strength & Conditioning Specialist (CSCS)</span> with a clinical background in exercise science. He doesn't believe in "cookie-cutter" fitness.
              </p>
              <p>
                Since founding La Plante Fitness in 2011, he has worked with hundreds of high-performing executives and athletes in San Francisco to rebuild their bodies through data-driven protocols and biomechanical precision.
              </p>
              <p className="italic border-l-2 border-lime pl-6 text-white font-grotesk py-2">
                "My goal isn't just to make you sweat; it's to optimize how your body functions at its highest level."
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Specialization</h4>
                <p className="text-gray-400 text-sm">Hypertrophy & Mobility</p>
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">Education</h4>
                <p className="text-gray-400 text-sm">Clinical Exercise Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;