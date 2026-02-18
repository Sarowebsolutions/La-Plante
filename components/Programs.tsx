
import React from 'react';

const programs = [
  {
    icon: 'fitness_center',
    title: '1-on-1 Elite',
    description: 'Clinical personal training focusing on progressive overload and precision form in SF.',
    link: 'Explore Program'
  },
  {
    icon: 'data_thresholding',
    title: 'Custom Hybrid',
    description: 'The perfect blend of in-person assessment and digital daily programming via our custom app.',
    link: 'Popular Choice',
    highlight: true
  },
  {
    icon: 'nutrition',
    title: 'Bio-Nutrition',
    description: 'Macro-optimization based on your actual activity levels and metabolic feedback.',
    link: 'Learn More'
  }
];

const Programs: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-lime font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Offerings</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase font-grotesk">
              Specialized <br className="hidden md:block" /> <span className="italic text-lime">Programs</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-gray-400 max-w-xs mb-6 font-light">Precision-engineered coaching designed for serious results.</p>
            <div className="h-1.5 w-24 bg-lime ml-0 md:ml-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((program, idx) => (
            <div 
              key={idx}
              className={`glass-card p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] group transition-all duration-700 flex flex-col h-full 
                ${program.highlight ? 'border-lime/30 border-2 scale-[1.02] shadow-[0_0_40px_rgba(204,255,0,0.1)]' : 'hover:bg-lime hover:scale-[1.02]'}`}
            >
              <span className={`material-symbols-outlined text-5xl mb-10 transition-colors 
                ${program.highlight ? 'text-lime' : 'text-lime group-hover:text-black'}`}>
                {program.icon}
              </span>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 uppercase font-grotesk transition-colors
                ${program.highlight ? 'text-white' : 'group-hover:text-black'}`}>
                {program.title}
              </h3>
              <p className={`mb-10 leading-relaxed font-light flex-grow transition-colors
                ${program.highlight ? 'text-gray-400' : 'text-gray-400 group-hover:text-black/80'}`}>
                {program.description}
              </p>
              <a 
                className={`flex items-center gap-2 font-bold uppercase text-[10px] tracking-[0.3em] transition-colors
                  ${program.highlight ? 'text-lime' : 'group-hover:text-black'}`}
                href="#"
              >
                {program.link} <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
