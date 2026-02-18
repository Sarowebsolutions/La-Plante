import React, { useState, useRef } from 'react';

const Results: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="results" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-lime font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Real Results</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase italic leading-none font-grotesk">
            Visual <span className="text-lime">Proof</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Slider */}
          <div 
            ref={sliderRef}
            className="relative aspect-square md:aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-ew-resize group shadow-2xl shadow-black/80"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseDown={(e) => e.preventDefault()}
          >
            {/* Before (Bottom) */}
            <img 
              alt="Transformation Before" 
              className="absolute inset-0 w-full h-full object-cover grayscale" 
              src="https://images.lucidapp.com/lucidspark/e05b6305-6453-48b4-8395-8854897f7762/image.png"
            />
            {/* After (Top with clip) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img 
                alt="Transformation After" 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://images.lucidapp.com/lucidspark/3c3866b1-6a08-4137-b957-611267868350/image.png"
              />
            </div>
            
            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-lime z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-lime rounded-full flex items-center justify-center text-black font-bold shadow-xl">
                <span className="material-symbols-outlined select-none">unfold_more</span>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 z-30 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold border border-white/10 select-none">Before</div>
            <div className="absolute bottom-6 right-6 z-30 bg-lime text-black px-4 py-2 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold select-none">After</div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight font-grotesk">
              12 Weeks: <br className="hidden md:block" />Body Composition Shift
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              This client achieved a drastic reduction in visceral fat while maximizing functional hypertrophy. Our protocols prioritized mechanical tension and metabolic conditioning to create a resilient, elite physique.
            </p>
            <div className="space-y-5">
              {[
                'Custom Hypertrophy Protocol',
                'Metabolic Conditioning',
                'Bio-Individual Nutrition'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-lime text-xl">check_circle</span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{feature}</span>
                </div>
              ))}
            </div>
            <button className="bg-lime text-black font-bold px-10 py-5 rounded-full hover:scale-105 transition-all text-sm uppercase tracking-[0.2em] mt-4">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;