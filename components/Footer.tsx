
import React from 'react';

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5L89.641 27.5V72.5L50 95L10.359 72.5V27.5L50 5Z" fill="#1A1A1A" stroke="white" strokeWidth="2"/>
    <path d="M50 5L89.641 27.5V72.5L50 95L10.359 72.5V27.5L50 5Z" fill="#0A0A0A"/>
    <text x="25" y="65" fill="white" fontSize="40" fontWeight="bold" fontFamily="Inter">L</text>
    <text x="50" y="65" fill="white" fontSize="40" fontWeight="bold" fontFamily="Inter">P</text>
    <path d="M40 50C40 50 45 25 65 25C65 25 65 45 45 55L40 50Z" fill="#CCFF00" />
    <path d="M40 50L65 25" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 md:pt-40 pb-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-24 md:mb-40">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-10">
              <Logo />
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] font-grotesk">La Plante</span>
            </div>
            <p className="text-gray-500 max-w-sm text-lg md:text-xl leading-relaxed font-light">
              Elevating the standard of personal training through rigorous science and bespoke attention. Join the elite in San Francisco.
            </p>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white">Navigation</h5>
            <ul className="space-y-6 text-gray-500 font-medium text-sm">
              <li><a className="hover:text-lime transition-colors" href="#hero">Home</a></li>
              <li><a className="hover:text-lime transition-colors" href="#programs">Coaching</a></li>
              <li><a className="hover:text-lime transition-colors" href="#results">Results</a></li>
              <li><a className="hover:text-lime transition-colors" href="#location">Studio</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white">Contact</h5>
            <p className="text-gray-500 mb-4 font-light text-base md:text-lg">justin@laplantefitness.com</p>
            <p className="text-gray-500 mb-10 font-light text-base md:text-lg">(415) 555-0123</p>
            <div className="flex gap-6">
              <a 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime hover:text-black transition-all hover:border-lime group" 
                href="#"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 md:pt-16 border-t border-white/10 text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold gap-6">
          <p>© 2024 La Plante Fitness. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
