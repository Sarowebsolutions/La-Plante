
import React from 'react';

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5L89.641 27.5V72.5L50 95L10.359 72.5V27.5L50 5Z" fill="#1A1A1A" stroke="white" strokeWidth="2"/>
    <path d="M50 5L89.641 27.5V72.5L50 95L10.359 72.5V27.5L50 5Z" fill="#0A0A0A"/>
    <text x="25" y="65" fill="white" fontSize="40" fontWeight="bold" fontFamily="Inter">L</text>
    <text x="50" y="65" fill="white" fontSize="40" fontWeight="bold" fontFamily="Inter">P</text>
    <path d="M40 50C40 50 45 25 65 25C65 25 65 45 45 55L40 50Z" fill="#CCFF00" />
    <path d="M40 50L65 25" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-[100] px-4 md:px-16 py-6 md:py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-6 md:px-10 py-4 rounded-2xl pointer-events-auto">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] font-grotesk whitespace-nowrap">La Plante</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 xl:space-x-12 text-[11px] font-bold uppercase tracking-[0.25em]">
          <a className="hover:text-lime transition-colors" href="#philosophy">Philosophy</a>
          <a className="hover:text-lime transition-colors" href="#programs">Programs</a>
          <a className="hover:text-lime transition-colors" href="#results">Results</a>
          <a className="hover:text-lime transition-colors" href="#faq">FAQ</a>
          <button className="bg-lime text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-all text-xs">
            Consultation
          </button>
        </div>

        <button className="lg:hidden w-10 h-10 flex items-center justify-center text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
