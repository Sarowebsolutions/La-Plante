
import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is science-based coaching?',
    a: 'It means every movement and rep range is backed by peer-reviewed sports science. We focus on mechanical tension, metabolic stress, and physiological data rather than "feeling the burn" or random routines.'
  },
  {
    q: 'Do you offer remote programming?',
    a: 'Yes. We utilize a high-end coaching platform where you receive your personalized daily workouts, video demos, and track your progress metrics with weekly check-ins.'
  },
  {
    q: 'How often should I train?',
    a: 'Optimal frequency depends on your recovery capacity and goals. Typically, 3-4 focused sessions per week yields the best long-term results without overtraining.'
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6 md:px-20">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6 italic font-grotesk">
            Common <span className="text-lime">Questions</span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">Everything you need to know about the elite performance process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass-card rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-300 ${openIdx === i ? 'ring-1 ring-lime/20' : ''}`}
            >
              <button 
                className="flex justify-between items-center w-full p-8 md:p-10 text-left outline-none group"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight font-grotesk group-hover:text-lime transition-colors">
                  {faq.q}
                </h4>
                <span className={`material-symbols-outlined transition-transform text-lime text-2xl md:text-3xl ${openIdx === i ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${openIdx === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-8 md:px-10 pb-8 md:pb-10 text-gray-400 leading-relaxed font-light text-base md:text-lg border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
