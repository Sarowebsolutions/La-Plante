
import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'Oleg A.',
    role: 'Tech Founder',
    quote: '"Justin works with you, as opposed to making you work his program. He developed workouts that fit into my insane work schedule."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKy4SZfIrN0rzoG9rCh6JhgxN88QZ1MCEaawwlLRJsXVrUa7fI491TOKgEm0IkEsscSxq8hReV9I6-SpZNM-1PS--Pig7N1XWTx6zp38VBaGtVTjR_5ErhnxuXYv-ceFj-dr-F1PtCR8iuLFWHc6s2BLAIqDcS5Lrpr1oGs65yeLz-b0F-XlM2np5ArHf-WvMRCRJv3XnqSOegPJ8v6j_mTuV4fLLc4xmOi11LIbaCSYcKAFYm1iwZNEFD_086OuxcBC14ct1P-Q'
  },
  {
    name: 'Lindsay C.',
    role: 'Director of Ops',
    quote: '"I seem to be aging in reverse and people tell me all the time! Honestly in the best shape of my entire life."',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAjf_5vLVpu5_xxhPDQ28FMLqcdGcdcs8swXoISuj4kcLIFQsEvujlnJAD24tktiLCRN3VC0XeixdfSx2c3cJy7w4eIvWtohd-s3o4NXM14Ms3Yp9iSZHAmy4ecKKO_nbDenWXYKs1qbvNFjsWxAJAHamRKZ-BcvfZ4wY8hXFJjHaZC02IeJZ_rK5mQUMceh7lgbLCtPIWOgaSBh9wTkfzfurmuNZPNIQcP9mGwir0MI8P2yVtlD_tc5JyuHQrlgRgTnOSbXbjTQ'
  }
];

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-6xl font-bold uppercase leading-none mb-10 font-grotesk">
              Built in <br/><span className="text-lime italic">Real Life</span>
            </h2>
            <p className="text-gray-400 mb-10 font-light leading-relaxed">
              Stories of transformation from professionals, parents, and athletes who demand clinical excellence.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <span className="material-symbols-outlined transition-transform group-active:-translate-x-1">west</span>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full bg-lime text-black flex items-center justify-center hover:scale-110 transition-transform group"
              >
                <span className="material-symbols-outlined font-bold transition-transform group-active:translate-x-1">east</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="min-w-[85vw] md:min-w-[450px] glass-card p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] snap-start flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-10">
                      <img alt={t.name} className="w-16 h-16 rounded-full grayscale object-cover" src={t.img} />
                      <div>
                        <h4 className="font-bold text-xl font-grotesk">{t.name}</h4>
                        <span className="text-[10px] text-lime uppercase tracking-[0.3em] font-bold">{t.role}</span>
                      </div>
                    </div>
                    <p className="text-xl italic text-gray-300 leading-relaxed font-light font-grotesk">
                      {t.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
